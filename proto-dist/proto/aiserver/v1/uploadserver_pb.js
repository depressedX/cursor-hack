/* import '../../../require.js'; */
/* import '../../../exports.js'; */
/* import '../../../external/bufbuild/protobuf.js'; */
/* import './docs_pb.js'; */
define(
	de[735],
	he([1, 0, 86, 892]),
	function (ce /*require*/, e /*exports*/, t /*protobuf*/, i /*docs_pb*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$5_ =
				e.$4_ =
				e.UploadedStatus_Status =
				e.$3_ =
				e.UploadResponse_Status =
				e.$2_ =
				e.$1_ =
				e.$Z_ =
				e.$Y_ =
				e.$X_ =
				e.$W_ =
				e.$V_ =
				e.$U_ =
				e.$T_ =
				e.$S_ =
				e.$R_ =
				e.$Q_ =
				e.$P_ =
				e.UploadStatus =
					void 0);
		var w;
		(function ($) {
			($[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				($[($.IN_PROGRESS = 1)] = "IN_PROGRESS"),
				($[($.SUCCEEDED = 2)] = "SUCCEEDED"),
				($[($.FAILED = 3)] = "FAILED"),
				($[($.NOT_FOUND = 4)] = "NOT_FOUND");
		})(w || (e.UploadStatus = w = {})),
			t.proto3.util.setEnumType(w, "aiserver.v1.UploadStatus", [
				{ no: 0, name: "UPLOAD_STATUS_UNSPECIFIED" },
				{ no: 1, name: "UPLOAD_STATUS_IN_PROGRESS" },
				{ no: 2, name: "UPLOAD_STATUS_SUCCEEDED" },
				{ no: 3, name: "UPLOAD_STATUS_FAILED" },
				{ no: 4, name: "UPLOAD_STATUS_NOT_FOUND" },
			]);
		class E extends t.Message {
			constructor(v) {
				super(), (this.docIdentifier = ""), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RescrapeDocsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
					{ no: 2, name: "force_reupload", kind: "scalar", T: 8, opt: !0 },
				]);
			}
			static fromBinary(v, S) {
				return new E().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new E().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new E().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(E, v, S);
			}
		}
		e.$P_ = E;
		class C extends t.Message {
			constructor(v) {
				super(), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RescrapeDocsRequestV2";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "new_doc_req", kind: "message", T: p },
					{ no: 2, name: "force_reupload", kind: "scalar", T: 8, opt: !0 },
				]);
			}
			static fromBinary(v, S) {
				return new C().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new C().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new C().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(C, v, S);
			}
		}
		e.$Q_ = C;
		class d extends t.Message {
			constructor(v) {
				super(), (this.success = !1), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.RescrapeDocsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "success", kind: "scalar", T: 8 },
					{
						no: 2,
						name: "new_doc_identifier",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
				]);
			}
			static fromBinary(v, S) {
				return new d().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new d().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new d().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(d, v, S);
			}
		}
		e.$R_ = d;
		class m extends t.Message {
			constructor(v) {
				super(), (this.docIdentifier = ""), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UploadedStatusRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new m().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new m().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new m().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(m, v, S);
			}
		}
		e.$S_ = m;
		class r extends t.Message {
			constructor(v) {
				super(), (this.docIdentifier = ""), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UploadDocumentationRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new r().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new r().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new r().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(r, v, S);
			}
		}
		e.$T_ = r;
		class u extends t.Message {
			constructor(v) {
				super(), (this.docIdentifier = ""), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetPagesRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new u().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new u().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new u().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(u, v, S);
			}
		}
		e.$U_ = u;
		class a extends t.Message {
			constructor(v) {
				super(), (this.docIdentifier = ""), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.GetDocRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new a().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new a().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new a().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(a, v, S);
			}
		}
		e.$V_ = a;
		class h extends t.Message {
			constructor(v) {
				super(),
					(this.id = 0),
					(this.uuid = ""),
					(this.docIdentifier = ""),
					(this.docName = ""),
					(this.docUrlRoot = ""),
					(this.docUrlPrefix = ""),
					(this.isDifferentPrefix = !1),
					(this.createdAt = ""),
					(this.updatedAt = ""),
					(this.lastUploadedAt = ""),
					(this.showToAllUsers = !1),
					(this.teamId = 0),
					(this.customInstructions = ""),
					(this.pages = []),
					(this.publishToTeam = !1),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ProtoDoc";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "id", kind: "scalar", T: 5 },
					{ no: 2, name: "uuid", kind: "scalar", T: 9 },
					{ no: 3, name: "doc_identifier", kind: "scalar", T: 9 },
					{ no: 4, name: "doc_name", kind: "scalar", T: 9 },
					{ no: 5, name: "doc_url_root", kind: "scalar", T: 9 },
					{ no: 6, name: "doc_url_prefix", kind: "scalar", T: 9 },
					{ no: 7, name: "is_different_prefix", kind: "scalar", T: 8 },
					{ no: 8, name: "created_at", kind: "scalar", T: 9 },
					{ no: 9, name: "updated_at", kind: "scalar", T: 9 },
					{ no: 10, name: "last_uploaded_at", kind: "scalar", T: 9 },
					{ no: 11, name: "upload_status", kind: "message", T: b },
					{ no: 12, name: "show_to_all_users", kind: "scalar", T: 8 },
					{ no: 13, name: "team_id", kind: "scalar", T: 5 },
					{ no: 14, name: "custom_instructions", kind: "scalar", T: 9 },
					{ no: 15, name: "pages", kind: "message", T: c, repeated: !0 },
					{ no: 16, name: "publish_to_team", kind: "scalar", T: 8 },
				]);
			}
			static fromBinary(v, S) {
				return new h().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new h().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new h().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(h, v, S);
			}
		}
		e.$W_ = h;
		class c extends t.Message {
			constructor(v) {
				super(),
					(this.url = ""),
					(this.title = ""),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.ProtoDocPage";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "url", kind: "scalar", T: 9 },
					{ no: 2, name: "title", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new c().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new c().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new c().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(c, v, S);
			}
		}
		e.$X_ = c;
		class n extends t.Message {
			constructor(v) {
				super(),
					(this.pages = []),
					(this.pageUrls = []),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.Pages";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "pages", kind: "scalar", T: 9, repeated: !0 },
					{ no: 2, name: "page_urls", kind: "scalar", T: 9, repeated: !0 },
				]);
			}
			static fromBinary(v, S) {
				return new n().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new n().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new n().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(n, v, S);
			}
		}
		e.$Y_ = n;
		class g extends t.Message {
			constructor(v) {
				super(),
					(this.docIdentifier = ""),
					(this.password = ""),
					(this.docName = ""),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.MarkAsPublicRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
					{ no: 2, name: "password", kind: "scalar", T: 9 },
					{ no: 3, name: "doc_name", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new g().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new g().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new g().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(g, v, S);
			}
		}
		e.$Z_ = g;
		class p extends t.Message {
			constructor(v) {
				super(),
					(this.docIdentifier = ""),
					(this.ignorePrefixes = []),
					(this.ignoreUrls = []),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.NewDocumentationRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "doc_identifier", kind: "scalar", T: 9 },
					{ no: 2, name: "metadata", kind: "message", T: i.$Wz },
					{
						no: 4,
						name: "ignore_prefixes",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{ no: 5, name: "ignore_urls", kind: "scalar", T: 9, repeated: !0 },
					{
						no: 6,
						name: "custom_instructions",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{ no: 7, name: "publish_to_team", kind: "scalar", T: 8, opt: !0 },
					{
						no: 8,
						name: "client_handles_uuid",
						kind: "scalar",
						T: 8,
						opt: !0,
					},
				]);
			}
			static fromBinary(v, S) {
				return new p().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new p().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new p().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(p, v, S);
			}
		}
		e.$1_ = p;
		class o extends t.Message {
			constructor(v) {
				super(),
					(this.status = f.UNSPECIFIED),
					(this.progress = 0),
					(this.similarDocIdentifier = ""),
					(this.uploadedPages = []),
					(this.docUuid = ""),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UploadResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(f) },
					{ no: 2, name: "progress", kind: "scalar", T: 2 },
					{ no: 3, name: "similar_doc_identifier", kind: "scalar", T: 9 },
					{
						no: 4,
						name: "uploaded_pages",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
					{ no: 5, name: "doc_uuid", kind: "scalar", T: 9 },
				]);
			}
			static fromBinary(v, S) {
				return new o().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new o().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new o().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(o, v, S);
			}
		}
		e.$2_ = o;
		var f;
		(function ($) {
			($[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				($[($.SUCCESS = 1)] = "SUCCESS"),
				($[($.FAILURE = 2)] = "FAILURE"),
				($[($.ALREADY_EXISTS = 3)] = "ALREADY_EXISTS"),
				($[($.SIMILAR_ALREADY_EXISTS = 4)] = "SIMILAR_ALREADY_EXISTS");
		})(f || (e.UploadResponse_Status = f = {})),
			t.proto3.util.setEnumType(f, "aiserver.v1.UploadResponse.Status", [
				{ no: 0, name: "STATUS_UNSPECIFIED" },
				{ no: 1, name: "STATUS_SUCCESS" },
				{ no: 2, name: "STATUS_FAILURE" },
				{ no: 3, name: "STATUS_ALREADY_EXISTS" },
				{ no: 4, name: "STATUS_SIMILAR_ALREADY_EXISTS" },
			]);
		class b extends t.Message {
			constructor(v) {
				super(),
					(this.status = s.UNSPECIFIED),
					(this.uploadedPages = []),
					t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UploadedStatus";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "status", kind: "enum", T: t.proto3.getEnumType(s) },
					{
						no: 2,
						name: "uploaded_pages",
						kind: "scalar",
						T: 9,
						repeated: !0,
					},
				]);
			}
			static fromBinary(v, S) {
				return new b().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new b().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new b().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(b, v, S);
			}
		}
		e.$3_ = b;
		var s;
		(function ($) {
			($[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
				($[($.IN_PROGRESS = 1)] = "IN_PROGRESS"),
				($[($.SUCCEEDED = 2)] = "SUCCEEDED"),
				($[($.FAILED = 3)] = "FAILED"),
				($[($.NOT_FOUND = 4)] = "NOT_FOUND");
		})(s || (e.UploadedStatus_Status = s = {})),
			t.proto3.util.setEnumType(s, "aiserver.v1.UploadedStatus.Status", [
				{ no: 0, name: "STATUS_UNSPECIFIED" },
				{ no: 1, name: "STATUS_IN_PROGRESS" },
				{ no: 2, name: "STATUS_SUCCEEDED" },
				{ no: 3, name: "STATUS_FAILED" },
				{ no: 4, name: "STATUS_NOT_FOUND" },
			]);
		class l extends t.Message {
			constructor(v) {
				super(), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpsertDocsRequest";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{
						no: 1,
						name: "upload_status",
						kind: "enum",
						T: t.proto3.getEnumType(w),
						opt: !0,
					},
					{
						no: 2,
						name: "ignore_index_prefix",
						kind: "scalar",
						T: 9,
						opt: !0,
					},
					{ no: 3, name: "doc_id", kind: "scalar", T: 5, opt: !0 },
				]);
			}
			static fromBinary(v, S) {
				return new l().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new l().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new l().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(l, v, S);
			}
		}
		e.$4_ = l;
		class y extends t.Message {
			constructor(v) {
				super(), (this.responses = []), t.proto3.util.initPartial(v, this);
			}
			static {
				this.runtime = t.proto3;
			}
			static {
				this.typeName = "aiserver.v1.UpsertDocsResponse";
			}
			static {
				this.fields = t.proto3.util.newFieldList(() => [
					{ no: 1, name: "responses", kind: "message", T: o, repeated: !0 },
				]);
			}
			static fromBinary(v, S) {
				return new y().fromBinary(v, S);
			}
			static fromJson(v, S) {
				return new y().fromJson(v, S);
			}
			static fromJsonString(v, S) {
				return new y().fromJsonString(v, S);
			}
			static equals(v, S) {
				return t.proto3.util.equals(y, v, S);
			}
		}
		e.$5_ = y;
	},
);
