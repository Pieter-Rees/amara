import Navigation from '@/components/Navigation'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

export default function OverOnsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            <StandardHero
                title="Over Ons"
                subtitle="Het verhaal achter de Amara Hoeve"
            />

            {/* Our Story Section */}
            <StandardSection>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ons Verhaal</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            In april 2017 zijn we na een lange wens van start gegaan met onze boerencamping!
                            De Amara Hoeve is rustig en landelijk gelegen in de zuurven polder in Bergen,
                            op nog geen 3 km van Alkmaar.
                        </p>
                        <p className="text-lg text-gray-700">
                            Wat begon als een droom om mensen de schoonheid van het boerderijleven te laten
                            ervaren, is uitgegroeid tot een unieke plek waar natuur, rust en authenticiteit
                            samenkomen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-green-100 rounded-lg p-8 text-center">
                            <div className="text-6xl mb-4">🏡</div>
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Amara Hoeve</h3>
                            <p className="text-gray-700 mb-4">Sinds 2017</p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>📍 Zuurven polder, Bergen</p>
                                <p>🌲 Bosrijke omgeving</p>
                                <p>🏖️ Dichtbij de kust</p>
                                <p>🎨 Kunstenaarsdorp</p>
                            </div>
                        </div>

                        <div>
                            <div className="bg-green-100 rounded-lg p-6 mb-6">
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Onze Visie</h3>
                                <p className="text-gray-700">
                                    We streven ernaar om gasten een authentieke boerderijervaring te bieden,
                                    waarbij ze kunnen genieten van de natuur, rust en het echte boerderijleven.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Onze Missie</h3>
                                <p className="text-gray-700">
                                    Wij bieden een echte boerderijervaring zonder pretenties, waar u het
                                    authentieke boerderijleven kunt ervaren in een duurzame en gastvrije omgeving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Contact Information */}
            <StandardSection bgColor="green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Neem Contact Op</h2>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl mb-4">📞</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Pieter Wonder</h3>
                                <p className="text-gray-700 mb-2">
                                    <a href="tel:+31648606075" className="hover:text-green-600 transition-colors">
                                        06-48606075
                                    </a>
                                </p>
                                <p className="text-sm text-gray-600">+31 (0)6-82253283</p>
                            </div>

                            <div>
                                <div className="text-4xl mb-4">✉️</div>
                                <h3 className="text-xl font-semibold text-green-800 mb-4">Email</h3>
                                <p className="text-gray-700">
                                    <a href="mailto:pieter@amarahoeve.nl" className="hover:text-green-600 transition-colors">
                                        pieter@amarahoeve.nl
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <div className="text-4xl mb-4">📍</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-4">Bezoek ons</h4>
                            <p className="text-gray-700">
                                Amara Hoeve Bergen<br />
                                Oosterdijk 3<br />
                                1862 PT BERGEN NH
                            </p>
                        </div>
                    </div>
                </div>
            </StandardSection>

            <StandardFooter />
        </div>
    )
}
