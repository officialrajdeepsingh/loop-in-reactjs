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

let objData= {
   item1: {
        id:123,
        title:"What is a javascript?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
    item2:{
        id:124,
        title:"What is reactjs?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
    item3:{
        id:125,
        title:"What is tailwind css?",
        author:'Rajdeep Singh',
        description:"My description is here"
    },
}

function ForLoop(props) {

    // for loop
    const results = [];

    // for of
    const result = [];

    //  for in 
    const result2 = []
  
    for (let index = 0; index < data.length; index++) {
        
        const element = data[index];

        result.push(
            <div className='mx-auto w-3/6 mt-10' key={element.id*3}>
              <h2 className='text-xl'>{element.title}</h2>
              <span className='text-md text-gray-500'>{element.author}</span>
              <p className='text-md text-gray-600'>{element.description}</p>
            </div>
        )
        
    }

    for (const property in objData) {
        

        results.push(
            <div className='mx-auto w-3/6 mt-10' key={property.id*5}>
              <h2 className='text-xl'>{objData[property].title}</h2>
              <span className='text-md text-gray-500'>{objData[property].author}</span>
              <p className='text-md text-gray-600'>{objData[property].description}</p>
            </div>
        )

    }

    for (const element of data) {

        result2.push(
            <div className='mx-auto w-3/6 mt-10' key={element.id*2}>
              <h2 className='text-xl'>{element.title}</h2>
              <span className='text-md text-gray-500'>{element.author}</span>
              <p className='text-md text-gray-600'>{element.description}</p>
            </div>
        )
    }
  
    return <div className='p-10'>
        
        <h2 className='mt-2 text-center text-gray-800 text-2xl'> For loop</h2>

        {result} 
        
        <h2 className='mt-2 text-center text-gray-800 text-2xl'> For in Loop</h2>

        {results}

        <h2 className='mt-2 text-center text-gray-800 text-2xl'> For of Loop</h2>

        {result2}

        </div>;
}

export default ForLoop;