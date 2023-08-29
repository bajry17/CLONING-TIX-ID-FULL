import { Link } from 'react-router-dom'
import ButtonAuth from '../button/ButtonAuth'


function NavbarEvent()
{
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4 pb-3 container-fluid sticky-top">
      <div className="container">
        <a className="" href="#">
          <img className='pb-2' src="https://asset.tix.id/tix-events/compro/images/logo-tix-events.webp" width={180}/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/">FEATURES</Link>
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/tixnow">WHY TIX EVENTS</Link>
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none', width:400}} to="/tix-events">ABOUT US</Link>
            <Link className="nav-item text-black ms-5" style={{textDecoration: 'none'}} to="/"><ButtonAuth label="CONTACT US" mode="gold" onClick={() => {}}/></Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
export default NavbarEvent