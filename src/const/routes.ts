type RouteTo = {
  routeName: string;
  key?: string | undefined;
  params?: object | undefined;
  web?:
    | {
        path?: string | undefined;
        as?: string | undefined;
        shallow?: boolean | undefined;
      }
    | undefined;
  native?:
    | {
        screen?: string | undefined;
        navigationBehavior?: 'push' | 'navigate' | undefined;
        isNativeStack?: boolean | undefined;
      }
    | undefined;
};

export const toHome: RouteTo = {
  routeName: 'home',
  web: {
    path: '/',
  },
};

export const toProfile: RouteTo = {
  routeName: 'profile',
  web: {
    path: '/profile',
  },
};

export const toLogin: RouteTo = {
  routeName: 'login',
  web: {
    path: '/login',
  },
};

export const toAbout: RouteTo = {
  routeName: 'about',
  web: {
    path: '/about',
  },
};
