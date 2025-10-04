export default function HeroSection() {
    return (
        <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Welkom op de{' '}
                    <span className="text-green-600">Amara Hoeve!</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                    Kom je gezellig kamperen?
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">AMARA HOEVE BERGEN | BOERENCAMPING</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In april 2017 zijn we na een lange wens van start gegaan met onze boerencamping!<br />
                        De Amara Hoeve is rustig en landelijk gelegen in de zuurven polder in Bergen,<br />
                        op nog geen 3 km van Alkmaar.
                    </p>
                </div>
            </div>
        </section>
    )
}
