# Live2D 个人主页

基于 Live2D 技术的个人主页项目，集成了可爱的看板娘互动功能。

## 项目结构

```
webdesign_main/
├── README.md                # 项目说明文档（本文件）
├── LICENSE                  # 许可证文件
├── index.html               # 主页面入口文件
├── server.js                # Node.js 本地服务器入口
├── background/              # 背景图片资源目录
├── contents/                # 页面内容数据目录
│   ├── config.yml           # 站点配置（标题、副标题、头像等）
│   ├── home.md              # 首页关于我内容
│   ├── experience.md        # 经历/项目展示内容
│   ├── publications.md      # 学术成果/论文内容
│   └── career.md            # 职业/工作经历内容
├── static/                  # 静态资源目录
│   ├── css/
│   │   └── main.css         # 全局样式文件
│   └── js/
│       └── scripts.js       # 全局脚本文件
└── live2d-api-main/         # Live2D 看板娘代码目录
```

## 文件说明

### 核心文件

| 文件名 | 作用 |
|--------|------|
| `index.html` | 主页面入口文件，包含 GitHub 链接和 Live2D 看板娘的引入代码 |
| `live2d.min.js` | Live2D 核心库压缩版，提供看板娘渲染和交互功能 |
| `asteroids.js` | 太空侵略者游戏实现，可通过看板娘工具栏启动 |

### 样式文件

| 文件名 | 作用 |
|--------|------|
| `css/left.css` | 看板娘左侧定位样式，定义位置、动画和交互效果 |
| `css/right.css` | 看板娘右侧定位样式，定义位置、动画和交互效果 |

### JavaScript 文件

| 文件名 | 作用 |
|--------|------|
| `jsdelivr/random/autoload.js` | 随机模式自动加载脚本，随机切换模型 |
| `jsdelivr/random/waifu-tips.js` | 随机模式看板娘提示脚本，包含所有交互功能 |
| `jsdelivr/sequential/autoload.js` | 顺序模式自动加载脚本，按顺序切换模型 |
| `jsdelivr/sequential/waifu-tips.js` | 顺序模式看板娘提示脚本，包含所有交互功能 |

### 模型文件

每个模型文件夹包含以下文件：
- `index.json` - 模型资源分布说明文件
- `model.moc` - 模型本体文件
- `model.1024/texture_00.png` - 模型材质贴图
- `motions/` - 动作组文件夹（包含 .mtn 动作文件）
- `physics.json` - 物理效果配置文件（部分模型）

## 功能特性

- **Live2D 看板娘**：可爱的二次元角色展示
- **多模型支持**：包含 95式、97式、AK-12、AN-94 等多个角色模型
- **多形态切换**：每个角色有普通（normal）和破坏（destroy）两种形态
- **互动功能**：
  - 一言（Hitokoto）展示
  - 太空侵略者游戏
  - 模型切换
  - 材质切换
  - 拍照功能
  - 退出功能
- **响应式设计**：仅在屏幕宽度 ≥ 768px 时加载看板娘

## 目录说明

| 目录 | 作用 |
|------|------|
| `background/` | 存放背景图片资源 |
| `contents/` | 存放页面内容数据（Markdown + YAML 配置），驱动首页各板块渲染 |
| `static/` | 存放静态资源（CSS、JavaScript），可直接通过 URL 访问 |
| `live2d-api-main/` | Live2D 看板娘相关代码、模型和脚本 |

## 使用方法

### 本地预览

使用 Node.js 启动本地服务器：

```bash
node server.js
```

然后在浏览器中打开 `http://localhost:3000`（端口见 `server.js` 配置）。

> 直接打开 `index.html` 可能因浏览器安全策略导致部分功能受限。

### 部署

部署到 GitHub Pages 等静态网站托管服务即可。

## 相关链接

- 主页：[https://jiayel78.github.io/](https://jiayel78.github.io/)
- Live2D API 项目：[https://github.com/nova1751/live2d-api](https://github.com/nova1751/live2d-api)
- Live2D Violet 模型：[https://github.com/imuncle/live2d](https://github.com/imuncle/live2d)
- 个人主页模板：[https://github.com/Yixin0313/personal-homepage-template](https://github.com/Yixin0313/personal-homepage-template)
- Live2D 官方网站：[https://www.live2d.com/en/](https://www.live2d.com/en/)

## 版权须知

所有模型均收集自互联网，版权均归原公司/个人所有。您可将资源用于学习、非营利性的网站或项目，不得用于商业使用（付费分发售卖资源、二次修改用于盈利等）。
