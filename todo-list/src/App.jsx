import { useState } from 'react'

import './App.css'
import UlComponent from './ul_component'

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
function App() {


  let lefInitialObject = JSON.parse(JSON.stringify(left))
  let rightInitialObject = JSON.parse(JSON.stringify(right))

  let [leftObject, setLeftObjects] = useState(lefInitialObject)
  let [rightObject, setRightObjects] = useState(rightInitialObject)

  // let isDisableMoveAllEleentsToRight= Object.keys(rightObject).length !=0

  function changeStatusOfRightObject(e) {

    const newobject = {...rightObject}
    newobject[e.target.value] = e.target.checked
    // console.log(rightObject[e.target.value], 'right')

    setRightObjects(newobject)
  }

  function changeStatusOfLeftObject(e) {
    const newobject = {...leftObject}
    newobject[e.target.value] = e.target.checked
    // console.log(rightObject[e.target.value], 'right')

    setLeftObjects(newobject)
  }


  function moveToRight() {
    let newObject = {}
    Object.keys(leftObject).map((keys) => {
      newObject[keys] = false
    })

    setLeftObjects({})
    setRightObjects({ ...rightObject, ...newObject })

  }



  function moveToLeft() {
    let newObject = {}
    Object.keys(rightObject).map((keys) => {
      newObject[keys] = false
    })
    setLeftObjects({ ...leftObject, ...newObject })
    setRightObjects({})
  }




  function moveOnlySelectedToLeft() {
    let newObject = {}
    let newRightObject = {}
    console.log(rightObject)
    Object.keys(rightObject).forEach((key) => {
      console.log(key)
      if (rightObject[key]) {
        newObject[key] = false;
      } else {
        newRightObject[key] = false;
      }
      console.log(leftObject, rightObject);
    })

    setRightObjects(newRightObject)
    console.log(leftObject, rightObject, 'moveonlyselectedtoleft');
    setLeftObjects({ ...leftObject, ...newObject })
  }


  function moveOnlySelectedTORight() {

    let newObject = {}
    let newLeftObject = {}
    console.log(leftObject)
    Object.keys(leftObject).forEach((key) => {
      console.log(leftObject[key])
      if (leftObject[key]) {
        newObject[key] = false;
      } else {
        newLeftObject[key] = false;
      }
      console.log(leftObject, rightObject);

    })
    console.log(leftObject, rightObject, 'moveonlyselectedtoright');

    setRightObjects({ ...rightObject, ...newObject })
    setLeftObjects(newLeftObject)

  }

  // let disableMoveToRight = () => Object.values(leftObject).some((event) => event)
  // let disableMoveToLeft = () => Object.values(rightObject).some((event) => {
  //   console.log(event)
  //   return event
  // })

  function stateChange(obj){
    const result = Object.keys(obj).some((item) => obj[item] === true)
    return result
  }


  //console.log(leftObject, rightObject, Object.values(leftObject).some((value) => value), Object.keys(rightObject).length == 0);
  return (
    <>
      <div className="w-[40%] h-[300px] border-2 border-black flex  justify-start" id="left_component"  >

        <UlComponent list={leftObject} cb={changeStatusOfLeftObject} ></UlComponent>


      </div>
      <div className="w-[20%] h-[300px]  border-2 border-black flex flex-col p-5" id="middle_component">

        <button onClick={moveToRight} className=' border-2 border-black h-[25%] mb-2 disabled:bg-gray-500' disabled={Object.keys(leftObject).length == 0} >{">>"} </button>
        <button className='border-2 border-black h-[25%] mb-2 disabled:bg-gray-500' onClick={moveOnlySelectedTORight} disabled={!stateChange(leftObject)} >{">"}</button>
        <button className='border-2 border-black  h-[25%] mb-2  disabled:bg-gray-500' onClick={moveOnlySelectedToLeft} disabled={!stateChange(rightObject)}>{"<"}</button>
        <button className='border-2  border-black h-[25%]  disabled:bg-gray-500' onClick={moveToLeft} disabled={Object.keys(rightObject).length == 0} >{"<<"}</button>
      </div>

      <div className="w-[40%]  h-[300px] border-2 border-black" id="right_component">

        <UlComponent list={rightObject} cb={changeStatusOfRightObject}></UlComponent>

      </div>
    </>
  )
}

export default App
