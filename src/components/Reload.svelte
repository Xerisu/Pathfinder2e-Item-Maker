<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : number;
    const options = [{
        value: 0,
        label: 'Reload 0',
    }, {
        value: 1,
        label: 'Reload 1',
    }, {
        value: 2,
        label: 'Reload 2',
    }, {
        value: 3,
        label: 'Reload 3',
    }];
</script>

<Radio {options} legend="Reload" bind:userSelected={selected}/>



<style>

</style>