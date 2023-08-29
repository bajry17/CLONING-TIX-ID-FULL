function ListEvent(props)
{
  return(
    <div key={props.key} className="col-4 container">
      <div className="card container mt-3" style={{border: 'none', backgroundColor:'#001A3A', height: 300}}>
        <div className="card-body">
            <div className="text-white">
              <img  src={props.item.image} style={{borderRadius: 12, height: '40%'}}/>
              <p style={{fontWeight:'bold'}}>{props.item.label}</p>
              <p>{props.item.desc}</p>
              <a href="" style={{textDecoration:'none', color:'yellow'}}>Learn More <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ListEvent

