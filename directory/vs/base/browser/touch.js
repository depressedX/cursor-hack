import '../../../require.js';
import '../../../exports.js';
import './dom.js';
import './window.js';
import '../common/arrays.js';
import '../common/decorators.js';
import '../common/event.js';
import '../common/lifecycle.js';
import '../common/linkedList.js';
define(
			de[159],
			he([1, 0, 7, 75, 24, 138, 6, 3, 273]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*window*/,
 w /*arrays*/,
 E /*decorators*/,
 C /*event*/,
 d /*lifecycle*/,
 m /*linkedList*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qhb = e.EventType = void 0),
					(t = mt(t)),
					(w = mt(w));
				var r;
				(function (a) {
					(a.Tap = "-monaco-gesturetap"),
						(a.Change = "-monaco-gesturechange"),
						(a.Start = "-monaco-gesturestart"),
						(a.End = "-monaco-gesturesend"),
						(a.Contextmenu = "-monaco-gesturecontextmenu");
				})(r || (e.EventType = r = {}));
				class u extends d.$1c {
					static {
						this.c = -0.005;
					}
					static {
						this.g = 700;
					}
					static {
						this.s = 400;
					}
					constructor() {
						super(),
							(this.h = !1),
							(this.j = new m.$$c()),
							(this.m = new m.$$c()),
							(this.q = {}),
							(this.n = null),
							(this.r = 0),
							this.D(
								C.Event.runAndSubscribe(
									t.onDidRegisterWindow,
									({ window: h, disposables: c }) => {
										c.add(
											t.$0fb(h.document, "touchstart", (n) => this.u(n), {
												passive: !1,
											}),
										),
											c.add(
												t.$0fb(h.document, "touchend", (n) => this.w(h, n)),
											),
											c.add(
												t.$0fb(h.document, "touchmove", (n) => this.G(n), {
													passive: !1,
												}),
											);
									},
									{ window: i.$Bfb, disposables: this.B },
								),
							);
					}
					static addTarget(h) {
						if (!u.isTouchDevice()) return d.$1c.None;
						u.f || (u.f = (0, d.$Tc)(new u()));
						const c = u.f.j.push(h);
						return (0, d.$Yc)(c);
					}
					static ignoreTarget(h) {
						if (!u.isTouchDevice()) return d.$1c.None;
						u.f || (u.f = (0, d.$Tc)(new u()));
						const c = u.f.m.push(h);
						return (0, d.$Yc)(c);
					}
					static isTouchDevice() {
						return "ontouchstart" in i.$Bfb || navigator.maxTouchPoints > 0;
					}
					dispose() {
						this.n && (this.n.dispose(), (this.n = null)), super.dispose();
					}
					u(h) {
						const c = Date.now();
						this.n && (this.n.dispose(), (this.n = null));
						for (let n = 0, g = h.targetTouches.length; n < g; n++) {
							const p = h.targetTouches.item(n);
							this.q[p.identifier] = {
								id: p.identifier,
								initialTarget: p.target,
								initialTimeStamp: c,
								initialPageX: p.pageX,
								initialPageY: p.pageY,
								rollingTimestamps: [c],
								rollingPageX: [p.pageX],
								rollingPageY: [p.pageY],
							};
							const o = this.z(r.Start, p.target);
							(o.pageX = p.pageX), (o.pageY = p.pageY), this.C(o);
						}
						this.h && (h.preventDefault(), h.stopPropagation(), (this.h = !1));
					}
					w(h, c) {
						const n = Date.now(),
							g = Object.keys(this.q).length;
						for (let p = 0, o = c.changedTouches.length; p < o; p++) {
							const f = c.changedTouches.item(p);
							if (!this.q.hasOwnProperty(String(f.identifier))) {
								console.warn("move of an UNKNOWN touch", f);
								continue;
							}
							const b = this.q[f.identifier],
								s = Date.now() - b.initialTimeStamp;
							if (
								s < u.g &&
								Math.abs(b.initialPageX - w.$wb(b.rollingPageX)) < 30 &&
								Math.abs(b.initialPageY - w.$wb(b.rollingPageY)) < 30
							) {
								const l = this.z(r.Tap, b.initialTarget);
								(l.pageX = w.$wb(b.rollingPageX)),
									(l.pageY = w.$wb(b.rollingPageY)),
									this.C(l);
							} else if (
								s >= u.g &&
								Math.abs(b.initialPageX - w.$wb(b.rollingPageX)) < 30 &&
								Math.abs(b.initialPageY - w.$wb(b.rollingPageY)) < 30
							) {
								const l = this.z(r.Contextmenu, b.initialTarget);
								(l.pageX = w.$wb(b.rollingPageX)),
									(l.pageY = w.$wb(b.rollingPageY)),
									this.C(l);
							} else if (g === 1) {
								const l = w.$wb(b.rollingPageX),
									y = w.$wb(b.rollingPageY),
									$ = w.$wb(b.rollingTimestamps) - b.rollingTimestamps[0],
									v = l - b.rollingPageX[0],
									S = y - b.rollingPageY[0],
									I = [...this.j].filter(
										(T) =>
											b.initialTarget instanceof Node &&
											T.contains(b.initialTarget),
									);
								this.F(
									h,
									I,
									n,
									Math.abs(v) / $,
									v > 0 ? 1 : -1,
									l,
									Math.abs(S) / $,
									S > 0 ? 1 : -1,
									y,
								);
							}
							this.C(this.z(r.End, b.initialTarget)),
								delete this.q[f.identifier];
						}
						this.h && (c.preventDefault(), c.stopPropagation(), (this.h = !1));
					}
					z(h, c) {
						const n = document.createEvent("CustomEvent");
						return (
							n.initEvent(h, !1, !0), (n.initialTarget = c), (n.tapCount = 0), n
						);
					}
					C(h) {
						if (h.type === r.Tap) {
							const c = new Date().getTime();
							let n = 0;
							c - this.r > u.s ? (n = 1) : (n = 2),
								(this.r = c),
								(h.tapCount = n);
						} else
							(h.type === r.Change || h.type === r.Contextmenu) && (this.r = 0);
						if (h.initialTarget instanceof Node) {
							for (const n of this.m) if (n.contains(h.initialTarget)) return;
							const c = [];
							for (const n of this.j)
								if (n.contains(h.initialTarget)) {
									let g = 0,
										p = h.initialTarget;
									for (; p && p !== n; ) g++, (p = p.parentElement);
									c.push([g, n]);
								}
							c.sort((n, g) => n[0] - g[0]);
							for (const [n, g] of c) g.dispatchEvent(h), (this.h = !0);
						}
					}
					F(h, c, n, g, p, o, f, b, s) {
						this.n = t.$hgb(h, () => {
							const l = Date.now(),
								y = l - n;
							let $ = 0,
								v = 0,
								S = !0;
							(g += u.c * y),
								(f += u.c * y),
								g > 0 && ((S = !1), ($ = p * g * y)),
								f > 0 && ((S = !1), (v = b * f * y));
							const I = this.z(r.Change);
							(I.translationX = $),
								(I.translationY = v),
								c.forEach((T) => T.dispatchEvent(I)),
								S || this.F(h, c, l, g, p, o + $, f, b, s + v);
						});
					}
					G(h) {
						const c = Date.now();
						for (let n = 0, g = h.changedTouches.length; n < g; n++) {
							const p = h.changedTouches.item(n);
							if (!this.q.hasOwnProperty(String(p.identifier))) {
								console.warn("end of an UNKNOWN touch", p);
								continue;
							}
							const o = this.q[p.identifier],
								f = this.z(r.Change, o.initialTarget);
							(f.translationX = p.pageX - w.$wb(o.rollingPageX)),
								(f.translationY = p.pageY - w.$wb(o.rollingPageY)),
								(f.pageX = p.pageX),
								(f.pageY = p.pageY),
								this.C(f),
								o.rollingPageX.length > 3 &&
									(o.rollingPageX.shift(),
									o.rollingPageY.shift(),
									o.rollingTimestamps.shift()),
								o.rollingPageX.push(p.pageX),
								o.rollingPageY.push(p.pageY),
								o.rollingTimestamps.push(c);
						}
						this.h && (h.preventDefault(), h.stopPropagation(), (this.h = !1));
					}
				}
				(e.$Qhb = u), Ne([E.$ei], u, "isTouchDevice", null);
			},
		),
		