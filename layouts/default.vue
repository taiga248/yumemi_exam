<template>
  <v-app dark>
    <v-navigation-drawer v-model="state.drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" />
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>


<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
type State = {
  drawer: boolean
}
type Item = {
  icon: string
  title: string
  to: string
}
export default defineComponent({
  setup() {
    const state = reactive<State>({
      drawer: false,
    })
    const items = ref<Item[]>([
      {
        icon: 'mdi-apps',
        title: 'INDEX',
        to: '/',
      },
    ])
    return {
      state,
      items,
    }
  },
})
</script>
