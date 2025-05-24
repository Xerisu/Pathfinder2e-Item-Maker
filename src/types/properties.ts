export default class Properties {
	priceCp: number;
	damageDie: 4 | 6 | 8 | 10 | 12;
	damageType: 'S' | 'P' | 'B';
	bulk: 'Negligible' | 'L' | number;
	hands: 'unarmed' | '0' | '1' | '1+' | '2';
	range:  number;
	reload:  0 | 1 | 2 | 3;
	type: 'melee' | 'ranged';
	category: 'simple' | 'martial' | 'advanced';
	group: string;
	ammunition: undefined | string; // Może być dowolna

	constructor() {
		this.priceCp = 0;
		this.damageDie = 4;
		this.damageType = 'B';
		this.bulk = 'Negligible';
		this.hands = '0';
		this.range = 30;
		this.reload = 0;
		this.type = 'melee';
		this.category = 'simple';
		this.group = 'brawling';
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
