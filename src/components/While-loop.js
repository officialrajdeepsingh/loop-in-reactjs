import React from 'react';

let data=[
    {
        id:123,
        title:"What is a javascript?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
    {
        id:124,
        title:"What is reactjs?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
    {
        id:125,
        title:"What is tailwind css?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
]

function WhileLoop(props) {

    // while loop
    const result = []

    // do while
    const results = [];;

    let index = 0;

    do {

        const element = data[index];

        result.push(
                <div className='mx-auto w-3/6 mt-10' key={element.id*52}>
                  <h2 className='text-xl'>{element.title}</h2>
                  <span className='text-md text-gray-500'>{element.author}</span>
                  <p className='text-md text-gray-600'>{element.description}</p>
                </div>
        )


            
            index = index + 1;

      } while (index < data.length);


    //  while loop
    let i=0

    while (i < data.length) {

        const element = data[i];

        results.push(
                    <div className='mx-auto w-3/6 mt-10' key={element.id*58}>
                        <h2 className='text-xl'>{element.title}</h2>
                        <span className='text-md text-gray-500'>{element.author}</span>
                        <p className='text-md text-gray-600'>{element.description}</p>
                    </div>
            )

        i = i + 1;

    }


    return (
        <div className='p-10'>
        
        <h2 className='mt-2 text-center text-gray-800 text-2xl'> do While loop</h2>

        {result} 
        
        <h2 className='mt-2 text-center text-gray-800 text-2xl'> while loop</h2>

        {results}

        </div>
    );
}

export default WhileLoop;