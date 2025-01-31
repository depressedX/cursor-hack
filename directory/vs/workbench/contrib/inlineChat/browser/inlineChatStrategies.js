import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../../editor/browser/stableEditorScroll.js';
import '../../../../editor/browser/widget/diffEditor/components/diffEditorViewZones/renderLines.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/editorWorker.js';
import '../../../../editor/common/viewModel.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/progress/common/progress.js';
import '../../../common/editor.js';
import '../../chat/common/chatWordCounter.js';
import './inlineChatSession.js';
import '../common/inlineChat.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/services/model.js';
import './utils.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../base/common/network.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../chat/browser/codeBlockPart.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/actions/browser/buttonbar.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../base/common/iterator.js';
import '../../mergeEditor/browser/view/conflictActions.js';
import '../../../../base/common/observable.js';
import '../../../../platform/actions/common/actions.js';
define(
			de[3770],
			he([
				1, 0, 7, 24, 6, 3, 26, 491, 1606, 196, 17, 64, 122, 200, 290, 8, 84, 44,
				790, 1244, 257, 28, 67, 1734, 91, 10, 85, 23, 5, 845, 19, 47, 1675, 38,
				103, 1740, 77, 11,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*arrays*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*themables*/,
				d /*stableEditorScroll*/,
				m /*renderLines*/,
				r /*lineRange*/,
				u /*range*/,
				a /*model*/,
				h /*textModel*/,
				c /*editorWorker*/,
				n /*viewModel*/,
				g /*contextkey*/,
				p /*progress*/,
				o /*editor*/,
				f /*chatWordCounter*/,
				b /*inlineChatSession*/,
				s /*inlineChat*/,
				l /*types*/,
				y /*model*/,
				$ /*utils*/,
				v /*accessibility*/,
				S /*configuration*/,
				I /*textfiles*/,
				T /*network*/,
				P /*instantiation*/,
				k /*codeBlockPart*/,
				L /*resources*/,
				D /*uuid*/,
				M /*buttonbar*/,
				N /*editorOptions*/,
				A /*iterator*/,
				R /*conflictActions*/,
				O /*observable*/,
				B /*actions*/,
) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n1b = e.$m1b = e.$l1b = e.HunkAction = void 0);
				var z;
				(function (G) {
					(G[(G.Accept = 0)] = "Accept"),
						(G[(G.Discard = 1)] = "Discard"),
						(G[(G.MoveNext = 2)] = "MoveNext"),
						(G[(G.MovePrev = 3)] = "MovePrev"),
						(G[(G.ToggleDiff = 4)] = "ToggleDiff");
				})(z || (e.HunkAction = z = {}));
				let F = class {
					static {
						U = this;
					}
					static {
						this.a = h.$eY.register({
							description: "inline-chat",
							showIfCollapsed: !1,
							isWholeLine: !0,
						});
					}
					constructor(K, J, W, X, Y) {
						(this.e = K),
							(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.b = new E.$Zc()),
							(this.c = this.b.add(new w.$re())),
							(this.d = this.b.add(new w.$re())),
							(this.onDidAccept = this.c.event),
							(this.onDidDiscard = this.d.event);
					}
					dispose() {
						this.b.dispose();
					}
					performHunkAction(K, J) {
						J === z.Accept ? this.c.fire() : J === z.Discard && this.d.fire();
					}
					async k(K) {
						const J = [],
							W = this.j.createInstance(k.$FYb);
						for (const X of this.e.chatModel.getRequests())
							if (X.response?.response) {
								for (const Y of X.response.response.value)
									if (
										Y.kind === "textEditGroup" &&
										!(K && (0, L.$gh)(Y.uri, this.e.textModelN.uri)) &&
										(await W.apply(X.response, Y, void 0),
										Y.uri.scheme === T.Schemas.untitled)
									) {
										const ie = this.h.untitled.get(Y.uri);
										ie && J.push(ie);
									}
							}
						for (const X of J)
							X.isDisposed() ||
								(await X.resolve(),
								await X.save({ reason: o.SaveReason.EXPLICIT }));
					}
					cancel() {
						return this.e.hunkData.discardAll();
					}
					getWholeRangeDecoration() {
						const J = [this.e.wholeRange.value].map((W) =>
							W.isEmpty() ? void 0 : { range: W, options: U.a },
						);
						return (0, i.$Mb)(J), J;
					}
				};
				(e.$l1b = F), (e.$l1b = F = U = Ne([j(3, I.$kZ), j(4, P.$Li)], F));
				let x = class extends F {
					constructor(K, J, W, X, Y, ie, ne) {
						super(K, J, W, ie, ne), (this.m = s.$9Kb.bindTo(Y));
						const ee = X.getModel(K.targetUri);
						w.Event.debounce(ee.onDidChangeContent.bind(ee), () => {}, 350)(
							(_) => {
								!ee.isDisposed() &&
									!K.textModel0.isDisposed() &&
									this.m.set(K.hasChangedText);
							},
							void 0,
							this.b,
						);
					}
					dispose() {
						this.m.reset(), super.dispose();
					}
					async apply() {
						await super.k(!1);
					}
					async makeChanges() {}
					async makeProgressiveChanges() {}
					async renderChanges() {}
					hasFocus() {
						return this.g.widget.hasFocus();
					}
				};
				(e.$m1b = x),
					(e.$m1b = x =
						Ne([j(3, y.$QO), j(4, g.$6j), j(5, I.$kZ), j(6, P.$Li)], x));
				let H = class extends F {
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(K, J, W, Q, Z),
							(this.t = X),
							(this.u = ie),
							(this.v = ne),
							(this.w = ee),
							(this.x = _),
							(this.y = te),
							(this.m = h.$eY.register({
								description: "inline-modified-line",
								className: "inline-chat-inserted-range-linehighlight",
								isWholeLine: !0,
								overviewRuler: {
									position: a.OverviewRulerLane.Full,
									color: (0, C.$bk)(s.$vLb),
								},
								minimap: {
									position: a.MinimapPosition.Inline,
									color: (0, C.$bk)(s.$wLb),
								},
							})),
							(this.n = h.$eY.register({
								description: "inline-chat-inserted-range-linehighlight",
								className: "inline-chat-inserted-range",
								stickiness:
									a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							})),
							(this.s = 0),
							(this.C = new Map()),
							(this.o = s.$0Kb.bindTo(Y)),
							(this.p = s.$$Kb.bindTo(Y)),
							(this.q = this.f.createDecorationsCollection()),
							(this.r = this.b.add(new R.$j1b(this.f)));
					}
					dispose() {
						this.z(), super.dispose();
					}
					z() {
						this.o.reset(),
							this.p.reset(),
							this.g.widget.updateStatus(""),
							this.q.clear();
						for (const K of this.C.values()) K.remove();
					}
					async apply() {
						this.z(), this.s > 0 && this.f.pushUndoStop(), await super.k(!0);
					}
					cancel() {
						return this.z(), super.cancel();
					}
					async makeChanges(K, J, W) {
						return this.A(K, J, void 0, void 0, W);
					}
					async makeProgressiveChanges(K, J, W, X) {
						const Y = new p.$0N((ie) => {
							const ne = new Set();
							for (const te of ie)
								r.$rL.fromRange(te.range).forEach((Q) => ne.add(Q));
							const ee = this.q.getRanges().map(r.$rL.fromRange);
							for (const te of ee) te.forEach((Q) => ne.delete(Q));
							const _ = [];
							for (const te of ne)
								_.push({
									range: new u.$iL(te, 1, te, Number.MAX_VALUE),
									options: this.m,
								});
							this.q.append(_);
						});
						return this.A(K, J, W, Y, X);
					}
					async A(K, J, W, X, Y) {
						if ((Y && this.f.pushUndoStop(), this.s++, W)) {
							const ie = W.duration / 1e3;
							for (const ne of K) {
								const _ = (0, f.$SKb)(ne.text ?? "") / ie,
									te = (0, $.$aZb)(new t.$jgb(this.g.domNode), ne, _, W.token);
								await (0, $.$_Yb)(this.e.textModelN, te, X, J);
							}
						} else
							J.start(),
								this.e.textModelN.pushEditOperations(
									null,
									K,
									(ie) => (X?.report(ie), null),
								),
								J.stop();
					}
					performHunkAction(K, J) {
						const W = this.B(K);
						if (!W) {
							J === z.Accept ? this.c.fire() : J === z.Discard && this.d.fire();
							return;
						}
						J === z.Accept
							? W.acceptHunk()
							: J === z.Discard
								? W.discardHunk()
								: J === z.MoveNext
									? W.move(!0)
									: J === z.MovePrev
										? W.move(!1)
										: J === z.ToggleDiff && W.toggleDiff?.();
					}
					B(K) {
						let J;
						if ((K && (J = this.C.get(K)), !J && this.g.position)) {
							const W = this.g.position.lineNumber;
							let X = Number.MAX_SAFE_INTEGER;
							for (const Y of this.C.values()) {
								if (Y.hunk.getState() !== b.HunkState.Pending) continue;
								const ie = Y.hunk.getRangesN(),
									ne =
										W <= ie[0].startLineNumber
											? ie[0].startLineNumber - W
											: W - ie[0].endLineNumber;
								ne < X && ((X = ne), (J = Y));
							}
						}
						return (
							J ||
								(J = A.Iterable.first(
									A.Iterable.filter(
										this.C.values(),
										(W) => W.hunk.getState() === b.HunkState.Pending,
									),
								)),
							J
						);
					}
					async renderChanges() {
						this.q.clear();
						const K = () => {
							let J;
							if (
								(q(this.f, (W, X) => {
									const Y = new Set(this.C.keys());
									J = void 0;
									for (const ie of this.e.hunkData.getInfo()) {
										Y.delete(ie);
										const ne = ie.getRangesN();
										let ee = this.C.get(ie);
										if (ee)
											if (ie.getState() !== b.HunkState.Pending) ee.remove();
											else {
												const _ =
														this.g.position?.lineNumber ??
														this.f.getPosition().lineNumber,
													te = ne[0];
												(ee.position = te.getStartPosition().delta(-1)),
													(ee.distance =
														_ <= te.startLineNumber
															? te.startLineNumber - _
															: _ - te.endLineNumber);
											}
										else {
											const _ = [];
											for (let Le = 0; Le < ne.length; Le++)
												_.push(
													W.addDecoration(ne[Le], Le === 0 ? this.m : this.n),
												);
											const te = () => {
													ie.acceptChanges(), K();
												},
												Q = () => {
													ie.discardChanges(), K();
												},
												Z = this.e.textModel0.mightContainNonBasicASCII(),
												se = this.e.textModel0.mightContainRTL(),
												re = m.$2xb.fromEditor(this.f),
												le = ie.getRanges0()[0],
												oe = new m.$1xb(
													r.$rL
														.fromRangeInclusive(le)
														.mapToLineArray((Le) =>
															this.e.textModel0.tokenization.getLineTokens(Le),
														),
													[],
													Z,
													se,
												),
												ae = document.createElement("div");
											ae.className = "inline-chat-original-zone2";
											const pe = (0, m.$Zxb)(
													oe,
													re,
													[
														new n.$3sb(
															new u.$iL(
																le.startLineNumber,
																1,
																le.startLineNumber,
																1,
															),
															"",
															n.InlineDecorationType.Regular,
														),
													],
													ae,
												),
												$e = {
													afterLineNumber: -1,
													heightInLines: pe.heightInLines,
													domNode: ae,
													ordinal: 50002,
												},
												ye = () => {
													const Le = d.$uwb.capture(this.f);
													q(this.f, (Fe, Oe) => {
														if (((0, l.$vg)(ee), ee.diffViewZoneId))
															Oe.removeZone(ee.diffViewZoneId),
																ue?.updateExtraTop(0),
																(ee.diffViewZoneId = void 0);
														else {
															const [xe] = ie.getRangesN();
															($e.afterLineNumber = xe.startLineNumber - 1),
																(ee.diffViewZoneId = Oe.addZone($e)),
																ue?.updateExtraTop(pe.heightInLines);
														}
													}),
														this.p.set(typeof ee?.diffViewZoneId == "string"),
														Le.restore(this.f);
												},
												ue = (this.t, void 0);
											let fe;
											const me = [];
											if (this.t && ie.getState() === b.HunkState.Pending) {
												fe = new E.$Zc();
												const Le = this.x.createMenu(s.$lLb, this.y),
													Fe = () => {
														const xe = [],
															He = Le.getActions();
														for (const [, Ke] of He)
															for (const Je of Ke)
																if (Je instanceof B.$2X) {
																	let Te = Je.label;
																	Je.id === s.$gLb
																		? (Te = Je.checked
																				? "Hide Changes"
																				: "Show Changes")
																		: C.ThemeIcon.isThemeIcon(Je.item.icon) &&
																			(Te = `$(${Je.item.icon.id}) ${Te}`),
																		xe.push({
																			text: Te,
																			tooltip: Je.tooltip,
																			action: async () => Je.run(),
																		});
																}
														return xe;
													},
													Oe = (0, O.observableValue)(this, Fe());
												fe.add(Le.onDidChange(() => Oe.set(Fe(), void 0))),
													fe.add(Le),
													fe.add(
														this.r.createWidget(
															X,
															ne[0].startLineNumber - 1,
															Oe,
															me,
														),
													);
											}
											const ve = () => {
													q(this.f, (Le, Fe) => {
														(0, l.$vg)(ee);
														for (const Oe of ee.decorationIds)
															Le.removeDecoration(Oe);
														ee.diffViewZoneId &&
															Fe.removeZone(ee.diffViewZoneId),
															(ee.decorationIds = []),
															(ee.diffViewZoneId = void 0),
															ee.lensActionsViewZoneIds?.forEach(Fe.removeZone),
															(ee.lensActionsViewZoneIds = void 0);
													}),
														fe?.dispose(),
														ue?.dispose();
												},
												ge = (Le) => {
													const Fe = Array.from(this.C.keys()),
														Oe = Fe.indexOf(ie),
														xe = (Oe + (Le ? 1 : -1) + Fe.length) % Fe.length;
													if (xe !== Oe) {
														const He = this.C.get(Fe[xe]);
														this.g.updatePositionAndHeight(He?.position), K();
													}
												},
												be =
													this.g.position?.lineNumber ??
													this.f.getPosition().lineNumber,
												Ce =
													be <= ne[0].startLineNumber
														? ne[0].startLineNumber - be
														: be - ne[0].endLineNumber;
											(ee = {
												hunk: ie,
												decorationIds: _,
												diffViewZoneId: "",
												diffViewZone: $e,
												lensActionsViewZoneIds: me,
												distance: Ce,
												position: ne[0].getStartPosition().delta(-1),
												acceptHunk: te,
												discardHunk: Q,
												toggleDiff: ie.isInsertion() ? void 0 : ye,
												remove: ve,
												move: ge,
											}),
												this.C.set(ie, ee);
										}
										ie.getState() === b.HunkState.Pending &&
											(!J || ee.distance < J.distance) &&
											(J = ee);
									}
									for (const ie of Y) {
										const ne = this.C.get(ie);
										ne && (this.C.delete(ie), ne.remove());
									}
								}),
								J)
							) {
								this.g.updatePositionAndHeight(J.position);
								const W = this.w.getValue(
									s.InlineChatConfigKeys.AccessibleDiffView,
								);
								(W === "on" ||
									(W === "auto" && this.v.isScreenReaderOptimized())) &&
									this.g.widget.showAccessibleHunk(this.e, J.hunk),
									this.o.set(!!J.toggleDiff);
							} else if (this.C.size > 0) {
								let W = !1;
								for (const X of this.e.hunkData.getInfo())
									if (X.getState() === b.HunkState.Accepted) {
										W = !0;
										break;
									}
								W ? this.c.fire() : this.d.fire();
							}
							return J;
						};
						return K()?.position;
					}
					hasFocus() {
						return this.g.widget.hasFocus();
					}
					getWholeRangeDecoration() {
						return [];
					}
				};
				(e.$n1b = H),
					(e.$n1b = H =
						Ne(
							[
								j(4, g.$6j),
								j(5, c.$Cxb),
								j(6, v.$XK),
								j(7, S.$gj),
								j(8, B.$YX),
								j(9, g.$6j),
								j(10, I.$kZ),
								j(11, P.$Li),
							],
							H,
						));
				function q(G, K) {
					G.changeDecorations((J) => {
						G.changeViewZones((W) => {
							K(J, W);
						});
					});
				}
				let V = class {
					constructor(K, J, W) {
						if (
							((this.e = K),
							(this.f = J),
							(this.g = W),
							(this.allowEditorOverflow = !1),
							(this.a = "inline-chat-diff-overlay-" + (0, D.$9g)()),
							(this.b = document.createElement("div")),
							(this.c = new E.$Zc()),
							(this.d = 0),
							this.b.classList.add("inline-chat-diff-overlay"),
							J.getState() === b.HunkState.Pending)
						) {
							const X = this.c.add(
								this.g.createInstance(M.$LLb, this.b, s.$lLb, {
									menuOptions: { arg: J },
									telemetrySource: "inlineChat-changesZone",
									buttonConfigProvider: (Y, ie) => ({
										isSecondary: ie > 0,
										showIcon: !0,
										showLabel: !1,
									}),
								}),
							);
							this.c.add(X.onDidChange(() => this.e.layoutOverlayWidget(this)));
						}
						this.e.addOverlayWidget(this),
							this.c.add(
								w.Event.any(
									this.e.onDidLayoutChange,
									this.e.onDidScrollChange,
								)(() => this.e.layoutOverlayWidget(this)),
							),
							queueMicrotask(() => this.e.layoutOverlayWidget(this));
					}
					dispose() {
						this.e.removeOverlayWidget(this), this.c.dispose();
					}
					getId() {
						return this.a;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						const K = this.f.getRangesN()[0].startLineNumber,
							J = this.e.getLayoutInfo(),
							W = this.e.getTopForLineNumber(K) - this.e.getScrollTop(),
							X = J.contentLeft + J.contentWidth - J.verticalScrollbarWidth,
							Y = this.e.getOption(N.EditorOption.lineHeight) * this.d,
							ie = (0, t.$vgb)(this.b);
						return { preference: { top: W - Y, left: X - ie } };
					}
					updateExtraTop(K) {
						this.d !== K && ((this.d = K), this.e.layoutOverlayWidget(this));
					}
				};
				V = Ne([j(2, P.$Li)], V);
			},
		)
