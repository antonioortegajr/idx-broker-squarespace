# idx-broker-squarespace

## About

This repo contains code to set up a system in AWS to get html from a SquareSpace site and transform via lambda into html that can be used with the IDX Broker wrapper system.

## Requirements

* AWS account
* IDX Broker Account
* SquareSpace Account

## Use

Set up an API Gateway endpoint to invoke a lambda that will return transformed html. The endpoint is provided to the IDX Broker wrapper system as a dynamic wrapper url. No html is stored in AWS all wrapper html is created upon request. IDX Broker requests the refresh of a dynamic wrapper every 2 hours.

