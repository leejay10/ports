<template>
	<div style="width: 450px; height: 675px;" class="bg-nis shadow relative">
		<nav>
			<button class="py-1 px-4 text-white" :class="{'border-b border-white' : screen == 'main'}" @click.prevent="screen = 'main';">Main</button>
			<button class="py-1 px-4 text-white" :class="{'border-b border-white' : screen == 'ships'}" @click.prevent="screen = 'ships';">Ships</button>
			<button class="py-1 px-4 text-white" :class="{'border-b border-white' : screen == 'ports'}" @click.prevent="screen = 'ports';">Ports</button>
			<button class="py-1 px-4 text-white" :class="{'border-b border-white' : screen == 'settings'}" @click.prevent="screen = 'settings';">Settings</button>
		</nav>		

		<div class="mt-2 h-8 flex items-center justify-center">
			<p class="text-red">{{ error }}</p>
		</div>

		<div>
			<main-screen v-if="screen == 'main'"></main-screen>
			<ships-screen v-if="screen == 'ships'"></ships-screen>
			<ports-screen v-if="screen == 'ports'"></ports-screen>
			<settings-screen v-if="screen == 'settings'"></settings-screen>
		</div>

		<crew-reader></crew-reader>
		<!-- <voyages-reader></voyages-reader> -->
	</div>
</template>

<script>
	import MainScreen from './main/MainScreen';
	import ShipsScreen from './ships/ShipsScreen';
	import PortsScreen from './ports/PortsScreen';
	import SettingsScreen from './settings/SettingsScreen';

	import CrewReader from './CrewReader';
	import VoyagesReader from './VoyagesReader';

	export default {
		components: {MainScreen, ShipsScreen, PortsScreen, SettingsScreen, CrewReader, VoyagesReader},

		data(){
			return {
				screen: 'main',
			}
		},

		computed: {
			error(){return this.$root.error},
		},

		mounted(){		
			if(window.alt1){
				alt1.events.alt1pressed.push(() => {
					window.events.$emit('alt-1');
				});
			}
			
			this.$root.load();
			
			if(false){
				this.$root.setTestingData();
				this.$root.save();
			}
		},		
	}
</script>