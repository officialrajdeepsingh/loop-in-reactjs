import React, { useState,useEffect } from 'react';

import { flushSync } from 'react-dom';

function App() {


  const [high, setHigh] = useState("")
  const [low, setLow] = useState(0)
  const [imegatly, setImegatly] = useState()
  const [result, setResult] = useState()

  let temp 
  let length = 700000000



  function withoutflushSync(params) {
    setHigh('change without flushSync it')
  }

  function takeTime() {

    for (let index = 0; index < length; index++) {
      temp = index * 2000
    }

    setResult(temp)

  }

  function takeTimeWithflushSync() {

  }

  function withflushSync() {
  }


  return (
    <div className="h-full flex flex-col justify-center bg-gray-100 py-6 sm:py-12">



      <h1 className='text-center text-2xl'>Result: {result} Change: {high} , {low} , {imegatly} </h1>
      <div className='flex mt-16 flex-row w-full justify-center'>

        <div className="bg-orange-200 p-5 flex flex-col justify-center items-center w-5/12">
          <h2 className='text-center text-4xl mb-5 '> Without flushSync </h2>
          <button className="bg-blue-200 h-10 p-2 hover:bg-blue-400  mt-5 text-xl" onClick={takeTime} > Take time to update </button>
          <button className="bg-blue-200 h-10 p-2 hover:bg-blue-400 mt-5 text-xl" onClick={withoutflushSync} >Without flushSync Imegatly update </button>

        </div>

        <div className="bg-blue-200 p-5 flex flex-col justify-center items-center w-5/12 ">

          <h2 className='text-center text-4xl mb-5'> With flushSync </h2>
          <button className="bg-orange-200 h-10 p-2 hover:bg-blue-400 mt-5 text-xl" onClick={takeTimeWithflushSync}> Take time update </button>
          <button className="bg-orange-200 h-10 p-2 hover:bg-blue-400  mt-5 text-xl" onClick={withflushSync} > with flushSync Imegatly update </button>

        </div>

      </div>
    </div>
  );

}

export default App;