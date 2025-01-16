define(de[408], he([1, 0, 29, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ee = w),
				(e.$Fe = E),
				(e.$Ge = C),
				(e.$He = d),
				(e.$Ie = r),
				(e.$Je = u),
				(e.$Ke = a),
				(e.$Le = h),
				(e.$Me = c),
				(e.$Ne = n),
				(e.$Oe = g),
				(e.$Pe = p),
				(e.$Qe = o),
				(e.$Re = f),
				(e.$Se = b);
			function w(s) {
				const l = s;
				return l ? typeof l.read == "function" : !1;
			}
			function E(s) {
				const l = s;
				return l
					? [l.on, l.pause, l.resume, l.destroy].every(
							(y) => typeof y == "function",
						)
					: !1;
			}
			function C(s) {
				const l = s;
				return l
					? E(l.stream) &&
							Array.isArray(l.buffer) &&
							typeof l.ended == "boolean"
					: !1;
			}
			function d(s, l) {
				return new m(s, l);
			}
			class m {
				constructor(l, y) {
					(this.e = l),
						(this.f = y),
						(this.a = { flowing: !1, ended: !1, destroyed: !1 }),
						(this.b = { data: [], error: [] }),
						(this.c = { data: [], error: [], end: [] }),
						(this.d = []);
				}
				pause() {
					this.a.destroyed || (this.a.flowing = !1);
				}
				resume() {
					this.a.destroyed ||
						this.a.flowing ||
						((this.a.flowing = !0), this.j(), this.k(), this.l());
				}
				write(l) {
					if (!this.a.destroyed) {
						if (this.a.flowing) this.g(l);
						else if (
							(this.b.data.push(l),
							typeof this.f?.highWaterMark == "number" &&
								this.b.data.length > this.f.highWaterMark)
						)
							return new Promise((y) => this.d.push(y));
					}
				}
				error(l) {
					this.a.destroyed ||
						(this.a.flowing ? this.h(l) : this.b.error.push(l));
				}
				end(l) {
					this.a.destroyed ||
						(typeof l < "u" && this.write(l),
						this.a.flowing ? (this.i(), this.destroy()) : (this.a.ended = !0));
				}
				g(l) {
					this.c.data.slice(0).forEach((y) => y(l));
				}
				h(l) {
					this.c.error.length === 0
						? (0, t.$4)(l)
						: this.c.error.slice(0).forEach((y) => y(l));
				}
				i() {
					this.c.end.slice(0).forEach((l) => l());
				}
				on(l, y) {
					if (!this.a.destroyed)
						switch (l) {
							case "data":
								this.c.data.push(y), this.resume();
								break;
							case "end":
								this.c.end.push(y),
									this.a.flowing && this.l() && this.destroy();
								break;
							case "error":
								this.c.error.push(y), this.a.flowing && this.k();
								break;
						}
				}
				removeListener(l, y) {
					if (this.a.destroyed) return;
					let $;
					switch (l) {
						case "data":
							$ = this.c.data;
							break;
						case "end":
							$ = this.c.end;
							break;
						case "error":
							$ = this.c.error;
							break;
					}
					if ($) {
						const v = $.indexOf(y);
						v >= 0 && $.splice(v, 1);
					}
				}
				j() {
					if (this.b.data.length > 0) {
						const l = this.e(this.b.data);
						this.g(l), (this.b.data.length = 0);
						const y = [...this.d];
						(this.d.length = 0), y.forEach(($) => $());
					}
				}
				k() {
					if (this.c.error.length > 0) {
						for (const l of this.b.error) this.h(l);
						this.b.error.length = 0;
					}
				}
				l() {
					return this.a.ended ? (this.i(), this.c.end.length > 0) : !1;
				}
				destroy() {
					this.a.destroyed ||
						((this.a.destroyed = !0),
						(this.a.ended = !0),
						(this.b.data.length = 0),
						(this.b.error.length = 0),
						(this.c.data.length = 0),
						(this.c.error.length = 0),
						(this.c.end.length = 0),
						(this.d.length = 0));
				}
			}
			function r(s, l) {
				const y = [];
				let $;
				for (; ($ = s.read()) !== null; ) y.push($);
				return l(y);
			}
			function u(s, l, y) {
				const $ = [];
				let v;
				for (; (v = s.read()) !== null && $.length < y; ) $.push(v);
				return v === null && $.length > 0
					? l($)
					: {
							read: () => {
								if ($.length > 0) return $.shift();
								if (typeof v < "u") {
									const S = v;
									return (v = void 0), S;
								}
								return s.read();
							},
						};
			}
			function a(s, l) {
				return new Promise((y, $) => {
					const v = [];
					h(s, {
						onData: (S) => {
							l && v.push(S);
						},
						onError: (S) => {
							l ? $(S) : y(void 0);
						},
						onEnd: () => {
							y(l ? l(v) : void 0);
						},
					});
				});
			}
			function h(s, l, y) {
				s.on("error", ($) => {
					y?.isCancellationRequested || l.onError($);
				}),
					s.on("end", () => {
						y?.isCancellationRequested || l.onEnd();
					}),
					s.on("data", ($) => {
						y?.isCancellationRequested || l.onData($);
					});
			}
			function c(s, l) {
				return new Promise((y, $) => {
					const v = new i.$Zc(),
						S = [],
						I = (k) => {
							if ((S.push(k), S.length > l))
								return (
									v.dispose(), s.pause(), y({ stream: s, buffer: S, ended: !1 })
								);
						},
						T = (k) => (v.dispose(), $(k)),
						P = () => (v.dispose(), y({ stream: s, buffer: S, ended: !0 }));
					v.add((0, i.$Yc)(() => s.removeListener("error", T))),
						s.on("error", T),
						v.add((0, i.$Yc)(() => s.removeListener("end", P))),
						s.on("end", P),
						v.add((0, i.$Yc)(() => s.removeListener("data", I))),
						s.on("data", I);
				});
			}
			function n(s, l) {
				const y = d(l);
				return y.end(s), y;
			}
			function g() {
				const s = d(() => {
					throw new Error("not supported");
				});
				return s.end(), s;
			}
			function p(s) {
				let l = !1;
				return { read: () => (l ? null : ((l = !0), s)) };
			}
			function o(s, l, y) {
				const $ = d(y);
				return (
					h(s, {
						onData: (v) => $.write(l.data(v)),
						onError: (v) => $.error(l.error ? l.error(v) : v),
						onEnd: () => $.end(),
					}),
					$
				);
			}
			function f(s, l, y) {
				let $ = !1;
				return {
					read: () => {
						const v = l.read();
						return $ ? v : (($ = !0), v !== null ? y([s, v]) : s);
					},
				};
			}
			function b(s, l, y) {
				let $ = !1;
				const v = d(y);
				return (
					h(l, {
						onData: (S) => ($ ? v.write(S) : (($ = !0), v.write(y([s, S])))),
						onError: (S) => v.error(S),
						onEnd: () => {
							$ || (($ = !0), v.write(s)), v.end();
						},
					}),
					v
				);
			}
		}),
		