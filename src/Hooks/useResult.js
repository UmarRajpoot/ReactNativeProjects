import { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {

        
    const [results, SetResults] = useState([]);
    const [ErrorMessage, SetErrorMessage] = useState('');

    const searchApi = async SearchTerm => {
        // console.log('Appear too');
       try{ 
        const response = await yelp.get('/search',{
            
            params: {
                limit: 20,
                term : SearchTerm,
                location: ''
            }
        });
        SetResults(response.data.businesses);
    }catch (err){
        SetErrorMessage('something went to Wrong');
    }
    };
    // searchapi('pasta');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [ searchApi, results, ErrorMessage];
    
};



