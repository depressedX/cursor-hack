import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[892], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DocumentationQueryResponse_Status =
					e.$Zz =
					e.$Yz =
					e.$Xz =
					e.$Wz =
						void 0);
			class i extends t.Message {
				constructor(r) {
					super(),
						(this.prefixUrl = ""),
						(this.docName = ""),
						(this.isDifferentPrefixOrigin = !1),
						(this.truePrefixUrl = ""),
						(this.public = !1),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentationMetadata";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "prefix_url", kind: "scalar", T: 9 },
						{ no: 2, name: "doc_name", kind: "scalar", T: 9 },
						{ no: 3, name: "is_different_prefix_origin", kind: "scalar", T: 8 },
						{ no: 4, name: "true_prefix_url", kind: "scalar", T: 9 },
						{ no: 5, name: "public", kind: "scalar", T: 8 },
						{ no: 6, name: "team_id", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(r, u) {
					return new i().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new i().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new i().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(i, r, u);
				}
			}
			e.$Wz = i;
			class w extends t.Message {
				constructor(r) {
					super(),
						(this.docName = ""),
						(this.pageUrl = ""),
						(this.documentationChunk = ""),
						(this.score = 0),
						(this.pageTitle = ""),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentationChunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "doc_name", kind: "scalar", T: 9 },
						{ no: 2, name: "page_url", kind: "scalar", T: 9 },
						{ no: 3, name: "documentation_chunk", kind: "scalar", T: 9 },
						{ no: 4, name: "score", kind: "scalar", T: 2 },
						{ no: 5, name: "page_title", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(r, u) {
					return new w().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new w().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new w().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(w, r, u);
				}
			}
			e.$Xz = w;
			class E extends t.Message {
				constructor(r) {
					super(),
						(this.docIdentifier = ""),
						(this.query = ""),
						(this.topK = 0),
						(this.rerankResults = !1),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentationQueryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
						{ no: 2, name: "query", kind: "scalar", T: 9 },
						{ no: 3, name: "top_k", kind: "scalar", T: 13 },
						{ no: 4, name: "rerank_results", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(r, u) {
					return new E().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new E().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new E().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(E, r, u);
				}
			}
			e.$Yz = E;
			class C extends t.Message {
				constructor(r) {
					super(),
						(this.docIdentifier = ""),
						(this.docName = ""),
						(this.docChunks = []),
						(this.status = d.UNSPECIFIED),
						t.proto3.util.initPartial(r, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.DocumentationQueryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
						{ no: 2, name: "doc_name", kind: "scalar", T: 9 },
						{ no: 3, name: "doc_chunks", kind: "message", T: w, repeated: !0 },
						{ no: 4, name: "status", kind: "enum", T: t.proto3.getEnumType(d) },
					]);
				}
				static fromBinary(r, u) {
					return new C().fromBinary(r, u);
				}
				static fromJson(r, u) {
					return new C().fromJson(r, u);
				}
				static fromJsonString(r, u) {
					return new C().fromJsonString(r, u);
				}
				static equals(r, u) {
					return t.proto3.util.equals(C, r, u);
				}
			}
			e.$Zz = C;
			var d;
			(function (m) {
				(m[(m.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(m[(m.NOT_FOUND = 1)] = "NOT_FOUND"),
					(m[(m.SUCCESS = 2)] = "SUCCESS"),
					(m[(m.FAILURE = 3)] = "FAILURE");
			})(d || (e.DocumentationQueryResponse_Status = d = {})),
				t.proto3.util.setEnumType(
					d,
					"aiserver.v1.DocumentationQueryResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_NOT_FOUND" },
						{ no: 2, name: "STATUS_SUCCESS" },
						{ no: 3, name: "STATUS_FAILURE" },
					],
				);
		}),
		