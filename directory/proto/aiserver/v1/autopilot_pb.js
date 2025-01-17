import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[2167], he([1, 0, 86]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Hab =
					e.$Gab =
					e.$Fab =
					e.$Eab =
					e.$Dab =
					e.$Cab =
					e.$Bab =
					e.$Aab =
					e.$zab =
					e.$yab =
					e.$xab =
					e.$wab =
					e.$vab =
					e.$uab =
					e.$tab =
					e.$sab =
					e.$rab =
					e.$qab =
					e.$pab =
					e.$oab =
					e.$nab =
					e.$mab =
					e.$lab =
					e.$kab =
					e.$jab =
					e.$iab =
					e.$hab =
					e.SubAgent =
						void 0);
			var i;
			(function (D) {
				(D[(D.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(D[(D.TERMINAL_AGENT = 1)] = "TERMINAL_AGENT"),
					(D[(D.WEB_AGENT = 2)] = "WEB_AGENT"),
					(D[(D.PROGRAMMER_AGENT = 3)] = "PROGRAMMER_AGENT");
			})(i || (e.SubAgent = i = {})),
				t.proto3.util.setEnumType(i, "aiserver.v1.SubAgent", [
					{ no: 0, name: "SUB_AGENT_UNSPECIFIED" },
					{ no: 1, name: "SUB_AGENT_TERMINAL_AGENT" },
					{ no: 2, name: "SUB_AGENT_WEB_AGENT" },
					{ no: 3, name: "SUB_AGENT_PROGRAMMER_AGENT" },
				]);
			class w extends t.Message {
				constructor(M) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "action", kind: "message", T: E, oneof: "response" },
						{ no: 2, name: "done", kind: "message", T, oneof: "response" },
						{
							no: 3,
							name: "stream_thought",
							kind: "message",
							T: L,
							oneof: "response",
						},
						{
							no: 4,
							name: "start_sub_agent",
							kind: "message",
							T: k,
							oneof: "response",
						},
						{
							no: 5,
							name: "done_sub_agent",
							kind: "message",
							T: P,
							oneof: "response",
						},
						{
							no: 10,
							name: "raw_response",
							kind: "message",
							T: C,
							oneof: "response",
						},
						{
							no: 11,
							name: "paused",
							kind: "message",
							T: $,
							oneof: "response",
						},
					]);
				}
				static fromBinary(M, N) {
					return new w().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new w().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new w().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(w, M, N);
				}
			}
			e.$hab = w;
			class E extends t.Message {
				constructor(M) {
					super(),
						(this.response = { case: void 0 }),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotActionResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "terminal_command",
							kind: "message",
							T: y,
							oneof: "response",
						},
						{
							no: 2,
							name: "web_search",
							kind: "message",
							T: s,
							oneof: "response",
						},
						{
							no: 3,
							name: "ask_user",
							kind: "message",
							T: f,
							oneof: "response",
						},
						{
							no: 4,
							name: "ask_oracle",
							kind: "message",
							T: p,
							oneof: "response",
						},
						{
							no: 5,
							name: "file_edit",
							kind: "message",
							T: n,
							oneof: "response",
						},
						{
							no: 6,
							name: "open_file",
							kind: "message",
							T: h,
							oneof: "response",
						},
					]);
				}
				static fromBinary(M, N) {
					return new E().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new E().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new E().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(E, M, N);
				}
			}
			e.$iab = E;
			class C extends t.Message {
				constructor(M) {
					super(), (this.response = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RawResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "response", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new C().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new C().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new C().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(C, M, N);
				}
			}
			e.$jab = C;
			class d extends t.Message {
				constructor(M) {
					super(),
						(this.requestId = ""),
						(this.workingDirectory = ""),
						(this.currentDirectoryFiles = []),
						(this.relatedFiles = []),
						(this.request = { case: void 0 }),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 7, name: "working_directory", kind: "scalar", T: 9 },
						{
							no: 8,
							name: "current_directory_files",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 9,
							name: "related_files",
							kind: "message",
							T: m,
							repeated: !0,
						},
						{ no: 4, name: "action", kind: "message", T: r, oneof: "request" },
						{ no: 5, name: "start", kind: "message", T: S, oneof: "request" },
						{ no: 11, name: "pause", kind: "message", T: v, oneof: "request" },
						{ no: 6, name: "done", kind: "message", T, oneof: "request" },
						{
							no: 12,
							name: "continue",
							kind: "message",
							T: I,
							oneof: "request",
						},
						{ no: 10, name: "error", kind: "message", T: u, oneof: "request" },
					]);
				}
				static fromBinary(M, N) {
					return new d().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new d().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new d().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(d, M, N);
				}
			}
			e.$kab = d;
			class m extends t.Message {
				constructor(M) {
					super(),
						(this.absolutePath = ""),
						(this.content = ""),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotFile";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "absolute_path", kind: "scalar", T: 9 },
						{ no: 2, name: "content", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new m().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new m().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new m().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(m, M, N);
				}
			}
			e.$lab = m;
			class r extends t.Message {
				constructor(M) {
					super(),
						(this.type = { case: void 0 }),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotActionRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "terminal_command",
							kind: "message",
							T: l,
							oneof: "type",
						},
						{ no: 2, name: "web_search", kind: "message", T: b, oneof: "type" },
						{ no: 3, name: "ask_user", kind: "message", T: o, oneof: "type" },
						{ no: 4, name: "ask_oracle", kind: "message", T: g, oneof: "type" },
						{ no: 5, name: "file_edit", kind: "message", T: c, oneof: "type" },
						{ no: 6, name: "open_file", kind: "message", T: a, oneof: "type" },
					]);
				}
				static fromBinary(M, N) {
					return new r().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new r().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new r().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(r, M, N);
				}
			}
			e.$mab = r;
			class u extends t.Message {
				constructor(M) {
					super(), (this.error = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotError";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "error", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new u().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new u().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new u().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(u, M, N);
				}
			}
			e.$nab = u;
			class a extends t.Message {
				constructor(M) {
					super(),
						(this.content = ""),
						(this.absolutePath = ""),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.OpenFileRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "content", kind: "scalar", T: 9 },
						{ no: 1, name: "absolute_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new a().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new a().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new a().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(a, M, N);
				}
			}
			e.$oab = a;
			class h extends t.Message {
				constructor(M) {
					super(), (this.absolutePath = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.OpenFileResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "absolute_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new h().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new h().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new h().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(h, M, N);
				}
			}
			e.$pab = h;
			class c extends t.Message {
				constructor(M) {
					super(), (this.diff = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileEditRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "diff", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new c().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new c().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new c().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(c, M, N);
				}
			}
			e.$qab = c;
			class n extends t.Message {
				constructor(M) {
					super(),
						(this.absolutePath = ""),
						(this.query = ""),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FileEditResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "absolute_path", kind: "scalar", T: 9 },
						{ no: 2, name: "query", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new n().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new n().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new n().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(n, M, N);
				}
			}
			e.$rab = n;
			class g extends t.Message {
				constructor(M) {
					super(), (this.answer = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AskOracleRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "answer", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new g().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new g().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new g().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(g, M, N);
				}
			}
			e.$sab = g;
			class p extends t.Message {
				constructor(M) {
					super(),
						(this.question = ""),
						(this.originalSubAgent = i.UNSPECIFIED),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AskOracleResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "question", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "original_sub_agent",
							kind: "enum",
							T: t.proto3.getEnumType(i),
						},
					]);
				}
				static fromBinary(M, N) {
					return new p().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new p().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new p().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(p, M, N);
				}
			}
			e.$tab = p;
			class o extends t.Message {
				constructor(M) {
					super(), (this.answer = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AskUserRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "answer", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new o().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new o().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new o().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(o, M, N);
				}
			}
			e.$uab = o;
			class f extends t.Message {
				constructor(M) {
					super(), (this.question = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AskUserResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "question", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new f().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new f().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new f().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(f, M, N);
				}
			}
			e.$vab = f;
			class b extends t.Message {
				constructor(M) {
					super(), (this.query = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.WebSearchRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "query", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new b().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new b().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new b().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(b, M, N);
				}
			}
			e.$wab = b;
			class s extends t.Message {
				constructor(M) {
					super(), (this.answer = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.WebSearchResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "answer", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new s().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new s().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new s().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(s, M, N);
				}
			}
			e.$xab = s;
			class l extends t.Message {
				constructor(M) {
					super(), (this.response = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.TerminalCommandRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "response", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new l().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new l().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new l().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(l, M, N);
				}
			}
			e.$yab = l;
			class y extends t.Message {
				constructor(M) {
					super(), (this.command = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.TerminalCommandResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "command", kind: "scalar", T: 9 },
						{ no: 2, name: "timeout", kind: "scalar", T: 1, opt: !0 },
						{ no: 3, name: "is_run_server", kind: "scalar", T: 8, opt: !0 },
					]);
				}
				static fromBinary(M, N) {
					return new y().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new y().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new y().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(y, M, N);
				}
			}
			e.$zab = y;
			class $ extends t.Message {
				constructor(M) {
					super(), (this.response = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotPaused";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "response", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new $().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new $().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new $().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals($, M, N);
				}
			}
			e.$Aab = $;
			class v extends t.Message {
				constructor(M) {
					super(), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotPause";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(M, N) {
					return new v().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new v().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new v().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(v, M, N);
				}
			}
			e.$Bab = v;
			class S extends t.Message {
				constructor(M) {
					super(), (this.task = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotStart";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "task", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new S().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new S().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new S().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(S, M, N);
				}
			}
			e.$Cab = S;
			class I extends t.Message {
				constructor(M) {
					super(), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotContinue";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(M, N) {
					return new I().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new I().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new I().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(I, M, N);
				}
			}
			e.$Dab = I;
			class T extends t.Message {
				constructor(M) {
					super(), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotDone";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(M, N) {
					return new T().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new T().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new T().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(T, M, N);
				}
			}
			e.$Eab = T;
			class P extends t.Message {
				constructor(M) {
					super(), (this.response = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotDoneSubAgent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "response", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new P().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new P().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new P().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(P, M, N);
				}
			}
			e.$Fab = P;
			class k extends t.Message {
				constructor(M) {
					super(),
						(this.task = ""),
						(this.subAgent = i.UNSPECIFIED),
						t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotStartSubAgent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "task", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "sub_agent",
							kind: "enum",
							T: t.proto3.getEnumType(i),
						},
					]);
				}
				static fromBinary(M, N) {
					return new k().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new k().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new k().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(k, M, N);
				}
			}
			e.$Gab = k;
			class L extends t.Message {
				constructor(M) {
					super(), (this.thought = ""), t.proto3.util.initPartial(M, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AutopilotStreamThought";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "thought", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(M, N) {
					return new L().fromBinary(M, N);
				}
				static fromJson(M, N) {
					return new L().fromJson(M, N);
				}
				static fromJsonString(M, N) {
					return new L().fromJsonString(M, N);
				}
				static equals(M, N) {
					return t.proto3.util.equals(L, M, N);
				}
			}
			e.$Hab = L;
		}),
		