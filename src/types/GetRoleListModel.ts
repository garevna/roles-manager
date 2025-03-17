export interface GetRoleListModel {
  id: number
  name: string
  description: string
  homepage: string
  tags: string[]
  child_roles: number[]
  parent_roles: number[]
  usercount: number
}
