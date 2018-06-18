<template>
  <div style="padding-top: 100px;">

    <RecordPlayer record="/audio/pretty_shiny_things.mp3"/>

  </div>
</template>

<script>
import RecordPlayer from '~/components/RecordPlayer';
export default {
	components: {
		RecordPlayer
	}
};
</script>
