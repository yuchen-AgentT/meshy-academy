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
            <li><strong>易用性</strong>：自动调平、触控屏等功能</li>
            <li><strong>社区支持</strong>：活跃的社区意味着更多帮助</li>
          </ul>
          <h3>推荐品牌</h3>
          <p>Bambu Lab、Creality、Prusa 都是不错的选择。</p>
          <h3>FDM vs 树脂打印机</h3>
          <table>
            <tr><th>FDM 打印机</th><th>树脂打印机 (SLA/DLP)</th></tr>
            <tr><td>成本较低，操作简单</td><td>精度高，表面光滑</td></tr>
            <tr><td>适合打印较大模型</td><td>适合打印精细模型</td></tr>
            <tr><td>材料种类多 (PLA, PETG, ABS...)</td><td>后处理复杂，需要清洗固化</td></tr>
          </table>
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
          <h3>材料安全</h3>
          <table>
            <tr><th>材料</th><th>安全注意事项</th></tr>
            <tr><td>PLA</td><td>最安全，烟雾少，适合室内</td></tr>
            <tr><td>PETG</td><td>较安全，轻微烟雾</td></tr>
            <tr><td>ABS/ASA</td><td>需要通风，有刺激性气味</td></tr>
            <tr><td>树脂</td><td>需要手套，避免皮肤接触</td></tr>
          </table>
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
            <tr><td>Z-Offset</td><td>喷嘴与热床之间的距离，影响首层打印</td></tr>
            <tr><td>Layer Height</td><td>层高，每层打印的厚度，影响精度和时间</td></tr>
            <tr><td>Infill</td><td>填充，模型内部的支撑结构</td></tr>
            <tr><td>Support</td><td>支撑，用于悬空部分的临时结构</td></tr>
            <tr><td>Skirt/Brim</td><td>裙边/帽檐，打印前的预挤出线</td></tr>
            <tr><td>Retraction</td><td>回抽，防止拉丝的技术</td></tr>
            <tr><td>Nozzle</td><td>喷嘴，挤出耗材的部件</td></tr>
            <tr><td>Extruder</td><td>挤出机，推送耗材的部件</td></tr>
            <tr><td>Hot End</td><td>热端，加热耗材的部分</td></tr>
            <tr><td>Heated Bed</td><td>热床，加热的打印平台</td></tr>
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
          <h3>常见首次打印问题</h3>
          <table>
            <tr><th>问题</th><th>原因</th><th>解决</th></tr>
            <tr><td>模型不粘床</td><td>热床未调平或太脏</td><td>重新调平，清洁热床</td></tr>
            <tr><td>首层太薄/太厚</td><td>Z-offset 不对</td><td>调整 Z-offset</td></tr>
            <tr><td>耗材不出</td><td>喷嘴堵塞或温度不够</td><td>清理喷嘴，检查温度</td></tr>
          </table>
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
          <h3>适合 3D 打印的工作流</h3>
          <ol>
            <li>使用 Text-to-3D 或 Image-to-3D 生成模型</li>
            <li>下载 STL 或 OBJ 格式</li>
            <li>在切片软件中准备打印</li>
            <li>开始打印！</li>
          </ol>
        `,
        faq: [
          { q: 'Meshy 生成的模型质量如何？', a: 'Meshy 6 的可打印输出比例已从 5% 提升至 90% 以上，质量持续提升。' },
          { q: '免费用户有限制吗？', a: 'Meshy 提供免费积分，足够体验核心功能。付费用户获得更多积分和功能。' }
        ]
      },
      {
        id: 'phase2-ep02',
        title: 'Meshy 可打印性的 Dos and Don\'ts',
        author: 'Xinyi Li',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>Meshy 可打印性指南</h2>
          <h3>✅ Dos - 推荐做法</h3>
          <ul>
            <li><strong>使用清晰的提示词</strong>：描述越具体，结果越好</li>
            <li><strong>选择 Standard 模型类型</strong>：更适合打印</li>
            <li><strong>检查模型厚度</strong>：确保没有过薄的部件</li>
            <li><strong>下载前预览</strong>：检查是否有明显的缺陷</li>
            <li><strong>使用 Meshy 的修复功能</strong>：自动修复常见问题</li>
          </ul>
          <h3>❌ Don'ts - 避免的做法</h3>
          <ul>
            <li><strong>不要生成过于复杂的模型</strong>：细节太多会导致打印失败</li>
            <li><strong>不要忽略悬空部分</strong>：需要添加支撑</li>
            <li><strong>不要使用过低的分辨率</strong>：会影响打印质量</li>
            <li><strong>不要跳过切片预览</strong>：检查是否有问题</li>
          </ul>
          <h3>打印友好型提示词技巧</h3>
          <table>
            <tr><th>不推荐</th><th>推荐</th></tr>
            <tr><td>"一个很酷的角色"</td><td>"一个站立的卡通机器人，简单的几何形状，适合 3D 打印"</td></tr>
            <tr><td>"美丽的花朵"</td><td>"一朵简化的玫瑰花，实心花瓣，无细丝结构"</td></tr>
          </table>
        `,
        faq: [
          { q: 'Meshy 模型需要修复才能打印吗？', a: '建议使用 Meshy 内置的修复功能或切片软件的修复工具，以确保模型可打印。' },
          { q: '如何判断模型是否可打印？', a: '检查模型是否有孔洞、法线方向是否正确、壁厚是否足够。切片软件通常会警告这些问题。' }
        ]
      },
      {
        id: 'phase2-ep03',
        title: 'Text-to-3D 工作流：如何写出好的提示词？',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>Text-to-3D 提示词技巧</h2>
          <h3>提示词结构</h3>
          <p>一个好的提示词包含以下元素：</p>
          <ol>
            <li><strong>主体</strong>：你想要生成什么？</li>
            <li><strong>风格</strong>：写实、卡通、低多边形？</li>
            <li><strong>姿态/姿势</strong>：站立、坐着、A-pose？</li>
            <li><strong>细节</strong>：颜色、材质、配件</li>
            <li><strong>打印友好</strong>：实心、无细丝</li>
          </ol>
          <h3>示例提示词</h3>
          <table>
            <tr><th>场景</th><th>提示词示例</th></tr>
            <tr><td>角色</td><td>"A cute cartoon cat sitting on a ball, simple shapes, solid design, suitable for 3D printing"</td></tr>
            <tr><td>物品</td><td>"A medieval treasure chest with rounded edges, low poly style, solid bottom"</td></tr>
            <tr><td>装饰品</td><td>"A geometric flower vase, minimal design, thick walls, no overhangs"</td></tr>
          </table>
          <h3>提示词优化技巧</h3>
          <ul>
            <li>使用英文提示词效果更好</li>
            <li>添加 "suitable for 3D printing" 或 "solid design"</li>
            <li>避免描述过于复杂的细节</li>
            <li>指定 "standing pose" 或 "A-pose" 用于角色</li>
          </ul>
        `,
        faq: [
          { q: '中文提示词能用吗？', a: 'Meshy 支持中文，但英文提示词通常效果更好。可以使用翻译工具辅助。' },
          { q: '生成的模型不满意怎么办？', a: '调整提示词重新生成，或使用 Image-to-3D 从参考图生成。' }
        ]
      },
      {
        id: 'phase2-ep04',
        title: 'Image-to-3D 工作流：如何选择合适的图片？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>Image-to-3D 图片选择指南</h2>
          <h3>适合的图片类型</h3>
          <ul>
            <li><strong>清晰的前景主体</strong>：背景简洁，主体明确</li>
            <li><strong>单一视角</strong>：正视图效果最好</li>
            <li><strong>良好的光照</strong>：明暗对比清晰</li>
            <li><strong>适中的细节</strong>：不要太复杂也不要太简单</li>
          </ul>
          <h3>不适合的图片类型</h3>
          <ul>
            <li>❌ 背景杂乱的图片</li>
            <li>❌ 多个重叠的物体</li>
            <li>❌ 透视变形严重的图片</li>
            <li>❌ 过于扁平的设计（如 logo）</li>
          </ul>
          <h3>图片准备技巧</h3>
          <ol>
            <li>使用图片编辑工具去除背景</li>
            <li>调整为正方形比例（推荐 1024x1024）</li>
            <li>确保主体居中</li>
            <li>保存为 PNG 或 JPG 格式</li>
          </ol>
        `,
        faq: [
          { q: '透明背景的图片效果更好吗？', a: '是的！透明背景可以帮助 Meshy 更准确地识别主体。' },
          { q: '多角度图片可以一起使用吗？', a: 'Meshy 的 Multi-view 功能支持多角度输入，可以生成更准确的 3D 模型。' }
        ]
      },
      {
        id: 'phase2-ep05',
        title: 'AI 模型修复：如何修复 STL 文件？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>模型修复指南</h2>
          <h3>常见的模型问题</h3>
          <table>
            <tr><th>问题</th><th>描述</th><th>影响</th></tr>
            <tr><td>孔洞</td><td>模型不封闭</td><td>无法正确切片</td></tr>
            <tr><td>法线翻转</td><td>面朝向错误</td><td>打印方向异常</td></tr>
            <tr><td>重叠面</td><td>面相互交叉</td><td>切片错误</td></tr>
            <tr><td>非流形几何</td><td>边被多个面共享</td><td>无法打印</td></tr>
          </table>
          <h3>Meshy 内置修复</h3>
          <p>Meshy 提供自动修复功能，可以处理大多数常见问题。</p>
          <h3>外部修复工具</h3>
          <ul>
            <li><strong>Windows 3D Builder</strong>：免费的简单修复工具</li>
            <li><strong>Meshmixer</strong>：Autodesk 免费，功能强大</li>
            <li><strong>Blender</strong>：免费开源，学习曲线较陡</li>
          </ul>
        `,
        faq: [
          { q: '所有模型都需要修复吗？', a: '不一定。Meshy 6 生成的模型大多数可以直接打印，但建议在切片软件中检查。' },
          { q: '修复会影响模型质量吗？', a: '修复过程可能会轻微改变模型，但通常影响很小。' }
        ]
      },
      {
        id: 'phase2-ep06',
        title: 'AI 纹理：如何为 3D 模型添加纹理？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>AI 纹理生成</h2>
          <h3>什么是 AI 纹理？</h3>
          <p>AI 纹理允许你为现有的 3D 模型自动生成逼真的材质和颜色。</p>
          <h3>纹理生成流程</h3>
          <ol>
            <li>上传或选择一个 3D 模型</li>
            <li>选择 "AI Texturing" 功能</li>
            <li>输入纹理描述提示词</li>
            <li>生成并预览结果</li>
            <li>下载带纹理的模型</li>
          </ol>
          <h3>纹理提示词示例</h3>
          <table>
            <tr><th>模型类型</th><th>纹理提示词</th></tr>
            <tr><td>机器人</td><td>"Metallic silver robot with blue glowing details, sci-fi style"</td></tr>
            <tr><td>角色</td><td>"Cute cartoon character with colorful clothes, soft shading"</td></tr>
            <tr><td>建筑</td><td>"Old stone castle wall, moss and cracks, medieval style"</td></tr>
          </table>
        `,
        faq: [
          { q: '纹理会影响 3D 打印吗？', a: '纹理主要用于数字展示。对于 FDM 打印，颜色需要通过多色打印或后期上色实现。' },
          { q: '可以导出纹理吗？', a: '可以！Meshy 支持导出带纹理的模型，包括 OBJ + MTL + 纹理图。' }
        ]
      },
      {
        id: 'phase2-ep07',
        title: '纹理编辑：如何精细化调整纹理？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>纹理编辑工作流</h2>
          <p>Next - 详细内容即将更新</p>
        `,
        faq: [
          { q: '如何调整纹理细节？', a: 'Next - 即将更新' }
        ]
      },
      {
        id: 'phase2-ep08',
        title: '纹理助手：如何优化纹理提示词？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 10,
        content: `
          <h2>纹理助手功能</h2>
          <p>Next - 详细内容即将更新</p>
        `,
        faq: [
          { q: '纹理助手是什么？', a: 'Next - 即将更新' }
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
    tutorials: [
      {
        id: 'phase3-ep01',
        title: '为什么 90% 的打印应该从 PLA 开始？',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `
          <h2>PLA：最佳入门材料</h2>
          <h3>PLA 的优势</h3>
          <ul>
            <li><strong>易打印</strong>：温度范围宽，不易翘边</li>
            <li><strong>安全</strong>：无毒，烟雾少</li>
            <li><strong>便宜</strong>：最经济的材料选择</li>
            <li><strong>颜色丰富</strong>：多种颜色和效果可选</li>
          </ul>
          <h3>PLA 变体</h3>
          <table>
            <tr><th>类型</th><th>特点</th><th>用途</th></tr>
            <tr><td>PLA Basic</td><td>标准 PLA</td><td>日常打印</td></tr>
            <tr><td>PLA Matte</td><td>哑光表面</td><td>艺术打印</td></tr>
            <tr><td>PLA Silk</td><td>丝绸光泽</td><td>装饰品</td></tr>
            <tr><td>PLA Marble</td><td>大理石纹理</td><td>雕塑、花瓶</td></tr>
          </table>
        `,
        faq: [
          { q: 'PLA 打印温度是多少？', a: '通常 190-220°C，热床 50-60°C。具体参考材料商推荐。' },
          { q: 'PLA 需要热床吗？', a: '不是必须，但强烈推荐。热床可以改善附着力，减少翘边。' }
        ]
      },
      {
        id: 'phase3-ep02',
        title: '特殊 PLA 耗材：Silk、Marble、Wood、夜光怎么打？',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `
          <h2>特殊 PLA 打印指南</h2>
          <h3>PLA Silk（丝绸 PLA）</h3>
          <ul>
            <li>打印温度：200-230°C</li>
            <li>热床温度：50-60°C</li>
            <li>注意：打印速度稍慢，避免拉丝</li>
          </ul>
          <h3>PLA Marble（大理石 PLA）</h3>
          <ul>
            <li>打印温度：200-220°C</li>
            <li>热床温度：50-60°C</li>
          </ul>
          <h3>PLA Wood（木质 PLA）</h3>
          <ul>
            <li>打印温度：190-220°C</li>
            <li>注意：可打磨、可上色，喷嘴磨损较大</li>
          </ul>
          <h3>夜光 PLA</h3>
          <ul>
            <li>打印温度：200-220°C</li>
            <li>注意：需要"充电"（光照）才能发光</li>
          </ul>
        `,
        faq: [
          { q: '特殊 PLA 可以混用吗？', a: '不建议。不同材料特性不同，换料时建议清理喷嘴。' },
          { q: '木质 PLA 会堵塞喷嘴吗？', a: '可能。建议使用 0.6mm 以上喷嘴，定期检查。' }
        ]
      },
      {
        id: 'phase3-ep03',
        title: '什么时候应该从 PLA 升级到 PETG？',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `
          <h2>PETG：PLA 的升级选择</h2>
          <h3>PETG vs PLA</h3>
          <table>
            <tr><th>特性</th><th>PLA</th><th>PETG</th></tr>
            <tr><td>强度</td><td>中等</td><td>更高</td></tr>
            <tr><td>韧性</td><td>脆</td><td>有弹性</td></tr>
            <tr><td>耐热</td><td>~60°C</td><td>~80°C</td></tr>
            <tr><td>打印难度</td><td>简单</td><td>稍难</td></tr>
          </table>
          <h3>PETG 打印设置</h3>
          <ul>
            <li>喷嘴温度：230-250°C</li>
            <li>热床温度：70-80°C</li>
            <li>关闭零件冷却风扇或降低速度</li>
          </ul>
        `,
        faq: [
          { q: 'PETG 更难打印吗？', a: '稍难一些。主要是容易拉丝和翘边。调整好参数后可以获得很好的效果。' },
          { q: '可以用 PETG 打印所有东西吗？', a: '可以，但 PLA 更适合展示类模型，PETG 更适合功能件。' }
        ]
      },
      {
        id: 'phase3-ep04',
        title: '如何干燥潮湿的耗材？',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `
          <h2>耗材干燥指南</h2>
          <h3>潮湿耗材的症状</h3>
          <ul>
            <li>打印时冒泡、发出"滋滋"声</li>
            <li>表面粗糙，有疤痕</li>
            <li>层间附着力下降</li>
          </ul>
          <h3>干燥方法</h3>
          <table>
            <tr><th>方法</th><th>温度</th><th>时间</th></tr>
            <tr><td>烤箱</td><td>45-55°C</td><td>4-6 小时</td></tr>
            <tr><td>食品脱水机</td><td>50°C</td><td>4-6 小时</td></tr>
            <tr><td>专用干燥箱</td><td>按说明</td><td>按说明</td></tr>
          </table>
        `,
        faq: [
          { q: '所有耗材都需要干燥吗？', a: 'PLA 较不敏感，PETG、ABS、尼龙等对湿度更敏感，建议打印前干燥。' },
          { q: '耗材可以多次干燥吗？', a: '可以。但每次加热都会略微影响材料性能，不要过度干燥。' }
        ]
      },
      {
        id: 'phase3-ep05',
        title: '如何减少 3D 打印浪费？',
        author: 'Weihan Yang',
        points: 30,
        skillBonus: 0,
        content: `
          <h2>可持续 3D 打印</h2>
          <h3>减少浪费的方法</h3>
          <ul>
            <li><strong>优化填充</strong>：20-30% 通常足够</li>
            <li><strong>减少支撑</strong>：调整模型方向，使用树形支撑</li>
            <li><strong>正确打印</strong>：减少失败率是最好的节约</li>
            <li><strong>批量打印</strong>：一次打印多个模型减少浪费</li>
          </ul>
          <h3>环保材料选择</h3>
          <ul>
            <li>PLA 是可生物降解的材料</li>
            <li>选择可回收包装的品牌</li>
          </ul>
        `,
        faq: [
          { q: 'PLA 真的环保吗？', a: 'PLA 来自可再生资源，比石油基塑料更环保。但需要工业堆肥条件才能完全降解。' },
          { q: '支持结构可以重复使用吗？', a: '通常不可以。但可以使用可溶解的支撑材料。' }
        ]
      }
    ]
  },
  phase4: {
    id: 'phase4',
    title: 'The Brain',
    subtitle: '软件与切片',
    icon: '💻',
    unlockRequirement: 12,
    tutorials: [
      {
        id: 'phase4-ep01',
        title: '切片入门：3D 打印机如何知道打印什么？',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `
          <h2>切片软件入门</h2>
          <h3>什么是切片？</h3>
          <p>切片软件将 3D 模型（STL/OBJ）转换为打印机可以理解的指令（G-code）。</p>
          <h3>主流切片软件</h3>
          <table>
            <tr><th>软件</th><th>特点</th><th>适合</th></tr>
            <tr><td>Bambu Studio</td><td>Bambu Lab 官方，功能强大</td><td>Bambu 打印机用户</td></tr>
            <tr><td>PrusaSlicer</td><td>免费开源，社区活跃</td><td>所有打印机</td></tr>
            <tr><td>Cura</td><td>最流行，插件丰富</td><td>Ultimaker 和其他</td></tr>
          </table>
          <h3>切片基本流程</h3>
          <ol>
            <li>导入 STL/OBJ 模型</li>
            <li>选择打印机和材料配置</li>
            <li>调整打印参数</li>
            <li>切片生成预览</li>
            <li>导出 G-code 或发送到打印机</li>
          </ol>
        `,
        faq: [
          { q: '切片软件需要学习很久吗？', a: '基础操作很简单，但精通需要时间。建议从默认设置开始，逐步学习高级功能。' },
          { q: '不同切片软件生成的结果一样吗？', a: '不一样。每个软件的切片算法不同，结果可能有差异。建议选择一个深入学习。' }
        ]
      },
      {
        id: 'phase4-ep02',
        title: '配置调优：如何设置切片软件获得最佳效果？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `
          <h2>切片配置详解</h2>
          <h3>关键参数</h3>
          <table>
            <tr><th>参数</th><th>说明</th><th>推荐值</th></tr>
            <tr><td>层高</td><td>每层厚度</td><td>0.2mm（平衡质量和速度）</td></tr>
            <tr><td>填充率</td><td>内部填充密度</td><td>15-30%</td></tr>
            <tr><td>壁厚</td><td>外壁层数</td><td>2-3 层或 0.8-1.2mm</td></tr>
            <tr><td>打印速度</td><td>打印移动速度</td><td>50-100 mm/s</td></tr>
          </table>
          <h3>质量 vs 速度</h3>
          <ul>
            <li><strong>高质量</strong>：低层高（0.1-0.15mm）、慢速、高填充</li>
            <li><strong>快速</strong>：高层高（0.3mm）、快速、低填充</li>
            <li><strong>平衡</strong>：0.2mm 层高、中等速度、20% 填充</li>
          </ul>
        `,
        faq: [
          { q: '如何保存自定义配置？', a: '大多数切片软件支持保存配置文件或创建配置预设。' },
          { q: '不同模型需要不同配置吗？', a: '是的。大型模型可能需要更高填充，精细模型需要更低层高。' }
        ]
      },
      {
        id: 'phase4-ep03',
        title: '支撑结构：如何为复杂模型添加支撑？',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `
          <h2>支撑结构指南</h2>
          <h3>什么时候需要支撑？</h3>
          <p>当模型有悬空部分超过 45° 时，通常需要支撑。</p>
          <h3>支撑类型</h3>
          <table>
            <tr><th>类型</th><th>特点</th><th>适合场景</th></tr>
            <tr><td>普通支撑</td><td>稳定，易拆除</td><td>大多数情况</td></tr>
            <tr><td>树形支撑</td><td>节省材料，表面更光滑</td><td>有机形状模型</td></tr>
            <tr><td>可溶支撑</td><td>可溶解去除</td><td>复杂内部结构</td></tr>
          </table>
          <h3>减少支撑的技巧</h3>
          <ul>
            <li>调整模型打印方向</li>
            <li>设计时考虑打印方向</li>
            <li>使用"桥接"功能</li>
          </ul>
        `,
        faq: [
          { q: '支撑很难拆除怎么办？', a: '增加 Z 距离、降低支撑密度、或使用树形支撑。' },
          { q: '支撑会留下痕迹吗？', a: '会有一些。可以通过打磨、调整设置或使用可溶支撑来减少。' }
        ]
      },
      {
        id: 'phase4-ep04',
        title: '切片软件多色：如何在切片中为模型上色？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `<h2>切片软件多色打印</h2><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '如何在切片软件中添加多色？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep05',
        title: '多色打印：如何将 Meshy 纹理模型变成多色打印？',
        author: 'Molly (Yihan) Sun',
        points: 30,
        skillBonus: 5,
        content: `<h2>Meshy 模型多色打印</h2><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: 'Meshy 纹理可以直接打印吗？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase4-ep06',
        title: '切片技巧：变层高、熨烫、毛绒皮肤、隐藏接缝',
        author: 'Joanne (Xuanmeng) Wang',
        points: 30,
        skillBonus: 5,
        content: `
          <h2>高级切片技巧</h2>
          <h3>变层高 (Variable Layer Height)</h3>
          <p>在平坦区域使用高层高加速打印，在细节区域使用低层高保持质量。</p>
          <h3>熨烫 (Ironing)</h3>
          <p>在顶层表面进行额外的熨烫，使表面更光滑。</p>
          <h3>毛绒皮肤 (Fuzzy Skin)</h3>
          <p>在表面添加随机纹理，隐藏层纹或创造特殊效果。</p>
          <h3>隐藏接缝</h3>
          <table>
            <tr><th>方法</th><th>效果</th></tr>
            <tr><td>随机起点</td><td>接缝随机分布</td></tr>
            <tr><td>对齐接缝</td><td>接缝在一条线上</td></tr>
            <tr><td>后角</td><td>接缝隐藏在角落</td></tr>
          </table>
        `,
        faq: [
          { q: '这些技巧会影响打印时间吗？', a: '是的。熨烫会增加时间，变层高可以减少时间。' },
          { q: '哪个技巧最有用？', a: '变层高最实用，可以在不牺牲质量的情况下加速打印。' }
        ]
      }
    ]
  },
  phase5: {
    id: 'phase5',
    title: 'The Fix-it Shop',
    subtitle: '问题排查',
    icon: '🛠',
    unlockRequirement: 18,
    tutorials: [
      {
        id: 'phase5-ep01',
        title: '首层不均匀：如何修复首层粘贴或接触面积问题？',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `
          <h2>首层问题排查</h2>
          <h3>常见首层问题</h3>
          <table>
            <tr><th>问题</th><th>原因</th><th>解决</th></tr>
            <tr><td>首层太薄</td><td>喷嘴太近</td><td>调高 Z-offset</td></tr>
            <tr><td>首层翘起</td><td>喷嘴太远/热床脏</td><td>调低 Z-offset，清洁热床</td></tr>
            <tr><td>首层线条分离</td><td>温度太低/速度太快</td><td>提高温度，降低首层速度</td></tr>
          </table>
          <h3>Z-Offset 调整方法</h3>
          <p>使用"纸张测试法"：喷嘴与热床之间应该刚好能通过一张纸。</p>
          <h3>小接触面积模型技巧</h3>
          <ul>
            <li>添加 Brim（帽檐）增加接触面积</li>
            <li>使用胶棒或胶水增强附着力</li>
            <li>降低首层速度</li>
          </ul>
        `,
        faq: [
          { q: '每次打印都要调平吗？', a: '如果打印机有自动调平，通常不需要。但建议定期检查。' },
          { q: '什么是"纸张测试"？', a: '将一张纸放在热床上，调整喷嘴高度直到纸张刚好能滑动但有轻微阻力。' }
        ]
      },
      {
        id: 'phase5-ep02',
        title: '模型细节太细：如何修复脆弱或细小部件？',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `
          <h2>细小部件问题</h2>
          <h3>解决方案</h3>
          <table>
            <tr><th>方法</th><th>说明</th></tr>
            <tr><td>放大模型</td><td>如果尺寸允许，打印更大的版本</td></tr>
            <tr><td>降低层高</td><td>0.1-0.12mm 层高可以更好地捕捉细节</td></tr>
            <tr><td>使用更小喷嘴</td><td>0.25mm 或 0.3mm 喷嘴</td></tr>
            <tr><td>降低打印速度</td><td>细小部件需要更慢的速度</td></tr>
          </table>
        `,
        faq: [
          { q: '什么是可打印的最小细节？', a: '通常为喷嘴直径的 2-3 倍。0.4mm 喷嘴最小约 0.8-1.2mm。' },
          { q: '树脂打印更适合细节吗？', a: '是的。树脂打印可以达到更高的精度，适合精细模型。' }
        ]
      },
      {
        id: 'phase5-ep03',
        title: '模型缺乏细节：打印效果不如 3D 预览？',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<h2>细节丢失问题</h2><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '为什么打印效果不如屏幕显示？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep04',
        title: '薄壁问题：如何处理模型薄壁？',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 5,
        content: `<h2>薄壁问题处理</h2><p>Next - 详细内容即将更新</p>`,
        faq: [{ q: '什么是薄壁？', a: 'Next - 即将更新' }]
      },
      {
        id: 'phase5-ep05',
        title: '视觉失败图库：对照照片找到解决方案',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `
          <h2>常见打印失败诊断</h2>
          <table>
            <tr><th>现象</th><th>名称</th><th>原因</th><th>解决</th></tr>
            <tr><td>意大利面状乱丝</td><td>Spaghetti</td><td>模型脱离热床</td><td>检查首层附着力</td></tr>
            <tr><td>层间分离</td><td>层裂</td><td>温度太低/层高太高</td><td>提高温度，降低层高</td></tr>
            <tr><td>表面有洞</td><td>孔洞</td><td>挤出不足</td><td>检查挤出机，增加流量</td></tr>
            <tr><td>顶部没封住</td><td>顶层孔洞</td><td>填充太低/顶层层数不够</td><td>增加顶层层数</td></tr>
          </table>
        `,
        faq: [
          { q: '打印失败了可以恢复吗？', a: '大多数情况下不行。但可以记录失败高度，从头重新打印。' },
          { q: '如何避免长时间打印失败？', a: '先用低质量快速打印一遍测试，确认没问题再用高质量打印。' }
        ]
      },
      {
        id: 'phase5-ep06',
        title: '热床附着与调平：掌握"纸张测试"和完美首层',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `
          <h2>热床调平指南</h2>
          <h3>手动调平步骤</h3>
          <ol>
            <li>预热打印机（喷嘴和热床到打印温度）</li>
            <li>禁用步进电机，移动打印头到四个角</li>
            <li>在每个角使用纸张测试</li>
            <li>调整旋钮直到纸张刚好能通过</li>
          </ol>
          <h3>纸张测试详解</h3>
          <ul>
            <li><strong>太松</strong>：纸张轻松通过 → 喷嘴太高</li>
            <li><strong>刚好</strong>：纸张有轻微阻力但能通过 → 完美</li>
            <li><strong>太紧</strong>：纸张无法通过或撕裂 → 喷嘴太低</li>
          </ul>
        `,
        faq: [
          { q: '多久需要调平一次？', a: '手动调平的机器建议每次打印前检查。自动调平的机器通常可以打印多次后才需要检查。' },
          { q: '热床应该用什么温度？', a: 'PLA: 50-60°C, PETG: 70-80°C, ABS: 100-110°C。' }
        ]
      },
      {
        id: 'phase5-ep07',
        title: '对抗拉丝：如何消除拉丝、渗漏和斑点？',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `
          <h2>拉丝问题解决</h2>
          <h3>解决方案</h3>
          <table>
            <tr><th>设置</th><th>调整建议</th></tr>
            <tr><td>回抽距离</td><td>增加 0.5-1mm</td></tr>
            <tr><td>回抽速度</td><td>30-50 mm/s</td></tr>
            <tr><td>移动速度</td><td>提高移动速度</td></tr>
            <tr><td>温度</td><td>降低 5-10°C</td></tr>
          </table>
        `,
        faq: [
          { q: 'PETG 拉丝严重怎么办？', a: 'PETG 比 PLA 更容易拉丝。增加回抽距离和速度，降低温度，启用擦拭。' },
          { q: '拉丝可以后期处理吗？', a: '可以用热风枪轻轻吹，或用剪刀/刀具修剪。' }
        ]
      },
      {
        id: 'phase5-ep08',
        title: '喷嘴堵塞手术："冷拉"法和喷嘴更换指南',
        author: 'Tony (Yuchen) Liu',
        points: 40,
        skillBonus: 0,
        content: `
          <h2>喷嘴堵塞处理</h2>
          <h3>堵塞症状</h3>
          <ul>
            <li>耗材不出或出料断断续续</li>
            <li>打印有空洞</li>
            <li>挤出电机发出"咔咔"声</li>
          </ul>
          <h3>冷拉法 (Cold Pull)</h3>
          <ol>
            <li>加热喷嘴到打印温度</li>
            <li>插入耗材，手动推进</li>
            <li>冷却到 90-100°C（PLA）</li>
            <li>快速用力拉出耗材</li>
            <li>重复直到干净</li>
          </ol>
          <h3>更换喷嘴</h3>
          <ol>
            <li>加热到打印温度</li>
            <li>使用扳手逆时针拧下旧喷嘴</li>
            <li>安装新喷嘴</li>
            <li>重新调平</li>
          </ol>
        `,
        faq: [
          { q: '多久需要更换喷嘴？', a: '普通使用 3-6 个月。打印 abrasive 材料需要更频繁更换。' },
          { q: '喷嘴大小有什么影响？', a: '小喷嘴精度高但速度慢。大喷嘴速度快但精度低。0.4mm 是最常用的平衡选择。' }
        ]
      }
    ]
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
  phase4: 12,
  phase5: 18
};
