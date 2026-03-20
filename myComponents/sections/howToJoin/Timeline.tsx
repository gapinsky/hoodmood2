"use client";

import { cn } from "@/lib/utils";

import { steps } from "./data";

export default function Timeline() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="mx-auto  px-4">
        {/* MOBILE / TABLET: pionowy timeline na środku */}
        <div className="relative md:hidden">
          {/* central line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black dark:bg-white" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={step.id} className="relative min-h-[120px]">
                  {/* dot */}
                  <div className="absolute left-1/2 top-3 z-10 h-3 w-3 -translate-x-1/2 rounded-full border bg-black dark:bg-white" />

                  {/* content row */}
                  <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                    {/* left content */}
                    <div className={cn("pt-0", !isLeft && "invisible")}>
                      <div className="text-right">
                        <p className="text-sm font-semibold ">
                          {step.id}. {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground ">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* center spacer matching dot column */}
                    <div className="w-6" />

                    {/* right content */}
                    <div className={cn("pt-0", isLeft && "invisible")}>
                      <div className="text-left">
                        <p className="text-sm font-semibold text-white">
                          {step.id}. {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground ">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP: poziomy timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* top line */}
            <div className="absolute left-0 right-0 top-3 h-px bg-black/70 dark:bg-white/80" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.id} className="relative pt-8">
                  {/* dot */}
                  <div className="absolute left-1/2 top-3 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black bg-black dark:border-white dark:bg-white" />

                  <div className="text-center">
                    <p className="text-base font-semibold ">
                      {step.id}. {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 opacity-90 text-muted-foreground ">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
