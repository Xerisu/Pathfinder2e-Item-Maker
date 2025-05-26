<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = [{
        value: 'common',
        label: 'Common',
    }, {
        value: 'uncommon',
        label: 'Uncommon',
    }, {
        value: 'rare',
        label: 'Rare',
    }, {
        value: 'unique',
        label: 'Unique',
    }];
</script>

<Radio {options} legend="Rarity" bind:userSelected={selected}/>



<style>

</style>