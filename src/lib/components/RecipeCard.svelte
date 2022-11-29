<script lang="ts">
	import type { Recipe } from '@prisma/client'

	export let recipe: Recipe
</script>

<a href="/recipes/{recipe.id}">
	<div class="recipe-card">
		<div class="recipe-card__image" />
		<div class="recipe-card__body">
			<p>{recipe.title}</p>
		</div>
	</div>
</a>
