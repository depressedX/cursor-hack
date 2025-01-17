import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/extpath.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/path.js';
import './watcher.js';
import '../../log/common/log.js';
define(
			de[2741],
			he([1, 0, 24, 15, 29, 6, 249, 3, 54, 938, 34]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Er = void 0);
				class a extends d.$1c {
					constructor(c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							(this.c = this.D(new E.$re())),
							(this.onDidChangeFile = this.c.event),
							(this.g = this.D(new E.$re())),
							(this.onDidWatchError = this.g.event),
							(this.j = []),
							(this.m = this.D(new i.$Kh(0))),
							(this.u = []),
							(this.w = this.D(new i.$Kh(0)));
					}
					watch(c, n) {
						return n.recursive || this.b?.watcher?.forceUniversal
							? this.n(c, n)
							: this.y(c, n);
					}
					n(c, n) {
						const g = {
								path: this.J(c),
								excludes: n.excludes,
								includes: n.includes,
								recursive: n.recursive,
								filter: n.filter,
								correlationId: n.correlationId,
							},
							p = (0, t.$Xb)(this.j, g);
						return (
							this.q(),
							(0, d.$Yc)(() => {
								p(), this.q();
							})
						);
					}
					q() {
						this.m.trigger(() => this.r()).catch((c) => (0, w.$4)(c));
					}
					r() {
						this.h ||
							((this.h = this.D(
								this.s(
									(n) => this.c.fire((0, r.$yr)(n)),
									(n) => this.G(n),
									this.a.getLevel() === u.LogLevel.Trace,
								),
							)),
							this.D(
								this.a.onDidChangeLogLevel(() => {
									this.h?.setVerboseLogging(
										this.a.getLevel() === u.LogLevel.Trace,
									);
								}),
							));
						const c = this.b?.watcher?.recursive?.usePolling;
						if (c === !0)
							for (const n of this.j)
								(0, r.$ur)(n) &&
									(n.pollingInterval =
										this.b?.watcher?.recursive?.pollingInterval ?? 5e3);
						else if (Array.isArray(c))
							for (const n of this.j)
								(0, r.$ur)(n) &&
									c.includes(n.path) &&
									(n.pollingInterval =
										this.b?.watcher?.recursive?.pollingInterval ?? 5e3);
						return this.h.watch(this.j);
					}
					y(c, n) {
						const g = {
								path: this.J(c),
								excludes: n.excludes,
								includes: n.includes,
								recursive: !1,
								filter: n.filter,
								correlationId: n.correlationId,
							},
							p = (0, t.$Xb)(this.u, g);
						return (
							this.z(),
							(0, d.$Yc)(() => {
								p(), this.z();
							})
						);
					}
					z() {
						this.w.trigger(() => this.C()).catch((c) => (0, w.$4)(c));
					}
					C() {
						return (
							this.t ||
								((this.t = this.D(
									this.F(
										(c) => this.c.fire((0, r.$yr)(c)),
										(c) => this.G(c),
										this.a.getLevel() === u.LogLevel.Trace,
									),
								)),
								this.D(
									this.a.onDidChangeLogLevel(() => {
										this.t?.setVerboseLogging(
											this.a.getLevel() === u.LogLevel.Trace,
										);
									}),
								)),
							this.t.watch(this.u)
						);
					}
					G(c) {
						c.type === "error" && this.g.fire(c.message), this.H(c);
					}
					H(c) {
						this.a[c.type](c.message);
					}
					I(c) {
						return (0, m.$mc)(c.fsPath);
					}
					J(c) {
						const n = this.I(c);
						return (0, C.$Og)(n);
					}
				}
				e.$Er = a;
			},
		),
		