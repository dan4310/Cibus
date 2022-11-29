<script lang="ts">
	import { Dialog, DialogOverlay, DialogTitle } from '@rgossiaux/svelte-headlessui'
	import { createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	export let open = false

	const dispatch = createEventDispatcher()
</script>

<Dialog bind:open on:close={() => dispatch('close')}>
	<div class="container">
		<div
			class="drawer"
			transition:fly={{
				x: -200,
				duration: 200
			}}
		>
			<DialogTitle class="drawer__title">
				<button type="button" class="btn-round" on:click={() => dispatch('close')}>X</button>
				<h5>Cibus</h5>
			</DialogTitle>
			<slot />
		</div>
		<DialogOverlay class="overlay" />
	</div>
</Dialog>

<style lang="scss">
	@use '../../styles/variables' as var;
	@use '../../styles/mixins' as m;

	.container {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: auto 1fr;
		box-sizing: border-box;
		background-color: rgba(black, 0.2);
	}
	.drawer {
		top: 0;
		background-color: var.$theme-background;
		grid-column-start: 1;
		grid-column-end: 2;
	}

	:global(.drawer__title) {
		padding: var.$padding-6;
		display: flex;
		align-items: center;
		gap: var.$padding-6;
	}

	:global(.overlay) {
		z-index: 100;
		grid-column-start: 2;
		grid-column-end: 3;
	}
</style>
