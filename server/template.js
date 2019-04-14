function template(serviceObj) {
    return `<html>
  <head lang="en-us">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="http://localhost:3001/style.css" rel="stylesheet">
    <link href="http://localhost:3002/1/style.css" rel="stylesheet">
    <link href="http://localhost:3003/style.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet"/>
  </head>
  <body id='zillowBackground'>
      <div id="zillowContent">
        <div id='gallery'>${serviceObj.gallery}</div>
        <div id="description">${serviceObj.description}</div>
        <div id="facts">${serviceObj.facts}</div>
        <script src="http://localhost:3001/bundle.js"></script>
        <script src="http://localhost:3002/1/bundle.js"></script>
        <script src="http://localhost:3003/bundle.js"></script>
      </div>
  </body>
</html>`
}

module.exports = template;