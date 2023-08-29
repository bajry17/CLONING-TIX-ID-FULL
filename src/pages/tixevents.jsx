import Event from '../content/events';
import NavbarEvent from '../inc/navbarevent';
import FooterEvent from '../inc/footerevent';
function TixEvent()
{
  return (
    <>
    <NavbarEvent/>
      <div className="row mx-1">
        <div className="col p-0">
          <Event/>
        </div>
      </div>
      <FooterEvent/>
    </> 
  )
}

export default TixEvent