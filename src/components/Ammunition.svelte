<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    export let ammunition = '';
    function validateInput(inputEvent : Event) {
        const target = inputEvent.target as HTMLInputElement;
        if(target && !target.validity.valid) {
            target.value = '';
        }
}
</script>

<div>
<b>{$t('ammunition.legend', {})}</b>
<br>
<input type="string" on:input={validateInput} bind:value={ammunition} class="inputInherit customImput" maxlength="20">
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