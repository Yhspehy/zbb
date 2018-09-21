<template>
	<div id="app">
		<keep-alive include="home,schedule,community,profile">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
export default {
    name: 'App'
};
</script>

<style lang="scss">
</style>
