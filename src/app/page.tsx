import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ContactSection from '@/components/ContactSection'
import GalleryPreview from '@/components/GalleryPreview'
import FadeIn from '@/components/animations/FadeIn'
import LazySection from '@/components/animations/LazySection'

export default function Home() {
    // Gallery images - using actual images from public folder
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
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />
            <HeroSection />

            {/* About Section */}
            <FadeIn delay={200}>
                <section id="about" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welkom op de Amara Hoeve!</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                In april 2017 zijn we na een lange wens van start gegaan met onze boerencamping!<br />
                                De Amara Hoeve is rustig en landelijk gelegen in de zuurven polder in Bergen, op nog geen 3 km van Alkmaar.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold text-green-800 mb-4">Bergen is het mooiste dorp aan de Nederlandse kust</h3>
                                <p className="text-gray-700 mb-4">
                                    Kom genieten van de prachtige bosrijke omgeving, het duingebied en de zee of ga de stad Alkmaar of kunstenaars dorp Bergen in!
                                </p>
                                <p className="text-gray-700">
                                    Voor het aankomend seizoen zijn er nog enkele plaatsen beschikbaar!
                                </p>
                            </div>
                            <div className="bg-green-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🏕️</div>
                                <h4 className="text-xl font-semibold text-green-800 mb-2">Informeer of reserveer bij</h4>
                                <p className="text-gray-700">Pieter Wonder, bereikbaar op tel: +31 (0)6-48606075</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Camping Section */}
            <FadeIn delay={400}>
                <section id="camping" className="py-16 bg-green-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Boerencamping</h2>
                            <p className="text-lg text-gray-600">Ontdek wat onze camping te bieden heeft</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">🌲</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-2">Natuurlijke omgeving</h3>
                                <p className="text-gray-700">Prachtige bosrijke omgeving en duingebied</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">🏖️</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-2">Dichtbij de zee</h3>
                                <p className="text-gray-700">Op slechts 3 km van Alkmaar en dichtbij de kust</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-2">Kunstenaarsdorp</h3>
                                <p className="text-gray-700">Bezoek het mooie kunstenaarsdorp Bergen</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Wonder Yurt Section */}
            <FadeIn delay={600}>
                <section id="yurt" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Wonder Yurt</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Informeer naar de YURT verhuur! Slapen in een romantische tent met houtkacheltje en loungebank!
                                </p>
                                <div className="bg-green-100 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">Unieke overnachtingservaring</h3>
                                    <ul className="text-gray-700 space-y-2">
                                        <li>• Romantische tent accommodatie</li>
                                        <li>• Houtkacheltje voor warmte</li>
                                        <li>• Comfortabele loungebank</li>
                                        <li>• Unieke glamping ervaring</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-green-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🏕️</div>
                                <h4 className="text-2xl font-semibold text-green-800 mb-2">Wonder Yurt</h4>
                                <p className="text-gray-700">Romantische tent met alle comfort</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Art Exhibitions Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kunst & Cultuur</h2>
                        <p className="text-lg text-gray-600">Ontdek de kunstenaars die onze hoeve hebben bezocht</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Kunst 10 daagse 2018</h3>
                            <p className="text-gray-700 mb-4">Een bijzondere tentoonstelling met lokale kunstenaars</p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>• Antoinette Elzinga</p>
                                <p>• ART TO TAKE</p>
                                <p>• Eric Winder</p>
                                <p>• Gerard Koopen</p>
                                <p>• Ineke van Middelkoop</p>
                                <p>• Jeroen Bos</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Kunst 10 daagse 2017</h3>
                            <p className="text-gray-700">Een terugblik op de kunstenaars van 2017</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Kunst 10 daagse 2016</h3>
                            <p className="text-gray-700">De eerste editie van onze kunsttentoonstelling</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <LazySection className="py-16 bg-white">
                <GalleryPreview
                    images={galleryImages}
                    title="Fotogalerij"
                    description="Ontdek de schoonheid van de Amara Hoeve en omgeving"
                />
            </LazySection>

            <LazySection>
                <ContactSection />
            </LazySection>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg mb-2">Kom jezelf VERWONDEREN...</p>
                    <p className="text-sm text-gray-400">Reserveer nu je seizoensplek!</p>
                    <p className="text-sm text-gray-500 mt-4">© 2024 Amara Hoeve. Alle rechten voorbehouden.</p>
                </div>
            </footer>
        </div>
    )
}

