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

    <div className="bg-zinc-950">
      <div className="TheFlotingThing">
        <div className='words'>
        <p className="text-white text-7xl py-10 font-extrabold inline-block px-1" style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'style={borderStyle}>EVENTS</p>


       
        </div>

      </div>
      <div className="TheScrollingThing flex space-x-10 overflow-x-auto py-10">
        {/* Add enough content to exceed the width of the container */}
        {users.map((user) => (
                <Card key={user.name} user={user} />
            ))}
        
      </div>
    </div>
  );
};

export default EventPage;
