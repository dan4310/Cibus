import { cibusdb } from '$lib/server/db'
import { error } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params }) => {
	const user = await cibusdb.user.findUnique({
		where: { username: params.username }
	})

	if (!user) {
		throw error(404, 'User not found')
	}

	return {
		user: {
			...user,
			password: ''
		}
	}
}
