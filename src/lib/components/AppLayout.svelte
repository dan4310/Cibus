<script lang="ts" context="module">
	type NavLink = {
		name: string
		href: string
		icon: IconTypes
	}
</script>

<script lang="ts">
	import HamburgerIcon from './icons/HamburgerIcon.svelte'
	import Icon, { type IconTypes } from './icons/Icon.svelte'
	import SearchBar from './SearchBar.svelte'
	export let links: NavLink[]
</script>

<header class="navbar">
	<div class="navbar__left">
		<button type="button" class="btn-round navbar__btn-menu">
			<HamburgerIcon />
		</button>
		<a href="/"><h3>Cibus</h3></a>
	</div>

	<SearchBar />

	<div class="navbar__right">
		<a class="btn-outline-primary" href="/login">Login</a>
	</div>
</header>
<aside class="sidebar">
	<ul>
		{#each links as link (link.name)}
			<li class="btn">
				<a href={link.href} class="sidebar__link">
					<Icon type={link.icon} />
					<span>{link.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</aside>
<main>
	<slot />
</main>

<style lang="scss">
	@use '../../styles/mixins' as m;
	@use '../../styles/variables' as var;
	
	:global(body) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		min-height: 100vh;
		position: relative;
		overflow-y: scroll;
	}

	.navbar {
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 3;
		position: sticky;
		top: 0;
	}
	main {
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 3;
		width: 100%;
		padding: var.$padding-6;
		box-sizing: border-box;
	}
	.sidebar {
		grid-row-start: 1;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 2;
		visibility: collapse;
		margin-left: -300px;
		transition: all ease-in-out 0.2s;
		position: sticky;
		top: 0;
		height: 100vh;
	}

	@include m.break(md) {
		.navbar {
			grid-column-start: 2;
			grid-column-end: 3;
			.navbar__btn-menu {
				visibility: collapse;
			}
		}
		
		main {
			grid-column-start: 2;
			grid-column-end: 3;
		}
		.sidebar {
			visibility: visible;
			margin-left: 0;
		}
	}
</style>
