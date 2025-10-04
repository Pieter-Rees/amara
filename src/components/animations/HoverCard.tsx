'use client'
import React from 'react'

interface HoverCardProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: 'lift' | 'glow' | 'scale' | 'slide'
    intensity?: 'subtle' | 'medium' | 'strong'
}

export default function HoverCard({
    children,
    className = '',
    hoverEffect = 'lift',
    intensity = 'medium'
}: HoverCardProps) {
    const intensityClasses = {
        subtle: 'hover:scale-102 hover:shadow-md',
        medium: 'hover:scale-105 hover:shadow-lg',
        strong: 'hover:scale-110 hover:shadow-xl'
    }

    const effectClasses = {
        lift: 'hover:-translate-y-2',
        glow: 'hover:shadow-green-200 hover:shadow-2xl',
        scale: 'hover:scale-105',
        slide: 'hover:translate-x-2'
    }

    const baseClasses = 'transition-all duration-300 ease-out cursor-pointer'

    return (
        <div
            className={`${baseClasses} ${effectClasses[hoverEffect]} ${intensityClasses[intensity]} ${className}`}
        >
            {children}
        </div>
    )
}
