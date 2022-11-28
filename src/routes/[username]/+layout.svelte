<script lang="ts">
	import type { PageData } from './$types'
	import { page } from '$app/stores'

	export let data: PageData

	$: currentPath = $page.url.pathname
	$: {
		console.log(currentPath)
	}
</script>

<h1>{data.user.username}</h1>
<nav>
	<a
		class="btn"
		class:active={currentPath === `/${data.user.username}`}
		href="/{data.user.username}"
	>
		<span>Profile</span>
	</a>
	<a
		class="btn"
		class:active={currentPath === `/${data.user.username}/recipes`}
		href="/{data.user.username}/recipes">Recipes</a
	>
	<a
		class="btn"
		class:active={currentPath === `/${data.user.username}/cookbooks`}
		href="/{data.user.username}/cookbooks">Cookbooks</a
	>
</nav>
<slot />

<style lang="scss">
	@use '../../styles/variables' as var;

	nav {
		display: flex;
		background-color: var.$theme-foreground;
		border-radius: var.$border-radius;
		font-size: var.$font-size-5;
		a {
			padding: var.$padding;
			display: flex;
			justify-content: center;
			flex: 1;
			border: var.$border-thickness solid transparent;
			transition: border ease-in-out 0.2s;

			&.active {
				border-bottom: var.$border-thickness solid var.$color-primary;
			}
		}
	}
</style>
