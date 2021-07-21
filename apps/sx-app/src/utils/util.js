export function getMembers(policyNumber) {
  var url = `https://rcvp3-api.azurewebsites.net/members?policyNumber=${policyNumber}`;
  var response = makeRequest('GET', url)
    .then((r) => {
      return { data: r, success: true };
    })
    .catch((err) => {
      console.error(err);
      return { data: err, success: false };
    });

  return response;
}

export const makeRequest = (action, url, body = '') => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.open(action, url);

    xhr.onload = () => {
      if (xhr.status.toString().startsWith('2')) {
        resolve(xhr.response);
      } else if (xhr.status.toString() === '404') {
        reject(Error('404'));
      } else if (xhr.status.toString() === '400') {
        reject(xhr.response);
      } else {
        reject(xhr.response);
      }
    };

    xhr.send(body);
  });
};
