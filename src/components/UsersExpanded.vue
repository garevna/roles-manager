<script setup lang="ts">
// import { emptyRole } from '@/stores/emptyRole'
import { useRoleStore } from '@/stores/roles'
// import type { GetRoleListModel } from '@/types'

// import { reactive, type Reactive } from 'vue'

const store = useRoleStore()

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
})

// const role = store.roleList.find((role) => role.id === props.id) || emptyRole

// const item: Reactive<GetRoleListModel> = reactive(role)

const users = store.getRoleUsers(props.id)
</script>

<template>
  <v-table density="compact" style="font-size: 13px">
    <tr>
      <th>ПІП</th>
      <th>Місцезнаходження відділ</th>
      <th>Остання активність</th>
    </tr>
    <tr v-for="user in users" :key="user?.id">
      <td>
        {{ user.FIO }}
      </td>
      <td>
        {{ user.department }}
      </td>
      <td>
        {{ new Date(user.acttime).toLocaleDateString().split('/').join('.') }}
      </td>
    </tr>
  </v-table>
</template>

<style scoped>
th {
  font-weight: bold;
}
td,
th {
  border: var(--v-td-border-style) 1px var(--v-td-border-color);
  padding: 4px 8px;
}
</style>
