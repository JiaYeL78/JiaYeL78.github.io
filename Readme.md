# Live2D 个人主页

基于 Live2D 技术的个人主页项目，集成了可爱的看板娘互动功能。

## 项目结构

```
webdesign_test/
├── README__.md              # 原始项目说明文档（Live2D 模型收集项目）
├── README.md                # 项目说明文档（本文件）
├── necessary.txt            # 项目需求说明文件
└── live2d-api-main/         # Live2D 主代码目录
    ├── index.html           # 主页面入口文件
    ├── asteroids.js         # 太空侵略者游戏代码
    ├── live2d.min.js        # Live2D 核心库（压缩版）
    ├── .gitignore           # Git 忽略配置文件
    ├── .github/             # GitHub 配置目录
    │   └── workflows/       # GitHub Actions 工作流
    │       └── autopublish.yml  # 自动发布配置
    ├── css/                 # 样式文件目录
    │   ├── left.css         # 看板娘左侧定位样式
    │   └── right.css        # 看板娘右侧定位样式
    ├── img/                 # 图片资源目录
    │   ├── 01.png           # 示例图片 1
    │   └── 02.png           # 示例图片 2
    ├── jsdelivr/            # CDN 资源目录
    │   ├── random/          # 随机加载模式
    │   │   ├── autoload.js  # 自动加载脚本（随机模式）
    │   │   └── waifu-tips.js # 看板娘提示脚本（随机模式）
    │   └── sequential/      # 顺序加载模式
    │       ├── autoload.js  # 自动加载脚本（顺序模式）
    │       └── waifu-tips.js # 看板娘提示脚本（顺序模式）
    └── model/               # Live2D 模型目录
        ├── 95type/          # 95式角色模型
        │   ├── 95type_3702/ # 95式 Type 3702
        │   └── 95type_405/  # 95式 Type 405
        ├── 97type/          # 97式角色模型
        │   ├── 97type_3703/ # 97式 Type 3703
        │   └── 97type_406/  # 97式 Type 406
        ├── AK12/            # AK-12 角色模型
        │   ├── ak12_0/      # AK-12 基础形态
        │   └── ak12_2402/   # AK-12 特殊形态
        └── AN-94/           # AN-94 角色模型
            ├── an94_2404/   # AN-94 Type 2404
            └── an94_3303/   # AN-94 Type 3303
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

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或部署到 GitHub Pages 等静态网站托管服务

## 相关链接

- 主页：[https://jiayel78.github.io/](https://jiayel78.github.io/)
- Live2D API 项目：[https://github.com/nova1751/live2d-api](https://github.com/nova1751/live2d-api)
- Live2D Violet 模型：[https://github.com/imuncle/live2d](https://github.com/imuncle/live2d)
- 个人主页模板：[https://github.com/Yixin0313/personal-homepage-template](https://github.com/Yixin0313/personal-homepage-template)
- Live2D 官方网站：[https://www.live2d.com/en/](https://www.live2d.com/en/)

## 版权须知

所有模型均收集自互联网，版权均归原公司/个人所有。您可将资源用于学习、非营利性的网站或项目，不得用于商业使用（付费分发售卖资源、二次修改用于盈利等）。
