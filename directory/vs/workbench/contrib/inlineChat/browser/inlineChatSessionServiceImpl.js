import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/editor.js';
import '../../chat/common/chatAgents.js';
import '../../chat/common/chatService.js';
import '../common/inlineChat.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/untitled/common/untitledTextEditorInput.js';
import './inlineChatSession.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/languages/language.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[1893],
			he([
				1, 0, 6, 3, 23, 47, 17, 122, 200, 67, 42, 8, 5, 34, 32, 44, 153, 218,
				257, 18, 628, 1244, 19, 61, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*lifecycle*/,
				w /*network*/,
				E /*uuid*/,
				C /*range*/,
				d /*textModel*/,
				m /*editorWorker*/,
				r /*model*/,
				u /*resolverService*/,
				a /*contextkey*/,
				h /*instantiation*/,
				c /*log*/,
				n /*telemetry*/,
				g /*editor*/,
				p /*chatAgents*/,
				o /*chatService*/,
				f /*inlineChat*/,
				b /*editorService*/,
				s /*untitledTextEditorInput*/,
				l /*inlineChatSession*/,
				y /*resources*/,
				$ /*language*/,
				v /*textfiles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W1b = e.$V1b = e.$U1b = void 0);
				class S extends Error {
					static {
						this.code = "InlineChatError";
					}
					constructor(k) {
						super(k), (this.name = S.code);
					}
				}
				e.$U1b = S;
				let I = class {
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						(this.i = k),
							(this.j = L),
							(this.k = D),
							(this.l = M),
							(this.m = N),
							(this.n = A),
							(this.o = R),
							(this.p = O),
							(this.q = B),
							(this.r = U),
							(this.s = z),
							(this.a = new i.$Zc()),
							(this.b = this.a.add(new t.$re())),
							(this.onWillStartSession = this.b.event),
							(this.c = this.a.add(new t.$re())),
							(this.onDidMoveSession = this.c.event),
							(this.d = this.a.add(new t.$re())),
							(this.onDidEndSession = this.d.event),
							(this.f = this.a.add(new t.$re())),
							(this.onDidStashSession = this.f.event),
							(this.g = new Map()),
							(this.h = new Map());
					}
					dispose() {
						this.a.dispose(),
							this.g.forEach((k) => k.store.dispose()),
							this.g.clear();
					}
					async createSession(k, L, D) {
						const M = this.s.getDefaultAgent(p.ChatAgentLocation.Editor);
						if (!M) {
							this.m.trace("[IE] NO agent found");
							return;
						}
						this.b.fire(k);
						const N = k.getModel(),
							A = k.getSelection(),
							R = new i.$Zc();
						this.m.trace(
							`[IE] creating NEW session for ${k.getId()}, ${M.extensionId}`,
						);
						const O =
							L.session?.chatModel ??
							this.r.startSession(p.ChatAgentLocation.Editor, D);
						if (!O) {
							this.m.trace("[IE] NO chatModel found");
							return;
						}
						R.add(
							(0, i.$Yc)(() => {
								[...this.g.values()].some(
									(K) => K.session !== q && K.session.chatModel === O,
								) || (this.r.clearSession(O.sessionId), O.dispose());
							}),
						);
						const B = R.add(new i.$2c());
						R.add(
							O.onDidChange((G) => {
								if (G.kind !== "addRequest" || !G.request.response) return;
								const { response: K } = G.request;
								q.markModelVersion(G.request),
									(B.value = K.onDidChange(() => {
										if (K.isComplete) {
											B.clear();
											for (const J of K.response.value) {
												if (
													J.kind !== "textEditGroup" ||
													J.uri.scheme !== w.Schemas.untitled ||
													(0, y.$gh)(J.uri, q.textModelN.uri)
												)
													continue;
												const W = this.q.createByFilepathOrFirstLine(
													J.uri,
													void 0,
												);
												this.p.untitled
													.create({
														associatedResource: J.uri,
														languageId: W.languageId,
													})
													.resolve(),
													this.k.createModelReference(J.uri).then((Y) => {
														R.add(Y);
													});
											}
										}
									}));
							}),
						),
							R.add(
								this.s.onDidChangeAgents((G) => {
									G === void 0 &&
										!this.s.getAgent(M.id) &&
										(this.m.trace(
											`[IE] provider GONE for ${k.getId()}, ${M.extensionId}`,
										),
										this.t(q, !0));
								}),
							);
						const U = (0, E.$9g)(),
							z = N.uri;
						R.add(await this.k.createModelReference(N.uri));
						const F = N,
							x = R.add(
								this.j.createModel(
									(0, d.$9X)(N.createSnapshot()),
									{ languageId: N.getLanguageId(), onDidChange: t.Event.None },
									z.with({
										scheme: w.Schemas.vscode,
										authority: "inline-chat",
										path: "",
										query: new URLSearchParams({
											id: U,
											textModel0: "",
										}).toString(),
									}),
									!0,
								),
							);
						z.scheme === w.Schemas.untitled &&
							R.add(
								this.o.onDidCloseEditor(() => {
									this.o.isOpened({
										resource: z,
										typeId: s.$T1b.ID,
										editorId: g.$b1.id,
									}) || this.t(q, !0);
								}),
							);
						let H = L.wholeRange;
						if (
							(H ||
								(H = new C.$iL(
									A.selectionStartLineNumber,
									A.selectionStartColumn,
									A.positionLineNumber,
									A.positionColumn,
								)),
							D.isCancellationRequested)
						) {
							R.dispose();
							return;
						}
						const q = new l.$BLb(
								L.editMode,
								L.headless ?? !1,
								z,
								x,
								F,
								M,
								R.add(new l.$ALb(F, H)),
								R.add(new l.$DLb(this.l, x, F)),
								O,
								L.session?.versionsByRequest,
							),
							V = this.u(k, q.targetUri);
						if (this.g.has(V))
							throw (R.dispose(), new Error(`Session already stored for ${V}`));
						return this.g.set(V, { session: q, editor: k, store: R }), q;
					}
					moveSession(k, L) {
						const D = this.u(L, k.targetUri),
							M = this.g.get(D);
						if (M) {
							if (M.session !== k)
								throw new Error(
									"Cannot move session because the target editor already/still has one",
								);
							return;
						}
						let N = !1;
						for (const [A, R] of this.g)
							if (R.session === k) {
								(N = !0),
									this.g.delete(A),
									this.g.set(D, { ...R, editor: L }),
									this.m.trace(
										`[IE] did MOVE session for ${R.editor.getId()} to NEW EDITOR ${L.getId()}, ${k.agent.extensionId}`,
									),
									this.c.fire({ session: k, editor: L });
								break;
							}
						if (!N)
							throw new Error("Cannot move session because it is not stored");
					}
					releaseSession(k) {
						this.t(k, !1);
					}
					t(k, L) {
						let D;
						for (const A of this.g)
							if (A[1].session === k) {
								D = A;
								break;
							}
						if (!D) return;
						this.i.publicLog2("interactiveEditor/session", k.asTelemetryData());
						const [M, N] = D;
						this.g.delete(M),
							this.m.trace(
								`[IE] did RELEASED session for ${N.editor.getId()}, ${k.agent.extensionId}`,
							),
							this.d.fire({
								editor: N.editor,
								session: k,
								endedByExternalCause: L,
							}),
							N.store.dispose();
					}
					stashSession(k, L, D) {
						const M = this.n.createInstance(l.$CLb, L, k, D);
						return (
							this.f.fire({ editor: L, session: k }),
							this.m.trace(
								`[IE] did STASH session for ${L.getId()}, ${k.agent.extensionId}`,
							),
							M
						);
					}
					getCodeEditor(k) {
						for (const [, L] of this.g) if (L.session === k) return L.editor;
						throw new Error("session not found");
					}
					getSession(k, L) {
						const D = this.u(k, L);
						return this.g.get(D)?.session;
					}
					u(k, L) {
						const D = this.h.get(L.scheme);
						return D
							? D.getComparisonKey(k, L)
							: `${k.getId()}@${L.toString()}`;
					}
					registerSessionKeyComputer(k, L) {
						return this.h.set(k, L), (0, i.$Yc)(() => this.h.delete(k));
					}
				};
				(e.$V1b = I),
					(e.$V1b = I =
						Ne(
							[
								j(0, n.$km),
								j(1, r.$QO),
								j(2, u.$MO),
								j(3, m.$Cxb),
								j(4, c.$ik),
								j(5, h.$Li),
								j(6, b.$IY),
								j(7, v.$kZ),
								j(8, $.$nM),
								j(9, o.$J2),
								j(10, p.$c3),
							],
							I,
						));
				let T = class {
					static {
						this.Id = "inlineChat.enabler";
					}
					constructor(k, L) {
						(this.b = new i.$Zc()),
							(this.a = f.$VKb.bindTo(k)),
							this.b.add(
								L.onDidChangeAgents(() => {
									const D = !!L.getDefaultAgent(p.ChatAgentLocation.Editor);
									this.a.set(D);
								}),
							);
					}
					dispose() {
						this.a.reset(), this.b.dispose();
					}
				};
				(e.$W1b = T), (e.$W1b = T = Ne([j(0, a.$6j), j(1, p.$c3)], T));
			},
		)
