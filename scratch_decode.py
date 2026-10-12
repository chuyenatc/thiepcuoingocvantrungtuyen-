import base64, re, json
with open('index.html', 'r', encoding='utf-8') as f:
    data = f.read()
match = re.search(r'"templateData":\s*"([^"]+)"', data)
if match:
    b64 = match.group(1)
    decoded = base64.b64decode(b64).decode('utf-8', errors='ignore')
    with open('decoded.json', 'w', encoding='utf-8') as f:
        f.write(decoded)
    print("Decoded and saved to decoded.json")
else:
    print("No templateData found")
