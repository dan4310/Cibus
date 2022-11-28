import { HASH_SALT, JWT_KEY } from '$env/static/private'
import type { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function hashPassword(password: string): Promise<string> {
	return await bcrypt.hash(password, String(HASH_SALT))
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
	return await bcrypt.compare(password, hash)
}

export function createToken(user: User): string {
	return jwt.sign(user, JWT_KEY, {
		expiresIn: '24h'
	})
}

export function verifyToken(token: string): User {
	return jwt.verify(token, JWT_KEY) as User
}
