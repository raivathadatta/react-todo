import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UlComponent from './ul_component'

function App() {

  let left = {
    'js': 'unchecked',
    'html': 'unchecked',
    'css': 'unchecked',
    'vite': 'unchecked'
  }

  let right = {
    'react': 'unchecked',
    'java': 'unchecked',
    'rust': 'unchecked',
    'nextjs': 'unchecked'
  }


  let [leftObject, setLeftObjects] = useState(left)
  let [rightObject, setRightObjects] = useState(right)

  function changeStatusOfRightObject(e) {
    rightObject[e.target.value] = e.target.checked ? 'checked' : 'unchecked'
    setRightObjects(rightObject)
  }

  function changeLeftObject(e) {
    leftObject[e.target.value] = e.target.checked ? 'checked' : 'unchecked'
    setLeftObjects(leftObject)
  }


  function moveToRight() {
    let newObject = {}
    Object.keys(leftObject).map((keys) => {
      newObject[keys] = 'unchecked'
    })
    setLeftObjects({})
    setRightObjects({ ...rightObject, ...newObject })

  }


  function moveOnlySelectedToLeft() {
    let newObject = {}
    let newRightObject={}
    console.log(rightObject)
    Object.keys(rightObject).forEach((key) => {
      console.log(key)
      if (rightObject[key] == 'checked') {
        newObject[key] = 'unchecked';
      }else{
        newRightObject[key] = 'unchecked';
      }
      console.log(leftObject, rightObject);
    })
   
    setRightObjects(newRightObject)
    setLeftObjects({...leftObject,...newObject})
  }

  function moveToLeft() {
    let newObject = {}
    Object.keys(rightObject).map((keys) => {
      newObject[keys] = 'unchecked'
    })
    setLeftObjects({ ...leftObject, ...newObject })
    setRightObjects({})
  }

  function moveOnlySelectedTORight() {

    let newObject = {}
    let newLeftObject={}
    console.log(leftObject)
    Object.keys(leftObject).forEach((key) => {
      console.log(key)
      if (leftObject[key] == 'checked') {
        newObject[key] = 'unchecked';
      }else{
        newLeftObject[key] = 'unchecked';
      }
      console.log(leftObject, rightObject);
    })
   
    setRightObjects({...rightObject,...newObject})
    setLeftObjects(newLeftObject)

  }
  return (
    <>
      <div className="w-[40%] h-[300px] border-2 border-black flex  justify-start" id="left_component"  >

    <UlComponent list = {leftObject} cb={changeLeftObject} ></UlComponent>


      </div>
      <div className="w-[20%] h-[300px]  border-2 border-black flex flex-col " id="middle_component">

        <button onClick={moveToRight} className=' border-2 border-b-black h-[25%]'>{">>"} </button>
        <button className='border-2 border-b-black h-[25%]' onClick={moveOnlySelectedTORight}>{">"}</button>
        <button className='border-2 border-b-black  h-[25%]'  onClick={moveOnlySelectedToLeft}>{"<"}</button>
        <button className='border-2  h-[25%]' onClick={moveToLeft}>{"<<"}</button>
      </div>

      <div className="w-[40%]  h-[300px] border-2 border-black" id="right_component">

        <UlComponent list = {rightObject} cb={changeStatusOfRightObject}></UlComponent>
       
      </div>
    </>
  )
}

export default App
