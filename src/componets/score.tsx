export function Score(text: String, color: any) {
  return (
    <div>
      <div className="px-3 rounded-xl" style={{ backgroundColor: { color } }}>
        {text}
      </div>
    </div>
  );
}
