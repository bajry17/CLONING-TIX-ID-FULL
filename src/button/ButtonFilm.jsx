function ButtonFilm(props)
{
  return(
    <div className="d-flex text-white justify-content-center align-items-center m-1" style={{borderRadius: 25, backgroundColor: "transparent", width: 30, height: 30}} onClick={props.onClick}>
      <i style={{fontSize: 35, Color: "black"}} className={props.icon}></i>
    </div>
  )
}
export default ButtonFilm