@echo off
title Finance-KYC Training Runner
echo ===========================================
echo   启动 Finance-KYC Training 项目
echo ===========================================

:: 结束可能残留的进程
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM npm.exe >nul 2>&1

:: 进入项目根目录
cd /d "%~dp0"

echo.
echo [1] 检查 node_modules 是否存在...
if not exist "node_modules" (
    echo node_modules 不存在，正在自动安装依赖...
    call npm install
) else (
    echo 已检测到 node_modules，跳过安装。
)

echo.
echo [2] 启动 dev 服务器...
call npm run dev

echo.
echo ===========================================
echo   项目已退出（如有报错请查看上方信息）
echo   按任意键关闭窗口...
echo ===========================================
pause >nul
