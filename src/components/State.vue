<template>
    <div>
        {{ fruits }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'State',
    computed: {
      ...mapState([
       'name',
       'fruits'
      ])
    }
}
</script>