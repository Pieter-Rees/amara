import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import ContactSection from '@/components/ContactSection'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

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

            <StandardHero
                title="Fotogalerij"
                subtitle="Ontdek de schoonheid van de Amara Hoeve en omgeving"
            />

            <StandardSection>
                <Gallery
                    images={galleryImages}
                    title="Fotogalerij"
                    description="Ontdek de schoonheid van de Amara Hoeve en omgeving"
                />
            </StandardSection>

            <StandardSection>
                <ContactSection />
            </StandardSection>

            <StandardFooter />
        </div>
    )
}
