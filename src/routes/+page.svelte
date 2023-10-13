<script>
	import monacoEditor from '$lib/actions/monaco.js';

	let editor1 = {
		language: 'javascript',
		code: 'function hello() {\n\talert("Hello from Editor 1!");\n}',
	}

	let editor2 = {
		language: 'json',
		code: '{"name": "Editor 2"}',
	}
</script>

<div class="flex flex-col items-center mt-12">
	<h2 class="text-3xl m-10">Monaco Editor</h2>
	<div class="flex w-full">
		<div class="container" use:monacoEditor={editor1}></div>
		<div class="container" use:monacoEditor={editor2}></div>
	</div>
</div>


<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.100);
	}

	.container {
        width: 100%;
        height: 600px;
		border: 1px solid theme(colors.blue.300);
		margin: 0 10px;
    }
</style>