import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PredictionProps {
    query: string;
    onSuggestionSelect: (suggestion: string) => void;
}

const Prediction: React.FC<PredictionProps> = ({ query, onSuggestionSelect }) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 2) {
                try {
                    const res = await axios.get(`http://suggestqueries.google.com/complete/search?client=chrome&q=${query}`)
                    setSuggestions(res.data);
                } catch (err) {
                    console.error("Error occur in fetching suggestions", err);
                }
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [query]);

    return (
        <ul>
            {suggestions.map((suggestion: string, index: number) => (
                <li key={index} onClick={() => onSuggestionSelect(suggestion)}>
                    {suggestion}
                </li>
            ))}
        </ul>
    );
};

export default Prediction;
