import React from 'react'
import ItemListEntry from './itemListEntry.jsx'

const ItemList = (props) => {
  return (
    <div>
    {props.map(item => (
      <ItemListEntry name={item.name} quantity={item.quantity} type={item.type}/>
    ))}
    </div> 
  )
}

export default ItemList; 
