import React from 'react';
import { PersonProps } from './Person.types';


export default function Person(props: PersonProps) {
    const {lastName, firstName} = props.name;
  return (
    <div>
      {lastName} {firstName} 
    </div>
  )
}
