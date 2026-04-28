"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

type HoverCardTriggerProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Trigger
>;
type HoverCardTriggerClickEvent = Parameters<
  NonNullable<HoverCardTriggerProps["onClick"]>
>[0];
type HoverCardTriggerKeyDownEvent = Parameters<
  NonNullable<HoverCardTriggerProps["onKeyDown"]>
>[0];

type HoverCardContextValue = {
  contentRefs: React.MutableRefObject<Set<HTMLElement>>;
  isTouchLike: boolean;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const HoverCardContext = React.createContext<HoverCardContextValue | null>(null);

let activeHoverCardId: string | null = null;
const activeHoverCardListeners = new Set<(id: string | null) => void>();

const setActiveHoverCardId = (id: string | null) => {
  activeHoverCardId = id;

  activeHoverCardListeners.forEach((listener) => {
    listener(id);
  });
};

function useIsTouchLike() {
  const [isTouchLike, setIsTouchLike] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchLike(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isTouchLike;
}

function composeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      (ref as React.MutableRefObject<T | null>).current = node;
    });
  };
}

function HoverCard({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  const hoverCardId = React.useId();
  const isTouchLike = useIsTouchLike();
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;
  const triggerRef = React.useRef<HTMLElement | null>(null);
  const contentRefs = React.useRef(new Set<HTMLElement>());

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  React.useEffect(() => {
    if (!isTouchLike || !open) {
      if (activeHoverCardId === hoverCardId) {
        setActiveHoverCardId(null);
      }

      return;
    }

    setActiveHoverCardId(hoverCardId);

    return () => {
      if (activeHoverCardId === hoverCardId) {
        setActiveHoverCardId(null);
      }
    };
  }, [hoverCardId, isTouchLike, open]);

  React.useEffect(() => {
    if (!isTouchLike) {
      return;
    }

    const handleActiveChange = (id: string | null) => {
      if (id !== hoverCardId && open) {
        handleOpenChange(false);
      }
    };

    activeHoverCardListeners.add(handleActiveChange);

    return () => {
      activeHoverCardListeners.delete(handleActiveChange);
    };
  }, [handleOpenChange, hoverCardId, isTouchLike, open]);

  React.useEffect(() => {
    if (!isTouchLike || !open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      const isInsideTrigger = triggerRef.current?.contains(target) ?? false;
      const isInsideContent = Array.from(contentRefs.current).some((node) =>
        node.contains(target),
      );

      if (!isInsideTrigger && !isInsideContent) {
        handleOpenChange(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleOpenChange(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOpenChange, isTouchLike, open]);

  const contextValue = React.useMemo<HoverCardContextValue>(
    () => ({
      contentRefs,
      isTouchLike,
      onOpenChange: handleOpenChange,
      open,
      triggerRef,
    }),
    [handleOpenChange, isTouchLike, open],
  );

  return (
    <HoverCardContext.Provider value={contextValue}>
      <HoverCardPrimitive.Root
        open={open}
        onOpenChange={handleOpenChange}
        {...props}
      />
    </HoverCardContext.Provider>
  );
}

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerProps
>(({ onClick, onKeyDown, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);

  const handleClick = React.useCallback(
    (event: HoverCardTriggerClickEvent) => {
      onClick?.(event);

      if (event.defaultPrevented || !context?.isTouchLike) {
        return;
      }

      event.preventDefault();
      context.onOpenChange(!context.open);
    },
    [context, onClick],
  );

  const handleKeyDown = React.useCallback(
    (event: HoverCardTriggerKeyDownEvent) => {
      onKeyDown?.(event);

      if (event.defaultPrevented || !context) {
        return;
      }

      if (event.key === "Escape" && context.open) {
        event.preventDefault();
        context.onOpenChange(false);
      }
    },
    [context, onKeyDown],
  );

  return (
    <HoverCardPrimitive.Trigger
      ref={composeRefs(ref, (node) => {
        if (context) {
          context.triggerRef.current = node;
        }
      })}
      aria-expanded={context?.open}
      data-touch-mode={context?.isTouchLike ? "true" : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
});
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "end", id, sideOffset = 4, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);
  const generatedId = React.useId();
  const contentId = id ?? generatedId;
  const contentNodeRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const node = contentNodeRef.current;

    if (!context || !node) {
      return;
    }

    context.contentRefs.current.add(node);

    return () => {
      context.contentRefs.current.delete(node);
    };
  }, [context, contentId]);

  return (
    <HoverCardPrimitive.Content
      ref={composeRefs(ref, (node) => {
        contentNodeRef.current = node;
      })}
      id={contentId}
      role="tooltip"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "ui-floating z-50 w-56 rounded-lg p-4 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-hover-card-content-transform-origin]",
        className,
      )}
      {...props}
    />
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
