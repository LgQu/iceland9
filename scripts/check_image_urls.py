import re
import sys
import urllib.request


text = open("app.js", encoding="utf-8").read() + "\n" + open("styles.css", encoding="utf-8").read()
urls = sorted(set(re.findall(r"https://upload\.wikimedia\.org/[^\"')\s]+", text)))

failed = False
for url in urls:
    req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "IcelandPlanImageChecker/1.0"})
    try:
      with urllib.request.urlopen(req, timeout=20) as response:
          status = response.status
    except Exception as exc:
      status = f"ERROR {exc}"
      failed = True
    print(status, url)

if failed:
    sys.exit(1)
