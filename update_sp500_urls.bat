@echo off
REM Quick script to update S&P 500 project URLs in portfolio

echo ============================================================
echo S&P 500 Project URL Updater
echo ============================================================
echo.

set /p render_url="Enter your Render URL (e.g., https://sp500-dashboard.onrender.com): "

if "%render_url%"=="" (
    echo Error: URL cannot be empty!
    pause
    exit /b
)

echo.
echo Updating URLs in index.html...
echo.

REM Note: Windows doesn't have sed, so we'll create a PowerShell command
powershell -Command "(gc index.html) -replace 'YOUR_RENDER_URL_HERE', '%render_url%' | Out-File -encoding ASCII index.html"

echo ✅ URLs updated successfully!
echo.
echo Your portfolio now points to: %render_url%
echo.
echo Next steps:
echo 1. Save your screenshot as: images\sp500-dashboard.jpg
echo 2. Open portfolio in browser to verify
echo 3. Deploy to GitHub/Vercel
echo.
pause
