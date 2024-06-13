import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import UlComponent from './ul_component'

function App() {

  let left = {
    'js': false,
    'html': false,
    'css': false,
    'vite': false,
  }

  let right = {
    'react': false,
    'java': false,
    'rust': false,
    'nextjs': false
  }


  let [leftObject, setLeftObjects] = useState(left)
  let [rightObject, setRightObjects] = useState(right)

  function changeStatusOfRightObject(e) {
    rightObject[e.target.value] = e.target.checked 
    setRightObjects(rightObject)
  }

  function changeLeftObject(e) {
    leftObject[e.target.value] = e.target.checked 
    console.log(leftObject[e.target.value])
    setLeftObjects(leftObject)
  }


  function moveToRight() {
    let newObject = {}
    Object.keys(leftObject).map((keys) => {
      newObject[keys] = false
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
        newObject[key] = false;
      }else{
        newRightObject[key] = false;
      }
      console.log(leftObject, rightObject);
    })
   
    setRightObjects(newRightObject)
    setLeftObjects({...leftObject,...newObject})
  }

  function moveToLeft() {
    let newObject = {}
    Object.keys(rightObject).map((keys) => {
      newObject[keys] = false
    })
    setLeftObjects({ ...leftObject, ...newObject })
    setRightObjects({})
  }

  function moveOnlySelectedTORight() {

    let newObject = {}
    let newLeftObject={}
    console.log(leftObject)
    Object.keys(leftObject).forEach((key) => {
      console.log(leftObject[key])
      if (leftObject[key]) {
        newObject[key] = false;
      }else{
        newLeftObject[key] = false;
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
