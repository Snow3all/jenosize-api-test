const codeEnum = {
  200: "Suscess",
  400: "Something went wrong",
};

exports.responseCode = (code, data, message) => {
  const response = {
    code: code,
    message: message ? message : codeEnum[code],
    data: data ? data : {},
  };
  return response;
};
