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
	import { page } from '$app/stores'
	import AvatarIcon from './icons/AvatarIcon.svelte'
	import UserIcon from './icons/UserIcon.svelte'
	import SettingsIcon from './icons/SettingsIcon.svelte'
	import Drawer from './Drawer.svelte'

	$: user = $page.data?.loggedInUser
	$: currentPath = $page.url.pathname
	export let links: NavLink[]

	let isSidebarOpen = true
	let isDrawerOpen = false
</script>

<header class="navbar">
	<div class="navbar__left">
		<button type="button" class="btn-round btn-sidebar"
			on:click={() => isSidebarOpen = !isSidebarOpen}
		>
			<HamburgerIcon />
		</button>
		<button type="button" class="btn-round btn-drawer"
			on:click={() => isDrawerOpen = true}
		>
			<HamburgerIcon />
		</button>
		<a href="/"><h3>Cibus</h3></a>
	</div>

	<SearchBar />

	<div class="navbar__right">
		{#if !user}
			<a class="btn-outline-primary" href="/signin">Login</a>
		{:else}
			<AvatarIcon username={user.username} />
		{/if}
	</div>
</header>
<aside class="sidebar-page sidebar" class:closed={isSidebarOpen == false}>
	<ul>
		{#each links as link (link.name)}
			<li>
				<a href={link.href} class="sidebar__link btn" class:active={currentPath === link.href}>
					<Icon type={link.icon} />
					<span>{link.name}</span>
				</a>
			</li>
		{/each}
	</ul>
	{#if user}
		<hr />
		<ul>
			<li>
				<a href="/{user.username}" class="sidebar__link btn">
					<UserIcon />
					<span>Profile</span>
				</a>
			</li>
			<li>
				<a href="/settings" class="sidebar__link btn">
					<SettingsIcon />
					<span>Settings</span>
				</a>
			</li>
		</ul>
	{/if}
</aside>
<main>
	<slot />
</main>
<Drawer open={isDrawerOpen} on:close={() => isDrawerOpen = false}>
	<aside class="sidebar" class:closed={isSidebarOpen == false}>
		<ul>
			{#each links as link (link.name)}
				<li>
					<a href={link.href} class="sidebar__link btn" class:active={currentPath === link.href}>
						<Icon type={link.icon} />
						<span>{link.name}</span>
					</a>
				</li>
			{/each}
		</ul>
		{#if user}
			<hr />
			<ul>
				<li>
					<a href="/{user.username}" class="sidebar__link btn">
						<UserIcon />
						<span>Profile</span>
					</a>
				</li>
				<li>
					<a href="/settings" class="sidebar__link btn">
						<SettingsIcon />
						<span>Settings</span>
					</a>
				</li>
			</ul>
		{/if}
	</aside>
</Drawer>

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

	.btn-sidebar, .btn-drawer {
		width: 40px;
	}

	.btn-sidebar {
		display: none;
	}

	@include m.break(md) {
		.btn-sidebar {
			display: flex;
		}
		.btn-drawer {
			display: none;
		}
	}

	.navbar {
		grid-row-start: 1;
		grid-row-end: 2;
		grid-column-start: 1;
		grid-column-end: 3;
		position: sticky;
		box-sizing: border-box;
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
	.sidebar-page {
		grid-row-start: 2;
		grid-row-end: 3;
		grid-column-start: 1;
		grid-column-end: 2;
		box-sizing: border-box;
		visibility: collapse;
		margin-left: -200px;
		transition: all ease-in-out 0.2s;
		position: sticky;
		top: 0;

		&.closed {
			visibility: collapse;
			margin-left: -200px;
		}
	}

	@include m.break(md) {
		main {
			grid-column-start: 2;
			grid-column-end: 3;
		}
		.sidebar-page {
			visibility: visible;
			margin-left: 0;
		}
	}
</style>
