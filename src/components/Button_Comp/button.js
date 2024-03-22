export default function Button(props) {
  return (
    <button
      className="button"
      style={{
        width: props.width,
        cursor: props.cursor,
        opacity: props.opacity,
      }}
    >
      {props.value}
    </button>
  );
}
