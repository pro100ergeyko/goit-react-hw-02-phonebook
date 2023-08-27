import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ onDelete, contactFilter }) => {
  const filterResult = contactFilter();

  return (
    <ul>
      {filterResult.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
