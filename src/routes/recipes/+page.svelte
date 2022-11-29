<script lang="ts">
	import RecipeCard from '$lib/components/RecipeCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>Recipes Page</h1>

{#each data.recipes as recipe (recipe.id)}
	<RecipeCard {recipe} />
{/each}
