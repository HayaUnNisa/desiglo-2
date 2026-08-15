import { useEffect, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

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

    window.addEventListener(
      "desiglo:open-cookie-settings",
      openSettings,
    );

    return () => {
      window.removeEventListener(
        "desiglo:open-cookie-settings",
        openSettings,
      );
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
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-5xl rounded-2xl border border-white/[0.1] bg-[#081C24] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.6)] sm:p-6"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold text-white">
                Your cookie preferences
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#C9CED3]/65">
                Desiglo uses necessary browser storage to remember your
                preferences. Optional categories remain under your control.
                Learn more in the{" "}
                <Link
                  to="/cookie-policy"
                  className="font-medium text-[#9FDCFF] hover:text-white"
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
                className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={() => setPreferencesOpen(true)}
                className="rounded-lg border border-[#168CFF]/30 bg-[#168CFF]/5 px-4 py-2.5 text-sm font-semibold text-[#9FDCFF] transition hover:bg-[#168CFF]/10"
              >
                Manage Preferences
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-[#168CFF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2998FF]"
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
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setPreferencesOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#081C24] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start justify-between border-b border-white/[0.07] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#39BDF8]">
                  Privacy
                </p>

                <h2
                  id="cookie-settings-title"
                  className="mt-2 text-2xl font-semibold text-white"
                >
                  Cookie Settings
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setPreferencesOpen(false)}
                aria-label="Close cookie settings"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] text-[#C9CED3] transition hover:bg-white/[0.05] hover:text-white"
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

            <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] p-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
              >
                Reject Non-Essential
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="rounded-lg bg-[#168CFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2998FF]"
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
          <h3 className="font-semibold text-white">{title}</h3>

          {disabled && (
            <span className="rounded-full border border-[#168CFF]/20 bg-[#168CFF]/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#9FDCFF]">
              Always Active
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-6 text-[#C9CED3]/60">
          {description}
        </p>
      </div>

      <label className="relative mt-1 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />

        <span className="h-6 w-11 rounded-full bg-white/10 transition peer-checked:bg-[#168CFF] peer-focus-visible:ring-2 peer-focus-visible:ring-[#39BDF8] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#081C24] peer-disabled:cursor-not-allowed peer-disabled:opacity-60" />

        <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  );
}