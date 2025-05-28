<script lang="ts">
    import { t } from "../internationalisation/i18n.ts";
    import Radio from './Radio.svelte';
    export let selected : string;
    const options = (_: any) => {
		return [{
            value: 'B',
            label: $t('damageType.bludgeoning', {}),
        }, {
            value: 'S',
            label: $t('damageType.slashing', {}),
        }, {
            value: 'P',
            label: $t('damageType.piercing', {}),
        }]; 
    };
</script>

<Radio options={options($t)} legend="{$t('damageType.legend', {})}" bind:userSelected={selected}/>



<style>

</style>