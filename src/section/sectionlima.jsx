import ListVideo from "../card/listvideo"
function SectionLima(props)
  {
    return(
      <div>
        <div className="d-flex justify-content-between">
          <span className="h2 text-white" style={{fontWeight: 'bold'}}>{props.title}</span>
        </div>
        <div className="row" >
          {
            props.data?.map((item, key) =>  {
              return(
                <ListVideo key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default SectionLima