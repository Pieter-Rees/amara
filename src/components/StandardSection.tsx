'use client'
import LazySection from './animations/LazySection'
import FadeIn from './animations/FadeIn'

interface StandardSectionProps {
    children: React.ReactNode
    className?: string
    bgColor?: 'white' | 'green-50' | 'gray-50'
    useFadeIn?: boolean
    fadeInDelay?: number
    id?: string
}

export default function StandardSection({
    children,
    className = '',
    bgColor = 'white',
    useFadeIn = false,
    fadeInDelay = 0,
    id
}: StandardSectionProps) {
    const sectionClasses = `py-16 bg-${bgColor} ${className}`

    const content = (
        <section id={id} className={sectionClasses}>
            {children}
        </section>
    )

    return (
        <LazySection>
            {useFadeIn ? (
                <FadeIn delay={fadeInDelay}>
                    {content}
                </FadeIn>
            ) : (
                content
            )}
        </LazySection>
    )
}
