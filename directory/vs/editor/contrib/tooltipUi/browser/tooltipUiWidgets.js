import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../browser/editorBrowser.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/services/codeEditorService.js';
import '../../../../base/common/constants.js';
import '../../../../platform/commands/common/commands.js';
import '../../../common/config/editorOptions.js';
import '../../../../css!vs/editor/contrib/tooltipUi/browser/tooltipUiWidgets.js';
define(
			de[1610],
			he([1, 0, 7, 56, 3, 65, 58, 31, 38, 2323]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*editorBrowser*/,
 w /*lifecycle*/,
 E /*codeEditorService*/,
 C /*constants*/,
 d /*commands*/,
 m /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Klc = r),
					(t = mt(t));
				function r(a, h, c, n) {
					let g = !1;
					const p = t.$fhb(h, t.$("div.tooltipTopOuter"));
					(p.style.display = "flex"),
						(p.style.alignItems = "center"),
						(p.style.padding = "8px 12px"),
						(p.style.backgroundColor = "var(--vscode-sideBar-background)"),
						(p.style.borderRadius = "6px"),
						(p.style.width = "280px"),
						(p.style.justifyContent = "space-between"),
						(p.style.boxShadow = "rgba(0, 0, 0, 0.22) 0px 0px 8px 2px"),
						(p.style.transition = "transform 0.1s ease, opacity 0.5s ease-out"),
						(p.style.gap = "8px"),
						(p.style.fontSize = "0.9em"),
						(p.style.marginTop = "12px"),
						(p.style.paddingRight = "4px"),
						(p.style.opacity = "0"),
						setTimeout(() => (p.style.opacity = "1"), 10);
					let o = !0;
					(p.onmouseover = () => {
						o = !1;
					}),
						(p.onmouseleave = () => {
							o = !0;
						}),
						t.getWindow(h).setInterval(() => {
							o &&
								p.animate(
									[
										{ transform: "scale(1)" },
										{ transform: "scale(1.03)" },
										{ transform: "scale(1)" },
									],
									{ duration: 800, iterations: 1, easing: "ease-in-out" },
								);
						}, 1e4);
					const f = t.$fhb(p, t.$("div.tooltipOuter"));
					(f.style.display = "flex"),
						(f.style.opacity = "100%"),
						(f.style.justifyContent = "center"),
						(f.style.flexDirection = "column"),
						(f.style.gap = "2px");
					const b = t.$fhb(f, t.$("div.tooltipInner")),
						s = t.$fhb(b, t.$("div.codicon.codicon-lightbulb"));
					(b.textContent = a.header),
						(b.style.fontWeight = "500"),
						(b.style.fontSize = "1.1em");
					const l = t.$fhb(f, t.$("div.tooltipInner"));
					(l.textContent = a.subheader), (l.style.opacity = "60%");
					const y = t.$fhb(f, t.$("div"));
					(y.style.display = "flex"), (y.style.justifyContent = "flex-end");
					const $ = t.$fhb(p, t.$("div.tooltipInner"));
					($.style.color = "var(--vscode-editor-foreground)"),
						($.style.padding = "4px"),
						($.style.cursor = "pointer"),
						($.style.transition = "color 0.3s ease"),
						($.className = "codicon codicon-chevron-right"),
						($.style.transition = "transform 0.1s ease"),
						($.onmouseover = () => {
							$.style.transform = "translateX(4px)";
						}),
						($.onmouseleave = () => {
							$.style.transform = "translateX(0)";
						}),
						(p.onclick = () => {
							c.executeCommand(C.$OV, { tooltipName: a.name }),
								(g = !0),
								(h.style.transition = "transform 0.75s"),
								(h.style.transform = "translateX(400%)");
							const v = () => {
								h.addEventListener(
									"transitionend",
									(S) => {
										S.propertyName === "transform" &&
											setTimeout(() => {
												n();
											}, 1e3);
									},
									{ once: !0 },
								),
									h.removeEventListener("transitionend", v);
							};
							f.addEventListener("transitionend", v, { once: !0 });
						}),
						setTimeout(
							() => {
								n();
							},
							10 * 60 * 1e3,
						);
				}
				let u = class extends w.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.j = g),
							(this.c = !1),
							(this.allowEditorOverflow = !0),
							(this.b = h),
							(this.a = t.$("div.tooltipEditorUiWidget")),
							r(c, this.a, this.j, this.dispose),
							this.b.addOverlayWidget(this),
							this.f.layoutOverlayWidget(this);
					}
					getPosition() {
						return {
							preference: i.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
						};
					}
					dispose() {
						this.c ||
							(super.dispose(),
							this.b.removeOverlayWidget(this),
							this.a.remove(),
							(this.c = !0));
					}
					getId() {
						return "tooltip.editorUiWidget";
					}
					getDomNode() {
						return this.a;
					}
					updateEditor(h) {
						this.b = h;
						const c = this.b.getOptions();
						c.get(m.EditorOption.inDiffEditor) || c.get(m.EditorOption.readOnly)
							? (this.a.style.display = "none")
							: (this.a.style.display = "block");
					}
				};
				(u = Ne([j(2, E.$dtb), j(3, d.$ek)], u)), (e.default = u);
			},
		),
		