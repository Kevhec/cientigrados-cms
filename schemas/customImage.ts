import { Rule } from 'sanity';

export default {
  type: 'image',
  name: 'image',
  title: 'Imagen',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Texto alternativo',
      name: 'alt',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    }
  ]
}