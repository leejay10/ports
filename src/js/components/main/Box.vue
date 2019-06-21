<template>
	<div class="flex items-center justify-center cursor-pointer relative" :class="{'bg-green-darker' : isMatched, 'bg-nis-dark' : isSelected}" @click="select" style="width: 60px; height: 60px;">
		<img :src="image" alt="">

		<span v-if="model.ship != 0" class="absolute top-0 right-0 w-4 h-4 text-xs rounded-full flex items-center justify-center text-white bg-blue-darker">
			{{ model.ship }}
		</span>
	</div>
</template>

<script>
	export default {
		props: ['model'],

		data(){
			return {
				matched: false,
			}
		},

		computed: {
			/**
			 * Whether or not this is a captain
			 * @return {Boolean} 
			 */
			isCaptain(){
				return 'name' in this.model;
			},

			/**
			 * Path to the image to use
			 * @return {string} 
			 */
			image(){
				if(this.isCaptain){
					return this.model.name.length ? '/images/hat2.png' : '/images/hat_empty.png';
				} 

				return this.model.type.image;
			},		

			/**
			 * Whether or not this is the selected crew member
			 * @return {Boolean} 
			 */
			isSelected(){
				return this.$root.selected == this.model;
			},

			/**
			 * Whether or not this crew member has been matched in voyages results
			 * @return {Boolean} 
			 */
			isMatched(){
				let result = this.$root.result;

				if(!result.captain){
					return;
				}

				if(this.isCaptain){
					return result.captain.id == this.model.id;
				}

				let crew = result.crew.map(c => c.id);
				return crew.includes(this.model.id);
			}
		},

		methods: {
			/**
			 * Toggle the selection status 
			 * @return {void} 
			 */
			select(){
				if(this.$root.selected == this.model){
					return this.$root.selected = null;
				}

				this.$root.selected = this.model;
			},
		}
	}
</script>