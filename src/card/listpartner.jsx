function ListPartner(props)
{
  return(
    <div key={props.key} className="col-3 pe-2">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
              <img  src={props.item.image} style={{borderRadius: 12, width: '100%'}}/>   
        </div>
      </div>
    </div>
  )
}
export default ListPartner