@echo off
cd /d "%~dp0"
echo ======================================================================
echo   Pushing Graphic Designer Portfolio Website to GitHub...
echo   Repo: https://github.com/sabghatkhan96-ship-it/graphic-disanger-porfolio-websiat.git
echo ======================================================================

git init
git config user.name "sabghatkhan96-ship-it"
git config user.email "sabghatkhan96-ship-it@users.noreply.github.com"
git add index.html portfolio.html services.html about.html contact.html styles.css script.js mockup-studio.js vercel.json images start-server.bat push-to-github.bat
git commit -m "Complete Graphic Designer Portfolio Website (12 Projects, 36 3D Mockups)"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/sabghatkhan96-ship-it/graphic-disanger-porfolio-websiat.git
git push -u origin main --force

echo.
echo ======================================================================
echo   SUCCESSFULLY PUSHED TO GITHUB!
echo   Repo: https://github.com/sabghatkhan96-ship-it/graphic-disanger-porfolio-websiat
echo ======================================================================
