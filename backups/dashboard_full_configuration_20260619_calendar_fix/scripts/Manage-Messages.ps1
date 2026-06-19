param (
    [string]$Sender = $null,
    [string]$MessageContent = $null
)

if ($Sender -and $MessageContent) {
    node C:\Users\magic\MagicMirror\Manage-Messages.js $Sender $MessageContent
} else {
    node C:\Users\magic\MagicMirror\Manage-Messages.js
}
