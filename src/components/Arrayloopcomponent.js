import React from 'react';
import Card from './Card';

let data = [
    {
        id: 123,
        title: "What is a javascript?",
        author: 'Rajdeep Singh',
        description: "My description is here"
    },
    {
        id: 124,
        title: "What is reactjs?",
        author: 'Rajdeep Singh',
        description: "My description is here"
    },
    {
        id: 125,
        title: "What is tailwind css?",
        author: 'Rajdeep Singh',
        description: "My description is here"
    },
]


function ArrayLoopComponent(props) {

    return (
        <div className='p-10'>

            <h2 className='mt-2 text-center text-gray-800 text-2xl '> Map with component </h2>

            {
                data.map((item) => {
                    return <Card item={item} />
                })
            }
            
        </div>
    );
}

export default ArrayLoopComponent;