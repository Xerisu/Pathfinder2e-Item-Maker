<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = [{
        value: 'unarmed',
        label: 'Unarmed',
    }, {
        value: '0',
        label: '0',
    }, {
        value: '1',
        label: '1',
    }, {
        value: '1+',
        label: '1+',
    }, {
        value: '2',
        label: '2',
    }];
</script>

<Radio {options} legend="Hands" bind:userSelected={selected}/>



<style>

</style>