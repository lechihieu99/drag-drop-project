import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar/TabBar';
import HeadBar from './components/TabBar/HeadBar';
import LeftNav from './components/LeftNav/LeftNav';
import RightNav from './components/RightNav/RightNav';

import { Draggable, Droppable } from 'react-drag-and-drop'
import { useState } from 'react';

function App() {

  const [showRightNav, setShowRightNav] = useState(false)

  const [elementSelected, setElementSelected] = useState({
    type: '',
    width: '',
    height: '',
    x: '',
    y: '',
    data: ''
  })

  const onDrop = (data) => {
    console.log(data)
  }

  return (
    <div className="w-full h-screen bg-body">
      {/* <div className='w-full h-16 flex justify-center items-center'>Header</div> */}
      <HeadBar />
      <TabBar />
      <div className='w-full flex' style={{ height: 'calc(100% - 99.6px)' }} >
        <LeftNav setShowRightNav={setShowRightNav}  />
        <div className='w-[70%] h-full bg-body'>
          <Droppable
            types={['components']} // <= allowed drop types
            onDrop={onDrop}>
            {/* <DraggableWhitespace
              coors={coors}
              setCoors={setCoors}
              coorRatio={coorRatio}
              setRatio={setRatio}
              updateCoors={updateCoors}
            ></DraggableWhitespace> */}
            <div className='w-full bg-transparent' style={{ height: 'calc(100vh - 99.6px)' }}></div>
          </Droppable>
        </div>
        <RightNav show={showRightNav} elementSelected={elementSelected} />
      </div>
    </div>
  );
}

export default App;
