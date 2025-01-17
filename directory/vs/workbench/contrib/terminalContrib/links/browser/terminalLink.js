import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/async.js';
import './terminalLinkHelpers.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/event.js';
import '../../../../../platform/configuration/common/configuration.js';
define(
			de[3157],
			he([1, 0, 3, 7, 15, 562, 12, 6, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eWc = void 0),
					(i = mt(i));
				let r = class extends t.$Zc {
					get onInvalidated() {
						return this.c.event;
					}
					get type() {
						return this.r;
					}
					constructor(a, h, c, n, g, p, o, f, b, s, l, y, $) {
						super(),
							(this.h = a),
							(this.range = h),
							(this.text = c),
							(this.uri = n),
							(this.parsedLink = g),
							(this.actions = p),
							(this.j = o),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.label = l),
							(this.r = y),
							(this.s = $),
							(this.c = new d.$re()),
							(this.decorations = { pointerCursor: !1, underline: this.q });
					}
					dispose() {
						super.dispose(),
							this.b?.dispose(),
							(this.b = void 0),
							this.a?.dispose(),
							(this.a = void 0);
					}
					activate(a, h) {
						this.asyncActivate = this.m(a, h);
					}
					hover(a, h) {
						const c = i.getWindow(a),
							n = c.document;
						(this.b = new t.$Zc()),
							this.b.add(
								i.$0fb(n, "keydown", (p) => {
									!p.repeat && this.z(p) && this.t();
								}),
							),
							this.b.add(
								i.$0fb(n, "keyup", (p) => {
									!p.repeat && !this.z(p) && this.u();
								}),
							),
							this.b.add(
								this.h.onRender((p) => {
									const o = this.range.start.y - this.j;
									o >= p.start && o <= p.end && this.c.fire();
								}),
							),
							this.q &&
								((this.a = new w.$Yh(() => {
									this.n(
										this,
										(0, E.$$Vc)(this.range, this.j),
										this.q ? () => this.t() : void 0,
										this.q ? () => this.u() : void 0,
									),
										this.a?.dispose(),
										(this.a = void 0);
								}, this.s.getValue("workbench.hover.delay"))),
								this.add(this.a),
								this.a.schedule());
						const g = { x: a.pageX, y: a.pageY };
						this.b.add(
							i.$0fb(n, i.$$gb.MOUSE_MOVE, (p) => {
								this.z(p) ? this.t() : this.u(),
									(Math.abs(p.pageX - g.x) > c.devicePixelRatio * 2 ||
										Math.abs(p.pageY - g.y) > c.devicePixelRatio * 2) &&
										((g.x = p.pageX), (g.y = p.pageY), this.a?.schedule());
							}),
						);
					}
					leave() {
						this.b?.dispose(),
							(this.b = void 0),
							this.a?.dispose(),
							(this.a = void 0);
					}
					t() {
						this.decorations.pointerCursor ||
							(this.decorations.pointerCursor = !0),
							this.decorations.underline || (this.decorations.underline = !0);
					}
					u() {
						this.decorations.pointerCursor &&
							(this.decorations.pointerCursor = !1),
							this.decorations.underline !== this.q &&
								(this.decorations.underline = this.q);
					}
					z(a) {
						return this.s.getValue("editor.multiCursorModifier") === "ctrlCmd"
							? !!a.altKey
							: C.$m
								? a.metaKey
								: a.ctrlKey;
					}
				};
				(e.$eWc = r), (e.$eWc = r = Ne([j(12, m.$gj)], r));
			},
		),
		