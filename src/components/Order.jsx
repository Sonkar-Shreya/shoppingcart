function Order(props){
    const array=props.list;
    return (
        <div>
            <ul>
                {
                    array.map((element,index)=>{
                       return (
                        <li key={`order${index}`} style={{
                            display: props.cnt[index]>0? "block" : "none"
                        }}>
                            {element}:{props.cnt[index]}
                            <button onClick={()=>props.fun(index)}>Del</button>
                        </li>
                       )
                    })
                }
            </ul>
        </div>
    )
}
export default Order