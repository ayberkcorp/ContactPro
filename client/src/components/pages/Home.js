import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactSearch from '../contacts/ContactSearch';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <h2 className='text-primary'>Your Contacts</h2>
        <ContactSearch />
        <Contacts />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
