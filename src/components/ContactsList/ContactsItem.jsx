import { Item, Button } from './ContactsItem.styled';
import Context from 'components/Context';

export const ContacsItem = () => {
  return (
    <Context.Consumer>
      {({ filter, contacts, onDeleteName }) => {
        const normalazedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalazedFilter)
        );
        return visibleContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <p>
              {name} : {number}
            </p>
            <Button type="button" onClick={() => onDeleteName(id)}>
              Delete
            </Button>
          </Item>
        ));
      }}
    </Context.Consumer>
  );
};
