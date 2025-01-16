define(
			de[2775],
			he([1, 0, 7, 3, 251, 56, 38, 61, 601, 41, 160, 2769, 937]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Ob = void 0),
					(t = mt(t));
				const n = t.$;
				let g = class extends i.$1c {
					static {
						c = this;
					}
					static {
						this.ID = "editor.contrib.modesGlyphHoverWidget";
					}
					constructor(o, f, b) {
						super(),
							(this.m = this.D(new i.$Zc())),
							(this.a = o),
							(this.c = !1),
							(this.f = []),
							(this.b = this.D(new u.$9hb())),
							this.b.containerDomNode.classList.toggle("hidden", !this.c),
							(this.g = this.D(new w.$Qzb({ editor: this.a }, f, b))),
							(this.h = new a.$ZOb(this.a)),
							(this.j = this.D(new m.$sCb(this.a, this.h))),
							this.D(
								this.j.onResult((s) => {
									this.s(s.value);
								}),
							),
							this.D(this.a.onDidChangeModelDecorations(() => this.q())),
							this.D(
								this.a.onDidChangeConfiguration((s) => {
									s.hasChanged(C.EditorOption.fontInfo) && this.n();
								}),
							),
							this.D(
								t.$$fb(this.b.containerDomNode, "mouseleave", (s) => {
									this.z(s);
								}),
							),
							this.a.addOverlayWidget(this);
					}
					dispose() {
						this.a.removeOverlayWidget(this), super.dispose();
					}
					getId() {
						return c.ID;
					}
					getDomNode() {
						return this.b.containerDomNode;
					}
					getPosition() {
						return null;
					}
					n() {
						Array.prototype.slice
							.call(this.b.contentsDomNode.getElementsByClassName("code"))
							.forEach((f) => this.a.applyFontInfo(f));
					}
					q() {
						this.c && (this.j.cancel(), this.j.start(m.HoverStartMode.Delayed));
					}
					showsOrWillShow(o) {
						const f = o.target;
						return f.type === E.MouseTargetType.GUTTER_GLYPH_MARGIN &&
							f.detail.glyphMarginLane
							? (this.r(f.position.lineNumber, f.detail.glyphMarginLane), !0)
							: f.type === E.MouseTargetType.GUTTER_LINE_NUMBERS
								? (this.r(f.position.lineNumber, "lineNo"), !0)
								: !1;
					}
					r(o, f) {
						(this.h.lineNumber === o && this.h.lane === f) ||
							(this.j.cancel(),
							this.hide(),
							(this.h.lineNumber = o),
							(this.h.lane = f),
							this.j.start(m.HoverStartMode.Delayed));
					}
					hide() {
						(this.h.lineNumber = -1),
							this.j.cancel(),
							this.c &&
								((this.c = !1),
								this.b.containerDomNode.classList.toggle("hidden", !this.c));
					}
					s(o) {
						(this.f = o),
							this.f.length > 0
								? this.t(this.h.lineNumber, this.f)
								: this.hide();
					}
					t(o, f) {
						this.m.clear();
						const b = document.createDocumentFragment();
						for (const s of f) {
							const l = n("div.hover-row.markdown-hover"),
								y = t.$fhb(l, n("div.hover-contents")),
								$ = this.m.add(this.g.render(s.value));
							y.appendChild($.element), b.appendChild(l);
						}
						this.u(b), this.w(o);
					}
					u(o) {
						(this.b.contentsDomNode.textContent = ""),
							this.b.contentsDomNode.appendChild(o),
							this.n();
					}
					w(o) {
						this.c ||
							((this.c = !0),
							this.b.containerDomNode.classList.toggle("hidden", !this.c));
						const f = this.a.getLayoutInfo(),
							b = this.a.getTopForLineNumber(o),
							s = this.a.getScrollTop(),
							l = this.a.getOption(C.EditorOption.lineHeight),
							y = this.b.containerDomNode.clientHeight,
							$ = b - s - (y - l) / 2,
							v =
								f.glyphMarginLeft +
								f.glyphMarginWidth +
								(this.h.lane === "lineNo" ? f.lineNumbersWidth : 0);
						(this.b.containerDomNode.style.left = `${v}px`),
							(this.b.containerDomNode.style.top = `${Math.max(Math.round($), 0)}px`);
					}
					z(o) {
						const f = this.a.getDomNode();
						(!f || !(0, h.$TDb)(f, o.x, o.y)) && this.hide();
					}
				};
				(e.$1Ob = g), (e.$1Ob = g = c = Ne([j(1, d.$nM), j(2, r.$7rb)], g));
			},
		),
		