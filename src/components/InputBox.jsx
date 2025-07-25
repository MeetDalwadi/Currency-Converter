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
  lab,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Generate unique ID for accessibility (links label to input)
  const amountInputId = useId();

  return (
    // Fragment to avoid unnecessary DOM elements
    <>
      {/* Main container div with dynamic className for styling */}
      <div className={`bg-white w-xl p-1 border-2 rounded-xl ${className}`}>
        <div className="flex justify-between m-5">
          {/* Amount input label - linked to input via htmlFor */}
          <label htmlFor={amountInputId} className="text-gray-600 text-xl">
            {lab}
          </label>
          <label className="text-gray-600 text-xl">Currency Type</label>
        </div>

        <div className="flex justify-between text-2xl m-5">
          {/* Amount input field */}
          <input
            id={amountInputId} // Links to the label for accessibility
            type="number" // Specifies numeric input
            placeholder="Amount" // Placeholder text
            disabled={amountDisable} // Controls input disabled state
            value={amount} // Controlled component value
            onChange={(e) =>
              // Calls callback with parsed number when value changes
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className="border-1 p-1 rounded-xl bg-amber-200"
          />

          {/* Currency selection dropdown */}
          <select
            disabled={currencyDisable} // Controls select disabled state
            value={selectCurrency} // Controlled component value
            onChange={(e) =>
              // Calls callback with selected currency when changed
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="border-1 p-1 rounded-xl bg-blue-100"
          >
            {/* Maps through currency options to create dropdown options */}
            {currencyOptions.map((val) => (
              <option key={val} value={val}>
                {val.toUpperCase()} {/* Display currency code in uppercase */}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
