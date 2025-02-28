<script lang="ts">
export let price = 0;
function validateInput(inputEvent : Event) {
    const target = inputEvent.target as HTMLInputElement;
    if(target && !target.validity.valid) {
        target.value = '';
    }
}
</script>

<div>
<b>Price</b>
<br>
<input type="number" min="0" on:input={validateInput} bind:value={price} class="inputInherit customImput" maxlength="4"> cp
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

