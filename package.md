```json
{
  "name": "agents-playground",
  "version": "0.1.0",
  "private": true, //防止发布到公共仓
  "scripts": {
    "dev": "next dev", // 启动开发服务器
    "build": "next build", // 构建项目
    "start": "next start", // 启动生产服务器
    "lint": "next lint" // 运行代码风格检查
  },
  "dependencies": {
    "@livekit/components-react": "^2.3.1", // LiveKit的React组件库
    "@radix-ui/react-dropdown-menu": "^2.0.6", // Radix UI的下拉菜单组件
    "cookies-next": "^4.1.1", // 跨路由的cookies管理库
    "framer-motion": "^10.16.16", // 动画库
    "js-yaml": "^4.1.0", // YAML解析库
    "livekit-client": "^2.1.5", // LiveKit客户端SDK
    "livekit-server-sdk": "^2.1.2", // LiveKit服务器SDK
    "lodash": "^4.17.21", // 实用工具库
    "next": "^14.0.4", // React框架的Next.js
    "qrcode.react": "^3.1.0", // 二维码React组件
    "react": "^18", // React框架
    "react-dom": "^18" // React DOM
  },
  "devDependencies": {
    "@types/js-yaml": "^4.0.9", // js-yaml的TypeScript类型定义
    "@types/lodash": "^4.17.0", // lodash的TypeScript类型定义
    "@types/node": "^20.10.4", // Node.js的TypeScript类型定义
    "@types/react": "^18.2.43", // React的TypeScript类型定义
    "@types/react-dom": "^18", // React DOM的TypeScript类型定义
    "autoprefixer": "^10.4.16", // 自动添加CSS前缀的PostCSS插件
    "eslint": "^8", // ESLint代码检查工具
    "eslint-config-next": "14.2.4", // Next.js推荐的ESLint配置
    "postcss": "^8.4.31", // CSS处理工具
    "tailwindcss": "^3.3.5", // CSS框架
    "typescript": "^5.3.3" // TypeScript编程语言
  }
}
```