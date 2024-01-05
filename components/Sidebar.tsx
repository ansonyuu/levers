import React from "react";
import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="max-w-[12vw] fixed bottom-0 left-0 z-50 h-screen hidden md:inline-block gradient">
            <div className="flex flex-col justify-end h-full ml-4 pb-6 mx-auto my-auto gap-y-1">
                <div id="sidebarItem1" className="w-full">
                    <a href="/#section1">
                        <h5>Welcome</h5>
                    </a>
                </div>
                <div id="sidebarItem2" className="w-full">
                    <a href="/#section2">
                        <h5>The Rise and Fall of Technological Statecraft</h5>
                    </a>
                </div>
                <div id="sidebarItem3" className="w-full">
                    <a href="/#section3">
                        <h5>The Roots of Revival</h5>
                    </a>
                </div>
                <div id="sidebarItem4" className="w-full">
                    <a href="/#section4">
                        <h5>A Timely Collection</h5>
                    </a>
                </div>
            </div>
        </div>
    );
  }