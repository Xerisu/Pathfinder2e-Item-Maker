<script lang="ts">
	import Radio from './Radio.svelte';
    import { t } from "../internationalisation/i18n.ts";

	export let selected: string | number;

	const options = (_: any) => {
		return [{ 
			value: 'negligible',
			label: $t('bulk.negligible', {})
		}, { 
			value: 'L', 
			label: $t('bulk.light', {})
		}, { 
			value: 'number', 
			label: $t('bulk.number', {})
		}]
	};

	let selectedOption: string = typeof selected === 'number' ? 'number' : selected;
	let customNumber: number = typeof selected === 'number' ? selected : 1;

	// Reaktywnie aktualizuj `selected`
	$: selected = selectedOption === 'number' ? customNumber : selectedOption;

	// Walidacja wpisywanej liczby
	function validateInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let value = Number(target.value);
		if (value > 10) {
			value = 10;
		} 
		else if (value < 1) {
			value = 1;
		}

		target.value = value.toString();
		customNumber = value; 
	}
</script>

<Radio options="{options($t)}" legend="{$t('bulk.legend', {})}" bind:userSelected={selectedOption} />

{#if selectedOption === 'number'}
	<label>	
        {$t('bulk.enterCustom', {})}:
		<input type="number" min="1" max="10" bind:value={customNumber} on:input={validateInput} class="inputInherit customImput"/> 
    </label>
{/if}

<style>
    .inputInherit {
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
    }
    .customImput {
        border: none;
        outline: 1px solid grey;
    }
    .customImput:focus {
        outline: 1px solid black;
    }
</style>

