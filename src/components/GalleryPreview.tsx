'use client'
import React, { useState } from 'react'
import LazyImage from './animations/LazyImage'

interface GalleryImage {
    id: string
    src: string
    alt: string
    title: string
    description?: string
}

interface GalleryPreviewProps {
    images: GalleryImage[]
    title: string
    description?: string
}

export default function GalleryPreview({ images, title, description }: GalleryPreviewProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

    const openModal = (image: GalleryImage) => {
        setSelectedImage(image)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    // Show only the first 3 images as highlights
    const highlightedImages = images.slice(0, 3)

    return (
        <>
            <section id="gallery" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                        {description && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{description}</p>
                        )}
                        <a
                            href="/gallerij"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                        >
                            Bekijk volledige galerij
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlightedImages.map((image) => (
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
                                        priority={true} // Gallery preview images should load with priority
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
                            onClick={closeModal}
                            aria-label="Close image modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="relative w-full h-[70vh]">
                            <LazyImage
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-full object-contain"
                                priority={true}
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="text-sm text-gray-700">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
