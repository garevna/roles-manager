<script setup lang="ts">
import { useRoleStore } from '@/stores/roles'
import type { GetRoleListModel } from '@/types'
import { computed, ref, reactive, type Reactive } from 'vue'
import { emptyRole } from '@/stores/emptyRole'

const store = useRoleStore()

const props = defineProps({
  id: Number,
})

const role = store.roleList.find((role) => role.id === props.id) || emptyRole

const item: Reactive<GetRoleListModel> = reactive(role)

const showListOfParentRoles = ref(false)
const showListOfChildRoles = ref(false)

const roles: { [key: number]: string } = store.roleList.reduce(
  (res, role) => Object.assign(res, { [role.id]: role.name }),
  {},
)

const listOfParentRoles = computed(() =>
  !showListOfParentRoles.value && item?.id
    ? item.parent_roles
    : store.roleList.map((role) => role.id),
)
const listOfChildRoles = computed(() =>
  !showListOfChildRoles.value && item?.id
    ? item.child_roles
    : store.roleList.map((role) => role.id),
)

function setFullListOfParentRoles() {
  showListOfParentRoles.value = !showListOfParentRoles.value
}
function setFullListOfChildRoles() {
  showListOfChildRoles.value = !showListOfChildRoles.value
}
</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th>
          Підпорядковані
          <v-btn flat slim icon="mdi-plus" @click="setFullListOfChildRoles" />
        </th>
        <th>
          Підпорядкування
          <v-btn flat slim icon="mdi-plus" @click="setFullListOfParentRoles" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="vertical-align: top">
          <v-table density="compact">
            <tr v-for="id in listOfChildRoles" :key="id">
              <td>
                <v-checkbox
                  :label="roles[id]"
                  true-icon="mdi-checkbox-marked-outline"
                  :model-value="item.child_roles.includes(id)"
                  @update:modelValue="store.updateChilds(item, id)"
                  hide-details
                  density="compact"
                  class="checkbox-small"
                />
              </td>
            </tr>
          </v-table>
        </td>
        <td style="vertical-align: top">
          <v-table density="compact">
            <tr v-for="id in listOfParentRoles" :key="id">
              <td>
                <v-checkbox
                  :label="roles[id]"
                  true-icon="mdi-checkbox-marked-outline"
                  :model-value="item.parent_roles.includes(id)"
                  @update:modelValue="store.updateParents(item, id)"
                  hide-details
                  density="compact"
                  class="checkbox-small"
                />
              </td>
            </tr>
          </v-table>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>

</style>
