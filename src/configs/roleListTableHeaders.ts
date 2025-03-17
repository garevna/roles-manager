import type { TableHeadersModel } from '@/types'

export const roleListTableHeaders: TableHeadersModel[] = [
  {
    title: 'Назва',
    key: 'name',
    sortable: true,
    maxWidth: '120px',
    width: '120px',
  },
  {
    title: 'Ієрархія підпорядкування',
    key: 'data-table-expand',
    sortable: false,
    maxWidth: '240px',
    width: '180px',
  },
  {
    title: 'Кількість активних ролей',
    key: 'usercount',
    sortable: false,
    maxWidth: '240px',
    width: '160px',
  },
  {
    title: '# Теги',
    key: 'tags',
    sortable: false,
    align: 'start',
    maxWidth: '360px',
    width: '240px',
  },
  {
    title: 'Опис',
    key: 'description',
    sortable: false,
    align: 'start',
    maxWidth: '420',
    width: '360',
  },
  // {
  //   title: '',
  //   key: 'creatorId',
  //   sortable: false,
  //   align: 'start',
  //   maxWidth: '100',
  //   width: '80',
  // },
]
