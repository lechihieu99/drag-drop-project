import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar/TabBar';
import HeadBar from './components/TabBar/HeadBar';
import LeftNav from './components/LeftNav/LeftNav';
import RightNav from './components/RightNav/RightNav';
import Whitespace from './components/Whitespace/Whitespace';

import { Draggable, Droppable } from 'react-drag-and-drop'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);
  const [showRightNav, setShowRightNav] = useState(false)
  // const [mouseUpPosition, setMouseUpPosition] = useState({x: 0, y: 0});
  
  const [elementSelected, setElementSelected] = useState([]);

  const [defaultPosition, setDefaultPosition] = useState({
    x: 100,
    y: 100
  })

  const addElement = (typeName) => {
    setData(prev => {
      const newEl = {
        type: typeName,
        x: defaultPosition.x,
        y: defaultPosition.y,
        dw: typeName === 'Home' ? 600 : 60,
        dh: typeName === 'Home' ? 500 : 60,
        w: typeName === 'Home' ? 600 : 60,
        h: typeName === 'Home' ? 500 : 50,
        isSelected: false,
        z: typeName === 'Home' ? 2 : 3,
      };
      let typeFound = prev.find((type) => type.typeName === typeName);
      // Not found type 
      if (!typeFound) {
        typeFound = {
          typeId: data.length + 1,
          typeName,
          list: [{...newEl, id:1}],
        };
        prev.push(typeFound);
        return prev;
      }
      // Found type
      else{
        typeFound.list.push({ ...newEl, id: typeFound.list.length + 1 });
        return prev;
      }
    })
    setUpdate(prev => prev+1);
  }

  const updateElement = (type, id, values, syncValues) => {
    setData((prev) =>
      prev.map(typeBlock => {
        // Update values inside this type Blockblock
        if (typeBlock.typeName===type){
          typeBlock.list = typeBlock.list.map(el => {
            if (el.id === id) return { ...el, ...values };
            if (syncValues) return {...el, ...syncValues};
            return el;
          })
          return typeBlock;
        }
        if (syncValues) {
          typeBlock.list = typeBlock.list?.map((el) => {
            return { ...el, ...syncValues };
          });
          return typeBlock;
        }
        return typeBlock;
      })
      // prev.map((coor) => {
        //   if (coor.id === id) return { ...coor, ...values };
        //   if (syncValues) return { ...coor, ...syncValues };
        //   return coor;
        // })
    );
    setUpdate(prev => prev+1);
  };

  
  const onDrop = (value) => {
    addElement(value.components);
  }
  
  // useEffect(() => {
  //   const handleUp = (event) => {

  //       console.log('on mouse up')
  //     // if (!showRightNav) return;
  //     // const whitespace = document.querySelector(".whitespace");
  //     // const rect = whitespace?.getBoundingClientRect();
  //     // mouseXRelative = event.clientX - rect.left;
  //     // mouseYRelative = rect.height - (event.clientY - rect.top);
  //     // setMouseUpPosition({x: mouseXRelative, y: mouseYRelative})
  //   };
  //   document.addEventListener("mouseup", handleUp, true);

  //   return () => {
  //     document.removeEventListener("mouseup", handleUp);
  //   };
  // }, [showRightNav]);

  return (
    <div className="w-full h-screen bg-body">
      {/* <div className='w-full h-16 flex justify-center items-center'>Header</div> */}
      <HeadBar />
      <TabBar />
      <div className='w-full flex' style={{ height: 'calc(100% - 99.6px)' }} >
        <LeftNav setShowRightNav={setShowRightNav} setDefaultPosition={setDefaultPosition} />
        <div className='w-[70%] h-full bg-body z-20'>
          <Droppable
            types={['components']} // <= allowed drop types
            onDrop={onDrop}
            >
            <Whitespace
              showRightNav={showRightNav}
              data={data}
              setData={setData}
              update={update}
              updateElement={updateElement}
              // coors={coors}
              // setCoors={setCoors}
              // coorRatio={coorRatio}
              // setRatio={setRatio}
              // updateCoors={updateCoors}
            ></Whitespace>
            {/* <div className='w-full bg-transparent' style={{ height: 'calc(100vh - 99.6px)' }}></div> */}
          </Droppable>
        </div>
        <RightNav show={showRightNav} elementSelected={elementSelected} />
      </div>
    </div>
  );
}

export default App;