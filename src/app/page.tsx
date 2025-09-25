'use client'

import React from 'react'
import QRSection from '@/components/qrSection'
import { LoginForm } from '@/components/loginForm'
import { LangSelector } from '@/components/langSelector'
import { HeaderSection } from '@/components/headerSection'
import ThemeToggle from '@/components/themeSelector'

const Page: React.FC = () => {
    return (
        <main className="min-h-screen w-full relative overflow-hidden">
            {/* Background Gradient (use CSS variable so dark/light switch is seamless) */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: 'var(--bg-gradient)',
                }}
            />
            {/* Glassmorphism Overlay */}
            <div
                className="absolute inset-0 w-full h-full backdrop-blur-sm"
                style={{ background: 'var(--glass)' }}
            />
            {/* Content Container */}
            <div className="relative z-10 h-screen flex flex-col text-default">
                {/* Top Navigation */}
                <HeaderSection />

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 max-w-6xl w-200">
                        {/* QR Code Section */}
                        <QRSection />
                        <LoginForm />
                        {/* Login Form Section */}
                    </div>

                    {/* separator line (visible on large) */}
                    <div className="absolute left-1/2 right-1/2 top-1/2 transform -translate-x-9 -translate-y-1/2 w-px h-45 bg-[#717171]  hidden lg:block" />
                </div>

                {/* Theme Selector */}
                <ThemeToggle />

                {/* Language Selector */}
                <LangSelector />
            </div>
        </main>
    )
}

export default Page
