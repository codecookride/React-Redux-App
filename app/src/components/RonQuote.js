import React, { useEffect } from "react"
import {connect} from "react-redux"
import Loader from "react-loader-spinner";
import {fetchQuote} from "../store/actions/quoteActions"

const RonQuote = (props) => {

    useEffect(() =>{
        props.fetchQuote()
    },[])


    // if (props.isFetching){
    //     return <Loader/>
    // }

    return (
        <div>
            <h1>Ron Quotes!</h1>
            {props.isFetching && 
            <Loader
                type="Puff"
                color="#00BFFF"
                height={300}
                width={300}
                timeout={3000}
            />}
            {props.quote && <h3>{props.quote}</h3>}
            <button onClick= {props.fetchQuote}>new Quote</button>
        </div>

    );

};

const mapStateToProps = state => {
    
    return {
        quote:state.quotesReducer.quote,
        isFetching: state.quotesReducer.isFetching,
        error: state.quotesReducer.error
    };
};

export default connect (mapStateToProps,
     {fetchQuote}
     )(RonQuote);