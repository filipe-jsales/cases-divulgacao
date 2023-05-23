module.exports = {
    trailingSlash: true,
    async redirects() {
        return [
            {
                source: '/faq',
                destination: '/',
                permanent: true,
            },
        ]
    }
}