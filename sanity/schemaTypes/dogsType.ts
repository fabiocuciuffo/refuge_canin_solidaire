import {defineField, defineType} from 'sanity'

export const dogsType = defineType({
  name: 'dogs',
  title: 'Dogs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'breed',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'age',
      type: 'number',
      validation: (rule) => rule.min(0).required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'about',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
