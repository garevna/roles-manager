<script setup lang="ts">
import { useRoleStore } from '@/stores/roles'
import type { GetRoleListModel } from '@/types'
import { reactive, ref, type Reactive } from 'vue'
import { emptyRole } from '@/stores/emptyRole'

const store = useRoleStore()

const props = defineProps({
  id: Number,
})

const role = store.roleList.find((role) => role.id === props.id) || emptyRole

const item: Reactive<GetRoleListModel> = reactive(role)

const newTag = ref('')

function removeTag(tag: string) {
  store.removeRoleTag(item, tag)
}

function addNewTag() {
  item.tags.push(newTag.value)
  newTag.value = ''
}
</script>

<template>
  <div class="my-3 mx-2">
    <v-chip
      closable
      v-for="tag in item?.tags"
      :key="tag"
      :text="tag"
      @click:close="removeTag(tag)"
      class="mx-1"
      density="compact"
      close-icon="mdi-close"
    />
  </div>
  <div class="my-3 mx-2">
    <v-text-field
      v-model="newTag"
      placeholder="Додати тег"
      append-icon="mdi-check-bold"
      @click:append="addNewTag"
      max-width="180"
      dense
      hide-details
      variant="outlined"
    />
  </div>
</template>
