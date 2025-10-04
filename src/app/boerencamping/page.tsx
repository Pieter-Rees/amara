import Navigation from '@/components/Navigation'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

export default function BoerencampingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            <StandardHero
                title="Boerencamping"
                subtitle="Authentieke camping ervaring op de Amara Hoeve"
            />

            {/* Main Camping Information */}
            <StandardSection>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">De Camping</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Onze boeren camping is open vanaf half maart tot 1 november. U kunt bij ons komen kamperen per nacht of voor een heel seizoen met caravan, tent, camper enz.
                        </p>
                        <p className="text-lg text-gray-700">
                            Onze campingplekken zijn voorzien van electra en er bevinden zich watertappunten op het veld, en ruim toiletgebouw.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-green-100 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Seizoen & Openingstijden</h3>
                            <div className="text-gray-700 space-y-2">
                                <p><span className="font-semibold">Open:</span> Half maart tot 1 november</p>
                                <p><span className="font-semibold">Huur:</span> Per nacht of heel seizoen</p>
                                <p><span className="font-semibold">Accommodaties:</span> Caravan, tent, camper</p>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-4">Faciliteiten</h3>
                            <ul className="text-gray-700 space-y-2">
                                <li>• Electra op alle plekken</li>
                                <li>• Watertappunten op het veld</li>
                                <li>• Ruim toiletgebouw</li>
                                <li>• Wonder Yurt overnachting mogelijk</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-green-100 rounded-lg p-8 max-w-2xl mx-auto">
                            <div className="text-6xl mb-4">🏕️</div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Boerencamping</h3>
                            <p className="text-gray-700 mb-6">Authentieke camping ervaring in de natuur</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <h4 className="font-semibold text-green-800">Electra</h4>
                                    <p className="text-sm text-gray-600">Op alle plekken</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">💧</div>
                                    <h4 className="font-semibold text-green-800">Water</h4>
                                    <p className="text-sm text-gray-600">Tappunten op veld</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🚿</div>
                                    <h4 className="font-semibold text-green-800">Sanitair</h4>
                                    <p className="text-sm text-gray-600">Ruim toiletgebouw</p>
                                </div>
                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-3xl mb-2">🌙</div>
                                    <h4 className="font-semibold text-green-800">Yurt</h4>
                                    <p className="text-sm text-gray-600">Overnachting mogelijk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Wonder Yurt Integration */}
            <StandardSection bgColor="green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wonder Yurt</h2>
                        <p className="text-lg text-gray-600 mb-8">Unieke overnachtingsmogelijkheid tijdens uw camping verblijf</p>

                        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8">
                            <div className="text-6xl mb-4">🏕️</div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Overnacht in onze Wonder Yurt</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Ook bieden we de mogelijkheid te overnachten in de Wonder yurt, die tevens verhuurt kan worden voor yogalessen, meetings en nog veel meer.
                            </p>
                            <a
                                href="/wonder-yurt"
                                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                            >
                                Meer over Wonder Yurt
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Contact & Reservation */}
            <StandardSection>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Reservering & Contact</h2>

                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-green-800 mb-6">Wilt u een campingplaats reserveren?</h3>

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