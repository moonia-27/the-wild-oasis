# The Wild Oasis

一个酒店管理后台项目，基于 React、React Query 和 Supabase 构建。

已通过 Netlify 和 Vercel 部署，支持在线访问和体验。

在线访问地址:
https://the-wild-oasis-27.netlify.app
https://the-wild-oasis-nine-delta.vercel.app

## 功能简介

- 酒店房型管理（Cabins）：表格视图显示照片、名称、容量、价格和折扣，支持新增、编辑、删除和上传照片
- 订单管理（Bookings）：表格视图显示抵达/离开日期、状态、已付金额、客舱和客人数据，支持状态过滤
- 用户管理（Users）：注册、登录、上传头像、修改姓名和密码，仅酒店员工可注册
- 数据仪表盘（Dashboard）：显示近 7/30/90 天的入住、离店、预订、销售、入住率等统计，支持筛选
- 支持筛选、分页、数据统计、深色模式
- 预订办理入住、删除、确认付款、添加早餐等操作
- 客人信息包括全名、邮箱、身份证、国籍及国旗
- 应用范围设置：早餐价格、最小/最大住宿天数、最大客人人数
- 酒店每日销售额和额外销售额（早餐）图表，住宿时长统计图表

## 技术栈

- React
- React Query
- Supabase
- styled-components
- Context API
- React Hook Form
- React Router

## 快速开始

1. 克隆项目

   ```
   git clone https://github.com/moonia-27/the-wild-oasis.git
   ```

2. 安装依赖

   ```
   npm install
   ```

3. 启动开发服务器

   ```
   npm run dev
   ```

4. 浏览器访问
   ```
   http://localhost:5173
   ```

## 配置 Supabase

请在 `src/services/supabase.js` 中填写你的 Supabase 项目地址和密钥。

## 已实现功能

- 用户注册、登录，支持上传头像、修改姓名和密码
- 客舱管理：表格视图显示照片、名称、容量、价格和折扣，支持新增、编辑、删除和上传照片
- 预订管理：表格视图显示抵达/离开日期、状态、已付金额、客舱和客人数据，支持状态过滤
- 预订办理入住、删除、确认付款、添加早餐等操作
- 仪表盘显示近 7/30/90 天的入住、离店、预订、销售、入住率等统计
- 酒店每日销售额和额外销售额（早餐）图表，住宿时长统计图表
- 应用范围设置和黑暗模式

## 待实现功能

1. 创建预订（booking）
2. 为每一天的客舱设定不同价格
3. 客人退房后跳转页面生成 PDF 发票，并发送到顾客邮箱

## 其他说明

- 本项目仅供学习和练习使用。
- 如有问题欢迎提 issue 或 PR。
