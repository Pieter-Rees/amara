export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-green-800">Amara Hoeve</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                            <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Over ons</a>
                            <a href="#camping" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Boerencamping</a>
                            <a href="#yurt" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Wonder Yurt</a>
                            <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-50 rounded-lg mt-2">
                        <a href="#home" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">Over ons</a>
                        <a href="#camping" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">Boerencamping</a>
                        <a href="#yurt" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">Wonder Yurt</a>
                        <a href="#contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
