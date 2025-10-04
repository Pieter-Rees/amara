export default function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-green-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Contact & Reserveren</h2>
                    <p className="text-xl">Informeer of reserveer bij Pieter Wonder</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white bg-opacity-10 rounded-lg p-8">
                        <h3 className="text-2xl font-semibold mb-4">Contactgegevens</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📞</span>
                                <div>
                                    <p className="font-semibold">Telefoon</p>
                                    <p>+31 (0)6-48606075</p>
                                    <p>+31 (0)6-82253283</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">✉️</span>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>pieter@amarahoeve.nl</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-semibold mb-4">Reserveer nu!</h3>
                        <p className="mb-6">Voor het aankomend seizoen zijn er nog enkele plaatsen beschikbaar!</p>
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            BOEK NU EEN CAMPINGPLAATS
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
