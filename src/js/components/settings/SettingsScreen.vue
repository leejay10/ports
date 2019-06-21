<template>
	<div class="flex justify-center text-white">
		<div style="width: 360px;">
			<export-data></export-data>
			<import-data></import-data>
		</div>
	</div>
</template>

<script>
	import ExportData from './ExportData';
	import ImportData from './ImportData';

	export default {
		components: {ExportData, ImportData},
	}
</script>