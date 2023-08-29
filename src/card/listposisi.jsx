function ListPosisi(props)
{
    return(
        <>
        <div key={props.key} className="pe-2">
            <div className="card" style={{border: 'none'}}>
                <div className="card-body">
                <div>
                   {props.item.posisi}
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ListPosisi




