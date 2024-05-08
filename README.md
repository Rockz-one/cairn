# cairn
Data sanitization, analytics, and visualization client-side web-app

## Project Directory
| Name                                   	| Purpose                                             | 
| :--                                    	| :--                                                 |
|[docs](docs)                             	| Where the app is served from                        |
|[src](src)                            	    | Source code for the app                             |

## Development
```bash
git clone https://github.com/Rockz-one/cairn.git
cd src
npm install && npm run dev
```
And when everything's ready to ship....
```bash
npm run build
git commit -m "Updated the website" && git push
```

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

## Libraries & frameworks to consider
- https://ui.shadcn.com/themes
- https://d3js.org/d3-fetch it actually looks like d3 has better parsing tools...
- AND https://d3js.org/d3-array/summarize!!!
- danfo.js
- chart.js