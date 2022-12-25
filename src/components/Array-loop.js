import React from 'react';

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


function ArrayLoop(props) {
    const results = [];

    data.forEach((item, index) => {

        results.push(
            <div className='mx-auto w-3/6 mt-6' key={index}>
                <h2>{item.title}</h2>
                <h4>{item.description}</h4>
                <span>{item.author}</span>
            </div>
        );
    });

    return (
        <div className='p-10'>

            <h2 className='mt-2 text-center text-gray-800 text-2xl'> Map() </h2>

            {
                data.map((item) => {
                    return <div className='mx-auto w-3/6 mt-10' key={item.id * 52}>
                        <h2 className='text-xl'>{item.title}</h2>
                        <span className='text-md text-gray-500'>{item.author}</span>
                        <p className='text-md text-gray-600'>{item.description}</p>
                    </div>
                })
            }

            <h2 className='mt-2 text-center text-gray-800 text-2xl'> forEach loop</h2>

            {results}

            <h2> For loop directly use in react (It is not work ) </h2>

            {
                data.forEach((item) => {
                    return <div className='mx-auto w-3/6 mt-10' key={item.id * 52}>
                                <h2 className='text-xl'>{item.title}</h2>
                                <span className='text-md text-gray-500'>{item.author}</span>
                                <p className='text-md text-gray-600'>{item.description}</p>
                            </div>
                })
            }
            
        </div>
    );
}

export default ArrayLoop;