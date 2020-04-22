import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../api'

const SelectedCountry = ({ handleCountryChanger }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect (() => {
        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchCountries]);

    console.log(fetchedCountries);

    return (
      <FormControl className="selectCountry">
         <NativeSelect defaultValue="" onChange={(e) => handleCountryChanger(e.target.value)}>
             <option value="">Global</option>
             {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect> 
      </FormControl>
    )
}

export default SelectedCountry
