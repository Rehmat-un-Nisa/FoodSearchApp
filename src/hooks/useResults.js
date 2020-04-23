import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMsg, setErrMsg] = useState('')

const searchApi = async (searchTerm) =>{
    try{
        const response = await yelp.get('/search',{
            params:{
                term: searchTerm,
                location: 'san jose',
                limit: 50
            }
        });
        setResults(response.data.businesses);
        setErrMsg('');
    }catch(err){
       setErrMsg("Something went wrong, Please try again") 
    }
}

    useEffect(() =>{
        searchApi('pasta')
        },[]);

return [searchApi, results, errorMsg];
};