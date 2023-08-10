<script setup>
	const props = defineProps({
		skill: Object,
	});
</script>

<template>
	<div class="space-y-4 text-center grid place-items-center p-2">
		<div
			class="relative w-20 h-20 rounded-full bg-white border-[3px] border-site-gold flex place-items-center md:w-32 md:h-32 lg:w-44 lg:h-44"
		>
			<img
				v-for="(tool, index) in skill.tools"
				:key="index"
				:src="tool"
        alt="images of design/editing software"
				class="w-[42%] absolute"
				:class="[
					index % 2 === 0 ? 'right-[14%] top-[10%]' : 'left-[14%] bottom-[19%]',
				]"
			/>
		</div>
		<p
			class="text-white max-w-[220px] text-sm uppercase md:text-base lg:text-lg"
		>
			{{ skill.title }}
		</p>
	</div>
</template>
