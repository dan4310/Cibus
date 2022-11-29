import { cibusdb } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const recipe = await cibusdb.recipe.findUnique({
		where: { id: params.recipeId }
	})

	if (!recipe) throw error(404, 'Recipe not found.')

	return {
		recipe
	}
}
