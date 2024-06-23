const codeEnum = {
  0: 'Success',
  997: 'Some validate field is error',
  998: 'This item is empty',
  999: 'Something went wrong',
};

exports.responseCode = (code, data, message) => {
  const response = {
    code: code,
    message: message ? message : codeEnum[code],
    data: data ? data : {},
  };
  return response;
};
