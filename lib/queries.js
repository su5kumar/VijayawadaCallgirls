import groq from 'groq'

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

export const pageContentQuery = groq`
  *[_type == "pageContent"][0]{
    pageTitle,
    seoTitle,
    seoDescription,
    aboutSection,
    servicesSection{heading, subtitle, items[]{title, description, iconLabel, points, "backgroundImageUrl": backgroundImage.asset->url}},
    profilesSection{heading, subtitle, profiles[]{name, spec, description, category, tag, minHours, meta, "backgroundImageUrl": backgroundImage.asset->url}},
    faqItems[]{question, answer},
    coverageAreas,
    bookingProcess
  }
`
