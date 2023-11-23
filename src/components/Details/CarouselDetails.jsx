import { Plus } from "@phosphor-icons/react";
import React, { useState } from "react";

const CarouselDetails = () => {
    const [data, setData] = useState([])

    return (
        <>
        <div className="w-full px-4 grid-cols-2 gap-4">
            {data?.map((item) => (
                <div className="w-full h-32 bg-cover" style={{backgroundImage: `url(${item && item})`}}></div>
            ))}
            <div className="w-1/2 h-24 bg-yellow flex justify-center items-center">
                <Plus size={24} color='gray' />
            </div>
        </div>
        </>
    )
}

export default CarouselDetails;