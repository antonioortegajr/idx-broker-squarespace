# Lambda function

## About

This was written in node 6.10. The function recives a url passed as a query string param from api gateway.

Axios is used to grab the html from the site. Absoutify makes all anchors absolute paths. 
Cherrio is used to manipulate the html and add idxStart and Stop tags

## Requirements
* npm package cherrio
* npm package absolutify
* npm package axios

## Use

Create a lambda function an d use the provided code. Adjust the manipulation for any theme as needed.
