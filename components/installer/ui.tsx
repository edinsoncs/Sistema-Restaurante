"use client";

import clsx from "clsx";

export function Field({
  label,
  hint,
  htmlFor,
  children
}: {
  label: string;
  hint?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-xs text-stone-500">{hint}</p> : null}
    </div>
  );
}

export function TextInput({
  id,
  value,
  type = "text",
  placeholder,
  onChange
}: {
  id?: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-base font-semibold text-ink outline-none transition focus:border-ink"
    />
  );
}

export function OptionCard({
  active,
  icon,
  flag,
  label,
  description,
  badge,
  onClick
}: {
  active: boolean;
  icon?: React.ReactNode;
  flag?: string;
  label: string;
  description?: string;
  badge?: "ready" | "missing" | null;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex w-full items-center gap-3 rounded-xl border p-4 text-left transition",
        active ? "border-ink bg-ink text-white shadow-soft" : "border-stone-200 bg-white text-ink hover:border-stone-400"
      )}
    >
      {flag ? (
        <span className="text-2xl leading-none" aria-hidden>
          {flag}
        </span>
      ) : icon ? (
        <span
          className={clsx(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            active ? "bg-white/12 text-saffron" : "bg-stone-100 text-ember"
          )}
        >
          {icon}
        </span>
      ) : null}
      <span className="min-w-0 flex-1">
        <span className="block font-bold">{label}</span>
        {description ? (
          <span className={clsx("mt-0.5 block truncate text-sm", active ? "text-white/70" : "text-stone-500")}>
            {description}
          </span>
        ) : null}
      </span>
      {badge ? (
        <span
          className={clsx(
            "h-2.5 w-2.5 shrink-0 rounded-full",
            badge === "ready" ? "bg-emerald-500" : "bg-stone-300"
          )}
        />
      ) : null}
    </button>
  );
}

export function StepIndicator({
  steps,
  current,
  labels
}: {
  steps: number;
  current: number;
  labels: string[];
}) {
  return (
    <ol className="flex items-center gap-2">
      {Array.from({ length: steps }).map((_, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <li key={index} className="flex flex-1 items-center gap-2">
            <div className="flex w-full items-center gap-2">
              <span
                className={clsx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition",
                  active
                    ? "bg-ink text-white"
                    : done
                      ? "bg-saffron text-ink"
                      : "bg-stone-200 text-stone-500"
                )}
              >
                {done ? "✓" : index + 1}
              </span>
              <span
                className={clsx(
                  "hidden truncate text-sm font-semibold sm:block",
                  active ? "text-ink" : done ? "text-ink/70" : "text-stone-400"
                )}
              >
                {labels[index]}
              </span>
            </div>
            {index < steps - 1 ? (
              <span className={clsx("h-px flex-1", done ? "bg-saffron" : "bg-stone-200")} />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
