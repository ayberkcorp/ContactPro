import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactSearch = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { searchContacts, clearSearch, searched } = contactContext;

  useEffect(() => {
    if (searched === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      searchContacts(e.target.value);
    } else {
      clearSearch();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search Contacts'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactSearch;
