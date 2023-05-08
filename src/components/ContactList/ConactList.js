import {ListItem, Item, ListButton} from './ContactList.styled'
import PropTypes from 'prop-types';

export const ContactList =({contacts, onDeleteContact})=>{
    // console.log(typeof contacts);
    // contacts.map(element => {
    //     console.log(element)
    // });
    
    return(
        <ListItem>
            
            {contacts.map(({id, name, number}) => (
                <Item key={id}>
                    <p>{name}:</p><p>  {number}</p>
                    <ListButton  onClick={( )=> onDeleteContact(id)}>Delete</ListButton>
                </Item>
            ))}
    </ListItem>

    )
}

ListItem.propTypes = {
    id:PropTypes.string,
    name:PropTypes.string,
    number:PropTypes.string,
    onDeleteContact:PropTypes.func,
}