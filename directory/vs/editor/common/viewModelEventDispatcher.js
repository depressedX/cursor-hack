import '../../../require.js';
import '../../../exports.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
define(de[751], he([1, 0, 6, 3]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$$vb =
					e.$0vb =
					e.$9vb =
					e.$8vb =
					e.$7vb =
					e.$6vb =
					e.$5vb =
					e.$4vb =
					e.$3vb =
					e.$2vb =
					e.$1vb =
					e.$Zvb =
					e.$Yvb =
					e.OutgoingViewModelEventKind =
					e.$Xvb =
					e.$Wvb =
						void 0);
			class w extends i.$1c {
				constructor() {
					super(),
						(this.c = this.D(new t.$re())),
						(this.onEvent = this.c.event),
						(this.f = []),
						(this.g = null),
						(this.h = !1),
						(this.j = null),
						(this.m = 0),
						(this.n = []);
				}
				emitOutgoingEvent(l) {
					this.q(l), this.r();
				}
				q(l) {
					for (let y = 0, $ = this.n.length; y < $; y++) {
						const v =
							this.n[y].kind === l.kind ? this.n[y].attemptToMerge(l) : null;
						if (v) {
							this.n[y] = v;
							return;
						}
					}
					this.n.push(l);
				}
				r() {
					for (; this.n.length > 0; ) {
						if (this.j || this.h) return;
						const l = this.n.shift();
						l.isNoOp() || this.c.fire(l);
					}
				}
				addViewEventHandler(l) {
					for (let y = 0, $ = this.f.length; y < $; y++)
						this.f[y] === l &&
							console.warn(
								"Detected duplicate listener in ViewEventDispatcher",
								l,
							);
					this.f.push(l);
				}
				removeViewEventHandler(l) {
					for (let y = 0; y < this.f.length; y++)
						if (this.f[y] === l) {
							this.f.splice(y, 1);
							break;
						}
				}
				beginEmitViewEvents() {
					return this.m++, this.m === 1 && (this.j = new E()), this.j;
				}
				endEmitViewEvents() {
					if ((this.m--, this.m === 0)) {
						const l = this.j.outgoingEvents,
							y = this.j.viewEvents;
						this.j = null;
						for (const $ of l) this.q($);
						y.length > 0 && this.s(y);
					}
					this.r();
				}
				emitSingleViewEvent(l) {
					try {
						this.beginEmitViewEvents().emitViewEvent(l);
					} finally {
						this.endEmitViewEvents();
					}
				}
				s(l) {
					this.g ? (this.g = this.g.concat(l)) : (this.g = l),
						this.h || this.t();
				}
				t() {
					try {
						(this.h = !0), this.u();
					} finally {
						this.h = !1;
					}
				}
				u() {
					for (; this.g; ) {
						const l = this.g;
						this.g = null;
						const y = this.f.slice(0);
						for (const $ of y) $.handleEvents(l);
					}
				}
			}
			e.$Wvb = w;
			class E {
				constructor() {
					(this.viewEvents = []), (this.outgoingEvents = []);
				}
				emitViewEvent(l) {
					this.viewEvents.push(l);
				}
				emitOutgoingEvent(l) {
					this.outgoingEvents.push(l);
				}
			}
			e.$Xvb = E;
			var C;
			(function (s) {
				(s[(s.ContentSizeChanged = 0)] = "ContentSizeChanged"),
					(s[(s.FocusChanged = 1)] = "FocusChanged"),
					(s[(s.ScrollChanged = 2)] = "ScrollChanged"),
					(s[(s.ViewZonesChanged = 3)] = "ViewZonesChanged"),
					(s[(s.HiddenAreasChanged = 4)] = "HiddenAreasChanged"),
					(s[(s.ReadOnlyEditAttempt = 5)] = "ReadOnlyEditAttempt"),
					(s[(s.CursorStateChanged = 6)] = "CursorStateChanged"),
					(s[(s.ModelDecorationsChanged = 7)] = "ModelDecorationsChanged"),
					(s[(s.ModelLanguageChanged = 8)] = "ModelLanguageChanged"),
					(s[(s.ModelLanguageConfigurationChanged = 9)] =
						"ModelLanguageConfigurationChanged"),
					(s[(s.ModelContentChanged = 10)] = "ModelContentChanged"),
					(s[(s.ModelOptionsChanged = 11)] = "ModelOptionsChanged"),
					(s[(s.ModelTokensChanged = 12)] = "ModelTokensChanged");
			})(C || (e.OutgoingViewModelEventKind = C = {}));
			class d {
				constructor(l, y, $, v) {
					(this.kind = C.ContentSizeChanged),
						(this.c = l),
						(this.d = y),
						(this.contentWidth = $),
						(this.contentHeight = v),
						(this.contentWidthChanged = this.c !== this.contentWidth),
						(this.contentHeightChanged = this.d !== this.contentHeight);
				}
				isNoOp() {
					return !this.contentWidthChanged && !this.contentHeightChanged;
				}
				attemptToMerge(l) {
					return l.kind !== this.kind
						? null
						: new d(this.c, this.d, l.contentWidth, l.contentHeight);
				}
			}
			e.$Yvb = d;
			class m {
				constructor(l, y) {
					(this.kind = C.FocusChanged),
						(this.oldHasFocus = l),
						(this.hasFocus = y);
				}
				isNoOp() {
					return this.oldHasFocus === this.hasFocus;
				}
				attemptToMerge(l) {
					return l.kind !== this.kind
						? null
						: new m(this.oldHasFocus, l.hasFocus);
				}
			}
			e.$Zvb = m;
			class r {
				constructor(l, y, $, v, S, I, T, P) {
					(this.kind = C.ScrollChanged),
						(this.c = l),
						(this.d = y),
						(this.f = $),
						(this.g = v),
						(this.scrollWidth = S),
						(this.scrollLeft = I),
						(this.scrollHeight = T),
						(this.scrollTop = P),
						(this.scrollWidthChanged = this.c !== this.scrollWidth),
						(this.scrollLeftChanged = this.d !== this.scrollLeft),
						(this.scrollHeightChanged = this.f !== this.scrollHeight),
						(this.scrollTopChanged = this.g !== this.scrollTop);
				}
				isNoOp() {
					return (
						!this.scrollWidthChanged &&
						!this.scrollLeftChanged &&
						!this.scrollHeightChanged &&
						!this.scrollTopChanged
					);
				}
				attemptToMerge(l) {
					return l.kind !== this.kind
						? null
						: new r(
								this.c,
								this.d,
								this.f,
								this.g,
								l.scrollWidth,
								l.scrollLeft,
								l.scrollHeight,
								l.scrollTop,
							);
				}
			}
			e.$1vb = r;
			class u {
				constructor() {
					this.kind = C.ViewZonesChanged;
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return l.kind !== this.kind ? null : this;
				}
			}
			e.$2vb = u;
			class a {
				constructor() {
					this.kind = C.HiddenAreasChanged;
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return l.kind !== this.kind ? null : this;
				}
			}
			e.$3vb = a;
			class h {
				constructor(l, y, $, v, S, I, T) {
					(this.kind = C.CursorStateChanged),
						(this.oldSelections = l),
						(this.selections = y),
						(this.oldModelVersionId = $),
						(this.modelVersionId = v),
						(this.source = S),
						(this.reason = I),
						(this.reachedMaxCursorCount = T);
				}
				static c(l, y) {
					if (!l && !y) return !0;
					if (!l || !y) return !1;
					const $ = l.length,
						v = y.length;
					if ($ !== v) return !1;
					for (let S = 0; S < $; S++)
						if (!l[S].equalsSelection(y[S])) return !1;
					return !0;
				}
				isNoOp() {
					return (
						h.c(this.oldSelections, this.selections) &&
						this.oldModelVersionId === this.modelVersionId
					);
				}
				attemptToMerge(l) {
					return l.kind !== this.kind
						? null
						: new h(
								this.oldSelections,
								l.selections,
								this.oldModelVersionId,
								l.modelVersionId,
								l.source,
								l.reason,
								this.reachedMaxCursorCount || l.reachedMaxCursorCount,
							);
				}
			}
			e.$4vb = h;
			class c {
				constructor() {
					this.kind = C.ReadOnlyEditAttempt;
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return l.kind !== this.kind ? null : this;
				}
			}
			e.$5vb = c;
			class n {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelDecorationsChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$6vb = n;
			class g {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelLanguageChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$7vb = g;
			class p {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelLanguageConfigurationChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$8vb = p;
			class o {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelContentChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$9vb = o;
			class f {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelOptionsChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$0vb = f;
			class b {
				constructor(l) {
					(this.event = l), (this.kind = C.ModelTokensChanged);
				}
				isNoOp() {
					return !1;
				}
				attemptToMerge(l) {
					return null;
				}
			}
			e.$$vb = b;
		}),
		