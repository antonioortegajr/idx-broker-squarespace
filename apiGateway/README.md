# API Gateway


## About

API Gateway is used to set up an endpoint for the dynamic wrapper system.

This endpoint should pass a url as a query string param.

Exdample: https://yourGateway.execute-api.us-east-1.amazonaws.com/init?site=http://test.com

This endpoint is GET.

Integration Request is mapped to application/json and the method request pass through.

Your lambda is then invoked.

Integration Response is Mapping Response is set to text/html and the mapping template is

`#set($inputRoot = $input.path('$')) 
$inputRoot`




