import { Plus } from "@phosphor-icons/react";
import { Button, Checkbox, Label, Modal } from "flowbite-react";
import React, { useState } from "react";
import Layer from "./Layer";

const LeftNav = ({ setShowRightNav }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="w-[13%] h-full bg-white">
                <p className="w-full px-4 py-2 text-bar text-center font-semibold text-lg">Page</p>
                <Layer setShowRightNav={setShowRightNav} />
                <div className="w-full px-4 py-2" onClick={() => setShowModal(true)}>
                    <div className="w-full bg-yellow opacity-50 py-[3px] rounded-lg flex justify-center items-center cursor-pointer">
                        <Plus size={18} color='black' />
                    </div>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <Modal.Header>
                    <span className="font-semibold">Add Page</span>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-full flex gap-4 pb-2 items-center">
                        <Checkbox id='line1' />
                        <Label htmlFor="line1" className="text-base">Entertainment Page</Label>
                    </div>
                    <div className="w-full flex gap-4 pb-2 items-center">
                        <Checkbox id='line2' />
                        <Label htmlFor="line2" className="text-base">Music Page</Label>
                    </div>
                    <div className="w-full flex gap-4 pb-2 items-center">
                        <Checkbox id='line3' />
                        <Label htmlFor="line3" className="text-base">News Page</Label>
                    </div>
                    <div className="w-full flex gap-4 pb-2 items-center">
                        <Checkbox id='line4' />
                        <Label htmlFor="line4" className="text-base">Profile</Label>
                    </div>

                    <div className='w-full flex justify-end items-center mt-4'>
                        <span className="px-8 py-[3px] bg-button cursor-pointer text-white flex justify-center items-center rounded-lg">Save Changes</span>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LeftNav