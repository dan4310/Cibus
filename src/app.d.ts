import type { User } from '@prisma/client'

// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			loggedInUser?: User
		}
		interface PageData {
			loggedInUser?: User
		}
		// interface Error {}
		// interface Platform {}
	}
}
