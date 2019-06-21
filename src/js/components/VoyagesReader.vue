<template></template>

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
					window.events.$emit('voyage', this.reader.result);
				}
			}
		}
	}
</script>