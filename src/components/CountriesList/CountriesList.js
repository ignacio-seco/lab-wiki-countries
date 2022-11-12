import { Link } from 'react-router-dom';
import './CountriesList.css'


function CountriesList({ myData, setMyData }) {
  const listOfCountries = myData.map((e) => {
    return (
        <div>
 
        <Link key={e.alpha3Code} to={`./${e.alpha3Code}`}>
          {e.name.common}
          <br/>
          <img variant="top" className="flags" src={`https://flagpedia.net/data/flags/icon/72x54/${e.alpha2Code.toLowerCase()}.png`}/>
        </Link> 
        </div>       

    );
  });

  return <div className='listOfCountries'>
  {listOfCountries}
  </div>;
}
export default CountriesList;
