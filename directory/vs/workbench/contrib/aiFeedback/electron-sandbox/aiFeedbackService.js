import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/resources.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/editor.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/path.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../../browser/workbench.contribution.js';
import '../../../../platform/native/common/native.js';
import '../../../../base/common/platform.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/constants.js';
import '../../cursoreval/browser/cursorEvalService.js';
import '../../../services/ai/browser/aiService.js';
define(
			de[3939],
			he([
				1, 0, 24, 19, 20, 5, 11, 25, 83, 148, 83, 18, 44, 48, 17, 54, 232, 32,
				356, 1905, 110, 12, 62, 58, 684, 118,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*resources*/,
				w /*extensions*/,
				E /*instantiation*/,
				C /*actions*/,
				d /*workspace*/,
				m /*utils_pb*/,
				r /*aiserver_pb*/,
				u /*utils_pb*/,
				a /*editorService*/,
				h /*editor*/,
				c /*position*/,
				n /*range*/,
				g /*path*/,
				p /*authenticationService*/,
				o /*telemetry*/,
				f /*dataScrubbingService*/,
				b /*workbench.contribution*/,
				s /*native*/,
				l /*platform*/,
				y /*productService*/,
				$ /*constants*/,
				v /*cursorEvalService*/,
				S /*aiService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ofd = void 0),
					(e.$Ofd = (0, E.$Mi)("FeedbackService"));
				let I = class {
					constructor(L, D, M, N, A, R, O, B, U) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							(this.d = N),
							(this.f = A),
							(this.g = R),
							(this.h = O),
							(this.j = B),
							(this.k = U);
					}
					reportFeedback(L) {
						return Promise.resolve();
					}
					async reportBug(L) {
						const D = (O) => {
							switch (O) {
								case "low":
									return r.ReportBugRequest_BugType.LOW;
								case "medium":
									return r.ReportBugRequest_BugType.MEDIUM;
								case "urgent":
									return r.ReportBugRequest_BugType.URGENT;
								case "crash":
									return r.ReportBugRequest_BugType.CRASH;
								default:
									return r.ReportBugRequest_BugType.LOW;
							}
						};
						let M = "";
						if (
							L.includeConsoleLogs === !0 ||
							(L.includeConsoleLogs === void 0 &&
								this.c.reactivePrivacyMode() !== !0)
						) {
							const O = `----------log divider------
`;
							try {
								M = b.$Atc.join(O);
							} catch {
								console.log("^ could not compile logs"),
									(M = "could not compile logs");
							}
							const B = 5e4;
							if (M.length > B) {
								const U =
									"Truncated console logs to last " + B + " characters:" + O;
								M = U + M.slice(-(B - U.length));
							}
						} else
							M = `(omitted because the user requested so. privacy mode: ${this.c.reactivePrivacyMode()})`;
						const N = await this.g.getOSProperties(),
							A = await this.j.getCmdKDebugInfo();
						this.d.publicLogCapture("submitted.feedback");
						const R = await this.k.aiClient();
						for (let O = 0; O < 3; O++) {
							try {
								await R.reportBug({
									bug: L.bug ?? "nothing",
									bugType: L.priority,
									contactEmail: L.contactEmail ?? "",
									context: {
										screenshots: L.screenshots ?? [],
										currentFile: this.c.reactivePrivacyMode()
											? void 0
											: await this.getCurrentFileInfoSyncWithoutNotebooks(),
										conversation: [],
										logs: [],
										debugInfo: A,
										cursorVersion: this.h.version,
										os: `${N.type} ${N.arch} ${N.release}${l.$o ? " snap" : ""}`,
										connectionErrorRaw: L.connectionErrorRaw ?? "",
										failingRequstId: L.failingRequestID ?? "",
										protoUrl: L.protoURL ?? "",
										connectErrorCode: L.connectErrorCode,
										errorDetailCode: L.errorDetailCode,
										errorDetailTitle: L.errorDetailTitle,
										errorDetailDetail: L.errorDetailDetail,
									},
								});
								break;
							} catch (B) {
								console.error("error reporting bug", B);
							}
							await new Promise((B) => setTimeout(B, 2e3));
						}
					}
					getWorkspaceRootPath() {
						const L = this.a.getWorkspace().folders;
						return L.length > 0 ? L[0].uri.path : "";
					}
					asRelativePath(L, D) {
						let M = this.a.getWorkspaceFolder(L);
						if (!M) {
							const A = this.a.getWorkspace(),
								R = (0, t.$Sb)(A.folders);
							R &&
								L.scheme !== R.uri.scheme &&
								L.path.startsWith(g.$lc.sep) &&
								(M = this.a.getWorkspaceFolder(R.uri.with({ path: L.path })));
						}
						if (!M) return L.fsPath;
						typeof D > "u" && (D = this.a.getWorkspace().folders.length > 1);
						let N = (0, i.$ph)(M.uri, L);
						return D && M.name && (N = `${M.name}/${N}`), N ?? L.fsPath;
					}
					async getCurrentFileInfoSyncWithoutNotebooks() {
						const L = this.b.activeEditorPane;
						let D = h.$A1.getOriginalUri(L?.input),
							M = "",
							N,
							A;
						const R = L?.getControl();
						(N = R?.getPosition() ?? new c.$hL(1, 1)),
							(A =
								R?.getSelection() ??
								new n.$iL(N.lineNumber, N.column, N.lineNumber, N.column));
						const O = R?.getModel();
						M = await this.f.cleanText(O?.getValue() ?? "", D?.path);
						let B = O?.getLanguageIdAtPosition(N.lineNumber, N.column) ?? "";
						return new u.$Ws({
							relativeWorkspacePath: D ? this.asRelativePath(D) : "",
							contents: M,
							cursorPosition: new m.$ys({
								line: N.lineNumber - 1,
								column: N.column - 1,
							}),
							selection: new m.$Ns({
								startPosition: new m.$ys({
									line: A.startLineNumber - 1,
									column: A.startColumn - 1,
								}),
								endPosition: new m.$ys({
									line: A.endLineNumber - 1,
									column: A.endColumn - 1,
								}),
							}),
							languageId: B,
						});
					}
				};
				(I = Ne(
					[
						j(0, d.$Vi),
						j(1, a.$IY),
						j(2, p.$x6b),
						j(3, o.$km),
						j(4, f.$zIb),
						j(5, s.$y7c),
						j(6, y.$Bk),
						j(7, v.$06b),
						j(8, S.$Nfc),
					],
					I,
				)),
					(0, w.$lK)(e.$Ofd, I, w.InstantiationType.Delayed);
				class T extends C.$3X {
					static {
						this.ID = "aiFeedback.action.reportFeedback";
					}
					static {
						this.LABEL = "Give use feedback, and report issues";
					}
					constructor() {
						super({
							id: T.ID,
							title: { value: "Share Feedback", original: "Share Feedback" },
							f1: !1,
						});
					}
					run(L, D, ...M) {
						L.get(e.$Ofd).reportFeedback(D);
					}
				}
				(0, C.$4X)(T);
				class P extends C.$3X {
					static {
						this.LABEL = "Report Bug";
					}
					constructor() {
						super({
							id: $.$qX,
							title: { value: P.LABEL, original: P.LABEL },
							f1: !1,
						});
					}
					run(L, D, ...M) {
						const N = L.get(e.$Ofd);
						(D.consoleLogs = void 0), N.reportBug(D);
					}
				}
				(0, C.$4X)(P);
			},
		)
