import { defineType } from 'sanity';
import customImage from './customImage';

export default defineType({
  name: 'contentBlock',
  title: 'Contenido',
  type: 'array',
  of: [
    {
      title: 'Bloque',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Encabezado 1', value: 'h1'},
        {title: 'Encabezado 2', value: 'h2'},
        {title: 'Encabezado 3', value: 'h3'},
      ],
      marks: {
        annotations: [
          {
            name: 'link',
            title: 'Enlace',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Abrir en una nueva pestaña',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    },
    customImage
  ]
})