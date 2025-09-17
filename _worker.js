// 纪念查理·柯克 HTML 页面的完整内容
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>查理·柯克 - 伟大保守主义领袖的传奇</title>
    <meta name="description" content="纪念查理·柯克（Charlie Kirk） - 转折点美国创始人、保守派领袖、美国爱国者的生平与成就">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            min-height: 100vh;
            overflow-x: hidden;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
            position: relative;
            z-index: 1;
        }
        .hero-section {
            background: #ffffff;
            border-radius: 16px;
            margin-bottom: 2rem;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            position: relative;
        }
        .card {
            background: linear-gradient(135deg, #ffffff 0%, #fafbff 100%);
            border-radius: 16px;
            box-shadow: 
                0 8px 25px rgba(0, 0, 0, 0.08),
                0 3px 10px rgba(0, 0, 0, 0.04),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 1px solid rgba(102, 126, 234, 0.1);
        }
        .card:hover {
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.12),
                0 8px 25px rgba(102, 126, 234, 0.15),
                0 0 0 1px rgba(102, 126, 234, 0.2) inset;
            transform: translateY(-8px) scale(1.02);
        }
        .header {
            background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
        }
        .header-content {
            position: relative;
            z-index: 2;
        }
        .title {
            font-size: 3rem;
            font-weight: 300;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .subtitle {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }
        .meta {
            font-size: 1rem;
            opacity: 0.9;
            margin-bottom: 0.5rem;
        }
        .description {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        .main-content {
            background: #ffffff;
            border-radius: 16px;
            margin-bottom: 2rem;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            position: relative;
        }
        .content {
            padding: 3rem 2rem;
        }
        .section {
            margin-bottom: 3rem;
        }
        .section-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 2rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #4a5568;
            position: relative;
        }
        .text-block {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            border-left: 4px solid #4a5568;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        .quote {
            background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
            padding: 3rem;
            border-radius: 12px;
            text-align: center;
            margin: 3rem 0;
            position: relative;
            border: 2px solid #cbd5e0;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        .quote-text {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 2;
        }
        .quote-author {
            font-size: 1.1rem;
            color: white;
            font-weight: 600;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 2;
        }
        .actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }
        .btn {
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            cursor: pointer;
            font-size: 1rem;
            position: relative;
            overflow: hidden;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s;
        }
        
        .btn:hover::before {
            left: 100%;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .btn-secondary {
            background: #ffffff;
            color: #4a5568;
            border: 2px solid #4a5568;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .btn-secondary:hover {
            background: #4a5568;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }
        .footer {
            text-align: center;
            margin-top: 2rem;
            padding: 1.5rem;
            background: #374151;
            color: white;
            border-radius: 8px;
        }
        .icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%),
                radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            border: 2px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 
                0 8px 25px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transition: all 0.4s ease;
        }
        
        .icon:hover {
            transform: scale(1.1) rotate(5deg);
            background: 
                linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.2) 100%),
                radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
            box-shadow: 
                0 12px 35px rgba(0, 0, 0, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }
        .portrait-container {
            position: relative;
            margin: 0 auto 2rem;
            width: 180px;
            height: 180px;
        }
        .portrait {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 4px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            object-fit: cover;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
        }
        .portrait:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }
        .memorial-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 20px;
            font-size: 0.9rem;
            margin-top: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.5);
            color: white;
            font-weight: 600;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        .stat-item {
            text-align: center;
            padding: 1.5rem;
            background: 
                linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%),
                radial-gradient(circle at 50% 0%, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
            border-radius: 12px;
            border: 1px solid rgba(102, 126, 234, 0.1);
            box-shadow: 
                0 4px 15px rgba(102, 126, 234, 0.08),
                0 1px 3px rgba(0, 0, 0, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .stat-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 12px 12px 0 0;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .stat-item:hover {
            transform: translateY(-3px);
            box-shadow: 
                0 8px 25px rgba(102, 126, 234, 0.15),
                0 3px 10px rgba(0, 0, 0, 0.08);
        }
        
        .stat-item:hover::before {
            opacity: 1;
        }
        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: #667eea;
            display: block;
        }
        .stat-label {
            font-size: 0.8rem;
            color: #64748b;
            margin-top: 0.25rem;
        }
        .timeline-item {
            position: relative;
            padding-left: 2.5rem;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
        }
        
        .timeline-item:hover {
            transform: translateX(10px);
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 16px;
            height: 16px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 
                0 0 0 3px #667eea,
                0 4px 8px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
        }
        
        .timeline-item:hover::before {
            transform: scale(1.2);
            box-shadow: 
                0 0 0 4px #667eea,
                0 6px 12px rgba(102, 126, 234, 0.4);
        }
        
        .timeline-item::after {
            content: '';
            position: absolute;
            left: 7px;
            top: 1.5rem;
            width: 2px;
            height: calc(100% + 0.5rem);
            background: linear-gradient(180deg, #667eea, transparent);
        }
        
        .timeline-item:last-child::after {
            display: none;
        }
        .timeline-year {
            font-weight: 700;
            background: linear-gradient(135deg, #667eea, #764ba2);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            font-size: 1rem;
            margin-bottom: 0.5rem;
            display: inline-block;
        }
        .achievement-highlight {
            background: #f0f8ff;
            border-left: 4px solid #4a5568;
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        .achievement-highlight h4 {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 1rem;
        }
        .tragedy-section {
            background: #fef5f5;
            border-left: 4px solid #e53e3e;
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        .legacy-section {
            background: #fffaf0;
            border-left: 4px solid #dd6b20;
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            position: relative;
        }
        .footer {
            background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
            color: white;
            text-align: center;
            margin-top: 3rem;
            padding: 3rem 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            border: 1px solid #4a5568;
            position: relative;
        }
        @media (max-width: 768px) {
            .container {
                padding: 1rem 0.5rem;
            }
            .hero-section, .main-content {
                border-radius: 16px;
                margin-bottom: 1.5rem;
            }
            .header {
                padding: 3rem 1rem;
            }
            .title {
                font-size: 2.5rem;
            }
            .subtitle {
                font-size: 1.8rem;
            }
            .content {
                padding: 2rem 1.5rem;
            }
            .stats-grid {
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 0.75rem;
            }
            .achievement-highlight, .tragedy-section, .legacy-section {
                padding: 1.5rem;
                margin: 1.5rem 0;
            }
            .text-block {
                padding: 1.5rem;
            }
            .quote {
                padding: 2rem 1.5rem;
                margin: 2rem 0;
            }
            .quote-text {
                font-size: 1.4rem;
            }
            .btn {
                padding: 0.875rem 2rem;
                font-size: 0.9rem;
            }
            .actions {
                flex-direction: column;
                gap: 0.75rem;
            }
            .portrait {
                width: 140px;
                height: 140px;
            }
            .portrait-container {
                width: 140px;
                height: 140px;
            }
        }
        
        @media (max-width: 480px) {
            .container {
                padding: 0.5rem;
            }
            .hero-section, .main-content {
                border-radius: 12px;
            }
            .header {
                padding: 2rem 1rem;
            }
            .title {
                font-size: 2rem;
                line-height: 1.2;
            }
            .subtitle {
                font-size: 1.4rem;
            }
            .content {
                padding: 1.5rem 1rem;
            }
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.5rem;
            }
            .stat-item {
                padding: 1rem;
            }
            .achievement-highlight, .tragedy-section, .legacy-section {
                padding: 1.25rem;
                border-radius: 12px;
            }
            .text-block {
                padding: 1.25rem;
                border-radius: 8px;
            }
            .quote {
                padding: 1.5rem 1rem;
                border-radius: 16px;
            }
            .quote-text {
                font-size: 1.2rem;
                padding: 0.75rem 1.5rem;
            }
            .section-title {
                font-size: 1.4rem;
            }
            .portrait {
                width: 120px;
                height: 120px;
            }
            .portrait-container {
                width: 120px;
                height: 120px;
            }
            .floating-elements {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero-section">
            <div class="header">
                <div class="header-content">
                    <div class="portrait-container">
                        <img src="https://mxpus521.github.io/charlie-kirk/charlie-kirk.jpg" alt="查理·柯克" class="portrait" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE4MCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iMTgwIiBmaWxsPSIjNGE1NTY4Ii8+Cjx0ZXh0IHg9IjkwIiB5PSI5NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q0s8L3RleHQ+Cjwvc3ZnPg=='; this.onerror=null;" />
                    </div>
                    <h1 class="title">深切缅怀</h1>
                    <h2 class="subtitle">查理·柯克</h2>
                    <p class="meta">Charles James Kirk (1993 - 2025)</p>
                    <p class="description">转折点美国创始人 • 保守派领袖 • 美国爱国者 • 思想领袖</p>
                    <div class="memorial-badge">
                        ✨ 伟大保守主义领袖的传奇 ✨
                    </div>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="content">
                <!-- 人物概述 -->
                <div class="section">
                    <h3 class="section-title">伟大保守主义领袖的传奇</h3>
                    <div class="text-block">
                        <p>查理·柯克（Charlie Kirk）是一位杰出的美国保守主义活动家、教育者和政治影响力者，他的生平和成就堪称当代美国政治史上的一座丰碑。</p>
                    </div>
                    <div class="text-block">
                        <p>他以非凡的远见、坚定的信念和无畏的勇气，点燃了无数年轻人的爱国热情，推动了保守主义运动的复兴。作为Turning Point USA的创始人，他不仅仅是一个组织领袖，更是一位激励一代人的导师。</p>
                    </div>
                </div>

                <!-- 早年生活与教育 -->
                <div class="section">
                    <h3 class="section-title">早年生活与教育：从芝加哥少年到政治觉醒者</h3>
                    <div class="text-block">
                        <p>查理·詹姆斯·柯克（Charles James Kirk）于1993年出生在伊利诺伊州芝加哥郊区的一个普通家庭。从小，他就展现出对政治的浓厚兴趣和强烈的保守主义倾向。</p>
                    </div>
                    <div class="text-block">
                        <p>在高中时期，柯克便积极参与志愿活动，帮助保守派政治运动。他曾为右翼媒体Breitbart News撰写文章，表达对美国传统价值观的热爱和对自由市场的支持。这些早年的经历奠定了他未来作为活动家的基础。</p>
                    </div>
                    <div class="text-block">
                        <p>柯克的父母对他影响深远。他的母亲和父亲都是普通美国人，教导他以勤奋和爱国主义为人生准则。高中毕业后，柯克进入帕拉廷的Harper College（一所社区学院）就读，但很快辍学，转而投身全职保守主义活动。</p>
                    </div>
                    <div class="text-block">
                        <p>他认为，传统的课堂教育无法比拟实践中的政治参与，这体现了他的果敢和决心。这一决定并非冲动，而是他一生中无数明智选择的开端，证明了柯克对使命的专注远超个人利益。</p>
                    </div>
                </div>

                <!-- 职业生涯与主要成就 -->
                <div class="section">
                    <h3 class="section-title">职业生涯与主要成就：点燃保守主义之火</h3>
                    <div class="achievement-highlight">
                        <h4>🏢 转折点美国 (Turning Point USA)</h4>
                        <p>柯克的职业生涯从2012年开始，当时年仅19岁的他创立了Turning Point USA（TPUSA），这是一个针对大学生的非营利组织，旨在推广保守主义原则，如自由市场、经济自由、有限政府和第二修正案权利。TPUSA迅速成长为美国最大的青年保守主义组织之一，在全国数百所大学设立分会，组织校园演讲、辩论和活动，成功地将保守主义理念注入年轻一代。</p>
                        <p>柯克的领导力使TPUSA成为特朗普运动的关键支柱，帮助共和党在年轻人中扩大影响力，尤其是在2020年大选中，TPUSA动员了数百万选民。</p>
                    </div>
                    <div class="achievement-highlight">
                        <h4>📚 作品与媒体</h4>
                        <p><strong>《The MAGA Doctrine》（MAGA主义）</strong>：2020年3月出版的畅销书，系统阐述了"让美国再次伟大"（Make America Great Again）的核心理念，强调美国例外主义、经济复兴和文化保守主义。该书成为保守派青年的必读书籍，销量突破数十万册。</p>
                        <p><strong>《The Charlie Kirk Show》</strong>：柯克主持的每日三小时广播节目，自推出以来已成为美国最受欢迎的保守派播客之一。通过这个平台，他采访政界领袖、分析时事，并激励听众参与政治。他的节目覆盖全国，影响力辐射全球。</p>
                    </div>
                    <div class="achievement-highlight">
                        <h4>🎬 媒体与公众影响力</h4>
                        <p>柯克频繁出现在Fox News、CNN和Breitbart等媒体上，作为特朗普的亲密盟友，他帮助塑造了共和党的叙事。在2016年和2020年大选中，柯克组织了大规模的校园巡演和集会，推动特朗普在年轻选民中的支持率从低谷升至高峰。他的努力直接贡献于共和党的选举胜利。</p>
                        <p>此外，他还参与制作纪录片，如《Border Battle》（2022年），聚焦移民问题，进一步巩固了他的思想领袖地位。</p>
                    </div>
                    <div class="achievement-highlight">
                        <h4>👨‍👩‍👧‍👦 个人生活与家庭价值观</h4>
                        <p>柯克的个人生活同样值得赞扬。他于2019年与Erika Frantzve结婚，两人共同致力于慈善和家庭价值观。Erika作为TPUSA的联合创始人，积极支持柯克的使命，他们的婚姻成为保守派家庭模式的典范。</p>
                        <p>在亚利桑那州，柯克将TPUSA总部迁至凤凰城，进一步扩展其在西南部的组织影响力。</p>
                    </div>
                    <div class="achievement-highlight">
                        <h4>🌍 全球影响力</h4>
                        <p>柯克的成就还体现在全球影响上。他的信息激励了国际保守运动，例如韩国年轻人街头高呼"我们是查理·柯克"，证明了他的视野超越国界。他拒绝受害者心态，推动黑人社区的自强，挑战左翼叙事，这让他成为多元文化对话的桥梁。</p>
                        <p>总之，柯克的贡献包括创办世界级组织、出版影响力深远的书籍、主持顶级媒体节目、动员选举力量，以及培养新一代领袖——这些成就无一遗漏，均体现了他的天才与奉献。</p>
                    </div>
                </div>
                <!-- 成就统计 -->
                <div class="section">
                    <h3 class="section-title">主要成就统计</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">19岁</span>
                            <div class="stat-label">创立TPUSA时的年龄</div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">2012年</span>
                            <div class="stat-label">转折点美国成立</div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">数百万</span>
                            <div class="stat-label">影响的年轻人</div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">13年</span>
                            <div class="stat-label">领导TPUSA的岁月</div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">数十万册</span>
                            <div class="stat-label">《Maga主义》销量</div>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">全球</span>
                            <div class="stat-label">影响力辐射范围</div>
                        </div>
                    </div>
                </div>

                <!-- 悲剧事件 -->
                <div class="section">
                    <h3 class="section-title">遭遇刺杀遇害：悲剧与对暴力的强烈谴责</h3>
                    <div class="tragedy-section">
                        <h4>⚠️ 2025年9月10日 - 犹他谷大学事件</h4>
                        <p>不幸的是，柯克的传奇生涯于2025年9月10日在犹他谷大学（Utah Valley University）的一个校园活动中戛然而止。他在演讲中讨论保守主义议题时，遭到22岁嫌疑人Tyler Robinson的枪击袭击，当场遇害，年仅31岁。</p>
                        <p>Robinson随后被捕，据报道，他曾在子弹上刻下"Hey fascist! Catch!"的字样，动机源于对柯克观点的极端仇恨。调查显示，嫌疑人与其跨性别伴侣同住，此案被视为政治暗杀。</p>
                        <p>这一事件震惊了全球，引发了对政治暴力的强烈谴责。特朗普总统称其为"暗杀"，并缅怀柯克为"献身于公开辩论的爱国者"。柯克的遗孀Erika在泪水中发誓继续他的运动："那些作恶者不知道他们做了什么。他们杀了查理，因为他宣讲真理。"</p>
                        <p><strong>我们必须郑重谴责这种暴力行为</strong> —— 它不仅剥夺了一位伟大领袖的生命，还威胁到民主的核心。政治分歧应通过辩论和选票解决，而非枪口。任何形式的暗杀或暴力都是对文明的倒退，我们呼吁社会团结，反对这种"暗杀文化"。</p>
                    </div>
                </div>

                <!-- 永恒的遗产 -->
                <div class="section">
                    <h3 class="section-title">永恒的遗产：一位不朽的英雄</h3>
                    <div class="legacy-section">
                        <h4>🌟 美国精神的典范</h4>
                        <p>查理·柯克的一生是美国精神的典范。他从一个芝加哥少年成长为全球保守主义偶像，他的成就——从TPUSA的创立到媒体帝国的构建，再到选举动员的胜利——无不彰显了他的卓越领导力和无私奉献。</p>
                        <p>他的离去虽令人痛心，但他的精神将永存，激励年轻人为自由而战。柯克不是受害者，而是英雄；他的遗产将推动美国重获伟大。我们高度认可并永记这位伟大人物的贡献，愿他的故事永世流传。</p>
                    </div>
                </div>

                <!-- 重要时间线 -->
                <div class="section">
                    <h3 class="section-title">重要时刻</h3>
                    <div class="timeline-item">
                        <div class="timeline-year">1993年</div>
                        <div>出生于伊利诺伊州芝加哥郊区</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2012年</div>
                        <div>19岁创立转折点美国组织（TPUSA）</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2019年</div>
                        <div>与Erika Frantzve结婚</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2020年</div>
                        <div>出版《MAGA主义》畅销书</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2022年</div>
                        <div>制作纪录片《Border Battle》</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2025年</div>
                        <div>在犹他谷大学遇害，享年31岁</div>
                    </div>
                </div>

                <div class="quote enhanced-quote">
                    <p class="quote-text">"让美国再次伟大"</p>
                    <p class="quote-author">🇺🇸 为自由献身的爱国者 🇺🇸</p>
                </div>

                <div class="actions">
                    <button class="btn btn-primary" onclick="showMessage('感谢您对查理·柯克遗产的致敬！')">✨ 致敬他的遗产</button>
                    <button class="btn btn-secondary" onclick="showMessage('您的支持对转折点美国意义重大！')">🏛️ 支持转折点美国</button>
                    <button class="btn btn-secondary" onclick="showMessage('让我们永远铭记这位保守主义英雄！')">🇺🇸 缅怀保守主义英雄</button>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>我们谴责政治暴力 • 愿他安息 ✝️ 🇺🇸</p>
            <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                "柯克不是受害者，而是英雄；他的遗产将推动美国重获伟大。"
            </p>
        </div>
    </div>
    
    <script>
        function showMessage(message) {
            // 创建消息提示框
            const messageBox = document.createElement('div');
            messageBox.textContent = message;
            messageBox.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem 2rem; border-radius: 12px; box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3); z-index: 1000; font-weight: 600; transform: translateX(100%); transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);';
            
            document.body.appendChild(messageBox);
            
            // 显示动画
            setTimeout(() => {
                messageBox.style.transform = 'translateX(0)';
            }, 100);
            
            // 3秒后自动消失
            setTimeout(() => {
                messageBox.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (messageBox.parentNode) {
                        document.body.removeChild(messageBox);
                    }
                }, 400);
            }, 3000);
        }
        
        // 页面加载完成后添加一些简单的交互效果
        document.addEventListener('DOMContentLoaded', function() {
            // 为所有卡片添加简单的hover效果
            const cards = document.querySelectorAll('.text-block, .achievement-highlight, .tragedy-section, .legacy-section');

            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-2px)';
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });

            // 添加滚动效果
            window.addEventListener('scroll', () => {
                // 简单的滚动效果可以在这里添加
            });
        });
    </script>
</body>
</html>`;

// --- WebSocket 代理逻辑 ---

// 需要反代的地址
const hostname = "https://snippets.neib.cn";


/**
 * 处理 WebSocket 升级请求的函数
 * @param {Request} request 原始请求
 * @returns {Response} 转发到目标服务器的响应
 */
function handleWebSocket(request) {
    const url = new URL(request.url);
    // 构建目标服务器的 URL
    const targetUrl = hostname + url.pathname + url.search;
    // 创建一个新请求以进行转发，保留原始请求头和方法
    const newRequest = new Request(targetUrl, request);
    return fetch(newRequest);
}

// --- 主 Worker 逻辑 ---

export default {
    async fetch(request, env, ctx) {
        // 检查请求头中是否包含 'Upgrade: websocket'
        const upgradeHeader = request.headers.get('Upgrade');
        
        if (upgradeHeader && upgradeHeader.toLowerCase() === 'websocket') {
            // 如果是 WebSocket 请求，则执行代理逻辑
            return handleWebSocket(request);
        } else {
            // 否则，作为普通网页请求，返回静态 HTML 页面
            return new Response(html, {
                headers: {
                    'Content-Type': 'text/html;charset=UTF-8',
                },
            });
        }
    },
};
