import type { ReactNode } from "react";

export default function Card({
  title,
  children,
  actions,
}: {
  title?: string;
  children: ReactNode;
  actions?: ReactNode; // optional row of buttons/links
}) {
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-200 rounded-2xl p-6 w-full max-w-md mx-auto">
      {title && <h1 className="text-2xl font-semibold tracking-tight mb-4">{title}</h1>}
      <div className="space-y-4">{children}</div>
      {actions && <div className="mt-6 flex items-center gap-3">{actions}</div>}
    </div>
  );
}
