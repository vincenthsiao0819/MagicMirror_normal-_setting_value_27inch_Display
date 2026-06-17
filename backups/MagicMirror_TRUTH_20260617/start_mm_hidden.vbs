Set WshShell = CreateObject("WScript.Shell")
If WScript.Arguments.Count > 0 Then
    WshShell.Run chr(34) & WScript.Arguments(0) & Chr(34), 0
Else
    WshShell.Run chr(34) & "C:\Users\magic\MagicMirror\RestartMM.bat" & Chr(34), 0
End If
Set WshShell = Nothing