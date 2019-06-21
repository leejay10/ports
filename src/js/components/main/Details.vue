<template>
	<form v-if="model" @change="update" class="z-20 bg-nis-dark absolute bottom-0 left-0 right-0 p-4 text-white">
		<div class="h-32 flex flex-col justify-between relative">

			<button class="absolute top-0 right-0 text-white text-xl" style="top: -8px; right: -8px;" @click.prevent="deselect">
				<i class="fas fa-chevron-circle-down"></i>
			</button>

			<div class="flex flex-wrap -mx-4">
				<!-- Name -->
				<div class="font-bold text-lg w-1/2 px-4">
					<input type="text" name="name" id="name" v-model="model.name" v-if="isCaptain" placeholder="Captain's name" class="input" @click="selectText">

					<select name="type" id="type" v-model="model.type" v-else class="input">
						<option :value="t" v-for="t in types" :disabled="t.name == 'Empty'" class="text-black">{{ t.name }}</option>
					</select>
				</div>

				<!-- Actions -->
				<div class="w-1/2 px-4">
					<div>
						<button class="text-white border border-white p-1 px-2" @click.prevent="dismiss">
							<i class="fas fa-ban"></i>
						</button>

						<button class="text-green border border-green p-1" @click.prevent="levelUp">L+</button>
						<button class="text-white border border-white p-1" @click.prevent="clearShip" v-if="model.ship != 0">Clear ship</button>
					</div>

					<div class="flex items-center mt-4">
						Set ship : 

						<div class="flex ml-2">
							<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click.prevent="assignToShip(1)">1</button>
							<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click.prevent="assignToShip(2)">2</button>
							<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click.prevent="assignToShip(3)">3</button>
							<button class="text-white border border-white w-6 h-6 text-sm rounded-full" @click.prevent="assignToShip(4)">4</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Stats -->
			<div class="mt-2 flex flex-wrap -mx-4">
				<div class="w-1/2 px-4">
					<div class="flex items-center justify-between">
						<span>Morale</span>
						<input type="text" name="morale" id="morale" class="input w-1/3 text-center" @click="selectText" v-model="model.morale">
					</div>

					<div class="flex items-center justify-between mt-1">
						<span>Combat</span>
						<input type="text" name="combat" id="combat" class="input w-1/3 text-center" @click="selectText" v-model="model.combat">
					</div>
				</div>

				<div class="w-1/2 px-4">
					<div class="flex items-center justify-between mt-1">
						<span>Seafaring</span>
						<input type="text" name="seafaring" id="seafaring" class="input w-1/3 text-center" @click="selectText" v-model="model.seafaring">
					</div>

					<div class="flex items-center justify-between mt-1">
						<span>Level</span>
						<input type="text" name="level" id="level" class="input w-1/3 text-center" @click="selectText" v-model="model.level">
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	export default {

		computed: {
			model(){return this.$root.selected},
			types(){return this.$root.crewTypes},
			isCaptain(){return 'name' in this.model},
		},

		methods: {
			/**
			 * Whenever something is modified, save the data to localStorage
			 * @return {void} 
			 */
			update(){
				this.$root.save();
			},

			/**
			 * Clear the ship assignment for this crew member
			 * @return {void} 
			 */
			clearShip(){
				this.assignToShip(0);
			},

			/**
			 * Assign to a specified ship
			 * @param  {int} number 
			 * @return {void}        
			 */
			assignToShip(number){
				this.model.ship = number;
				this.$root.save();
			},

			/**
			 * Reset the stats 
			 * @return {void} 
			 */
			dismiss(){
				if(this.isCaptain){this.model.name = '';}
				else {this.model.type = this.$root.crewTypes[0];}

				this.model.morale = 0;
				this.model.combat = 0;
				this.model.seafaring = 0;
				this.model.level = 0;
				this.model.ship = 0;

				this.$root.save();
			},

			/**
			 * De-select the currently selected crew member
			 * @return {void} 
			 */
			deselect(){
				this.$root.selected = null;
			},

			/**
			 * Increase the level by one and the stats by 10%
			 * @return {void} 
			 */
			levelUp(){
				if(this.model.level >= 10){return;}

				this.model.morale = Math.floor(this.model.morale * 1.1);
				this.model.combat = Math.floor(this.model.combat * 1.1);
				this.model.seafaring = Math.floor(this.model.seafaring * 1.1);
				this.model.level = this.model.level + 1;

				this.$root.save();
			}
		}
	}
</script>