function InfoFilm(props)
{
  return(
    <div key={props.key} className="">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <div className="row">
            <div className="col-5">
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%'}}/>
            </div>
            <div className="col-7">
              <p className="h5 text-black " style={{fontSize: 17, fontWeight: 'bold'}}>{props.item.title}</p>
              <p className="text-black " style={{fontSize: 12}}>{props.item.date}</p>
              <p className="text-black " style={{fontSize: 15}}>{props.item.desc}</p>
            </div>    
          </div>    
        </div>
      </div>
    </div>
  )
}
export default InfoFilm