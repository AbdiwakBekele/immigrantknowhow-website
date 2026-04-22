/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from 'react'

import type { CountryPageConfig } from './country-pages'
import { SectionActions } from './ui'

export default function CountryHeroSection({
  config,
  joinUrl,
}: {
  config: CountryPageConfig
  joinUrl: string
}) {
  const highlightSeparator = config.keepHighlightWithPrevious ? '\u00A0' : ' '

  const style = {
    '--ikh-country-hero-bg': `url("${config.heroBackgroundImage}")`,
    '--ikh-country-hero-body-max-width': config.heroBodyMaxWidth ?? '520px',
    '--ikh-country-hero-body-font-size': config.heroBodyFontSize ?? '32px',
    '--ikh-country-hero-copy-basis': config.heroCopyBasis ?? '60%',
    '--ikh-country-hero-copy-offset-x': config.heroCopyOffsetX ?? '0px',
  } as CSSProperties

  return (
    <section className="ikh-hero ikh-hero--country" style={style}>
      <div className="ikh-shell ikh-hero__inner">
        <div className="ikh-hero__copy ikh-hero__copy--country">
          <h1 className={`ikh-hero__country-title ${config.heroTitleThreeLines ? 'ikh-hero__country-title--three' : ''}`}>
            {config.heroTitleThreeLines ? (
              <>
                <span className="ikh-hero__country-line">{config.heroTitleText}</span>
                <span className="ikh-hero__country-line">
                  {config.heroTitleLine2Prefix ? `${config.heroTitleLine2Prefix} ` : null}
                  <span className="secondary">{config.heroTitleHighlight}</span>
                </span>
                <span className="ikh-hero__country-line">{config.heroTitleSuffix}</span>
              </>
            ) : (
              <>
                {config.heroTitleText}
                {config.heroTitleHighlight ? (
                  <>
                    {highlightSeparator}
                    <span className="secondary">{config.heroTitleHighlight}</span>
                  </>
                ) : null}{' '}
                {config.heroTitleSuffix ?? null}
              </>
            )}
          </h1>

          <p className="ikh-hero__body">{config.heroBody}</p>

          <SectionActions joinUrl={joinUrl} light={false} alignStart={true} />
        </div>

        <div className="ikh-hero__media" aria-hidden="true">
          <img src={config.heroImage} alt="" className={`ikh-hero__image ${config.heroImageClassName ?? ''}`} />
        </div>
      </div>
    </section>
  )
}
