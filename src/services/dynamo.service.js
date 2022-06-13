const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const write = async (data, tableName) =>{
    const params = {
        TableName: tableName,
        Item: data,
    };
    const results = await documentClient.put(params).promise();
    if (!results) {
        throw new Error('Unable to write to database');
    }
    return results;
};

module.exports = {
    write,
}