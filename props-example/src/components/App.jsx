import React from 'react';
import Header from './Header';
import Card from './Card';
import contacts from '../contacts';
import Avatar from './Avatar';

function createCard(contact) {
  return <Card
    key={contact.id} //React components children need unique key
    id={contact.id} //custom id
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}

  />
}


function App() {
  return (
    <div>

      <Header className="heading" />
      <Avatar
        img="https://cdn.photofunia.com/effects/jedi/examples/1guyznl_o.jpg" />
      {contacts.map(createCard)}

      {/*<Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />*/}

    </div>
  );
}

export default App;
