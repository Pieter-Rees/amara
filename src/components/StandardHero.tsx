'use client'
import LazySection from './animations/LazySection'

interface StandardHeroProps {
    title: string
    subtitle: string
    showBackButton?: boolean
}

export default function StandardHero({ title, subtitle, showBackButton = true }: StandardHeroProps) {
    return (
        <LazySection>
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    {showBackButton && (
                        <div className="mb-4">
                            <a href="/" className="inline-flex items-center text-green-200 hover:text-white transition-colors">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Terug naar Home
                            </a>
                        </div>
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        {subtitle}
                    </p>
                </div>
            </section>
        </LazySection>
    )
}
