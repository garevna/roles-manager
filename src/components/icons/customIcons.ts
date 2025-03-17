import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'

// import RolesTableIcon from './RolesTableIcon.vue'
import IconIerarchy from './IconIerarchy.vue'
import IconRoles from './IconRoles.vue'
import IconTableSortDown from './IconTableSortDown.vue'
import IconTableSortUp from './IconTableSortUp.vue'
import IconRSS from './IconRSS.vue'

const customIcons = {
  IconRoles,
  IconIerarchy,
  IconTableSortDown,
  IconTableSortUp,
  IconRSS,
}

export const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [
      h(customIcons[props.icon as keyof typeof customIcons], { class: 'v-icon__svg' }),
    ]),
}
