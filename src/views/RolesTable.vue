<script setup lang="ts">
import { useRoleStore } from '@/stores/roles'
import { roleListTableHeaders } from '@/configs/roleListTableHeaders'
import { Colors } from '@/enums/colors'

import IerarchyExpanded from '@/components/IerarchyExpanded.vue'
import TagsExpanded from '@/components/TagsExpanded.vue'
import UsersExpanded from '@/components/UsersExpanded.vue'

const store = useRoleStore()

const header = 'Roles'
const { GRAY_LIGHT, GRAY_DARK, ICON_BORDER_RED, TEXT_WHITE, TEXT_CHIP, TABLE_HEADER_BACKGROUND } =
  Colors
</script>

<template>
  <v-container fluid>
    <v-row align="start" justify="start">
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
        density="compact"
        hide-default-footer
      >
        <template v-slot:[`item.data-table-expand`]="{ item }">
          <span>Ієрархія</span>
          <v-icon icon="custom:IconIerarchy" class="mx-1" />
          <v-btn
            v-if="store.expanded[item.id] === null || store.expanded[item.id] === 'ierarchy'"
            :icon="store.expanded[item.id] === 'ierarchy' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            :color="store.expanded[item.id] === 'ierarchy' ? Colors.GREEN : Colors.SECONDARY"
            size="small"
            variant="plain"
            @click="store.setIerarchyExpanded(item)"
            class="ml-2"
          ></v-btn>
        </template>

        <template v-slot:[`item.tags`]="{ item }">
          <span v-for="tag of item.tags" :key="tag" class="mx-1">
            <v-chip :text="tag" class="text-uppercase tag" size="small" label></v-chip>
          </span>
          <v-btn
            v-if="store.expanded[item.id] === null || store.expanded[item.id] === 'tags'"
            :icon="store.expanded[item.id] === 'tags' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            :color="store.expanded[item.id] === 'tags' ? Colors.GREEN : Colors.SECONDARY"
            size="small"
            variant="plain"
            @click="store.setTagsExpanded(item)"
            class="ml-2"
          ></v-btn>
        </template>

        <template v-slot:[`item.usercount`]="{ item }">
          {{ item.usercount }}
          <v-btn
            v-if="store.expanded[item.id] === null || store.expanded[item.id] === 'users'"
            :icon="store.expanded[item.id] === 'users' ? 'mdi-arrow-up' : 'mdi-arrow-down'"
            :color="store.expanded[item.id] === 'users' ? Colors.GREEN : Colors.SECONDARY"
            size="small"
            variant="plain"
            @click="store.setUsersExpanded(item)"
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
          {{ store.expanded[item.id] }}
        </template>
      </v-data-table>

      <v-card flat style="text-align: right">
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
          color="#900"
          size="small"
          variant="plain"
          class="ml-2"
        ></v-btn>
      </v-card>
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
  background: v-bind(GRAY_DARK);
  height: 24px !important;
  width: 41px;
  border: solid 1px v-bind(ICON_BORDER_RED);
  color: v-bind(TEXT_WHITE);
}
.tag {
  background: v-bind(GRAY_LIGHT);
  color: v-bind(TEXT_CHIP);
  border-radius: 8px;
  font-size: 10px;
}

thead {
  background-color: v-bind(TABLE_HEADER_BACKGROUND);
}
</style>
