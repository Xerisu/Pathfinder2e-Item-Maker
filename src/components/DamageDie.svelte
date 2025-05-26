<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : number;
    const options = [{
        value: 4,
        label: 'd4',
    }, {
        value: 6,
        label: 'd6',
    }, {
        value: 8,
        label: 'd8',
    }, {
        value: 10,
        label: 'd10',
    }, {
        value: 12,
        label: 'd12',
    }];
</script>

<Radio {options} legend="Damage Die" bind:userSelected={selected}/>



<style>

</style>