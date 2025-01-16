define(
			de[60],
			he([1, 0, 6, 4, 5, 3, 59, 30, 82, 14, 79]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$M1 =
						e.$L1 =
						e.TreeItemCollapsibleState =
						e.ViewVisibilityState =
						e.$K1 =
						e.ViewContentGroups =
						e.$I1 =
						e.ViewContainerLocation =
						e.Extensions =
						e.$H1 =
						e.$G1 =
						e.$F1 =
							void 0),
					(e.$J1 = c),
					(e.$F1 = "views"),
					(e.$G1 = (0, i.localize)(4237, null)),
					(e.$H1 = (0, u.$$O)(
						"default-view-icon",
						r.$ak.window,
						(0, i.localize)(4238, null),
					));
				var a;
				(function (y) {
					(y.ViewContainersRegistry = "workbench.registry.view.containers"),
						(y.ViewsRegistry = "workbench.registry.view");
				})(a || (e.Extensions = a = {}));
				var h;
				(function (y) {
					(y[(y.Sidebar = 0)] = "Sidebar"),
						(y[(y.Panel = 1)] = "Panel"),
						(y[(y.AuxiliaryBar = 2)] = "AuxiliaryBar");
				})(h || (e.ViewContainerLocation = h = {})),
					(e.$I1 = [h.Sidebar, h.Panel, h.AuxiliaryBar]);
				function c(y) {
					switch (y) {
						case h.Sidebar:
							return "sidebar";
						case h.Panel:
							return "panel";
						case h.AuxiliaryBar:
							return "auxiliarybar";
					}
				}
				class n extends E.$1c {
					constructor() {
						super(...arguments),
							(this.c = this.D(new t.$re())),
							(this.onDidRegister = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidDeregister = this.f.event),
							(this.g = new Map()),
							(this.h = []);
					}
					get all() {
						return [...this.g.values()].flat();
					}
					registerViewContainer($, v, S) {
						const I = this.get($.id);
						if (I) return I;
						const T = $;
						return (
							(T.openCommandActionDescriptor = S?.doNotRegisterOpenCommand
								? void 0
								: (T.openCommandActionDescriptor ?? { id: T.id })),
							(0, C.$Dc)(this.g, v, []).push(T),
							S?.isDefault && this.h.push(T),
							this.c.fire({ viewContainer: T, viewContainerLocation: v }),
							T
						);
					}
					deregisterViewContainer($) {
						for (const v of this.g.keys()) {
							const S = this.g.get(v),
								I = S?.indexOf($);
							if (I !== -1) {
								S?.splice(I, 1),
									S.length === 0 && this.g.delete(v),
									this.f.fire({ viewContainer: $, viewContainerLocation: v });
								return;
							}
						}
					}
					get($) {
						return this.all.filter((v) => v.id === $)[0];
					}
					getViewContainers($) {
						return [...(this.g.get($) || [])];
					}
					getViewContainerLocation($) {
						return [...this.g.keys()].filter(
							(v) =>
								this.getViewContainers(v).filter((S) => S?.id === $.id).length >
								0,
						)[0];
					}
					getDefaultViewContainer($) {
						return this.h.find((v) => this.getViewContainerLocation(v) === $);
					}
				}
				d.$Io.add(a.ViewContainersRegistry, new n());
				var g;
				(function (y) {
					(y.Open = "2_open"),
						(y.Debug = "4_debug"),
						(y.SCM = "5_scm"),
						(y.More = "9_more");
				})(g || (e.ViewContentGroups = g = {}));
				function p(y, $) {
					const v = y.group ?? g.More,
						S = $.group ?? g.More;
					return v !== S ? v.localeCompare(S) : (y.order ?? 5) - ($.order ?? 5);
				}
				class o extends E.$1c {
					constructor() {
						super(...arguments),
							(this.c = this.D(new t.$re())),
							(this.onViewsRegistered = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onViewsDeregistered = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeContainer = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onDidChangeViewWelcomeContent = this.h.event),
							(this.j = []),
							(this.m = new Map()),
							(this.n = new C.$Nc());
					}
					registerViews($, v) {
						this.registerViews2([{ views: $, viewContainer: v }]);
					}
					registerViews2($) {
						$.forEach(({ views: v, viewContainer: S }) => this.q(v, S)),
							this.c.fire($);
					}
					deregisterViews($, v) {
						const S = this.r($, v);
						S.length && this.f.fire({ views: S, viewContainer: v });
					}
					moveViews($, v) {
						for (const S of this.m.keys())
							if (S !== v) {
								const I = this.r($, S);
								I.length &&
									(this.q(I, v), this.g.fire({ views: I, from: S, to: v }));
							}
					}
					getViews($) {
						return this.m.get($) || [];
					}
					getView($) {
						for (const v of this.j) {
							const S = (this.m.get(v) || []).filter((I) => I.id === $)[0];
							if (S) return S;
						}
						return null;
					}
					getViewContainer($) {
						for (const v of this.j)
							if ((this.m.get(v) || []).filter((I) => I.id === $)[0]) return v;
						return null;
					}
					registerViewWelcomeContent($, v) {
						return (
							this.n.add($, v),
							this.h.fire($),
							(0, E.$Yc)(() => {
								this.n.delete($, v), this.h.fire($);
							})
						);
					}
					registerViewWelcomeContent2($, v) {
						const S = new Map();
						for (const [I, T] of v)
							this.n.add($, T),
								S.set(
									I,
									(0, E.$Yc)(() => {
										this.n.delete($, T), this.h.fire($);
									}),
								);
						return this.h.fire($), S;
					}
					getViewWelcomeContent($) {
						const v = [];
						return this.n.forEach($, (S) => v.push(S)), v.sort(p);
					}
					q($, v) {
						let S = this.m.get(v);
						S || ((S = []), this.m.set(v, S), this.j.push(v));
						for (const I of $) {
							if (this.getView(I.id) !== null)
								throw new Error((0, i.localize)(4239, null, I.id));
							S.push(I);
						}
					}
					r($, v) {
						const S = this.m.get(v);
						if (!S) return [];
						const I = [],
							T = [];
						for (const P of S) $.includes(P) ? I.push(P) : T.push(P);
						return (
							I.length &&
								(T.length
									? this.m.set(v, T)
									: (this.m.delete(v), this.j.splice(this.j.indexOf(v), 1))),
							I
						);
					}
				}
				d.$Io.add(a.ViewsRegistry, new o()),
					(e.$K1 = (0, w.$Mi)("viewDescriptorService"));
				var f;
				(function (y) {
					(y[(y.Default = 0)] = "Default"), (y[(y.Expand = 1)] = "Expand");
				})(f || (e.ViewVisibilityState = f = {}));
				var b;
				(function (y) {
					(y[(y.None = 0)] = "None"),
						(y[(y.Collapsed = 1)] = "Collapsed"),
						(y[(y.Expanded = 2)] = "Expanded");
				})(b || (e.TreeItemCollapsibleState = b = {}));
				class s {
					constructor($, v) {
						(this.c = !1),
							(this.d = !1),
							(0, m.$yo)(this, $),
							(this.d = !!v),
							(this.resolve = async (S) => {
								if (v && !this.c) {
									const I = await v(S);
									I &&
										((this.tooltip = this.tooltip ?? I.tooltip),
										(this.command = this.command ?? I.command));
								}
								S.isCancellationRequested || (this.c = !0);
							});
					}
					get hasResolve() {
						return this.d;
					}
					resetResolve() {
						this.c = !1;
					}
					asTreeItem() {
						return {
							handle: this.handle,
							parentHandle: this.parentHandle,
							collapsibleState: this.collapsibleState,
							label: this.label,
							description: this.description,
							icon: this.icon,
							iconDark: this.iconDark,
							themeIcon: this.themeIcon,
							resourceUri: this.resourceUri,
							tooltip: this.tooltip,
							contextValue: this.contextValue,
							command: this.command,
							children: this.children,
							accessibilityInformation: this.accessibilityInformation,
						};
					}
				}
				e.$L1 = s;
				class l extends Error {
					constructor($) {
						super((0, i.localize)(4240, null, $)),
							(this.name = "NoTreeViewError");
					}
					static is($) {
						return !!$ && $.name === "NoTreeViewError";
					}
				}
				e.$M1 = l;
			},
		),
		