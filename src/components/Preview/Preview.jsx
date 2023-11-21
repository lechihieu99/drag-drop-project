import React from "react";

const Preview = ({ type, data }) => {
    return (
        <>
            <div className="text-base px-4 py-2">Preview</div>
            <div className="w-full px-4 flex justify-center items-center">
                {type === 'carousel' && (
                    <>
                        {/* Carousel Preview in here */}
                    </>
                )}

                {type === 'menu' && (
                    <>
                        {/* Menu Preview in here */}
                    </>
                )}

                {/* More Preview in here */}
                {type === '' && (
                    <span className="text-sm text-gray-400">None</span>
                )}
            </div>
        </>
    )
}

export default Preview;