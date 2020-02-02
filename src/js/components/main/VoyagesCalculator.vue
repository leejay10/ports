<template>
	<div>
		<div class="p-4 flex items-center -mx-2">
			<!-- <div class="w-1/4 px-2">
				<p>Morale</p>
				<input type="text" name="morale" id="morale" v-model="morale" class="input p-2 text-center" @click="selectText">
			</div>
			
			<div class="w-1/4 px-2">
				<p>Combat</p>
				<input type="text" name="combat" id="combat" v-model="combat" class="input p-2 text-center" @click="selectText">
			</div>
			
			<div class="w-1/4 px-2">
				<p>Seafaring</p>
				<input type="text" name="seafaring1" id="seafaring" v-model="seafaring" class="input p-2 text-center" @click="selectText">
			</div> -->
			<voyages-reader></voyages-reader>
			
			
			<div class="w-1/4 px-2">
				<p>&nbsp;</p>
				<button class="border border-white w-full text-center text-white p-2" @click="calculate">
					<i class="fas fa-spinner fa-spin" v-if="processing"></i>
					<span v-else>Calculate</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Calculator from '../../ports/scripts/PopCalculator.js';
	import VoyagesReader from '../VoyagesReader';


	export default {
		components: {VoyagesReader},

		data(){
			return {
				processing: false,

				morale: 0,
				combat: 0,
				seafaring: 0,
			}
		},

		methods: {
			calculate(){	
				let captains = this.$root.captains.filter(c => {
					return c.name.length && !c.ship;
				}).map(c => {
					return {
						id: c.id,
						name: c.name,
						morale: num(c.morale),
						combat: num(c.combat),
						seafaring: num(c.seafaring),
					}
				});

				let crew = this.$root.crew.filter(c => {
					return c.type.name != 'Empty' && !c.ship;
				}).map(c => {
					return {
						id: c.id,
						type: c.type,
						morale: num(c.morale),
						combat: num(c.combat),
						seafaring: num(c.seafaring),
					}
				});

				let parts = this.$root.parts.filter(part => part.owned);
				let ids = parts.map(part => part.id);

				parts = _.reject(parts, part => {
					let worseThan = part.worseThan.split('-');

					for(let i = 0; i < worseThan.length; i++){
						let worse = Number(worseThan[i]);

						if(ids.indexOf(worse) != -1){
							return true;
						}
					}
				});

				// Rams
				let rams = parts.filter(part => part.type == 'Ram');
				rams = rams.map(ram => {
					return {
						name: ram.name,
						morale: num(ram.morale),
						combat: num(ram.combat),
						seafaring: num(ram.seafaring),
					}
				});

				// Deck items
				let deckItems = parts.filter(part => part.type == 'DeckItem');
				deckItems = deckItems.map(deckItem => {
					return {
						name: deckItem.name,
						morale: num(deckItem.morale),
						combat: num(deckItem.combat),
						seafaring: num(deckItem.seafaring),
					}
				});

				// Hulls
				let hulls = parts.filter(part => part.type == 'Hull');
				hulls = hulls.map(hull => {
					return {
						name: hull.name,
						morale: num(hull.morale),
						combat: num(hull.combat),
						seafaring: num(hull.seafaring),
					}
				});

				if(captains.length < 1){
					return this.$root.flashError('You need at least 1 available captain.');
				}

				if(crew.length < 5){
					return this.$root.flashError('You need at least 5 available crew members.');
				}

				const calculator = new Calculator(captains, crew, rams, deckItems, hulls, this.$root.shipwright);

				let morale = this.morale || 0;
				let combat = this.combat || 0;
				let seafaring = this.seafaring || 0;

				morale = parseInt(morale);
				combat = parseInt(combat);
				seafaring = parseInt(seafaring);

				this.processing = true;

				let result = calculator.calculate(morale, combat, seafaring).then(result => {
					setTimeout(() => {
						this.processing = false;

						this.$root.result = {
							success_chance: result.success_chance,
							captain: result.combination[0],
							crew: result.combination[1],
							parts: {
								ram: result.combination[2][0],
								deckItem1: result.combination[2][1],
								deckItem2: result.combination[2][2],
								hull: result.combination[2][3],
							},
						}

						window.events.$emit('result-calculated');		
					}, 200); 			
				});
			},
		}
	}
</script>