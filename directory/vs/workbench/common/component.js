define(de[969], he([1, 0, 282, 35]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fEb = void 0);
			class w extends i.$pP {
				constructor(C, d, m) {
					super(d),
						(this.C = C),
						(this.z = new t.$eEb(this.C, m)),
						this.D(
							m.onWillSaveState(() => {
								this.I(), this.z.saveMemento();
							}),
						);
				}
				getId() {
					return this.C;
				}
				F(C, d) {
					return this.z.getMemento(C, d);
				}
				G(C) {
					return this.z.reloadMemento(C);
				}
				H(C, d) {
					return this.z.onDidChangeValue(C, d);
				}
				I() {}
			}
			e.$fEb = w;
		}),
		define(
			de[1701],
			he([1, 0, 50, 969, 6, 7, 3, 28]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iEb = e.$hEb = e.$gEb = void 0);
				class m extends i.$fEb {
					get onDidFocus() {
						return this.y || (this.y = this.M().onDidFocus), this.y.event;
					}
					get onDidBlur() {
						return this.J || (this.J = this.M().onDidBlur), this.J.event;
					}
					hasFocus() {
						return this.L;
					}
					M() {
						const h = (0, d.$wg)(this.getContainer()),
							c = this.D((0, E.$dhb)(h)),
							n = (this.y = this.D(new w.$re()));
						this.D(
							c.onDidFocus(() => {
								(this.L = !0), n.fire();
							}),
						);
						const g = (this.J = this.D(new w.$re()));
						return (
							this.D(
								c.onDidBlur(() => {
									(this.L = !1), g.fire();
								}),
							),
							{ onDidFocus: n, onDidBlur: g }
						);
					}
					constructor(h, c, n, g) {
						super(h, n, g),
							(this.Q = c),
							(this.t = this.D(new w.$re())),
							(this.onTitleAreaUpdate = this.t.event),
							(this.L = !1),
							(this.O = !1);
					}
					getTitle() {}
					create(h) {
						this.P = h;
					}
					getContainer() {
						return this.P;
					}
					setVisible(h) {
						this.O !== !!h && (this.O = h);
					}
					focus() {}
					getMenuIds() {
						return [];
					}
					getActions() {
						return [];
					}
					getSecondaryActions() {
						return [];
					}
					getContextMenuActions() {
						return [];
					}
					getActionViewItem(h, c) {}
					getActionsContext() {
						return null;
					}
					getActionRunner() {
						return this.N || (this.N = this.D(new t.$sj())), this.N;
					}
					R() {
						this.t.fire();
					}
					isVisible() {
						return this.O;
					}
					getControl() {}
				}
				e.$gEb = m;
				class r {
					constructor(h, c, n, g, p, o) {
						(this.a = h),
							(this.id = c),
							(this.name = n),
							(this.cssClass = g),
							(this.order = p),
							(this.requestedIndex = o);
					}
					instantiate(h) {
						return h.createInstance(this.a);
					}
				}
				e.$hEb = r;
				class u extends C.$1c {
					constructor() {
						super(...arguments),
							(this.a = this.D(new w.$re())),
							(this.onDidRegister = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidDeregister = this.b.event),
							(this.c = []);
					}
					f(h) {
						this.j(h.id) || (this.c.push(h), this.a.fire(h));
					}
					g(h) {
						const c = this.j(h);
						c && (this.c.splice(this.c.indexOf(c), 1), this.b.fire(c));
					}
					getComposite(h) {
						return this.j(h);
					}
					h() {
						return this.c.slice(0);
					}
					j(h) {
						return this.c.find((c) => c.id === h);
					}
				}
				e.$iEb = u;
			},
		),
		define(
			de[550],
			he([1, 0, 969, 7, 6, 28, 3, 2332]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lEb = e.Part = void 0);
				class d extends t.$fEb {
					get dimension() {
						return this.f;
					}
					get contentPosition() {
						return this.g;
					}
					constructor(a, h, c, n, g) {
						super(a, c, n),
							(this.L = h),
							(this.M = g),
							(this.j = this.D(new w.$re())),
							(this.onDidVisibilityChange = this.j.event),
							(this.ab = this.D(new w.$re())),
							this.D(g.registerPart(this));
					}
					q(a) {
						this.m && super.q(a);
					}
					create(a, h) {
						(this.m = a),
							(this.s = this.O(a, h)),
							(this.t = this.Q(a, h)),
							(this.J = new m(this.L, this.t)),
							this.updateStyles();
					}
					getContainer() {
						return this.m;
					}
					O(a, h) {}
					P() {
						return this.s;
					}
					Q(a, h) {}
					R() {
						return this.t;
					}
					S(a) {
						if (this.r) throw new Error("Header already exists");
						!this.m ||
							!this.s ||
							((0, i.$ghb)(this.m, a),
							a.classList.add("header-or-footer"),
							a.classList.add("header"),
							(this.r = a),
							this.J?.setHeaderVisibility(!0),
							this.Y());
					}
					U(a) {
						if (this.u) throw new Error("Footer already exists");
						!this.m ||
							!this.s ||
							(this.m.appendChild(a),
							a.classList.add("header-or-footer"),
							a.classList.add("footer"),
							(this.u = a),
							this.J?.setFooterVisibility(!0),
							this.Y());
					}
					W() {
						this.r &&
							(this.r.remove(),
							(this.r = void 0),
							this.J?.setHeaderVisibility(!1),
							this.Y());
					}
					X() {
						this.u &&
							(this.u.remove(),
							(this.u = void 0),
							this.J?.setFooterVisibility(!1),
							this.Y());
					}
					Y() {
						this.dimension &&
							this.contentPosition &&
							this.layout(
								this.dimension.width,
								this.dimension.height,
								this.contentPosition.top,
								this.contentPosition.left,
							);
					}
					Z(a, h) {
						return (0, E.$wg)(this.J).layout(a, h);
					}
					get onDidChange() {
						return this.ab.event;
					}
					layout(a, h, c, n) {
						(this.f = new i.$pgb(a, h)), (this.g = { top: c, left: n });
					}
					setVisible(a) {
						this.j.fire(a);
					}
				}
				e.Part = d;
				class m {
					static {
						this.a = 35;
					}
					static {
						this.b = 35;
					}
					static {
						this.c = 35;
					}
					constructor(a, h) {
						(this.f = a), (this.g = h), (this.d = !1), (this.e = !1);
					}
					layout(a, h) {
						let c;
						this.f.hasTitle
							? (c = new i.$pgb(a, Math.min(h, m.b)))
							: (c = i.$pgb.None);
						let n;
						this.d ? (n = new i.$pgb(a, Math.min(h, m.a))) : (n = i.$pgb.None);
						let g;
						this.e ? (g = new i.$pgb(a, Math.min(h, m.c))) : (g = i.$pgb.None);
						let p = a;
						this.f &&
							typeof this.f.borderWidth == "function" &&
							(p -= this.f.borderWidth());
						const o = new i.$pgb(p, h - c.height - n.height - g.height);
						return (
							this.g && (0, i.size)(this.g, o.width, o.height),
							{ headerSize: n, titleSize: c, contentSize: o, footerSize: g }
						);
					}
					setFooterVisibility(a) {
						this.e = a;
					}
					setHeaderVisibility(a) {
						this.d = a;
					}
				}
				class r extends t.$fEb {
					constructor() {
						super(...arguments), (this.f = new Set());
					}
					get parts() {
						return Array.from(this.f);
					}
					registerPart(a) {
						return this.f.add(a), (0, C.$Yc)(() => this.g(a));
					}
					g(a) {
						this.f.delete(a);
					}
					getPart(a) {
						return this.j(a.ownerDocument);
					}
					j(a) {
						if (this.f.size > 1) {
							for (const h of this.f)
								if (h.element?.ownerDocument === a) return h;
						}
						return this.mainPart;
					}
					get activePart() {
						return this.j((0, i.$Ngb)());
					}
				}
				e.$lEb = r;
			},
		),
		define(
			de[217],
			he([1, 0, 1701, 44, 21, 59, 9, 6, 28, 548, 19, 249, 3, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KEb = e.$JEb = void 0);
				class n extends t.$gEb {
					static {
						this.U = new Map();
					}
					get minimumWidth() {
						return r.$DEb.width;
					}
					get maximumWidth() {
						return r.$EEb.width;
					}
					get minimumHeight() {
						return r.$DEb.height;
					}
					get maximumHeight() {
						return r.$EEb.height;
					}
					get input() {
						return this.W;
					}
					get options() {
						return this.X;
					}
					get window() {
						return (0, c.getWindowById)(this.group.windowId, !0).window;
					}
					get scopedContextKeyService() {}
					constructor(o, f, b, s, l) {
						super(o, b, s, l),
							(this.group = f),
							(this.onDidChangeSizeConstraints = d.Event.None),
							(this.S = this.D(new d.$re())),
							(this.onDidChangeControl = this.S.event);
					}
					create(o) {
						super.create(o), this.Y(o);
					}
					async setInput(o, f, b, s) {
						(this.W = o), (this.X = f);
					}
					clearInput() {
						(this.W = void 0), (this.X = void 0);
					}
					setOptions(o) {
						this.X = o;
					}
					setVisible(o) {
						super.setVisible(o), this.Z(o);
					}
					Z(o) {}
					setBoundarySashes(o) {}
					ab(o, f, b, s = 10) {
						const l = `${this.getId()}${b}`;
						let y = n.U.get(l);
						return (
							y ||
								((y = this.D(
									new g(
										this.getId(),
										b,
										this.F(w.StorageScope.WORKSPACE, w.StorageTarget.MACHINE),
										s,
										o,
										f,
									),
								)),
								n.U.set(l, y)),
							y
						);
					}
					getViewState() {}
					I() {
						for (const [, o] of n.U) o.id === this.getId() && o.saveState();
						super.I();
					}
					dispose() {
						(this.W = void 0), (this.X = void 0), super.dispose();
					}
				}
				e.$JEb = n;
				class g extends h.$1c {
					static {
						this.a = -1;
					}
					constructor(o, f, b, s, l, y) {
						super(),
							(this.id = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.c = !1),
							(this.g = !1),
							this.s(void 0),
							this.r();
					}
					r() {
						this.D(this.q.onDidChangeConfiguration((o) => this.s(o)));
					}
					s(o) {
						(!o ||
							o.affectsConfiguration(
								void 0,
								"workbench.editor.sharedViewState",
							)) &&
							(this.g =
								this.q.getValue(void 0, "workbench.editor.sharedViewState") ===
								!0);
					}
					saveEditorState(o, f, b) {
						const s = this.t(f);
						if (!s || !o) return;
						const l = this.u();
						let y = l.get(s.toString());
						y || ((y = Object.create(null)), l.set(s.toString(), y)),
							(y[o.id] = b),
							this.g && (y[g.a] = b),
							(0, i.$r1)(f) && this.clearEditorStateOnDispose(s, f);
					}
					loadEditorState(o, f) {
						const b = this.t(f);
						if (!b || !o) return;
						const l = this.u().get(b.toString());
						if (l) {
							const y = l[o.id];
							if (y) return y;
							if (this.g) return l[g.a];
						}
					}
					clearEditorState(o, f) {
						(0, i.$r1)(o) && this.f?.delete(o);
						const b = this.t(o);
						if (b) {
							const s = this.u();
							if (f) {
								const l = s.get(b.toString());
								l && (delete l[f.id], (0, m.$yg)(l) && s.delete(b.toString()));
							} else s.delete(b.toString());
						}
					}
					clearEditorStateOnDispose(o, f) {
						this.f || (this.f = new Map()),
							this.f.has(f) ||
								this.f.set(
									f,
									d.Event.once(f.onWillDispose)(() => {
										this.clearEditorState(o), this.f?.delete(f);
									}),
								);
					}
					moveEditorState(o, f, b) {
						const s = this.u(),
							l = [...s.keys()];
						for (const y of l) {
							const $ = C.URI.parse(y);
							if (!b.isEqualOrParent($, o)) continue;
							let v;
							if ((0, u.$gh)(o, $)) v = f;
							else {
								const I = (0, a.$Sg)($.path, o.path);
								v = (0, u.$nh)(f, $.path.substr(I + o.path.length + 1));
							}
							const S = s.get(y, E.Touch.None);
							S && (s.delete(y), s.set(v.toString(), S));
						}
					}
					t(o) {
						return (0, i.$r1)(o) ? o.resource : o;
					}
					u() {
						if (!this.b) {
							this.b = new E.$Jc(this.m);
							const o = this.j[this.h];
							Array.isArray(o) && this.b.fromJSON(o);
						}
						return this.b;
					}
					saveState() {
						const o = this.u();
						this.c || (this.w(), (this.c = !0)), (this.j[this.h] = o.toJSON());
					}
					w() {
						const o = this.u(),
							f = [...o.entries()];
						for (const [b, s] of f)
							for (const l of Object.keys(s)) {
								const y = Number(l);
								(y === g.a && this.g) ||
									this.n.getGroup(y) ||
									(delete s[y], (0, m.$yg)(s) && o.delete(b));
							}
					}
				}
				e.$KEb = g;
			},
		),
		define(
			de[610],
			he([1, 0, 40, 163, 6, 3, 29, 50, 24, 488, 59]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
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
		define(
			de[2949],
			he([1, 0, 127, 4, 610, 3, 163, 40, 6]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i3c = void 0);
				class r extends E.$1c {
					constructor(a) {
						super(), (this.a = a);
						for (const h of a.notifications) this.f(h);
						this.b();
					}
					b() {
						this.D(this.a.onDidChangeNotification((a) => this.c(a)));
					}
					c(a) {
						a.kind === w.NotificationChangeType.ADD &&
							(this.f(a.item),
							a.item.severity === d.Severity.Error &&
								(a.item.message.original instanceof Error
									? console.error(a.item.message.original)
									: console.error(
											(0, C.$xj)(a.item.message.linkedText.toString(), !0),
										)));
					}
					f(a) {
						if (a.priority === d.NotificationPriority.SILENT) return;
						const h = a.onDidChangeContent((c) => {
							c.kind === w.NotificationViewItemContentChangeKind.MESSAGE &&
								this.g(a);
						});
						m.Event.once(a.onDidClose)(() => h.dispose()), this.g(a);
					}
					g(a) {
						let h;
						a.severity === d.Severity.Error
							? (h = (0, i.localize)(
									3590,
									null,
									a.message.linkedText.toString(),
								))
							: a.severity === d.Severity.Warning
								? (h = (0, i.localize)(
										3591,
										null,
										a.message.linkedText.toString(),
									))
								: (h = (0, i.localize)(
										3592,
										null,
										a.message.linkedText.toString(),
									)),
							(0, t.$oib)(h);
					}
				}
				e.$i3c = r;
			},
		),
		define(
			de[682],
			he([
				1, 0, 31, 8, 43, 27, 610, 11, 4, 93, 32, 1698, 100, 40, 5, 50, 136, 24,
				63, 3, 58, 184,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$52c =
						e.$22c =
						e.$12c =
						e.$Z2c =
						e.$Y2c =
						e.$X2c =
						e.$W2c =
						e.$V2c =
						e.$U2c =
						e.$T2c =
						e.$S2c =
							void 0),
					(e.$32c = k),
					(e.$42c = L),
					(e.$S2c = "notifications.showList"),
					(e.$T2c = "notifications.hideList");
				const y = "notifications.toggleList";
				e.$U2c = "notifications.hideToasts";
				const $ = "notifications.focusToasts",
					v = "notifications.focusNextToast",
					S = "notifications.focusPreviousToast",
					I = "notifications.focusFirstToast",
					T = "notifications.focusLastToast";
				(e.$V2c = "notification.collapse"),
					(e.$W2c = "notification.expand"),
					(e.$X2c = "notification.acceptPrimaryAction");
				const P = "notification.toggle";
				(e.$Y2c = "notification.clear"),
					(e.$Z2c = "notifications.clearAll"),
					(e.$12c = "notifications.toggleDoNotDisturbMode"),
					(e.$22c = "notifications.toggleDoNotDisturbModeBySource");
				function k(M, N) {
					if ((0, C.$Dwc)(N)) return N;
					const A = M.lastFocusedList;
					if (A instanceof r.$yMb) {
						let R = A.getFocusedElements()[0];
						if (
							((0, C.$Dwc)(R) || (A.isDOMFocused() && (R = A.element(0))),
							(0, C.$Dwc)(R))
						)
							return R;
					}
				}
				function L(M, N, A) {
					w.$TX.registerCommandAndKeybindingRule({
						id: e.$S2c,
						weight: w.KeybindingWeight.WorkbenchContrib,
						primary: (0, E.$os)(
							E.$ps,
							E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN,
						),
						mac: {
							primary: (0, E.$os)(
								E.$qs,
								E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN,
							),
						},
						handler: () => {
							N.hide(), M.show();
						},
					}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$T2c,
							weight: w.KeybindingWeight.WorkbenchContrib + 50,
							when: h.$oQb,
							primary: E.KeyCode.Escape,
							handler: (O) => {
								const B = O.get(u.$km);
								for (const U of A.notifications)
									U.visible &&
										B.publicLog2(
											"notification:hide",
											(0, a.$Q2c)(
												U.message.original,
												U.sourceId,
												U.priority === c.NotificationPriority.SILENT,
											),
										);
								M.hide();
							},
						}),
						t.$fk.registerCommand(y, () => {
							M.isVisible ? M.hide() : (N.hide(), M.show());
						}),
						t.$fk.registerCommand(s.$PX, (O, B) => {
							N.hideForMs(B);
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$Y2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.Delete,
							mac: { primary: E.KeyMod.CtrlCmd | E.KeyCode.Backspace },
							handler: (O, B) => {
								const U = O.get(l.$Owb),
									z = k(O.get(r.$fMb), B);
								z && !z.hasProgress && (z.close(), U.playSignal(l.$Twb.clear));
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$W2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.RightArrow,
							handler: (O, B) => {
								k(O.get(r.$fMb), B)?.expand();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$X2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.or(h.$nQb, h.$pQb),
							primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyA,
							handler: (O) => {
								const B = O.get(n.$Li).createInstance(D),
									U = k(O.get(r.$fMb)) || (0, o.$Sb)(A.notifications);
								if (!U) return;
								const z = U.actions?.primary
									? (0, o.$Sb)(U.actions.primary)
									: void 0;
								z && (B.run(z, U), U.close());
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$V2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.LeftArrow,
							handler: (O, B) => {
								k(O.get(r.$fMb), B)?.collapse();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: P,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.Space,
							secondary: [E.KeyCode.Enter],
							handler: (O) => {
								k(O.get(r.$fMb))?.toggle();
							},
						}),
						t.$fk.registerCommand(e.$U2c, (O) => {
							const B = O.get(u.$km);
							for (const U of A.notifications)
								U.visible &&
									B.publicLog2(
										"notification:hide",
										(0, a.$Q2c)(
											U.message.original,
											U.sourceId,
											U.priority === c.NotificationPriority.SILENT,
										),
									);
							N.hide();
						}),
						w.$TX.registerKeybindingRule({
							id: e.$U2c,
							weight: w.KeybindingWeight.WorkbenchContrib - 50,
							when: h.$pQb,
							primary: E.KeyCode.Escape,
						}),
						w.$TX.registerKeybindingRule({
							id: e.$U2c,
							weight: w.KeybindingWeight.WorkbenchContrib + 100,
							when: i.$Kj.and(h.$pQb, h.$nQb),
							primary: E.KeyCode.Escape,
						}),
						t.$fk.registerCommand($, () => N.focus()),
						w.$TX.registerCommandAndKeybindingRule({
							id: v,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.DownArrow,
							handler: () => {
								N.focusNext();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: S,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.UpArrow,
							handler: () => {
								N.focusPrevious();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: I,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.PageUp,
							secondary: [E.KeyCode.Home],
							handler: () => {
								N.focusFirst();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: T,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.PageDown,
							secondary: [E.KeyCode.End],
							handler: () => {
								N.focusLast();
							},
						}),
						t.$fk.registerCommand(e.$Z2c, () => M.clearAll()),
						t.$fk.registerCommand(e.$12c, (O) => {
							const B = O.get(c.$4N);
							B.setFilter(
								B.getFilter() === c.NotificationsFilter.ERROR
									? c.NotificationsFilter.OFF
									: c.NotificationsFilter.ERROR,
							);
						}),
						t.$fk.registerCommand(e.$22c, (O) => {
							const B = O.get(c.$4N),
								U = O.get(f.$DJ),
								z = B.getFilters().sort((H, q) =>
									H.label.localeCompare(q.label),
								),
								F = new b.$Zc(),
								x = F.add(U.createQuickPick());
							(x.items = z.map((H) => ({
								id: H.id,
								label: H.label,
								tooltip: `${H.label} (${H.id})`,
								filter: H.filter,
							}))),
								(x.canSelectMany = !0),
								(x.placeholder = (0, m.localize)(3600, null)),
								(x.selectedItems = x.items.filter(
									(H) => H.filter === c.NotificationsFilter.OFF,
								)),
								x.show(),
								F.add(
									x.onDidAccept(async () => {
										for (const H of x.items)
											B.setFilter({
												id: H.id,
												label: H.label,
												filter: x.selectedItems.includes(H)
													? c.NotificationsFilter.OFF
													: c.NotificationsFilter.ERROR,
											});
										x.hide();
									}),
								),
								F.add(x.onDidHide(() => F.dispose()));
						});
					const R = (0, m.localize2)(3601, "Notifications");
					d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
						command: {
							id: e.$S2c,
							title: (0, m.localize2)(3602, "Show Notifications"),
							category: R,
						},
					}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$T2c,
								title: (0, m.localize2)(3603, "Hide Notifications"),
								category: R,
							},
							when: h.$oQb,
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$Z2c,
								title: (0, m.localize2)(3604, "Clear All Notifications"),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$X2c,
								title: (0, m.localize2)(
									3605,
									"Accept Notification Primary Action",
								),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$12c,
								title: (0, m.localize2)(3606, "Toggle Do Not Disturb Mode"),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$22c,
								title: (0, m.localize2)(
									3607,
									"Toggle Do Not Disturb Mode By Source...",
								),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: $,
								title: (0, m.localize2)(3608, "Focus Notification Toast"),
								category: R,
							},
							when: h.$pQb,
						});
				}
				let D = class extends g.$sj {
					constructor(N, A) {
						super(), (this.c = N), (this.g = A);
					}
					async q(N, A) {
						this.c.publicLog2("workbenchActionExecuted", {
							id: N.id,
							from: "message",
						}),
							(0, C.$Dwc)(A) &&
								this.c.publicLog2("notification:actionExecuted", {
									id: (0, p.$Aj)(A.message.original.toString()).toString(),
									actionLabel: N.label,
									source: A.sourceId || "core",
									silent: A.priority === c.NotificationPriority.SILENT,
								});
						try {
							await super.q(N, A);
						} catch (R) {
							this.g.error(R);
						}
					}
				};
				(e.$52c = D), (e.$52c = D = Ne([j(0, u.$km), j(1, c.$4N)], D));
			},
		),
		define(
			de[2950],
			he([1, 0, 14, 26, 4, 178, 184, 31, 93, 682, 100]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o3c = void 0);
				class a {
					constructor() {
						(this.priority = 90),
							(this.name = "notifications"),
							(this.when = u.$nQb),
							(this.type = E.AccessibleViewType.View);
					}
					getProvider(n) {
						const g = n.get(E.$HLb),
							p = n.get(m.$fMb),
							o = n.get(d.$ek),
							f = n.get(C.$Owb);
						function b() {
							const s = (0, r.$32c)(p);
							if (!s) return;
							o.executeCommand("notifications.showList");
							let l;
							const y = p.lastFocusedList;
							if ((y instanceof m.$yMb && (l = y.indexOf(s)), l === void 0))
								return;
							function $() {
								if (
									(o.executeCommand("notifications.showList"),
									y && l !== void 0)
								) {
									y.domFocus();
									try {
										y.setFocus([l]);
									} catch {}
								}
							}
							function v() {
								const I = (0, r.$32c)(p),
									T = I?.message.original.toString();
								if (I)
									return I.source
										? (0, w.localize)(3569, null, T, I.source)
										: (0, w.localize)(3570, null, T);
							}
							const S = v();
							if (S)
								return (
									s.onDidClose(() => g.next()),
									new E.$ILb(
										E.AccessibleViewProviderId.Notification,
										{ type: E.AccessibleViewType.View },
										() => S,
										() => $(),
										"accessibility.verbosity.notification",
										void 0,
										h(s, f),
										() => {
											if (y) return $(), y.focusNext(), v();
										},
										() => {
											if (y) return $(), y.focusPrevious(), v();
										},
									)
								);
						}
						return b();
					}
				}
				e.$o3c = a;
				function h(c, n) {
					let g;
					if (
						(c.actions &&
							((g = []),
							c.actions.primary && g.push(...c.actions.primary),
							c.actions.secondary && g.push(...c.actions.secondary)),
						g)
					)
						for (const o of g) {
							o.class = i.ThemeIcon.asClassName(t.$ak.bell);
							const f = o.run;
							o.run = () => {
								f(), c.close();
							};
						}
					const p = g?.find((o) => o.label.includes("Manage Extension"));
					return (
						p && (p.class = i.ThemeIcon.asClassName(t.$ak.gear)),
						g &&
							g.push({
								id: "clearNotification",
								label: (0, w.localize)(3571, null),
								tooltip: (0, w.localize)(3572, null),
								run: () => {
									c.close(), n.playSignal(C.$Twb.clear);
								},
								enabled: !0,
								class: i.ThemeIcon.asClassName(t.$ak.clearAll),
							}),
						g
					);
				}
			},
		),
		define(
			de[1227],
			he([1, 0, 4, 50, 682, 31, 121, 14, 79, 26, 1516]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c3c =
						e.$b3c =
						e.$a3c =
						e.$_2c =
						e.$$2c =
						e.$02c =
						e.$92c =
						e.$82c =
						e.$72c =
						e.$62c =
							void 0);
				const u = (0, m.$$O)(
						"notifications-clear",
						d.$ak.close,
						(0, t.localize)(3573, null),
					),
					a = (0, m.$$O)(
						"notifications-clear-all",
						d.$ak.clearAll,
						(0, t.localize)(3574, null),
					),
					h = (0, m.$$O)(
						"notifications-hide",
						d.$ak.chevronDown,
						(0, t.localize)(3575, null),
					),
					c = (0, m.$$O)(
						"notifications-expand",
						d.$ak.chevronUp,
						(0, t.localize)(3576, null),
					),
					n = (0, m.$$O)(
						"notifications-collapse",
						d.$ak.chevronDown,
						(0, t.localize)(3577, null),
					),
					g = (0, m.$$O)(
						"notifications-configure",
						d.$ak.gear,
						(0, t.localize)(3578, null),
					),
					p = (0, m.$$O)(
						"notifications-do-not-disturb",
						d.$ak.bellSlash,
						(0, t.localize)(3579, null),
					);
				let o = class extends i.$rj {
					static {
						this.ID = w.$Y2c;
					}
					static {
						this.LABEL = (0, t.localize)(3580, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(u)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$Y2c, P);
					}
				};
				(e.$62c = o), (e.$62c = o = Ne([j(2, E.$ek)], o));
				let f = class extends i.$rj {
					static {
						this.ID = w.$Z2c;
					}
					static {
						this.LABEL = (0, t.localize)(3581, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(a)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$Z2c);
					}
				};
				(e.$72c = f), (e.$72c = f = Ne([j(2, E.$ek)], f));
				let b = class extends i.$rj {
					static {
						this.ID = w.$12c;
					}
					static {
						this.LABEL = (0, t.localize)(3582, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(p)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$12c);
					}
				};
				(e.$82c = b), (e.$82c = b = Ne([j(2, E.$ek)], b));
				let s = class extends i.$rj {
					static {
						this.ID = w.$22c;
					}
					static {
						this.LABEL = (0, t.localize)(3583, null);
					}
					constructor(P, k, L) {
						super(P, k), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$22c);
					}
				};
				(e.$92c = s), (e.$92c = s = Ne([j(2, E.$ek)], s));
				class l extends i.$rj {
					static {
						this.ID = "workbench.action.configureDoNotDisturbMode";
					}
					static {
						this.LABEL = (0, t.localize)(3584, null);
					}
					constructor(P, k) {
						super(P, k, r.ThemeIcon.asClassName(p));
					}
				}
				e.$02c = l;
				let y = class extends i.$rj {
					static {
						this.ID = w.$T2c;
					}
					static {
						this.LABEL = (0, t.localize)(3585, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(h)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$T2c);
					}
				};
				(e.$$2c = y), (e.$$2c = y = Ne([j(2, E.$ek)], y));
				let $ = class extends i.$rj {
					static {
						this.ID = w.$W2c;
					}
					static {
						this.LABEL = (0, t.localize)(3586, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(c)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$W2c, P);
					}
				};
				(e.$_2c = $), (e.$_2c = $ = Ne([j(2, E.$ek)], $));
				let v = class extends i.$rj {
					static {
						this.ID = w.$V2c;
					}
					static {
						this.LABEL = (0, t.localize)(3587, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(n)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$V2c, P);
					}
				};
				(e.$a3c = v), (e.$a3c = v = Ne([j(2, E.$ek)], v));
				class S extends i.$rj {
					static {
						this.ID = "workbench.action.configureNotification";
					}
					static {
						this.LABEL = (0, t.localize)(3588, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(g)), (this.notification = L);
					}
				}
				e.$b3c = S;
				let I = class extends i.$rj {
					static {
						this.ID = "workbench.action.copyNotificationMessage";
					}
					static {
						this.LABEL = (0, t.localize)(3589, null);
					}
					constructor(P, k, L) {
						super(P, k), (this.a = L);
					}
					run(P) {
						return this.a.writeText(P.message.raw);
					}
				};
				(e.$c3c = I), (e.$c3c = I = Ne([j(2, C.$Vxb)], I));
			},
		),
		define(
			de[2951],
			he([
				1, 0, 7, 41, 9, 4, 183, 105, 50, 5, 3, 49, 610, 1227, 39, 436, 40, 24,
				14, 26, 437, 265, 159, 6, 106, 27, 114, 95, 72,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				var k, L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$f3c = e.$e3c = e.$d3c = void 0);
				class D {
					static {
						this.a = 42;
					}
					static {
						this.b = 22;
					}
					constructor(O) {
						this.c = this.d(O);
					}
					d(O) {
						const B = document.createElement("div");
						return (
							B.classList.add("notification-offset-helper"), O.appendChild(B), B
						);
					}
					getHeight(O) {
						if (!O.expanded) return D.a;
						let B = D.a;
						const U = this.f(O);
						if (D.b < U) {
							const F = U - D.b;
							B += F;
						}
						return (
							(O.source || (0, o.$Pb)(O.actions && O.actions.primary)) &&
								(B += D.a),
							B === D.a && O.collapse(!0),
							B
						);
					}
					f(O) {
						let B = 0;
						O.hasProgress || B++,
							O.canCollapse && B++,
							(0, o.$Pb)(O.actions && O.actions.secondary) && B++,
							(this.c.style.width = `${450 - (40 + B * 30 - Math.max(B - 1, 0) * 4)}px`);
						const U = M.render(O.message);
						this.c.appendChild(U);
						const z = Math.max(this.c.offsetHeight, this.c.scrollHeight);
						return (0, t.$9fb)(this.c), z;
					}
					getTemplateId(O) {
						if (O instanceof h.$Fwc) return N.TEMPLATE_ID;
						throw new Error("unknown element type: " + O);
					}
				}
				e.$d3c = D;
				class M {
					static render(O, B) {
						const U = document.createElement("span");
						for (const z of O.linkedText.nodes)
							if (typeof z == "string")
								U.appendChild(document.createTextNode(z));
							else {
								let F = z.title;
								!F && z.href.startsWith("command:")
									? (F = (0, E.localize)(3631, null, z.href.substr(8)))
									: F || (F = z.href);
								const x = (0, t.$)(
									"a",
									{ href: z.href, title: F, tabIndex: 0 },
									z.label,
								);
								if (B) {
									const H = (J) => {
											(0, t.$_gb)(J) && t.$ahb.stop(J, !0), B.callback(z.href);
										},
										q = B.toDispose.add(new l.$mib(x, t.$$gb.CLICK)).event,
										V = B.toDispose.add(new l.$mib(x, t.$$gb.KEY_DOWN)).event,
										G = $.Event.chain(V, (J) =>
											J.filter((W) => {
												const X = new I.$7fb(W);
												return (
													X.equals(S.KeyCode.Space) || X.equals(S.KeyCode.Enter)
												);
											}),
										);
									B.toDispose.add(y.$Qhb.addTarget(x));
									const K = B.toDispose.add(
										new l.$mib(x, y.EventType.Tap),
									).event;
									$.Event.any(q, K, G)(H, null, B.toDispose);
								}
								U.appendChild(x);
							}
						return U;
					}
				}
				let N = class {
					static {
						k = this;
					}
					static {
						this.TEMPLATE_ID = "notification";
					}
					constructor(O, B, U, z) {
						(this.a = O), (this.b = B), (this.c = U), (this.d = z);
					}
					get templateId() {
						return k.TEMPLATE_ID;
					}
					renderTemplate(O) {
						const B = Object.create(null);
						(B.toDispose = new u.$Zc()),
							(B.container = document.createElement("div")),
							B.container.classList.add("notification-list-item"),
							(B.mainRow = document.createElement("div")),
							B.mainRow.classList.add("notification-list-item-main-row"),
							(B.icon = document.createElement("div")),
							B.icon.classList.add("notification-list-item-icon", "codicon"),
							(B.message = document.createElement("div")),
							B.message.classList.add("notification-list-item-message");
						const U = this,
							z = document.createElement("div");
						return (
							z.classList.add("notification-list-item-toolbar-container"),
							(B.toolbar = new d.$eib(z, {
								ariaLabel: (0, E.localize)(3632, null),
								actionViewItemProvider: (F, x) => {
									if (F instanceof c.$b3c)
										return B.toDispose.add(
											new s.$Pob(
												F,
												{
													getActions() {
														const H = [],
															q = {
																id: F.notification.sourceId,
																label: F.notification.source,
															};
														if ((0, p.$5N)(q)) {
															const V =
																U.d.getFilter(q) ===
																p.NotificationsFilter.ERROR;
															H.push(
																(0, m.$wj)({
																	id: q.id,
																	label: V
																		? (0, E.localize)(3633, null, q.label)
																		: (0, E.localize)(3634, null, q.label),
																	run: () =>
																		U.d.setFilter({
																			...q,
																			filter: V
																				? p.NotificationsFilter.OFF
																				: p.NotificationsFilter.ERROR,
																		}),
																}),
															),
																F.notification.actions?.secondary?.length &&
																	H.push(new m.$tj());
														}
														return (
															Array.isArray(
																F.notification.actions?.secondary,
															) && H.push(...F.notification.actions.secondary),
															H
														);
													},
												},
												this.b,
												{ ...x, actionRunner: this.a, classNames: F.class },
											),
										);
								},
								actionRunner: this.a,
							})),
							B.toDispose.add(B.toolbar),
							(B.detailsRow = document.createElement("div")),
							B.detailsRow.classList.add("notification-list-item-details-row"),
							(B.source = document.createElement("div")),
							B.source.classList.add("notification-list-item-source"),
							(B.buttonsContainer = document.createElement("div")),
							B.buttonsContainer.classList.add(
								"notification-list-item-buttons-container",
							),
							O.appendChild(B.container),
							B.container.appendChild(B.detailsRow),
							B.detailsRow.appendChild(B.source),
							B.detailsRow.appendChild(B.buttonsContainer),
							B.container.appendChild(B.mainRow),
							B.mainRow.appendChild(B.icon),
							B.mainRow.appendChild(B.message),
							B.mainRow.appendChild(z),
							(B.progress = new g.$bpb(O, v.$nyb)),
							B.toDispose.add(B.progress),
							(B.renderer = this.c.createInstance(A, B, this.a)),
							B.toDispose.add(B.renderer),
							B
						);
					}
					renderElement(O, B, U) {
						U.renderer.setInput(O);
					}
					disposeTemplate(O) {
						(0, u.$Vc)(O.toDispose);
					}
				};
				(e.$e3c = N),
					(e.$e3c = N = k = Ne([j(1, a.$Xxb), j(2, r.$Li), j(3, p.$4N)], N));
				let A = class extends u.$1c {
					static {
						L = this;
					}
					static {
						this.f = [p.Severity.Info, p.Severity.Warning, p.Severity.Error];
					}
					constructor(O, B, U, z, F, x, H) {
						super(),
							(this.h = O),
							(this.j = B),
							(this.m = U),
							(this.n = z),
							(this.q = F),
							(this.r = x),
							(this.s = H),
							(this.g = this.D(new u.$Zc())),
							L.a ||
								((L.a = z.createInstance(c.$62c, c.$62c.ID, c.$62c.LABEL)),
								(L.b = z.createInstance(c.$_2c, c.$_2c.ID, c.$_2c.LABEL)),
								(L.c = z.createInstance(c.$a3c, c.$a3c.ID, c.$a3c.LABEL)));
					}
					setInput(O) {
						this.g.clear(), this.t(O);
					}
					t(O) {
						this.h.container.classList.toggle("expanded", O.expanded),
							this.g.add(
								(0, t.$0fb)(this.h.container, t.$$gb.MOUSE_UP, (F) => {
									F.button === 1 && t.$ahb.stop(F, !0);
								}),
							),
							this.g.add(
								(0, t.$0fb)(this.h.container, t.$$gb.AUXCLICK, (F) => {
									!O.hasProgress &&
										F.button === 1 &&
										(t.$ahb.stop(F, !0), O.close());
								}),
							),
							this.u(O);
						const B = this.g.add(
								this.s.setupManagedHover(
									(0, T.$cib)("mouse"),
									this.h.message,
									"",
								),
							),
							U = this.w(O, B);
						this.y(O, U);
						const z = this.g.add(
							this.s.setupManagedHover((0, T.$cib)("mouse"), this.h.source, ""),
						);
						this.z(O, z),
							this.C(O),
							this.F(O),
							this.g.add(
								O.onDidChangeContent((F) => {
									switch (F.kind) {
										case h.NotificationViewItemContentChangeKind.SEVERITY:
											this.u(O);
											break;
										case h.NotificationViewItemContentChangeKind.PROGRESS:
											this.F(O);
											break;
										case h.NotificationViewItemContentChangeKind.MESSAGE:
											this.w(O, B);
											break;
									}
								}),
							);
					}
					u(O) {
						L.f.forEach((B) => {
							O.severity !== B &&
								this.h.icon.classList.remove(
									...b.ThemeIcon.asClassNameArray(this.G(B)),
								);
						}),
							this.h.icon.classList.add(
								...b.ThemeIcon.asClassNameArray(this.G(O.severity)),
							);
					}
					w(O, B) {
						(0, t.$9fb)(this.h.message),
							this.h.message.appendChild(
								M.render(O.message, {
									callback: (z) =>
										this.m.open(w.URI.parse(z), { allowCommands: !0 }),
									toDispose: this.g,
								}),
							);
						const U =
							O.canCollapse &&
							!O.expanded &&
							this.h.message.scrollWidth > this.h.message.clientWidth;
						return B.update(U ? this.h.message.textContent + "" : ""), U;
					}
					y(O, B) {
						const U = [];
						if ((0, o.$Pb)(O.actions?.secondary)) {
							const F = this.n.createInstance(
								c.$b3c,
								c.$b3c.ID,
								c.$b3c.LABEL,
								O,
							);
							U.push(F), this.g.add(F);
						}
						let z = !1;
						O.canCollapse && (O.expanded || O.source || B) && (z = !0),
							z && U.push(O.expanded ? L.c : L.b),
							O.hasProgress || U.push(L.a),
							this.h.toolbar.clear(),
							(this.h.toolbar.context = O),
							U.forEach((F) =>
								this.h.toolbar.push(F, {
									icon: !0,
									label: !1,
									keybinding: this.H(F),
								}),
							);
					}
					z(O, B) {
						O.expanded && O.source
							? ((this.h.source.textContent = (0, E.localize)(
									3635,
									null,
									O.source,
								)),
								B.update(O.source))
							: ((this.h.source.textContent = ""), B.update(""));
					}
					C(O) {
						(0, t.$9fb)(this.h.buttonsContainer);
						const B = O.actions ? O.actions.primary : void 0;
						if (O.expanded && (0, o.$Pb)(B)) {
							const U = this,
								z = new (class extends m.$sj {
									async q(x) {
										U.j.run(x, O),
											(!(x instanceof h.$Gwc) || !x.keepOpen) && O.close();
									}
								})(),
								F = this.g.add(new C.$rob(this.h.buttonsContainer));
							for (let x = 0; x < B.length; x++) {
								const H = B[x],
									q = { title: !0, secondary: x > 0, ...v.$lyb },
									V = H instanceof h.$Gwc ? H.menu : void 0,
									G = this.g.add(
										V
											? F.addButtonWithDropdown({
													...q,
													contextMenuProvider: this.r,
													actions: V,
													actionRunner: z,
												})
											: F.addButton(q),
									);
								(G.label = H.label),
									this.g.add(
										G.onDidClick((K) => {
											K && t.$ahb.stop(K, !0), z.run(H);
										}),
									);
							}
						}
					}
					F(O) {
						if (!O.hasProgress) {
							this.h.progress.stop().hide();
							return;
						}
						const B = O.progress.state;
						B.infinite
							? this.h.progress.infinite().show()
							: typeof B.total == "number" || typeof B.worked == "number"
								? (typeof B.total == "number" &&
										!this.h.progress.hasTotal() &&
										this.h.progress.total(B.total),
									typeof B.worked == "number" &&
										this.h.progress.setWorked(B.worked).show())
								: this.h.progress.done().hide();
					}
					G(O) {
						switch (O) {
							case p.Severity.Warning:
								return f.$ak.warning;
							case p.Severity.Error:
								return f.$ak.error;
						}
						return f.$ak.info;
					}
					H(O) {
						const B = this.q.lookupKeybinding(O.id);
						return B ? B.getLabel() : null;
					}
				};
				(e.$f3c = A),
					(e.$f3c =
						A =
						L =
							Ne(
								[
									j(2, i.$7rb),
									j(3, r.$Li),
									j(4, n.$uZ),
									j(5, a.$Xxb),
									j(6, P.$Uyb),
								],
								A,
							));
			},
		),
		define(
			de[970],
			he([1, 0, 9, 82, 54, 6, 19, 3, 215, 25, 10, 23, 59, 249]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$0Y = void 0);
				let g = class extends d.$1c {
					static {
						n = this;
					}
					static {
						this.a = null;
					}
					constructor(o, f, b, s) {
						super(),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.b = this.D(new E.$re())),
							(this.onExpressionChange = this.b.event),
							(this.c = new Map()),
							(this.f = new Map()),
							this.q(!1),
							this.n();
					}
					n() {
						this.D(
							this.m.onDidChangeConfiguration((o) => {
								this.h(o) && this.q(!0);
							}),
						),
							this.D(this.j.onDidChangeWorkspaceFolders(() => this.q(!0)));
					}
					q(o) {
						let f = !1;
						for (const y of this.j.getWorkspace().folders) {
							const $ = y.uri.toString(),
								v = this.r(y.uri),
								S = this.f.get($);
							v
								? (!S || !(0, i.$zo)(S.expression, v.expression)) &&
									((f = !0),
									this.c.set($, (0, m.$Jk)(v.expression)),
									this.f.set($, v))
								: S && ((f = !0), this.c.delete($), this.f.delete($));
						}
						const b = new h.$Hc(
							this.j.getWorkspace().folders.map((y) => y.uri),
						);
						for (const [y] of this.f)
							y !== n.a &&
								(b.has(t.URI.parse(y)) ||
									(this.c.delete(y), this.f.delete(y), (f = !0)));
						const s = this.r(void 0),
							l = this.f.get(n.a);
						s
							? (!l || !(0, i.$zo)(l.expression, s.expression)) &&
								((f = !0),
								this.c.set(n.a, (0, m.$Jk)(s.expression)),
								this.f.set(n.a, s))
							: l && ((f = !0), this.c.delete(n.a), this.f.delete(n.a)),
							o && f && this.b.fire();
					}
					r(o) {
						const f = this.g(o);
						if (!f) return;
						const b = Object.keys(f);
						if (b.length === 0) return;
						let s = !1;
						const l = Object.create(null);
						for (const y of b) {
							s || (s = (0, w.$nc)(y));
							let $ = y;
							const v = (0, c.$Rg)($, !0);
							if (v) {
								const S = v.toLowerCase();
								v !== v.toLowerCase() && ($ = `${S}${$.substring(1)}`);
							}
							l[$] = f[y];
						}
						return { expression: l, hasAbsolutePath: s };
					}
					matches(o, f) {
						if (this.c.size === 0) return !1;
						const b = this.j.getWorkspaceFolder(o);
						let s, l;
						if (
							(b && this.c.has(b.uri.toString())
								? ((s = this.c.get(b.uri.toString())),
									(l = this.f.get(b.uri.toString())))
								: ((s = this.c.get(n.a)), (l = this.f.get(n.a))),
							!s)
						)
							return !1;
						let y;
						return (
							b ? (y = (0, C.$ph)(b.uri, o)) : (y = this.s(o)),
							typeof y == "string" && s(y, void 0, f)
								? !0
								: y !== this.s(o) && l?.hasAbsolutePath
									? !!s(this.s(o), void 0, f)
									: !1
						);
					}
					s(o) {
						return o.scheme === a.Schemas.file ? o.fsPath : o.path;
					}
				};
				(e.$0Y = g), (e.$0Y = g = n = Ne([j(2, r.$Vi), j(3, u.$gj)], g));
			},
		),
		