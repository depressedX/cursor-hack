import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './utils_pb.js';
define(de[642], he([1, 0, 86, 83]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*utils_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Av =
					e.$zv =
					e.$yv =
					e.$xv =
					e.$wv =
					e.$vv =
					e.$uv =
					e.$tv =
						void 0);
			class w extends t.Message {
				constructor(c) {
					super(),
						(this.file = ""),
						(this.startLine = 0),
						(this.endLine = 0),
						(this.codeLines = []),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugLocation";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "scalar", T: 9 },
						{ no: 2, name: "start_line", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line", kind: "scalar", T: 5 },
						{ no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: !0 },
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
			e.$tv = w;
			class E extends t.Message {
				constructor(c) {
					super(),
						(this.locations = []),
						(this.id = ""),
						(this.description = ""),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugReport";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "locations", kind: "message", T: w, repeated: !0 },
						{ no: 2, name: "id", kind: "scalar", T: 9 },
						{ no: 3, name: "description", kind: "scalar", T: 9 },
						{ no: 4, name: "confidence", kind: "scalar", T: 2, opt: !0 },
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
			e.$uv = E;
			class C extends t.Message {
				constructor(c) {
					super(), (this.bugReports = []), t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugReports";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_reports", kind: "message", T: E, repeated: !0 },
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
			e.$vv = C;
			class d extends t.Message {
				constructor(c) {
					super(),
						(this.inBackgroundSubsidized = !1),
						(this.hasTelemetry = !1),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugBotRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "git_diff", kind: "message", T: i.$Cs },
						{ no: 2, name: "model_details", kind: "message", T: i.$Zs },
						{ no: 3, name: "user_instructions", kind: "scalar", T: 9, opt: !0 },
						{
							no: 4,
							name: "bug_detection_guidelines",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 5, name: "iterations", kind: "scalar", T: 5, opt: !0 },
						{
							no: 12,
							name: "unified_context_lines",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 6, name: "in_background_subsidized", kind: "scalar", T: 8 },
						{ no: 7, name: "session_id", kind: "scalar", T: 9, opt: !0 },
						{ no: 8, name: "price_id", kind: "scalar", T: 9, opt: !0 },
						{ no: 9, name: "has_telemetry", kind: "scalar", T: 8 },
						{
							no: 10,
							name: "constrain_to_file",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 11,
							name: "constrain_to_range",
							kind: "message",
							T: m,
							opt: !0,
						},
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
			e.$wv = d;
			class m extends t.Message {
				constructor(c) {
					super(),
						(this.startLine = 0),
						(this.endLineInclusive = 0),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugBotRequest.Range";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line", kind: "scalar", T: 5 },
						{ no: 2, name: "end_line_inclusive", kind: "scalar", T: 5 },
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
			e.$xv = m;
			class r extends t.Message {
				constructor(c) {
					super(),
						(this.seed = ""),
						(this.date = ""),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RunBugBotPromptProps";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "req", kind: "message", T: d },
						{ no: 2, name: "seed", kind: "scalar", T: 9 },
						{ no: 3, name: "date", kind: "scalar", T: 9 },
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
			e.$yv = r;
			class u extends t.Message {
				constructor(c) {
					super(),
						(this.date = ""),
						(this.seed = ""),
						t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotDiscriminatorPromptProps";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "req", kind: "message", T: d },
						{ no: 2, name: "bug", kind: "message", T: E },
						{ no: 3, name: "date", kind: "scalar", T: 9 },
						{ no: 4, name: "seed", kind: "scalar", T: 9 },
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
			e.$zv = u;
			class a extends t.Message {
				constructor(c) {
					super(), (this.isRealBug = !1), t.proto3.util.initPartial(c, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotDiscriminatorTrainingPromptProps";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "props", kind: "message", T: u },
						{ no: 2, name: "is_real_bug", kind: "scalar", T: 8 },
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
			e.$Av = a;
		}),
		