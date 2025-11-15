# Git Setup Commands for Tatva Yoga Website

Write-Host "`n==================================================" -ForegroundColor Cyan
Write-Host "TATVA YOGA WEBSITE - GIT SETUP" -ForegroundColor Yellow
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue

if (-not $gitInstalled) {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Git is installed" -ForegroundColor Green

# Initialize Git repository
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
}

# Configure Git user details
if (-not (git config user.name)) {
    $name = Read-Host "Enter your name for Git commits"
    git config user.name "$name"
}

if (-not (git config user.email)) {
    $email = Read-Host "Enter your email for Git commits"
    git config user.email "$email"
}

Write-Host "✓ Git configured" -ForegroundColor Green

# Add files and commit
if (-not (git log --oneline 2>$null)) {
    git add .
    git commit -m "Initial commit: Tatva Yoga Studio website"
    Write-Host "✓ Initial commit created" -ForegroundColor Green
}

# Add remote repository
if (-not (git remote get-url origin 2>$null)) {
    git remote add origin https://github.com/yogastudiotatva-create/tatva_website.git
    Write-Host "✓ Remote repository added" -ForegroundColor Green
}

Write-Host "Script completed successfully." -ForegroundColor Cyan
