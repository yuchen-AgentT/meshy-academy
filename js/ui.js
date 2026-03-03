const UI = {
  phaseMedalColors: {
    phase1: { color: '#CD7F32', name: 'Bronze', icon: '🥉' },
    phase2: { color: '#C0C0C0', name: 'Silver', icon: '🥈' },
    phase3: { color: '#9B59B6', name: 'Purple', icon: '💜' },
    phase4: { color: '#FFD700', name: 'Gold', icon: '🥇' },
    phase5: { color: '#E74C3C', name: 'Red', icon: '🔴' }
  },

  renderHeader() {
    const points = progressManager.progress.totalPoints;
    const skillLevel = progressManager.progress.skillLevel;
    
    return `
      <header class="header">
        <div class="logo">
          <span class="logo-icon">🎓</span>
          <span class="logo-text">Meshy Academy</span>
        </div>
        <div class="stats">
          <div class="stat">
            <span class="stat-icon">⭐</span>
            <span class="stat-value">${points}</span>
            <span class="stat-label">Points</span>
          </div>
          <div class="stat">
            <span class="stat-icon">📊</span>
            <span class="stat-value">${skillLevel}</span>
            <span class="stat-label">Skill</span>
          </div>
          <button class="btn btn-icon" onclick="UI.showAchievements()" title="Achievements">
            🏆
          </button>
        </div>
      </header>
    `;
  },

  renderPhaseCard(phaseId) {
    const phase = PHASES[phaseId];
    if (!phase) return '';
    
    const isUnlocked = progressManager.isPhaseUnlocked(phaseId);
    const progress = progressManager.getPhaseProgress(phaseId);
    
    const cardClass = isUnlocked ? 'phase-card' : 'phase-card phase-locked';
    
    let statusContent = '';
    if (!isUnlocked) {
      statusContent = `
        <div class="phase-status">
          <span class="lock-icon">🔒</span>
          <span class="lock-text">Complete ${phase.unlockRequirement} tutorials to unlock</span>
        </div>
      `;
    } else if (progress.total === 0) {
      statusContent = `
        <div class="phase-status">
          <span class="coming-soon">Coming Soon</span>
        </div>
      `;
    } else {
      statusContent = `
        <div class="phase-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress.percentage}%"></div>
          </div>
          <span class="progress-text">${progress.completed}/${progress.total}</span>
        </div>
      `;
    }
    
    const clickHandler = isUnlocked && progress.total > 0 
      ? `onclick="UI.showPhase('${phaseId}')"` 
      : '';
    
    return `
      <div class="${cardClass}" ${clickHandler}>
        <div class="phase-icon">${phase.icon}</div>
        <h3 class="phase-title">${phase.title}</h3>
        <p class="phase-subtitle">${phase.subtitle}</p>
        ${statusContent}
      </div>
    `;
  },

  renderPhaseMap() {
    const totalProgress = progressManager.getTotalProgress();
    
    const phaseCards = Object.keys(PHASES)
      .map(phaseId => this.renderPhaseCard(phaseId))
      .join('');
    
    return `
      <div class="phase-map">
        <div class="phase-grid">
          ${phaseCards}
        </div>
        <div class="total-progress">
          <h3 class="total-progress-title">Overall Progress</h3>
          <div class="progress-bar progress-bar-large">
            <div class="progress-fill" style="width: ${totalProgress.percentage}%"></div>
          </div>
          <p class="total-progress-text">
            ${totalProgress.completed} / ${totalProgress.total} tutorials completed (${totalProgress.percentage}%)
          </p>
        </div>
      </div>
    `;
  },

  renderTutorialList(phaseId) {
    const phase = PHASES[phaseId];
    if (!phase) return '<p class="error">Phase not found</p>';
    
    const isUnlocked = progressManager.isPhaseUnlocked(phaseId);
    if (!isUnlocked) {
      return `
        <div class="locked-message">
          <span class="lock-icon-large">🔒</span>
          <p>This phase is locked</p>
          <p class="hint">Complete ${phase.unlockRequirement} tutorials to unlock</p>
        </div>
      `;
    }
    
    if (phase.tutorials.length === 0) {
      return `
        <div class="empty-state">
          <span class="empty-icon">📚</span>
          <p>Tutorials coming soon</p>
        </div>
      `;
    }
    
    const tutorials = phase.tutorials.map((tutorial, index) => {
      const isCompleted = progressManager.isCompleted(tutorial.id);
      const isTutorialUnlocked = progressManager.isTutorialUnlocked(tutorial.id, phaseId);
      
      let statusClass = 'tutorial-item';
      let statusIcon = '📖';
      let clickHandler = `onclick="UI.showTutorial('${tutorial.id}')"`;
      
      if (isCompleted) {
        statusClass += ' completed';
        statusIcon = '✅';
      } else if (!isTutorialUnlocked) {
        statusClass += ' locked';
        statusIcon = '🔒';
        clickHandler = '';
      }
      
      return `
        <div class="${statusClass}" ${clickHandler}>
          <div class="tutorial-status">${statusIcon}</div>
          <div class="tutorial-info">
            <span class="tutorial-ep">${tutorial.shortTitle}</span>
            <h4 class="tutorial-title">${tutorial.title}</h4>
            <p class="tutorial-author">Author: ${tutorial.author}</p>
          </div>
          <div class="tutorial-points">
            <span class="points-value">${tutorial.points}</span>
            <span class="points-label">Points</span>
          </div>
        </div>
      `;
    }).join('');
    
    return `
      <div class="tutorial-list">
        <div class="tutorial-list-header">
          <button class="btn btn-back" onclick="UI.showHome()">← Back</button>
          <h2 class="phase-title-large">${phase.icon} ${phase.title}</h2>
          <p class="phase-subtitle-large">${phase.subtitle}</p>
        </div>
        <div class="tutorials">
          ${tutorials}
        </div>
      </div>
    `;
  },

  getAdjacentTutorials(tutorialId) {
    let allTutorials = [];
    let currentIndex = -1;
    
    for (const phaseId of Object.keys(PHASES)) {
      const phase = PHASES[phaseId];
      for (let i = 0; i < phase.tutorials.length; i++) {
        allTutorials.push({
          id: phase.tutorials[i].id,
          phaseId: phaseId,
          title: phase.tutorials[i].title,
          shortTitle: phase.tutorials[i].shortTitle,
          isLastInPhase: i === phase.tutorials.length - 1
        });
        if (phase.tutorials[i].id === tutorialId) {
          currentIndex = allTutorials.length - 1;
        }
      }
    }
    
    const current = allTutorials[currentIndex];
    const nextTutorial = currentIndex < allTutorials.length - 1 ? allTutorials[currentIndex + 1] : null;
    
    return {
      prev: currentIndex > 0 ? allTutorials[currentIndex - 1] : null,
      next: nextTutorial && !current.isLastInPhase ? nextTutorial : null,
      isLastInPhase: current ? current.isLastInPhase : false
    };
  },

  renderTutorial(tutorialId) {
    let tutorial = null;
    let phaseId = null;
    
    for (const pid of Object.keys(PHASES)) {
      const found = PHASES[pid].tutorials.find(t => t.id === tutorialId);
      if (found) {
        tutorial = found;
        phaseId = pid;
        break;
      }
    }
    
    if (!tutorial) {
      return '<p class="error">Tutorial not found</p>';
    }
    
    const isCompleted = progressManager.isCompleted(tutorialId);
    const phase = PHASES[phaseId];
    const adjacent = this.getAdjacentTutorials(tutorialId);
    
    let statusBadge = '';
    if (isCompleted) {
      statusBadge = `<span class="status-badge completed">✅ Completed</span>`;
    }
    
    let faqSection = '';
    if (tutorial.faq && tutorial.faq.length > 0) {
      const faqItems = tutorial.faq.map((item, index) => `
        <div class="faq-item">
          <button class="faq-question" onclick="UI.toggleFaq(${index})">
            <span class="faq-icon">❓</span>
            <span>${item.q}</span>
            <span class="faq-toggle">+</span>
          </button>
          <div class="faq-answer" id="faq-${index}">
            <p>${item.a}</p>
          </div>
        </div>
      `).join('');
      
      faqSection = `
        <div class="faq-section">
          <h3 class="faq-title">FAQ</h3>
          ${faqItems}
        </div>
      `;
    }
    
    let navButtons = '<div class="tutorial-nav-buttons">';
    
    if (adjacent.prev) {
      navButtons += `
        <button class="btn btn-nav btn-prev" onclick="UI.navigateToTutorial('${adjacent.prev.id}')">
          <span class="nav-arrow">←</span>
          <span class="nav-text">
            <span class="nav-label">Previous</span>
            <span class="nav-title">${adjacent.prev.shortTitle}</span>
          </span>
        </button>
      `;
    } else {
      navButtons += '<div class="btn-nav-placeholder"></div>';
    }
    
    if (adjacent.next) {
      navButtons += `
        <button class="btn btn-nav btn-next" onclick="UI.goToNextTutorial('${tutorialId}', '${adjacent.next.id}')">
          <span class="nav-text">
            <span class="nav-label">Next</span>
            <span class="nav-title">${adjacent.next.shortTitle}</span>
          </span>
          <span class="nav-arrow">→</span>
        </button>
      `;
    } else {
      navButtons += `
        <button class="btn btn-nav btn-next" onclick="UI.completePhase('${tutorialId}', '${phaseId}')">
          <span class="nav-text">
            <span class="nav-label">Complete Phase</span>
            <span class="nav-title">${phase.icon} ${phase.title}</span>
          </span>
          <span class="nav-arrow">✓</span>
        </button>
      `;
    }
    
    navButtons += '</div>';
    
    return `
      <div class="tutorial">
        <div class="tutorial-header">
          <button class="btn btn-back" onclick="UI.showPhase('${phaseId}')">← Back</button>
          <div class="tutorial-meta">
            <span class="tutorial-phase">${phase.icon} ${phase.title}</span>
            ${statusBadge}
          </div>
        </div>
        
        <article class="tutorial-content">
          <div class="tutorial-short-title">${tutorial.shortTitle}</div>
          <h1 class="tutorial-main-title">${tutorial.title}</h1>
          <p class="tutorial-author-line">Author: ${tutorial.author}</p>
          
          <div class="tutorial-body">
            ${tutorial.content}
          </div>
          
          ${faqSection}
          
          <div class="tutorial-footer">
            ${navButtons}
          </div>
        </article>
      </div>
    `;
  },

  navigateToTutorial(tutorialId) {
    router.navigate(`/tutorial/${tutorialId}`);
  },

  goToNextTutorial(currentId, nextId) {
    let tutorial = null;
    
    for (const pid of Object.keys(PHASES)) {
      const found = PHASES[pid].tutorials.find(t => t.id === currentId);
      if (found) {
        tutorial = found;
        break;
      }
    }
    
    if (tutorial && !progressManager.isCompleted(currentId)) {
      progressManager.completeTutorial(currentId, tutorial.points, tutorial.skillBonus || 0);
      this.updateHeader();
    }
    
    router.navigate(`/tutorial/${nextId}`);
  },

  completePhase(tutorialId, phaseId) {
    let tutorial = null;
    for (const pid of Object.keys(PHASES)) {
      const found = PHASES[pid].tutorials.find(t => t.id === tutorialId);
      if (found) {
        tutorial = found;
        break;
      }
    }
    
    if (tutorial && !progressManager.isCompleted(tutorialId)) {
      progressManager.completeTutorial(tutorialId, tutorial.points, tutorial.skillBonus || 0);
      this.updateHeader();
    }
    
    router.navigate('/');
  },

  renderAchievements() {
    const badges = BADGES.map(badge => {
      const hasBadge = progressManager.hasBadge(badge.id);
      const badgeClass = hasBadge ? 'badge earned' : 'badge locked';
      
      return `
        <div class="${badgeClass}">
          <div class="badge-icon">${badge.icon}</div>
          <div class="badge-name">${badge.name}</div>
          ${hasBadge ? '<div class="badge-check">✓</div>' : ''}
        </div>
      `;
    }).join('');
    
    const earnedCount = progressManager.progress.badges.length;
    const totalCount = BADGES.length;
    
    const completedTutorials = progressManager.progress.completedTutorials.length;
    const totalPoints = progressManager.progress.totalPoints;
    const skillLevel = progressManager.progress.skillLevel;
    
    return `
      <div class="achievements-modal" onclick="UI.closeModal(event)">
        <div class="achievements-content" onclick="event.stopPropagation()">
          <button class="btn btn-close" onclick="UI.closeModal()">✕</button>
          
          <h2 class="achievements-title">🏆 Achievements</h2>
          
          <div class="achievements-stats">
            <div class="stat-card">
              <span class="stat-number">${earnedCount}/${totalCount}</span>
              <span class="stat-desc">Badges</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${completedTutorials}</span>
              <span class="stat-desc">Completed</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${totalPoints}</span>
              <span class="stat-desc">Points</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${skillLevel}</span>
              <span class="stat-desc">Skill Level</span>
            </div>
          </div>
          
          <div class="badges-grid">
            ${badges}
          </div>
        </div>
      </div>
    `;
  },

  showHome() {
    router.navigate('/');
  },

  showPhase(phaseId) {
    router.navigate(`/phase/${phaseId}`);
  },

  showTutorial(tutorialId) {
    router.navigate(`/tutorial/${tutorialId}`);
  },

  showAchievements() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.innerHTML = this.renderAchievements();
      modal.classList.add('active');
    }
  },

  closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('active');
      modal.innerHTML = '';
    }
  },

  completeTutorial(tutorialId) {
    let tutorial = null;
    for (const phaseId of Object.keys(PHASES)) {
      const found = PHASES[phaseId].tutorials.find(t => t.id === tutorialId);
      if (found) {
        tutorial = found;
        break;
      }
    }
    
    if (!tutorial) return;
    
    const completed = progressManager.completeTutorial(
      tutorialId,
      tutorial.points,
      tutorial.skillBonus || 0
    );
    
    if (completed) {
      this.showTutorial(tutorialId);
      this.updateHeader();
    }
  },

  updateHeader() {
    const header = document.getElementById('header');
    if (header) {
      header.innerHTML = this.renderHeader();
    }
  },

  toggleFaq(index) {
    const answer = document.getElementById(`faq-${index}`);
    if (answer) {
      answer.classList.toggle('open');
    }
  }
};
