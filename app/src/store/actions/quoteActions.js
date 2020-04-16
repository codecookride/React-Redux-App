import axios from "axios";


export const fetchQuote = () =>{
    return dispatch => {
        dispatch({type:"FETCH_QUOTE_START"})
        axios.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => {
         dispatch({type: "FETCH_QUOTE_SUCCESS", payload:res.data })   
        })
        .catch(err=> console.log(err.response))
    }
}

