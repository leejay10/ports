export default class VoyagesReader
{
	constructor(){
		this.images = {};

		// "Voyage list" text, we use this as a reference for the interface
		ImageData.fromBase64((i) => {
			this.images.voyageList = i;
		}, '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');

		// Legacy interface "Voyage list" text
		ImageData.fromBase64((i) => {
			this.images.legacyVoyageList = i;
		}, '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');


		this.fonts = {
			mono: JSON.parse('{"chars":[{"width":7,"chr":"a","bonus":0.03,"secondary":false,"pixels":[0,7,184,1,3,225,1,6,163,1,8,255,2,3,255,2,5,192,2,8,255,3,3,255,3,5,255,3,8,225,4,4,249,4,5,255,4,6,231,4,7,255,4,8,243]},{"width":7,"chr":"b","bonus":0.042,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,3,228,1,4,205,1,7,205,1,8,217,2,3,255,2,8,255,3,3,255,3,8,255,4,3,163,4,4,208,4,7,163,5,5,215,5,6,200]},{"width":7,"chr":"c","bonus":0.02,"secondary":false,"pixels":[0,5,163,0,6,184,1,4,184,1,7,214,2,3,255,2,8,255,3,3,255,3,8,255,4,3,225,4,8,225]},{"width":7,"chr":"d","bonus":0.042,"secondary":false,"pixels":[0,5,184,0,6,184,1,4,163,1,7,203,1,8,188,2,3,255,2,8,255,3,3,255,3,8,255,4,3,205,4,4,208,4,7,163,4,8,184,5,1,205,5,2,231,5,3,231,5,4,238,5,5,238,5,6,233,5,7,233,5,8,225]},{"width":7,"chr":"e","bonus":0.034,"secondary":false,"pixels":[0,5,184,0,6,163,1,4,184,1,5,255,1,7,225,2,3,255,2,5,255,2,8,255,3,3,255,3,5,255,3,8,255,4,3,184,4,4,162,4,5,255,4,8,225,5,4,168,5,5,223]},{"width":4,"chr":"f","bonus":0.02,"secondary":false,"pixels":[0,3,205,1,2,225,1,3,255,1,4,238,1,5,231,1,6,231,1,7,231,1,8,213,2,1,255,2,3,255]},{"width":7,"chr":"g","bonus":0.05,"secondary":false,"pixels":[0,5,184,0,6,184,1,3,163,1,4,133,1,7,203,1,8,142,1,11,133,2,3,255,2,8,255,2,11,246,3,3,255,3,8,255,3,11,225,4,3,225,4,4,178,4,7,133,4,8,225,4,10,205,5,3,205,5,4,241,5,5,235,5,6,233,5,7,233,5,8,235,5,9,205]},{"width":7,"chr":"h","bonus":0.036,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,3,205,1,4,228,2,3,255,3,3,255,4,3,163,4,4,241,4,5,225,4,6,225,4,7,225,4,8,205]},{"width":3,"chr":"i","bonus":0.014,"secondary":false,"pixels":[0,1,244,0,3,205,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205]},{"width":4,"chr":"j","bonus":0.02,"secondary":false,"pixels":[0,11,133,1,11,163,2,1,205,2,3,205,2,4,231,2,5,231,2,6,231,2,7,231,2,8,231,2,9,231]},{"width":6,"chr":"k","bonus":0.03,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,5,255,2,4,146,2,5,255,2,6,241,3,3,205,3,7,241,4,8,172]},{"width":3,"chr":"l","bonus":0.016,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,1,8,255]},{"width":10,"chr":"m","bonus":0.046,"secondary":false,"pixels":[0,3,205,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,4,238,2,3,244,3,3,255,4,3,133,4,4,255,4,5,225,4,6,225,4,7,225,4,8,205,5,4,212,6,3,255,7,3,244,8,4,205,8,5,233,8,6,231,8,7,231,8,8,213]},{"width":7,"chr":"n","bonus":0.03,"secondary":false,"pixels":[0,3,205,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,4,238,2,3,244,3,3,255,4,3,244,5,4,205,5,5,233,5,6,231,5,7,231,5,8,213]},{"width":8,"chr":"o","bonus":0.028,"secondary":false,"pixels":[0,5,184,0,6,163,1,4,205,1,7,238,2,3,244,2,8,249,3,3,255,3,8,255,4,3,244,4,8,255,5,4,231,5,7,225,6,5,202,6,6,180]},{"width":6,"chr":"p","bonus":0.036,"secondary":false,"pixels":[0,3,244,0,4,255,0,5,184,0,6,205,0,7,255,0,8,225,0,9,225,0,10,225,1,3,255,1,8,249,2,3,255,2,8,255,3,3,244,3,8,244,4,4,249,4,5,255,4,6,255,4,7,244]},{"width":7,"chr":"q","bonus":0.036,"secondary":false,"pixels":[0,5,184,0,6,184,1,3,163,1,4,133,1,7,186,1,8,193,2,3,255,2,8,255,3,3,244,3,8,244,4,3,255,4,4,255,4,5,187,4,6,184,4,7,255,4,8,244,4,9,241,4,10,225]},{"width":4,"chr":"r","bonus":0.018,"secondary":false,"pixels":[0,3,205,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,3,184,1,4,228,2,3,255]},{"width":6,"chr":"s","bonus":0.022,"secondary":false,"pixels":[0,4,184,1,3,255,1,5,249,1,8,255,2,3,255,2,6,159,2,8,255,3,3,255,3,6,246,3,8,255,4,7,220]},{"width":5,"chr":"t","bonus":0.018,"secondary":false,"pixels":[1,2,225,1,3,255,1,4,236,1,5,225,1,6,225,1,7,163,2,3,255,2,8,246,3,8,161]},{"width":6,"chr":"u","bonus":0.028,"secondary":false,"pixels":[0,3,205,0,4,225,0,5,225,0,6,225,0,7,163,1,8,246,2,8,255,3,8,205,4,3,205,4,4,225,4,5,225,4,6,205,4,7,255,4,8,231]},{"width":6,"chr":"v","bonus":0.022,"secondary":false,"pixels":[0,3,244,1,4,175,1,5,246,1,6,205,2,7,255,2,8,255,3,5,133,3,6,255,3,7,151,4,3,244,4,4,205]},{"width":10,"chr":"w","bonus":0.044,"secondary":false,"pixels":[1,3,133,1,4,243,1,5,184,2,6,186,2,7,243,2,8,184,3,6,215,3,7,246,3,8,191,4,3,163,4,4,255,5,4,238,5,5,241,5,6,134,6,6,153,6,7,255,6,8,228,7,6,244,7,7,223,7,8,162,8,3,244,8,4,205]},{"width":6,"chr":"x","bonus":0.022,"secondary":false,"pixels":[0,8,163,1,3,163,1,4,221,1,7,225,2,5,255,2,6,243,3,4,255,3,6,220,3,7,220,4,3,225,4,8,255]},{"width":6,"chr":"y","bonus":0.026,"secondary":false,"pixels":[0,3,255,0,4,133,0,11,225,1,5,226,1,6,231,1,11,192,2,7,217,2,8,255,2,9,244,3,6,244,3,7,187,4,3,205,4,4,225]},{"width":6,"chr":"z","bonus":0.03,"secondary":false,"pixels":[0,3,133,0,8,205,1,3,255,1,7,225,1,8,255,2,3,255,2,6,255,2,8,255,3,3,255,3,4,208,3,5,163,3,8,255,4,3,255,4,4,162,4,8,255]},{"width":8,"chr":"A","bonus":0.04,"secondary":false,"pixels":[0,8,133,1,6,225,1,7,244,2,3,163,2,4,255,2,5,184,2,6,255,3,1,255,3,2,255,3,6,255,4,2,255,4,3,249,4,4,142,4,6,255,5,4,175,5,5,255,5,6,255,5,7,143,6,7,220,6,8,255]},{"width":7,"chr":"B","bonus":0.052,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,4,255,1,8,255,2,1,255,2,4,255,2,8,255,3,1,255,3,4,255,3,8,255,4,1,225,4,4,255,4,5,208,4,8,205,5,2,205,5,3,182,5,5,143,5,6,215,5,7,159]},{"width":9,"chr":"C","bonus":0.034,"secondary":false,"pixels":[0,4,184,0,5,184,1,2,225,1,3,133,1,6,186,1,7,221,2,1,163,2,8,202,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,255,6,1,163,6,2,143,6,8,163]},{"width":8,"chr":"D","bonus":0.044,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,8,255,2,1,255,2,8,255,3,1,255,3,8,255,4,1,205,4,8,205,5,2,238,5,3,132,5,7,225,6,3,153,6,4,210,6,5,200]},{"width":6,"chr":"E","bonus":0.038,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,5,255,1,8,255,2,1,255,2,5,255,2,8,255,3,1,255,3,5,255,3,8,255,4,1,133,4,8,225]},{"width":6,"chr":"F","bonus":0.028,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255]},{"width":9,"chr":"G","bonus":0.044,"secondary":false,"pixels":[0,4,163,0,5,184,1,2,205,1,3,133,1,6,168,1,7,232,2,1,163,2,8,217,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,244,6,1,163,6,5,255,6,7,133,6,8,163,7,5,133,7,6,241,7,7,231,7,8,226]},{"width":8,"chr":"H","bonus":0.042,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,5,255,2,5,255,3,5,255,4,5,255,5,5,255,6,1,205,6,2,231,6,3,231,6,4,231,6,5,231,6,6,241,6,7,231,6,8,213]},{"width":4,"chr":"I","bonus":0.018,"secondary":false,"pixels":[1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,2,8,191]},{"width":6,"chr":"J","bonus":0.028,"secondary":false,"pixels":[0,6,133,0,7,133,1,8,226,2,1,225,2,8,255,3,1,255,3,8,205,4,1,205,4,2,241,4,3,231,4,4,231,4,5,231,4,6,231,4,7,146]},{"width":7,"chr":"K","bonus":0.038,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,4,255,2,4,255,2,5,143,3,3,225,3,5,208,3,6,221,4,1,205,4,2,133,4,7,249,4,8,151,5,8,175]},{"width":6,"chr":"L","bonus":0.024,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,8,255,2,8,255,3,8,255,4,8,255]},{"width":9,"chr":"M","bonus":0.05,"secondary":false,"pixels":[0,1,235,0,2,255,0,3,255,0,4,255,0,5,255,0,6,255,0,7,255,0,8,255,1,2,164,1,3,225,2,4,202,2,5,144,3,6,227,4,6,216,4,7,139,5,4,159,6,3,191,7,1,235,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255]},{"width":8,"chr":"N","bonus":0.046,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,2,255,1,3,134,2,3,241,3,4,217,3,5,205,4,6,238,5,7,255,6,1,205,6,2,231,6,3,231,6,4,231,6,5,231,6,6,231,6,7,236,6,8,231]},{"width":10,"chr":"O","bonus":0.05,"secondary":false,"pixels":[0,4,184,0,5,163,1,2,205,1,3,133,1,6,200,1,7,221,2,1,133,2,7,147,2,8,185,3,1,255,3,8,255,4,1,255,4,8,255,5,1,255,5,8,255,6,1,133,6,2,143,6,8,133,7,2,226,7,3,169,7,6,163,7,7,205,8,3,133,8,4,212,8,5,180]},{"width":7,"chr":"P","bonus":0.038,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255,4,1,184,4,2,178,4,5,184,5,2,168,5,3,235]},{"width":9,"chr":"Q","bonus":0.04,"secondary":false,"pixels":[0,4,184,0,5,184,1,2,225,1,6,186,1,7,236,2,1,184,2,8,205,3,1,255,3,8,255,4,1,255,4,8,255,5,1,244,5,8,244,6,2,231,6,7,255,7,3,255,7,4,205,7,5,225,7,6,255,7,8,231]},{"width":7,"chr":"R","bonus":0.042,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,1,255,1,5,255,2,1,255,2,5,255,3,1,255,3,5,255,3,6,220,4,2,249,4,3,205,4,4,255,4,7,249,4,8,173,5,8,140]},{"width":6,"chr":"S","bonus":0.028,"secondary":false,"pixels":[0,2,133,0,3,163,1,1,205,1,4,238,1,8,243,2,1,255,2,4,182,2,8,255,3,1,255,3,5,255,3,8,255,4,1,163,4,6,241,4,7,244]},{"width":8,"chr":"T","bonus":0.026,"secondary":false,"pixels":[0,1,255,1,1,255,2,1,255,3,1,255,3,2,241,3,3,231,3,4,231,3,5,231,3,6,231,3,7,231,3,8,213,4,1,255,5,1,255]},{"width":8,"chr":"U","bonus":0.036,"secondary":false,"pixels":[0,1,205,0,2,225,0,3,225,0,4,225,0,5,225,0,6,184,1,7,203,1,8,142,2,8,255,3,8,255,4,8,225,5,1,205,5,2,225,5,3,225,5,4,225,5,5,225,5,6,255,5,7,244]},{"width":7,"chr":"V","bonus":0.028,"secondary":false,"pixels":[0,1,255,0,2,184,1,3,186,1,4,255,1,5,133,2,6,212,2,7,243,3,7,255,3,8,231,4,4,205,4,5,244,5,1,163,5,2,255,5,3,133]},{"width":10,"chr":"W","bonus":0.058,"secondary":false,"pixels":[0,1,255,0,2,225,1,3,153,1,4,210,1,5,255,1,6,205,2,6,178,2,7,255,2,8,255,3,3,133,3,4,244,3,5,225,4,1,255,4,2,255,4,3,161,5,2,143,5,3,208,5,4,246,5,5,205,6,6,170,6,7,255,6,8,255,7,4,133,7,5,244,7,6,243,7,7,176,8,1,244,8,2,244,8,3,133]},{"width":7,"chr":"X","bonus":0.032,"secondary":false,"pixels":[0,8,163,1,1,184,1,2,218,1,7,244,2,3,238,2,4,146,2,5,255,2,6,133,3,4,255,3,5,246,4,2,244,4,6,231,4,7,175,5,1,205,5,7,133,5,8,255]},{"width":7,"chr":"Y","bonus":0.022,"secondary":false,"pixels":[0,1,163,1,2,246,2,3,191,2,4,255,3,4,235,3,5,231,3,6,233,3,7,231,3,8,213,4,3,255,5,1,244]},{"width":7,"chr":"Z","bonus":0.03,"secondary":false,"pixels":[0,8,184,1,1,255,1,7,225,1,8,255,2,1,255,2,5,205,2,8,255,3,1,255,3,4,205,3,8,255,4,1,255,4,2,241,4,8,255,5,1,184,5,8,133]},{"width":7,"chr":"0","bonus":0.036,"secondary":false,"pixels":[0,2,133,0,3,225,0,4,255,0,5,255,0,6,244,0,7,162,1,1,184,1,8,225,2,1,184,2,8,200,3,1,225,3,8,205,4,2,205,4,3,255,4,4,184,4,5,184,4,6,244,4,7,162]},{"width":7,"chr":"1","bonus":-0.001999999999999993,"secondary":true,"pixels":[1,8,184,2,1,205,2,2,221,2,3,207,2,4,184,2,5,184,2,6,184,2,7,184,2,8,244,3,8,225,4,8,136]},{"width":7,"chr":"2","bonus":0.024,"secondary":false,"pixels":[1,8,255,2,1,184,2,6,133,2,8,210,3,1,205,3,5,133,3,8,207,4,1,184,4,2,185,4,4,205,4,8,184,5,3,139]},{"width":7,"chr":"3","bonus":0.022,"secondary":false,"pixels":[0,8,205,1,1,184,1,8,189,2,1,184,2,4,184,2,8,205,3,2,238,3,3,213,3,5,225,3,7,162,4,6,154]},{"width":7,"chr":"4","bonus":0.034,"secondary":false,"pixels":[0,6,244,1,4,184,1,6,207,2,3,162,2,6,207,3,1,184,3,2,133,3,6,205,4,1,184,4,2,214,4,3,212,4,4,200,4,5,200,4,6,243,4,7,214,4,8,200,5,6,168]},{"width":7,"chr":"5","bonus":0.028,"secondary":false,"pixels":[1,1,244,1,2,184,1,3,184,1,4,184,1,8,210,2,1,184,2,4,214,2,8,184,3,1,184,3,4,205,3,8,205,4,5,249,4,6,189,4,7,225]},{"width":7,"chr":"6","bonus":0.036,"secondary":false,"pixels":[0,3,162,0,4,255,0,5,255,0,6,244,0,7,133,1,2,184,1,4,147,1,7,159,1,8,212,2,1,205,2,4,194,2,8,207,3,1,184,3,4,205,3,8,184,4,5,238,4,6,255,4,7,184]},{"width":7,"chr":"7","bonus":0.022,"secondary":false,"pixels":[0,1,184,1,1,184,1,8,205,2,1,184,2,6,244,2,7,133,3,1,184,3,3,133,3,4,225,4,1,255,4,2,214]},{"width":7,"chr":"8","bonus":0.038,"secondary":false,"pixels":[1,2,244,1,3,225,1,6,205,1,7,231,2,1,205,2,4,228,2,5,175,2,8,241,3,1,184,3,4,175,3,8,189,4,1,225,4,4,162,4,5,225,4,8,184,5,2,205,5,3,163,5,6,249,5,7,243]},{"width":7,"chr":"9","bonus":0.036,"secondary":false,"pixels":[1,2,225,1,3,189,1,4,243,1,8,133,2,1,205,2,5,241,2,8,189,3,1,184,3,5,189,3,8,205,4,1,184,4,2,149,4,7,162,5,2,186,5,3,246,5,4,255,5,5,255,5,6,210]},{"width":8,"chr":"%","bonus":0.032,"secondary":false,"pixels":[0,3,255,0,8,255,1,2,255,1,4,255,1,7,255,2,3,255,2,6,255,3,5,255,4,4,255,4,6,132,4,7,255,5,3,255,5,6,255,5,8,255,6,2,255,6,7,255]},{"width":4,"chr":"/","bonus":0.016,"secondary":false,"pixels":[0,7,133,0,8,244,0,9,225,1,4,184,1,5,244,1,6,163,2,1,225,2,2,225]},{"width":7,"chr":"+","bonus":0.024,"secondary":false,"pixels":[0,5,225,1,5,255,2,5,255,3,2,133,3,3,228,3,4,231,3,5,255,3,6,241,3,7,231,3,8,213,4,5,255,5,5,255]},{"width":5,"chr":"?","bonus":0.016,"secondary":false,"pixels":[0,1,163,1,1,255,1,6,225,1,8,255,2,1,255,2,5,163,3,2,255,3,3,225]},{"width":2,"chr":"!","bonus":0.014,"secondary":true,"pixels":[0,1,163,0,2,184,0,3,184,0,4,184,0,5,184,0,6,163,0,8,255]},{"width":8,"chr":"@","bonus":0.052,"secondary":false,"pixels":[0,4,255,0,5,255,0,6,225,0,7,255,0,8,184,1,3,225,1,9,249,2,2,225,2,5,255,2,6,244,2,7,255,2,10,191,3,2,255,3,4,255,3,8,231,3,10,205,4,2,244,4,4,255,4,8,255,5,3,249,5,4,255,5,5,241,5,6,225,5,7,225,5,8,244,6,8,241]},{"width":8,"chr":"#","bonus":0.048,"secondary":false,"pixels":[0,6,255,1,3,255,1,6,255,1,7,208,1,8,244,2,1,163,2,2,244,2,3,255,2,4,241,2,5,165,2,6,255,3,3,255,3,6,255,4,3,255,4,4,194,4,5,205,4,6,255,4,7,249,4,8,184,5,1,255,5,2,184,5,3,255,5,6,255,6,3,255]},{"width":6,"chr":"$","bonus":0.032,"secondary":false,"pixels":[0,2,133,0,3,163,1,1,205,1,4,238,1,8,243,2,0,205,2,1,244,2,4,137,2,5,153,2,8,243,2,9,231,3,1,249,3,5,246,3,8,255,4,6,205,4,7,182]},{"width":6,"chr":"^","bonus":0.018,"secondary":false,"pixels":[0,4,133,0,5,244,1,2,205,1,3,225,2,1,225,2,2,233,3,3,217,3,4,233,4,5,172]},{"width":6,"chr":"~","bonus":0.008,"secondary":true,"pixels":[1,5,255,2,5,225,3,6,241,4,5,205]},{"width":7,"chr":"&","bonus":0.04,"secondary":false,"pixels":[0,6,184,1,2,244,1,3,255,1,4,187,1,5,184,1,7,168,1,8,210,2,1,255,2,4,255,2,8,255,3,1,255,3,4,255,3,8,255,4,4,255,4,8,184,5,3,205,5,4,255,5,5,241,5,6,192,6,4,185]},{"width":6,"chr":"*","bonus":0.022,"secondary":false,"pixels":[0,2,163,1,2,163,1,3,225,1,4,255,2,1,205,2,2,243,2,3,255,2,4,154,3,2,202,3,3,140,3,4,194]},{"width":4,"chr":"(","bonus":0.024,"secondary":false,"pixels":[0,3,164,0,4,244,0,5,254,0,6,235,0,7,163,1,1,194,1,2,205,1,7,140,1,8,225,1,9,205,2,0,215,2,10,235]},{"width":4,"chr":")","bonus":0.022,"secondary":false,"pixels":[1,0,215,1,10,223,2,1,222,2,2,218,2,8,205,2,9,190,3,3,205,3,4,246,3,5,254,3,6,237,3,7,176]},{"width":7,"chr":"_","bonus":0.012,"secondary":true,"pixels":[0,9,133,1,9,255,2,9,255,3,9,255,4,9,255,5,9,255]},{"width":4,"chr":"-","bonus":0.006,"secondary":true,"pixels":[0,5,255,1,5,255,2,5,255]},{"width":8,"chr":"=","bonus":0.02,"secondary":false,"pixels":[0,4,255,0,6,255,1,4,255,1,6,255,2,4,255,2,6,255,3,4,255,3,6,255,4,4,255,4,6,255]},{"width":3,"chr":"[","bonus":0.022,"secondary":false,"pixels":[0,0,205,0,1,225,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,205,1,0,244,1,8,249]},{"width":3,"chr":"]","bonus":0.022,"secondary":false,"pixels":[0,0,244,0,8,244,1,0,205,1,1,241,1,2,231,1,3,231,1,4,231,1,5,231,1,6,231,1,7,231,1,8,213]},{"width":5,"chr":"{","bonus":0.02,"secondary":false,"pixels":[0,5,133,1,2,163,1,3,225,1,4,225,1,5,205,1,6,255,1,7,225,1,8,163,2,1,244,2,9,246]},{"width":5,"chr":"}","bonus":0.02,"secondary":false,"pixels":[1,1,244,1,9,244,2,2,205,2,3,233,2,4,231,2,5,208,2,6,255,2,7,228,2,8,173,3,5,188]},{"width":3,"chr":":","bonus":0.004,"secondary":true,"pixels":[1,3,255,1,7,255]},{"width":3,"chr":";","bonus":0.008,"secondary":true,"pixels":[0,9,204,1,3,255,1,7,244,1,8,255]},{"width":3,"chr":"\\"","bonus":0.008,"secondary":true,"pixels":[0,1,255,0,2,255,2,1,255,2,2,255]},{"width":2,"chr":"\'","bonus":0.004,"secondary":true,"pixels":[0,1,255,0,2,170]},{"width":7,"chr":"<","bonus":0.018,"secondary":false,"pixels":[0,5,205,1,5,255,1,6,154,2,4,244,2,6,249,3,4,163,3,6,165,4,3,225,4,7,238]},{"width":7,"chr":">","bonus":0.02,"secondary":false,"pixels":[0,3,205,0,7,205,1,4,154,1,7,184,2,4,246,2,6,255,3,4,165,3,5,191,3,6,205,4,5,255]},{"width":5,"chr":"\\\\","bonus":0.018,"secondary":false,"pixels":[1,1,133,1,2,255,1,3,205,2,4,170,2,5,255,2,6,205,3,7,170,3,8,255,3,9,208]},{"width":2,"chr":".","bonus":0.002,"secondary":true,"pixels":[0,8,255]},{"width":3,"chr":",","bonus":0.006,"secondary":true,"pixels":[0,9,209,1,7,209,1,8,255]},{"width":3,"chr":"|","bonus":0.02,"secondary":true,"pixels":[0,1,225,0,2,225,0,3,225,0,4,225,0,5,225,0,6,225,0,7,225,0,8,225,0,9,225,0,10,205]}],"width":10,"spacewidth":3,"shadow":false,"height":12,"basey":8}'),
		}

		this.colors = {
			white: [255, 255, 255],
		}	

		this.coordinates = {
			morale: {x: 318, y: 66},
			combat: {x: 318, y: 97},
			seafaring: {x: 318, y: 128},
			time: {x: 299, y: 165},
		}
	}

	read(){
		let fullImage = a1lib.bindfullrs();
		let interfacePosition = a1lib.findsubimg(fullImage, this.images.voyageList);

		console.log("Interface Position", interfacePosition.length);

		if(!interfacePosition.length){
			interfacePosition = a1lib.findsubimg(fullImage, this.images.legacyVoyageList);
			if(!interfacePosition.length){
				return false;
			}else{
				this.legacy = true;
			}
		}

		let offsetX = this.legacy ? 50 : 375;
		let x = interfacePosition[0].x + offsetX;
		let y = interfacePosition[0].y + 270
		let width = 370;
		let height = 200;

		let detailsImage = a1lib.bindregion(x, y, width, height);
		let buffer = detailsImage.toData(x, y , width, height);	

		alt1.overLayRect(a1lib.mixcolor(255, 255, 255), x, y, width, height, 2000, 1);

		//let morale = OCR.readLine(buffer, this.fonts.mono, this.colors.white, this.coordinates.morale.x, this.coordinates.morale.y, true, true).text;
		//let combat = OCR.readLine(buffer, this.fonts.mono, this.colors.white, this.coordinates.combat.x, this.coordinates.combat.y, true, true).text;
		//let seafaring = OCR.readLine(buffer, this.fonts.mono, this.colors.white, this.coordinates.seafaring.x, this.coordinates.seafaring.y, true, true).text;
		//let time = OCR.readLine(buffer, this.fonts.mono, this.colors.white, this.coordinates.time.x, this.coordinates.time.y, true, true).text;

		let moraleAttempts = this.getAttempts(buffer, this.coordinates.morale.x, this.coordinates.morale.y);
		let combatAttempts = this.getAttempts(buffer, this.coordinates.combat.x, this.coordinates.combat.y);
		let seafaringAttempts = this.getAttempts(buffer, this.coordinates.seafaring.x, this.coordinates.seafaring.y);
		let timeAttempts = this.getAttempts(buffer, this.coordinates.time.x, this.coordinates.time.y);

		let checkAttempts = [];
		checkAttempts.push(moraleAttempts)
		checkAttempts.push(combatAttempts)
		checkAttempts.push(seafaringAttempts)
		checkAttempts.push(timeAttempts)
		
		let morale = mostFreqStr(moraleAttempts);
		let combat = mostFreqStr(combatAttempts);
		let seafaring = mostFreqStr(seafaringAttempts);
		let time = mostFreqStr(timeAttempts);

		this.result = {
			morale: morale ? morale : 0,
			combat: combat ? combat : 0,
			seafaring: seafaring ? seafaring : 0,
			time: time,
			checkAttempts: checkAttempts,
		}

		return true;
	}

	getAttempts(buffer, startX, startY){
		let attempts = [];
		let endX = startX + 60;

		for(let findX = startX; findX < endX ; findX++){
			let attempt = OCR.readLine(buffer, this.fonts.mono, this.colors.white, findX, startY, true, true).text;
			
			if(attempt){
				attempts.push(attempt);
			}
		}


		return attempts;
	}
		
}


/**
 * Convert ImageData to base64 for displaying 
 * @param  {ImageData} imagedata 
 * @return {string}           
 */
function base64(imagedata) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx.putImageData(imagedata, 0, 0);

    var image = new Image();
    image.src = canvas.toDataURL();
    return image.src;
}

function mostFreqStr (arr) {
  var obj = {}, mostFreq = 0, which = [];

  arr.forEach(ea => {
    if (!obj[ea]) {
      obj[ea] = 1;
    } else {
      obj[ea]++;
    }

    if (obj[ea] > mostFreq) {
      mostFreq = obj[ea];
      which = [ea];
    } else if (obj[ea] === mostFreq) {
      which.push(ea);
    }
  });

  return which[0];
}