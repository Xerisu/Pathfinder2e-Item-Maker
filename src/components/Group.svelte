<script lang="ts">
	// Na później: ogarnąć że jak najedziesz na broń to pokazuje ci się kryt specka
	import Radio from './Radio.svelte';
	const options = {
		axe: {
			label: 'Axe',
			description: 'Choose one creature adjacent to the initial target and within reach. If its AC is lower than your attack roll result for the critical hit, you deal damage to that creature equal to the result of the weapon damage die you rolled (including extra dice for its potency rune, if any). This amount isn\'t doubled, and no bonuses or other additional dice apply to this damage.'
		},
        bomb: {
			label: 'Bomb',
			description: 'Increase the radius of the bomb\'s splash damage (if any) to 10 feet.'
		},
		bow: {
			label: 'Bow',
			description: 'If the target of the critical hit is adjacent to a surface, it gets stuck to that surface by the missile. The target is immobilized and must spend an Interact action to attempt a DC 10 Athletics check to pull the missile free; it can\'t move from its space until it succeeds. The creature doesn\'t become stuck if it is incorporeal, is liquid (like a water elemental or some oozes), or could otherwise escape without effort.'
		},
        brawling: {
			label: 'Brawling',
			description: 'The target must succeed at a Fortitude save against your class DC or be slowed 1 until the end of your next turn.'
		},
        club: {
			label: 'Club',
			description: 'You knock the target away from you up to 10 feet (you choose the distance). This is forced movement.'
		},
		crossbow: {
			label: 'Crossbow',
			description: 'The target takes 1d8 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.'
		},
        dart: {
			label: 'Dart',
			description: 'The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.'
		},
        firearm: {
			label: 'Firearm',
			description: 'The target must succeed at a Fortitude save against your class DC or be stunned 1.'
		},
        flail: {
			label: 'Flail',
			description: 'The target is knocked prone unless they succeed at a Reflex save against your class DC.'
		},
        hammer: {
			label: 'Hammer',
			description: 'The target is knocked prone unless they succeed at a Reflex save against your class DC.'
		},
        knife: {
			label: 'Knife',
			description: 'The target takes 1d6 persistent bleed damage. You gain an item bonus to this bleed damage equal to the weapon\'s item bonus to attack rolls.'
		},
        pick: {
			label: 'Pick',
			description: 'The weapon viciously pierces the target, who takes 2 additional damage per weapon damage die.'
		},
        polearm: {
			label: 'Polearm',
			description: 'The target is moved 5 feet in a direction of your choice. This is forced movement.'
		},
        shield: {
			label: 'Shield',
			description: 'You knock the target back from you 5 feet. This is forced movement.'
		},
        sling: {
			label: 'Sling',
			description: 'The target must succeed at a Fortitude save against your class DC or be stunned 1.'
		},
        spear: {
			label: 'Spear',
			description: 'The weapon pierces the target, weakening its attacks. The target is clumsy 1 until the start of your next turn.'
		},
        sword: {
			label: 'Sword',
			description: 'The target is made off-balance by your attack, becoming flat-footed until the start of your next turn.'
		}
	};
    function GetOptionsKeys() : (keyof typeof options)[] {
        return Object.keys(options) as (keyof typeof options)[]
    }
    function StringToOptionsKey(str : string) : (keyof typeof options) {
        return str as (keyof typeof options);
    }
    export let selected: string = GetOptionsKeys()[0] as string;
</script>


<div>
<b>Group</b>
<br>
<select name="Group" id="group" bind:value={selected} required>
    {#each GetOptionsKeys() as key}
        <option value="{key}">{options[key].label}</option>
    {/each}
</select>
<br>
<b>Critical specialization effect:</b>
<br>
<textarea readonly rows="4" id="description">{options[StringToOptionsKey(selected)].description}</textarea>
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
