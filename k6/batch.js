import http from "k6/http";

export const options = {
    vus: 50,
    duration: "5m",
}

export default function() {
    let randomInt = Math.floor(Math.random() * (10000000 - 9000000)) + 9000000;
    let responses1 = http.batch([
        ["GET", "http://localhost:3000/" + randomInt + "/", null, { tags: { ctype: "html" } }],
        ["GET", `http://localhost:3000/${randomInt}/style.css`, null, { tags: { ctype: "css" } }],
        ["GET", "http://localhost:3000/1/zillowbackground.png", null, { tags: { ctype: "images" } }]
      ]);

      let responses2 = http.batch([
        ["GET", "http://localhost:3001/style.css", null, { tags: { ctype: "css" } }],
        ["GET", "http://localhost:3001/bundle.js", null, { tags: { ctype: "js" } }],
        ["GET", `http://localhost:3001/houses/${randomInt}/`, null, { tags: { ctype: "json" } }],
        ["GET", `http://localhost:3001/prices/${randomInt}/`, null, { tags: { ctype: "json" } }]
      ]);

      let responses3 = http.batch([
        ["GET", "http://localhost:3002/style.css", null, { tags: { ctype: "css" } }],
        ["GET", "http://localhost:3002/next.png", null, { tags: { ctype: "images" } }],
        //["GET", `http://localhost:3002/gallery/${randomInt}/`, null, { tags: { ctype: "json" } }],
        ["GET", "http://localhost:3002/bundle.js", null, { tags: { ctype: "js" } }]
      ]);

      let responses4 = http.batch([
        ["GET", "http://localhost:3003/style.css", null, { tags: { ctype: "css" } }],
        ["GET", "http://localhost:3003/bundle.js", null, { tags: { ctype: "js" } }],
        ["GET", `http://localhost:3003/house/${randomInt}/`, null, { tags: { ctype: "json" } }]
      ]);
};

