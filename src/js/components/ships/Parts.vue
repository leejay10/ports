<template>
	<div class="text-white px-4">
		<div class="text-center">
			<h2 class="font-bold">Owned parts</h2>
			<p>Click on a part to toggle it.</p>
		</div>
		

		<div class="flex flex-wrap justify-center mt-8">
			<!-- Rams -->
			<div class="w-1/2" style="height: 200px; overflow-y: scroll;">
				<p class="text-center">Rams</p>

				<div class="mt-4">
					<button 
						class="block text-white text-center w-full" 
						:class="{'text-green' : ram.owned}" 
						v-for="ram in rams"
						@click="toggle(ram)"
					>
						{{ ram.name }}
					</button>
				</div>
			</div>

			<!-- Deck items -->
			<div class="w-1/2" style="height: 200px; overflow-y: scroll;">
				<p class="text-center">Deck Items</p>

				<div class="mt-4">
					<button 
						class="block text-white text-center w-full" 
						:class="{'text-green' : deckItem.owned}" 
						v-for="deckItem in deckItems"
						@click="toggle(deckItem)"
					>
						{{ deckItem.name }}
					</button>
				</div>
			</div>

			<!-- Hulls -->
			<div class="w-1/2 mt-8" style="height: 150px; overflow-y: scroll;">
				<p class="text-center font-bold">Hulls</p>

				<div class="mt-4">
					<button 
						class="block text-white text-center w-full" 
						:class="{'text-green' : hull.owned}" 
						v-for="hull in hulls"
						@click="toggle(hull)"
					>
						{{ hull.name }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			rams(){return this.$root.parts.filter(part => part.type == 'Ram');},
			deckItems(){return this.$root.parts.filter(part => part.type == 'DeckItem');},
			hulls(){return this.$root.parts.filter(part => part.type == 'Hull');},
		},

		methods: {
			/**
			 * Change the ownership status of a part.
			 * @param  {Part} part 
			 * @return {void}      
			 */
			toggle(part){
				let startingParts = ["Weathered Ram", "Weathered Rigging", "Barnacled Hull"];

				// We can't remove the starting parts since they are owned by default
				if(startingParts.indexOf(part.name) !== -1){
					return;
				}

				part.owned = !part.owned;
				this.$root.save();
			}
		}
	}
</script>