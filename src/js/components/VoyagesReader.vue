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
					console.log('VoyageReaderResult', this.reader.result);

					window.events.$emit('voyage', this.reader.result);
					window.events.$emit('morale', this.reader.result.morale);
					window.events.$emit('combat', this.reader.result.combat);
					window.events.$emit('seafaring', this.reader.result.seafaring);
				}
			}
		}
	}
</script>