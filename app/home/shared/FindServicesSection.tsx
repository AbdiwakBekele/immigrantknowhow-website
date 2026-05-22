import type { PublicServiceType } from '@/app/lib/api/service-types'
import { providersSearchPath } from '@/app/lib/site-links'

export default function FindServicesSection({
  serviceTypes = [],
}: {
  serviceTypes?: PublicServiceType[]
}) {
  const items = serviceTypes ?? []

  if (items.length === 0) {
    return null
  }

  return (
    <section id="services" className="ikh-section ikh-find-services">
      <div className="ikh-shell">
        <h2 className="ikh-heading ikh-heading--center ikh-heading--narrow">
          Find the <span className="secondary">Services</span> You Need
        </h2>
        <p className="ikh-section-copy ikh-find-services__subtitle">
          Browse providers by category. View listings without an account; sign in when you are ready
          to send a contact message.
        </p>

        <div className="ikh-find-services-carousel-wrap">
          <div className="ikh-find-services-grid">
            {items.map((item) => {
              const browseHref = providersSearchPath({ service_type: item.value })

              return (
                <article className="ikh-find-services-card" key={item.value}>
                  <a
                    className="ikh-find-services-card__media-link"
                    href={browseHref}
                    aria-label={`Browse ${item.label} providers`}
                  >
                    <div
                      className="ikh-find-services-card__media"
                      style={{ backgroundImage: `url('${item.image_url}')` }}
                      role="img"
                      aria-label={item.label}
                    />
                  </a>
                  <div className="ikh-find-services-card__body">
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <a className="ikh-find-services-card__link" href={browseHref}>
                      Browse providers →
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
