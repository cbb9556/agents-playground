// 定义一个名为nextConfig的常量对象，用于配置Next.js应用
// 目前配置了reactStrictMode为false，意味着在开发环境中禁用React严格模式
// 这一配置项影响React组件的渲染方式，在严格模式下，React会采用一种更严格的渲染方式
// 以帮助开发者发现潜在的问题，但在某些情况下可能会增加性能开销
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// 将nextConfig对象导出，使得其他模块可以通过require引入这些配置
// 这是Node.js的模块系统中导出配置或功能的一种常见方式
module.exports = nextConfig;
