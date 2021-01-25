import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { quotes } from 'reducers/quotes';

import './style.css';

const Quotes = () => {
    const quote = useSelector(store => store.quotes.quote);
    const dispatch = useDispatch();

    useEffect(() => {
        onQuoteFetch();
    }, []);

    const onQuoteFetch = () => {
        fetch(`${process.env.REACT_APP_API_URL}/quotes`)
            .then(res => res.json())
            .then(data => dispatch(quotes.actions.setQuote(data.value)))
            .catch(error => console.error(error));
    }

    const quoteText = quote
        ? `"${quote}"`
        : `"I did not break that helmet"`;

    return (
        <div>
            <div className="quote-overlay" />
            <div className="quote">
                <div className="quote-text">{quoteText}</div>
                <div className="quote-author">- Maksymilian Olszewski</div>
            </div>
        </div>
    );
};

export default Quotes;