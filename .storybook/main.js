module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	// stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	core: {
		builder: '@storybook/builder-vite'
	},
	framework: '@storybook/sveltekit',
	features: {
		storyStoreV7: false
	},
	docs: {
		autodocs: false
	}
};
