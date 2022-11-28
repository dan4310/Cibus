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
	export let links: NavLink[]
</script>

<header class="navbar">
	<div class="navbar__right">
		<button type="button" class="navbar__btn-menu">
			<HamburgerIcon />
		</button>
		<h3>Cibus</h3>
	</div>

	navbar
</header>
<aside class="sidebar">
	<ul>
		{#each links as link (link.name)}
			<li>
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
	:global(body) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		height: 100vh;
	}
	.navbar {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
	}
	.sidebar {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 3;
	}
	main {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 3;
	}
</style>
