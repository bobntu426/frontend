
```mermaid!
graph LR
app.js[app.js] -->|routes| routes
app.js -->|menu| menu[menu.js]
routes -->|home| home[home.js]
routes -->|login| login[login.js]
routes -->|news| news[news.js]
routes -->|player| player[player.js]
routes -->|rank| rank[rank.js]
routes -->|result| result[result.js]
routes -->|video| video[video.js]
```