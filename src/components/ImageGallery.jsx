import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './ImageGallery.css'

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imageFiles, setImageFiles] = useState([])
  const galleryRef = useRef(null)

  // Load images from the pictures directory
  useEffect(() => {
    // Create placeholder array - you can replace this with dynamic loading
    // For now, assuming images are named: image1.jpg, image2.jpg, etc.
    const imagePaths = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: `/pictures/image${i + 1}.jpg`,
      alt: `Yoga session ${i + 1}`,
      fallback: '/pictures/placeholder.jpg'
    }))
    
    setImageFiles(imagePaths)
    setImagesLoaded(true)
  }, [])

  const itemsPerView = () => {
    if (typeof window === 'undefined') return 3
    return window.innerWidth <= 768 ? 1 : 3
  }

  const [itemsToShow, setItemsToShow] = useState(itemsPerView())

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(itemsPerView())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, imageFiles.length - itemsToShow)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, imageFiles.length - itemsToShow)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, imageFiles.length, itemsToShow])

  if (!imagesLoaded || imageFiles.length === 0) {
    return (
      <div className="gallery-loading">
        <p>Loading gallery...</p>
      </div>
    )
  }

  const maxIndex = Math.max(0, imageFiles.length - itemsToShow)

  return (
    <div className="image-gallery">
      <div className="gallery-container" ref={galleryRef}>
        <button
          className="gallery-nav gallery-nav-left"
          onClick={prevSlide}
          aria-label="Previous images"
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="gallery-viewport">
          <div
            className="gallery-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(imageFiles.length / itemsToShow) * 100}%`
            }}
          >
            {imageFiles.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ width: `${100 / imageFiles.length}%` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => {
                    // Fallback for missing images
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fffbed" width="400" height="300"/%3E%3Ctext fill="%23274543" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EYoga Image %23' + image.id + '%3C/text%3E%3C/svg%3E'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="gallery-nav gallery-nav-right"
          onClick={nextSlide}
          aria-label="Next images"
          disabled={currentIndex >= maxIndex}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="gallery-dots">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            className={`gallery-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <p className="gallery-counter">
        {currentIndex + 1} / {maxIndex + 1}
      </p>
    </div>
  )
}

export default ImageGallery
