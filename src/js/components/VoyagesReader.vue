<template>
	<div class="w-1/4 px-2">
		<input type="text" name="morale" id="morale" v-model="morale" class="w-full p-1" placeholder="Morale">
	</div>

	<div class="w-1/4 px-2">
		<input type="text" name="combat" id="combat" v-model="combat" class="w-full p-1" placeholder="Combat">
	</div>

	<div class="w-1/4 px-2">
		<input type="text" name="seafaring" id="seafaring" v-model="seafaring" class="w-full p-1" placeholder="Seafaring">
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

					console.log('VoyageReaderResult', result);

					
				}
			}
		}
	}
</script>