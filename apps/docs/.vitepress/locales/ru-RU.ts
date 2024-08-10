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
      {
        text: getVersion(),
        items: [
          { text: 'Журнал изменений', link: '/ru/other/changelog' },
        ],
      },
    ],

    /**
     * Меню в боковой панели
     */
    sidebar: [
      {
        text: 'Прочее',
        base: '/ru/other',
        collapsed: true,
        items: [
          { text: 'Журнал изменений', link: '/changelog' },
          { text: 'Лицензия', link: '/license' },
        ],
      },
    ],

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
      label: 'На странице',
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
