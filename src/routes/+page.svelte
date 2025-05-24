<script lang="ts">
	import Properties from "../types/properties.ts";
	import type Traits from "../types/traits.js";
	import WeaponCategory from '../components/WeaponCategory.svelte';
	import Preview from '../components/Preview.svelte';
	import Price from "../components/Price.svelte";
	import Group from "../components/Group.svelte";
	import Hands from "../components/Hands.svelte";
	import type { TransformOptions } from "vite";
	import Type from "../components/Type.svelte";
	
	let weaponProficiency: string;
	let properties = new Properties();
	let traits : Traits = {rarity : "rare", traits : ["agile", "finesse"]};
</script>

<div class="wrapper">

	<div class="choices">	
		<Price bind:price={properties.priceCp}/>
		<WeaponCategory bind:selected={properties.category} />
		<Group bind:selected={properties.group}/>
		<Hands bind:selected={properties.hands}/>
		<Type bind:selected={properties.type}/>
		{#if properties.type == "ranged"}
			UwU
		{/if}
	</div>

    <div />
    
	<Preview properties = {properties} traits = {traits}/>
</div>

<style>
	.wrapper {
        margin-left: 30px;
		display: grid;
		grid-template-columns: 1fr 100px 800px;
        margin-right: 100px;
    }
	.choices {
		display: flex;
		flex-direction: column;
		gap: 2em;
	}

    
        
</style>
