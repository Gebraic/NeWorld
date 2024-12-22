import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryDetails } from '../controllers/CountryController';

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countryName) {
      setError("Country name is not defined");
      setLoading(false);
      return;
    }
  
    const fetchCountryDetails = async () => {
      try {
        const data = await getCountryDetails(countryName);
        setCountry(data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className='detail-container'>
        <div className='detail-left'>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
          <h1>{country.name.common}</h1>
        </div>
        <div className='detail-right'>
          <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>
            Currencies: {country.currencies 
            ? Object.values(country.currencies).map(currency => currency.name).join(', ') 
            : 'No data available'} 
          </p>
          <p>
            Symbol: {country.currencies 
            ? Object.values(country.currencies).map(currency => currency.symbol).join(', ') 
            : 'No data available'}
          </p>
        </div>
      </div>
      <div>
      </div>
    </>
  );
};

export default CountryDetail;
