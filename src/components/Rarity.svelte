<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = (_: any) => {
		return [{
            value: 'common',
            label: $t("rarity.common", {}),
        }, {
            value: 'uncommon',
            label: $t("rarity.uncommon", {}),
        }, {
            value: 'rare',
            label: $t("rarity.rare", {}),
        }, {
            value: 'unique',
            label: $t("rarity.unique", {}),
        }];
    };
</script>

<Radio options={options($t)} legend="{$t("rarity.legend", {})}" bind:userSelected={selected}/>



<style>

</style>