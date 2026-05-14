// ===================================
// 个人作品集网站 - JavaScript
// ===================================

console.log('作品集网站已加载！');

// ===================================
// 移动端导航菜单切换
// ===================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 点击链接后关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// 导航栏滚动效果
// ===================================

const navbar = document.querySelector('#navbar');

// 使用节流函数
  let ticking = false;
  window.addEventListener('scroll', () => {
      if (!ticking) {
          window.requestAnimationFrame(() => {
              if (window.scrollY > 100) {
                  navbar.classList.add('scrolled');
              } else {
                  navbar.classList.remove('scrolled');
              }
              ticking = false;
          });
          ticking = true;
      }
  });

// ===================================
// 平滑滚动
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// 联系表单处理
// ===================================

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 获取表单数据
        const formData = new FormData(this);

        // 这里可以添加实际的表单提交逻辑
        // 目前只是演示
        alert('感谢您的留言！这是演示表单，实际功能需要后端支持。');

        // 重置表单
        this.reset();
    });
}

// ===================================
// 滚动动画
// ===================================

// 当元素进入视口时添加动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察需要动画的元素
document.querySelectorAll('.skill-card, .project-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// 技能条动画
// ===================================

const skillBars = document.querySelectorAll('.skill-bar');
let skillsAnimated = false;

const animateSkills = () => {
    if (skillsAnimated) return;

    const skillsSection = document.querySelector('#skills');
    const sectionTop = skillsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, index * 150);  // 每个延迟150ms，依次触发
        });
        skillsAnimated = true;
    }
};

window.addEventListener('scroll', animateSkills);

// ===================================
// 当前年份（页脚）
// ===================================

const yearSpan = document.querySelector('footer p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
}

// ===================================
// 打字机效果（Hero标题）
// ===================================

const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';

    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };

    type();
};

// 如果需要打字机效果，取消下面的注释
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 100);
// }

// ===================================
// 控制台彩蛋
// ===================================

console.log('%c👋 你好！', 'font-size: 20px; font-weight: bold;');
console.log('%c如果你想了解这个网站的代码，欢迎查看我的GitHub！', 'color: #667eea;');
console.log('%c正在学习全栈开发中...', 'color: #764ba2; font-style: italic;');
