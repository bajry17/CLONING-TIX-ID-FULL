function Footer()
{
  return(
    <>
      <div style={{backgroundColor: '#001A3A' }}>
        <div className="container p-5">
          <div className="row text-white">
            <div className="col">
              <img src="https://asset.tix.id/wp-content/uploads/2021/10/TIXID_logo_inverse-300x82.png" style={{width:100}} />
              <p className="pt-3">Best App For Movie Lovers In Indonesia! Movie Entertainment Platform From Cinema To Online Movie Streaming Selections.</p>
            </div>
            <div className="col text-white">
              <a href="" style={{textDecoration: 'none', color: "white"}}>NOW SHOWING</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>TIX NOW</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>SPOTLIGHT</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>VIDEO TRAILERS</a>
            </div>
            <div className="col">
              <a href="" style={{textDecoration: 'none', color: "white"}}>CARRERS</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>CONTACT US</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>PRIVACY POLICY</a><br />
              <a href="" style={{textDecoration: 'none', color: "white"}}>TERMS & CONDITIONS</a>
            </div>
            <div className="col text-white">
              <p className="mb-1">TIX ID SUPPORT</p>
              <p>E-MAIL : HELP@TIX.ID</p>
              <p>FOLLOW US</p>
              <a className="nav-item text-white" href=""><i className="bi bi-instagram"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-youtube"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-facebook"></i></a>
              <a className="nav-item text-white ms-4" href=""><i className="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white p-1" style={{backgroundColor: '#192C4F'}}>
        <p className="mt-3">2022 TIX ID - PT NUSANTARA ELANG SEJAHTERA. ALL RIGHTS RESERVED.</p>
      </div>  
    </>
  )
}
export default Footer