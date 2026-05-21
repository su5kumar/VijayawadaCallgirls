export default {
  name: 'serviceItem',
  title: 'Service Item',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'backgroundImage', title: 'Background Image', type: 'image'},
    {name: 'iconLabel', title: 'Icon Label', type: 'string'},
    {name: 'points', title: 'Points', type: 'array', of: [{type: 'string'}]},
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
}
