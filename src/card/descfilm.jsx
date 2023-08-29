function DescFilm(props)
{
  return(
    <div key={props.key} className="col-4 text-white pe-2">
      <div className="card" style={{border: 'none', backgroundColor:'#E5E7E8'}}>
        <div className="card-body">
          <div>
            <img  src={props.item.image} style={{borderRadius: 12, height: 200, width: '100%'}}/>
          </div>
          <span className="h5 text-black" style={{fontSize: 18}}>{props.item.title}</span>        
        </div>
      </div>
    </div>
  )
}
export default DescFilm