import { XMarkIcon } from '@heroicons/react/24/outline';
import type { TooltipRenderProps } from 'react-joyride';

export function OnboardingTooltip({
  continuous,
  index,
  isLastStep,
  size,
  step,
  backProps,
  closeProps,
  primaryProps,
  skipProps,
  tooltipProps,
}: TooltipRenderProps) {
  return (
    <div
      {...tooltipProps}
      className="rounded-box border-base-300 bg-base-100 w-80 max-w-[90vw] border p-4 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-2">
        {step.title ? <h4 className="text-base font-semibold">{step.title}</h4> : <span />}
        <button
          {...closeProps}
          className="btn btn-circle btn-ghost btn-xs"
          aria-label="Hinweis schließen"
        >
          <XMarkIcon className="size-4" />
        </button>
      </div>

      {continuous && size > 1 ? (
        <p className="text-base-content/60 mt-1 text-xs font-semibold tracking-wide uppercase">
          Schritt {index + 1} von {size}
        </p>
      ) : null}

      <div className="text-base-content/80 mt-2 text-sm leading-6">{step.content}</div>

      <div className="mt-3 flex items-center justify-between gap-2">
        {continuous && index > 0 ? (
          <button {...backProps} className="btn btn-ghost btn-sm">
            Zurück
          </button>
        ) : (
          <span />
        )}
        <div className="flex gap-2">
          {continuous ? (
            <button {...skipProps} className="btn btn-ghost btn-sm">
              Tour beenden
            </button>
          ) : null}
          <button {...primaryProps} className="btn btn-primary btn-sm">
            {continuous ? (isLastStep ? 'Fertig' : 'Weiter') : 'Verstanden'}
          </button>
        </div>
      </div>
    </div>
  );
}
