# 项目一：个人作品集 - 知识点总结

> **项目名称：** 001-portfolio  
> **完成日期：** 2026-05-13  
> **技术栈：** HTML5 + CSS3 + JavaScript (ES6+)  
> **项目地址：** https://tineiyoucaihong.github.io/001-portfolio/

---

## 📚 目录

1. [HTML 核心知识](#1-html-核心知识)
2. [CSS 核心知识](#2-css-核心知识)
3. [JavaScript 核心知识](#3-javascript-核心知识)
4. [响应式设计](#4-响应式设计)
5. [Git 版本控制](#5-git-版本控制)
6. [GitHub & 部署](#6-github--部署)
7. [最佳实践](#7-最佳实践)

---

## 1. HTML 核心

### 1.1 文档结构

```html
<!DOCTYPE html>              <!-- 文档类型声明：HTML5 -->
<html lang="zh-CN">          <!-- 根元素，指定语言 -->
<head>                       <!-- 头部：元数据 -->
    <meta charset="UTF-8">   <!-- 字符编码：UTF-8 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport：响应式设计的关键 -->
</head>
<body>                       <!-- 主体：可见内容 -->
</body>
</html>
```

**关键概念：**
- `<!DOCTYPE html>`：告诉浏览器使用 HTML5 标准渲染
- `lang="zh-CN"`：搜索引擎优化（SEO）和辅助功能
- `charset="UTF-8"`：支持所有语言字符
- `viewport`：移动端适配的必备设置

---

### 1.2 语义化标签

**为什么使用语义化标签？**
- SEO 友好：搜索引擎更好地理解页面结构
- 可访问性：屏幕阅读器能正确解析
- 代码可读性：开发者更容易理解

**项目中的语义化标签：**

```html
<!-- 导航区域 -->
<nav id="navbar">
    <ul class="nav-menu">
        <li><a href="#home" class="nav-link">首页</a></li>
    </ul>
</nav>

<!-- 头部/Hero 区域 -->
<header id="home">
    <h1>主标题</h1>
</header>

<!-- 独立的内容区块 -->
<section id="about">
    <h2>区块标题</h2>
</section>

<!-- 页脚 -->
<footer>
    <p>版权信息</p>
</footer>
```

**常用语义化标签：**
| 标签 | 用途 |
|------|------|
| `<header>` | 页面或区块的头部 |
| `<nav>` | 导航链接区域 |
| `<main>` | 主要内容（每个页面只一个） |
| `<section>` | 独立的内容区块 |
| `<article>` | 独立的文章内容 |
| `<aside>` | 侧边栏相关内容 |
| `<footer>` | 页面或区块的底部 |

---

### 1.3 HTML 属性

**全局属性：**
```html
<!-- id：页面内唯一标识符 -->
<nav id="navbar">

<!-- class：CSS 类名，可重复使用 -->
<div class="container">

<!-- style：内联样式（不推荐，优先用 CSS） -->
<p style="color: red;">红色文字</p>
```

**链接属性：**
```html
<!-- href：链接目标地址 -->
<a href="#home">返回首页</a>     <!-- 锚点链接 -->
<a href="https://example.com">外部链接</a>

<!-- target：打开方式 -->
<a href="#" target="_blank">在新标签页打开</a>
```

---

## 2. CSS 核心

### 2.1 CSS 选择器

**优先级（ specificity）规则：**
```
!important > 内联样式 > ID选择器 > 类选择器 > 标签选择器
```

**项目中的选择器示例：**

```css
/* 1. 标签选择器 */
body {
    font-family: 'Segoe UI', sans-serif;
}

/* 2. 类选择器（最常用） */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* 3. ID 选择器 */
#navbar {
    position: fixed;
    top: 0;
}

/* 4. 后代选择器 */
.nav-container .logo a {
    font-size: 1.5rem;
}

/* 5. 伪类选择器 */
.nav-link:hover::after {
    width: 100%;
}

/* 6. 组合选择器 */
.skills-grid,
.projects-grid {
    display: grid;
}
```

---

### 2.2 CSS 盒模型

**盒模型组成：**
```
┌─────────────────────────────────┐
│  margin（外边距）                │
│  ┌───────────────────────────┐  │
│  │ border（边框）             │  │
│  │ ┌─────────────────────┐   │  │
│  │ │ padding（内边距）    │   │  │
│  │ │ ┌───────────────┐   │   │  │
│  │ │ │ content       │   │   │  │
│  │ │ │ (内容)        │   │   │  │
│  │ │ └───────────────┘   │   │  │
│  │ └─────────────────────┘   │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**项目中的盒模型设置：**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  /* 包含 border 和 padding 在宽度内 */
}
```

**`box-sizing` 的区别：**
- `content-box`（默认）：width = 内容宽度
- `border-box`（推荐）：width = 内容 + padding + border

---

### 2.3 Flexbox 布局

**项目中的 Flexbox 应用：**

```css
/* 1. 创建 flex 容器 */
.nav-container {
    display: flex;
    justify-content: space-between;  /* 主轴对齐 */
    align-items: center;              /* 交叉轴对齐 */
}

/* 2. flex 方向 */
.hero-buttons {
    display: flex;
    gap: 1rem;  /* 子元素间距 */
    flex-wrap: wrap;  /* 允许换行 */
}

/* 3. flex 对齐方式 */
.hamburger {
    display: flex;
    flex-direction: column;  /* 垂直排列 */
}
```

**Flexbox 关键属性：**
| 属性 | 值 | 用途 |
|------|-----|------|
| `justify-content` | flex-start, center, space-between | 主轴对齐 |
| `align-items` | stretch, center, flex-start | 交叉轴对齐 |
| `flex-direction` | row, column | 排列方向 |
| `flex-wrap` | nowrap, wrap | 是否换行 |
| `gap` | 1rem, 20px | 子元素间距 |

---

### 2.4 Grid 布局

**项目中的 Grid 应用：**

```css
/* 响应式网格 */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

**Grid 布局解析：**
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
/*                          ↑          ↑         ↑       */
/*                          │          │         │       */
/*                    重复次数    最小宽度    平均分配    */

/* 实际效果：
   - 屏幕宽时：4 列（每列 ≥250px）
   - 屏幕窄时：自动减少列数
   - 手机时：1 列
*/
```

---

### 2.5 CSS 变量（自定义属性）

**项目中的 CSS 变量：**

```css
:root {
    --primary-color: #667eea;      /* 主色调 */
    --secondary-color: #764ba2;    /* 辅助色 */
    --text-color: #333;            /* 文字颜色 */
    --gradient: linear-gradient(135deg, 
                  var(--primary-color) 0%, 
                  var(--secondary-color) 100%);
}

/* 使用变量 */
.btn-primary {
    background: var(--primary-color);
    color: white;
}
```

**CSS 变量的优势：**
- ✅ 主题统一管理
- ✅ 修改一处，全局生效
- ✅ 支持动态修改（JavaScript）

---

### 2.6 CSS 动画

**项目中的动画示例：**

```css
/* 1. 关键帧动画 */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 2. 应用动画 */
.hero-content {
    animation: fadeInUp 1s ease;
}

/* 3. 交互动画 */
.nav-link::after {
    width: 0;
    transition: width 0.3s ease;  /* 平滑过渡 */
}

.nav-link:hover::after {
    width: 100%;
}
```

**动画属性速查：**
| 属性 | 用途 | 常用值 |
|------|------|--------|
| `transition` | 平滑过渡 | all 0.3s ease |
| `transform` | 变形 | scale(), rotate(), translate() |
| `animation` | 关键帧动画 | name duration timing-function |
| `@keyframes` | 定义动画 | 0% {} 100% {} |

---

### 2.7 背景渐变

```css
/* 线性渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/*                   ↑角度      起始颜色    结束颜色    */

/* 渐变文字 */
.logo a {
    background: var(--gradient);
    -webkit-background-clip: text;      /* 裁剪背景到文字 */
    -webkit-text-fill-color: transparent; /* 文字透明，显示背景 */
}
```

---

## 3. JavaScript 核心

### 3.1 DOM 操作

**获取元素：**
```javascript
// 通过 ID 获取
const navbar = document.getElementById('navbar');

// 通过类名获取
const navLinks = document.querySelectorAll('.nav-link');

// 通过选择器获取
const hamburger = document.querySelector('.hamburger');
```

**操作元素类名：**
```javascript
// 添加类
element.classList.add('active');

// 删除类
element.classList.remove('active');

// 切换类
element.classList.toggle('active');

// 检查类
element.classList.contains('active');
```

---

### 3.2 事件监听

**项目中的事件监听示例：**

```javascript
// 1. 点击事件
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 2. 滚动事件
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. 表单提交事件
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();  // 阻止默认提交行为
    // 处理表单数据
});
```

---

### 3.3 平滑滚动

```javascript
// 方式一：CSS 实现（推荐）
html {
    scroll-behavior: smooth;
}

// 方式二：JavaScript 实现
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
```

---

### 3.4 表单处理

```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // 验证表单
    if (!name || !email || !message) {
        alert('请填写所有字段');
        return;
    }
    
    // 处理数据（实际项目中发送到服务器）
    console.log('表单数据：', { name, email, message });
    
    // 重置表单
    contactForm.reset();
    
    // 显示成功消息
    alert('消息已发送！感谢您的联系。');
});
```

---

### 3.5 ES6+ 新特性

**箭头函数：**
```javascript
// 传统函数
function handleClick() {
    console.log('Clicked');
}

// 箭头函数（更简洁）
const handleClick = () => {
    console.log('Clicked');
};

// 单行可省略 {}
const handleClick = () => console.log('Clicked');
```

**模板字符串：**
```javascript
const name = '张三';
const greeting = `你好，${name}！`;  // 使用反引号 ``
```

**解构赋值：**
```javascript
const [firstName, lastName] = ['张', '三'];
const { email, phone } = user;
```

---

## 4. 响应式设计

### 4.1 视口（Viewport）

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**参数解释：**
- `width=device-width`：宽度等于设备宽度
- `initial-scale=1.0`：初始缩放比例为 1

---

### 4.2 媒体查询

**项目中的媒体查询：**

```css
/* 平板和手机（≤768px）*/
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        left: -100%;
        flex-direction: column;
    }
    
    .hero-title {
        font-size: 2.2rem;  /* 缩小字体 */
    }
}

/* 小屏手机（≤480px）*/
@media (max-width: 480px) {
    .hero-title {
        font-size: 1.8rem;
    }
    
    .btn {
        width: 100%;  /* 按钮占满宽度 */
    }
}
```

**常用断点：**
| 设备类型 | 屏幕宽度 |
|---------|---------|
| 大屏桌面 | ≥1200px |
| 桌面 | 992px - 1199px |
| 平板 | 768px - 991px |
| 手机横屏 | 480px - 767px |
| 手机竖屏 | ≤479px |

---

### 4.3 移动端优化要点

```css
/* 1. 防止横向滚动 */
html, body {
    overflow-x: hidden;
    max-width: 100%;
}

/* 2. 正确的盒模型 */
* {
    box-sizing: border-box;
}

/* 3. 灵活的单位 */
.hero-title {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    /* 最小1.8rem，最大3.5rem，中间随视口变化 */
}

/* 4. 响应式图片 */
img {
    max-width: 100%;
    height: auto;
}
```

---

## 5. Git 版本控制

### 5.1 Git 基本概念

**Git 的三个区域：**
```
工作区 → 暂存区 → 本地仓库 → 远程仓库
 ↓        ↓         ↓          ↓
编辑    git add   git commit  git push
```

---

### 5.2 常用 Git 命令

**初始化和配置：**
```bash
# 初始化仓库
git init

# 配置用户信息
git config user.name "您的名字"
git config user.email "您的邮箱"
```

**基本操作：**
```bash
# 查看状态
git status

# 添加文件到暂存区
git add .              # 添加所有文件
git add index.html     # 添加单个文件

# 提交到本地仓库
git commit -m "提交信息"

# 查看提交历史
git log
```

---

### 5.3 项目中的 Git 工作流

```bash
# 1. 初始化
git init

# 2. 添加所有文件
git add .

# 3. 查看状态（确认要提交的文件）
git status

# 4. 提交（写清楚提交信息）
git commit -m "Initial commit: Personal portfolio website"

# 5. 添加远程仓库
git remote add origin git@github.com:tineiyoucaihong/001-portfolio.git

# 6. 推送到 GitHub
git push -u origin main
```

---

### 5.4 提交信息规范

**好的提交信息：**
```
✅ "Add responsive navigation menu"
✅ "Fix mobile layout overflow issue"
✅ "Update contact form validation"

❌ "update"
❌ "fix bug"
❌ "done"
```

**提交信息格式：**
```
<类型>: <简短描述>

[可选的详细描述]
```

**常用类型：**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构代码

---

## 6. GitHub & 部署

### 6.1 GitHub 仓库结构

```
001-portfolio/
├── .gitignore          # Git 忽略文件配置
├── README.md           # 项目说明文档
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
└── js/
    └── script.js      # JavaScript 文件
```

---

### 6.2 GitHub Pages 部署流程

**步骤总结：**

1. **创建 GitHub 仓库**
   - 仓库名：`001-portfolio`
   - 设置为 Public
   - 不添加 README

2. **推送代码**
   ```bash
   git remote add origin <仓库地址>
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

4. **访问网站**
   ```
   https://用户名.github.io/仓库名/
   ```

---

### 6.3 .gitignore 文件

```gitignore
# 操作系统文件
.DS_Store          # macOS
Thumbs.db          # Windows
desktop.ini        # Windows

# 编辑器文件
.vscode/           # VS Code
.idea/             # IntelliJ IDEA
*.swp              # Vim
*~                 # 备份文件

# 临时文件
*.log
*.tmp
```

**作用：**
- 防止不必要的文件被提交
- 保持仓库整洁
- 避免冲突

---

## 7. 最佳实践

### 7.1 命名规范

**文件命名：**
```
✅ index.html
✅ style.css
✅ script.js
✅ about-us.html

❌ Index.html
❌ my style.css
❌ 脚本.js
```

**类名命名：**
```css
✅ .nav-container
✅ .hero-title
✅ .submit-button

❌ .NavContainer
❌ .hero_title
❌ .按钮
```

---

### 7.2 代码组织

**CSS 文件结构：**
```css
/* ===================================
   1. 基础样式
   =================================== */

/* ===================================
   2. 导航栏
   =================================== */

/* ===================================
   3. Hero 区域
   =================================== */
```

**JavaScript 文件结构：**
```javascript
// DOM 元素获取
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');

// 事件监听
hamburger.addEventListener('click', toggleMenu);

// 函数定义
function toggleMenu() {
    // ...
}
```

---

### 7.3 性能优化

**CSS 优化：**
```css
/* ❌ 不好的做法 */
div {
    margin: 0;
    padding: 0;
}
/* 使用通用选择器会影响性能 */

/* ✅ 好的做法 */
.container {
    margin: 0;
    padding: 0;
}
```

**图片优化：**
```html
<!-- 使用适当的图片格式 -->
<img src="photo.jpg" alt="描述">
<!-- 照片用 JPEG，图标用 PNG 或 SVG -->

<!-- 使用懒加载 -->
<img src="photo.jpg" loading="lazy" alt="描述">
```

---

### 7.4 可访问性（Accessibility）

**使用语义化 HTML：**
```html
<!-- ✅ 好 -->
<nav aria-label="主导航">
    <ul>
        <li><a href="#home">首页</a></li>
    </ul>
</nav>

<!-- ❌ 不好 -->
<div class="menu">
    <div onclick="goToHome()">首页</div>
</div>
```

**图片 alt 属性：**
```html
<!-- ✅ 有意义的描述 -->
<img src="profile.jpg" alt="张三的个人照片">

<!-- ❌ 无意义或缺失 -->
<img src="profile.jpg" alt="图片">
<img src="profile.jpg">
```

---

### 7.5 浏览器兼容性

**CSS 前缀：**
```css
/* 为不同浏览器添加前缀 */
.gradient {
    background: -webkit-linear-gradient(135deg, #667eea, #764ba2);
    background: -moz-linear-gradient(135deg, #667eea, #764ba2);
    background: linear-gradient(135deg, #667eea, #764ba2);
}
```

**检查兼容性：**
- 使用 Can I Use: https://caniuse.com/
- 在不同浏览器中测试

---

## 📝 学习检查清单

完成项目一后，您应该能够：

- [ ] 理解 HTML 文档结构和语义化标签
- [ ] 使用 CSS 选择器和盒模型
- [ ] 运用 Flexbox 和 Grid 布局
- [ ] 创建响应式设计（媒体查询）
- [ ] 编写基本的 JavaScript 交互
- [ ] 使用 Git 进行版本控制
- [ ] 在 GitHub 上托管代码
- [ ] 部署网站到 GitHub Pages

---

## 🎯 下一步学习重点

1. **深入学习 CSS**
   - Flexbox 和 Grid 的高级用法
   - CSS 动画和过渡效果
   - CSS 预处理器（Sass/Less）

2. **JavaScript 进阶**
   - ES6+ 新特性
   - 异步编程（Promise, async/await）
   - DOM 操作深入

3. **前端框架**
   - React 基础
   - 组件化开发
   - 状态管理

---

## 📚 推荐资源

- **MDN Web Docs**: https://developer.mozilla.org/
- **CSS Tricks**: https://css-tricks.com/
- **JavaScript Info**: https://javascript.info/
- **Can I Use**: https://caniuse.com/

---

**文档生成日期：** 2026-05-13  
**项目状态：** ✅ 已完成并上线

祝您学习愉快！🚀
