# 📘 Finance KYC Training 前端示例项目

这是一个用于「金融 KYC・契约照会」培训的小型前端项目。（后端被Mock了）
目标：让零基础/新手同学也能在自己的电脑上 **跑起来一个真实的前端项目**，配合课堂一起练习。

---

## 1️⃣ 需要提前准备什么？

在开始之前，请先完成下面两件事（很重要）：

1. **一台 Windows 电脑**
2. **安装 Node.js（推荐 LTS 版本）**

👉 安装 Node.js 的方法（大致步骤）

- 打开浏览器，搜索 `Node.js`
- 进入 Node.js 官方网站，下载「**LTS**」版本
- 一路「下一步」安装即可（保持默认设置就好）
- 安装完成后，重新启动一下电脑（建议）

安装好 Node.js 之后，系统里就会自动带上 npm，不需要额外安装。

---

## 2️⃣ 下载本项目代码

有两种方式，选一种即可：

### ✅ 方法 A：下载压缩包（适合完全新手）

1. 打开本项目的 GitHub 页面。
2. 点击绿色按钮 **「Code」**。
3. 选择 **「Download ZIP」**。
4. 下载完成后，把压缩包解压到你熟悉的位置，例如：

```text
桌面
└─ 项目
   └─ 金融KYC・契约照会ミニ系统
      └─ finance-kyc-training   ← 解压后的项目文件夹
✅ 方法 B：用 git clone（已经会用 git 的同学）
在你想放项目的目录打开终端，执行：
复制代码
Bash
git clone 仓库地址.git
克隆完成后，进入 finance-kyc-training 文件夹即可。

3️⃣ 项目文件结构说明
正常情况下，在 finance-kyc-training 文件夹里，你会看到类似结构：
复制代码
Text
finance-kyc-training/
├─ src/                # 源代码目录（组件、页面等都在这里）
├─ index.html          # 项目入口 HTML
├─ package.json        # 项目的依赖 & 脚本配置
├─ package-lock.json   # 依赖锁定文件（不用改）
├─ tsconfig.json       # TypeScript 配置
├─ vite.config.ts      # Vite 开发服务器 / 打包配置
└─ run.bat             # ⭐ 一键启动脚本（双击就能跑）
⚠️ node_modules/ 这个文件夹通常 不会上传到 GitHub，第一次运行时会自动创建。
4️⃣ 第一次运行项目（超简单版）
下面步骤只针对 Windows 用户，并且 已经安装好 Node.js。
打开 finance-kyc-training 文件夹。
找到文件：run.bat
直接双击 run.bat。
脚本会自动帮你做两件事：
检查依赖
如果发现没有 node_modules 文件夹
→ 会自动执行 npm install，帮你安装依赖（第一次会稍微久一点）。
启动开发服务器
自动执行 npm run dev
终端里会出现类似下面的文字：
复制代码
Text
VITE v5.x.x  ready in xx s

  ➜  Local:   http://localhost:5173/
当你看到这种 “Local: http://localhost:5173” 的地址时：
打开浏览器，在地址栏输入上面显示的地址（通常是 http://localhost:5173），按回车。
如果你已经能在浏览器里看到项目界面，
说明你成功完成：

✔ 环境搭建
✔ 依赖安装
✔ 项目启动

5️⃣ 第二次、第三次……以后怎么用？
以后再想重新打开项目时：
确认电脑已经打开。
打开项目文件夹 finance-kyc-training。
直接 双击 run.bat 即可。
因为依赖已经安装过了，脚本会自动跳过安装步骤，只启动服务器，所以会比第一次快很多。
6️⃣ 常见问题（Q&A）
❓ 双击 run.bat 一闪而过？
可能原因：
Node.js 没安装好，或者环境变量有问题。
建议：
按 Win + R → 输入 cmd → 回车，打开命令提示符。
输入：
复制代码
Bash
node -v
如果提示 “不是内部或外部命令”，说明 Node.js 没装好，需要重新安装。
❓ 终端显示启动成功，但浏览器打不开？
检查地址是否写对：http://localhost:5173
如果有别的前端项目占用了同一个端口，先关掉别的项目，再重新双击 run.bat。
❓ 学员需要改代码吗？
目前版本的设计是：
学员主要是：运行项目 + 操作界面
不需要修改配置文件
真正想改代码的同学，只要会基本的 VS Code 操作即可自由研究


