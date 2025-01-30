import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/actions.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/platform.js';
import '../../../../../../base/common/themables.js';
import '../../../../editorBrowser.js';
import '../../../../../common/config/editorOptions.js';
import '../../../../../common/model.js';
import '../../../../../../nls.js';
define(
			de[2758],
			he([1, 0, 7, 50, 14, 3, 12, 26, 56, 38, 64, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actions*/,
 w /*codicons*/,
 E /*lifecycle*/,
 C /*platform*/,
 d /*themables*/,
 m /*editorBrowser*/,
 r /*editorOptions*/,
 u /*model*/,
 a /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yxb = void 0);
				class h extends E.$1c {
					get visibility() {
						return this.b;
					}
					set visibility(n) {
						this.b !== n &&
							((this.b = n),
							(this.a.style.visibility = n ? "visible" : "hidden"));
					}
					constructor(n, g, p, o, f, b, s, l, y) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.r = y),
							(this.b = !1),
							(this.f.style.zIndex = "10"),
							(this.a = document.createElement("div")),
							(this.a.className =
								d.ThemeIcon.asClassName(w.$ak.lightBulb) + " lightbulb-glyph"),
							(this.a.style.position = "absolute");
						const $ = this.g.getOption(r.EditorOption.lineHeight);
						(this.a.style.right = "0px"),
							(this.a.style.visibility = "hidden"),
							(this.a.style.height = `${$}px`),
							(this.a.style.lineHeight = `${$}px`),
							this.f.appendChild(this.a);
						let v = 0;
						const S = p.getOption(r.EditorOption.useShadowDOM) && !C.$u,
							I = (T, P) => {
								this.q.showContextMenu({
									domForShadowRoot: S ? (p.getDomNode() ?? void 0) : void 0,
									getAnchor: () => ({ x: T, y: P }),
									getActions: () => {
										const k = [],
											L = o.modified.isEmpty;
										return (
											k.push(
												new i.$rj(
													"diff.clipboard.copyDeletedContent",
													L
														? o.original.length > 1
															? (0, a.localize)(218, null)
															: (0, a.localize)(219, null)
														: o.original.length > 1
															? (0, a.localize)(220, null)
															: (0, a.localize)(221, null),
													void 0,
													!0,
													async () => {
														const M = this.n.getValueInRange(
															o.original.toExclusiveRange(),
														);
														await this.r.writeText(M);
													},
												),
											),
											o.original.length > 1 &&
												k.push(
													new i.$rj(
														"diff.clipboard.copyDeletedLineContent",
														L
															? (0, a.localize)(
																	222,
																	null,
																	o.original.startLineNumber + v,
																)
															: (0, a.localize)(
																	223,
																	null,
																	o.original.startLineNumber + v,
																),
														void 0,
														!0,
														async () => {
															let M = this.n.getLineContent(
																o.original.startLineNumber + v,
															);
															M === "" &&
																(M =
																	this.n.getEndOfLineSequence() ===
																	u.EndOfLineSequence.LF
																		? `
`
																		: `\r
`),
																await this.r.writeText(M);
														},
													),
												),
											p.getOption(r.EditorOption.readOnly) ||
												k.push(
													new i.$rj(
														"diff.inline.revertChange",
														(0, a.localize)(224, null),
														void 0,
														!0,
														async () => {
															this.j.revert(this.h);
														},
													),
												),
											k
										);
									},
									autoSelectFirstItem: !0,
								});
							};
						this.D(
							(0, t.$$fb)(this.a, "mousedown", (T) => {
								if (!T.leftButton) return;
								const { top: P, height: k } = (0, t.$tgb)(this.a),
									L = Math.floor($ / 3);
								T.preventDefault(), I(T.posx, P + k + L);
							}),
						),
							this.D(
								p.onMouseMove((T) => {
									(T.target.type === m.MouseTargetType.CONTENT_VIEW_ZONE ||
										T.target.type === m.MouseTargetType.GUTTER_VIEW_ZONE) &&
									T.target.detail.viewZoneId === this.c()
										? ((v = this.s(this.f, T.event.browserEvent.y, $)),
											(this.visibility = !0))
										: (this.visibility = !1);
								}),
							),
							this.D(
								p.onMouseDown((T) => {
									T.event.leftButton &&
										(T.target.type === m.MouseTargetType.CONTENT_VIEW_ZONE ||
											T.target.type === m.MouseTargetType.GUTTER_VIEW_ZONE) &&
										T.target.detail.viewZoneId === this.c() &&
										(T.event.preventDefault(),
										(v = this.s(this.f, T.event.browserEvent.y, $)),
										I(T.event.posx, T.event.posy + $));
								}),
							);
					}
					s(n, g, p) {
						const { top: o } = (0, t.$tgb)(n),
							f = g - o,
							b = Math.floor(f / p),
							s = b * p;
						if (((this.a.style.top = `${s}px`), this.m)) {
							let l = 0;
							for (let y = 0; y < this.m.length; y++)
								if (((l += this.m[y]), b < l)) return y;
						}
						return b;
					}
				}
				e.$Yxb = h;
			},
		),
		