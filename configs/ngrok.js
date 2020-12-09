export default {
  auth: process.env.NGROK_AUTH || 'nuxt:rocks',
  authtoken: process.env.NGROK_AUTHTOKEN,
  addr: 8080,
}
