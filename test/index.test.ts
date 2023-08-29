/*global expect*/
import FirestoreParser from '../src'

const testData = {
  "name": "some/large/long/value",
  "fields": {
    "double": {
      "doubleValue": "456"
    },
    "number": {
      "integerValue": "123"
    },
    "array": {
      "arrayValue": {
        "values": [{
            "stringValue": "cat"
          },
          {
            "stringValue": "dog"
          }
        ]
      }
    },
    "array2": {
      "arrayValue": {}
    },
    "timestamp": {
      "timestampValue": "2018-03-11T08:00:00Z"
    },
    "obj": {
      "mapValue": {
        "fields": {
          "string": {
            "stringValue": "def"
          }
        }
      }
    },
    "bool": {
      "booleanValue": true
    },
    "bytes": {
      "bytesValue": "bWFkZSB0aGUgS2Vzc2VsIFJ1biBpbiBsZXNzIHRoYW4gdHdlbHZlIHBhcnNlY3M="
    },
    "string": {
      "stringValue": "abc"
    },
    "geo": {
      "geoPointValue": {
        "latitude": 10,
        "longitude": 30
      }
    },
    "ref": {
      "referenceValue": "some/large/long/value"
    },
    "isNull": {
      "nullValue": null
    }
  },
  "createTime": "2018-03-11T14:10:11.083793Z",
  "updateTime": "2018-03-11T14:10:11.083793Z"
};

test('Simple JS object match', () => {
  expect(FirestoreParser({ data: "" })).toEqual({ data: "" });
});

test('Complex JS object match', () => {
  expect(FirestoreParser(testData)).toEqual({
    "createTime": "2018-03-11T14:10:11.083793Z",
    "fields": {
      "array": [
        "cat",
        "dog"
      ],
      "array2": [],
      "bool": true,
      "geo": {
        "latitude": 10,
        "longitude": 30
      },
      "isNull": null,
      "double": 456,
      "number": 123,
      "obj": {
        "string": "def"
      },
      "ref": "some/large/long/value",
      "bytes": "bWFkZSB0aGUgS2Vzc2VsIFJ1biBpbiBsZXNzIHRoYW4gdHdlbHZlIHBhcnNlY3M=",
      "string": "abc",
      "timestamp": "2018-03-11T08:00:00Z"
    },
    "name": "some/large/long/value",
    "updateTime": "2018-03-11T14:10:11.083793Z"
  });
});

test('Bytes match', () => {
  expect(FirestoreParser({
    encoded: {
      bytesValue: "bHVrZWlhbXlvdXJmYXRoZXI="
    }
  })).toEqual({
    encoded: "bHVrZWlhbXlvdXJmYXRoZXI="
  });
});

test('Strings match', () => {
  expect(FirestoreParser({
    createTime: "2018-03-11T14:10:11.083793Z"
  })).toEqual({
    createTime: "2018-03-11T14:10:11.083793Z"
  });
});

test('Null match', () => {
  expect(FirestoreParser({
    "isNull": {
      "nullValue": null
    }
  })).toEqual({ "isNull": null });
});

test('Reference match', () => {
  expect(FirestoreParser({
    "ref": {
      "referenceValue": "some/longe/string/that/has/values"
    }
  })).toEqual({
    "ref": "some/longe/string/that/has/values"
  });
});

test('Geo match', () => {
  expect(FirestoreParser({
    "geo": {
      "geoPointValue": {
        "latitude": 10,
        "longitude": 30
      }
    }
  })).toEqual({
    "geo": {
      "latitude": 10,
      "longitude": 30
    }
  });
});

test('Geo match zeros', () => {
  expect(FirestoreParser({
    "geo": {
      "geoPointValue": {}
    }
  })).toEqual({
    "geo": {
      "latitude": 0,
      "longitude": 0
    }
  });
});

test('boolean match', () => {
  expect(FirestoreParser({
    "bool": {
      "booleanValue": true
    }
  })).toEqual({ "bool": true });
});

test('double match', () => {
  expect(FirestoreParser({
    "double": {
      "doubleValue": "456"
    }
  })).toEqual({ "double": 456 });
});

test('integer match', () => {
  expect(FirestoreParser({
    "number": {
      "integerValue": "123"
    }
  })).toEqual({ "number": 123 });
});

test('Object match', () => {
  expect(FirestoreParser({
    "obj": {
      "mapValue": {
        "fields": {
          "string": {
            "stringValue": "def"
          }
        }
      }
    }
  })).toEqual({ "obj": { "string": "def" } });
});

test('Object match with no values', () => {
  expect(FirestoreParser({
    "obj": {
      "mapValue": {}
    }
  })).toEqual({ "obj": {} });
});

test('Object match with undefined value', () => {
  expect(FirestoreParser({
    "obj": {
      "mapValue": undefined
    }
  })).toEqual({ "obj": {} });
});

test('Array match', () => {
  expect(FirestoreParser({
    "array": {
      "arrayValue": {
        "values": [{
            "stringValue": "cat"
          },
          {
            "stringValue": "dog"
          }
        ]
      }
    }
  })).toEqual({ "array": ["cat", "dog"] });
});

test('Array match with no values', () => {
  expect(FirestoreParser({
    "array": {
      "arrayValue": {}
    }
  })).toEqual({ "array": [] });
});

test('Array match with undefined value', () => {
  expect(FirestoreParser({
    "array": {
      "arrayValue": undefined
    }
  })).toEqual({ "array": [] });
});
