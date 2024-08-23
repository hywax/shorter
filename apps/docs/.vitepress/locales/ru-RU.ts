import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  lang: 'ru-RU',
  description: '',
  themeConfig: {
    /**
     * Меню в шапке
     */
    nav: [
      { text: 'Руководство', link: '/ru/guide/what-is' },
      { text: 'Дорожная карта', link: '/ru/extra/roadmap' },
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
          { text: 'Внести вклад', link: '/ru/other/contributing' },
        ],
      },
    ],

    /**
     * Меню в боковой панели
     */
    sidebar: [
      {
        text: 'Руководство',
        base: '/ru/guide',
        items: [
          { text: 'Что такое Shorter?', link: '/what-is' },
          { text: 'Установка', link: '/installation' },
          { text: 'Конфигурация', link: '/configuration' },
        ],
      },
      {
        text: 'Основы',
        base: '/ru/essentials',
        items: [
          { text: 'Начало работы', link: '/started' },
        ],
      },
      {
        text: 'Расширенное',
        base: '/ru/advanced',
        items: [
          { text: 'Email', link: '/email' },
          { text: 'Ночной канал', link: '/nightly-release' },
        ],
      },
      {
        text: 'Прочее',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Внести вклад', link: '/contributing' },
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],

    /**
     * Подвал
     */
    footer: {
      message: 'Выпущено под лицензией AGPL-3.0',
      copyright: '© 2024-настоящее время Hywax',
    },

    /**
     * Другие параметры
     */
    langMenuLabel: 'Язык',
    returnToTopLabel: 'Вернуться к началу',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на темную тему',
    editLink: {
      pattern: 'https://github.com/hywax/shorter/edit/main/apps/docs/:path',
      text: 'Редактировать страницу на GitHub',
    },
    lastUpdated: {
      text: 'Последнее обновление',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    outline: {
      label: 'Оглавление',
      level: [2, 3],
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Результаты поиска',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Ничего не найдено для',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'навигация',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },
        },
      },
    },
  },
})
