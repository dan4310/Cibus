import { createToken, hashPassword } from '$lib/server/auth'
import { cibusdb } from '$lib/server/db'
import { invalid, redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ request, url, cookies }) => {
		const data = await request.formData()

		const username = String(data.get('username'))
		if (!username) return invalid(400, { username, message: 'Must provide a username.' })
		const password = String(data.get('password'))
		if (!password) return invalid(400, { password, message: 'Must provide a password.' })
		const email = String(data.get('email'))
		if (!email) return invalid(400, { email, message: 'Must provide a email.' })

		try {
			const user = await cibusdb.user.create({
				data: {
					username,
					password: await hashPassword(password),
					email
				}
			})
			const accessToken = createToken(user)

			cookies.set('session', accessToken, {
				path: '/',
				secure: true
			})
		} catch (err) {
			return invalid(400, { message: 'User already exists' })
		}
		const goTo = url.searchParams.get('redirectTo')
		if (goTo) {
			throw redirect(303, goTo)
		} else {
			throw redirect(303, '/')
		}
	}
}
