// 纪念查理·柯克 HTML 页面的完整内容
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>纪念查理·柯克</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background: #f8fafc;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
        }
        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            transition: all 0.3s ease;
        }
        .card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            transform: translateY(-2px);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        .title {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 0.5rem;
            letter-spacing: -0.025em;
        }
        .subtitle {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
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
        .content {
            padding: 2rem;
        }
        .section {
            margin-bottom: 2rem;
        }
        .section-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #e5e7eb;
        }
        .text-block {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid #667eea;
        }
        .quote {
            background: 
                linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%),
                radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            padding: 2.5rem;
            border-radius: 12px;
            text-align: center;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
            border: 3px solid #1e40af;
            box-shadow: 0 8px 32px rgba(30, 58, 138, 0.3);
        }
        .quote::before {
            content: '🦅 ⭐ 🗽 ⭐ 🦅 ⭐ 🗽 ⭐ 🦅 ⭐ 🗽 ⭐ 🦅 ⭐ 🗽 ⭐ 🦅 ⭐ 🗽 ⭐ 🦅 ⭐ 🗽 ⭐';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background: rgba(30, 58, 138, 0.1);
            color: rgba(255, 255, 255, 0.2);
            font-size: 1.5rem;
            line-height: 2;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            z-index: 0;
        }
        .quote-text {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 2;
            background: rgba(30, 58, 138, 0.8);
            padding: 1rem 2rem;
            border-radius: 8px;
            backdrop-filter: blur(10px);
        }
        .quote-author {
            font-size: 1.1rem;
            color: white;
            font-weight: 600;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
            position: relative;
            z-index: 2;
            background: rgba(239, 68, 68, 0.8);
            padding: 0.5rem 1.5rem;
            border-radius: 20px;
            display: inline-block;
            backdrop-filter: blur(10px);
        }
        .actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }
        .btn {
            padding: 0.75rem 2rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        .btn-secondary {
            background: white;
            color: #667eea;
            border: 2px solid #667eea;
        }
        .btn-secondary:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
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
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }
        .portrait {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            margin: 0 auto 1.5rem;
            border: 4px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            object-fit: cover;
            transition: all 0.3s ease;
        }
        .portrait:hover {
            transform: scale(1.05);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        .memorial-badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .enhanced-quote {
            position: relative;
            overflow: hidden;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        .stat-item {
            text-align: center;
            padding: 1rem;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border-radius: 8px;
            border: 1px solid #e2e8f0;
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
            padding-left: 2rem;
            margin-bottom: 1.5rem;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 12px;
            height: 12px;
            background: #667eea;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px #667eea;
        }
        .timeline-year {
            font-weight: 600;
            color: #667eea;
            font-size: 0.9rem;
        }
        .enhanced-card {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border: 1px solid #e2e8f0;
            position: relative;
        }
        .enhanced-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px 12px 0 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card enhanced-card">
            <div class="header">
                <img src="https://mxpus521.github.io/charlie-kirk/charlie-kirk.jpg" alt="查理·柯克" class="portrait" />
                <h1 class="title">深切缅怀</h1>
                <h2 class="subtitle">查理·柯克</h2>
                <p class="meta">1993 - 2025</p>
                <p class="description">转折点美国创始人 • 保守派领袖 • 美国爱国者</p>
                <div class="memorial-badge">
                    ✝️ 永远怀念
                </div>
            </div>
            
            <div class="content">
                <!-- 成就统计 -->
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">19</span>
                        <div class="stat-label">创立TPUSA时的年龄</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">数百万</span>
                        <div class="stat-label">影响的年轻人</div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">12年</span>
                        <div class="stat-label">领导TPUSA</div>
                    </div>
                </div>

                <div class="section">
                    <h3 class="section-title">生平简介</h3>
                    <div class="text-block">
                        <p>查理·柯克是一位具有远见卓识的保守派领袖，19岁时创立了转折点美国组织，将其发展成为美国最大的青年保守派组织之一。他对自由市场、有限政府和美国价值观的坚持激励了数百万年轻美国人。</p>
                    </div>
                    <div class="text-block">
                        <p>通过畅销书《MAGA主义》和《查理·柯克秀》，他成为保守派原则的有力代言人。2025年9月10日在犹他谷大学的悲剧性死亡，是保守派运动的巨大损失。</p>
                    </div>
                </div>

                <!-- 重要时间线 -->
                <div class="section">
                    <h3 class="section-title">重要时刻</h3>
                    <div class="timeline-item">
                        <div class="timeline-year">2012年</div>
                        <div>创立转折点美国组织</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2020年</div>
                        <div>出版《MAGA主义》畅销书</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2025年</div>
                        <div>在犹他谷大学遇害</div>
                    </div>
                </div>

                <div class="quote enhanced-quote">
                    <p class="quote-text">"让美国再次伟大"</p>
                    <p class="quote-author">🇺🇸 为自由献身的爱国者 🇺🇸</p>
                </div>

                <div class="actions">
                    <button class="btn btn-primary">致敬他的遗产</button>
                    <button class="btn btn-secondary">支持转折点美国</button>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>我们谴责政治暴力 • 愿他安息 ✝️ 🇺🇸</p>
        </div>
    </div>
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
