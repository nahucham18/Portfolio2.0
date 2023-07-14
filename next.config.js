/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        YOUR_SERVICE_ID: 'service_eaxbteo',
        YOUR_TEMPLATE_ID:'template_qq34z8d',
        YOUR_PUBLIC_KEY:'PpjNkl3rAq47dKEHl'
    },
    images: {
        domains: ["storage.googleapis.com", "firebasestorage.googleapis.com"]
    }
}

module.exports = nextConfig
