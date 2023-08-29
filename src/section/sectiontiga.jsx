import InfoFilm from "../card/infofilm"
function SectionTiga(props)
  {
    return(
      <div>
        <div className="d-flex justify-content-between">
          <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
        </div>
        <div className="row" >
          {
            props.data?.map((item, key) =>  {
              return(
                <InfoFilm key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionTiga