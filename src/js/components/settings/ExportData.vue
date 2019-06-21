<template>
	<div>
		<h2>Export data</h2>
		<p>Export your data to import it later on another computer</p>

		<button class="p-2 border border-white text-white font-bold mt-4" @click.prevent="exportData">Export</button>
	</div>
</template>

<script>
	export default {
		methods: {
			exportData(){
				let data = {};

				data.captains = this.$root.captains;
				data.crew = this.$root.crew;
				data.parts = this.$root.parts;
				data.shipwright = this.$root.shipwright;

				data = JSON.stringify(data);

				let file = new Blob([data], {type: 'json'});
				let a = document.createElement('a');
				let url = URL.createObjectURL(file);

				a.href = url;
				a.download = 'export.json';
				document.body.appendChild(a);
				a.click();

				setTimeout(function() {
				    document.body.removeChild(a);
				    window.URL.revokeObjectURL(url);  
				}, 0); 
			}
		}
	}
</script>