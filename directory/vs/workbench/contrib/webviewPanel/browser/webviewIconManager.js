define(de[3441], he([1, 0, 7, 3, 10, 52]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$V4b = void 0),
				(t = mt(t));
			let C = class extends i.$1c {
				constructor(m, r) {
					super(),
						(this.c = m),
						(this.f = r),
						(this.a = new Map()),
						this.D(
							this.f.onDidChangeConfiguration((u) => {
								u.affectsConfiguration("workbench.iconTheme") && this.h();
							}),
						);
				}
				dispose() {
					super.dispose(), (this.b = void 0);
				}
				get g() {
					return (
						this.b ||
							((this.b = t.$Rgb(void 0, void 0, this.B)),
							(this.b.className = "webview-icons")),
						this.b
					);
				}
				setIcons(m, r) {
					r ? this.a.set(m, r) : this.a.delete(m), this.h();
				}
				async h() {
					await this.c.when(E.LifecyclePhase.Starting);
					const m = [];
					if (this.f.getValue("workbench.iconTheme") !== null)
						for (const [r, u] of this.a) {
							const a = `.show-file-icons .webview-${r}-name-file-icon::before`;
							try {
								m.push(
									`.monaco-workbench.vs ${a}, .monaco-workbench.hc-light ${a} { content: ""; background-image: ${t.$vhb(u.light)}; }`,
									`.monaco-workbench.vs-dark ${a}, .monaco-workbench.hc-black ${a} { content: ""; background-image: ${t.$vhb(u.dark)}; }`,
								);
							} catch {}
						}
					this.g.textContent = m.join(`
`);
				}
			};
			(e.$V4b = C), (e.$V4b = C = Ne([j(0, E.$n6), j(1, w.$gj)], C));
		}),
		define(
			de[623],
			he([
				1, 0, 15, 33, 138, 29, 6, 103, 3, 116, 5, 296, 355, 1025, 3441, 66, 18,
				566,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$snc = e.$rnc = e.$qnc = void 0),
					(e.$qnc = (0, u.$Mi)("webviewEditorService"));
				function f(y, $) {
					return y.canResolve($);
				}
				let b = class extends o.$W4b {
					constructor($, v, S) {
						super($, v, S.iconManager), (this.w = S), (this.t = !1);
					}
					dispose() {
						super.dispose(), this.u?.cancel(), (this.u = void 0);
					}
					async resolve() {
						if (!this.t) {
							(this.t = !0),
								(this.u = (0, t.$zh)(($) => this.w.resolveWebview(this, $)));
							try {
								await this.u;
							} catch ($) {
								if (!(0, E.$8)($)) throw $;
							}
						}
						return super.resolve();
					}
					s($) {
						if (super.s($)) return ($.t = this.t), $;
					}
				};
				(e.$rnc = b),
					Ne([w.$ei], b.prototype, "resolve", null),
					(e.$rnc = b = Ne([j(2, e.$qnc)], b));
				class s {
					constructor() {
						this.a = [];
					}
					enqueueForRestoration($, v) {
						const S = new t.$0h(),
							I = () => {
								const P = this.a.findIndex((k) => $ === k.input);
								P >= 0 && this.a.splice(P, 1);
							},
							T = (0, m.$Xc)(
								$.webview.onDidDispose(I),
								v.onCancellationRequested(() => {
									I(), S.cancel();
								}),
							);
						return this.a.push({ input: $, promise: S, disposable: T }), S.p;
					}
					reviveFor($, v) {
						const S = this.a.filter(({ input: I }) => f($, I));
						this.a = this.a.filter(({ input: I }) => !f($, I));
						for (const { input: I, promise: T, disposable: P } of S)
							$.resolveWebview(I, v)
								.then(
									(k) => T.complete(k),
									(k) => T.error(k),
								)
								.finally(() => {
									P.dispose();
								});
					}
				}
				let l = class extends m.$1c {
					constructor($, v, S, I) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.a = new Set()),
							(this.b = new s()),
							(this.m = this.D(new C.$re())),
							(this.onDidChangeActiveWebviewEditor = this.m.event),
							(this.c = this.D(this.g.createInstance(n.$V4b))),
							this.D(
								$.registerContextKeyProvider({
									contextKey: c.$onc,
									getGroupContextKeyValue: (T) => this.n(T.activeEditor),
								}),
							),
							this.D(
								v.onDidActiveEditorChange(() => {
									this.q();
								}),
							),
							this.D(
								I.onDidChangeActiveWebview(() => {
									this.q();
								}),
							),
							this.q();
					}
					get iconManager() {
						return this.c;
					}
					n($) {
						let v;
						return (
							$ instanceof o.$W4b
								? (v = $)
								: $ instanceof a.$GVb &&
									($.primary instanceof o.$W4b
										? (v = $.primary)
										: $.secondary instanceof o.$W4b && (v = $.secondary)),
							v?.webview.providedViewType ?? ""
						);
					}
					q() {
						const $ = this.f.activeEditor;
						let v;
						$ instanceof o.$W4b
							? (v = $)
							: $ instanceof a.$GVb &&
								($.primary instanceof o.$W4b &&
								$.primary.webview === this.h.activeWebview
									? (v = $.primary)
									: $.secondary instanceof o.$W4b &&
										$.secondary.webview === this.h.activeWebview &&
										(v = $.secondary)),
							v !== this.j && ((this.j = v), this.m.fire(v));
					}
					openWebview($, v, S, I) {
						const T = this.h.createWebviewOverlay($),
							P = this.g.createInstance(
								o.$W4b,
								{ viewType: v, name: S, providedId: $.providedViewType },
								T,
								this.iconManager,
							);
						return (
							this.f.openEditor(
								P,
								{
									pinned: !0,
									preserveFocus: I.preserveFocus,
									activation: I.preserveFocus
										? r.EditorActivation.RESTORE
										: void 0,
								},
								I.group,
							),
							P
						);
					}
					revealWebview($, v, S) {
						const I = this.r($);
						this.f.openEditor(
							I,
							{
								preserveFocus: S,
								activation: S ? r.EditorActivation.RESTORE : void 0,
							},
							v,
						);
					}
					r($) {
						for (const v of this.f.editors)
							if (
								v === $ ||
								(v instanceof a.$GVb && ($ === v.primary || $ === v.secondary))
							)
								return v;
						return $;
					}
					openRevivedWebview($) {
						const v = this.h.createWebviewOverlay($.webviewInitInfo);
						v.state = $.state;
						const S = this.g.createInstance(
							b,
							{
								viewType: $.viewType,
								providedId: $.webviewInitInfo.providedViewType,
								name: $.title,
							},
							v,
						);
						return (
							(S.iconPath = $.iconPath),
							typeof $.group == "number" && S.updateGroup($.group),
							S
						);
					}
					registerResolver($) {
						this.a.add($);
						const v = new i.$Ce();
						return (
							this.b.reviveFor($, v.token),
							(0, m.$Yc)(() => {
								this.a.delete($), v.dispose(!0);
							})
						);
					}
					shouldPersist($) {
						return $ instanceof b
							? !0
							: d.Iterable.some(this.a.values(), (v) => f(v, $));
					}
					async s($, v) {
						for (const S of this.a.values())
							if (f(S, $)) return await S.resolveWebview($, v), !0;
						return !1;
					}
					async resolveWebview($, v) {
						if (!(await this.s($, v)) && !v.isCancellationRequested)
							return this.b.enqueueForRestoration($, v);
					}
					setIcons($, v) {
						this.c.setIcons($, v);
					}
				};
				(e.$snc = l),
					(e.$snc = l =
						Ne([j(0, g.$EY), j(1, p.$IY), j(2, u.$Li), j(3, h.$3Ib)], l));
			},
		),
		define(
			de[3442],
			he([
				1, 0, 29, 6, 3, 9, 47, 10, 45, 21, 32, 831, 88, 296, 355, 566, 623, 446,
				66, 18, 53,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Soc = void 0),
					(h = mt(h));
				class l {
					constructor() {
						(this.a = new Map()), (this.b = new Map());
					}
					add(T, P) {
						this.a.set(T, P), this.b.set(P, T);
					}
					getHandleForInput(T) {
						return this.b.get(T);
					}
					getInputForHandle(T) {
						return this.a.get(T);
					}
					delete(T) {
						const P = this.getInputForHandle(T);
						this.a.delete(T), P && this.b.delete(P);
					}
					get size() {
						return this.a.size;
					}
					[Symbol.iterator]() {
						return this.a.values();
					}
				}
				class y {
					constructor(T) {
						this.prefix = T;
					}
					fromExternal(T) {
						return this.prefix + T;
					}
					toExternal(T) {
						return T.startsWith(this.prefix)
							? T.substr(this.prefix.length)
							: void 0;
					}
				}
				let $ = class extends w.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.h = P),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.a = new y("mainThreadWebview-")),
							(this.c = new l()),
							(this.f = this.D(new w.$0c())),
							(this.g = new n.$6Ib("mainThreadWebviewPanel.origins", N)),
							(this.b = T.getProxy(h.$mbb.ExtHostWebviewPanels)),
							this.D(
								i.Event.any(
									D.onDidActiveEditorChange,
									D.onDidVisibleEditorsChange,
									L.onDidAddGroup,
									L.onDidRemoveGroup,
									L.onDidMoveGroup,
								)(() => {
									this.u(this.n.activeEditor);
								}),
							),
							this.D(
								R.onDidChangeActiveWebviewEditor((B) => {
									this.u(B);
								}),
							),
							this.D(
								R.registerResolver({
									canResolve: (B) => {
										const U = this.a.toExternal(B.viewType);
										return (
											typeof U == "string" &&
												M.activateByEvent(`onWebviewPanel:${U}`),
											!1
										);
									},
									resolveWebview: () => {
										throw new Error("not implemented");
									},
								}),
							);
					}
					get webviewInputs() {
						return this.c;
					}
					addWebviewInput(T, P, k) {
						this.c.add(T, P),
							this.h.addWebview(T, P.webview, k),
							P.webview.onDidDispose(() => {
								this.b.$onDidDisposeWebviewPanel(T).finally(() => {
									this.c.delete(T);
								});
							});
					}
					$createWebviewPanel(T, P, k, L, D) {
						const M =
							this.s.nonPersistentStorage
								.shouldBlockNewPanelsFromPoppingUpIfTimeIsLessThan;
						if (M !== void 0 && Date.now() < M) return;
						const N = this.t(D),
							A = D ? { preserveFocus: !!D.preserveFocus, group: N } : {},
							R = (0, a.$Mmc)(T),
							O = this.g.getOrigin(k, R.id),
							B = this.r.openWebview(
								{
									origin: O,
									providedViewType: k,
									title: L.title,
									options: S(L.panelOptions),
									contentOptions: (0, a.$Nmc)(L.webviewOptions),
									extension: R,
								},
								this.a.fromExternal(k),
								L.title,
								A,
							);
						this.addWebviewInput(P, B, {
							serializeBuffersForPostMessage: L.serializeBuffersForPostMessage,
						});
						const U = { extensionId: R.id.value, viewType: k };
						this.q.publicLog2("webviews:createWebviewPanel", U);
					}
					$disposeWebview(T) {
						const P = this.w(T);
						P && P.dispose();
					}
					$setTitle(T, P) {
						this.w(T)?.setName(P);
					}
					$setIconPath(T, P) {
						const k = this.w(T);
						k && (k.iconPath = v(P));
					}
					$reveal(T, P) {
						const k = this.w(T);
						if (!k || k.isDisposed()) return;
						const L = this.t(P);
						this.r.revealWebview(k, L, !!P.preserveFocus);
					}
					t(T) {
						if (
							typeof T.viewColumn > "u" ||
							T.viewColumn === b.$JY ||
							(this.m.count === 1 && this.m.activeGroup.isEmpty)
						)
							return b.$JY;
						if (T.viewColumn === b.$KY) return b.$KY;
						if (T.viewColumn >= 0) {
							const P = this.m.getGroups(f.GroupsOrder.GRID_APPEARANCE)[
								T.viewColumn
							];
							if (P) return P.id;
							const k = this.m.findGroup({ location: f.GroupLocation.LAST });
							if (k) {
								const L = (0, f.$HY)(this.j);
								return this.m.addGroup(k, L);
							}
						}
						return b.$JY;
					}
					$registerSerializer(T, P) {
						if (this.f.has(T))
							throw new Error(`Reviver for ${T} already registered`);
						this.f.set(
							T,
							this.r.registerResolver({
								canResolve: (k) => k.viewType === this.a.fromExternal(T),
								resolveWebview: async (k) => {
									const L = this.a.toExternal(k.viewType);
									if (!L) {
										k.webview.setHtml(
											this.h.getWebviewResolvedFailedContent(k.viewType),
										);
										return;
									}
									const D = (0, C.$9g)();
									this.addWebviewInput(D, k, P);
									let M;
									if (k.webview.state)
										try {
											M = JSON.parse(k.webview.state);
										} catch (N) {
											console.error(
												"Could not load webview state",
												N,
												k.webview.state,
											);
										}
									try {
										await this.b.$deserializeWebviewPanel(
											D,
											L,
											{
												title: k.getTitle(),
												state: M,
												panelOptions: k.webview.options,
												webviewOptions: k.webview.contentOptions,
												active: k === this.n.activeEditor,
											},
											(0, o.$b8)(this.m, k.group || 0),
										);
									} catch (N) {
										(0, t.$4)(N),
											k.webview.setHtml(
												this.h.getWebviewResolvedFailedContent(L),
											);
									}
								},
							}),
						);
					}
					$unregisterSerializer(T) {
						if (!this.f.has(T))
							throw new Error(`No reviver for ${T} registered`);
						this.f.deleteAndDispose(T);
					}
					u(T) {
						if (!this.c.size) return;
						const P = {},
							k = (L, D, M) => {
								if (!(M instanceof g.$W4b)) return;
								M.updateGroup(L.id);
								const N = this.c.getHandleForInput(M);
								N &&
									(P[N] = {
										visible: D === L.activeEditor,
										active: M === T,
										position: (0, o.$b8)(this.m, L.id),
									});
							};
						for (const L of this.m.groups)
							for (const D of L.editors)
								D instanceof c.$GVb
									? (k(L, D, D.primary), k(L, D, D.secondary))
									: k(L, D, D);
						Object.keys(P).length &&
							this.b.$onDidChangeWebviewPanelViewStates(P);
					}
					w(T) {
						return this.c.getInputForHandle(T);
					}
				};
				(e.$Soc = $),
					(e.$Soc = $ =
						Ne(
							[
								j(2, d.$gj),
								j(3, f.$EY),
								j(4, b.$IY),
								j(5, s.$q2),
								j(6, r.$lq),
								j(7, u.$km),
								j(8, p.$qnc),
								j(9, m.$0zb),
							],
							$,
						));
				function v(I) {
					if (I)
						return { light: E.URI.revive(I.light), dark: E.URI.revive(I.dark) };
				}
				function S(I) {
					return {
						enableFindWidget: I.enableFindWidget,
						retainContextWhenHidden: I.retainContextWhenHidden,
					};
				}
			},
		),
		define(
			de[1831],
			he([1, 0, 9, 109, 566, 623]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Toc = void 0),
					(e.$Uoc = d),
					(e.$Voc = a),
					(e.$Woc = h);
				let C = class {
					static {
						this.ID = w.$W4b.typeId;
					}
					constructor(n) {
						this.a = n;
					}
					canSerialize(n) {
						return this.a.shouldPersist(n);
					}
					serialize(n) {
						if (!this.canSerialize(n)) return;
						const g = this.c(n);
						try {
							return JSON.stringify(g);
						} catch {
							return;
						}
					}
					deserialize(n, g) {
						const p = this.b(JSON.parse(g));
						return this.a.openRevivedWebview({
							webviewInitInfo: {
								providedViewType: p.providedId,
								origin: p.origin,
								title: p.title,
								options: p.webviewOptions,
								contentOptions: p.contentOptions,
								extension: p.extension,
							},
							viewType: p.viewType,
							title: p.title,
							iconPath: p.iconPath,
							state: p.state,
							group: p.group,
						});
					}
					b(n) {
						return {
							...n,
							extension: d(n.extensionId, n.extensionLocation),
							iconPath: m(n.iconPath),
							state: u(n.state),
							webviewOptions: n.options,
							contentOptions: h(n.options),
						};
					}
					c(n) {
						return {
							origin: n.webview.origin,
							viewType: n.viewType,
							providedId: n.providedId,
							title: n.getName(),
							options: { ...n.webview.options, ...n.webview.contentOptions },
							extensionLocation: n.extension?.location,
							extensionId: n.extension?.id.value,
							state: n.webview.state,
							iconPath: n.iconPath
								? { light: n.iconPath.light, dark: n.iconPath.dark }
								: void 0,
							group: n.group,
						};
					}
				};
				(e.$Toc = C), (e.$Toc = C = Ne([j(0, E.$qnc)], C));
				function d(c, n) {
					if (!c) return;
					const g = r(n);
					if (g) return { id: new i.$Gn(c), location: g };
				}
				function m(c) {
					if (!c) return;
					const n = r(c.light),
						g = r(c.dark);
					return n && g ? { light: n, dark: g } : void 0;
				}
				function r(c) {
					if (c)
						try {
							return typeof c == "string" ? t.URI.parse(c) : t.URI.from(c);
						} catch {
							return;
						}
				}
				function u(c) {
					return typeof c == "string" ? c : void 0;
				}
				function a(c) {
					return c;
				}
				function h(c) {
					return {
						...c,
						localResourceRoots: c.localResourceRoots?.map((n) => r(n)),
					};
				}
			},
		),
		define(
			de[3443],
			he([1, 0, 5, 52, 30, 55, 3316, 1786, 175]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const r = m.$n2.registerExtensionPoint(d.$AYc);
				let u = class {
					constructor(h) {
						h.createInstance(C.$BYc, r);
					}
				};
				(u = Ne([j(0, t.$Li)], u)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(u, i.LifecyclePhase.Restored);
			},
		),
		define(
			de[3444],
			he([1, 0, 121, 10, 57, 39, 180, 34, 110, 62, 55, 2945, 3219, 3, 5, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$idd = void 0);
				let p = class extends c.$1c {
					static {
						this.ID = "workbench.contrib.dialogHandler";
					}
					constructor(f, b, s, l, y, $, v, S, I) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.b = new g.$Y(() => new a.$O2c(s, l, y, $, v, S))),
							(this.a = new g.$Y(() => new h.$hdd(s, I, v, S))),
							(this.c = this.h.model),
							this.D(
								this.c.onWillShowDialog(() => {
									this.f || this.j();
								}),
							),
							this.j();
					}
					async j() {
						for (; this.c.dialogs.length; ) {
							this.f = this.c.dialogs[0];
							let f;
							try {
								if (this.f.args.confirmArgs) {
									const b = this.f.args.confirmArgs;
									f =
										this.m || b?.confirmation.custom
											? await this.b.value.confirm(b.confirmation)
											: await this.a.value.confirm(b.confirmation);
								} else if (this.f.args.inputArgs) {
									const b = this.f.args.inputArgs;
									f = await this.b.value.input(b.input);
								} else if (this.f.args.promptArgs) {
									const b = this.f.args.promptArgs;
									f =
										this.m || b?.prompt.custom
											? await this.b.value.prompt(b.prompt)
											: await this.a.value.prompt(b.prompt);
								} else
									this.m
										? await this.b.value.about()
										: await this.a.value.about();
							} catch (b) {
								f = b;
							}
							this.f.close(f), (this.f = void 0);
						}
					}
					get m() {
						return this.g.getValue("window.dialogStyle") === "custom";
					}
				};
				(e.$idd = p),
					(e.$idd = p =
						Ne(
							[
								j(0, i.$gj),
								j(1, w.$GO),
								j(2, d.$ik),
								j(3, C.$jEb),
								j(4, E.$uZ),
								j(5, n.$Li),
								j(6, r.$Bk),
								j(7, t.$Vxb),
								j(8, m.$y7c),
							],
							p,
						)),
					(0, u.$s6)(p.ID, p, u.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[3445],
			he([1, 0, 91, 12, 151, 8, 10, 2739, 20, 32, 423, 55, 110, 180]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fdd = void 0);
				let n = class extends d.$25c {
					constructor(o, f, b, s, l, y) {
						super(f, s, b),
							(this.y = l),
							(this.z = y),
							(this.u = !1),
							(this.w = void 0),
							this.setAccessibilitySupport(
								o.window.accessibilitySupport
									? t.AccessibilitySupport.Enabled
									: t.AccessibilitySupport.Disabled,
							);
					}
					async alwaysUnderlineAccessKeys() {
						if (!i.$l) return !1;
						if (typeof this.w != "boolean") {
							const o = await this.z.windowsGetStringRegKey(
								"HKEY_CURRENT_USER",
								"Control Panel\\Accessibility\\Keyboard Preference",
								"On",
							);
							this.w = o === "1";
						}
						return this.w;
					}
					setAccessibilitySupport(o) {
						super.setAccessibilitySupport(o),
							!this.u &&
								o === t.AccessibilitySupport.Enabled &&
								(this.y.publicLog2("accessibility", { enabled: !0 }),
								(this.u = !0));
					}
				};
				(e.$Fdd = n),
					(e.$Fdd = n =
						Ne(
							[
								j(0, w.$ucd),
								j(1, E.$6j),
								j(2, C.$gj),
								j(3, c.$jEb),
								j(4, r.$km),
								j(5, h.$y7c),
							],
							n,
						)),
					(0, m.$lK)(t.$XK, n, m.InstantiationType.Delayed);
				let g = class {
					static {
						this.ID = "workbench.contrib.linuxAccessibility";
					}
					constructor(o, f, b) {
						const s = () => {
							f.isScreenReaderOptimized() &&
								o.write(
									b.argvResource,
									[{ path: ["force-renderer-accessibility"], value: !0 }],
									!0,
								);
						};
						s(), f.onDidChangeScreenReaderOptimized(s);
					}
				};
				(g = Ne([j(0, u.$$Qb), j(1, t.$XK), j(2, w.$ucd)], g)),
					i.$n && (0, a.$s6)(g.ID, g, a.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[359],
			he([1, 0, 5, 3, 20, 25, 9, 126, 6, 52]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Db = void 0),
					(e.$$Db = (0, t.$Mi)("gitContextService"));
				let u = class extends i.$1c {
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.f = c),
							(this.a = void 0),
							(this._onDidRunGitStatus = this.D(new m.$re())),
							(this.onDidRunGitStatus = this._onDidRunGitStatus.event);
					}
					async cleanupOldWorktrees() {
						this.a && (await this.a.cleanupOldWorktrees());
					}
					async waitForGitContextProvider() {
						for (; !this.a; ) await new Promise((h) => setTimeout(h, 500));
					}
					getGitFileBlameWithAbsolutePath(h, c) {
						throw new Error("Method not implemented.");
					}
					hasGitContextProvider() {
						return this.a !== void 0;
					}
					registerGitContextProvider(h) {
						this.a = h;
					}
					unregisterGitContextProvider() {
						this.a = void 0;
					}
					async searchAllCommits(h) {
						if (!this.a)
							throw new Error("No commit search provider registered");
						return this.a.getCommits(h);
					}
					async getFullCommit(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return this.a.getFullCommit(h);
					}
					async getFullCommitProto(h) {
						const c = await this.getFullCommit(h);
						if (c)
							return new d.$$A({
								sha: c.sha,
								message: c.message,
								description: c.description,
								diff: c.diff.map((n) => ({
									from: n.from,
									to: n.to,
									chunks: n.chunks.map((g) => ({
										content: g.content,
										lines: g.changes.map((p) => p.content),
									})),
								})),
								author: c.author,
								date: c.date,
							});
					}
					async searchAllPrs(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getPullRequests(h);
					}
					async getFullPr(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a?.getFullPullRequest(h);
					}
					async getBranchDiff(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getBranchDiff({ ...h, cwd: h?.cwd?.fsPath });
					}
					async getGitRoot(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitRoot(h);
					}
					async getDiffRaw() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getDiffRaw();
					}
					async getLastCommit() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getLastCommit();
					}
					async getLastCommits(h, c = 0) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getLastCommits(h, c);
					}
					async getGitDiff() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCurrentDiff();
					}
					async getGitLineBlameWithRelativePath(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitLineBlame(h, c, n);
					}
					async getGitLineBlameWithAbsolutePath(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						const g = this.b.asRelativePath(C.URI.file(h));
						return this.getGitLineBlameWithRelativePath(g, c, n);
					}
					async getGitFileBlameWithRelativePath(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitFileBlame(h, c);
					}
					async getGitUpstreamURL() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitUpstreamURL();
					}
					async getFileContentAtRef(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getFileContentAtRef(h, c, n);
					}
					async getCommitRawByCommitHash(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCommitRawByCommitHash(h, c);
					}
					async createWorktree(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.createWorktree(h);
					}
					async syncWorktreeToBranch(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.syncWorktreeToBranch(h, c);
					}
					async syncBranchToWorktree(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.syncBranchToWorktree(h, c);
					}
					async removeWorktree(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.removeWorktree(h);
					}
					async listAllWorktrees() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.listAllWorktrees();
					}
					async getFilenamesInCommit(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getFilenamesInCommit(h);
					}
					async getCurrentBranch() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCurrentBranch();
					}
					async getDefaultBranch() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getDefaultBranch();
					}
					async getGitUser() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitUser();
					}
				};
				(u = Ne([j(0, E.$Vi), j(1, r.$n6)], u)),
					(0, w.$lK)(e.$$Db, u, w.InstantiationType.Delayed);
			},
		),
		define(
			de[3446],
			he([
				1, 0, 15, 9, 6, 77, 3, 258, 88, 101, 33, 221, 26, 803, 1171, 68, 25, 19,
				359, 61, 67, 42, 23,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$noc = void 0);
				function $(D) {
					if (D !== void 0) {
						if (i.URI.isUri(D)) return i.URI.revive(D);
						if (h.ThemeIcon.isThemeIcon(D)) return D;
						{
							const M = D;
							return {
								light: i.URI.revive(M.light),
								dark: i.URI.revive(M.dark),
							};
						}
					}
				}
				function v(D) {
					const M = $(D.icon),
						N = D.labels?.map((A) => ({ title: A.title, icon: $(A.icon) }));
					return { ...D, icon: M, labels: N };
				}
				class S extends C.$1c {
					constructor(M, N, A) {
						super(),
							(this.a = N),
							(this.b = A),
							this.D(
								M.registerTextModelContentProvider(
									y.Schemas.vscodeSourceControl,
									this,
								),
							);
					}
					async provideTextContent(M) {
						const N = this.a.getModel(M);
						return (
							N || this.a.createModel("", this.b.createById("scminput"), M)
						);
					}
				}
				class I {
					get resourceTree() {
						if (!this.a) {
							const M = this.provider.rootUri ?? i.URI.file("/");
							this.a = new n.$06(this, M, this.f.extUri);
							for (const N of this.resources) this.a.add(N.sourceUri, N);
						}
						return this.a;
					}
					get hideWhenEmpty() {
						return !!this.features.hideWhenEmpty;
					}
					constructor(M, N, A, R, O, B, U, z) {
						(this.d = M),
							(this.e = N),
							(this.provider = A),
							(this.features = R),
							(this.label = O),
							(this.id = B),
							(this.multiDiffEditorEnableViewChanges = U),
							(this.f = z),
							(this.resources = []),
							(this.b = new w.$re()),
							(this.onDidChange = this.b.event),
							(this.c = new w.$re()),
							(this.onDidChangeResources = this.c.event);
					}
					toJSON() {
						return {
							$mid: a.MarshalledId.ScmResourceGroup,
							sourceControlHandle: this.d,
							groupHandle: this.e,
						};
					}
					splice(M, N, A) {
						this.resources.splice(M, N, ...A), (this.a = void 0), this.c.fire();
					}
					$updateGroup(M) {
						(this.features = { ...this.features, ...M }), this.b.fire();
					}
					$updateGroupLabel(M) {
						(this.label = M), this.b.fire();
					}
				}
				class T {
					constructor(M, N, A, R, O, B, U, z, F, x, H) {
						(this.a = M),
							(this.b = N),
							(this.c = A),
							(this.d = R),
							(this.sourceUri = O),
							(this.resourceGroup = B),
							(this.decorations = U),
							(this.contextValue = z),
							(this.command = F),
							(this.multiDiffEditorOriginalUri = x),
							(this.multiDiffEditorModifiedUri = H);
					}
					open(M) {
						return this.a.$executeResourceCommand(this.b, this.c, this.d, M);
					}
					toJSON() {
						return {
							$mid: a.MarshalledId.ScmResource,
							sourceControlHandle: this.b,
							groupHandle: this.c,
							handle: this.d,
						};
					}
				}
				class P {
					get currentHistoryItemGroup() {
						return this.a;
					}
					constructor(M, N) {
						(this.b = M),
							(this.c = N),
							(this.currentHistoryItemGroupId = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.id,
							)),
							(this.currentHistoryItemGroupName = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.name,
							)),
							(this.currentHistoryItemGroupRevision = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.revision,
							)),
							(this.currentHistoryItemGroupRemoteId = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.remote?.id,
							)),
							(this.currentHistoryItemGroupRemoteRevision = (0, E.derived)(
								this,
								(A) => this.currentHistoryItemGroup.read(A)?.remote?.revision,
							)),
							(this.a = (0, E.observableValueOpts)(
								{ owner: this, equalsFn: () => !1 },
								void 0,
							));
					}
					async resolveHistoryItemGroupCommonAncestor(M, N) {
						return this.b.$resolveHistoryItemGroupCommonAncestor(
							this.c,
							M,
							N,
							u.CancellationToken.None,
						);
					}
					async resolveHistoryItemGroupCommonAncestor2(M) {
						return this.b.$resolveHistoryItemGroupCommonAncestor2(
							this.c,
							M,
							u.CancellationToken.None,
						);
					}
					async provideHistoryItems(M, N) {
						return (
							await this.b.$provideHistoryItems(
								this.c,
								M,
								N,
								u.CancellationToken.None,
							)
						)?.map((R) => v(R));
					}
					async provideHistoryItems2(M) {
						return (
							await this.b.$provideHistoryItems2(
								this.c,
								M,
								u.CancellationToken.None,
							)
						)?.map((A) => v(A));
					}
					async provideHistoryItemSummary(M, N) {
						const A = await this.b.$provideHistoryItemSummary(
							this.c,
							M,
							N,
							u.CancellationToken.None,
						);
						return A ? v(A) : void 0;
					}
					async provideHistoryItemChanges(M, N) {
						return (
							await this.b.$provideHistoryItemChanges(
								this.c,
								M,
								N,
								u.CancellationToken.None,
							)
						)?.map((R) => ({
							uri: i.URI.revive(R.uri),
							originalUri: R.originalUri && i.URI.revive(R.originalUri),
							modifiedUri: R.modifiedUri && i.URI.revive(R.modifiedUri),
							renameUri: R.renameUri && i.URI.revive(R.renameUri),
						}));
					}
					$onDidChangeCurrentHistoryItemGroup(M) {
						this.a.set(M, void 0);
					}
				}
				class k {
					static {
						this.a = 0;
					}
					get id() {
						return this.b;
					}
					get handle() {
						return this.s;
					}
					get label() {
						return this.u;
					}
					get rootUri() {
						return this.v;
					}
					get inputBoxTextModel() {
						return this.w;
					}
					get contextValue() {
						return this.t;
					}
					get acceptInputCommand() {
						return this.g.acceptInputCommand;
					}
					get actionButton() {
						return this.g.actionButton ?? void 0;
					}
					get remotes() {
						return this.g.remotes;
					}
					get count() {
						return this.h;
					}
					get statusBarCommands() {
						return this.i;
					}
					get name() {
						return this.j ?? this.u;
					}
					get commitTemplate() {
						return this.m;
					}
					get historyProvider() {
						return this.p;
					}
					constructor(M, N, A, R, O, B, U, z, F) {
						if (
							((this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.v = O),
							(this.w = B),
							(this.x = U),
							(this.y = z),
							(this.z = F),
							(this.b = `scm${k.a++}`),
							(this.groups = []),
							(this.c = new w.$re()),
							(this.onDidChangeResourceGroups = this.c.event),
							(this.d = new w.$re()),
							(this.onDidChangeResources = this.d.event),
							(this.e = new w.$re()),
							(this.onDidChangeHistoryProvider = this.e.event),
							(this.f = Object.create(null)),
							(this.g = {}),
							(this.h = (0, E.observableValue)(this, void 0)),
							(this.i = (0, E.observableValue)(this, void 0)),
							(this.k = new w.$re()),
							(this.onDidChangeRemotes = this.k.event),
							(this.m = (0, E.observableValue)(this, "")),
							(this.n = new w.$re()),
							(this.onDidChange = this.n.event),
							(this.isSCM = !0),
							(this.p = (0, E.observableValue)(this, void 0)),
							O)
						) {
							const x = this.z.getWorkspaceFolder(O);
							x?.uri.toString() === O.toString()
								? (this.j = x.name)
								: O.path !== "/" && (this.j = (0, o.$kh)(O));
						}
					}
					$updateSourceControl(M) {
						if (
							((this.g = { ...this.g, ...M }),
							this.n.fire(),
							typeof M.commitTemplate < "u" &&
								this.m.set(M.commitTemplate, void 0),
							typeof M.count < "u" && this.h.set(M.count, void 0),
							typeof M.statusBarCommands < "u" &&
								this.i.set(M.statusBarCommands, void 0),
							M.hasQuickDiffProvider && !this.o
								? (this.o = this.x.addQuickDiffProvider({
										label: M.quickDiffLabel ?? this.label,
										rootUri: this.rootUri,
										isSCM: this.isSCM,
										getOriginalResource: (N) => this.getOriginalResource(N),
									}))
								: M.hasQuickDiffProvider === !1 &&
									this.o &&
									(this.o.dispose(), (this.o = void 0)),
							typeof M.remotes < "u" && this.k.fire(this.remotes),
							M.hasHistoryProvider && !this.historyProvider.get())
						) {
							const N = new P(this.q, this.handle);
							this.p.set(N, void 0);
						} else
							M.hasHistoryProvider === !1 &&
								this.historyProvider.get() &&
								this.p.set(void 0, void 0);
					}
					$registerGroups(M) {
						const N = M.map(([A, R, O, B, U]) => {
							const z = new I(this.handle, A, this, B, O, R, U, this.y);
							return (this.f[A] = z), z;
						});
						this.groups.splice(this.groups.length, 0, ...N), this.c.fire();
					}
					$updateGroup(M, N) {
						const A = this.f[M];
						A && A.$updateGroup(N);
					}
					$updateGroupLabel(M, N) {
						const A = this.f[M];
						A && A.$updateGroupLabel(N);
					}
					$spliceGroupResourceStates(M) {
						for (const [N, A] of M) {
							const R = this.f[N];
							if (!R) {
								console.warn(
									`SCM group ${N} not found in provider ${this.label}`,
								);
								continue;
							}
							A.reverse();
							for (const [O, B, U] of A) {
								const z = U.map((F) => {
									const [x, H, q, V, G, K, J, W, X, Y] = F,
										[ie, ne] = q,
										ee = h.ThemeIcon.isThemeIcon(ie) ? ie : i.URI.revive(ie),
										_ =
											(h.ThemeIcon.isThemeIcon(ne) ? ne : i.URI.revive(ne)) ||
											ee,
										te = {
											icon: ee,
											iconDark: _,
											tooltip: V,
											strikeThrough: G,
											faded: K,
										};
									return new T(
										this.q,
										this.handle,
										N,
										x,
										i.URI.revive(H),
										R,
										te,
										J || void 0,
										W,
										i.URI.revive(X),
										i.URI.revive(Y),
									);
								});
								R.splice(O, B, z);
							}
						}
						this.d.fire();
					}
					$unregisterGroup(M) {
						const N = this.f[M];
						N &&
							(delete this.f[M],
							this.groups.splice(this.groups.indexOf(N), 1),
							this.c.fire());
					}
					async getOriginalResource(M) {
						if (!this.g.hasQuickDiffProvider) return null;
						const N = await this.q.$provideOriginalResource(
							this.handle,
							M,
							u.CancellationToken.None,
						);
						return N && i.URI.revive(N);
					}
					$onDidChangeHistoryProviderCurrentHistoryItemGroup(M) {
						this.historyProvider.get() &&
							this.p.get()?.$onDidChangeCurrentHistoryItemGroup(M);
					}
					toJSON() {
						return { $mid: a.MarshalledId.ScmProvider, handle: this.handle };
					}
					dispose() {
						this.o?.dispose();
					}
				}
				let L = class {
					constructor(M, N, A, R, O, B, U, z, F, x) {
						(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.i = O),
							(this.j = B),
							(this.k = U),
							(this.m = z),
							(this.n = F),
							(this.o = x),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.e = new C.$Zc()),
							(this.a = M.getProxy(m.$mbb.ExtHostSCM)),
							this.e.add(new S(this.j, this.i, this.h));
					}
					dispose() {
						(0, C.$Vc)(this.b.values()),
							this.b.clear(),
							(0, C.$Vc)(this.d.values()),
							this.d.clear(),
							this.e.dispose();
					}
					async $registerSourceControl(M, N, A, R, O) {
						this.c.set(M, new t.$Lh());
						const B = await this.j.createModelReference(i.URI.revive(O)),
							U = new k(
								this.a,
								M,
								N,
								A,
								R ? i.URI.revive(R) : void 0,
								B.object.textEditorModel,
								this.k,
								this.n,
								this.o,
							),
							z = this.f.registerSCMProvider(U);
						this.b.set(M, z);
						const F = (0, C.$Xc)(
							B,
							w.Event.filter(
								this.g.onDidFocusRepository,
								(x) => x === z,
							)((x) => this.a.$setSelectedSourceControl(M)),
							z.input.onDidChange(({ value: x }) =>
								this.a.$onInputBoxValueChange(M, x),
							),
						);
						this.d.set(M, F),
							this.g.focusedRepository === z &&
								setTimeout(() => this.a.$setSelectedSourceControl(M), 0),
							z.input.value &&
								setTimeout(
									() => this.a.$onInputBoxValueChange(M, z.input.value),
									0,
								),
							this.c.get(M)?.open();
					}
					$registerGitContextProvider() {
						this.m.registerGitContextProvider({
							getGitRoot: this.a.$getGitRoot.bind(this.a),
							getCommits: this.a.$searchAllCommits.bind(this.a),
							getFullCommit: this.a.$getFullCommit.bind(this.a),
							getFullPullRequest: this.a.$getFullPR.bind(this.a),
							getPullRequests: this.a.$searchPRs.bind(this.a),
							getDiffRaw: this.a.$getDiffRaw.bind(this.a),
							getCurrentDiff: this.a.$getCurrentDiff.bind(this.a),
							getBranchDiff: this.a.$getDiffToMain.bind(this.a),
							getLastCommit: this.a.$getLastCommit.bind(this.a),
							getLastCommits: this.a.$getLastCommits.bind(this.a),
							getGitLineBlame: this.a.$getGitLineBlame.bind(this.a),
							getGitFileBlame: this.a.$getGitFileBlame.bind(this.a),
							getGitUpstreamURL: this.a.$getGitUpstreamURL.bind(this.a),
							getFilenamesInCommit: this.a.$getFilenamesInCommit.bind(this.a),
							getCommitRawByCommitHash: this.a.$getCommitRawByCommitHash.bind(
								this.a,
							),
							getFileContentAtRef: this.a.$getFileContentAtRef.bind(this.a),
							createWorktree: this.a.$createWorktree.bind(this.a),
							syncWorktreeToBranch: this.a.$syncWorktreeToBranch.bind(this.a),
							syncBranchToWorktree: this.a.$syncBranchToWorktree.bind(this.a),
							resetWorktreeToDefaultBranch:
								this.a.$resetWorktreeToDefaultBranch.bind(this.a),
							removeWorktree: this.a.$removeWorktree.bind(this.a),
							listAllWorktrees: this.a.$listAllWorktrees.bind(this.a),
							cleanupOldWorktrees: this.a.$cleanupOldWorktrees.bind(this.a),
							getCurrentBranch: this.a.$getCurrentBranch.bind(this.a),
							getDefaultBranch: this.a.$getDefaultBranch.bind(this.a),
							getGitUser: this.a.$getGitUser.bind(this.a),
						});
					}
					$unregisterGitContextProvider() {
						this.m.unregisterGitContextProvider();
					}
					$gitStatusWasRun(M) {
						this.m._onDidRunGitStatus.fire(M);
					}
					async $updateSourceControl(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$updateSourceControl(N);
					}
					async $unregisterSourceControl(M) {
						await this.c.get(M)?.wait();
						const N = this.b.get(M);
						N &&
							(this.d.get(M).dispose(),
							this.d.delete(M),
							N.dispose(),
							this.b.delete(M));
					}
					async $registerGroups(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						const O = R.provider;
						O.$registerGroups(N), O.$spliceGroupResourceStates(A);
					}
					async $updateGroup(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						R.provider.$updateGroup(N, A);
					}
					async $updateGroupLabel(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						if (!R) return;
						R.provider.$updateGroupLabel(N, A);
					}
					async $spliceResourceStates(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$spliceGroupResourceStates(N);
					}
					async $unregisterGroup(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$unregisterGroup(N);
					}
					async $setInputBoxValue(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && A.input.setValue(N, !1);
					}
					async $setInputBoxPlaceholder(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.placeholder = N);
					}
					async $setInputBoxEnablement(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.enabled = N);
					}
					async $setInputBoxVisibility(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A && (A.input.visible = N);
					}
					async $showValidationMessage(M, N, A) {
						await this.c.get(M)?.wait();
						const R = this.b.get(M);
						R && R.input.showValidationMessage(N, A);
					}
					async $setValidationProviderIsEnabled(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						A &&
							(N
								? (A.input.validateInput = async (R, O) => {
										const B = await this.a.$validateInput(M, R, O);
										return B && { message: B[0], type: B[1] };
									})
								: (A.input.validateInput = async () => {}));
					}
					async $onDidChangeHistoryProviderCurrentHistoryItemGroup(M, N) {
						await this.c.get(M)?.wait();
						const A = this.b.get(M);
						if (!A) return;
						A.provider.$onDidChangeHistoryProviderCurrentHistoryItemGroup(N);
					}
				};
				(e.$noc = L),
					(e.$noc = L =
						Ne(
							[
								(0, r.$tmc)(m.$lbb.MainThreadSCM),
								j(1, d.$c7),
								j(2, d.$d7),
								j(3, b.$nM),
								j(4, s.$QO),
								j(5, l.$MO),
								j(6, c.$8mc),
								j(7, f.$$Db),
								j(8, g.$Vl),
								j(9, p.$Vi),
							],
							L,
						));
			},
		),
		define(
			de[1300],
			he([1, 0, 3, 42, 204, 20, 5, 45, 32, 25, 359]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Med = e.$Led = void 0),
					(e.$Led = (0, C.$Mi)("cppTypeService"));
				class a {
					constructor(n) {
						(this.a = []), (this.b = n);
					}
					add(n, g) {
						this.remove(n),
							this.a.length >= this.b && this.a.shift(),
							this.a.push({ key: n, value: g });
					}
					get(n) {
						return this.a.find((p) => p.key === n)?.value;
					}
					remove(n) {
						const g = this.a.findIndex((p) => p.key === n);
						g !== -1 && this.a.splice(g, 1);
					}
					clear() {
						this.a.length = 0;
					}
				}
				let h = class extends t.$1c {
					constructor(n, g, p, o, f, b) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							(this.j = b),
							(this.a = []),
							(this.m = new a(100));
					}
					onChangedHints(n, g) {
						const p =
							g?.signatures
								.filter((o) => o.label.length < 5e3)
								.slice(0, 2)
								.map((o) => ({
									label: o.label,
									documentation:
										typeof o.documentation == "string"
											? o.documentation
											: o.documentation?.value,
								})) ?? [];
						this.m.add(n.getId(), p);
					}
					getRelevantType(n) {
						return this.m.get(n.getId()) || [];
					}
				};
				(e.$Med = h),
					(e.$Med = h =
						Ne(
							[
								j(0, w.$9Db),
								j(1, i.$MO),
								j(2, r.$Vi),
								j(3, d.$0zb),
								j(4, m.$km),
								j(5, u.$$Db),
							],
							h,
						)),
					(0, E.$lK)(e.$Led, h, E.InstantiationType.Delayed);
			},
		),
		define(
			de[3447],
			he([
				1, 0, 367, 7, 3, 65, 67, 11, 31, 20, 5, 45, 25, 551, 332, 3223, 1789,
				3224, 137, 359, 66, 18,
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
					(e.$qfd = e.$pfd = void 0),
					(i = mt(i)),
					(e.$pfd = (0, u.$Mi)("telemStartupService"));
				let y = class extends w.$1c {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(),
							(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.f = P),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.r = A),
							(this.s = R),
							(this.t = O),
							(this.u = B);
					}
					async onStartup() {
						try {
							await this.j.onStartupChangeWatcher();
							for (let I of this.a.listCodeEditors()) this.D(this.w(I));
							const S = this.q
								.getGroups(s.GroupsOrder.MOST_RECENTLY_ACTIVE)
								.map((I) =>
									I.editors.map((T) => T.resource).filter((T) => T !== void 0),
								)
								.flat();
							this.D(
								this.a.onCodeEditorAdd((I) => {
									const T = I.getModel();
									T && this.b.recordModelOpenedEvent(T), this.D(this.w(I));
								}),
							),
								this.D(
									this.a.onCodeEditorRemove((I) => {
										this.b.recordEditorCloseEvent(I.getId());
									}),
								),
								this.D(this.c.registerLinterListener()),
								this.D(this.f.registerClipboardListener(i.getWindows())),
								this.D(
									this.n.onChangeEffectManuallyDisposed({
										deps: [
											() => this.n.nonPersistentStorage.inprogressAIGenerations,
										],
										onChange: ({ deps: I, prevDeps: T }) => {
											if (T === void 0) return;
											const [P] = I,
												[k] = T,
												L = k.filter(
													(M) =>
														!P.find(
															(N) => N.generationUUID === M.generationUUID,
														),
												),
												D = P.filter(
													(M) =>
														!k.find(
															(N) => N.generationUUID === M.generationUUID,
														),
												);
											L.forEach((M) => {
												M.metadata.type === "chat"
													? this.b.recordChatEvent({
															requestId: M.generationUUID,
															eventType: {
																case: "endOfAnyGeneration",
																value: {},
															},
														})
													: M.metadata.type === "cmdk"
														? this.b.recordCppSessionEvent({
																case: "cmdKEndEvent",
																requestId: M.generationUUID,
															})
														: this.b.recordAiEvent(
																M.generationUUID,
																t.AiRequestEvent_RequestType.END,
															);
											}),
												D.forEach((M) => {
													this.b.recordAiEvent(
														M.generationUUID,
														t.AiRequestEvent_RequestType.START,
													);
												});
										},
										runNowToo: !0,
									}),
								);
						} catch (S) {
							console.error("Cpp: error", S);
						}
					}
					w(S) {
						const I = [];
						return (
							I.push(this.h.registerQuickActionListener(S)),
							I.push(
								S.onDidScrollChange(
									(0, c.$s6b)(() => {
										const T = S.getModel();
										T &&
											!this.j.isModelTooBigFullCheck(T) &&
											this.b.recordScrollEvent(
												T,
												S.getVisibleRanges(),
												S.getId(),
											);
									}, 2e3),
								),
							),
							I.push(
								S.onDidChangeCursorPosition((T) => {
									const P = S.getModel();
									P &&
										!this.j.isModelTooBigFullCheck(P) &&
										this.b.recordDebouncedCursorPosition(P, T.position);
								}),
							),
							I.push(
								S.onDidFocusEditorText((T) => {
									const P = S.getModel();
									if (P && !this.j.isModelTooBigFullCheck(P)) {
										const k = S.getVisibleRanges();
										this.b.recordChangedEditor(
											P,
											S.getPosition() ?? void 0,
											k,
											S.getId(),
										);
									}
								}),
							),
							I.push(
								S.onDidChangeModel((T) => {
									const P = T.newModelUrl;
									if (!P || T.newModelUrl === T.oldModelUrl) return;
									const k = this.m.getModel(P);
									k &&
										k &&
										!this.j.isModelTooBigFullCheck(k) &&
										this.b.recordChangedEditor(
											k,
											S.getPosition() ?? void 0,
											S.getVisibleRanges(),
											S.getId(),
										);
								}),
							),
							{
								dispose: () => {
									for (const T of I) T.dispose();
								},
							}
						);
					}
				};
				(y = Ne(
					[
						j(0, E.$dtb),
						j(1, n.$V7b),
						j(2, p.$R7b),
						j(3, g.$ofd),
						j(4, o.$U7b),
						j(5, f.$hfc),
						j(6, C.$QO),
						j(7, a.$0zb),
						j(8, s.$EY),
						j(9, l.$IY),
						j(10, b.$$Db),
						j(11, m.$ek),
						j(12, h.$Vi),
					],
					y,
				)),
					(0, r.$lK)(e.$pfd, y, r.InstantiationType.Delayed);
				class $ extends d.$3X {
					static {
						this.ID = "workbench.action.cpplogs.flushAllTelem";
					}
					constructor() {
						super({
							id: $.ID,
							title: {
								value: "Flush all telem logs",
								original: "Flush all telem logs",
							},
							f1: !0,
						});
					}
					async run(S) {
						const I = S.get(f.$hfc),
							T = S.get(n.$V7b);
						await I.flushAll(),
							await T.forceFlushExtHostEventLogger(),
							console.log("[CPP TELEM - Session ID]", I.getCurrentSessionId());
					}
				}
				e.$qfd = $;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1832],
		he([1, 0, 7, 75, 24, 12, 113, 22, 2738, 2743, 34, 30, 55, 52]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wEb = void 0),
				(e.$xEb = g),
				(m = xi(m));
			let n = class {
				constructor(o, f, b, s) {
					(this.a = o), (this.b = f), (this.d = b), (this.e = s);
				}
				async getLogs() {
					return (0, r.$uEb)(this.a, this.b);
				}
				async whenWorkbenchRestored() {
					this.e.info("[driver] Waiting for restored lifecycle phase..."),
						await this.d.when(c.LifecyclePhase.Restored),
						this.e.info(
							"[driver] Restored lifecycle phase reached. Waiting for contributions...",
						),
						await a.$Io.as(h.Extensions.Workbench).whenRestored,
						this.e.info("[driver] Workbench contributions created.");
				}
				async setValue(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) return Promise.reject(new Error(`Element not found: ${o}`));
					const s = b;
					s.value = f;
					const l = new Event("input", { bubbles: !0, cancelable: !0 });
					s.dispatchEvent(l);
				}
				async isActiveElement(o) {
					if (
						i.$Bfb.document.querySelector(o) !== i.$Bfb.document.activeElement
					) {
						const b = [];
						let s = i.$Bfb.document.activeElement;
						for (; s; ) {
							const l = s.tagName,
								y = s.id ? `#${s.id}` : "",
								$ = (0, w.$Lb)(s.className.split(/\s+/g).map((v) => v.trim()))
									.map((v) => `.${v}`)
									.join("");
							b.unshift(`${l}${y}${$}`), (s = s.parentElement);
						}
						throw new Error(
							`Active element not found. Current active element is '${b.join(" > ")}'. Looking for ${o}`,
						);
					}
					return !0;
				}
				async getElements(o, f) {
					const b = i.$Bfb.document.querySelectorAll(o),
						s = [];
					for (let l = 0; l < b.length; l++) {
						const y = b.item(l);
						s.push(this.f(y, f));
					}
					return s;
				}
				f(o, f) {
					const b = Object.create(null);
					for (let $ = 0; $ < o.attributes.length; $++) {
						const v = o.attributes.item($);
						v && (b[v.name] = v.value);
					}
					const s = [];
					if (f)
						for (let $ = 0; $ < o.children.length; $++) {
							const v = o.children.item($);
							v && s.push(this.f(v, !0));
						}
					const { left: l, top: y } = (0, t.$qgb)(o);
					return {
						tagName: o.tagName,
						className: o.className,
						textContent: o.textContent || "",
						attributes: b,
						children: s,
						left: l,
						top: y,
					};
				}
				async getElementXY(o, f, b) {
					const s =
						typeof f == "number" && typeof b == "number"
							? { x: f, y: b }
							: void 0;
					return this.g(o, s);
				}
				async typeInEditor(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) throw new Error(`Editor not found: ${o}`);
					const s = b,
						l = s.selectionStart,
						y = l + f.length,
						$ = s.value,
						v = $.substr(0, l) + f + $.substr(l);
					(s.value = v), s.setSelectionRange(y, y);
					const S = new Event("input", { bubbles: !0, cancelable: !0 });
					s.dispatchEvent(S);
				}
				async getTerminalBuffer(o) {
					const f = i.$Bfb.document.querySelector(o);
					if (!f) throw new Error(`Terminal not found: ${o}`);
					const b = f.xterm;
					if (!b) throw new Error(`Xterm not found: ${o}`);
					const s = [];
					for (let l = 0; l < b.buffer.active.length; l++)
						s.push(b.buffer.active.getLine(l).translateToString(!0));
					return s;
				}
				async writeInTerminal(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) throw new Error(`Element not found: ${o}`);
					const s = b.xterm;
					if (!s) throw new Error(`Xterm not found: ${o}`);
					s.input(f);
				}
				getLocaleInfo() {
					return Promise.resolve({ language: E.$z, locale: E.$A });
				}
				getLocalizedStrings() {
					return Promise.resolve({
						open: m.default.open,
						close: m.default.close,
						find: m.default.find,
					});
				}
				async g(o, f) {
					const b = i.$Bfb.document.querySelector(o);
					if (!b) return Promise.reject(new Error(`Element not found: ${o}`));
					const { left: s, top: l } = (0, t.$qgb)(b),
						{ width: y, height: $ } = (0, t.$ogb)(b);
					let v, S;
					return (
						f
							? ((v = s + f.x), (S = l + f.y))
							: ((v = s + y / 2), (S = l + $ / 2)),
						(v = Math.round(v)),
						(S = Math.round(S)),
						{ x: v, y: S }
					);
				}
				async exitApplication() {}
			};
			(e.$wEb = n),
				(e.$wEb = n =
					Ne([j(0, d.$ll), j(1, C.$Ti), j(2, c.$n6), j(3, u.$ik)], n));
			function g(p) {
				Object.assign(i.$Bfb, { driver: p.createInstance(n) });
			}
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1833],
		he([
			1, 0, 139, 7, 265, 2194, 15, 6, 3, 23, 12, 111, 9, 4, 31, 57, 5, 73, 41,
			62, 286, 96, 52, 87, 1832, 75, 288, 10, 78,
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
			var k;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$zEb = e.$yEb = void 0),
				(a = xi(a));
			let L = class extends m.$1c {
				static {
					k = this;
				}
				static {
					this.a = Number.MIN_SAFE_INTEGER;
				}
				static {
					this.b = new Map();
				}
				constructor(
					N,
					A = { getWindowsCount: i.getWindowsCount, getWindows: i.getWindows },
					R,
					O,
				) {
					super(),
						(this.c = R),
						(this.f = O),
						this.g(N),
						this.j(N, A),
						this.m(N.vscodeWindowId);
				}
				g(N) {
					const A = N.HTMLElement.prototype.focus,
						R = this;
					N.HTMLElement.prototype.focus = function (O) {
						R.h((0, i.getWindow)(this)), A.apply(this, [O]);
					};
				}
				h(N) {
					const A = (0, i.$Ogb)();
					A !== N &&
						A.document.hasFocus() &&
						(N.focus(),
						!this.f.extensionTestsLocationURI &&
							!N.document.hasFocus() &&
							this.c.focus(N));
				}
				j(
					N,
					A = { getWindowsCount: i.getWindowsCount, getWindows: i.getWindows },
				) {
					const R = N.setTimeout;
					Object.defineProperty(N, "vscodeOriginalSetTimeout", {
						get: () => R,
					});
					const O = N.clearTimeout;
					Object.defineProperty(N, "vscodeOriginalClearTimeout", {
						get: () => O,
					}),
						(N.setTimeout = function (B, U = 0, ...z) {
							if (A.getWindowsCount() === 1 || typeof B == "string" || U === 0)
								return R.apply(this, [B, U, ...z]);
							const F = new Set(),
								x = k.a++;
							k.b.set(x, F);
							const H = (0, I.$hb)(B, () => {
								(0, m.$Vc)(F), k.b.delete(x);
							});
							for (const { window: q, disposables: V } of A.getWindows()) {
								if ((0, S.$Dfb)(q) && q.document.visibilityState === "hidden")
									continue;
								let G = !1;
								const K = q.vscodeOriginalSetTimeout.apply(this, [
										(...W) => {
											G || H(...W);
										},
										U,
										...z,
									]),
									J = (0, m.$Yc)(() => {
										(G = !0), q.vscodeOriginalClearTimeout(K), F.delete(J);
									});
								V.add(J), F.add(J);
							}
							return x;
						}),
						(N.clearTimeout = function (B) {
							const U = typeof B == "number" ? k.b.get(B) : void 0;
							U ? ((0, m.$Vc)(U), k.b.delete(B)) : O.apply(this, [B]);
						});
				}
				m(N) {
					this.D(
						this.c.onDidChangeFullScreen(({ windowId: A, fullscreen: R }) => {
							if (A === N) {
								const O = (0, i.getWindowById)(N);
								O && (0, t.$Lfb)(R, O.window);
							}
						}),
					);
				}
				static async confirmOnShutdown(N, A) {
					const R = N.get(g.$GO),
						O = N.get(T.$gj),
						B =
							A === y.ShutdownReason.QUIT
								? u.$m
									? (0, c.localize)(3758, null)
									: (0, c.localize)(3759, null)
								: (0, c.localize)(3760, null),
						U =
							A === y.ShutdownReason.QUIT
								? u.$m
									? (0, c.localize)(3761, null)
									: (0, c.localize)(3762, null)
								: (0, c.localize)(3763, null),
						z = await R.confirm({
							message: B,
							primaryButton: U,
							checkbox: { label: (0, c.localize)(3764, null) },
						});
					return (
						z.confirmed &&
							z.checkboxChecked &&
							(await O.updateValue("window.confirmBeforeClose", "never")),
						z.confirmed
					);
				}
			};
			(e.$yEb = L), (e.$yEb = L = k = Ne([j(2, $.$asb), j(3, P.$r8)], L));
			let D = class extends L {
				constructor(N, A, R, O, B, U, z, F, x) {
					super(S.$Bfb, void 0, x, U),
						(this.n = N),
						(this.q = A),
						(this.r = R),
						(this.s = O),
						(this.t = B),
						(this.u = U),
						(this.w = z),
						(this.y = F),
						this.z(),
						this.F();
				}
				z() {
					this.D(this.q.onWillShutdown(() => this.C()));
					const N =
						u.$u && S.$Bfb.visualViewport ? S.$Bfb.visualViewport : S.$Bfb;
					this.D(
						(0, i.$0fb)(N, i.$$gb.RESIZE, () => {
							this.w.layout(), u.$u && S.$Bfb.scrollTo(0, 0);
						}),
					),
						this.D(
							(0, i.$0fb)(
								this.w.mainContainer,
								i.$$gb.WHEEL,
								(A) => A.preventDefault(),
								{ passive: !1 },
							),
						),
						this.D(
							(0, i.$0fb)(this.w.mainContainer, i.$$gb.CONTEXT_MENU, (A) =>
								i.$ahb.stop(A, !0),
							),
						),
						this.D(
							(0, i.$0fb)(this.w.mainContainer, i.$$gb.DROP, (A) =>
								i.$ahb.stop(A, !0),
							),
						);
				}
				C() {
					d.Event.toPromise(
						d.Event.any(
							d.Event.once(
								new w.$mib(S.$Bfb.document.body, i.$$gb.KEY_DOWN, !0).event,
							),
							d.Event.once(
								new w.$mib(S.$Bfb.document.body, i.$$gb.MOUSE_DOWN, !0).event,
							),
						),
					).then(async () => {
						await (0, C.$Nh)(3e3),
							await this.r.prompt({
								type: a.default.Error,
								message: (0, c.localize)(3765, null),
								detail: (0, c.localize)(3766, null),
								buttons: [
									{
										label: (0, c.localize)(3767, null),
										run: () => S.$Bfb.location.reload(),
									},
								],
							});
					});
				}
				F() {
					this.H(), this.I(), this.J(), this.G();
				}
				G() {
					this.f.enableSmokeTestDriver && (0, v.$xEb)(this.y);
				}
				H() {
					this.n.setDefaultExternalOpener({
						openExternal: async (N) => {
							let A = !1;
							if (this.u.options?.openerAllowedExternalUrlPrefixes) {
								for (const R of this.u.options.openerAllowedExternalUrlPrefixes)
									if (N.startsWith(R)) {
										A = !0;
										break;
									}
							}
							if (
								(0, r.$Vg)(N, r.Schemas.http) ||
								(0, r.$Vg)(N, r.Schemas.https)
							)
								t.$Rfb
									? (0, i.$thb)(N, !A) ||
										(await this.r.prompt({
											type: a.default.Warning,
											message: (0, c.localize)(3768, null),
											detail: N,
											buttons: [
												{
													label: (0, c.localize)(3769, null),
													run: () => (A ? (0, i.$shb)(N) : (0, i.$rhb)(N)),
												},
												{
													label: (0, c.localize)(3770, null),
													run: () =>
														this.n.open(
															h.URI.parse("https://aka.ms/allow-vscode-popup"),
														),
												},
											],
											cancelButton: !0,
										}))
									: A
										? (0, i.$shb)(N)
										: (0, i.$rhb)(N);
							else {
								const R = () => {
									this.q.withExpectedShutdown(
										{ disableShutdownHandling: !0 },
										() => (S.$Bfb.location.href = N),
									);
								};
								R();
								const O = async () => {
									const { downloadUrl: B } = this.t;
									let U;
									const z = [
										{ label: (0, c.localize)(3771, null), run: () => R() },
									];
									B !== void 0
										? ((U = (0, c.localize)(
												3772,
												null,
												this.t.nameLong,
												this.t.nameLong,
											)),
											z.push({
												label: (0, c.localize)(3773, null),
												run: async () => {
													await this.n.open(h.URI.parse(B)), O();
												},
											}))
										: (U = (0, c.localize)(
												3774,
												null,
												this.t.nameLong,
												this.t.nameLong,
											)),
										await this.c.withExpectedShutdown(() =>
											this.r.prompt({
												type: a.default.Info,
												message: (0, c.localize)(3775, null),
												detail: U,
												buttons: z,
												cancelButton: !0,
											}),
										);
								};
								(0, r.$Vg)(N, this.t.urlProtocol) && (await O());
							}
							return !0;
						},
					});
				}
				I() {
					this.D(
						this.s.registerFormatter({
							scheme: r.Schemas.vscodeUserData,
							priority: !0,
							formatting: { label: "(Settings) ${path}", separator: "/" },
						}),
					);
				}
				J() {
					n.$fk.registerCommand(
						"workbench.experimental.requestUsbDevice",
						async (N, A) => (0, E.$jjb)(A),
					),
						n.$fk.registerCommand(
							"workbench.experimental.requestSerialPort",
							async (N, A) => (0, E.$kjb)(A),
						),
						n.$fk.registerCommand(
							"workbench.experimental.requestHidDevice",
							async (N, A) => (0, E.$ljb)(A),
						);
				}
			};
			(e.$zEb = D),
				(e.$zEb = D =
					Ne(
						[
							j(0, f.$7rb),
							j(1, y.$n6),
							j(2, g.$GO),
							j(3, o.$3N),
							j(4, b.$Bk),
							j(5, s.$5rb),
							j(6, l.$mEb),
							j(7, p.$Li),
							j(8, $.$asb),
						],
						D,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[703],
		he([
			1, 0, 139, 7, 75, 24, 15, 29, 6, 3, 240, 12, 111, 4, 10, 57, 20, 5, 32,
			740, 253, 1833, 78, 87, 96,
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
		) {
			"use strict";
			var S;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CEb = e.$BEb = e.AuxiliaryWindowMode = e.$AEb = void 0),
				(h = xi(h)),
				(e.$AEb = (0, o.$Mi)("auxiliaryWindowService"));
			var I;
			(function (k) {
				(k[(k.Maximized = 0)] = "Maximized"),
					(k[(k.Normal = 1)] = "Normal"),
					(k[(k.Fullscreen = 2)] = "Fullscreen");
			})(I || (e.AuxiliaryWindowMode = I = {}));
			let T = class extends l.$yEb {
				constructor(L, D, M, N, A, R) {
					super(L, void 0, A, R),
						(this.window = L),
						(this.container = D),
						(this.u = N),
						(this.n = this.D(new m.$re())),
						(this.onWillLayout = this.n.event),
						(this.q = this.D(new m.$re())),
						(this.onDidLayout = this.q.event),
						(this.r = this.D(new m.$re())),
						(this.onBeforeUnload = this.r.event),
						(this.s = this.D(new m.$re())),
						(this.onUnload = this.s.event),
						(this.t = this.D(new m.$re())),
						(this.onWillDispose = this.t.event),
						(this.whenStylesHaveLoaded = M.wait().then(() => {})),
						(this.contentContainer =
							D.querySelector(".auxiliary-window-content") || D),
						this.w();
				}
				w() {
					this.D(
						(0, i.$0fb)(this.window, i.$$gb.BEFORE_UNLOAD, (L) => this.z(L)),
					),
						this.D((0, i.$0fb)(this.window, i.$$gb.UNLOAD, () => this.H())),
						this.D(
							(0, i.$0fb)(this.window, "unhandledrejection", (L) => {
								(0, d.$4)(L.reason), L.preventDefault();
							}),
						),
						this.D(
							(0, i.$0fb)(this.window, i.$$gb.RESIZE, () => this.layout()),
						),
						this.D(
							(0, i.$0fb)(
								this.container,
								i.$$gb.SCROLL,
								() => (this.container.scrollTop = 0),
							),
						),
						a.$r
							? (this.D(
									(0, i.$0fb)(this.container, i.$$gb.DROP, (L) =>
										i.$ahb.stop(L, !0),
									),
								),
								this.D(
									(0, i.$0fb)(
										this.container,
										i.$$gb.WHEEL,
										(L) => L.preventDefault(),
										{ passive: !1 },
									),
								),
								this.D(
									(0, i.$0fb)(this.container, i.$$gb.CONTEXT_MENU, (L) =>
										i.$ahb.stop(L, !0),
									),
								))
							: (this.D(
									(0, i.$0fb)(
										this.window.document.body,
										i.$$gb.DRAG_OVER,
										(L) => i.$ahb.stop(L),
									),
								),
								this.D(
									(0, i.$0fb)(this.window.document.body, i.$$gb.DROP, (L) =>
										i.$ahb.stop(L),
									),
								));
				}
				z(L) {
					let D;
					if (
						(this.r.fire({
							veto(A) {
								A && (D = A);
							},
						}),
						D)
					) {
						this.C(L, D);
						return;
					}
					const M = this.u.getValue("window.confirmBeforeClose");
					(M === "always" ||
						(M === "keyboardOnly" && i.$Fhb.getInstance().isModifierPressed)) &&
						this.G(L);
				}
				C(L, D) {
					this.F(L);
				}
				F(L) {
					L.preventDefault(), (L.returnValue = (0, c.localize)(12103, null));
				}
				G(L) {
					this.F(L);
				}
				H() {
					this.s.fire();
				}
				layout() {
					const L = (0, i.$ogb)(this.window.document.body, this.container);
					this.n.fire(L), this.q.fire(L);
				}
				createState() {
					return {
						bounds: {
							x: this.window.screenX,
							y: this.window.screenY,
							width: this.window.outerWidth,
							height: this.window.outerHeight,
						},
						zoomLevel: (0, t.$Hfb)(this.window),
					};
				}
				dispose() {
					this.B.isDisposed || (this.t.fire(), super.dispose());
				}
			};
			(e.$BEb = T),
				(e.$BEb = T = Ne([j(3, n.$gj), j(4, $.$asb), j(5, y.$r8)], T));
			let P = class extends r.$1c {
				static {
					S = this;
				}
				static {
					this.a = { width: 800, height: 600 };
				}
				static {
					this.b = (0, i.getWindowId)(w.$Bfb) + 1;
				}
				constructor(L, D, M, N, A, R) {
					super(),
						(this.g = L),
						(this.h = D),
						(this.j = M),
						(this.m = N),
						(this.n = A),
						(this.q = R),
						(this.c = this.D(new m.$re())),
						(this.onDidOpenAuxiliaryWindow = this.c.event),
						(this.f = new Map());
				}
				async open(L) {
					(0, u.mark)("code/auxiliaryWindow/willOpen");
					const D = await this.s(L);
					if (!D) throw new Error((0, c.localize)(12104, null));
					const M = await this.t(D);
					(0, w.$Cfb)(D, M);
					const N = new r.$Zc(),
						{ container: A, stylesLoaded: R } = this.u(D, N, L),
						O = (0, b.$vjb)();
					b.$ujb.set(D, O), A.appendChild(O);
					const B = this.r(D, A, R),
						U = new r.$Zc();
					this.f.set(D.vscodeWindowId, B),
						U.add((0, r.$Yc)(() => this.f.delete(D.vscodeWindowId)));
					const z = new r.$Zc();
					return (
						m.Event.once(B.onWillDispose)(() => {
							D.close(),
								N.dispose(),
								U.dispose(),
								z.dispose(),
								b.$ujb.delete(D);
						}),
						U.add((0, i.registerWindow)(D)),
						this.c.fire({ window: B, disposables: z }),
						(0, u.mark)("code/auxiliaryWindow/didOpen"),
						this.m.publicLog2("auxiliaryWindowOpen", { bounds: !!L?.bounds }),
						B
					);
				}
				r(L, D, M) {
					return new T(L, D, M, this.j, this.n, this.q);
				}
				async s(L) {
					const D = (0, i.$Ogb)(),
						M = {
							x: D.screenX,
							y: D.screenY,
							width: D.outerWidth,
							height: D.outerHeight,
						},
						N = Math.max(L?.bounds?.width ?? S.a.width, s.$rY.WIDTH),
						A = Math.max(L?.bounds?.height ?? S.a.height, s.$rY.HEIGHT);
					let R = {
						x: L?.bounds?.x ?? Math.max(M.x + M.width / 2 - N / 2, 0),
						y: L?.bounds?.y ?? Math.max(M.y + M.height / 2 - A / 2, 0),
						width: N,
						height: A,
					};
					!L?.bounds &&
						R.x === M.x &&
						R.y === M.y &&
						(R = { ...R, x: R.x + 30, y: R.y + 30 });
					const O = (0, E.$Lb)([
							"popup=yes",
							`left=${R.x}`,
							`top=${R.y}`,
							`width=${R.width}`,
							`height=${R.height}`,
							L?.nativeTitlebar ? "window-native-titlebar=yes" : void 0,
							L?.disableFullscreen ? "window-disable-fullscreen=yes" : void 0,
							L?.mode === I.Maximized ? "window-maximized=yes" : void 0,
							L?.mode === I.Fullscreen ? "window-fullscreen=yes" : void 0,
						]),
						B = w.$Bfb.open(a.$I ? "" : "about:blank", void 0, O.join(","));
					return !B && a.$r
						? (
								await this.h.prompt({
									type: h.default.Warning,
									message: (0, c.localize)(12105, null),
									detail: (0, c.localize)(12106, null),
									buttons: [
										{
											label: (0, c.localize)(12107, null),
											run: () => this.s(L),
										},
									],
									cancelButton: !0,
								})
							).result
						: B?.window;
				}
				async t(L) {
					return S.b++;
				}
				u(L, D, M) {
					(L.document.createElement = function () {
						throw new Error(
							'Not allowed to create elements in child window JavaScript context. Always use the main window so that "xyz instanceof HTMLElement" continues to work.',
						);
					}),
						this.w(L);
					const { stylesLoaded: N } = this.z(L, D),
						A = this.C(L, D);
					return { stylesLoaded: N, container: A };
				}
				w(L) {
					for (const M of [
						'meta[charset="utf-8"]',
						'meta[http-equiv="Content-Security-Policy"]',
						'meta[name="viewport"]',
						'meta[name="theme-color"]',
					]) {
						const N = w.$Bfb.document.querySelector(M);
						if (N) {
							const A = (0, i.$Ugb)(L.document.head);
							if (
								((0, i.$Khb)(N, A),
								M === 'meta[http-equiv="Content-Security-Policy"]')
							) {
								const R = A.getAttribute("content");
								R &&
									A.setAttribute(
										"content",
										R.replace(/(script-src[^\;]*)/, "script-src 'none'"),
									);
							}
						}
					}
					const D = w.$Bfb.document.querySelector('link[rel="icon"]');
					if (D) {
						const M = (0, i.$Vgb)(L.document.head);
						(0, i.$Khb)(D, M);
					}
				}
				z(L, D) {
					(0, u.mark)("code/auxiliaryWindow/willApplyCSS");
					const M = new Map(),
						N = new C.$Lh();
					N.wait().then(() =>
						(0, u.mark)("code/auxiliaryWindow/didLoadCSSStyles"),
					);
					const A = D.add(new r.$Zc());
					let R = 0;
					function O() {
						--R === 0 && (A.dispose(), N.open());
					}
					function B(U) {
						if ((0, i.$Pgb)(U)) return;
						const z = L.document.head.appendChild(U.cloneNode(!0));
						U.tagName.toLowerCase() === "link" &&
							(R++,
							A.add((0, i.$0fb)(z, "load", O)),
							A.add((0, i.$0fb)(z, "error", O))),
							M.set(U, z);
					}
					R++;
					try {
						for (const U of w.$Bfb.document.head.querySelectorAll(
							'link[rel="stylesheet"], style',
						))
							B(U);
					} finally {
						O();
					}
					return (
						D.add((0, i.$Sgb)(L)),
						D.add(
							i.$Tgb.observe(w.$Bfb.document.head, D, {
								childList: !0,
								subtree: !0,
							})((U) => {
								for (const z of U)
									if (
										!(
											z.type !== "childList" ||
											z.target.nodeName.toLowerCase() === "title" ||
											z.target.nodeName.toLowerCase() === "script" ||
											z.target.nodeName.toLowerCase() === "meta"
										)
									) {
										for (const F of z.addedNodes)
											if (
												(0, i.$Ygb)(F) &&
												(F.tagName.toLowerCase() === "style" ||
													F.tagName.toLowerCase() === "link")
											)
												B(F);
											else if (F.nodeType === Node.TEXT_NODE && F.parentNode) {
												const x = M.get(F.parentNode);
												x && (x.textContent = F.textContent);
											}
										for (const F of z.removedNodes) {
											const x = M.get(F);
											x && (x.parentNode?.removeChild(x), M.delete(F));
										}
									}
							}),
						),
						(0, u.mark)("code/auxiliaryWindow/didApplyCSS"),
						{ stylesLoaded: N }
					);
				}
				C(L, D) {
					(0, u.mark)("code/auxiliaryWindow/willApplyHTML");
					const M = document.createElement("div");
					return (
						M.setAttribute("role", "application"),
						(0, i.$sgb)(M, 0, 0, 0, 0, "relative"),
						(M.style.display = "flex"),
						(M.style.height = "100%"),
						(M.style.flexDirection = "column"),
						L.document.body.append(M),
						D.add(
							(0, i.$Lhb)(
								w.$Bfb.document.documentElement,
								L.document.documentElement,
							),
						),
						D.add((0, i.$Lhb)(w.$Bfb.document.body, L.document.body)),
						D.add((0, i.$Lhb)(this.g.mainContainer, M, ["class"])),
						(0, u.mark)("code/auxiliaryWindow/didApplyHTML"),
						M
					);
				}
				getWindow(L) {
					return this.f.get(L);
				}
			};
			(e.$CEb = P),
				(e.$CEb =
					P =
					S =
						Ne(
							[
								j(0, v.$mEb),
								j(1, g.$GO),
								j(2, n.$gj),
								j(3, f.$km),
								j(4, $.$asb),
								j(5, y.$r8),
							],
							P,
						)),
				(0, p.$lK)(e.$AEb, P, p.InstantiationType.Delayed);
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3448],
		he([
			1, 0, 7, 3, 111, 4, 11, 8, 57, 109, 5, 34, 372, 3064, 3069, 703, 87, 2446,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$u6c = void 0),
				(w = xi(w)),
				(h = xi(h)),
				(c = xi(c));
			let o = class {
				constructor(b, s, l, y, $, v, S) {
					(this.g = b),
						(this.h = s),
						(this.i = l),
						(this.j = y),
						(this.k = $),
						(this.l = v),
						(this.m = S),
						(this.b = null),
						(this.c = new r.$Hn()),
						(this.d = ""),
						(this.e = ""),
						(this.f = "");
				}
				async openReporter(b) {
					this.hasToReload(b) ||
						(await this.openAuxIssueReporter(b),
						this.b &&
							this.g
								.createInstance(
									n.$t6c,
									!1,
									b,
									{ type: this.f, arch: this.d, release: this.e },
									h.default,
									this.b,
								)
								.render());
				}
				async openAuxIssueReporter(b, s) {
					let l = { width: 700, height: 800 };
					if (s && s.x && s.y) {
						const v = s.x + s.width / 2,
							S = s.y + s.height / 2;
						l = { ...l, x: v - 350, y: S - 400 };
					}
					const $ = new i.$Zc().add(
						await this.h.open({
							mode: g.AuxiliaryWindowMode.Normal,
							bounds: l,
							nativeTitlebar: !0,
							disableFullscreen: !0,
						}),
					);
					if ($) {
						await $.whenStylesHaveLoaded,
							($.window.document.title = "Issue Reporter"),
							$.window.document.body.classList.add("issue-reporter-body");
						const v = document.createElement("div");
						v.classList.add("monaco-workbench"),
							$.container.remove(),
							$.window.document.body.appendChild(v),
							(0, t.$Dhb)(v, (0, c.default)()),
							(this.b = $.window);
					} else console.error("Failed to open auxiliary window");
					this.b?.addEventListener("beforeunload", () => {
						$.window.close(), (this.b = null);
					});
				}
				async sendReporterMenu(b) {
					const s = this.i.createMenu(C.$XX.IssueReporter, this.j),
						l = s.getActions({ renderShortTitle: !0 }).flatMap(($) => $[1]);
					for (const $ of l)
						try {
							$.item &&
								"source" in $.item &&
								$.item.source?.id === b &&
								(this.c.add(b), await $.run());
						} catch (v) {
							console.error(v);
						}
					if (!this.c.has(b)) return;
					this.c.delete(new r.$Gn(b)), s.dispose();
					const y = this.a;
					return (this.a = void 0), y ?? void 0;
				}
				async closeReporter() {
					this.b?.close();
				}
				async reloadWithExtensionsDisabled() {
					if (this.b)
						try {
							await this.m.reload({ disableExtensions: !0 });
						} catch (b) {
							this.k.error(b);
						}
				}
				async showConfirmCloseDialog() {
					await this.l.prompt({
						type: w.default.Warning,
						message: (0, E.localize)(7209, null),
						buttons: [
							{
								label: (0, E.localize)(7210, null),
								run: () => {
									this.closeReporter(), (this.b = null);
								},
							},
							{ label: (0, E.localize)(7211, null), run: () => {} },
						],
					});
				}
				async showClipboardDialog() {
					let b = !1;
					return (
						await this.l.prompt({
							type: w.default.Warning,
							message: (0, E.localize)(7212, null),
							buttons: [
								{
									label: (0, E.localize)(7213, null),
									run: () => {
										b = !0;
									},
								},
								{
									label: (0, E.localize)(7214, null),
									run: () => {
										b = !1;
									},
								},
							],
						}),
						b
					);
				}
				hasToReload(b) {
					return b.extensionId && this.c.has(b.extensionId)
						? ((this.a = b), this.b?.focus(), !0)
						: this.b
							? (this.b.focus(), !0)
							: !1;
				}
			};
			(e.$u6c = o),
				(e.$u6c = o =
					Ne(
						[
							j(0, u.$Li),
							j(1, g.$AEb),
							j(2, C.$YX),
							j(3, d.$6j),
							j(4, a.$ik),
							j(5, m.$GO),
							j(6, p.$asb),
						],
						o,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3449],
		he([1, 0, 11, 8, 57, 113, 5, 34, 110, 372, 3448, 3070, 703, 87, 2447]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ggd = void 0),
				(r = xi(r));
			let n = class extends u.$u6c {
				constructor(p, o, f, b, s, l, y, $, v) {
					super(p, o, s, l, f, b, y), (this.n = $), (this.o = v);
				}
				async openReporter(p) {
					if (this.hasToReload(p)) return;
					const o = await this.n.getActiveWindowPosition();
					if (!o) return;
					await this.openAuxIssueReporter(p, o);
					const {
						arch: f,
						release: b,
						type: s,
					} = await this.n.getOSProperties();
					(this.d = f),
						(this.e = b),
						(this.f = s),
						this.b &&
							this.g
								.createInstance(
									a.$fgd,
									!!this.o.disableExtensions,
									p,
									{ type: this.f, arch: this.d, release: this.e },
									r.default,
									this.b,
								)
								.render();
				}
			};
			(e.$ggd = n),
				(e.$ggd = n =
					Ne(
						[
							j(0, C.$Li),
							j(1, h.$AEb),
							j(2, d.$ik),
							j(3, w.$GO),
							j(4, t.$YX),
							j(5, i.$6j),
							j(6, c.$asb),
							j(7, m.$y7c),
							j(8, E.$Ui),
						],
						n,
					));
		},
	),
		define(
			de[3450],
			he([
				1, 0, 4, 20, 96, 703, 10, 110, 57, 240, 5, 52, 32, 87, 676, 139, 7, 78,
				12,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aed = e.$_dd = void 0);
				let s = (b = class extends E.$BEb {
					constructor($, v, S, I, T, P, k, L, D) {
						super($, v, S, I, k, L),
							(this.L = T),
							(this.M = P),
							(this.N = D),
							(this.I = !1),
							(this.J = !1),
							f.$m || this.O(),
							this.P();
					}
					O() {
						(async () =>
							(this.J = await this.L.isMaximized({
								targetWindowId: this.window.vscodeWindowId,
							})))(),
							this.D(
								this.L.onDidMaximizeWindow(($) => {
									$ === this.window.vscodeWindowId && (this.J = !0);
								}),
							),
							this.D(
								this.L.onDidUnmaximizeWindow(($) => {
									$ === this.window.vscodeWindowId && (this.J = !1);
								}),
							);
					}
					async P() {
						(await this.L.isFullScreen({
							targetWindowId: this.window.vscodeWindowId,
						})) && (0, g.$Lfb)(!0, this.window);
					}
					async C($, v) {
						this.F($), await this.N.error(v, (0, t.localize)(12108, null));
					}
					async G($) {
						if (this.I) return;
						this.F($),
							(await this.M.invokeFunction((S) =>
								b.confirmOnShutdown(S, a.ShutdownReason.CLOSE),
							)) &&
								((this.I = !0),
								this.L.closeWindow({
									targetWindowId: this.window.vscodeWindowId,
								}));
					}
					F($) {
						$.preventDefault(), ($.returnValue = !0);
					}
					createState() {
						const $ = super.createState(),
							v = (0, g.$Mfb)(this.window);
						return {
							...$,
							bounds: $.bounds,
							mode: this.J
								? E.AuxiliaryWindowMode.Maximized
								: v
									? E.AuxiliaryWindowMode.Fullscreen
									: E.AuxiliaryWindowMode.Normal,
						};
					}
				});
				(e.$_dd = s),
					(e.$_dd =
						s =
						b =
							Ne(
								[
									j(3, C.$gj),
									j(4, d.$y7c),
									j(5, u.$Li),
									j(6, c.$asb),
									j(7, o.$r8),
									j(8, m.$GO),
								],
								s,
							));
				let l = class extends E.$CEb {
					constructor($, v, S, I, T, P, k, L) {
						super($, I, v, P, k, L), (this.F = S), (this.G = T);
					}
					async t($) {
						(0, r.mark)("code/auxiliaryWindow/willResolveWindowId");
						const v = await $.vscode.ipcRenderer.invoke(
							"vscode:registerAuxiliaryWindow",
							this.F.windowId,
						);
						return (0, r.mark)("code/auxiliaryWindow/didResolveWindowId"), v;
					}
					u($, v, S) {
						let I;
						return (
							typeof S?.zoomLevel == "number"
								? (I = S.zoomLevel)
								: (I = (0, g.$Hfb)((0, p.$Ogb)())),
							(0, n.$28c)(I, $),
							super.u($, v)
						);
					}
					r($, v, S) {
						return new s(
							$,
							v,
							S,
							this.j,
							this.F,
							this.G,
							this.n,
							this.q,
							this.h,
						);
					}
				};
				(e.$aed = l),
					(e.$aed = l =
						Ne(
							[
								j(0, w.$mEb),
								j(1, C.$gj),
								j(2, d.$y7c),
								j(3, m.$GO),
								j(4, u.$Li),
								j(5, h.$km),
								j(6, c.$asb),
								j(7, o.$r8),
							],
							l,
						)),
					(0, i.$lK)(E.$AEb, l, i.InstantiationType.Delayed);
			},
		),
		define(
			de[3451],
			he([1, 0, 75, 113, 22, 34, 1832, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ncd = r);
				let m = class extends C.$wEb {
					constructor(a, h, c, n, g) {
						super(h, c, n, g), (this.h = a);
					}
					exitApplication() {
						return this.h.exitApplication();
					}
				};
				m = Ne([j(1, w.$ll), j(2, i.$Ti), j(3, d.$n6), j(4, E.$ik)], m);
				function r(u, a) {
					Object.assign(t.$Bfb, { driver: u.createInstance(m, a) });
				}
			},
		),
		define(
			de[1834],
			he([
				1, 0, 4, 119, 21, 109, 20, 40, 87, 5, 11, 8, 57, 52, 30, 55, 31, 34, 62,
				78, 154, 99, 157,
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
			) {
				"use strict";
				var $, v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xwc = void 0),
					(e.$xwc = (0, r.$Mi)("IExtensionBisectService"));
				class S {
					static fromJSON(k) {
						if (k)
							try {
								const L = JSON.parse(k);
								return new S(L.extensions, L.low, L.high, L.mid);
							} catch {
								return;
							}
					}
					constructor(k, L, D, M = ((L + D) / 2) | 0) {
						(this.extensions = k),
							(this.low = L),
							(this.high = D),
							(this.mid = M);
					}
				}
				let I = class {
					static {
						$ = this;
					}
					static {
						this.a = "extensionBisectState";
					}
					constructor(k, L, D) {
						(this.d = L), (this.e = D), (this.c = new Map());
						const M = L.get($.a, w.StorageScope.APPLICATION);
						if (((this.b = S.fromJSON(M)), this.b)) {
							const { mid: N, high: A } = this.b;
							for (let R = 0; R < this.b.extensions.length; R++) {
								const O = R >= N && R < A;
								this.c.set(this.b.extensions[R], O);
							}
							k.warn("extension BISECT active", [...this.c]);
						}
					}
					get isActive() {
						return !!this.b;
					}
					get disabledCount() {
						return this.b ? this.b.high - this.b.mid : -1;
					}
					isDisabledByBisect(k) {
						return !this.b ||
							(0, E.$Mn)(k.manifest, this.e.remoteAuthority) ||
							this.f(k)
							? !1
							: (this.c.get(k.identifier.id) ?? !1);
					}
					f(k) {
						return (
							Array.isArray(this.e.enableExtensions) &&
							this.e.enableExtensions.some((L) =>
								(0, s.$7p)({ id: L }, k.identifier),
							)
						);
					}
					async start(k) {
						if (this.b) throw new Error("invalid state");
						const L = k.map((M) => M.identifier.id),
							D = new S(L, 0, L.length, 0);
						this.d.store(
							$.a,
							JSON.stringify(D),
							w.StorageScope.APPLICATION,
							w.StorageTarget.MACHINE,
						),
							await this.d.flush();
					}
					async next(k) {
						if (!this.b) throw new Error("invalid state");
						if (
							k &&
							this.b.mid === 0 &&
							this.b.high === this.b.extensions.length
						)
							return { bad: !0, id: "" };
						if (this.b.low === this.b.high - 1)
							return (
								await this.reset(),
								{ id: this.b.extensions[this.b.low], bad: k }
							);
						const L = new S(
							this.b.extensions,
							k ? this.b.low : this.b.mid,
							k ? this.b.mid : this.b.high,
						);
						this.d.store(
							$.a,
							JSON.stringify(L),
							w.StorageScope.APPLICATION,
							w.StorageTarget.MACHINE,
						),
							await this.d.flush();
					}
					async reset() {
						this.d.remove($.a, w.StorageScope.APPLICATION),
							await this.d.flush();
					}
				};
				(I = $ = Ne([j(0, o.$ik), j(1, w.$lq), j(2, b.$r8)], I)),
					(0, C.$lK)(e.$xwc, I, C.InstantiationType.Delayed);
				let T = class {
					static {
						v = this;
					}
					static {
						this.ctxIsBisectActive = new a.$5j("isExtensionBisectActive", !1);
					}
					constructor(k, L, D, M) {
						(this.a = L),
							(this.b = D),
							(this.c = M),
							L.isActive && (v.ctxIsBisectActive.bindTo(k).set(!0), this.d());
					}
					d() {
						const k = {
								label: (0, t.localize)(12249, null),
								run: () => this.c.executeCommand("extension.bisect.next", !1),
							},
							L = {
								label: (0, t.localize)(12250, null),
								run: () => this.c.executeCommand("extension.bisect.next", !0),
							},
							D = {
								label: "Stop Bisect",
								run: () => this.c.executeCommand("extension.bisect.stop"),
							},
							M =
								this.a.disabledCount === 1
									? (0, t.localize)(12251, null)
									: (0, t.localize)(12252, null, this.a.disabledCount);
						this.b.prompt(d.Severity.Info, M, [k, L, D], {
							sticky: !0,
							priority: d.NotificationPriority.URGENT,
						});
					}
				};
				(T = v = Ne([j(0, a.$6j), j(1, e.$xwc), j(2, d.$4N), j(3, p.$ek)], T)),
					n.$Io
						.as(g.Extensions.Workbench)
						.registerWorkbenchContribution(T, c.LifecyclePhase.Restored),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.start",
									title: (0, t.localize2)(12269, "Start Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive.negate(),
									menu: {
										id: u.$XX.ViewContainerTitle,
										when: a.$Kj.equals(
											"viewContainer",
											"workbench.view.extensions",
										),
										group: "2_enablement",
										order: 4,
									},
								});
							}
							async run(P) {
								const k = P.get(h.$GO),
									L = P.get(m.$asb),
									D = P.get(i.$Hp),
									M = P.get(y.$IQb),
									N = P.get(e.$xwc),
									A = (await D.getInstalled(E.ExtensionType.User)).filter((O) =>
										M.isEnabled(O),
									);
								(
									await k.confirm({
										message: (0, t.localize)(12253, null),
										detail: (0, t.localize)(
											12254,
											null,
											(2 + Math.log2(A.length)) | 0,
										),
										primaryButton: (0, t.localize)(12255, null),
									})
								).confirmed && (await N.start(A), L.reload());
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.next",
									title: (0, t.localize2)(12270, "Continue Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive,
								});
							}
							async run(P, k) {
								const L = P.get(h.$GO),
									D = P.get(m.$asb),
									M = P.get(e.$xwc),
									N = P.get(f.$Bk),
									A = P.get(i.$Kp),
									R = P.get(p.$ek);
								if (!M.isActive) return;
								if (k === void 0) {
									const B = await this.a(L, M);
									if (B === null) return;
									k = B;
								}
								if (k === void 0) {
									await M.reset(), D.reload();
									return;
								}
								const O = await M.next(k);
								if (!O) {
									D.reload();
									return;
								}
								if (O.bad)
									await L.info(
										(0, t.localize)(12256, null),
										(0, t.localize)(12257, null, N.nameShort),
									);
								else {
									const B = await L.confirm({
										type: d.Severity.Info,
										message: (0, t.localize)(12258, null),
										primaryButton: (0, t.localize)(12259, null),
										cancelButton: (0, t.localize)(12260, null),
										detail: (0, t.localize)(12261, null, O.id),
										checkbox: {
											label: (0, t.localize)(12262, null),
											checked: !0,
										},
									});
									B.checkboxChecked &&
										(await A.disableExtension({ id: O.id }, void 0)),
										B.confirmed &&
											(await R.executeCommand(
												"workbench.action.openIssueReporter",
												O.id,
											));
								}
								await M.reset(), D.reload();
							}
							async a(P, k) {
								const { result: L } = await P.prompt({
									type: d.Severity.Info,
									message: (0, t.localize)(12263, null),
									detail: (0, t.localize)(12264, null, k.disabledCount),
									buttons: [
										{ label: (0, t.localize)(12265, null), run: () => !1 },
										{ label: (0, t.localize)(12266, null), run: () => !0 },
										{ label: (0, t.localize)(12267, null), run: () => {} },
									],
									cancelButton: {
										label: (0, t.localize)(12268, null),
										run: () => null,
									},
								});
								return L;
							}
						},
					),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: "extension.bisect.stop",
									title: (0, t.localize2)(12271, "Stop Extension Bisect"),
									category: l.$ck.Help,
									f1: !0,
									precondition: T.ctxIsBisectActive,
								});
							}
							async run(P) {
								const k = P.get(e.$xwc),
									L = P.get(m.$asb);
								await k.reset(), L.reload();
							}
						},
					);
			},
		),
		define(
			de[1835],
			he([
				1, 0, 4, 3, 9, 10, 57, 5, 21, 465, 87, 53, 109, 20, 55, 11, 63, 179, 32,
				62, 7, 75, 31, 29, 40, 78,
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
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Loc = void 0);
				const T = 5 * 60 * 1e3,
					P = 30 * 1e3,
					k = "extensionUrlHandler.urlToHandle",
					L = "extensions.confirmedUriHandlerExtensionIds",
					D = "extensionUrlHandler.confirmedExtensions";
				function M(B) {
					return /^[a-z0-9][a-z0-9\-]*\.[a-z0-9][a-z0-9\-]*$/i.test(B);
				}
				class N {
					get extensions() {
						const U = this.a.get(D, m.StorageScope.PROFILE, "[]");
						try {
							return JSON.parse(U);
						} catch {
							return [];
						}
					}
					constructor(U) {
						this.a = U;
					}
					has(U) {
						return this.extensions.indexOf(U) > -1;
					}
					add(U) {
						this.set([...this.extensions, U]);
					}
					set(U) {
						this.a.store(
							D,
							JSON.stringify(U),
							m.StorageScope.PROFILE,
							m.StorageTarget.MACHINE,
						);
					}
				}
				e.$Loc = (0, d.$Mi)("extensionUrlHandler");
				let A = class {
					constructor(U, z, F, x, H, q, V, G, K, J, W) {
						(this.e = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.i = q),
							(this.j = V),
							(this.k = G),
							(this.l = K),
							(this.m = J),
							(this.n = W),
							(this.a = new Map()),
							(this.b = new Map()),
							(this.c = new N(q));
						const X = (0, s.$igb)(l.$Bfb, () => this.q(), P),
							Y = this.i.get(k, m.StorageScope.WORKSPACE);
						Y &&
							(this.i.remove(k, m.StorageScope.WORKSPACE),
							this.handleURL(w.URI.revive(JSON.parse(Y)), { trusted: !0 })),
							(this.d = (0, i.$Xc)(U.registerHandler(this), X));
						const ie = R.cache;
						setTimeout(() => ie.forEach(([ne, ee]) => this.handleURL(ne, ee)));
					}
					async handleURL(U, z) {
						if (!M(U.authority)) return !1;
						const F = U.authority;
						this.k.publicLog2("uri_invoked/start", { extensionId: F });
						const x = this.a.get(h.$Gn.toKey(F));
						let H;
						if (x) H = x.extensionDisplayName;
						else {
							const J = await this.e.getExtension(F);
							if (J) H = J.displayName ?? "";
							else return await this.p(U, F, z), !0;
						}
						if (
							!(
								z?.trusted ||
								this.m.trustedExtensionProtocolHandlers?.includes(F) ||
								this.r(h.$Gn.toKey(F))
							)
						) {
							let J = U.toString(!1);
							J.length > 40 &&
								(J = `${J.substring(0, 30)}...${J.substring(J.length - 5)}`);
							const W = await this.f.confirm({
								message: (0, t.localize)(12325, null, H),
								checkbox: { label: (0, t.localize)(12326, null) },
								detail: J,
								primaryButton: (0, t.localize)(12327, null),
							});
							if (!W.confirmed)
								return (
									this.k.publicLog2("uri_invoked/cancel", { extensionId: F }),
									!0
								);
							W.checkboxChecked && this.c.add(h.$Gn.toKey(F));
						}
						const V = this.a.get(h.$Gn.toKey(F));
						if (V) return x ? !1 : await this.o(F, V, U, z);
						const G = new Date().getTime();
						let K = this.b.get(h.$Gn.toKey(F));
						return (
							K || ((K = []), this.b.set(h.$Gn.toKey(F), K)),
							K.push({ timestamp: G, uri: U }),
							await this.e.activateByEvent(
								`onUri:${h.$Gn.toKey(F)}`,
								a.ActivationKind.Immediate,
							),
							!0
						);
					}
					registerExtensionHandler(U, z) {
						this.a.set(h.$Gn.toKey(U), z);
						const F = this.b.get(h.$Gn.toKey(U)) || [];
						for (const { uri: x } of F) this.o(U, z, x);
						this.b.delete(h.$Gn.toKey(U));
					}
					unregisterExtensionHandler(U) {
						this.a.delete(h.$Gn.toKey(U));
					}
					async o(U, z, F, x) {
						return (
							this.k.publicLog2("uri_invoked/end", {
								extensionId: h.$Gn.toKey(U),
							}),
							await z.handleURL(F, x)
						);
					}
					async p(U, z, F) {
						this.k.publicLog2("uri_invoked/install_extension/start", {
							extensionId: z,
						});
						try {
							await this.g.executeCommand(
								"workbench.extensions.installExtension",
								z,
								{
									justification: {
										reason: `${(0, t.localize)(12328, null)}
${U.toString()}`,
										action: (0, t.localize)(12329, null),
									},
									enable: !0,
								},
							),
								this.k.publicLog2("uri_invoked/install_extension/accept", {
									extensionId: z,
								});
						} catch (H) {
							(0, $.$8)(H)
								? this.k.publicLog2("uri_invoked/install_extension/cancel", {
										extensionId: z,
									})
								: (this.k.publicLog2("uri_invoked/install_extension/error", {
										extensionId: z,
									}),
									this.l.error(H));
							return;
						}
						if (await this.e.getExtension(z))
							await this.handleURL(U, { ...F, trusted: !0 });
						else {
							if (
								(this.k.publicLog2("uri_invoked/install_extension/reload", {
									extensionId: z,
									isRemote: !!this.n.remoteAuthority,
								}),
								!(
									await this.f.confirm({
										message: (0, t.localize)(12330, null, z),
										primaryButton: (0, t.localize)(12331, null),
									})
								).confirmed)
							)
								return;
							this.i.store(
								k,
								JSON.stringify(U.toJSON()),
								m.StorageScope.WORKSPACE,
								m.StorageTarget.MACHINE,
							),
								await this.h.reload();
						}
					}
					q() {
						const U = new Date().getTime(),
							z = new Map();
						this.b.forEach((F, x) => {
							(F = F.filter(({ timestamp: H }) => U - H < T)),
								F.length > 0 && z.set(x, F);
						}),
							(this.b = z);
					}
					r(U) {
						return this.c.has(U) ? !0 : this.s().indexOf(U) > -1;
					}
					s() {
						const U = this.j.getValue(L);
						return Array.isArray(U) ? U : [];
					}
					dispose() {
						this.d.dispose(), this.a.clear(), this.b.clear();
					}
				};
				(A = Ne(
					[
						j(0, r.$2rb),
						j(1, a.$q2),
						j(2, C.$GO),
						j(3, y.$ek),
						j(4, u.$asb),
						j(5, m.$lq),
						j(6, E.$gj),
						j(7, f.$km),
						j(8, v.$4N),
						j(9, b.$Bk),
						j(10, S.$r8),
					],
					A,
				)),
					(0, c.$lK)(e.$Loc, A, c.InstantiationType.Eager);
				let R = class {
					static {
						I = this;
					}
					static {
						this.ID = "workbench.contrib.extensionUrlBootstrapHandler";
					}
					static {
						this.a = [];
					}
					static get cache() {
						I.b.dispose();
						const U = I.a;
						return (I.a = []), U;
					}
					constructor(U) {
						I.b = U.registerHandler(this);
					}
					async handleURL(U, z) {
						return M(U.authority) ? (I.a.push([U, z]), !0) : !1;
					}
				};
				(R = I = Ne([j(0, r.$2rb)], R)),
					(0, n.$s6)(R.ID, R, n.WorkbenchPhase.BlockRestore);
				class O extends g.$3X {
					constructor() {
						super({
							id: "workbench.extensions.action.manageAuthorizedExtensionURIs",
							title: (0, t.localize2)(
								12333,
								"Manage Authorized Extension URIs...",
							),
							category: (0, t.localize2)(12334, "Extensions"),
							menu: { id: g.$XX.CommandPalette, when: o.$7Lb.toNegated() },
						});
					}
					async run(U) {
						const z = U.get(m.$lq),
							F = U.get(p.$DJ),
							x = new N(z),
							H = x.extensions.map((V) => ({ label: V, picked: !0 }));
						if (H.length === 0) {
							await F.pick([{ label: (0, t.localize)(12332, null) }]);
							return;
						}
						const q = await F.pick(H, { canPickMany: !0 });
						q && x.set(q.map((V) => V.label));
					}
				}
				(0, g.$4X)(O);
			},
		),
		define(
			de[3452],
			he([1, 0, 88, 101, 465, 1835, 109]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Moc = void 0);
				class d {
					constructor(u, a, h, c) {
						(this.a = u),
							(this.b = a),
							(this.extensionId = h),
							(this.extensionDisplayName = c);
					}
					handleURL(u, a) {
						return C.$Gn.equals(this.extensionId, u.authority)
							? Promise.resolve(this.a.$handleExternalUri(this.b, u)).then(
									() => !0,
								)
							: Promise.resolve(!1);
					}
				}
				let m = class {
					constructor(u, a, h) {
						(this.c = a),
							(this.d = h),
							(this.b = new Map()),
							(this.a = u.getProxy(t.$mbb.ExtHostUrls));
					}
					$registerUriHandler(u, a, h) {
						const c = new d(this.a, u, a, h),
							n = this.c.registerHandler(c);
						return (
							this.b.set(u, { extensionId: a, disposable: n }),
							this.d.registerExtensionHandler(a, c),
							Promise.resolve(void 0)
						);
					}
					$unregisterUriHandler(u) {
						const a = this.b.get(u);
						if (!a) return Promise.resolve(void 0);
						const { extensionId: h, disposable: c } = a;
						return (
							this.d.unregisterExtensionHandler(h),
							this.b.delete(u),
							c.dispose(),
							Promise.resolve(void 0)
						);
					}
					async $createAppUri(u) {
						return this.c.create(u);
					}
					dispose() {
						this.b.forEach(({ disposable: u }) => u.dispose()), this.b.clear();
					}
				};
				(e.$Moc = m),
					(e.$Moc = m =
						Ne(
							[(0, i.$tmc)(t.$lbb.MainThreadUrls), j(1, w.$2rb), j(2, E.$Loc)],
							m,
						));
			},
		),
		define(
			de[3453],
			he([
				1, 0, 15, 76, 29, 6, 3, 82, 12, 919, 162, 9, 47, 760, 904, 4, 767, 1611,
				73, 34, 110, 40, 62, 32, 269, 129, 25, 151, 1020, 3303, 1021, 53, 87,
				52, 698,
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
				k,
				L,
				D,
				M,
				N,
				A,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3dd = e.$2dd = void 0),
					(d = mt(d)),
					(m = mt(m)),
					(g = mt(g));
				class R {
					get onStdout() {
						return this.b.onDynamicStdout(this.a);
					}
					get onStderr() {
						return this.b.onDynamicStderr(this.a);
					}
					get onMessage() {
						return this.b.onDynamicMessage(this.a);
					}
					get onExit() {
						return this.b.onDynamicExit(this.a);
					}
					constructor(U, z) {
						(this.b = z), (this.a = U);
					}
					start(U) {
						return this.b.start(this.a, U);
					}
					enableInspectPort() {
						return this.b.enableInspectPort(this.a);
					}
					kill() {
						return this.b.kill(this.a);
					}
				}
				e.$2dd = R;
				let O = class {
					constructor(
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
					) {
						(this.runningLocation = U),
							(this.startup = z),
							(this.m = F),
							(this.n = x),
							(this.p = H),
							(this.q = q),
							(this.s = V),
							(this.t = G),
							(this.u = K),
							(this.v = J),
							(this.w = W),
							(this.x = X),
							(this.y = Y),
							(this.z = ie),
							(this.A = ne),
							(this.B = ee),
							(this.C = _),
							(this.D = te),
							(this.pid = null),
							(this.remoteAuthority = null),
							(this.extensions = null),
							(this.a = new E.$re()),
							(this.onExit = this.a.event),
							(this.b = new E.$re()),
							(this.c = new C.$Zc());
						const Q = (0, A.$Umc)(this.t);
						(this.d = Q.isExtensionDevHost),
							(this.f = Q.isExtensionDevDebug),
							(this.g = Q.isExtensionDevDebugBrk),
							(this.h = Q.isExtensionDevTestFromCli),
							(this.i = !1),
							(this.j = null),
							(this.k = null),
							(this.l = null),
							this.c.add(this.a),
							this.c.add(this.s.onWillShutdown((Z) => this.L(Z))),
							this.c.add(
								this.z.onClose((Z) => {
									this.d &&
										this.t.debugExtensionHost.debugId === Z.sessionId &&
										this.q.closeWindow();
								}),
							),
							this.c.add(
								this.z.onReload((Z) => {
									this.d &&
										this.t.debugExtensionHost.debugId === Z.sessionId &&
										this.A.reload();
								}),
							);
					}
					dispose() {
						this.i || ((this.i = !0), this.c.dispose());
					}
					start() {
						if (this.i) throw new w.$9();
						return this.l || (this.l = this.E()), this.l;
					}
					async E() {
						const [U, z, F] = await Promise.all([
							this.D.createExtensionHost(),
							this.F(),
							this.C.getShellEnv(),
						]);
						this.k = new R(U.id, this.D);
						const x = d.$yo(F, {
							VSCODE_AMD_ENTRYPOINT:
								"vs/workbench/api/node/extensionHostProcess",
							VSCODE_HANDLES_UNCAUGHT_ERRORS: !0,
						});
						this.t.debugExtensionHost.env &&
							d.$yo(x, this.t.debugExtensionHost.env),
							(0, r.$Am)(x),
							this.d && delete x.VSCODE_CODE_CACHE_PATH;
						const H = {
								responseWindowId: this.q.windowId,
								responseChannel: "vscode:startExtensionHostMessagePortResult",
								responseNonce: (0, h.$9g)(),
								env: x,
								detached: !!m.$l,
								execArgv: void 0,
								silent: !0,
							},
							q = "127.0.0.1";
						z !== 0
							? (H.execArgv = [
									"--nolazy",
									(this.g ? "--inspect-brk=" : "--inspect=") + `${q}:${z}`,
								])
							: (H.execArgv = ["--inspect-port=0"]),
							this.t.extensionTestsLocationURI &&
								H.execArgv.unshift("--expose-gc"),
							this.t.args["prof-v8-extensions"] && H.execArgv.unshift("--prof"),
							H.execArgv.unshift("--dns-result-order=ipv4first");
						const V = this.K(this.k.onStdout, this.c),
							G = this.K(this.k.onStderr, this.c),
							K = E.Event.any(
								E.Event.map(V.event, (Y) => ({ data: `%c${Y}`, format: [""] })),
								E.Event.map(G.event, (Y) => ({
									data: `%c${Y}`,
									format: ["color: red"],
								})),
							),
							J = E.Event.debounce(
								K,
								(Y, ie) =>
									Y
										? {
												data: Y.data + ie.data,
												format: [...Y.format, ...ie.format],
											}
										: { data: ie.data, format: ie.format },
								100,
							);
						this.c.add(
							J((Y) => {
								const ie =
									Y.data && Y.data.match(/ws:\/\/([^\s]+):(\d+)\/[^\s]+/);
								if (ie) {
									const [, ne, ee] = ie;
									!this.t.isBuilt &&
										!this.h &&
										console.log(
											`%c[Extension Host] %cdebugger inspector at devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${ie[1]}`,
											"color: blue",
											"color:",
										),
										this.j ||
											((this.j = { host: ne, port: Number(ee) }),
											this.b.fire());
								} else
									this.h ||
										(console.group("Extension Host"),
										console.log(Y.data, ...Y.format),
										console.groupEnd());
							}),
						),
							this.c.add(
								this.k.onExit(({ code: Y, signal: ie }) => this.J(Y, ie)),
							),
							z &&
								(this.d &&
									this.f &&
									this.t.debugExtensionHost.debugId &&
									this.z.attachSession(this.t.debugExtensionHost.debugId, z),
								(this.j = { port: z, host: q }),
								this.b.fire());
						let W;
						((!this.t.isBuilt && !this.t.remoteAuthority) || this.d) &&
							(W = setTimeout(() => {
								this.w.error(
									`[LocalProcessExtensionHost]: Extension host did not start in 10 seconds (debugBrk: ${this.g})`,
								);
								const Y = this.g
									? g.localize(12439, null)
									: g.localize(12440, null);
								this.p.prompt(
									l.Severity.Warning,
									Y,
									[
										{
											label: g.localize(12441, null),
											run: () => this.A.reload(),
										},
									],
									{ sticky: !0, priority: l.NotificationPriority.URGENT },
								);
							}, 1e4));
						const X = await this.G(this.k, H);
						return await this.H(X), clearTimeout(W), X;
					}
					async F() {
						if (typeof this.t.debugExtensionHost.port != "number") return 0;
						const U = this.t.debugExtensionHost.port,
							z = await this.q.findFreePort(U, 10, 5e3, 2048);
						return (
							this.h ||
								(z
									? (z !== U &&
											console.warn(
												`%c[Extension Host] %cProvided debugging port ${U} is not free, using ${z} instead.`,
												"color: blue",
												"color:",
											),
										this.g
											? console.warn(
													`%c[Extension Host] %cSTOPPED on first line for debugging on port ${z}`,
													"color: blue",
													"color:",
												)
											: console.info(
													`%c[Extension Host] %cdebugger listening on port ${z}`,
													"color: blue",
													"color:",
												))
									: console.warn(
											"%c[Extension Host] %cCould not find a free port for debugging",
											"color: blue",
											"color:",
										)),
							z || 0
						);
					}
					G(U, z) {
						(0, k.$un)(new k.$tn(), z.env);
						const F = (0, n.$lrb)(void 0, z.responseChannel, z.responseNonce);
						return new Promise((x, H) => {
							const q = setTimeout(() => {
								H("The local extension host took longer than 60s to connect.");
							}, 6e4);
							F.then((G) => {
								this.c.add(
									(0, C.$Yc)(() => {
										G.close();
									}),
								),
									clearTimeout(q);
								const K = new c.$zi();
								(G.onmessage = (J) => {
									J.data && K.fire(i.$Te.wrap(J.data));
								}),
									G.start(),
									x({
										onMessage: K.event,
										send: (J) => G.postMessage(J.buffer),
									});
							});
							const V = u.$le.create(!1);
							U.start(z).then(
								({ pid: G }) => {
									G && (this.pid = G),
										this.w.info(`Started local extension host with pid ${G}.`);
									const K = V.elapsed();
									m.$w &&
										this.w.info(`IExtensionHostStarter.start() took ${K} ms.`);
								},
								(G) => {
									H(G);
								},
							);
						});
					}
					H(U) {
						return new Promise((z, F) => {
							let x;
							const H = () => {
									x = setTimeout(() => {
										F(
											"The local extension host took longer than 60s to send its ready message.",
										);
									}, 6e4);
								},
								q = () => {
									clearTimeout(x);
								};
							H();
							const V = U.onMessage((G) => {
								if ((0, L.$Rn)(G, L.MessageType.Ready)) {
									q(),
										this.I().then((K) => {
											H(), U.send(i.$Te.fromString(JSON.stringify(K)));
										});
									return;
								}
								if ((0, L.$Rn)(G, L.MessageType.Initialized)) {
									q(), V.dispose(), z();
									return;
								}
								console.error(
									"received unexpected message during handshake phase from the extension host: ",
									G,
								);
							});
						});
					}
					async I() {
						const U = await this.m.getInitData();
						this.extensions = U.extensions;
						const z = this.n.getWorkspace();
						return {
							commit: this.B.commit,
							version: this.B.version,
							vscodeVersion: this.B.vscodeVersion,
							rendererPerformanceTimeOrigin: performance.timeOrigin,
							quality: this.B.quality,
							parentPid: 0,
							environment: {
								isExtensionDevelopmentDebug: this.f,
								appRoot: this.t.appRoot ? a.URI.file(this.t.appRoot) : void 0,
								appName: this.B.nameLong,
								appHost: this.B.embedderIdentifier || "desktop",
								appUriScheme: this.B.urlProtocol,
								extensionTelemetryLogResource: this.t.extHostTelemetryLogFile,
								isExtensionTelemetryLoggingOnly: (0, v.$Yp)(this.B, this.t),
								appLanguage: m.$z,
								extensionDevelopmentLocationURI:
									this.t.extensionDevelopmentLocationURI,
								extensionTestsLocationURI: this.t.extensionTestsLocationURI,
								globalStorageHome: this.u.defaultProfile.globalStorageHome,
								workspaceStorageHome: this.t.workspaceStorageHome,
								extensionLogLevel: this.t.extensionLogLevel,
							},
							workspace:
								this.n.getWorkbenchState() === I.WorkbenchState.EMPTY
									? void 0
									: {
											configuration: z.configuration ?? void 0,
											id: z.id,
											name: this.y.getWorkspaceLabel(z),
											isUntitled: z.configuration
												? (0, I.$aj)(z.configuration, this.t)
												: !1,
											transient: z.transient,
										},
							remote: {
								authority: this.t.remoteAuthority,
								connectionData: null,
								isRemote: !1,
							},
							consoleForward: {
								includeStack:
									!this.h &&
									(this.d ||
										!this.t.isBuilt ||
										this.B.quality !== "stable" ||
										this.t.verbose),
								logNative: !this.h && this.d,
							},
							extensions: this.extensions.toSnapshot(),
							telemetryInfo: {
								sessionId: this.v.sessionId,
								machineId: this.v.machineId,
								macMachineId: this.v.macMachineId,
								sqmId: this.v.sqmId,
								devDeviceId: this.v.devDeviceId,
								firstSessionDate: this.v.firstSessionDate,
								msftInternal: this.v.msftInternal,
							},
							logLevel: this.w.getLevel(),
							loggers: [...this.x.getRegisteredLoggers()],
							logsLocation: this.t.extHostLogsPath,
							autoStart: this.startup === D.ExtensionHostStartup.EagerAutoStart,
							uiKind: L.UIKind.Desktop,
						};
					}
					J(U, z) {
						this.i || this.a.fire([U, z]);
					}
					K(U, z) {
						let F = "",
							x = !1;
						const H = new E.$re();
						return (
							U(
								(q) => {
									F += q;
									const V = F.split(/\r?\n/g);
									(F = V.pop()), F.length > 1e4 && (V.push(F), (F = ""));
									for (const G of V)
										x
											? G === L.NativeLogMarkers.End && (x = !1)
											: G === L.NativeLogMarkers.Start
												? (x = !0)
												: G.length &&
													H.fire(
														G +
															`
`,
													);
								},
								void 0,
								z,
							),
							H
						);
					}
					async enableInspectPort() {
						return this.j
							? !0
							: !this.k || !(await this.k.enableInspectPort())
								? !1
								: (await Promise.race([
										E.Event.toPromise(this.b.event),
										(0, t.$Nh)(1e3),
									]),
									!!this.j);
					}
					getInspectPort() {
						return this.j ?? void 0;
					}
					L(U) {
						this.d &&
							!this.h &&
							!this.f &&
							this.t.debugExtensionHost.debugId &&
							(this.z.terminateSession(this.t.debugExtensionHost.debugId),
							U.join((0, t.$Nh)(100), {
								id: "join.extensionDevelopment",
								label: g.localize(12442, null),
							}));
					}
				};
				(e.$3dd = O),
					(e.$3dd = O =
						Ne(
							[
								j(3, I.$Vi),
								j(4, l.$4N),
								j(5, s.$y7c),
								j(6, N.$n6),
								j(7, T.$ucd),
								j(8, S.$Xl),
								j(9, $.$km),
								j(10, b.$ik),
								j(11, b.$jk),
								j(12, f.$3N),
								j(13, p.$dp),
								j(14, M.$asb),
								j(15, y.$Bk),
								j(16, P.$Cdd),
								j(17, o.$u7c),
							],
							O,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3454],
		he([1, 0, 4, 111, 9, 1297, 52, 62, 40, 21, 20, 41, 23, 1600, 34]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
			"use strict";
			var g;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Vdd = void 0),
				(i = xi(i));
			class p {
				static {
					this.a = "integrityService";
				}
				constructor(b) {
					(this.c = b), (this.b = this.d());
				}
				d() {
					const b = this.c.get(p.a, r.StorageScope.APPLICATION);
					if (!b) return null;
					try {
						return JSON.parse(b);
					} catch {
						return null;
					}
				}
				get() {
					return this.b;
				}
				set(b) {
					(this.b = b),
						this.c.store(
							p.a,
							JSON.stringify(this.b),
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						);
				}
			}
			let o = (g = class {
				isPure() {
					return this.b;
				}
				constructor(b, s, l, y, $, v, S) {
					(this.c = b),
						(this.d = s),
						(this.e = l),
						(this.f = y),
						(this.g = $),
						(this.h = v),
						(this.j = S),
						(this.a = new p(this.d)),
						(this.b = this.l()),
						this.k();
				}
				async k() {
					const { isPure: b } = await this.isPure();
					if (b) return;
					this.j.warn(`

----------------------------------------------
***	Installation has been modified on disk ***
----------------------------------------------

`);
					const s = this.a.get();
					(s?.dontShowPrompt && s.commit === this.g.commit) || this.o();
				}
				async l() {
					const b = this.g.checksums || {};
					await this.e.when(C.LifecyclePhase.Eventually);
					const s = await Promise.all(
						Object.keys(b).map((y) => this.m(y, b[y])),
					);
					let l = !0;
					for (let y = 0, $ = s.length; y < $; y++)
						if (!s[y].isPure) {
							l = !1;
							break;
						}
					return { isPure: l, proof: s };
				}
				async m(b, s) {
					const l = h.$7g.asFileUri(b);
					try {
						const y = await this.h.checksum(l);
						return g.n(l, y, s);
					} catch {
						return g.n(l, "", s);
					}
				}
				static n(b, s, l) {
					return { uri: b, actual: s, expected: l, isPure: s === l };
				}
				o() {
					const b = this.g.checksumFailMoreInfoUrl,
						s = (0, t.localize)(12482, null, this.g.nameShort);
					b
						? this.c.prompt(
								i.default.Warning,
								s,
								[
									{
										label: (0, t.localize)(12483, null),
										run: () => this.f.open(w.URI.parse(b)),
									},
									{
										label: (0, t.localize)(12484, null),
										isSecondary: !0,
										run: () =>
											this.a.set({ dontShowPrompt: !0, commit: this.g.commit }),
									},
								],
								{ sticky: !0, priority: m.NotificationPriority.URGENT },
							)
						: this.c.notify({
								severity: i.default.Warning,
								message: s,
								sticky: !0,
								priority: m.NotificationPriority.URGENT,
							});
				}
			});
			(e.$Vdd = o),
				(e.$Vdd =
					o =
					g =
						Ne(
							[
								j(0, m.$4N),
								j(1, r.$lq),
								j(2, C.$n6),
								j(3, a.$7rb),
								j(4, d.$Bk),
								j(5, c.$f9c),
								j(6, n.$ik),
							],
							o,
						)),
				(0, u.$lK)(E.$k4c, o, u.InstantiationType.Delayed);
		},
	),
		define(
			de[3455],
			he([1, 0, 6, 15, 3, 52, 34, 240, 21]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sEb = void 0);
				let u = class extends w.$1c {
					static {
						r = this;
					}
					static {
						this.a = "lifecyle.lastShutdownReason";
					}
					get startupKind() {
						return this.j;
					}
					get phase() {
						return this.m;
					}
					constructor(h, c) {
						super(),
							(this.r = h),
							(this.s = c),
							(this.b = this.D(new t.$re())),
							(this.onBeforeShutdown = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onWillShutdown = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidShutdown = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onBeforeShutdownError = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onShutdownVeto = this.h.event),
							(this.m = E.LifecyclePhase.Starting),
							(this.n = new Map()),
							(this.j = this.t()),
							this.D(
								this.s.onWillSaveState((n) => {
									n.reason === m.WillSaveStateReason.SHUTDOWN &&
										this.s.store(
											r.a,
											this.q,
											m.StorageScope.WORKSPACE,
											m.StorageTarget.MACHINE,
										);
								}),
							);
					}
					t() {
						const h = this.u() ?? E.StartupKind.NewWindow;
						return (
							this.r.trace(`[lifecycle] starting up (startup kind: ${h})`), h
						);
					}
					u() {
						const h = this.s.getNumber(r.a, m.StorageScope.WORKSPACE);
						this.s.remove(r.a, m.StorageScope.WORKSPACE);
						let c;
						switch (h) {
							case E.ShutdownReason.RELOAD:
								c = E.StartupKind.ReloadedWindow;
								break;
							case E.ShutdownReason.LOAD:
								c = E.StartupKind.ReopenedWindow;
								break;
						}
						return c;
					}
					set phase(h) {
						if (h < this.phase)
							throw new Error("Lifecycle cannot go backwards");
						if (this.m === h) return;
						this.r.trace(`lifecycle: phase changed (value: ${h})`),
							(this.m = h),
							(0, d.mark)(`code/LifecyclePhase/${(0, E.$p6)(h)}`);
						const c = this.n.get(this.m);
						c && (c.open(), this.n.delete(this.m));
					}
					async when(h) {
						if (h <= this.m) return;
						let c = this.n.get(h);
						c || ((c = new i.$Lh()), this.n.set(h, c)), await c.wait();
					}
				};
				(e.$sEb = u), (e.$sEb = u = r = Ne([j(0, C.$ik), j(1, m.$lq)], u));
			},
		),
		define(
			de[3456],
			he([1, 0, 1619, 52, 21, 320, 34, 3455, 20, 110, 15, 163, 33]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				var c;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sdd = void 0);
				let n = class extends d.$sEb {
					static {
						c = this;
					}
					static {
						this.w = 5e3;
					}
					static {
						this.y = 800;
					}
					constructor(p, o, f) {
						super(f, o), (this.z = p), this.C();
					}
					C() {
						const p = this.z.windowId;
						E.$P.on("vscode:onBeforeUnload", async (o, f) => {
							this.r.trace(`[lifecycle] onBeforeUnload (reason: ${f.reason})`),
								(await this.F(f.reason))
									? (this.r.trace(
											"[lifecycle] onBeforeUnload prevented via veto",
										),
										this.h.fire(),
										E.$P.send(f.cancelChannel, p))
									: (this.r.trace(
											"[lifecycle] onBeforeUnload continues without veto",
										),
										(this.q = f.reason),
										E.$P.send(f.okChannel, p));
						}),
							E.$P.on("vscode:onWillUnload", async (o, f) => {
								this.r.trace(`[lifecycle] onWillUnload (reason: ${f.reason})`),
									await this.H(f.reason),
									this.f.fire(),
									E.$P.send(f.replyChannel, p);
							});
					}
					async F(p) {
						const o = this.r,
							f = [],
							b = new Set();
						let s, l;
						this.b.fire({
							reason: p,
							veto($, v) {
								f.push($),
									$ === !0
										? o.info(`[lifecycle]: Shutdown was prevented (id: ${v})`)
										: $ instanceof Promise &&
											(b.add(v),
											$.then((S) => {
												S === !0 &&
													o.info(
														`[lifecycle]: Shutdown was prevented (id: ${v})`,
													);
											}).finally(() => b.delete(v)));
							},
							finalVeto($, v) {
								if (!s) (s = $), (l = v);
								else
									throw new Error(
										`[lifecycle]: Final veto is already defined (id: ${v})`,
									);
							},
						});
						const y = (0, u.$Oh)(() => {
							o.warn(
								`[lifecycle] onBeforeShutdown is taking a long time, pending operations: ${Array.from(b).join(", ")}`,
							);
						}, c.w);
						try {
							let $ = await (0, t.$G4c)(f, (v) => this.G(v, p));
							if ($) return $;
							if (s)
								try {
									b.add(l),
										($ = await s()),
										$ &&
											o.info(
												`[lifecycle]: Shutdown was prevented by final veto (id: ${l})`,
											);
								} catch (v) {
									($ = !0), this.G(v, p);
								}
							return $;
						} finally {
							y.dispose();
						}
					}
					G(p, o) {
						this.r.error(
							`[lifecycle]: Error during before-shutdown phase (error: ${(0, a.$xj)(p)})`,
						),
							this.g.fire({ reason: o, error: p });
					}
					async H(p) {
						const o = [],
							f = [],
							b = new Set(),
							s = new h.$Ce();
						this.c.fire({
							reason: p,
							token: s.token,
							joiners: () => Array.from(b.values()),
							join(y, $) {
								if ((b.add($), $.order === i.WillShutdownJoinerOrder.Last)) {
									const v = typeof y == "function" ? y : () => y;
									f.push(() => v().finally(() => b.delete($)));
								} else {
									const v = typeof y == "function" ? y() : y;
									v.finally(() => b.delete($)), o.push(v);
								}
							},
							force: () => {
								s.dispose(!0);
							},
						});
						const l = (0, u.$Oh)(() => {
							this.r.warn(
								`[lifecycle] onWillShutdown is taking a long time, pending operations: ${Array.from(
									b,
								)
									.map((y) => y.id)
									.join(", ")}`,
							);
						}, c.y);
						try {
							await (0, u.$Ah)(u.Promises.settled(o), s.token);
						} catch (y) {
							this.r.error(
								`[lifecycle]: Error during will-shutdown phase in default joiners (error: ${(0, a.$xj)(y)})`,
							);
						}
						try {
							await (0, u.$Ah)(u.Promises.settled(f.map((y) => y())), s.token);
						} catch (y) {
							this.r.error(
								`[lifecycle]: Error during will-shutdown phase in last joiners (error: ${(0, a.$xj)(y)})`,
							);
						}
						l.dispose();
					}
					shutdown() {
						return this.z.closeWindow();
					}
				};
				(e.$sdd = n),
					(e.$sdd = n = c = Ne([j(0, r.$y7c), j(1, w.$lq), j(2, C.$ik)], n)),
					(0, m.$lK)(i.$n6, n, m.InstantiationType.Eager);
			},
		),
		