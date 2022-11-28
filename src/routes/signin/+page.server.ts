import { comparePassword, createToken } from '$lib/server/auth'
import { cibusdb } from '$lib/server/db'
import { invalid, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
	default: async ({ request, cookies, url }) => {
		const data = await request.formData()
		const username = String(data.get('username'))
		if (!username) return invalid(400, { username, message: 'Must provide a username' })
		const password = String(data.get('password'))
		if (!password) return invalid(400, { password, message: 'Must provide a password' })

		const user = await cibusdb.user.findUnique({
			where: { username }
		})
		if (!user) return invalid(404, { username, message: 'User not found' })
		if (!comparePassword(password, user.password))
			return invalid(400, { password, message: 'Password does not match for that user' })
		const accessToken = createToken(user)

		cookies.set('session', accessToken, {
			path: '/',
			secure: true
		})

		const goTo = url.searchParams.get('redirectTo')
		if (goTo) {
			throw redirect(303, goTo)
		} else {
			throw redirect(303, '/')
		}
	}
}
