function ListNow(props)
{
  return(
    <div key={props.key} className="col-6">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
            <div>
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%', height: 200}}/>
            </div>
            <a href="" style={{textDecoration: 'none', fontWeight:'bold'}}>TIX ID</a>
              <p className="h5 text-black " style={{fontSize: 17, fontWeight: 'bold'}}>{props.item.title}</p>
              <p style={{fontSize: 14}} className="h5 text-black">by <a className="text-black" style={{textDecoration: "none", fontWeight: 'bold'}} href="">TIX ID Admin</a> - {props.item.date}</p>
              <p className="text-black " style={{fontSize: 15}}>{props.item.desc}</p> 
        </div>
      </div>
    </div>
  )
}
export default ListNow

