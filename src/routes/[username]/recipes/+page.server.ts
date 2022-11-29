import { cibusdb } from '$lib/server/db'
import type { Recipe } from '@prisma/client'
import { invalid, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const recipes = await cibusdb.recipe.findMany({
		where: { author: { username: params.username } },
		take: 5
	})

	return {
		recipes
	}
}

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData()
		const title = String(data.get('title'))
		if (!title) return invalid(400, { title, message: 'Must provide a title' })
		const description = String(data.get('description'))

		if (!locals.loggedInUser) return invalid(403, { message: 'You are not authorized' })

		let recipe: null | Recipe = null
		try {
			recipe = await cibusdb.recipe.create({
				data: {
					authorId: locals.loggedInUser.id,
					title,
					description
				}
			})
		} catch (err) {
			return invalid(400, { message: 'That recipe already exists' })
		}
		if (recipe) {
			throw redirect(303, '/recipes/' + recipe.id)
		}
	}
}
