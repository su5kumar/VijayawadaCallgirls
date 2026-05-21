export default {
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    {name: 'pageTitle', title: 'Page Title', type: 'string'},
    {name: 'seoTitle', title: 'SEO Title', type: 'string'},
    {name: 'seoDescription', title: 'SEO Description', type: 'text'},
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'text', title: 'Text', type: 'text'},
      ]
    },
    {
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'items', title: 'Service Items', type: 'array', of: [{type: 'serviceItem'}]}
      ]
    },
    {
      name: 'profilesSection',
      title: 'Profiles Section',
      type: 'object',
      fields: [
        {name: 'heading', title: 'Heading', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'profiles', title: 'Companion Profiles', type: 'array', of: [{type: 'profileItem'}]}
      ]
    },
    {name: 'faqItems', title: 'FAQ Items', type: 'array', of: [{type: 'faqItem'}]},
    {name: 'coverageAreas', title: 'Coverage Areas', type: 'array', of: [{type: 'string'}]},
    {name: 'bookingProcess', title: 'Booking Process', type: 'array', of: [{type: 'string'}]}
  ],
  preview: {
    select: {
      title: 'pageTitle'
    }
  }
}
