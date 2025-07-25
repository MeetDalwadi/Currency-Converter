// Import React's useId hook for generating unique IDs
import { useId } from "react";

/**
 * A reusable input box component for currency conversion
 *
 * @param {Object} props - Component properties
 * @param {string} props.lab - Label text for the amount input field
 * @param {number} props.amount - Current amount value
 * @param {function} props.onAmountChange - Callback when amount changes
 * @param {function} props.onCurrencyChange - Callback when currency selection changes
 * @param {Array} props.currencyOptions - List of available currency options
 * @param {string} props.selectCurrency - Currently selected currency
 * @param {boolean} props.amountDisable - Whether amount input is disabled
 * @param {boolean} props.currencyDisable - Whether currency select is disabled
 * @param {string} props.className - Additional CSS classes for styling
 * @returns {JSX.Element} InputBox component
 */
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-3 rounded-lg border border-gray-200 ${className}`}
    >
      <div className="grid grid-cols-1 gap-2">
        <div className="flex justify-between items-center">
          <label
            htmlFor={amountInputId}
            className="text-sm md:text-base text-gray-700 font-medium"
          >
            {label}
          </label>
          <span className="text-xs md:text-sm text-gray-500">Currency</span>
        </div>

        <div className="flex gap-2 md:gap-3">
          <div className="flex-1">
            <input
              id={amountInputId}
              type="number"
              placeholder="0.00"
              disabled={amountDisable}
              value={amount}
              onChange={(e) => onAmountChange?.(Number(e.target.value))}
              className="w-full p-2 md:p-2.5 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="w-24 md:w-28">
            <select
              disabled={currencyDisable}
              value={selectCurrency}
              onChange={(e) => onCurrencyChange?.(e.target.value)}
              className="w-full p-2 md:p-2.5 text-sm md:text-base border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
