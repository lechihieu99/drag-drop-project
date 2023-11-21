import React from "react";

const HeadBar = () => {
    return (
        <>
            <div className="w-full bg-pink flex justify-between items-center px-6 py-2">
                <span className="text-base">Chỉnh sửa bố cục giao diện</span>
                <span className="bg-button cursor-pointer px-8 py-2 flex justify-center items-center text-base text-white rounded-md">Save</span>
            </div>
        </>
    )
}

export default HeadBar;