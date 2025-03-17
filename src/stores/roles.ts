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

  function setIerarchyExpanded(item: GetRoleListModel) {
    expanded[item.id] = expanded[item.id] === 'ierarchy' ? null : 'ierarchy'
  }

  function setUsersExpanded(item: GetRoleListModel) {
    expanded[item.id] = expanded[item.id] === 'users' ? null : 'users'
  }

  function setTagsExpanded(item: GetRoleListModel) {
    expanded[item.id] = expanded[item.id] === 'tags' ? null : 'tags'
  }

  function getRoleById(id: number) {
    return roleList.find((role: GetRoleListModel) => role.id === id) || null
  }

  function getRoleUsers(/* item: GetRoleListModel */) {
    return fakeUsers
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

  return {
    rolesTotal,
    notificationsTotal,
    roleList,
    expanded,
    resetExpanded,
    resetExpandeAll,
    getRoleById,
    getRoleUsers,
    setIerarchyExpanded,
    setUsersExpanded,
    setTagsExpanded,
    updateChilds,
    updateParents,
    removeRoleTag,
  }
})
