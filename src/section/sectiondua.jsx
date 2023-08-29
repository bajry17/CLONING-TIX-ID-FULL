import DescFilm from "../card/descfilm"
function SectionDua(props)
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
                <DescFilm key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionDua