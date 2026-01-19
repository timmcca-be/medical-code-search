<script lang="ts">
	import FlexSearch from 'flexsearch';
	import codes from '$lib/codes.json';

	const maxResults = 50;

	const index = new FlexSearch.Index({ tokenize: 'forward' });
	const map: Record<string, string> = {};
	codes.forEach((code) => {
		index.add(code.code, code.description);
		map[code.code] = code.description;
	});

	let query = $state('');
	let results = $derived(index.search(query, { limit: maxResults }));
</script>

<label>
	Query:
	<input bind:value={query} />
</label>

{#if results.length === maxResults}
	<p>Only showing {maxResults} most relevant matches</p>
{/if}

{#if query !== '' && results.length === 0}
	<p>No matches found</p>
{/if}

<ul>
	{#each results as result}
		<li>{result}: {map[result]}</li>
	{/each}
</ul>
