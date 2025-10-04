'use client'
import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'

interface LoadingButtonProps {
    children: React.ReactNode
    onClick?: () => void | Promise<void>
    loading?: boolean
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export default function LoadingButton({
    children,
    onClick,
    loading = false,
    disabled = false,
    variant = 'primary',
    size = 'md',
    className = '',
    type = 'button'
}: LoadingButtonProps) {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        if (loading || isLoading || disabled) return

        setIsLoading(true)
        try {
            if (onClick) {
                await onClick()
            }
        } finally {
            setIsLoading(false)
        }
    }

    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg',
        outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500'
    }

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    const isButtonLoading = loading || isLoading

    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled || isButtonLoading}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${isButtonLoading ? 'cursor-wait' : 'hover:scale-105 active:scale-95'
                }`}
        >
            {isButtonLoading && (
                <LoadingSpinner size="sm" color="white" className="mr-2" />
            )}
            {children}
        </button>
    )
}
