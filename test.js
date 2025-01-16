import {proto3} from '@bufbuild/protobuf'

const fields = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "results_per_page", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "corpus", kind: "enum", T: 1 },
  ]);
console.log(fields.list());
