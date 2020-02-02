<template>
	<div>
		<form class="flex flex-wrap -mx-2" @submit.prevent="calculate">
			<div class="w-1/4 px-2">
				<input type="text" name="morale" id="morale" v-model="morale" class="w-full p-1" placeholder="Morale">
			</div>

			<div class="w-1/4 px-2">
				<input type="text" name="combat" id="combat" v-model="combat" class="w-full p-1" placeholder="Combat">
			</div>

			<div class="w-1/4 px-2">
				<input type="text" name="seafaring" id="seafaring" v-model="seafaring" class="w-full p-1" placeholder="Seafaring">
			</div>

			<div class="w-1/4 px-2">
				<button class="w-full p-1 bg-blue text-white rounded" @click.prevent="calculate">
					<i class="fas fa-calculator"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	//import VoyagesReader from '../VoyagesReader';
	import VoyagesReader from '../ports/scripts/VoyagesReader.js';
	import PopCalculator from '../PopCalculator';

	export default {
		data(){
			return {
				reader: null,
				calculator: null,
				morale: '',
				combat: '',
				seafaring: '',
			}
		},

		mounted(){
			window.events.$on('alt-1', this.read);
		
			this.reader = new VoyagesReader();			

		},

		methods: {
			calculate(){
				let captains = this.$store.state.captains;

				let crew = this.$store.state.crew.filter(c => {
					return c.sailor_id > 2;
				});

				if(!captains.length){
					return;
				}

				if(crew.length < 5){
					return;
				}

				this.calculator = new PopCalculator(
					captains,
					crew,
					this.$store.state.rams,
					this.$store.state.deckItems,
					this.$store.state.hulls,
				);

				let result = this.calculator.calculate(this.morale, this.combat, this.seafaring);
				console.log(result);
			},

			/**
			 * Try to read the stat requirements from the screen
			 * @return {void} 
			 */
			read(){
				let success = this.reader.read();

				console.log('VoyageReaderResult', this.reader.result);


				if(success){


					this.morale = this.reader.result.morale != '-' ? this.reader.result.morale : '';
					this.combat = this.reader.result.combat != '-' ? this.reader.result.combat : '';
					this.seafaring = this.reader.result.seafaring != '-' ? this.reader.result.seafaring : '';
				}
			}
		}
	}
</script>