import type { Ref } from 'vue'

export interface ExpandedModel {
  id: Ref<number | null>
  ierarchy: Ref<boolean>
  tags: Ref<boolean>
  users: Ref<boolean>
}
