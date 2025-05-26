<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = [{
        value: 'B',
        label: 'Bludgeoning',
    }, {
        value: 'S',
        label: 'Slashing',
    }, {
        value: 'P',
        label: 'Piercing',
    }];
</script>

<Radio {options} legend="Damage Type" bind:userSelected={selected}/>



<style>

</style>