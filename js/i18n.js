const TRANSLATIONS = {
  en: {
    logoText: 'Meshy Academy',
    points: 'Points',
    skill: 'Skill',
    achievements: 'Achievements',
    comingSoon: 'Coming Soon',
    completeTutorialsToUnlock: 'Complete {n} tutorials to unlock',
    overallProgress: 'Overall Progress',
    tutorialsCompleted: 'tutorials completed',
    back: 'Back',
    author: 'Author',
    previous: 'Previous',
    next: 'Next',
    completePhase: 'Complete Phase',
    locked: 'Locked',
    thisPhaseIsLocked: 'This phase is locked',
    tutorialsComingSoon: 'Tutorials coming soon',
    faq: 'FAQ',
    badges: 'Badges',
    completed: 'Completed',
    totalPoints: 'Points',
    skillLevel: 'Skill Level',
    language: 'EN'
  },
  zh: {
    logoText: 'Meshy 学院',
    points: '积分',
    skill: '技能',
    achievements: '成就',
    comingSoon: '即将推出',
    completeTutorialsToUnlock: '完成 {n} 个教程解锁',
    overallProgress: '总体进度',
    tutorialsCompleted: '教程已完成',
    back: '返回',
    author: '作者',
    previous: '上一篇',
    next: '下一篇',
    completePhase: '完成阶段',
    locked: '已锁定',
    thisPhaseIsLocked: '此阶段尚未解锁',
    tutorialsComingSoon: '教程即将推出',
    faq: '常见问题',
    badges: '徽章',
    completed: '已完成',
    totalPoints: '总积分',
    skillLevel: '技能等级',
    language: '中文'
  }
};

const i18n = {
  currentLang: 'en',

  init() {
    const saved = localStorage.getItem('meshy-academy-lang');
    if (saved && TRANSLATIONS[saved]) {
      this.currentLang = saved;
    }
  },

  setLang(lang) {
    if (TRANSLATIONS[lang]) {
      this.currentLang = lang;
      localStorage.setItem('meshy-academy-lang', lang);
      if (typeof UI !== 'undefined' && UI.refresh) {
        UI.refresh();
      }
    }
  },

  toggleLang() {
    const newLang = this.currentLang === 'en' ? 'zh' : 'en';
    this.setLang(newLang);
  },

  t(key, vars = {}) {
    let text = TRANSLATIONS[this.currentLang]?.[key] || TRANSLATIONS['en'][key] || key;
    Object.keys(vars).forEach(k => {
      text = text.replace(`{${k}}`, vars[k]);
    });
    return text;
  },

  getCurrentLangLabel() {
    return TRANSLATIONS[this.currentLang]?.language || 'EN';
  }
};
