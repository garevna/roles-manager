import type { GetRoleListModel } from '@/types'

export const fakeRoleList: GetRoleListModel[] = [
  {
    id: 1,
    name: 'Директор',
    description: '..............Директор',
    homepage: '/personel',
    tags: ['manager'],
    child_roles: [1, 2, 3],
    parent_roles: [],
    usercount: 1,
  },
  {
    id: 2,
    name: 'Начальник відділу',
    description: '..............Начальник відділу',
    homepage: '/personel',
    tags: ['manager', 'order', 'rule'],
    child_roles: [3, 4],
    parent_roles: [1],
    usercount: 1,
  },
  {
    id: 3,
    name: 'Комірник',
    description: '..............Комірник',
    homepage: '/personel',
    tags: ['store', 'commodities'],
    child_roles: [],
    parent_roles: [2],
    usercount: 2,
  },
  {
    id: 4,
    name: 'Синхронізатор',
    description: '..............Синхронізатор',
    homepage: '/personel',
    tags: ['sync', 'supply'],
    child_roles: [],
    parent_roles: [2],
    usercount: 2,
  },
  {
    id: 5,
    name: 'Касир',
    description: '..............Касир',
    homepage: '/personel',
    tags: ['cash'],
    child_roles: [],
    parent_roles: [2],
    usercount: 1,
  },
  {
    id: 6,
    name: 'Диспетчер',
    description: '..............Диспетчер',
    homepage: '/personel',
    tags: ['log'],
    child_roles: [],
    parent_roles: [2],
    usercount: 3,
  },
  {
    id: 7,
    name: 'Логіст',
    description: '..............Логіст',
    homepage: '/personel',
    tags: ['log'],
    child_roles: [6],
    parent_roles: [1],
    usercount: 2,
  },
  {
    id: 8,
    name: 'Аудитор',
    description: '..............Аудитор',
    homepage: '/personel',
    tags: ['audit'],
    child_roles: [],
    parent_roles: [1],
    usercount: 1,
  },
  {
    id: 9,
    name: 'Торговий агент',
    description: '..............Торговий агент',
    homepage: '/personel',
    tags: ['sales'],
    child_roles: [],
    parent_roles: [10],
    usercount: 30,
  },
  {
    id: 10,
    name: 'Регіональний торговий представник',
    description: '..............Регіональний торговий представник',
    homepage: '/personel',
    tags: ['sales'],
    child_roles: [9],
    parent_roles: [1],
    usercount: 5,
  },
  {
    id: 11,
    name: 'Бухгалтер',
    description: '..............Бухгалтер',
    homepage: '/personel',
    tags: ['sales'],
    child_roles: [],
    parent_roles: [1],
    usercount: 1,
  },
  {
    id: 12,
    name: 'Секретар',
    description: '..............Секретар',
    homepage: '/personel',
    tags: ['sales'],
    child_roles: [],
    parent_roles: [1],
    usercount: 1,
  },
]
