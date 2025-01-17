import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
define(de[1483], he([1, 0, 86, 83]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BB =
					e.$AB =
					e.$zB =
					e.$yB =
					e.$xB =
					e.$wB =
					e.$vB =
					e.$uB =
					e.$tB =
					e.$sB =
					e.$rB =
					e.$qB =
					e.$pB =
					e.$oB =
					e.$nB =
					e.$mB =
					e.$lB =
					e.$kB =
					e.FSSyncErrorType =
					e.FSUploadErrorType =
						void 0);
			var w;
			(function (v) {
				(v[(v.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED = 0)] =
					"FS_UPLOAD_ERROR_TYPE_UNSPECIFIED"),
					(v[(v.FS_UPLOAD_ERROR_TYPE_NON_EXISTANT = 1)] =
						"FS_UPLOAD_ERROR_TYPE_NON_EXISTANT"),
					(v[(v.FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH = 2)] =
						"FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH");
			})(w || (e.FSUploadErrorType = w = {})),
				t.proto3.util.setEnumType(w, "aiserver.v1.FSUploadErrorType", [
					{ no: 0, name: "FS_UPLOAD_ERROR_TYPE_UNSPECIFIED" },
					{ no: 1, name: "FS_UPLOAD_ERROR_TYPE_NON_EXISTANT" },
					{ no: 2, name: "FS_UPLOAD_ERROR_TYPE_HASH_MISMATCH" },
				]);
			var E;
			(function (v) {
				(v[(v.FS_SYNC_ERROR_TYPE_UNSPECIFIED = 0)] =
					"FS_SYNC_ERROR_TYPE_UNSPECIFIED"),
					(v[(v.FS_SYNC_ERROR_TYPE_NON_EXISTANT = 1)] =
						"FS_SYNC_ERROR_TYPE_NON_EXISTANT"),
					(v[(v.FS_SYNC_ERROR_TYPE_HASH_MISMATCH = 2)] =
						"FS_SYNC_ERROR_TYPE_HASH_MISMATCH");
			})(E || (e.FSSyncErrorType = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.FSSyncErrorType", [
					{ no: 0, name: "FS_SYNC_ERROR_TYPE_UNSPECIFIED" },
					{ no: 1, name: "FS_SYNC_ERROR_TYPE_NON_EXISTANT" },
					{ no: 2, name: "FS_SYNC_ERROR_TYPE_HASH_MISMATCH" },
				]);
			class C extends t.Message {
				constructor(S) {
					super(),
						(this.uuid = ""),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						(this.modelVersion = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSUploadFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 3, name: "contents", kind: "scalar", T: 9 },
						{ no: 4, name: "model_version", kind: "scalar", T: 5 },
						{ no: 5, name: "sha256_hash", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new C().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new C().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new C().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(C, S, I);
				}
			}
			e.$kB = C;
			class d extends t.Message {
				constructor(S) {
					super(),
						(this.error = w.FS_UPLOAD_ERROR_TYPE_UNSPECIFIED),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSUploadFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "error", kind: "enum", T: t.proto3.getEnumType(w) },
					]);
				}
				static fromBinary(S, I) {
					return new d().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new d().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new d().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(d, S, I);
				}
			}
			e.$lB = d;
			class m extends t.Message {
				constructor(S) {
					super(),
						(this.modelVersion = 0),
						(this.relativeWorkspacePath = ""),
						(this.updates = []),
						(this.expectedFileLength = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FilesyncUpdateWithModelVersion";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_version", kind: "scalar", T: 5 },
						{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 3, name: "updates", kind: "message", T: r, repeated: !0 },
						{ no: 4, name: "expected_file_length", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(S, I) {
					return new m().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new m().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new m().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(m, S, I);
				}
			}
			e.$mB = m;
			class r extends t.Message {
				constructor(S) {
					super(),
						(this.startPosition = 0),
						(this.endPosition = 0),
						(this.changeLength = 0),
						(this.replacedString = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SingleUpdateRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_position", kind: "scalar", T: 5 },
						{ no: 2, name: "end_position", kind: "scalar", T: 5 },
						{ no: 3, name: "change_length", kind: "scalar", T: 5 },
						{ no: 4, name: "replaced_string", kind: "scalar", T: 9 },
						{ no: 5, name: "range", kind: "message", T: i.$Fs },
					]);
				}
				static fromBinary(S, I) {
					return new r().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new r().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new r().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(r, S, I);
				}
			}
			e.$nB = r;
			class u extends t.Message {
				constructor(S) {
					super(),
						(this.uuid = ""),
						(this.relativeWorkspacePath = ""),
						(this.modelVersion = 0),
						(this.filesyncUpdates = []),
						(this.sha256Hash = ""),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSSyncFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 3, name: "model_version", kind: "scalar", T: 5 },
						{
							no: 4,
							name: "filesync_updates",
							kind: "message",
							T: m,
							repeated: !0,
						},
						{ no: 5, name: "sha256_hash", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new u().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new u().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new u().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(u, S, I);
				}
			}
			e.$oB = u;
			class a extends t.Message {
				constructor(S) {
					super(),
						(this.error = E.FS_SYNC_ERROR_TYPE_UNSPECIFIED),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSSyncFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "error", kind: "enum", T: t.proto3.getEnumType(E) },
					]);
				}
				static fromBinary(S, I) {
					return new a().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new a().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new a().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(a, S, I);
				}
			}
			e.$pB = a;
			class h extends t.Message {
				constructor(S) {
					super(), (this.uuid = ""), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSIsEnabledForUserRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uuid", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(S, I) {
					return new h().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new h().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new h().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(h, S, I);
				}
			}
			e.$qB = h;
			class c extends t.Message {
				constructor(S) {
					super(), (this.enabled = !1), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSIsEnabledForUserResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "enabled", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(S, I) {
					return new c().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new c().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new c().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(c, S, I);
				}
			}
			e.$rB = c;
			class n extends t.Message {
				constructor(S) {
					super(),
						(this.uuid = ""),
						(this.authId = ""),
						(this.relativeWorkspacePath = ""),
						(this.modelVersion = 0),
						(this.filesyncUpdates = []),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSGetFileContentsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "auth_id", kind: "scalar", T: 9 },
						{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 4, name: "model_version", kind: "scalar", T: 5 },
						{
							no: 5,
							name: "filesync_updates",
							kind: "message",
							T: m,
							repeated: !0,
						},
						{ no: 6, name: "sha256_hash", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new n().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new n().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new n().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(n, S, I);
				}
			}
			e.$sB = n;
			class g extends t.Message {
				constructor(S) {
					super(), (this.contents = ""), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSGetFileContentsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "contents", kind: "scalar", T: 9 },
						{ no: 2, name: "sha256_hash", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new g().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new g().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new g().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(g, S, I);
				}
			}
			e.$tB = g;
			class p extends t.Message {
				constructor(S) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.required = !1),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "requested_version", kind: "scalar", T: 5, opt: !0 },
						{ no: 3, name: "sha256_hash", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "required", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(S, I) {
					return new p().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new p().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new p().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(p, S, I);
				}
			}
			e.$uB = p;
			class o extends t.Message {
				constructor(S) {
					super(),
						(this.authId = ""),
						(this.filesyncUpdates = []),
						(this.fileRequests = []),
						(this.getAllRecentFiles = !1),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSGetMultiFileContentsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "auth_id", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "filesync_updates",
							kind: "message",
							T: m,
							repeated: !0,
						},
						{
							no: 3,
							name: "file_requests",
							kind: "message",
							T: p,
							repeated: !0,
						},
						{ no: 4, name: "get_all_recent_files", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(S, I) {
					return new o().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new o().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new o().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(o, S, I);
				}
			}
			e.$vB = o;
			class f extends t.Message {
				constructor(S) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						(this.modelVersion = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileRetrieved";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
						{ no: 3, name: "model_version", kind: "scalar", T: 5 },
						{ no: 4, name: "last_modified", kind: "message", T: t.Timestamp },
					]);
				}
				static fromBinary(S, I) {
					return new f().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new f().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new f().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(f, S, I);
				}
			}
			e.$wB = f;
			class b extends t.Message {
				constructor(S) {
					super(), (this.files = []), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSGetMultiFileContentsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "files", kind: "message", T: f, repeated: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new b().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new b().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new b().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(b, S, I);
				}
			}
			e.$xB = b;
			class s extends t.Message {
				constructor(S) {
					super(), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSInternalHealthCheckRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "from_server", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(S, I) {
					return new s().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new s().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new s().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(s, S, I);
				}
			}
			e.$yB = s;
			class l extends t.Message {
				constructor(S) {
					super(), (this.success = !1), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSInternalHealthCheckResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "success", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(S, I) {
					return new l().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new l().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new l().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(l, S, I);
				}
			}
			e.$zB = l;
			class y extends t.Message {
				constructor(S) {
					super(), t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSConfigRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(S, I) {
					return new y().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new y().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new y().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals(y, S, I);
				}
			}
			e.$AB = y;
			class $ extends t.Message {
				constructor(S) {
					super(),
						(this.checkFilesyncHashPercent = 0),
						t.proto3.util.initPartial(S, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FSConfigResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "check_filesync_hash_percent",
							kind: "scalar",
							T: 2,
						},
						{
							no: 2,
							name: "rate_limiter_breaker_reset_time_ms",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 3, name: "rate_limiter_rps", kind: "scalar", T: 5, opt: !0 },
						{
							no: 4,
							name: "rate_limiter_burst_capacity",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 5,
							name: "max_recent_updates_stored",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 6,
							name: "max_model_version_cache_size",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 7,
							name: "max_file_size_to_sync_bytes",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 8,
							name: "sync_retry_max_attempts",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 9,
							name: "sync_retry_initial_delay_ms",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 10,
							name: "sync_retry_time_multiplier",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 11,
							name: "file_sync_status_max_cache_size",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 12,
							name: "successive_syncs_required_for_reliance",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 13,
							name: "extra_successful_syncs_needed_after_errors",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 14,
							name: "big_change_stripping_threshold_bytes",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 15,
							name: "last_n_updates_to_send",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 16,
							name: "file_sync_status_ttl_ms",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 17, name: "sync_debounce_ms", kind: "scalar", T: 5, opt: !0 },
						{
							no: 18,
							name: "sync_update_threshold",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
					]);
				}
				static fromBinary(S, I) {
					return new $().fromBinary(S, I);
				}
				static fromJson(S, I) {
					return new $().fromJson(S, I);
				}
				static fromJsonString(S, I) {
					return new $().fromJsonString(S, I);
				}
				static equals(S, I) {
					return t.proto3.util.equals($, S, I);
				}
			}
			e.$BB = $;
		}),
		