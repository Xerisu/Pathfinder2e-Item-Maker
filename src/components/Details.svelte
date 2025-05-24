<script lang="ts">
    import type Properties from "../types/properties.ts";
    import SingleDetail from "./SingleDetail.svelte";
    export let properties : Properties;
</script>

<div class="details">
<SingleDetail name="Price" value={properties.getPrice()}/>
<SingleDetail name="Damage" value="1d{properties.damageDie} {properties.damageType}"/>
<SingleDetail name="Bulk" value={properties.bulk.toString()}/>
<SingleDetail name="Hands" value={properties.hands.toString()}/>
{#if properties.type == "ranged"}
    <SingleDetail name="Range" value={properties.range.toString() + " ft"}/>
{/if}
{#if properties.type == "ranged"}
    <SingleDetail name="Reload" value={properties.reload.toString()}/>
{/if}
<SingleDetail name="Type" value={properties.type}/>
<SingleDetail name="Category" value={properties.category}/>
<SingleDetail name="Group" value={properties.group}/>
{#if properties.ammunition != "" && properties.type == "ranged"}
    <SingleDetail name="Ammunition" value={properties.ammunition}/>
{/if}

</div>