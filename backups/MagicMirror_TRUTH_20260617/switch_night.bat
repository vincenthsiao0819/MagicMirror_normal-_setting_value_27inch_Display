@echo off
cd /d C:\Users\magic\MagicMirror
taskkill /f /im electron.exe /t
taskkill /f /im node.exe /t
timeout /t 2 /nobreak > nul
copy /Y C:\Users\magic\MagicMirror\config\config_night.js C:\Users\magic\MagicMirror\config\config.js
copy /Y C:\Users\magic\MagicMirror\css\custom_night.css C:\Users\magic\MagicMirror\css\custom.css
call C:\Users\magic\MagicMirror\brightness_dim.bat
move "C:\Users\magic\AppData\Roaming\Electron\Cache" "C:\Users\magic\AppData\Roaming\Electron\Cache_bak_%RANDOM%"
move "C:\Users\magic\AppData\Roaming\Electron\Code Cache" "C:\Users\magic\AppData\Roaming\Electron\Code Cache_bak_%RANDOM%"
schtasks /run /tn "RestartMM"
