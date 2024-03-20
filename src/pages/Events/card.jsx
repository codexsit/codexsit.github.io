import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
export default function Card({user}) {

    const [truncatedText, setTruncatedText] = useState('');
    const maxLength = 25; // Maximum number of words
  
    useEffect(() => {
        const text  = user.description
        const words = text.split(' ');
      
        if (words.length > maxLength) {
        setTruncatedText(words.slice(0, maxLength).join(' ') + '...');
      } else {
        setTruncatedText(text);
      }
      }, []);
  return (
    <> 
      <div className="  shadow-lg bg-zinc-600 rounded-2xl max-w-96 h-[30rem] relative">
      <img  className="w-mag rounded-se-2xl rounded-ss-2xl" src={`${user.image}`} alt={user.alt} />
        <div className='content-box px-4 pt-2'>
        <p className="py-1 font-medium text-white break-words">{user.name}</p>
        <p className="date font-thin py-2 pr-3 text-zinc-400">{user.date}</p>
        <p className="description text-white font-light ">{truncatedText}</p>
        </div>
        <Link to={user.link} className="absolute bottom-0 left-0 right-0 text-center tracking-widest font-thin drop-shadow-lg text-white py-7 hover:text-red-600">READ MORE</Link>
      </div> 
    </>
  );
}
