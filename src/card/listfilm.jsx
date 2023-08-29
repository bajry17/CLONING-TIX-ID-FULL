function ListFilm(props)
{
  return(
    <div key={props.key} className="">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <a className="h5 text-black " style={{fontSize: 20, fontWeight: 'bold', textDecoration: 'none'}} href="">{props.item.title}</a>
              <hr />
        </div>
      </div>
    </div>
  )
}
export default ListFilm