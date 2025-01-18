import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount }) {
  const handlePlusButtonClick = () => setCount((prev) => prev + 1);
  const handleMinusButtonClick = () => setCount((prev) => prev - 1);

  return (
    <div className="button-container">
      <button onClick={handleMinusButtonClick} className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button onClick={handlePlusButtonClick} className="count-btn">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
