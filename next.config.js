/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.unsplash.com"],
	},
	compiler: {
		styledComponents: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};

module.exports = nextConfig;
