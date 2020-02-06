<template>
	<div v-if="show" class="z-10 bg-nis-dark absolute bottom-0 left-0 right-0 p-4 text-white">

		<button class="absolute text-white border border-white p-1" @click="hide" style="top: 5px; right: 5px;">Hide</button>

		<p>Captain : {{ $root.result.captain.name }}</p>

		<div class="flex items-center justify-between mt-2">
			<p class="text-3xl">{{ $root.result.success_chance }}%</p>
			<img :src="member.type.image" alt="" v-for="member in $root.result.crew">
		</div>			

		<div class="mt-2 flex justify-between items-end">
			<div class="w-1/2">
				<p>{{ $root.result.parts.ram.name }}</p>
				<p>{{ $root.result.parts.deckItem1.name }}</p>
				<p>{{ $root.result.parts.deckItem2.name }}</p>
				<p>{{ $root.result.parts.hull.name }}</p>
			</div>

			<div class="w-1/2 flex items-center">
				<!-- Assign to ship : 
				
				<div class="flex ml-2">
					<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click="assignToShip(1)">1</button>
					<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click="assignToShip(2)">2</button>
					<button class="text-white border border-white w-6 h-6 text-sm rounded-full mr-1" @click="assignToShip(3)">3</button>
					<button class="text-white border border-white w-6 h-6 text-sm rounded-full" @click="assignToShip(4)">4</button>
				</div> -->
				<button class="text-white border border-white text-sm rounded-full" @click="assignToShip(1)">Clear Roster to calculate next journey</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show: false,
			}
		},

		mounted(){
			window.events.$on('result-calculated', data => {
				this.$root.selected = null;
				this.show = true;
			});
		},

		methods: {
			/**
			 * Assign the selected crew to a ship
			 * @param  {int} number 
			 * @return {void}        
			 */
			assignToShip(number){
				this.$root.captains.forEach(captain => {	
					if(captain.ship == number && captain.id !== this.$root.result.captain.id){
						captain.ship = 0;
					}

					if(captain.id == this.$root.result.captain.id){
						captain.ship = number;
					}
				});

				let ids = this.$root.result.crew.map(c => c.id);

				this.$root.crew.forEach(crew => {
					if(crew.ship == number && !ids.includes(crew.id)){
						crew.ship = 0;
					}

					if(ids.includes(crew.id)){
						crew.ship = number;
					}
				});

				this.$root.clearRoster();
				this.$root.save();
				this.hide();
			},

			/**
			 * Hide the results 
			 * @return {void} 
			 */
			hide(){
	    		this.show = false;

				this.$root.result = {
	    			success_chance: 0,
	    			captain: null,
	    			crew: [],
	    			parts: {
	    				ram: null,
	    				deckItem1: null,
	    				deckItem2: null,
	    				hull: null,
	    			}
	    		};
			}
		}
	}
</script>