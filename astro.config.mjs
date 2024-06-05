import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	output: "static",
	image: {
		service: passthroughImageService()
	},
	integrations: [starlight({
		title: {
			en: "Help center",
			fr: "Centre d'aide"
		},
		social: {
			linkedin: 'https://www.linkedin.com/company/htoh-superapp/'
		},
		logo: {
			src: './src/assets/htoh-logo.png'
		},
		customCss: ['./src/styles/custom.css'],
		pagination: false,
		defaultLocale: 'en',
		locales: {
			en: {
				label: 'English'
			},
			fr: {
				label: 'Français'
			}
		},
		sidebar: [{
			label: 'Get started',
			collapsed: true,
			translations: {
				fr: 'Pour commencer'
			},
			autogenerate: {
				directory: 'get-started'
			}
		}, {
			label: 'Trips management',
			collapsed: true,
			translations: {
				fr: 'Gestion des voyages'
			},
			autogenerate: {
				directory: 'trips-management'
			}
		}, {
			label: 'HtoH Trip Connect',
			collapsed: true,
			translations: {
				fr: 'HtoH Trip Connect'
			},
			autogenerate: {
				directory: 'htoh-trip-connect'
			}
		}, {
			label: 'Support and assistance',
			collapsed: true,
			translations: {
				fr: 'Support et assistance'
			},
			autogenerate: {
				directory: 'support-and-assistance'
			}
		}, {
			label: 'Wallet',
			collapsed: true,
			translations: {
				fr: 'Portefeuille numérique'
			},
			autogenerate: {
				directory: 'wallet'
			}
		}]
	})]
});