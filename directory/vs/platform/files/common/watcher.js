import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/glob.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/path.js';
import '../../../base/common/platform.js';
import '../../../base/common/uri.js';
import './files.js';
define(
			de[938],
			he([1, 0, 215, 3, 54, 12, 9, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*glob*/,
 i /*lifecycle*/,
 w /*path*/,
 E /*platform*/,
 C /*uri*/,
 d /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xr = e.$wr = e.$vr = void 0),
					(e.$tr = m),
					(e.$ur = r),
					(e.$yr = c),
					(e.$zr = n),
					(e.$Ar = g),
					(e.$Br = p),
					(e.$Cr = f),
					(e.$Dr = b);
				function m(s) {
					return typeof s.correlationId == "number";
				}
				function r(s) {
					return s.recursive === !0;
				}
				class u extends i.$1c {
					static {
						this.a = 5;
					}
					constructor(l, y, $, v) {
						super(),
							(this.h = l),
							(this.j = y),
							(this.m = $),
							(this.n = v),
							(this.c = this.D(new i.$2c())),
							(this.f = void 0),
							(this.g = 0);
					}
					r() {
						const l = new i.$Zc();
						(this.c.value = l),
							(this.b = this.q(l)),
							this.b.setVerboseLogging(this.m),
							l.add(this.b.onDidChangeFile((y) => this.h(y))),
							l.add(this.b.onDidLogMessage((y) => this.j(y))),
							l.add(this.b.onDidError((y) => this.s(y.error, y.request)));
					}
					s(l, y) {
						this.t(l, y)
							? this.g < u.a && this.f
								? (this.w(`restarting watcher after unexpected error: ${l}`),
									this.u(this.f))
								: this.w(
										`gave up attempting to restart watcher after unexpected error: ${l}`,
									)
							: this.w(l);
					}
					t(l, y) {
						return !(
							!this.n.restartOnError ||
							y ||
							l.indexOf("No space left on device") !== -1 ||
							l.indexOf("EMFILE") !== -1
						);
					}
					u(l) {
						this.g++, this.r(), this.watch(l);
					}
					async watch(l) {
						(this.f = l), await this.b?.watch(l);
					}
					async setVerboseLogging(l) {
						(this.m = l), await this.b?.setVerboseLogging(l);
					}
					w(l) {
						this.j({
							type: "error",
							message: `[File Watcher (${this.n.type})] ${l}`,
						});
					}
					y(l) {
						this.j({
							type: "trace",
							message: `[File Watcher (${this.n.type})] ${l}`,
						});
					}
					dispose() {
						return (this.b = void 0), super.dispose();
					}
				}
				e.$vr = u;
				class a extends u {
					constructor(l, y, $) {
						super(l, y, $, { type: "node.js", restartOnError: !1 });
					}
				}
				e.$wr = a;
				class h extends u {
					constructor(l, y, $) {
						super(l, y, $, { type: "universal", restartOnError: !0 });
					}
				}
				e.$xr = h;
				function c(s) {
					return s.map((l) => ({
						type: l.type,
						resource: C.URI.revive(l.resource),
						cId: l.cId,
					}));
				}
				function n(s) {
					const l = new o();
					for (const y of s) l.processEvent(y);
					return l.coalesce();
				}
				function g(s, l) {
					return typeof l == "string" && !l.startsWith(t.$Fk) && !(0, w.$nc)(l)
						? { base: s, pattern: l }
						: l;
				}
				function p(s, l) {
					const y = [];
					for (const $ of l) y.push((0, t.$Jk)(g(s, $)));
					return y;
				}
				class o {
					constructor() {
						(this.a = new Set()), (this.b = new Map());
					}
					c(l) {
						return E.$n ? l.resource.fsPath : l.resource.fsPath.toLowerCase();
					}
					processEvent(l) {
						const y = this.b.get(this.c(l));
						let $ = !1;
						if (y) {
							const v = y.type,
								S = l.type;
							y.resource.fsPath !== l.resource.fsPath &&
							(l.type === d.FileChangeType.DELETED ||
								l.type === d.FileChangeType.ADDED)
								? ($ = !0)
								: v === d.FileChangeType.ADDED && S === d.FileChangeType.DELETED
									? (this.b.delete(this.c(l)), this.a.delete(y))
									: v === d.FileChangeType.DELETED &&
											S === d.FileChangeType.ADDED
										? (y.type = d.FileChangeType.UPDATED)
										: (v === d.FileChangeType.ADDED &&
												S === d.FileChangeType.UPDATED) ||
											(y.type = S);
						} else $ = !0;
						$ && (this.a.add(l), this.b.set(this.c(l), l));
					}
					coalesce() {
						const l = [],
							y = [];
						return Array.from(this.a)
							.filter(($) =>
								$.type !== d.FileChangeType.DELETED ? (l.push($), !1) : !0,
							)
							.sort(
								($, v) => $.resource.fsPath.length - v.resource.fsPath.length,
							)
							.filter(($) =>
								y.some((v) => (0, d.$Fl)($.resource.fsPath, v, !E.$n))
									? !1
									: (y.push($.resource.fsPath), !0),
							)
							.concat(l);
					}
				}
				function f(s, l) {
					if (typeof l == "number")
						switch (s.type) {
							case d.FileChangeType.ADDED:
								return (l & d.FileChangeFilter.ADDED) === 0;
							case d.FileChangeType.DELETED:
								return (l & d.FileChangeFilter.DELETED) === 0;
							case d.FileChangeType.UPDATED:
								return (l & d.FileChangeFilter.UPDATED) === 0;
						}
					return !1;
				}
				function b(s) {
					if (typeof s == "number") {
						const l = [];
						return (
							s & d.FileChangeFilter.ADDED && l.push("Added"),
							s & d.FileChangeFilter.DELETED && l.push("Deleted"),
							s & d.FileChangeFilter.UPDATED && l.push("Updated"),
							l.length === 0 ? "<all>" : `[${l.join(", ")}]`
						);
					}
					return "<none>";
				}
			},
		)
