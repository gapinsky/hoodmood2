export default function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="min-w-0 rounded-md border border-foreground/10 bg-foreground/2.5 p-4 sm:p-5">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-2 wrap-anywhere text-sm leading-6">
        {href ? (
          <a href={href} className="ui-focus-ring rounded-sm underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground">
            {value}
          </a>
        ) : value}
      </p>
    </div>
  );
}
