<template lang="html">
  <div class="RecordPlayer">
    <canvas class="disc" ref="disc" width="320" height="320"/>
  </div>
</template>

<script>
export default {
	props: ['record'],
	data: function(args) {
		return {};
	},
	mounted: function() {
		this.audioElement = document.createElement('audio');
		this.audioElement.src = this.record;
		this.audioElement.play();

		this.audioElement.addEventListener('playing', () => {
			let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			this.analyser = audioCtx.createAnalyser();
			let source = audioCtx.createMediaStreamSource(
				this.audioElement.captureStream()
			);
			source.connect(this.analyser);

			this.analyser.fftSize = 256;
			this.analyser.smoothingTimeConstant = 0.3;
			this.bufferLength = this.analyser.frequencyBinCount;
			this.dataArray = new Uint8Array(this.bufferLength);
			let disc = this.$refs.disc;

			this.discCtx = disc.getContext('2d');
			this.discCtx.clearRect(0, 0, disc.width, disc.height);
			this.draw();
			ctx.beginPath();
			ctx.strokeStyle = 'rgb(38, 38, 38)';
			ctx.arc(
				disc.width / 2,
				disc.height / 2,
				disc.width / 2 - 4,
				0,
				Math.PI * 2
			);
			ctx.stroke();
		});
	},
	methods: {
		draw: function() {
			let drawVisual = requestAnimationFrame(this.draw);
			this.analyser.getByteFrequencyData(this.dataArray);

			let disc = this.$refs.disc;
			let ctx = this.discCtx;

			ctx.clearRect(0, 0, disc.width, disc.height);

			ctx.beginPath();
			ctx.strokeStyle = 'rgb(38, 38, 38)';
			ctx.arc(
				disc.width / 2,
				disc.height / 2,
				disc.width / 2 - 4,
				0,
				Math.PI * 2
			);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle = 'rgb(38, 38, 38)';
			ctx.arc(disc.width / 2, disc.height / 2, 80 / 2, 0, Math.PI * 2);
			ctx.stroke();

			ctx.fillStyle = 'rgba(0, 0, 0, 0)';
			ctx.lineWidth = 2;

			let barWidth = disc.width / this.bufferLength * 2.5;
			let barHeight;
			let x = 0;

			// this.dataArray.forEach((data, i) => {
			// 	barHeight = data;
			//
			// 	ctx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
			// 	ctx.fillRect(x, disc.height - barHeight / 2, barWidth, barHeight);
			//
			// 	x += barWidth + 1;
			// });

			// ctx.lineTo(disc.width, disc.height / 2);
			ctx.stroke();
		}
	}
};
</script>

<style lang="scss" scoped>
.disc {
	width: 160px;
	height: 160px;
}
</style>
