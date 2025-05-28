<script lang="ts">
    import type Properties from "../types/properties.ts";
    import SingleDetail from "./SingleDetail.svelte";
    import { locale } from "../internationalisation/i18n";
    import { t } from "../internationalisation/i18n.ts";
    export let properties : Properties;

</script>

<div class="details">
<SingleDetail name="{$t('price.legend', {})}" value={properties.getPrice()}/>
<SingleDetail name="{$t('damage.legend', {})}" value="1{$t('dice.number', {number:properties.damageDie})} {properties.damageType}"/>
<SingleDetail name="{$t('bulk.legend', {})}" value={properties.getTranslatedBulk($locale)}/>
<SingleDetail name="{$t('hands.legend', {})}" value={properties.getTranslatedHands($locale)}/>
{#if properties.type == "ranged"}
    <SingleDetail name="Range" value={properties.range.toString() + " ft"}/>
{/if}
{#if properties.type == "ranged"}
    <SingleDetail name="{$t('reload.legend', {})}" value={properties.reload.toString()}/>
{/if}
<SingleDetail name="{$t('type.legend', {})}" value={properties.getTranslatedType($locale)}/>
<SingleDetail name="{$t('category.legend', {})}" value={properties.getTranslatedCategory($locale)}/>
<SingleDetail name="{$t('group.legend', {})}" value={properties.getTranslatedGroup($locale)}/>
{#if properties.ammunition != "" && properties.type == "ranged"}
    <SingleDetail name="{$t('ammunition.legend', {})}" value={properties.ammunition}/>
{/if}

</div>