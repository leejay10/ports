<template>
	<div class="flex justify-center">
		<div style="width: 360px;">
			<div>
				<label for="shipwright" class="text-white font-bold">Shipwright</label>
				<select name="shipwright" id="shipwright" :value="shipwright.name" class="input" @change="update">
					<option :value="sw.name" v-for="sw in shipwrights" class="text-black">{{ sw.name }}</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed:{
			shipwright(){return this.$root.shipwright},
		},

		data(){
			return {
				shipwrights: [
					{name: 'Dilapidated shipwright', morale: 0, combat: 0, seafaring: 0},
					{name: 'Refitted shipwright', morale: 1.02, combat: 1.02, seafaring: 1.02},
					{name: 'Renovated shipwright', morale: 1.03, combat: 1.03, seafaring: 1.03},
					{name: 'Nautical shipwright', morale: 1.03, combat: 1.03, seafaring: 1.05},
					{name: 'Warship shipwright', morale: 1.03, combat: 1.05, seafaring: 1.03},
					{name: 'Luxious shipwright', morale: 1.05, combat: 1.03, seafaring: 1.03},
					{name: 'Sleek shipwright', morale: 1.03, combat: 1.03, seafaring: 1.03},
					{name: 'Ostentatious shipwright', morale: 1.08, combat: 1.05, seafaring: 1.05},
					{name: 'Battleship shipwright', morale: 1.05, combat: 1.08, seafaring: 1.05},
					{name: 'Maritime shipwright', morale: 1.05, combat: 1.05, seafaring: 1.08},
				],
			}
		},

		methods: {
			/**
			 * Save the new shipwright
			 * @param  {Event} e 
			 * @return {void}   
			 */
			update(e){
				let name = e.target.value;
				let shipwright = this.shipwrights.find(sw => sw.name == name);
				this.$root.shipwright = shipwright;
				this.$root.save();
			}
		}
	}
</script>