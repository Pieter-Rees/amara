import Navigation from '@/components/Navigation'
import ContactSection from '@/components/ContactSection'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

export default function TarievenPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            <StandardHero
                title="Tarieven"
                subtitle="Transparante prijzen voor uw verblijf op de Amara Hoeve"
            />

            {/* Main Pricing Section */}
            <StandardSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Tarieven Campingplaatsen
                        </h2>
                        <p className="text-lg text-gray-600">
                            Alle prijzen zijn per nacht, exclusief toeristenbelasting
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Caravan */}
                        <div className="bg-white rounded-lg shadow-lg border-2 border-green-200 p-6 text-center">
                            <div className="text-4xl mb-4">🚐</div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Caravan</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-2">€30,00</div>
                            <p className="text-gray-600 mb-4">per nacht voor 2 personen</p>
                            <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-sm text-gray-700">Inclusief electra en water</p>
                            </div>
                        </div>

                        {/* Tent */}
                        <div className="bg-white rounded-lg shadow-lg border-2 border-green-200 p-6 text-center">
                            <div className="text-4xl mb-4">⛺</div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Tent</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-2">€25,00</div>
                            <p className="text-gray-600 mb-4">per nacht voor 2 personen</p>
                            <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-sm text-gray-700">Inclusief electra en water</p>
                            </div>
                        </div>

                        {/* Camper */}
                        <div className="bg-white rounded-lg shadow-lg border-2 border-green-200 p-6 text-center">
                            <div className="text-4xl mb-4">🚍</div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Camper</h3>
                            <div className="text-3xl font-bold text-gray-900 mb-2">€30,00</div>
                            <p className="text-gray-600 mb-4">per nacht voor 2 personen</p>
                            <div className="bg-green-50 rounded-lg p-3">
                                <p className="text-sm text-gray-700">Inclusief electra en water</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Costs */}
                    <div className="bg-green-50 rounded-lg p-8 mb-12">
                        <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Extra Kosten</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-green-200">
                                    <span className="font-medium text-gray-700">Extra persoon</span>
                                    <span className="font-bold text-green-800">€3,00 per nacht</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-green-200">
                                    <span className="font-medium text-gray-700">Hond</span>
                                    <span className="font-bold text-green-800">€2,00 per nacht</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-medium text-gray-700">Extra auto</span>
                                    <span className="font-bold text-green-800">€2,50 per dag</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-green-200">
                                    <span className="font-medium text-gray-700">Eerste auto</span>
                                    <span className="font-bold text-green-600">GRATIS</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-green-200">
                                    <span className="font-medium text-gray-700">Toeristenbelasting</span>
                                    <span className="font-bold text-green-800">€2,20 per persoon per nacht</span>
                                </div>
                                <div className="bg-green-100 rounded-lg p-3">
                                    <p className="text-sm text-gray-700 text-center">
                                        <span className="font-semibold">Let op:</span> Toeristenbelasting is niet inbegrepen in de basisprijzen
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Season Pass */}
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white text-center">
                        <div className="text-4xl mb-4">🌱</div>
                        <h3 className="text-3xl font-bold mb-4">Seizoensplek</h3>
                        <div className="text-4xl font-bold mb-4">€2.300,00</div>
                        <p className="text-xl mb-4">1 april tot 1 oktober</p>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <p className="text-lg">Inclusief toeristenbelasting</p>
                            <p className="text-sm opacity-90">Perfect voor de hele zomer!</p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Wonder Yurt Pricing */}
            <StandardSection bgColor="green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Wonder Yurt Tarieven</h2>
                        <p className="text-lg text-gray-600">Unieke overnachtingservaring in onze yurt</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <div className="text-6xl mb-4">🏕️</div>
                            <h3 className="text-2xl font-bold text-green-800 mb-4">Wonder Yurt Verhuur</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Voor tarieven en beschikbaarheid van onze Wonder Yurt, neem contact op met Pieter Wonder.
                            </p>
                            <div className="bg-green-100 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">Mogelijkheden</h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                                    <div>• Yoga lessen</div>
                                    <div>• Overnachtingen</div>
                                    <div>• Kinderfeestjes</div>
                                    <div>• Romantische getaways</div>
                                    <div>• Groepsactiviteiten</div>
                                    <div>• Meditatie sessies</div>
                                </div>
                            </div>
                            <a
                                href="/wonder-yurt"
                                className="inline-flex items-center mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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

            {/* Important Information */}
            <StandardSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Belangrijke Informatie</h2>
                        <p className="text-lg text-gray-600">Wat u moet weten voor uw verblijf</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">📅 Seizoen</h3>
                            <p className="text-gray-700 mb-4">
                                Onze camping is open van half maart tot 1 november.
                                Het hoogseizoen loopt van 1 april tot 1 oktober.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Laagseizoen: half maart - 31 maart</li>
                                <li>• Hoogseizoen: 1 april - 1 oktober</li>
                                <li>• Naseizoen: 2 oktober - 1 november</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-yellow-800 mb-4">💰 Toeristenbelasting</h3>
                            <p className="text-gray-700 mb-4">
                                Alle prijzen zijn exclusief toeristenbelasting van €2,20 per persoon per nacht.
                            </p>
                            <div className="bg-yellow-100 rounded-lg p-3">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Uitzondering:</span> Seizoensplek is inclusief toeristenbelasting
                                </p>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-800 mb-4">🚗 Parkeren</h3>
                            <p className="text-gray-700 mb-4">
                                De eerste auto is gratis. Extra auto's kosten €2,50 per dag.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Eerste auto: GRATIS</li>
                                <li>• Extra auto: €2,50 per dag</li>
                                <li>• Voldoende parkeerruimte beschikbaar</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-purple-800 mb-4">🐕 Huisdieren</h3>
                            <p className="text-gray-700 mb-4">
                                Honden zijn welkom tegen een kleine vergoeding van €2,00 per nacht.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Hond: €2,00 per nacht</li>
                                <li>• Aanlijnplicht op het terrein</li>
                                <li>• Opruimen van uitwerpselen verplicht</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Contact for Booking */}
            <section className="py-16 bg-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Reserveer Nu!</h2>
                    <p className="text-xl mb-8">Voor het aankomend seizoen zijn er nog enkele plaatsen beschikbaar!</p>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white bg-opacity-10 rounded-lg p-8">
                            <h3 className="text-2xl font-semibold mb-4">Contact voor Reservering</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-center">
                                    <span className="text-2xl mr-4">📞</span>
                                    <div>
                                        <p className="font-semibold">Pieter Wonder</p>
                                        <p className="text-lg">+31 (0)6-48606075</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="text-2xl mr-4">✉️</span>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p>pieter@amarahoeve.nl</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    BOEK NU EEN CAMPINGPLAATS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StandardSection>
                <ContactSection />
            </StandardSection>

            <StandardFooter />
        </div>
    )
}