<script setup>
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

const formData = ref({
  'fullName': '',
  'email': '',
  'message': ''
})
</script>

<template>
	<form action="" class="space-y-6">
		<BaseInput v-model="formData.fullName" placeholder="Full Name" type="text">
		</BaseInput>

		<BaseInput v-model="formData.email" placeholder="E-mail" type="email">
		</BaseInput>

		<div>
			<textarea
				class="w-full h-36 resize-none border-none placeholder:uppercase placeholder:text-site-gold p-2 md:h-40 lg:h-56"
				name=""
				placeholder="Message"
				v-model="formData.message"
			></textarea>
		</div>
		
		<button
			class="w-full border-none bg-white border p-2 text-site-gold font-semibold duration-300 hover:bg-site-gold hover:text-white md:h-12 lg:h-14"
		>
			Contact Me
		</button>
	</form>
</template>
