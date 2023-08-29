import ListNow from "../card/listnow"
function NowPertama(props)
  {
    return(
      <div>
        <div className="row" >
          {
            props.data?.map((item, key) =>  {
              return(
                <ListNow key={key} item={item}/>
              )
            })  
          }
        </div>
      </div>
    )
  }
  export default NowPertama