import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/instantiation/common/extensions.js';
import '../../../../../platform/instantiation/common/instantiation.js';
define(de[398], he([1, 0, 124, 3, 20, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*tools_pb*/,
 i /*lifecycle*/,
 w /*extensions*/,
 E /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xyc =
					e.$Wyc =
					e.WriteTerminalState =
					e.$Vyc =
					e.$Uyc =
					e.$Tyc =
						void 0),
				(e.$Tyc = (0, E.$Mi)("toolsV2HandlerRegistryService")),
				(e.$Uyc = {
					[t.ClientSideToolV2.READ_FILE_FOR_IMPORTS]: {
						paramName: "readFileForImportsParams",
						returnName: "readFileForImportsResult",
					},
					[t.ClientSideToolV2.READ_SEMSEARCH_FILES]: {
						paramName: "readSemsearchFilesParams",
						returnName: "readSemsearchFilesResult",
					},
					[t.ClientSideToolV2.RIPGREP_SEARCH]: {
						paramName: "ripgrepSearchParams",
						returnName: "ripgrepSearchResult",
					},
					[t.ClientSideToolV2.RUN_TERMINAL_COMMAND_V2]: {
						paramName: "runTerminalCommandV2Params",
						returnName: "runTerminalCommandV2Result",
					},
					[t.ClientSideToolV2.RUN_TERMINAL_COMMAND]: {
						paramName: "runTerminalCommandParams",
						returnName: "runTerminalCommandResult",
					},
					[t.ClientSideToolV2.READ_FILE]: {
						paramName: "readFileParams",
						returnName: "readFileResult",
					},
					[t.ClientSideToolV2.LIST_DIR]: {
						paramName: "listDirParams",
						returnName: "listDirResult",
					},
					[t.ClientSideToolV2.EDIT_FILE]: {
						paramName: "editFileParams",
						returnName: "editFileResult",
					},
					[t.ClientSideToolV2.FILE_SEARCH]: {
						paramName: "fileSearchParams",
						returnName: "fileSearchResult",
					},
					[t.ClientSideToolV2.SEMANTIC_SEARCH_FULL]: {
						paramName: "semanticSearchFullParams",
						returnName: "semanticSearchFullResult",
					},
					[t.ClientSideToolV2.CREATE_FILE]: {
						paramName: "createFileParams",
						returnName: "createFileResult",
					},
					[t.ClientSideToolV2.DELETE_FILE]: {
						paramName: "deleteFileParams",
						returnName: "deleteFileResult",
					},
					[t.ClientSideToolV2.REAPPLY]: {
						paramName: "reapplyParams",
						returnName: "reapplyResult",
					},
					[t.ClientSideToolV2.PARALLEL_APPLY]: {
						paramName: "parallelApplyParams",
						returnName: "parallelApplyResult",
					},
					[t.ClientSideToolV2.GET_RELATED_FILES]: {
						paramName: "getRelatedFilesParams",
						returnName: "getRelatedFilesResult",
					},
				});
			class C extends Error {
				constructor(a) {
					super(a);
				}
			}
			e.$Vyc = C;
			var d;
			(function (u) {
				(u[(u.newTerminal = 0)] = "newTerminal"),
					(u[(u.writingCommand = 1)] = "writingCommand"),
					(u[(u.writingResponse = 2)] = "writingResponse"),
					(u[(u.endTerminal = 3)] = "endTerminal"),
					(u[(u.none = 4)] = "none");
			})(d || (e.WriteTerminalState = d = {}));
			let m = class extends i.$1c {
				constructor(a) {
					super(), (this.c = a), (this.a = new Map()), (this.b = new Set());
				}
				getAvailableTools() {
					return Array.from(this.b);
				}
				registerHandler(a, h, c) {
					this.a.set(a, { handler: this.c.createInstance(h) }),
						c || this.b.add(a);
				}
				getHandler(a) {
					const h = this.a.get(a);
					if (!h) throw new Error(`Handler for tool ${a} not found`);
					return h.handler;
				}
			};
			(e.$Wyc = m), (e.$Wyc = m = Ne([j(0, E.$Li)], m));
			class r {
				async setup(a, h, c, n) {}
				async streamedCall(a, h, c, n) {
					throw new Error("Not implemented");
				}
				async finishStream(a, h, c, n) {
					throw new Error("Not implemented");
				}
			}
			(e.$Xyc = r), (0, w.$lK)(e.$Tyc, m, w.InstantiationType.Delayed);
		}),
		