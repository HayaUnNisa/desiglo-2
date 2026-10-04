import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type CookiePreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "desiglo-cookie-preferences";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    if (!preferencesOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusable = () =>
      Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled]), a[href]",
        ) || [],
      );
    focusable()[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreferencesOpen(false);
      }
      if (e.key === "Tab") {
        const all = focusable(),
          first = all[0],
          last = all[all.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      previous?.focus();
    };
  }, [preferencesOpen]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setVisible(true);
    } else {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;

        setPreferences({
          ...defaultPreferences,
          ...parsed,
          necessary: true,
        });
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
      }
    }

    const openSettings = () => {
      const latest = localStorage.getItem(STORAGE_KEY);

      if (latest) {
        try {
          const parsed = JSON.parse(latest);

          setPreferences({
            ...defaultPreferences,
            ...parsed,
            necessary: true,
          });
        } catch {
          // Keep current values.
        }
      }

      setPreferencesOpen(true);
    };

    window.addEventListener("desiglo:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("desiglo:open-cookie-settings", openSettings);
    };
  }, []);

  function storePreferences(next: CookiePreferences) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

    setPreferences(next);
    setVisible(false);
    setPreferencesOpen(false);

    window.dispatchEvent(
      new CustomEvent("desiglo:cookie-preferences-updated", {
        detail: next,
      }),
    );
  }

  function acceptAll() {
    storePreferences({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    });
  }

  function rejectNonEssential() {
    storePreferences({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    });
  }

  function savePreferences() {
    storePreferences({
      ...preferences,
      necessary: true,
    });
  }

  return (
    <>
      {/* Initial banner */}
      {visible && (
        <div
          role="region"
          aria-label="Cookie notice"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-5xl rounded-2xl border border-[var(--ink)]/[0.1] bg-[var(--surface)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold text-[var(--ink)]">
                Your cookie preferences
              </h2>

              <p className="mt-2 text-sm leading-7 text-[var(--muted)]/65">
                Desiglo uses necessary browser storage to remember your
                preferences. Optional categories remain under your control.
                Learn more in the{" "}
                <Link
                  to="/cookie-policy"
                  className="font-medium text-[var(--accent)] hover:text-[var(--ink)]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-[var(--ink)]/10 px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--ink)]/[0.05]"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={() => setPreferencesOpen(true)}
                className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/5 px-4 py-2.5 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
              >
                Manage Preferences
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-hover)]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preference modal */}
      {preferencesOpen && (
        <div
          className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setPreferencesOpen(false);
            }
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--ink)]/[0.1] bg-[var(--surface)] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start justify-between border-b border-[var(--ink)]/[0.07] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Privacy
                </p>

                <h2
                  id="cookie-settings-title"
                  className="mt-2 text-2xl font-semibold text-[var(--ink)]"
                >
                  Cookie Settings
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setPreferencesOpen(false)}
                aria-label="Close cookie settings"
                className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--ink)]/[0.08] text-[var(--muted)] transition hover:bg-[var(--ink)]/[0.05] hover:text-[var(--ink)]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="divide-y divide-white/[0.07] px-6">
              <PreferenceRow
                title="Necessary"
                description="Required for essential functionality such as remembering your cookie choices."
                checked
                disabled
                onChange={() => {}}
              />

              <PreferenceRow
                title="Preferences"
                description="Optional technologies used to remember additional visitor preferences."
                checked={preferences.preferences}
                onChange={(checked) =>
                  setPreferences((previous) => ({
                    ...previous,
                    preferences: checked,
                  }))
                }
              />

              <PreferenceRow
                title="Analytics"
                description="Reserved for optional analytics tools if Desiglo enables them in the future."
                checked={preferences.analytics}
                onChange={(checked) =>
                  setPreferences((previous) => ({
                    ...previous,
                    analytics: checked,
                  }))
                }
              />

              <PreferenceRow
                title="Marketing"
                description="Reserved for optional advertising or marketing technologies if they are introduced later."
                checked={preferences.marketing}
                onChange={(checked) =>
                  setPreferences((previous) => ({
                    ...previous,
                    marketing: checked,
                  }))
                }
              />
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-[var(--ink)]/[0.07] p-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-[var(--ink)]/10 px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--ink)]/[0.05]"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--accent-hover)]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

type PreferenceRowProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: PreferenceRowProps) {
  return (
    <div className="flex gap-6 py-6">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-[var(--ink)]">{title}</h3>

          {disabled && (
            <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent)]">
              Always Active
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-6 text-[var(--muted)]/60">
          {description}
        </p>
      </div>

      <label className="relative mt-1 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          aria-label={title}
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />

        <span className="h-6 w-11 rounded-full bg-[var(--ink)]/10 transition peer-checked:bg-[var(--accent)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--surface)] peer-disabled:cursor-not-allowed peer-disabled:opacity-60" />

        <span className="absolute left-1 h-4 w-4 rounded-full bg-[var(--ink)] transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  );
}
