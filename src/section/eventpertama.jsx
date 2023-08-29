import ListEvent from "../card/listevent"
function EventPertama(props)
  {
    return(
      <div>
        <div className="row" >
          {
            props.data?.map((item, key) =>  {
              return(
                <ListEvent key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default EventPertama