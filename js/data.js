// js/data.js
const PHASES = {
  phase1: {
    id: 'phase1',
    title: 'The Launchpad',
    subtitle: '新手入门必备',
    icon: '🚀',
    unlockRequirement: 0,
    tutorials: [
      {
        id: 'phase1-ep01',
        title: '如何选择第一台 3D 打印机？',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <h2>选择第一台 3D 打印机</h2>
          <p>选择第一台 3D 打印机可能让人感到困惑。本教程将帮助你了解关键因素。</p>
          <h3>关键考虑因素</h3>
          <ul>
            <li><strong>预算</strong>：入门级 FDM 打印机通常在 $200-500 之间</li>
            <li><strong>打印体积</strong>：决定你能打印多大的模型</li>
            <li><strong>易用性</strong>：自动调平、 touchscreen 等功能</li>
            <li><strong>社区支持</strong>：活跃的社区意味着更多帮助</li>
          </ul>
          <h3>推荐品牌</h3>
          <p>Bambu Lab、Creality、Prusa 都是不错的选择。</p>
        `,
        faq: [
          { q: '新手应该选择 FDM 还是树脂打印机？', a: '推荐新手从 FDM 打印机开始，操作更简单，成本更低，且适合打印较大的模型。' },
          { q: '预算 $300 能买到好的入门打印机吗？', a: '可以。Creality Ender 3 系列、Anycubic Kobra 等都是性价比很高的选择。' }
        ]
      },
      {
        id: 'phase1-ep02',
        title: '3D 打印安全须知：烟雾和防火知识',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <h2>3D 打印安全须知</h2>
          <p>安全是 3D 打印的第一要务。了解潜在风险，保护自己和家人。</p>
          <h3>烟雾与通风</h3>
          <ul>
            <li>PLA 打印产生的烟雾较少，但保持通风仍很重要</li>
            <li>ABS、ASA 等材料需要更好的通风或封闭式打印机</li>
            <li>考虑使用空气净化器或外排系统</li>
          </ul>
          <h3>防火安全</h3>
          <ul>
            <li>不要让打印机无人值守长时间运行</li>
            <li>使用烟雾报警器</li>
            <li>确保电源线和插头完好无损</li>
            <li>考虑使用防火垫</li>
          </ul>
        `,
        faq: [
          { q: 'PLA 打印需要特殊通风吗？', a: 'PLA 相对安全，在通风良好的房间即可。但如果打印量大，建议增加通风。' },
          { q: '可以通宵打印吗？', a: '虽然有很多人这样做，但不推荐无人值守长时间打印。使用定时插座或监控摄像头可以降低风险。' }
        ]
      },
      {
        id: 'phase1-ep03',
        title: '术语解码器：这些奇怪词汇是什么意思？',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <h2>3D 打印术语速查</h2>
          <table>
            <tr><th>术语</th><th>解释</th></tr>
            <tr><td>FDM</td><td>Fused Deposition Modeling，熔融沉积成型，最常见的 3D 打印技术</td></tr>
            <tr><td>STL</td><td>Standard Tessellation Language，3D 模型文件格式</td></tr>
            <tr><td>Slicer</td><td>切片软件，将 3D 模型转换为打印机指令</td></tr>
            <tr><td>Bed Leveling</td><td>热床调平，确保喷嘴与打印床距离均匀</td></tr>
            <tr><td>Layer Height</td><td>层高，每层打印的厚度，影响精度和时间</td></tr>
            <tr><td>Infill</td><td>填充，模型内部的支撑结构</td></tr>
            <tr><td>Support</td><td>支撑，用于悬空部分的临时结构</td></tr>
            <tr><td>Skirt/Brim</td><td>裙边/帽檐，打印前的预挤出线</td></tr>
          </table>
        `,
        faq: [
          { q: 'STL 和 OBJ 格式有什么区别？', a: 'STL 只包含几何形状，OBJ 可以包含颜色和纹理。3D 打印常用 STL。' },
          { q: '填充率越高越好吗？', a: '不一定。20-30% 填充率已足够大多数用途。更高的填充增加时间和材料，但不一定增加强度。' }
        ]
      },
      {
        id: 'phase1-ep04',
        title: 'Day 1 检查清单：成功完成首次打印',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <h2>首次打印检查清单</h2>
          <h3>硬件准备</h3>
          <ul>
            <li>✅ 打印机已正确组装</li>
            <li>✅ 热床已调平</li>
            <li>✅ 喷嘴无堵塞</li>
            <li>✅ 耗材已正确加载</li>
          </ul>
          <h3>软件准备</h3>
          <ul>
            <li>✅ 切片软件已安装</li>
            <li>✅ 打印机配置文件已选择</li>
            <li>✅ SD 卡或网络传输已就绪</li>
          </ul>
          <h3>首次打印建议</h3>
          <ul>
            <li>选择简单的测试模型（如立方体、Benchy）</li>
            <li>使用默认设置，不要急于调整</li>
            <li>全程观察，了解打印过程</li>
          </ul>
        `,
        faq: [
          { q: '第一次打印失败了怎么办？', a: '99% 的问题是热床脏了或 Z-offset 不对。清洁热床，重新调平，再试一次。' },
          { q: '推荐什么作为第一次打印？', a: '3D Benchy 是经典的测试模型，可以测试多种打印特性。' }
        ]
      },
      {
        id: 'phase1-ep05',
        title: '必备工具：每个 3D 打印套件里需要什么？',
        author: 'Xinyi Li',
        points: 20,
        skillBonus: 0,
        content: `
          <h2>3D 打印必备工具清单</h2>
          <h3>基础工具</h3>
          <ul>
            <li><strong>铲刀</strong>：从热床上取下打印件</li>
            <li><strong>斜口钳</strong>：剪断耗材、移除支撑</li>
            <li><strong>镊子</strong>：清理喷嘴、精细操作</li>
            <li><strong>卡尺</strong>：测量尺寸</li>
          </ul>
          <h3>进阶工具</h3>
          <ul>
            <li><strong>热床清洁剂</strong>：异丙醇、无绒布</li>
            <li><strong>胶棒/美纹纸</strong>：增强附着力</li>
            <li><strong>通针</strong>：清理堵塞的喷嘴</li>
            <li><strong>耗材干燥箱</strong>：存储耗材</li>
          </ul>
          <h3>安全用品</h3>
          <ul>
            <li>耐热手套</li>
            <li>护目镜（处理树脂时）</li>
            <li>烟雾报警器</li>
          </ul>
        `,
        faq: [
          { q: '这些工具可以在哪里买到？', a: 'Amazon、淘宝都有套装出售。也可以单独购买。' },
          { q: '必须买耗材干燥箱吗？', a: '不是必须，但如果你住在潮湿地区或使用 PETG/ABS，强烈推荐。' }
        ]
      }
    ]
  },
  phase2: {
    id: 'phase2',
    title: 'AI-Powered Modeling',
    subtitle: 'Meshy 核心功能',
    icon: '🤖',
    unlockRequirement: 3,
    tutorials: [
      {
        id: 'phase2-ep01',
        title: 'Meshy 如何改变非设计师的游戏规则？',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>AI 3D 建模的革命</h2>
          <p>Meshy 让任何人都能创建 3D 模型，无需专业设计技能。</p>
          <h3>传统建模 vs AI 建模</h3>
          <table>
            <tr><th>传统建模</th><th>Meshy AI</th></tr>
            <tr><td>学习周期：数月到数年</td><td>学习周期：几分钟</td></tr>
            <tr><td>需要空间思维</td><td>只需要描述或图片</td></tr>
            <tr><td>软件成本高</td><td>免费或低成本</td></tr>
          </table>
          <h3>Meshy 的核心能力</h3>
          <ul>
            <li><strong>Text to 3D</strong>：用文字描述生成模型</li>
            <li><strong>Image to 3D</strong>：从图片创建模型</li>
            <li><strong>AI Texturing</strong>：为模型添加纹理</li>
            <li><strong>AI Animation</strong>：让角色动起来</li>
          </ul>
        `,
        faq: [
          { q: 'Meshy 生成的模型质量如何？', a: 'Meshy 6 的可打印输出比例已从 5% 提升至 90% 以上，质量持续提升。' },
          { q: '免费用户有限制吗？', a: 'Meshy 提供免费积分，足够体验核心功能。付费用户获得更多积分和功能。' }
        ]
      }
    ]
  },
  phase3: {
    id: 'phase3',
    title: 'The Juice',
    subtitle: '材料与耗材',
    icon: '🧵',
    unlockRequirement: 7,
    tutorials: []
  },
  phase4: {
    id: 'phase4',
    title: 'The Brain',
    subtitle: '软件与切片',
    icon: '💻',
    unlockRequirement: 11,
    tutorials: []
  },
  phase5: {
    id: 'phase5',
    title: 'The Fix-it Shop',
    subtitle: '问题排查',
    icon: '🛠',
    unlockRequirement: 16,
    tutorials: []
  }
};

const BADGES = [
  { id: 'phase1-complete', name: '新手毕业生', icon: '🎓', phase: 'phase1' },
  { id: 'phase2-complete', name: 'AI 建模师', icon: '🤖', phase: 'phase2' },
  { id: 'phase3-complete', name: '材料大师', icon: '🧵', phase: 'phase3' },
  { id: 'phase4-complete', name: '切片专家', icon: '💻', phase: 'phase4' },
  { id: 'phase5-complete', name: '问题终结者', icon: '🛠', phase: 'phase5' },
  { id: 'all-complete', name: '3D 打印大师', icon: '🏆', phase: 'all' }
];

const UNLOCK_THRESHOLDS = {
  phase1: 0,
  phase2: 3,
  phase3: 7,
  phase4: 11,
  phase5: 16
};
