<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = [{
        value: 'simple',
        label: 'Simple',
    }, {
        value: 'martial',
        label: 'Martial',
    }, {
        value: 'advanced',
        label: 'Advanced',
    }];
</script>

<Radio {options} legend="Category" bind:userSelected={selected}/>



<style>

</style>