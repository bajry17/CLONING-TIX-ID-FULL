function ButtonContent(props)
  {
    return(
      <div className="d-flex text-black justify-content-center align-items-center m-1" style={{borderRadius: 25, backgroundColor: "transparent", width: 30, height: 30}} onClick={props.onClick}>
        <i style={{fontSize: 35, Color: "black"}} className={props.icon}></i>
      </div>
    )
  }

export default ButtonContent