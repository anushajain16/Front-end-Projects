import heart from './image/heart.svg'
import person from './image/person.svg'
import search from './image/search.svg'
import bag from './image/bag.svg'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className ="navbar">
        <div className="nav navbar-logo">
            <p>glamify</p>
        </div>
        <div className="nav navbar-content">
            <a className="navbar-item" href="#">Cosmetics</a>
            <a className="navbar-item" href="#">Fragnance</a>
            <a className="navbar-item" href="#">Skin</a>
            <a className="navbar-item" href="#">Discover</a>
        </div>
        <div className="nav navbar-icons">
            <a className="nav-icon" href="">
                <img src={heart} alt="wishlist"/>
                <span className="drag">Wishlist</span>
            </a>
            <a className="nav-icon" href="">
                <img src={person} alt="account"/>
                <span className="drag">Account</span>
            </a>
            <a className="nav-icon" href="">
                <img src={search} alt="search"/>
                <span className="drag">Search</span>
            </a>
            <a className="nav-icon" href="">
                <img src={bag} alt="cart"/>
                <span className="drag">Cart</span>
            </a>
        </div>
    </div>
  )
}

export default Navigation
