import React from 'react';
import Contact from './components/Contact';

import './style.css';

// 1. populate the following array with the correct data
const contactInfo = [
{name:"Emmanuelle",
email:"📧emmanuel@email.com",
phone:"📞234234234",
isDeletable:true,
},
{name:"David",
email:"📧david@email.com",
phone:"📞666",
isDeletable:true
},
{name:"Sophie",
email:"📧david@email.com",
phone:"📞123",
isDeletable:false
},
{name:"Lucas",
email:"📧lucas@email.com",
phone:"📞456",
isDeletable:true
},
{name:"Emma",
email:"📧emma@email.com",
phone:"📞789",
isDeletable:false
}
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>
      {contactInfo.map((contactElement, index) => (
        <div>
          <Contact
            key={index}
            name={contactElement.name}
            email={contactElement.email}
            phone={contactElement.phone}
            isDeletable={contactElement.isDeletable}
          />
        </div>
      ))}
    </div>
  );
}

export default App;