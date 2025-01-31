import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1472], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$lD = e.$kD = e.$jD = e.$iD = e.$hD = e.$gD = e.$fD = void 0);
			class i extends t.Message {
				constructor(a) {
					super(), (this.files = []), t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContextAST";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "files", kind: "message", T: w, repeated: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new i().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new i().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new i().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(i, a, h);
				}
			}
			e.$fD = i;
			class w extends t.Message {
				constructor(a) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.nodes = []),
						t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTree";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "nodes", kind: "message", T: E, repeated: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new w().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new w().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new w().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(w, a, h);
				}
			}
			e.$gD = w;
			class E extends t.Message {
				constructor(a) {
					super(),
						(this.node = { case: void 0 }),
						t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTreeNode";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "container", kind: "message", T: d, oneof: "node" },
						{ no: 2, name: "blob", kind: "message", T: m, oneof: "node" },
						{ no: 3, name: "symbol", kind: "message", T: C, oneof: "node" },
					]);
				}
				static fromBinary(a, h) {
					return new E().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new E().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new E().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(E, a, h);
				}
			}
			e.$hD = E;
			class C extends t.Message {
				constructor(a) {
					super(),
						(this.docString = ""),
						(this.value = ""),
						(this.references = []),
						(this.score = 0),
						t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTreeNode.Symbol";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "doc_string", kind: "scalar", T: 9 },
						{ no: 2, name: "value", kind: "scalar", T: 9 },
						{ no: 6, name: "references", kind: "message", T: r, repeated: !0 },
						{ no: 7, name: "score", kind: "scalar", T: 1 },
					]);
				}
				static fromBinary(a, h) {
					return new C().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new C().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new C().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(C, a, h);
				}
			}
			e.$iD = C;
			class d extends t.Message {
				constructor(a) {
					super(),
						(this.docString = ""),
						(this.header = ""),
						(this.trailer = ""),
						(this.children = []),
						(this.references = []),
						(this.score = 0),
						t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTreeNode.Container";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "doc_string", kind: "scalar", T: 9 },
						{ no: 2, name: "header", kind: "scalar", T: 9 },
						{ no: 3, name: "trailer", kind: "scalar", T: 9 },
						{ no: 5, name: "children", kind: "message", T: E, repeated: !0 },
						{ no: 6, name: "references", kind: "message", T: r, repeated: !0 },
						{ no: 7, name: "score", kind: "scalar", T: 1 },
					]);
				}
				static fromBinary(a, h) {
					return new d().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new d().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new d().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(d, a, h);
				}
			}
			e.$jD = d;
			class m extends t.Message {
				constructor(a) {
					super(), t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTreeNode.Blob";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "value", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(a, h) {
					return new m().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new m().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new m().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(m, a, h);
				}
			}
			e.$kD = m;
			class r extends t.Message {
				constructor(a) {
					super(),
						(this.value = ""),
						(this.relativeWorkspacePath = ""),
						t.proto3.util.initPartial(a, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ContainerTreeNode.Reference";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "value", kind: "scalar", T: 9 },
						{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(a, h) {
					return new r().fromBinary(a, h);
				}
				static fromJson(a, h) {
					return new r().fromJson(a, h);
				}
				static fromJsonString(a, h) {
					return new r().fromJsonString(a, h);
				}
				static equals(a, h) {
					return t.proto3.util.equals(r, a, h);
				}
			}
			e.$lD = r;
		})
