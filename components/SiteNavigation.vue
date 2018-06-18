<template lang="html">
  <header class="SiteNavigation">
    <GridWrap>
      <GridCol>
        <div class="wrap">
          <a class="logo" href="/">
            <svg>
              <use :xlink:href="logo" />
            </svg>
          </a>
          <GigWidget></GigWidget>
        </div>
      </GridCol>
    </GridWrap>
  </header>
</template>

<script>
import logo from '~/assets/svg/logo.svg';
import GridWrap from '~/components/Grid/Wrap';
import GridCol from '~/components/Grid/Col';
import GigWidget from '~/components/GigWidget';

export default {
	data: function() {
		return {
			logo: logo.url
		};
	},
	components: {
		GridWrap,
		GridCol,
		GigWidget
	}
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars.scss';

.SiteNavigation {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding-top: 50px;
}

.wrap {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

svg {
	display: block;
	width: 60px;
	height: 33px;
	fill: $white;
	stroke: $white;
	stroke-width: 5px;
}
</style>
