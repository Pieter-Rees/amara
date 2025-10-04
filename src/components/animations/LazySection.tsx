'use client'
import React, { useRef, useEffect, useState } from 'react'

interface LazySectionProps {
    children: React.ReactNode
    className?: string
    threshold?: number
    rootMargin?: string
    fallback?: React.ReactNode
}

export default function LazySection({
    children,
    className = '',
    threshold = 0.1,
    rootMargin = '100px 0px',
    fallback
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isLoaded) {
                    setIsVisible(true)
                    // Add a small delay to ensure smooth loading
                    setTimeout(() => setIsLoaded(true), 100)
                    observer.disconnect()
                }
            },
            {
                threshold,
                rootMargin
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [threshold, rootMargin, isLoaded])

    return (
        <div ref={sectionRef} className={className}>
            {isVisible ? (
                <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    {children}
                </div>
            ) : (
                fallback || (
                    <div className="min-h-[200px] flex items-center justify-center">
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
