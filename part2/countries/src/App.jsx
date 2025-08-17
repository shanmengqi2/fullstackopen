import { useEffect, useState } from 'react'
import countryService from './services/country'
import Info from './components/Info'

const App = () => {
  const [infoType, setInfoType] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('');
  const [countries, setCountries] = useState({})

  const api_key = import.meta.env.VITE_WEATHER_KEY


  useEffect(() => {
    // debounce
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue)
      console.log(debouncedValue)
    }, 500)
    return () => {
      clearTimeout(handler)
    }
  }, [inputValue])

  useEffect(() => {
    console.log(api_key)
    if (debouncedValue.length > 0) {
      countryService.getCountries(debouncedValue)
        .then(countries => {
          console.log(countries)
          setCountries(countries)
          /*
          since the api can only doing exact match now
          ex: Japan is ok while ja is not
          directly set infoType to 'single' for test
          */
          setInfoType('single')

          // set to multiple for test
          // setInfoType('multiple')

          // set to tooMany for test
          // setInfoType('tooMany')
        })
    }
  }, [debouncedValue])
  return (
    <div>
      <div>
        <label>find countries</label>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </div>
      <Info type={infoType} data={countries} />
    </div>
  )
}

export default App