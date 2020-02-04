<template>
	<div class="flex">
		<div class="w-1/3 px-2">
			<p>Morale</p>
			<input type="text" name="morale" id="morale" v-model="morale" class="input p-2 text-center" @click="selectText" value="{{this.morale}}"	@input="updateMorale($event.target.value)">
		</div>

		<div class="w-1/3 px-2">
			<p>Combat</p>
			<input type="text" name="combat" id="combat" v-model="combat" class="input p-2 text-center" @click="selectText" @input="updateCombat($event.target.value)">
		</div>

		<div class="w-1/3 px-2">
			<p>Seafaring</p>
			<input type="text" name="seafaring1" id="seafaring" v-model="seafaring" class="input p-2 text-center" @click="selectText" @input="updateSeafaring($event.target.value)">
		</div>
	</div>
</template>

<script>
	import VoyagesReader from '../ports/scripts/VoyagesReader.js';

	export default {
		data(){
			return {
				reader: null,
				morale: 0, 
				combat: 0, 
				seafaring: 0
			}
		},

		mounted(){
			window.events.$on('alt-1', this.read);
			this.reader = new VoyagesReader();
		},


		methods: {
			updateMorale(value){
				this.morale = value;
				this.emitVoyage(this.morale, this.combat, this.seafaring);
			},
			updateCombat(value){
				this.combat = value;
				this.emitVoyage(this.morale, this.combat, this.seafaring);
			},
			updateSeafaring(value){
				this.seafaring = value;
				this.emitVoyage(this.morale, this.combat, this.seafaring);
			},

			emitVoyage(morale, combat, seafaring){
				let voyage = {};
				voyage.morale = morale;
				voyage.combat = combat;
				voyage.seafaring = seafaring;

				console.log("emit", voyage);
				this.$emit('voyage', voyage);
			},
			read(){
				let success = this.reader.read();


				if(success){
					let result = this.reader.result;

					console.log('VoyageReaderResult', result);
					//console.log('$this', this);
					// let voyage = {};
					// voyage.morale = result.morale;
					// voyage.combat = result.combat;
					// voyage.seafaring = result.seafaring;

					// this.$emit('voyage', voyage);
					this.emitVoyage(result.morale, result.combat, result.seafaring);

					this.morale = result.morale;
					this.combat = result.combat;
					this.seafaring = result.seafaring;

					
				}
			}
		}
	}
</script>