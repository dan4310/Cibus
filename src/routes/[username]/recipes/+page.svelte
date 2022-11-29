<script lang="ts">
	import RecipeCard from '$lib/components/RecipeCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h3>Recipes</h3>
{#if data.user.id === data.loggedInUser?.id}
	<form method="POST">
		<input class="form-control" name="title" placeholder="Title" required />
		<input class="form-control" name="description" placeholder="Description" />
		<button type="submit" name="image" class="btn-outline-primary">Create Recipe</button>
	</form>
{/if}

{#each data.recipes as recipe (recipe.id)}
	<RecipeCard {recipe} />
{/each}
