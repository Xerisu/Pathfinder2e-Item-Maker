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
	import Range from "../components/Range.svelte";
	import Reload from "../components/Reload.svelte";
	import Ammunition from "../components/Ammunition.svelte";
	import Bulk from "../components/Bulk.svelte";
	import DamageDie from "../components/DamageDie.svelte";
	import DamageType from "../components/DamageType.svelte";
	import Rarity from "../components/Rarity.svelte";
	import WeaponTraits from "../components/WeaponTraits.svelte";

	    const traitsUniversal = [
			{ label: 'Agile', value: 'agile' },
			{ label: 'Backswing', value: 'backswing' },
			{ label: 'Monk', value: 'monk' },
			{ label: 'Twin', value: 'twin' }
    	];
		const traitsMelee = [
			{ label: 'Finesse', value: 'finesse' },
			{ label: 'Grapple', value: 'grapple' },
			{ label: 'Reach', value: 'reach' },
   	 	];
		const traitsRanged = [
			{ label: 'Propulsive', value: 'propulsive' },
			{ label: 'Volley 30 ft', value: 'volley 30ft' }
   	 	];
	
	let properties = new Properties();
	let t1 : string[] = []
	let t2 : string[] = []
	let t3 : string[] = []
	let rarity = "rare" as "rare"
</script>

<div class="wrapper">

	<div class="choices">

		<b>Universal weapon traits:</b>
		<WeaponTraits options={traitsUniversal} bind:selectedOptions={t1}/>
		{#if properties.type == "melee"}
			<b>Melee weapon traits:</b>
			<WeaponTraits options={traitsMelee} bind:selectedOptions={t2}/>
		{/if}
		{#if properties.type == "ranged"}
			<b>Ranged weapon traits:</b>
			<WeaponTraits options={traitsRanged} bind:selectedOptions={t3}/>
		{/if}
		<Rarity bind:selected={rarity}/>	
		<Price bind:price={properties.priceCp}/>
		<WeaponCategory bind:selected={properties.category} />
		<Bulk bind:selected={properties.bulk}/>
		<DamageDie bind:selected={properties.damageDie}/>
		<DamageType bind:selected={properties.damageType}/>
		<Group bind:selected={properties.group}/>
		<Hands bind:selected={properties.hands}/>
		<Type bind:selected={properties.type}/>		
		{#if properties.type == "ranged"}
			<Range bind:range={properties.range}/>
			<Reload bind:reload={properties.reload}/>
			<Ammunition bind:ammunition={properties.ammunition}/>
		{/if}
	</div>

    <div />
    
	<Preview properties = {properties} traits = {
		{
			rarity: rarity,
			traits: (() => {
				if (properties.type === "melee") {
					return t1.concat(t2).sort()
				}
				else {
					return t1.concat(t3).sort()
				}
				
			})()
		}
	}/>




	
	
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
