function Service(props, children)
{
    return(
        <>
        <div className="service">
            {props.children}
        </div>
        </>
    )
}
export default Service