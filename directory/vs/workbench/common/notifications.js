import '../../../require.js';
import '../../../exports.js';
import '../../platform/notification/common/notification.js';
import '../../base/common/errorMessage.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
import '../../base/common/errors.js';
import '../../base/common/actions.js';
import '../../base/common/arrays.js';
import '../../base/common/linkedText.js';
import '../../base/common/map.js';
define(
			de[610],
			he([1, 0, 40, 163, 6, 3, 29, 50, 24, 488, 59]),
			function (ce /*require*/,
 e /*exports*/,
 t /*notification*/,
 i /*errorMessage*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*errors*/,
 d /*actions*/,
 m /*arrays*/,
 r /*linkedText*/,
 u /*map*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gwc =
						e.$Fwc =
						e.$Ewc =
						e.NotificationViewItemContentChangeKind =
						e.$Cwc =
						e.$Bwc =
						e.StatusMessageChangeType =
						e.NotificationChangeType =
							void 0),
					(e.$Dwc = g);
				var a;
				(function (l) {
					(l[(l.ADD = 0)] = "ADD"),
						(l[(l.CHANGE = 1)] = "CHANGE"),
						(l[(l.EXPAND_COLLAPSE = 2)] = "EXPAND_COLLAPSE"),
						(l[(l.REMOVE = 3)] = "REMOVE");
				})(a || (e.NotificationChangeType = a = {}));
				var h;
				(function (l) {
					(l[(l.ADD = 0)] = "ADD"), (l[(l.REMOVE = 1)] = "REMOVE");
				})(h || (e.StatusMessageChangeType = h = {}));
				class c extends E.$1c {
					constructor(y, $) {
						super(),
							(this.f = y),
							(this.g = $),
							(this.a = this.D(new w.$re())),
							(this.onDidClose = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeVisibility = this.b.event),
							this.h();
					}
					h() {
						this.D(this.f.onDidChangeVisibility((y) => this.b.fire(y))),
							w.Event.once(this.f.onDidClose)(() => {
								this.a.fire(), this.dispose();
							});
					}
					get progress() {
						return this.f.progress;
					}
					updateSeverity(y) {
						this.f.updateSeverity(y);
					}
					updateMessage(y) {
						this.f.updateMessage(y);
					}
					updateActions(y) {
						this.f.updateActions(y);
					}
					close() {
						this.g(this.f), this.dispose();
					}
				}
				e.$Bwc = c;
				class n extends E.$1c {
					constructor() {
						super(...arguments),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeNotification = this.b.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeStatusMessage = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeFilter = this.g.event),
							(this.h = []),
							(this.m = {
								global: t.NotificationsFilter.OFF,
								sources: new Map(),
							});
					}
					static {
						this.a = new t.$6N();
					}
					get notifications() {
						return this.h;
					}
					get statusMessage() {
						return this.j;
					}
					setFilter(y) {
						let $ = !1;
						typeof y.global == "number" &&
							(($ = this.m.global !== y.global), (this.m.global = y.global));
						let v = !1;
						y.sources &&
							((v = !(0, u.$Oc)(this.m.sources, y.sources)),
							(this.m.sources = y.sources)),
							($ || v) &&
								this.g.fire({
									global: $ ? y.global : void 0,
									sources: v ? y.sources : void 0,
								});
					}
					addNotification(y) {
						(y.source === "Github.copilot" ||
							(typeof y.source != "string" &&
								y.source?.id === "Github.copilot")) &&
							(y = { ...y, message: "From COPILOT: " + y.message });
						const $ = this.r(y);
						return $
							? (this.q($)?.close(),
								this.h.splice(0, 0, $),
								this.b.fire({ item: $, index: 0, kind: a.ADD }),
								new c($, (S) => this.n(S)))
							: n.a;
					}
					n(y) {
						const $ = this.q(y);
						$ && $ !== y ? $.close() : y.close();
					}
					q(y) {
						return this.h.find(($) => $.equals(y));
					}
					r(y) {
						const $ = f.create(y, this.m);
						if (!$) return;
						const v = (T, P) => {
								const k = this.h.indexOf($);
								k >= 0 &&
									this.b.fire({ item: $, index: k, kind: T, detail: P });
							},
							S = $.onDidChangeExpansion(() => v(a.EXPAND_COLLAPSE)),
							I = $.onDidChangeContent((T) => v(a.CHANGE, T.kind));
						return (
							w.Event.once($.onDidClose)(() => {
								S.dispose(), I.dispose();
								const T = this.h.indexOf($);
								T >= 0 &&
									(this.h.splice(T, 1),
									this.b.fire({ item: $, index: T, kind: a.REMOVE }));
							}),
							$
						);
					}
					showStatusMessage(y, $) {
						const v = s.create(y, $);
						return v
							? ((this.j = v),
								this.f.fire({ kind: h.ADD, item: v }),
								(0, E.$Yc)(() => {
									this.j === v &&
										((this.j = void 0),
										this.f.fire({ kind: h.REMOVE, item: v }));
								}))
							: E.$1c.None;
					}
				}
				e.$Cwc = n;
				function g(l) {
					return l instanceof f;
				}
				var p;
				(function (l) {
					(l[(l.SEVERITY = 0)] = "SEVERITY"),
						(l[(l.MESSAGE = 1)] = "MESSAGE"),
						(l[(l.ACTIONS = 2)] = "ACTIONS"),
						(l[(l.PROGRESS = 3)] = "PROGRESS");
				})(p || (e.NotificationViewItemContentChangeKind = p = {}));
				class o extends E.$1c {
					constructor() {
						super(),
							(this.b = this.D(new w.$re())),
							(this.onDidChange = this.b.event),
							(this.a = Object.create(null));
					}
					get state() {
						return this.a;
					}
					infinite() {
						this.a.infinite ||
							((this.a.infinite = !0),
							(this.a.total = void 0),
							(this.a.worked = void 0),
							(this.a.done = void 0),
							this.b.fire());
					}
					done() {
						this.a.done ||
							((this.a.done = !0),
							(this.a.infinite = void 0),
							(this.a.total = void 0),
							(this.a.worked = void 0),
							this.b.fire());
					}
					total(y) {
						this.a.total !== y &&
							((this.a.total = y),
							(this.a.infinite = void 0),
							(this.a.done = void 0),
							this.b.fire());
					}
					worked(y) {
						typeof this.a.worked == "number"
							? (this.a.worked += y)
							: (this.a.worked = y),
							(this.a.infinite = void 0),
							(this.a.done = void 0),
							this.b.fire();
					}
				}
				e.$Ewc = o;
				class f extends E.$1c {
					static {
						this.a = 1e3;
					}
					static create(y, $) {
						if (!y || !y.message || (0, C.$8)(y.message)) return;
						let v;
						typeof y.severity == "number"
							? (v = y.severity)
							: (v = t.Severity.Info);
						const S = f.r(y.message);
						if (!S) return;
						let I;
						y.actions
							? (I = y.actions)
							: (0, i.$yj)(y.message) && (I = { primary: y.message.actions });
						let T = y.priority ?? t.NotificationPriority.DEFAULT;
						return (
							T === t.NotificationPriority.DEFAULT &&
								v !== t.Severity.Error &&
								($.global === t.NotificationsFilter.ERROR ||
									((0, t.$5N)(y.source) &&
										$.sources.get(y.source.id) ===
											t.NotificationsFilter.ERROR)) &&
								(T = t.NotificationPriority.SILENT),
							new f(y.id, v, y.sticky, T, S, y.source, y.progress, I)
						);
					}
					static r(y) {
						let $;
						if (
							(y instanceof Error
								? ($ = (0, i.$xj)(y, !1))
								: typeof y == "string" && ($ = y),
							!$)
						)
							return;
						const v = $;
						$.length > f.a && ($ = `${$.substr(0, f.a)}...`),
							($ = $.replace(/(\r\n|\n|\r)/gm, " ").trim());
						const S = (0, r.$Zpb)($);
						return { raw: v, linkedText: S, original: y };
					}
					constructor(y, $, v, S, I, T, P, k) {
						super(),
							(this.id = y),
							(this.s = $),
							(this.t = v),
							(this.u = S),
							(this.w = I),
							(this.y = T),
							(this.f = !1),
							(this.j = this.D(new w.$re())),
							(this.onDidChangeExpansion = this.j.event),
							(this.m = this.D(new w.$re())),
							(this.onDidClose = this.m.event),
							(this.n = this.D(new w.$re())),
							(this.onDidChangeContent = this.n.event),
							(this.q = this.D(new w.$re())),
							(this.onDidChangeVisibility = this.q.event),
							P && this.z(P),
							this.C(k);
					}
					z(y) {
						y.infinite
							? this.progress.infinite()
							: y.total &&
								(this.progress.total(y.total),
								y.worked && this.progress.worked(y.worked));
					}
					C(y = { primary: [], secondary: [] }) {
						(this.g = {
							primary: Array.isArray(y.primary) ? y.primary : [],
							secondary: Array.isArray(y.secondary) ? y.secondary : [],
						}),
							(this.b = y.primary && y.primary.length > 0);
					}
					get canCollapse() {
						return !this.F;
					}
					get expanded() {
						return !!this.b;
					}
					get severity() {
						return this.s;
					}
					get sticky() {
						if (this.t) return !0;
						const y = this.F;
						return !!(
							(y && this.s === t.Severity.Error) ||
							(!y && this.b) ||
							(this.h && !this.h.state.done)
						);
					}
					get priority() {
						return this.u;
					}
					get F() {
						return !this.g || !this.g.primary ? !1 : this.g.primary.length > 0;
					}
					get hasProgress() {
						return !!this.h;
					}
					get progress() {
						return (
							this.h ||
								((this.h = this.D(new o())),
								this.D(
									this.h.onDidChange(() => this.n.fire({ kind: p.PROGRESS })),
								)),
							this.h
						);
					}
					get message() {
						return this.w;
					}
					get source() {
						return typeof this.y == "string"
							? this.y
							: this.y
								? this.y.label
								: void 0;
					}
					get sourceId() {
						return this.y && typeof this.y != "string" && "id" in this.y
							? this.y.id
							: void 0;
					}
					get actions() {
						return this.g;
					}
					get visible() {
						return this.f;
					}
					updateSeverity(y) {
						y !== this.s && ((this.s = y), this.n.fire({ kind: p.SEVERITY }));
					}
					updateMessage(y) {
						const $ = f.r(y);
						!$ ||
							$.raw === this.w.raw ||
							((this.w = $), this.n.fire({ kind: p.MESSAGE }));
					}
					updateActions(y) {
						this.C(y), this.n.fire({ kind: p.ACTIONS });
					}
					updateVisibility(y) {
						this.f !== y && ((this.f = y), this.q.fire(y));
					}
					expand() {
						this.b || !this.canCollapse || ((this.b = !0), this.j.fire());
					}
					collapse(y) {
						!this.b || !this.canCollapse || ((this.b = !1), y || this.j.fire());
					}
					toggle() {
						this.b ? this.collapse() : this.expand();
					}
					close() {
						this.m.fire(), this.dispose();
					}
					equals(y) {
						if (this.hasProgress || y.hasProgress) return !1;
						if (typeof this.id == "string" || typeof y.id == "string")
							return this.id === y.id;
						if (typeof this.y == "object") {
							if (this.y.label !== y.source || this.y.id !== y.sourceId)
								return !1;
						} else if (this.y !== y.source) return !1;
						if (this.w.raw !== y.message.raw) return !1;
						const $ = (this.g && this.g.primary) || [],
							v = (y.actions && y.actions.primary) || [];
						return (0, m.$yb)(
							$,
							v,
							(S, I) => S.id + S.label === I.id + I.label,
						);
					}
				}
				e.$Fwc = f;
				class b extends d.$rj {
					constructor(y, $) {
						super(y, $.label, void 0, !0, async () => {
							$.run(), this.a.fire();
						}),
							(this.a = this.D(new w.$re())),
							(this.onDidRun = this.a.event),
							(this.b = !!$.keepOpen),
							(this.f =
								!$.isSecondary && $.menu
									? $.menu.map((v, S) => new b(`${y}.${S}`, v))
									: void 0);
					}
					get menu() {
						return this.f;
					}
					get keepOpen() {
						return this.b;
					}
				}
				e.$Gwc = b;
				class s {
					static create(y, $) {
						if (!y || (0, C.$8)(y)) return;
						let v;
						if (
							(y instanceof Error
								? (v = (0, i.$xj)(y, !1))
								: typeof y == "string" && (v = y),
							!!v)
						)
							return { message: v, options: $ };
					}
				}
			},
		),
		