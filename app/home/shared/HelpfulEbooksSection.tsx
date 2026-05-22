import type { PublicLibraryItem } from '@/app/lib/api/library'
import { loginUrl } from './data'

const EBOOK_COVER_FALLBACK =
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80'

function ebookCoverUrl(item: PublicLibraryItem): string {
  return item.cover_image_url ?? EBOOK_COVER_FALLBACK
}

export default function HelpfulEbooksSection({
  ebooks = [],
}: {
  ebooks?: PublicLibraryItem[]
}) {
  const items = (ebooks ?? []).slice(0, 6)

  if (items.length === 0) {
    return null
  }

  return (
    <section id="ebooks" className="ikh-section ikh-ebooks">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
          Helpful <span className="secondary">Ebooks</span> For Every Step
        </h2>
        <p className="ikh-section-copy ikh-ebooks__subtitle">
          Educational ebooks organized by topic. Visitors log in to view or continue to the hub if
          already signed in.
        </p>

        <div className="ikh-ebooks-carousel-wrap">
          <div className="ikh-ebooks-grid">
            {items.map((item) => (
              <article className="ikh-ebooks-card" key={item.slug}>
                <div
                  className="ikh-ebooks-card__media"
                  style={{ backgroundImage: `url('${ebookCoverUrl(item)}')` }}
                  role="img"
                  aria-label={item.title}
                />
                <div className="ikh-ebooks-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description ?? 'Educational ebook for your immigration journey.'}</p>
                  <a className="ikh-ebooks-card__link" href={loginUrl}>
                    Login to read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
