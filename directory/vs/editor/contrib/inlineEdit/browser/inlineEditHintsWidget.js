import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/platform.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../common/model.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../css!vs/editor/contrib/inlineEdit/browser/inlineEditHintsWidget.js';
define(
			de[2894],
			he([
				1, 0, 7, 460, 50, 24, 3, 77, 12, 56, 38, 48, 64, 92, 173, 11, 31, 8, 49,
				5, 39, 32, 2307,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keybindingLabel*/,
				w /*actions*/,
				E /*arrays*/,
				C /*lifecycle*/,
				d /*observable*/,
				m /*platform*/,
				r /*editorBrowser*/,
				u /*editorOptions*/,
				a /*position*/,
				h /*model*/,
				c /*menuEntryActionViewItem*/,
				n /*toolbar*/,
				g /*actions*/,
				p /*commands*/,
				o /*contextkey*/,
				f /*contextView*/,
				b /*instantiation*/,
				s /*keybinding*/,
				l /*telemetry*/,
) {
				"use strict";
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hjc = e.$Gjc = e.$Fjc = void 0);
				let $ = class extends C.$1c {
					constructor(P, k, L) {
						super(),
							(this.m = P),
							(this.n = k),
							(this.q = L),
							(this.c = (0, d.observableFromEvent)(
								this,
								this.m.onDidChangeConfiguration,
								() =>
									this.m.getOption(u.EditorOption.inlineEdit).showToolbar ===
									"always",
							)),
							(this.f = void 0),
							(this.j = (0, d.derived)(this, (D) => {
								const M = this.n.read(D)?.model.ghostText.read(D);
								if (!this.c.read(D) || !M || M.parts.length === 0)
									return (this.f = void 0), null;
								const N = M.parts[0].column;
								this.f &&
									this.f.lineNumber !== M.lineNumber &&
									(this.f = void 0);
								const A = new a.$hL(
									M.lineNumber,
									Math.min(N, this.f?.column ?? Number.MAX_SAFE_INTEGER),
								);
								return (this.f = A), A;
							})),
							this.D(
								(0, d.autorunWithStore)((D, M) => {
									if (!this.n.read(D) || !this.c.read(D)) return;
									const A = M.add(this.q.createInstance(v, this.m, !0, this.j));
									P.addContentWidget(A),
										M.add((0, C.$Yc)(() => P.removeContentWidget(A)));
								}),
							);
					}
				};
				(e.$Fjc = $), (e.$Fjc = $ = Ne([j(2, b.$Li)], $));
				let v = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.c = !1;
					}
					static get dropDownVisible() {
						return this.c;
					}
					static {
						this.id = 0;
					}
					constructor(P, k, L, D, M, N) {
						super(),
							(this.q = P),
							(this.r = k),
							(this.s = L),
							(this.t = M),
							(this.u = N),
							(this.f = `InlineEditHintsContentWidget${y.id++}`),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.j = (0, t.h)(
								"div.inlineEditHints",
								{ className: this.r ? ".withBorder" : "" },
								[(0, t.h)("div@toolBar")],
							)),
							(this.n = this.D(
								this.u.createMenu(g.$XX.InlineEditActions, this.t),
							)),
							(this.m = this.D(
								D.createInstance(
									I,
									this.j.toolBar,
									this.q,
									g.$XX.InlineEditToolbar,
									{
										menuOptions: { renderShortTitle: !0 },
										toolbarOptions: {
											primaryGroup: (A) => A.startsWith("primary"),
										},
										actionViewItemProvider: (A, R) => {
											if (A instanceof g.$2X)
												return D.createInstance(S, A, void 0);
										},
										telemetrySource: "InlineEditToolbar",
									},
								),
							)),
							this.D(
								this.m.onDidChangeDropdownVisibility((A) => {
									y.c = A;
								}),
							),
							this.D(
								(0, d.autorun)((A) => {
									this.s.read(A), this.q.layoutContentWidget(this);
								}),
							),
							this.D(
								(0, d.autorun)((A) => {
									const R = [];
									for (const [O, B] of this.n.getActions())
										for (const U of B) U instanceof g.$2X && R.push(U);
									R.length > 0 && R.unshift(new w.$tj()),
										this.m.setAdditionalSecondaryActions(R);
								}),
							);
					}
					getId() {
						return this.f;
					}
					getDomNode() {
						return this.j.root;
					}
					getPosition() {
						return {
							position: this.s.get(),
							preference: [
								r.ContentWidgetPositionPreference.ABOVE,
								r.ContentWidgetPositionPreference.BELOW,
							],
							positionAffinity: h.PositionAffinity.LeftOfInjectedText,
						};
					}
				};
				(e.$Gjc = v),
					(e.$Gjc = v = y = Ne([j(3, b.$Li), j(4, o.$6j), j(5, g.$YX)], v));
				class S extends c.$Lyb {
					u() {
						const P = this.X.lookupKeybinding(this._action.id, this.Z);
						if (!P) return super.u();
						if (this.I) {
							const k = (0, t.h)("div.keybinding").root;
							this.D(new i.$7ob(k, m.OS, { disableTitle: !0, ...i.$6ob })).set(
								P,
							),
								(this.I.textContent = this._action.label),
								this.I.appendChild(k),
								this.I.classList.add("inlineEditStatusBarItemLabel");
						}
					}
					C() {}
				}
				let I = class extends n.$Syb {
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(P, { resetMenu: L, ...D }, M, N, A, R, O, B),
							(this.s = k),
							(this.O = L),
							(this.P = D),
							(this.Q = M),
							(this.R = N),
							(this.c = this.B.add(
								this.Q.createMenu(this.O, this.R, {
									emitEventsForSubmenuChanges: !0,
								}),
							)),
							(this.j = []),
							(this.r = []),
							this.B.add(this.c.onDidChange(() => this.S())),
							this.B.add(this.s.onDidChangeCursorPosition(() => this.S())),
							this.S();
					}
					S() {
						const P = [],
							k = [];
						(0, c.$Kyb)(
							this.c,
							this.P?.menuOptions,
							{ primary: P, secondary: k },
							this.P?.toolbarOptions?.primaryGroup,
							this.P?.toolbarOptions?.shouldInlineSubmenu,
							this.P?.toolbarOptions?.useSeparatorsInPrimaryActions,
						),
							k.push(...this.j),
							P.unshift(...this.r),
							this.setActions(P, k);
					}
					setPrependedPrimaryActions(P) {
						(0, E.$yb)(this.r, P, (k, L) => k === L) ||
							((this.r = P), this.S());
					}
					setAdditionalSecondaryActions(P) {
						(0, E.$yb)(this.j, P, (k, L) => k === L) ||
							((this.j = P), this.S());
					}
				};
				(e.$Hjc = I),
					(e.$Hjc = I =
						Ne(
							[
								j(4, g.$YX),
								j(5, o.$6j),
								j(6, f.$Xxb),
								j(7, s.$uZ),
								j(8, p.$ek),
								j(9, l.$km),
							],
							I,
						));
			},
		)
