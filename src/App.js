import { useState,useEffect } from "react";
import "./App.css"
import Menu from "./components/Menu"
import Order from "./components/Order"
function App(){

  const ItemList=["item1", "item2" ,"item3", "item4"]
  const [count,setCount] = useState([]);
  
  useEffect(()=>{
    const len=ItemList.length;
    const temp=[];
    for(let i=0;i<len;i++){
    temp.push(0);
    }
    setCount(temp);

  },[]);
  

  function add(ind){
    console.log("added");
    const list=[...count];
    list[ind]+=1;
    setCount(list);
  }

  function deleteItems(index){
    console.log("delete");
    const ar=[...count];
    if(ar[index]>0) ar[index]-=1;
    setCount(ar);
  }

  return (
    <div className="page">
      <div className="MenuList">
        <h2 id="Menu">Menu Items</h2>
        <Menu list={ItemList} fn={add} />
      </div>
      <div className="OrderList">
        <h2 id="order">Ordered Items</h2>
        <Order list={ItemList} cnt={count} fun={deleteItems}/>
      </div>
    </div>
  )
}
export default App