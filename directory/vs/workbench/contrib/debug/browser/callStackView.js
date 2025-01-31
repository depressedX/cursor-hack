import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/strings.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './baseDebugView.js';
import './debugCommands.js';
import './debugIcons.js';
import './debugToolBar.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/debugUtils.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3822],
			he([
				1, 0, 7, 105, 410, 50, 15, 14, 6, 132, 3, 54, 37, 4, 92, 11, 10, 8, 49,
				5, 39, 73, 93, 40, 41, 32, 51, 35, 26, 146, 60, 629, 425, 352, 1333,
				112, 300, 396, 95, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*highlightedLabel*/,
				E /*actions*/,
				C /*async*/,
				d /*codicons*/,
				m /*event*/,
				r /*filters*/,
				u /*lifecycle*/,
				a /*path*/,
				h /*strings*/,
				c /*nls*/,
				n /*menuEntryActionViewItem*/,
				g /*actions*/,
				p /*configuration*/,
				o /*contextkey*/,
				f /*contextView*/,
				b /*instantiation*/,
				s /*keybinding*/,
				l /*label*/,
				y /*listService*/,
				$ /*notification*/,
				v /*opener*/,
				S /*telemetry*/,
				I /*colorRegistry*/,
				T /*themeService*/,
				P /*themables*/,
				k /*viewPane*/,
				L /*views*/,
				D /*baseDebugView*/,
				M /*debugCommands*/,
				N /*debugIcons*/,
				A /*debugToolBar*/,
				R /*debug*/,
				O /*debugModel*/,
				B /*debugUtils*/,
				U /*hoverDelegateFactory*/,
				z /*hover*/,
) {
				"use strict";
				var F, x, H, q;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oQc = void 0),
					(e.$lQc = W),
					(e.$mQc = X),
					(e.$nQc = Y),
					(t = mt(t)),
					(N = mt(N));
				const V = t.$;
				function G(Ce, Le) {
					return (Le.sessionId = Ce.getId()), Le;
				}
				function K(Ce, Le) {
					return (Le.threadId = Ce.getId()), G(Ce.session, Le), Le;
				}
				function J(Ce, Le) {
					return (
						(Le.frameId = Ce.getId()),
						(Le.frameName = Ce.name),
						(Le.frameLocation = { range: Ce.range, source: Ce.source.raw }),
						K(Ce.thread, Le),
						Le
					);
				}
				function W(Ce) {
					return Ce instanceof O.$N3
						? J(Ce, {})
						: Ce instanceof O.$O3
							? K(Ce, {})
							: ue(Ce)
								? G(Ce, {})
								: void 0;
				}
				function X(Ce) {
					return Ce instanceof O.$N3
						? Ce.source.inMemory
							? Ce.source.raw.path || Ce.source.reference || Ce.source.name
							: Ce.source.uri.toString()
						: Ce instanceof O.$O3
							? Ce.threadId
							: ue(Ce)
								? Ce.getId()
								: "";
				}
				function Y(Ce) {
					let Le = Ce.thread.getStaleCallStack();
					Le = Le.length > 0 ? Le : Ce.thread.getCallStack();
					const Fe = Le.map((He) => He.source).filter((He) => He !== Ce.source);
					let Oe = 0;
					if (
						(Fe.forEach((He) => {
							He.name === Ce.source.name &&
								(Oe = Math.max(
									Oe,
									(0, h.$Pf)(Ce.source.uri.path, He.uri.path),
								));
						}),
						Oe === 0)
					)
						return Ce.source.name;
					const xe = Math.max(
						0,
						Ce.source.uri.path.lastIndexOf(
							a.$lc.sep,
							Ce.source.uri.path.length - Oe - 1,
						),
					);
					return (xe > 0 ? "..." : "") + Ce.source.uri.path.substring(xe);
				}
				async function ie(Ce, Le) {
					Ce.parentSession && (await ie(Ce.parentSession, Le)),
						await Le.expand(Ce);
				}
				let ne = class extends k.$TMb {
					constructor(Le, Fe, Oe, xe, He, Ke, Je, Te, Ee, Ie, Be, Se, ke) {
						super(Le, xe, Fe, Je, Te, Ke, He, Ee, Ie, Be, Se),
							(this.ab = Le),
							(this.sb = Oe),
							(this.cc = ke),
							(this.g = !1),
							(this.h = !1),
							(this.j = !1),
							(this.r = new Set()),
							(this.L = !1),
							(this.f = this.D(
								new C.$Yh(async () => {
									const Ue = this.sb.getModel().getSessions();
									Ue.length === 0 && this.r.clear();
									const qe =
											Ue.length === 1 && Ue[0].getAllThreads().length === 1
												? Ue[0].getAllThreads()[0]
												: void 0,
										Ae = Ue.length === 1 ? Ue[0].getStoppedDetails() : void 0;
									Ae && (qe || typeof Ae.threadId != "number")
										? ((this.b.textContent = $e(Ae)),
											this.c.update(pe(Ae)),
											this.b.classList.toggle(
												"exception",
												Ae.reason === "exception",
											),
											(this.a.hidden = !1))
										: Ue.length === 1 && Ue[0].state === R.State.Running
											? ((this.b.textContent = (0, c.localize)(5265, null)),
												this.c.update(Ue[0].getLabel()),
												this.b.classList.remove("exception"),
												(this.a.hidden = !1))
											: (this.a.hidden = !0),
										this.bc(),
										(this.g = !1),
										(this.m.deemphasizedStackFramesToShow = []),
										await this.n.updateChildren();
									try {
										const Me = new Set();
										Ue.forEach((De) => {
											De.parentSession &&
												!this.r.has(De.parentSession) &&
												Me.add(De.parentSession);
										});
										for (const De of Me) await ie(De, this.n), this.r.add(De);
									} catch {}
									this.L && ((this.L = !1), await this.gc());
								}, 50),
							));
					}
					Qb(Le) {
						super.Qb(Le, this.ab.title),
							(this.a = t.$fhb(Le, V("span.call-stack-state-message"))),
							(this.a.hidden = !0),
							(this.b = t.$fhb(this.a, V("span.label"))),
							(this.c = this.D(
								this.Hb.setupManagedHover((0, U.$cib)("mouse"), this.a, ""),
							));
					}
					W(Le) {
						super.W(Le),
							this.element.classList.add("debug-pane"),
							Le.classList.add("debug-call-stack");
						const Fe = (0, D.$cIc)(Le);
						(this.m = new fe(this.sb)),
							(this.n = this.Db.createInstance(
								y.$GMb,
								"CallStackView",
								Fe,
								new ae(),
								new ve(this.sb),
								[
									this.Db.createInstance(_),
									this.Db.createInstance(Q),
									this.Db.createInstance(se),
									this.Db.createInstance(re),
									new le(),
									new oe(),
								],
								this.m,
								{
									accessibilityProvider: new me(),
									compressionEnabled: !0,
									autoExpandSingleChildren: !0,
									identityProvider: {
										getId: (xe) =>
											typeof xe == "string"
												? xe
												: xe instanceof Array
													? `showMore ${xe[0].getId()}`
													: xe.getId(),
									},
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (xe) =>
											ue(xe)
												? xe.getLabel()
												: xe instanceof O.$O3
													? `${xe.name} ${xe.stateLabel}`
													: xe instanceof O.$N3 || typeof xe == "string"
														? xe
														: xe instanceof O.$Y3
															? le.LABEL
															: (0, c.localize)(5266, null),
										getCompressedNodeKeyboardNavigationLabel: (xe) => {
											const He = xe[0];
											return ue(He) ? He.getLabel() : "";
										},
									},
									expandOnlyOnTwistieClick: !0,
									overrideStyles: this.Zb().listOverrideStyles,
								},
							)),
							this.n.setInput(this.sb.getModel()),
							this.D(this.n),
							this.D(
								this.n.onDidOpen(async (xe) => {
									if (this.h) return;
									const He = (Je, Te, Ee, Ie = {}) => {
											this.j = !0;
											try {
												this.sb.focusStackFrame(Je, Te, Ee, {
													...Ie,
													explicit: !0,
												});
											} finally {
												this.j = !1;
											}
										},
										Ke = xe.element;
									if (Ke instanceof O.$N3) {
										const Je = {
											preserveFocus: xe.editorOptions.preserveFocus,
											sideBySide: xe.sideBySide,
											pinned: xe.editorOptions.pinned,
										};
										He(Ke, Ke.thread, Ke.thread.session, Je);
									}
									if (
										(Ke instanceof O.$O3 && He(void 0, Ke, Ke.session),
										ue(Ke) && He(void 0, void 0, Ke),
										Ke instanceof O.$Y3)
									) {
										const Je = this.sb.getModel().getSession(Ke.sessionId),
											Te = Je && Je.getThread(Ke.threadId);
										if (Te) {
											const Ee = Te.stoppedDetails?.totalFrames,
												Ie =
													typeof Ee == "number"
														? Ee - Te.getCallStack().length
														: void 0;
											await Te.fetchCallStack(Ie),
												await this.n.updateChildren();
										}
									}
									Ke instanceof Array &&
										(this.m.deemphasizedStackFramesToShow.push(...Ke),
										this.n.updateChildren());
								}),
							),
							this.D(
								this.sb.getModel().onDidChangeCallStack(() => {
									if (!this.isBodyVisible()) {
										this.g = !0;
										return;
									}
									this.f.isScheduled() || this.f.schedule();
								}),
							);
						const Oe = m.Event.any(
							this.sb.getViewModel().onDidFocusStackFrame,
							this.sb.getViewModel().onDidFocusSession,
						);
						this.D(
							Oe(async () => {
								if (!this.j) {
									if (!this.isBodyVisible()) {
										(this.g = !0), (this.L = !0);
										return;
									}
									if (this.f.isScheduled()) {
										this.L = !0;
										return;
									}
									await this.gc();
								}
							}),
						),
							this.D(this.n.onContextMenu((xe) => this.hc(xe))),
							this.sb.state === R.State.Stopped && this.f.schedule(0),
							this.D(
								this.onDidChangeBodyVisibility((xe) => {
									xe && this.g && this.f.schedule();
								}),
							),
							this.D(
								this.sb.onDidNewSession((xe) => {
									const He = [];
									He.push(
										xe.onDidChangeName(() => {
											this.n.hasNode(xe) && this.n.rerender(xe);
										}),
									),
										He.push(xe.onDidEndAdapter(() => (0, u.$Vc)(He))),
										xe.parentSession && this.r.delete(xe.parentSession);
								}),
							);
					}
					X(Le, Fe) {
						super.X(Le, Fe), this.n.layout(Le, Fe);
					}
					focus() {
						super.focus(), this.n.domFocus();
					}
					collapseAll() {
						this.n.collapseAll();
					}
					async gc() {
						if (!this.n || !this.n.getInput()) return;
						const Le = (He) => {
								this.h = !0;
								try {
									this.n.setSelection([He]),
										this.n.getRelativeTop(He) === null
											? this.n.reveal(He, 0.5)
											: this.n.reveal(He);
								} catch {
								} finally {
									this.h = !1;
								}
							},
							Fe = this.sb.getViewModel().focusedThread,
							Oe = this.sb.getViewModel().focusedSession,
							xe = this.sb.getViewModel().focusedStackFrame;
						if (!Fe) Oe ? Le(Oe) : this.n.setSelection([]);
						else {
							try {
								await ie(Fe.session, this.n);
							} catch {}
							try {
								await this.n.expand(Fe);
							} catch {}
							const He = xe || Oe;
							He && Le(He);
						}
					}
					hc(Le) {
						const Fe = Le.element;
						let Oe = [];
						ue(Fe)
							? (Oe = ee(Fe))
							: Fe instanceof O.$O3
								? (Oe = te(Fe))
								: Fe instanceof O.$N3 && (Oe = Z(Fe));
						const Ke = { primary: [], secondary: [] },
							Je = this.Bb.createOverlay(Oe),
							Te = this.cc.getMenuActions(g.$XX.DebugCallStackContext, Je, {
								arg: X(Fe),
								shouldForwardArgs: !0,
							});
						(0, n.$Jyb)(Te, Ke, "inline"),
							this.zb.showContextMenu({
								getAnchor: () => Le.anchor,
								getActions: () => Ke.secondary,
								getActionsContext: () => W(Fe),
							});
					}
				};
				(e.$oQc = ne),
					(e.$oQc = ne =
						Ne(
							[
								j(1, f.$Xxb),
								j(2, R.$75),
								j(3, s.$uZ),
								j(4, b.$Li),
								j(5, L.$K1),
								j(6, p.$gj),
								j(7, o.$6j),
								j(8, v.$7rb),
								j(9, T.$iP),
								j(10, S.$km),
								j(11, z.$Uyb),
								j(12, g.$YX),
							],
							ne,
						));
				function ee(Ce) {
					return [
						[R.$e5.key, "session"],
						[R.$f5.key, (0, B.$n3)(Ce)],
						[R.$g5.key, Ce.state === R.State.Stopped],
						[R.$h5.key, Ce.getAllThreads().length === 1],
					];
				}
				let _ = class {
					static {
						F = this;
					}
					static {
						this.ID = "session";
					}
					constructor(Le, Fe, Oe, xe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe), (this.d = xe);
					}
					get templateId() {
						return F.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".session"));
						t.$fhb(Fe, V(P.ThemeIcon.asCSSSelector(N.$zKb)));
						const Oe = t.$fhb(Fe, V(".name")),
							xe = t.$fhb(Fe, V("span.state.label.monaco-count-badge.long")),
							He = new u.$Zc(),
							Ke = He.add(new w.$Wob(Oe)),
							Je = He.add(new u.$Zc()),
							Te = He.add(
								new i.$eib(Fe, {
									actionViewItemProvider: (Ie, Be) => {
										if (
											(Ie.id === M.$_Gc || Ie.id === M.$0Gc) &&
											Ie instanceof g.$2X
										) {
											Je.clear();
											const Se = this.a.invokeFunction((ke) =>
												(0, A.$kQc)(Ie, Je, ke, { ...Be, menuAsChild: !1 }),
											);
											if (Se) return Se;
										}
										if (Ie instanceof g.$2X)
											return this.a.createInstance(n.$Lyb, Ie, {
												hoverDelegate: Be.hoverDelegate,
											});
										if (Ie instanceof g.$1X)
											return this.a.createInstance(n.$Nyb, Ie, {
												hoverDelegate: Be.hoverDelegate,
											});
									},
								}),
							),
							Ee = He.add(new u.$Zc());
						return {
							session: Fe,
							name: Oe,
							stateLabel: xe,
							label: Ke,
							actionBar: Te,
							elementDisposable: Ee,
							templateDisposable: He,
						};
					}
					renderElement(Le, Fe, Oe) {
						this.f(Le.element, (0, r.$3k)(Le.filterData), Oe);
					}
					renderCompressedElements(Le, Fe, Oe) {
						const xe = Le.element.elements[Le.element.elements.length - 1],
							He = (0, r.$3k)(Le.filterData);
						this.f(xe, He, Oe);
					}
					f(Le, Fe, Oe) {
						const xe = Oe.elementDisposable.add(
							this.c.setupManagedHover(
								(0, U.$cib)("mouse"),
								Oe.session,
								(0, c.localize)(5267, null),
							),
						);
						Oe.label.set(Le.getLabel(), Fe);
						const He = Le.getStoppedDetails(),
							Ke = Le.getAllThreads().find((Ie) => Ie.stopped),
							Je = this.b.createOverlay(ee(Le)),
							Te = Oe.elementDisposable.add(
								this.d.createMenu(g.$XX.DebugCallStackContext, Je),
							),
							Ee = () => {
								Oe.actionBar.clear();
								const Ie = [],
									Se = { primary: Ie, secondary: [] };
								(0, n.$Kyb)(
									Te,
									{ arg: X(Le), shouldForwardArgs: !0 },
									Se,
									"inline",
								),
									Oe.actionBar.push(Ie, { icon: !0, label: !1 }),
									(Oe.actionBar.context = W(Le));
							};
						Oe.elementDisposable.add(Te.onDidChange(() => Ee())),
							Ee(),
							(Oe.stateLabel.style.display = ""),
							He
								? ((Oe.stateLabel.textContent = $e(He)),
									xe.update(`${Le.getLabel()}: ${pe(He)}`),
									Oe.stateLabel.classList.toggle(
										"exception",
										He.reason === "exception",
									))
								: Ke && Ke.stoppedDetails
									? ((Oe.stateLabel.textContent = $e(Ke.stoppedDetails)),
										xe.update(`${Le.getLabel()}: ${pe(Ke.stoppedDetails)}`),
										Oe.stateLabel.classList.toggle(
											"exception",
											Ke.stoppedDetails.reason === "exception",
										))
									: ((Oe.stateLabel.textContent = (0, c.localize)(5268, null)),
										Oe.stateLabel.classList.remove("exception"));
					}
					disposeTemplate(Le) {
						Le.templateDisposable.dispose();
					}
					disposeElement(Le, Fe, Oe) {
						Oe.elementDisposable.clear();
					}
					disposeCompressedElements(Le, Fe, Oe, xe) {
						Oe.elementDisposable.clear();
					}
				};
				_ = F = Ne([j(0, b.$Li), j(1, o.$6j), j(2, z.$Uyb), j(3, g.$YX)], _);
				function te(Ce) {
					return [
						[R.$e5.key, "thread"],
						[R.$g5.key, Ce.stopped],
					];
				}
				let Q = class {
					static {
						x = this;
					}
					static {
						this.ID = "thread";
					}
					constructor(Le, Fe, Oe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe);
					}
					get templateId() {
						return x.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".thread")),
							Oe = t.$fhb(Fe, V(".name")),
							xe = t.$fhb(Fe, V("span.state.label.monaco-count-badge.long")),
							He = new u.$Zc(),
							Ke = He.add(new w.$Wob(Oe)),
							Je = He.add(new i.$eib(Fe)),
							Te = He.add(new u.$Zc());
						return {
							thread: Fe,
							name: Oe,
							stateLabel: xe,
							label: Ke,
							actionBar: Je,
							elementDisposable: Te,
							templateDisposable: He,
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						Oe.elementDisposable.add(
							this.b.setupManagedHover(
								(0, U.$cib)("mouse"),
								Oe.thread,
								xe.name,
							),
						),
							Oe.label.set(xe.name, (0, r.$3k)(Le.filterData)),
							(Oe.stateLabel.textContent = xe.stateLabel),
							Oe.stateLabel.classList.toggle(
								"exception",
								xe.stoppedDetails?.reason === "exception",
							);
						const He = this.a.createOverlay(te(xe)),
							Ke = Oe.elementDisposable.add(
								this.c.createMenu(g.$XX.DebugCallStackContext, He),
							),
							Je = () => {
								Oe.actionBar.clear();
								const Te = [],
									Ie = { primary: Te, secondary: [] };
								(0, n.$Kyb)(
									Ke,
									{ arg: X(xe), shouldForwardArgs: !0 },
									Ie,
									"inline",
								),
									Oe.actionBar.push(Te, { icon: !0, label: !1 }),
									(Oe.actionBar.context = W(xe));
							};
						Oe.elementDisposable.add(Ke.onDidChange(() => Je())), Je();
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeElement(Le, Fe, Oe) {
						Oe.elementDisposable.clear();
					}
					disposeTemplate(Le) {
						Le.templateDisposable.dispose();
					}
				};
				Q = x = Ne([j(0, o.$6j), j(1, z.$Uyb), j(2, g.$YX)], Q);
				function Z(Ce) {
					return [
						[R.$e5.key, "stackFrame"],
						[R.$u5.key, Ce.canRestart],
					];
				}
				let se = class {
					static {
						H = this;
					}
					static {
						this.ID = "stackFrame";
					}
					constructor(Le, Fe, Oe) {
						(this.a = Le), (this.b = Fe), (this.c = Oe);
					}
					get templateId() {
						return H.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".stack-frame")),
							Oe = t.$fhb(Fe, V("span.label.expression")),
							xe = t.$fhb(Fe, V(".file")),
							He = t.$fhb(xe, V("span.file-name")),
							Ke = t.$fhb(xe, V("span.line-number-wrapper")),
							Je = t.$fhb(Ke, V("span.line-number.monaco-count-badge")),
							Te = new u.$Zc(),
							Ee = Te.add(new w.$Wob(Oe)),
							Ie = Te.add(new i.$eib(Fe));
						return {
							file: xe,
							fileName: He,
							label: Ee,
							lineNumber: Je,
							stackFrame: Fe,
							actionBar: Ie,
							templateDisposable: Te,
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						Oe.stackFrame.classList.toggle(
							"disabled",
							!xe.source || !xe.source.available || (0, R.$65)(xe),
						),
							Oe.stackFrame.classList.toggle(
								"label",
								xe.presentationHint === "label",
							);
						const He =
							!!xe.thread.session.capabilities.supportsRestartFrame &&
							xe.presentationHint !== "label" &&
							xe.presentationHint !== "subtle" &&
							xe.canRestart;
						Oe.stackFrame.classList.toggle("has-actions", He);
						let Ke = xe.source.inMemory
							? xe.source.uri.path
							: this.b.getUriLabel(xe.source.uri);
						if (
							(xe.source.raw.origin &&
								(Ke += `
${xe.source.raw.origin}`),
							Oe.templateDisposable.add(
								this.a.setupManagedHover((0, U.$cib)("mouse"), Oe.file, Ke),
							),
							Oe.label.set(xe.name, (0, r.$3k)(Le.filterData), xe.name),
							(Oe.fileName.textContent = Y(xe)),
							xe.range.startLineNumber !== void 0
								? ((Oe.lineNumber.textContent = `${xe.range.startLineNumber}`),
									xe.range.startColumn &&
										(Oe.lineNumber.textContent += `:${xe.range.startColumn}`),
									Oe.lineNumber.classList.remove("unavailable"))
								: Oe.lineNumber.classList.add("unavailable"),
							Oe.actionBar.clear(),
							He)
						) {
							const Je = new E.$rj(
								"debug.callStack.restartFrame",
								(0, c.localize)(5269, null),
								P.ThemeIcon.asClassName(N.$gKb),
								!0,
								async () => {
									try {
										await xe.restart();
									} catch (Te) {
										this.c.error(Te);
									}
								},
							);
							Oe.actionBar.push(Je, { icon: !0, label: !1 });
						}
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {
						Le.actionBar.dispose();
					}
				};
				se = H = Ne([j(0, z.$Uyb), j(1, l.$3N), j(2, $.$4N)], se);
				let re = class {
					static {
						q = this;
					}
					static {
						this.ID = "error";
					}
					get templateId() {
						return q.ID;
					}
					constructor(Le) {
						this.a = Le;
					}
					renderTemplate(Le) {
						return {
							label: t.$fhb(Le, V(".error")),
							templateDisposable: new u.$Zc(),
						};
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						(Oe.label.textContent = xe),
							Oe.templateDisposable.add(
								this.a.setupManagedHover((0, U.$cib)("mouse"), Oe.label, xe),
							);
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				};
				re = q = Ne([j(0, z.$Uyb)], re);
				class le {
					static {
						this.ID = "loadMore";
					}
					static {
						this.LABEL = (0, c.localize)(5270, null);
					}
					constructor() {}
					get templateId() {
						return le.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".load-all"));
						return (Fe.style.color = (0, I.$rP)(I.$RP)), { label: Fe };
					}
					renderElement(Le, Fe, Oe) {
						Oe.label.textContent = le.LABEL;
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				}
				class oe {
					static {
						this.ID = "showMore";
					}
					constructor() {}
					get templateId() {
						return oe.ID;
					}
					renderTemplate(Le) {
						const Fe = t.$fhb(Le, V(".show-more"));
						return (Fe.style.color = (0, I.$rP)(I.$RP)), { label: Fe };
					}
					renderElement(Le, Fe, Oe) {
						const xe = Le.element;
						xe.every(
							(He) =>
								!!(
									He.source &&
									He.source.origin &&
									He.source.origin === xe[0].source.origin
								),
						)
							? (Oe.label.textContent = (0, c.localize)(
									5271,
									null,
									xe.length,
									xe[0].source.origin,
								))
							: (Oe.label.textContent = (0, c.localize)(5272, null, xe.length));
					}
					renderCompressedElements(Le, Fe, Oe, xe) {
						throw new Error("Method not implemented.");
					}
					disposeTemplate(Le) {}
				}
				class ae {
					getHeight(Le) {
						return (Le instanceof O.$N3 && Le.presentationHint === "label") ||
							Le instanceof O.$Y3 ||
							Le instanceof Array
							? 16
							: 22;
					}
					getTemplateId(Le) {
						return ue(Le)
							? _.ID
							: Le instanceof O.$O3
								? Q.ID
								: Le instanceof O.$N3
									? se.ID
									: typeof Le == "string"
										? re.ID
										: Le instanceof O.$Y3
											? le.ID
											: oe.ID;
					}
				}
				function pe(Ce) {
					return Ce.text ?? $e(Ce);
				}
				function $e(Ce) {
					return (
						Ce.description ||
						(Ce.reason
							? (0, c.localize)(5273, null, Ce.reason)
							: (0, c.localize)(5274, null))
					);
				}
				function ye(Ce) {
					return typeof Ce.getSessions == "function";
				}
				function ue(Ce) {
					return Ce && typeof Ce.getAllThreads == "function";
				}
				class fe {
					constructor(Le) {
						(this.a = Le), (this.deemphasizedStackFramesToShow = []);
					}
					hasChildren(Le) {
						if (ue(Le)) {
							const Fe = Le.getAllThreads();
							return (
								Fe.length > 1 ||
								(Fe.length === 1 && Fe[0].stopped) ||
								!!this.a
									.getModel()
									.getSessions()
									.find((Oe) => Oe.parentSession === Le)
							);
						}
						return ye(Le) || (Le instanceof O.$O3 && Le.stopped);
					}
					async getChildren(Le) {
						if (ye(Le)) {
							const Fe = Le.getSessions();
							if (Fe.length === 0) return Promise.resolve([]);
							if (Fe.length > 1 || this.a.getViewModel().isMultiSessionView())
								return Promise.resolve(Fe.filter((xe) => !xe.parentSession));
							const Oe = Fe[0].getAllThreads();
							return Oe.length === 1 ? this.b(Oe[0]) : Promise.resolve(Oe);
						} else if (ue(Le)) {
							const Fe = this.a
									.getModel()
									.getSessions()
									.filter((xe) => xe.parentSession === Le),
								Oe = Le.getAllThreads();
							return Oe.length === 1
								? (await this.b(Oe[0])).concat(Fe)
								: Promise.resolve(Oe.concat(Fe));
						} else return this.b(Le);
					}
					b(Le) {
						return this.c(Le).then((Fe) => {
							const Oe = [];
							return (
								Fe.forEach((xe, He) => {
									if (
										xe instanceof O.$N3 &&
										xe.source &&
										(0, R.$65)(xe) &&
										this.deemphasizedStackFramesToShow.indexOf(xe) === -1
									) {
										if (Oe.length) {
											const Je = Oe[Oe.length - 1];
											if (Je instanceof Array) {
												Je.push(xe);
												return;
											}
										}
										const Ke = He < Fe.length - 1 ? Fe[He + 1] : void 0;
										if (Ke instanceof O.$N3 && Ke.source && (0, R.$65)(Ke)) {
											Oe.push([xe]);
											return;
										}
									}
									Oe.push(xe);
								}),
								Oe
							);
						});
					}
					async c(Le) {
						let Fe = Le.getCallStack();
						return (
							(!Fe || !Fe.length) &&
								(await Le.fetchCallStack(), (Fe = Le.getCallStack())),
							Fe.length === 1 &&
								Le.session.capabilities.supportsDelayedStackTraceLoading &&
								Le.stoppedDetails &&
								Le.stoppedDetails.totalFrames &&
								Le.stoppedDetails.totalFrames > 1 &&
								(Fe = Fe.concat(Le.getStaleCallStack().slice(1))),
							Le.stoppedDetails &&
								Le.stoppedDetails.framesErrorMessage &&
								(Fe = Fe.concat([Le.stoppedDetails.framesErrorMessage])),
							!Le.reachedEndOfCallStack &&
								Le.stoppedDetails &&
								(Fe = Fe.concat([new O.$Y3(Le.session.getId(), Le.threadId)])),
							Fe
						);
					}
				}
				class me {
					getWidgetAriaLabel() {
						return (0, c.localize)(5275, null);
					}
					getWidgetRole() {
						return "treegrid";
					}
					getRole(Le) {
						return "row";
					}
					getAriaLabel(Le) {
						if (Le instanceof O.$O3)
							return (0, c.localize)(5276, null, Le.name, Le.stateLabel);
						if (Le instanceof O.$N3)
							return (0, c.localize)(
								5277,
								null,
								Le.name,
								Le.range.startLineNumber,
								Y(Le),
							);
						if (ue(Le)) {
							const Fe = Le.getAllThreads().find((xe) => xe.stopped),
								Oe = Fe ? Fe.stateLabel : (0, c.localize)(5278, null);
							return (0, c.localize)(5279, null, Le.getLabel(), Oe);
						}
						return typeof Le == "string"
							? Le
							: Le instanceof Array
								? (0, c.localize)(5280, null, Le.length)
								: le.LABEL;
					}
				}
				class ve {
					constructor(Le) {
						this.a = Le;
					}
					isIncompressible(Le) {
						return ue(Le)
							? !(
									Le.compact ||
									this.a
										.getModel()
										.getSessions()
										.some((Oe) => Oe.parentSession === Le && Oe.compact)
								)
							: !0;
					}
				}
				(0, g.$4X)(
					class extends k.$WMb {
						constructor() {
							super({
								id: "callStack.collapse",
								viewId: R.$T4,
								title: (0, c.localize)(5281, null),
								f1: !1,
								icon: d.$ak.collapseAll,
								precondition: R.$24.isEqualTo((0, R.$45)(R.State.Stopped)),
								menu: {
									id: g.$XX.ViewTitle,
									order: 10,
									group: "navigation",
									when: o.$Kj.equals("view", R.$T4),
								},
							});
						}
						runInView(Le, Fe) {
							Fe.collapseAll();
						}
					},
				);
				function ge(Ce, Le, Fe, Oe, xe, He) {
					g.$ZX.appendMenuItem(g.$XX.DebugCallStackContext, {
						group: "inline",
						order: xe,
						when: Oe,
						command: { id: Ce, title: Le, icon: Fe, precondition: He },
					});
				}
				const be = o.$Kj.or(
					R.$e5.isEqualTo("thread"),
					o.$Kj.and(R.$e5.isEqualTo("session"), R.$h5),
				);
				ge(
					M.$9Gc,
					M.$IHc,
					N.$oKb,
					o.$Kj.and(be, R.$g5.toNegated()),
					10,
					R.$r5.toNegated(),
				),
					ge(M.$bHc, M.$MHc, N.$pKb, o.$Kj.and(be, R.$g5), 10),
					ge(M.$5Gc, M.$CHc, N.$kKb, be, 20, R.$g5),
					ge(M.$6Gc, M.$DHc, N.$lKb, be, 30, R.$g5),
					ge(M.$8Gc, M.$HHc, N.$mKb, be, 40, R.$g5),
					ge(M.$3Gc, M.$BHc, N.$jKb, R.$e5.isEqualTo("session"), 50),
					ge(
						M.$_Gc,
						M.$LHc,
						N.$hKb,
						o.$Kj.and(R.$f5.toNegated(), R.$e5.isEqualTo("session")),
						60,
					),
					ge(
						M.$0Gc,
						M.$JHc,
						N.$iKb,
						o.$Kj.and(R.$f5, R.$e5.isEqualTo("session")),
						60,
					);
			},
		)
