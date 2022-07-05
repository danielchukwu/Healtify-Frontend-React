import {Link} from 'react-router-dom'

export default function Home() {

  return (
    <div className="home">
      <div className='header'>
        <div className='sign-up'>Register</div>
      </div>
      {/* <div className="home-img">
        <img src={homeSlider} alt="an image" />
      </div> */}

      <div className="welcome">
        <div className="website">
          <h1>HEALTIFY</h1>
          <p>Welcome are you feeling unusual and would like to see one of our amazing doctors?</p>
        </div>
      </div>
      <div className="button-wrapper">
        <Link to="/book-appointment">
          <div className="book-button">Book Appointment</div>
        </Link>
      </div>
    </div>
  )
}
