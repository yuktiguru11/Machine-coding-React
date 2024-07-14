import { useEffect, useState } from "react";
import "./styles.css";
import SuggestionList from "./suggestion-list";
import { useDebounce } from "../hooks/use-debounce";

function Autocomplete({
  staticData,
  placeholder = "",
  fetchSuggestion,
  dataKey = "",
  customLoader = "Loading...",
  onSelect = () => {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  customStyles = {},
}) {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue)
  const [suggestion, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestionData = async (query) => {
    setError(null);
    setLoading(true);
    let result;
    try {
      if (staticData) {
        result = staticData.filter((data) => {
          return data.toLowerCase().include(query.toLowerCase());
        });
      } else if (fetchSuggestion) {
        result = await fetchSuggestion(query);
      }
      setSuggestion(result);
    } catch (error) {
      setError("Fail to suggest error " + error);
      setSuggestion([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestionData(debouncedValue);
    } else {
      setSuggestion([]);
    }
  }, [debouncedValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(dataKey ? suggestion[dataKey]: suggestion);
    onSelect(suggestion);
    setSuggestion([]);
  };

  return (
    <>
      <div className="container">
        <input
          placeholder={placeholder}
          type="text"
          value={inputValue}
          style={customStyles}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={handleOnChange}
        />

        {(suggestion.length > 0 || error || loading) && (
          <ul className="suggestion-list" > 
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">{customLoader}</div>}
            <SuggestionList
              suggestion={suggestion}
              highlight={debouncedValue}
              dataKey={dataKey}
              onSuggestionClick={handleSuggestionClick}
            />
          </ul>
        )}
      </div>
    </>
  );
}

export default Autocomplete;
