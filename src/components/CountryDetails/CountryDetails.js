import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import './CountryDetails.css'

function CountryDetails({myData}){
    const { alpha3Code } = useParams()

    const foundCountry = myData.find((oneCountry) => {
        return oneCountry.alpha3Code === alpha3Code;
    })

    const bordersCountry = foundCountry.borders.map((e) => {
      return (
          <Link key={e} to={`../${e}`}>
            {
              myData.find((borderCountry) => {
                return borderCountry.alpha3Code === e;
              }).name.common
            }
            <br/>
          </Link>

      );
    });

    return (
        <Card style={{ width: '35%', margin: 'auto' }}>
            <Card.Header>{ foundCountry.name.Common }</Card.Header>
            <Card.Body>
                <Card.Img variant="top" className="flags" src={`https://flagpedia.net/data/flags/icon/256x192/${foundCountry.alpha2Code.toLowerCase()}.png`} />
                <Card.Text><span className="boldStyle">Capital:</span> {foundCountry.capital[0]}</Card.Text>
                <Card.Text><span className="boldStyle">Area:</span> {`${foundCountry.area} km²`}</Card.Text>
                <Card.Text><span className="boldStyle">Borders:</span><br/> {bordersCountry}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CountryDetails