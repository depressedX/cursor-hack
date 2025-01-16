define(de[272], he([1, 0, 86, 83, 643]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sv =
					e.$rv =
					e.$qv =
					e.$pv =
					e.$ov =
					e.$nv =
					e.$mv =
					e.$lv =
					e.$kv =
					e.$jv =
					e.$iv =
					e.$hv =
					e.$gv =
					e.$fv =
					e.$ev =
					e.$dv =
					e.$cv =
					e.$bv =
					e.UploadRepositoryResponse_Status =
					e.$av =
					e.$_u =
					e.$$u =
					e.$0u =
					e.UpgradeScopeResponse_Status =
					e.$9u =
					e.$8u =
					e.PollLoginResponse_Status =
					e.$7u =
					e.$6u =
					e.$5u =
					e.$4u =
					e.$3u =
					e.$2u =
					e.$1u =
					e.$Zu =
					e.$Yu =
					e.$Xu =
					e.$Wu =
					e.$Vu =
					e.$Uu =
					e.$Tu =
					e.$Su =
					e.SubscribeRepositoryResponse_Status =
					e.$Ru =
					e.$Qu =
					e.RemoveRepositoryResponse_Status =
					e.$Pu =
					e.$Ou =
					e.LogoutResponse_Status =
					e.$Nu =
					e.$Mu =
					e.UnsubscribeRepositoryResponse_Status =
					e.$Lu =
					e.$Ku =
					e.$Ju =
					e.$Iu =
					e.FinishUpdateRepoResponse_Status =
					e.$Hu =
					e.$Gu =
					e.UpdateFileResponse_Status =
					e.$Fu =
					e.$Eu =
					e.StartUpdateRepoResponse_Status =
					e.$Du =
					e.$Cu =
					e.FinishUploadRepoResponse_Status =
					e.$Bu =
					e.$Au =
					e.UploadFileResponse_Status =
					e.$zu =
					e.$yu =
					e.StartUploadRepoResponse_Status =
					e.$xu =
					e.$wu =
					e.$vu =
					e.$uu =
					e.$tu =
					e.$su =
					e.$ru =
					e.$qu =
					e.$pu =
					e.$ou =
					e.$nu =
					e.$mu =
					e.$lu =
					e.$ku =
					e.$ju =
					e.FastUpdateFileResponse_Status =
					e.$iu =
					e.$hu =
					e.FastUpdateFileRequest_UpdateType =
					e.$gu =
					e.$fu =
					e.$eu =
					e.$du =
					e.FastRepoInitHandshakeResponse_Status =
					e.$cu =
					e.$bu =
					e.$au =
					e.$_t =
					e.$$t =
					e.$0t =
					e.$9t =
					e.$8t =
					e.RechunkerChoice =
					e.RerankerAlgorithm =
					e.ChunkingStrategy =
						void 0);
			var E;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.DEFAULT = 1)] = "DEFAULT");
			})(E || (e.ChunkingStrategy = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.ChunkingStrategy", [
					{ no: 0, name: "CHUNKING_STRATEGY_UNSPECIFIED" },
					{ no: 1, name: "CHUNKING_STRATEGY_DEFAULT" },
				]);
			var C;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.LULEA = 1)] = "LULEA"),
					(Ye[(Ye.UMEA = 2)] = "UMEA"),
					(Ye[(Ye.NONE = 3)] = "NONE"),
					(Ye[(Ye.LLAMA = 4)] = "LLAMA"),
					(Ye[(Ye.STARCODER_V1 = 5)] = "STARCODER_V1"),
					(Ye[(Ye.GPT_3_5_LOGPROBS = 6)] = "GPT_3_5_LOGPROBS"),
					(Ye[(Ye.LULEA_HAIKU = 7)] = "LULEA_HAIKU"),
					(Ye[(Ye.COHERE = 8)] = "COHERE"),
					(Ye[(Ye.VOYAGE = 9)] = "VOYAGE"),
					(Ye[(Ye.VOYAGE_EMBEDS = 10)] = "VOYAGE_EMBEDS"),
					(Ye[(Ye.IDENTITY = 11)] = "IDENTITY"),
					(Ye[(Ye.ADA_EMBEDS = 12)] = "ADA_EMBEDS");
			})(C || (e.RerankerAlgorithm = C = {})),
				t.proto3.util.setEnumType(C, "aiserver.v1.RerankerAlgorithm", [
					{ no: 0, name: "RERANKER_ALGORITHM_UNSPECIFIED" },
					{ no: 1, name: "RERANKER_ALGORITHM_LULEA" },
					{ no: 2, name: "RERANKER_ALGORITHM_UMEA" },
					{ no: 3, name: "RERANKER_ALGORITHM_NONE" },
					{ no: 4, name: "RERANKER_ALGORITHM_LLAMA" },
					{ no: 5, name: "RERANKER_ALGORITHM_STARCODER_V1" },
					{ no: 6, name: "RERANKER_ALGORITHM_GPT_3_5_LOGPROBS" },
					{ no: 7, name: "RERANKER_ALGORITHM_LULEA_HAIKU" },
					{ no: 8, name: "RERANKER_ALGORITHM_COHERE" },
					{ no: 9, name: "RERANKER_ALGORITHM_VOYAGE" },
					{ no: 10, name: "RERANKER_ALGORITHM_VOYAGE_EMBEDS" },
					{ no: 11, name: "RERANKER_ALGORITHM_IDENTITY" },
					{ no: 12, name: "RERANKER_ALGORITHM_ADA_EMBEDS" },
				]);
			var d;
			(function (Ye) {
				(Ye[(Ye.RECHUNKER_CHOICE_UNSPECIFIED = 0)] =
					"RECHUNKER_CHOICE_UNSPECIFIED"),
					(Ye[(Ye.RECHUNKER_CHOICE_IDENTITY = 1)] =
						"RECHUNKER_CHOICE_IDENTITY"),
					(Ye[(Ye.RECHUNKER_CHOICE_600_TOKS = 2)] =
						"RECHUNKER_CHOICE_600_TOKS"),
					(Ye[(Ye.RECHUNKER_CHOICE_2400_TOKS = 3)] =
						"RECHUNKER_CHOICE_2400_TOKS"),
					(Ye[(Ye.RECHUNKER_CHOICE_4000_TOKS = 4)] =
						"RECHUNKER_CHOICE_4000_TOKS");
			})(d || (e.RechunkerChoice = d = {})),
				t.proto3.util.setEnumType(d, "aiserver.v1.RechunkerChoice", [
					{ no: 0, name: "RECHUNKER_CHOICE_UNSPECIFIED" },
					{ no: 1, name: "RECHUNKER_CHOICE_IDENTITY" },
					{ no: 2, name: "RECHUNKER_CHOICE_600_TOKS" },
					{ no: 3, name: "RECHUNKER_CHOICE_2400_TOKS" },
					{ no: 4, name: "RECHUNKER_CHOICE_4000_TOKS" },
				]);
			class m extends t.Message {
				constructor(ze) {
					super(),
						(this.readmes = []),
						(this.topLevelRelativeWorkspacePaths = []),
						(this.workspaceRootPath = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetHighLevelFolderDescriptionRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "readmes", kind: "message", T: r, repeated: !0 },
						{
							no: 2,
							name: "top_level_relative_workspace_paths",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{ no: 4, name: "workspace_root_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new m().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new m().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new m().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(m, ze, Xe);
				}
			}
			e.$8t = m;
			class r extends t.Message {
				constructor(ze) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.GetHighLevelFolderDescriptionRequest.Readme";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new r().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new r().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new r().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(r, ze, Xe);
				}
			}
			e.$9t = r;
			class u extends t.Message {
				constructor(ze) {
					super(), (this.description = ""), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetHighLevelFolderDescriptionResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "description", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new u().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new u().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new u().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(u, ze, Xe);
				}
			}
			e.$0t = u;
			class a extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EnsureIndexCreatedRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new a().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new a().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new a().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(a, ze, Xe);
				}
			}
			e.$$t = a;
			class h extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EnsureIndexCreatedResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new h().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new h().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new h().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(h, ze, Xe);
				}
			}
			e.$_t = h;
			class c extends t.Message {
				constructor(ze) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.hashOfNode = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.PartialPathItem";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "hash_of_node", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new c().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new c().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new c().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(c, ze, Xe);
				}
			}
			e.$au = c;
			class n extends t.Message {
				constructor(ze) {
					super(),
						(this.rootHash = ""),
						(this.potentialLegacyRepoName = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FastRepoInitHandshakeRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
						{ no: 2, name: "root_hash", kind: "scalar", T: 9 },
						{ no: 3, name: "potential_legacy_repo_name", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new n().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new n().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new n().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(n, ze, Xe);
				}
			}
			e.$bu = n;
			class g extends t.Message {
				constructor(ze) {
					super(),
						(this.status = p.UNSPECIFIED),
						(this.repoName = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FastRepoInitHandshakeResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(p) },
						{ no: 2, name: "repo_name", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new g().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new g().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new g().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(g, ze, Xe);
				}
			}
			e.$cu = g;
			var p;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.UP_TO_DATE = 1)] = "UP_TO_DATE"),
					(Ye[(Ye.OUT_OF_SYNC = 2)] = "OUT_OF_SYNC"),
					(Ye[(Ye.FAILURE = 3)] = "FAILURE"),
					(Ye[(Ye.EMPTY = 4)] = "EMPTY");
			})(p || (e.FastRepoInitHandshakeResponse_Status = p = {})),
				t.proto3.util.setEnumType(
					p,
					"aiserver.v1.FastRepoInitHandshakeResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_UP_TO_DATE" },
						{ no: 2, name: "STATUS_OUT_OF_SYNC" },
						{ no: 3, name: "STATUS_FAILURE" },
						{ no: 4, name: "STATUS_EMPTY" },
					],
				);
			class o extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SyncMerkleSubtreeRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
						{ no: 2, name: "local_partial_path", kind: "message", T: c },
					]);
				}
				static fromBinary(ze, Xe) {
					return new o().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new o().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new o().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(o, ze, Xe);
				}
			}
			e.$du = o;
			class f extends t.Message {
				constructor(ze) {
					super(),
						(this.result = { case: void 0 }),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SyncMerkleSubtreeResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "match", kind: "scalar", T: 8, oneof: "result" },
						{ no: 2, name: "mismatch", kind: "message", T: b, oneof: "result" },
					]);
				}
				static fromBinary(ze, Xe) {
					return new f().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new f().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new f().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(f, ze, Xe);
				}
			}
			e.$eu = f;
			class b extends t.Message {
				constructor(ze) {
					super(), (this.children = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SyncMerkleSubtreeResponse.Mismatch";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "children", kind: "message", T: c, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new b().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new b().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new b().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(b, ze, Xe);
				}
			}
			e.$fu = b;
			class s extends t.Message {
				constructor(ze) {
					super(),
						(this.partialPath = { case: void 0 }),
						(this.ancestorSpline = []),
						(this.updateType = l.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FastUpdateFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
						{
							no: 2,
							name: "directory",
							kind: "message",
							T: c,
							oneof: "partial_path",
						},
						{
							no: 3,
							name: "local_file",
							kind: "message",
							T: y,
							oneof: "partial_path",
						},
						{
							no: 4,
							name: "ancestor_spline",
							kind: "message",
							T: c,
							repeated: !0,
						},
						{
							no: 5,
							name: "update_type",
							kind: "enum",
							T: t.proto3.getEnumType(l),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new s().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new s().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new s().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(s, ze, Xe);
				}
			}
			e.$gu = s;
			var l;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.ADD = 1)] = "ADD"),
					(Ye[(Ye.DELETE = 2)] = "DELETE"),
					(Ye[(Ye.MODIFY = 3)] = "MODIFY");
			})(l || (e.FastUpdateFileRequest_UpdateType = l = {})),
				t.proto3.util.setEnumType(
					l,
					"aiserver.v1.FastUpdateFileRequest.UpdateType",
					[
						{ no: 0, name: "UPDATE_TYPE_UNSPECIFIED" },
						{ no: 1, name: "UPDATE_TYPE_ADD" },
						{ no: 2, name: "UPDATE_TYPE_DELETE" },
						{ no: 3, name: "UPDATE_TYPE_MODIFY" },
					],
				);
			class y extends t.Message {
				constructor(ze) {
					super(),
						(this.hash = ""),
						(this.unencryptedRelativeWorkspacePath = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FastUpdateFileRequest.LocalFile";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "message", T: i.$Rs },
						{ no: 2, name: "hash", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "unencrypted_relative_workspace_path",
							kind: "scalar",
							T: 9,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new y().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new y().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new y().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(y, ze, Xe);
				}
			}
			e.$hu = y;
			class $ extends t.Message {
				constructor(ze) {
					super(),
						(this.status = v.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FastUpdateFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(v) },
					]);
				}
				static fromBinary(ze, Xe) {
					return new $().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new $().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new $().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals($, ze, Xe);
				}
			}
			e.$iu = $;
			var v;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.EXPECTED_FAILURE = 3)] = "EXPECTED_FAILURE");
			})(v || (e.FastUpdateFileResponse_Status = v = {})),
				t.proto3.util.setEnumType(
					v,
					"aiserver.v1.FastUpdateFileResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
						{ no: 3, name: "STATUS_EXPECTED_FAILURE" },
					],
				);
			class S extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetUploadLimitsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt, opt: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new S().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new S().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new S().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(S, ze, Xe);
				}
			}
			e.$ju = S;
			class I extends t.Message {
				constructor(ze) {
					super(),
						(this.softLimit = 0),
						(this.hardLimit = 0),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetUploadLimitsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "soft_limit", kind: "scalar", T: 5 },
						{ no: 2, name: "hard_limit", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new I().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new I().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new I().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(I, ze, Xe);
				}
			}
			e.$ku = I;
			class T extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetNumFilesToSendRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new T().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new T().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new T().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(T, ze, Xe);
				}
			}
			e.$lu = T;
			class P extends t.Message {
				constructor(ze) {
					super(), (this.numFiles = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetNumFilesToSendResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "num_files", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new P().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new P().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new P().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(P, ze, Xe);
				}
			}
			e.$mu = P;
			class k extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetAvailableChunkingStrategiesRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new k().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new k().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new k().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(k, ze, Xe);
				}
			}
			e.$nu = k;
			class L extends t.Message {
				constructor(ze) {
					super(),
						(this.chunkingStrategies = []),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetAvailableChunkingStrategiesResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "chunking_strategies",
							kind: "enum",
							T: t.proto3.getEnumType(E),
							repeated: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new L().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new L().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new L().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(L, ze, Xe);
				}
			}
			e.$ou = L;
			class D extends t.Message {
				constructor(ze) {
					super(), (this.texts = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetEmbeddingsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "texts", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new D().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new D().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new D().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(D, ze, Xe);
				}
			}
			e.$pu = D;
			class M extends t.Message {
				constructor(ze) {
					super(), (this.embeddings = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetEmbeddingsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "embeddings", kind: "message", T: N, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new M().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new M().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new M().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(M, ze, Xe);
				}
			}
			e.$qu = M;
			class N extends t.Message {
				constructor(ze) {
					super(), (this.embedding = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetEmbeddingsResponse.Embedding";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "embedding", kind: "scalar", T: 2, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new N().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new N().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new N().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(N, ze, Xe);
				}
			}
			e.$ru = N;
			class A extends t.Message {
				constructor(ze) {
					super(), (this.codebaseId = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AdminRemoveRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "codebase_id", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new A().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new A().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new A().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(A, ze, Xe);
				}
			}
			e.$su = A;
			class R extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AdminRemoveRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new R().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new R().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new R().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(R, ze, Xe);
				}
			}
			e.$tu = R;
			class O extends t.Message {
				constructor(ze) {
					super(), (this.codebaseId = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SyncRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "codebase_id", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new O().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new O().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new O().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(O, ze, Xe);
				}
			}
			e.$uu = O;
			class B extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SyncRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new B().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new B().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new B().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(B, ze, Xe);
				}
			}
			e.$vu = B;
			class U extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StartUploadRepoRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new U().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new U().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new U().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(U, ze, Xe);
				}
			}
			e.$wu = U;
			class z extends t.Message {
				constructor(ze) {
					super(),
						(this.status = F.UNSPECIFIED),
						(this.seenFiles = []),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StartUploadRepoResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(F) },
						{ no: 2, name: "seen_files", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new z().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new z().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new z().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(z, ze, Xe);
				}
			}
			e.$xu = z;
			var F;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.ALREADY_EXISTS = 3)] = "ALREADY_EXISTS");
			})(F || (e.StartUploadRepoResponse_Status = F = {})),
				t.proto3.util.setEnumType(
					F,
					"aiserver.v1.StartUploadRepoResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
						{ no: 3, name: "STATUS_ALREADY_EXISTS" },
					],
				);
			class x extends t.Message {
				constructor(ze) {
					super(),
						(this.commitSha = ""),
						(this.queueId = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UploadFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
						{ no: 2, name: "file", kind: "message", T: i.$Rs },
						{ no: 3, name: "commit_sha", kind: "scalar", T: 9 },
						{ no: 4, name: "queue_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new x().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new x().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new x().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(x, ze, Xe);
				}
			}
			e.$yu = x;
			class H extends t.Message {
				constructor(ze) {
					super(),
						(this.status = q.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UploadFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(q) },
					]);
				}
				static fromBinary(ze, Xe) {
					return new H().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new H().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new H().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(H, ze, Xe);
				}
			}
			e.$zu = H;
			var q;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.EXPECTED_FAILURE = 3)] = "EXPECTED_FAILURE"),
					(Ye[(Ye.QUEUE_BACKED_UP = 4)] = "QUEUE_BACKED_UP");
			})(q || (e.UploadFileResponse_Status = q = {})),
				t.proto3.util.setEnumType(q, "aiserver.v1.UploadFileResponse.Status", [
					{ no: 0, name: "STATUS_UNSPECIFIED" },
					{ no: 1, name: "STATUS_SUCCESS" },
					{ no: 2, name: "STATUS_FAILURE" },
					{ no: 3, name: "STATUS_EXPECTED_FAILURE" },
					{ no: 4, name: "STATUS_QUEUE_BACKED_UP" },
				]);
			class V extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FinishUploadRepoRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new V().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new V().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new V().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(V, ze, Xe);
				}
			}
			e.$Au = V;
			class G extends t.Message {
				constructor(ze) {
					super(),
						(this.status = K.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FinishUploadRepoResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(K) },
					]);
				}
				static fromBinary(ze, Xe) {
					return new G().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new G().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new G().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(G, ze, Xe);
				}
			}
			e.$Bu = G;
			var K;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE");
			})(K || (e.FinishUploadRepoResponse_Status = K = {})),
				t.proto3.util.setEnumType(
					K,
					"aiserver.v1.FinishUploadRepoResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
					],
				);
			class J extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StartUpdateRepoRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new J().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new J().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new J().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(J, ze, Xe);
				}
			}
			e.$Cu = J;
			class W extends t.Message {
				constructor(ze) {
					super(),
						(this.status = X.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StartUpdateRepoResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(X) },
					]);
				}
				static fromBinary(ze, Xe) {
					return new W().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new W().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new W().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(W, ze, Xe);
				}
			}
			e.$Du = W;
			var X;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.NOT_FOUND = 3)] = "NOT_FOUND"),
					(Ye[(Ye.ALREADY_SYNCING = 4)] = "ALREADY_SYNCING");
			})(X || (e.StartUpdateRepoResponse_Status = X = {})),
				t.proto3.util.setEnumType(
					X,
					"aiserver.v1.StartUpdateRepoResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
						{ no: 3, name: "STATUS_NOT_FOUND" },
						{ no: 4, name: "STATUS_ALREADY_SYNCING" },
					],
				);
			class Y extends t.Message {
				constructor(ze) {
					super(),
						(this.commitSha = ""),
						(this.queueId = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UpdateFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
						{ no: 2, name: "added_file", kind: "message", T: i.$Rs },
						{ no: 3, name: "deleted_file_path", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "commit_sha", kind: "scalar", T: 9 },
						{ no: 5, name: "queue_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Y().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Y().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Y().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Y, ze, Xe);
				}
			}
			e.$Eu = Y;
			class ie extends t.Message {
				constructor(ze) {
					super(),
						(this.status = ne.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UpdateFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(ne),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new ie().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ie().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ie().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ie, ze, Xe);
				}
			}
			e.$Fu = ie;
			var ne;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.EXPECTED_FAILURE = 3)] = "EXPECTED_FAILURE"),
					(Ye[(Ye.QUEUE_BACKED_UP = 4)] = "QUEUE_BACKED_UP");
			})(ne || (e.UpdateFileResponse_Status = ne = {})),
				t.proto3.util.setEnumType(ne, "aiserver.v1.UpdateFileResponse.Status", [
					{ no: 0, name: "STATUS_UNSPECIFIED" },
					{ no: 1, name: "STATUS_SUCCESS" },
					{ no: 2, name: "STATUS_FAILURE" },
					{ no: 3, name: "STATUS_EXPECTED_FAILURE" },
					{ no: 4, name: "STATUS_QUEUE_BACKED_UP" },
				]);
			class ee extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FinishUpdateRepoRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new ee().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ee().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ee().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ee, ze, Xe);
				}
			}
			e.$Gu = ee;
			class _ extends t.Message {
				constructor(ze) {
					super(),
						(this.status = te.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FinishUpdateRepoResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(te),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new _().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new _().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new _().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(_, ze, Xe);
				}
			}
			e.$Hu = _;
			var te;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE");
			})(te || (e.FinishUpdateRepoResponse_Status = te = {})),
				t.proto3.util.setEnumType(
					te,
					"aiserver.v1.FinishUpdateRepoResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
					],
				);
			class Q extends t.Message {
				constructor(ze) {
					super(), (this.requests = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BatchRepositoryStatusRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "requests", kind: "message", T: Ze, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Q().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Q().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Q().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Q, ze, Xe);
				}
			}
			e.$Iu = Q;
			class Z extends t.Message {
				constructor(ze) {
					super(), (this.responses = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BatchRepositoryStatusResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "responses", kind: "message", T: et, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Z().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Z().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Z().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Z, ze, Xe);
				}
			}
			e.$Ju = Z;
			class se extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UnsubscribeRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new se().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new se().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new se().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(se, ze, Xe);
				}
			}
			e.$Ku = se;
			class re extends t.Message {
				constructor(ze) {
					super(),
						(this.status = le.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UnsubscribeRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(le),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new re().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new re().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new re().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(re, ze, Xe);
				}
			}
			e.$Lu = re;
			var le;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.NOT_FOUND = 1)] = "NOT_FOUND"),
					(Ye[(Ye.NOT_SUBSCRIBED = 2)] = "NOT_SUBSCRIBED"),
					(Ye[(Ye.SUCCESS = 3)] = "SUCCESS");
			})(le || (e.UnsubscribeRepositoryResponse_Status = le = {})),
				t.proto3.util.setEnumType(
					le,
					"aiserver.v1.UnsubscribeRepositoryResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_NOT_FOUND" },
						{ no: 2, name: "STATUS_NOT_SUBSCRIBED" },
						{ no: 3, name: "STATUS_SUCCESS" },
					],
				);
			class oe extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LogoutRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new oe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new oe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new oe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(oe, ze, Xe);
				}
			}
			e.$Mu = oe;
			class ae extends t.Message {
				constructor(ze) {
					super(),
						(this.status = pe.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LogoutResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(pe),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new ae().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ae().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ae().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ae, ze, Xe);
				}
			}
			e.$Nu = ae;
			var pe;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.NOT_LOGGED_IN = 3)] = "NOT_LOGGED_IN");
			})(pe || (e.LogoutResponse_Status = pe = {})),
				t.proto3.util.setEnumType(pe, "aiserver.v1.LogoutResponse.Status", [
					{ no: 0, name: "STATUS_UNSPECIFIED" },
					{ no: 1, name: "STATUS_SUCCESS" },
					{ no: 2, name: "STATUS_FAILURE" },
					{ no: 3, name: "STATUS_NOT_LOGGED_IN" },
				]);
			class $e extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RemoveRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new $e().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new $e().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new $e().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals($e, ze, Xe);
				}
			}
			e.$Ou = $e;
			class ye extends t.Message {
				constructor(ze) {
					super(),
						(this.status = ue.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RemoveRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(ue),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new ye().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ye().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ye().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ye, ze, Xe);
				}
			}
			e.$Pu = ye;
			var ue;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.NOT_FOUND = 1)] = "NOT_FOUND"),
					(Ye[(Ye.NOT_AUTHORIZED = 2)] = "NOT_AUTHORIZED"),
					(Ye[(Ye.STARTED = 3)] = "STARTED"),
					(Ye[(Ye.SUCCESS = 4)] = "SUCCESS");
			})(ue || (e.RemoveRepositoryResponse_Status = ue = {})),
				t.proto3.util.setEnumType(
					ue,
					"aiserver.v1.RemoveRepositoryResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_NOT_FOUND" },
						{ no: 2, name: "STATUS_NOT_AUTHORIZED" },
						{ no: 3, name: "STATUS_STARTED" },
						{ no: 4, name: "STATUS_SUCCESS" },
					],
				);
			class fe extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SubscribeRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new fe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new fe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new fe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(fe, ze, Xe);
				}
			}
			e.$Qu = fe;
			class me extends t.Message {
				constructor(ze) {
					super(),
						(this.status = ve.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SubscribeRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(ve),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new me().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new me().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new me().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(me, ze, Xe);
				}
			}
			e.$Ru = me;
			var ve;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.NOT_FOUND = 1)] = "NOT_FOUND"),
					(Ye[(Ye.NOT_AUTHORIZED = 2)] = "NOT_AUTHORIZED"),
					(Ye[(Ye.ALREADY_SUBSCRIBED = 3)] = "ALREADY_SUBSCRIBED"),
					(Ye[(Ye.SUCCESS = 4)] = "SUCCESS");
			})(ve || (e.SubscribeRepositoryResponse_Status = ve = {})),
				t.proto3.util.setEnumType(
					ve,
					"aiserver.v1.SubscribeRepositoryResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_NOT_FOUND" },
						{ no: 2, name: "STATUS_NOT_AUTHORIZED" },
						{ no: 3, name: "STATUS_ALREADY_SUBSCRIBED" },
						{ no: 4, name: "STATUS_SUCCESS" },
					],
				);
			class ge extends t.Message {
				constructor(ze) {
					super(),
						(this.query = ""),
						(this.topK = 0),
						(this.rerank = !1),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SearchRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "query", kind: "scalar", T: 9 },
						{ no: 2, name: "repository", kind: "message", T: Nt },
						{ no: 3, name: "top_k", kind: "scalar", T: 5 },
						{ no: 4, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 5, name: "rerank", kind: "scalar", T: 8 },
						{
							no: 6,
							name: "context_cache_request",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{ no: 7, name: "glob_filter", kind: "scalar", T: 9, opt: !0 },
						{ no: 8, name: "not_glob_filter", kind: "scalar", T: 9, opt: !0 },
						{ no: 9, name: "race_n_requests", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new ge().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ge().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ge().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ge, ze, Xe);
				}
			}
			e.$Su = ge;
			class be extends t.Message {
				constructor(ze) {
					super(), (this.score = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CodeResult";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "code_block", kind: "message", T: i.$Ps },
						{ no: 2, name: "score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new be().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new be().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new be().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(be, ze, Xe);
				}
			}
			e.$Tu = be;
			class Ce extends t.Message {
				constructor(ze) {
					super(), (this.score = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileResult";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "message", T: i.$Rs },
						{ no: 2, name: "score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Ce().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ce().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ce().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ce, ze, Xe);
				}
			}
			e.$Uu = Ce;
			class Le extends t.Message {
				constructor(ze) {
					super(), (this.codeResults = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SearchRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "code_results",
							kind: "message",
							T: be,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new Le().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Le().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Le().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Le, ze, Xe);
				}
			}
			e.$Vu = Le;
			class Fe extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SemSearchRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request", kind: "message", T: ge },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Fe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Fe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Fe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Fe, ze, Xe);
				}
			}
			e.$Wu = Fe;
			class Oe extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CodeResultWithClassificationInfo";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "code_result", kind: "message", T: be },
						{
							no: 2,
							name: "line_number_classification",
							kind: "message",
							T: xe,
							opt: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new Oe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Oe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Oe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Oe, ze, Xe);
				}
			}
			e.$Xu = Oe;
			class xe extends t.Message {
				constructor(ze) {
					super(),
						(this.queryComputedFor = ""),
						(this.matchedStrings = []),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.CodeResultWithClassificationInfo.LineNumberClassification";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "detailed_line", kind: "message", T: i.$Os },
						{ no: 2, name: "query_computed_for", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "matched_strings",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{ no: 4, name: "highlight_range", kind: "message", T: i.$Fs },
					]);
				}
				static fromBinary(ze, Xe) {
					return new xe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new xe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new xe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(xe, ze, Xe);
				}
			}
			e.$Yu = xe;
			class He extends t.Message {
				constructor(ze) {
					super(), (this.codeResults = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SemSearchResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "response", kind: "message", T: Le },
						{ no: 2, name: "metadata", kind: "message", T: Ke, opt: !0 },
						{
							no: 3,
							name: "code_results",
							kind: "message",
							T: Oe,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new He().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new He().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new He().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(He, ze, Xe);
				}
			}
			e.$Zu = He;
			class Ke extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SemSearchResponse.SemSearchMetadata";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "query_embedding_model",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 2,
							name: "server_side_latency_ms",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 3, name: "embed_latency_ms", kind: "scalar", T: 5, opt: !0 },
						{ no: 4, name: "knn_latency_ms", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Ke().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ke().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ke().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ke, ze, Xe);
				}
			}
			e.$1u = Ke;
			class Je extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LoginRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new Je().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Je().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Je().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Je, ze, Xe);
				}
			}
			e.$2u = Je;
			class Te extends t.Message {
				constructor(ze) {
					super(), (this.loginUrl = ""), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.LoginResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "login_url", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Te().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Te().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Te().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Te, ze, Xe);
				}
			}
			e.$3u = Te;
			class Ee extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.IsLoggedInRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new Ee().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ee().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ee().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ee, ze, Xe);
				}
			}
			e.$4u = Ee;
			class Ie extends t.Message {
				constructor(ze) {
					super(), (this.loggedIn = !1), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.IsLoggedInResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "logged_in", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Ie().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ie().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ie().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ie, ze, Xe);
				}
			}
			e.$5u = Ie;
			class Be extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.PollLoginRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new Be().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Be().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Be().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Be, ze, Xe);
				}
			}
			e.$6u = Be;
			class Se extends t.Message {
				constructor(ze) {
					super(),
						(this.status = ke.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.PollLoginResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(ke),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new Se().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Se().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Se().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Se, ze, Xe);
				}
			}
			e.$7u = Se;
			var ke;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.LOGGED_IN = 1)] = "LOGGED_IN"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.CHECKING = 3)] = "CHECKING");
			})(ke || (e.PollLoginResponse_Status = ke = {})),
				t.proto3.util.setEnumType(ke, "aiserver.v1.PollLoginResponse.Status", [
					{ no: 0, name: "STATUS_UNSPECIFIED" },
					{ no: 1, name: "STATUS_LOGGED_IN" },
					{ no: 2, name: "STATUS_FAILURE" },
					{ no: 3, name: "STATUS_CHECKING" },
				]);
			class Ue extends t.Message {
				constructor(ze) {
					super(), (this.scopes = []), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UpgradeScopeRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "scopes", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Ue().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ue().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ue().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ue, ze, Xe);
				}
			}
			e.$8u = Ue;
			class qe extends t.Message {
				constructor(ze) {
					super(),
						(this.status = Ae.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UpgradeScopeResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(Ae),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new qe().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new qe().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new qe().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(qe, ze, Xe);
				}
			}
			e.$9u = qe;
			var Ae;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE");
			})(Ae || (e.UpgradeScopeResponse_Status = Ae = {})),
				t.proto3.util.setEnumType(
					Ae,
					"aiserver.v1.UpgradeScopeResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
					],
				);
			class Me extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoriesRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new Me().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Me().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Me().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Me, ze, Xe);
				}
			}
			e.$0u = Me;
			class De extends t.Message {
				constructor(ze) {
					super(),
						(this.repositories = []),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoriesResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "repositories",
							kind: "message",
							T: Nt,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new De().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new De().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new De().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(De, ze, Xe);
				}
			}
			e.$$u = De;
			class Re extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UploadRepositoryRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Re().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Re().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Re().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Re, ze, Xe);
				}
			}
			e.$_u = Re;
			class je extends t.Message {
				constructor(ze) {
					super(),
						(this.status = Ve.UNSPECIFIED),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.UploadRepositoryResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType(Ve),
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new je().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new je().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new je().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(je, ze, Xe);
				}
			}
			e.$av = je;
			var Ve;
			(function (Ye) {
				(Ye[(Ye.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Ye[(Ye.SUCCESS = 1)] = "SUCCESS"),
					(Ye[(Ye.FAILURE = 2)] = "FAILURE"),
					(Ye[(Ye.AUTH_TOKEN_BAD_PERMISSIONS = 3)] =
						"AUTH_TOKEN_BAD_PERMISSIONS"),
					(Ye[(Ye.ALREADY_EXISTS = 4)] = "ALREADY_EXISTS");
			})(Ve || (e.UploadRepositoryResponse_Status = Ve = {})),
				t.proto3.util.setEnumType(
					Ve,
					"aiserver.v1.UploadRepositoryResponse.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_SUCCESS" },
						{ no: 2, name: "STATUS_FAILURE" },
						{ no: 3, name: "STATUS_AUTH_TOKEN_BAD_PERMISSIONS" },
						{ no: 4, name: "STATUS_ALREADY_EXISTS" },
					],
				);
			class Ze extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "repository", kind: "message", T: Nt },
					]);
				}
				static fromBinary(ze, Xe) {
					return new Ze().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Ze().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Ze().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Ze, ze, Xe);
				}
			}
			e.$bv = Ze;
			class et extends t.Message {
				constructor(ze) {
					super(),
						(this.status = { case: void 0 }),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "not_found",
							kind: "message",
							T: rt,
							oneof: "status",
						},
						{
							no: 2,
							name: "uploading",
							kind: "message",
							T: bt,
							oneof: "status",
						},
						{ no: 3, name: "syncing", kind: "message", T: nt, oneof: "status" },
						{ no: 4, name: "synced", kind: "message", T: lt, oneof: "status" },
						{
							no: 5,
							name: "not_subscribed",
							kind: "message",
							T: ft,
							oneof: "status",
						},
						{ no: 6, name: "too_big", kind: "message", T: ct, oneof: "status" },
						{
							no: 7,
							name: "auth_token_not_found",
							kind: "message",
							T: gt,
							oneof: "status",
						},
						{
							no: 8,
							name: "auth_token_not_authorized",
							kind: "message",
							T: ht,
							oneof: "status",
						},
						{
							no: 10,
							name: "error_uploading",
							kind: "message",
							T: Rt,
							oneof: "status",
						},
						{
							no: 11,
							name: "error_syncing",
							kind: "message",
							T: Rt,
							oneof: "status",
						},
						{ no: 9, name: "is_owner", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new et().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new et().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new et().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(et, ze, Xe);
				}
			}
			e.$cv = et;
			class rt extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.NotFound";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new rt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new rt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new rt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(rt, ze, Xe);
				}
			}
			e.$dv = rt;
			class ft extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.NotSubscribed";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new ft().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ft().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ft().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ft, ze, Xe);
				}
			}
			e.$ev = ft;
			class bt extends t.Message {
				constructor(ze) {
					super(), (this.progress = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.Uploading";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "progress", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new bt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new bt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new bt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(bt, ze, Xe);
				}
			}
			e.$fv = bt;
			class nt extends t.Message {
				constructor(ze) {
					super(),
						(this.branch = ""),
						(this.oldCommit = ""),
						(this.newCommit = ""),
						(this.progress = 0),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.Syncing";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "branch", kind: "scalar", T: 9 },
						{ no: 2, name: "old_commit", kind: "scalar", T: 9 },
						{ no: 3, name: "new_commit", kind: "scalar", T: 9 },
						{ no: 4, name: "progress", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new nt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new nt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new nt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(nt, ze, Xe);
				}
			}
			e.$gv = nt;
			class lt extends t.Message {
				constructor(ze) {
					super(),
						(this.branch = ""),
						(this.commit = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.Synced";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "branch", kind: "scalar", T: 9 },
						{ no: 2, name: "commit", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new lt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new lt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new lt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(lt, ze, Xe);
				}
			}
			e.$hv = lt;
			class ct extends t.Message {
				constructor(ze) {
					super(), (this.maxSize = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.TooBig";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "max_size", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new ct().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ct().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ct().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ct, ze, Xe);
				}
			}
			e.$iv = ct;
			class gt extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.RepositoryStatusResponse.AuthTokenNotFound";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new gt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new gt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new gt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(gt, ze, Xe);
				}
			}
			e.$jv = gt;
			class ht extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.RepositoryStatusResponse.AuthTokenNotAuthorized";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new ht().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ht().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ht().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ht, ze, Xe);
				}
			}
			e.$kv = ht;
			class Rt extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryStatusResponse.EmptyMessage";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(ze, Xe) {
					return new Rt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Rt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Rt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Rt, ze, Xe);
				}
			}
			e.$lv = Rt;
			class Nt extends t.Message {
				constructor(ze) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.remoteUrls = []),
						(this.remoteNames = []),
						(this.repoName = ""),
						(this.repoOwner = ""),
						(this.isTracked = !1),
						(this.isLocal = !1),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RepositoryInfo";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "remote_urls", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "remote_names", kind: "scalar", T: 9, repeated: !0 },
						{ no: 4, name: "repo_name", kind: "scalar", T: 9 },
						{ no: 5, name: "repo_owner", kind: "scalar", T: 9 },
						{ no: 6, name: "is_tracked", kind: "scalar", T: 8 },
						{ no: 7, name: "is_local", kind: "scalar", T: 8 },
						{ no: 8, name: "num_files", kind: "scalar", T: 5, opt: !0 },
						{
							no: 9,
							name: "orthogonal_transform_seed",
							kind: "scalar",
							T: 1,
							opt: !0,
						},
						{
							no: 10,
							name: "preferred_embedding_model",
							kind: "enum",
							T: t.proto3.getEnumType(i.EmbeddingModel),
							opt: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new Nt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Nt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Nt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Nt, ze, Xe);
				}
			}
			e.$mv = Nt;
			class jt extends t.Message {
				constructor(ze) {
					super(),
						(this.query = ""),
						(this.topK = 0),
						(this.topReflectionsK = 0),
						(this.indexIds = []),
						(this.useModelOnFiles = !1),
						(this.useReflections = !1),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SearchRepositoryDeepContextRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "query", kind: "scalar", T: 9 },
						{ no: 2, name: "top_k", kind: "scalar", T: 5 },
						{ no: 3, name: "top_reflections_k", kind: "scalar", T: 5 },
						{ no: 4, name: "index_ids", kind: "scalar", T: 9, repeated: !0 },
						{ no: 5, name: "use_model_on_files", kind: "scalar", T: 8 },
						{ no: 6, name: "use_reflections", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new jt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new jt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new jt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(jt, ze, Xe);
				}
			}
			e.$nv = jt;
			class ti extends t.Message {
				constructor(ze) {
					super(), (this.score = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.NodeResult";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "node", kind: "message", T: w.$Wt },
						{ no: 2, name: "file", kind: "message", T: i.$Rs },
						{ no: 3, name: "score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new ti().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new ti().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new ti().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(ti, ze, Xe);
				}
			}
			e.$ov = ti;
			class kt extends t.Message {
				constructor(ze) {
					super(), (this.score = 0), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReflectionResult";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "reflection", kind: "message", T: w.$Ut },
						{ no: 2, name: "score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new kt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new kt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new kt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(kt, ze, Xe);
				}
			}
			e.$pv = kt;
			class hi extends t.Message {
				constructor(ze) {
					super(),
						(this.topNodes = []),
						(this.reflections = []),
						(this.indexId = ""),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SearchRepositoryDeepContextResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "top_nodes", kind: "message", T: ti, repeated: !0 },
						{
							no: 2,
							name: "reflections",
							kind: "message",
							T: kt,
							repeated: !0,
						},
						{ no: 3, name: "index_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(ze, Xe) {
					return new hi().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new hi().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new hi().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(hi, ze, Xe);
				}
			}
			e.$qv = hi;
			class Kt extends t.Message {
				constructor(ze) {
					super(),
						(this.query = ""),
						(this.codeResults = []),
						t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLineNumberClassificationsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "query", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "code_results",
							kind: "message",
							T: be,
							repeated: !0,
						},
					]);
				}
				static fromBinary(ze, Xe) {
					return new Kt().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new Kt().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new Kt().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(Kt, ze, Xe);
				}
			}
			e.$rv = Kt;
			class di extends t.Message {
				constructor(ze) {
					super(), t.proto3.util.initPartial(ze, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLineNumberClassificationsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "classified_result", kind: "message", T: Oe },
					]);
				}
				static fromBinary(ze, Xe) {
					return new di().fromBinary(ze, Xe);
				}
				static fromJson(ze, Xe) {
					return new di().fromJson(ze, Xe);
				}
				static fromJsonString(ze, Xe) {
					return new di().fromJsonString(ze, Xe);
				}
				static equals(ze, Xe) {
					return t.proto3.util.equals(di, ze, Xe);
				}
			}
			e.$sv = di;
		}),
		