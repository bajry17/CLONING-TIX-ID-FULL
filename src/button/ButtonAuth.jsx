import Navbar from "../inc/navbar"
function ButtonAuth(props)
{
  return(
    <div className="px-3 py-2" onClick={props.onClick} style={{backgroundColor: props.mode === 'gold' ? '#D5A54F' : 'white', borderRadius: 20}}>
      <span style={{color: props.mode === 'dark' ? 'lightgrey' : 'black', fontWeight: "bold"}} >{props.label}</span>
    </div>
  )
}
export default ButtonAuth