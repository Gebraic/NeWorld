import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllCountry } from '../controllers/CountryController'
import '../css/CountryList.css'

export default function CountryList(){
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountry ();
        setCountries(data);
      } catch (err) {
        setError( err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error} </p>;

  return (
    <>
      <div>
      <div className="CountryList-Container">
        {countries.map((country) => (
          <Link to={`/country/${country.name.common}`} key={country.cca3} className="CountryList-Link">
            <div className="Country-List">
              <img src={country.flags.svg} alt={`${country.name.common} flag`} width="200" />
              <h3>{country.name.common}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>  
    </>
  );
}
