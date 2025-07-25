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
    <>
      {/* Application header section - Updated with transparent background */}
      <div className="flex justify-center">
        <div className="flex justify-center m-3 bg-white/30 backdrop-blur-sm w-2xl p-5 rounded-2xl shadow-lg border border-white/20">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">Currency Converter</h1>
        </div>
      </div>

      {/* Main converter form section (unchanged) */}
      <div className="flex justify-center m-10 z-10">
        <div className="bg-blue-100/40 flex justify-center items-cente w-2xl p-5 z-10 relative rounded-2xl shadow-2xl shadow-pink-600">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <InputBox
              lab="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
            />

            <div className="flex justify-center my-4">
              <button
                type="button"
                onClick={swap}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Swap currencies"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              lab="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <div className="flex justify-center m-2">
              <button
                type="submit"
                className="bg-blue-600 p-2 px-4 rounded-md text-amber-50 hover:bg-blue-700 cursor-pointer transition-colors border-2 border-amber-100"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer section - Updated with transparent background */}
      <div className="flex justify-center">
        <div className="flex justify-center w-2xl bg-white/30 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-white/20">
          <h1 className="text-xl font-medium text-white drop-shadow-lg">By Meet Dalwadi</h1>
        </div>
      </div>
    </>
  );
}

export default App;