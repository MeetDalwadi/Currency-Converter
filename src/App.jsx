import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-white/30">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Currency Converter
          </h1>
        </div>
      </div>

      {/* Main Converter */}
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-blue-100/40 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg border border-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
              selectCurrency={from}
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="p-2 bg-white border-2 border-blue-100 rounded-full shadow hover:bg-blue-50 transition-all hover:-translate-y-0.5"
                aria-label="Swap currencies"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-md transition hover:opacity-90"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md bg-white/80 p-3 rounded-full shadow-sm text-center">
          <p className="text-sm md:text-base text-gray-700">
            Developed by{" "}
            <span className="font-medium text-blue-600">Meet Dalwadi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
