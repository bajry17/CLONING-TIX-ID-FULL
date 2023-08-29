import Navbar from '../inc/navbar';
import Footer from '../inc/footer';
import Main from '../content/content';
function Dashboard()
{
  return (
    <>
    <Navbar/>
      <div className="row mx-1">
        <div className="col p-0">
          <Main/>
        </div>
      </div>
      <Footer/>
    </> 
  )
}

export default Dashboard