'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const LangSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('🇺🇸 English (US)')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const languages = ['🇳🇱 Nederlands', '🇺🇸 English (US)', '🇷🇺 Русский']

    return (
        <div className="absolute bottom-10 left-10">
            <div className="relative">
                <div
                    className="w-44 bg-card backdrop-blur-lg shadow-lg rounded-2xl p-4 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {/* Closed Dropdown */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-light font-roboto text-default flex items-center gap-2">
                            {selectedLanguage}
                        </span>
                        <ChevronDown
                            className={`w-4 h-4 text-default/80 transition-transform ${
                                isDropdownOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </div>

                    {/* Open Dropdown */}
                    {isDropdownOpen && (
                        <div className="absolute bottom-full left-0 w-full mb-2 bg-card backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden z-20 transform origin-bottom animate-in slide-in-from-bottom-2 duration-200">
                            {languages.map((lang, index) => (
                                <button
                                    key={index}
                                    className="w-full px-4 py-3 flex items-center justify-between
                         text-sm font-light font-roboto text-default
                         hover:bg-[rgba(255,255,255,0.06)] dark:hover:bg-[rgba(255,255,255,0.03)] transition-colors
                         first:rounded-t-2xl last:rounded-b-2xl"
                                    onClick={e => {
                                        e.stopPropagation()
                                        setSelectedLanguage(lang)
                                        setIsDropdownOpen(false)
                                    }}
                                >
                                    <span>{lang}</span>
                                    {selectedLanguage === lang && (
                                        <svg
                                            className="custom-fill-checkmark"
                                            width="13"
                                            height="13"
                                        >
                                            <path d="M5.43192 8.53846C4.88786 9.08252 4.00508 9.08252 3.46128 8.53846L0.408044 5.48522C-0.136015 4.94142 -0.136015 4.05864 0.408044 3.51485C0.951839 2.97079 1.83462 2.97079 2.37868 3.51485L4.19781 5.33371C4.33514 5.47078 4.55806 5.47078 4.69565 5.33371L9.62132 0.408044C10.1651 -0.136015 11.0479 -0.136015 11.592 0.408044C11.8532 0.669307 12 1.02378 12 1.39323C12 1.76267 11.8532 2.11715 11.592 2.37842L5.43192 8.53846Z" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
