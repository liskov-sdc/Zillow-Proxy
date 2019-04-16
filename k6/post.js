import http from "k6/http";
import { check, fail } from "k6";
import { makeHouseEntry, getRandomInt } from '../utils/houseMethods.js';

export let options = {
  rps: 1000,
  vus: 150,
  duration: '30s'
};

export default function() {
  const url = 'http://localhost:3004/houses/1';
  let house = makeHouseEntry();
  let res = http.post(url, house);
  check(res, {
    "status was 201": (r) => r.status == 201,
    "transaction time OK": (r) =>  r.timings.duration < 200
  });
}
