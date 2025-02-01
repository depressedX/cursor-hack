/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
/* import './utils_pb.js'; */
define(
	de[1109],
	he([1, 0, 86, 83]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/, i /*utils_pb*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$a_ = e.$_$ = e.$$$ = e.$0$ = e.$9$ = e.$8$ = e.$7$ = e.$6$ = void 0);
		class w extends t.Message {
			constructor(c) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.hash = ""),
					t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.MinimalFileHash";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "hash", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(c, n) {
				return new w().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new w().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new w().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(w, c, n);
			}
		}
		e.$6$ = w;
		class E extends t.Message {
			constructor(c) {
				super(),
					(this.uuid = ""),
					(this.openTabs = []),
					(this.contextGraphFiles = []),
					t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StartFastSearchRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "uuid", kind: "scalar", T: 9 },
					{ no: 2, name: "cursor_position", kind: "message", T: i.$ys },
					{ no: 3, name: "open_tabs", kind: "message", T: w, repeated: !0 },
					{
						no: 4,
						name: "context_graph_files",
						kind: "message",
						T: w,
						repeated: !0,
					},
				]);
			}
			static fromBinary(c, n) {
				return new E().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new E().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new E().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(E, c, n);
			}
		}
		e.$7$ = E;
		class C extends t.Message {
			constructor(c) {
				super(),
					(this.response = { case: void 0 }),
					t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StartFastSearchResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "ready", kind: "message", T: d, oneof: "response" },
					{
						no: 2,
						name: "missing_files",
						kind: "message",
						T: m,
						oneof: "response",
					},
				]);
			}
			static fromBinary(c, n) {
				return new C().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new C().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new C().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(C, c, n);
			}
		}
		e.$8$ = C;
		class d extends t.Message {
			constructor(c) {
				super(), (this.ready = !1), t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StartFastSearchResponse.Ready";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "ready", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(c, n) {
				return new d().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new d().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new d().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(d, c, n);
			}
		}
		e.$9$ = d;
		class m extends t.Message {
			constructor(c) {
				super(), (this.file = []), t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.StartFastSearchResponse.MissingFiles";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(c, n) {
				return new m().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new m().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new m().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(m, c, n);
			}
		}
		e.$0$ = m;
		class r extends t.Message {
			constructor(c) {
				super(),
					(this.uuid = ""),
					(this.query = ""),
					t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FastSearchRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "uuid", kind: "scalar", T: 9 },
					{ no: 2, name: "query", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(c, n) {
				return new r().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new r().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new r().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(r, c, n);
			}
		}
		e.$$$ = r;
		class u extends t.Message {
			constructor(c) {
				super(), (this.fileChunks = []), t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FastSearchResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_chunks", kind: "message", T: a, repeated: !0 },
				]);
			}
			static fromBinary(c, n) {
				return new u().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new u().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new u().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(u, c, n);
			}
		}
		e.$_$ = u;
		class a extends t.Message {
			constructor(c) {
				super(),
					(this.chunkScore = 0),
					(this.contents = ""),
					t.proto3.util.initPartial(c, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FastSearchResponse.Chunk";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "chunk", kind: "message", T: i.$Gs },
					{ no: 2, name: "chunk_score", kind: "scalar", T: 2 },
					{ no: 3, name: "contents", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(c, n) {
				return new a().fromBinary(c, n);
			}
			static fromJson(c, n) {
				return new a().fromJson(c, n);
			}
			static fromJsonString(c, n) {
				return new a().fromJsonString(c, n);
			}
			static equals(c, n) {
				return t.proto3.util.equals(a, c, n);
			}
		}
		e.$a_ = a;
	},
);
