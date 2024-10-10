// let currentIndex = 0;
// const images = document.querySelectorAll('.carousel-image');
// const totalImages = images.length;

// function showNextImage() {
//     currentIndex = (currentIndex + 1) % totalImages; // 计算下一个索引
//     const offset = -currentIndex * 100; // 每张图片的宽度为100%
//     document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // 移动轮播图
// }

// script.js

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // 选择叠加层和目标 section
    const overlay = document.querySelector('.overlay');
    const targetSection = document.querySelector('#section1');

    // 检查元素是否存在
    if (!overlay) {
        console.error('无法找到 .overlay 元素');
        return;
    }

    if (!targetSection) {
        console.error('无法找到 #section1 元素');
        return;
    }

    // 选项配置
    const options = {
        root: null, // 视口
        rootMargin: '0px',
        threshold: 0.5 // 当 section1 一半出现在视口中时触发
    };

    // 回调函数
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当 section1 在视口中时，隐藏叠加层
                overlay.classList.add('hidden');
                console.log('section1 进入视口，隐藏叠加层');
            } else {
                // 当 section1 不在视口中时，显示叠加层
                overlay.classList.remove('hidden');
                console.log('section1 离开视口，显示叠加层');
            }
        });
    };

    // 创建观察者
    const observer = new IntersectionObserver(callback, options);

    // 观察目标 section
    observer.observe(targetSection);
});





/*滚动*/
// 滚动时改变导航栏背景
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(31, 100, 202)"; // 滚动后背景颜色
        navbar.style.opacity = "0.9"; // 滚动后透明度
        navbar.style.boxShadow='0 2px 5px rgb(255, 255, 255)' // 滚动后boxshadow颜色

    } else {
        navbar.style.backgroundColor = "rgba(82, 149, 249, 0)"; // 初始背景颜色
        navbar.style.opacity = "1"; // 初始透明度
        navbar.style.boxShadow = 'none'; // 初始boxshadow颜色

    }
};


// 为 .text-mobile2 添加可见性
window.addEventListener('scroll', function(){
    const e = document.querySelector('.text-mobile2');
    const position = e.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
        e.classList.add('visible');
    } else {
        e.classList.remove('visible');
    }
});

// 为 .text-mobile1 添加可见性
window.addEventListener('scroll', function(){
    const e = document.querySelector('.text-mobile1');
    const position = e.getBoundingClientRect();
    if(position.top < window.innerHeight && position.bottom >= 0) {
        e.classList.add('visible');
    } else {
        e.classList.remove('visible');
    }
});



/*section介绍的渐变效果*/
window.addEventListener('scroll', function() {
    const paragraphs = document.querySelectorAll('p'); // 获取所有的<p>元素
    paragraphs.forEach(function(paragraph) {
        const position = paragraph.getBoundingClientRect();

        // 当<p>出现于视口中时，添加visible类
        if (position.top < window.innerHeight && position.bottom >= 0) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible'); // 当完全离开视口时，移除visible类
        }
    });
});


/* 云图 */
// const canvas = document.getElementById('animationCanvas');
// const ctx = canvas.getContext('2d');

