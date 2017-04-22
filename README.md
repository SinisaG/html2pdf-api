# html2pdf-api
PhantomJS based webapp/html to pdf api

### Usage

```
/:w/:h/:timeout/:url

w: viewport width
h: viewport height
:timeout: time to wait for async Javascript to execuite after load
:url: encoded url to turn to pdf
```

### Example

https://html2pdf-api.herokuapp.com/pdf/1024/700/1000/http%3A%2F%2Fwww.google.com

### Local

You must have NodeJS installed.

```
$ npm install
$ npm start
```

Then visit http://localhost:3000/pdf/1024/700/1000/http%3A%2F%2Fwww.google.com