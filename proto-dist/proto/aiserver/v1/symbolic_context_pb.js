/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
/* import './utils_pb.js'; */
define(
	de[643],
	he([1, 0, 86, 83]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/, i /*utils_pb*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.CodeSymbolWithAction_CodeSymbolAction =
				e.$7t =
				e.$6t =
				e.$5t =
				e.$4t =
				e.$3t =
				e.$2t =
				e.$1t =
				e.$Zt =
				e.$Yt =
				e.$Xt =
				e.$Wt =
				e.$Vt =
				e.$Ut =
				e.$Tt =
				e.$St =
				e.$Rt =
				e.$Qt =
				e.$Pt =
				e.$Ot =
				e.$Nt =
				e.$Mt =
				e.$Lt =
				e.$Kt =
				e.$Jt =
				e.$It =
				e.$Ht =
				e.$Gt =
				e.$Ft =
				e.$Et =
				e.$Dt =
				e.$Ct =
				e.$Bt =
				e.$At =
				e.$zt =
				e.$yt =
				e.$xt =
				e.$wt =
				e.$vt =
				e.$ut =
				e.$tt =
				e.$st =
				e.$rt =
				e.$qt =
					void 0);
		class w extends t.Message {
			constructor(X) {
				super(),
					(this.files = []),
					(this.targetDir = ""),
					(this.repo = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateExperimentalIndexRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "files", kind: "scalar", T: 9, repeated: !0 },
					{ no: 2, name: "target_dir", kind: "scalar", T: 9 },
					{ no: 3, name: "repo", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new w().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new w().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new w().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(w, X, Y);
			}
		}
		e.$qt = w;
		class E extends t.Message {
			constructor(X) {
				super(), (this.indexId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CreateExperimentalIndexResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new E().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new E().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new E().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(E, X, Y);
			}
		}
		e.$rt = E;
		class C extends t.Message {
			constructor(X) {
				super(), (this.indexId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListExperimentalIndexFilesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new C().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new C().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new C().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(C, X, Y);
			}
		}
		e.$st = C;
		class d extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.files = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListExperimentalIndexFilesResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "files", kind: "message", T: R, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new d().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new d().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new d().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(d, X, Y);
			}
		}
		e.$tt = d;
		class m extends t.Message {
			constructor(X) {
				super(), (this.indexId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListenExperimentalIndexRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new m().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new m().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new m().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(m, X, Y);
			}
		}
		e.$ut = m;
		class r extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.item = { case: void 0 }),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListenExperimentalIndexResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "ready", kind: "message", T: u, oneof: "item" },
					{ no: 3, name: "register", kind: "message", T: a, oneof: "item" },
					{ no: 4, name: "choose", kind: "message", T: h, oneof: "item" },
					{ no: 5, name: "summarize", kind: "message", T: c, oneof: "item" },
					{ no: 6, name: "error", kind: "message", T: n, oneof: "item" },
				]);
			}
			static fromBinary(X, Y) {
				return new r().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new r().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new r().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(r, X, Y);
			}
		}
		e.$vt = r;
		class u extends t.Message {
			constructor(X) {
				super(), (this.indexId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ReadyItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "request", kind: "message", T: m },
				]);
			}
			static fromBinary(X, Y) {
				return new u().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new u().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new u().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(u, X, Y);
			}
		}
		e.$wt = u;
		class a extends t.Message {
			constructor(X) {
				super(), (this.reqUuid = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.ListenExperimentalIndexResponse.RegisterItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "response", kind: "message", T: p },
					{ no: 2, name: "request", kind: "message", T: g },
					{ no: 3, name: "req_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new a().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new a().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new a().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(a, X, Y);
			}
		}
		e.$xt = a;
		class h extends t.Message {
			constructor(X) {
				super(), (this.reqUuid = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.ListenExperimentalIndexResponse.ChooseItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "response", kind: "message", T: v },
					{ no: 2, name: "request", kind: "message", T: l },
					{ no: 3, name: "req_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new h().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new h().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new h().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(h, X, Y);
			}
		}
		e.$yt = h;
		class c extends t.Message {
			constructor(X) {
				super(), (this.reqUuid = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "response", kind: "message", T: L },
					{ no: 2, name: "request", kind: "message", T: k },
					{ no: 3, name: "req_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new c().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new c().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new c().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(c, X, Y);
			}
		}
		e.$zt = c;
		class n extends t.Message {
			constructor(X) {
				super(),
					(this.message = ""),
					(this.statusCode = 0),
					(this.request = { case: void 0 }),
					(this.reqUuid = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ListenExperimentalIndexResponse.ErrorItem";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "message", kind: "scalar", T: 9 },
					{ no: 2, name: "status_code", kind: "scalar", T: 5 },
					{
						no: 3,
						name: "register",
						kind: "message",
						T: g,
						oneof: "request",
					},
					{ no: 4, name: "choose", kind: "message", T: l, oneof: "request" },
					{
						no: 5,
						name: "summarize",
						kind: "message",
						T: k,
						oneof: "request",
					},
					{ no: 6, name: "req_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new n().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new n().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new n().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(n, X, Y);
			}
		}
		e.$At = n;
		class g extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.workspaceRelativePath = ""),
					(this.content = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RegisterFileToIndexRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "workspace_relative_path", kind: "scalar", T: 9 },
					{ no: 3, name: "root_context_node", kind: "message", T: B },
					{ no: 4, name: "content", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new g().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new g().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new g().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(g, X, Y);
			}
		}
		e.$Bt = g;
		class p extends t.Message {
			constructor(X) {
				super(),
					(this.fileId = ""),
					(this.rootContextNodeId = ""),
					(this.dependencyResolutionAttempts = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RegisterFileToIndexResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_id", kind: "scalar", T: 9 },
					{ no: 2, name: "root_context_node_id", kind: "scalar", T: 9 },
					{
						no: 3,
						name: "dependency_resolution_attempts",
						kind: "message",
						T: U,
						repeated: !0,
					},
					{ no: 4, name: "file_data", kind: "message", T: R },
				]);
			}
			static fromBinary(X, Y) {
				return new p().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new p().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new p().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(p, X, Y);
			}
		}
		e.$Ct = p;
		class o extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.fileId = ""),
					(this.dependencyResolutionResults = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetupIndexDependenciesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 3, name: "file_id", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "dependency_resolution_results",
						kind: "message",
						T: z,
						repeated: !0,
					},
				]);
			}
			static fromBinary(X, Y) {
				return new o().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new o().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new o().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(o, X, Y);
			}
		}
		e.$Dt = o;
		class f extends t.Message {
			constructor(X) {
				super(), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SetupIndexDependenciesResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(X, Y) {
				return new f().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new f().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new f().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(f, X, Y);
			}
		}
		e.$Et = f;
		class b extends t.Message {
			constructor(X) {
				super(), (this.indexId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ComputeIndexTopoSortRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new b().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new b().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new b().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(b, X, Y);
			}
		}
		e.$Ft = b;
		class s extends t.Message {
			constructor(X) {
				super(), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ComputeIndexTopoSortResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => []);
			}
			static fromBinary(X, Y) {
				return new s().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new s().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new s().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(s, X, Y);
			}
		}
		e.$Gt = s;
		class l extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.request = { case: void 0 }),
					(this.recompute = !1),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "file", kind: "message", T: y, oneof: "request" },
					{ no: 3, name: "node", kind: "message", T: $, oneof: "request" },
					{ no: 4, name: "recompute", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(X, Y) {
				return new l().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new l().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new l().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(l, X, Y);
			}
		}
		e.$Ht = l;
		class y extends t.Message {
			constructor(X) {
				super(), (this.fileId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesRequest.FileRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new y().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new y().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new y().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(y, X, Y);
			}
		}
		e.$It = y;
		class $ extends t.Message {
			constructor(X) {
				super(), (this.nodeId = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesRequest.NodeRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "node_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new $().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new $().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new $().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals($, X, Y);
			}
		}
		e.$Jt = $;
		class v extends t.Message {
			constructor(X) {
				super(),
					(this.response = { case: void 0 }),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file", kind: "message", T: I, oneof: "response" },
					{ no: 2, name: "node", kind: "message", T: S, oneof: "response" },
				]);
			}
			static fromBinary(X, Y) {
				return new v().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new v().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new v().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(v, X, Y);
			}
		}
		e.$Kt = v;
		class S extends t.Message {
			constructor(X) {
				super(),
					(this.nodeId = ""),
					(this.actions = []),
					(this.skipped = !1),
					(this.dependencies = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesResponse.NodeResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "node_id", kind: "scalar", T: 9 },
					{ no: 2, name: "actions", kind: "message", T: K, repeated: !0 },
					{ no: 3, name: "skipped", kind: "scalar", T: 8 },
					{ no: 4, name: "dependencies", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new S().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new S().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new S().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(S, X, Y);
			}
		}
		e.$Lt = S;
		class I extends t.Message {
			constructor(X) {
				super(),
					(this.fileId = ""),
					(this.nodeResponses = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ChooseCodeReferencesResponse.FileResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_id", kind: "scalar", T: 9 },
					{
						no: 2,
						name: "node_responses",
						kind: "message",
						T: S,
						repeated: !0,
					},
				]);
			}
			static fromBinary(X, Y) {
				return new I().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new I().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new I().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(I, X, Y);
			}
		}
		e.$Mt = I;
		class T extends t.Message {
			constructor(X) {
				super(),
					(this.nodeId = ""),
					(this.references = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RegisterCodeReferencesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "node_id", kind: "scalar", T: 9 },
					{ no: 2, name: "references", kind: "message", T: H, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new T().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new T().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new T().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(T, X, Y);
			}
		}
		e.$Nt = T;
		class P extends t.Message {
			constructor(X) {
				super(), (this.dependencies = []), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RegisterCodeReferencesResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "dependencies", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new P().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new P().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new P().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(P, X, Y);
			}
		}
		e.$Ot = P;
		class k extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.nodeId = ""),
					(this.recompute = !1),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SummarizeWithReferencesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "node_id", kind: "scalar", T: 9 },
					{ no: 3, name: "recompute", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(X, Y) {
				return new k().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new k().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new k().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(k, X, Y);
			}
		}
		e.$Pt = k;
		class L extends t.Message {
			constructor(X) {
				super(),
					(this.response = { case: void 0 }),
					(this.nodeId = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SummarizeWithReferencesResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "success",
						kind: "message",
						T: D,
						oneof: "response",
					},
					{
						no: 2,
						name: "dependency",
						kind: "message",
						T: M,
						oneof: "response",
					},
					{ no: 3, name: "node_id", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new L().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new L().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new L().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(L, X, Y);
			}
		}
		e.$Qt = L;
		class D extends t.Message {
			constructor(X) {
				super(), (this.summary = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SummarizeWithReferencesResponse.Success";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "summary", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new D().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new D().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new D().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(D, X, Y);
			}
		}
		e.$Rt = D;
		class M extends t.Message {
			constructor(X) {
				super(), (this.nodes = []), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName =
					"aiserver.v1.SummarizeWithReferencesResponse.Dependency";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 2, name: "nodes", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new M().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new M().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new M().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(M, X, Y);
			}
		}
		e.$St = M;
		class N extends t.Message {
			constructor(X) {
				super(), (this.reqUuid = ""), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RequestReceivedResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "req_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new N().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new N().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new N().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(N, X, Y);
			}
		}
		e.$Tt = N;
		class A extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.id = ""),
					(this.summary = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ReflectionData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "id", kind: "scalar", T: 9 },
					{ no: 3, name: "summary", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new A().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new A().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new A().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(A, X, Y);
			}
		}
		e.$Ut = A;
		class R extends t.Message {
			constructor(X) {
				super(),
					(this.indexId = ""),
					(this.workspaceRelativePath = ""),
					(this.stage = ""),
					(this.order = 0),
					(this.nodes = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.IndexFileData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "index_id", kind: "scalar", T: 9 },
					{ no: 2, name: "workspace_relative_path", kind: "scalar", T: 9 },
					{ no: 3, name: "stage", kind: "scalar", T: 9 },
					{ no: 4, name: "order", kind: "scalar", T: 5 },
					{ no: 5, name: "nodes", kind: "message", T: O, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new R().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new R().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new R().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(R, X, Y);
			}
		}
		e.$Vt = R;
		class O extends t.Message {
			constructor(X) {
				super(),
					(this.nodeId = ""),
					(this.stage = ""),
					(this.content = ""),
					(this.summary = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.IndexFileData.NodeData";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "node_id", kind: "scalar", T: 9 },
					{ no: 2, name: "stage", kind: "scalar", T: 9 },
					{ no: 3, name: "content", kind: "scalar", T: 9 },
					{ no: 4, name: "summary", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new O().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new O().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new O().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(O, X, Y);
			}
		}
		e.$Wt = O;
		class B extends t.Message {
			constructor(X) {
				super(),
					(this.workspaceRelativePath = ""),
					(this.startLineNumber = 0),
					(this.endLineNumber = 0),
					(this.children = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SerializedContextNode";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
					{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
					{ no: 4, name: "children", kind: "message", T: B, repeated: !0 },
					{ no: 5, name: "node_snippets", kind: "message", T: V },
				]);
			}
			static fromBinary(X, Y) {
				return new B().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new B().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new B().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(B, X, Y);
			}
		}
		e.$Xt = B;
		class U extends t.Message {
			constructor(X) {
				super(),
					(this.workspaceRelativePath = ""),
					(this.nodeId = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.URIResolutionAttempt";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "node_id", kind: "scalar", T: 9 },
					{ no: 3, name: "symbol", kind: "message", T: K },
				]);
			}
			static fromBinary(X, Y) {
				return new U().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new U().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new U().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(U, X, Y);
			}
		}
		e.$Yt = U;
		class z extends t.Message {
			constructor(X) {
				super(), (this.resolvedPaths = []), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.URIResolutionResult";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "request", kind: "message", T: U },
					{
						no: 2,
						name: "resolved_paths",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
				]);
			}
			static fromBinary(X, Y) {
				return new z().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new z().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new z().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(z, X, Y);
			}
		}
		e.$Zt = z;
		class F extends t.Message {
			constructor(X) {
				super(), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ExtractPathsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "file_code_snippets", kind: "message", T: V },
				]);
			}
			static fromBinary(X, Y) {
				return new F().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new F().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new F().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(F, X, Y);
			}
		}
		e.$1t = F;
		class x extends t.Message {
			constructor(X) {
				super(), (this.paths = []), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ExtractPathsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "paths", kind: "message", T: K, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new x().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new x().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new x().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(x, X, Y);
			}
		}
		e.$2t = x;
		class H extends t.Message {
			constructor(X) {
				super(), (this.references = []), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SymbolActionResults";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "action", kind: "message", T: K },
					{ no: 2, name: "references", kind: "message", T: q, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new H().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new H().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new H().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(H, X, Y);
			}
		}
		e.$3t = H;
		class q extends t.Message {
			constructor(X) {
				super(), t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.SymbolActionResultReference";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "range", kind: "message", T: i.$Fs },
					{ no: 2, name: "reference", kind: "message", T: V },
				]);
			}
			static fromBinary(X, Y) {
				return new q().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new q().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new q().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(q, X, Y);
			}
		}
		e.$4t = q;
		class V extends t.Message {
			constructor(X) {
				super(),
					(this.relativeWorkspacePath = ""),
					(this.totalLines = 0),
					(this.snippets = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.FileCodeSnippets";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
					{ no: 2, name: "total_lines", kind: "scalar", T: 5 },
					{ no: 3, name: "snippets", kind: "message", T: G, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new V().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new V().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new V().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(V, X, Y);
			}
		}
		e.$5t = V;
		class G extends t.Message {
			constructor(X) {
				super(),
					(this.startLineNumber = 0),
					(this.endLineNumber = 0),
					(this.lines = []),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CodeSnippet";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
					{ no: 2, name: "end_line_number", kind: "scalar", T: 5 },
					{ no: 3, name: "lines", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(X, Y) {
				return new G().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new G().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new G().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(G, X, Y);
			}
		}
		e.$6t = G;
		class K extends t.Message {
			constructor(X) {
				super(),
					(this.workspaceRelativePath = ""),
					(this.lineNumber = 0),
					(this.symbolStartColumn = 0),
					(this.symbolEndColumn = 0),
					(this.action = J.UNSPECIFIED),
					(this.symbol = ""),
					t.proto3.util.initPartial(X, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.CodeSymbolWithAction";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "workspace_relative_path", kind: "scalar", T: 9 },
					{ no: 2, name: "line_number", kind: "scalar", T: 5 },
					{ no: 3, name: "symbol_start_column", kind: "scalar", T: 5 },
					{ no: 4, name: "symbol_end_column", kind: "scalar", T: 5 },
					{ no: 5, name: "action", kind: "enum", T: t.proto3.getEnumType(J) },
					{ no: 6, name: "symbol", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(X, Y) {
				return new K().fromBinary(X, Y);
			}
			static fromJson(X, Y) {
				return new K().fromJson(X, Y);
			}
			static fromJsonString(X, Y) {
				return new K().fromJsonString(X, Y);
			}
			static equals(X, Y) {
				return t.proto3.util.equals(K, X, Y);
			}
		}
		e.$7t = K;
		var J;
		(function (W) {
			(W[(W.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				(W[(W.GO_TO_DEFINITION = 1)] = "GO_TO_DEFINITION"),
				(W[(W.GO_TO_IMPLEMENTATION = 2)] = "GO_TO_IMPLEMENTATION"),
				(W[(W.REFERENCES = 3)] = "REFERENCES");
		})(J || (e.CodeSymbolWithAction_CodeSymbolAction = J = {})),
			t.proto3.util.setEnumType(
				J,
				"aiserver.v1.CodeSymbolWithAction.CodeSymbolAction",
				[
					{ no: 0, name: "CODE_SYMBOL_ACTION_UNSPECIFIED" },
					{ no: 1, name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION" },
					{ no: 2, name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION" },
					{ no: 3, name: "CODE_SYMBOL_ACTION_REFERENCES" },
				],
			);
	},
);
