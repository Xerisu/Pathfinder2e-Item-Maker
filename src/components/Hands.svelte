<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = (_: any) => {
		return [{
        value: 'unarmed',
        label: $t("hands.unarmed", {}),
    }, {
        value: '0',
        label: '0',
    }, {
        value: '1',
        label: '1',
    }, {
        value: '1+',
        label: '1+',
    }, {
        value: '2',
        label: '2',
    }];
};
</script>

<Radio options={options($t)} legend="{$t("hands.legend", {})}" bind:userSelected={selected}/>



<style>

</style>