import { Joyride, STATUS, type EventData, type Step } from 'react-joyride';

import {
  COACH_MARK_CONTENT,
  TOUR_ORDER,
  coachMarkTarget,
} from '@components/onboarding/coach-mark-content';
import { OnboardingTooltip } from '@components/onboarding/onboarding-tooltip';
import { usePrefersReducedMotion } from '@components/onboarding/use-prefers-reduced-motion';

type GuidedTourProps = {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
  onOpenEditorPanel: () => void;
  onOpenPreviewPanel: () => void;
};

const PANEL_TRANSITION_MS = 320;

export function GuidedTour({
  open,
  onClose,
  onComplete,
  onOpenEditorPanel,
  onOpenPreviewPanel,
}: GuidedTourProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!open) return null;

  const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
  const settleDelay = prefersReducedMotion ? 0 : PANEL_TRANSITION_MS;

  const steps: Step[] = TOUR_ORDER.map((id) => {
    const content = COACH_MARK_CONTENT[id];
    const before =
      id === 'kurs-herunterladen'
        ? async () => {
            onOpenEditorPanel();
            await wait(settleDelay);
          }
        : id === 'pdf-herunterladen'
          ? async () => {
              onOpenPreviewPanel();
              await wait(settleDelay);
            }
          : undefined;

    return {
      target: coachMarkTarget(id),
      title: content.title,
      content: content.body,
      placement: 'auto',
      before,
      skipBeacon: true,
      scrollDuration: prefersReducedMotion ? 0 : 300,
    };
  });

  return (
    <Joyride
      continuous
      run
      steps={steps}
      tooltipComponent={OnboardingTooltip}
      onEvent={(data: EventData) => {
        if (data.status === STATUS.FINISHED || data.status === STATUS.SKIPPED) {
          onComplete();
          onClose();
        }
      }}
    />
  );
}
