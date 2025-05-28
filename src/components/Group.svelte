<script lang="ts">
	// Na później: ogarnąć że jak najedziesz na broń to pokazuje ci się kryt specka
    import { t } from "../internationalisation/i18n.ts";
	const options = (_: any) => {
		return {
			axe: {
				label: $t("group.axe", {}),
				description: $t("group.axe.description", {})
			},
			bomb: {
				label: $t("group.bomb", {}),
				description: $t("group.bomb.description", {}),
			},
			bow: {
				label: $t("group.bow", {}),
				description: $t("group.bomb.description", {}), 
			},
			brawling: {
				label: $t("group.brawling", {}),
				description: $t("group.brawling.description", {})
			},
			club: {
				label: $t("group.club", {}),
				description: $t("group.club.description", {})
			},
			crossbow: {
				label: $t("group.crossbow", {}),
				description: $t("group.crossbow.description", {})
			},
			dart: {
				label: $t("group.dart", {}),
				description: $t("group.dart.description", {})
			},
			firearm: {
				label: $t("group.firearm", {}),
				description: $t("group.firearm.description", {})
			},
			flail: {
				label: $t("group.flail", {}),
				description: $t("group.flail.description", {}),
			},
			hammer: {
				label: $t("group.hammer", {}),
				description: $t("group.hammer.description", {}),
			},
			knife: {
				label: $t("group.knife", {}),
				description: $t("group.knife.description", {}),
			},
			pick: {
				label: $t("group.pick", {}),
				description: $t("group.pick.description", {}),
			},
			polearm: {
				label: $t("group.polearm", {}),
				description: $t("group.polearm.description", {}),
			},
			shield: {
				label: $t("group.shield", {}),
				description: $t("group.shield.description", {}),
			},
			sling: {
				label: $t("group.sling", {}),
				description: $t("group.sling.description", {}),
			},
			spear: {
				label: $t("group.spear", {}),
				description: $t("group.spear.description", {}),
			},
			sword: {
				label: $t("group.sword", {}),
				description: $t("group.sword.description", {}),
			}
		}
	};
	type WeaponGroups = keyof ReturnType<typeof options>;

    function GetOptionsKeys(_: any) : WeaponGroups[] {
        return Object.keys(options(_)) as WeaponGroups[]
    }

    function StringToOptionsKey(str : string) : WeaponGroups {
        return str as WeaponGroups;
    }

    export let selected: string = GetOptionsKeys(undefined)[0] as string;
</script>


<div>
<b>{$t("group.legend", {})}</b>
<br>
<select name="Group" id="group" bind:value={selected} required>
    {#each GetOptionsKeys($t) as key}
        <option value="{key}">{options($t)[key].label}</option>
    {/each}
</select>
<br>
<b>{$t("group.critSpec", {})}:</b>
<br>
<textarea readonly rows="4" id="description">{options($t)[StringToOptionsKey(selected)].description}</textarea>
</div>


<style>
    #group {
        margin-top: 4px;
        max-width: 150px;
        transform: scale(1.1);
        transform-origin: 0 0;
        margin-left: -1px;
        margin-bottom: 10px;
    }
    #description {
        resize: none;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        color: inherit;
        background-color: inherit;
        border: none;
        outline: none;
    }
</style>
