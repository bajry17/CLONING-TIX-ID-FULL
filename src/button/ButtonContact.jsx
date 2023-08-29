function ButtonContact  (props)
{
    return(
        <div style={{borderRadius: 20}}>
            <button className="m-auto" style={{borderColor:'orange',backgroundColor:'transparent', color:'orange', fontWeight: "bold", borderRadius: 35, width: 250, height: 50}}>{props.label}</button>
        </div>
    )
}
export default ButtonContact    