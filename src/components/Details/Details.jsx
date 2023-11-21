import React from "react";

const Details = ({ element }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-2 p-4">
                <span className="w-full flex gap-4 items-center px-2">
                    <span className="text-base text-center">W</span>
                    <input type="text" name="text" id="text" className="block p-0 w-full text-center text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={element?.width ? element?.width : 200} placeholder="200" required />
                </span>
                <span className="w-full flex gap-4 items-center px-2">
                    <span className="text-base text-center">H</span>
                    <input type="text" name="text" id="text" className="block p-0 w-full text-center text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={element?.height ? element?.height : 200} placeholder="200" required />
                </span>
                <span className="w-full flex gap-4 items-center px-2">
                    <span className="text-base text-center">X</span>
                    <input type="text" name="text" id="text" className="block p-0 w-full text-center text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={element?.x ? element?.x : 200} placeholder="200" required />
                </span>
                <span className="w-full flex gap-4 items-center px-2">
                    <span className="text-base text-center">Y</span>
                    <input type="text" name="text" id="text" className="block p-0 w-full text-center text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={element?.y ? element?.y : 200} placeholder="200" required />
                </span>
            </div>
            <div className="w-full h-[1px] mt-2 px-4">
                <div className="w-full h-full bg-gray-200"></div>
            </div>
        </>
    )
}

export default Details