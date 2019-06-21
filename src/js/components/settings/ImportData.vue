<template>
	<div class="mt-8">
		<h2>Import data</h2>
		<p>Import your data saved from another computer</p>

		<input ref="input" type="file" name="file" id="file" class="mt-4" @change="importData">
	</div>
</template>

<script>
	export default {
		methods: {
			importData(){
				let files = this.$refs.input.files;

				if(!files.length){return;}

				const fileReader = new FileReader();
				fileReader.readAsBinaryString(files[0]);

				fileReader.onload = () => {
					let data = JSON.parse(fileReader.result);

					this.$root.captains = data.captains;
					this.$root.crew = data.crew;
					this.$root.parts = data.parts;
					this.$root.shipwright = data.shipwright;

					this.$root.save();
				}
			}
		}
	}
</script>