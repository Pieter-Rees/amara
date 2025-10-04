import Navigation from '@/components/Navigation'
import ContactSection from '@/components/ContactSection'

export default function BoerencampingPage() {
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
                        Boerencamping
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Authentieke camping ervaring op de Amara Hoeve
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                De Camping
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Onze boeren camping is open vanaf half maart tot 1 november. U kunt bij ons komen kamperen per nacht of voor een heel seizoen met caravan, tent, camper enz.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Onze campingplekken zijn voorzien van electra en er bevinden zich watertappunten op het veld, en ruim toiletgebouw.
                            </p>

                            <div className="bg-green-100 rounded-lg p-6 mb-8">
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

                        <div className="space-y-6">
                            <div className="bg-green-100 rounded-lg p-8 text-center">
                                <div className="text-6xl mb-4">🏕️</div>
                                <h3 className="text-2xl font-semibold text-green-800 mb-2">Boerencamping</h3>
                                <p className="text-gray-700">Authentieke camping ervaring</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <h4 className="font-semibold text-green-800">Electra</h4>
                                    <p className="text-sm text-gray-600">Op alle plekken</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">💧</div>
                                    <h4 className="font-semibold text-green-800">Water</h4>
                                    <p className="text-sm text-gray-600">Tappunten op veld</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🚿</div>
                                    <h4 className="font-semibold text-green-800">Sanitair</h4>
                                    <p className="text-sm text-gray-600">Ruim toiletgebouw</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                    <div className="text-3xl mb-2">🌙</div>
                                    <h4 className="font-semibold text-green-800">Yurt</h4>
                                    <p className="text-sm text-gray-600">Overnachting mogelijk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Farm Animals & Products Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Boerderij Leven</h2>
                        <p className="text-lg text-gray-600">Ervaar het authentieke boerderij leven met onze dieren en producten</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-6">Onze Dieren</h3>
                            <div className="space-y-4">
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🐴</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Pony's</h4>
                                        <p className="text-gray-600">Vriendelijke pony's op de boerderij</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🐑</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Schapen</h4>
                                        <p className="text-gray-600">Grazende schapen in de wei</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🐱</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Katten</h4>
                                        <p className="text-gray-600">Knuffelige boerderij katten</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🐕</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Hond Kerrie</h4>
                                        <p className="text-gray-600">Onze trouwe viervoeter</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-6">Boerderij Producten</h3>
                            <div className="space-y-4">
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🥬</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Onbespoten Groenten</h4>
                                        <p className="text-gray-600">Seizoens groenten van eigen land</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🧀</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Biologische Kaas</h4>
                                        <p className="text-gray-600">Lokale biologische kaas</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                                    <div className="text-3xl mr-4">🥚</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Verse Eieren</h4>
                                        <p className="text-gray-600">Eitjes van onze eigen kippen</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-green-100 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">Verkoop aan de weg</h4>
                                <p className="text-gray-700 text-sm">
                                    Aan de weg hebben wij verkoop van onbespoten seizoens groenten, biologische kaas en natuurlijk de eitjes van onze kippen!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wonder Yurt Integration */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wonder Yurt</h2>
                        <p className="text-lg text-gray-600">Unieke overnachtingsmogelijkheid tijdens uw camping verblijf</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8 text-center">
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
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tarieven & Reservering</h2>
                        <p className="text-lg text-gray-600">Bekijk onze actuele prijzen en beschikbaarheid</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-semibold text-green-800 mb-6">Camping Tarieven</h3>
                            <div className="space-y-4 text-gray-700 mb-8">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium">Per nacht</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="font-medium">Heel seizoen</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-medium">Wonder Yurt overnachting</span>
                                    <span className="text-green-600">Bekijk tarieven</span>
                                </div>
                            </div>
                            <div className="mb-6">
                                <a href="/tarieven" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Bekijk alle tarieven
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                            <div className="bg-green-100 rounded-lg p-4">
                                <p className="text-green-800 font-semibold mb-2">Wilt u een campingplaats reserveren?</p>
                                <p className="text-sm text-gray-700">
                                    Dan kunt u contact opnemen met Pieter Wonder, tel: 06-48606075
                                </p>
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
