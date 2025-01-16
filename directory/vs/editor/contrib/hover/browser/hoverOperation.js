define(
			de[601],
			he([1, 0, 15, 29, 6, 3, 38]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sCb = e.$rCb = e.HoverStartSource = e.HoverStartMode = void 0);
				var d;
				(function (h) {
					(h[(h.Idle = 0)] = "Idle"),
						(h[(h.FirstWait = 1)] = "FirstWait"),
						(h[(h.SecondWait = 2)] = "SecondWait"),
						(h[(h.WaitingForAsync = 3)] = "WaitingForAsync"),
						(h[(h.WaitingForAsyncShowingLoading = 4)] =
							"WaitingForAsyncShowingLoading");
				})(d || (d = {}));
				var m;
				(function (h) {
					(h[(h.Delayed = 0)] = "Delayed"),
						(h[(h.Immediate = 1)] = "Immediate");
				})(m || (e.HoverStartMode = m = {}));
				var r;
				(function (h) {
					(h[(h.Mouse = 0)] = "Mouse"), (h[(h.Keyboard = 1)] = "Keyboard");
				})(r || (e.HoverStartSource = r = {}));
				class u {
					constructor(c, n, g) {
						(this.value = c),
							(this.isComplete = n),
							(this.hasLoadingMessage = g);
					}
				}
				e.$rCb = u;
				class a extends E.$1c {
					constructor(c, n) {
						super(),
							(this.n = c),
							(this.q = n),
							(this.a = this.D(new w.$re())),
							(this.onResult = this.a.event),
							(this.b = this.D(new t.$Yh(() => this.y(), 0))),
							(this.c = this.D(new t.$Yh(() => this.z(), 0))),
							(this.f = this.D(new t.$Yh(() => this.C(), 0))),
							(this.g = d.Idle),
							(this.h = null),
							(this.j = !1),
							(this.m = []);
					}
					dispose() {
						this.h && (this.h.cancel(), (this.h = null)), super.dispose();
					}
					get r() {
						return this.n.getOption(C.EditorOption.hover).delay;
					}
					get s() {
						return this.r / 2;
					}
					get t() {
						return this.r - this.s;
					}
					get u() {
						return 3 * this.r;
					}
					w(c, n = !0) {
						(this.g = c), n && this.F();
					}
					y() {
						this.w(d.SecondWait),
							this.c.schedule(this.t),
							this.q.computeAsync
								? ((this.j = !1),
									(this.h = (0, t.$ci)((c) => this.q.computeAsync(c))),
									(async () => {
										try {
											for await (const c of this.h)
												c && (this.m.push(c), this.F());
											(this.j = !0),
												(this.g === d.WaitingForAsync ||
													this.g === d.WaitingForAsyncShowingLoading) &&
													this.w(d.Idle);
										} catch (c) {
											(0, i.$4)(c);
										}
									})())
								: (this.j = !0);
					}
					z() {
						this.q.computeSync &&
							(this.m = this.m.concat(this.q.computeSync())),
							this.w(this.j ? d.Idle : d.WaitingForAsync);
					}
					C() {
						this.g === d.WaitingForAsync &&
							this.w(d.WaitingForAsyncShowingLoading);
					}
					F() {
						if (this.g === d.FirstWait || this.g === d.SecondWait) return;
						const c = this.g === d.Idle,
							n = this.g === d.WaitingForAsyncShowingLoading;
						this.a.fire(new u(this.m.slice(0), c, n));
					}
					start(c) {
						if (c === m.Delayed)
							this.g === d.Idle &&
								(this.w(d.FirstWait),
								this.b.schedule(this.s),
								this.f.schedule(this.u));
						else
							switch (this.g) {
								case d.Idle:
									this.y(), this.c.cancel(), this.z();
									break;
								case d.SecondWait:
									this.c.cancel(), this.z();
									break;
							}
					}
					cancel() {
						this.b.cancel(),
							this.c.cancel(),
							this.f.cancel(),
							this.h && (this.h.cancel(), (this.h = null)),
							(this.m = []),
							this.w(d.Idle, !1);
					}
				}
				e.$sCb = a;
			},
		),
		