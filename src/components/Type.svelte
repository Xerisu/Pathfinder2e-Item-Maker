<script lang="ts">
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = [{
        value: 'melee',
        label: 'Melee',
    }, {
        value: 'ranged',
        label: 'Ranged',
    }];
</script>

<Radio {options} legend="Type" bind:userSelected={selected}/>



<style>

</style>