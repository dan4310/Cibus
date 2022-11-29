<script lang="ts">
	import type { PageData } from './$types'
	import { page } from '$app/stores'

	export let data: PageData

	$: currentPath = $page.url.pathname
</script>

<div class="profile-page">
	<h1>{data.user.username}</h1>
	<div>
		<hr />
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
		<hr />
	</div>
	<slot />
</div>

<style lang="scss">
	@use '../../styles/variables' as var;
	.profile-page {
		display: flex;
		flex-direction: column;
		gap: var.$padding-6;
	}
	nav {
		display: flex;
		border-radius: var.$border-radius;
		font-size: var.$font-size-5;
		justify-content: space-around;
		margin: var.$padding-6 0;
		overflow-x: scroll;
		a {
			padding: var.$padding-6 var.$padding-2;
			display: flex;
			justify-content: center;
			border: var.$border-thickness solid transparent;
			transition: all ease-in-out 0.2s;

			&.active {
				background-color: var.$color-primary;
			}
		}
	}
</style>
