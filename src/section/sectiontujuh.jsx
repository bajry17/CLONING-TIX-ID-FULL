import ListPartner from "../card/listpartner"
function SectionTujuh(props)
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
                <ListPartner key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionTujuh