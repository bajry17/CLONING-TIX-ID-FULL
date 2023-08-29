import { Link } from 'react-router-dom'
import ButtonAuth from '../button/ButtonAuth'


function Navbar()
{
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4 pb-3 container-fluid sticky-top">
      <div className="container">
        <a className="" href="#">
          <img src="https://asset.tix.id/wp-content/uploads/2021/10/TIXID_logo_blue-300x82.png" width={150}/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/">HOME</Link>
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/tixnow">TIX NOW</Link>
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/tix-events">TIX EVENTS</Link>
            <Link className="nav-item text-black ms-5" style={{fontWeight: 'bold', textDecoration: 'none'}} to="/careers">CAREERS</Link>
            <a className="nav-item text-black ms-5" href="https://www.instagram.com/tix_id"><i className="bi bi-instagram"></i></a>
            <a className="nav-item text-black ms-4" href="https://www.youtube.com/c/TIXIDapp"><i className="bi bi-youtube"></i></a>
            <a className="nav-item text-black ms-4" href="https://www.facebook.com/tixid"><i className="bi bi-facebook"></i></a>
            <a className="nav-item text-black ms-4" href="https://twitter.com/tix_id"><i className="bi bi-twitter"></i></a>
            <Link className="nav-item text-black ms-5" style={{textDecoration: 'none'}} to="/"><ButtonAuth label="DOWNLOAD TIX ID" mode="gold" onClick={() => {}}/></Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
export default Navbar