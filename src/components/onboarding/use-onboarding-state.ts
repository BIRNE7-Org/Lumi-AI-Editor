import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'lumi_onboarding';

type OnboardingStateV3 = {
  version: 3;
  tourCompleted: boolean;
};

const DEFAULT_STATE: OnboardingStateV3 = {
  version: 3,
  tourCompleted: false,
};

function loadState(): OnboardingStateV3 {
  if (typeof window === 'undefined') return DEFAULT_STATE;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_STATE;
    const parsed = JSON.parse(stored) as OnboardingStateV3;
    if (parsed.version !== 3) return DEFAULT_STATE;
    return parsed;
  } catch {
    return DEFAULT_STATE;
  }
}

export function useOnboardingState() {
  const [state, setState] = useState<OnboardingStateV3>(loadState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const markTourCompleted = useCallback(() => {
    setState((prev) => ({ ...prev, tourCompleted: true }));
  }, []);

  return {
    tourCompleted: state.tourCompleted,
    markTourCompleted,
  };
}
