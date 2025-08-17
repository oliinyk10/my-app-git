import './Navbar.css'; 

const Navbar =() => {
    return (
      <nav className='nav'>
        <div className="item">Profile</div>
        <div className="item">Message</div>
        <div className="item">News</div>
        <div className="item">Music</div>
        <div className="item">Settings</div>
      </nav>
    )
}

export default Navbar;