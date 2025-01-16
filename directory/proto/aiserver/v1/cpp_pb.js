define(de[367], he([1, 0, 86, 83, 642]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CppTimelineEvent_Change_Status =
					e.$qx =
					e.$px =
					e.$ox =
					e.$nx =
					e.$mx =
					e.$lx =
					e.$kx =
					e.$jx =
					e.$ix =
					e.$hx =
					e.$gx =
					e.$fx =
					e.$ex =
					e.$dx =
					e.$cx =
					e.EditHistoryAppendChangesRequest_PrivacyModeStatus =
					e.$bx =
					e.$ax =
					e.$_w =
					e.$$w =
					e.$0w =
					e.$9w =
					e.$8w =
					e.$7w =
					e.$6w =
					e.$5w =
					e.$4w =
					e.$3w =
					e.$2w =
					e.$1w =
					e.$Zw =
					e.$Yw =
					e.$Xw =
					e.$Ww =
					e.$Vw =
					e.$Uw =
					e.$Tw =
					e.$Sw =
					e.$Rw =
					e.AiRequestEvent_RequestType =
					e.$Qw =
					e.$Pw =
					e.$Ow =
					e.$Nw =
					e.$Mw =
					e.$Lw =
					e.$Kw =
					e.$Jw =
					e.$Iw =
					e.$Hw =
					e.$Gw =
					e.$Fw =
					e.$Ew =
					e.BugBotEvent_BackgroundIntervalInterruptedReason =
					e.$Dw =
					e.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic =
					e.$Cw =
					e.$Bw =
					e.$Aw =
					e.$zw =
					e.$yw =
					e.$xw =
					e.$ww =
					e.$vw =
					e.$uw =
					e.$tw =
					e.$sw =
					e.$rw =
					e.$qw =
					e.$pw =
					e.$ow =
					e.$nw =
					e.$mw =
					e.$lw =
					e.$kw =
					e.$jw =
					e.$iw =
					e.$hw =
					e.$gw =
					e.$fw =
					e.$ew =
					e.$dw =
					e.$cw =
					e.$bw =
					e.$aw =
					e.$_v =
					e.$$v =
					e.$0v =
					e.$9v =
					e.CppStoppedTrackingModelEvent_StoppedTrackingModelReason =
					e.$8v =
					e.$7v =
					e.$6v =
					e.$5v =
					e.$4v =
					e.$3v =
					e.$2v =
					e.CursorPrediction_CursorPredictionSource =
					e.$1v =
					e.$Zv =
					e.$Yv =
					e.$Xv =
					e.$Wv =
					e.$Vv =
					e.$Uv =
					e.$Tv =
					e.$Sv =
					e.$Rv =
					e.$Qv =
					e.$Pv =
					e.$Ov =
					e.$Nv =
					e.$Mv =
					e.$Lv =
					e.$Kv =
					e.MarkCppRequest_CppResponseTypes =
					e.$Jv =
					e.$Iv =
					e.$Hv =
					e.$Gv =
					e.$Fv =
					e.$Ev =
					e.$Dv =
					e.$Cv =
					e.$Bv =
					e.CppSource =
					e.CppFate =
						void 0);
			var E;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.ACCEPT = 1)] = "ACCEPT"),
					(Wt[(Wt.REJECT = 2)] = "REJECT"),
					(Wt[(Wt.PARTIAL_ACCEPT = 3)] = "PARTIAL_ACCEPT");
			})(E || (e.CppFate = E = {})),
				t.proto3.util.setEnumType(E, "aiserver.v1.CppFate", [
					{ no: 0, name: "CPP_FATE_UNSPECIFIED" },
					{ no: 1, name: "CPP_FATE_ACCEPT" },
					{ no: 2, name: "CPP_FATE_REJECT" },
					{ no: 3, name: "CPP_FATE_PARTIAL_ACCEPT" },
				]);
			var C;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.LINE_CHANGE = 1)] = "LINE_CHANGE"),
					(Wt[(Wt.TYPING = 2)] = "TYPING"),
					(Wt[(Wt.OPTION_HOLD = 3)] = "OPTION_HOLD"),
					(Wt[(Wt.LINTER_ERRORS = 4)] = "LINTER_ERRORS"),
					(Wt[(Wt.PARAMETER_HINTS = 5)] = "PARAMETER_HINTS"),
					(Wt[(Wt.CURSOR_PREDICTION = 6)] = "CURSOR_PREDICTION"),
					(Wt[(Wt.MANUAL_TRIGGER = 7)] = "MANUAL_TRIGGER"),
					(Wt[(Wt.EDITOR_CHANGE = 8)] = "EDITOR_CHANGE");
			})(C || (e.CppSource = C = {})),
				t.proto3.util.setEnumType(C, "aiserver.v1.CppSource", [
					{ no: 0, name: "CPP_SOURCE_UNSPECIFIED" },
					{ no: 1, name: "CPP_SOURCE_LINE_CHANGE" },
					{ no: 2, name: "CPP_SOURCE_TYPING" },
					{ no: 3, name: "CPP_SOURCE_OPTION_HOLD" },
					{ no: 4, name: "CPP_SOURCE_LINTER_ERRORS" },
					{ no: 5, name: "CPP_SOURCE_PARAMETER_HINTS" },
					{ no: 6, name: "CPP_SOURCE_CURSOR_PREDICTION" },
					{ no: 7, name: "CPP_SOURCE_MANUAL_TRIGGER" },
					{ no: 8, name: "CPP_SOURCE_EDITOR_CHANGE" },
				]);
			class d extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.performanceNowTime = 0),
						(this.fate = E.UNSPECIFIED),
						(this.extension = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RecordCppFateRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 2, name: "performance_now_time", kind: "scalar", T: 2 },
						{ no: 3, name: "fate", kind: "enum", T: t.proto3.getEnumType(E) },
						{ no: 4, name: "extension", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new d().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new d().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new d().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(d, tt, at);
				}
			}
			e.$Bv = d;
			class m extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RecordCppFateResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new m().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new m().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new m().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(m, tt, at);
				}
			}
			e.$Cv = m;
			class r extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AvailableCppModelsRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new r().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new r().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new r().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(r, tt, at);
				}
			}
			e.$Dv = r;
			class u extends t.Message {
				constructor(tt) {
					super(), (this.models = []), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AvailableCppModelsResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "models", kind: "scalar", T: 9, repeated: !0 },
						{ no: 2, name: "default_model", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new u().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new u().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new u().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(u, tt, at);
				}
			}
			e.$Ev = u;
			class a extends t.Message {
				constructor(tt) {
					super(),
						(this.contextItems = []),
						(this.fileDiffHistories = []),
						(this.mergedDiffHistories = []),
						(this.blockDiffPatches = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamHoldCppRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "current_file", kind: "message", T: i.$Ws },
						{
							no: 4,
							name: "linter_errors",
							kind: "message",
							T: i.$4s,
							opt: !0,
						},
						{
							no: 13,
							name: "context_items",
							kind: "message",
							T: n,
							repeated: !0,
						},
						{
							no: 7,
							name: "file_diff_histories",
							kind: "message",
							T: c,
							repeated: !0,
						},
						{
							no: 8,
							name: "merged_diff_histories",
							kind: "message",
							T: c,
							repeated: !0,
						},
						{
							no: 9,
							name: "block_diff_patches",
							kind: "message",
							T: Mt,
							repeated: !0,
						},
						{ no: 10, name: "model_details", kind: "message", T: i.$Zs },
					]);
				}
				static fromBinary(tt, at) {
					return new a().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new a().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new a().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(a, tt, at);
				}
			}
			e.$Fv = a;
			class h extends t.Message {
				constructor(tt) {
					super(), (this.text = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamHoldCppResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new h().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new h().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new h().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(h, tt, at);
				}
			}
			e.$Gv = h;
			class c extends t.Message {
				constructor(tt) {
					super(),
						(this.fileName = ""),
						(this.diffHistory = []),
						(this.diffHistoryTimestamps = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppFileDiffHistory";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file_name", kind: "scalar", T: 9 },
						{ no: 2, name: "diff_history", kind: "scalar", T: 9, repeated: !0 },
						{
							no: 3,
							name: "diff_history_timestamps",
							kind: "scalar",
							T: 1,
							repeated: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new c().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new c().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new c().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(c, tt, at);
				}
			}
			e.$Hv = c;
			class n extends t.Message {
				constructor(tt) {
					super(),
						(this.contents = ""),
						(this.relativeWorkspacePath = ""),
						(this.score = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppContextItem";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "contents", kind: "scalar", T: 9 },
						{ no: 2, name: "symbol", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 4, name: "score", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(tt, at) {
					return new n().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new n().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new n().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(n, tt, at);
				}
			}
			e.$Iv = n;
			class g extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.sessionId = ""),
						(this.responseType = p.UNSPECIFIED),
						(this.modelCodeName = ""),
						(this.modelOpenaiName = ""),
						(this.currentPerformanceNowTime = 0),
						(this.sessionPerformanceOriginTime = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MarkCppRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 2, name: "session_id", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "response_type",
							kind: "enum",
							T: t.proto3.getEnumType(p),
						},
						{
							no: 4,
							name: "desired_completion",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 5, name: "range_transformation", kind: "message", T: o },
						{ no: 10, name: "model_code_name", kind: "scalar", T: 9 },
						{ no: 11, name: "model_openai_name", kind: "scalar", T: 9 },
						{
							no: 12,
							name: "current_performance_now_time",
							kind: "scalar",
							T: 1,
						},
						{
							no: 13,
							name: "session_performance_origin_time",
							kind: "scalar",
							T: 1,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new g().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new g().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new g().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(g, tt, at);
				}
			}
			e.$Jv = g;
			var p;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.GOOD = 1)] = "GOOD"),
					(Wt[(Wt.BAD = 2)] = "BAD"),
					(Wt[(Wt.BAD_CONTEXT = 3)] = "BAD_CONTEXT"),
					(Wt[(Wt.BAD_REASONING = 4)] = "BAD_REASONING"),
					(Wt[(Wt.BAD_STUPID_MISTAKE = 5)] = "BAD_STUPID_MISTAKE"),
					(Wt[(Wt.BAD_FORMATTING = 6)] = "BAD_FORMATTING"),
					(Wt[(Wt.BAD_RANGE = 7)] = "BAD_RANGE"),
					(Wt[(Wt.GOOD_PREDICTION = 8)] = "GOOD_PREDICTION"),
					(Wt[(Wt.BAD_FALSE_POSITIVE_TRIGGER = 9)] =
						"BAD_FALSE_POSITIVE_TRIGGER"),
					(Wt[(Wt.BAD_FALSE_NEGATIVE_TRIGGER = 10)] =
						"BAD_FALSE_NEGATIVE_TRIGGER");
			})(p || (e.MarkCppRequest_CppResponseTypes = p = {})),
				t.proto3.util.setEnumType(
					p,
					"aiserver.v1.MarkCppRequest.CppResponseTypes",
					[
						{ no: 0, name: "CPP_RESPONSE_TYPES_UNSPECIFIED" },
						{ no: 1, name: "CPP_RESPONSE_TYPES_GOOD" },
						{ no: 2, name: "CPP_RESPONSE_TYPES_BAD" },
						{ no: 3, name: "CPP_RESPONSE_TYPES_BAD_CONTEXT" },
						{ no: 4, name: "CPP_RESPONSE_TYPES_BAD_REASONING" },
						{ no: 5, name: "CPP_RESPONSE_TYPES_BAD_STUPID_MISTAKE" },
						{ no: 6, name: "CPP_RESPONSE_TYPES_BAD_FORMATTING" },
						{ no: 7, name: "CPP_RESPONSE_TYPES_BAD_RANGE" },
						{ no: 8, name: "CPP_RESPONSE_TYPES_GOOD_PREDICTION" },
						{ no: 9, name: "CPP_RESPONSE_TYPES_BAD_FALSE_POSITIVE_TRIGGER" },
						{ no: 10, name: "CPP_RESPONSE_TYPES_BAD_FALSE_NEGATIVE_TRIGGER" },
					],
				);
			class o extends t.Message {
				constructor(tt) {
					super(),
						(this.startLineNumber = 0),
						(this.endLineNumber = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MarkCppRequest.RangeTransformation";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "end_line_number", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new o().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new o().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new o().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(o, tt, at);
				}
			}
			e.$Kv = o;
			class f extends t.Message {
				constructor(tt) {
					super(), (this.label = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppParameterHint";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "label", kind: "scalar", T: 9 },
						{ no: 2, name: "documentation", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new f().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new f().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new f().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(f, tt, at);
				}
			}
			e.$Lv = f;
			class b extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MarkCppResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new b().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new b().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new b().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(b, tt, at);
				}
			}
			e.$Mv = b;
			class s extends t.Message {
				constructor(tt) {
					super(),
						(this.startLineNumber = 0),
						(this.startColumn = 0),
						(this.endLineNumber = 0),
						(this.endColumn = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.IRange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "end_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new s().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new s().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new s().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(s, tt, at);
				}
			}
			e.$Nv = s;
			class l extends t.Message {
				constructor(tt) {
					super(),
						(this.lineNumberOneIndexed = 0),
						(this.columnOneIndexed = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.OneIndexedPosition";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 },
						{ no: 2, name: "column_one_indexed", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new l().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new l().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new l().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(l, tt, at);
				}
			}
			e.$Ov = l;
			class y extends t.Message {
				constructor(tt) {
					super(),
						(this.selectionStartLineNumber = 0),
						(this.selectionStartColumn = 0),
						(this.positionLineNumber = 0),
						(this.positionColumn = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CursorSelection";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "selection_start_line_number",
							kind: "scalar",
							T: 5,
						},
						{ no: 2, name: "selection_start_column", kind: "scalar", T: 5 },
						{ no: 3, name: "position_line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "position_column", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new y().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new y().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new y().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(y, tt, at);
				}
			}
			e.$Pv = y;
			class $ extends t.Message {
				constructor(tt) {
					super(),
						(this.text = ""),
						(this.modelIsAttachedToEditor = !1),
						(this.modelIsAttachedToTheActiveEditor = !1),
						(this.cursorSelections = []),
						(this.modelVersionAtMetadataRetrievalTime = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ModelChange";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: s },
						{ no: 3, name: "final_model_hash", kind: "scalar", T: 9, opt: !0 },
						{
							no: 4,
							name: "model_version_immediately_after_this_change",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 5,
							name: "performance_now_timestamp",
							kind: "scalar",
							T: 1,
							opt: !0,
						},
						{ no: 7, name: "is_undoing", kind: "scalar", T: 8, opt: !0 },
						{ no: 8, name: "is_redoing", kind: "scalar", T: 8, opt: !0 },
						{
							no: 9,
							name: "model_is_attached_to_editor",
							kind: "scalar",
							T: 8,
						},
						{
							no: 10,
							name: "model_is_attached_to_the_active_editor",
							kind: "scalar",
							T: 8,
						},
						{
							no: 11,
							name: "cursor_selections",
							kind: "message",
							T: y,
							repeated: !0,
						},
						{
							no: 12,
							name: "model_version_at_metadata_retrieval_time",
							kind: "scalar",
							T: 5,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new $().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new $().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new $().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals($, tt, at);
				}
			}
			e.$Qv = $;
			class v extends t.Message {
				constructor(tt) {
					super(),
						(this.suggestionId = 0),
						(this.suggestionText = ""),
						(this.modelVersionWhenTheChangeIsFirstIndicatedToTheUserButNotShownInTheModel = 0),
						(this.originalText = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CurrentlyShownCppSuggestion";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "suggestion_id", kind: "scalar", T: 5 },
						{ no: 2, name: "suggestion_text", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "model_version_when_the_change_is_first_indicated_to_the_user_but_not_shown_in_the_model",
							kind: "scalar",
							T: 5,
						},
						{
							no: 4,
							name: "range_of_suggestion_in_current_model",
							kind: "message",
							T: s,
							opt: !0,
						},
						{ no: 5, name: "original_text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new v().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new v().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new v().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(v, tt, at);
				}
			}
			e.$Rv = v;
			class S extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppAcceptEventNew";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: v },
						{ no: 7, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new S().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new S().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new S().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(S, tt, at);
				}
			}
			e.$Sv = S;
			class I extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.suggestionText = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RecoverableCppData";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 2, name: "suggestion_text", kind: "scalar", T: 9 },
						{ no: 3, name: "suggestion_range", kind: "message", T: s },
						{ no: 4, name: "position", kind: "message", T: l },
					]);
				}
				static fromBinary(tt, at) {
					return new I().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new I().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new I().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(I, tt, at);
				}
			}
			e.$Tv = I;
			class T extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppSuggestEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: v },
						{ no: 2, name: "point_in_time_model", kind: "message", T: z },
						{ no: 3, name: "recoverable_cpp_data", kind: "message", T: I },
					]);
				}
				static fromBinary(tt, at) {
					return new T().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new T().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new T().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(T, tt, at);
				}
			}
			e.$Uv = T;
			class P extends t.Message {
				constructor(tt) {
					super(),
						(this.generationUuid = ""),
						(this.modelVersion = 0),
						(this.source = C.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTriggerEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "generation_uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "model_version", kind: "scalar", T: 5 },
						{ no: 3, name: "cursor_position", kind: "message", T: l },
						{ no: 4, name: "point_in_time_model", kind: "message", T: z },
						{ no: 5, name: "source", kind: "enum", T: t.proto3.getEnumType(C) },
					]);
				}
				static fromBinary(tt, at) {
					return new P().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new P().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new P().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(P, tt, at);
				}
			}
			e.$Vv = P;
			class k extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.FinishedCppGenerationEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{ no: 2, name: "recoverable_cpp_data", kind: "message", T: I },
					]);
				}
				static fromBinary(tt, at) {
					return new k().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new k().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new k().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(k, tt, at);
				}
			}
			e.$Wv = k;
			class L extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppRejectEventNew";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: v },
						{ no: 7, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new L().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new L().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new L().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(L, tt, at);
				}
			}
			e.$Xv = L;
			class D extends t.Message {
				constructor(tt) {
					super(), (this.text = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.Edit";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: s },
					]);
				}
				static fromBinary(tt, at) {
					return new D().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new D().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new D().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(D, tt, at);
				}
			}
			e.$Yv = D;
			class M extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppPartialAcceptEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: v },
						{ no: 2, name: "edit", kind: "message", T: D },
						{ no: 3, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new M().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new M().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new M().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(M, tt, at);
				}
			}
			e.$Zv = M;
			class N extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.predictionId = 0),
						(this.lineNumber = 0),
						(this.source = A.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CursorPrediction";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 2, name: "prediction_id", kind: "scalar", T: 5 },
						{ no: 3, name: "line_number", kind: "scalar", T: 5 },
						{ no: 4, name: "source", kind: "enum", T: t.proto3.getEnumType(A) },
					]);
				}
				static fromBinary(tt, at) {
					return new N().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new N().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new N().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(N, tt, at);
				}
			}
			e.$1v = N;
			var A;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.ALWAYS_ON = 1)] = "ALWAYS_ON"),
					(Wt[(Wt.ACCEPT = 2)] = "ACCEPT"),
					(Wt[(Wt.UNDO = 3)] = "UNDO"),
					(Wt[(Wt.EDITOR_CHANGE = 4)] = "EDITOR_CHANGE");
			})(A || (e.CursorPrediction_CursorPredictionSource = A = {})),
				t.proto3.util.setEnumType(
					A,
					"aiserver.v1.CursorPrediction.CursorPredictionSource",
					[
						{ no: 0, name: "CURSOR_PREDICTION_SOURCE_UNSPECIFIED" },
						{ no: 1, name: "CURSOR_PREDICTION_SOURCE_ALWAYS_ON" },
						{ no: 2, name: "CURSOR_PREDICTION_SOURCE_ACCEPT" },
						{ no: 3, name: "CURSOR_PREDICTION_SOURCE_UNDO" },
						{ no: 4, name: "CURSOR_PREDICTION_SOURCE_EDITOR_CHANGE" },
					],
				);
			class R extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.SuggestCursorPredictionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cursor_prediction", kind: "message", T: N },
						{ no: 2, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new R().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new R().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new R().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(R, tt, at);
				}
			}
			e.$2v = R;
			class O extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AcceptCursorPredictionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cursor_prediction", kind: "message", T: N },
						{ no: 2, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new O().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new O().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new O().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(O, tt, at);
				}
			}
			e.$3v = O;
			class B extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.RejectCursorPredictionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cursor_prediction", kind: "message", T: N },
						{ no: 2, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new B().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new B().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new B().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(B, tt, at);
				}
			}
			e.$4v = B;
			class U extends t.Message {
				constructor(tt) {
					super(),
						(this.modelVersion = 0),
						(this.relativePath = ""),
						(this.modelId = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.MaybeDefinedPointInTimeModel";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_uuid", kind: "scalar", T: 9, opt: !0 },
						{ no: 2, name: "model_version", kind: "scalar", T: 5 },
						{ no: 3, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 4, name: "model_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new U().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new U().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new U().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(U, tt, at);
				}
			}
			e.$5v = U;
			class z extends t.Message {
				constructor(tt) {
					super(),
						(this.modelUuid = ""),
						(this.modelVersion = 0),
						(this.relativePath = ""),
						(this.modelId = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.PointInTimeModel";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "model_version", kind: "scalar", T: 5 },
						{ no: 3, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 4, name: "model_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new z().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new z().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new z().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(z, tt, at);
				}
			}
			e.$6v = z;
			class F extends t.Message {
				constructor(tt) {
					super(),
						(this.lineNumberOneIndexed = 0),
						(this.columnNumberOneIndexed = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppManualTriggerEventNew";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "line_number_one_indexed", kind: "scalar", T: 5 },
						{ no: 2, name: "column_number_one_indexed", kind: "scalar", T: 5 },
						{ no: 7, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new F().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new F().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new F().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(F, tt, at);
				}
			}
			e.$7v = F;
			class x extends t.Message {
				constructor(tt) {
					super(),
						(this.modelUuid = ""),
						(this.relativePath = ""),
						(this.reason = H.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppStoppedTrackingModelEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 3, name: "reason", kind: "enum", T: t.proto3.getEnumType(H) },
					]);
				}
				static fromBinary(tt, at) {
					return new x().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new x().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new x().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(x, tt, at);
				}
			}
			e.$8v = x;
			var H;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.FILE_TOO_BIG = 1)] = "FILE_TOO_BIG"),
					(Wt[(Wt.FILE_DISPOSED = 2)] = "FILE_DISPOSED"),
					(Wt[(Wt.CHANGE_TOO_BIG = 3)] = "CHANGE_TOO_BIG");
			})(
				H ||
					(e.CppStoppedTrackingModelEvent_StoppedTrackingModelReason = H = {}),
			),
				t.proto3.util.setEnumType(
					H,
					"aiserver.v1.CppStoppedTrackingModelEvent.StoppedTrackingModelReason",
					[
						{ no: 0, name: "STOPPED_TRACKING_MODEL_REASON_UNSPECIFIED" },
						{ no: 1, name: "STOPPED_TRACKING_MODEL_REASON_FILE_TOO_BIG" },
						{ no: 2, name: "STOPPED_TRACKING_MODEL_REASON_FILE_DISPOSED" },
						{ no: 3, name: "STOPPED_TRACKING_MODEL_REASON_CHANGE_TOO_BIG" },
					],
				);
			class q extends t.Message {
				constructor(tt) {
					super(),
						(this.addedErrors = []),
						(this.removedErrors = []),
						(this.errors = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppLinterErrorEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{
							no: 2,
							name: "added_errors",
							kind: "message",
							T: i.$3s,
							repeated: !0,
						},
						{
							no: 3,
							name: "removed_errors",
							kind: "message",
							T: i.$3s,
							repeated: !0,
						},
						{ no: 4, name: "errors", kind: "message", T: i.$3s, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new q().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new q().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new q().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(q, tt, at);
				}
			}
			e.$9v = q;
			class V extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppDebouncedCursorMovementEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{ no: 2, name: "cursor_position", kind: "message", T: l },
					]);
				}
				static fromBinary(tt, at) {
					return new V().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new V().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new V().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(V, tt, at);
				}
			}
			e.$0v = V;
			class G extends t.Message {
				constructor(tt) {
					super(),
						(this.visibleRanges = []),
						(this.editorId = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppEditorChangedEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{ no: 2, name: "cursor_position", kind: "message", T: l },
						{
							no: 3,
							name: "visible_ranges",
							kind: "message",
							T: s,
							repeated: !0,
						},
						{ no: 4, name: "editor_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new G().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new G().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new G().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(G, tt, at);
				}
			}
			e.$$v = G;
			class K extends t.Message {
				constructor(tt) {
					super(),
						(this.clipboardContents = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppCopyEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "clipboard_contents", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new K().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new K().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new K().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(K, tt, at);
				}
			}
			e.$_v = K;
			class J extends t.Message {
				constructor(tt) {
					super(),
						(this.title = ""),
						(this.id = ""),
						(this.arguments = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppQuickActionCommand";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "title", kind: "scalar", T: 9 },
						{ no: 2, name: "id", kind: "scalar", T: 9 },
						{ no: 3, name: "arguments", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new J().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new J().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new J().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(J, tt, at);
				}
			}
			e.$aw = J;
			class W extends t.Message {
				constructor(tt) {
					super(),
						(this.title = ""),
						(this.edits = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppQuickAction";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "title", kind: "scalar", T: 9 },
						{ no: 2, name: "edits", kind: "message", T: X, repeated: !0 },
						{ no: 3, name: "is_preferred", kind: "scalar", T: 8, opt: !0 },
						{ no: 4, name: "command", kind: "message", T: J },
					]);
				}
				static fromBinary(tt, at) {
					return new W().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new W().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new W().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(W, tt, at);
				}
			}
			e.$bw = W;
			class X extends t.Message {
				constructor(tt) {
					super(), (this.text = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppQuickAction.Edit";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: s },
					]);
				}
				static fromBinary(tt, at) {
					return new X().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new X().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new X().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(X, tt, at);
				}
			}
			e.$cw = X;
			class Y extends t.Message {
				constructor(tt) {
					super(),
						(this.added = []),
						(this.removed = []),
						(this.actions = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppChangeQuickActionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{ no: 2, name: "added", kind: "message", T: W, repeated: !0 },
						{ no: 3, name: "removed", kind: "message", T: W, repeated: !0 },
						{ no: 4, name: "actions", kind: "message", T: W, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new Y().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Y().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Y().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Y, tt, at);
				}
			}
			e.$dw = Y;
			class ie extends t.Message {
				constructor(tt) {
					super(),
						(this.actionIdentifier = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppQuickActionFireEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{
							no: 2,
							name: "quick_action_command",
							kind: "message",
							T: J,
							oneof: "action_identifier",
						},
						{
							no: 3,
							name: "quick_action_event",
							kind: "message",
							T: W,
							oneof: "action_identifier",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new ie().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ie().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ie().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ie, tt, at);
				}
			}
			e.$ew = ie;
			class ne extends t.Message {
				constructor(tt) {
					super(),
						(this.terminalId = 0),
						(this.terminalPath = ""),
						(this.event = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTerminalEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "terminal_id", kind: "scalar", T: 5 },
						{ no: 2, name: "terminal_path", kind: "scalar", T: 9 },
						{ no: 6, name: "terminal_cwd", kind: "scalar", T: 9, opt: !0 },
						{
							no: 3,
							name: "terminal_input",
							kind: "message",
							T: ee,
							oneof: "event",
						},
						{
							no: 4,
							name: "command_started",
							kind: "message",
							T: _,
							oneof: "event",
						},
						{
							no: 5,
							name: "command_finished",
							kind: "message",
							T: te,
							oneof: "event",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new ne().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ne().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ne().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ne, tt, at);
				}
			}
			e.$fw = ne;
			class ee extends t.Message {
				constructor(tt) {
					super(),
						(this.bufferedKeypresses = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTerminalEvent.TerminalInput";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "buffered_keypresses",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new ee().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ee().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ee().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ee, tt, at);
				}
			}
			e.$gw = ee;
			class _ extends t.Message {
				constructor(tt) {
					super(),
						(this.command = ""),
						(this.startedTimestampUnixMs = 0),
						(this.commandWasTrimmed = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTerminalEvent.CommandStarted";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "command", kind: "scalar", T: 9 },
						{ no: 2, name: "started_timestamp_unix_ms", kind: "scalar", T: 1 },
						{ no: 3, name: "command_was_trimmed", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new _().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new _().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new _().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(_, tt, at);
				}
			}
			e.$hw = _;
			class te extends t.Message {
				constructor(tt) {
					super(),
						(this.command = ""),
						(this.output = ""),
						(this.finishedTimestampUnixMs = 0),
						(this.commandWasTrimmed = !1),
						(this.outputWasTrimmed = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTerminalEvent.CommandFinished";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "command", kind: "scalar", T: 9 },
						{ no: 2, name: "exit_code", kind: "scalar", T: 5, opt: !0 },
						{ no: 3, name: "output", kind: "scalar", T: 9 },
						{ no: 4, name: "finished_timestamp_unix_ms", kind: "scalar", T: 1 },
						{ no: 5, name: "command_was_trimmed", kind: "scalar", T: 8 },
						{ no: 6, name: "output_was_trimmed", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new te().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new te().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new te().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(te, tt, at);
				}
			}
			e.$iw = te;
			class Q extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.eventType = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{ no: 2, name: "request_id", kind: "scalar", T: 9 },
						{ no: 20, name: "prompt_bar_id", kind: "scalar", T: 9, opt: !0 },
						{
							no: 3,
							name: "submit_prompt",
							kind: "message",
							T: Z,
							oneof: "event_type",
						},
						{
							no: 4,
							name: "end_of_generation",
							kind: "message",
							T: se,
							oneof: "event_type",
						},
						{
							no: 5,
							name: "interrupt_generation",
							kind: "message",
							T: re,
							oneof: "event_type",
						},
						{
							no: 6,
							name: "accept_all",
							kind: "message",
							T: le,
							oneof: "event_type",
						},
						{
							no: 7,
							name: "reject_all",
							kind: "message",
							T: oe,
							oneof: "event_type",
						},
						{
							no: 8,
							name: "reject_partial_diff",
							kind: "message",
							T: pe,
							oneof: "event_type",
						},
						{
							no: 9,
							name: "accept_partial_diff",
							kind: "message",
							T: ae,
							oneof: "event_type",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new Q().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Q().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Q().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Q, tt, at);
				}
			}
			e.$jw = Q;
			class Z extends t.Message {
				constructor(tt) {
					super(),
						(this.originalText = ""),
						(this.prompt = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.SubmitPrompt";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "original_range", kind: "message", T: s },
						{ no: 2, name: "original_text", kind: "scalar", T: 9 },
						{ no: 3, name: "prompt", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Z().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Z().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Z().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Z, tt, at);
				}
			}
			e.$kw = Z;
			class se extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.EndOfGeneration";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new se().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new se().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new se().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(se, tt, at);
				}
			}
			e.$lw = se;
			class re extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.InterruptGeneration";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new re().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new re().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new re().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(re, tt, at);
				}
			}
			e.$mw = re;
			class le extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.AcceptDiffs";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new le().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new le().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new le().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(le, tt, at);
				}
			}
			e.$nw = le;
			class oe extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.RejectDiffs";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new oe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new oe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new oe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(oe, tt, at);
				}
			}
			e.$ow = oe;
			class ae extends t.Message {
				constructor(tt) {
					super(),
						(this.greenLines = []),
						(this.redLines = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.AcceptPartialDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "green_range", kind: "message", T: s },
						{ no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new ae().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ae().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ae().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ae, tt, at);
				}
			}
			e.$pw = ae;
			class pe extends t.Message {
				constructor(tt) {
					super(),
						(this.greenLines = []),
						(this.redLines = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CmdKEvent.RejectPartialDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "green_range", kind: "message", T: s },
						{ no: 2, name: "green_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 3, name: "red_lines", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new pe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new pe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new pe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(pe, tt, at);
				}
			}
			e.$qw = pe;
			class $e extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.eventType = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "submit_prompt",
							kind: "message",
							T: ye,
							oneof: "event_type",
						},
						{
							no: 3,
							name: "end_of_any_generation",
							kind: "message",
							T: ue,
							oneof: "event_type",
						},
						{
							no: 4,
							name: "end_of_uninterrupted_generation",
							kind: "message",
							T: fe,
							oneof: "event_type",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new $e().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new $e().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new $e().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals($e, tt, at);
				}
			}
			e.$rw = $e;
			class ye extends t.Message {
				constructor(tt) {
					super(), (this.prompt = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatEvent.SubmitPrompt";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "prompt", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new ye().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ye().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ye().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ye, tt, at);
				}
			}
			e.$sw = ye;
			class ue extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatEvent.EndOfAnyGeneration";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new ue().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ue().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ue().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ue, tt, at);
				}
			}
			e.$tw = ue;
			class fe extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChatEvent.EndOfUninterruptedGeneration";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new fe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new fe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new fe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(fe, tt, at);
				}
			}
			e.$uw = fe;
			class me extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.eventType = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{ no: 2, name: "point_in_time_model", kind: "message", T: z },
						{
							no: 3,
							name: "lint_generated",
							kind: "message",
							T: ge,
							oneof: "event_type",
						},
						{
							no: 4,
							name: "lint_dismissed",
							kind: "message",
							T: be,
							oneof: "event_type",
						},
						{
							no: 5,
							name: "user_feedback",
							kind: "message",
							T: Ce,
							oneof: "event_type",
						},
						{
							no: 6,
							name: "viewed_report",
							kind: "message",
							T: Le,
							oneof: "event_type",
						},
						{
							no: 7,
							name: "unviewed_report",
							kind: "message",
							T: Fe,
							oneof: "event_type",
						},
						{
							no: 8,
							name: "started",
							kind: "message",
							T: ve,
							oneof: "event_type",
						},
						{
							no: 9,
							name: "not_shown_because_heuristic",
							kind: "message",
							T: Oe,
							oneof: "event_type",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new me().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new me().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new me().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(me, tt, at);
				}
			}
			e.$vw = me;
			class ve extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.Started";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new ve().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ve().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ve().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ve, tt, at);
				}
			}
			e.$ww = ve;
			class ge extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.LintGenerated";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report", kind: "message", T: w.$uv },
					]);
				}
				static fromBinary(tt, at) {
					return new ge().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ge().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ge().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ge, tt, at);
				}
			}
			e.$xw = ge;
			class be extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.LintDismissed";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new be().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new be().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new be().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(be, tt, at);
				}
			}
			e.$yw = be;
			class Ce extends t.Message {
				constructor(tt) {
					super(),
						(this.bugReportId = ""),
						(this.feedback = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.UserFeedback";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
						{ no: 2, name: "feedback", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ce().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ce().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ce().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ce, tt, at);
				}
			}
			e.$zw = Ce;
			class Le extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.ViewedReport";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Le().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Le().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Le().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Le, tt, at);
				}
			}
			e.$Aw = Le;
			class Fe extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotLinterEvent.UnviewedReport";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Fe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Fe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Fe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Fe, tt, at);
				}
			}
			e.$Bw = Fe;
			class Oe extends t.Message {
				constructor(tt) {
					super(),
						(this.heuristic = xe.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "heuristic",
							kind: "enum",
							T: t.proto3.getEnumType(xe),
						},
					]);
				}
				static fromBinary(tt, at) {
					return new Oe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Oe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Oe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Oe, tt, at);
				}
			}
			e.$Cw = Oe;
			var xe;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.LINT_OVERLAP = 1)] = "LINT_OVERLAP"),
					(Wt[(Wt.LINES_MISMATCH = 2)] = "LINES_MISMATCH");
			})(
				xe ||
					(e.BugBotLinterEvent_NotShownBecauseHeuristic_Heuristic = xe = {}),
			),
				t.proto3.util.setEnumType(
					xe,
					"aiserver.v1.BugBotLinterEvent.NotShownBecauseHeuristic.Heuristic",
					[
						{ no: 0, name: "HEURISTIC_UNSPECIFIED" },
						{ no: 1, name: "HEURISTIC_LINT_OVERLAP" },
						{ no: 2, name: "HEURISTIC_LINES_MISMATCH" },
					],
				);
			class He extends t.Message {
				constructor(tt) {
					super(),
						(this.requestId = ""),
						(this.eventType = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "request_id", kind: "scalar", T: 9 },
						{
							no: 2,
							name: "started",
							kind: "message",
							T: Je,
							oneof: "event_type",
						},
						{
							no: 3,
							name: "reports_generated",
							kind: "message",
							T: Te,
							oneof: "event_type",
						},
						{
							no: 4,
							name: "pressed_fix_in_composer",
							kind: "message",
							T: Ee,
							oneof: "event_type",
						},
						{
							no: 5,
							name: "pressed_open_in_editor",
							kind: "message",
							T: Be,
							oneof: "event_type",
						},
						{
							no: 6,
							name: "viewed_report",
							kind: "message",
							T: Se,
							oneof: "event_type",
						},
						{
							no: 7,
							name: "user_feedback",
							kind: "message",
							T: Ue,
							oneof: "event_type",
						},
						{
							no: 8,
							name: "pressed_add_to_chat",
							kind: "message",
							T: Ie,
							oneof: "event_type",
						},
						{
							no: 9,
							name: "background_interval_started",
							kind: "message",
							T: qe,
							oneof: "event_type",
						},
						{
							no: 10,
							name: "background_interval_ended",
							kind: "message",
							T: Ae,
							oneof: "event_type",
						},
						{
							no: 11,
							name: "background_interval_interrupted",
							kind: "message",
							T: Me,
							oneof: "event_type",
						},
						{
							no: 12,
							name: "background_interval_errored",
							kind: "message",
							T: De,
							oneof: "event_type",
						},
					]);
				}
				static fromBinary(tt, at) {
					return new He().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new He().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new He().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(He, tt, at);
				}
			}
			e.$Dw = He;
			var Ke;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.DISABLED = 1)] = "DISABLED"),
					(Wt[(Wt.TOO_RECENT = 2)] = "TOO_RECENT"),
					(Wt[(Wt.UNVIEWED_BUG_REPORTS = 3)] = "UNVIEWED_BUG_REPORTS"),
					(Wt[(Wt.NOT_IN_GIT_REPO = 4)] = "NOT_IN_GIT_REPO"),
					(Wt[(Wt.DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH = 5)] =
						"DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH"),
					(Wt[(Wt.NO_GIT_USER = 6)] = "NO_GIT_USER"),
					(Wt[(Wt.NO_LAST_COMMIT = 7)] = "NO_LAST_COMMIT"),
					(Wt[(Wt.LAST_COMMIT_NOT_MADE_BY_USER = 8)] =
						"LAST_COMMIT_NOT_MADE_BY_USER"),
					(Wt[(Wt.LAST_COMMIT_TOO_OLD = 9)] = "LAST_COMMIT_TOO_OLD"),
					(Wt[(Wt.DIFF_TOO_LONG = 10)] = "DIFF_TOO_LONG"),
					(Wt[(Wt.DIFF_TOO_SHORT = 11)] = "DIFF_TOO_SHORT"),
					(Wt[(Wt.TELEMETRY_UNHEALTHY = 12)] = "TELEMETRY_UNHEALTHY");
			})(Ke || (e.BugBotEvent_BackgroundIntervalInterruptedReason = Ke = {})),
				t.proto3.util.setEnumType(
					Ke,
					"aiserver.v1.BugBotEvent.BackgroundIntervalInterruptedReason",
					[
						{
							no: 0,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNSPECIFIED",
						},
						{ no: 1, name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DISABLED" },
						{
							no: 2,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TOO_RECENT",
						},
						{
							no: 3,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_UNVIEWED_BUG_REPORTS",
						},
						{
							no: 4,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NOT_IN_GIT_REPO",
						},
						{
							no: 5,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DEFAULT_BRANCH_IS_NOT_CURRENT_BRANCH",
						},
						{
							no: 6,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_GIT_USER",
						},
						{
							no: 7,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_NO_LAST_COMMIT",
						},
						{
							no: 8,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_NOT_MADE_BY_USER",
						},
						{
							no: 9,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_LAST_COMMIT_TOO_OLD",
						},
						{
							no: 10,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_LONG",
						},
						{
							no: 11,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_DIFF_TOO_SHORT",
						},
						{
							no: 12,
							name: "BACKGROUND_INTERVAL_INTERRUPTED_REASON_TELEMETRY_UNHEALTHY",
						},
					],
				);
			class Je extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.Started";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new Je().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Je().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Je().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Je, tt, at);
				}
			}
			e.$Ew = Je;
			class Te extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.ReportsGenerated";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_reports", kind: "message", T: w.$vv },
					]);
				}
				static fromBinary(tt, at) {
					return new Te().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Te().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Te().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Te, tt, at);
				}
			}
			e.$Fw = Te;
			class Ee extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.PressedFixInComposer";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ee().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ee().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ee().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ee, tt, at);
				}
			}
			e.$Gw = Ee;
			class Ie extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.PressedAddToChat";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ie().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ie().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ie().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ie, tt, at);
				}
			}
			e.$Hw = Ie;
			class Be extends t.Message {
				constructor(tt) {
					super(), (this.bugReportId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.PressedOpenInEditor";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_location", kind: "message", T: w.$tv },
						{ no: 2, name: "bug_report_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Be().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Be().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Be().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Be, tt, at);
				}
			}
			e.$Iw = Be;
			class Se extends t.Message {
				constructor(tt) {
					super(),
						(this.secondsViewed = 0),
						(this.reportViews = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.ViewedReport";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "seconds_viewed", kind: "scalar", T: 5 },
						{
							no: 2,
							name: "report_views",
							kind: "message",
							T: ke,
							repeated: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new Se().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Se().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Se().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Se, tt, at);
				}
			}
			e.$Jw = Se;
			class ke extends t.Message {
				constructor(tt) {
					super(),
						(this.bugReportId = ""),
						(this.viewPercentage = 0),
						(this.textPercentage = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.ViewedReport.ReportView";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
						{ no: 2, name: "view_percentage", kind: "scalar", T: 1 },
						{ no: 3, name: "text_percentage", kind: "scalar", T: 1 },
					]);
				}
				static fromBinary(tt, at) {
					return new ke().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ke().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ke().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ke, tt, at);
				}
			}
			e.$Kw = ke;
			class Ue extends t.Message {
				constructor(tt) {
					super(),
						(this.bugReportId = ""),
						(this.feedback = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.UserFeedback";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug_report_id", kind: "scalar", T: 9 },
						{ no: 2, name: "feedback", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ue().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ue().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ue().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ue, tt, at);
				}
			}
			e.$Lw = Ue;
			class qe extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalStarted";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new qe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new qe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new qe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(qe, tt, at);
				}
			}
			e.$Mw = qe;
			class Ae extends t.Message {
				constructor(tt) {
					super(), (this.success = !1), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalEnded";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "success", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ae().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ae().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ae().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ae, tt, at);
				}
			}
			e.$Nw = Ae;
			class Me extends t.Message {
				constructor(tt) {
					super(),
						(this.reason = Ke.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.BugBotEvent.BackgroundIntervalInterrupted";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "reason",
							kind: "enum",
							T: t.proto3.getEnumType(Ke),
						},
					]);
				}
				static fromBinary(tt, at) {
					return new Me().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Me().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Me().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Me, tt, at);
				}
			}
			e.$Ow = Me;
			class De extends t.Message {
				constructor(tt) {
					super(),
						(this.errorMessage = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugBotEvent.BackgroundIntervalErrored";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "error_message", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new De().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new De().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new De().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(De, tt, at);
				}
			}
			e.$Pw = De;
			class Re extends t.Message {
				constructor(tt) {
					super(),
						(this.requestType = je.UNSPECIFIED),
						(this.requestId = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AiRequestEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "request_type",
							kind: "enum",
							T: t.proto3.getEnumType(je),
						},
						{ no: 2, name: "request_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Re().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Re().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Re().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Re, tt, at);
				}
			}
			e.$Qw = Re;
			var je;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.START = 1)] = "START"),
					(Wt[(Wt.END = 2)] = "END");
			})(je || (e.AiRequestEvent_RequestType = je = {})),
				t.proto3.util.setEnumType(
					je,
					"aiserver.v1.AiRequestEvent.RequestType",
					[
						{ no: 0, name: "REQUEST_TYPE_UNSPECIFIED" },
						{ no: 1, name: "REQUEST_TYPE_START" },
						{ no: 2, name: "REQUEST_TYPE_END" },
					],
				);
			class Ve extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ModelOpenedEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
					]);
				}
				static fromBinary(tt, at) {
					return new Ve().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ve().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ve().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ve, tt, at);
				}
			}
			e.$Rw = Ve;
			class Ze extends t.Message {
				constructor(tt) {
					super(), (this.files = []), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BackgroundFilesEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "files", kind: "message", T: et, repeated: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new Ze().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ze().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ze().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ze, tt, at);
				}
			}
			e.$Sw = Ze;
			class et extends t.Message {
				constructor(tt) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.contents = ""),
						(this.hash = ""),
						(this.fullPath = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BackgroundFilesEvent.BackgroundFile";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "contents", kind: "scalar", T: 9 },
						{ no: 3, name: "hash", kind: "scalar", T: 9 },
						{ no: 4, name: "full_path", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new et().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new et().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new et().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(et, tt, at);
				}
			}
			e.$Tw = et;
			class rt extends t.Message {
				constructor(tt) {
					super(),
						(this.visibleRanges = []),
						(this.editorId = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ScrollEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: z },
						{
							no: 2,
							name: "visible_ranges",
							kind: "message",
							T: s,
							repeated: !0,
						},
						{ no: 3, name: "editor_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new rt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new rt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new rt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(rt, tt, at);
				}
			}
			e.$Uw = rt;
			class ft extends t.Message {
				constructor(tt) {
					super(), (this.editorId = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EditorCloseEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "editor_id", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new ft().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ft().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ft().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ft, tt, at);
				}
			}
			e.$Vw = ft;
			class bt extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.TabCloseEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: U },
					]);
				}
				static fromBinary(tt, at) {
					return new bt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new bt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new bt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(bt, tt, at);
				}
			}
			e.$Ww = bt;
			class nt extends t.Message {
				constructor(tt) {
					super(),
						(this.fullUri = ""),
						(this.modelId = ""),
						(this.uriScheme = ""),
						(this.isTooLargeForSyncing = !1),
						(this.isTooLargeForTokenization = !1),
						(this.isTooLargeForHeapOperation = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ModelAddedEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "point_in_time_model", kind: "message", T: U },
						{ no: 2, name: "full_uri", kind: "scalar", T: 9 },
						{ no: 3, name: "model_id", kind: "scalar", T: 9 },
						{ no: 4, name: "uri_scheme", kind: "scalar", T: 9 },
						{ no: 5, name: "is_too_large_for_syncing", kind: "scalar", T: 8 },
						{
							no: 6,
							name: "is_too_large_for_tokenization",
							kind: "scalar",
							T: 8,
						},
						{
							no: 7,
							name: "is_too_large_for_heap_operation",
							kind: "scalar",
							T: 8,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new nt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new nt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new nt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(nt, tt, at);
				}
			}
			e.$Xw = nt;
			class lt extends t.Message {
				constructor(tt) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.rootFsPath = ""),
						(this.refs = []),
						(this.remotes = []),
						(this.submodules = []),
						(this.mergeChanges = []),
						(this.indexChanges = []),
						(this.workingTreeChanges = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "root_fs_path", kind: "scalar", T: 9 },
						{ no: 3, name: "head", kind: "message", T: ct, opt: !0 },
						{ no: 4, name: "refs", kind: "message", T: ht, repeated: !0 },
						{ no: 5, name: "remotes", kind: "message", T: Rt, repeated: !0 },
						{ no: 6, name: "submodules", kind: "message", T: Nt, repeated: !0 },
						{ no: 7, name: "rebase_commit", kind: "message", T: jt, opt: !0 },
						{
							no: 8,
							name: "merge_changes",
							kind: "message",
							T: kt,
							repeated: !0,
						},
						{
							no: 9,
							name: "index_changes",
							kind: "message",
							T: kt,
							repeated: !0,
						},
						{
							no: 10,
							name: "working_tree_changes",
							kind: "message",
							T: kt,
							repeated: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new lt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new lt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new lt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(lt, tt, at);
				}
			}
			e.$Yw = lt;
			class ct extends t.Message {
				constructor(tt) {
					super(), (this.type = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Head";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "type", kind: "scalar", T: 9 },
						{ no: 2, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "remote", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "upstream_ref", kind: "message", T: gt, opt: !0 },
						{ no: 6, name: "ahead", kind: "scalar", T: 5, opt: !0 },
						{ no: 7, name: "behind", kind: "scalar", T: 5, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new ct().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ct().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ct().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ct, tt, at);
				}
			}
			e.$Zw = ct;
			class gt extends t.Message {
				constructor(tt) {
					super(),
						(this.remote = ""),
						(this.name = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Head.UpstreamRef";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "remote", kind: "scalar", T: 9 },
						{ no: 2, name: "name", kind: "scalar", T: 9 },
						{ no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new gt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new gt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new gt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(gt, tt, at);
				}
			}
			e.$1w = gt;
			class ht extends t.Message {
				constructor(tt) {
					super(), (this.type = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Ref";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "type", kind: "scalar", T: 9 },
						{ no: 2, name: "name", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "commit", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "remote", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new ht().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ht().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ht().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ht, tt, at);
				}
			}
			e.$2w = ht;
			class Rt extends t.Message {
				constructor(tt) {
					super(),
						(this.name = ""),
						(this.isReadOnly = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Remote";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9 },
						{ no: 2, name: "fetch_url", kind: "scalar", T: 9, opt: !0 },
						{ no: 3, name: "push_url", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "is_read_only", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new Rt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Rt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Rt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Rt, tt, at);
				}
			}
			e.$3w = Rt;
			class Nt extends t.Message {
				constructor(tt) {
					super(),
						(this.name = ""),
						(this.path = ""),
						(this.url = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Submodule";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "name", kind: "scalar", T: 9 },
						{ no: 2, name: "path", kind: "scalar", T: 9 },
						{ no: 3, name: "url", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Nt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Nt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Nt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Nt, tt, at);
				}
			}
			e.$4w = Nt;
			class jt extends t.Message {
				constructor(tt) {
					super(),
						(this.hash = ""),
						(this.message = ""),
						(this.parents = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Commit";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "hash", kind: "scalar", T: 9 },
						{ no: 2, name: "message", kind: "scalar", T: 9 },
						{ no: 3, name: "parents", kind: "scalar", T: 9, repeated: !0 },
						{ no: 4, name: "author_date", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "author_name", kind: "scalar", T: 9, opt: !0 },
						{ no: 6, name: "author_email", kind: "scalar", T: 9, opt: !0 },
						{ no: 7, name: "commit_date", kind: "scalar", T: 9, opt: !0 },
						{ no: 8, name: "short_stat", kind: "message", T: ti, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new jt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new jt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new jt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(jt, tt, at);
				}
			}
			e.$5w = jt;
			class ti extends t.Message {
				constructor(tt) {
					super(),
						(this.files = 0),
						(this.insertions = 0),
						(this.deletions = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName =
						"aiserver.v1.CppGitContextEvent.Commit.CommitShortStat";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "files", kind: "scalar", T: 5 },
						{ no: 2, name: "insertions", kind: "scalar", T: 5 },
						{ no: 3, name: "deletions", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new ti().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ti().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ti().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ti, tt, at);
				}
			}
			e.$6w = ti;
			class kt extends t.Message {
				constructor(tt) {
					super(),
						(this.uri = ""),
						(this.originalUri = ""),
						(this.status = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppGitContextEvent.Change";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "uri", kind: "scalar", T: 9 },
						{ no: 2, name: "original_uri", kind: "scalar", T: 9 },
						{ no: 3, name: "rename_uri", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "status", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new kt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new kt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new kt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(kt, tt, at);
				}
			}
			e.$7w = kt;
			class hi extends t.Message {
				constructor(tt) {
					super(),
						(this.item = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AnythingQuickAccessItem";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "resource", kind: "message", T: Kt, oneof: "item" },
						{ no: 2, name: "separator", kind: "scalar", T: 9, oneof: "item" },
					]);
				}
				static fromBinary(tt, at) {
					return new hi().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new hi().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new hi().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(hi, tt, at);
				}
			}
			e.$8w = hi;
			class Kt extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AnythingQuickAccessItem.Resource";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model", kind: "message", T: z, opt: !0 },
						{ no: 2, name: "range", kind: "message", T: s, opt: !0 },
						{ no: 3, name: "uri", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new Kt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Kt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Kt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Kt, tt, at);
				}
			}
			e.$9w = Kt;
			class di extends t.Message {
				constructor(tt) {
					super(),
						(this.query = ""),
						(this.items = []),
						(this.selectedIndices = []),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.AnythingQuickAccessSelectionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "query", kind: "scalar", T: 9 },
						{ no: 2, name: "items", kind: "message", T: hi, repeated: !0 },
						{
							no: 3,
							name: "selected_indices",
							kind: "scalar",
							T: 5,
							repeated: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new di().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new di().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new di().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(di, tt, at);
				}
			}
			e.$0w = di;
			class Ye extends t.Message {
				constructor(tt) {
					super(),
						(this.event = { case: void 0 }),
						(this.performanceNowTimestamp = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppSessionEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 2,
							name: "accept_event",
							kind: "message",
							T: S,
							oneof: "event",
						},
						{
							no: 3,
							name: "reject_event",
							kind: "message",
							T: L,
							oneof: "event",
						},
						{
							no: 4,
							name: "manual_trigger_event",
							kind: "message",
							T: F,
							oneof: "event",
						},
						{
							no: 6,
							name: "stopped_tracking_model_event",
							kind: "message",
							T: x,
							oneof: "event",
						},
						{
							no: 7,
							name: "suggest_event",
							kind: "message",
							T,
							oneof: "event",
						},
						{
							no: 8,
							name: "linter_error_event",
							kind: "message",
							T: q,
							oneof: "event",
						},
						{
							no: 9,
							name: "debounced_cursor_movement_event",
							kind: "message",
							T: V,
							oneof: "event",
						},
						{
							no: 10,
							name: "editor_changed_event",
							kind: "message",
							T: G,
							oneof: "event",
						},
						{
							no: 11,
							name: "copy_event",
							kind: "message",
							T: K,
							oneof: "event",
						},
						{
							no: 13,
							name: "quick_action_event",
							kind: "message",
							T: Y,
							oneof: "event",
						},
						{
							no: 14,
							name: "quick_action_fire_event",
							kind: "message",
							T: ie,
							oneof: "event",
						},
						{
							no: 15,
							name: "model_opened_event",
							kind: "message",
							T: Ve,
							oneof: "event",
						},
						{
							no: 17,
							name: "cmd_k_event",
							kind: "message",
							T: Q,
							oneof: "event",
						},
						{
							no: 18,
							name: "chat_event",
							kind: "message",
							T: $e,
							oneof: "event",
						},
						{
							no: 19,
							name: "ai_event",
							kind: "message",
							T: Re,
							oneof: "event",
						},
						{
							no: 21,
							name: "scroll_event",
							kind: "message",
							T: rt,
							oneof: "event",
						},
						{
							no: 22,
							name: "editor_close_event",
							kind: "message",
							T: ft,
							oneof: "event",
						},
						{
							no: 23,
							name: "tab_close_event",
							kind: "message",
							T: bt,
							oneof: "event",
						},
						{
							no: 33,
							name: "model_added_event",
							kind: "message",
							T: nt,
							oneof: "event",
						},
						{
							no: 26,
							name: "partial_accept_event",
							kind: "message",
							T: M,
							oneof: "event",
						},
						{
							no: 27,
							name: "accept_cursor_prediction_event",
							kind: "message",
							T: O,
							oneof: "event",
						},
						{
							no: 28,
							name: "reject_cursor_prediction_event",
							kind: "message",
							T: B,
							oneof: "event",
						},
						{
							no: 29,
							name: "suggest_cursor_prediction_event",
							kind: "message",
							T: R,
							oneof: "event",
						},
						{
							no: 30,
							name: "cpp_trigger_event",
							kind: "message",
							T: P,
							oneof: "event",
						},
						{
							no: 31,
							name: "finished_cpp_generation_event",
							kind: "message",
							T: k,
							oneof: "event",
						},
						{
							no: 32,
							name: "bug_bot_event",
							kind: "message",
							T: He,
							oneof: "event",
						},
						{
							no: 34,
							name: "bug_bot_linter_event",
							kind: "message",
							T: me,
							oneof: "event",
						},
						{
							no: 35,
							name: "anything_quick_access_selection_event",
							kind: "message",
							T: di,
							oneof: "event",
						},
						{
							no: 16,
							name: "background_files_event",
							kind: "message",
							T: Ze,
							oneof: "event",
						},
						{
							no: 20,
							name: "terminal_event",
							kind: "message",
							T: ne,
							oneof: "event",
						},
						{
							no: 24,
							name: "git_context_event",
							kind: "message",
							T: lt,
							oneof: "event",
						},
						{ no: 5, name: "performance_now_timestamp", kind: "scalar", T: 1 },
						{
							no: 25,
							name: "performance_time_origin",
							kind: "scalar",
							T: 1,
							opt: !0,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new Ye().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ye().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ye().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ye, tt, at);
				}
			}
			e.$$w = Ye;
			class ze extends t.Message {
				constructor(tt) {
					super(),
						(this.changes = new Uint8Array(0)),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppAppendRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "changes", kind: "scalar", T: 12 },
					]);
				}
				static fromBinary(tt, at) {
					return new ze().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ze().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ze().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ze, tt, at);
				}
			}
			e.$_w = ze;
			class Xe extends t.Message {
				constructor(tt) {
					super(), (this.success = !1), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppAppendResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "success", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new Xe().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Xe().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Xe().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Xe, tt, at);
				}
			}
			e.$ax = Xe;
			class It extends t.Message {
				constructor(tt) {
					super(),
						(this.sessionId = ""),
						(this.modelUuid = ""),
						(this.relativePath = ""),
						(this.uri = ""),
						(this.clientVersion = ""),
						(this.changes = []),
						(this.sessionEvents = []),
						(this.modelChangesMayBeOutOfOrder = !1),
						(this.privacyModeStatus = Lt.UNSPECIFIED),
						(this.events = []),
						(this.timeOrigin = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EditHistoryAppendChangesRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "session_id", kind: "scalar", T: 9 },
						{ no: 2, name: "model_uuid", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "starting_model_value",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 10,
							name: "starting_model_version",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 5, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 14, name: "uri", kind: "scalar", T: 9 },
						{ no: 6, name: "client_version", kind: "scalar", T: 9 },
						{ no: 8, name: "client_commit", kind: "scalar", T: 9, opt: !0 },
						{ no: 4, name: "changes", kind: "message", T: $, repeated: !0 },
						{
							no: 9,
							name: "session_events",
							kind: "message",
							T: Ye,
							repeated: !0,
						},
						{
							no: 11,
							name: "model_changes_may_be_out_of_order",
							kind: "scalar",
							T: 8,
						},
						{
							no: 12,
							name: "privacy_mode_status",
							kind: "enum",
							T: t.proto3.getEnumType(Lt),
						},
						{ no: 7, name: "events", kind: "message", T: mi, repeated: !0 },
						{ no: 13, name: "time_origin", kind: "scalar", T: 2 },
					]);
				}
				static fromBinary(tt, at) {
					return new It().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new It().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new It().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(It, tt, at);
				}
			}
			e.$bx = It;
			var Lt;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.PRIVACY_ENABLED = 1)] = "PRIVACY_ENABLED"),
					(Wt[(Wt.IMPLICIT_NO_PRIVACY = 2)] = "IMPLICIT_NO_PRIVACY"),
					(Wt[(Wt.EXPLICIT_NO_PRIVACY = 3)] = "EXPLICIT_NO_PRIVACY");
			})(Lt || (e.EditHistoryAppendChangesRequest_PrivacyModeStatus = Lt = {})),
				t.proto3.util.setEnumType(
					Lt,
					"aiserver.v1.EditHistoryAppendChangesRequest.PrivacyModeStatus",
					[
						{ no: 0, name: "PRIVACY_MODE_STATUS_UNSPECIFIED" },
						{ no: 1, name: "PRIVACY_MODE_STATUS_PRIVACY_ENABLED" },
						{ no: 2, name: "PRIVACY_MODE_STATUS_IMPLICIT_NO_PRIVACY" },
						{ no: 3, name: "PRIVACY_MODE_STATUS_EXPLICIT_NO_PRIVACY" },
					],
				);
			class xt extends t.Message {
				constructor(tt) {
					super(), (this.success = !1), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.EditHistoryAppendChangesResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "success", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new xt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new xt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new xt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(xt, tt, at);
				}
			}
			e.$cx = xt;
			class Vt extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppEditHistoryStatusRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => []);
				}
				static fromBinary(tt, at) {
					return new Vt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Vt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Vt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Vt, tt, at);
				}
			}
			e.$dx = Vt;
			class Bt extends t.Message {
				constructor(tt) {
					super(),
						(this.on = !1),
						(this.onlyIfExplicit = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppEditHistoryStatusResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "on", kind: "scalar", T: 8 },
						{ no: 2, name: "only_if_explicit", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(tt, at) {
					return new Bt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Bt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Bt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Bt, tt, at);
				}
			}
			e.$ex = Bt;
			class Gt extends t.Message {
				constructor(tt) {
					super(),
						(this.relativePath = ""),
						(this.startingContents = ""),
						(this.beforeStartModelChanges = []),
						(this.clientVersion = ""),
						(this.modelUuid = ""),
						(this.sessionId = ""),
						(this.uri = ""),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StartingModel";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 2, name: "starting_contents", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "starting_model_version",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 4,
							name: "before_start_model_changes",
							kind: "message",
							T: $,
							repeated: !0,
						},
						{ no: 5, name: "client_version", kind: "scalar", T: 9 },
						{ no: 6, name: "client_commit", kind: "scalar", T: 9, opt: !0 },
						{ no: 7, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 8, name: "session_id", kind: "scalar", T: 9 },
						{ no: 9, name: "uri", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(tt, at) {
					return new Gt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Gt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Gt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Gt, tt, at);
				}
			}
			e.$fx = Gt;
			class Mt extends t.Message {
				constructor(tt) {
					super(),
						(this.changes = []),
						(this.relativePath = ""),
						(this.modelUuid = ""),
						(this.startFromChangeIndex = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BlockDiffPatch";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "start_model_window", kind: "message", T: ei },
						{ no: 3, name: "changes", kind: "message", T: Ut, repeated: !0 },
						{ no: 4, name: "relative_path", kind: "scalar", T: 9 },
						{ no: 7, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 5, name: "start_from_change_index", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new Mt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Mt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Mt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Mt, tt, at);
				}
			}
			e.$gx = Mt;
			class Ut extends t.Message {
				constructor(tt) {
					super(), (this.text = ""), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BlockDiffPatch.Change";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: s },
					]);
				}
				static fromBinary(tt, at) {
					return new Ut().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Ut().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Ut().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Ut, tt, at);
				}
			}
			e.$hx = Ut;
			class ei extends t.Message {
				constructor(tt) {
					super(),
						(this.lines = []),
						(this.startLineNumber = 0),
						(this.endLineNumber = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BlockDiffPatch.ModelWindow";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_number", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new ei().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ei().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ei().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ei, tt, at);
				}
			}
			e.$ix = ei;
			class mi extends t.Message {
				constructor(tt) {
					super(),
						(this.event = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppHistoryAppendEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "model_change",
							kind: "message",
							T: $,
							oneof: "event",
						},
						{
							no: 2,
							name: "accept_event",
							kind: "message",
							T: Dt,
							oneof: "event",
						},
						{
							no: 3,
							name: "reject_event",
							kind: "message",
							T: Jt,
							oneof: "event",
						},
						{
							no: 4,
							name: "manual_trigger_event",
							kind: "message",
							T: ii,
							oneof: "event",
						},
						{ no: 10, name: "final_model_hash", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(tt, at) {
					return new mi().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new mi().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new mi().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(mi, tt, at);
				}
			}
			e.$jx = mi;
			class ii extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppManualTriggerEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 2, name: "position", kind: "message", T: i.$ys },
					]);
				}
				static fromBinary(tt, at) {
					return new ii().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ii().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ii().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ii, tt, at);
				}
			}
			e.$kx = ii;
			class Dt extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppAcceptEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: si },
					]);
				}
				static fromBinary(tt, at) {
					return new Dt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Dt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Dt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Dt, tt, at);
				}
			}
			e.$lx = Dt;
			class Jt extends t.Message {
				constructor(tt) {
					super(), t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppRejectEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "cpp_suggestion", kind: "message", T: si },
					]);
				}
				static fromBinary(tt, at) {
					return new Jt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Jt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Jt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Jt, tt, at);
				}
			}
			e.$mx = Jt;
			class si extends t.Message {
				constructor(tt) {
					super(),
						(this.suggestionText = ""),
						(this.seen = !1),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppSuggestion";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "suggestion_text", kind: "scalar", T: 9 },
						{ no: 2, name: "range", kind: "message", T: s },
						{ no: 5, name: "seen", kind: "scalar", T: 8 },
						{
							no: 6,
							name: "editor_selection_before_peek",
							kind: "message",
							T: i.$zs,
						},
					]);
				}
				static fromBinary(tt, at) {
					return new si().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new si().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new si().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(si, tt, at);
				}
			}
			e.$nx = si;
			class Zt extends t.Message {
				constructor(tt) {
					super(),
						(this.changes = []),
						(this.modelUuid = ""),
						(this.numCorrectChanges = 0),
						(this.numUnvalidatedChanges = 0),
						(this.numIncorrectChanges = 0),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ModelWithHistory";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "changes", kind: "message", T: $, repeated: !0 },
						{ no: 2, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 3, name: "starting_model", kind: "message", T: Gt },
						{ no: 4, name: "num_correct_changes", kind: "scalar", T: 5 },
						{ no: 5, name: "num_unvalidated_changes", kind: "scalar", T: 5 },
						{ no: 6, name: "num_incorrect_changes", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(tt, at) {
					return new Zt().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new Zt().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new Zt().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(Zt, tt, at);
				}
			}
			e.$ox = Zt;
			class ci extends t.Message {
				constructor(tt) {
					super(),
						(this.timestamp = 0),
						(this.v = { case: void 0 }),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTimelineEvent";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "timestamp", kind: "scalar", T: 1 },
						{ no: 2, name: "event", kind: "message", T: Ye, oneof: "v" },
						{ no: 3, name: "change", kind: "message", T: ri, oneof: "v" },
					]);
				}
				static fromBinary(tt, at) {
					return new ci().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ci().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ci().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ci, tt, at);
				}
			}
			e.$px = ci;
			class ri extends t.Message {
				constructor(tt) {
					super(),
						(this.modelUuid = ""),
						(this.changeIndex = 0),
						(this.status = $i.UNSPECIFIED),
						t.proto3.util.initPartial(tt, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.CppTimelineEvent.Change";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "model_uuid", kind: "scalar", T: 9 },
						{ no: 2, name: "change_index", kind: "scalar", T: 5 },
						{ no: 3, name: "change", kind: "message", T: $ },
						{
							no: 4,
							name: "status",
							kind: "enum",
							T: t.proto3.getEnumType($i),
						},
					]);
				}
				static fromBinary(tt, at) {
					return new ri().fromBinary(tt, at);
				}
				static fromJson(tt, at) {
					return new ri().fromJson(tt, at);
				}
				static fromJsonString(tt, at) {
					return new ri().fromJsonString(tt, at);
				}
				static equals(tt, at) {
					return t.proto3.util.equals(ri, tt, at);
				}
			}
			e.$qx = ri;
			var $i;
			(function (Wt) {
				(Wt[(Wt.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(Wt[(Wt.CORRECT = 1)] = "CORRECT"),
					(Wt[(Wt.UNVALIDATED = 2)] = "UNVALIDATED"),
					(Wt[(Wt.INCORRECT = 3)] = "INCORRECT");
			})($i || (e.CppTimelineEvent_Change_Status = $i = {})),
				t.proto3.util.setEnumType(
					$i,
					"aiserver.v1.CppTimelineEvent.Change.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_CORRECT" },
						{ no: 2, name: "STATUS_UNVALIDATED" },
						{ no: 3, name: "STATUS_INCORRECT" },
					],
				);
		}),
		define(
			de[228],
			he([1, 0, 86, 83, 367, 1477]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oC =
						e.$nC =
						e.$mC =
						e.$lC =
						e.$kC =
						e.$jC =
						e.$iC =
						e.$hC =
						e.$gC =
						e.$fC =
						e.$eC =
						e.$dC =
						e.$cC =
						e.$bC =
						e.$aC =
						e.$_B =
						e.$$B =
						e.$0B =
						e.$9B =
						e.ContextIntent_File_Mode =
						e.$8B =
						e.$7B =
						e.ContextIntent_Type =
						e.$6B =
						e.$5B =
						e.$4B =
						e.$3B =
						e.$2B =
						e.$1B =
						e.$ZB =
						e.$YB =
						e.$XB =
						e.$WB =
						e.$VB =
						e.$UB =
						e.$TB =
						e.$SB =
						e.$RB =
						e.$QB =
						e.$PB =
						e.$OB =
						e.$NB =
						e.$MB =
						e.$LB =
						e.$KB =
						e.$JB =
						e.$IB =
						e.$HB =
						e.$GB =
						e.ContextItemStatus_PostGenerationEvaluation =
						e.$FB =
						e.$EB =
						e.$DB =
						e.$CB =
							void 0);
				class C extends t.Message {
					constructor(oe) {
						super(),
							(this.item = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.PotentiallyCachedContextItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_item",
								kind: "message",
								T: a,
								oneof: "item",
							},
							{
								no: 2,
								name: "context_item_hash",
								kind: "scalar",
								T: 9,
								oneof: "item",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new C().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new C().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new C().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(C, oe, ae);
					}
				}
				e.$CB = C;
				class d extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemStatuses = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextStatusUpdate";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "context_item_statuses",
								kind: "message",
								T: r,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new d().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new d().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new d().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(d, oe, ae);
					}
				}
				e.$DB = d;
				class m extends t.Message {
					constructor(oe) {
						super(),
							(this.missingContextItemHashes = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.MissingContextItems";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 2,
								name: "missing_context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new m().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new m().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new m().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(m, oe, ae);
					}
				}
				e.$EB = m;
				class r extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHash = ""),
							(this.shownToTheModel = !1),
							(this.score = 0),
							(this.percentageOfAvailableSpace = 0),
							(this.postGenerationEvaluation = u.UNSPECIFIED),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItemStatus";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "context_item_hash", kind: "scalar", T: 9 },
							{ no: 2, name: "shown_to_the_model", kind: "scalar", T: 8 },
							{ no: 3, name: "score", kind: "scalar", T: 2 },
							{
								no: 4,
								name: "percentage_of_available_space",
								kind: "scalar",
								T: 2,
							},
							{
								no: 5,
								name: "post_generation_evaluation",
								kind: "enum",
								T: t.proto3.getEnumType(u),
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new r().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new r().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new r().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(r, oe, ae);
					}
				}
				e.$FB = r;
				var u;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.USEFUL = 1)] = "USEFUL"),
						(le[(le.USELESS = 2)] = "USELESS");
				})(u || (e.ContextItemStatus_PostGenerationEvaluation = u = {})),
					t.proto3.util.setEnumType(
						u,
						"aiserver.v1.ContextItemStatus.PostGenerationEvaluation",
						[
							{ no: 0, name: "POST_GENERATION_EVALUATION_UNSPECIFIED" },
							{ no: 1, name: "POST_GENERATION_EVALUATION_USEFUL" },
							{ no: 2, name: "POST_GENERATION_EVALUATION_USELESS" },
						],
					);
				class a extends t.Message {
					constructor(oe) {
						super(),
							(this.item = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "intent", kind: "message", T: O },
							{
								no: 2,
								name: "file_chunk",
								kind: "message",
								T: h,
								oneof: "item",
							},
							{
								no: 3,
								name: "outline_chunk",
								kind: "message",
								T: g,
								oneof: "item",
							},
							{
								no: 4,
								name: "cmd_k_selection",
								kind: "message",
								T: p,
								oneof: "item",
							},
							{
								no: 5,
								name: "cmd_k_immediate_context",
								kind: "message",
								T: f,
								oneof: "item",
							},
							{
								no: 6,
								name: "cmd_k_query",
								kind: "message",
								T: s,
								oneof: "item",
							},
							{
								no: 7,
								name: "cmd_k_query_history",
								kind: "message",
								T: $,
								oneof: "item",
							},
							{
								no: 8,
								name: "custom_instructions",
								kind: "message",
								T: P,
								oneof: "item",
							},
							{
								no: 9,
								name: "go_to_definition_result",
								kind: "message",
								T: k,
								oneof: "item",
							},
							{
								no: 10,
								name: "documentation_chunk",
								kind: "message",
								T: L,
								oneof: "item",
							},
							{ no: 11, name: "lints", kind: "message", T: D, oneof: "item" },
							{
								no: 12,
								name: "chat_history",
								kind: "message",
								T: I,
								oneof: "item",
							},
							{
								no: 13,
								name: "notebook_cell_output",
								kind: "message",
								T: N,
								oneof: "item",
							},
							{
								no: 14,
								name: "terminal_history",
								kind: "message",
								T,
								oneof: "item",
							},
							{
								no: 15,
								name: "terminal_cmd_k_query",
								kind: "message",
								T: l,
								oneof: "item",
							},
							{
								no: 16,
								name: "terminal_cmd_k_query_history",
								kind: "message",
								T: y,
								oneof: "item",
							},
							{
								no: 17,
								name: "sparse_file_chunk",
								kind: "message",
								T: c,
								oneof: "item",
							},
							{
								no: 18,
								name: "lsp_subgraph_chunk",
								kind: "message",
								T: A,
								oneof: "item",
							},
							{
								no: 19,
								name: "commit_note_chunk",
								kind: "message",
								T: R,
								oneof: "item",
							},
							{
								no: 20,
								name: "file_diff_history",
								kind: "message",
								T: o,
								oneof: "item",
							},
							{
								no: 21,
								name: "cmd_k_query_history_in_diff_session",
								kind: "message",
								T: v,
								oneof: "item",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new a().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new a().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new a().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(a, oe, ae);
					}
				}
				e.$GB = a;
				class h extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.chunkContents = ""),
							(this.startLineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.FileChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "chunk_contents", kind: "scalar", T: 9 },
							{ no: 3, name: "start_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new h().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new h().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new h().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(h, oe, ae);
					}
				}
				e.$HB = h;
				class c extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lines = []),
							(this.totalNumberOfLinesInFile = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.SparseFileChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lines", kind: "message", T: n, repeated: !0 },
							{
								no: 3,
								name: "total_number_of_lines_in_file",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "cell_number", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new c().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new c().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new c().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(c, oe, ae);
					}
				}
				e.$IB = c;
				class n extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.SparseFileChunk.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new n().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new n().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new n().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(n, oe, ae);
					}
				}
				e.$JB = n;
				class g extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.contents = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.OutlineChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "contents", kind: "scalar", T: 9 },
							{ no: 3, name: "full_range", kind: "message", T: i.$Ms },
						]);
					}
					static fromBinary(oe, ae) {
						return new g().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new g().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new g().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(g, oe, ae);
					}
				}
				e.$KB = g;
				class p extends t.Message {
					constructor(oe) {
						super(),
							(this.lines = []),
							(this.startLineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKSelection";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "lines", kind: "scalar", T: 9, repeated: !0 },
							{ no: 2, name: "start_line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new p().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new p().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new p().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(p, oe, ae);
					}
				}
				e.$LB = p;
				class o extends t.Message {
					constructor(oe) {
						super(),
							(this.howManyDiffsAgo = 0),
							(this.isVeryRecent = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.FileDiffHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "cpp_file_diff_history",
								kind: "message",
								T: w.$Hv,
							},
							{ no: 2, name: "how_many_diffs_ago", kind: "scalar", T: 5 },
							{ no: 3, name: "is_very_recent", kind: "scalar", T: 8 },
						]);
					}
					static fromBinary(oe, ae) {
						return new o().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new o().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new o().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(o, oe, ae);
					}
				}
				e.$MB = o;
				class f extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lines = []),
							(this.totalNumberOfLinesInFile = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lines", kind: "message", T: b, repeated: !0 },
							{
								no: 3,
								name: "total_number_of_lines_in_file",
								kind: "scalar",
								T: 5,
							},
							{ no: 4, name: "cell_number", kind: "scalar", T: 5, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new f().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new f().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new f().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(f, oe, ae);
					}
				}
				e.$NB = f;
				class b extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKImmediateContext.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new b().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new b().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new b().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(b, oe, ae);
					}
				}
				e.$OB = b;
				class s extends t.Message {
					constructor(oe) {
						super(), (this.query = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKQuery";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new s().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new s().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new s().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(s, oe, ae);
					}
				}
				e.$PB = s;
				class l extends t.Message {
					constructor(oe) {
						super(), (this.query = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQuery";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new l().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new l().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new l().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(l, oe, ae);
					}
				}
				e.$QB = l;
				class y extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHashes = []),
							(this.suggestedCommand = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalCmdKQueryHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: l },
							{ no: 2, name: "query_history", kind: "message", T: y },
							{
								no: 5,
								name: "context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 6, name: "suggested_command", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new y().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new y().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new y().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(y, oe, ae);
					}
				}
				e.$RB = y;
				class $ extends t.Message {
					constructor(oe) {
						super(),
							(this.contextItemHashes = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CmdKQueryHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: s },
							{ no: 2, name: "immediate_context", kind: "message", T: f },
							{ no: 3, name: "selection", kind: "message", T: p },
							{ no: 4, name: "query_history", kind: "message", T: $ },
							{
								no: 5,
								name: "context_item_hashes",
								kind: "scalar",
								T: 9,
								repeated: !0,
							},
							{ no: 6, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 7,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new $().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new $().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new $().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals($, oe, ae);
					}
				}
				e.$SB = $;
				class v extends t.Message {
					constructor(oe) {
						super(),
							(this.pastCmdkQueries = []),
							(this.currTimestampDouble = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "past_cmdk_queries",
								kind: "message",
								T: S,
								repeated: !0,
							},
							{ no: 3, name: "curr_timestamp_double", kind: "scalar", T: 1 },
						]);
					}
					static fromBinary(oe, ae) {
						return new v().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new v().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new v().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(v, oe, ae);
					}
				}
				e.$TB = v;
				class S extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.timestampDouble = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextItem.CmdKQueryHistoryInDiffSession.PastCmdKQueryInDiffSession";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "query", kind: "message", T: s },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 5,
								name: "cmdk_was_accepted",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
							{ no: 6, name: "timestamp_double", kind: "scalar", T: 1 },
							{
								no: 7,
								name: "timestamp_for_diff_interleaving",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
							{ no: 8, name: "request_id", kind: "scalar", T: 9, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new S().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new S().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new S().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(S, oe, ae);
					}
				}
				e.$UB = S;
				class I extends t.Message {
					constructor(oe) {
						super(),
							(this.userMessage = ""),
							(this.assistantResponse = ""),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.ChatHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "user_message", kind: "scalar", T: 9 },
							{ no: 2, name: "assistant_response", kind: "scalar", T: 9 },
							{ no: 3, name: "chat_history", kind: "message", T: I },
							{ no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{ no: 5, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 6,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new I().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new I().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new I().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(I, oe, ae);
					}
				}
				e.$VB = I;
				class T extends t.Message {
					constructor(oe) {
						super(),
							(this.history = ""),
							(this.cwdFull = ""),
							(this.cwdRelativeWorkspacePath = ""),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.TerminalHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "history", kind: "scalar", T: 9 },
							{ no: 5, name: "cwd_full", kind: "scalar", T: 9 },
							{
								no: 6,
								name: "cwd_relative_workspace_path",
								kind: "scalar",
								T: 9,
							},
							{ no: 4, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{ no: 7, name: "timestamp", kind: "scalar", T: 3, opt: !0 },
							{
								no: 8,
								name: "timestamp_double",
								kind: "scalar",
								T: 1,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new T().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new T().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new T().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(T, oe, ae);
					}
				}
				e.$WB = T;
				class P extends t.Message {
					constructor(oe) {
						super(),
							(this.instructions = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CustomInstructions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instructions", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new P().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new P().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new P().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(P, oe, ae);
					}
				}
				e.$XB = P;
				class k extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.line = ""),
							(this.lineNumber = 0),
							(this.columnNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.GoToDefinitionResult";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "line", kind: "scalar", T: 9 },
							{ no: 3, name: "line_number", kind: "scalar", T: 5 },
							{ no: 4, name: "column_number", kind: "scalar", T: 5 },
							{ no: 5, name: "definition_chunk", kind: "message", T: h },
						]);
					}
					static fromBinary(oe, ae) {
						return new k().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new k().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new k().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(k, oe, ae);
					}
				}
				e.$YB = k;
				class L extends t.Message {
					constructor(oe) {
						super(),
							(this.docName = ""),
							(this.pageUrl = ""),
							(this.documentationChunk = ""),
							(this.score = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.DocumentationChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "doc_name", kind: "scalar", T: 9 },
							{ no: 2, name: "page_url", kind: "scalar", T: 9 },
							{ no: 3, name: "documentation_chunk", kind: "scalar", T: 9 },
							{ no: 4, name: "score", kind: "scalar", T: 2 },
						]);
					}
					static fromBinary(oe, ae) {
						return new L().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new L().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new L().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(L, oe, ae);
					}
				}
				e.$ZB = L;
				class D extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.lints = []),
							(this.contextLines = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.Lints";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "lints", kind: "message", T: i.$Us, repeated: !0 },
							{
								no: 3,
								name: "context_lines",
								kind: "message",
								T: M,
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new D().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new D().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new D().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(D, oe, ae);
					}
				}
				e.$1B = D;
				class M extends t.Message {
					constructor(oe) {
						super(),
							(this.line = ""),
							(this.lineNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.Lints.Line";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "line", kind: "scalar", T: 9 },
							{ no: 2, name: "line_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new M().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new M().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new M().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(M, oe, ae);
					}
				}
				e.$2B = M;
				class N extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.cellOutput = ""),
							(this.cellNumber = 0),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.NotebookCellOutput";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "cell_output", kind: "scalar", T: 9 },
							{ no: 3, name: "cell_number", kind: "scalar", T: 5 },
						]);
					}
					static fromBinary(oe, ae) {
						return new N().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new N().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new N().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(N, oe, ae);
					}
				}
				e.$3B = N;
				class A extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.LspSubgraphChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "lsp_subgraph_full_context",
								kind: "message",
								T: E.$jB,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new A().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new A().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new A().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(A, oe, ae);
					}
				}
				e.$4B = A;
				class R extends t.Message {
					constructor(oe) {
						super(), (this.note = ""), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextItem.CommitNoteChunk";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "note", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new R().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new R().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new R().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(R, oe, ae);
					}
				}
				e.$5B = R;
				class O extends t.Message {
					constructor(oe) {
						super(),
							(this.type = B.UNSPECIFIED),
							(this.uuid = ""),
							(this.intent = { case: void 0 }),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "type", kind: "enum", T: t.proto3.getEnumType(B) },
							{ no: 15, name: "uuid", kind: "scalar", T: 9 },
							{ no: 2, name: "file", kind: "message", T: z, oneof: "intent" },
							{
								no: 3,
								name: "code_selection",
								kind: "message",
								T: x,
								oneof: "intent",
							},
							{ no: 5, name: "lints", kind: "message", T: V, oneof: "intent" },
							{
								no: 6,
								name: "recent_locations",
								kind: "message",
								T: J,
								oneof: "intent",
							},
							{
								no: 8,
								name: "cmd_k_current_file",
								kind: "message",
								T: ie,
								oneof: "intent",
							},
							{
								no: 9,
								name: "cmd_k_query_etc",
								kind: "message",
								T: ne,
								oneof: "intent",
							},
							{
								no: 14,
								name: "terminal_cmd_k_defaults",
								kind: "message",
								T: Z,
								oneof: "intent",
							},
							{
								no: 10,
								name: "cmd_k_definitions",
								kind: "message",
								T: _,
								oneof: "intent",
							},
							{
								no: 11,
								name: "documentation",
								kind: "message",
								T: U,
								oneof: "intent",
							},
							{
								no: 12,
								name: "custom_instructions",
								kind: "message",
								T: ee,
								oneof: "intent",
							},
							{
								no: 13,
								name: "chat_history",
								kind: "message",
								T: te,
								oneof: "intent",
							},
							{
								no: 16,
								name: "terminal_history",
								kind: "message",
								T: se,
								oneof: "intent",
							},
							{
								no: 17,
								name: "visible_tabs",
								kind: "message",
								T: X,
								oneof: "intent",
							},
							{
								no: 18,
								name: "lsp_subgraph",
								kind: "message",
								T: re,
								oneof: "intent",
							},
							{
								no: 19,
								name: "commit_notes",
								kind: "message",
								T: q,
								oneof: "intent",
							},
							{
								no: 20,
								name: "diff_history",
								kind: "message",
								T: Q,
								oneof: "intent",
							},
							{
								no: 21,
								name: "past_cmdk_messages_in_diff_sessions",
								kind: "message",
								T: W,
								oneof: "intent",
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new O().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new O().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new O().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(O, oe, ae);
					}
				}
				e.$6B = O;
				var B;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.USER_ADDED = 1)] = "USER_ADDED"),
						(le[(le.AUTOMATIC = 2)] = "AUTOMATIC");
				})(B || (e.ContextIntent_Type = B = {})),
					t.proto3.util.setEnumType(B, "aiserver.v1.ContextIntent.Type", [
						{ no: 0, name: "TYPE_UNSPECIFIED" },
						{ no: 1, name: "TYPE_USER_ADDED" },
						{ no: 2, name: "TYPE_AUTOMATIC" },
					]);
				class U extends t.Message {
					constructor(oe) {
						super(),
							(this.documentationIdentifier = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Documentation";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "documentation_identifier", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new U().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new U().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new U().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(U, oe, ae);
					}
				}
				e.$7B = U;
				class z extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.mode = F.UNSPECIFIED),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.File";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{ no: 2, name: "mode", kind: "enum", T: t.proto3.getEnumType(F) },
						]);
					}
					static fromBinary(oe, ae) {
						return new z().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new z().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new z().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(z, oe, ae);
					}
				}
				e.$8B = z;
				var F;
				(function (le) {
					(le[(le.UNSPECIFIED = 0)] = "UNSPECIFIED"),
						(le[(le.FULL = 1)] = "FULL"),
						(le[(le.OUTLINE = 2)] = "OUTLINE"),
						(le[(le.CHUNKS = 3)] = "CHUNKS");
				})(F || (e.ContextIntent_File_Mode = F = {})),
					t.proto3.util.setEnumType(F, "aiserver.v1.ContextIntent.File.Mode", [
						{ no: 0, name: "MODE_UNSPECIFIED" },
						{ no: 1, name: "MODE_FULL" },
						{ no: 2, name: "MODE_OUTLINE" },
						{ no: 3, name: "MODE_CHUNKS" },
					]);
				class x extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							(this.text = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CodeSelection";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "potentially_out_of_date_range",
								kind: "message",
								T: i.$Fs,
							},
							{ no: 3, name: "text", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new x().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new x().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new x().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(x, oe, ae);
					}
				}
				e.$9B = x;
				class H extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Symbol";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "symbol", kind: "message", T: i.$8s },
							{ no: 2, name: "relative_workspace_path", kind: "scalar", T: 9 },
						]);
					}
					static fromBinary(oe, ae) {
						return new H().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new H().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new H().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(H, oe, ae);
					}
				}
				e.$0B = H;
				class q extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CommitNotes";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new q().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new q().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new q().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(q, oe, ae);
					}
				}
				e.$$B = q;
				class V extends t.Message {
					constructor(oe) {
						super(),
							(this.scope = { case: void 0 }),
							(this.filterToSeverities = []),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{
								no: 1,
								name: "cmdk_scope",
								kind: "message",
								T: G,
								oneof: "scope",
							},
							{
								no: 2,
								name: "file_scope",
								kind: "message",
								T: K,
								oneof: "scope",
							},
							{
								no: 3,
								name: "filter_to_severities",
								kind: "enum",
								T: t.proto3.getEnumType(i.LintSeverity),
								repeated: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new V().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new V().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new V().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(V, oe, ae);
					}
				}
				e.$_B = V;
				class G extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints.CmdKScope";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new G().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new G().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new G().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(G, oe, ae);
					}
				}
				e.$aC = G;
				class K extends t.Message {
					constructor(oe) {
						super(),
							(this.relativeWorkspacePath = ""),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.Lints.FileScope";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
							{
								no: 2,
								name: "filter_range",
								kind: "message",
								T: i.$Ms,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new K().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new K().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new K().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(K, oe, ae);
					}
				}
				e.$bC = K;
				class J extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.RecentLocations";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 2, name: "timestamp", kind: "scalar", T: 1, opt: !0 },
						]);
					}
					static fromBinary(oe, ae) {
						return new J().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new J().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new J().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(J, oe, ae);
					}
				}
				e.$cC = J;
				class W extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName =
							"aiserver.v1.ContextIntent.PastCmdkConversationsInDiffSessions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new W().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new W().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new W().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(W, oe, ae);
					}
				}
				e.$dC = W;
				class X extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.VisibleTabs";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new X().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new X().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new X().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(X, oe, ae);
					}
				}
				e.$eC = X;
				class Y extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CodebaseChunks";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Y().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Y().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Y().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Y, oe, ae);
					}
				}
				e.$fC = Y;
				class ie extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKCurrentFile";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ie().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ie().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ie().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ie, oe, ae);
					}
				}
				e.$gC = ie;
				class ne extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKQueryEtc";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ne().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ne().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ne().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ne, oe, ae);
					}
				}
				e.$hC = ne;
				class ee extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CustomInstructions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new ee().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new ee().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new ee().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(ee, oe, ae);
					}
				}
				e.$iC = ee;
				class _ extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.CmdKDefinitions";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new _().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new _().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new _().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(_, oe, ae);
					}
				}
				e.$jC = _;
				class te extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.ChatHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new te().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new te().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new te().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(te, oe, ae);
					}
				}
				e.$kC = te;
				class Q extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.DiffHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Q().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Q().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Q().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Q, oe, ae);
					}
				}
				e.$lC = Q;
				class Z extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.TerminalCmdKDefaults";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new Z().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new Z().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new Z().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(Z, oe, ae);
					}
				}
				e.$mC = Z;
				class se extends t.Message {
					constructor(oe) {
						super(),
							(this.instanceId = 0),
							(this.activeForCmdK = !1),
							t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.TerminalHistory";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => [
							{ no: 1, name: "instance_id", kind: "scalar", T: 5 },
							{ no: 2, name: "active_for_cmd_k", kind: "scalar", T: 8 },
							{
								no: 3,
								name: "use_active_instance_as_fallback",
								kind: "scalar",
								T: 8,
								opt: !0,
							},
						]);
					}
					static fromBinary(oe, ae) {
						return new se().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new se().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new se().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(se, oe, ae);
					}
				}
				e.$nC = se;
				class re extends t.Message {
					constructor(oe) {
						super(), t.proto3.util.initPartial(oe, this);
					}
					static {
						this.runtime = t.proto3;
					}
					static {
						this.typeName = "aiserver.v1.ContextIntent.LspSubgraph";
					}
					static {
						this.fields = t.proto3.util.newFieldList(() => []);
					}
					static fromBinary(oe, ae) {
						return new re().fromBinary(oe, ae);
					}
					static fromJson(oe, ae) {
						return new re().fromJson(oe, ae);
					}
					static fromJsonString(oe, ae) {
						return new re().fromJsonString(oe, ae);
					}
					static equals(oe, ae) {
						return t.proto3.util.equals(re, oe, ae);
					}
				}
				e.$oC = re;
			},
		),
		