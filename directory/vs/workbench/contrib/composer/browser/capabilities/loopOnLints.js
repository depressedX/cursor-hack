import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../composerCapabilities.js';
import '../../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../composerCapabilitySchemas.js';
import '../../../../services/shadowWorkspace/common/shadowWorkspaceService.js';
import '../../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/markers/common/markers.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../composerDataService.js';
import '../../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../services/ai/browser/aiService.js';
import '../../../../../../proto/aiserver/v1/shadow_workspace_pb.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../composerCapabilityDecorators.js';
import '../composerUtilsService.js';
define(
			de[3955],
			he([
				1, 0, 262, 148, 351, 626, 83, 9, 90, 25, 209, 126, 118, 454, 167, 395,
				426,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*composerCapabilities*/,
 i /*aiserver_pb*/,
 w /*composerCapabilitySchemas*/,
 E /*shadowWorkspaceService*/,
 C /*utils_pb*/,
 d /*uri*/,
 m /*markers*/,
 r /*workspace*/,
 u /*composerDataService*/,
 a /*chat_pb*/,
 h /*aiService*/,
 c /*shadow_workspace_pb*/,
 n /*composer_pb*/,
 g /*composerCapabilityDecorators*/,
 p /*composerUtilsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LoopOnLints = void 0);
				let o = class extends t.ComposerCapability {
					constructor(b, s, l, y, $, v, S, I) {
						super(b, s),
							(this.shadowWorkspaceService = l),
							(this.markerService = y),
							(this.workspaceContextService = $),
							(this.composerDataService = v),
							(this.composerUtilsService = S),
							(this.aiService = I),
							(this.type =
								n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS),
							(this.name =
								t.capabilityTypeLabels[
									n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS
								]),
							(this.priority = 1),
							(this.schema = w.loopOnLintsSchema),
							(this.shouldDisplayStatus = !1);
					}
					shouldRunLoopOnLints(b) {
						const s = this.composerDataService.getComposerData(b);
						return !s?.isAgentic && s?.forceMode !== "chat";
					}
					shouldRunOnBeforeSubmitChat(b) {
						return this.shouldRunLoopOnLints(b.composerId)
							? this.shouldDisplayStatus
							: !1;
					}
					silentOnBeforeSubmitChat() {
						return !this.shouldDisplayStatus;
					}
					async onBeforeSubmitChat(b) {
						this.shouldDisplayStatus = !1;
					}
					silentRunInPlaceMutateRequestBeforeSubmit() {
						return !0;
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(b) {
						return this.shouldRunLoopOnLints(b.composerId);
					}
					async runInPlaceMutateRequestBeforeSubmit(b, s) {
						const { composerId: l } = s,
							y = this.composerDataService.getComposerData(l),
							$ = b.conversation?.[b.conversation.length - 1];
						if (!$ || !y || $.type !== a.ConversationMessage_MessageType.HUMAN)
							return;
						let v = [];
						if (
							(this.data.shadowWorkspace
								? (v =
										await this.getLinterErrorsForComposerUsingShadowWorkspace(
											y,
										))
								: (v = await this.getLinterErrorsForComposer(y)),
							v.length === 0)
						)
							return;
						const S = new n.$1z({
							type: n.ComposerCapabilityRequest_ComposerCapabilityType
								.LOOP_ON_LINTS,
							data: {
								case: "loopOnLints",
								value: {
									linterErrors: v,
									customInstructions: this.data.customInstructions,
								},
							},
						});
						$.capabilities = [...($.capabilities ?? []), S];
					}
					shouldRunOnComposerSettled(b) {
						return this.shouldRunLoopOnLints(b.composerId);
					}
					async onComposerSettledReturnShouldLoop(b) {
						const { composerId: s } = b,
							l = this.composerDataService.getComposerData(s);
						if (!l) return (this.shouldDisplayStatus = !1), !1;
						const y = (0,
							t.countCapabilityIterationsFromLastHumanMessageExcludingCurrent)(
								l.conversation,
							),
							$ = this.data.maxIterations;
						if (y >= $) return (this.shouldDisplayStatus = !1), !1;
						await new Promise((I) => setTimeout(I, 500));
						let v = [];
						this.data.shadowWorkspace
							? (v =
									await this.getLinterErrorsForComposerUsingShadowWorkspace(l))
							: (v = await this.getLinterErrorsForComposer(l));
						const S = v.length > 0;
						return (this.shouldDisplayStatus = S), S;
					}
					async getLinterErrorsForComposerUsingShadowWorkspace(b) {
						try {
							const s = await this.shadowWorkspaceService.getClient(),
								l = Object.values(b.codeBlockData ?? {}).flatMap((S) => {
									if (S.length === 0) return [];
									const I =
											"/" +
											this.workspaceContextService.asRelativePath(S[0]?.uri),
										T = b.composerId,
										P = this.composerUtilsService.getCodeBlockNewModelLines(
											T,
											S[0]?.uri,
											S[0]?.version,
										),
										k =
											this.composerUtilsService.getCodeBlockOriginalModelLines(
												T,
												S[0]?.uri,
												S[0]?.version,
											);
									return {
										relativeWorkspacePath: I,
										initialContent: k?.join(`
`),
										finalContent: P?.join(`
`),
									};
								}),
								y = await s.getLintsForChange(new c.$tx({ files: l })),
								$ = new Map(),
								v = new Map();
							for (const S of l)
								v.set(S.relativeWorkspacePath, S.finalContent ?? "");
							for (const S of y.lints) {
								let I = $.get(S.relativeWorkspacePath);
								I ||
									((I = new C.$4s({
										relativeWorkspacePath: S.relativeWorkspacePath,
										errors: [],
										fileContents: v.get(S.relativeWorkspacePath) ?? "",
									})),
									$.set(S.relativeWorkspacePath, I));
								const T = new C.$3s({
									message: S.message,
									range: new C.$Ns({
										startPosition: {
											line: S.startLineNumberOneIndexed - 1,
											column: S.startColumnOneIndexed - 1,
										},
										endPosition: {
											line: S.endLineNumberInclusiveOneIndexed - 1,
											column: S.endColumnOneIndexed - 1,
										},
									}),
									severity: this.mapSeverity(S.severity),
								});
								I.errors.push(T);
							}
							return Array.from($.values());
						} catch (s) {
							return (
								console.error(
									"[composer] error getting lints for composer using shadow workspace",
									s,
								),
								[]
							);
						}
					}
					mapSeverity(b) {
						switch (b.toLowerCase()) {
							case "error":
								return C.Diagnostic_DiagnosticSeverity.ERROR;
							case "warning":
								return C.Diagnostic_DiagnosticSeverity.WARNING;
							case "information":
								return C.Diagnostic_DiagnosticSeverity.INFORMATION;
							case "hint":
								return C.Diagnostic_DiagnosticSeverity.HINT;
							default:
								return C.Diagnostic_DiagnosticSeverity.UNSPECIFIED;
						}
					}
					async getLinterErrorsForComposer(b) {
						const s = new Set([
								...Object.keys(b.codeBlockData ?? {}),
								...b.context.fileSelections.map(($) => $.uri.toString()),
							]),
							l = Array.from(s).map(($) => d.URI.parse($)),
							y = [];
						for (const $ of l) {
							const S = this.markerService
								.read({ resource: $ })
								.filter((I) => I.severity === m.MarkerSeverity.Error)
								.map(
									(I) =>
										new i.$yF({
											message: I.message,
											source: I.source,
											range: new C.$Ns({
												startPosition: {
													line: I.startLineNumber,
													column: I.startColumn,
												},
												endPosition: {
													line: I.endLineNumber,
													column: I.endColumn,
												},
											}),
											relativeWorkspacePath:
												this.workspaceContextService.asRelativePath($),
										}),
								);
							if (S.length > 0) {
								const I = new C.$4s({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath($),
									errors: S,
									fileContents: (
										await this.aiService.getCurrentFileInfo($, {
											actuallyReadFromOverrideURI: !0,
										})
									)?.contents,
								});
								y.push(I);
							}
						}
						return y;
					}
					silentOnComposerSettled(b) {
						return !0;
					}
				};
				(e.LoopOnLints = o),
					(e.LoopOnLints = o =
						Ne(
							[
								(0, g.autoCancellableAndStatusUpdater)(),
								j(2, E.$k7b),
								j(3, m.$aM),
								j(4, r.$Vi),
								j(5, u.IComposerDataService),
								j(6, p.IComposerUtilsService),
								j(7, h.$Nfc),
							],
							o,
						)),
					(0, t.registerComposerCapability)(
						n.ComposerCapabilityRequest_ComposerCapabilityType.LOOP_ON_LINTS,
						o,
					);
			},
		)
