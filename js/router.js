class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
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
    history.pushState(null, null, path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const handler = this.routes[path] || this.routes['/'];
    
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
