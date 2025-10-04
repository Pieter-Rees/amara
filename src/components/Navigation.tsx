export default function Navigation() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors duration-200 hover:scale-105">
                            Amara Hoeve
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="/" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Home</a>
                            <a href="/#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Over ons</a>
                            <a href="/boerencamping" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Boerencamping</a>
                            <a href="/wonder-yurt" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Wonder Yurt</a>
                            <a href="/gallerij" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Galerij</a>
                            <a href="/tarieven" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Tarieven</a>
                            <a href="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:bg-green-50 rounded-md">Contact</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-all duration-200 hover:scale-110 active:scale-95"
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
                        <a href="/" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Home</a>
                        <a href="/#about" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Over ons</a>
                        <a href="/boerencamping" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Boerencamping</a>
                        <a href="/wonder-yurt" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Wonder Yurt</a>
                        <a href="/gallerij" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Galerij</a>
                        <a href="/tarieven" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Tarieven</a>
                        <a href="/contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-all duration-200 hover:bg-green-100 rounded-md hover:translate-x-2">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
