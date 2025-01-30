import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/services/modelService.js';
import '../../../../editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js';
import '../../../../editor/contrib/message/browser/messageController.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../chat/browser/chat.js';
import '../../chat/common/chatAgents.js';
import '../../chat/common/chatModel.js';
import '../../chat/common/chatService.js';
import './inlineChatContentWidget.js';
import './inlineChatSession.js';
import './inlineChatSessionServiceImpl.js';
import './inlineChatStrategies.js';
import '../common/inlineChat.js';
import '../../notebook/browser/services/notebookEditorService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/views/common/viewsService.js';
import './inlineChatSavingService.js';
import './inlineChatSessionService.js';
import './inlineChatZoneWidget.js';
import '../../chat/common/chatContextKeys.js';
define(
			de[427],
			he([
				1, 0, 127, 15, 33, 163, 29, 6, 149, 3, 201, 19, 162, 28, 47, 56, 48, 17,
				104, 74, 200, 960, 501, 440, 4, 10, 8, 57, 5, 34, 208, 153, 441, 218,
				4080, 1244, 1893, 3770, 257, 293, 18, 89, 1733, 798, 4081, 207,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aria*/,
				i /*async*/,
				w /*cancellation*/,
				E /*errorMessage*/,
				C /*errors*/,
				d /*event*/,
				m /*lazy*/,
				r /*lifecycle*/,
				u /*numbers*/,
				a /*resources*/,
				h /*stopwatch*/,
				c /*types*/,
				n /*uuid*/,
				g /*editorBrowser*/,
				p /*position*/,
				o /*range*/,
				f /*selection*/,
				b /*languages*/,
				s /*editorWorker*/,
				l /*modelService*/,
				y /*inlineCompletionsController*/,
				$ /*messageController*/,
				v /*nls*/,
				S /*configuration*/,
				I /*contextkey*/,
				T /*dialogs*/,
				P /*instantiation*/,
				k /*log*/,
				L /*chat*/,
				D /*chatAgents*/,
				M /*chatModel*/,
				N /*chatService*/,
				A /*inlineChatContentWidget*/,
				R /*inlineChatSession*/,
				O /*inlineChatSessionServiceImpl*/,
				B /*inlineChatStrategies*/,
				U /*inlineChat*/,
				z /*notebookEditorService*/,
				F /*editorService*/,
				x /*viewsService*/,
				H /*inlineChatSavingService*/,
				q /*inlineChatSessionService*/,
				V /*inlineChatZoneWidget*/,
				G /*chatContextKeys*/,
) {
				"use strict";
				var K;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z1b = e.$Y1b = e.State = void 0),
					(t = mt(t));
				var J;
				(function (ne) {
					(ne.CREATE_SESSION = "CREATE_SESSION"),
						(ne.INIT_UI = "INIT_UI"),
						(ne.WAIT_FOR_INPUT = "WAIT_FOR_INPUT"),
						(ne.SHOW_REQUEST = "SHOW_REQUEST"),
						(ne.PAUSE = "PAUSE"),
						(ne.CANCEL = "CANCEL"),
						(ne.ACCEPT = "DONE");
				})(J || (e.State = J = {}));
				var W;
				(function (ne) {
					(ne[(ne.NONE = 0)] = "NONE"),
						(ne[(ne.ACCEPT_SESSION = 1)] = "ACCEPT_SESSION"),
						(ne[(ne.CANCEL_SESSION = 2)] = "CANCEL_SESSION"),
						(ne[(ne.PAUSE_SESSION = 4)] = "PAUSE_SESSION"),
						(ne[(ne.CANCEL_REQUEST = 8)] = "CANCEL_REQUEST"),
						(ne[(ne.CANCEL_INPUT = 16)] = "CANCEL_INPUT"),
						(ne[(ne.ACCEPT_INPUT = 32)] = "ACCEPT_INPUT");
				})(W || (W = {}));
				class X {
					static isInlineChatRunOptions(ee) {
						const {
							initialSelection: _,
							initialRange: te,
							message: Q,
							autoSend: Z,
							position: se,
							existingSession: re,
						} = ee;
						return !(
							(typeof Q < "u" && typeof Q != "string") ||
							(typeof Z < "u" && typeof Z != "boolean") ||
							(typeof te < "u" && !o.$iL.isIRange(te)) ||
							(typeof _ < "u" && !f.$kL.isISelection(_)) ||
							(typeof se < "u" && !p.$hL.isIPosition(se)) ||
							(typeof re < "u" && !(re instanceof R.$BLb))
						);
					}
				}
				e.$Y1b = X;
				let Y = (K = class {
					static get(ee) {
						return ee.getContribution(U.$TKb);
					}
					get chatWidget() {
						return this.c.value.content.isVisible
							? this.c.value.content.chatWidget
							: this.c.value.zone.widget.chatWidget;
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e) {
						(this.v = ee),
							(this.w = _),
							(this.x = te),
							(this.y = Q),
							(this.z = Z),
							(this.A = se),
							(this.B = re),
							(this.C = le),
							(this.D = ae),
							(this.E = pe),
							(this.a = !1),
							(this.b = new r.$Zc()),
							(this.l = this.b.add(new d.$re())),
							(this.n = this.b.add(new d.$re())),
							(this.onDidEnterState = this.n.event),
							(this.o = this.b.add(new d.$re())),
							(this.onWillStartSession = this.o.event),
							(this.q = this.b.add(new r.$Zc())),
							(this.s = this.b.add(new r.$2c())),
							(this.O = void 0),
							(this.f = U.$WKb.bindTo(oe)),
							(this.g = U.$YKb.bindTo(oe)),
							(this.i = U.$8Kb.bindTo(oe)),
							(this.h = U.$bLb.bindTo(oe)),
							(this.j = U.$aLb.bindTo(oe)),
							(this.k = G.$X1.bindTo(oe)),
							G.$V1.bindTo(oe),
							(this.c = new m.$Y(() => {
								const ye = {
									location: D.ChatAgentLocation.Editor,
									resolveData: () => (
										(0, c.$vg)(this.v.hasModel()),
										(0, c.$vg)(this.t),
										{
											type: D.ChatAgentLocation.Editor,
											selection: this.v.getSelection(),
											document: this.t.textModelN.uri,
											wholeRange: this.t?.wholeRange.trackedInitialRange,
										}
									),
								};
								for (const me of $e.listNotebookEditors())
									for (const [, ve] of me.codeEditors)
										if (ve === this.v) {
											ye.location = D.ChatAgentLocation.Notebook;
											break;
										}
								const ue = this.b.add(_.createInstance(A.$P1b, ye, this.v)),
									fe = this.b.add(_.createInstance(V.$$Yb, ye, this.v));
								return { content: ue, zone: fe };
							})),
							this.b.add(
								this.v.onDidChangeModel(async (ye) => {
									if (this.t || !ye.newModelUrl) return;
									const ue = this.x.getSession(this.v, ye.newModelUrl);
									ue &&
										(this.F("session RESUMING after model change", ye),
										await this.run({ existingSession: ue }));
								}),
							),
							this.b.add(
								this.x.onDidEndSession((ye) => {
									ye.session === this.t &&
										ye.endedByExternalCause &&
										(this.F("session ENDED by external cause"),
										(this.t = void 0),
										this.u?.cancel(),
										this.K(),
										this.cancelSession());
								}),
							),
							this.b.add(
								this.x.onDidMoveSession(async (ye) => {
									ye.editor === this.v &&
										(this.F("session RESUMING after move", ye),
										await this.run({ existingSession: ye.session }));
								}),
							),
							this.F("NEW controller");
					}
					dispose() {
						this.H &&
							this.l.fire(
								this.t?.chatModel.hasRequests
									? W.PAUSE_SESSION
									: W.CANCEL_SESSION,
							),
							this.b.dispose(),
							(this.a = !0),
							this.F("DISPOSED controller");
					}
					F(ee, ..._) {
						ee instanceof Error
							? this.A.error(ee, ..._)
							: this.A.trace(`[IE] (editor:${this.v.getId()}) ${ee}`, ..._);
					}
					getMessage() {
						return this.c.value.zone.widget.responseContent;
					}
					getId() {
						return U.$TKb;
					}
					G() {
						return this.B.getValue(U.InlineChatConfigKeys.Mode);
					}
					getWidgetPosition() {
						return this.c.value.zone.position;
					}
					async run(ee = {}) {
						try {
							this.finishExistingSession(),
								this.H && (await this.H),
								ee.initialSelection && this.v.setSelection(ee.initialSelection),
								this.s.clear(),
								this.o.fire(),
								(this.H = this.I(J.CREATE_SESSION, ee)),
								await this.H;
						} catch (_) {
							this.F("error during run", _),
								(0, C.$4)(_),
								this.t && this.x.releaseSession(this.t),
								this[J.PAUSE]();
						} finally {
							this.H = void 0;
						}
					}
					async I(ee, _) {
						let te = ee;
						for (; te && !this.a; ) {
							this.F("setState to ", te);
							const Q = this[te](_);
							this.n.fire(te), (te = await Q);
						}
					}
					async [J.CREATE_SESSION](ee) {
						(0, c.$vg)(this.t === void 0), (0, c.$vg)(this.v.hasModel());
						let _ = ee.existingSession,
							te;
						ee.position &&
							((te = p.$hL.lift(ee.position).delta(-1)), delete ee.position);
						const Q = this.J(ee.headless ?? _?.headless, !0, te);
						let Z = (0, v.localize)(7095, null);
						if (!_) {
							const se = new w.$Ce(),
								re = d.Event.once(this.l.event)((le) => {
									this.F("state=_createSession) message received", le),
										le === W.ACCEPT_INPUT
											? ((ee.autoSend = !0),
												this.c.value.zone.widget.updateInfo(
													(0, v.localize)(7096, null),
												))
											: se.cancel();
								});
							try {
								_ = await this.x.createSession(
									this.v,
									{ editMode: this.G(), wholeRange: ee.initialRange },
									se.token,
								);
							} catch (le) {
								(le instanceof O.$U1b || le?.name === O.$U1b.code) &&
									(Z = le.message);
							}
							if (
								(se.dispose(), re.dispose(), se.token.isCancellationRequested)
							)
								return _ && this.x.releaseSession(_), J.CANCEL;
						}
						if ((delete ee.initialRange, delete ee.existingSession, !_))
							return (
								$.$Szb.get(this.v)?.showMessage(Z, Q),
								this.F("Failed to start editor chat"),
								J.CANCEL
							);
						switch ((await _.chatModel.waitForInitialization(), _.editMode)) {
							case U.EditMode.Preview:
								this.u = this.w.createInstance(
									B.$m1b,
									_,
									this.v,
									this.c.value.zone,
								);
								break;
							case U.EditMode.Live:
							default:
								this.u = this.w.createInstance(
									B.$n1b,
									_,
									this.v,
									this.c.value.zone,
									_.headless ||
										this.B.getValue(U.InlineChatConfigKeys.ZoneToolbar),
								);
								break;
						}
						return (this.t = _), J.INIT_UI;
					}
					async [J.INIT_UI](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							y.$O1b.get(this.v)?.hide(),
							this.q.clear();
						const _ = this.v.createDecorationsCollection(),
							te = () => {
								const le = this.u?.getWholeRangeDecoration() ?? [];
								_.set(le),
									this.g.set(!this.t?.wholeRange.trackedInitialRange.isEmpty());
							};
						this.q.add(
							(0, r.$Yc)(() => {
								_.clear(), this.g.reset();
							}),
						),
							this.q.add(this.t.wholeRange.onDidChange(te)),
							te(),
							this.q.add(
								this.c.value.content.onDidBlur(() => this.cancelSession()),
							),
							this.c.value.content.setSession(this.t),
							this.c.value.zone.widget.setChatModel(this.t.chatModel),
							this.P();
						const Q = !this.t.chatModel.hasRequests;
						this.c.value.zone.widget.updateToolbar(!0),
							this.c.value.zone.widget.toggleStatus(!Q),
							this.J(this.t.headless, Q),
							this.q.add(
								this.v.onDidChangeModel((le) => {
									const oe = this.t?.chatModel.hasRequests
										? W.PAUSE_SESSION
										: W.CANCEL_SESSION;
									this.F("model changed, pause or cancel session", oe, le),
										this.l.fire(oe);
								}),
							);
						const Z = this.v.getModel()?.getAlternativeVersionId();
						this.q.add(
							this.v.onDidChangeModelContent((le) => {
								if (
									(this.t?.hunkData.ignoreTextModelNChanges ||
										this.i.set(
											Z !== this.v.getModel()?.getAlternativeVersionId(),
										),
									this.t?.hunkData.ignoreTextModelNChanges ||
										this.u?.hasFocus())
								)
									return;
								const oe = this.t.wholeRange;
								let ae = !1;
								if (this.B.getValue(U.InlineChatConfigKeys.FinishOnType))
									for (const { range: pe } of le.changes)
										ae = !o.$iL.areIntersectingOrTouching(pe, oe.value);
								this.t.recordExternalEditOccurred(ae),
									ae &&
										(this.F(
											"text changed outside of whole range, FINISH session",
										),
										this.finishExistingSession());
							}),
						),
							this.q.add(
								this.t.chatModel.onDidChange(async (le) => {
									le.kind === "removeRequest" &&
										(await this.t.undoChangesUntil(le.requestId));
								}),
							);
						const se = this.M();
						let re = !1;
						for (const le of this.t.chatModel.getRequests()) {
							if (!le.response) break;
							for (const oe of le.response.response.value)
								if (
									!(
										oe.kind !== "textEditGroup" ||
										!(0, a.$gh)(oe.uri, this.t.textModelN.uri)
									) &&
									!oe.state?.applied
								) {
									for (const ae of oe.edits) this.N(ae, void 0, !re), (re = !0);
									oe.state ??= se;
								}
						}
						if (re) {
							const le = await this.z.computeDiff(
								this.t.textModel0.uri,
								this.t.textModelN.uri,
								{
									computeMoves: !1,
									maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
									ignoreTrimWhitespace: !1,
								},
								"advanced",
							);
							this.t.wholeRange.fixup(le?.changes ?? []),
								await this.t.hunkData.recompute(se, le),
								this.L();
						}
						return (
							(ee.position = await this.u.renderChanges()),
							this.t.chatModel.requestInProgress
								? J.SHOW_REQUEST
								: J.WAIT_FOR_INPUT
						);
					}
					async [J.WAIT_FOR_INPUT](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							this.P(),
							ee.message &&
								(this.updateInput(ee.message),
								t.$oib(ee.message),
								delete ee.message,
								this.J(this.t.headless, !1));
						let _ = W.NONE,
							te;
						const Q = new i.$Lh(),
							Z = new r.$Zc();
						return (
							Z.add(
								this.t.chatModel.onDidChange((se) => {
									se.kind === "addRequest" &&
										((te = se.request), (_ = W.ACCEPT_INPUT), Q.open());
								}),
							),
							Z.add(this.u.onDidAccept(() => this.acceptSession())),
							Z.add(this.u.onDidDiscard(() => this.cancelSession())),
							Z.add(
								d.Event.once(this.l.event)((se) => {
									this.F("state=_waitForInput) message received", se),
										(_ = se),
										Q.open();
								}),
							),
							ee.autoSend &&
								(delete ee.autoSend,
								this.J(this.t.headless, !1),
								this.c.value.zone.widget.chatWidget.acceptInput()),
							await Q.wait(),
							Z.dispose(),
							_ & (W.CANCEL_INPUT | W.CANCEL_SESSION)
								? J.CANCEL
								: _ & W.PAUSE_SESSION
									? J.PAUSE
									: _ & W.ACCEPT_SESSION
										? (this.c.value.zone.widget.selectAll(!1), J.ACCEPT)
										: te?.message.text
											? J.SHOW_REQUEST
											: J.WAIT_FOR_INPUT
						);
					}
					async [J.SHOW_REQUEST](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							(0, c.$vg)(this.t.chatModel.requestInProgress),
							this.j.set(!0);
						const { chatModel: _ } = this.t,
							te = _.lastRequest;
						(0, c.$vg)(te),
							(0, c.$vg)(te.response),
							this.J(this.t.headless, !1),
							this.c.value.zone.widget.selectAll(!1),
							this.c.value.zone.widget.updateInfo(""),
							this.c.value.zone.widget.toggleStatus(!0);
						const { response: Q } = te,
							Z = new i.$0h(),
							se = new r.$Zc(),
							re = se.add(new w.$Ce()),
							le = new u.$3m(),
							oe = h.$le.create(),
							ae = new i.$Th();
						let pe = J.WAIT_FOR_INPUT;
						se.add(
							d.Event.once(this.l.event)((Ce) => {
								this.F("state=_makeRequest) message received", Ce),
									this.D.cancelCurrentRequestForSession(_.sessionId),
									Ce & W.CANCEL_SESSION
										? (pe = J.CANCEL)
										: Ce & W.PAUSE_SESSION
											? (pe = J.PAUSE)
											: Ce & W.ACCEPT_SESSION && (pe = J.ACCEPT);
							}),
						),
							se.add(
								_.onDidChange(async (Ce) => {
									if (Ce.kind === "removeRequest" && Ce.requestId === te.id) {
										re.cancel(),
											Z.complete(),
											Ce.reason === M.ChatRequestRemovalReason.Resend
												? (pe = J.SHOW_REQUEST)
												: (pe = J.CANCEL);
										return;
									}
									if (Ce.kind === "move") {
										(0, c.$vg)(this.t);
										const Le = (Ke, ...Je) =>
											this.F(
												"state=_showRequest) moving inline chat",
												Ke,
												...Je,
											);
										Le("move was requested", Ce.target, Ce.range);
										const Fe = f.$kL.fromRange(
												o.$iL.lift(Ce.range),
												f.SelectionDirection.LTR,
											),
											Oe = await this.E.openEditor(
												{ resource: Ce.target, options: { selection: Fe } },
												F.$KY,
											);
										if (!Oe) {
											Le("opening editor failed");
											return;
										}
										const xe = Oe.getControl();
										if (!(0, g.$0sb)(xe) || !xe.hasModel()) {
											Le(
												"new editor is either missing or not a code editor or does not have a model",
											);
											return;
										}
										if (this.x.getSession(xe, Ce.target)) {
											Le("new editor ALREADY has a session");
											return;
										}
										const He = await this.x.createSession(
											xe,
											{ editMode: this.G(), session: this.t },
											w.CancellationToken.None,
										);
										K.get(xe)?.run({ existingSession: He }),
											(pe = J.CANCEL),
											Z.complete();
										return;
									}
								}),
							),
							se.add(
								this.c.value.zone.widget.chatWidget.inputEditor.onDidChangeModelContent(
									() => {
										this.D.cancelCurrentRequestForSession(_.sessionId);
									},
								),
							);
						let $e = 0,
							ye = !0;
						const ue = this.M();
						let fe;
						const me = () => {
							if (
								(this.L(),
								fe ||
									(fe = Q.response.value.find(
										(Ce) =>
											Ce.kind === "textEditGroup" &&
											(0, a.$gh)(Ce.uri, this.t?.textModelN.uri),
									)),
								fe)
							) {
								fe.state ??= ue;
								const Ce = fe.edits,
									Le = Ce.slice($e);
								Le.length > 0 &&
									(this.F(
										`${this.t?.textModelN.uri.toString()} received ${Le.length} edits`,
									),
									($e = Ce.length),
									le.update(oe.elapsed()),
									oe.reset(),
									ae.queue(async () => {
										const Fe = this.t.wholeRange.value.getStartPosition();
										for (const xe of Le)
											await this.N(
												xe,
												{ duration: le.value, token: re.token },
												ye,
											),
												(ye = !1);
										const Oe = this.t.wholeRange.value.getStartPosition();
										(!Oe.equals(Fe) ||
											!this.c.value.zone.position?.equals(Oe)) &&
											this.J(this.t.headless, !1, Oe.delta(-1));
									}));
							}
							Q.isCanceled
								? (re.cancel(), Z.complete())
								: Q.isComplete && Z.complete();
						};
						se.add(Q.onDidChange(me)),
							me(),
							await Z.p,
							await ae.whenIdle(),
							Q.result?.errorDetails &&
								(await this.t.undoChangesUntil(Q.requestId)),
							se.dispose();
						const ve = await this.z.computeDiff(
							this.t.textModel0.uri,
							this.t.textModelN.uri,
							{
								computeMoves: !1,
								maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
								ignoreTrimWhitespace: !1,
							},
							"advanced",
						);
						this.t.wholeRange.fixup(ve?.changes ?? []),
							await this.t.hunkData.recompute(ue, ve),
							this.j.set(!1);
						let ge;
						if (!Q.result?.errorDetails)
							if (Q.response.value.length === 0) {
								const Ce = (0, v.localize)(7097, null);
								this.c.value.zone.widget.updateStatus(Ce, {
									classes: ["warn"],
								});
							} else this.c.value.zone.widget.updateStatus("");
						const be = await this.u.renderChanges();
						if (be) {
							const Ce = this.v.getSelection();
							Ce?.containsPosition(be)
								? be.lineNumber - Ce.startLineNumber > 8 && (ge = be)
								: (ge = be);
						}
						return this.J(this.t.headless, !1, ge), pe;
					}
					async [J.PAUSE]() {
						this.K(), this.u?.dispose?.(), (this.t = void 0);
					}
					async [J.ACCEPT]() {
						(0, c.$vg)(this.t), (0, c.$vg)(this.u), this.q.clear();
						try {
							await this.u.apply();
						} catch (ee) {
							this.C.error((0, v.localize)(7098, null, (0, E.$xj)(ee))),
								this.F("FAILED to apply changes"),
								this.F(ee);
						}
						this.x.releaseSession(this.t),
							this.K(),
							this.u?.dispose(),
							(this.u = void 0),
							(this.t = void 0);
					}
					async [J.CANCEL]() {
						if (this.t) {
							(0, c.$vg)(this.u), this.q.clear();
							const ee =
								!this.t.isUnstashed &&
								this.t.chatModel.hasRequests &&
								this.t.hunkData.size === this.t.hunkData.pending;
							let _ = [];
							try {
								_ = this.u.cancel();
							} catch (te) {
								this.C.error((0, v.localize)(7099, null, (0, E.$xj)(te))),
									this.F("FAILED to discard changes"),
									this.F(te);
							}
							this.s.clear(),
								ee
									? (this.s.value = this.x.stashSession(this.t, this.v, _))
									: this.x.releaseSession(this.t);
						}
						this.K(), this.u?.dispose(), (this.u = void 0), (this.t = void 0);
					}
					J(ee = !1, _ = !1, te) {
						(0, c.$vg)(this.v.hasModel()), this.f.set(!0);
						let Q;
						if (
							(te
								? (Q = te)
								: this.c.rawValue?.zone?.position
									? this.c.rawValue?.zone.position.lineNumber === 1
										? (Q = this.c.rawValue?.zone.position.delta(-1))
										: (Q = this.c.rawValue?.zone.position)
									: (Q = this.v.getSelection().getStartPosition().delta(-1)),
							this.t &&
								!te &&
								(this.t.hasChangedText || this.t.chatModel.hasRequests) &&
								(Q = this.t.wholeRange.trackedInitialRange
									.getStartPosition()
									.delta(-1)),
							!ee)
						)
							if (this.c.rawValue?.zone?.position)
								this.c.value.zone.updatePositionAndHeight(Q);
							else if (
								_ &&
								this.B.getValue(U.InlineChatConfigKeys.StartWithOverlayWidget)
							) {
								const Z = this.v.getSelection();
								(Q = Z.getStartPosition()),
									this.c.value.content.show(Q, Z.isEmpty());
							} else this.c.value.content.hide(), this.c.value.zone.show(Q);
						return Q;
					}
					K() {
						this.q.clear(),
							this.f.reset(),
							this.i.reset(),
							this.c.rawValue?.content.hide(),
							this.c.rawValue?.zone?.hide(),
							this.v.hasWidgetFocus() && this.v.focus();
					}
					L() {
						if (!this.t) {
							this.h.set(U.InlineChatResponseType.None);
							return;
						}
						const ee = (te) =>
							te.value.some(
								(Q) =>
									Q.kind === "textEditGroup" &&
									(0, a.$gh)(Q.uri, this.t?.textModelN.uri),
							);
						let _ = U.InlineChatResponseType.None;
						for (const te of this.t.chatModel.getRequests())
							if (
								!(!te.response || te.response.isCanceled) &&
								((_ = U.InlineChatResponseType.Messages),
								ee(te.response.response))
							) {
								_ = U.InlineChatResponseType.MessagesAndEdits;
								break;
							}
						this.h.set(_), this.k.set(_ !== U.InlineChatResponseType.None);
					}
					M() {
						(0, c.$vg)(this.t);
						const ee = new l.$1Mb();
						return {
							sha1: ee.canComputeSHA1(this.t.textModel0)
								? ee.computeSHA1(this.t.textModel0)
								: (0, n.$9g)(),
							applied: 0,
						};
					}
					async N(ee, _, te) {
						(0, c.$vg)(this.t), (0, c.$vg)(this.u);
						const Q = await this.z.computeMoreMinimalEdits(
							this.t.textModelN.uri,
							ee,
						);
						if (
							(this.F(
								"edits from PROVIDER and after making them MORE MINIMAL",
								this.t.agent.extensionId,
								ee,
								Q,
							),
							Q?.length === 0)
						)
							return;
						const se = (!_ && Q ? Q : ee).map(b.$iM.asEditOperation),
							re = {
								start: () => (this.t.hunkData.ignoreTextModelNChanges = !0),
								stop: () => (this.t.hunkData.ignoreTextModelNChanges = !1),
							};
						this.y.markChanged(this.t),
							_
								? await this.u.makeProgressiveChanges(se, re, _, te)
								: await this.u.makeChanges(se, re, te);
					}
					P() {
						this.c.value.zone.widget.placeholder = this.Q();
					}
					Q() {
						return this.O ?? this.t?.agent.description ?? "";
					}
					showSaveHint() {
						if (!this.t) return;
						const ee = (0, v.localize)(7100, null);
						if (
							(this.c.value.zone.widget.updateStatus(ee, { classes: ["warn"] }),
							this.c.value.zone.position)
						)
							this.v.revealLineInCenterIfOutsideViewport(
								this.c.value.zone.position.lineNumber,
							);
						else {
							const _ = this.t.hunkData
								.getInfo()
								.find((te) => te.getState() === R.HunkState.Pending);
							_ &&
								this.v.revealLineInCenterIfOutsideViewport(
									_.getRangesN()[0].startLineNumber,
								);
						}
					}
					acceptInput() {
						return this.chatWidget.acceptInput();
					}
					updateInput(ee, _ = !0) {
						if (
							(this.c.value.content.chatWidget.setInput(ee),
							this.c.value.zone.widget.chatWidget.setInput(ee),
							_)
						) {
							const te = new f.$kL(1, 1, Number.MAX_SAFE_INTEGER, 1);
							this.c.value.content.chatWidget.inputEditor.setSelection(te),
								this.c.value.zone.widget.chatWidget.inputEditor.setSelection(
									te,
								);
						}
					}
					cancelCurrentRequest() {
						this.l.fire(W.CANCEL_INPUT | W.CANCEL_REQUEST);
					}
					arrowOut(ee) {
						if (this.c.value.zone.position && this.v.hasModel()) {
							const { column: _ } = this.v.getPosition(),
								{ lineNumber: te } = this.c.value.zone.position,
								Q = ee ? te : te + 1;
							this.v.setPosition({ lineNumber: Q, column: _ }), this.v.focus();
						}
					}
					focus() {
						this.c.value.zone.widget.focus();
					}
					hasFocus() {
						return this.c.value.zone.widget.hasFocus();
					}
					async viewInChat() {
						if (!this.u || !this.t) return;
						let ee = !1,
							_;
						const te = this.v.getModel()?.uri,
							Q = this.t.chatModel.getRequests();
						for (const se of Q)
							if (se.response)
								for (const re of se.response.response.value)
									re.kind === "textEditGroup" &&
										(0, a.$gh)(re.uri, te) &&
										((ee = ee || !!re.state?.applied), (_ = re));
						const Z = this.u.cancel();
						ee && ((0, c.$vg)(_), (_.edits = [Z]), (_.state.applied = 0)),
							await this.w.invokeFunction(ie, this.t?.chatModel),
							this.cancelSession();
					}
					acceptSession() {
						const ee = this.t?.chatModel.getRequests().at(-1)?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "inlineChat", action: "accepted" },
							}),
							this.l.fire(W.ACCEPT_SESSION);
					}
					acceptHunk(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.Accept);
					}
					discardHunk(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.Discard);
					}
					toggleDiff(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.ToggleDiff);
					}
					moveHunk(ee) {
						this.focus(),
							this.u?.performHunkAction(
								void 0,
								ee ? B.HunkAction.MoveNext : B.HunkAction.MovePrev,
							);
					}
					async cancelSession() {
						const ee = this.t?.chatModel.lastRequest?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "inlineChat", action: "discarded" },
							}),
							this.l.fire(W.CANCEL_SESSION);
					}
					finishExistingSession() {
						this.t &&
							(this.t.editMode === U.EditMode.Preview
								? (this.F(
										"finishing existing session, using CANCEL",
										this.t.editMode,
									),
									this.cancelSession())
								: (this.F(
										"finishing existing session, using APPLY",
										this.t.editMode,
									),
									this.acceptSession()));
					}
					reportIssue() {
						const ee = this.t?.chatModel.lastRequest?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "bug" },
							});
					}
					unstashLastSession() {
						const ee = this.s.value?.unstash();
						return ee && this.y.markChanged(ee), ee;
					}
					joinCurrentRun() {
						return this.H;
					}
					async reviewEdits(ee, _, te) {
						if (!this.v.hasModel()) return !1;
						const Q = await this.x.createSession(
							this.v,
							{ editMode: U.EditMode.Live, wholeRange: ee, headless: !0 },
							te,
						);
						if (!Q) return !1;
						const Z = Q.chatModel.addRequest(
								{ text: "DUMMY", parts: [] },
								{ variables: [] },
								0,
							),
							se = this.run({ existingSession: Q, headless: !0 });
						await d.Event.toPromise(
							d.Event.filter(this.n.event, (re) => re === J.SHOW_REQUEST),
						);
						for await (const re of _)
							Q.chatModel.acceptResponseProgress(Z, {
								kind: "textEdit",
								uri: this.v.getModel().uri,
								edits: [re],
							});
						return (
							te.isCancellationRequested
								? Q.chatModel.cancelRequest(Z)
								: Q.chatModel.completeResponse(Z),
							await se,
							!0
						);
					}
				});
				(e.$Z1b = Y),
					(e.$Z1b =
						Y =
						K =
							Ne(
								[
									j(1, P.$Li),
									j(2, q.$zLb),
									j(3, H.$X1b),
									j(4, s.$Cxb),
									j(5, k.$ik),
									j(6, S.$gj),
									j(7, T.$GO),
									j(8, I.$6j),
									j(9, N.$J2),
									j(10, F.$IY),
									j(11, z.$n5b),
								],
								Y,
							));
				async function ie(ne, ee) {
					const _ = ne.get(x.$HMb),
						te = ne.get(N.$J2),
						Q = await (0, L.$HYb)(_);
					if (Q && Q.viewModel && ee) {
						for (const Z of ee.getRequests().slice())
							await te.adoptRequest(Q.viewModel.model.sessionId, Z);
						Q.focusLastMessage();
					}
				}
			},
		),
		