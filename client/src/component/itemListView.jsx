import React from 'react';
import ItemListEntry from './itemListEntry.jsx';
import { Grid } from 'semantic-ui-react';

const ItemList = (props) => {
  console.log('props passed down to item list', props);
  return (
    <Grid centered divided columns={3}>
      {props.items.map(item => (
        <ItemListEntry {...props.actions} name={item.name} quantity={item.quantity} type={item.type} id={item.id} key={item.id}/>
      ))}
    </Grid> 
  )
}

export default ItemList; 
