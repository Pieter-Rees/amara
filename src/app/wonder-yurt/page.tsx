import Navigation from '@/components/Navigation'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

export default function WonderYurtPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            <StandardHero
                title="Wonder Yurt"
                subtitle="Unieke overnachtingservaring in Bergen"
            />

            {/* Main Yurt Information */}
            <StandardSection>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Yurt Verhuur</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Onze Yurt is te huren voor een dag, dagdeel en nacht en is onder andere te gebruiken voor yoga lessen, overnachtingen, kinderfeestjes en nog veel meer!
                        </p>
                        <p className="text-lg text-gray-700">
                            Bekijk de mogelijkheden en tarieven op onze <a href="/tarieven" className="text-green-600 hover:text-green-800 font-semibold">tarieven pagina</a> of neem contact op met Pieter Wonder.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-100 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Mogelijkheden</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Yoga lessen</li>
                                <li>• Overnachtingen</li>
                                <li>• Kinderfeestjes</li>
                                <li>• Romantische getaways</li>
                                <li>• Groepsactiviteiten</li>
                                <li>• Meditatie sessies</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Yurt Features</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Houtkachel voor warmte</li>
                                <li>• Comfortabele loungebank</li>
                                <li>• Romantische tent accommodatie</li>
                                <li>• Unieke glamping ervaring</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-green-100 rounded-lg p-8 max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">🏕️</div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Wonder Yurt</h3>
                            <p className="text-gray-700 mb-6">Romantische tent met alle comfort</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🔥</div>
                                    <h4 className="font-semibold text-green-800">Houtkachel</h4>
                                    <p className="text-sm text-gray-600">Warm en gezellig</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🛋️</div>
                                    <h4 className="font-semibold text-green-800">Loungebank</h4>
                                    <p className="text-sm text-gray-600">Comfortabel zitten</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🌙</div>
                                    <h4 className="font-semibold text-green-800">Overnachting</h4>
                                    <p className="text-sm text-gray-600">Unieke ervaring</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🧘</div>
                                    <h4 className="font-semibold text-green-800">Yoga</h4>
                                    <p className="text-sm text-gray-600">Meditatie ruimte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Why Choose Our Yurt */}
            <StandardSection bgColor="green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Waarom kiezen voor onze Wonder Yurt?</h2>
                        <p className="text-lg text-gray-600">Een unieke ervaring in het hart van de natuur</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-4xl mb-4">🌲</div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Natuurlijke omgeving</h3>
                            <p className="text-gray-700">Geniet van de rust en stilte van de natuur in onze prachtige bosrijke omgeving.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Authentieke ervaring</h3>
                            <p className="text-gray-700">Ervaar het echte boerderij leven met alle moderne comfort van een yurt.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="text-4xl mb-4">💝</div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">Flexibele huur</h3>
                            <p className="text-gray-700">Huur voor een dag, dagdeel of nacht - perfect voor elke gelegenheid.</p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Contact & Reservation */}
            <StandardSection>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Reservering & Contact</h2>

                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-green-800 mb-6">Wilt u de Wonder Yurt huren?</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <div className="text-4xl mb-4">📞</div>
                                <h4 className="text-lg font-semibold text-green-800 mb-2">Pieter Wonder</h4>
                                <p className="text-gray-700 mb-2">
                                    <a href="tel:+31648606075" className="hover:text-green-600 transition-colors">
                                        06-48606075
                                    </a>
                                </p>
                                <p className="text-sm text-gray-600">+31 (0)6-82253283</p>
                            </div>

                            <div>
                                <div className="text-4xl mb-4">✉️</div>
                                <h4 className="text-lg font-semibold text-green-800 mb-2">Email</h4>
                                <p className="text-gray-700">
                                    <a href="mailto:pieter@amarahoeve.nl" className="hover:text-green-600 transition-colors">
                                        pieter@amarahoeve.nl
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-100 rounded-lg p-6">
                            <p className="text-green-800 font-semibold mb-2">Bekijk ook onze tarieven</p>
                            <a href="/tarieven" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                Bekijk alle tarieven
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </StandardSection>

            <StandardFooter />
        </div>
    )
}