// // 文本信息数组，包含文本的内容和点击后的链接
// const textData = [
//     { text: '狂犬病', link: 'cloudText/狂犬病.html' ,color: '#688fe2' ,fontSize:'50'},
//     { text: '中国天眼', link: 'https://example.com/page2', color: '#b9b5ff' ,fontSize:'50'},
//     { text: '无偿献血', link: 'https://example.com/page3' , color: '#bfe2ff',fontSize:'50'},
//     { text: '新能源汽车', link: 'https://example.com/page4', color: '#9069ea',fontSize:'50' },
//     { text: '头孢配酒', link: 'https://example.com/page4', color: '#c2d3f9' ,fontSize:'50'},
//     { text: '取消中考', link: 'https://example.com/page4', color: '#c0f7f9',fontSize:'50' },
//     { text: '地震', link: 'https://example.com/page4', color: '#abe9fc' ,fontSize:'50'},
//     { text: '三星堆', link: 'https://example.com/page4', color: '#f47c7a',fontSize:'80' },
//     { text: '劳动补贴', link: 'https://example.com/page4', color: '#f49973' ,fontSize:'80'},
//     { text: '文物被盗', link: 'https://example.com/page4', color: '#b4b2f4' ,fontSize:'50'},
//     { text: '唐山打人', link: 'https://example.com/page4', color: '#9db7f9' ,fontSize:'50'},
//     { text: '高考泄题', link: 'https://example.com/page4', color: '#f27b8f' ,fontSize:'80'},
//     { text: '太空授课', link: 'https://example.com/page4', color: '#baa4f9' ,fontSize:'50'},
//     { text: '猴痘', link: 'https://example.com/page4', color: '#90f4f4' ,fontSize:'50'},
//     { text: '食品安全', link: 'https://example.com/page4', color: '#c0d2f9' ,fontSize:'50'},
//     { text: '猫一杯', link: 'https://example.com/page4', color: '#7998e5' ,fontSize:'50'},
//     { text: '胖猫', link: 'https://example.com/page4', color: '#7392ef' ,fontSize:'50'},
//     { text: '高价寻狗', link: 'https://example.com/page4', color: '#79b1e0',fontSize:'50' },
//     { text: '粉色头发', link: 'https://example.com/page4', color: '#a4adf2' ,fontSize:'50'},

// ];

