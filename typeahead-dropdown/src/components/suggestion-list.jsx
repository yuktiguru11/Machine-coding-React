const SuggestionList = ({
  suggestion = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi")); // gi global case insensitive
    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };
  return (
    <>
      {suggestion.map((suggestion, index) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;
        return (
          <li
            key={index}
            className="suggestion-item"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {getHighlightText(currSuggestion, highlight)}
          </li>
        );
      })}
    </>
  );
};

export default SuggestionList;
