'use client'
import React, { useEffect, useRef, useState } from 'react'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    duration?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
    className?: string
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 600,
    direction = 'up',
    className = ''
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            { threshold: 0.1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [delay])

    const directionClasses = {
        up: 'translate-y-8',
        down: '-translate-y-8',
        left: 'translate-x-8',
        right: '-translate-x-8',
        fade: 'translate-y-0'
    }

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-${duration} ease-out ${isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${directionClasses[direction]}`
                } ${className}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            {children}
        </div>
    )
}

