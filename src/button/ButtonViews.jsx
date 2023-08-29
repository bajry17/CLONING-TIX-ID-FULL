function ButtonViews(props)
{
  return(
    <div className="container" onClick={props.onClick} style={{borderRadius: 20}}>
      <button className="p-2 ps-3 pl-3" style={{color: 'blue', fontWeight: "bold", borderRadius: 25, fontSize: '{props.lebar}'}}>{props.label}</button>
    </div>
  )
}
export default ButtonViews