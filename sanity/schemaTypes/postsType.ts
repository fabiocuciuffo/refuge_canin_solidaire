import {defineField, defineType} from 'sanity'

export const category = [
  {title: 'Adoption', value: 'Adoption'},
  {title: 'Education', value: 'Education'},
  {title: 'Le Refuge', value: 'Le Refuge'},
  {title: 'Sensibilisation', value: 'Sensibilisation'},
  {title: 'Événements', value: 'Événements'},
  {title: 'Vie sociale', value: 'Vie sociale'},
]

export const postsType = defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: category.map(({title, value}) => ({title, value})),
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
