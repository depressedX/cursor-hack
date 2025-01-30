import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/cpp_pb.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../browser/cppDebouncingService.js';
import '../browser/cppEventLogger.js';
import '../browser/eventListeners/clipboardListener.js';
import '../browser/eventListeners/linterListener.js';
import '../browser/eventListeners/quickActionListener.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../services/ai/browser/gitContextService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3447],
			he([
				1, 0, 367, 7, 3, 65, 67, 11, 31, 20, 5, 45, 25, 551, 332, 3223, 1789,
				3224, 137, 359, 66, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cpp_pb*/,
				i /*dom*/,
				w /*lifecycle*/,
				E /*codeEditorService*/,
				C /*model*/,
				d /*actions*/,
				m /*commands*/,
				r /*extensions*/,
				u /*instantiation*/,
				a /*reactiveStorageService*/,
				h /*workspace*/,
				c /*cppDebouncingService*/,
				n /*cppEventLogger*/,
				g /*clipboardListener*/,
				p /*linterListener*/,
				o /*quickActionListener*/,
				f /*aiMiscServices*/,
				b /*gitContextService*/,
				s /*editorGroupsService*/,
				l /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qfd = e.$pfd = void 0),
					(i = mt(i)),
					(e.$pfd = (0, u.$Mi)("telemStartupService"));
				let y = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.f = P),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.r = A),
							(this.s = R),
							(this.t = O),
							(this.u = B);
					}
					async onStartup() {
						try {
							await this.j.onStartupChangeWatcher();
							for (let I of this.a.listCodeEditors()) this.D(this.w(I));
							const S = this.q
								.getGroups(s.GroupsOrder.MOST_RECENTLY_ACTIVE)
								.map((I) =>
									I.editors.map((T) => T.resource).filter((T) => T !== void 0),
								)
								.flat();
							this.D(
								this.a.onCodeEditorAdd((I) => {
									const T = I.getModel();
									T && this.b.recordModelOpenedEvent(T), this.D(this.w(I));
								}),
							),
								this.D(
									this.a.onCodeEditorRemove((I) => {
										this.b.recordEditorCloseEvent(I.getId());
									}),
								),
								this.D(this.c.registerLinterListener()),
								this.D(this.f.registerClipboardListener(i.getWindows())),
								this.D(
									this.n.onChangeEffectManuallyDisposed({
										deps: [
											() => this.n.nonPersistentStorage.inprogressAIGenerations,
										],
										onChange: ({ deps: I, prevDeps: T }) => {
											if (T === void 0) return;
											const [P] = I,
												[k] = T,
												L = k.filter(
													(M) =>
														!P.find(
															(N) => N.generationUUID === M.generationUUID,
														),
												),
												D = P.filter(
													(M) =>
														!k.find(
															(N) => N.generationUUID === M.generationUUID,
														),
												);
											L.forEach((M) => {
												M.metadata.type === "chat"
													? this.b.recordChatEvent({
															requestId: M.generationUUID,
															eventType: {
																case: "endOfAnyGeneration",
																value: {},
															},
														})
													: M.metadata.type === "cmdk"
														? this.b.recordCppSessionEvent({
																case: "cmdKEndEvent",
																requestId: M.generationUUID,
															})
														: this.b.recordAiEvent(
																M.generationUUID,
																t.AiRequestEvent_RequestType.END,
															);
											}),
												D.forEach((M) => {
													this.b.recordAiEvent(
														M.generationUUID,
														t.AiRequestEvent_RequestType.START,
													);
												});
										},
										runNowToo: !0,
									}),
								);
						} catch (S) {
							console.error("Cpp: error", S);
						}
					}
					w(S) {
						const I = [];
						return (
							I.push(this.h.registerQuickActionListener(S)),
							I.push(
								S.onDidScrollChange(
									(0, c.$s6b)(() => {
										const T = S.getModel();
										T &&
											!this.j.isModelTooBigFullCheck(T) &&
											this.b.recordScrollEvent(
												T,
												S.getVisibleRanges(),
												S.getId(),
											);
									}, 2e3),
								),
							),
							I.push(
								S.onDidChangeCursorPosition((T) => {
									const P = S.getModel();
									P &&
										!this.j.isModelTooBigFullCheck(P) &&
										this.b.recordDebouncedCursorPosition(P, T.position);
								}),
							),
							I.push(
								S.onDidFocusEditorText((T) => {
									const P = S.getModel();
									if (P && !this.j.isModelTooBigFullCheck(P)) {
										const k = S.getVisibleRanges();
										this.b.recordChangedEditor(
											P,
											S.getPosition() ?? void 0,
											k,
											S.getId(),
										);
									}
								}),
							),
							I.push(
								S.onDidChangeModel((T) => {
									const P = T.newModelUrl;
									if (!P || T.newModelUrl === T.oldModelUrl) return;
									const k = this.m.getModel(P);
									k &&
										k &&
										!this.j.isModelTooBigFullCheck(k) &&
										this.b.recordChangedEditor(
											k,
											S.getPosition() ?? void 0,
											S.getVisibleRanges(),
											S.getId(),
										);
								}),
							),
							{
								dispose: () => {
									for (const T of I) T.dispose();
								},
							}
						);
					}
				};
				(y = Ne(
					[
						j(0, E.$dtb),
						j(1, n.$V7b),
						j(2, p.$R7b),
						j(3, g.$ofd),
						j(4, o.$U7b),
						j(5, f.$hfc),
						j(6, C.$QO),
						j(7, a.$0zb),
						j(8, s.$EY),
						j(9, l.$IY),
						j(10, b.$$Db),
						j(11, m.$ek),
						j(12, h.$Vi),
					],
					y,
				)),
					(0, r.$lK)(e.$pfd, y, r.InstantiationType.Delayed);
				class $ extends d.$3X {
					static {
						this.ID = "workbench.action.cpplogs.flushAllTelem";
					}
					constructor() {
						super({
							id: $.ID,
							title: {
								value: "Flush all telem logs",
								original: "Flush all telem logs",
							},
							f1: !0,
						});
					}
					async run(S) {
						const I = S.get(f.$hfc),
							T = S.get(n.$V7b);
						await I.flushAll(),
							await T.forceFlushExtHostEventLogger(),
							console.log("[CPP TELEM - Session ID]", I.getCurrentSessionId());
					}
				}
				e.$qfd = $;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	