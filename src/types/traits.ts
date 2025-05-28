import { translate } from "../internationalisation/i18n.ts";

/*declare global {
	type Traits = {
		rarity : "common"|"uncommon"|"rare"|"unique",
		traits : string[]
	};
}*/

export default class Traits {
	rarity : "common"|"uncommon"|"rare"|"unique";
	traits : string[];

	constructor() {
		this.rarity = "common";
		this.traits = [];
	}
	
	changeAllTraits(rarity : "common"|"uncommon"|"rare"|"unique", traitUniversal : string[], traitMelee : string[], traitRanged : string[], type : "melee" | "ranged") : Traits {
		this.rarity = rarity;
		if (type === "melee") {
			this.traits = traitUniversal.concat(traitMelee);
		}
		else {
			this.traits = traitUniversal.concat(traitRanged);
		}
		return this;
	}

	getTranslatedRarity(locale : ApplicationLanguage) : string {
		let word : TranslationKey = 'rarity.' + this.rarity as TranslationKey; 
		return translate(locale, word, {})
	}
	getTranslatedTraits(locale : ApplicationLanguage) : string[] {
		let translatedTraits : string[] = [];
		this.traits.forEach(trait => {
			let word : TranslationKey = 'traits.' + trait as TranslationKey; 
			translatedTraits.push(translate(locale, word, {}))			
		});
		return translatedTraits.sort();
	}
}