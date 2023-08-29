import Navbar from '../inc/navbar';
import Footer from '../inc/footer';
import NowTix from '../content/now';
function TixNow()
{
  return (
    <>
    <Navbar/>
      <div className="row mx-1">
        <div className="col p-0">
          <NowTix/>
        </div>
      </div>
      <Footer/>
    </> 
  )
}

export default TixNow