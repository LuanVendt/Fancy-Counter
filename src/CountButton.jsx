import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = () =>
    setCount((prev) =>
      type === "plus"
        ? prev + 1 > 10
          ? 10
          : prev + 1
        : prev - 1 < 0
        ? 0
        : prev - 1
    );

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
