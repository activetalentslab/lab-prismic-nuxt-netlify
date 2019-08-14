import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

const config = {
  baseUrl: 'https://lab-prismic-nuxt-netlify.cdn.prismic.io/api/v2',
  access_token: 'MC5YVk9GU2hFQUFDSUFqc2ti.RO-_ve-_ve-_ve-_ve-_ve-_ve-_vUDvv71yIu-_vX7vv73vv73vv73vv73vv71N77-9SRsk77-977-9SO-_vX7vv71BFA'
}

export const initApi = req => {
  return Prismic.getApi(config.baseUrl, {
    accessToken: config.access_token,
    req: req
  })
}

export const linkResolver = doc => {
  if (doc.type === 'blog_post') return `/blog/${doc.uid}`
  return `/${doc.uid}`
}

export const generatePageData = (documentType, data) => {
  switch (documentType) {
    case 'homepage':
      return {
        title: PrismicDOM.RichText.asText(data.title),
        content: PrismicDOM.RichText.asText(data.content)
      }
    case 'about_page':
      return {
        title: PrismicDOM.RichText.asText(data.title),
        content: PrismicDOM.RichText.asText(data.content)
      }
    case 'blog_page':
      return {
        posts: data
      }
    case 'blog_post':
      return {
        title: PrismicDOM.RichText.asText(data.title),
        content: PrismicDOM.RichText.asText(data.content)
      }
  }
}
