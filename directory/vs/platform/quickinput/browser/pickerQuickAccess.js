define(de[392], he([1, 0, 15, 33, 3, 28]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$GLb = e.TriggerAction = void 0);
			var C;
			(function (u) {
				(u[(u.NO_ACTION = 0)] = "NO_ACTION"),
					(u[(u.CLOSE_PICKER = 1)] = "CLOSE_PICKER"),
					(u[(u.REFRESH_PICKER = 2)] = "REFRESH_PICKER"),
					(u[(u.REMOVE_ITEM = 3)] = "REMOVE_ITEM");
			})(C || (e.TriggerAction = C = {}));
			function d(u) {
				const a = u;
				return Array.isArray(a.items);
			}
			function m(u) {
				const a = u;
				return !!a.picks && a.additionalPicks instanceof Promise;
			}
			class r extends w.$1c {
				constructor(a, h) {
					super(), (this.c = a), (this.f = h);
				}
				provide(a, h, c) {
					const n = new w.$Zc();
					(a.canAcceptInBackground = !!this.f?.canAcceptInBackground),
						(a.matchOnLabel =
							a.matchOnDescription =
							a.matchOnDetail =
							a.sortByLabel =
								!1);
					let g;
					const p = n.add(new w.$2c()),
						o = async () => {
							const b = (p.value = new w.$Zc());
							g?.dispose(!0), (a.busy = !1), (g = new i.$Ce(h));
							const s = g.token;
							let l = a.value.substring(this.c.length);
							this.f?.shouldSkipTrimPickFilter || (l = l.trim());
							const y = this.g(l, b, s, c),
								$ = (S, I) => {
									let T, P;
									if (
										(d(S) ? ((T = S.items), (P = S.active)) : (T = S),
										T.length === 0)
									) {
										if (I) return !1;
										(l.length > 0 || a.hideInput) &&
											this.f?.noResultsPick &&
											((0, E.$zg)(this.f.noResultsPick)
												? (T = [this.f.noResultsPick(l)])
												: (T = [this.f.noResultsPick]));
									}
									return (a.items = T), P && (a.activeItems = [P]), !0;
								},
								v = async (S) => {
									let I = !1,
										T = !1;
									await Promise.all([
										(async () => {
											(typeof S.mergeDelay == "number" &&
												(await (0, t.$Nh)(S.mergeDelay),
												s.isCancellationRequested)) ||
												T ||
												(I = $(S.picks, !0));
										})(),
										(async () => {
											a.busy = !0;
											try {
												const P = await S.additionalPicks;
												if (s.isCancellationRequested) return;
												let k, L;
												d(S.picks)
													? ((k = S.picks.items), (L = S.picks.active))
													: (k = S.picks);
												let D, M;
												if (
													(d(P) ? ((D = P.items), (M = P.active)) : (D = P),
													D.length > 0 || !I)
												) {
													let N;
													if (!L && !M) {
														const A = a.activeItems[0];
														A && k.indexOf(A) !== -1 && (N = A);
													}
													$({ items: [...k, ...D], active: L || M || N });
												}
											} finally {
												s.isCancellationRequested || (a.busy = !1), (T = !0);
											}
										})(),
									]);
								};
							if (y !== null)
								if (m(y)) await v(y);
								else if (!(y instanceof Promise)) $(y);
								else {
									a.busy = !0;
									try {
										const S = await y;
										if (s.isCancellationRequested) return;
										m(S) ? await v(S) : $(S);
									} finally {
										s.isCancellationRequested || (a.busy = !1);
									}
								}
						};
					n.add(a.onDidChangeValue(() => o())),
						o(),
						n.add(
							a.onDidAccept((b) => {
								if (c?.handleAccept) {
									b.inBackground || a.hide(),
										c.handleAccept?.(a.activeItems[0]);
									return;
								}
								const [s] = a.selectedItems;
								typeof s?.accept == "function" &&
									(b.inBackground || a.hide(), s.accept(a.keyMods, b));
							}),
						);
					const f = async (b, s) => {
						if (typeof s.trigger != "function") return;
						const l = s.buttons?.indexOf(b) ?? -1;
						if (l >= 0) {
							const y = s.trigger(l, a.keyMods),
								$ = typeof y == "number" ? y : await y;
							if (h.isCancellationRequested) return;
							switch ($) {
								case C.NO_ACTION:
									break;
								case C.CLOSE_PICKER:
									a.hide();
									break;
								case C.REFRESH_PICKER:
									o();
									break;
								case C.REMOVE_ITEM: {
									const v = a.items.indexOf(s);
									if (v !== -1) {
										const S = a.items.slice(),
											I = S.splice(v, 1),
											T = a.activeItems.filter((k) => k !== I[0]),
											P = a.keepScrollPosition;
										(a.keepScrollPosition = !0),
											(a.items = S),
											T && (a.activeItems = T),
											(a.keepScrollPosition = P);
									}
									break;
								}
							}
						}
					};
					return (
						n.add(
							a.onDidTriggerItemButton(({ button: b, item: s }) => f(b, s)),
						),
						n.add(
							a.onDidTriggerSeparatorButton(({ button: b, separator: s }) =>
								f(b, s),
							),
						),
						n
					);
				}
			}
			e.$GLb = r;
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[2750],
		he([1, 0, 7, 932, 292, 3, 111, 1138]),
		function (ce, e, t, i, w, E, C) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$rxc = void 0),
				(t = mt(t)),
				(C = xi(C));
			const d = t.$;
			class m extends E.$1c {
				constructor(u, a, h) {
					super(),
						(this.c = u),
						(this.onKeyDown = (n) =>
							t.$$fb(this.b.inputBox.inputElement, t.$$gb.KEY_DOWN, n)),
						(this.onMouseDown = (n) =>
							t.$$fb(this.b.inputBox.inputElement, t.$$gb.MOUSE_DOWN, n)),
						(this.onDidChange = (n) => this.b.onDidChange(n)),
						(this.a = t.$fhb(this.c, d(".quick-input-box"))),
						(this.b = this.D(
							new i.$Uob(this.a, void 0, {
								label: "",
								inputBoxStyles: a,
								toggleStyles: h,
							}),
						));
					const c = this.b.inputBox.inputElement;
					(c.role = "combobox"),
						(c.ariaHasPopup = "menu"),
						(c.ariaAutoComplete = "list"),
						(c.ariaExpanded = "true");
				}
				get value() {
					return this.b.getValue();
				}
				set value(u) {
					this.b.setValue(u);
				}
				select(u = null) {
					this.b.inputBox.select(u);
				}
				getSelection() {
					return this.b.inputBox.getSelection();
				}
				isSelectionAtEnd() {
					return this.b.inputBox.isSelectionAtEnd();
				}
				setPlaceholder(u) {
					this.b.inputBox.setPlaceHolder(u);
				}
				get placeholder() {
					return this.b.inputBox.inputElement.getAttribute("placeholder") || "";
				}
				set placeholder(u) {
					this.b.inputBox.setPlaceHolder(u);
				}
				get password() {
					return this.b.inputBox.inputElement.type === "password";
				}
				set password(u) {
					this.b.inputBox.inputElement.type = u ? "password" : "text";
				}
				set enabled(u) {
					this.b.inputBox.inputElement.toggleAttribute("readonly", !u);
				}
				set toggles(u) {
					this.b.setAdditionalToggles(u);
				}
				hasFocus() {
					return this.b.inputBox.hasFocus();
				}
				setAttribute(u, a) {
					this.b.inputBox.inputElement.setAttribute(u, a);
				}
				removeAttribute(u) {
					this.b.inputBox.inputElement.removeAttribute(u);
				}
				showDecoration(u) {
					u === C.default.Ignore
						? this.b.clearMessage()
						: this.b.showMessage({
								type:
									u === C.default.Info
										? w.MessageType.INFO
										: u === C.default.Warning
											? w.MessageType.WARNING
											: w.MessageType.ERROR,
								content: "",
							});
				}
				stylesForType(u) {
					return this.b.inputBox.stylesForType(
						u === C.default.Info
							? w.MessageType.INFO
							: u === C.default.Warning
								? w.MessageType.WARNING
								: w.MessageType.ERROR,
					);
				}
				setFocus() {
					this.b.focus();
				}
				layout() {
					this.b.inputBox.layout();
				}
			}
			e.$rxc = m;
		},
	),
		define(
			de[1625],
			he([1, 0, 7, 265, 6, 114, 159, 182, 584, 27, 488, 4, 1138]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sxc = g),
					(e.$txc = p),
					(t = mt(t));
				const h = {},
					c = new m.$Rdb("quick-input-button-icon-");
				function n(o) {
					if (!o) return;
					let f;
					const b = o.dark.toString();
					return (
						h[b]
							? (f = h[b])
							: ((f = c.nextId()),
								t.$Wgb(
									`.${f}, .hc-light .${f}`,
									`background-image: ${t.$vhb(o.light || o.dark)}`,
								),
								t.$Wgb(
									`.vs-dark .${f}, .hc-black .${f}`,
									`background-image: ${t.$vhb(o.dark)}`,
								),
								(h[b] = f)),
						f
					);
				}
				function g(o, f, b) {
					let s = o.iconClass || n(o.iconPath);
					return (
						o.alwaysVisible &&
							(s = s ? `${s} always-visible` : "always-visible"),
						{
							id: f,
							label: "",
							tooltip: o.tooltip || "",
							class: s,
							enabled: !0,
							run: b,
						}
					);
				}
				function p(o, f, b) {
					t.$hhb(f);
					const s = (0, u.$Zpb)(o);
					let l = 0;
					for (const y of s.nodes)
						if (typeof y == "string") f.append(...(0, d.$Sib)(y));
						else {
							let $ = y.title;
							!$ && y.href.startsWith("command:")
								? ($ = (0, a.localize)(2059, null, y.href.substring(8)))
								: $ || ($ = y.href);
							const v = t.$(
								"a",
								{ href: y.href, title: $, tabIndex: l++ },
								y.label,
							);
							v.style.textDecoration = "underline";
							const S = (L) => {
									t.$_gb(L) && t.$ahb.stop(L, !0), b.callback(y.href);
								},
								I = b.disposables.add(new i.$mib(v, t.$$gb.CLICK)).event,
								T = b.disposables.add(new i.$mib(v, t.$$gb.KEY_DOWN)).event,
								P = w.Event.chain(T, (L) =>
									L.filter((D) => {
										const M = new E.$7fb(D);
										return (
											M.equals(r.KeyCode.Space) || M.equals(r.KeyCode.Enter)
										);
									}),
								);
							b.disposables.add(C.$Qhb.addTarget(v));
							const k = b.disposables.add(new i.$mib(v, C.EventType.Tap)).event;
							w.Event.any(I, k, P)(S, null, b.disposables), f.appendChild(v);
						}
				}
			},
		),
		define(
			de[2751],
			he([1, 0, 2, 2, 2749, 75, 740]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Jxc = d);
				function d(m, r, u) {
					const a = E.$Bfb.document.createElement("div");
					a.classList.add("quick-input-preview-box"), m.appendChild(a);
					const h = C.$ujb.get(E.$Bfb);
					return {
						dispose: (0, i.render)(
							() =>
								(0, t.createComponent)(i.Portal, {
									mount: h,
									get children() {
										return (0, t.createComponent)(w.$Ixc, {
											item: r,
											container: m,
											reactiveStorageService: u,
										});
									},
								}),
							a,
						),
					};
				}
			},
		),
		