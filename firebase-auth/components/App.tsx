'use client';

import { db } from '@/app/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { FormEvent, useState } from 'react';

const addDataToFireStore = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      name,
      email,
      message,
    });

    console.log('doc ref id', docRef.id);

    return true;
  } catch (error) {
    console.log('error during adding document', error);

    return false;
  }
};

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | TMouseEvent) => {
    e.preventDefault();

    const added = await addDataToFireStore(name, email, message);

    if (added) {
      setName('');
      setEmail('');
      setMessage('');

      alert('data added to fireStore DB!!');
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold m-10">Add Data To FireStore</h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message:
          </label>
          <input
            type="message"
            id="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
