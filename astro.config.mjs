import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://npermana.github.io',
	integrations: [
		starlight({

			title: 'My Homepage',
			social: {
				github: 'https://github.com/npermana',
				// linkedin: 'https://www.linkedin.com/in/evotianusb',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/'
				},
				{
					label: 'Resume',
					link: '/resume'
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
		}),
	],
});
