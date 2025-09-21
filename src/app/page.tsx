'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Page: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('🇺🇸 English (US)')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const languages = ['🇳🇱 Nederlands', '🇺🇸 English (US)', '🇷🇺 Русский']

    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background:
                        'linear-gradient(250.67deg, #DE82FF 38.04%, #FF8E8E 57.48%, #75ACFF 86.63%)',
                }}
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 w-full h-full bg-white/70 backdrop-blur-sm" />

            {/* Content Container */}
            <div className="relative z-10 h-screen flex flex-col">
                {/* Top Navigation */}
                <div className="pl-10 pt-5 flex items-center">
                    <div className="flex items-center mr-1.5">
                        <Image src="/icon.svg" alt="logo" width={23} height={23} />
                    </div>
                    <div className="flex items-center mt-0">
                        <h1 className="text-xl font-bold text-black font-montserrat">Midnight</h1>
                        <h1 className="text-xl font-thin text-black font-monserrat">Nebula</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center space-y-2 px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-6xl w-200">
                        {/* QR Code Section */}
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="bg-transparent p-4 rounded-2xl shadow-lg">
                                {/* QR Code */}
                                <div className="w-50 h-50  bg-transparent relative space-y">
                                    <svg className="w-full h-full" viewBox="0 0 200 200">
                                        {/* QR Code pattern based on your design */}
                                        <rect x="14" y="14" width="10" height="10" fill="#000" />
                                        <rect x="26" y="14" width="10" height="10" fill="#000" />
                                        <rect x="38" y="14" width="10" height="10" fill="#000" />
                                        <rect x="62" y="14" width="10" height="10" fill="#000" />
                                        <rect x="86" y="14" width="10" height="10" fill="#000" />
                                        <rect x="98" y="14" width="10" height="10" fill="#000" />
                                        <rect x="110" y="14" width="10" height="10" fill="#000" />
                                        <rect x="122" y="14" width="10" height="10" fill="#000" />
                                        <rect x="146" y="14" width="10" height="10" fill="#000" />
                                        <rect x="158" y="14" width="10" height="10" fill="#000" />
                                        <rect x="170" y="14" width="10" height="10" fill="#000" />
                                        <rect x="182" y="14" width="10" height="10" fill="#000" />

                                        {/* More QR pattern elements */}
                                        {[...Array(15)].map((_, i) =>
                                            [...Array(15)].map((_, j) => {
                                                const shouldFill =
                                                    (i + j) % 3 === 0 || (i * j) % 4 === 0
                                                return shouldFill ? (
                                                    <rect
                                                        key={`${i}-${j}`}
                                                        x={j * 12 + 14}
                                                        y={i * 12 + 14}
                                                        width="10"
                                                        height="10"
                                                        fill="#000"
                                                    />
                                                ) : null
                                            }),
                                        )}
                                    </svg>
                                </div>
                            </div>

                            <div className="text-center space-y-1.5 ">
                                <div className="flex items-center justify-center gap-2 ">
                                    <h3 className="text-xl font-medium ml-5 font-montserrat text-black">
                                        Sign in by QR-code
                                    </h3>
                                    <div className="w-5 h-5 border mb-0 border-black/50 rounded-3xl flex items-center justify-center">
                                        <p className="w-4 h-6 bg-transparent text-black/50 "> ? </p>
                                    </div>
                                </div>

                                <p className="text-sm text-black/60 font-montserrat max-w-562 leading-relaxed">
                                    Scan the code with your <br></br> discord app to log into your
                                    <br></br>
                                    account right away
                                </p>
                            </div>
                        </div>

                        {/* Login Form Section */}
                        <div className="space-y-7 max-w-sm mx-auto lg:mx-0">
                            {/* Welcome, Section */}
                            <div className="space-y-5">
                                <h2 className="text-4xl font-medium font-montserrat text-black">
                                    Welcome 👋
                                </h2>
                                <p className="text-md font-light font-montserrat text-black leading-relaxed">
                                    Login with your discord or create <br></br> new discord account
                                    to continue
                                </p>
                            </div>

                            {/* Sign In Options */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-x-15">
                                    <div className="space-y-1.5">
                                        <button className="text-sm font-medium font-montserrat text-black">
                                            Sign in
                                        </button>
                                        <div className="w-12 h-0.5 bg-black" />
                                    </div>

                                    <button className="text-sm font-medium font-montserrat text-black/55 hover:text-black transition-colors">
                                        Create new account
                                    </button>
                                </div>

                                {/* Discord Login Button */}
                                <button className="w-60 h-10 mt-8  bg-white/40 border border-gray-300/80 rounded-xl flex items-center justify-center gap-3 hover:bg-white/60 transition-all duration-200">
                                    <svg className="w-5 h-5 fill-gray-600" viewBox="0 0 24 24">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                    <span className="text-sm font-medium font-montserrat text-gray-600">
                                        Login with discord
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Language Selector */}
                <div className="absolute bottom-10 left-10">
                    <div className="relative">
                        <div
                            className="w-44 bg-white/40 backdrop-blur-lg shadow-lg rounded-2xl p-4 cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {/* Closed Dropdown */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-light font-roboto text-black flex items-center gap-2">
                                    {selectedLanguage}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-black/65 transition-transform ${
                                        isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </div>

                            {/* Open Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute bottom-full left-0 w-full mb-2 bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden z-20 transform origin-bottom animate-in slide-in-from-bottom-2 duration-200">
                                    {languages.map((lang, index) => (
                                        <button
                                            key={index}
                                            className="w-full px-4 py-3 flex items-center justify-between
                         text-sm font-light font-roboto text-black
                         hover:bg-white/30 transition-colors
                         first:rounded-t-2xl last:rounded-b-2xl"
                                            onClick={e => {
                                                e.stopPropagation()
                                                setSelectedLanguage(lang)
                                                setIsDropdownOpen(false)
                                            }}
                                        >
                                            <span>{lang}</span>
                                            {selectedLanguage === lang && (
                                                <Image
                                                    src="/checkmark.svg"
                                                    alt="checkmark icon"
                                                    width={13}
                                                    height={13}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Vertical Separator */}
                <div className="absolute left-1/2 right-1/2 top-1/2 transform -translate-x-9 -translate-y-1/2 w-px h-45 bg-gray-800/60 hidden lg:block" />
            </div>
        </div>
    )
}

export default Page
