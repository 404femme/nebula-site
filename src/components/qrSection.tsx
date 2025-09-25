'use client'

import React, { useEffect, useState } from 'react'

const QRSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
        const mobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)
        setIsMobile(mobile)
    }, [])

    return (
        <>
            {!isMobile && (
                <div className="flex flex-col items-center justify-center space-y-6 pt-5">
                    <div className="bg-transparent p-4 rounded-2xl shadow-lg">
                        {/* QR Code */}
                        <div className="w-50 h-50 bg-transparent relative ">
                            <svg className="w-full h-full " viewBox="0 0 200 200" aria-hidden>
                                {/* QR Code pattern based on your design */}
                                <rect
                                    x="14"
                                    y="14"
                                    width="10"
                                    height="10"
                                    className="custom-fill-qr"
                                />
                                {/* ...rest omitted for brevity - keep your existing pattern rendering... */}
                                {[...Array(15)].map((_, i) =>
                                    [...Array(15)].map((_, j) => {
                                        const shouldFill = (i + j) % 3 === 0 || (i * j) % 4 === 0
                                        return shouldFill ? (
                                            <rect
                                                key={`${i}-${j}`}
                                                x={j * 12 + 14}
                                                y={i * 12 + 14}
                                                width="10"
                                                height="10"
                                                className="custom-fill-qr"
                                            />
                                        ) : null
                                    }),
                                )}
                            </svg>
                        </div>
                    </div>

                    <div className="text-center space-y-1.5 ">
                        <div className="flex items-center justify-center gap-2 ">
                            <h3 className="text-xl font-medium ml-5 font-montserrat text-default">
                                Sign in by QR-code
                            </h3>
                            <div className="w-5 h-5 border mb-0 rounded-3xl flex items-center justify-center border-default">
                                <p className="w-4 h-6 bg-transparent text-muted"> ? </p>
                            </div>
                        </div>

                        <p className="text-sm text-muted font-montserrat max-w-562 leading-relaxed">
                            Scan the code with your <br /> discord app to log into your
                            <br />
                            account right away
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
export default QRSection
