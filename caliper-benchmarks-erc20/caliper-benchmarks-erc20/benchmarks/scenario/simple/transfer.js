'use strict';

const OperationBase = require('./utils/operation-base');
const SimpleState = require('./utils/simple-state');

class Transfer extends OperationBase {
    constructor() {
        super();
    }

    createSimpleState() {
        const accountsPerWorker = this.numberOfAccounts / this.totalWorkers;
        this.moneyToTransfer=10;
        return new SimpleState(this.workerIndex, this.moneyToTransfer, accountsPerWorker);
    }

    async submitTransaction() {
        const transferArgs = this.simpleState.getTransferArguments();
        console.log(transferArgs);
        console.log("transferArgs*******");
        await this.sutAdapter.sendRequests(this.createConnectorRequest('transfer', transferArgs));
    }
}

function createWorkloadModule() {
    return new Transfer();
}

module.exports.createWorkloadModule = createWorkloadModule;