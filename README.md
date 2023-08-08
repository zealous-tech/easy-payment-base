# easy-payment-base

> Node.js API abstraction for payment gateways.

Used by supported gateways listed in [easy-payment](https://github.com/instigateMobile/easy-payment-main).

## BaseGateway API

* <a href="#ctor"><code><b>BaseGateway()</b></code></a>
* <a href="#BaseGateway_attachCard"><code><b>BaseGateway#attachCard()</b></code></a>
* <a href="#BaseGateway_removeCard"><code><b>BaseGateway#removeCard()</b></code></a>
* <a href="#BaseGateway_getBindings"><code><b>BaseGateway#getBindings()</b></code></a>
* <a href="#BaseGateway_payOrder"><code><b>BaseGateway#payOrder()</b></code></a>
* <a href="#BaseGateway_getOrderStatus"><code><b>BaseGateway#getOrderStatus()</b></code></a>
* <a href="#BaseGateway_freezeOrder"><code><b>BaseGateway#freezeOrder()</b></code></a>
* <a href="#BaseGateway_reverseOrder"><code><b>BaseGateway#reverseOrderProfile()</b></code></a>
* <a href="#BaseGateway_depositOrder"><code><b>BaseGateway#depositOrder()</b></code></a>
* <a href="#BaseGateway_refundOrder"><code><b>BaseGateway#refundOrder()</b></code></a>

--------------------------------------------------------
<a name="ctor"></a>
#### BaseGateway(options)

--------------------------------------------------------
<a name="BaseGateway_attachCard"></a>
#### BaseGateway#attachCard()

Allow to add new card in payment gateway merchant account.

#### `parameters`

`order` *(object)*
* `'amount'` *(string)*: The amount of the transaction.
* `'orderNumber'` *(string)*: The orderNumber of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'pageView'` *(string)*: The pageView of the transaction.
* `'returnUrl'` *(string)*: The returnUrl of the transaction.
* `'description'` *(string)*: The description of the transaction.
* `'clientId'` *(string)*: The clientId of the transaction.
* `'currency'` *(string)*: The currency code of the transaction.

`other` *(object)*

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_removeCard"></a>
#### BaseGateway#removeCard()

Removing added card from payment getaway merchant.

#### `parameters`

`bindingId` *(string)*: The bindingId of the transaction.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_getBindings"></a>
#### BaseGateway#getBindings()

Returned existed payment getaway merchant account bindings.

#### `parameters`

`clientId` *(string)*: The clientId of the transaction.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_payOrder"></a>
#### BaseGateway#payOrder()

Paying order.

#### `parameters`

`order` *(object)*
* `'orderNumber'` *(string)*: The orderNumber of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'pageView'` *(string)*: The pageView of the transaction.
* `'amount'` *(number)*: The amount of the transaction.
* `'returnUrl'` *(string)*: The returnUrl of the transaction.
* `'description'` *(string)*: The description of the transaction.
* `'clientId'` *(string)*: The clientId of the transaction.
* `'currency'` *(string)*: The currency of the transaction.
* `'bindingId'` *(string)*: The bindingId of the transaction.
* `'useBinding'` *(boolean)*: If true, the pay will use the bindingId of the transaction.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'orderId'`*(string)*: The created orderId response from the gateway.
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_getOrderStatus"></a>
### BaseGateway#getOrderStatus()

Getting order status.

#### `parameters`

`order` *(object)*
* `'orderId'` *(string)*: The orderId of the transaction.
* `'extended'` *(boolean)*: If true, get extended order status.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_freezeOrder"></a>
#### BaseGateway#freezeOrder()

Freezing order.

#### `parameters`

`order` *(object)*
* `'orderNumber'` *(string)*: The orderNumber of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'pageView'` *(string)*: The pageView of the transaction.
* `'amount'` *(number)*: The amount of the transaction.
* `'returnUrl'` *(string)*: The returnUrl of the transaction.
* `'description'` *(string)*: The description of the transaction.
* `'clientId'` *(string)*: The clientId of the transaction.
* `'currency'` *(string)*: The currency of the transaction.
* `'bindingId'` *(string)*: The bindingId of the transaction.
* `'useBinding'` *(boolean)*: If true, the freeze will use the bindingId of the transaction.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'orderId'`*(string)*: The frozen orderId response from the gateway.
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_reverseOrderProfile"></a>
#### BaseGateway#reverseOrderProfile()

Cancellation order.

#### `parameters`

`order` *(object)*
* `'orderId'` *(string)*: The orderId of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'currency'` *(string)*: The currency of the transaction.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_depositOrder"></a>
#### BaseGateway#depositOrder()

Completion of order payment.

#### `parameters`

`order` *(object)*
* `'orderId'` *(string)*: The orderId of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'currency'` *(string)*: The currency of the transaction.
* `'pageView'` *(string)*: The pageView of the transaction.
* `'amount'` *(number)*: The amount of the transaction.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.

--------------------------------------------------------
<a name="BaseGateway_refundOrder"></a>
#### BaseGateway#refundOrder()

Refund of order payment.

#### `parameters`

`order` *(object)*
* `'orderId'` *(string)*: The orderId of the transaction.
* `'language'` *(string)*: The language of the transaction.
* `'currency'` *(string)*: The currency of the transaction.
* `'amount'` *(number)*: The amount of the transaction.

Other fields specific to a gateway SDK implementation.
Refer to specific SDK for more details.

#### `return value`

Returns a `Promise` with the following object as a result:

* `'hasError'` *(boolean)*: Identifier of the transaction status.
* `'errorStep'` *(string)*: Exist when error is happens for methods with many API/SDK requests
* `'err'`: The original error response from the gateway.
* `'data'`: The original response from the gateway.