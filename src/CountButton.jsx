import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handlePlusButtonClick = () => setCount((prev) => prev + 1);
  const handleMinusButtonClick = () => setCount((prev) => prev - 1);

  return (
    <button
      onClick={
        type === "minus" ? handleMinusButtonClick : handlePlusButtonClick
      }
      className="count-btn"
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
