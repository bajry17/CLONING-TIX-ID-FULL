function ButtonEvent(props)
{
    return(
        <div style={{borderRadius: 20}}>
            <button className="m-auto" style={{backgroundColor: "orange", color:'rgb(25 44 79/var(--tw-text-opacity))', fontWeight: "bold", borderRadius: 35, width: 250, height: 50}}>{props.label}</button>
        </div>
    )
}
export default ButtonEvent