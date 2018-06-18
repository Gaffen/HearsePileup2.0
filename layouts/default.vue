<template lang="html">
  <div>
    <SiteNavigation/>
    <nuxt class="wrap"/>
  </div>
</template>

<script>
import SiteNavigation from '~/components/SiteNavigation';

export default {
	components: {
		SiteNavigation
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	margin: auto;
	width: 100%;
}
</style>
<style lang="scss">
@import '~/assets/scss/_vars.scss';
body {
	background: $black;
	margin: 0;
	font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
		Helvetica, Arial, 'Lucida Grande', sans-serif;
	color: $white;
}

*,
*:before,
*:after {
	box-sizing: border-box;
}
</style>
