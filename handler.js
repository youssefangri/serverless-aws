'use strict';

module.exports.hello = async (event, ctx, cb) => {
  console.log("function started");
  const resp = {
    headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
  try {
    return cb(null,resp);  
  } catch (e) {
    console.log(e);
    return cb(null,null);
  }
  
};
