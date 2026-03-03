const UI = {
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
            <span class="stat-label">积分</span>
          </div>
          <div class="stat">
            <span class="stat-icon">📊</span>
            <span class="stat-value">${skillLevel}</span>
            <span class="stat-label">技能等级</span>
          </div>
          <button class="btn btn-icon" onclick="UI.showAchievements()" title="成就">
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
          <span class="lock-text">完成 ${phase.unlockRequirement} 个教程解锁</span>
        </div>
      `;
    } else if (progress.total === 0) {
      statusContent = `
        <div class="phase-status">
          <span class="coming-soon">即将推出</span>
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
          <h3 class="total-progress-title">总体进度</h3>
          <div class="progress-bar progress-bar-large">
            <div class="progress-fill" style="width: ${totalProgress.percentage}%"></div>
          </div>
          <p class="total-progress-text">
            ${totalProgress.completed} / ${totalProgress.total} 教程完成 (${totalProgress.percentage}%)
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
          <p>此阶段尚未解锁</p>
          <p class="hint">完成 ${phase.unlockRequirement} 个教程来解锁</p>
        </div>
      `;
    }
    
    if (phase.tutorials.length === 0) {
      return `
        <div class="empty-state">
          <span class="empty-icon">📚</span>
          <p>教程即将推出</p>
        </div>
      `;
    }
    
    const tutorials = phase.tutorials.map(tutorial => {
      const isCompleted = progressManager.isCompleted(tutorial.id);
      const statusClass = isCompleted ? 'tutorial-item completed' : 'tutorial-item';
      const statusIcon = isCompleted ? '✅' : '📖';
      
      return `
        <div class="${statusClass}" onclick="UI.showTutorial('${tutorial.id}')">
          <div class="tutorial-status">${statusIcon}</div>
          <div class="tutorial-info">
            <h4 class="tutorial-title">${tutorial.title}</h4>
            <p class="tutorial-author">作者: ${tutorial.author}</p>
          </div>
          <div class="tutorial-points">
            <span class="points-value">${tutorial.points}</span>
            <span class="points-label">积分</span>
          </div>
        </div>
      `;
    }).join('');
    
    return `
      <div class="tutorial-list">
        <div class="tutorial-list-header">
          <button class="btn btn-back" onclick="UI.showHome()">← 返回</button>
          <h2 class="phase-title-large">${phase.icon} ${phase.title}</h2>
          <p class="phase-subtitle-large">${phase.subtitle}</p>
        </div>
        <div class="tutorials">
          ${tutorials}
        </div>
      </div>
    `;
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
    
    let completeButton = '';
    if (!isCompleted) {
      completeButton = `
        <button class="btn btn-success btn-large" onclick="UI.completeTutorial('${tutorialId}')">
          ✅ 完成教程 (+${tutorial.points} 积分)
        </button>
      `;
    } else {
      completeButton = `
        <div class="completed-badge">
          ✅ 已完成
        </div>
      `;
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
          <h3 class="faq-title">常见问题</h3>
          ${faqItems}
        </div>
      `;
    }
    
    return `
      <div class="tutorial">
        <div class="tutorial-header">
          <button class="btn btn-back" onclick="UI.showPhase('${phaseId}')">← 返回</button>
          <div class="tutorial-meta">
            <span class="tutorial-phase">${phase.icon} ${phase.title}</span>
          </div>
        </div>
        
        <article class="tutorial-content">
          <h1 class="tutorial-main-title">${tutorial.title}</h1>
          <p class="tutorial-author-line">作者: ${tutorial.author}</p>
          
          <div class="tutorial-body">
            ${tutorial.content}
          </div>
          
          ${faqSection}
          
          <div class="tutorial-footer">
            ${completeButton}
          </div>
        </article>
      </div>
    `;
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
          
          <h2 class="achievements-title">🏆 成就</h2>
          
          <div class="achievements-stats">
            <div class="stat-card">
              <span class="stat-number">${earnedCount}/${totalCount}</span>
              <span class="stat-desc">徽章获得</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${completedTutorials}</span>
              <span class="stat-desc">教程完成</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${totalPoints}</span>
              <span class="stat-desc">总积分</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">${skillLevel}</span>
              <span class="stat-desc">技能等级</span>
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
