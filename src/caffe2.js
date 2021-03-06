/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function($protobuf) {
    "use strict";

    var $Reader = $protobuf.Reader, $util = $protobuf.util;
    
    var $root = $protobuf.roots.caffe2 || ($protobuf.roots.caffe2 = {});
    
    $root.caffe2 = (function() {
    
        var caffe2 = {};
    
        caffe2.TensorProto = (function() {
    
            function TensorProto(properties) {
                this.dims = [];
                this.floatData = [];
                this.int32Data = [];
                this.stringData = [];
                this.doubleData = [];
                this.int64Data = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            TensorProto.prototype.dims = $util.emptyArray;
            TensorProto.prototype.dataType = 1;
            TensorProto.prototype.floatData = $util.emptyArray;
            TensorProto.prototype.int32Data = $util.emptyArray;
            TensorProto.prototype.byteData = $util.newBuffer([]);
            TensorProto.prototype.stringData = $util.emptyArray;
            TensorProto.prototype.doubleData = $util.emptyArray;
            TensorProto.prototype.int64Data = $util.emptyArray;
            TensorProto.prototype.name = "";
            TensorProto.prototype.deviceDetail = null;
            TensorProto.prototype.segment = null;
    
            TensorProto.create = function create(properties) {
                return new TensorProto(properties);
            };
    
            TensorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.TensorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dims && message.dims.length))
                            message.dims = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dims.push(reader.int64());
                        } else
                            message.dims.push(reader.int64());
                        break;
                    case 2:
                        message.dataType = reader.int32();
                        break;
                    case 3:
                        if (!(message.floatData && message.floatData.length))
                            message.floatData = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.floatData.push(reader.float());
                        } else
                            message.floatData.push(reader.float());
                        break;
                    case 4:
                        if (!(message.int32Data && message.int32Data.length))
                            message.int32Data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int32Data.push(reader.int32());
                        } else
                            message.int32Data.push(reader.int32());
                        break;
                    case 5:
                        message.byteData = reader.bytes();
                        break;
                    case 6:
                        if (!(message.stringData && message.stringData.length))
                            message.stringData = [];
                        message.stringData.push(reader.bytes());
                        break;
                    case 9:
                        if (!(message.doubleData && message.doubleData.length))
                            message.doubleData = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.doubleData.push(reader.double());
                        } else
                            message.doubleData.push(reader.double());
                        break;
                    case 10:
                        if (!(message.int64Data && message.int64Data.length))
                            message.int64Data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.int64Data.push(reader.int64());
                        } else
                            message.int64Data.push(reader.int64());
                        break;
                    case 7:
                        message.name = reader.string();
                        break;
                    case 8:
                        message.deviceDetail = $root.caffe2.DeviceOption.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.segment = $root.caffe2.TensorProto.Segment.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            TensorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dims != null && message.hasOwnProperty("dims")) {
                    if (!Array.isArray(message.dims))
                        return "dims: array expected";
                    for (var i = 0; i < message.dims.length; ++i)
                        if (!$util.isInteger(message.dims[i]) && !(message.dims[i] && $util.isInteger(message.dims[i].low) && $util.isInteger(message.dims[i].high)))
                            return "dims: integer|Long[] expected";
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    switch (message.dataType) {
                    default:
                        return "dataType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 12:
                    case 13:
                        break;
                    }
                if (message.floatData != null && message.hasOwnProperty("floatData")) {
                    if (!Array.isArray(message.floatData))
                        return "floatData: array expected";
                    for (var i = 0; i < message.floatData.length; ++i)
                        if (typeof message.floatData[i] !== "number")
                            return "floatData: number[] expected";
                }
                if (message.int32Data != null && message.hasOwnProperty("int32Data")) {
                    if (!Array.isArray(message.int32Data))
                        return "int32Data: array expected";
                    for (var i = 0; i < message.int32Data.length; ++i)
                        if (!$util.isInteger(message.int32Data[i]))
                            return "int32Data: integer[] expected";
                }
                if (message.byteData != null && message.hasOwnProperty("byteData"))
                    if (!(message.byteData && typeof message.byteData.length === "number" || $util.isString(message.byteData)))
                        return "byteData: buffer expected";
                if (message.stringData != null && message.hasOwnProperty("stringData")) {
                    if (!Array.isArray(message.stringData))
                        return "stringData: array expected";
                    for (var i = 0; i < message.stringData.length; ++i)
                        if (!(message.stringData[i] && typeof message.stringData[i].length === "number" || $util.isString(message.stringData[i])))
                            return "stringData: buffer[] expected";
                }
                if (message.doubleData != null && message.hasOwnProperty("doubleData")) {
                    if (!Array.isArray(message.doubleData))
                        return "doubleData: array expected";
                    for (var i = 0; i < message.doubleData.length; ++i)
                        if (typeof message.doubleData[i] !== "number")
                            return "doubleData: number[] expected";
                }
                if (message.int64Data != null && message.hasOwnProperty("int64Data")) {
                    if (!Array.isArray(message.int64Data))
                        return "int64Data: array expected";
                    for (var i = 0; i < message.int64Data.length; ++i)
                        if (!$util.isInteger(message.int64Data[i]) && !(message.int64Data[i] && $util.isInteger(message.int64Data[i].low) && $util.isInteger(message.int64Data[i].high)))
                            return "int64Data: integer|Long[] expected";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.deviceDetail != null && message.hasOwnProperty("deviceDetail")) {
                    var error = $root.caffe2.DeviceOption.verify(message.deviceDetail);
                    if (error)
                        return "deviceDetail." + error;
                }
                if (message.segment != null && message.hasOwnProperty("segment")) {
                    var error = $root.caffe2.TensorProto.Segment.verify(message.segment);
                    if (error)
                        return "segment." + error;
                }
                return null;
            };
    
            TensorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.TensorProto)
                    return object;
                var message = new $root.caffe2.TensorProto();
                if (object.dims) {
                    if (!Array.isArray(object.dims))
                        throw TypeError(".caffe2.TensorProto.dims: array expected");
                    message.dims = [];
                    for (var i = 0; i < object.dims.length; ++i)
                        if ($util.Long)
                            (message.dims[i] = $util.Long.fromValue(object.dims[i])).unsigned = false;
                        else if (typeof object.dims[i] === "string")
                            message.dims[i] = parseInt(object.dims[i], 10);
                        else if (typeof object.dims[i] === "number")
                            message.dims[i] = object.dims[i];
                        else if (typeof object.dims[i] === "object")
                            message.dims[i] = new $util.LongBits(object.dims[i].low >>> 0, object.dims[i].high >>> 0).toNumber();
                }
                switch (object.dataType) {
                case "UNDEFINED":
                case 0:
                    message.dataType = 0;
                    break;
                case "FLOAT":
                case 1:
                    message.dataType = 1;
                    break;
                case "INT32":
                case 2:
                    message.dataType = 2;
                    break;
                case "BYTE":
                case 3:
                    message.dataType = 3;
                    break;
                case "STRING":
                case 4:
                    message.dataType = 4;
                    break;
                case "BOOL":
                case 5:
                    message.dataType = 5;
                    break;
                case "UINT8":
                case 6:
                    message.dataType = 6;
                    break;
                case "INT8":
                case 7:
                    message.dataType = 7;
                    break;
                case "UINT16":
                case 8:
                    message.dataType = 8;
                    break;
                case "INT16":
                case 9:
                    message.dataType = 9;
                    break;
                case "INT64":
                case 10:
                    message.dataType = 10;
                    break;
                case "FLOAT16":
                case 12:
                    message.dataType = 12;
                    break;
                case "DOUBLE":
                case 13:
                    message.dataType = 13;
                    break;
                }
                if (object.floatData) {
                    if (!Array.isArray(object.floatData))
                        throw TypeError(".caffe2.TensorProto.floatData: array expected");
                    message.floatData = [];
                    for (var i = 0; i < object.floatData.length; ++i)
                        message.floatData[i] = Number(object.floatData[i]);
                }
                if (object.int32Data) {
                    if (!Array.isArray(object.int32Data))
                        throw TypeError(".caffe2.TensorProto.int32Data: array expected");
                    message.int32Data = [];
                    for (var i = 0; i < object.int32Data.length; ++i)
                        message.int32Data[i] = object.int32Data[i] | 0;
                }
                if (object.byteData != null)
                    if (typeof object.byteData === "string")
                        $util.base64.decode(object.byteData, message.byteData = $util.newBuffer($util.base64.length(object.byteData)), 0);
                    else if (object.byteData.length)
                        message.byteData = object.byteData;
                if (object.stringData) {
                    if (!Array.isArray(object.stringData))
                        throw TypeError(".caffe2.TensorProto.stringData: array expected");
                    message.stringData = [];
                    for (var i = 0; i < object.stringData.length; ++i)
                        if (typeof object.stringData[i] === "string")
                            $util.base64.decode(object.stringData[i], message.stringData[i] = $util.newBuffer($util.base64.length(object.stringData[i])), 0);
                        else if (object.stringData[i].length)
                            message.stringData[i] = object.stringData[i];
                }
                if (object.doubleData) {
                    if (!Array.isArray(object.doubleData))
                        throw TypeError(".caffe2.TensorProto.doubleData: array expected");
                    message.doubleData = [];
                    for (var i = 0; i < object.doubleData.length; ++i)
                        message.doubleData[i] = Number(object.doubleData[i]);
                }
                if (object.int64Data) {
                    if (!Array.isArray(object.int64Data))
                        throw TypeError(".caffe2.TensorProto.int64Data: array expected");
                    message.int64Data = [];
                    for (var i = 0; i < object.int64Data.length; ++i)
                        if ($util.Long)
                            (message.int64Data[i] = $util.Long.fromValue(object.int64Data[i])).unsigned = false;
                        else if (typeof object.int64Data[i] === "string")
                            message.int64Data[i] = parseInt(object.int64Data[i], 10);
                        else if (typeof object.int64Data[i] === "number")
                            message.int64Data[i] = object.int64Data[i];
                        else if (typeof object.int64Data[i] === "object")
                            message.int64Data[i] = new $util.LongBits(object.int64Data[i].low >>> 0, object.int64Data[i].high >>> 0).toNumber();
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.deviceDetail != null) {
                    if (typeof object.deviceDetail !== "object")
                        throw TypeError(".caffe2.TensorProto.deviceDetail: object expected");
                    message.deviceDetail = $root.caffe2.DeviceOption.fromObject(object.deviceDetail);
                }
                if (object.segment != null) {
                    if (typeof object.segment !== "object")
                        throw TypeError(".caffe2.TensorProto.segment: object expected");
                    message.segment = $root.caffe2.TensorProto.Segment.fromObject(object.segment);
                }
                return message;
            };
    
            TensorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dims = [];
                    object.floatData = [];
                    object.int32Data = [];
                    object.stringData = [];
                    object.doubleData = [];
                    object.int64Data = [];
                }
                if (options.defaults) {
                    object.dataType = options.enums === String ? "FLOAT" : 1;
                    if (options.bytes === String)
                        object.byteData = "";
                    else {
                        object.byteData = [];
                        if (options.bytes !== Array)
                            object.byteData = $util.newBuffer(object.byteData);
                    }
                    object.name = "";
                    object.deviceDetail = null;
                    object.segment = null;
                }
                if (message.dims && message.dims.length) {
                    object.dims = [];
                    for (var j = 0; j < message.dims.length; ++j)
                        if (typeof message.dims[j] === "number")
                            object.dims[j] = options.longs === String ? String(message.dims[j]) : message.dims[j];
                        else
                            object.dims[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dims[j]) : options.longs === Number ? new $util.LongBits(message.dims[j].low >>> 0, message.dims[j].high >>> 0).toNumber() : message.dims[j];
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = options.enums === String ? $root.caffe2.TensorProto.DataType[message.dataType] : message.dataType;
                if (message.floatData && message.floatData.length) {
                    object.floatData = [];
                    for (var j = 0; j < message.floatData.length; ++j)
                        object.floatData[j] = options.json && !isFinite(message.floatData[j]) ? String(message.floatData[j]) : message.floatData[j];
                }
                if (message.int32Data && message.int32Data.length) {
                    object.int32Data = [];
                    for (var j = 0; j < message.int32Data.length; ++j)
                        object.int32Data[j] = message.int32Data[j];
                }
                if (message.byteData != null && message.hasOwnProperty("byteData"))
                    object.byteData = options.bytes === String ? $util.base64.encode(message.byteData, 0, message.byteData.length) : options.bytes === Array ? Array.prototype.slice.call(message.byteData) : message.byteData;
                if (message.stringData && message.stringData.length) {
                    object.stringData = [];
                    for (var j = 0; j < message.stringData.length; ++j)
                        object.stringData[j] = options.bytes === String ? $util.base64.encode(message.stringData[j], 0, message.stringData[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.stringData[j]) : message.stringData[j];
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.deviceDetail != null && message.hasOwnProperty("deviceDetail"))
                    object.deviceDetail = $root.caffe2.DeviceOption.toObject(message.deviceDetail, options);
                if (message.doubleData && message.doubleData.length) {
                    object.doubleData = [];
                    for (var j = 0; j < message.doubleData.length; ++j)
                        object.doubleData[j] = options.json && !isFinite(message.doubleData[j]) ? String(message.doubleData[j]) : message.doubleData[j];
                }
                if (message.int64Data && message.int64Data.length) {
                    object.int64Data = [];
                    for (var j = 0; j < message.int64Data.length; ++j)
                        if (typeof message.int64Data[j] === "number")
                            object.int64Data[j] = options.longs === String ? String(message.int64Data[j]) : message.int64Data[j];
                        else
                            object.int64Data[j] = options.longs === String ? $util.Long.prototype.toString.call(message.int64Data[j]) : options.longs === Number ? new $util.LongBits(message.int64Data[j].low >>> 0, message.int64Data[j].high >>> 0).toNumber() : message.int64Data[j];
                }
                if (message.segment != null && message.hasOwnProperty("segment"))
                    object.segment = $root.caffe2.TensorProto.Segment.toObject(message.segment, options);
                return object;
            };
    
            TensorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            TensorProto.DataType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNDEFINED"] = 0;
                values[valuesById[1] = "FLOAT"] = 1;
                values[valuesById[2] = "INT32"] = 2;
                values[valuesById[3] = "BYTE"] = 3;
                values[valuesById[4] = "STRING"] = 4;
                values[valuesById[5] = "BOOL"] = 5;
                values[valuesById[6] = "UINT8"] = 6;
                values[valuesById[7] = "INT8"] = 7;
                values[valuesById[8] = "UINT16"] = 8;
                values[valuesById[9] = "INT16"] = 9;
                values[valuesById[10] = "INT64"] = 10;
                values[valuesById[12] = "FLOAT16"] = 12;
                values[valuesById[13] = "DOUBLE"] = 13;
                return values;
            })();
    
            TensorProto.Segment = (function() {
    
                function Segment(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                Segment.prototype.begin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                Segment.prototype.end = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                Segment.create = function create(properties) {
                    return new Segment(properties);
                };
    
                Segment.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.TensorProto.Segment();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.begin = reader.int64();
                            break;
                        case 2:
                            message.end = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("begin"))
                        throw $util.ProtocolError("missing required 'begin'", { instance: message });
                    if (!message.hasOwnProperty("end"))
                        throw $util.ProtocolError("missing required 'end'", { instance: message });
                    return message;
                };
    
                Segment.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isInteger(message.begin) && !(message.begin && $util.isInteger(message.begin.low) && $util.isInteger(message.begin.high)))
                        return "begin: integer|Long expected";
                    if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                        return "end: integer|Long expected";
                    return null;
                };
    
                Segment.fromObject = function fromObject(object) {
                    if (object instanceof $root.caffe2.TensorProto.Segment)
                        return object;
                    var message = new $root.caffe2.TensorProto.Segment();
                    if (object.begin != null)
                        if ($util.Long)
                            (message.begin = $util.Long.fromValue(object.begin)).unsigned = false;
                        else if (typeof object.begin === "string")
                            message.begin = parseInt(object.begin, 10);
                        else if (typeof object.begin === "number")
                            message.begin = object.begin;
                        else if (typeof object.begin === "object")
                            message.begin = new $util.LongBits(object.begin.low >>> 0, object.begin.high >>> 0).toNumber();
                    if (object.end != null)
                        if ($util.Long)
                            (message.end = $util.Long.fromValue(object.end)).unsigned = false;
                        else if (typeof object.end === "string")
                            message.end = parseInt(object.end, 10);
                        else if (typeof object.end === "number")
                            message.end = object.end;
                        else if (typeof object.end === "object")
                            message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber();
                    return message;
                };
    
                Segment.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.begin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.begin = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.end = options.longs === String ? "0" : 0;
                    }
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (typeof message.begin === "number")
                            object.begin = options.longs === String ? String(message.begin) : message.begin;
                        else
                            object.begin = options.longs === String ? $util.Long.prototype.toString.call(message.begin) : options.longs === Number ? new $util.LongBits(message.begin.low >>> 0, message.begin.high >>> 0).toNumber() : message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (typeof message.end === "number")
                            object.end = options.longs === String ? String(message.end) : message.end;
                        else
                            object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber() : message.end;
                    return object;
                };
    
                Segment.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Segment;
            })();
    
            return TensorProto;
        })();
    
        caffe2.QTensorProto = (function() {
    
            function QTensorProto(properties) {
                this.dims = [];
                this.data = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            QTensorProto.prototype.dims = $util.emptyArray;
            QTensorProto.prototype.precision = 0;
            QTensorProto.prototype.scale = 0;
            QTensorProto.prototype.bias = 0;
            QTensorProto.prototype.isSigned = false;
            QTensorProto.prototype.data = $util.emptyArray;
            QTensorProto.prototype.name = "";
            QTensorProto.prototype.dataType = 2;
    
            QTensorProto.create = function create(properties) {
                return new QTensorProto(properties);
            };
    
            QTensorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.QTensorProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dims && message.dims.length))
                            message.dims = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dims.push(reader.int64());
                        } else
                            message.dims.push(reader.int64());
                        break;
                    case 2:
                        message.precision = reader.int32();
                        break;
                    case 3:
                        message.scale = reader.double();
                        break;
                    case 4:
                        message.bias = reader.double();
                        break;
                    case 5:
                        message.isSigned = reader.bool();
                        break;
                    case 6:
                        if (!(message.data && message.data.length))
                            message.data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.data.push(reader.int32());
                        } else
                            message.data.push(reader.int32());
                        break;
                    case 7:
                        message.name = reader.string();
                        break;
                    case 8:
                        message.dataType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("precision"))
                    throw $util.ProtocolError("missing required 'precision'", { instance: message });
                if (!message.hasOwnProperty("scale"))
                    throw $util.ProtocolError("missing required 'scale'", { instance: message });
                if (!message.hasOwnProperty("bias"))
                    throw $util.ProtocolError("missing required 'bias'", { instance: message });
                if (!message.hasOwnProperty("isSigned"))
                    throw $util.ProtocolError("missing required 'isSigned'", { instance: message });
                return message;
            };
    
            QTensorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dims != null && message.hasOwnProperty("dims")) {
                    if (!Array.isArray(message.dims))
                        return "dims: array expected";
                    for (var i = 0; i < message.dims.length; ++i)
                        if (!$util.isInteger(message.dims[i]) && !(message.dims[i] && $util.isInteger(message.dims[i].low) && $util.isInteger(message.dims[i].high)))
                            return "dims: integer|Long[] expected";
                }
                if (!$util.isInteger(message.precision))
                    return "precision: integer expected";
                if (typeof message.scale !== "number")
                    return "scale: number expected";
                if (typeof message.bias !== "number")
                    return "bias: number expected";
                if (typeof message.isSigned !== "boolean")
                    return "isSigned: boolean expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!Array.isArray(message.data))
                        return "data: array expected";
                    for (var i = 0; i < message.data.length; ++i)
                        if (!$util.isInteger(message.data[i]))
                            return "data: integer[] expected";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    switch (message.dataType) {
                    default:
                        return "dataType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 12:
                    case 13:
                        break;
                    }
                return null;
            };
    
            QTensorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.QTensorProto)
                    return object;
                var message = new $root.caffe2.QTensorProto();
                if (object.dims) {
                    if (!Array.isArray(object.dims))
                        throw TypeError(".caffe2.QTensorProto.dims: array expected");
                    message.dims = [];
                    for (var i = 0; i < object.dims.length; ++i)
                        if ($util.Long)
                            (message.dims[i] = $util.Long.fromValue(object.dims[i])).unsigned = false;
                        else if (typeof object.dims[i] === "string")
                            message.dims[i] = parseInt(object.dims[i], 10);
                        else if (typeof object.dims[i] === "number")
                            message.dims[i] = object.dims[i];
                        else if (typeof object.dims[i] === "object")
                            message.dims[i] = new $util.LongBits(object.dims[i].low >>> 0, object.dims[i].high >>> 0).toNumber();
                }
                if (object.precision != null)
                    message.precision = object.precision | 0;
                if (object.scale != null)
                    message.scale = Number(object.scale);
                if (object.bias != null)
                    message.bias = Number(object.bias);
                if (object.isSigned != null)
                    message.isSigned = Boolean(object.isSigned);
                if (object.data) {
                    if (!Array.isArray(object.data))
                        throw TypeError(".caffe2.QTensorProto.data: array expected");
                    message.data = [];
                    for (var i = 0; i < object.data.length; ++i)
                        message.data[i] = object.data[i] | 0;
                }
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.dataType) {
                case "UNDEFINED":
                case 0:
                    message.dataType = 0;
                    break;
                case "FLOAT":
                case 1:
                    message.dataType = 1;
                    break;
                case "INT32":
                case 2:
                    message.dataType = 2;
                    break;
                case "BYTE":
                case 3:
                    message.dataType = 3;
                    break;
                case "STRING":
                case 4:
                    message.dataType = 4;
                    break;
                case "BOOL":
                case 5:
                    message.dataType = 5;
                    break;
                case "UINT8":
                case 6:
                    message.dataType = 6;
                    break;
                case "INT8":
                case 7:
                    message.dataType = 7;
                    break;
                case "UINT16":
                case 8:
                    message.dataType = 8;
                    break;
                case "INT16":
                case 9:
                    message.dataType = 9;
                    break;
                case "INT64":
                case 10:
                    message.dataType = 10;
                    break;
                case "FLOAT16":
                case 12:
                    message.dataType = 12;
                    break;
                case "DOUBLE":
                case 13:
                    message.dataType = 13;
                    break;
                }
                return message;
            };
    
            QTensorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dims = [];
                    object.data = [];
                }
                if (options.defaults) {
                    object.precision = 0;
                    object.scale = 0;
                    object.bias = 0;
                    object.isSigned = false;
                    object.name = "";
                    object.dataType = options.enums === String ? "INT32" : 2;
                }
                if (message.dims && message.dims.length) {
                    object.dims = [];
                    for (var j = 0; j < message.dims.length; ++j)
                        if (typeof message.dims[j] === "number")
                            object.dims[j] = options.longs === String ? String(message.dims[j]) : message.dims[j];
                        else
                            object.dims[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dims[j]) : options.longs === Number ? new $util.LongBits(message.dims[j].low >>> 0, message.dims[j].high >>> 0).toNumber() : message.dims[j];
                }
                if (message.precision != null && message.hasOwnProperty("precision"))
                    object.precision = message.precision;
                if (message.scale != null && message.hasOwnProperty("scale"))
                    object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
                if (message.bias != null && message.hasOwnProperty("bias"))
                    object.bias = options.json && !isFinite(message.bias) ? String(message.bias) : message.bias;
                if (message.isSigned != null && message.hasOwnProperty("isSigned"))
                    object.isSigned = message.isSigned;
                if (message.data && message.data.length) {
                    object.data = [];
                    for (var j = 0; j < message.data.length; ++j)
                        object.data[j] = message.data[j];
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = options.enums === String ? $root.caffe2.TensorProto.DataType[message.dataType] : message.dataType;
                return object;
            };
    
            QTensorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return QTensorProto;
        })();
    
        caffe2.TensorProtos = (function() {
    
            function TensorProtos(properties) {
                this.protos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            TensorProtos.prototype.protos = $util.emptyArray;
    
            TensorProtos.create = function create(properties) {
                return new TensorProtos(properties);
            };
    
            TensorProtos.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.TensorProtos();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.protos && message.protos.length))
                            message.protos = [];
                        message.protos.push($root.caffe2.TensorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            TensorProtos.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.protos != null && message.hasOwnProperty("protos")) {
                    if (!Array.isArray(message.protos))
                        return "protos: array expected";
                    for (var i = 0; i < message.protos.length; ++i) {
                        var error = $root.caffe2.TensorProto.verify(message.protos[i]);
                        if (error)
                            return "protos." + error;
                    }
                }
                return null;
            };
    
            TensorProtos.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.TensorProtos)
                    return object;
                var message = new $root.caffe2.TensorProtos();
                if (object.protos) {
                    if (!Array.isArray(object.protos))
                        throw TypeError(".caffe2.TensorProtos.protos: array expected");
                    message.protos = [];
                    for (var i = 0; i < object.protos.length; ++i) {
                        if (typeof object.protos[i] !== "object")
                            throw TypeError(".caffe2.TensorProtos.protos: object expected");
                        message.protos[i] = $root.caffe2.TensorProto.fromObject(object.protos[i]);
                    }
                }
                return message;
            };
    
            TensorProtos.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.protos = [];
                if (message.protos && message.protos.length) {
                    object.protos = [];
                    for (var j = 0; j < message.protos.length; ++j)
                        object.protos[j] = $root.caffe2.TensorProto.toObject(message.protos[j], options);
                }
                return object;
            };
    
            TensorProtos.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TensorProtos;
        })();
    
        caffe2.TensorShape = (function() {
    
            function TensorShape(properties) {
                this.dims = [];
                this.unknownDims = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            TensorShape.prototype.dims = $util.emptyArray;
            TensorShape.prototype.dataType = 1;
            TensorShape.prototype.unknownDims = $util.emptyArray;
            TensorShape.prototype.unknownShape = false;
            TensorShape.prototype.name = "";
    
            TensorShape.create = function create(properties) {
                return new TensorShape(properties);
            };
    
            TensorShape.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.TensorShape();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.dims && message.dims.length))
                            message.dims = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.dims.push(reader.int64());
                        } else
                            message.dims.push(reader.int64());
                        break;
                    case 2:
                        message.dataType = reader.int32();
                        break;
                    case 3:
                        if (!(message.unknownDims && message.unknownDims.length))
                            message.unknownDims = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.unknownDims.push(reader.int32());
                        } else
                            message.unknownDims.push(reader.int32());
                        break;
                    case 4:
                        message.unknownShape = reader.bool();
                        break;
                    case 5:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            TensorShape.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.dims != null && message.hasOwnProperty("dims")) {
                    if (!Array.isArray(message.dims))
                        return "dims: array expected";
                    for (var i = 0; i < message.dims.length; ++i)
                        if (!$util.isInteger(message.dims[i]) && !(message.dims[i] && $util.isInteger(message.dims[i].low) && $util.isInteger(message.dims[i].high)))
                            return "dims: integer|Long[] expected";
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    switch (message.dataType) {
                    default:
                        return "dataType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 12:
                    case 13:
                        break;
                    }
                if (message.unknownDims != null && message.hasOwnProperty("unknownDims")) {
                    if (!Array.isArray(message.unknownDims))
                        return "unknownDims: array expected";
                    for (var i = 0; i < message.unknownDims.length; ++i)
                        if (!$util.isInteger(message.unknownDims[i]))
                            return "unknownDims: integer[] expected";
                }
                if (message.unknownShape != null && message.hasOwnProperty("unknownShape"))
                    if (typeof message.unknownShape !== "boolean")
                        return "unknownShape: boolean expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
    
            TensorShape.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.TensorShape)
                    return object;
                var message = new $root.caffe2.TensorShape();
                if (object.dims) {
                    if (!Array.isArray(object.dims))
                        throw TypeError(".caffe2.TensorShape.dims: array expected");
                    message.dims = [];
                    for (var i = 0; i < object.dims.length; ++i)
                        if ($util.Long)
                            (message.dims[i] = $util.Long.fromValue(object.dims[i])).unsigned = false;
                        else if (typeof object.dims[i] === "string")
                            message.dims[i] = parseInt(object.dims[i], 10);
                        else if (typeof object.dims[i] === "number")
                            message.dims[i] = object.dims[i];
                        else if (typeof object.dims[i] === "object")
                            message.dims[i] = new $util.LongBits(object.dims[i].low >>> 0, object.dims[i].high >>> 0).toNumber();
                }
                switch (object.dataType) {
                case "UNDEFINED":
                case 0:
                    message.dataType = 0;
                    break;
                case "FLOAT":
                case 1:
                    message.dataType = 1;
                    break;
                case "INT32":
                case 2:
                    message.dataType = 2;
                    break;
                case "BYTE":
                case 3:
                    message.dataType = 3;
                    break;
                case "STRING":
                case 4:
                    message.dataType = 4;
                    break;
                case "BOOL":
                case 5:
                    message.dataType = 5;
                    break;
                case "UINT8":
                case 6:
                    message.dataType = 6;
                    break;
                case "INT8":
                case 7:
                    message.dataType = 7;
                    break;
                case "UINT16":
                case 8:
                    message.dataType = 8;
                    break;
                case "INT16":
                case 9:
                    message.dataType = 9;
                    break;
                case "INT64":
                case 10:
                    message.dataType = 10;
                    break;
                case "FLOAT16":
                case 12:
                    message.dataType = 12;
                    break;
                case "DOUBLE":
                case 13:
                    message.dataType = 13;
                    break;
                }
                if (object.unknownDims) {
                    if (!Array.isArray(object.unknownDims))
                        throw TypeError(".caffe2.TensorShape.unknownDims: array expected");
                    message.unknownDims = [];
                    for (var i = 0; i < object.unknownDims.length; ++i)
                        message.unknownDims[i] = object.unknownDims[i] | 0;
                }
                if (object.unknownShape != null)
                    message.unknownShape = Boolean(object.unknownShape);
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
    
            TensorShape.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.dims = [];
                    object.unknownDims = [];
                }
                if (options.defaults) {
                    object.dataType = options.enums === String ? "FLOAT" : 1;
                    object.unknownShape = false;
                    object.name = "";
                }
                if (message.dims && message.dims.length) {
                    object.dims = [];
                    for (var j = 0; j < message.dims.length; ++j)
                        if (typeof message.dims[j] === "number")
                            object.dims[j] = options.longs === String ? String(message.dims[j]) : message.dims[j];
                        else
                            object.dims[j] = options.longs === String ? $util.Long.prototype.toString.call(message.dims[j]) : options.longs === Number ? new $util.LongBits(message.dims[j].low >>> 0, message.dims[j].high >>> 0).toNumber() : message.dims[j];
                }
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = options.enums === String ? $root.caffe2.TensorProto.DataType[message.dataType] : message.dataType;
                if (message.unknownDims && message.unknownDims.length) {
                    object.unknownDims = [];
                    for (var j = 0; j < message.unknownDims.length; ++j)
                        object.unknownDims[j] = message.unknownDims[j];
                }
                if (message.unknownShape != null && message.hasOwnProperty("unknownShape"))
                    object.unknownShape = message.unknownShape;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
    
            TensorShape.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TensorShape;
        })();
    
        caffe2.TensorShapes = (function() {
    
            function TensorShapes(properties) {
                this.shapes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            TensorShapes.prototype.shapes = $util.emptyArray;
    
            TensorShapes.create = function create(properties) {
                return new TensorShapes(properties);
            };
    
            TensorShapes.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.TensorShapes();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.shapes && message.shapes.length))
                            message.shapes = [];
                        message.shapes.push($root.caffe2.TensorShape.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            TensorShapes.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.shapes != null && message.hasOwnProperty("shapes")) {
                    if (!Array.isArray(message.shapes))
                        return "shapes: array expected";
                    for (var i = 0; i < message.shapes.length; ++i) {
                        var error = $root.caffe2.TensorShape.verify(message.shapes[i]);
                        if (error)
                            return "shapes." + error;
                    }
                }
                return null;
            };
    
            TensorShapes.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.TensorShapes)
                    return object;
                var message = new $root.caffe2.TensorShapes();
                if (object.shapes) {
                    if (!Array.isArray(object.shapes))
                        throw TypeError(".caffe2.TensorShapes.shapes: array expected");
                    message.shapes = [];
                    for (var i = 0; i < object.shapes.length; ++i) {
                        if (typeof object.shapes[i] !== "object")
                            throw TypeError(".caffe2.TensorShapes.shapes: object expected");
                        message.shapes[i] = $root.caffe2.TensorShape.fromObject(object.shapes[i]);
                    }
                }
                return message;
            };
    
            TensorShapes.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.shapes = [];
                if (message.shapes && message.shapes.length) {
                    object.shapes = [];
                    for (var j = 0; j < message.shapes.length; ++j)
                        object.shapes[j] = $root.caffe2.TensorShape.toObject(message.shapes[j], options);
                }
                return object;
            };
    
            TensorShapes.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TensorShapes;
        })();
    
        caffe2.Argument = (function() {
    
            function Argument(properties) {
                this.floats = [];
                this.ints = [];
                this.strings = [];
                this.nets = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            Argument.prototype.name = "";
            Argument.prototype.f = 0;
            Argument.prototype.i = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Argument.prototype.s = $util.newBuffer([]);
            Argument.prototype.n = null;
            Argument.prototype.floats = $util.emptyArray;
            Argument.prototype.ints = $util.emptyArray;
            Argument.prototype.strings = $util.emptyArray;
            Argument.prototype.nets = $util.emptyArray;
    
            Argument.create = function create(properties) {
                return new Argument(properties);
            };
    
            Argument.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.Argument();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.f = reader.float();
                        break;
                    case 3:
                        message.i = reader.int64();
                        break;
                    case 4:
                        message.s = reader.bytes();
                        break;
                    case 8:
                        message.n = $root.caffe2.NetDef.decode(reader, reader.uint32());
                        break;
                    case 5:
                        if (!(message.floats && message.floats.length)) {
                            if (message.floats != -1) {
                                message.floats = [];
                                message.floatsCount = 0;
                            }
                        }
                        if (message.floatsCount < 1000000) {
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2) {
                                    message.floats.push(reader.float());
                                    message.floatsCount++;
                                }
                            }
                            else {
                                message.floats.push(reader.float());
                                message.floatsCount++;
                            }
                        }
                        else {
                            message.floats = -1;
                            if ((tag & 7) === 2) {
                                var endx = reader.uint32() + reader.pos;
                                while (reader.pos < endx)
                                    reader.float();
                            }
                            else {
                                reader.float();
                            }
                        }
                        break;
                    case 6:
                        if (!(message.ints && message.ints.length))
                            message.ints = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ints.push(reader.int64());
                        } else
                            message.ints.push(reader.int64());
                        break;
                    case 7:
                        if (!(message.strings && message.strings.length))
                            message.strings = [];
                        message.strings.push(reader.bytes());
                        break;
                    case 9:
                        if (!(message.nets && message.nets.length))
                            message.nets = [];
                        message.nets.push($root.caffe2.NetDef.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            Argument.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.f != null && message.hasOwnProperty("f"))
                    if (typeof message.f !== "number")
                        return "f: number expected";
                if (message.i != null && message.hasOwnProperty("i"))
                    if (!$util.isInteger(message.i) && !(message.i && $util.isInteger(message.i.low) && $util.isInteger(message.i.high)))
                        return "i: integer|Long expected";
                if (message.s != null && message.hasOwnProperty("s"))
                    if (!(message.s && typeof message.s.length === "number" || $util.isString(message.s)))
                        return "s: buffer expected";
                if (message.n != null && message.hasOwnProperty("n")) {
                    var error = $root.caffe2.NetDef.verify(message.n);
                    if (error)
                        return "n." + error;
                }
                if (message.floats != null && message.hasOwnProperty("floats")) {
                    if (!Array.isArray(message.floats))
                        return "floats: array expected";
                    for (var i = 0; i < message.floats.length; ++i)
                        if (typeof message.floats[i] !== "number")
                            return "floats: number[] expected";
                }
                if (message.ints != null && message.hasOwnProperty("ints")) {
                    if (!Array.isArray(message.ints))
                        return "ints: array expected";
                    for (var i = 0; i < message.ints.length; ++i)
                        if (!$util.isInteger(message.ints[i]) && !(message.ints[i] && $util.isInteger(message.ints[i].low) && $util.isInteger(message.ints[i].high)))
                            return "ints: integer|Long[] expected";
                }
                if (message.strings != null && message.hasOwnProperty("strings")) {
                    if (!Array.isArray(message.strings))
                        return "strings: array expected";
                    for (var i = 0; i < message.strings.length; ++i)
                        if (!(message.strings[i] && typeof message.strings[i].length === "number" || $util.isString(message.strings[i])))
                            return "strings: buffer[] expected";
                }
                if (message.nets != null && message.hasOwnProperty("nets")) {
                    if (!Array.isArray(message.nets))
                        return "nets: array expected";
                    for (var i = 0; i < message.nets.length; ++i) {
                        var error = $root.caffe2.NetDef.verify(message.nets[i]);
                        if (error)
                            return "nets." + error;
                    }
                }
                return null;
            };
    
            Argument.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.Argument)
                    return object;
                var message = new $root.caffe2.Argument();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.f != null)
                    message.f = Number(object.f);
                if (object.i != null)
                    if ($util.Long)
                        (message.i = $util.Long.fromValue(object.i)).unsigned = false;
                    else if (typeof object.i === "string")
                        message.i = parseInt(object.i, 10);
                    else if (typeof object.i === "number")
                        message.i = object.i;
                    else if (typeof object.i === "object")
                        message.i = new $util.LongBits(object.i.low >>> 0, object.i.high >>> 0).toNumber();
                if (object.s != null)
                    if (typeof object.s === "string")
                        $util.base64.decode(object.s, message.s = $util.newBuffer($util.base64.length(object.s)), 0);
                    else if (object.s.length)
                        message.s = object.s;
                if (object.n != null) {
                    if (typeof object.n !== "object")
                        throw TypeError(".caffe2.Argument.n: object expected");
                    message.n = $root.caffe2.NetDef.fromObject(object.n);
                }
                if (object.floats) {
                    if (!Array.isArray(object.floats))
                        throw TypeError(".caffe2.Argument.floats: array expected");
                    message.floats = [];
                    for (var i = 0; i < object.floats.length; ++i)
                        message.floats[i] = Number(object.floats[i]);
                }
                if (object.ints) {
                    if (!Array.isArray(object.ints))
                        throw TypeError(".caffe2.Argument.ints: array expected");
                    message.ints = [];
                    for (var i = 0; i < object.ints.length; ++i)
                        if ($util.Long)
                            (message.ints[i] = $util.Long.fromValue(object.ints[i])).unsigned = false;
                        else if (typeof object.ints[i] === "string")
                            message.ints[i] = parseInt(object.ints[i], 10);
                        else if (typeof object.ints[i] === "number")
                            message.ints[i] = object.ints[i];
                        else if (typeof object.ints[i] === "object")
                            message.ints[i] = new $util.LongBits(object.ints[i].low >>> 0, object.ints[i].high >>> 0).toNumber();
                }
                if (object.strings) {
                    if (!Array.isArray(object.strings))
                        throw TypeError(".caffe2.Argument.strings: array expected");
                    message.strings = [];
                    for (var i = 0; i < object.strings.length; ++i)
                        if (typeof object.strings[i] === "string")
                            $util.base64.decode(object.strings[i], message.strings[i] = $util.newBuffer($util.base64.length(object.strings[i])), 0);
                        else if (object.strings[i].length)
                            message.strings[i] = object.strings[i];
                }
                if (object.nets) {
                    if (!Array.isArray(object.nets))
                        throw TypeError(".caffe2.Argument.nets: array expected");
                    message.nets = [];
                    for (var i = 0; i < object.nets.length; ++i) {
                        if (typeof object.nets[i] !== "object")
                            throw TypeError(".caffe2.Argument.nets: object expected");
                        message.nets[i] = $root.caffe2.NetDef.fromObject(object.nets[i]);
                    }
                }
                return message;
            };
    
            Argument.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.floats = [];
                    object.ints = [];
                    object.strings = [];
                    object.nets = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.f = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.i = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.i = options.longs === String ? "0" : 0;
                    if (options.bytes === String)
                        object.s = "";
                    else {
                        object.s = [];
                        if (options.bytes !== Array)
                            object.s = $util.newBuffer(object.s);
                    }
                    object.n = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.f != null && message.hasOwnProperty("f"))
                    object.f = options.json && !isFinite(message.f) ? String(message.f) : message.f;
                if (message.i != null && message.hasOwnProperty("i"))
                    if (typeof message.i === "number")
                        object.i = options.longs === String ? String(message.i) : message.i;
                    else
                        object.i = options.longs === String ? $util.Long.prototype.toString.call(message.i) : options.longs === Number ? new $util.LongBits(message.i.low >>> 0, message.i.high >>> 0).toNumber() : message.i;
                if (message.s != null && message.hasOwnProperty("s"))
                    object.s = options.bytes === String ? $util.base64.encode(message.s, 0, message.s.length) : options.bytes === Array ? Array.prototype.slice.call(message.s) : message.s;
                if (message.floats && message.floats.length) {
                    object.floats = [];
                    for (var j = 0; j < message.floats.length; ++j)
                        object.floats[j] = options.json && !isFinite(message.floats[j]) ? String(message.floats[j]) : message.floats[j];
                }
                if (message.ints && message.ints.length) {
                    object.ints = [];
                    for (var j = 0; j < message.ints.length; ++j)
                        if (typeof message.ints[j] === "number")
                            object.ints[j] = options.longs === String ? String(message.ints[j]) : message.ints[j];
                        else
                            object.ints[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ints[j]) : options.longs === Number ? new $util.LongBits(message.ints[j].low >>> 0, message.ints[j].high >>> 0).toNumber() : message.ints[j];
                }
                if (message.strings && message.strings.length) {
                    object.strings = [];
                    for (var j = 0; j < message.strings.length; ++j)
                        object.strings[j] = options.bytes === String ? $util.base64.encode(message.strings[j], 0, message.strings[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.strings[j]) : message.strings[j];
                }
                if (message.n != null && message.hasOwnProperty("n"))
                    object.n = $root.caffe2.NetDef.toObject(message.n, options);
                if (message.nets && message.nets.length) {
                    object.nets = [];
                    for (var j = 0; j < message.nets.length; ++j)
                        object.nets[j] = $root.caffe2.NetDef.toObject(message.nets[j], options);
                }
                return object;
            };
    
            Argument.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Argument;
        })();
    
        caffe2.DeviceTypeProto = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PROTO_CPU"] = 0;
            values[valuesById[1] = "PROTO_CUDA"] = 1;
            values[valuesById[2] = "PROTO_MKLDNN"] = 2;
            values[valuesById[3] = "PROTO_OPENGL"] = 3;
            values[valuesById[4] = "PROTO_OPENCL"] = 4;
            values[valuesById[5] = "PROTO_IDEEP"] = 5;
            values[valuesById[6] = "PROTO_HIP"] = 6;
            values[valuesById[7] = "PROTO_COMPILE_TIME_MAX_DEVICE_TYPES"] = 7;
            values[valuesById[20901701] = "PROTO_ONLY_FOR_TEST"] = 20901701;
            return values;
        })();
    
        caffe2.DeviceOption = (function() {
    
            function DeviceOption(properties) {
                this.extraInfo = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            DeviceOption.prototype.deviceType = 0;
            DeviceOption.prototype.cudaGpuId = 0;
            DeviceOption.prototype.randomSeed = 0;
            DeviceOption.prototype.nodeName = "";
            DeviceOption.prototype.numaNodeId = 0;
            DeviceOption.prototype.extraInfo = $util.emptyArray;
            DeviceOption.prototype.hipGpuId = 0;
    
            DeviceOption.create = function create(properties) {
                return new DeviceOption(properties);
            };
    
            DeviceOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.DeviceOption();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deviceType = reader.int32();
                        break;
                    case 2:
                        message.cudaGpuId = reader.int32();
                        break;
                    case 3:
                        message.randomSeed = reader.uint32();
                        break;
                    case 4:
                        message.nodeName = reader.string();
                        break;
                    case 5:
                        message.numaNodeId = reader.int32();
                        break;
                    case 6:
                        if (!(message.extraInfo && message.extraInfo.length))
                            message.extraInfo = [];
                        message.extraInfo.push(reader.string());
                        break;
                    case 7:
                        message.hipGpuId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            DeviceOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    if (!$util.isInteger(message.deviceType))
                        return "deviceType: integer expected";
                if (message.cudaGpuId != null && message.hasOwnProperty("cudaGpuId"))
                    if (!$util.isInteger(message.cudaGpuId))
                        return "cudaGpuId: integer expected";
                if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                    if (!$util.isInteger(message.randomSeed))
                        return "randomSeed: integer expected";
                if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                    if (!$util.isString(message.nodeName))
                        return "nodeName: string expected";
                if (message.numaNodeId != null && message.hasOwnProperty("numaNodeId"))
                    if (!$util.isInteger(message.numaNodeId))
                        return "numaNodeId: integer expected";
                if (message.extraInfo != null && message.hasOwnProperty("extraInfo")) {
                    if (!Array.isArray(message.extraInfo))
                        return "extraInfo: array expected";
                    for (var i = 0; i < message.extraInfo.length; ++i)
                        if (!$util.isString(message.extraInfo[i]))
                            return "extraInfo: string[] expected";
                }
                if (message.hipGpuId != null && message.hasOwnProperty("hipGpuId"))
                    if (!$util.isInteger(message.hipGpuId))
                        return "hipGpuId: integer expected";
                return null;
            };
    
            DeviceOption.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.DeviceOption)
                    return object;
                var message = new $root.caffe2.DeviceOption();
                if (object.deviceType != null)
                    message.deviceType = object.deviceType | 0;
                if (object.cudaGpuId != null)
                    message.cudaGpuId = object.cudaGpuId | 0;
                if (object.randomSeed != null)
                    message.randomSeed = object.randomSeed >>> 0;
                if (object.nodeName != null)
                    message.nodeName = String(object.nodeName);
                if (object.numaNodeId != null)
                    message.numaNodeId = object.numaNodeId | 0;
                if (object.extraInfo) {
                    if (!Array.isArray(object.extraInfo))
                        throw TypeError(".caffe2.DeviceOption.extraInfo: array expected");
                    message.extraInfo = [];
                    for (var i = 0; i < object.extraInfo.length; ++i)
                        message.extraInfo[i] = String(object.extraInfo[i]);
                }
                if (object.hipGpuId != null)
                    message.hipGpuId = object.hipGpuId | 0;
                return message;
            };
    
            DeviceOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.extraInfo = [];
                if (options.defaults) {
                    object.deviceType = 0;
                    object.cudaGpuId = 0;
                    object.randomSeed = 0;
                    object.nodeName = "";
                    object.numaNodeId = 0;
                    object.hipGpuId = 0;
                }
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    object.deviceType = message.deviceType;
                if (message.cudaGpuId != null && message.hasOwnProperty("cudaGpuId"))
                    object.cudaGpuId = message.cudaGpuId;
                if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                    object.randomSeed = message.randomSeed;
                if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                    object.nodeName = message.nodeName;
                if (message.numaNodeId != null && message.hasOwnProperty("numaNodeId"))
                    object.numaNodeId = message.numaNodeId;
                if (message.extraInfo && message.extraInfo.length) {
                    object.extraInfo = [];
                    for (var j = 0; j < message.extraInfo.length; ++j)
                        object.extraInfo[j] = message.extraInfo[j];
                }
                if (message.hipGpuId != null && message.hasOwnProperty("hipGpuId"))
                    object.hipGpuId = message.hipGpuId;
                return object;
            };
    
            DeviceOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeviceOption;
        })();
    
        caffe2.OperatorDef = (function() {
    
            function OperatorDef(properties) {
                this.input = [];
                this.output = [];
                this.arg = [];
                this.controlInput = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            OperatorDef.prototype.input = $util.emptyArray;
            OperatorDef.prototype.output = $util.emptyArray;
            OperatorDef.prototype.name = "";
            OperatorDef.prototype.type = "";
            OperatorDef.prototype.arg = $util.emptyArray;
            OperatorDef.prototype.deviceOption = null;
            OperatorDef.prototype.engine = "";
            OperatorDef.prototype.controlInput = $util.emptyArray;
            OperatorDef.prototype.isGradientOp = false;
            OperatorDef.prototype.debugInfo = "";
    
            OperatorDef.create = function create(properties) {
                return new OperatorDef(properties);
            };
    
            OperatorDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.OperatorDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.input && message.input.length))
                            message.input = [];
                        message.input.push(reader.string());
                        break;
                    case 2:
                        if (!(message.output && message.output.length))
                            message.output = [];
                        message.output.push(reader.string());
                        break;
                    case 3:
                        message.name = reader.string();
                        break;
                    case 4:
                        message.type = reader.string();
                        break;
                    case 5:
                        if (!(message.arg && message.arg.length))
                            message.arg = [];
                        message.arg.push($root.caffe2.Argument.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.deviceOption = $root.caffe2.DeviceOption.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.engine = reader.string();
                        break;
                    case 8:
                        if (!(message.controlInput && message.controlInput.length))
                            message.controlInput = [];
                        message.controlInput.push(reader.string());
                        break;
                    case 9:
                        message.isGradientOp = reader.bool();
                        break;
                    case 10:
                        message.debugInfo = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            OperatorDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.input != null && message.hasOwnProperty("input")) {
                    if (!Array.isArray(message.input))
                        return "input: array expected";
                    for (var i = 0; i < message.input.length; ++i)
                        if (!$util.isString(message.input[i]))
                            return "input: string[] expected";
                }
                if (message.output != null && message.hasOwnProperty("output")) {
                    if (!Array.isArray(message.output))
                        return "output: array expected";
                    for (var i = 0; i < message.output.length; ++i)
                        if (!$util.isString(message.output[i]))
                            return "output: string[] expected";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.arg != null && message.hasOwnProperty("arg")) {
                    if (!Array.isArray(message.arg))
                        return "arg: array expected";
                    for (var i = 0; i < message.arg.length; ++i) {
                        var error = $root.caffe2.Argument.verify(message.arg[i]);
                        if (error)
                            return "arg." + error;
                    }
                }
                if (message.deviceOption != null && message.hasOwnProperty("deviceOption")) {
                    var error = $root.caffe2.DeviceOption.verify(message.deviceOption);
                    if (error)
                        return "deviceOption." + error;
                }
                if (message.engine != null && message.hasOwnProperty("engine"))
                    if (!$util.isString(message.engine))
                        return "engine: string expected";
                if (message.controlInput != null && message.hasOwnProperty("controlInput")) {
                    if (!Array.isArray(message.controlInput))
                        return "controlInput: array expected";
                    for (var i = 0; i < message.controlInput.length; ++i)
                        if (!$util.isString(message.controlInput[i]))
                            return "controlInput: string[] expected";
                }
                if (message.isGradientOp != null && message.hasOwnProperty("isGradientOp"))
                    if (typeof message.isGradientOp !== "boolean")
                        return "isGradientOp: boolean expected";
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
                    if (!$util.isString(message.debugInfo))
                        return "debugInfo: string expected";
                return null;
            };
    
            OperatorDef.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.OperatorDef)
                    return object;
                var message = new $root.caffe2.OperatorDef();
                if (object.input) {
                    if (!Array.isArray(object.input))
                        throw TypeError(".caffe2.OperatorDef.input: array expected");
                    message.input = [];
                    for (var i = 0; i < object.input.length; ++i)
                        message.input[i] = String(object.input[i]);
                }
                if (object.output) {
                    if (!Array.isArray(object.output))
                        throw TypeError(".caffe2.OperatorDef.output: array expected");
                    message.output = [];
                    for (var i = 0; i < object.output.length; ++i)
                        message.output[i] = String(object.output[i]);
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.type != null)
                    message.type = String(object.type);
                if (object.arg) {
                    if (!Array.isArray(object.arg))
                        throw TypeError(".caffe2.OperatorDef.arg: array expected");
                    message.arg = [];
                    for (var i = 0; i < object.arg.length; ++i) {
                        if (typeof object.arg[i] !== "object")
                            throw TypeError(".caffe2.OperatorDef.arg: object expected");
                        message.arg[i] = $root.caffe2.Argument.fromObject(object.arg[i]);
                    }
                }
                if (object.deviceOption != null) {
                    if (typeof object.deviceOption !== "object")
                        throw TypeError(".caffe2.OperatorDef.deviceOption: object expected");
                    message.deviceOption = $root.caffe2.DeviceOption.fromObject(object.deviceOption);
                }
                if (object.engine != null)
                    message.engine = String(object.engine);
                if (object.controlInput) {
                    if (!Array.isArray(object.controlInput))
                        throw TypeError(".caffe2.OperatorDef.controlInput: array expected");
                    message.controlInput = [];
                    for (var i = 0; i < object.controlInput.length; ++i)
                        message.controlInput[i] = String(object.controlInput[i]);
                }
                if (object.isGradientOp != null)
                    message.isGradientOp = Boolean(object.isGradientOp);
                if (object.debugInfo != null)
                    message.debugInfo = String(object.debugInfo);
                return message;
            };
    
            OperatorDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.input = [];
                    object.output = [];
                    object.arg = [];
                    object.controlInput = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.type = "";
                    object.deviceOption = null;
                    object.engine = "";
                    object.isGradientOp = false;
                    object.debugInfo = "";
                }
                if (message.input && message.input.length) {
                    object.input = [];
                    for (var j = 0; j < message.input.length; ++j)
                        object.input[j] = message.input[j];
                }
                if (message.output && message.output.length) {
                    object.output = [];
                    for (var j = 0; j < message.output.length; ++j)
                        object.output[j] = message.output[j];
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.arg && message.arg.length) {
                    object.arg = [];
                    for (var j = 0; j < message.arg.length; ++j)
                        object.arg[j] = $root.caffe2.Argument.toObject(message.arg[j], options);
                }
                if (message.deviceOption != null && message.hasOwnProperty("deviceOption"))
                    object.deviceOption = $root.caffe2.DeviceOption.toObject(message.deviceOption, options);
                if (message.engine != null && message.hasOwnProperty("engine"))
                    object.engine = message.engine;
                if (message.controlInput && message.controlInput.length) {
                    object.controlInput = [];
                    for (var j = 0; j < message.controlInput.length; ++j)
                        object.controlInput[j] = message.controlInput[j];
                }
                if (message.isGradientOp != null && message.hasOwnProperty("isGradientOp"))
                    object.isGradientOp = message.isGradientOp;
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
                    object.debugInfo = message.debugInfo;
                return object;
            };
    
            OperatorDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return OperatorDef;
        })();
    
        caffe2.NetDef = (function() {
    
            function NetDef(properties) {
                this.op = [];
                this.arg = [];
                this.externalInput = [];
                this.externalOutput = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            NetDef.prototype.name = "";
            NetDef.prototype.op = $util.emptyArray;
            NetDef.prototype.type = "";
            NetDef.prototype.numWorkers = 0;
            NetDef.prototype.deviceOption = null;
            NetDef.prototype.arg = $util.emptyArray;
            NetDef.prototype.externalInput = $util.emptyArray;
            NetDef.prototype.externalOutput = $util.emptyArray;
    
            NetDef.create = function create(properties) {
                return new NetDef(properties);
            };
    
            NetDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.NetDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.op && message.op.length))
                            message.op = [];
                        message.op.push($root.caffe2.OperatorDef.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.type = reader.string();
                        break;
                    case 4:
                        message.numWorkers = reader.int32();
                        break;
                    case 5:
                        message.deviceOption = $root.caffe2.DeviceOption.decode(reader, reader.uint32());
                        break;
                    case 6:
                        if (!(message.arg && message.arg.length))
                            message.arg = [];
                        message.arg.push($root.caffe2.Argument.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.externalInput && message.externalInput.length))
                            message.externalInput = [];
                        message.externalInput.push(reader.string());
                        break;
                    case 8:
                        if (!(message.externalOutput && message.externalOutput.length))
                            message.externalOutput = [];
                        message.externalOutput.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            NetDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.op != null && message.hasOwnProperty("op")) {
                    if (!Array.isArray(message.op))
                        return "op: array expected";
                    for (var i = 0; i < message.op.length; ++i) {
                        var error = $root.caffe2.OperatorDef.verify(message.op[i]);
                        if (error)
                            return "op." + error;
                    }
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.numWorkers != null && message.hasOwnProperty("numWorkers"))
                    if (!$util.isInteger(message.numWorkers))
                        return "numWorkers: integer expected";
                if (message.deviceOption != null && message.hasOwnProperty("deviceOption")) {
                    var error = $root.caffe2.DeviceOption.verify(message.deviceOption);
                    if (error)
                        return "deviceOption." + error;
                }
                if (message.arg != null && message.hasOwnProperty("arg")) {
                    if (!Array.isArray(message.arg))
                        return "arg: array expected";
                    for (var i = 0; i < message.arg.length; ++i) {
                        var error = $root.caffe2.Argument.verify(message.arg[i]);
                        if (error)
                            return "arg." + error;
                    }
                }
                if (message.externalInput != null && message.hasOwnProperty("externalInput")) {
                    if (!Array.isArray(message.externalInput))
                        return "externalInput: array expected";
                    for (var i = 0; i < message.externalInput.length; ++i)
                        if (!$util.isString(message.externalInput[i]))
                            return "externalInput: string[] expected";
                }
                if (message.externalOutput != null && message.hasOwnProperty("externalOutput")) {
                    if (!Array.isArray(message.externalOutput))
                        return "externalOutput: array expected";
                    for (var i = 0; i < message.externalOutput.length; ++i)
                        if (!$util.isString(message.externalOutput[i]))
                            return "externalOutput: string[] expected";
                }
                return null;
            };
    
            NetDef.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.NetDef)
                    return object;
                var message = new $root.caffe2.NetDef();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.op) {
                    if (!Array.isArray(object.op))
                        throw TypeError(".caffe2.NetDef.op: array expected");
                    message.op = [];
                    for (var i = 0; i < object.op.length; ++i) {
                        if (typeof object.op[i] !== "object")
                            throw TypeError(".caffe2.NetDef.op: object expected");
                        message.op[i] = $root.caffe2.OperatorDef.fromObject(object.op[i]);
                    }
                }
                if (object.type != null)
                    message.type = String(object.type);
                if (object.numWorkers != null)
                    message.numWorkers = object.numWorkers | 0;
                if (object.deviceOption != null) {
                    if (typeof object.deviceOption !== "object")
                        throw TypeError(".caffe2.NetDef.deviceOption: object expected");
                    message.deviceOption = $root.caffe2.DeviceOption.fromObject(object.deviceOption);
                }
                if (object.arg) {
                    if (!Array.isArray(object.arg))
                        throw TypeError(".caffe2.NetDef.arg: array expected");
                    message.arg = [];
                    for (var i = 0; i < object.arg.length; ++i) {
                        if (typeof object.arg[i] !== "object")
                            throw TypeError(".caffe2.NetDef.arg: object expected");
                        message.arg[i] = $root.caffe2.Argument.fromObject(object.arg[i]);
                    }
                }
                if (object.externalInput) {
                    if (!Array.isArray(object.externalInput))
                        throw TypeError(".caffe2.NetDef.externalInput: array expected");
                    message.externalInput = [];
                    for (var i = 0; i < object.externalInput.length; ++i)
                        message.externalInput[i] = String(object.externalInput[i]);
                }
                if (object.externalOutput) {
                    if (!Array.isArray(object.externalOutput))
                        throw TypeError(".caffe2.NetDef.externalOutput: array expected");
                    message.externalOutput = [];
                    for (var i = 0; i < object.externalOutput.length; ++i)
                        message.externalOutput[i] = String(object.externalOutput[i]);
                }
                return message;
            };
    
            NetDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.op = [];
                    object.arg = [];
                    object.externalInput = [];
                    object.externalOutput = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.type = "";
                    object.numWorkers = 0;
                    object.deviceOption = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.op && message.op.length) {
                    object.op = [];
                    for (var j = 0; j < message.op.length; ++j)
                        object.op[j] = $root.caffe2.OperatorDef.toObject(message.op[j], options);
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.numWorkers != null && message.hasOwnProperty("numWorkers"))
                    object.numWorkers = message.numWorkers;
                if (message.deviceOption != null && message.hasOwnProperty("deviceOption"))
                    object.deviceOption = $root.caffe2.DeviceOption.toObject(message.deviceOption, options);
                if (message.arg && message.arg.length) {
                    object.arg = [];
                    for (var j = 0; j < message.arg.length; ++j)
                        object.arg[j] = $root.caffe2.Argument.toObject(message.arg[j], options);
                }
                if (message.externalInput && message.externalInput.length) {
                    object.externalInput = [];
                    for (var j = 0; j < message.externalInput.length; ++j)
                        object.externalInput[j] = message.externalInput[j];
                }
                if (message.externalOutput && message.externalOutput.length) {
                    object.externalOutput = [];
                    for (var j = 0; j < message.externalOutput.length; ++j)
                        object.externalOutput[j] = message.externalOutput[j];
                }
                return object;
            };
    
            NetDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return NetDef;
        })();
    
        caffe2.ExecutionStep = (function() {
    
            function ExecutionStep(properties) {
                this.substep = [];
                this.network = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            ExecutionStep.prototype.name = "";
            ExecutionStep.prototype.substep = $util.emptyArray;
            ExecutionStep.prototype.network = $util.emptyArray;
            ExecutionStep.prototype.numIter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            ExecutionStep.prototype.criteriaNetwork = "";
            ExecutionStep.prototype.reportNet = "";
            ExecutionStep.prototype.reportInterval = 0;
            ExecutionStep.prototype.runEveryMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            ExecutionStep.prototype.concurrentSubsteps = false;
            ExecutionStep.prototype.shouldStopBlob = "";
            ExecutionStep.prototype.onlyOnce = false;
            ExecutionStep.prototype.createWorkspace = false;
            ExecutionStep.prototype.numConcurrentInstances = 0;
    
            ExecutionStep.create = function create(properties) {
                return new ExecutionStep(properties);
            };
    
            ExecutionStep.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.ExecutionStep();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.substep && message.substep.length))
                            message.substep = [];
                        message.substep.push($root.caffe2.ExecutionStep.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.network && message.network.length))
                            message.network = [];
                        message.network.push(reader.string());
                        break;
                    case 4:
                        message.numIter = reader.int64();
                        break;
                    case 5:
                        message.criteriaNetwork = reader.string();
                        break;
                    case 7:
                        message.reportNet = reader.string();
                        break;
                    case 8:
                        message.reportInterval = reader.int32();
                        break;
                    case 11:
                        message.runEveryMs = reader.int64();
                        break;
                    case 6:
                        message.concurrentSubsteps = reader.bool();
                        break;
                    case 9:
                        message.shouldStopBlob = reader.string();
                        break;
                    case 10:
                        message.onlyOnce = reader.bool();
                        break;
                    case 12:
                        message.createWorkspace = reader.bool();
                        break;
                    case 13:
                        message.numConcurrentInstances = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            ExecutionStep.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.substep != null && message.hasOwnProperty("substep")) {
                    if (!Array.isArray(message.substep))
                        return "substep: array expected";
                    for (var i = 0; i < message.substep.length; ++i) {
                        var error = $root.caffe2.ExecutionStep.verify(message.substep[i]);
                        if (error)
                            return "substep." + error;
                    }
                }
                if (message.network != null && message.hasOwnProperty("network")) {
                    if (!Array.isArray(message.network))
                        return "network: array expected";
                    for (var i = 0; i < message.network.length; ++i)
                        if (!$util.isString(message.network[i]))
                            return "network: string[] expected";
                }
                if (message.numIter != null && message.hasOwnProperty("numIter"))
                    if (!$util.isInteger(message.numIter) && !(message.numIter && $util.isInteger(message.numIter.low) && $util.isInteger(message.numIter.high)))
                        return "numIter: integer|Long expected";
                if (message.criteriaNetwork != null && message.hasOwnProperty("criteriaNetwork"))
                    if (!$util.isString(message.criteriaNetwork))
                        return "criteriaNetwork: string expected";
                if (message.reportNet != null && message.hasOwnProperty("reportNet"))
                    if (!$util.isString(message.reportNet))
                        return "reportNet: string expected";
                if (message.reportInterval != null && message.hasOwnProperty("reportInterval"))
                    if (!$util.isInteger(message.reportInterval))
                        return "reportInterval: integer expected";
                if (message.runEveryMs != null && message.hasOwnProperty("runEveryMs"))
                    if (!$util.isInteger(message.runEveryMs) && !(message.runEveryMs && $util.isInteger(message.runEveryMs.low) && $util.isInteger(message.runEveryMs.high)))
                        return "runEveryMs: integer|Long expected";
                if (message.concurrentSubsteps != null && message.hasOwnProperty("concurrentSubsteps"))
                    if (typeof message.concurrentSubsteps !== "boolean")
                        return "concurrentSubsteps: boolean expected";
                if (message.shouldStopBlob != null && message.hasOwnProperty("shouldStopBlob"))
                    if (!$util.isString(message.shouldStopBlob))
                        return "shouldStopBlob: string expected";
                if (message.onlyOnce != null && message.hasOwnProperty("onlyOnce"))
                    if (typeof message.onlyOnce !== "boolean")
                        return "onlyOnce: boolean expected";
                if (message.createWorkspace != null && message.hasOwnProperty("createWorkspace"))
                    if (typeof message.createWorkspace !== "boolean")
                        return "createWorkspace: boolean expected";
                if (message.numConcurrentInstances != null && message.hasOwnProperty("numConcurrentInstances"))
                    if (!$util.isInteger(message.numConcurrentInstances))
                        return "numConcurrentInstances: integer expected";
                return null;
            };
    
            ExecutionStep.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.ExecutionStep)
                    return object;
                var message = new $root.caffe2.ExecutionStep();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.substep) {
                    if (!Array.isArray(object.substep))
                        throw TypeError(".caffe2.ExecutionStep.substep: array expected");
                    message.substep = [];
                    for (var i = 0; i < object.substep.length; ++i) {
                        if (typeof object.substep[i] !== "object")
                            throw TypeError(".caffe2.ExecutionStep.substep: object expected");
                        message.substep[i] = $root.caffe2.ExecutionStep.fromObject(object.substep[i]);
                    }
                }
                if (object.network) {
                    if (!Array.isArray(object.network))
                        throw TypeError(".caffe2.ExecutionStep.network: array expected");
                    message.network = [];
                    for (var i = 0; i < object.network.length; ++i)
                        message.network[i] = String(object.network[i]);
                }
                if (object.numIter != null)
                    if ($util.Long)
                        (message.numIter = $util.Long.fromValue(object.numIter)).unsigned = false;
                    else if (typeof object.numIter === "string")
                        message.numIter = parseInt(object.numIter, 10);
                    else if (typeof object.numIter === "number")
                        message.numIter = object.numIter;
                    else if (typeof object.numIter === "object")
                        message.numIter = new $util.LongBits(object.numIter.low >>> 0, object.numIter.high >>> 0).toNumber();
                if (object.criteriaNetwork != null)
                    message.criteriaNetwork = String(object.criteriaNetwork);
                if (object.reportNet != null)
                    message.reportNet = String(object.reportNet);
                if (object.reportInterval != null)
                    message.reportInterval = object.reportInterval | 0;
                if (object.runEveryMs != null)
                    if ($util.Long)
                        (message.runEveryMs = $util.Long.fromValue(object.runEveryMs)).unsigned = false;
                    else if (typeof object.runEveryMs === "string")
                        message.runEveryMs = parseInt(object.runEveryMs, 10);
                    else if (typeof object.runEveryMs === "number")
                        message.runEveryMs = object.runEveryMs;
                    else if (typeof object.runEveryMs === "object")
                        message.runEveryMs = new $util.LongBits(object.runEveryMs.low >>> 0, object.runEveryMs.high >>> 0).toNumber();
                if (object.concurrentSubsteps != null)
                    message.concurrentSubsteps = Boolean(object.concurrentSubsteps);
                if (object.shouldStopBlob != null)
                    message.shouldStopBlob = String(object.shouldStopBlob);
                if (object.onlyOnce != null)
                    message.onlyOnce = Boolean(object.onlyOnce);
                if (object.createWorkspace != null)
                    message.createWorkspace = Boolean(object.createWorkspace);
                if (object.numConcurrentInstances != null)
                    message.numConcurrentInstances = object.numConcurrentInstances | 0;
                return message;
            };
    
            ExecutionStep.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.substep = [];
                    object.network = [];
                }
                if (options.defaults) {
                    object.name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.numIter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.numIter = options.longs === String ? "0" : 0;
                    object.criteriaNetwork = "";
                    object.concurrentSubsteps = false;
                    object.reportNet = "";
                    object.reportInterval = 0;
                    object.shouldStopBlob = "";
                    object.onlyOnce = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.runEveryMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.runEveryMs = options.longs === String ? "0" : 0;
                    object.createWorkspace = false;
                    object.numConcurrentInstances = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.substep && message.substep.length) {
                    object.substep = [];
                    for (var j = 0; j < message.substep.length; ++j)
                        object.substep[j] = $root.caffe2.ExecutionStep.toObject(message.substep[j], options);
                }
                if (message.network && message.network.length) {
                    object.network = [];
                    for (var j = 0; j < message.network.length; ++j)
                        object.network[j] = message.network[j];
                }
                if (message.numIter != null && message.hasOwnProperty("numIter"))
                    if (typeof message.numIter === "number")
                        object.numIter = options.longs === String ? String(message.numIter) : message.numIter;
                    else
                        object.numIter = options.longs === String ? $util.Long.prototype.toString.call(message.numIter) : options.longs === Number ? new $util.LongBits(message.numIter.low >>> 0, message.numIter.high >>> 0).toNumber() : message.numIter;
                if (message.criteriaNetwork != null && message.hasOwnProperty("criteriaNetwork"))
                    object.criteriaNetwork = message.criteriaNetwork;
                if (message.concurrentSubsteps != null && message.hasOwnProperty("concurrentSubsteps"))
                    object.concurrentSubsteps = message.concurrentSubsteps;
                if (message.reportNet != null && message.hasOwnProperty("reportNet"))
                    object.reportNet = message.reportNet;
                if (message.reportInterval != null && message.hasOwnProperty("reportInterval"))
                    object.reportInterval = message.reportInterval;
                if (message.shouldStopBlob != null && message.hasOwnProperty("shouldStopBlob"))
                    object.shouldStopBlob = message.shouldStopBlob;
                if (message.onlyOnce != null && message.hasOwnProperty("onlyOnce"))
                    object.onlyOnce = message.onlyOnce;
                if (message.runEveryMs != null && message.hasOwnProperty("runEveryMs"))
                    if (typeof message.runEveryMs === "number")
                        object.runEveryMs = options.longs === String ? String(message.runEveryMs) : message.runEveryMs;
                    else
                        object.runEveryMs = options.longs === String ? $util.Long.prototype.toString.call(message.runEveryMs) : options.longs === Number ? new $util.LongBits(message.runEveryMs.low >>> 0, message.runEveryMs.high >>> 0).toNumber() : message.runEveryMs;
                if (message.createWorkspace != null && message.hasOwnProperty("createWorkspace"))
                    object.createWorkspace = message.createWorkspace;
                if (message.numConcurrentInstances != null && message.hasOwnProperty("numConcurrentInstances"))
                    object.numConcurrentInstances = message.numConcurrentInstances;
                return object;
            };
    
            ExecutionStep.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ExecutionStep;
        })();
    
        caffe2.PlanDef = (function() {
    
            function PlanDef(properties) {
                this.network = [];
                this.executionStep = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            PlanDef.prototype.name = "";
            PlanDef.prototype.network = $util.emptyArray;
            PlanDef.prototype.executionStep = $util.emptyArray;
    
            PlanDef.create = function create(properties) {
                return new PlanDef(properties);
            };
    
            PlanDef.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.PlanDef();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.network && message.network.length))
                            message.network = [];
                        message.network.push($root.caffe2.NetDef.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.executionStep && message.executionStep.length))
                            message.executionStep = [];
                        message.executionStep.push($root.caffe2.ExecutionStep.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            PlanDef.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.network != null && message.hasOwnProperty("network")) {
                    if (!Array.isArray(message.network))
                        return "network: array expected";
                    for (var i = 0; i < message.network.length; ++i) {
                        var error = $root.caffe2.NetDef.verify(message.network[i]);
                        if (error)
                            return "network." + error;
                    }
                }
                if (message.executionStep != null && message.hasOwnProperty("executionStep")) {
                    if (!Array.isArray(message.executionStep))
                        return "executionStep: array expected";
                    for (var i = 0; i < message.executionStep.length; ++i) {
                        var error = $root.caffe2.ExecutionStep.verify(message.executionStep[i]);
                        if (error)
                            return "executionStep." + error;
                    }
                }
                return null;
            };
    
            PlanDef.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.PlanDef)
                    return object;
                var message = new $root.caffe2.PlanDef();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.network) {
                    if (!Array.isArray(object.network))
                        throw TypeError(".caffe2.PlanDef.network: array expected");
                    message.network = [];
                    for (var i = 0; i < object.network.length; ++i) {
                        if (typeof object.network[i] !== "object")
                            throw TypeError(".caffe2.PlanDef.network: object expected");
                        message.network[i] = $root.caffe2.NetDef.fromObject(object.network[i]);
                    }
                }
                if (object.executionStep) {
                    if (!Array.isArray(object.executionStep))
                        throw TypeError(".caffe2.PlanDef.executionStep: array expected");
                    message.executionStep = [];
                    for (var i = 0; i < object.executionStep.length; ++i) {
                        if (typeof object.executionStep[i] !== "object")
                            throw TypeError(".caffe2.PlanDef.executionStep: object expected");
                        message.executionStep[i] = $root.caffe2.ExecutionStep.fromObject(object.executionStep[i]);
                    }
                }
                return message;
            };
    
            PlanDef.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.network = [];
                    object.executionStep = [];
                }
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.network && message.network.length) {
                    object.network = [];
                    for (var j = 0; j < message.network.length; ++j)
                        object.network[j] = $root.caffe2.NetDef.toObject(message.network[j], options);
                }
                if (message.executionStep && message.executionStep.length) {
                    object.executionStep = [];
                    for (var j = 0; j < message.executionStep.length; ++j)
                        object.executionStep[j] = $root.caffe2.ExecutionStep.toObject(message.executionStep[j], options);
                }
                return object;
            };
    
            PlanDef.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PlanDef;
        })();
    
        caffe2.BlobProto = (function() {
    
            function BlobProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            BlobProto.prototype.name = "";
            BlobProto.prototype.type = "";
            BlobProto.prototype.tensor = null;
            BlobProto.prototype.content = $util.newBuffer([]);
            BlobProto.prototype.qtensor = null;
            BlobProto.prototype.contentNumChunks = 0;
            BlobProto.prototype.contentChunkId = 0;
    
            BlobProto.create = function create(properties) {
                return new BlobProto(properties);
            };
    
            BlobProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.BlobProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.type = reader.string();
                        break;
                    case 3:
                        message.tensor = $root.caffe2.TensorProto.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.content = reader.bytes();
                        break;
                    case 5:
                        message.qtensor = $root.caffe2.QTensorProto.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.contentNumChunks = reader.int32();
                        break;
                    case 7:
                        message.contentChunkId = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            BlobProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    if (!$util.isString(message.type))
                        return "type: string expected";
                if (message.tensor != null && message.hasOwnProperty("tensor")) {
                    var error = $root.caffe2.TensorProto.verify(message.tensor);
                    if (error)
                        return "tensor." + error;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                        return "content: buffer expected";
                if (message.qtensor != null && message.hasOwnProperty("qtensor")) {
                    var error = $root.caffe2.QTensorProto.verify(message.qtensor);
                    if (error)
                        return "qtensor." + error;
                }
                if (message.contentNumChunks != null && message.hasOwnProperty("contentNumChunks"))
                    if (!$util.isInteger(message.contentNumChunks))
                        return "contentNumChunks: integer expected";
                if (message.contentChunkId != null && message.hasOwnProperty("contentChunkId"))
                    if (!$util.isInteger(message.contentChunkId))
                        return "contentChunkId: integer expected";
                return null;
            };
    
            BlobProto.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.BlobProto)
                    return object;
                var message = new $root.caffe2.BlobProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.type != null)
                    message.type = String(object.type);
                if (object.tensor != null) {
                    if (typeof object.tensor !== "object")
                        throw TypeError(".caffe2.BlobProto.tensor: object expected");
                    message.tensor = $root.caffe2.TensorProto.fromObject(object.tensor);
                }
                if (object.content != null)
                    if (typeof object.content === "string")
                        $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                    else if (object.content.length)
                        message.content = object.content;
                if (object.qtensor != null) {
                    if (typeof object.qtensor !== "object")
                        throw TypeError(".caffe2.BlobProto.qtensor: object expected");
                    message.qtensor = $root.caffe2.QTensorProto.fromObject(object.qtensor);
                }
                if (object.contentNumChunks != null)
                    message.contentNumChunks = object.contentNumChunks | 0;
                if (object.contentChunkId != null)
                    message.contentChunkId = object.contentChunkId | 0;
                return message;
            };
    
            BlobProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.type = "";
                    object.tensor = null;
                    if (options.bytes === String)
                        object.content = "";
                    else {
                        object.content = [];
                        if (options.bytes !== Array)
                            object.content = $util.newBuffer(object.content);
                    }
                    object.qtensor = null;
                    object.contentNumChunks = 0;
                    object.contentChunkId = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.tensor != null && message.hasOwnProperty("tensor"))
                    object.tensor = $root.caffe2.TensorProto.toObject(message.tensor, options);
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
                if (message.qtensor != null && message.hasOwnProperty("qtensor"))
                    object.qtensor = $root.caffe2.QTensorProto.toObject(message.qtensor, options);
                if (message.contentNumChunks != null && message.hasOwnProperty("contentNumChunks"))
                    object.contentNumChunks = message.contentNumChunks;
                if (message.contentChunkId != null && message.hasOwnProperty("contentChunkId"))
                    object.contentChunkId = message.contentChunkId;
                return object;
            };
    
            BlobProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BlobProto;
        })();
    
        caffe2.DBReaderProto = (function() {
    
            function DBReaderProto(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            DBReaderProto.prototype.name = "";
            DBReaderProto.prototype.source = "";
            DBReaderProto.prototype.dbType = "";
            DBReaderProto.prototype.key = "";
    
            DBReaderProto.create = function create(properties) {
                return new DBReaderProto(properties);
            };
    
            DBReaderProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.caffe2.DBReaderProto();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.source = reader.string();
                        break;
                    case 3:
                        message.dbType = reader.string();
                        break;
                    case 4:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            DBReaderProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.source != null && message.hasOwnProperty("source"))
                    if (!$util.isString(message.source))
                        return "source: string expected";
                if (message.dbType != null && message.hasOwnProperty("dbType"))
                    if (!$util.isString(message.dbType))
                        return "dbType: string expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };
    
            DBReaderProto.fromObject = function fromObject(object) {
                if (object instanceof $root.caffe2.DBReaderProto)
                    return object;
                var message = new $root.caffe2.DBReaderProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.source != null)
                    message.source = String(object.source);
                if (object.dbType != null)
                    message.dbType = String(object.dbType);
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };
    
            DBReaderProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.source = "";
                    object.dbType = "";
                    object.key = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.source != null && message.hasOwnProperty("source"))
                    object.source = message.source;
                if (message.dbType != null && message.hasOwnProperty("dbType"))
                    object.dbType = message.dbType;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };
    
            DBReaderProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DBReaderProto;
        })();
    
        return caffe2;
    })();

    return $root;
})(protobuf);
