import FilmCard from "../card/filmcard"
function Section(props)
  {
    return(
      <div>
        <div className="d-flex justify-content-between">
          <span className="h2 text-black" style={{fontWeight: 'bold'}}>{props.title}</span>
        </div>
        <div className="row">
          {
            props.data?.map((item, key) =>  {
              return(
                <FilmCard key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default Section