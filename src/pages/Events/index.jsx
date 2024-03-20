import React from 'react';
import Card from './card';
import userData from './events.json'
import { useState, useEffect } from 'react';

const EventPage = () => {
    const borderStyle = {
        color: 'transparent',
        WebkitTextStrokeWidth: '0.5px',
        WebkitTextStrokeColor: 'white',
    }
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userData);
    }, []);
  return (

    <div className="">
      <div className=" flex flex-row flex-nowrap w-full  overflow-hidden ">
   
        <p className="text-white text-7xl py-10 font-extrabold inline-block px-1 words" style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2 words'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2 words'style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2 words'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2 words'style={borderStyle}>EVENTS</p>
        
      </div>
      <div className=" flex flex-wrap gap-10 justify-center align-items  py-10">
        {/* Add enough content to exceed the width of the container */}
        {users.map((user) => (
                <Card key={user.name} user={user} />
            ))}
        
      </div>
    </div>
  );
};

export default EventPage;
