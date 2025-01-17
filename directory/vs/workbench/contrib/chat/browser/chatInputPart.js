import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fonts.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/history.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/contrib/hover/browser/contentHoverController2.js';
import '../../../../editor/contrib/hover/browser/marginHoverController.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/history/browser/contextScopedHistoryWidget.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/labels.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import './actions/chatExecuteActions.js';
import './chatFollowups.js';
import '../common/chatAgents.js';
import '../common/chatContextKeys.js';
import '../common/chatWidgetHistoryService.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
define(
			de[1329],
			he([
				1, 0, 7, 661, 114, 127, 183, 14, 6, 647, 27, 3, 54, 12, 9, 46, 206, 17,
				67, 448, 603, 4, 91, 607, 92, 173, 11, 10, 8, 49, 22, 413, 5, 128, 39,
				34, 40, 35, 233, 130, 417, 1047, 1720, 153, 207, 1235, 521,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
			) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VYb = void 0),
					(t = mt(t)),
					(E = mt(E));
				const W = t.$,
					X = 250;
				let Y = class extends a.$1c {
					static {
						J = this;
					}
					static {
						this.INPUT_SCHEME = "chatSessionInput";
					}
					static {
						this.b = 0;
					}
					get attachedContext() {
						return this.q;
					}
					get inputPartHeight() {
						return this.H;
					}
					get inputEditor() {
						return this.I;
					}
					constructor(Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.Y = Q),
							(this.Z = Z),
							(this.ab = se),
							(this.bb = re),
							(this.cb = le),
							(this.db = oe),
							(this.eb = ae),
							(this.fb = pe),
							(this.gb = $e),
							(this.hb = ye),
							(this.ib = ue),
							(this.c = this.D(new m.$re())),
							(this.onDidLoadInputState = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onDidChangeHeight = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidFocus = this.g.event),
							(this.h = this.D(new m.$re())),
							(this.onDidBlur = this.h.event),
							(this.j = this.D(new m.$re())),
							(this.onDidChangeContext = this.j.event),
							(this.m = this.D(new m.$re())),
							(this.onDidAcceptFollowup = this.m.event),
							(this.n = -1),
							(this.q = new Set()),
							(this.r = this.D(new m.$re())),
							(this.s = this.db.createInstance(U.$uPb, {
								onDidChangeVisibility: this.r.event,
							})),
							(this.u = 0),
							(this.C = this.D(new a.$Zc())),
							(this.G = this.D(new a.$Zc())),
							(this.H = 0),
							(this.P = !1),
							(this.inputUri = n.URI.parse(`${J.INPUT_SCHEME}:input-${J.b++}`)),
							(this.t = this.Z.renderStyle === "compact" ? X / 3 : X),
							(this.R = V.$11.bindTo(ae)),
							(this.S = V.$81.bindTo(ae)),
							(this.U = V.$21.bindTo(ae)),
							(this.M = this.jb()),
							this.D(
								this.bb.onDidClearHistory(
									() => (this.M = new r.$Kob([{ text: "" }], 50, ie)),
								),
							),
							this.D(
								this.fb.onDidChangeConfiguration((fe) => {
									fe.affectsConfiguration(
										z.AccessibilityVerbositySettingId.Chat,
									) && this.inputEditor.updateOptions({ ariaLabel: this.kb() });
								}),
							);
					}
					jb() {
						const Q = this.bb.getHistory(this.Y);
						return (
							Q.length === 0 && Q.push({ text: "" }), new r.$Kob(Q, 50, ie)
						);
					}
					kb() {
						if (this.fb.getValue(z.AccessibilityVerbositySettingId.Chat)) {
							const Z = this.gb
								.lookupKeybinding(
									F.AccessibilityCommandId.OpenAccessibilityHelp,
								)
								?.getLabel();
							return Z
								? (0, l.localize)(4670, null, Z)
								: (0, l.localize)(4671, null);
						}
						return (0, l.localize)(4672, null);
					}
					updateState(Q) {
						if (this.P) return;
						const Z = { text: this.I.getValue(), state: Q };
						this.M.isAtEnd()
							? this.M.replaceLast(Z)
							: (this.M.replaceLast(Z), this.M.resetCursor());
					}
					initForNewChatModel(Q, Z) {
						(this.M = this.jb()),
							this.M.add({ text: Q ?? this.M.current().text, state: Z }),
							Q && this.setValue(Q, !1);
					}
					logInputHistory() {
						const Q = [...this.M]
							.map((Z) => JSON.stringify(Z))
							.join(`
`);
						this.ib.info(`[${this.Y}] Chat input history:`, Q);
					}
					setVisible(Q) {
						this.r.fire(Q);
					}
					get element() {
						return this.w;
					}
					showPreviousValue() {
						const Q = this.ab();
						this.M.isAtEnd()
							? this.mb(Q)
							: this.M.has({ text: this.I.getValue(), state: Q }) ||
								(this.mb(Q), this.M.resetCursor()),
							this.lb(!0);
					}
					showNextValue() {
						const Q = this.ab();
						this.M.isAtEnd() ||
							(this.M.has({ text: this.I.getValue(), state: Q }) ||
								(this.mb(Q), this.M.resetCursor()),
							this.lb(!1));
					}
					lb(Q) {
						const Z = Q ? this.M.previous() : this.M.next();
						if (
							(E.$pib(Z.text),
							(this.P = !0),
							this.setValue(Z.text, !0),
							(this.P = !1),
							this.c.fire(Z.state),
							Q)
						)
							this.I.setPosition({ lineNumber: 1, column: 1 });
						else {
							const se = this.I.getModel();
							if (!se) return;
							this.I.setPosition(ne(se));
						}
					}
					setValue(Q, Z) {
						this.inputEditor.setValue(Q),
							this.inputEditor.setPosition({
								lineNumber: 1,
								column: Q.length + 1,
							}),
							Z || this.mb(this.ab());
					}
					mb(Q) {
						const Z = { text: this.I.getValue(), state: Q };
						this.M.replaceLast(Z);
					}
					focus() {
						this.I.focus();
					}
					hasFocus() {
						return this.I.hasWidgetFocus();
					}
					async acceptInput(Q) {
						if (Q) {
							const se = { text: this.I.getValue(), state: this.ab() };
							this.M.replaceLast(se), this.M.add({ text: "" });
						}
						this.q.clear(),
							this.c.fire({}),
							this.hb.isScreenReaderOptimized() && c.$m
								? this.nb()
								: (this.I.focus(), this.I.setValue(""));
					}
					nb() {
						const Q = this.I.getDomNode();
						Q &&
							(Q.remove(),
							this.I.setValue(""),
							this.J.appendChild(Q),
							this.I.focus());
					}
					attachContext(Q, ...Z) {
						const se = [];
						if (
							(Q && (se.push(...Array.from(this.q)), this.q.clear()),
							Z.length > 0)
						)
							for (const re of Z) this.q.add(re);
						(se.length > 0 || Z.length > 0) &&
							(this.ob(this.F), Q || this.j.fire({ removed: se, added: Z }));
					}
					render(Q, Z, se) {
						(this.w = t.$fhb(Q, W(".interactive-input-part"))),
							this.w.classList.toggle(
								"compact",
								this.Z.renderStyle === "compact",
							);
						let re, le;
						this.Z.renderStyle === "compact"
							? ((le = t.$fhb(
									this.w,
									W(".interactive-input-and-side-toolbar"),
								)),
								(this.z = t.$fhb(this.w, W(".interactive-input-followups"))),
								(re = t.$fhb(le, W(".interactive-input-and-execute-toolbar"))),
								(this.F = t.$fhb(this.w, W(".chat-attached-context"))))
							: ((this.z = t.$fhb(this.w, W(".interactive-input-followups"))),
								(this.F = t.$fhb(this.w, W(".chat-attached-context"))),
								(le = t.$fhb(this.w, W(".interactive-input-and-side-toolbar"))),
								(re = t.$fhb(le, W(".interactive-input-and-execute-toolbar")))),
							this.ob(this.F);
						const oe = this.D(this.eb.createScoped(re));
						V.$31.bindTo(oe).set(!0);
						const ae = this.D(this.db.createChild(new N.$Ki([P.$6j, oe]))),
							{
								historyNavigationBackwardsEnablement: pe,
								historyNavigationForwardsEnablement: $e,
							} = this.D((0, D.$UCb)(oe, this));
						(this.N = pe), (this.O = $e);
						const ye = (0, K.$xYb)(this.fb);
						(ye.overflowWidgetsDomNode = this.Z.editorOverflowWidgetsDomNode),
							(ye.readOnly = !1),
							(ye.ariaLabel = this.kb()),
							(ye.fontFamily = i.$njb),
							(ye.fontSize = 13),
							(ye.lineHeight = 20),
							(ye.padding =
								this.Z.renderStyle === "compact"
									? { top: 2, bottom: 2 }
									: { top: 8, bottom: 8 }),
							(ye.cursorWidth = 1),
							(ye.wrappingStrategy = "advanced"),
							(ye.bracketPairColorization = { enabled: !1 }),
							(ye.suggest = {
								showIcons: !1,
								showSnippets: !1,
								showWords: !0,
								showStatusBar: !1,
								insertMode: "replace",
							}),
							(ye.scrollbar = { ...(ye.scrollbar ?? {}), vertical: "hidden" }),
							(ye.stickyScroll = { enabled: !1 }),
							(this.J = t.$fhb(re, W(_)));
						const ue = (0, K.$yYb)();
						if (
							(ue.contributions?.push(
								...g.EditorExtensionsRegistry.getSomeEditorContributions([
									b.$whc.ID,
									s.$2Ob.ID,
								]),
							),
							(this.I = this.D(ae.createInstance(p.$rwb, this.J, ye, ue))),
							this.D(
								this.I.onDidChangeModelContent(() => {
									const ve = Math.min(this.I.getContentHeight(), this.t);
									ve !== this.u && ((this.u = ve), this.f.fire());
									const ge = this.I.getModel(),
										be = !!ge && ge.getValue().trim().length > 0;
									this.R.set(be);
								}),
							),
							this.D(
								this.I.onDidFocusEditorText(() => {
									this.U.set(!0),
										this.g.fire(),
										re.classList.toggle("focused", !0);
								}),
							),
							this.D(
								this.I.onDidBlurEditorText(() => {
									this.U.set(!1),
										re.classList.toggle("focused", !1),
										this.h.fire();
								}),
							),
							(this.L = this.D(
								this.db.createInstance(
									S.$Tyb,
									re,
									this.Z.menus.executeToolbar,
									{
										telemetrySource: this.Z.menus.telemetrySource,
										menuOptions: { shouldForwardArgs: !0 },
										hiddenItemStrategy: S.HiddenItemStrategy.Ignore,
										actionViewItemProvider: (ve, ge) => {
											if (
												this.Y === q.ChatAgentLocation.Panel &&
												(ve.id === x.$PYb.ID || ve.id === x.$RYb.ID) &&
												ve instanceof I.$2X
											) {
												const be = this.db.createInstance(
													I.$2X,
													{
														id: "chat.moreExecuteActions",
														title: (0, l.localize)(4673, null),
														icon: d.$ak.chevronDown,
													},
													void 0,
													void 0,
													void 0,
													void 0,
												);
												return this.db.createInstance(ee, ve, be);
											}
										},
									},
								),
							)),
							this.L.getElement().classList.add("interactive-execute-toolbar"),
							(this.L.context = { widget: se }),
							this.D(
								this.L.onDidChangeMenuItems(() => {
									this.W &&
										typeof this.X == "number" &&
										this.X !== this.L.getItemsWidth() &&
										this.layout(this.W.height, this.W.width);
								}),
							),
							this.Z.menus.inputSideToolbar)
						) {
							const ve = this.D(
								this.db.createInstance(
									S.$Tyb,
									le,
									this.Z.menus.inputSideToolbar,
									{
										telemetrySource: this.Z.menus.telemetrySource,
										menuOptions: { shouldForwardArgs: !0 },
									},
								),
							);
							(this.y = ve.getElement()),
								ve.getElement().classList.add("chat-side-toolbar"),
								(ve.context = { widget: se });
						}
						let fe = this.cb.getModel(this.inputUri);
						if (
							(fe ||
								((fe = this.cb.createModel("", null, this.inputUri, !0)),
								this.D(fe)),
							(this.Q = fe),
							this.Q.updateOptions({
								bracketColorizationOptions: {
									enabled: !1,
									independentColorPoolPerBracketType: !1,
								},
							}),
							this.I.setModel(this.Q),
							Z)
						) {
							this.Q.setValue(Z);
							const ve = this.Q.getLineCount();
							this.I.setPosition({
								lineNumber: ve,
								column: this.Q.getLineMaxColumn(ve),
							});
						}
						const me = () => {
							const ve = this.I.getModel();
							if (!ve) return;
							const ge = this.I.getPosition();
							if (!ge) return;
							const be = ge.column === 1 && ge.lineNumber === 1;
							this.S.set(be), this.N.set(be), this.O.set(ge.equals(ne(ve)));
						};
						this.D(this.I.onDidChangeCursorPosition((ve) => me())), me();
					}
					ob(Q, Z = !1) {
						const se = Q.offsetHeight;
						t.$9fb(Q),
							this.G.clear(),
							t.$khb(!!this.attachedContext.size, this.F),
							this.attachedContext.size || (this.n = -1),
							[...this.attachedContext.values()].forEach((re, le) => {
								const oe = t.$fhb(
										Q,
										W(".chat-attached-context-attachment.show-file-icons"),
									),
									ae = this.s.create(oe, { supportIcons: !0 }),
									pe = n.URI.isUri(re.value)
										? re.value
										: re.value &&
												typeof re.value == "object" &&
												"uri" in re.value &&
												n.URI.isUri(re.value.uri)
											? re.value.uri
											: void 0,
									$e =
										re.value &&
										typeof re.value == "object" &&
										"range" in re.value &&
										o.$iL.isIRange(re.value.range)
											? re.value.range
											: void 0;
								if (pe && re.isFile) {
									const fe = (0, h.$sc)(pe.path),
										me = (0, h.$rc)(pe.path),
										ve = `${fe} ${me}`,
										ge = $e
											? (0, l.localize)(
													4674,
													null,
													ve,
													$e.startLineNumber,
													$e.endLineNumber,
												)
											: (0, l.localize)(4675, null, ve);
									ae.setFile(pe, {
										fileKind: L.FileKind.FILE,
										hidePath: !0,
										range: $e,
									}),
										(oe.ariaLabel = ge),
										(oe.tabIndex = 0);
								} else {
									const fe = re.fullName ?? re.name,
										me = re.icon?.id ? `$(${re.icon.id}) ${fe}` : fe;
									ae.setLabel(me, void 0),
										(oe.ariaLabel = (0, l.localize)(4676, null, re.name)),
										(oe.tabIndex = 0);
								}
								const ye = new C.$oob(oe, { supportIcons: !0 });
								le === Math.min(this.n, this.attachedContext.size - 1) &&
									ye.focus(),
									this.G.add(ye),
									(ye.icon = d.$ak.close);
								const ue = ye.onDidClick((fe) => {
									if ((this.q.delete(re), ue.dispose(), t.$8gb(fe))) {
										const me = new w.$7fb(fe);
										(me.equals(u.KeyCode.Enter) ||
											me.equals(u.KeyCode.Space)) &&
											(this.n = le);
									}
									this.f.fire(), this.j.fire({ removed: [re] });
								});
								this.G.add(ue);
							}),
							se !== Q.offsetHeight && !Z && this.f.fire();
					}
					async renderFollowups(Q, Z) {
						this.Z.renderFollowups &&
							(this.C.clear(),
							t.$9fb(this.z),
							Q &&
								Q.length > 0 &&
								this.C.add(
									this.db.createInstance(
										H.$RXb,
										this.z,
										Q,
										this.Y,
										void 0,
										(se) => this.m.fire({ followup: se, response: Z }),
									),
								),
							this.f.fire());
					}
					get contentHeight() {
						const Q = this.rb();
						return (
							Q.followupsHeight +
							Q.inputPartEditorHeight +
							Q.inputPartVerticalPadding +
							Q.inputEditorBorder +
							Q.implicitContextHeight
						);
					}
					layout(Q, Z) {
						return (this.W = new t.$pgb(Z, Q)), this.qb(Q, Z);
					}
					qb(Q, Z, se = !0) {
						this.ob(this.F, !0);
						const re = this.rb(),
							le = Math.min(
								re.inputPartEditorHeight,
								Q - re.followupsHeight - re.inputPartVerticalPadding,
							),
							oe = Z - re.inputPartHorizontalPadding;
						(this.z.style.width = `${oe}px`),
							(this.H =
								re.followupsHeight +
								le +
								re.inputPartVerticalPadding +
								re.inputEditorBorder +
								re.implicitContextHeight);
						const ae = this.I.getScrollWidth(),
							$e = {
								width:
									Z -
									re.inputPartHorizontalPadding -
									re.editorBorder -
									re.editorPadding -
									re.executeToolbarWidth -
									re.sideToolbarWidth -
									re.toolbarPadding,
								height: le,
							};
						if (
							((!this.pb ||
								this.pb.width !== $e.width ||
								this.pb.height !== $e.height) &&
								(this.I.layout($e), (this.pb = $e)),
							se && ae < 10)
						)
							return this.qb(Q, Z, !1);
					}
					rb() {
						return {
							inputEditorBorder: 2,
							followupsHeight: this.z.offsetHeight,
							inputPartEditorHeight: Math.min(
								this.I.getContentHeight(),
								this.t,
							),
							inputPartHorizontalPadding:
								this.Z.renderStyle === "compact" ? 12 : 40,
							inputPartVerticalPadding:
								this.Z.renderStyle === "compact" ? 12 : 24,
							implicitContextHeight: this.F.offsetHeight,
							editorBorder: 2,
							editorPadding: 12,
							toolbarPadding: (this.L.getItemsLength() - 1) * 4,
							executeToolbarWidth: (this.X = this.L.getItemsWidth()),
							sideToolbarWidth: this.y ? t.$vgb(this.y) + 4 : 0,
						};
					}
					saveState() {
						this.mb(this.ab());
						const Q = [...this.M];
						this.bb.saveHistory(this.Y, Q);
					}
				};
				(e.$VYb = Y),
					(e.$VYb =
						Y =
						J =
							Ne(
								[
									j(3, G.$TYb),
									j(4, f.$QO),
									j(5, M.$Li),
									j(6, P.$6j),
									j(7, T.$gj),
									j(8, A.$uZ),
									j(9, y.$XK),
									j(10, R.$ik),
								],
								Y,
							));
				const ie = (te) => JSON.stringify(te);
				function ne(te) {
					return {
						lineNumber: te.getLineCount(),
						column: te.getLineLength(te.getLineCount()) + 1,
					};
				}
				let ee = class extends $.$OYb {
					constructor(Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							Q,
							Z,
							[],
							"",
							re,
							{ getKeyBinding: (me) => ae.lookupKeybinding(me.id, oe) },
							ae,
							pe,
							oe,
							$e,
							ye,
						);
						const ue = se.createMenu(I.$XX.ChatExecuteSecondary, oe),
							fe = () => {
								const me = [];
								(0, v.$Kyb)(ue, { shouldForwardArgs: !0 }, me);
								const ve = le.getSecondaryAgent();
								ve &&
									me.forEach(
										(ge) => (
											ge.id === x.$QYb.ID &&
												(ge.label = (0, l.localize)(4677, null, ve.name)),
											ge
										),
									),
									this.update(Z, me);
							};
						fe(), this.D(ue.onDidChange(() => fe()));
					}
				};
				ee = Ne(
					[
						j(2, I.$YX),
						j(3, k.$Xxb),
						j(4, q.$c3),
						j(5, P.$6j),
						j(6, A.$uZ),
						j(7, O.$4N),
						j(8, B.$iP),
						j(9, y.$XK),
					],
					ee,
				);
				const _ = ".interactive-input-editor";
				(0, K.$zYb)(_);
			},
		),
		