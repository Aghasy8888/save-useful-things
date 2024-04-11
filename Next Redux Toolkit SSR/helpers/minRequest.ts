async function minRequest(
  url: string,
  method = 'GET',
  body?: { file_type?: string }
) {

  const config: RequestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }


  return fetch(url, config)
    .then((response) => {
      // console.log('response', response);

      return response.json();
    })
    .then((result) => {
      // console.log('result', result);

      if (result.detail) {
        throw new Error(result.detail);
      }

      return result;
    })
    .catch((error) => {
      throw error;
    });
}

export default minRequest;
