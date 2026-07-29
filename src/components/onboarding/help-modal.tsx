import { Modal } from '@components/modal';

type HelpModalProps = {
  open: boolean;
  onClose: () => void;
  isEditorRoute: boolean;
  onStartTour: () => void;
};

export function HelpModal({ open, onClose, isEditorRoute, onStartTour }: HelpModalProps) {
  return (
    <Modal open={open} title="Hilfe" size="md" onClose={onClose}>
      <div className="space-y-5">
        <p className="text-base-content/80 text-sm leading-6">
          {isEditorRoute
            ? 'Hier erstellst du mit KI-Hilfe ein Arbeitsblatt. Links kannst du den Inhalt bearbeiten. Rechts siehst du die Vorschau.'
            : 'Mit diesem Tool erstellst du Arbeitsblätter für deinen Unterricht.'}
        </p>

        <div className="space-y-2">
          <button
            className="btn btn-primary w-full"
            disabled={!isEditorRoute}
            type="button"
            onClick={onStartTour}
          >
            Geführte Tour starten
          </button>
          {!isEditorRoute ? (
            <p className="text-base-content/60 text-xs">
              Wechsle zum Arbeitsblatt-Bereich, um die Tour zu starten.
            </p>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}
