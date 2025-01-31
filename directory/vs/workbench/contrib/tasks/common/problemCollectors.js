import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import './problemMatcher.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../base/common/uuid.js';
import '../../../../base/common/platform.js';
define(
			de[1814],
			he([1, 0, 9, 6, 3, 570, 90, 47, 12]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*problemMatcher*/,
 C /*markers*/,
 d /*uuid*/,
 m /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Wc =
						e.$8Wc =
						e.ProblemHandlingStrategy =
						e.$7Wc =
						e.ProblemCollectorEventKind =
							void 0);
				var r;
				(function (g) {
					(g.BackgroundProcessingBegins = "backgroundProcessingBegins"),
						(g.BackgroundProcessingEnds = "backgroundProcessingEnds");
				})(r || (e.ProblemCollectorEventKind = r = {}));
				var u;
				(function (g) {
					function p(o) {
						return Object.freeze({ kind: o });
					}
					g.create = p;
				})(u || (u = {}));
				class a extends w.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.problemMatchers = p),
							(this.C = o),
							(this.F = f),
							(this.m = new w.$Zc()),
							(this.w = new i.$re()),
							(this.onDidFindFirstMatch = this.w.event),
							(this.y = new i.$re()),
							(this.onDidFindErrors = this.y.event),
							(this.z = new i.$re()),
							(this.onDidRequestInvalidateLastMarker = this.z.event),
							(this.a = Object.create(null)),
							(this.h = 1),
							p
								.map((s) => (0, E.$53)(s, b))
								.forEach((s) => {
									const l = s.matchLength;
									l > this.h && (this.h = l);
									let y = this.a[l];
									y || ((y = []), (this.a[l] = y)), y.push(s);
								}),
							(this.g = []),
							(this.b = null),
							(this.c = 0),
							(this.f = void 0),
							(this.j = Object.create(null)),
							(this.q = new Map());
						for (const s of p) {
							const l = this.q.get(s.owner);
							l === void 0
								? this.q.set(s.owner, s.applyTo)
								: this.q.set(s.owner, this.J(l, s.applyTo));
						}
						(this.r = new Map()),
							(this.s = new Map()),
							(this.t = new Map()),
							this.D(
								this.F.onModelAdded(
									(s) => {
										this.j[s.uri.toString()] = !0;
									},
									this,
									this.m,
								),
							),
							this.D(
								this.F.onModelRemoved(
									(s) => {
										delete this.j[s.uri.toString()];
									},
									this,
									this.m,
								),
							),
							this.F.getModels().forEach(
								(s) => (this.j[s.uri.toString()] = !0),
							),
							(this.u = new i.$re());
					}
					get onDidStateChange() {
						return this.u.event;
					}
					processLine(p) {
						if (this.n) {
							const o = this.n;
							this.n = o.then(() => this.G(p));
						} else this.n = this.G(p);
					}
					dispose() {
						super.dispose(), this.m.dispose();
					}
					get numberOfMatches() {
						return this.c;
					}
					get maxMarkerSeverity() {
						return this.f;
					}
					H(p) {
						let o = null;
						if (this.b) {
							if (((o = this.b.next(p)), o)) return this.M(o), o;
							this.N(), (this.b = null);
						}
						if (this.g.length < this.h) this.g.push(p);
						else {
							const f = this.g.length - 1;
							for (let b = 0; b < f; b++) this.g[b] = this.g[b + 1];
							this.g[f] = p;
						}
						return (o = this.L()), o && this.N(), o;
					}
					async I(p) {
						switch (p.description.applyTo) {
							case E.ApplyToKind.allDocuments:
								return !0;
							case E.ApplyToKind.openDocuments:
								return !!this.j[(await p.resource).toString()];
							case E.ApplyToKind.closedDocuments:
								return !this.j[(await p.resource).toString()];
							default:
								return !0;
						}
					}
					J(p, o) {
						return p === o || p === E.ApplyToKind.allDocuments
							? p
							: E.ApplyToKind.allDocuments;
					}
					L() {
						this.b = null;
						const p = this.g.length;
						for (let o = 0; o < p; o++) {
							const f = this.a[p - o];
							if (f)
								for (const b of f) {
									const s = b.handle(this.g, o);
									if (s.match)
										return this.M(s.match), s.continue && (this.b = b), s.match;
								}
						}
						return null;
					}
					M(p) {
						this.c++,
							(this.f === void 0 || p.marker.severity > this.f) &&
								(this.f = p.marker.severity);
					}
					N() {
						this.g.length > 0 && (this.g = []);
					}
					O(p) {
						const o = this.R(p);
						this.C.read({ owner: p }).forEach((f) =>
							o.set(f.resource.toString(), f.resource),
						);
					}
					P(p, o) {
						this.R(p).set(o.toString(), o);
					}
					Q(p, o) {
						this.r.get(p)?.delete(o);
					}
					R(p) {
						let o = this.r.get(p);
						return o || ((o = new Map()), this.r.set(p, o)), o;
					}
					S() {
						this.r.forEach((p, o) => {
							this.W(o, p);
						}),
							(this.r = new Map());
					}
					U(p) {
						const o = this.r.get(p);
						o && (this.W(p, o), this.r.delete(p));
					}
					W(p, o) {
						const f = [],
							b = this.q.get(p);
						o.forEach((s, l) => {
							(b === E.ApplyToKind.allDocuments ||
								(b === E.ApplyToKind.openDocuments && this.j[l]) ||
								(b === E.ApplyToKind.closedDocuments && !this.j[l])) &&
								f.push(s);
						}),
							this.C.remove(p, f);
					}
					X(p, o, f) {
						let b = this.s.get(o);
						b || ((b = new Map()), this.s.set(o, b));
						let s = b.get(f);
						s || ((s = new Map()), b.set(f, s));
						const l = C.IMarkerData.makeKeyOptionalMessage(p, !1);
						let y;
						s.has(l)
							? (y = s.get(l)) !== void 0 &&
								y.message.length < p.message.length &&
								m.$l &&
								s.set(l, p)
							: s.set(l, p);
					}
					Y() {
						this.s.forEach((p, o) => {
							const f = this.ab(o);
							p.forEach((b, s) => {
								this.$(o, s, b, f);
							});
						});
					}
					Z(p, o) {
						const f = this.s.get(p);
						if (!f) return;
						const b = this.ab(p),
							s = f.get(o);
						s && this.$(p, o, s, b);
					}
					$(p, o, f, b) {
						if (f.size !== b.get(o)) {
							const s = [];
							f.forEach((l) => s.push(l)),
								this.C.changeOne(p, t.URI.parse(o), s),
								b.set(o, f.size);
						}
					}
					ab(p) {
						let o = this.t.get(p);
						return o || ((o = new Map()), this.t.set(p, o)), o;
					}
					bb() {
						(this.c = 0), (this.f = void 0), this.s.clear(), this.t.clear();
					}
					done() {
						this.Y(), this.S();
					}
				}
				e.$7Wc = a;
				var h;
				(function (g) {
					g[(g.Clean = 0)] = "Clean";
				})(h || (e.ProblemHandlingStrategy = h = {}));
				class c extends a {
					constructor(p, o, f, b = h.Clean, s) {
						super(p, o, f, s);
						const l = Object.create(null);
						p.forEach((y) => (l[y.owner] = !0)),
							(this.cb = Object.keys(l)),
							this.cb.forEach((y) => {
								this.O(y);
							});
					}
					async G(p) {
						const o = this.H(p);
						if (!o) return;
						const f = o.description.owner,
							s = (await o.resource).toString();
						this.Q(f, s),
							(await this.I(o)) &&
								(this.X(o.marker, f, s),
								(this.db !== f || this.eb !== s) &&
									(this.db && this.eb && this.Z(this.db, this.eb),
									(this.db = f),
									(this.eb = s)));
					}
				}
				e.$8Wc = c;
				class n extends a {
					constructor(p, o, f, b) {
						super(p, o, f, b),
							(this.gb = []),
							(this.beginPatterns = []),
							this.kb(),
							(this.cb = []),
							(this.db = new Set()),
							this.problemMatchers.forEach((s) => {
								if (s.watching) {
									const l = (0, d.$9g)();
									this.cb.push({
										key: l,
										matcher: s,
										begin: s.watching.beginsPattern,
										end: s.watching.endsPattern,
									}),
										this.beginPatterns.push(s.watching.beginsPattern.regexp);
								}
							}),
							this.m.add(
								this.F.onModelRemoved((s) => {
									let l = i.Event.debounce(
										this.C.onMarkerChanged,
										(y, $) => (y ?? []).concat($),
										500,
										!1,
										!0,
									)(async (y) => {
										if (
											(l?.dispose(),
											(l = void 0),
											!y ||
												!y.includes(s.uri) ||
												this.C.read({ resource: s.uri }).length !== 0)
										)
											return;
										const $ = Array.from(this.gb);
										for (const v of $) await this.G(v);
									});
									setTimeout(async () => {
										const y = l;
										(l = void 0), y?.dispose();
									}, 600);
								}),
							);
					}
					aboutToStart() {
						for (const p of this.cb)
							p.matcher.watching &&
								p.matcher.watching.activeOnStart &&
								(this.db.add(p.key),
								this.u.fire(u.create(r.BackgroundProcessingBegins)),
								this.O(p.matcher.owner));
					}
					async G(p) {
						if ((await this.ib(p)) || this.jb(p)) return;
						this.gb.push(p);
						const o = this.H(p);
						if (!o) return;
						const f = await o.resource,
							b = o.description.owner,
							s = f.toString();
						this.Q(b, s),
							(await this.I(o)) &&
								(this.X(o.marker, b, s),
								(this.eb !== b || this.fb !== s) &&
									(this.lb(), (this.eb = b), (this.fb = s)));
					}
					forceDelivery() {
						this.lb();
					}
					async ib(p) {
						let o = !1;
						for (const f of this.cb) {
							const b = f.begin.regexp.exec(p);
							if (b) {
								if (this.db.has(f.key)) continue;
								this.db.add(f.key),
									(o = !0),
									this.w.fire(),
									(this.gb = []),
									this.gb.push(p),
									this.u.fire(u.create(r.BackgroundProcessingBegins)),
									this.bb(),
									this.kb();
								const s = f.matcher.owner,
									l = b[f.begin.file];
								if (l) {
									const y = (0, E.$43)(l, f.matcher);
									this.P(s, await y);
								} else this.O(s);
							}
						}
						return o;
					}
					jb(p) {
						let o = !1;
						for (const f of this.cb)
							if (
								f.end.regexp.exec(p) &&
								(this.c > 0 ? this.y.fire() : this.z.fire(), this.db.has(f.key))
							) {
								this.db.delete(f.key),
									this.kb(),
									this.u.fire(u.create(r.BackgroundProcessingEnds)),
									(o = !0),
									this.gb.push(p);
								const s = f.matcher.owner;
								this.U(s), this.bb();
							}
						return o;
					}
					kb() {
						this.lb(), (this.eb = void 0), (this.fb = void 0);
					}
					lb() {
						this.eb && this.fb && this.Z(this.eb, this.fb);
					}
					done() {
						[...this.q.keys()].forEach((p) => {
							this.O(p);
						}),
							super.done();
					}
					isWatching() {
						return this.cb.length > 0;
					}
				}
				e.$9Wc = n;
			},
		)
