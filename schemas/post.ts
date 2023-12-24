import { defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Publicaciones',
  type: 'document',
  fields: [
    {
      type: 'datetime',
      name: 'publishedAt',
      title: 'Fecha de publicación'
    },
    {
      name: 'title',
      title: 'Título',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'}
    },
    {
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'excerpt',
      title: 'Extracto',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Contenido',
      type: 'contentBlock',
    }
  ]
})