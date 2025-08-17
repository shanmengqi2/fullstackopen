import Weather from './Weather'

const CountryDetail = ({ country }) => {
  return (
    <div>
      <h1>{country.name.official}</h1>
      <div>
        Capital {country.capital[0]}
        <br />
        Area {country.area}
      </div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} style={{ width: 300, border: '1px solid #333', borderShadow: '0 0 10px #333' }} />
      <Weather city={country.capital[0]} />
    </div>
  )
}

export default CountryDetail