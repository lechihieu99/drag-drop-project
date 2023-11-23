import React from "react";
import CarouselDetails from "../Details/CarouselDetails";
import Details from "../Details/Details";
import Preview from "../Preview/Preview";

const RightNav = ({ show, elementSelected }) => {
    return (
        <>
            {show && (
                <div className="w-[17%] h-full bg-white z-30 shadow-[-1px_0_30px_rgba(0,0,0,0.2)]">
                    <p className="w-full px-4 py-2 text-bar text-left font-semibold text-lg">Page</p>
                    <Details element={elementSelected} />
                    <CarouselDetails />
                    <Preview type={elementSelected?.type} data={elementSelected?.data} />
                </div>
            )}

        </>
    )
}

export default RightNav;