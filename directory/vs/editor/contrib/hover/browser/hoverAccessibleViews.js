import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../common/editorContextKeys.js';
import './contentHoverController2.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/languages.js';
import './hoverActionIds.js';
import '../../../browser/services/codeEditorService.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/keybinding/common/keybinding.js';
import './markdownHoverParticipant.js';
define(
			de[3608],
			he([
				1, 0, 4, 71, 448, 178, 49, 72, 5, 74, 936, 65, 50, 26, 14, 6, 3, 39,
				820,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*editorContextKeys*/,
 w /*contentHoverController2*/,
 E /*accessibleView*/,
 C /*contextView*/,
 d /*hover*/,
 m /*instantiation*/,
 r /*languages*/,
 u /*hoverActionIds*/,
 a /*codeEditorService*/,
 h /*actions*/,
 c /*themables*/,
 n /*codicons*/,
 g /*event*/,
 p /*lifecycle*/,
 o /*keybinding*/,
 f /*markdownHoverParticipant*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wic = e.$vic = e.$uic = e.$tic = e.$sic = void 0);
				var b;
				(function (I) {
					(I.increaseVerbosity = (0, t.localize)(
						1168,
						null,
						`<keybinding:${u.$lCb}>`,
					)),
						(I.decreaseVerbosity = (0, t.localize)(
							1169,
							null,
							`<keybinding:${u.$oCb}>`,
						));
				})(b || (b = {}));
				class s {
					constructor() {
						(this.type = E.AccessibleViewType.View),
							(this.priority = 95),
							(this.name = "hover"),
							(this.when = i.EditorContextKeys.hoverFocused);
					}
					getProvider(T) {
						const P = T.get(a.$dtb),
							k = P.getActiveCodeEditor() || P.getFocusedCodeEditor();
						if (!k) throw new Error("No active or focused code editor");
						const L = w.$whc.get(k);
						if (!L) return;
						const D = T.get(o.$uZ);
						return T.get(m.$Li).createInstance(v, D, k, L);
					}
				}
				e.$sic = s;
				class l {
					constructor() {
						(this.priority = 100),
							(this.name = "hover"),
							(this.type = E.AccessibleViewType.Help),
							(this.when = i.EditorContextKeys.hoverVisible);
					}
					getProvider(T) {
						const P = T.get(a.$dtb),
							k = P.getActiveCodeEditor() || P.getFocusedCodeEditor();
						if (!k) throw new Error("No active or focused code editor");
						const L = w.$whc.get(k);
						if (L) return T.get(m.$Li).createInstance($, L);
					}
				}
				e.$tic = l;
				class y extends p.$1c {
					constructor(T) {
						super(),
							(this.c = T),
							(this.id = E.AccessibleViewProviderId.Hover),
							(this.verbositySettingKey = "accessibility.verbosity.hover"),
							(this.a = this.D(new g.$re())),
							(this.onDidChangeContent = this.a.event),
							(this.b = -1);
					}
					onOpen() {
						this.c &&
							((this.c.shouldKeepOpenOnEditorMouseMoveOrLeave = !0),
							(this.b = this.c.focusedHoverPartIndex()),
							this.D(
								this.c.onHoverContentsChanged(() => {
									this.a.fire();
								}),
							));
					}
					onClose() {
						this.c &&
							(this.b === -1
								? this.c.focus()
								: this.c.focusHoverPartWithIndex(this.b),
							(this.b = -1),
							(this.c.shouldKeepOpenOnEditorMouseMoveOrLeave = !1));
					}
					provideContentAtIndex(T, P) {
						if (T !== -1) {
							const k = this.c.getAccessibleWidgetContentAtIndex(T);
							if (k === void 0) return "";
							const L = [];
							return (
								P && L.push(...this.f(T)),
								L.push(k),
								L.join(`
`)
							);
						} else {
							const k = this.c.getAccessibleWidgetContent();
							if (k === void 0) return "";
							const L = [];
							return (
								L.push(k),
								L.join(`
`)
							);
						}
					}
					f(T) {
						const P = [],
							k = this.g(r.HoverVerbosityAction.Increase, T);
						k !== void 0 && P.push(k);
						const L = this.g(r.HoverVerbosityAction.Decrease, T);
						return L !== void 0 && P.push(L), P;
					}
					g(T, P) {
						if (this.c.doesHoverAtIndexSupportVerbosityAction(P, T))
							switch (T) {
								case r.HoverVerbosityAction.Increase:
									return b.increaseVerbosity;
								case r.HoverVerbosityAction.Decrease:
									return b.decreaseVerbosity;
							}
					}
				}
				class $ extends y {
					constructor(T) {
						super(T), (this.options = { type: E.AccessibleViewType.Help });
					}
					provideContent() {
						return this.provideContentAtIndex(this.b, !0);
					}
				}
				e.$uic = $;
				class v extends y {
					constructor(T, P, k) {
						super(k),
							(this.h = T),
							(this.j = P),
							(this.options = { type: E.AccessibleViewType.View }),
							this.n(this.j, k);
					}
					provideContent() {
						return this.provideContentAtIndex(this.b, !1);
					}
					get actions() {
						const T = [];
						return (
							T.push(this.m(this.j, r.HoverVerbosityAction.Increase)),
							T.push(this.m(this.j, r.HoverVerbosityAction.Decrease)),
							T
						);
					}
					m(T, P) {
						let k, L, D;
						switch (P) {
							case r.HoverVerbosityAction.Increase:
								(k = u.$lCb), (L = u.$mCb), (D = n.$ak.add);
								break;
							case r.HoverVerbosityAction.Decrease:
								(k = u.$oCb), (L = u.$pCb), (D = n.$ak.remove);
								break;
						}
						const M = (0, f.$jhc)(this.h, P),
							N = this.c.doesHoverAtIndexSupportVerbosityAction(this.b, P);
						return new h.$rj(L, M, c.ThemeIcon.asClassName(D), N, () => {
							T.getAction(k)?.run({ index: this.b, focus: !1 });
						});
					}
					n(T, P) {
						const k = this.D(new $(P));
						(this.options.language = T.getModel()?.getLanguageId()),
							(this.options.customHelp = () =>
								k.provideContentAtIndex(this.b, !0));
					}
				}
				e.$vic = v;
				class S {
					constructor() {
						(this.type = E.AccessibleViewType.View),
							(this.priority = 90),
							(this.name = "extension-hover");
					}
					getProvider(T) {
						const k = T.get(C.$Wxb).getContextViewElement(),
							L = k?.textContent ?? void 0,
							D = T.get(d.$Uyb);
						if (!(k.classList.contains("accessible-view-container") || !L))
							return new E.$ILb(
								E.AccessibleViewProviderId.Hover,
								{ language: "typescript", type: E.AccessibleViewType.View },
								() => L,
								() => {
									D.showAndFocusLastHover();
								},
								"accessibility.verbosity.hover",
							);
					}
				}
				e.$wic = S;
			},
		),
		