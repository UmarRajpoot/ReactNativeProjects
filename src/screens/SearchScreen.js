import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar'; 
import useResults from '../Hooks/useResult';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, ErrorMessage, results] = useResults();
    

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}

            />
            {ErrorMessage ?  <Text>{ErrorMessage}</Text> : null }
            <Text>We have Found {results.length} results</Text>
            

        </View>
    );
};



export default SearchScreen;