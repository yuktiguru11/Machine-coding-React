import { useEffect, useState } from "react"
import "./styles.css"

function Autocomplete ({
    staticData,
    placeholder ="",
    fetchSuggestion,
    dataKey = "",
    customLoader = 'Loading...',
    onSelect= ()=>{},
    onChange=()=>{},
    onBlur=()=>{},
    onFocus=()=>{},
    customStyles={}
}){

    const [inputValue, setInputValue] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleOnChange = (e)=>{
        setInputValue(e.target.value)
    }

    const getSuggestionData =  async(query)=>{
        setError(null);
        setLoading(true);
        let result;
        try{
            if(staticData){
                result = staticData.filter((data)=>{
                    return data.toLowerCase().include(query.toLowerCase())
                })
            }
            else if (fetchSuggestion){
                result = await fetchSuggestion(query)
            }
            setSuggestion(result);
            
        }
        catch(error){
            setError("Fail to suggest error "+error);
            setSuggestion([]);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(inputValue.length >1){
            getSuggestionData(inputValue)
        }
        else{
            setSuggestion([]);
        }
    },[inputValue])

    return (
        <>
        <div className="container">
            <input
            placeholder={placeholder}
            type ="text"
            value={inputValue}
            style={customStyles}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={handleOnChange}
            
            />
            {error && <div className="error" >{error}</div>}
            {loading && <div className="loading" >{loading}</div>}
        </div>
        </>
    )

}

export default Autocomplete