<script lang="ts">
	import type Traits from "../types/traits.js";
	export let traits : Traits
	
</script>

<div class="tags">
    <div class={"tag " + traits.rarity}>{traits.rarity}</div>
    {#each traits.traits as trait}
		<div class="tag">{trait}</div>
	{/each}
    <div style="clear: both;"/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=Eczar:800|Roboto+Condensed|Tauri|Teko:500|Changa+One|Gelasio|DM+Serif+Text:400i&display=swap');
    	/* Tags */
	.tag {
		font-family: 'Roboto Condensed', sans-serif;
		border-color: #dac68a;
		border: 1px solid #dac68a;
		border-left: 2px solid #dac68a;
		border-right: 2px solid #dac68a;
		border-radius: 2px;
		background-color: #58180d;
		color: white;
		text-align: center;
		margin-top: 2px;
		margin-right: 2px;
		min-width: 30px;
		float: left;
		margin-bottom: 0px;
		padding-left: 3px;
		padding-right: 3px;
		text-transform: uppercase;
		height: 1.1em;
	}
	/*Item Rarity Tags */
	.tag.uncommon {
		background-color: #98513d !important;
	}
	.tag.rare {
		background-color: #002664 !important;
	}
	.tag.unique {
		background-color: #54166e !important;
	}
	/* Creature Tags */
	.tag.align {
		background-color: #576293 !important;
	}
	.tag.size {
		background-color: #3b7b59 !important;
	}
</style>