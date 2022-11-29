<script lang="ts">
	import type { User } from '@prisma/client'
	import AvatarIcon from './icons/AvatarIcon.svelte'
	import RecipeIcon from './icons/RecipeIcon.svelte'
	import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui'
	import UserIcon from './icons/UserIcon.svelte'
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte'

	export let user: User
</script>

<Menu class="user-menu">
	<MenuButton class="user-menu__btn">
		<AvatarIcon username={user.username} />
	</MenuButton>
	<MenuItems class="user-menu__items">
		<MenuItem class="user-menu__item btn">
			<UserIcon />
			<a href="/{user.username}"><span>My Profile</span></a>
		</MenuItem>
		<MenuItem class="user-menu__item btn">
			<RecipeIcon />
			<a href="/{user.username}/recipes"><span>My Recipes</span></a>
		</MenuItem>
		<MenuItem class="user-menu__item btn">
			<ArrowRightIcon />
			<a href="/logout"><span>Logout</span></a>
		</MenuItem>
	</MenuItems>
</Menu>

<style lang="scss">
	@use '../../styles/mixins' as m;
	@use '../../styles/variables' as var;

	:global(.user-menu) {
		position: relative;
		box-sizing: border-box;
	}

	:global(.user-menu__btn) {
		background: none;
		border-radius: 200px;
		border: var.$border-thickness solid transparent;
		cursor: pointer;
		@include m.focus();
	}

	:global(.user-menu__items) {
		position: absolute;
		background-color: var.$theme-foreground;
		border-radius: var.$border-radius;
		padding: var.$padding-6;
		right: 0;
	}

	:global(.user-menu__item) {
		white-space: nowrap;
		gap: var.$padding-6;
		--svg-width: 25px;
	}
</style>
