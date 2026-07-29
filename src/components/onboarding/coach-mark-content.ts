export type CoachMarkId =
  | 'guided-creation-cta'
  | 'mic-record-button'
  | 'side-panel-editor-toggle'
  | 'side-panel-preview-toggle'
  | 'kurs-herunterladen'
  | 'pdf-herunterladen'
  | 'neues-gespraech'
  | 'sprachmodus'
  | 'ki-einstellungen'
  | 'tastenkuerzel'
  | 'hilfe-button';

/**
 * Step order for the "Geführte Tour", started from the Hilfe button: the
 * core creation workflow first, then the surrounding navbar controls.
 */
export const TOUR_ORDER: CoachMarkId[] = [
  'guided-creation-cta',
  'mic-record-button',
  'side-panel-editor-toggle',
  'side-panel-preview-toggle',
  'kurs-herunterladen',
  'pdf-herunterladen',
  'neues-gespraech',
  'sprachmodus',
  'ki-einstellungen',
  'tastenkuerzel',
  'hilfe-button',
];

export const COACH_MARK_CONTENT: Record<CoachMarkId, { title: string; body: string }> = {
  'guided-creation-cta': {
    title: 'Arbeitsblatt erstellen',
    body: 'Klicke hier. Dann hilft dir die KI, ein Arbeitsblatt zu erstellen.',
  },
  'mic-record-button': {
    title: 'Mit der Stimme sprechen',
    body: 'Du kannst hier auch sprechen, statt zu tippen.',
  },
  'side-panel-editor-toggle': {
    title: 'Bearbeitungs-Modus',
    body: 'Hier kannst du dein Arbeitsblatt anpassen.',
  },
  'side-panel-preview-toggle': {
    title: 'Vorschau',
    body: 'Hier siehst du, wie dein Arbeitsblatt aussieht.',
  },
  'kurs-herunterladen': {
    title: 'Kurs herunterladen',
    body: 'Klicke hier, um deinen fertigen Kurs herunterzuladen.',
  },
  'pdf-herunterladen': {
    title: 'Als PDF herunterladen',
    body: 'Klicke hier, um dein Arbeitsblatt als PDF herunterzuladen.',
  },
  'neues-gespraech': {
    title: 'Neues Gespräch',
    body: 'Klicke hier, um ganz neu anzufangen. Dein Gespräch und dein Arbeitsblatt werden dann gelöscht.',
  },
  sprachmodus: {
    title: 'Sprachmodus',
    body: 'Hier stellst du ein, wie einfach oder schwer die Sprache im Arbeitsblatt sein soll.',
  },
  'ki-einstellungen': {
    title: 'KI-Einstellungen',
    body: 'Hier trägst du deinen API-Token ein. Ohne Token kann die KI dir nicht helfen.',
  },
  tastenkuerzel: {
    title: 'Tastenkürzel',
    body: 'Hier findest du Schnelltasten für die wichtigsten Aktionen.',
  },
  'hilfe-button': {
    title: 'Hilfe',
    body: 'Du kannst diese Tour und die Hinweise hier jederzeit erneut öffnen.',
  },
};

export function coachMarkTarget(id: CoachMarkId): string {
  return `[data-tour-id="${id}"]`;
}
