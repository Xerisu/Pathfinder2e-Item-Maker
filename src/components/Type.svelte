<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = (_: any) => {
            return [{
            value: 'melee',
            label: $t("type.melee", {}),
        }, {
            value: 'ranged',
            label: $t("type.ranged", {}),
        }];
    };
</script>

<Radio options={options($t)} legend="{$t("type.legend", {})}" bind:userSelected={selected}/>



<style>

</style>