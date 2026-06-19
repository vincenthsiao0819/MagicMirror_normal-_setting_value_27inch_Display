#!/bin/bash
export SSHPASS="6611"

echo "Deploying config_normal.js..."
sshpass -e scp -o StrictHostKeyChecking=no config_normal.js magic@192.168.50.204:C:/Users/magic/MagicMirror/config/config_normal.js

echo "Deploying config_morning.js..."
sshpass -e scp -o StrictHostKeyChecking=no config_morning.js magic@192.168.50.204:C:/Users/magic/MagicMirror/config/config_morning.js

echo "Deploying custom_normal.css..."
sshpass -e scp -o StrictHostKeyChecking=no custom_normal.css magic@192.168.50.204:C:/Users/magic/MagicMirror/css/custom_normal.css

echo "Deploying custom_morning.css..."
sshpass -e scp -o StrictHostKeyChecking=no custom_morning.css magic@192.168.50.204:C:/Users/magic/MagicMirror/css/custom_morning.css

echo "Deploying Manage-Messages.js..."
sshpass -e scp -o StrictHostKeyChecking=no Manage-Messages.js magic@192.168.50.204:C:/Users/magic/MagicMirror/Manage-Messages.js

echo "Deploying Manage-Messages.ps1..."
sshpass -e scp -o StrictHostKeyChecking=no Manage-Messages.ps1 magic@192.168.50.204:C:/Users/magic/MagicMirror/Manage-Messages.ps1

echo "Executing cache clear and restart..."
sshpass -e ssh -o StrictHostKeyChecking=no magic@192.168.50.204 'powershell -NoProfile -ExecutionPolicy Bypass -Command "
  Write-Host \"Killing tasks...\"
  taskkill /f /im electron.exe /t 2>&1 | Out-Null
  taskkill /f /im node.exe /t 2>&1 | Out-Null
  
  Start-Sleep -Seconds 2

  Write-Host \"Clearing cache...\"
  \$cachePath = \"C:\Users\magic\AppData\Roaming\Electron\Cache\"
  \$codeCachePath = \"C:\Users\magic\AppData\Roaming\Electron\Code Cache\"
  
  if (Test-Path \$cachePath) {
      \$newCacheName = \"C:\Users\magic\AppData\Roaming\Electron\Cache_bak_\" + (Get-Date -Format \"HHmmss\")
      Rename-Item -Path \$cachePath -NewName \$newCacheName -ErrorAction SilentlyContinue
  }
  
  if (Test-Path \$codeCachePath) {
      \$newCodeCacheName = \"C:\Users\magic\AppData\Roaming\Electron\Code Cache_bak_\" + (Get-Date -Format \"HHmmss\")
      Rename-Item -Path \$codeCachePath -NewName \$newCodeCacheName -ErrorAction SilentlyContinue
  }
  
  Write-Host \"Restarting via schtasks...\"
  schtasks /run /tn \"RestartMM\"
"'

echo "Done."
