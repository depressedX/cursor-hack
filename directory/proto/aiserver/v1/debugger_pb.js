import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
import './chat_pb.js';
import './utils_pb.js';
define(de[2174], he([1, 0, 86, 126, 83]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/,
 i /*chat_pb*/,
 w /*utils_pb*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4$ = e.$3$ = e.$2$ = e.$1$ = e.$Z$ = e.$Y$ = void 0);
			class E extends t.Message {
				constructor(h) {
					super(), (this.files = []), t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileFilterRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "files", kind: "message", T: i.$TA, repeated: !0 },
						{ no: 2, name: "bug_description", kind: "message", T: i.$SA },
					]);
				}
				static fromBinary(h, c) {
					return new E().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new E().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new E().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(E, h, c);
				}
			}
			e.$Y$ = E;
			class C extends t.Message {
				constructor(h) {
					super(),
						(this.filePath = ""),
						(this.fileScore = 0),
						t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileFilterResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file_path", kind: "scalar", T: 9 },
						{ no: 2, name: "file_score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(h, c) {
					return new C().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new C().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new C().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(C, h, c);
				}
			}
			e.$Z$ = C;
			class d extends t.Message {
				constructor(h) {
					super(), (this.commits = []), t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GitFilterRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "commits", kind: "message", T: i.$$A, repeated: !0 },
						{ no: 2, name: "bug_description", kind: "message", T: i.$SA },
					]);
				}
				static fromBinary(h, c) {
					return new d().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new d().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new d().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(d, h, c);
				}
			}
			e.$1$ = d;
			class m extends t.Message {
				constructor(h) {
					super(),
						(this.relevantCommit = ""),
						(this.commitScore = 0),
						t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.GitFilterResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relevant_commit", kind: "scalar", T: 9 },
						{ no: 2, name: "commit_score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(h, c) {
					return new m().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new m().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new m().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(m, h, c);
				}
			}
			e.$2$ = m;
			class r extends t.Message {
				constructor(h) {
					super(),
						(this.relevantCommits = []),
						t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugAnalysisRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "relevant_commits",
							kind: "message",
							T: i.$$A,
							repeated: !0,
						},
						{
							no: 2,
							name: "bug_description_and_file_attachments",
							kind: "message",
							T: i.$SA,
						},
						{ no: 3, name: "model_details", kind: "message", T: w.$Zs },
					]);
				}
				static fromBinary(h, c) {
					return new r().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new r().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new r().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(r, h, c);
				}
			}
			e.$3$ = r;
			class u extends t.Message {
				constructor(h) {
					super(),
						(this.reasoning = ""),
						(this.bugDescription = ""),
						t.proto3.util.initPartial(h, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugAnalysisResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "reasoning", kind: "scalar", T: 9 },
						{ no: 2, name: "bug_description", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(h, c) {
					return new u().fromBinary(h, c);
				}
				static fromJson(h, c) {
					return new u().fromJson(h, c);
				}
				static fromJsonString(h, c) {
					return new u().fromJsonString(h, c);
				}
				static equals(h, c) {
					return t.proto3.util.equals(u, h, c);
				}
			}
			e.$4$ = u;
		}),
		