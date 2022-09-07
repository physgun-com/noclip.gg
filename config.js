export const SITE = {
	title: 'Noclip - The all-in-one platform for your gmod community.',
	description: 'Noclip is an all-in-one platform for your garry\'s mod community featuring a donation store, forums, and loading screen.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const GITHUB_EDIT_URL = `https://github.com/noclip-gg/site/tree/main/docs`;

export const COMMUNITY_INVITE_URL = `https://discord.com/invite/gsAFqh7mj9`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: '',
	appId: '',
	apiKey: '',
};


export const SIDEBAR = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};

export const FrontMatter = {
	title: '',
	description: '',
	layout: '',
	image: '',
	dir: '',
	ogLocale: '',
	lang: '',
};