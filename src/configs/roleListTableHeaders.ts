import type { TableHeadersModel } from '@/types'

export const roleListTableHeaders: TableHeadersModel[] = [
  {
    title: 'Назва',
    key: 'data-table-expand',
    sortable: true,
    maxWidth: '240px',
    width: '240px',
  },
  {
    title: 'Ієрархія підпорядкування',
    key: 'ierarchy',
    sortable: false,
    maxWidth: '160px',
    width: '160px',
  },
  {
    title: 'Кількість активних ролей',
    key: 'usercount',
    sortable: false,
    maxWidth: '120px',
    width: '120px',
  },
  {
    title: '# Теги',
    key: 'tags',
    sortable: false,
    align: 'start',
    maxWidth: '320px',
    width: '320px',
  },
  {
    title: 'Опис',
    key: 'description',
    sortable: false,
    align: 'start',
    maxWidth: '360',
    width: '360',
  },
]
