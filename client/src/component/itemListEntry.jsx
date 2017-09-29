import React from 'react';
import { Grid } from 'semantic-ui-react';

const Item = (props) => {
  console.log('item props:', props);
  return (
    <Grid.Column textAlign="center">
      <div>
        {props.name} {props.quantity}
      </div>
      <button 
        className="ui mini icon button"
        onClick={() => {props.updateItem({
          name: props.name, 
          quantity: props.quantity + 1,
          type: props.type
        }, props.id)}}
      ><i className="plus icon"></i></button>
      <button 
        className="ui mini icon button"
        onClick={() => {props.updateItem({
          name: props.name,
          quantity: props.quantity - 1,
          type: props.type
        }, props.id)}}
      ><i className="minus icon"></i></button>
      <button 
        className="ui mini icon button"
        onClick={()=> {props.deleteItem(props.id)}}
      ><i className="remove icon"></i></button>
    </Grid.Column>
  )
}



export default Item;