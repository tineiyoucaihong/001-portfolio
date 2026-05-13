# 项目一：个人作品集网站

> **目标：** 构建您的第一个全栈项目，展示您是谁、您的技能和项目
>
> **预计时间：** 2周
>
> **难度：** ⭐⭐ (适合入门)

## 🎯 项目目标

创建一个现代、响应式的个人作品集网站，包含：
- 个人介绍
- 技能展示
- 项目展示
- 联系方式
- 响应式设计（手机/平板/电脑）

## 🛠 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计（也可以学习Tailwind CSS）
- **JavaScript** - 交互功能
- **（可选）React** - 如果您想直接学习React

## 📋 项目功能

### 必需功能
- [ ] 导航栏（首页、关于、项目、联系）
- [ ] Hero区域（自我介绍）
- [ ] 关于我页面
- [ ] 技能展示（进度条或卡片）
- [ ] 项目展示（至少2-3个项目卡片）
- [ ] 联系表单
- [ ] 响应式设计

### 加分功能
- [ ] 暗黑模式切换
- [ ] 动画效果
- [ ] 项目分类筛选
- [ ] 社交媒体链接

## 🚀 开始步骤

### 第1天：项目规划

1. 在纸上画出网站布局
2. 确定内容（个人介绍、项目描述）
3. 选择配色方案

### 第2-3天：HTML结构

创建基础的HTML页面：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>您的名字 - 全栈开发者</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <!-- 导航栏 -->
    </nav>

    <header id="home">
        <!-- Hero区域 -->
    </header>

    <section id="about">
        <!-- 关于我 -->
    </section>

    <section id="skills">
        <!-- 技能展示 -->
    </section>

    <section id="projects">
        <!-- 项目展示 -->
    </section>

    <section id="contact">
        <!-- 联系方式 -->
    </section>

    <footer>
        <!-- 页脚 -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### 第4-7天：CSS样式

添加样式，让它看起来专业：

```css
/* 基础重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* 导航栏 */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: #333;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
}

/* Hero区域 */
header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}
```

### 第8-10天：JavaScript交互

添加交互功能：

```javascript
// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#222';
    } else {
        nav.style.background = 'transparent';
    }
});
```

### 第11-14天：响应式设计和优化

添加媒体查询：

```css
@media (max-width: 768px) {
    nav {
        flex-direction: column;
    }

    header h1 {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```

## 📁 项目文件结构

```
001-portfolio/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── script.js      # JavaScript文件
├── images/            # 图片资源
└── README.md          # 项目说明
```

## 🎨 设计建议

### 配色方案
- **渐变紫**：#667eea → #764ba2
- **深色主题**：#1a1a2e → #16213e
- **清新绿**：#11998e → #38ef7d

### 排版
- 标题：大号、粗体
- 正文：易读、行间距适中
- 强调：使用颜色而非粗体

## 📚 学习资源

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

## ✅ 完成标准

- [ ] 所有必需功能已实现
- [ ] 在手机、平板、电脑上都能正常显示
- [ ] 代码清晰、有注释
- [ ] 无控制台错误
- [ ] 页面加载速度快

## 🚀 部署（可选）

完成后可以部署到：
- GitHub Pages（免费）
- Netlify（免费）
- Vercel（免费）

---

**准备好了吗？让我们现在就开始！**

告诉Claude："开始项目一，帮我创建项目结构"
