import Karir from "../content/karir";
import Footer from "../inc/footer";
import Navbar from "../inc/navbar";

function Careers()
{
    return (
        <>
        <Navbar/>
          <div className="row mx-1">
            <div className="col p-0">
                <Karir/>
            </div>
          </div>
          <Footer/>
        </> 
      )
}
export default Careers