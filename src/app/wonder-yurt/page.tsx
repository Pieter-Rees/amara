import Navigation from '@/components/Navigation'
import ContactSection from '@/components/ContactSection'

export default function WonderYurtPage() {
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
                        Wonder Yurt
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Unieke overnachtingservaring in Bergen
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Yurt Verhuur
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Onze Yurt is te huren voor een dag, dag deel en nacht en is onder andere te gebruiken voor yoga lessen, overnachtingen, kinderfeestjes en nog veel meer!
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Bekijk de mogelijkheden en tarieven op onze <a href="/tarieven" className="text-green-600 hover:text-green-800 font-semibold">tarieven pagina</a> of neem contact op met Pieter Wonder.
                            </p>

                            <div className="bg-green-100 rounded-lg p-6 mb-8">
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
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Contact voor reservering</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Pieter Wonder</span>
                                    </p>
                                    <p className="text-gray-700">
                                        Tel: <a href="tel:+31648606075" className="text-green-600 hover:text-green-800">+31 (0)6-48606075</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-green-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🏕️</div>
                                <h3 className="text-2xl font-semibold text-green-800 mb-2">Wonder Yurt</h3>
                                <p className="text-gray-700">Romantische tent met alle comfort</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🔥</div>
                                    <h4 className="font-semibold text-green-800">Houtkachel</h4>
                                    <p className="text-sm text-gray-600">Warm en gezellig</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🛋️</div>
                                    <h4 className="font-semibold text-green-800">Loungebank</h4>
                                    <p className="text-sm text-gray-600">Comfortabel zitten</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🌙</div>
                                    <h4 className="font-semibold text-green-800">Overnachting</h4>
                                    <p className="text-sm text-gray-600">Unieke ervaring</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🧘</div>
                                    <h4 className="font-semibold text-green-800">Yoga</h4>
                                    <p className="text-sm text-gray-600">Meditatie ruimte</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarieven & Reservering</h2>
                        <p className="text-lg text-gray-600">Bekijk onze actuele prijzen en beschikbaarheid</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-green-100 rounded-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Huurmogelijkheden</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex justify-between items-center py-2 border-b border-green-200">
                                    <span className="font-medium">Dagdeel</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-green-200">
                                    <span className="font-medium">Hele dag</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-green-200">
                                    <span className="font-medium">Overnachting</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-medium">Kinderfeestjes</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a href="/tarieven" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Bekijk alle tarieven
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
