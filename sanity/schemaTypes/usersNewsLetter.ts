import {defineField, defineType} from 'sanity'

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter Subscriptions',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    }),
    defineField({
      name: 'subscribedAt',
      title: "Date d'inscription",
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'Actif', value: 'active'},
          {title: 'Désabonné', value: 'unsubscribed'},
        ],
      },
      initialValue: 'active',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'status',
    },
  },
})
