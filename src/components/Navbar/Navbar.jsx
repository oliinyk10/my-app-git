import s from'./Navbar.module.css';
console.log(s)
//<nav className='Navbar_nav__fU5dC'>
const Navbar =() => {
    return (
      <nav className={s.nav}> 
        <div className="Navbar_item__yDkau">Profile</div>
        <div className={s.item}>Message</div>
        <div className={`${s.item} ${s.active}`}>News</div>
        <div className={s.item}>Music</div>
        <div className="item active">Settings</div>
      </nav>
    )
}

export default Navbar;