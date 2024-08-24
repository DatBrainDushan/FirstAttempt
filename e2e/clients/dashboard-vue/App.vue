<template>
  <dashboard :FirstAttempt="FirstAttempt" />
</template>

<script>
import Vue from 'vue'
import FirstAttempt from '@FirstAttempt/core'
import { Dashboard } from '@FirstAttempt/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    FirstAttempt: () => new FirstAttempt(),
  },
}
</script>

<style src="@FirstAttempt/core/dist/style.css"></style>
<style src="@FirstAttempt/dashboard/dist/style.css"></style>
