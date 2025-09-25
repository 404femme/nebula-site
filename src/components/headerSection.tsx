'use client'

import Image from 'next/image'
import React from 'react'

export const HeaderSection = () => {
    return (
        <header>
            <nav className="pl-10 pt-5 flex items-center">
                <div className="flex items-center mr-1.5">
                    <Image src="/icons.svg" alt="logo" width={23} height={23} />
                </div>
                <div className="flex items-center mt-0">
                    <h1 className="text-xl font-bold text-default font-sans">Midnight</h1>
                    <h1 className="text-xl font-thin text-muted font-sans">Nebula</h1>
                </div>
            </nav>
        </header>
    )
}
