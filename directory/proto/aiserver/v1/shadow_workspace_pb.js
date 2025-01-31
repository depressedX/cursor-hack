import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[454], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ax =
					e.$zx =
					e.$yx =
					e.$xx =
					e.$wx =
					e.$vx =
					e.$ux =
					e.$tx =
					e.$sx =
					e.$rx =
						void 0);
			class i extends t.Message {
				constructor(n) {
					super(), t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ShadowHealthCheckRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(n, g) {
					return new i().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new i().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new i().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(i, n, g);
				}
			}
			e.$rx = i;
			class w extends t.Message {
				constructor(n) {
					super(), t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ShadowHealthCheckResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(n, g) {
					return new w().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new w().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new w().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(w, n, g);
				}
			}
			e.$sx = w;
			class E extends t.Message {
				constructor(n) {
					super(),
						(this.files = []),
						(this.includeQuickFixes = !1),
						(this.doNotUseInProdNewFilesShouldBeTemporarilyCreatedForIncreasedAccuracy =
							!1),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "files", kind: "message", T: C, repeated: !0 },
						{ no: 2, name: "include_quick_fixes", kind: "scalar", T: 8 },
						{
							no: 3,
							name: "do_not_use_in_prod_new_files_should_be_temporarily_created_for_increased_accuracy",
							kind: "scalar",
							T: 8,
						},
					]);
				}
				static fromBinary(n, g) {
					return new E().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new E().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new E().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(E, n, g);
				}
			}
			e.$tx = E;
			class C extends t.Message {
				constructor(n) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.initialContent = ""),
						(this.finalContent = ""),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeRequest.File";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "initial_content", kind: "scalar", T: 9 },
						{ no: 3, name: "final_content", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "get_all_lints_not_just_delta_lints_for_ranges_in_final_model",
							kind: "message",
							T: d,
							opt: !0,
						},
					]);
				}
				static fromBinary(n, g) {
					return new C().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new C().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new C().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(C, n, g);
				}
			}
			e.$ux = C;
			class d extends t.Message {
				constructor(n) {
					super(), (this.ranges = []), t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.GetLintsForChangeRequest.File.RangeCollection";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "ranges", kind: "message", T: m, repeated: !0 },
					]);
				}
				static fromBinary(n, g) {
					return new d().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new d().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new d().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(d, n, g);
				}
			}
			e.$vx = d;
			class m extends t.Message {
				constructor(n) {
					super(),
						(this.startLineNumber = 0),
						(this.startColumn = 0),
						(this.endLineNumber = 0),
						(this.endColumn = 0),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeRequest.File.IRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "end_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(n, g) {
					return new m().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new m().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new m().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(m, n, g);
				}
			}
			e.$wx = m;
			class r extends t.Message {
				constructor(n) {
					super(), (this.lints = []), t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "lints", kind: "message", T: u, repeated: !0 },
					]);
				}
				static fromBinary(n, g) {
					return new r().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new r().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new r().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(r, n, g);
				}
			}
			e.$xx = r;
			class u extends t.Message {
				constructor(n) {
					super(),
						(this.message = ""),
						(this.severity = ""),
						(this.relativeWorkspacePath = ""),
						(this.startLineNumberOneIndexed = 0),
						(this.startColumnOneIndexed = 0),
						(this.endLineNumberInclusiveOneIndexed = 0),
						(this.endColumnOneIndexed = 0),
						(this.quickFixes = []),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeResponse.Lint";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "severity", kind: "scalar", T: 9 },
						{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{
							no: 4,
							name: "start_line_number_one_indexed",
							kind: "scalar",
							T: 5,
						},
						{ no: 5, name: "start_column_one_indexed", kind: "scalar", T: 5 },
						{
							no: 6,
							name: "end_line_number_inclusive_one_indexed",
							kind: "scalar",
							T: 5,
						},
						{ no: 7, name: "end_column_one_indexed", kind: "scalar", T: 5 },
						{ no: 9, name: "quick_fixes", kind: "message", T: a, repeated: !0 },
					]);
				}
				static fromBinary(n, g) {
					return new u().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new u().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new u().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(u, n, g);
				}
			}
			e.$yx = u;
			class a extends t.Message {
				constructor(n) {
					super(),
						(this.message = ""),
						(this.kind = ""),
						(this.isPreferred = !1),
						(this.edits = []),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "message", kind: "scalar", T: 9 },
						{ no: 2, name: "kind", kind: "scalar", T: 9 },
						{ no: 3, name: "is_preferred", kind: "scalar", T: 8 },
						{ no: 4, name: "edits", kind: "message", T: h, repeated: !0 },
					]);
				}
				static fromBinary(n, g) {
					return new a().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new a().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new a().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(a, n, g);
				}
			}
			e.$zx = a;
			class h extends t.Message {
				constructor(n) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.text = ""),
						(this.startLineNumberOneIndexed = 0),
						(this.startColumnOneIndexed = 0),
						(this.endLineNumberInclusiveOneIndexed = 0),
						(this.endColumnOneIndexed = 0),
						t.proto3.util.initPartial(n, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.GetLintsForChangeResponse.Lint.QuickFix.Edit";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "text", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "start_line_number_one_indexed",
							kind: "scalar",
							T: 5,
						},
						{ no: 4, name: "start_column_one_indexed", kind: "scalar", T: 5 },
						{
							no: 5,
							name: "end_line_number_inclusive_one_indexed",
							kind: "scalar",
							T: 5,
						},
						{ no: 6, name: "end_column_one_indexed", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(n, g) {
					return new h().fromBinary(n, g);
				}
				static fromJson(n, g) {
					return new h().fromJson(n, g);
				}
				static fromJsonString(n, g) {
					return new h().fromJsonString(n, g);
				}
				static equals(n, g) {
					return t.proto3.util.equals(h, n, g);
				}
			}
			e.$Ax = h;
		})
