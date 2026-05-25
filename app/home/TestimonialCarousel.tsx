'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Testimonial = {
  author: string
  id: string
  location: string
  quote: string
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
}

const chunk = <T,>(items: T[], size: number) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
    items.slice(index * size, index * size + size),
  )

const splitQuote = (quote: string) => {
  const sentenceEnd = quote.indexOf('.')

  if (sentenceEnd === -1) {
    return { body: '', headline: quote }
  }

  return {
    body: quote.slice(sentenceEnd + 1).trim(),
    headline: quote.slice(0, sentenceEnd + 1),
  }
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const pages = useMemo(() => chunk(testimonials, itemsPerPage), [testimonials, itemsPerPage])
  const [activePage, setActivePage] = useState(0)
  const currentPage = pages.length > 0 ? activePage % pages.length : 0

  useEffect(() => {
    const updateItemsPerPage = (width: number) => {
      setItemsPerPage(width < 768 ? 1 : 3)
    }

    if (!carouselRef.current) {
      return
    }

    updateItemsPerPage(carouselRef.current.clientWidth)

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateItemsPerPage(entry.contentRect.width)
      }
    })

    observer.observe(carouselRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (pages.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setActivePage((current) => (current + 1) % pages.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [pages.length])

  const goToPrevious = () => {
    setActivePage((current) => (current === 0 ? pages.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActivePage((current) => (current + 1) % pages.length)
  }

  return (
    <div
      ref={carouselRef}
      className="ikh-testimonial-carousel"
      role="region"
      aria-label="Member testimonials"
      aria-roledescription="carousel"
      data-items-per-page={itemsPerPage}
    >
      <button
        className="ikh-testimonial-arrow ikh-testimonial-arrow--prev"
        type="button"
        aria-label="Previous testimonials"
        onClick={goToPrevious}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m14.5 6-6 6 6 6" />
        </svg>
      </button>

      <div className="ikh-testimonial-viewport">
        <div
          className="ikh-testimonial-track"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              className="ikh-testimonial-page"
              key={`testimonial-page-${pageIndex}`}
              aria-hidden={pageIndex !== currentPage}
            >
              {page.map((item) => {
                const quote = splitQuote(item.quote)

                return (
                  <figure className="ikh-testimonial-card" key={item.id}>
                    <blockquote>
                      <strong>{quote.headline}</strong>
                      {quote.body && <span>{quote.body}</span>}
                    </blockquote>
                    <figcaption>
                      <span>{item.author}</span>
                      <small>{item.location}</small>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <button
        className="ikh-testimonial-arrow ikh-testimonial-arrow--next"
        type="button"
        aria-label="Next testimonials"
        onClick={goToNext}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m9.5 6 6 6-6 6" />
        </svg>
      </button>

      <div className="ikh-testimonial-dots" aria-label="Choose testimonial page">
        {pages.map((_, pageIndex) => (
          <button
            className="ikh-testimonial-dot"
            type="button"
            key={`testimonial-dot-${pageIndex}`}
            aria-label={`Show testimonial page ${pageIndex + 1}`}
            aria-current={pageIndex === currentPage}
            onClick={() => setActivePage(pageIndex)}
          />
        ))}
      </div>
    </div>
  )
}
