<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = (_: any) => {
            return [{
            value: 'simple',
            label: $t("weaponCategory.simple", {}),
        }, {
            value: 'martial',
            label: $t("weaponCategory.martial", {}),
        }, {
            value: 'advanced',
            label: $t("weaponCategory.advanced", {}),
        }];
    };
</script>

<Radio options={options($t)} legend="{$t("weaponCategory.legend", {})}" bind:userSelected={selected}/>



<style>

</style>