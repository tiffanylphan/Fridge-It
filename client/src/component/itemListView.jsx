import React from 'react';
import ItemListEntry from './itemListEntry.jsx';
import { Table } from 'semantic-ui-react';

const ItemList = (props) => {
  console.log('props passed down to item list', props);
  if (props.items.length) {
    return (
      <Table celled>
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='1'>qty</Table.HeaderCell>
          <Table.HeaderCell colSpan='1'>name</Table.HeaderCell>
          <Table.HeaderCell colSpan='3'>edit</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        {props.items.map(item => (
          <ItemListEntry {...props.actions} name={item.name} quantity={item.quantity} type={item.type} id={item.id} key={item.id}/>
        ))}
      </Table.Body>
      </Table> 
    )
  } else {
    return (
      <div>
        Time to go to the store :(
      </div>
    )
  }
}

export default ItemList; 
