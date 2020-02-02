<template>
	<div>
		<div class="w-1/4 px-2">
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
		</div>
	</div>
</template>

<script>
	import VoyagesReader from '../ports/scripts/VoyagesReader.js';

	export default {
		data(){
			return {
				reader: null,
			}
		},

		mounted(){
			window.events.$on('alt-1', this.read);
			this.reader = new VoyagesReader();
		},


		methods: {
			read(){
				let success = this.reader.read();


				if(success){
					let result = this.reader.result;


					
				}
			}
		}
	}
</script>