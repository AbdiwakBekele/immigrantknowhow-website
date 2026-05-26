'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'

type Testimonial = {
  author: string
  id: string
  location: string
  quote: string
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
}

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

const itemsPerPageForWidth = (width: number) => {
  if (width < 768) return 1
  if (width < 1024) return 2
  return 3
}

const gapForWidth = (width: number) => {
  if (width < 768) return 24
  if (width < 1024) return 28
  return 32
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [cardWidth, setCardWidth] = useState(0)
  const [gapPx, setGapPx] = useState(32)
  const [activeIndex, setActiveIndex] = useState(0)

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)
  const canNavigate = testimonials.length > itemsPerPage
  const dotCount = maxIndex + 1

  const updateLayout = useCallback(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const width = viewport.clientWidth
    const cols = itemsPerPageForWidth(width)
    const gap = gapForWidth(width)
    const nextCardWidth = Math.max(240, Math.floor((width - gap * (cols - 1)) / cols))

    setItemsPerPage(cols)
    setGapPx(gap)
    setCardWidth(nextCardWidth)

    const step = nextCardWidth + gap
    const clamped = Math.min(activeIndexRef.current, Math.max(0, testimonials.length - cols))
    viewport.scrollLeft = clamped * step
    activeIndexRef.current = clamped
    setActiveIndex(clamped)
  }, [testimonials.length])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    updateLayout()

    const observer = new ResizeObserver(updateLayout)
    observer.observe(viewport)

    return () => observer.disconnect()
  }, [updateLayout])

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = 'smooth') => {
      const viewport = viewportRef.current
      if (!viewport || cardWidth <= 0) return

      const nextIndex = Math.max(0, Math.min(index, maxIndex))
      const step = cardWidth + gapPx

      viewport.scrollTo({
        left: nextIndex * step,
        behavior,
      })
      activeIndexRef.current = nextIndex
      setActiveIndex(nextIndex)
    },
    [cardWidth, gapPx, maxIndex],
  )

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || cardWidth <= 0) return

    const onScroll = () => {
      const step = cardWidth + gapPx
      const index = Math.round(viewport.scrollLeft / step)
      const nextIndex = Math.max(0, Math.min(index, maxIndex))
      activeIndexRef.current = nextIndex
      setActiveIndex(nextIndex)
    }

    viewport.addEventListener('scroll', onScroll, { passive: true })
    return () => viewport.removeEventListener('scroll', onScroll)
  }, [cardWidth, gapPx, maxIndex])

  useEffect(() => {
    if (!canNavigate) return

    const timer = window.setInterval(() => {
      const next = activeIndexRef.current >= maxIndex ? 0 : activeIndexRef.current + 1
      scrollToIndex(next)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [canNavigate, maxIndex, scrollToIndex])

  const carouselStyle = {
    '--testimonial-card-width': cardWidth > 0 ? `${cardWidth}px` : undefined,
    '--ikh-testimonial-gap': `${gapPx}px`,
  } as CSSProperties

  return (
    <div
      className="ikh-testimonial-carousel"
      style={carouselStyle}
      role="region"
      aria-label="Member testimonials"
    >
      <button
        className="ikh-testimonial-arrow ikh-testimonial-arrow--prev"
        type="button"
        aria-label="Previous testimonials"
        onClick={() => scrollToIndex(activeIndex - 1)}
        disabled={!canNavigate || activeIndex === 0}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m14.5 6-6 6 6 6" />
        </svg>
      </button>

      <div ref={viewportRef} className="ikh-testimonial-viewport" tabIndex={0}>
        <div className="ikh-testimonial-track">
          {testimonials.map((item) => {
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
      </div>

      <button
        className="ikh-testimonial-arrow ikh-testimonial-arrow--next"
        type="button"
        aria-label="Next testimonials"
        onClick={() => scrollToIndex(activeIndex + 1)}
        disabled={!canNavigate || activeIndex >= maxIndex}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m9.5 6 6 6-6 6" />
        </svg>
      </button>

      {canNavigate && (
        <div className="ikh-testimonial-dots" aria-label="Choose testimonial page">
          {Array.from({ length: dotCount }, (_, pageIndex) => (
            <button
              className="ikh-testimonial-dot"
              type="button"
              key={`testimonial-dot-${pageIndex}`}
              aria-label={`Show testimonial ${pageIndex + 1}`}
              aria-current={pageIndex === activeIndex}
              onClick={() => scrollToIndex(pageIndex)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
