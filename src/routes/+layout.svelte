<script lang="ts">
	import AppLayout from '$lib/components/AppLayout.svelte'
	import { IconTypes } from '$lib/components/icons/Icon.svelte'
	import '$styles/index.scss'

	const links = [
		{
			name: 'Home',
			href: '/',
			icon: IconTypes.Home
		},
		{
			name: 'Recipes',
			href: '/recipes',
			icon: IconTypes.Recipe
		},
		{
			name: 'Cookbooks',
			href: '/cookbooks',
			icon: IconTypes.Cookbook
		}
	]
</script>

<AppLayout {links}>
	<slot />
</AppLayout>
