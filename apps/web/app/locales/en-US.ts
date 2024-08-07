export default {
  app: {
    i18n: {
      title: 'Language',
      select: 'Select your language',
    },
    colorMode: {
      title: 'Theme',
      select: 'Select your theme',
      system: 'System',
      light: 'Light',
      dark: 'Dark',
      switch: {
        system: 'Switch to System Theme',
        light: 'Switch to Light Mode',
        dark: 'Switch to Dark Mode',
      },
    },
    footer: {
      copyright: '© {year} Shorter by {author} {version}',
      github: 'Github Repository',
      boosty: 'Donate with Boosty',
      personal: 'Visit Personal Website',
    },
    shortcuts: {
      title: 'Shortcuts',
      general: {
        title: 'General',
        shortcuts: 'Open shortcuts menu',
        createProject: 'Create a new project',
      },
      projects: {
        title: 'Projects',
        createLink: 'Create a new link',
        link: 'Open project links',
        analytics: 'Open project analytics',
        events: 'Open project events',
        settings: 'Open project settings',
      },
    },
    messages: {
      notImplemented: {
        title: 'Oops, nothing here :(',
        message1: 'This feature has not yet been implemented. This project is delivered free of charge without subscriptions or payment.',
        message2: 'To speed up the development, support the project with donations or by contributing to the code.',
        donate: 'Donate with Boosty',
        contribute: 'Open GitHub',
      },
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
      400002: 'Invalid email or password',
      400003: 'Invalid password data for change',
      400004: 'Passwords do not match',
      400005: 'Invalid account general data',
      400006: 'Invalid account delete data',
      401000: 'Unauthorized',
      403000: 'Forbidden',
      403001: 'Access only for unauthorized users',
      403002: 'Access only for authorized users',
      403003: 'Access only for admin',
      403004: 'Registration is disabled',
      403005: 'Account deletion is disabled',
      404000: 'Not found',
      404001: 'User not found',
      409001: 'User with this email already exists',
      500000: 'Internal server error',
      501000: 'Not implemented',
    },
  },
  account: {
    title: 'Account',
    security: 'Security',
    widget: {
      singed: 'Signed in as',
      settings: 'Settings',
      shortcuts: 'Shortcuts',
      signOut: 'Sign Out',
    },
    general: {
      title: 'General',
      description: 'Update your account details.',
      form: {
        name: {
          label: 'Name',
          placeholder: 'Enter your name',
        },
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
        },
        action: {
          update: 'Update Account',
          updated: 'Account updated successfully',
        },
      },
    },
    delete: {
      title: 'Delete Account',
      description: 'Permanently delete your account and all associated data.',
      confirm: 'Are you sure you want to delete your account? This action is irreversible.',
      form: {
        password: {
          label: 'Password',
          placeholder: 'Enter your password',
        },
        action: {
          delete: 'Delete Account',
          deleted: 'Account deleted successfully',
        },
      },
    },
    appearance: {
      title: 'Appearance',
      description: 'Customize your experience with these settings.',
      form: {
        theme: {
          label: 'Theme',
        },
        i18n: {
          label: 'Language',
        },
      },
    },
    changePassword: {
      title: 'Change Password',
      description: 'Update your password to keep your account secure.',
      form: {
        currentPassword: {
          label: 'Current Password',
          placeholder: 'Enter your current password',
        },
        newPassword: {
          label: 'New Password',
          placeholder: 'Enter your new password',
        },
        confirmPassword: {
          label: 'Confirm Password',
          placeholder: 'Enter your new password again',
        },
        action: {
          change: 'Change Password',
          changed: 'Password changed successfully',
        },
      },
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
      viewAll: 'View All',
      add: 'Add a new project',
    },
    create: {
      title: 'Create a new project',
      name: 'Project Name',
      action: 'Create Project',
    },
    greeting: {
      title: 'Create your first project',
      description: 'Get started by creating a new project.',
    },
    links: {
      title: 'Links',
    },
    analytics: {
      title: 'Analytics',
    },
    events: {
      title: 'Events',
    },
    settings: {
      title: 'Settings',
      general: {
        title: 'General',
        description: 'Update your project details.',
      },
      members: {
        title: 'Members',
        description: 'Manage your project members.',
      },
      tags: {
        title: 'Tags',
        description: 'Manage your project tags.',
      },
    },
  },
}
