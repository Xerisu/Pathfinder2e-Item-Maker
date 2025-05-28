<script lang="ts">
    import Radio from './Radio.svelte';
    import { t } from "../internationalisation/i18n.ts";
    export let selected : number;
    const options = (_: any) => {
		return [{
            value: 4,
            label: $t('dice.number', {number:"4"}),
        }, {
            value: 6,
            label: $t('dice.number', {number:"6"}),
        }, {
            value: 8,
            label: $t('dice.number', {number:"8"}),
        }, {
            value: 10,
            label: $t('dice.number', {number:"10"}),
        }, {
            value: 12,
            label: $t('dice.number', {number:"12"}),
        }]
	};
</script>

<Radio options={options($t)} legend="{$t('damageDie.legend', {})}" bind:userSelected={selected}/>



<style>

</style>