import { ArrowsOut, ArrowUUpLeft, ArrowUUpRight, Minus, PaintBrushBroad, Plus, List } from "@phosphor-icons/react";
import { Dropdown } from "flowbite-react";
import React from "react";

const TabBar = () => {
    return (
        <>
            <div className="bg-bar w-full flex py-2 px-4 justify-between items-center">
                <div className="flex gap-4">
                    <ArrowUUpLeft size={20} color='white' />
                    <ArrowUUpRight size={20} color='white' />
                </div>
                <div className="flex gap-8 items-center">
                    <PaintBrushBroad size={20} color='white' />
                    <div className="flex gap-2 items-center">
                        <Plus size={20} color="white" />
                        <span className="px-4 py-[1px] text-white border-[1px] border-white rounded-full">0.1</span>
                        <Minus size={20} color="white" />
                    </div>
                    <ArrowsOut size={20} color="white" />
                </div>
                <Dropdown renderTrigger={() => <List size={20} color='white' className="cursor-pointer" />} inline>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
            </div>
        </>
    )
}

export default TabBar;