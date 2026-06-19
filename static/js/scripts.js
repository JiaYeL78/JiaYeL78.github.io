const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'awards', 'experience', 'career', 'publications'];

// 背景图片列表
const bgImages = [
    'background/gbc1.jpg',
    'background/gbc2.jpg',
    'background/tomoya.jpg',
    'background/guangming1.jpg',
    'background/guangming2.jpg',
    'background/guangzuan11.jpg',
    'background/guangzuan2.jpg',
    'background/guangzuan6.jpg',
    'background/dami1.jpg',
    'background/dami3.jpg',
    'background/dami5.jpg'
];

// 随机打乱数组
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// 初始化背景图片
function initBackground() {
    const track = document.getElementById('bg-scroll-track');
    if (!track) return;
    
    // 随机打乱图片顺序
    const shuffledImages = shuffleArray(bgImages);
    
    // 生成图片 HTML（复制两份实现无缝滚动）
    let html = '';
    shuffledImages.forEach(src => {
        html += `<img src="${src}" alt="">`;
    });
    // 再复制一份实现无缝滚动
    shuffledImages.forEach(src => {
        html += `<img src="${src}" alt="">`;
    });
    
    track.innerHTML = html;
}

window.addEventListener('DOMContentLoaded', event => {
    // 初始化背景
    initBackground();

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and id value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

});
