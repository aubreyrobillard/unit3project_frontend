import {Link, useNavigate} from 'react-router-dom'
import baseUrl from '../baseUrl'

function Footer(props) {
    const navigate = useNavigate()
    return <div>
        <button onClick={async () => {
        await fetch(`${baseUrl}/logout`)
        localStorage.removeItem('loggedIn')
        navigate('/')
      }}>Logout</button>
    </div>

    
}



export default Footer