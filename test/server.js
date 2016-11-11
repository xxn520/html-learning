const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

http.createServer((req, res) => {
	let pathname = decodeURI(url.parse(req.url).pathname)
	var realPath = path.join(__dirname, pathname);
	fs.stat(realPath, (err, stats) => {
		if (err) {
			console.error(err)
		} else if (stats.isFile()) {
			fs.readFile(realPath, (err, data) => {
			  	if (err) {
			  		console.error(err)
			  	}
			  	if (realPath.includes('.html')){
					res.writeHead(200, {'Content-type' : 'text/html'})
			  		res.end(data)
			  	} else if (realPath.includes('.js')){
			  		setTimeout(() => {
			  			res.writeHead(200, {'Content-type' : 'application/javascript'})
			  			res.end(data)
			  		}, 3000)
			  	} else if (/\.(?:jpg|png|jpeg|gif)/.test(realPath)){
			  		setTimeout(() => {
			  			res.writeHead(200, {'Content-type' : `image/${/(jpg|png|jpeg|gif)/.exec(realPath)[0]}`})
			  			res.end(data)
			  		}, 3000)
			  	}
			});
		}
	})
}).listen(3000, () => {
	console.log('server listening on port 3000!')
})