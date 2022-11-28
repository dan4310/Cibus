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
	@use '../../styles/mixins' as m;
	
	:global(body) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}

	.navbar {
		grid-row-start: 1;
		grid-row-end: 2;
	}
	main {
		grid-row-start: 2;
		grid-row-end: 3;
	}
	.sidebar {
		visibility: collapse;
		margin-left: -300px;
		transition: all ease-in-out 0.2s;
	}

	@include m.break(md) {
		:global(body) {
			grid-template-columns: auto 1fr;
		}
		.navbar {
			grid-column-start: 1;
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
			grid-row-start: 2;
			grid-row-end: 3;
			grid-column-start: 1;
			grid-column-end: 2;
			visibility: visible;
			margin-left: 0;
		}
	}
</style>
