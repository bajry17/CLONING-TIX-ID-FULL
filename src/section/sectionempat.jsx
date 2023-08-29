import ListFilm from "../card/listfilm"
function SectionEmpat(props)
  {
    return(
      <div>
        <div className="row mt-5 " >
        <span className="ms-3">MORE NEWS</span>
          {
            props.data?.map((item, key) =>  {
              return(
                <ListFilm key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionEmpat