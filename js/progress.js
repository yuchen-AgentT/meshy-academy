// js/progress.js
class ProgressManager {
  constructor() {
    this.storageKey = 'meshy_academy_progress';
    this.version = '2.0';
    this.progress = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.version !== this.version) {
          console.log('Version mismatch, resetting progress');
          return this.getDefaultProgress();
        }
        return data;
      }
    } catch (e) {
      console.warn('Failed to load progress:', e);
    }
    return this.getDefaultProgress();
  }

  getDefaultProgress() {
    return {
      version: this.version,
      totalPoints: 0,
      skillLevel: 0,
      completedTutorials: [],
      unlockedPhases: ['phase1'],
      badges: [],
      certificates: []
    };
  }

  save() {
    this.progress.version = this.version;
    localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
  }

  completeTutorial(tutorialId, points, skillBonus) {
    if (this.progress.completedTutorials.includes(tutorialId)) {
      return false;
    }
    
    this.progress.completedTutorials.push(tutorialId);
    this.progress.totalPoints += points;
    this.progress.skillLevel += skillBonus;
    
    this.checkPhaseUnlocks();
    this.checkBadges();
    this.save();
    
    return true;
  }

  isCompleted(tutorialId) {
    return this.progress.completedTutorials.includes(tutorialId);
  }

  getPhaseProgress(phaseId) {
    const phase = PHASES[phaseId];
    if (!phase) return { completed: 0, total: 0, percentage: 0 };
    
    const completed = phase.tutorials.filter(t => 
      this.progress.completedTutorials.includes(t.id)
    ).length;
    
    return {
      completed,
      total: phase.tutorials.length,
      percentage: phase.tutorials.length > 0 
        ? Math.round((completed / phase.tutorials.length) * 100) 
        : 0
    };
  }

  getTotalProgress() {
    let total = 0;
    let completed = 0;
    
    Object.keys(PHASES).forEach(phaseId => {
      const phase = PHASES[phaseId];
      total += phase.tutorials.length;
      completed += phase.tutorials.filter(t => 
        this.progress.completedTutorials.includes(t.id)
      ).length;
    });
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }

  checkPhaseUnlocks() {
    let totalCompleted = 0;
    
    const phaseOrder = ['phase1', 'phase2', 'phase3', 'phase4', 'phase5'];
    
    phaseOrder.forEach(phaseId => {
      const threshold = UNLOCK_THRESHOLDS[phaseId];
      
      if (totalCompleted >= threshold && !this.progress.unlockedPhases.includes(phaseId)) {
        this.progress.unlockedPhases.push(phaseId);
      }
      
      const phase = PHASES[phaseId];
      totalCompleted += phase.tutorials.filter(t => 
        this.progress.completedTutorials.includes(t.id)
      ).length;
    });
  }

  isPhaseUnlocked(phaseId) {
    return this.progress.unlockedPhases.includes(phaseId);
  }

  isTutorialUnlocked(tutorialId, phaseId) {
    const phase = PHASES[phaseId];
    if (!phase) return false;
    
    const tutorialIndex = phase.tutorials.findIndex(t => t.id === tutorialId);
    if (tutorialIndex === -1) return false;
    
    if (tutorialIndex === 0) {
      return this.isPhaseUnlocked(phaseId);
    }
    
    const prevTutorialId = phase.tutorials[tutorialIndex - 1].id;
    return this.isCompleted(prevTutorialId);
  }

  isPhaseCompleted(phaseId) {
    const progress = this.getPhaseProgress(phaseId);
    return progress.total > 0 && progress.completed === progress.total;
  }

  checkBadges() {
    Object.keys(PHASES).forEach(phaseId => {
      const progress = this.getPhaseProgress(phaseId);
      if (progress.completed === progress.total && progress.total > 0) {
        const badge = BADGES.find(b => b.phase === phaseId);
        if (badge && !this.progress.badges.includes(badge.id)) {
          this.progress.badges.push(badge.id);
        }
      }
    });
    
    const totalProgress = this.getTotalProgress();
    if (totalProgress.completed === totalProgress.total && totalProgress.total > 0) {
      const masterBadge = BADGES.find(b => b.phase === 'all');
      if (masterBadge && !this.progress.badges.includes(masterBadge.id)) {
        this.progress.badges.push(masterBadge.id);
      }
    }
  }

  hasBadge(badgeId) {
    return this.progress.badges.includes(badgeId);
  }

  reset() {
    this.progress = {
      totalPoints: 0,
      skillLevel: 0,
      completedTutorials: [],
      unlockedPhases: ['phase1'],
      badges: [],
      certificates: []
    };
    this.save();
  }
}

const progressManager = new ProgressManager();
