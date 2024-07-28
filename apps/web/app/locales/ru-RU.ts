export default {
  app: {
    footer: {
      copyright: '© {year} Powered by {author} {version}',
      github: 'Github репозиторий',
      boosty: 'Донат на Boosty',
      personal: 'Перейти на личный сайт',
    },
  },
  i18n: {
    title: 'Язык',
    select: 'Выбрать язык интерфейса',
  },
  error: {
    title: 'Ошибка',
    message: 'Произошла ошибка при обработке вашего запроса.',
    reload: 'Перезагрузить',
    backHome: 'На главную',
    codes: {
      400: {
        title: 'Неверный запрос',
        message: 'Запрос недействителен.',
      },
      401: {
        title: 'Неавторизован',
        message: 'У вас нет разрешен��я на доступ к этой странице.',
      },
      403: {
        title: 'Доступ запрещен',
        message: 'У вас нет разрешения на доступ к этой странице',
      },
      404: {
        title: 'Страница не найдена',
        message: 'Страница, которую вы ищете, не существует.',
      },
      500: {
        title: 'Внутренняя ошибка сервера',
        message: 'Произошла непредвиденная ошибка.',
      },
    },
  },
  colorMode: {
    title: 'Тема',
    light: 'Переключиться на светлый режим',
    dark: 'Переключиться на темный режим',
  },
  account: {
    menu: {
      singed: 'Вошли как',
      settings: 'Настройки',
      signOut: 'Выйти',
    },
  },
  auth: {
    login: {
      title: 'Войти',
      description: 'Добро пожаловать обратно 👋 Войдите, чтобы начать!',
    },
    register: {
      title: 'Зарегистрироваться',
      description: 'Присоединяйтесь к нашей общине с постоянным доступом',
    },
    forgot: {
      title: 'Восстановление пароля',
      description: 'Введите свой адрес электронной почты, и мы отправим вам код, который вы можете использовать для обновления пароля.',
    },
    form: {
      name: 'Имя',
      email: 'Email',
      password: 'Пароль',
      remember: 'Запомнить меня',
      action: {
        login: 'Войти',
        register: 'Зарегистрироваться',
        forgot: 'Отправить код',
      },
    },
    links: {
      login: 'Уже есть аккаунт? {link}',
      register: 'Нет аккаунта? {link}',
      forgot: 'Забыли пароль?',
    },
  },
  projects: {
    title: 'Проекты',
    selector: {
      view: 'Просмотреть все',
      add: 'Добавить новый проект',
    },
    create: {
      title: 'Создать новый проект',
      name: 'Название проекта',
      action: 'Создать проект',
    },
    greeting: {
      title: 'Создайте свой первый проект',
      description: 'Создайте свой первый проект, чтобы начать работу',
    },
  },
}
