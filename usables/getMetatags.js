export default function (c) {
  const tags = []
  tags.push({
    hid: 'description',
    name: 'description',
    content: c.description,
  })

  // og
  tags.push({ hid: 'og:title', property: 'og:title', content: c.title })
  tags.push({
    hid: 'og:description',
    property: 'og:description',
    content: c.description,
  })
  tags.push({
    hid: 'og:image',
    property: 'og:image',
    content: c.og_image.filename || c.tw_image.filename,
  })

  // Twitter
  tags.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  tags.push({ hid: 'twitter:site', name: 'twitter:site', content: '@Kunsih6' })
  tags.push({
    hid: 'twitter:creator',
    name: 'twitter:creator',
    content: '@Kunsih6',
  })
  tags.push({
    hid: 'twitter:title',
    name: 'twitter:title',
    content: c.title,
  })
  tags.push({
    hid: 'twitter:description',
    name: 'twitter:description',
    content: c.description,
  })
  tags.push({
    hid: 'twitter:image',
    name: 'twitter:image',
    content: c.tw_image.filename || c.og_image.filename,
  })
  return tags
}
