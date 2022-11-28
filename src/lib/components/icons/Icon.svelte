<script lang="ts" context="module">
	export enum IconTypes {
		Cookbook = 'cookbook',
		Hamburger = 'hamburger',
		Home = 'home',
		Recipe = 'recipe',
		Search = 'search',
		User = 'user',
		Settings = 'settings'
	}
	export type IconTypeStrings = keyof typeof IconTypes
</script>

<script lang="ts">
	import CookbookIcon from './CookbookIcon.svelte'
	import HamburgerIcon from './HamburgerIcon.svelte'
	import HomeIcon from './HomeIcon.svelte'
	import RecipeIcon from './RecipeIcon.svelte'
	import SearchIcon from './SearchIcon.svelte'
	import SettingsIcon from './SettingsIcon.svelte'
	import UserIcon from './UserIcon.svelte'

	export let type: IconTypes
</script>

{#if type === IconTypes.Cookbook}
	<CookbookIcon />
{:else if type === IconTypes.Hamburger}
	<HamburgerIcon />
{:else if type === IconTypes.Home}
	<HomeIcon />
{:else if type === IconTypes.Recipe}
	<RecipeIcon />
{:else if type === IconTypes.Search}
	<SearchIcon />
{:else if type === IconTypes.User}
	<UserIcon />
{:else if type === IconTypes.Settings}
	<SettingsIcon />
{/if}
