import { StackSimple, SquaresFour } from "@phosphor-icons/react";
import { CaretCircleLeft, CaretCircleDown } from "@phosphor-icons/react";
import React, { useState } from "react";

import { Draggable } from 'react-drag-and-drop'

const Home = {
    data: ['Banner', 'Carousel']
}
const Layer = ({ setShowRightNav, setDefaultPosition }) => {
    const [expand, setExpand] = useState(false)

    const showInfo = (e) => {
        if(e.clientX && e.clientY)
        {
            setDefaultPosition({
                x: e.clientX - (window.innerWidth * 0.13),
                y: (window.innerHeight) - e.clientY - 99.6 + (e.target.parentNode.title ? -400 : 60)
            })
        }
    }

    const handleClick = () => {
        setExpand(!expand)
        setShowRightNav(true)
    }

    return (
        <>
            <div className="px-4 w-full">
                <div title="page" onDrag={showInfo} onDoubleClick={handleClick} className="w-full flex gap-2 justify-start items-center cursor-pointer" onClick={handleClick}>
                    {Home?.data?.length > 0 && !expand && (
                        <CaretCircleLeft size={14} color='black' />
                    )}
                    {Home?.data?.length > 0 && expand && (
                        <CaretCircleDown size={14} color='black' />
                    )}
                    <StackSimple size={20} color='black' />
                    <Draggable type='components' data='Home'>
                    Home
                    </Draggable>
                </div>
                {expand && (
                    <div className="w-full pl-7 py-2 flex flex-col gap-2 overflow-hidden">
                        <div onDrag={showInfo} onClick={() => setShowRightNav(true)} onDoubleClick={() => setShowRightNav(true)} >
                            <Draggable type='components' data='Banner' className="w-full flex gap-2 justify-start items-center cursor-pointer">
                                <SquaresFour size={20} color='black' />
                                Banner
                            </Draggable>
                        </div>
                        <div onDrag={showInfo} onClick={() => setShowRightNav(true)} onDoubleClick={() => setShowRightNav(true)} >
                        <Draggable type='components' data='Carousel' className="w-full flex gap-2 justify-start items-center cursor-pointer">
                            <SquaresFour size={20} color='black' />
                            Carousel
                        </Draggable>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Layer