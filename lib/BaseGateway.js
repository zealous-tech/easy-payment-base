const throwNotImplemented = () => {
    return new Error('method not implemented/supported by this gateway');
}

/**
 * Structural interface, actual implementations must implement
 * @param {Object} [options] - the instance will be extended with the option object
 * @constructor
 */
class BaseGateway {
    constructor(options) {
        Object.assign(this, options);
    }
}

BaseGateway.prototype.attachCard = function attachCard() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.removeCard = function removeCard() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.getBindings = function getBindings() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.payOrder = function payOrder() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.getOrderStatus = function getOrderStatus() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.freezeOrder = function freezeOrder() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.reverseOrder = function reverseOrder() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.depositOrder = function depositOrder() {
    return Promise.reject(throwNotImplemented());
};

BaseGateway.prototype.refundOrder = function refundOrder() {
    return Promise.reject(throwNotImplemented());
};

export default BaseGateway;