import {Link} from 'react-router-dom'

export default function Booked() {

  return (
    <div className="home">
      {/* <div className="home-img">
        <img src={homeSlider} alt="an image" />
      </div> */}

      <div className="welcome">
        <div className="website">
          <h2>APPOINTMENT SUCCESSFULLY BOOKED!</h2>
          <div className="button-wrapper">
            <Link to="/">
              <div className="book-button">Go Back Home &#x279D;</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
