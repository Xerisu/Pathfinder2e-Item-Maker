<script lang="ts">
export let range = 0;
function validateInput(inputEvent : Event) {
    const target = inputEvent.target as HTMLInputElement;
    if(target && !target.validity.valid) {
        target.value = '';
    }
}
</script>

<div>
<b>Range</b>
<br>
<input type="number" min="0" on:input={validateInput} bind:value={range} class="inputInherit customImput" maxlength="4"> ft
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