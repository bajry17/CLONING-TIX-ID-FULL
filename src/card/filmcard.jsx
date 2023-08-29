function FilmCard(props)
{
  return(
    <div key={props.key} className="col-3 text-white pe-2">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <div>
            <img  src={props.item.image} style={{borderRadius: 20, height: 365, width: '100%'}}/>
          </div>
          <span className="h5 text-black" style={{fontSize: 18}}>{props.item.title}</span>        
        </div>
      </div>
    </div>
  )
}
export default FilmCard




