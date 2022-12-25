import React from 'react';

function Card({item}) {
    return (
            <div className='mx-auto w-3/6 mt-10 bg-gray-400 ' key={item.id * 52}>
<h2 className='text-xl'>{item.title}</h2>
<span className='text-md text-gray-500'>{item.author}</span>
<p className='text-md text-gray-600'>{item.description}</p>
</div>
    );
}

export default Card;