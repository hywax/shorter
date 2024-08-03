export default {
  app: {
    footer: {
      copyright: '© {year} Powered by {author} {version}',
      github: 'Github Repository',
      boosty: 'Donate with Boosty',
      personal: 'Visit Personal Website',
    },
  },
  error: {
    title: 'Error',
    message: 'An error occurred while processing your request.',
    reload: 'Reload Page',
    backHome: 'Back to Home',
    codes: {
      400000: 'Bad request',
      400001: 'Invalid user data',
      401000: 'Unauthorized',
      403000: 'Forbidden',
      404000: 'Not found',
      409001: 'User with this email already exists',
      500000: 'Internal server error',
      501000: 'Not implemented',
    },
  },
  i18n: {
    title: 'Language',
    select: 'Select your language',
  },
  colorMode: {
    title: 'Theme',
    light: 'Switch to Light Mode',
    dark: 'Switch to Dark Mode',
  },
  account: {
    menu: {
      singed: 'Signed in as',
      settings: 'Settings',
      signOut: 'Sign Out',
    },
  },
  auth: {
    login: {
      title: 'Log In',
      description: 'Welcome back! 👋 Login to get started!',
    },
    register: {
      title: 'Sign Up',
      description: 'Join to Our Community with all time access',
    },
    forgot: {
      title: 'Forgot Password',
      description: 'Enter your email and we’ll send you a code you can use to update your password.',
    },
    form: {
      name: {
        label: 'Name',
        placeholder: 'Enter your name',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password',
      },
      action: {
        login: 'Log In',
        register: 'Sign Up',
        forgot: 'Send Code',
      },
    },
    errors: {
      title: 'Error',
      credentials: 'Invalid email or password',
      unknown: 'An error occurred while processing your request',
    },
    links: {
      login: 'Already have an account? {link}',
      register: 'Don’t have an account? {link}',
      forgot: 'Forgot Password?',
    },
  },
  projects: {
    title: 'Projects',
    selector: {
      view: 'View All',
      add: 'Add a new project',
    },
    create: {
      title: 'Create a new project',
      name: 'Project Name',
      action: 'Create Project',
    },
    greeting: {
      title: 'Create your first project',
      description: 'Create your first project to get started',
    },
  },
}
