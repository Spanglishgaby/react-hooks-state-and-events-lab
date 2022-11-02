import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
 const [selectedCategory, setSelectedCategory] = useState("")

 const changeFilter = (e)=>{
  setSelectedCategory(e.target.value)
  //console.log(e.target.value)
 }
//  function matchItem(item){
//   return item.category === selectedCategory 
//  }
  const filteredItems =  items.filter( items.category === selectedCategory)

  //console.log(filteredItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange ={changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
