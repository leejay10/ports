<template>
	<div class="flex justify-center">
		<div style="width: 360px;">
			<!-- Calculator  -->
			<voyages-calculator></voyages-calculator>		

			<!-- Clear ships -->
			<clear-ship></clear-ship>

			<!-- Grid with all the crew members -->
			<div class="flex justify-center">
				<div class="flex flex-wrap">
					<div style="width: 60px;">
						<box v-for="captain in captains" :key="captain.id" :model="captain"></box>
					</div>

					<div class="flex flex-wrap" style="width: 300px;">
						<box v-for="member in crew" :key="member.id" :model="member"></box>
					</div>
				</div>
			</div>

			<!-- Results -->
			<results></results>

			<!-- Details -->
			<crew-details></crew-details>
		</div>
	</div>
</template>

<script>
	import Box from './Box';
	import CrewDetails from './Details';
	import VoyagesCalculator from './VoyagesCalculator';
	import Results from './Results';
	import ClearShip from './ClearShip';

	export default {
		components: {Box, CrewDetails, VoyagesCalculator, Results, ClearShip},

		computed: {
			captains(){return this.$root.captains},
			crew(){return this.$root.crew},
		},
	}
</script>