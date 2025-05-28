<script lang="ts">
    import type Properties from "../types/properties.ts";
	import type { TransformOptions } from "vite";
    import Traits from "../types/traits.ts";
    import Details from "./Details.svelte";
    import Tags from "./Tags.svelte";
    import { t } from "../internationalisation/i18n.ts";

    export let weaponName: string = "";
    export let weaponDescription: string = ""
    export let traits : Traits;
    export let properties : Properties;
</script>

<div class="preview">
	<div class="itemHeader">
		<div style="float: left"><input type="text" id="Name" name="Name" value={weaponName} class="inputInherit customImput" placeholder={$t("preview.weaponName.placeholder", {})}></div>
        <div style="float: right">{$t("preview.weapon", {})} 0</div>
        <div style="clear: both;"/>
	</div>
    <hr>
    <Tags traits = {traits}/>
    <Details properties = {properties}/>
	<hr>
    <textarea id="Description" name="Name" rows="10" style="resize: vertical;" class="inputInherit customImput description" placeholder="{$t("preview.weaponDescription.placeholder", {})}...">{weaponDescription}</textarea>
</div>

<style>
	/* Fonts */
	@import url('https://fonts.googleapis.com/css?family=Eczar:800|Roboto+Condensed|Tauri|Teko:500|Changa+One|Gelasio|DM+Serif+Text:400i&display=swap');

	.preview {
        display: flex;
        flex-direction: column;
	}

	/* HEADERS */
	.itemHeader {
		font-family: Tauri;
		color: black;
		text-transform: uppercase;
        font-size: 1.5em;
	}

    .inputInherit {
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
    }
    .customImput {
        border: none;
        outline: none;
    }
    .customImput:hover {
        outline: 1px solid grey;
    }
    .customImput:focus {
        outline: 1px solid black;
    }
    

	.preview hr {
		display: block;
		visibility: visible;
		width: 100%;
		border: 0px;
		border-bottom: 1px solid black;
		margin: 3px 0px;
	}
    .description {
        font-family: 'Century Gothic';
        resize: horizontal;
        width: 99.5%;
    }

</style>
