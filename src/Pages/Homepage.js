import {Link} from 'react-router-dom'

function Homepage(props) {

  return (
    <div className="homepage-container">
      <div className="login-form">
        <h2>Welcome to Taste Tally!</h2>
       <Link to='/dashboard'><button>Go To Recipes</button></Link>
      </div>
    </div>
  );
}

export default Homepage;
