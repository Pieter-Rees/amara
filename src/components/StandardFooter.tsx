export default function StandardFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-lg mb-2">Kom jezelf VERWONDEREN...</p>
                <p className="text-sm text-gray-400">Back in Blissness</p>
                <p className="text-sm text-gray-500 mt-4">© {currentYear} Amara Hoeve. Alle rechten voorbehouden.</p>
            </div>
        </footer>
    )
}
