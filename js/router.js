class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.basePath = '/meshy-academy';
    
    window.addEventListener('popstate', () => this.handleRoute());
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });
  }

  register(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path) {
    const fullPath = this.basePath + path;
    history.pushState(null, null, fullPath);
    this.handleRoute();
  }

  handleRoute() {
    let path = window.location.pathname;
    
    if (path.startsWith(this.basePath)) {
      path = path.slice(this.basePath.length) || '/';
    }
    
    path = path.replace(/\/$/, '') || '/';
    
    let handler = this.routes[path];
    
    if (!handler) {
      for (const route of Object.keys(this.routes)) {
        if (route.includes(':')) {
          const routeRegex = new RegExp('^' + route.replace(/:[^/]+/g, '([^/]+)') + '$');
          const match = path.match(routeRegex);
          if (match) {
            handler = this.routes[route];
            break;
          }
        }
      }
    }
    
    if (!handler) {
      handler = this.routes['/'];
    }
    
    if (handler) {
      handler();
    }
    
    this.currentRoute = path;
    window.scrollTo(0, 0);
  }

  start() {
    this.handleRoute();
  }
}

const router = new Router();
