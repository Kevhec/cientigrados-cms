import { defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autores',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen',
      options: {
        hotspot: true,
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    }
  }
})