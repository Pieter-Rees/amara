import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import ContactSection from '@/components/ContactSection'
import LazySection from '@/components/animations/LazySection'

export default function GallerijPage() {
    // Full gallery images - using actual images from public folder
    const galleryImages = [
        {
            id: '1',
            src: '/images/gallery/1.png',
            alt: 'Amara Hoeve camping omgeving',
            title: 'Camping in de natuur',
            description: 'Rustig kamperen tussen de bomen'
        },
        {
            id: '2',
            src: '/images/gallery/2.jpg',
            alt: 'Bosrijke omgeving van de Amara Hoeve',
            title: 'Bosrijke omgeving',
            description: 'Geniet van de prachtige natuur'
        },
        {
            id: '3',
            src: '/images/gallery/3.png',
            alt: 'Wonder Yurt tent',
            title: 'Wonder Yurt',
            description: 'Romantische overnachting in onze yurt'
        },
        {
            id: '4',
            src: '/images/gallery/4.png',
            alt: 'Amara Hoeve activiteiten',
            title: 'Boerderij activiteiten',
            description: 'Ervaar het authentieke boerderij leven'
        },
        {
            id: '5',
            src: '/images/gallery/2.jpeg',
            alt: 'Amara Hoeve omgeving',
            title: 'Natuurlijke omgeving',
            description: 'Prachtige omgeving van de Amara Hoeve'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-4">
                        <a href="/" className="inline-flex items-center text-green-200 hover:text-white transition-colors">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Terug naar Home
                        </a>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Fotogalerij
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Ontdek de schoonheid van de Amara Hoeve en omgeving
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <LazySection>
                <Gallery
                    images={galleryImages}
                    title="Fotogalerij"
                    description="Ontdek de schoonheid van de Amara Hoeve en omgeving"
                />
            </LazySection>

            <ContactSection />

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg mb-2">Kom jezelf VERWONDEREN...</p>
                    <p className="text-sm text-gray-400">Back in Blissness</p>
                    <p className="text-sm text-gray-500 mt-4">© 2024 Amara Hoeve. Alle rechten voorbehouden.</p>
                </div>
            </footer>
        </div>
    )
}
