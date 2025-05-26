<script lang="ts">
    
    function removeItem(arr: Array<string>, value: string): Array<string> {
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    export let options: { label: string; value: string }[] = [];

    export let selectedOptions: string[] = [];

    function changeTrait (event : Event) {
        const target = event.target as HTMLInputElement;
        if (!selectedOptions.includes(target.value)) {
            selectedOptions = selectedOptions.concat([target.value])
        }
        else {
            selectedOptions = removeItem(selectedOptions, target.value);
        }
        console.log(target.value)
        console.log(selectedOptions)
    }
</script>

{#each options as { label, value }}
  <label>
    <input type="checkbox" value={value} checked={selectedOptions.includes(value)} on:click={changeTrait}/> {label}
  </label>
{/each}
