<script>
	import SearchIcon from "./icons/SearchIcon.svelte"

</script>

<form action="/search" method="GET">
    <input placeholder="Search" name="query" />
    <button type="submit">
        <SearchIcon />
    </button>
</form>

<style lang="scss">
    @use '../../styles/variables' as var;

    form {
        display: flex;
        width: 100%;
        max-width: 400px;
        input {
            background-color: transparent;
            color: inherit;
            padding: var.$padding-6;
            border: var.$border-thickness solid var.$theme-divider;
            border-top-left-radius: 200px;
            border-bottom-left-radius: 200px;
            width: 100%;
        }
        button {
            cursor: pointer;
            border-top-right-radius: 200px;
            border-bottom-right-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            width: 50px;
            padding: 3px var.$padding-6;
            border: var.$border-thickness solid var.$theme-divider;
            border-left: none;
            background-color: var.$theme-foreground;
            color: var.$theme-text;
        }
    }
</style>