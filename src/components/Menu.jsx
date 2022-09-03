function Menu(props){
    const Item=props.list;
    return(
        <div>
            <ul>
                <h4>Items   </h4>
                {Item.map((element,index)=>{
                    return(
                        <li key={`item${index}`} className="list">
                            {element} 
                            <button onClick={()=>props.fn(index)}>Add</button> 
                        </li>
                    )
                })}
            </ul>
           
        </div>
    )
}
export default Menu