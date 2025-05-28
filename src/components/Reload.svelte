<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    export let reload = 0;
    function validateInput(inputEvent : Event) {
        const target = inputEvent.target as HTMLInputElement;
        if(target && !target.validity.valid) {
            // Todo: zrobić żeby tu była reszta z dzielenia, że "32" zwróci 2 itd
            if (Number(target.value) > 3)
                target.value = "3";
            else
                target.value = "0";
        }
}
</script>

<div>
<b>{$t("reload.legend", {})}</b>
<br>
<input type="number" min="0" max="3" on:input={validateInput} bind:value={reload} class="inputInherit customImput">
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