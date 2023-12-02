// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var configuration_pb = require('./configuration_pb.js');

function serialize_config_ConfigRequest(arg) {
  if (!(arg instanceof configuration_pb.ConfigRequest)) {
    throw new Error('Expected argument of type config.ConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_ConfigRequest(buffer_arg) {
  return configuration_pb.ConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_config_ConfigResponse(arg) {
  if (!(arg instanceof configuration_pb.ConfigResponse)) {
    throw new Error('Expected argument of type config.ConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_config_ConfigResponse(buffer_arg) {
  return configuration_pb.ConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The configuration service definition.
var ConfigServiceService = exports.ConfigServiceService = {
  // Sends a new configuration
createConfig: {
    path: '/config.ConfigService/CreateConfig',
    requestStream: false,
    responseStream: false,
    requestType: configuration_pb.ConfigRequest,
    responseType: configuration_pb.ConfigResponse,
    requestSerialize: serialize_config_ConfigRequest,
    requestDeserialize: deserialize_config_ConfigRequest,
    responseSerialize: serialize_config_ConfigResponse,
    responseDeserialize: deserialize_config_ConfigResponse,
  },
};

exports.ConfigServiceClient = grpc.makeGenericClientConstructor(ConfigServiceService);
