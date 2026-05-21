import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import siteSettings from './siteSettings'
import pageContent from './pageContent'
import serviceItem from './serviceItem'
import profileItem from './profileItem'
import faqItem from './faqItem'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([siteSettings, pageContent, serviceItem, profileItem, faqItem])
})
