import React, { useEffect } from "react";
import yelp from "../api/yelp";

export default () => {

    const [results, setResults] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState('');

    const searchApi = async(searchTerm) => {
        console.log('Api call')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('OOP!, something went wrong.');
        }
    }

    useEffect(() => {
        searchApi('tea');
    }, []);

    return [searchApi, results, errorMessage];
}