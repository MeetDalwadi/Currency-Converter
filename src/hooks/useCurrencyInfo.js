// Import necessary React hooks
import { useEffect, useState } from "react";

/**
 * Custom React hook to fetch and return currency exchange rate information
 * @param {string} currency - The base currency code (e.g., 'usd', 'eur', 'inr')
 * @returns {object} - An object containing exchange rates for the specified currency
 */
function useCurrencyInfo(currency) {
  // Initialize state to store the currency data
  const [data, setData] = useState({});

  // useEffect hook to perform side effects (data fetching in this case)
  useEffect(() => {
    // Fetch currency data from the API when the component mounts or currency changes
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      // Convert the response to JSON format
      .then((res) => res.json())
      // Process the JSON data
      .then((res) => {
        // Update the state with the currency data
        // The API returns an object where the currency is a key, so we access res[currency]
        // For example, if currency is 'usd', we get res.usd which contains all exchange rates
        setData(res[currency]);
      });
    
    // The dependency array - effect will re-run if the currency value changes
  }, [currency]);

  // Return the currency data
  // Initially returns an empty object, then returns the fetched data once available
  return data;
}

// Export the custom hook for use in other components
export default useCurrencyInfo;