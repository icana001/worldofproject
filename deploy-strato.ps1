# WorldOfProject - Strato Deployment Script
# Run this script to deploy to Strato

$stratoHost = "54655661.ssh.w1.strato.hosting"
$stratoUser = "stu43098409"
$deployPath = "STRATO-apps/WorldOfProject"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  WorldOfProject - Strato Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Build the static site
Write-Host "[1/4] Building static site..." -ForegroundColor Yellow
pnpm dlx nuxt generate

# Copy to dist
Write-Host "[2/4] Preparing dist folder..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
Copy-Item -Recurse ".output/public" "dist"
Copy-Item "dist\.htaccess" "dist\.htaccess" -ErrorAction SilentlyContinue

# Git push
Write-Host "[3/4] Pushing to GitHub..." -ForegroundColor Yellow
git add -A
git commit -m "Build: Update static files for deployment"
git push

# Deploy to Strato
Write-Host "[4/4] Deploying to Strato..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Connecting to Strato server..." -ForegroundColor Cyan
Write-Host "Please enter password when prompted." -ForegroundColor Gray
Write-Host ""

# SSH commands to run on Strato
# 1. Git pull latest code
# 2. Copy dist/* to ~/WorldOfProject/ (domain document root)
$sshCommands = 'cd ~/STRATO-apps && if [ -d "WorldOfProject" ]; then cd WorldOfProject && git pull origin main; else git clone https://github.com/icana001/worldofproject.git WorldOfProject; fi && echo "Copying files to domain root..." && rm -rf ~/WorldOfProject/* ~/WorldOfProject/.htaccess 2>/dev/null && cp -r ~/STRATO-apps/WorldOfProject/dist/* ~/STRATO-apps/WorldOfProject/dist/.htaccess ~/WorldOfProject/ && echo "Deployment complete!" && ls ~/WorldOfProject/'

ssh "${stratoUser}@${stratoHost}" $sshCommands

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your site should be available at your Strato domain." -ForegroundColor White
