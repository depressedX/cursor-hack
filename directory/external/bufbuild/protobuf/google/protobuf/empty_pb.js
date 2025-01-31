import '../../../../../require.js';
import '../../../../../exports.js';
import '../../message.js';
import '../../proto3.js';
define(de[1402], he([1, 0, 339, 406]), function (ce /*require*/,
 e /*exports*/,
 t /*message*/,
 i /*proto3*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.Empty = void 0);
			class w extends t.Message {
				constructor(C) {
					super(), i.proto3.util.initPartial(C, this);
				}
				static {
					this.runtime = i.proto3;
				}
				static {
					this.typeName = "google.protobuf.Empty";
				}
				static {
					this.fields = i.proto3.util.newFieldList(() => []);
				}
				static fromBinary(C, d) {
					return new w().fromBinary(C, d);
				}
				static fromJson(C, d) {
					return new w().fromJson(C, d);
				}
				static fromJsonString(C, d) {
					return new w().fromJsonString(C, d);
				}
				static equals(C, d) {
					return i.proto3.util.equals(w, C, d);
				}
			}
			e.Empty = w;
		})