const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

        // 获取模态弹窗元素
        const modalOverlay = document.getElementById('modalOverlay');
        const closeModal = document.getElementById('closeModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        // 文本信息数组，包含文本的内容和点击后的详细信息
        const textData = [
            { 
                text: '狂犬病', 
                content: '<h3 style="color:red;">谣言：狂犬病潜伏期长达十几年？</h3><h4 style="color:black;text-align:left">真相：该说法没有科学依据。狂犬病潜伏期长短不一，一般为1至3个月，个别人可短至几天、长至1年以上，目前公认的最长潜伏期是6年。狂犬病目前属于可防不可治疾病，一旦发病，死亡率几乎高达100%。在亚洲和非洲，狗是主要的传染源，猫也可以传染狂犬病。如果不慎被动物咬伤，首先用肥皂水(或其他弱碱性清洁剂)与流动清水(或生理盐水)交替清洗伤口至少15分钟。随后及时到指定的狂犬疫苗接种门诊就诊，对伤口进行分级诊断，尽快完成疫苗接种，有必要时，接种被动免疫抑制剂(蛋白)。(来源:科学辟谣平台)</h4>', 
                color: '#688fe2', 
                fontSize: '30' 
            },
            { 
                text: '酒驾判定', 
                content: '<h3 style="color:red;">谣言：酒醉驾判定标准要变了？</h3><h4 style="color:black;text-align:left">真相：该信息纯属谣言。全国刑事技术标准化技术委员会指出，国家标准化管理委员会2023年8月发布的推荐性国家标准《血液、尿液中乙醇、甲醇、正丙醇、丙酮、异丙醇和正丁醇检验》(GB/T42430-2023)是实验室定性和定量分析评价及质量控制的依据，该标准是为了进一步完善检验检测依据而制定。相关国家标准的调整，并不涉及公安交警对酒驾醉驾违法的判定阈值，更不涉及现有酒醉驾处罚规定。当前公安交管部门的判定标准依然为驾驶员血液中乙醇含量超过0.20mg/mL为饮酒驾驶;大于或等于0.80mg/mL属于醉酒驾驶。(来源:全国刑事技术标准化技术委员会)</h4>', 
                color: '#bfe2ff', 
                fontSize: '30' 
            },
            { 
                text: '新能源汽车', 
                content: '<h3 style="color:black;">谣言：新能源汽车比燃油汽车污染更严重？</h3><h4 style="color:black; text-align:left">真相：上述说法不实。针对网上出现“新能源汽车比传统燃油车污染更加严重”的质疑声音，广东省生态环境厅曾发文介绍说，燃油车尾气中的挥发性有机物、氮氧化物和二氧化硫是形成城市 PM2.5的重要物质。而新能源汽车在行驶过程中不会产生任何尾气，相比于燃油车，新能源汽车对大气质量的影响更小。同时，随着电力清洁化和高效工业除尘、脱硫技术的应用，新能源汽车将带来更加明显的大气污染削减效果。(来源:“广东生态环境”微信公众号)</h4>', 
                color: '#9069ea', 
                fontSize: '30' 
            },
            { 
                text: '取消中考', 
                content: '<h3 style="color:red;">谣言：义务教育教学改革实验区“缩短学制” “取消中考”？</h3><h4 style="color:black;text-align:left">真相：上述传言不实。教育部办公厅日前印发通知并公示了一批全国范围义务教育教学改革实验区和实验校的名单。随后，网上出现“教育部最新公立教育改革试点方案，实验区将实行‘缩短学制’‘取消中考’”等传言。对此，教育部新闻办发布辟谣声明称，义务教育教学改革实验区和实验校的工作任务中，并无缩短学制、取消中考等内容，不要轻易采信非官方渠道的信息。(来源:“微言教育”微信公众号)</h4>', 
                color: '#e2cfff', 
                fontSize: '30' 
            },
            { 
                text: '无偿献血', 
                content: '<h3 style="color:red;">谣言：我国无偿献血人数大幅下降？无偿献血用于血液制品出口？</h3><h4 style="color:black;text-align:left">真相：上述传言不实。2月上旬，有网络自媒体发文称，“我国无偿献血人数从2018年的1520万下降到2023年的1130万，远低于世界卫生组织推荐的1.8%”，“2021年中国血液制品出口数量达到177.99吨，而177.99吨的血液制品就需要889.95吨的新鲜血液”，并质疑其中“无偿献血的人做了多少贡献?”经中国互联网联合辟谣平台向有关主管部门核实，上述自媒体发布的涉无偿献血信息不实。实际上，2023年全年我国无偿献血达1699.2万人次，献血量达2892.1万单位，较2022年分别增长5.9%和4.8%，献血人次和献血量均创历史新高。此外，目前我国临床用血来自公众自愿无偿捐献，无偿献血的血液由血站采集并向临床提供。血站由政府设立，是不以盈利为目的，采集、提供临床用血的公益性卫生机构。无偿献血的血液必须用于临床，不得出售、买卖。(来源:中国互联网联合辟谣平台)</h4>', 
                color: '#bfe2ff', 
                fontSize: '30' 
            },
            { 
                text: '头孢配酒', 
                content: '<h3 style="color:red;">谣言：头孢配酒一点事儿没有？</h3><h4 style="color:black;text-align:left">真相：上述说法实属误导。有用户在社交媒体发文称，“发现头孢喝酒根本死不了，除了胃有点不舒服，一点事没有”。对此，多位医学专家发文称，此举非常危险，提醒广大网民务必当心。吃完头孢7天内不能喝酒，喝酒后一周内也不能吃头孢，这是因为二者接触会出现双硫仑样反应，而严重的双硫仑样反应确实会致人死亡。因此，“头孢就酒，说走就走”并非儿戏，请不要以身犯险。(来源:“中国青年报”微信公众号)</h4>', 
                color: '#ffcccb', 
                fontSize: '30' 
            },
            { 
                text: '中国天眼', 
                content: '<h3 style="color:red;">谣言：贵州“中国天眼”变成“垃圾场”？</h3><h4 style="color:black;text-align:left">真相：上述信息为谣言。4月上旬，海外社交平台流传一张图片称，“耗资2.6亿美元在贵州大山里建造的天眼，变成了垃圾场”。对此，“贵州辟谣”微信公众号发布声明，网传说法为谣传。网传图片实为美国波多黎各的阿雷西博天文台(Arecibo Observatory)于2020年12月发生彻底坍塌的画面，该天文台主要的观测装置为阿雷西博射电望远镜。事实上，这并非“中国天眼”第一次“被坍塌”，2020年阿雷西博望远镜第一次出现严重损坏之际，网络中就曾出现过类似谣言。(来源:“贵州辟谣”微信公众号、澎湃新闻)</h4>', 
                color: '#b9b5ff', 
                fontSize: '30' 
            },
            { 
                text: '地震', 
                content: '<h3 style="color:red;">谣言：台湾7.3级地震导致重庆某桥梁晃动、浙江宁波一小区外墙开裂？</h3><h4 style="color:black;text-align:left">真相：以上信息均为谣言。4月3日，台湾花莲县海域发生7.3级地震。有网民发布“地震导致重庆某桥梁晃动”的视频，经重庆市互联网违法和不良信息举报中心核实，此信息系谣言，重庆当日未发生地震等自然灾害。视频画面中桥面显示的“重庆南”字样，实为台北市重庆南路的一座小桥，并非重庆的桥梁。针对有网民发布“台湾地震导致浙江宁波一小区外墙开裂”的图文信息，经相关部门核实，图片中的建筑物为正在进行外墙检修的宁波海曙潮悦南塘小区，施工于4月1日开始，与地震无关。网传相关信息系恶意关联。(来源:@重庆辟谣、@宁波网警)</h4>', 
                color: '#ffddc1', 
                fontSize: '30' 
            },
            { 
                text: '三星堆', 
                content: '<h3 style="color:red;">谣言：三星堆挖出酷似“飞碟”的青铜器？</h3><h4 style="color:black;text-align:left">真相：网传信息纯属谣言。4月中旬，一张网络图片提及“三星堆文明外星起源说”，图片中显示的“考古挖掘现场”有一个飞碟型的青铜器物，上面有许多纹路、部件，看起来科技感十足。实际上，这只是AI生成的网络梗图。而对于“三星堆是否为外星文明?三星堆真的是脱离中华文明之外的遗存吗？”等频繁出现的话题，官方曾多次辟谣。北京大学考古文博学院教授孙华此前接受封面新闻采访时也给出了否定回答，“三星堆文化绝对不是外来文明，三星堆人更不可能是外星人!”(来源:中国互联网联合辟谣平台、四川互联网联合辟谣平台、封面新闻)</h4>', 
                color: '#ccffcc', 
                fontSize: '50' 
            },
            { 
                text: '劳动补贴', 
                content: '<h3 style="color:red;">谣言：扫码可领“2024年个人劳动补贴”？</h3><h4 style="color:black;text-align:left">真相：该消息不实，且涉嫌诈骗。5月中旬，有网民收到一封所谓“2024年财政个人劳动补贴领取通知”的邮件，要求使用微信扫描所附二维码，进入“国家人力资源和社会保障官方小程序”办理。对此，人力资源和社会保障部表示，从未发放过所谓“个人劳动补贴”，上述邮件为不实信息且涉嫌诈骗。不法分子诱导群众扫描二维码或点击链接，进入精心伪造的“官方”小程序或网站，并填写身份证、银行卡、验证码等个人信息，以达到骗取钱财的目的。(来源:“人力资源和社会保障部”微信公众号)</h4>', 
                color: '#fbcfe8', 
                fontSize: '50' 
            },
            { 
                text: '文物被盗', 
                content: '<h3 style="color:red;">谣言：湖南博物院的辛追夫人曲裾式素纱单衣被盗？</h3><h4 style="color:black;text-align:left">真相：上述传闻不实。今年是长沙马王堆汉墓考古发掘50周年，湖南博物院特别推出“彼美人兮一两汉罗马时期女性文物展”，其中一件展品--辛追夫人的曲裾式素纱单衣引发部分网友的疑惑：“这件衣服不是被盗、被毁了吗？”“是真品吗?还是复制品？”对此，湖南博物院辟谣称，辛追夫人曲裾式素纱单衣从未被盗，一直都在文物库房精心保存。事实上，辛追夫人共有两件素纱单衣出土，一件是直裾式素纱单衣，49克，另一件是曲裾式素纱单衣，48克，更轻更大。此次是曲裾式素纱单衣自出土以来的首次展出。据马王堆汉墓文物部门介绍，曾经被盗的是直裾式素纱单衣，追回后也不断在展出。曲裾式素纱单衣则一直完好保存在库房。(来源:“湖南省互联网举报中心”微信公众号)</h4>', 
                color: '#ffcccb', 
                fontSize: '30' 
            },
            { 
                text: '唐山打人', 
                content: '<h3 style="color:red;">谣言：“唐山烧烤店打人事件”中受伤女子去世？</h3><h4 style="color:black;text-align:left">真相：唐山烧烤店打人事件发生后持续引发关注讨论，有账号恶意编造伤者去世等相关谣言，造成恶劣社会影响。据河北省公安厅通报，根据司法鉴定科学技术研究院出具的司法鉴定意见书，4名被害人损伤程度为轻伤(二级)或轻微伤，目前伤情已好转;9名犯罪嫌疑人已被抓获归案。纪检监察机关对相关违纪违法问题开展审查调查。与此同时，微博平台排查相关违规内容，并依据社区公约等相关规定处置一批违规微博和违规账号，清理谣言内容。(来源:河北省纪委监委、河北省公安厅、河北省委网信办)</h4>', 
                color: '#ffe6cc', 
                fontSize: '30' 
            },
            { 
                text: '高考泄题', 
                content: '<h3 style="color:red;">谣言：甘肃、广东、安徽高考泄题？今年高考数学平均分创新低？</h3><h4 style="color:black;text-align:left">真相：上述地区不存在考前泄题的情况。教育部教育考试院发布通报称，甘肃涉数学全国乙卷事件，系考中作弊;广东涉数学全国新高考I卷事件，系恶意编辑“占坑帖”;安徽某考生自称“考前押中语文全国乙卷试题”，也是考后恶意编辑的“占坑帖”。此外，针对“今年高考数学平均分创新低”的说法，江苏、福建、广东等多省辟谣称，各科平均分尚未公布。(来源:中国教育考试网、甘肃地区联合辟谣平台、安徽省互联网违法和不良信息举报中心、福建省互联网辟谣平台、江苏省教育考试院、广东省教育考试院)</h4>', 
                color: '#cce0ff', 
                fontSize: '50' 
            },
            { 
                text: '太空授课', 
                content: '<h3 style="color:red;">谣言：中共空间站太空授课实验造假？</h3><h4 style="color:black;text-align:left">真相：近日，有外国网民质疑中国航天员“天宫课堂”的拍摄地不在太空站，理由是水杯以及杯中的水“没有在失重环境下漂浮起来”，更有人借此诬称“中国根本没有发射空间站”。中国航天科技集团、中国航天新媒体矩阵“我们的太空”、中国科协科学技术传播中心给出了权威的解释，水杯是为了便于实验用魔术贴固定在桌子上的，杯中的水没有飘洒出来，则是因为水表面的张力在起作用。而且，国际上围绕中国空间站应用的多项实验早就展开了。(来源:中国航天科技集团、中国航天新媒体矩阵“我们的太空”、中国科协科学技术传播中心)</h4>', 
                color: '#b3e1ff', 
                fontSize: '30' 
            },
            { 
                text: '猴痘', 
                content: '<h3 style="color:red;">谣言：上海出现猴痘病例？</h3><h4 style="color:black;text-align:left">真相：有人借助公众对猴痘疫情的关注和担忧，编造所谓“上海前滩出现猴痘”的谣言，引发恐慌。经向有关疾控部门确认，上海目前没有猴痘病例，中国大陆也尚未发现猴痘病例。(来源:新华社、“上海网络辟谣”公众号)</h4>', 
                color: '#ffd1dc', 
                fontSize: '30' 
            },
            { 
                text: '食品安全', 
                content: '<h3 style="color:red;">谣言：山东招远一幼儿园给学生提供淋巴肉？</h3><h4 style="color:black;text-align:left">真相：上述信息失实。8月13日，招远市联合调查组通报称，经对网传幼儿园使用问题食材一事深入调查，查明系由该园离职厨师赵某某散布不实信息引发。因涉嫌虚构事实扰乱公共秩序，赵某某已被公安机关依法行政拘留。(来源:山东省互联网联合辟谣平台、烟台市互联网联合辟谣平台、招远市联合调查组)</h4>', 
                color: '#c2f0c2', 
                fontSize: '30' 
            },
            { 
                text: '猫一杯', 
                content: '<h3 style="color:red;">谣言：在法国巴黎意外捡到国内小学生秦朗的寒假作业</h3><h4 style="color:black;text-align:left">真相：猫一杯事件，即“秦朗巴黎丢寒假作业”事件，是一起由千万级粉丝网红“Thurman猫一杯”（原名徐嘉艺）引发的网络虚假信息风波。该事件起源于2024年2月，网红“猫一杯”在社交媒体上发布视频，声称自己在法国巴黎意外捡到国内小学生秦朗的寒假作业，并公开寻找失主，此视频迅速在网络上走红，引发了大量关注和讨论。然而，随着事件的发酵，视频内容的真实性开始受到质疑，有网友指出这可能是一场为了博取眼球而精心策划的虚假摆拍。最终，公安机关介入调查，并确认该视频系“猫一杯”与其同事共同编造的虚假信息。(来源:杭州市公安局西湖区分局)</h4>', 
                color: '#ffe2b2', 
                fontSize: '30' 
            },
            { 
                text: '胖猫', 
                content: '<h3 style="color:red;">谣言：利用感情进行金钱诈骗？</h3><h4 style="color:black;text-align:left">真相：该事件的主角是一位年仅21岁的游戏代练，网名为“胖猫”，因游戏天赋过人，他选择成为一名代练，并在网络游戏中结识了女友谭竹。两人在交往期间，胖猫对谭竹倾注了大量情感与金钱，转账金额高达51万元人民币。然而，谭竹被指控利用感情进行金钱诈骗，及在与胖猫交往过程中多次提出分手。最终，胖猫于2024年4月11日凌晨在重庆长江大桥跳江自杀，事件引发了网友们的哀悼之情，警方经过调查未发现谭竹有诈骗行为。(来源:网络及各大媒体)</h4>', 
                color: '#ffb3b3', 
                fontSize: '30' 
            },
            { 
                text: '高价寻狗', 
                content: '<h3 style="color:red;">谣言：悬赏200万人民币为寻找丢失“天狗”</h3><h4 style="color:black;text-align:left">真相：郑州高价寻狗事件是一起引发社会广泛关注的网络事件。2023年7月9日，一则在郑州流传的寻狗启事称一只名为“天狼”的犬在北龙湖南河边走失，提供重要线索者奖励200万人民币。经过警方调查，该启事系某传媒有限公司法人杜撰的不实信息，相关责任人已被依法处理。(来源:河南省郑州市公安局)</h4>', 
                color: '#f0d5a0', 
                fontSize: '30' 
            },
            { 
                text: '粉色头发', 
                content: '<h3 style="color:red;">谣言：因染粉色头发而引发了大量网友的批评和谩骂</h3><h4 style="color:black;text-align:left">真相：事件的主角是24岁的郑灵华，她因染了一头粉色头发并分享了与爷爷共享研究生录取通知书的温馨照片而遭到无端的网络暴力。郑灵华的照片在网络上迅速扩散，引发大量批评和攻击，最终导致她因承受巨大心理压力不幸离世。这一事件引发了社会对于网络暴力问题的广泛关注和深刻反思。(来源:网络及各大媒体)</h4>', 
                color: '#f5c7e6', 
                fontSize: '30' 
            }
            
        ];

        // 存储所有文本对象的信息
        const cloudTexts = [];

        // 初始化文本对象
        function init() {
            textData.forEach((data) => {
                ctx.font = `${data.fontSize}px SimHei`; // 设置字体以测量宽度
                const fontSize = parseInt(data.fontSize, 10);
                const textWidth = ctx.measureText(data.text).width;
                const padding = 50;
                const speed = Math.random() * 0.3 + 0.3; // 速度介于0.3到0.6之间
                const textObj = {
                    text: data.text,
                    content: data.content,
                    x: Math.random() * (canvas.width - textWidth - padding * 2) + padding, // 确保文本不超出画布右边界
                    y: Math.random() * (canvas.height - fontSize - padding * 2) + padding, // 确保文本不超出画布底部
                    dx: speed, // X方向初始速度
                    dy: -speed, // Y方向初始速度 (向上移动)
                    fontSize: fontSize,
                    color: data.color,
                    paused: false,  // 标志文本是否暂停
                    originalDx: speed,  // 保存原始的dx
                    originalDy: -speed   // 保存原始的dy
                };
                cloudTexts.push(textObj);
            });

            // 每帧更新
            requestAnimationFrame(update);
        }

        // 更新动画
        function update() {
            // 清空画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 更新每个文本的位置并绘制
            cloudTexts.forEach((textObj) => {
                if (!textObj.paused) {
                    textObj.x += textObj.dx;
                    textObj.y += textObj.dy;

                    // 碰到右边或上边：反向移动
                    if (textObj.x + ctx.measureText(textObj.text).width >= canvas.width || textObj.y <= textObj.fontSize) {
                        textObj.dx = -Math.abs(textObj.dx); // X 方向反向（确保是负数）
                        textObj.dy = Math.abs(textObj.dy);  // Y 方向反向（确保是正数）
                    }

                    // 碰到左边或下边：反向移动
                    if (textObj.x <= 0 || textObj.y + textObj.fontSize >= canvas.height) {
                        textObj.dx = Math.abs(textObj.dx);  // X 方向正向
                        textObj.dy = -Math.abs(textObj.dy); // Y 方向负向
                    }
                }

                // 绘制文本
                ctx.font = `${textObj.fontSize}px SimHei`; // 设置字体
                ctx.fillStyle = textObj.color; // 设置文本颜色
                ctx.fillText(textObj.text, textObj.x, textObj.y);
            });

            // 下一帧
            requestAnimationFrame(update);
        }

        // 处理点击事件
        canvas.addEventListener('click', function (event) {
            const rect = canvas.getBoundingClientRect();
            const clickX = event.clientX - rect.left;
            const clickY = event.clientY - rect.top;

            // 检查点击是否落在某个文本上
            cloudTexts.forEach((textObj) => {
                ctx.font = `${textObj.fontSize}px SimHei`; // 确保字体设置正确以测量宽度
                const textWidth = ctx.measureText(textObj.text).width;
                const textHeight = textObj.fontSize; // 近似高度

                if (clickX >= textObj.x && clickX <= textObj.x + textWidth &&
                    clickY >= textObj.y - textHeight && clickY <= textObj.y) {
                    // 如果点击到文本，显示模态弹窗并设置对应内容
                    showModal(textObj.text, textObj.content);
                }
            });
        });

        // 处理鼠标移动事件
        canvas.addEventListener('mousemove', function (event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // 检查鼠标是否悬停在某个文本上
            cloudTexts.forEach((textObj) => {
                ctx.font = `${textObj.fontSize}px SimHei`; // 确保字体设置正确以测量宽度
                const textWidth = ctx.measureText(textObj.text).width;
                const textHeight = textObj.fontSize; // 近似高度

                if (mouseX >= textObj.x && mouseX <= textObj.x + textWidth &&
                    mouseY >= textObj.y - textHeight && mouseY <= textObj.y) {
                    // 如果鼠标悬停，暂停该文本
                    if (!textObj.paused) {
                        textObj.paused = true;
                        textObj.originalDx = textObj.dx;  // 只在第一次暂停时保存速度
                        textObj.originalDy = textObj.dy;
                        textObj.dx = 0;
                        textObj.dy = 0;
                    }
                } else {
                    // 如果鼠标移开，恢复该文本的运动（如果是暂停状态）
                    if (textObj.paused) {
                        textObj.paused = false;
                        textObj.dx = textObj.originalDx;
                        textObj.dy = textObj.originalDy;
                    }
                }
            });
        });

        // 显示模态弹窗函数
        function showModal(title, content) {
            modalTitle.innerHTML = title;
            modalBody.innerHTML = content;
            modalOverlay.style.display = 'flex'; // 使用 Flexbox 居中显示
        }

        // 关闭模态弹窗
        closeModal.addEventListener('click', function () {
            modalOverlay.style.display = 'none';
            modalBody.innerHTML = '';
        });

        // 点击遮罩层关闭模态弹窗
        modalOverlay.addEventListener('click', function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.style.display = 'none';
                modalBody.innerHTML = '';
            }
        });

        // 启动动画
        init();


/*图片滚动播放器*/
const scrollWrapper = document.querySelector('.scroll-wrapper');

// 鼠标进入停止滚动
scrollWrapper.addEventListener('mouseenter', () => {
    scrollWrapper.style.animationPlayState = 'paused';
});

// 鼠标离开继续滚动
scrollWrapper.addEventListener('mouseleave', () => {
    scrollWrapper.style.animationPlayState = 'running';
});
