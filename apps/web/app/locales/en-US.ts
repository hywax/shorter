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
      400: {
        title: 'Bad Request',
        message: 'The request is invalid.',
      },
      401: {
        title: 'Unauthorized',
        message: 'You are not authorized to access this page.',
      },
      403: {
        title: 'Access Denied',
        message: 'You do not have permission to access this page',
      },
      404: {
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.',
      },
      500: {
        title: 'Internal Server Error',
        message: 'An unexpected error occurred.',
      },
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
