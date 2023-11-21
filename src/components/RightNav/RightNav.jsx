import React from "react";
import Details from "../Details/Details";
import Preview from "../Preview/Preview";

const RightNav = ({ show, elementSelected }) => {
    return (
        <>
            {show && (
                <div className="w-[17%] h-full bg-white">
                    <p className="w-full px-4 py-2 text-bar text-left font-semibold text-lg">Page</p>
                    <Details element={elementSelected} />
                    <Preview type={elementSelected?.type} data={elementSelected?.data} />
                </div>
            )}

        </>
    )
}

export default RightNav;