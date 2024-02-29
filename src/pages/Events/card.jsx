import React, { useState, useEffect } from 'react';

export default function Card() {
    const [truncatedText, setTruncatedText] = useState('');
    const maxLength = 25; // Maximum number of words
  
    useEffect(() => {
      const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id nunc volutpat, auctor sapien et, condimentum dolor. Aenean magna justo, vulputate quis feugiat non, maximus bibendum augue. Ut ligula odio, tristique fermentum libero a, ornare mattis arcu. Cras suscipit nisi purus, eget malesuada tortor tincidunt vitae. Vivamus vitae nibh ut est sollicitudin bibendum. Vestibulum interdum quis metus laoreet cursus. Donec eu sodales neque. Praesent suscipit nec nisi in rutrum. Sed varius odio nec ante vulputate, id egestas tellus dapibus.";
      const words = text.split(' ');
      if (words.length > maxLength) {
        setTruncatedText(words.slice(0, maxLength).join(' ') + '...');
      } else {
        setTruncatedText(text);
      }
    }, []);
  return (
    <> 
      <div className="shadow-lg bg-zinc-600 rounded-2xl max-w-96 h-[30rem] relative">
        <img  className="w-mag rounded-se-2xl rounded-ss-2xl" src="src/assets/images/example_pic.jpeg" alt="its-5am-im-tired-AF.jpeg" />
       <div className='content-box px-4 pt-2'>
        <p className="py-1 font-medium text-white break-words">Some Title Here</p>
        <p className="date font-thin py-2 pr-3 text-zinc-400">17/02/2024</p>
        <p className="description text-white font-light ">{truncatedText}</p>
        </div>
        <a href="https://example.com" className="absolute bottom-0 left-0 right-0 text-center tracking-widest font-thin drop-shadow-lg text-white py-7 hover:text-red-600">READ MORE</a>
      </div> 
    </>
  );
}
