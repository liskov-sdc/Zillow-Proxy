import http from 'k6/http';
import { check } from 'k6';
import { getRandomInt } from '../utils/houseMethods.js';
// import { Rate } from 'k6/metrics';

// let failRate = new Rate('failed requests');

export let options = {
  // rps: 1000,
  vus: 150,
  duration: '2m',
  // thresholds: {
  //   'failed requests': ['rate < 0.01']
  // }
};

export default function() {
  let id = getRandomInt(9000000, 10000000);
  let res = http.get(`http://localhost:3004/${id}`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000,
    // 'failed requests': (r) => failRate.add(r.status !== 200)
  });
}
