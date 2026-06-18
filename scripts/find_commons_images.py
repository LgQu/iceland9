import json
import sys
import time
import urllib.parse
import urllib.request


QUERIES = sys.argv[1:] or [
    "Reykjavik from Hallgrimskirkja",
    "Hallgrimskirkja Reykjavik",
    "Harpa Reykjavik",
    "Sky Lagoon Iceland",
    "Gullfoss Iceland",
    "Thingvellir National Park",
    "Strokkur eruption",
    "Kerid crater Iceland",
    "Jokulsarlon Glacier Lagoon",
    "Seljalandsfoss Iceland",
]


def fetch_json(params):
    params = {
        "format": "json",
        "origin": "*",
        **params,
    }
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "IcelandPlanImageFinder/1.0"})
    with urllib.request.urlopen(req, timeout=20) as response:
        return json.load(response)


def find_image(query):
    search = fetch_json({
        "action": "query",
        "generator": "search",
        "gsrsearch": f"{query} filetype:bitmap",
        "gsrnamespace": "6",
        "gsrlimit": "8",
        "prop": "imageinfo",
        "iiprop": "url|size",
        "iiurlwidth": "1200",
    })
    pages = list(search.get("query", {}).get("pages", {}).values())
    pages = [page for page in pages if page.get("imageinfo")]
    if not pages:
        return None
    pages.sort(key=lambda page: page["imageinfo"][0].get("width", 0) * page["imageinfo"][0].get("height", 0), reverse=True)
    imageinfo = pages[0]["imageinfo"][0]
    return {
        "query": query,
        "title": pages[0].get("title"),
        "url": imageinfo.get("thumburl") or imageinfo.get("url"),
        "source": imageinfo.get("descriptionurl"),
    }


def main():
    results = []
    for query in QUERIES:
        try:
            result = find_image(query)
        except Exception as exc:
            result = {"query": query, "error": str(exc)}
        results.append(result)
        time.sleep(1.4)
    json.dump(results, sys.stdout, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
