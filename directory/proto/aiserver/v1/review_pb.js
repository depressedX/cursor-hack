define(de[736], he([1, 0, 86, 83, 642, 148]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7ab =
					e.$6ab =
					e.$5ab =
					e.$4ab =
					e.$3ab =
					e.$2ab =
					e.$1ab =
					e.$Zab =
					e.$Yab =
					e.$Xab =
					e.$Wab =
					e.$Vab =
					e.$Uab =
					e.$Tab =
					e.$Sab =
					e.$Rab =
					e.$Qab =
					e.$Pab =
					e.$Oab =
					e.$Nab =
						void 0);
			class C extends t.Message {
				constructor(T) {
					super(),
						(this.telemEnabled = !1),
						(this.bugBotDismissedNotificationLast10TimesUnixMs = []),
						(this.bugBotViewedNotificationLast10TimesUnixMs = []),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugConfigRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "telem_enabled", kind: "scalar", T: 8 },
						{
							no: 2,
							name: "bug_bot_dismissed_notification_last_10_times_unix_ms",
							kind: "scalar",
							T: 1,
							repeated: !0,
						},
						{
							no: 3,
							name: "bug_bot_viewed_notification_last_10_times_unix_ms",
							kind: "scalar",
							T: 1,
							repeated: !0,
						},
					]);
				}
				static fromBinary(T, P) {
					return new C().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new C().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new C().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(C, T, P);
				}
			}
			e.$Nab = C;
			class d extends t.Message {
				constructor(T) {
					super(), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugConfigResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "linter_strategy_v1", kind: "message", T: m },
						{ no: 2, name: "bug_bot_v1", kind: "message", T: u },
						{ no: 3, name: "linter_strategy_v2", kind: "message", T: r },
					]);
				}
				static fromBinary(T, P) {
					return new d().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new d().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new d().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(d, T, P);
				}
			}
			e.$Oab = d;
			class m extends t.Message {
				constructor(T) {
					super(),
						(this.enabled = !1),
						(this.tryTriggerOnSave = !1),
						(this.waitBetweenTriggersMs = 0),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugConfigResponse.LinterStrategyV1";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "enabled", kind: "scalar", T: 8 },
						{ no: 2, name: "try_trigger_on_save", kind: "scalar", T: 8 },
						{ no: 3, name: "wait_between_triggers_ms", kind: "scalar", T: 1 },
					]);
				}
				static fromBinary(T, P) {
					return new m().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new m().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new m().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(m, T, P);
				}
			}
			e.$Pab = m;
			class r extends t.Message {
				constructor(T) {
					super(),
						(this.enabled = !1),
						(this.waitBetweenTriggersMs = 0),
						(this.debounceTriggersMs = 0),
						(this.keepLinesAroundChunk = 0),
						(this.preventTriggeringForFilesWithThisManyLines = 0),
						(this.preventTriggeringWhenLints = !1),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugConfigResponse.LinterStrategyV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "enabled", kind: "scalar", T: 8 },
						{ no: 2, name: "wait_between_triggers_ms", kind: "scalar", T: 1 },
						{ no: 3, name: "debounce_triggers_ms", kind: "scalar", T: 1 },
						{ no: 4, name: "keep_lines_around_chunk", kind: "scalar", T: 5 },
						{
							no: 5,
							name: "prevent_triggering_for_files_with_this_many_lines",
							kind: "scalar",
							T: 5,
						},
						{
							no: 6,
							name: "prevent_triggering_when_lints",
							kind: "scalar",
							T: 8,
						},
					]);
				}
				static fromBinary(T, P) {
					return new r().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new r().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new r().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(r, T, P);
				}
			}
			e.$Qab = r;
			class u extends t.Message {
				constructor(T) {
					super(),
						(this.enabled = !1),
						(this.isSubsidized = !1),
						(this.backgroundCallFrequencyMs = 0),
						(this.killSwitch = !1),
						(this.showIntrusiveNotificationOnlyIfLastTimeWasMoreThanMsAgo = 0),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.BugConfigResponse.BugBotV1";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "enabled", kind: "scalar", T: 8 },
						{ no: 2, name: "is_subsidized", kind: "scalar", T: 8 },
						{
							no: 3,
							name: "background_call_frequency_ms",
							kind: "scalar",
							T: 5,
						},
						{ no: 4, name: "kill_switch", kind: "scalar", T: 8 },
						{
							no: 5,
							name: "show_intrusive_notification_only_if_last_time_was_more_than_ms_ago",
							kind: "scalar",
							T: 1,
						},
						{
							no: 6,
							name: "background_diff_absolute_max_tokens",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 7,
							name: "background_diff_min_min_token_threshold",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 8,
							name: "background_diff_min_max_token_threshold",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 9,
							name: "background_diff_last_commit_less_than_this_many_ms_ago",
							kind: "scalar",
							T: 1,
							opt: !0,
						},
						{
							no: 15,
							name: "background_unified_context_lines",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 16,
							name: "background_diff_include_uncommitted",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{
							no: 10,
							name: "default_diff_context_lines",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 11,
							name: "diff_absolute_max_tokens",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 12,
							name: "custom_instructions_max_char_length",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 13,
							name: "default_fallback_iterations",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 14,
							name: "threshold_for_expensive_run_modal_cents",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{ no: 17, name: "cheap_model_name", kind: "scalar", T: 9, opt: !0 },
						{
							no: 18,
							name: "cheap_absolute_max_tokens",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
						{
							no: 19,
							name: "expensive_absolute_max_tokens",
							kind: "scalar",
							T: 5,
							opt: !0,
						},
					]);
				}
				static fromBinary(T, P) {
					return new u().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new u().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new u().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(u, T, P);
				}
			}
			e.$Rab = u;
			class a extends t.Message {
				constructor(T) {
					super(),
						(this.activeFile = ""),
						(this.cursorLineNumberOneIndexed = 0),
						(this.telemEnabled = !1),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugBotLinterRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "git_diff", kind: "message", T: i.$Cs },
						{ no: 2, name: "active_file", kind: "scalar", T: 9 },
						{
							no: 3,
							name: "cursor_line_number_one_indexed",
							kind: "scalar",
							T: 5,
						},
						{ no: 4, name: "session_id", kind: "scalar", T: 9, opt: !0 },
						{ no: 5, name: "telem_enabled", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(T, P) {
					return new a().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new a().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new a().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(a, T, P);
				}
			}
			e.$Sab = a;
			class h extends t.Message {
				constructor(T) {
					super(), (this.bugs = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugBotLinterResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bugs", kind: "message", T: w.$uv, repeated: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new h().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new h().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new h().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(h, T, P);
				}
			}
			e.$Tab = h;
			class c extends t.Message {
				constructor(T) {
					super(),
						(this.diffString = ""),
						(this.oldStart = 0),
						(this.newStart = 0),
						(this.oldLines = 0),
						(this.newLines = 0),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ChunkDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "diff_string", kind: "scalar", T: 9 },
						{ no: 2, name: "old_start", kind: "scalar", T: 5 },
						{ no: 3, name: "new_start", kind: "scalar", T: 5 },
						{ no: 4, name: "old_lines", kind: "scalar", T: 5 },
						{ no: 5, name: "new_lines", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(T, P) {
					return new c().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new c().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new c().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(c, T, P);
				}
			}
			e.$Uab = c;
			class n extends t.Message {
				constructor(T) {
					super(), (this.fileDiffs = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewRequestV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file_diffs", kind: "message", T: g, repeated: !0 },
						{ no: 2, name: "linter_rules", kind: "scalar", T: 9, opt: !0 },
						{
							no: 3,
							name: "also_find_hard_bugs",
							kind: "scalar",
							T: 8,
							opt: !0,
						},
						{ no: 4, name: "save_request_as", kind: "scalar", T: 9, opt: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new n().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new n().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new n().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(n, T, P);
				}
			}
			e.$Vab = n;
			class g extends t.Message {
				constructor(T) {
					super(), (this.chunkDiffs = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewRequestV2.FileDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "message", T: i.$Rs },
						{ no: 2, name: "chunk_diffs", kind: "message", T: c, repeated: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new g().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new g().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new g().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(g, T, P);
				}
			}
			e.$Wab = g;
			class p extends t.Message {
				constructor(T) {
					super(),
						(this.id = ""),
						(this.chunkId = ""),
						(this.relativeWorkspacePath = ""),
						(this.startLine = 0),
						(this.endLine = 0),
						(this.description = ""),
						(this.severity = 0),
						(this.tldr = ""),
						(this.diff = ""),
						(this.fullChunkStartLine = 0),
						(this.fullChunkEndLine = 0),
						(this.fullChunkTotalLines = 0),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewBugV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "id", kind: "scalar", T: 9 },
						{ no: 2, name: "chunk_id", kind: "scalar", T: 9 },
						{ no: 3, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 4, name: "start_line", kind: "scalar", T: 5 },
						{ no: 5, name: "end_line", kind: "scalar", T: 5 },
						{ no: 6, name: "description", kind: "scalar", T: 9 },
						{ no: 7, name: "severity", kind: "scalar", T: 5 },
						{ no: 8, name: "tldr", kind: "scalar", T: 9 },
						{ no: 9, name: "diff", kind: "scalar", T: 9 },
						{ no: 10, name: "full_chunk_start_line", kind: "scalar", T: 5 },
						{ no: 11, name: "full_chunk_end_line", kind: "scalar", T: 5 },
						{ no: 12, name: "full_chunk_total_lines", kind: "scalar", T: 5 },
					]);
				}
				static fromBinary(T, P) {
					return new p().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new p().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new p().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(p, T, P);
				}
			}
			e.$Xab = p;
			class o extends t.Message {
				constructor(T) {
					super(), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewResponseV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bug", kind: "message", T: p },
					]);
				}
				static fromBinary(T, P) {
					return new o().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new o().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new o().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(o, T, P);
				}
			}
			e.$Yab = o;
			class f extends t.Message {
				constructor(T) {
					super(), (this.messages = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewChatRequestV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file", kind: "message", T: i.$Rs },
						{ no: 2, name: "bug", kind: "message", T: p },
						{ no: 3, name: "linter_rules", kind: "scalar", T: 9, opt: !0 },
						{
							no: 4,
							name: "messages",
							kind: "message",
							T: E.$kG,
							repeated: !0,
						},
					]);
				}
				static fromBinary(T, P) {
					return new f().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new f().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new f().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(f, T, P);
				}
			}
			e.$Zab = f;
			class b extends t.Message {
				constructor(T) {
					super(), (this.text = ""), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.ReviewChatResponseV2";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "text", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(T, P) {
					return new b().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new b().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new b().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(b, T, P);
				}
			}
			e.$1ab = b;
			class s extends t.Message {
				constructor(T) {
					super(), (this.bugs = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingResponse";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "bugs", kind: "message", T: l, repeated: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new s().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new s().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new s().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(s, T, P);
				}
			}
			e.$2ab = s;
			class l extends t.Message {
				constructor(T) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.startLine = 0),
						(this.endLineInclusive = 0),
						(this.codeLines = []),
						(this.severity = 0),
						(this.confidence = 0),
						(this.description = ""),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingResponse.Bug";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "start_line", kind: "scalar", T: 5 },
						{ no: 3, name: "end_line_inclusive", kind: "scalar", T: 5 },
						{ no: 4, name: "code_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 5, name: "severity", kind: "scalar", T: 1 },
						{ no: 6, name: "confidence", kind: "scalar", T: 1 },
						{ no: 7, name: "description", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(T, P) {
					return new l().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new l().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new l().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(l, T, P);
				}
			}
			e.$3ab = l;
			class y extends t.Message {
				constructor(T) {
					super(), (this.fileDiffs = []), t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingRequest";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "file_diffs", kind: "message", T: $, repeated: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new y().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new y().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new y().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(y, T, P);
				}
			}
			e.$4ab = y;
			class $ extends t.Message {
				constructor(T) {
					super(),
						(this.relativeWorkspacePath = ""),
						(this.lines = []),
						(this.hunks = []),
						(this.notTruncated = !1),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "relative_workspace_path", kind: "scalar", T: 9 },
						{ no: 2, name: "lines", kind: "message", T: S, repeated: !0 },
						{ no: 3, name: "hunks", kind: "message", T: v, repeated: !0 },
						{
							no: 4,
							name: "old_relative_workspace_path",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 5, name: "not_truncated", kind: "scalar", T: 8 },
					]);
				}
				static fromBinary(T, P) {
					return new $().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new $().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new $().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals($, T, P);
				}
			}
			e.$5ab = $;
			class v extends t.Message {
				constructor(T) {
					super(),
						(this.oldStartOneIndexed = 0),
						(this.newStartOneIndexed = 0),
						(this.oldLines = []),
						(this.newLines = []),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff.Hunk";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "old_start_one_indexed", kind: "scalar", T: 5 },
						{ no: 2, name: "new_start_one_indexed", kind: "scalar", T: 5 },
						{ no: 3, name: "old_lines", kind: "scalar", T: 9, repeated: !0 },
						{ no: 4, name: "new_lines", kind: "scalar", T: 9, repeated: !0 },
					]);
				}
				static fromBinary(T, P) {
					return new v().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new v().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new v().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(v, T, P);
				}
			}
			e.$6ab = v;
			class S extends t.Message {
				constructor(T) {
					super(),
						(this.oneIndexedLineNumber = 0),
						(this.line = ""),
						t.proto3.util.initPartial(T, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.StreamBugFindingRequest.FileDiff.Line";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{ no: 1, name: "one_indexed_line_number", kind: "scalar", T: 5 },
						{ no: 2, name: "line", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(T, P) {
					return new S().fromBinary(T, P);
				}
				static fromJson(T, P) {
					return new S().fromJson(T, P);
				}
				static fromJsonString(T, P) {
					return new S().fromJsonString(T, P);
				}
				static equals(T, P) {
					return t.proto3.util.equals(S, T, P);
				}
			}
			e.$7ab = S;
		}),
		