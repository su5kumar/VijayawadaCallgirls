export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'title', title: 'Site Title', type: 'string'},
    {name: 'description', title: 'Site Description', type: 'text'},
    {name: 'logoText', title: 'Logo Text', type: 'string'},
    {name: 'contactEmail', title: 'Contact Email', type: 'string'},
    {name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string'},
    {name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string'},
    {name: 'heroTitle', title: 'Hero Title', type: 'string'},
    {name: 'heroLead', title: 'Hero Lead Text', type: 'text'},
    {name: 'footerText', title: 'Footer Text', type: 'text'},
    {name: 'seoTitle', title: 'SEO Title', type: 'string'},
    {name: 'seoDescription', title: 'SEO Description', type: 'text'}
  ]
}
