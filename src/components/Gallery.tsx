'use client'

import { useState } from 'react'
import LazyImage from './animations/LazyImage'

interface GalleryImage {
    id: string
    src: string
    alt: string
    title: string
    description?: string
}

interface GalleryProps {
    images: GalleryImage[]
    title?: string
    description?: string
}

export default function Gallery({ images, title = "Galerij", description }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <>
            <section id="gallery" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                        {description && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2"
                                onClick={() => openModal(image)}
                            >
                                <div className="aspect-square relative">
                                    <LazyImage
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                                        priority={parseInt(image.id) <= 3} // Load first 3 images with priority
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                                    {image.description && (
                                        <p className="text-sm text-gray-600">{image.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeModal}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <LazyImage
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            priority={true}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                            <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-sm">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
