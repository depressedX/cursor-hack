import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marked/marked.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/standaloneStrings.js';
import '../../../../editor/contrib/codeAction/browser/codeActionController.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingResolver.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import './accessibilityConfiguration.js';
import './accessibleViewKeybindingResolver.js';
import '../common/accessibilityCommands.js';
import '../../chat/browser/chat.js';
import '../../codeEditor/browser/simpleEditorOptions.js';
define(
			de[3761],
			he([
				1, 0, 7, 114, 105, 127, 14, 27, 3, 434, 12, 26, 9, 46, 206, 48, 67, 761,
				500, 4, 178, 91, 92, 173, 11, 31, 10, 8, 49, 5, 39, 390, 180, 41, 63,
				21, 130, 2953, 417, 208, 521,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keyboardEvent*/,
				w /*actionbar*/,
				E /*aria*/,
				C /*codicons*/,
				d /*keyCodes*/,
				m /*lifecycle*/,
				r /*marked*/,
				u /*platform*/,
				a /*themables*/,
				h /*uri*/,
				c /*editorExtensions*/,
				n /*codeEditorWidget*/,
				g /*position*/,
				p /*model*/,
				o /*standaloneStrings*/,
				f /*codeActionController*/,
				b /*nls*/,
				s /*accessibleView*/,
				l /*accessibility*/,
				y /*menuEntryActionViewItem*/,
				$ /*toolbar*/,
				v /*actions*/,
				S /*commands*/,
				I /*configuration*/,
				T /*contextkey*/,
				P /*contextView*/,
				k /*instantiation*/,
				L /*keybinding*/,
				D /*keybindingResolver*/,
				M /*layoutService*/,
				N /*opener*/,
				A /*quickInput*/,
				R /*storage*/,
				O /*accessibilityConfiguration*/,
				B /*accessibleViewKeybindingResolver*/,
				U /*accessibilityCommands*/,
				z /*chat*/,
				F /*simpleEditorOptions*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H2c = e.$G2c = void 0),
					(r = mt(r));
				var x;
				(function (J) {
					J[(J.MAX_WIDTH = 600)] = "MAX_WIDTH";
				})(x || (x = {}));
				let H = class extends m.$1c {
					get editorWidget() {
						return this.a;
					}
					constructor(W, X, Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe) {
						super(),
							(this.L = W),
							(this.M = X),
							(this.N = Y),
							(this.O = ie),
							(this.P = ne),
							(this.Q = ee),
							(this.R = _),
							(this.S = te),
							(this.U = Q),
							(this.W = Z),
							(this.X = se),
							(this.Y = re),
							(this.Z = le),
							(this.$ = oe),
							(this.w = !1),
							(this.b = O.$MLb.bindTo(this.Q)),
							(this.g = O.$NLb.bindTo(this.Q)),
							(this.h = O.$OLb.bindTo(this.Q)),
							(this.j = O.$PLb.bindTo(this.Q)),
							(this.m = O.$QLb.bindTo(this.Q)),
							(this.n = O.$SLb.bindTo(this.Q)),
							(this.q = O.$TLb.bindTo(this.Q)),
							(this.r = O.$ULb.bindTo(this.Q)),
							(this.f = O.$RLb.bindTo(this.Q)),
							(this.s = O.$VLb.bindTo(this.Q)),
							(this.t = O.$WLb.bindTo(this.Q)),
							(this.z = document.createElement("div")),
							this.z.classList.add("accessible-view"),
							this.N.getValue(
								O.AccessibilityWorkbenchSettingId.HideAccessibleView,
							) && this.z.classList.add("hide");
						const ae = {
								contributions:
									c.EditorExtensionsRegistry.getEditorContributions().filter(
										(fe) => fe.id !== f.$BBb.ID,
									),
							},
							pe = document.createElement("div");
						pe.classList.add("accessible-view-title-bar"),
							(this.C = document.createElement("div")),
							this.C.classList.add("accessible-view-title"),
							pe.appendChild(this.C);
						const $e = document.createElement("div");
						$e.classList.add("accessible-view-action-bar"),
							pe.appendChild($e),
							this.z.appendChild(pe),
							(this.F = this.D(
								X.createInstance($.$Syb, $e, {
									orientation: w.ActionsOrientation.HORIZONTAL,
								}),
							)),
							(this.F.context = { viewId: "accessibleView" });
						const ye = this.F.getElement();
						ye.tabIndex = 0;
						const ue = {
							...(0, F.$xYb)(this.N),
							lineDecorationsWidth: 6,
							dragAndDrop: !1,
							cursorWidth: 1,
							wordWrap: "off",
							wrappingStrategy: "advanced",
							wrappingIndent: "none",
							padding: { top: 2, bottom: 2 },
							quickSuggestions: !1,
							renderWhitespace: "none",
							dropIntoEditor: { enabled: !1 },
							readOnly: !0,
							fontFamily: "var(--monaco-monospace-font)",
						};
						(this.a = this.D(this.M.createInstance(n.$rwb, this.z, ue, ae))),
							this.D(
								this.R.onDidChangeScreenReaderOptimized(() => {
									this.G && this.b.get() && this.show(this.G);
								}),
							),
							this.D(
								this.N.onDidChangeConfiguration((fe) => {
									this.G instanceof s.$ILb &&
										fe.affectsConfiguration(this.G.verbositySettingKey) &&
										(this.b.get() && this.show(this.G),
										this.j.set(this.N.getValue(this.G.verbositySettingKey)),
										this.gb(this.G.actions, this.G.options.type)),
										fe.affectsConfiguration(
											O.AccessibilityWorkbenchSettingId.HideAccessibleView,
										) &&
											this.z.classList.toggle(
												"hide",
												this.N.getValue(
													O.AccessibilityWorkbenchSettingId.HideAccessibleView,
												),
											);
								}),
							),
							this.D(this.a.onDidDispose(() => this.ab())),
							this.D(
								this.a.onDidChangeCursorPosition(() => {
									this.f.set(
										this.a.getPosition()?.lineNumber ===
											this.a.getModel()?.getLineCount(),
									);
								}),
							),
							this.D(
								this.a.onDidChangeCursorPosition(() => {
									const fe = this.a.getPosition()?.lineNumber;
									if (this.u && fe !== void 0) {
										const me =
											this.u.find(
												(ve) => ve.startLine <= fe && ve.endLine >= fe,
											) !== void 0;
										this.q.set(me);
									}
								}),
							);
					}
					ab() {
						this.b.reset(),
							this.g.reset(),
							this.h.reset(),
							this.j.reset(),
							this.m.reset(),
							this.n.reset(),
							this.t.reset(),
							this.s.reset();
					}
					getPosition(W) {
						if (!(!W || !this.I || this.I.id !== W))
							return this.a.getPosition() || void 0;
					}
					setPosition(W, X, Y) {
						if ((this.a.setPosition(W), X && this.a.revealPosition(W), Y)) {
							const ie = this.a.getModel()?.getLineLength(W.lineNumber) ?? 0;
							ie &&
								this.a.setSelection({
									startLineNumber: W.lineNumber,
									startColumn: 1,
									endLineNumber: W.lineNumber,
									endColumn: ie + 1,
								});
						}
					}
					getCodeBlockContext() {
						const W = this.a.getPosition();
						if (!this.u?.length || !W) return;
						const X = this.u?.findIndex(
								(ie) =>
									ie.startLine <= W?.lineNumber && ie.endLine >= W?.lineNumber,
							),
							Y = X !== void 0 && X > -1 ? this.u[X] : void 0;
						if (!(!Y || X === void 0))
							return {
								code: Y.code,
								languageId: Y.languageId,
								codeBlockIndex: X,
								element: void 0,
							};
					}
					navigateToCodeBlock(W) {
						const X = this.a.getPosition();
						if (!this.u?.length || !X) return;
						let Y;
						const ie = this.u.slice();
						W === "previous"
							? (Y = ie.reverse().find((ne) => ne.endLine < X.lineNumber))
							: (Y = ie.find((ne) => ne.startLine > X.lineNumber)),
							Y && this.setPosition(new g.$hL(Y.startLine, 1), !0);
					}
					showLastProvider(W) {
						!this.I || this.I.options.id !== W || this.show(this.I);
					}
					show(W, X, Y, ie) {
						if (((W = W ?? this.G), !W)) return;
						W.onOpen?.();
						const ne = {
							getAnchor: () => ({
								x:
									(0, t.$Ogb)().innerWidth / 2 -
									Math.min(
										this.U.activeContainerDimension.width * 0.62,
										x.MAX_WIDTH,
									) /
										2,
								y: this.U.activeContainerOffset.quickPickTop,
							}),
							render: (ee) => (
								(this.J = ee),
								this.J.classList.add("accessible-view-container"),
								this.fb(W, ee, Y)
							),
							onHide: () => {
								Y ||
									(this.kb(), this.G?.dispose(), (this.G = void 0), this.ab());
							},
						};
						this.P.showContextView(ne),
							ie &&
								queueMicrotask(() => {
									this.a.revealLine(ie.lineNumber),
										this.a.setSelection({
											startLineNumber: ie.lineNumber,
											startColumn: ie.column,
											endLineNumber: ie.lineNumber,
											endColumn: ie.column,
										});
								}),
							X && this.G && this.showSymbol(this.G, X),
							W instanceof s.$ILb &&
								W.onDidRequestClearLastProvider &&
								this.D(
									W.onDidRequestClearLastProvider((ee) => {
										this.I?.options.id === ee && (this.I = void 0);
									}),
								),
							W.options.id && (this.I = W),
							W.id === s.AccessibleViewProviderId.Chat &&
								this.D(
									this.Y.registerProvider(
										{ getCodeBlockContext: () => this.getCodeBlockContext() },
										"accessibleView",
									),
								),
							W instanceof s.$JLb &&
								this.Z.store(
									`${l.$1K}${W.id}`,
									!0,
									R.StorageScope.APPLICATION,
									R.StorageTarget.USER,
								),
							W.onDidChangeContent &&
								this.D(
									W.onDidChangeContent(() => {
										this.J && this.fb(W, this.J, Y);
									}),
								);
					}
					previous() {
						const W = this.G?.providePreviousContent?.();
						!this.G || !this.J || !W || this.fb(this.G, this.J, void 0, W);
					}
					next() {
						const W = this.G?.provideNextContent?.();
						!this.G || !this.J || !W || this.fb(this.G, this.J, void 0, W);
					}
					bb() {
						return this.G
							? this.G instanceof s.$ILb
								? this.N.getValue(this.G.verbositySettingKey) === !0
								: this.Z.getBoolean(
										`${l.$1K}${this.G.id}`,
										R.StorageScope.APPLICATION,
										!1,
									)
							: !1;
					}
					goToSymbol() {
						this.G && this.M.createInstance(V, this).show(this.G);
					}
					calculateCodeBlocks(W) {
						if (
							!W ||
							this.G?.id !== s.AccessibleViewProviderId.Chat ||
							(this.G.options.language &&
								this.G.options.language !== "markdown")
						)
							return;
						const X = W.split(`
`);
						this.u = [];
						let Y = !1,
							ie = 0,
							ne;
						X.forEach((ee, _) => {
							if (!Y && ee.startsWith("```"))
								(Y = !0), (ie = _ + 1), (ne = ee.substring(3).trim());
							else if (Y && ee.endsWith("```")) {
								Y = !1;
								const te = _,
									Q = X.slice(ie, te).join(`
`);
								this.u?.push({
									startLine: ie,
									endLine: te,
									code: Q,
									languageId: ne,
								});
							}
						}),
							this.r.set(this.u.length > 0);
					}
					getSymbols() {
						const W = this.G instanceof s.$ILb ? this.G : void 0;
						if (!this.H || !W) return;
						const X = W.getSymbols?.() || [];
						if (X?.length) return X;
						if (W.options.language && W.options.language !== "markdown") return;
						const Y = r.marked.lexer(this.H);
						if (Y) return this.cb(Y, X), X.length ? X : void 0;
					}
					openHelpLink() {
						this.G?.options.readMoreUrl &&
							this.L.open(h.URI.parse(this.G.options.readMoreUrl));
					}
					configureKeybindings(W) {
						this.w = !0;
						const X = this.kb(),
							Y = W
								? X?.options?.configureKeybindingItems
								: X?.options?.configuredKeybindingItems;
						if (!Y) return;
						const ie = this.D(new m.$Zc()),
							ne = ie.add(this.$.createQuickPick());
						(ne.items = Y),
							(ne.title = (0, b.localize)(4376, null)),
							(ne.placeholder = (0, b.localize)(4377, null)),
							ne.show(),
							ie.add(
								ne.onDidAccept(async () => {
									const ee = ne.selectedItems[0];
									ee &&
										(await this.X.executeCommand(
											"workbench.action.openGlobalKeybindings",
											ee.id,
										)),
										ne.dispose();
								}),
							),
							ie.add(
								ne.onDidHide(() => {
									!ne.selectedItems.length && X && this.show(X),
										ie.dispose(),
										(this.w = !1);
								}),
							);
					}
					cb(W, X) {
						let Y;
						for (const ie of W) {
							let ne;
							if ("type" in ie)
								switch (ie.type) {
									case "heading":
									case "paragraph":
									case "code":
										ne = ie.text;
										break;
									case "list": {
										const ee = ie.items[0];
										if (!ee) break;
										(Y = `- ${ee.text}`),
											(ne = ie.items.map((_) => _.text).join(", "));
										break;
									}
								}
							ne &&
								(X.push({
									markdownToParse: ne,
									label: (0, b.localize)(4378, null, ie.type, ne),
									ariaLabel: (0, b.localize)(4379, null, ie.type, ne),
									firstListItem: Y,
								}),
								(Y = void 0));
						}
					}
					showSymbol(W, X) {
						if (!this.H) return;
						let Y = X.lineNumber;
						const ie = X.markdownToParse;
						if (!(Y === void 0 && ie === void 0)) {
							if (Y === void 0 && ie) {
								const ne =
									this.H.split(`
`).findIndex(
										(ee) =>
											ee.includes(
												ie.split(`
`)[0],
											) ||
											(X.firstListItem && ee.includes(X.firstListItem)),
									) ?? -1;
								ne >= 0 && (Y = ne + 1);
							}
							Y !== void 0 &&
								(this.show(W, void 0, void 0, { lineNumber: Y, column: 1 }),
								this.db(W, !0));
						}
					}
					disableHint() {
						this.G instanceof s.$ILb &&
							(this.N.updateValue(this.G?.verbositySettingKey, !1),
							(0, E.$oib)(
								(0, b.localize)(4380, null, this.G.verbositySettingKey),
							));
					}
					db(W, X) {
						W.options.type === s.AccessibleViewType.Help
							? (this.b.set(X), this.g.reset())
							: (this.g.set(X), this.b.reset()),
							this.h.set(
								W.provideNextContent !== void 0 ||
									W.providePreviousContent !== void 0,
							),
							this.j.set(this.bb()),
							this.m.set(this.jb() ? this.getSymbols()?.length > 0 : !1);
					}
					eb(W, X) {
						let Y = X ?? W.provideContent();
						if (W.options.type === s.AccessibleViewType.View) {
							(this.H = Y), this.s.reset(), this.t.reset();
							return;
						}
						const ie = this.ub(W),
							ne = this.ob(W),
							ee = this.sb(W),
							_ = this.tb(W);
						let te = "",
							Q = "";
						const Z = (0, B.$F2c)(this.S, ee + Y + ie + ne + _);
						Z &&
							((Y = Z.content.value),
							Z.configureKeybindingItems
								? ((W.options.configureKeybindingItems =
										Z.configureKeybindingItems),
									this.s.set(!0),
									(te = this.qb()))
								: this.t.reset(),
							Z.configuredKeybindingItems
								? ((W.options.configuredKeybindingItems =
										Z.configuredKeybindingItems),
									this.t.set(!0),
									(Q = this.rb()))
								: this.t.reset()),
							(this.H = Y + te + Q);
					}
					fb(W, X, Y, ie) {
						(this.G = W), this.n.set(W.id);
						const ne = this.bb();
						this.eb(W, ie), this.calculateCodeBlocks(this.H), this.db(W, !0);
						const ee = this.a.hasTextFocus() || this.a.hasWidgetFocus();
						this.ib(
							h.URI.from({
								path: `accessible-view-${W.id}`,
								scheme: "accessible-view",
								fragment: this.H,
							}),
						).then((Q) => {
							if (!Q || (this.a.setModel(Q), !this.a.getDomNode())) return;
							Q.setLanguage(W.options.language ?? "markdown"),
								X.appendChild(this.z);
							let se = "";
							const re =
								this.h.get() ||
								this.j.get() ||
								this.m.get() ||
								W.actions?.length;
							ne &&
								!Y &&
								re &&
								(se = W.options.position
									? (0, b.localize)(4381, null)
									: (0, b.localize)(4382, null));
							let le =
								W.options.type === s.AccessibleViewType.Help
									? (0, b.localize)(4383, null)
									: (0, b.localize)(4384, null);
							if (
								((this.C.textContent = le),
								se && W.options.type === s.AccessibleViewType.View
									? (le = (0, b.localize)(4385, null, se))
									: se && (le = (0, b.localize)(4386, null, se)),
								u.$l && ee && (le = ""),
								this.a.updateOptions({ ariaLabel: le }),
								this.a.focus(),
								this.G?.options.position)
							) {
								const oe = this.a.getPosition(),
									ae = oe?.lineNumber === 1 && oe.column === 1;
								if (
									this.G.options.position === "bottom" ||
									(this.G.options.position === "initial-bottom" && ae)
								) {
									const pe = this.editorWidget.getModel()?.getLineCount(),
										$e = pe !== void 0 && pe > 0 ? new g.$hL(pe, 1) : void 0;
									$e &&
										(this.a.setPosition($e), this.a.revealLine($e.lineNumber));
								}
							}
						}),
							this.gb(this.G.actions, W.options.type);
						const _ = (Q) => {
								this.w || W.onClose(),
									Q?.stopPropagation(),
									this.P.hideContextView(),
									this.db(W, !1),
									(this.I = void 0),
									(this.H = void 0),
									this.G?.dispose(),
									(this.G = void 0);
							},
							te = new m.$Zc();
						return (
							te.add(
								this.a.onKeyDown((Q) => {
									if (Q.keyCode === d.KeyCode.Enter)
										this.X.executeCommand("editor.action.openLink");
									else if (
										Q.keyCode === d.KeyCode.Escape ||
										G(Q.browserEvent, this.S, this.N)
									)
										_(Q);
									else if (
										Q.keyCode === d.KeyCode.KeyH &&
										W.options.readMoreUrl
									) {
										const Z = W.options.readMoreUrl;
										(0, E.$oib)(o.AccessibilityHelpNLS.openingDocs),
											this.L.open(h.URI.parse(Z)),
											Q.preventDefault(),
											Q.stopPropagation();
									}
									W instanceof s.$ILb && W.onKeyDown?.(Q);
								}),
							),
							te.add(
								(0, t.$0fb)(this.F.getElement(), t.$$gb.KEY_DOWN, (Q) => {
									new i.$7fb(Q).equals(d.KeyCode.Escape) && _(Q);
								}),
							),
							te.add(
								this.a.onDidBlurEditorWidget(() => {
									(0, t.$Kgb)(this.F.getElement()) || _();
								}),
							),
							te.add(this.a.onDidContentSizeChange(() => this.hb())),
							te.add(this.U.onDidLayoutActiveContainer(() => this.hb())),
							te
						);
					}
					gb(W, X) {
						this.F.setAriaLabel(
							X === s.AccessibleViewType.Help
								? (0, b.localize)(4387, null)
								: (0, b.localize)(4388, null),
						);
						const Y = [],
							ie = this.D(this.W.createMenu(v.$XX.AccessibleView, this.Q));
						if (((0, y.$Kyb)(ie, {}, Y), W)) {
							for (const ne of W)
								(ne.class =
									ne.class || a.ThemeIcon.asClassName(C.$ak.primitiveSquare)),
									(ne.checked = void 0);
							this.F.setActions([...W, ...Y]);
						} else this.F.setActions(Y);
					}
					hb() {
						const W = this.U.activeContainerDimension,
							X = W.height && W.height * 0.4,
							Y = Math.min(X, this.a.getContentHeight()),
							ie = Math.min(W.width * 0.62, x.MAX_WIDTH);
						this.a.layout({ width: ie, height: Y });
					}
					async ib(W) {
						const X = this.O.getModel(W);
						return X && !X.isDisposed()
							? X
							: this.O.createModel(W.fragment, null, W, !1);
					}
					jb() {
						return this.G
							? this.G.options.type === s.AccessibleViewType.Help ||
									this.G.options.language === "markdown" ||
									this.G.options.language === void 0 ||
									(this.G instanceof s.$ILb && !!this.G.getSymbols?.())
							: !1;
					}
					kb() {
						const W = this.G;
						return W
							? W instanceof s.$ILb
								? new s.$ILb(
										W.id,
										W.options,
										W.provideContent.bind(W),
										W.onClose.bind(W),
										W.verbositySettingKey,
										W.onOpen?.bind(W),
										W.actions,
										W.provideNextContent?.bind(W),
										W.providePreviousContent?.bind(W),
										W.onDidChangeContent?.bind(W),
										W.onKeyDown?.bind(W),
										W.getSymbols?.bind(W),
									)
								: new s.$JLb(
										W.id,
										W.options,
										W.provideContent.bind(W),
										W.onClose.bind(W),
										W.onOpen?.bind(W),
										W.provideNextContent?.bind(W),
										W.providePreviousContent?.bind(W),
										W.actions,
										W.onDidChangeContent?.bind(W),
									)
							: void 0;
					}
					showAccessibleViewHelp() {
						const W = this.kb();
						if (!W) return;
						let X;
						W instanceof s.$ILb
							? (X = new s.$ILb(
									W.id,
									{ type: s.AccessibleViewType.Help },
									() =>
										W.options.customHelp
											? W?.options.customHelp()
											: this.lb(this.jb()),
									() => {
										this.P.hideContextView(),
											queueMicrotask(() => this.show(W));
									},
									W.verbositySettingKey,
								))
							: (X = new s.$JLb(
									W.id,
									{ type: s.AccessibleViewType.Help },
									() =>
										W.options.customHelp
											? W?.options.customHelp()
											: this.lb(this.jb()),
									() => {
										this.P.hideContextView(),
											queueMicrotask(() => this.show(W));
									},
								)),
							this.P.hideContextView(),
							X && queueMicrotask(() => this.show(X, void 0, !0));
					}
					lb(W) {
						const X = this.nb(),
							Y = this.pb(W),
							ie = (0, b.localize)(4389, null),
							ne = this.mb();
						let ee = (0, b.localize)(4390, null);
						return (
							X &&
								(ee +=
									" - " +
									X +
									`
`),
							Y &&
								(ee +=
									" - " +
									Y +
									`
`),
							ie &&
								(ee +=
									" - " +
									ie +
									`
`),
							ne && (ee += ne),
							ee
						);
					}
					mb() {
						if (this.G?.id === s.AccessibleViewProviderId.Chat)
							return [
								(0, b.localize)(
									4391,
									null,
									"<keybinding:workbench.action.chat.insertCodeBlock>",
								),
								(0, b.localize)(
									4392,
									null,
									"<keybinding:workbench.action.chat.insertIntoNewFile>",
								),
								(0, b.localize)(
									4393,
									null,
									"<keybinding:workbench.action.chat.runInTerminal>",
								),
							].join(`
`);
					}
					nb() {
						return (0, b.localize)(
							4394,
							null,
							`<keybinding:${U.AccessibilityCommandId.ShowNext}`,
							`<keybinding:${U.AccessibilityCommandId.ShowPrevious}>`,
						);
					}
					ob(W) {
						return W.options.type === s.AccessibleViewType.Help && this.bb()
							? (0, b.localize)(
									4395,
									null,
									`<keybinding:${U.AccessibilityCommandId.DisableVerbosityHint}>`,
								)
							: "";
					}
					pb(W) {
						if (W)
							return (0, b.localize)(
								4396,
								null,
								`<keybinding:${U.AccessibilityCommandId.GoToSymbol}>`,
							);
					}
					qb() {
						const W = this.S.lookupKeybinding(
								U.AccessibilityCommandId.AccessibilityHelpConfigureKeybindings,
							)?.getAriaLabel(),
							X = W
								? "(" + W + ")"
								: "by assigning a keybinding to the command Accessibility Help Configure Unassigned Keybindings.";
						return (0, b.localize)(4397, null, X);
					}
					rb() {
						const W = this.S.lookupKeybinding(
								U.AccessibilityCommandId
									.AccessibilityHelpConfigureAssignedKeybindings,
							)?.getAriaLabel(),
							X = W
								? "(" + W + ")"
								: "by assigning a keybinding to the command Accessibility Help Configure Assigned Keybindings.";
						return (0, b.localize)(4398, null, X);
					}
					sb(W) {
						const X = this.R.isScreenReaderOptimized();
						let Y = "";
						const ie = u.$m
							? o.AccessibilityHelpNLS.changeConfigToOnMac
							: o.AccessibilityHelpNLS.changeConfigToOnWinLinux;
						return (
							X && W.id === s.AccessibleViewProviderId.Editor
								? ((Y = o.AccessibilityHelpNLS.auto_on),
									(Y += `
`))
								: X ||
									((Y =
										o.AccessibilityHelpNLS.auto_off +
										`
` +
										ie),
									(Y += `
`)),
							Y
						);
					}
					tb(W) {
						return this.bb() && !W.options.position
							? (0, b.localize)(4399, null)
							: "";
					}
					ub(W) {
						return W.options.readMoreUrl
							? (0, b.localize)(
									4400,
									null,
									`<keybinding:${U.AccessibilityCommandId.AccessibilityHelpOpenHelpLink}>`,
								)
							: "";
					}
				};
				(e.$G2c = H),
					(e.$G2c = H =
						Ne(
							[
								j(0, N.$7rb),
								j(1, k.$Li),
								j(2, I.$gj),
								j(3, p.$QO),
								j(4, P.$Wxb),
								j(5, T.$6j),
								j(6, l.$XK),
								j(7, L.$uZ),
								j(8, M.$jEb),
								j(9, v.$YX),
								j(10, S.$ek),
								j(11, z.$KYb),
								j(12, R.$lq),
								j(13, A.$DJ),
							],
							H,
						));
				let q = class extends m.$1c {
					constructor(W, X, Y) {
						super(), (this.b = W), (this.f = X), (this.g = Y);
					}
					show(W, X) {
						this.a || (this.a = this.D(this.b.createInstance(H))),
							this.a.show(W, void 0, void 0, X);
					}
					configureKeybindings(W) {
						this.a?.configureKeybindings(W);
					}
					openHelpLink() {
						this.a?.openHelpLink();
					}
					showLastProvider(W) {
						this.a?.showLastProvider(W);
					}
					next() {
						this.a?.next();
					}
					previous() {
						this.a?.previous();
					}
					goToSymbol() {
						this.a?.goToSymbol();
					}
					getOpenAriaHint(W) {
						if (!this.f.getValue(W)) return null;
						const X = this.g
							.lookupKeybinding(U.AccessibilityCommandId.OpenAccessibleView)
							?.getAriaLabel();
						let Y = null;
						return (
							X
								? (Y = (0, b.localize)(4401, null, X))
								: (Y = (0, b.localize)(4402, null)),
							Y
						);
					}
					disableHint() {
						this.a?.disableHint();
					}
					showAccessibleViewHelp() {
						this.a?.showAccessibleViewHelp();
					}
					getPosition(W) {
						return this.a?.getPosition(W) ?? void 0;
					}
					getLastPosition() {
						const W = this.a?.editorWidget.getModel()?.getLineCount();
						return W !== void 0 && W > 0 ? new g.$hL(W, 1) : void 0;
					}
					setPosition(W, X, Y) {
						this.a?.setPosition(W, X, Y);
					}
					getCodeBlockContext() {
						return this.a?.getCodeBlockContext();
					}
					navigateToCodeBlock(W) {
						this.a?.navigateToCodeBlock(W);
					}
				};
				(e.$H2c = q),
					(e.$H2c = q = Ne([j(0, k.$Li), j(1, I.$gj), j(2, L.$uZ)], q));
				let V = class {
					constructor(W, X) {
						(this.a = W), (this.b = X);
					}
					show(W) {
						const X = new m.$Zc(),
							Y = X.add(this.b.createQuickPick());
						(Y.placeholder = (0, b.localize)(4403, null)),
							(Y.title = (0, b.localize)(4404, null));
						const ie = [],
							ne = this.a.getSymbols();
						if (ne) {
							for (const ee of ne)
								ie.push({ label: ee.label, ariaLabel: ee.ariaLabel });
							(Y.canSelectMany = !1),
								(Y.items = ne),
								Y.show(),
								X.add(
									Y.onDidAccept(() => {
										this.a.showSymbol(W, Y.selectedItems[0]), Y.hide();
									}),
								),
								X.add(
									Y.onDidHide(() => {
										Y.selectedItems.length === 0 && this.a.show(W), X.dispose();
									}),
								);
						}
					}
				};
				V = Ne([j(1, A.$DJ)], V);
				function G(J, W, X) {
					if (
						!X.getValue(
							O.AccessibilityWorkbenchSettingId.AccessibleViewCloseOnKeyPress,
						)
					)
						return !1;
					const Y = new i.$7fb(J),
						ne =
							W.softDispatch(Y, Y.target).kind ===
							D.ResultKind.MoreChordsNeeded;
					return W.inChordMode || ne
						? !1
						: K(J) && !J.ctrlKey && !J.altKey && !J.metaKey && !J.shiftKey;
				}
				function K(J) {
					return !!J.code.match(
						/^(Key[A-Z]|Digit[0-9]|Equal|Comma|Period|Slash|Quote|Backquote|Backslash|Minus|Semicolon|Space|Enter)$/,
					);
				}
			},
		),
		