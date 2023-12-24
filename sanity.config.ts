import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { esESLocale } from '@sanity/locale-es-es'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: process.env.SANITY_STUDIO_NAME,
  title: process.env.SANITY_STUDIO_TITLE,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',

  plugins: [
    deskTool(),
    visionTool(),
    esESLocale({
      title: 'Español'
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
