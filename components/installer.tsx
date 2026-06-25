"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, Check, ChefHat, Database, Store, Coffee } from "lucide-react";
import clsx from "clsx";
import { Field, OptionCard, StepIndicator, TextInput } from "@/components/installer/ui";
import { type DataProvider, isProviderConfigured } from "@/lib/providers";
import {
  businessTypes,
  canFinish,
  clearState,
  copy,
  defaultState,
  isStepValid,
  languages,
  loadSavedState,
  providers,
  saveState,
  type InstallState,
  type Language
} from "@/lib/installer";

const TOTAL_STEPS = 4;
const STEP_LABEL_KEYS = ["stepLanguage", "stepBusiness", "stepCredentials", "stepProvider"] as const;

export function Installer() {
  const [form, setForm] = useState<InstallState>(defaultState);
  const [step, setStep] = useState(0);
  const [installed, setInstalled] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const { installed: wasInstalled, state } = loadSavedState();
    setForm(state);
    setInstalled(wasInstalled);
  }, []);

  const t = copy[form.language];
  const stepLabels = STEP_LABEL_KEYS.map((key) => t[key]);
  const providerConfigured = useMemo(() => isProviderConfigured(form.provider), [form.provider]);
  const stepValid = isStepValid(step, form);

  function update<K extends keyof InstallState>(key: K, value: InstallState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function next() {
    if (!stepValid) return;
    setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
  }

  function back() {
    setStep((current) => Math.max(current - 1, 0));
  }

  function finish() {
    if (!canFinish(form)) return;
    setSubmitting(true);
    saveState(form, true);
    window.setTimeout(() => {
      setSubmitting(false);
      setInstalled(true);
    }, 600);
  }

  function restart() {
    clearState();
    setForm((current) => ({ ...defaultState, language: current.language }));
    setInstalled(false);
    setStep(0);
  }

  if (installed) {
    return <InstalledView form={form} providerConfigured={providerConfigured} labels={t} onRestart={restart} />;
  }

  return (
    <main className="min-h-screen bg-cream px-4 py-8 text-ink sm:px-6 lg:py-12">
      <div className="mx-auto w-full max-w-3xl">
        <Header title={t.appTitle} subtitle={t.appSubtitle} />

        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5 shadow-soft sm:p-8">
          <StepIndicator steps={TOTAL_STEPS} current={step} labels={stepLabels} />

          <div className="mt-8">
            {step === 0 ? <StepLanguage form={form} t={t} onSelect={(value) => update("language", value)} /> : null}
            {step === 1 ? <StepBusiness form={form} t={t} onBusiness={update} /> : null}
            {step === 2 ? <StepCredentials form={form} t={t} onChange={update} /> : null}
            {step === 3 ? <StepProvider form={form} t={t} providerConfigured={providerConfigured} onSelect={(value) => update("provider", value)} /> : null}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:text-stone-300 disabled:hover:bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </button>

            {step < TOTAL_STEPS - 1 ? (
              <button
                type="button"
                onClick={next}
                disabled={!stepValid}
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-stone-300"
              >
                {t.next}
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={finish}
                disabled={!canFinish(form) || submitting}
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-stone-300"
              >
                {submitting ? t.installing : t.finish}
                {!submitting ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-saffron">
        <ChefHat className="h-6 w-6" />
      </span>
      <div>
        <h1 className="text-2xl font-black tracking-tight sm:text-3xl">{title}</h1>
        <p className="mt-0.5 text-sm text-stone-600">{subtitle}</p>
      </div>
    </header>
  );
}

function StepLanguage({
  form,
  t,
  onSelect
}: {
  form: InstallState;
  t: (typeof copy)[Language];
  onSelect: (value: Language) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-ink">{t.language}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {languages.map((item) => (
          <OptionCard
            key={item.id}
            active={form.language === item.id}
            flag={item.flag}
            label={item.label}
            onClick={() => onSelect(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function StepBusiness({
  form,
  t,
  onBusiness
}: {
  form: InstallState;
  t: (typeof copy)[Language];
  onBusiness: <K extends keyof InstallState>(key: K, value: InstallState[K]) => void;
}) {
  return (
    <div className="grid gap-6">
      <div>
        <p className="mb-3 text-sm font-bold text-ink">{t.businessType}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {businessTypes.map((item) => (
            <OptionCard
              key={item.id}
              active={form.businessType === item.id}
              icon={item.id === "restaurant" ? <Store className="h-5 w-5" /> : <Coffee className="h-5 w-5" />}
              label={t[item.labelKey]}
              onClick={() => onBusiness("businessType", item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepCredentials({
  form,
  t,
  onChange
}: {
  form: InstallState;
  t: (typeof copy)[Language];
  onChange: <K extends keyof InstallState>(key: K, value: InstallState[K]) => void;
}) {
  return (
    <div className="grid gap-5">
      <Field label={t.restaurantName} htmlFor="restaurantName">
        <TextInput
          id="restaurantName"
          value={form.restaurantName}
          placeholder={t.restaurantName}
          onChange={(value) => onChange("restaurantName", value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.adminUser} htmlFor="username">
          <TextInput
            id="username"
            value={form.username}
            placeholder={t.adminUser}
            onChange={(value) => onChange("username", value)}
          />
        </Field>

        <Field label={t.password} hint={t.passwordHint} htmlFor="password">
          <TextInput
            id="password"
            type="password"
            value={form.password}
            placeholder={t.password}
            onChange={(value) => onChange("password", value)}
          />
        </Field>
      </div>
    </div>
  );
}

function StepProvider({
  form,
  t,
  providerConfigured,
  onSelect
}: {
  form: InstallState;
  t: (typeof copy)[Language];
  providerConfigured: boolean;
  onSelect: (value: DataProvider) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold text-ink">{t.provider}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {providers.map((item) => {
          const configured = isProviderConfigured(item.id);
          return (
            <OptionCard
              key={item.id}
              active={form.provider === item.id}
              icon={<Database className="h-5 w-5" />}
              label={item.label}
              description={configured ? t.providerReady : t.providerMissing}
              badge={configured ? "ready" : "missing"}
              onClick={() => onSelect(item.id)}
            />
          );
        })}
      </div>

      <div className={clsx("mt-5 flex items-center gap-3 rounded-xl p-4", providerConfigured ? "bg-emerald-50" : "bg-stone-100")}>
        <Database className={clsx("h-5 w-5 shrink-0", providerConfigured ? "text-emerald-600" : "text-ember")} />
        <p className="text-sm font-semibold text-ink">
          {form.provider} · {providerConfigured ? t.ready : t.missing}
        </p>
      </div>
    </div>
  );
}

function InstalledView({
  form,
  providerConfigured,
  labels,
  onRestart
}: {
  form: InstallState;
  providerConfigured: boolean;
  labels: (typeof copy)[Language];
  onRestart: () => void;
}) {
  return (
    <main className="min-h-screen bg-cream px-4 py-8 text-ink sm:px-6 lg:py-12">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-black/5 bg-white p-7 shadow-soft sm:p-9">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Check className="h-8 w-8" />
        </span>
        <h2 className="mt-6 text-3xl font-black tracking-tight">{labels.installed}</h2>
        <p className="mt-2 text-stone-600">
          {form.restaurantName || "Sistema Restaurante"} ·{" "}
          {form.businessType === "restaurant" ? labels.restaurant : labels.cafe}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Metric label={labels.metricProvider} value={form.provider} />
          <Metric
            label={labels.metricConnection}
            value={providerConfigured ? labels.ready : labels.missing}
          />
          <Metric label={labels.metricUser} value={form.username || "admin"} />
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
          >
            {labels.openPanel}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 px-5 py-3 text-sm font-bold text-ink transition hover:bg-stone-100"
          >
            {labels.restart}
          </button>
        </div>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-stone-100 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-stone-500">{label}</p>
      <p className="mt-2 truncate text-sm font-black">{value}</p>
    </div>
  );
}
