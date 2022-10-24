import Meta from './src/assets/meta.png'

export const SITE = {
	title: 'Noclip - The all-in-one platform for your gmod community.',
	description: 'Noclip is an all-in-one platform for your garry\'s mod community featuring a donation store, forums, and loading screen.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: Meta,
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


export const navigation = [
	{
	  title: 'Introduction',
	  links: [
		{ title: 'Getting started', href: '/docs' },
	  ],
	},
	{
	  title: 'Forums',
	  links: [
		{
		  title: 'Categories',
		  href: '/docs/forums/categories'
		},
		{
		  title: 'Boards',
		  href: '/docs/forums/boards',
		},
		{
		  title: 'Threads',
		  href: '/docs/forums/threads',
		},
		// {
		//   title: 'Comments',
		//   href: '/docs/forums/comments',
		// },
	  ],
	},
	{
	  title: 'Store',
	  links: [
		// { title: 'Packages', href: '/docs/store/packages' },
		{ title: 'Actions', href: '/docs/store/actions' },
		{ title: 'Linking your store', href: '/docs/store/linking-your-store' },
		{ title: 'Creating a package', href: '/docs/store/creating-a-package' }
	  ],
	},
	{
	  title: 'Domains',
	  links: [
		{ title: 'Custom Domains', href: '/docs/domains/custom-domains' },
	  ],
	},
  ]

export const FrontMatter = {
	title: '',
	description: '',
	layout: '',
	image: '',
	dir: '',
	ogLocale: '',
	lang: '',
};