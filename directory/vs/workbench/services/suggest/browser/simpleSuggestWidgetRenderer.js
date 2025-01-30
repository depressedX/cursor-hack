import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
define(
			de[3653],
			he([1, 0, 7, 325, 14, 6, 132, 3, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*iconLabel*/,
 w /*codicons*/,
 E /*event*/,
 C /*filters*/,
 d /*lifecycle*/,
 m /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bVc = void 0),
					(e.$aVc = r);
				function r(h) {
					return `simple-suggest-aria-id:${h}`;
				}
				class u {
					constructor(c) {
						(this.b = c),
							(this.a = new E.$re()),
							(this.onDidToggleDetails = this.a.event),
							(this.templateId = "suggestion");
					}
					dispose() {
						this.a.dispose();
					}
					renderTemplate(c) {
						const n = new d.$Zc(),
							g = c;
						g.classList.add("show-file-icons");
						const p = (0, t.$fhb)(c, (0, t.$)(".icon")),
							o = (0, t.$fhb)(p, (0, t.$)("span.colorspan")),
							f = (0, t.$fhb)(c, (0, t.$)(".contents")),
							b = (0, t.$fhb)(f, (0, t.$)(".main")),
							s = (0, t.$fhb)(b, (0, t.$)(".icon-label.codicon")),
							l = (0, t.$fhb)(b, (0, t.$)("span.left")),
							y = (0, t.$fhb)(b, (0, t.$)("span.right")),
							$ = new i.$Xob(l, { supportHighlights: !0, supportIcons: !0 });
						n.add($);
						const v = (0, t.$fhb)(l, (0, t.$)("span.signature-label")),
							S = (0, t.$fhb)(l, (0, t.$)("span.qualifier-label")),
							I = (0, t.$fhb)(y, (0, t.$)("span.details-label"));
						return (
							(() => {
								const P = "",
									{
										fontFamily: k,
										fontSize: L,
										lineHeight: D,
										fontWeight: M,
										letterSpacing: N,
									} = this.b(),
									A = `${L}px`,
									R = `${D}px`,
									O = `${N}px`;
								(g.style.fontSize = A),
									(g.style.fontWeight = M),
									(g.style.letterSpacing = O),
									(b.style.fontFamily = k),
									(b.style.fontFeatureSettings = P),
									(b.style.lineHeight = R),
									(p.style.height = R),
									(p.style.width = R);
							})(),
							{
								root: g,
								left: l,
								right: y,
								icon: p,
								colorspan: o,
								iconLabel: $,
								iconContainer: s,
								parametersLabel: v,
								qualifierLabel: S,
								detailsLabel: I,
								disposables: n,
							}
						);
					}
					renderElement(c, n, g) {
						const { completion: p } = c;
						(g.root.id = r(n)), (g.colorspan.style.backgroundColor = "");
						const o = { labelEscapeNewLines: !0, matches: (0, C.$3k)(c.score) };
						(g.icon.className = "icon hide"),
							(g.iconContainer.className = ""),
							g.iconContainer.classList.add(
								"suggest-icon",
								...m.ThemeIcon.asClassNameArray(p.icon || w.$ak.symbolText),
							),
							g.iconLabel.setLabel(p.label, void 0, o),
							(g.parametersLabel.textContent = ""),
							(g.detailsLabel.textContent = a(p.detail || "")),
							g.root.classList.add("string-label"),
							(0, t.show)(g.detailsLabel),
							g.right.classList.remove("can-expand-details");
					}
					disposeTemplate(c) {
						c.disposables.dispose();
					}
				}
				e.$bVc = u;
				function a(h) {
					return h.replace(/\r\n|\r|\n/g, "");
				}
			},
		),
		