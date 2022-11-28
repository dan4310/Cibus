<script lang="ts">
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

<div class="login-form">
	<h1>Sign In</h1>
	{#if form?.message}
		<p class="error-message">{form?.message}</p>
	{/if}
	<form method="POST">
		<input class="form-control" placeholder="Username" name="username" type="text" />
		<input class="form-control" placeholder="Password" name="password" type="password" />
		<button class="btn-primary" type="submit">Sign In</button>
		<span>Don't have an account? Sign up <a href="/signup">here.</a></span>
	</form>
</div>

<style lang="scss">
	@use '../../styles/variables' as var;

	.login-form {
		display: flex;
		flex-direction: column;
		gap: var.$padding;
		align-items: center;
		.error-message {
			color: var.$color-error;
		}
		form {
			width: 100%;
			max-width: 400px;
			display: flex;
			flex-direction: column;
			gap: var.$padding;
			button {
				justify-content: center;
			}
			span {
				text-align: center;
				color: var.$theme-text-muted;
				a {
					text-decoration: underline;
					&:hover {
						color: var.$color-primary;
					}
				}
			}
		}
	}
</style>
