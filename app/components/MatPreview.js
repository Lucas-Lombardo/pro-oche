// Stylised live preview of a customised oche (pure CSS, no real artwork).
export default function MatPreview({ design, customText, led }) {
  return (
    <div className="mat" aria-label={`Preview of ${design.name} oche`}>
      {led && <div className="mat__led" />}
      <div
        className="mat__surface"
        style={{ background: design.surface, color: design.textColor }}
      >
        <div className="mat__board" />
        <div
          className="mat__name"
          style={{ color: design.bespoke ? design.accent : design.textColor }}
        >
          {customText?.trim() ? customText : design.bespoke ? "Your Design" : design.name}
        </div>
        <div
          className="mat__line"
          style={{ background: design.accent }}
        />
      </div>
    </div>
  );
}
