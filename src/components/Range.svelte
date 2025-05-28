<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    export let range = 0;
    function validateInput(inputEvent : Event) {
        const target = inputEvent.target as HTMLInputElement;
        if(target && !target.validity.valid) {
            if (Number(target.value) > 200)
                target.value = "200";
            else
                target.value = "10";
        }
    }
</script>

<div>
<b>{$t("range.legend", {})}</b>
<br>
<input type="number" min="10" max="200" on:input={validateInput} bind:value={range} class="inputInherit customImput"> {$t("range.ft", {})}
</div>
<style>
    .inputInherit {
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
    }
    .customImput {
        border: none;
        outline: 1px solid grey;
    }
    .customImput:focus {
        outline: 1px solid black;
    }
</style>