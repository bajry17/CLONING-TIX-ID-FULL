import ListJenis from "../card/listjenis"
function SectionEnam(props)
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
                <ListJenis key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionEnam