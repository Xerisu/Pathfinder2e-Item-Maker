<script lang="ts">
	import Properties from "../types/properties.ts";
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
	import LanguageButtons from "../components/LanguageButtons.svelte";
	import Traits from "../types/traits.js";
    import { t } from "../internationalisation/i18n.ts";

	    const traitsUniversal = (_: any) => {
		return [
			{ label: $t("traits.agile", {}), value: 'agile' },
			{ label: $t("traits.backswing", {}), value: 'backswing' },
			{ label: $t("traits.monk", {}), value: 'monk' },
			{ label: $t("traits.twin", {}), value: 'twin' }
    	]; };
		const traitsMelee = (_: any) => {
		return [
			{ label: $t("traits.finesse", {}), value: 'finesse' },
			{ label: $t("traits.grapple", {}), value: 'grapple' },
			{ label: $t("traits.reach", {}), value: 'reach' },
   	 	]; }
		const traitsRanged = (_: any) => {
		return [
			{ label: $t("traits.propulsive", {}), value: 'propulsive' },
			{ label: $t("traits.volley30ft", {}), value: 'volley30ft' }
   	 	];
		};
	
	let properties = new Properties();
	let traits = new Traits();
	let t1 : string[] = []
	let t2 : string[] = []
	let t3 : string[] = []
	let rarity = "rare" as "common"|"uncommon"|"rare"|"unique"
</script>

<div class="wrapper">

	<div class="choices">
		<LanguageButtons/>
		<Type bind:selected={properties.type}/>	
		<b>{$t("traits.legend.universal", {})}:</b>
		<WeaponTraits options={traitsUniversal($t)} bind:selectedOptions={t1}/>
		{#if properties.type == "melee"}
			<b>{$t("traits.legend.melee", {})}:</b>
			<WeaponTraits options={traitsMelee($t)} bind:selectedOptions={t2}/>
		{/if}
		{#if properties.type == "ranged"}
			<b>{$t("traits.legend.ranged", {})}:</b>
			<WeaponTraits options={traitsRanged($t)} bind:selectedOptions={t3}/>
		{/if}
		<Rarity bind:selected={rarity}/>	
		<Price bind:price={properties.priceCp}/>
		<WeaponCategory bind:selected={properties.category} />
		<Bulk bind:selected={properties.bulk}/>
		<DamageDie bind:selected={properties.damageDie}/>
		<DamageType bind:selected={properties.damageType}/>
		<Group bind:selected={properties.group}/>
		<Hands bind:selected={properties.hands}/>
			
		{#if properties.type == "ranged"}
			<Range bind:range={properties.range}/>
			<Reload bind:reload={properties.reload}/>
			<Ammunition bind:ammunition={properties.ammunition}/>
		{/if}
	</div>

    <div />
    
	<Preview properties = {properties} traits = {traits.changeAllTraits(rarity, t1, t2, t3, properties.type)}/>




	
	
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
