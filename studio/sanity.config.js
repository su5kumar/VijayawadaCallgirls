import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'vijayawada-escorts-cms',
  title: 'Vijayawada Escorts CMS',
  projectId: process.env.SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2026-05-21',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
