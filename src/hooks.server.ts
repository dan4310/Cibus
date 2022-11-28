import { verifyToken } from '$lib/server/auth'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const sessionToken = String(event.cookies.get('session'))
	try {
		event.locals = {
			loggedInUser: verifyToken(sessionToken)
		}
	} catch (err) {
		// invalid
	}

	const response = await resolve(event)
	return response
}
