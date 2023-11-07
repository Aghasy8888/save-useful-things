import React from 'react';
import { Name } from '../Person/Person.types';

type PersonListProps = {
    names: Name[]
}

export default function PersonList(props: PersonListProps) {
    const nameComponents = props.names.map((name) => (
        <h2>{name.lastName} {name.firstName}</h2>
    ));

  return (
    <div>
        {
           nameComponents
        }
    </div>
  )
}