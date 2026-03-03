// js/app.js
function initApp() {
  i18n.init();
  router.register('/', renderHomePage);
  router.register('/phase/:phaseId', renderPhasePage);
  router.register('/tutorial/:tutorialId', renderTutorialPage);
  
  router.start();
}

function renderHomePage() {
  document.getElementById('header').innerHTML = UI.renderHeader();
  document.getElementById('main-content').innerHTML = UI.renderPhaseMap();
  document.getElementById('footer').innerHTML = '';
}

function renderPhasePage() {
  const path = window.location.pathname;
  const match = path.match(/\/phase\/(.+)/);
  const phaseId = match ? match[1] : null;
  
  document.getElementById('header').innerHTML = UI.renderHeader();
  document.getElementById('main-content').innerHTML = UI.renderTutorialList(phaseId);
  document.getElementById('footer').innerHTML = '';
}

function renderTutorialPage() {
  const path = window.location.pathname;
  const match = path.match(/\/tutorial\/(.+)/);
  const tutorialId = match ? match[1] : null;
  
  document.getElementById('header').innerHTML = UI.renderHeader();
  document.getElementById('main-content').innerHTML = UI.renderTutorial(tutorialId);
  document.getElementById('footer').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', initApp);
