import React, { useEffect, useState } from 'react'

type Props = {
    onChange?: (isDark: boolean) => void
}

export default function ThemeToggle({ onChange }: Props) {
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState<boolean>(() => {
        return true // keep default; will be corrected on mount
    })

    useEffect(() => {
        setMounted(true)
        try {
            const saved = localStorage.getItem('mn-theme')
            if (saved === 'dark') setIsDark(true)
            else if (saved === 'light') setIsDark(false)
            else {
                const prefersDark =
                    typeof window !== 'undefined' &&
                    window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
                setIsDark(prefersDark)
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setIsDark(true)
        }
    }, [])

    useEffect(() => {
        if (!mounted) return
        const html = document.documentElement
        if (isDark) html.classList.add('dark')
        else html.classList.remove('dark')

        try {
            localStorage.setItem('mn-theme', isDark ? 'dark' : 'light')
        } catch {}

        if (onChange) onChange(isDark)
    }, [isDark, mounted, onChange])

    if (!mounted) return null

    return (
        <button
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={() => setIsDark(prev => !prev)}
            className="fixed right-10 bottom-10 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg
               bg-card border border-default hover:scale-105 transition-transform duration-150"
        >
            {isDark ? (
                // Sun icon for light mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.45 3.05l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM17.24 19.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM20 11v2h3v-2h-3zM12 7a5 5 0 100 10 5 5 0 000-10zM4.22 19.78l1.41 1.41 1.8-1.79-1.41-1.41-1.8 1.79z" />
                </svg>
            ) : (
                // Moon icon for dark mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
            )}
        </button>
    )
}
