import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './utils.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/contrib/cCppGhostText/common/cppGhostTextUtils.js';
define(
			de[2963],
			he([1, 0, 148, 45, 1229, 25, 280, 134, 20, 5, 1153]),
			function (ce /*require*/,
 e /*exports*/,
 t /*aiserver_pb*/,
 i /*reactiveStorageService*/,
 w /*utils*/,
 E /*workspace*/,
 C /*aiEverythingProviderService*/,
 d /*reactiveStorageTypes*/,
 m /*extensions*/,
 r /*instantiation*/,
 u /*cppGhostTextUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1ed = e.$Zed = void 0),
					(e.$Zed = (0, r.$Mi)("cppBadHeuristics"));
				let a = class {
					constructor(c, n, g) {
						(this.a = c), (this.b = n), (this.c = g);
					}
					async isValidCppCase({
						model: c,
						modelOutputText: n,
						startingRange: g,
						notebookInfo: p,
						eol: o,
					}) {
						let { isNoOp: f } = (0, w.$Qed)(c, g, n, o);
						if (f) return { valid: !1 };
						if (
							!this.a.applicationUserPersistentStorage
								.cppShowWhitespaceOnlyChanges
						) {
							const $ = c.getValueInRange({
									startLineNumber: g.startLineNumber,
									startColumn: g.startColumn,
									endLineNumber: g.endLineNumberInclusive,
									endColumn: g.endColumn,
								}),
								{ charDiffs: v } = (0, u.$wlc)($, n, o);
							let S = !0;
							for (const I of v)
								if (
									(I.added === !0 || I.removed === !0) &&
									I.value.trim() !== ""
								) {
									S = !1;
									break;
								}
							if (S)
								return (
									console.log(
										"[Cpp] Bad Case: all changes are whitespace only but user has showWhitespaceOnlyChanges disabled",
									),
									{ valid: !1 }
								);
						}
						let s = n.split(o),
							l = c.getValue().split(o);
						const y =
							this.a.applicationUserPersistentStorage.cppConfig?.heuristics;
						if (y === void 0) return { valid: !0, modelOutputText: n };
						if (
							y.includes(t.CppConfigResponse_Heuristic.REVERTING_USER_CHANGE)
						) {
							const $ = (0, w.$Red)(c, g, n, o, p),
								v = this.b.asRelativePath(c.uri);
							for (const S of $)
								if (
									await this.c.onlyLocalProvider?.runCommand(
										d.EditHistoryActions.IsRevertingToRecentModel,
										{ relativePath: v, modelValue: S },
									)
								)
									return (
										console.log(
											"[Bad CPP Case 4] Reverting a change the user just made",
										),
										{ valid: !1 }
									);
						}
						if (
							y.includes(
								t.CppConfigResponse_Heuristic
									.OUTPUT_EXTENDS_BEYOND_RANGE_AND_IS_REPEATED,
							)
						) {
							(s = n.split(o)),
								(l = c.getValue().split(o).slice(g.startLineNumber));
							let $ = !0;
							for (
								let v = 0;
								v < s.length && !(v === s.length - 1 && s[v] === "");
								v++
							)
								if (
									s[v] === void 0 ||
									l[v] === void 0 ||
									s[v].trim() !== l[v].trim()
								) {
									$ = !1;
									break;
								}
							if ($)
								return (
									console.log(
										"[Bad CPP Case 5] Output extends beyond range but is all same",
									),
									{ valid: !1 }
								);
						}
						if (
							y.includes(
								t.CppConfigResponse_Heuristic.SUGGESTING_RECENTLY_REJECTED_EDIT,
							)
						) {
							const $ = (0, w.$Red)(c, g, n, o, p),
								v = this.b.asRelativePath(c.uri),
								S =
									this.a.applicationUserPersistentStorage.cppConfig
										?.recentlyRejectedEditThresholds;
							if (S !== void 0) {
								for (const I of $)
									if (
										await this.c.onlyLocalProvider?.runCommand(
											d.EditHistoryActions.IsSuggestingRecentlyRejectedEdit,
											{
												relativePath: v,
												modelValue: I,
												numberOfTimesSoftRejectedThreshold:
													S.softRejectThreshold,
												numberOfTimesHardRejectedThreshold:
													S.hardRejectThreshold,
											},
										)
									)
										return (
											console.log(
												"[Bad CPP Case 6] Suggesting a recently rejected edit",
											),
											{ valid: !1 }
										);
							}
						}
						return { valid: !0, modelOutputText: n };
					}
				};
				(e.$1ed = a),
					(e.$1ed = a = Ne([j(0, i.$0zb), j(1, E.$Vi), j(2, C.$3Db)], a)),
					(0, m.$lK)(e.$Zed, a, m.InstantiationType.Delayed);
			},
		),
		