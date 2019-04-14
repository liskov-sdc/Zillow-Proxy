import http from "k6/http";

export const options = {
    vus: 100,
    duration: "5m",
}

export default function() {
    let randomInt = Math.floor(Math.random() * (10000000 - 9950000)) + 9950000;
    http.get("http://localhost:3000/" + randomInt+ "/");
};