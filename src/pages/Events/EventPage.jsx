import React from 'react';
import Card from './card';


const EventPage = () => {
    const borderStyle = {
        color: 'transparent',
        WebkitTextStrokeWidth: '0.5px',
        WebkitTextStrokeColor: 'white',
    }
      
    
  return (

    <div className="bg-zinc-950">
      <div className="TheFlotingThing">
        <marquee>
        <p className="text-white text-7xl py-10 font-extrabold inline-block px-1" style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'> EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'style={borderStyle}>EVENTS</p>
        <p className='text-white text-7xl py-10 font-extrabold inline-block px-2'> EVENTS</p>

       
        </marquee>

      </div>
      <div className="TheScrollingThing flex space-x-10 overflow-x-auto py-10">
        {/* Add enough content to exceed the width of the container */}
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
        <div className="min-w-80"><Card/></div>
      </div>
    </div>
  );
};

export default EventPage;
