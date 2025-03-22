import { ref, reactive } from 'vue'
import type { Reactive } from 'vue'
import { fakeRoleList } from './fakeRoleList'
import { defineStore } from 'pinia'
import type { GetRoleListModel /* RoleModel */ } from '@/types'
import { fakeUsers } from './fakeUsers'

export const useRoleStore = defineStore('roles', () => {
  const rolesTotal = ref(82)
  const notificationsTotal = ref(17)

  const roleList = reactive(fakeRoleList)

  addActiveUsersNumberToEachRole()

  const expanded: Reactive<{ [key: number]: 'ierarchy' | 'tags' | 'users' | null }> =
    roleList.reduce((res, role) => Object.assign(res, { [role.id]: null }), {})

  function resetExpandeAll() {
    for (const id in expanded) {
      expanded[id] = null
    }
  }

  function resetExpanded(item: GetRoleListModel) {
    expanded[item.id] = null
  }

  function setExpanded(mode: 'ierarchy' | 'tags' | 'users' | null, item: GetRoleListModel) {
    if (!mode) return
    if (expanded[item.id] && expanded[item.id] !== mode) return
    expanded[item.id] = !expanded[item.id] ? mode : null
  }

  function getRoleUsers(roleId: number) {
    return fakeUsers.filter((user) => user.role === roleId)
  }

  function updateChilds(role: GetRoleListModel, childId?: number): void {
    if (typeof childId !== 'number') return
    const index = role.child_roles.findIndex((id: number) => id === childId)
    if (index === -1) role.child_roles.push(childId)
    else role.child_roles.splice(index, 1)
  }

  function updateParents(role: GetRoleListModel, parentId?: number): void {
    if (typeof parentId !== 'number') return
    const index = role.parent_roles.findIndex((id: number) => id === parentId)
    if (index === -1) role.parent_roles.push(parentId)
    else role.parent_roles.splice(index, 1)
  }

  function removeRoleTag(role: GetRoleListModel, tag?: string): void {
    if (!tag) return
    const index = role.tags.findIndex((text: string) => text === tag)
    if (index !== -1) role.tags.splice(index, 1)
  }

  function addActiveUsersNumberToEachRole() {
    roleList.forEach((role) => {
      const users = fakeUsers.filter((user) => user.role === role.id).length
      role.usercount = users
    })
  }

  return {
    rolesTotal,
    notificationsTotal,
    roleList,
    expanded,
    resetExpanded,
    resetExpandeAll,
    getRoleUsers,
    setExpanded,
    updateChilds,
    updateParents,
    removeRoleTag,
  }
})
