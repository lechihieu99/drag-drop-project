import { StackSimple, SquaresFour } from "@phosphor-icons/react";
import { CaretCircleLeft, CaretCircleDown } from "@phosphor-icons/react";
import React, { useState } from "react";

import { Draggable } from 'react-drag-and-drop'

const Home = {
    data: ['Banner', 'Carousel']
}
const Layer = ({ setShowRightNav }) => {
    const [expand, setExpand] = useState(false)

    return (
        <>
            <div className="px-4 w-full">
                <div className="w-full flex gap-2 justify-start items-center cursor-pointer" onClick={() => setExpand(!expand)}>
                    {Home?.data?.length > 0 && !expand && (
                        <CaretCircleLeft size={14} color='black' />
                    )}
                    {Home?.data?.length > 0 && expand && (
                        <CaretCircleDown size={14} color='black' />
                    )}
                    <StackSimple size={20} color='black' />
                    Home
                </div>
                {expand && (
                    <div className="w-full pl-7 py-2 flex flex-col gap-2 overflow-hidden">
                        <div onClick={() => setShowRightNav(true)} onDoubleClick={() => setShowRightNav(true)} >
                            <Draggable type='components' data='Banner' className="w-full flex gap-2 justify-start items-center cursor-pointer">
                                <SquaresFour size={20} color='black' />
                                Banner
                            </Draggable>
                        </div>
                        <Draggable type='components' data='Carousel' className="w-full flex gap-2 justify-start items-center cursor-pointer">
                            <SquaresFour size={20} color='black' />
                            Carousel
                        </Draggable>
                    </div>
                )}
            </div>
        </>
    )
}

export default Layer