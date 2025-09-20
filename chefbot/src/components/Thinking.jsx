// ../components/Thinking.jsx
export default function Thinking() {
  return (
    <div className="thinking" aria-live="polite" role="status">
      <div className="thinking__spinner" aria-hidden="true" />
      <div className="thinking__text">
        Thinking<span className="thinking__dots"><span>.</span><span>.</span><span>.</span></span>
      </div>
    </div>
  );
}
