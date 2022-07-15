import React from 'react';
import ComponentB from './componenteB';
import { Contacto } from './contact.class';


const ComponenteA = () => {
    const contactoInfo = new Contacto(
        "Ivan",
        "Trullenque",
        "itrullenque@gmail.com",
        true
    );
  return (
    <>
        <ComponentB contacto={contactoInfo} />
    </>
  )
}

export default ComponenteA;