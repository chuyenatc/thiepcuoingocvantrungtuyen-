$html = Get-Content index.html -Raw
if ($html -match '"templateData":\s*"([^"]+)"') {
    $b64 = $matches[1]
    $bytes = [System.Convert]::FromBase64String($b64)
    $json = [System.Text.Encoding]::UTF8.GetString($bytes)
    Set-Content -Path decoded.json -Value $json -Encoding UTF8
    Write-Host "Success"
} else {
    Write-Host "No match"
}
