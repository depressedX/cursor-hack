import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/event.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../common/config/editorOptions.js';
import '../../../../base/browser/ui/resizable/resizable.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[1633],
			he([1, 0, 7, 203, 14, 26, 6, 94, 3, 251, 38, 930, 4, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*scrollableElement*/,
 w /*codicons*/,
 E /*themables*/,
 C /*event*/,
 d /*htmlContent*/,
 m /*lifecycle*/,
 r /*markdownRenderer*/,
 u /*editorOptions*/,
 a /*resizable*/,
 h /*nls*/,
 c /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ADb = e.$zDb = void 0),
					(e.$yDb = n),
					(t = mt(t)),
					(h = mt(h));
				function n(o) {
					return (
						!!o &&
						!!(
							o.completion.documentation ||
							(o.completion.detail &&
								o.completion.detail !== o.completion.label)
						)
					);
				}
				let g = class {
					constructor(f, b) {
						(this.r = f),
							(this.c = new C.$re()),
							(this.onDidClose = this.c.event),
							(this.d = new C.$re()),
							(this.onDidChangeContents = this.d.event),
							(this.l = new m.$Zc()),
							(this.n = new m.$Zc()),
							(this.o = 1),
							(this.q = new t.$pgb(330, 0)),
							(this.domNode = t.$(".suggest-details")),
							this.domNode.classList.add("no-docs"),
							(this.m = b.createInstance(r.$Qzb, { editor: f })),
							(this.h = t.$(".body")),
							(this.g = new i.$8hb(this.h, { alwaysConsumeMouseWheel: !0 })),
							t.$fhb(this.domNode, this.g.getDomNode()),
							this.l.add(this.g),
							(this.i = t.$fhb(this.h, t.$(".header"))),
							(this.f = t.$fhb(
								this.i,
								t.$("span" + E.ThemeIcon.asCSSSelector(w.$ak.close)),
							)),
							(this.f.title = h.localize(1511, null)),
							(this.j = t.$fhb(this.i, t.$("p.type"))),
							(this.k = t.$fhb(this.h, t.$("p.docs"))),
							this.s(),
							this.l.add(
								this.r.onDidChangeConfiguration((s) => {
									s.hasChanged(u.EditorOption.fontInfo) && this.s();
								}),
							);
					}
					dispose() {
						this.l.dispose(), this.n.dispose();
					}
					s() {
						const f = this.r.getOptions(),
							b = f.get(u.EditorOption.fontInfo),
							s = b.getMassagedFontFamily(),
							l = f.get(u.EditorOption.suggestFontSize) || b.fontSize,
							y = f.get(u.EditorOption.suggestLineHeight) || b.lineHeight,
							$ = b.fontWeight,
							v = `${l}px`,
							S = `${y}px`;
						(this.domNode.style.fontSize = v),
							(this.domNode.style.lineHeight = `${y / l}`),
							(this.domNode.style.fontWeight = $),
							(this.domNode.style.fontFeatureSettings = b.fontFeatureSettings),
							(this.j.style.fontFamily = s),
							(this.f.style.height = S),
							(this.f.style.width = S);
					}
					getLayoutInfo() {
						const f =
								this.r.getOption(u.EditorOption.suggestLineHeight) ||
								this.r.getOption(u.EditorOption.fontInfo).lineHeight,
							b = this.o,
							s = b * 2;
						return {
							lineHeight: f,
							borderWidth: b,
							borderHeight: s,
							verticalPadding: 22,
							horizontalPadding: 14,
						};
					}
					renderLoading() {
						(this.j.textContent = h.localize(1512, null)),
							(this.k.textContent = ""),
							this.domNode.classList.remove("no-docs", "no-type"),
							this.layout(this.size.width, this.getLayoutInfo().lineHeight * 2),
							this.d.fire(this);
					}
					renderItem(f, b) {
						this.n.clear();
						let { detail: s, documentation: l } = f.completion;
						if (b) {
							let y = "";
							(y += `score: ${f.score[0]}
`),
								(y += `prefix: ${f.word ?? "(no prefix)"}
`),
								(y += `word: ${f.completion.filterText ? f.completion.filterText + " (filterText)" : f.textLabel}
`),
								(y += `distance: ${f.distance} (localityBonus-setting)
`),
								(y += `index: ${f.idx}, based on ${(f.completion.sortText && `sortText: "${f.completion.sortText}"`) || "label"}
`),
								(y += `commit_chars: ${f.completion.commitCharacters?.join("")}
`),
								(l = new d.$cl().appendCodeblock("empty", y)),
								(s = `Provider: ${f.provider._debugDisplayName}`);
						}
						if (!b && !n(f)) {
							this.clearContents();
							return;
						}
						if ((this.domNode.classList.remove("no-docs", "no-type"), s)) {
							const y = s.length > 1e5 ? `${s.substr(0, 1e5)}\u2026` : s;
							(this.j.textContent = y),
								(this.j.title = y),
								t.show(this.j),
								this.j.classList.toggle("auto-wrap", !/\r?\n^\s+/gim.test(y));
						} else
							t.$9fb(this.j),
								(this.j.title = ""),
								t.hide(this.j),
								this.domNode.classList.add("no-type");
						if ((t.$9fb(this.k), typeof l == "string"))
							this.k.classList.remove("markdown-docs"),
								(this.k.textContent = l);
						else if (l) {
							this.k.classList.add("markdown-docs"), t.$9fb(this.k);
							const y = this.m.render(l);
							this.k.appendChild(y.element),
								this.n.add(y),
								this.n.add(
									this.m.onDidRenderAsync(() => {
										this.layout(
											this.q.width,
											this.j.clientHeight + this.k.clientHeight,
										),
											this.d.fire(this);
									}),
								);
						}
						(this.domNode.style.userSelect = "text"),
							(this.domNode.tabIndex = -1),
							(this.f.onmousedown = (y) => {
								y.preventDefault(), y.stopPropagation();
							}),
							(this.f.onclick = (y) => {
								y.preventDefault(), y.stopPropagation(), this.c.fire();
							}),
							(this.h.scrollTop = 0),
							this.layout(
								this.q.width,
								this.j.clientHeight + this.k.clientHeight,
							),
							this.d.fire(this);
					}
					clearContents() {
						this.domNode.classList.add("no-docs"),
							(this.j.textContent = ""),
							(this.k.textContent = "");
					}
					get isEmpty() {
						return this.domNode.classList.contains("no-docs");
					}
					get size() {
						return this.q;
					}
					layout(f, b) {
						const s = new t.$pgb(f, b);
						t.$pgb.equals(s, this.q) ||
							((this.q = s), t.size(this.domNode, f, b)),
							this.g.scanDomNode();
					}
					scrollDown(f = 8) {
						this.h.scrollTop += f;
					}
					scrollUp(f = 8) {
						this.h.scrollTop -= f;
					}
					scrollTop() {
						this.h.scrollTop = 0;
					}
					scrollBottom() {
						this.h.scrollTop = this.h.scrollHeight;
					}
					pageDown() {
						this.scrollDown(80);
					}
					pageUp() {
						this.scrollUp(80);
					}
					set borderWidth(f) {
						this.o = f;
					}
					get borderWidth() {
						return this.o;
					}
				};
				(e.$zDb = g), (e.$zDb = g = Ne([j(1, c.$Li)], g));
				class p {
					constructor(f, b) {
						(this.widget = f),
							(this.k = b),
							(this.allowEditorOverflow = !0),
							(this.c = new m.$Zc()),
							(this.f = !1),
							(this.h = !0),
							(this.d = new a.$dpb()),
							this.d.domNode.classList.add("suggest-details-container"),
							this.d.domNode.appendChild(f.domNode),
							this.d.enableSashes(!1, !0, !0, !1);
						let s,
							l,
							y = 0,
							$ = 0;
						this.c.add(
							this.d.onDidWillResize(() => {
								(s = this.j), (l = this.d.size);
							}),
						),
							this.c.add(
								this.d.onDidResize((v) => {
									if (s && l) {
										this.widget.layout(v.dimension.width, v.dimension.height);
										let S = !1;
										v.west && (($ = l.width - v.dimension.width), (S = !0)),
											v.north &&
												((y = l.height - v.dimension.height), (S = !0)),
											S && this.l({ top: s.top + y, left: s.left + $ });
									}
									v.done &&
										((s = void 0),
										(l = void 0),
										(y = 0),
										($ = 0),
										(this.i = v.dimension));
								}),
							),
							this.c.add(
								this.widget.onDidChangeContents(() => {
									this.g &&
										this._placeAtAnchor(
											this.g,
											this.i ?? this.widget.size,
											this.h,
										);
								}),
							);
					}
					dispose() {
						this.d.dispose(), this.c.dispose(), this.hide();
					}
					getId() {
						return "suggest.details";
					}
					getDomNode() {
						return this.d.domNode;
					}
					getPosition() {
						return this.j ? { preference: this.j } : null;
					}
					show() {
						this.f || (this.k.addOverlayWidget(this), (this.f = !0));
					}
					hide(f = !1) {
						this.d.clearSashHoverState(),
							this.f &&
								(this.k.removeOverlayWidget(this),
								(this.f = !1),
								(this.g = void 0),
								(this.j = void 0)),
							f && ((this.i = void 0), this.widget.clearContents());
					}
					placeAtAnchor(f, b) {
						const s = f.getBoundingClientRect();
						(this.g = s),
							(this.h = b),
							this._placeAtAnchor(this.g, this.i ?? this.widget.size, b);
					}
					_placeAtAnchor(f, b, s) {
						const l = t.$ogb(this.getDomNode().ownerDocument.body),
							y = this.widget.getLayoutInfo(),
							$ = new t.$pgb(220, 2 * y.lineHeight),
							v = f.top,
							S = (function () {
								const U =
										l.width -
										(f.left + f.width + y.borderWidth + y.horizontalPadding),
									z = -y.borderWidth + f.left + f.width,
									F = new t.$pgb(
										U,
										l.height - f.top - y.borderHeight - y.verticalPadding,
									),
									x = F.with(
										void 0,
										f.top + f.height - y.borderHeight - y.verticalPadding,
									);
								return {
									top: v,
									left: z,
									fit: U - b.width,
									maxSizeTop: F,
									maxSizeBottom: x,
									minSize: $.with(Math.min(U, $.width)),
								};
							})(),
							I = (function () {
								const U = f.left - y.borderWidth - y.horizontalPadding,
									z = Math.max(
										y.horizontalPadding,
										f.left - b.width - y.borderWidth,
									),
									F = new t.$pgb(
										U,
										l.height - f.top - y.borderHeight - y.verticalPadding,
									),
									x = F.with(
										void 0,
										f.top + f.height - y.borderHeight - y.verticalPadding,
									);
								return {
									top: v,
									left: z,
									fit: U - b.width,
									maxSizeTop: F,
									maxSizeBottom: x,
									minSize: $.with(Math.min(U, $.width)),
								};
							})(),
							T = (function () {
								const U = f.left,
									z = -y.borderWidth + f.top + f.height,
									F = new t.$pgb(
										f.width - y.borderHeight,
										l.height - f.top - f.height - y.verticalPadding,
									);
								return {
									top: z,
									left: U,
									fit: F.height - b.height,
									maxSizeBottom: F,
									maxSizeTop: F,
									minSize: $.with(F.width),
								};
							})(),
							P = [S, I, T],
							k =
								P.find((U) => U.fit >= 0) ?? P.sort((U, z) => z.fit - U.fit)[0],
							L = f.top + f.height - y.borderHeight;
						let D,
							M = b.height;
						const N = Math.max(k.maxSizeTop.height, k.maxSizeBottom.height);
						M > N && (M = N);
						let A;
						s
							? M <= k.maxSizeTop.height
								? ((D = !0), (A = k.maxSizeTop))
								: ((D = !1), (A = k.maxSizeBottom))
							: M <= k.maxSizeBottom.height
								? ((D = !1), (A = k.maxSizeBottom))
								: ((D = !0), (A = k.maxSizeTop));
						let { top: R, left: O } = k;
						!D && M > f.height && (R = L - M);
						const B = this.k.getDomNode();
						if (B) {
							const U = B.getBoundingClientRect();
							(R -= U.top), (O -= U.left);
						}
						this.l({ left: O, top: R }),
							this.d.enableSashes(!D, k === S, D, k !== S),
							(this.d.minSize = k.minSize),
							(this.d.maxSize = A),
							this.d.layout(M, Math.min(A.width, b.width)),
							this.widget.layout(this.d.size.width, this.d.size.height);
					}
					l(f) {
						(this.j = f), this.k.layoutOverlayWidget(this);
					}
				}
				e.$ADb = p;
			},
		),
		