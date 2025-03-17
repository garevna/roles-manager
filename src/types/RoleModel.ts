export interface RoleModel {
  id: number
  name: string
  description: string
  homepage: string
  tags: string[]
  inputs: string[]
  notifications: string[]
  privileges: string[]
  active: boolean
}
