const {v4:uuid} = require('uuid')
const ApiResponse = require('../util/apiResponse');
const DynamoService = require('../services/dynamo.service');
module.exports.handler = async (event, ctx, cb) => {
    const { body={}} = event;

    const {name = "", amount=0} = JSON.parse(body);
    const order = {
        id:uuid(),
        name,
        amount,
        createdAt: Date.now(),
    };
    try {
        const orderTable = process.env.orderTableName;
        await DynamoService.write(order, orderTable);
        return cb(null, ApiResponse.ok({message: 'Success'}));
    } catch (e) {
        console.log(e);
        return cb(null, ApiResponse.serverError({message: "Failed to create order"}));
    };

};