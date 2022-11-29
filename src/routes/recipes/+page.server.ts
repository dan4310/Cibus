import { cibusdb } from '$lib/server/db'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const recipes = await cibusdb.recipe.findMany({
		take: 20
	})

	return {
		recipes
	}
}
