let requestQueue = [];

function rp(options) {
  const nextRequest = requestQueue.shift();

  return new Promise((resolve, reject) => {
    if (nextRequest.result) {
      resolve(nextRequest.result);
    } else if (nextRequest.error) {
      reject(nextRequest.error);
    } else {
      throw new Error('Mocked request must have result or error.');
    }
  });
};

function pushMockRequest({ options, result, error }) {
  const defaultOptions = {
    json: true
  };

  const opts = Object.assign({}, options, defaultOptions);

  requestQueue.push({
    options: opts,
    result,
    error
  });
}

function flushRequestQueue() {
  requestQueue = [];
}

rp.__pushMockRequest = pushMockRequest;
rp.__flushRequestQueue = flushRequestQueue;

rp.actual = require.requireActual('request-promise');

module.exports = rp;
