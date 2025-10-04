import Navigation from '@/components/Navigation'
import ContactSection from '@/components/ContactSection'
import StandardHero from '@/components/StandardHero'
import StandardSection from '@/components/StandardSection'
import StandardFooter from '@/components/StandardFooter'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            <Navigation />

            <StandardHero
                title="Contact"
                subtitle="Neem contact op of kom langs bij de Amara Hoeve"
            />

            {/* Contact Information & Map Section */}
            <StandardSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contactgegevens</h2>

                            <div className="space-y-8">
                                {/* Phone Numbers */}
                                <div className="bg-green-50 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="text-3xl mr-4">📞</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-green-800 mb-2">Telefoon</h3>
                                            <div className="space-y-2">
                                                <p className="text-lg text-gray-700">
                                                    <a href="tel:+31648606075" className="hover:text-green-600 transition-colors">
                                                        06-48606075
                                                    </a>
                                                </p>
                                                <p className="text-lg text-gray-700">
                                                    <a href="tel:+31682253283" className="hover:text-green-600 transition-colors">
                                                        +31 (0)6-82253283
                                                    </a>
                                                </p>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">Bel voor reserveringen en informatie</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="text-3xl mr-4">✉️</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
                                            <p className="text-lg text-gray-700">
                                                <a href="mailto:pieter@amarahoeve.nl" className="hover:text-blue-600 transition-colors">
                                                    pieter@amarahoeve.nl
                                                </a>
                                            </p>
                                            <p className="text-sm text-gray-600 mt-2">Stuur een bericht voor vragen</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="bg-yellow-50 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="text-3xl mr-4">📍</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Adres</h3>
                                            <div className="text-gray-700">
                                                <p className="text-lg font-medium">Amara Hoeve Bergen</p>
                                                <p>Oosterdijk 3</p>
                                                <p>1862 PT BERGEN NH</p>
                                                <p>Nederland</p>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">Op nog geen 3 km van Alkmaar</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="bg-purple-50 rounded-lg p-6">
                                    <div className="flex items-start">
                                        <div className="text-3xl mr-4">🕒</div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Seizoen</h3>
                                            <div className="text-gray-700 space-y-1">
                                                <p><span className="font-medium">Open:</span> Half maart tot 1 november</p>
                                                <p><span className="font-medium">Hoogseizoen:</span> 1 april - 1 oktober</p>
                                                <p><span className="font-medium">Reservering:</span> Altijd mogelijk</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Locatie</h2>

                            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9706.0!2d4.7!3d52.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fb0c0c0c0c0c%3A0x1c0c0c0c0c0c0c0c!2sBergen%2C%201861%20Bergen%2C%20Nederland!5e0!3m2!1snl!2snl!4v1633000000000"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Amara Hoeve locatie in Bergen"
                                    className="w-full h-96"
                                ></iframe>
                            </div>

                            <div className="mt-6 bg-green-100 rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-green-800 mb-2">Routebeschrijving</h3>
                                <p className="text-gray-700 text-sm">
                                    De Amara Hoeve is gelegen in de Zuurven polder in Bergen, op nog geen 3 km van Alkmaar.
                                    Volg de borden naar Bergen en zoek naar de camping in de polder.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* Additional Contact Information */}
            <StandardSection bgColor="green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Reserveer Nu!</h2>
                        <p className="text-lg text-gray-600">Voor het aankomend seizoen zijn er nog enkele plaatsen beschikbaar</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Quick Contact */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Snelle Reservering</h3>
                            <p className="text-gray-700 mb-6">
                                Bel direct voor een snelle reservering of stel je vraag via WhatsApp.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="tel:+31648606075"
                                    className="block w-full bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    📞 Bel nu: 06-48606075
                                </a>
                                <a
                                    href="https://wa.me/31648606075"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-green-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Email Contact */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-semibold text-green-800 mb-4">Email Contact</h3>
                            <p className="text-gray-700 mb-6">
                                Stuur een uitgebreide vraag of verzoek via email.
                            </p>
                            <a
                                href="mailto:pieter@amarahoeve.nl?subject=Reservering Amara Hoeve&body=Hallo,%0D%0A%0D%0AIk zou graag willen reserveren voor:%0D%0A- Aankomst datum:%0D%0A- Vertrek datum:%0D%0A- Aantal personen:%0D%0A- Type accommodatie:%0D%0A%0D%0AMet vriendelijke groet,"
                                className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                ✉️ Stuur email
                            </a>
                        </div>
                    </div>
                </div>
            </StandardSection>

            {/* FAQ Section */}
            <StandardSection>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Veelgestelde Vragen</h2>
                        <p className="text-lg text-gray-600">Antwoorden op de meest gestelde vragen</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wanneer is de camping open?</h3>
                                <p className="text-gray-700">De camping is open van half maart tot 1 november. Het hoogseizoen loopt van 1 april tot 1 oktober.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoe ver is het naar Alkmaar?</h3>
                                <p className="text-gray-700">De Amara Hoeve ligt op nog geen 3 km van Alkmaar, dus de stad is makkelijk bereikbaar.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zijn honden welkom?</h3>
                                <p className="text-gray-700">Ja, honden zijn welkom tegen een kleine vergoeding van €2,00 per nacht.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wat zijn de tarieven?</h3>
                                <p className="text-gray-700">Caravan €30, tent €25, camper €30 per nacht voor 2 personen. Bekijk onze <a href="/tarieven" className="text-green-600 hover:text-green-800">tarieven pagina</a> voor details.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is er electra en water?</h3>
                                <p className="text-gray-700">Ja, alle campingplekken hebben electra en er zijn watertappunten op het veld.</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kan ik de Wonder Yurt huren?</h3>
                                <p className="text-gray-700">Ja, de Wonder Yurt is te huur voor overnachtingen, yoga lessen en meer. <a href="/wonder-yurt" className="text-green-600 hover:text-green-800">Lees meer</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StandardSection>

            <StandardSection>
                <ContactSection />
            </StandardSection>

            <StandardFooter />
        </div>
    )
}