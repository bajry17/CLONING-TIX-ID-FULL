function ListVideo(props)
{
  return(
    <div key={props.key} className="col-4 text-white pe-2">
      <div className="card" style={{border: 'none', backgroundColor:'transparent'}}>
        <div className="card-body">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={props.item.video} allowfullscreen></iframe>
        </div>
          <span className="h5 text-white" style={{fontSize: 18, fontWeight: 'bold'}}>{props.item.title}</span>        
        </div>
      </div>
      <p className="text-white col-9" style={{fontSize: 13}}>{props.item.list}</p>
    </div>
  )
}
export default ListVideo