define(
			de[170],
			he([
				1, 0, 4, 5, 20, 6, 3, 8, 10, 22, 82, 12, 25, 970, 15, 68, 113, 59, 223,
				44, 90, 125,
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
				var y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aZ =
						e.$_Y =
						e.AutoSaveDisabledReason =
						e.AutoSaveMode =
						e.$$Y =
							void 0),
					(e.$$Y = new d.$5j("autoSaveAfterShortDelayContext", !1, !0));
				var $;
				(function (I) {
					(I[(I.OFF = 0)] = "OFF"),
						(I[(I.AFTER_SHORT_DELAY = 1)] = "AFTER_SHORT_DELAY"),
						(I[(I.AFTER_LONG_DELAY = 2)] = "AFTER_LONG_DELAY"),
						(I[(I.ON_FOCUS_CHANGE = 3)] = "ON_FOCUS_CHANGE"),
						(I[(I.ON_WINDOW_CHANGE = 4)] = "ON_WINDOW_CHANGE");
				})($ || (e.AutoSaveMode = $ = {}));
				var v;
				(function (I) {
					(I[(I.SETTINGS = 1)] = "SETTINGS"),
						(I[(I.OUT_OF_WORKSPACE = 2)] = "OUT_OF_WORKSPACE"),
						(I[(I.ERRORS = 3)] = "ERRORS"),
						(I[(I.DISABLED = 4)] = "DISABLED");
				})(v || (e.AutoSaveDisabledReason = v = {})),
					(e.$_Y = (0, i.$Mi)("filesConfigurationService"));
				let S = class extends C.$1c {
					static {
						y = this;
					}
					static {
						this.a = a.$r ? r.$Jl.AFTER_DELAY : r.$Jl.OFF;
					}
					static {
						this.b = 1e3;
					}
					static {
						this.f = {
							providerReadonly: {
								value: (0, t.localize)(12466, null),
								isTrusted: !0,
							},
							sessionReadonly: {
								value: (0, t.localize)(
									12467,
									null,
									"workbench.action.files.setActiveEditorWriteableInSession",
								),
								isTrusted: !0,
							},
							configuredReadonly: {
								value: (0, t.localize)(
									12468,
									null,
									`workbench.action.openSettings?${encodeURIComponent('["files.readonly"]')}`,
									"workbench.action.files.toggleActiveEditorReadonlyInSession",
								),
								isTrusted: !0,
							},
							fileLocked: {
								value: (0, t.localize)(
									12469,
									null,
									"workbench.action.files.setActiveEditorWriteableInSession",
								),
								isTrusted: !0,
							},
							fileReadonly: {
								value: (0, t.localize)(12470, null),
								isTrusted: !0,
							},
						};
					}
					constructor(T, P, k, L, D, M, N, A) {
						super(),
							(this.F = T),
							(this.G = P),
							(this.H = k),
							(this.I = L),
							(this.J = D),
							(this.L = M),
							(this.M = N),
							(this.N = A),
							(this.g = this.D(new E.$re())),
							(this.onDidChangeAutoSaveConfiguration = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidChangeAutoSaveDisabled = this.h.event),
							(this.j = this.D(new E.$re())),
							(this.onDidChangeFilesAssociation = this.j.event),
							(this.m = this.D(new E.$re())),
							(this.onDidChangeReadonly = this.m.event),
							(this.s = new o.$Jc(1e3)),
							(this.t = new o.$Gc()),
							(this.u = e.$$Y.bindTo(this.F)),
							(this.w = this.D(new n.$6h(() => this.O(r.$Nl)))),
							(this.y = this.D(new n.$6h(() => this.O(r.$Ol)))),
							(this.C = new o.$Gc((O) => this.J.extUri.getComparisonKey(O)));
						const R = P.getValue();
						(this.n = this.R(void 0, R.files)),
							(this.q = R?.files?.associations),
							(this.r = R?.files?.hotExit || r.$Kl.ON_EXIT),
							this.Q(R, !1),
							this.P();
					}
					O(T) {
						const P = this.D(
							new c.$0Y(
								(k) => this.G.getValue(T, { resource: k }),
								(k) => k.affectsConfiguration(T),
								this.H,
								this.G,
							),
						);
						return this.D(P.onExpressionChange(() => this.m.fire())), P;
					}
					isReadonly(T, P) {
						const k = this.L.getProvider(T.scheme);
						if (k && (0, r.$wl)(k))
							return k.readOnlyMessage ?? y.f.providerReadonly;
						const L = this.C.get(T);
						return typeof L == "boolean"
							? L === !0
								? y.f.sessionReadonly
								: !1
							: this.J.extUri.isEqualOrParent(T, this.I.userRoamingDataHome) ||
									this.J.extUri.isEqual(
										T,
										this.H.getWorkspace().configuration ?? void 0,
									)
								? !1
								: this.w.value.matches(T)
									? this.y.value.matches(T)
										? !1
										: y.f.configuredReadonly
									: this.z && P?.locked
										? y.f.fileLocked
										: P?.readonly
											? y.f.fileReadonly
											: !1;
					}
					async updateReadonly(T, P) {
						if (P === "toggle") {
							let k;
							try {
								k = await this.L.resolve(T, { resolveMetadata: !0 });
							} catch {}
							P = !this.isReadonly(T, k);
						}
						P === "reset" ? this.C.delete(T) : this.C.set(T, P), this.m.fire();
					}
					P() {
						this.D(
							this.G.onDidChangeConfiguration((T) => {
								T.affectsConfiguration("files") &&
									this.Q(this.G.getValue(), !0);
							}),
						);
					}
					Q(T, P) {
						(this.n = this.R(void 0, T.files)),
							this.s.clear(),
							this.u.set(
								this.getAutoSaveMode(void 0).mode === $.AFTER_SHORT_DELAY,
							),
							P && this.g.fire();
						const k = T?.files?.associations;
						(0, u.$zo)(this.q, k) || ((this.q = k), P && this.j.fire());
						const L = T?.files?.hotExit;
						L === r.$Kl.OFF || L === r.$Kl.ON_EXIT_AND_WINDOW_CLOSE
							? (this.r = L)
							: (this.r = r.$Kl.ON_EXIT);
						const D = !!T?.files?.readonlyFromPermissions;
						D !== !!this.z && ((this.z = D), P && this.m.fire());
					}
					getAutoSaveConfiguration(T) {
						const P = this.S(T);
						if (P) {
							let k = this.s.get(P);
							return (
								k ||
									((k = this.R(P, this.N.getValue(P, "files"))),
									this.s.set(P, k)),
								k
							);
						}
						return this.n;
					}
					R(T, P) {
						let k, L, D, M, N, A;
						switch (P?.autoSave ?? y.a) {
							case r.$Jl.AFTER_DELAY: {
								(k = "afterDelay"),
									(L =
										typeof P?.autoSaveDelay == "number" && P.autoSaveDelay >= 0
											? P.autoSaveDelay
											: y.b),
									(A = L <= y.b);
								break;
							}
							case r.$Jl.ON_FOCUS_CHANGE:
								k = "onFocusChange";
								break;
							case r.$Jl.ON_WINDOW_CHANGE:
								k = "onWindowChange";
								break;
						}
						return (
							P?.autoSaveWorkspaceFilesOnly === !0 &&
								((D = !0),
								T && !this.H.isInsideWorkspace(T) && ((N = !0), (A = void 0))),
							P?.autoSaveWhenNoErrors === !0 && ((M = !0), (A = void 0)),
							{
								autoSave: k,
								autoSaveDelay: L,
								autoSaveWorkspaceFilesOnly: D,
								autoSaveWhenNoErrors: M,
								isOutOfWorkspace: N,
								isShortAutoSaveDelay: A,
							}
						);
					}
					S(T) {
						return T instanceof f.$LO
							? b.$A1.getOriginalUri(T, {
									supportSideBySide: b.SideBySideEditor.PRIMARY,
								})
							: T;
					}
					hasShortAutoSaveDelay(T) {
						const P = this.S(T);
						return this.getAutoSaveConfiguration(P).isShortAutoSaveDelay
							? !P || !this.t.has(P)
							: !1;
					}
					getAutoSaveMode(T, P) {
						const k = this.S(T);
						if (k && this.t.has(k)) return { mode: $.OFF, reason: v.DISABLED };
						const L = this.getAutoSaveConfiguration(k);
						if (typeof L.autoSave > "u")
							return { mode: $.OFF, reason: v.SETTINGS };
						if (
							typeof P == "number" &&
							((L.autoSave === "afterDelay" && P !== b.SaveReason.AUTO) ||
								(L.autoSave === "onFocusChange" &&
									P !== b.SaveReason.FOCUS_CHANGE &&
									P !== b.SaveReason.WINDOW_CHANGE) ||
								(L.autoSave === "onWindowChange" &&
									P !== b.SaveReason.WINDOW_CHANGE))
						)
							return { mode: $.OFF, reason: v.SETTINGS };
						if (k) {
							if (L.autoSaveWorkspaceFilesOnly && L.isOutOfWorkspace)
								return { mode: $.OFF, reason: v.OUT_OF_WORKSPACE };
							if (
								L.autoSaveWhenNoErrors &&
								this.M.read({
									resource: k,
									take: 1,
									severities: s.MarkerSeverity.Error,
								}).length > 0
							)
								return { mode: $.OFF, reason: v.ERRORS };
						}
						switch (L.autoSave) {
							case "afterDelay":
								return typeof L.autoSaveDelay == "number" &&
									L.autoSaveDelay <= y.b
									? {
											mode: L.autoSaveWhenNoErrors
												? $.AFTER_LONG_DELAY
												: $.AFTER_SHORT_DELAY,
										}
									: { mode: $.AFTER_LONG_DELAY };
							case "onFocusChange":
								return { mode: $.ON_FOCUS_CHANGE };
							case "onWindowChange":
								return { mode: $.ON_WINDOW_CHANGE };
						}
					}
					async toggleAutoSave() {
						const T = this.G.getValue("files.autoSave");
						let P;
						return (
							[
								r.$Jl.AFTER_DELAY,
								r.$Jl.ON_FOCUS_CHANGE,
								r.$Jl.ON_WINDOW_CHANGE,
							].some((k) => k === T)
								? (P = r.$Jl.OFF)
								: (P = r.$Jl.AFTER_DELAY),
							this.G.updateValue("files.autoSave", P)
						);
					}
					disableAutoSave(T) {
						const P = this.S(T);
						if (!P) return C.$1c.None;
						const k = this.t.get(P) ?? 0;
						return (
							this.t.set(P, k + 1),
							k === 0 && this.h.fire(P),
							(0, C.$Yc)(() => {
								const L = this.t.get(P) ?? 0;
								L <= 1
									? (this.t.delete(P), this.h.fire(P))
									: this.t.set(P, L - 1);
							})
						);
					}
					get isHotExitEnabled() {
						return this.H.getWorkspace().transient ? !1 : this.r !== r.$Kl.OFF;
					}
					get hotExitConfiguration() {
						return this.r;
					}
					preventSaveConflicts(T, P) {
						return (
							this.G.getValue("files.saveConflictResolution", {
								resource: T,
								overrideIdentifier: P,
							}) !== "overwriteFileOnDisk"
						);
					}
				};
				(e.$aZ = S),
					(e.$aZ =
						S =
						y =
							Ne(
								[
									j(0, d.$6j),
									j(1, m.$gj),
									j(2, h.$Vi),
									j(3, p.$Ti),
									j(4, g.$Vl),
									j(5, r.$ll),
									j(6, s.$aM),
									j(7, l.$XO),
								],
								S,
							)),
					(0, w.$lK)(e.$_Y, S, w.InstantiationType.Eager);
			},
		),
		