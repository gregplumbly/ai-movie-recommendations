/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./app/scripts/generateEmbeddings");
        }
        return config;
    },
};
