'use client'
import React, { useState, useRef, useEffect } from 'react'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
    placeholder?: string
    onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
    priority?: boolean
}

export default function LazyImage({
    src,
    alt,
    className = '',
    placeholder,
    onError,
    priority = false
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const [hasError, setHasError] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (priority) return // Skip intersection observer for priority images

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px 0px' // Start loading 50px before entering viewport
            }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHasError(true)
        if (onError) onError(e)
    }

    return (
        <div ref={imgRef} className={`relative ${className}`}>
            {/* Skeleton placeholder */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Error placeholder */}
            {hasError && (
                <div className="absolute inset-0 bg-green-100 flex items-center justify-center text-green-600 font-semibold text-center p-4 rounded-lg">
                    <div>
                        <div className="text-4xl mb-2">📷</div>
                        <div className="text-sm">Afbeelding wordt geladen...</div>
                    </div>
                </div>
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={priority ? 'eager' : 'lazy'}
                />
            )}
        </div>
    )
}

