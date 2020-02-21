import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, searched, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Oh no! Your contact list is empty...for now.</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {searched !== null
            ? searched.map(contact => <ContactItem contact={contact} />)
            : contacts.map(contact => <ContactItem contact={contact} />)}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Contacts;
