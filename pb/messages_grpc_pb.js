// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var pb_messages_pb = require('../pb/messages_pb.js');

function serialize_EmployeeRequest(arg) {
  if (!(arg instanceof pb_messages_pb.EmployeeRequest)) {
    throw new Error('Expected argument of type EmployeeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EmployeeRequest(buffer_arg) {
  return pb_messages_pb.EmployeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EmployeeResponse(arg) {
  if (!(arg instanceof pb_messages_pb.EmployeeResponse)) {
    throw new Error('Expected argument of type EmployeeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_EmployeeResponse(buffer_arg) {
  return pb_messages_pb.EmployeeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetAllRequest(arg) {
  if (!(arg instanceof pb_messages_pb.GetAllRequest)) {
    throw new Error('Expected argument of type GetAllRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetAllRequest(buffer_arg) {
  return pb_messages_pb.GetAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetByBadgeNumberRequest(arg) {
  if (!(arg instanceof pb_messages_pb.GetByBadgeNumberRequest)) {
    throw new Error('Expected argument of type GetByBadgeNumberRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_GetByBadgeNumberRequest(buffer_arg) {
  return pb_messages_pb.GetByBadgeNumberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EmployeeServiceService = exports.EmployeeServiceService = {
  getByBadgeNumber: {
    path: '/EmployeeService/GetByBadgeNumber',
    requestStream: false,
    responseStream: false,
    requestType: pb_messages_pb.GetByBadgeNumberRequest,
    responseType: pb_messages_pb.EmployeeResponse,
    requestSerialize: serialize_GetByBadgeNumberRequest,
    requestDeserialize: deserialize_GetByBadgeNumberRequest,
    responseSerialize: serialize_EmployeeResponse,
    responseDeserialize: deserialize_EmployeeResponse,
  },
  getAll: {
    path: '/EmployeeService/GetAll',
    requestStream: false,
    responseStream: true,
    requestType: pb_messages_pb.GetAllRequest,
    responseType: pb_messages_pb.EmployeeResponse,
    requestSerialize: serialize_GetAllRequest,
    requestDeserialize: deserialize_GetAllRequest,
    responseSerialize: serialize_EmployeeResponse,
    responseDeserialize: deserialize_EmployeeResponse,
  },
  // cannot use "repeated" here. Use "stream" instead.
  save: {
    path: '/EmployeeService/Save',
    requestStream: false,
    responseStream: false,
    requestType: pb_messages_pb.EmployeeRequest,
    responseType: pb_messages_pb.EmployeeResponse,
    requestSerialize: serialize_EmployeeRequest,
    requestDeserialize: deserialize_EmployeeRequest,
    responseSerialize: serialize_EmployeeResponse,
    responseDeserialize: deserialize_EmployeeResponse,
  },
  saveAll: {
    path: '/EmployeeService/SaveAll',
    requestStream: true,
    responseStream: true,
    requestType: pb_messages_pb.EmployeeRequest,
    responseType: pb_messages_pb.EmployeeResponse,
    requestSerialize: serialize_EmployeeRequest,
    requestDeserialize: deserialize_EmployeeRequest,
    responseSerialize: serialize_EmployeeResponse,
    responseDeserialize: deserialize_EmployeeResponse,
  },
};

exports.EmployeeServiceClient = grpc.makeGenericClientConstructor(EmployeeServiceService);
