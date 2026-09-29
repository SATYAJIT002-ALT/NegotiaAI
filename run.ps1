Write-Host "Starting NegotiaAI..."
Write-Host "Make sure MongoDB is running on localhost:27017"

# Check if node_modules exist, if not, prompt to install
if (!(Test-Path -Path "backend\node_modules")) {
    Write-Host "Backend node_modules not found. Please run 'npm install' in the backend directory." -ForegroundColor Red
}

if (!(Test-Path -Path "frontend\node_modules")) {
    Write-Host "Frontend node_modules not found. Please run 'npm install' in the frontend directory." -ForegroundColor Red
}

Write-Host "Seeding database..."
Start-Process cmd -ArgumentList "/c cd backend && npm run seed" -Wait

Write-Host "Starting backend server..."
Start-Process cmd -ArgumentList "/c cd backend && npm run dev" -NoNewWindow

Write-Host "Starting frontend server..."
Start-Process cmd -ArgumentList "/c cd frontend && npm run dev" -NoNewWindow

Write-Host "Application is running. Press any key to stop..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
