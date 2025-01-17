import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/hover/hoverDelegate2.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/types.js';
import '../../../browser/config/domFontInfo.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/languages.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../css!vs/editor/contrib/rename/browser/renameWidget.js';
define(
			de[2862],
			he([
				1, 0, 7, 114, 127, 317, 95, 182, 278, 24, 15, 33, 14, 6, 27, 3, 162, 28,
				321, 56, 38, 48, 17, 98, 74, 4, 8, 39, 34, 106, 51, 35, 2318,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ckc = e.$bkc = e.$akc = void 0),
					(t = mt(t)),
					(w = mt(w)),
					(r = mt(r)),
					(f = mt(f)),
					(S = mt(S));
				const M = !1;
				(e.$akc = new I.$5j("renameInputVisible", !1, S.localize(1413, null))),
					(e.$bkc = new I.$5j(
						"renameInputFocused",
						!1,
						S.localize(1414, null),
					));
				let N = class {
					constructor(U, z, F, x, H, q) {
						(this.z = U),
							(this.A = z),
							(this.B = F),
							(this.C = x),
							(this.D = q),
							(this.allowEditorOverflow = !0),
							(this.y = new g.$Zc()),
							(this.x = e.$akc.bindTo(H)),
							(this.l = !1),
							(this.s = 0),
							(this.t = !1),
							(this.m = new Set()),
							(this.q = new p.$le()),
							(this.b = new R()),
							this.y.add(this.b),
							this.z.addContentWidget(this),
							this.y.add(
								this.z.onDidChangeConfiguration((V) => {
									V.hasChanged(s.EditorOption.fontInfo) && this.F();
								}),
							),
							this.y.add(F.onDidColorThemeChange(this.E, this));
					}
					dispose() {
						this.y.dispose(), this.z.removeContentWidget(this);
					}
					getId() {
						return "__renameInputWidget";
					}
					getDomNode() {
						return (
							this.a ||
								((this.a = document.createElement("div")),
								(this.a.className = "monaco-editor rename-box"),
								this.a.appendChild(this.b.domNode),
								(this.d = this.y.add(
									new A(this.a, {
										fontInfo: this.z.getOption(s.EditorOption.fontInfo),
										onFocusChange: (U) => {
											(this.b.input.value = U), (this.l = !1);
										},
										onSelectionChange: () => {
											(this.l = !1), this.acceptInput(!1);
										},
									}),
								)),
								this.y.add(
									this.b.onDidInputChange(() => {
										this.d?.focusedCandidate !== void 0 && (this.l = !0),
											(this.r ??= this.q.elapsed()),
											this.u?.token.isCancellationRequested === !1 &&
												this.u.cancel(),
											this.d?.clearFocus();
									}),
								),
								(this.f = document.createElement("div")),
								(this.f.className = "rename-label"),
								this.a.appendChild(this.f),
								this.F(),
								this.E(this.B.getColorTheme())),
							this.a
						);
					}
					E(U) {
						if (!this.a) return;
						const z = U.getColor(L.$bR),
							F = U.getColor(L.$cR);
						(this.a.style.backgroundColor = String(U.getColor(L.$bQ) ?? "")),
							(this.a.style.boxShadow = z ? ` 0 0 8px 2px ${z}` : ""),
							(this.a.style.border = F ? `1px solid ${F}` : ""),
							(this.a.style.color = String(U.getColor(L.$UR) ?? ""));
						const x = U.getColor(L.$VR);
						(this.b.domNode.style.backgroundColor = String(
							U.getColor(L.$TR) ?? "",
						)),
							(this.b.input.style.backgroundColor = String(
								U.getColor(L.$TR) ?? "",
							)),
							(this.b.domNode.style.borderWidth = x ? "1px" : "0px"),
							(this.b.domNode.style.borderStyle = x ? "solid" : "none"),
							(this.b.domNode.style.borderColor = x?.toString() ?? "none");
					}
					F() {
						if (this.a === void 0) return;
						(0, o.$vg)(
							this.f !== void 0,
							"RenameWidget#_updateFont: _label must not be undefined given _domNode is defined",
						),
							this.z.applyFontInfo(this.b.input);
						const U = this.z.getOption(s.EditorOption.fontInfo);
						this.f.style.fontSize = `${this.G(U.fontSize)}px`;
					}
					G(U) {
						return U * 0.8;
					}
					getPosition() {
						if (!this.o || !this.z.hasModel() || !this.z.getDomNode())
							return null;
						const U = t.$ogb(this.getDomNode().ownerDocument.body),
							z = t.$tgb(this.z.getDomNode()),
							F = this.P();
						(this.g = F + z.top), (this.h = U.height - this.g);
						const x = this.z.getOption(s.EditorOption.lineHeight),
							{ totalHeight: H } = O.getLayoutInfo({ lineHeight: x }),
							q =
								this.h > H * 6
									? [
											b.ContentWidgetPositionPreference.BELOW,
											b.ContentWidgetPositionPreference.ABOVE,
										]
									: [
											b.ContentWidgetPositionPreference.ABOVE,
											b.ContentWidgetPositionPreference.BELOW,
										];
						return { position: this.i, preference: q };
					}
					beforeRender() {
						const [U, z] = this.A;
						return (
							(this.f.innerText = S.localize(
								1415,
								null,
								this.C.lookupKeybinding(U)?.getLabel(),
								this.C.lookupKeybinding(z)?.getLabel(),
							)),
							(this.a.style.minWidth = "200px"),
							null
						);
					}
					afterRender(U) {
						if (U === null) {
							this.cancelInput(!0, "afterRender (because position is null)");
							return;
						}
						if (!this.z.hasModel() || !this.z.getDomNode()) return;
						(0, o.$vg)(this.d),
							(0, o.$vg)(this.g !== void 0),
							(0, o.$vg)(this.h !== void 0);
						const z = t.$zgb(this.b.domNode),
							F = t.$zgb(this.f);
						let x;
						U === b.ContentWidgetPositionPreference.BELOW
							? (x = this.h)
							: (x = this.g),
							this.d.layout({
								height: x - F - z,
								width: t.$vgb(this.b.domNode),
							});
					}
					acceptInput(U) {
						this.Q("invoking acceptInput"), this.H?.(U);
					}
					cancelInput(U, z) {
						this.I?.(U);
					}
					focusNextRenameSuggestion() {
						this.d?.focusNext() || (this.b.input.value = this.j);
					}
					focusPreviousRenameSuggestion() {
						this.d?.focusPrevious() || (this.b.input.value = this.j);
					}
					getInput(U, z, F, x, H) {
						const { start: q, end: V } = this.L(U, z);
						this.w = H;
						const G = new g.$Zc();
						(this.s = 0),
							(this.t = !1),
							x === void 0
								? (this.b.button.style.display = "none")
								: ((this.b.button.style.display = "flex"),
									(this.J = x),
									this.K(z, !1),
									G.add(t.$0fb(this.b.button, "click", () => this.K(z, !0))),
									G.add(
										t.$0fb(this.b.button, t.$$gb.KEY_DOWN, (J) => {
											const W = new i.$7fb(J);
											(W.equals(n.KeyCode.Enter) ||
												W.equals(n.KeyCode.Space)) &&
												(W.stopPropagation(),
												W.preventDefault(),
												this.K(z, !0));
										}),
									)),
							(this.l = !1),
							this.a.classList.toggle("preview", F),
							(this.i = new l.$hL(U.startLineNumber, U.startColumn)),
							(this.j = z),
							(this.b.input.value = z),
							this.b.input.setAttribute("selectionStart", q.toString()),
							this.b.input.setAttribute("selectionEnd", V.toString()),
							(this.b.input.size = Math.max(
								(U.endColumn - U.startColumn) * 1.1,
								20,
							)),
							this.q.reset(),
							G.add(
								(0, g.$Yc)(() => {
									(this.w = void 0), H.dispose(!0);
								}),
							),
							G.add(
								(0, g.$Yc)(() => {
									this.u !== void 0 && (this.u.dispose(!0), (this.u = void 0));
								}),
							),
							G.add((0, g.$Yc)(() => this.m.clear()));
						const K = new u.$0h();
						return (
							K.p.finally(() => {
								G.dispose(), this.O();
							}),
							(this.I = (J) => (
								this.Q("invoking _currentCancelInput"),
								(this.H = void 0),
								(this.I = void 0),
								this.d?.clearCandidates(),
								K.complete(J),
								!0
							)),
							(this.H = (J) => {
								this.Q("invoking _currentAcceptInput"),
									(0, o.$vg)(this.d !== void 0);
								const W = this.d.nCandidates;
								let X, Y;
								const ie = this.d.focusedCandidate;
								if (
									(ie !== void 0
										? (this.Q("using new name from renameSuggestion"),
											(X = ie),
											(Y = { k: "renameSuggestion" }))
										: (this.Q("using new name from inputField"),
											(X = this.b.input.value),
											(Y = this.l
												? { k: "userEditedRenameSuggestion" }
												: { k: "inputField" })),
									X === z || X.trim().length === 0)
								) {
									this.cancelInput(
										!0,
										"_currentAcceptInput (because newName === value || newName.trim().length === 0)",
									);
									return;
								}
								(this.H = void 0),
									(this.I = void 0),
									this.d.clearCandidates(),
									K.complete({
										newName: X,
										wantsPreview: F && J,
										stats: {
											source: Y,
											nRenameSuggestions: W,
											timeBeforeFirstInputFieldEdit: this.r,
											nRenameSuggestionsInvocations: this.s,
											hadAutomaticRenameSuggestionsInvocation: this.t,
										},
									});
							}),
							G.add(
								H.token.onCancellationRequested(() =>
									this.cancelInput(!0, "cts.token.onCancellationRequested"),
								),
							),
							M ||
								G.add(
									this.z.onDidBlurEditorWidget(() =>
										this.cancelInput(
											!this.a?.ownerDocument.hasFocus(),
											"editor.onDidBlurEditorWidget",
										),
									),
								),
							this.M(),
							K.p
						);
					}
					K(U, z) {
						if (
							this.J !== void 0 &&
							(this.u !== void 0 && this.u.dispose(!0),
							(0, o.$vg)(this.w),
							this.b.buttonState !== "stop")
						) {
							this.u = new a.$Ce();
							const F = z
									? v.NewSymbolNameTriggerKind.Invoke
									: v.NewSymbolNameTriggerKind.Automatic,
								x = this.J(F, this.u.token);
							if (x.length === 0) {
								this.b.setSparkleButton();
								return;
							}
							z || (this.t = !0),
								(this.s += 1),
								this.b.setStopButton(),
								this.N(x, U, this.w.token);
						}
					}
					L(U, z) {
						(0, o.$vg)(this.z.hasModel());
						const F = this.z.getSelection();
						let x = 0,
							H = z.length;
						return (
							!y.$iL.isEmpty(F) &&
								!y.$iL.spansMultipleLines(F) &&
								y.$iL.containsRange(U, F) &&
								((x = Math.max(0, F.startColumn - U.startColumn)),
								(H = Math.min(U.endColumn, F.endColumn) - U.startColumn)),
							{ start: x, end: H }
						);
					}
					M() {
						this.Q("invoking _show"),
							this.z.revealLineInCenterIfOutsideViewport(
								this.i.lineNumber,
								$.ScrollType.Smooth,
							),
							(this.o = !0),
							this.x.set(!0),
							this.z.layoutContentWidget(this),
							setTimeout(() => {
								this.b.input.focus(),
									this.b.input.setSelectionRange(
										parseInt(this.b.input.getAttribute("selectionStart")),
										parseInt(this.b.input.getAttribute("selectionEnd")),
									);
							}, 100);
					}
					async N(U, z, F) {
						const x = (...K) => this.Q("_updateRenameCandidates", ...K);
						x("start");
						const H = await (0, u.$Ah)(Promise.allSettled(U), F);
						if ((this.b.setSparkleButton(), H === void 0)) {
							x(
								"returning early - received updateRenameCandidates results - undefined",
							);
							return;
						}
						const q = H.flatMap((K) =>
							K.status === "fulfilled" && (0, o.$tg)(K.value) ? K.value : [],
						);
						x(
							`received updateRenameCandidates results - total (unfiltered) ${q.length} candidates.`,
						);
						const V = r.$Qb(q, (K) => K.newSymbolName);
						x(`distinct candidates - ${V.length} candidates.`);
						const G = V.filter(
							({ newSymbolName: K }) =>
								K.trim().length > 0 &&
								K !== this.b.input.value &&
								K !== z &&
								!this.m.has(K),
						);
						if (
							(x(`valid distinct candidates - ${q.length} candidates.`),
							G.forEach((K) => this.m.add(K.newSymbolName)),
							G.length < 1)
						) {
							x("returning early - no valid distinct candidates");
							return;
						}
						x("setting candidates"),
							this.d.setCandidates(G),
							x("asking editor to re-layout"),
							this.z.layoutContentWidget(this);
					}
					O() {
						this.Q("invoked _hide"),
							(this.o = !1),
							this.x.reset(),
							this.z.layoutContentWidget(this);
					}
					P() {
						const U = this.z.getVisibleRanges();
						let z;
						return (
							U.length > 0
								? (z = U[0].startLineNumber)
								: (this.D.warn(
										"RenameWidget#_getTopForPosition: this should not happen - visibleRanges is empty",
									),
									(z = Math.max(1, this.i.lineNumber - 5))),
							this.z.getTopForLineNumber(this.i.lineNumber) -
								this.z.getTopForLineNumber(z)
						);
					}
					Q(...U) {
						this.D.trace("RenameWidget", ...U);
					}
				};
				(e.$ckc = N),
					(e.$ckc = N =
						Ne([j(2, D.$iP), j(3, T.$uZ), j(4, I.$6j), j(5, P.$ik)], N));
				class A {
					constructor(U, z) {
						(this.i = new g.$Zc()),
							(this.f = 0),
							(this.g = 0),
							(this.d = z.fontInfo.lineHeight),
							(this.h = z.fontInfo.typicalHalfwidthCharacterWidth),
							(this.a = document.createElement("div")),
							(this.a.className = "rename-box rename-candidate-list-container"),
							U.appendChild(this.a),
							(this.b = A.o(this.a, this.j, z.fontInfo)),
							this.b.onDidChangeFocus((F) => {
								F.elements.length === 1 &&
									z.onFocusChange(F.elements[0].newSymbolName);
							}, this.i),
							this.b.onDidChangeSelection((F) => {
								F.elements.length === 1 && z.onSelectionChange();
							}, this.i),
							this.i.add(
								this.b.onDidBlur((F) => {
									this.b.setFocus([]);
								}),
							),
							this.b.style(
								(0, k.$Eyb)({
									listInactiveFocusForeground: L.$lT,
									listInactiveFocusBackground: L.$nT,
								}),
							);
					}
					dispose() {
						this.b.dispose(), this.i.dispose();
					}
					layout({ height: U, width: z }) {
						(this.f = U), (this.g = z);
					}
					setCandidates(U) {
						this.b.splice(0, 0, U);
						const z = this.l(this.b.length),
							F = this.m(U);
						this.b.layout(z, F),
							(this.a.style.height = `${z}px`),
							(this.a.style.width = `${F}px`),
							w.$pib(S.localize(1416, null, U.length));
					}
					clearCandidates() {
						(this.a.style.height = "0px"),
							(this.a.style.width = "0px"),
							this.b.splice(0, this.b.length, []);
					}
					get nCandidates() {
						return this.b.length;
					}
					get focusedCandidate() {
						if (this.b.length === 0) return;
						const U = this.b.getSelectedElements()[0];
						if (U !== void 0) return U.newSymbolName;
						const z = this.b.getFocusedElements()[0];
						if (z !== void 0) return z.newSymbolName;
					}
					focusNext() {
						if (this.b.length === 0) return !1;
						const U = this.b.getFocus();
						if (U.length === 0)
							return this.b.focusFirst(), this.b.reveal(0), !0;
						if (U[0] === this.b.length - 1)
							return this.b.setFocus([]), this.b.reveal(0), !1;
						{
							this.b.focusNext();
							const z = this.b.getFocus()[0];
							return this.b.reveal(z), !0;
						}
					}
					focusPrevious() {
						if (this.b.length === 0) return !1;
						const U = this.b.getFocus();
						if (U.length === 0) {
							this.b.focusLast();
							const z = this.b.getFocus()[0];
							return this.b.reveal(z), !0;
						} else {
							if (U[0] === 0) return this.b.setFocus([]), !1;
							{
								this.b.focusPrevious();
								const z = this.b.getFocus()[0];
								return this.b.reveal(z), !0;
							}
						}
					}
					clearFocus() {
						this.b.setFocus([]);
					}
					get j() {
						const { totalHeight: U } = O.getLayoutInfo({ lineHeight: this.d });
						return U;
					}
					l(U) {
						const z = this.j * U;
						return Math.min(z, this.f, this.j * 7);
					}
					m(U) {
						const z = Math.ceil(
							Math.max(...U.map((x) => x.newSymbolName.length)) * this.h,
						);
						return Math.max(this.g, 25 + z + 10);
					}
					static o(U, z, F) {
						const x = new (class {
								getTemplateId(q) {
									return "candidate";
								}
								getHeight(q) {
									return z;
								}
							})(),
							H = new (class {
								constructor() {
									this.templateId = "candidate";
								}
								renderTemplate(q) {
									return new O(q, F);
								}
								renderElement(q, V, G) {
									G.populate(q);
								}
								disposeTemplate(q) {
									q.dispose();
								}
							})();
						return new m.List("NewSymbolNameCandidates", U, x, [H], {
							keyboardSupport: !1,
							mouseSupport: !0,
							multipleSelectionSupport: !1,
						});
					}
				}
				class R {
					constructor() {
						(this.m = new c.$re()),
							(this.onDidInputChange = this.m.event),
							(this.o = new g.$Zc());
					}
					get domNode() {
						return (
							this.b ||
								((this.b = document.createElement("div")),
								(this.b.className = "rename-input-with-button"),
								(this.b.style.display = "flex"),
								(this.b.style.flexDirection = "row"),
								(this.b.style.alignItems = "center"),
								(this.d = document.createElement("input")),
								(this.d.className = "rename-input"),
								(this.d.type = "text"),
								(this.d.style.border = "none"),
								this.d.setAttribute("aria-label", S.localize(1417, null)),
								this.b.appendChild(this.d),
								(this.f = document.createElement("div")),
								(this.f.className = "rename-suggestions-button"),
								this.f.setAttribute("tabindex", "0"),
								(this.h = S.localize(1418, null)),
								(this.i = S.localize(1419, null)),
								(this.g = (0, E.$1ib)().setupManagedHover(
									(0, C.$cib)("element"),
									this.f,
									this.h,
								)),
								this.o.add(this.g),
								this.b.appendChild(this.f),
								this.o.add(
									t.$0fb(this.input, t.$$gb.INPUT, () => this.m.fire()),
								),
								this.o.add(
									t.$0fb(this.input, t.$$gb.KEY_DOWN, (U) => {
										const z = new i.$7fb(U);
										(z.keyCode === n.KeyCode.LeftArrow ||
											z.keyCode === n.KeyCode.RightArrow) &&
											this.m.fire();
									}),
								),
								this.o.add(
									t.$0fb(this.input, t.$$gb.CLICK, () => this.m.fire()),
								),
								this.o.add(
									t.$0fb(this.input, t.$$gb.FOCUS, () => {
										(this.domNode.style.outlineWidth = "1px"),
											(this.domNode.style.outlineStyle = "solid"),
											(this.domNode.style.outlineOffset = "-1px"),
											(this.domNode.style.outlineColor =
												"var(--vscode-focusBorder)");
									}),
								),
								this.o.add(
									t.$0fb(this.input, t.$$gb.BLUR, () => {
										this.domNode.style.outline = "none";
									}),
								)),
							this.b
						);
					}
					get input() {
						return (0, o.$vg)(this.d), this.d;
					}
					get button() {
						return (0, o.$vg)(this.f), this.f;
					}
					get buttonState() {
						return this.a;
					}
					setSparkleButton() {
						(this.a = "sparkle"),
							(this.j ??= (0, d.$Tib)(h.$ak.sparkle)),
							t.$9fb(this.button),
							this.button.appendChild(this.j),
							this.button.setAttribute(
								"aria-label",
								"Generating new name suggestions",
							),
							this.g?.update(this.h),
							this.input.focus();
					}
					setStopButton() {
						(this.a = "stop"),
							(this.l ??= (0, d.$Tib)(h.$ak.primitiveSquare)),
							t.$9fb(this.button),
							this.button.appendChild(this.l),
							this.button.setAttribute(
								"aria-label",
								"Cancel generating new name suggestions",
							),
							this.g?.update(this.i),
							this.input.focus();
					}
					dispose() {
						this.o.dispose();
					}
				}
				class O {
					static {
						this.a = 2;
					}
					constructor(U, z) {
						(this.b = document.createElement("div")),
							(this.b.className = "rename-box rename-candidate"),
							(this.b.style.display = "flex"),
							(this.b.style.columnGap = "5px"),
							(this.b.style.alignItems = "center"),
							(this.b.style.height = `${z.lineHeight}px`),
							(this.b.style.padding = `${O.a}px`);
						const F = document.createElement("div");
						(F.style.display = "flex"),
							(F.style.alignItems = "center"),
							(F.style.width = F.style.height = `${z.lineHeight * 0.8}px`),
							this.b.appendChild(F),
							(this.d = (0, d.$Tib)(h.$ak.sparkle)),
							(this.d.style.display = "none"),
							F.appendChild(this.d),
							(this.f = document.createElement("div")),
							f.$jsb(this.f, z),
							this.b.appendChild(this.f),
							U.appendChild(this.b);
					}
					populate(U) {
						this.g(U), this.h(U);
					}
					g(U) {
						const z = !!U.tags?.includes(v.NewSymbolNameTag.AIGenerated);
						this.d.style.display = z ? "inherit" : "none";
					}
					h(U) {
						this.f.innerText = U.newSymbolName;
					}
					static getLayoutInfo({ lineHeight: U }) {
						return { totalHeight: U + O.a * 2 };
					}
					dispose() {}
				}
			},
		),
		