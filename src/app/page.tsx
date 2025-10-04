import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />
            <HeroSection />

            {/* About Section */}
            <section id="about" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Over de Amara Hoeve</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Bergen is het mooiste dorp aan de Nederlandse kust om op vakantie te gaan!<br />
                            Kom genieten van de prachtige bosrijke omgeving, het duingebied en de zee of ga de stad Alkmaar of kunstenaars dorp Bergen in!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Rustig en landelijk</h3>
                            <p className="text-gray-700 mb-4">
                                De Amara Hoeve biedt een unieke campingervaring in het hart van de natuur.
                                Geniet van de rust en ruimte die alleen een boerencamping kan bieden.
                            </p>
                            <p className="text-gray-700">
                                Voor het aankomend seizoen zijn er nog enkele plaatsen beschikbaar!
                            </p>
                        </div>
                        <div className="bg-green-100 rounded-lg p-8 text-center">
                            <div className="text-6xl mb-4">🏕️</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">Boerencamping</h4>
                            <p className="text-gray-700">Authentieke campingervaring op de boerderij</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Camping Section */}
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

            {/* Wonder Yurt Section */}
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

            <ContactSection />

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

