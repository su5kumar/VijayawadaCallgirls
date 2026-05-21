export default {
  name: 'profileItem',
  title: 'Companion Profile',
  type: 'object',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'spec', title: 'Specialty', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'category', title: 'Category', type: 'string'},
    {name: 'tag', title: 'Profile Tag', type: 'string'},
    {name: 'backgroundImage', title: 'Background Image', type: 'image'},
    {name: 'minHours', title: 'Minimum Hours', type: 'string'},
    {name: 'meta', title: 'Meta Label', type: 'string'},
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'spec'
    }
  }
}
