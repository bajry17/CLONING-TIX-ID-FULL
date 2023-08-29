function ButtonBuy(props)
{
  return(
    <div className="px-3 py-2 text-center" onClick={props.onClick} style={{backgroundColor: '#173E6B', borderRadius: 20}}>
      <span style={{color: 'white', fontWeight: "bold"}}><i className={props.icon}></i>{props.label}</span>
    </div>
  )
}
export default ButtonBuy