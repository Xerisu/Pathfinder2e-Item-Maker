import { translate } from "../internationalisation/i18n.ts";

export default class Properties {
	priceCp: number;
	damageDie: 4 | 6 | 8 | 10 | 12;
	damageType: 'S' | 'P' | 'B';
	bulk: 'negligible' | 'L' | number;
	hands: 'unarmed' | '0' | '1' | '1+' | '2';
	range:  number;
	reload:  0 | 1 | 2 | 3;
	type: 'melee' | 'ranged';
	category: 'simple' | 'martial' | 'advanced';
	group: string;
	ammunition: string; // Może być dowolna

	constructor() {
		this.priceCp = 0;
		this.damageDie = 4;
		this.damageType = 'B';
		this.bulk = 'negligible';
		this.hands = '0';
		this.range = 30;
		this.reload = 0;
		this.type = 'melee';
		this.category = 'simple';
		this.group = 'brawling';
		this.ammunition = '';
	}

	getTranslatedBulk(locale : ApplicationLanguage) : string {
		if (this.bulk == 'negligible') {
			return translate(locale, 'bulk.negligible',{});
		}
		return this.bulk.toString();
	}
	getTranslatedHands(locale: ApplicationLanguage) : string {
		if (this.hands == 'unarmed') {
			return translate(locale, 'hands.unarmed',{}).toLowerCase();
		}
		return this.hands.toString();
	}
	getTranslatedType(locale: ApplicationLanguage) : string {
		if (this.type == "melee") {
			return translate(locale, 'type.melee', {}).toLowerCase();
		}
		return translate(locale, 'type.ranged', {}).toLowerCase();
	}
	getTranslatedCategory(locale: ApplicationLanguage) : string {
		let word : TranslationKey = 'weaponCategory.' + this.category as TranslationKey; 
		return translate(locale, word, {}).toLowerCase()
	}
	getTranslatedGroup(locale: ApplicationLanguage) : string {
		let word : TranslationKey = 'group.' + this.group as TranslationKey; 
		return translate(locale, word, {}).toLowerCase()
	}

	getPrice(): string {
		if (!this.priceCp) return 0 + ' cp';
		if (this.priceCp > 250) return Math.floor(this.priceCp / 100) + ' gp';
		if (this.priceCp > 25) return Math.floor(this.priceCp / 10) + ' sp';
		return this.priceCp + ' cp';
	}

	isExpensive(): boolean {
		return this.priceCp >= 1000;
	}
}

export {};
