import './Nav.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Nav(){
    return (
        <div className='nav'>
            <Link to='/main'><span className="material-symbols-outlined nav__icon">home</span></Link>
            <Link to='/matches'><span className="material-symbols-outlined nav__icon">favorite</span></Link>
            <Link to='/messages'><span className="material-symbols-outlined nav__icon">forum</span></Link>
            <Link to='/profile'><span className="material-symbols-outlined nav__icon">person</span></Link>
        </div>
    );
}

export default Nav;