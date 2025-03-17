import type { GetRoleListModel } from '@/types'

export const emptyRole: GetRoleListModel = {
  id: 0,
  name: '',
  description: '',
  homepage: '',
  tags: [],
  child_roles: [],
  parent_roles: [],
  usercount: 0,
}
