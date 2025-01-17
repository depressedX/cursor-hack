import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../base/browser/dom.js';
import './simpleDiffConstants.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/lifecycle.js';
define(
			de[2701],
			he([1, 0, 2, 2, 2, 2, 2, 7, 1555, 13, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2lc = void 0),
					(e.$3lc = c),
					(d = mt(d));
				const a = (0, t.template)(
					"<div><button><span>Accept</span><span></span></button><button><span>Reject</span><span>",
				);
				class h extends u.$1c {
					constructor(g) {
						super(),
							(this.props = g),
							(this.reactiveStorageRoot = this.D(
								this.props.reactiveStorageService.createScoped(this),
							)),
							(this._domNode = d.$("div.simpleInlineDiffViewZone"));
						const [p, o] = (0, r.createSignal)(!0);
						this.D(
							c(
								{
									reactiveStorageRoot: this.reactiveStorageRoot,
									isVisible: p,
									setIsVisible: o,
									...this.props,
								},
								this._domNode,
							),
						),
							(this.isVisible = p);
					}
					dispose() {
						super.dispose();
					}
					getDomNode() {
						return this._domNode;
					}
				}
				e.$2lc = h;
				function c(n, g) {
					return n.reactiveStorageRoot.render(
						() =>
							(0, i.createComponent)(r.Show, {
								get when() {
									return n.isVisible();
								},
								get fallback() {
									return [];
								},
								get children() {
									const p = a(),
										o = p.firstChild,
										f = o.firstChild,
										b = f.nextSibling,
										s = o.nextSibling,
										l = s.firstChild,
										y = l.nextSibling;
									return (
										p.style.setProperty("display", "inline-flex"),
										p.style.setProperty("flex-direction", "row"),
										p.style.setProperty("height", "20px"),
										p.style.setProperty("border-radius", "4px"),
										p.style.setProperty("overflow", "hidden"),
										p.style.setProperty("margin-top", "2px"),
										p.style.setProperty("margin-bottom", "2px"),
										p.style.setProperty("z-index", "1000"),
										p.style.setProperty("position", "relative"),
										o.addEventListener("click", ($) => {
											n.setIsVisible(!1),
												console.log("accept button clicked"),
												n.commandService.executeCommand(m.$Xlc, n.diffId),
												$.stopPropagation();
										}),
										o.style.setProperty(
											"background-color",
											"rgba(0,255,0,0.4)",
										),
										o.style.setProperty("border", "none"),
										o.style.setProperty("font-size", "12px"),
										o.style.setProperty("cursor", "pointer"),
										o.style.setProperty("color", "rgba(255,255,255,0.8)"),
										o.style.setProperty("align-items", "center"),
										b.style.setProperty("font-size", "10px"),
										b.style.setProperty("margin-left", "4px"),
										(0, C.insert)(
											b,
											() =>
												n.keybindingService
													?.lookupKeybinding(m.$Xlc)
													?.getLabel() ?? "",
										),
										s.addEventListener("click", ($) => {
											n.setIsVisible(!1),
												n.commandService.executeCommand(m.$Ylc, n.diffId),
												$.stopPropagation();
										}),
										s.style.setProperty(
											"background-color",
											"rgba(255,0,0,0.4)",
										),
										s.style.setProperty("border", "none"),
										s.style.setProperty("font-size", "12px"),
										s.style.setProperty("cursor", "pointer"),
										s.style.setProperty("color", "rgba(255,255,255,0.8)"),
										s.style.setProperty("align-items", "center"),
										y.style.setProperty("font-size", "10px"),
										y.style.setProperty("margin-left", "4px"),
										(0, C.insert)(
											y,
											() =>
												n.keybindingService
													?.lookupKeybinding(m.$Ylc)
													?.getLabel() ?? "",
										),
										(0, E.effect)(() =>
											(0, w.setAttribute)(
												p,
												"id",
												`simpleInlineDiffViewZone-${n.diffId}`,
											),
										),
										p
									);
								},
							}),
						g,
					);
				}
			},
		),
		