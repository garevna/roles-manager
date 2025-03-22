<script setup lang="ts">
import { useRoleStore } from '@/stores/roles'
import { roleListTableHeaders } from '@/configs/roleListTableHeaders'
import { Colors } from '@/configs/colors'

import IerarchyExpanded from '@/components/IerarchyExpanded.vue'
import TagsExpanded from '@/components/TagsExpanded.vue'
import UsersExpanded from '@/components/UsersExpanded.vue'
import ExpandedText from '@/components/ExpandedText.vue'
import type { GetRoleListModel } from '@/types'

const store = useRoleStore()

const header = 'Roles'
const { TEXT_WHITE } = Colors
const tableHeight = window.innerHeight - 160

const expanded: number[] = []

let mode: 'ierarchy' | 'tags' | 'users' | null = null
let itemId: number | null = null

function resetExpansion(id: number) {
  const index = expanded.indexOf(id)

  if (index !== -1) expanded.splice(index, 1)
  store.expanded[id] = null
  mode = null
  itemId = null
}

function setExpansion() {
  if (itemId) {
    expanded.push(itemId)
    store.expanded[itemId] = mode
    mode = null
    itemId = null
  }
}

function clickOnRowCallback(exp: number[]) {
  if (!itemId) {
    exp.length = 0
    const keys = Object.keys(store.expanded)
    const filtered = keys.filter((key) => store.expanded[Number(key)])
    exp.push(...filtered.map((id) => Number(id)))
    return
  }

  if (!store.expanded[itemId]) {
    setExpansion()
  } else {
    if (store.expanded[itemId] === mode) resetExpansion(itemId)
    else setExpansion()
  }
}

function clickOnButtonCallback(
  action: 'ierarchy' | 'tags' | 'users' | null,
  role: GetRoleListModel,
) {
  if (!action || !role) return

  mode = action
  itemId = role.id
}
</script>

<template>
  <v-container fluid>
    <v-row align="start" justify="start" class="my-2">
      <v-col cols="2">
        <v-btn variant="plain" slim prepend-icon="mdi-menu" class="main-menu-button"></v-btn>
        <v-btn small variant="plain" slim prepend-icon="custom:IconRoles">{{ header }}</v-btn>
      </v-col>
      <v-col cols="8"></v-col>
      <v-col cols="2" style="text-align: right">
        <v-btn size="small" variant="plain" text="VPN" slim class="btn-vpn"></v-btn>
        <v-btn size="28px" variant="plain" icon="custom:IconRSS" class="ml-2"></v-btn>
      </v-col>
    </v-row>
    <v-card flat>
      <v-data-table
        :headers="roleListTableHeaders"
        :items="store.roleList"
        sort-asc-icon="custom:IconTableSortDown"
        sort-desc-icon="custom:IconTableSortUp"
        show-expand
        expand-on-click
        @update:expanded="clickOnRowCallback"
        density="compact"
        fixed-header
        fixed-footer
        :height="tableHeight"
      >
        <template v-slot:[`item.data-table-expand`]="{ item }">
          <v-icon
            icon="mdi-circle-medium"
            :color="store.expanded[item.id] !== null ? Colors.GREEN : 'transparent'"
            size="small"
            variant="plain"
            class="mx-1"
          ></v-icon>
          {{ item.name }}
        </template>

        <template v-slot:[`item.ierarchy`]="{ item }">
          <v-btn
            v-if="store.expanded[item.id] === null || store.expanded[item.id] === 'ierarchy'"
            prepend-icon="custom:IconIerarchy"
            :append-icon="
              store.expanded[item.id] === 'ierarchy' ? 'mdi-arrow-up' : 'mdi-arrow-down'
            "
            :color="store.expanded[item.id] === 'ierarchy' ? Colors.GREEN : Colors.SECONDARY"
            size="medium"
            variant="plain"
            :disabled="store.expanded[item.id] === 'tags' || store.expanded[item.id] === 'users'"
            @click="clickOnButtonCallback('ierarchy', item)"
            class="ml-2"
          ></v-btn>
        </template>

        <template v-slot:[`item.tags`]="{ item }">
          <span v-for="tag of item.tags" :key="tag" class="mx-1">
            <v-chip :text="tag" size="small"></v-chip>
          </span>
          <v-btn
            v-if="store.expanded[item.id] === null || store.expanded[item.id] === 'tags'"
            :icon="store.expanded[item.id] === 'tags' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            :color="store.expanded[item.id] === 'tags' ? Colors.GREEN : Colors.SECONDARY"
            size="small"
            variant="plain"
            :disabled="
              store.expanded[item.id] === 'ierarchy' || store.expanded[item.id] === 'users'
            "
            @click="clickOnButtonCallback('tags', item)"
            class="ml-2"
          ></v-btn>
        </template>

        <template v-slot:[`item.usercount`]="{ item }">
          <v-btn
            :append-icon="store.expanded[item.id] === 'users' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            :color="store.expanded[item.id] === 'users' ? Colors.GREEN : Colors.SECONDARY"
            size="medium"
            variant="plain"
            :text="item.usercount"
            :disabled="store.expanded[item.id] === 'ierarchy' || store.expanded[item.id] === 'tags'"
            @click="clickOnButtonCallback('users', item)"
            class="ml-2"
          ></v-btn>
        </template>

        <template v-slot:expanded-row="{ columns, item }">
          <tr v-if="store.expanded[item.id] !== null">
            <td :colspan="columns.length" class="py-1">
              <v-sheet style="padding: 12px 16px">
                <IerarchyExpanded v-if="store.expanded[item.id] === 'ierarchy'" :id="item.id" />
                <TagsExpanded v-if="store.expanded[item.id] === 'tags'" :id="item.id" />
                <UsersExpanded v-if="store.expanded[item.id] === 'users'" :id="item.id" />
              </v-sheet>
            </td>
          </tr>
        </template>

        <template v-slot:[`item.description`]="{ item }">
          <ExpandedText :text="item.description" />
        </template>

        <template v-slot:[`footer.prepend`]>
          <tr style="text-align: left">
            <td class="py-3">
              <v-btn
                icon="mdi-plus"
                :color="Colors.SECONDARY"
                size="small"
                variant="plain"
                class="ml-2"
              ></v-btn>
              <v-btn
                icon="mdi-square-edit-outline"
                :color="Colors.SECONDARY"
                size="small"
                variant="plain"
                class="ml-2"
              ></v-btn>
              <v-btn
                icon="mdi-trash-can-outline"
                :color="Colors.TRASH_ICON_COLOR"
                size="small"
                variant="plain"
                class="ml-2"
              ></v-btn>
              <v-spacer />
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<style scoped>
.main-menu-button .v-btn__prepend .v-btn .v-icon .mdi-before {
  width: 44px;
  height: 44px;
  font-size: 36px;
}
.btn-vpn {
  background: var(--v-rss-icon-background);
  height: 24px !important;
  width: 41px;
  border: solid 1px var(--v-rss-icon-border-color);
  color: v-bind(TEXT_WHITE);
}
</style>
