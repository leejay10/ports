<style>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		margin: 0px auto;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		overflow-y: auto;
		max-height: calc(100vh - 100px);
	}

	/* Animations */
	 .modal-enter {
	 	opacity: 0;
	 }

	 .modal-leave-active {
	 	opacity: 0;
	 }

	 .modal-enter .modal-container,
	 .modal-leave-active .modal-container {
	 	-webkit-transform: scale(1.1);
	 	transform: scale(1.1);
	 }
</style>

<template>
	<transition name="modal">
		<div class="modal-mask" @mousedown="$emit('close')">
			<div class="modal-wrapper">
				<div class="modal-container" @mousedown.stop :style="{'min-height' : h, 'width': w, 'max-width' : maxW}">
					<div class="modal-body bg-gray-800">						
						<div class="bg-gray-900 text-white p-4">
							<slot name="title"></slot>
						</div>
						
						<div class="p-8 text-white">
							<slot></slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		props: {
			w: {
		      	type: String,
		      	default: '100%'
		    },
			maxW: {
		      	type: String,
		      	default: '700px'
		    },
		    h: {
		      	type: String,
		      	default: 'auto'
		    },
		},
	}
</script>