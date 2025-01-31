import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/views.js';
import '../../../services/remote/common/remoteExplorerService.js';
import '../../../services/remote/common/tunnelModel.js';
import './tunnelView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/statusbar/browser/statusbar.js';
import './urlFinder.js';
import '../../../../base/common/severity.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../terminal/browser/terminal.js';
import '../../debug/common/debug.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../base/common/platform.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../services/activity/common/activity.js';
import './remoteIcons.js';
import '../../../../base/common/event.js';
import '../../externalUriOpener/common/externalUriOpenerService.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/log/common/log.js';
import '../../../services/configuration/common/configuration.js';
import '../../../../base/common/actions.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/storage/common/storage.js';
define(
		de[1058],
		he([
			1, 0, 4, 3, 60, 519, 839, 3837, 8, 78, 30, 166, 3126, 111, 10, 40, 41,
			107, 112, 143, 12, 374, 102, 239, 260, 1256, 6, 1034, 87, 81, 34, 261, 50,
			131, 21,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*nls*/,
			i /*lifecycle*/,
			w /*views*/,
			E /*remoteExplorerService*/,
			C /*tunnelModel*/,
			d /*tunnelView*/,
			m /*contextkey*/,
			r /*environmentService*/,
			u /*platform*/,
			a /*statusbar*/,
			h /*urlFinder*/,
			c /*severity*/,
			n /*configuration*/,
			g /*notification*/,
			p /*opener*/,
			o /*terminal*/,
			f /*debug*/,
			b /*remoteAgentService*/,
			s /*platform*/,
			l /*tunnel*/,
			y /*descriptors*/,
			$ /*viewPaneContainer*/,
			v /*activity*/,
			S /*remoteIcons*/,
			I /*event*/,
			T /*externalUriOpenerService*/,
			P /*host*/,
			k /*configurationRegistry*/,
			L /*log*/,
			D /*configuration*/,
			M /*actions*/,
			N /*preferences*/,
			A /*storage*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$huc = e.$guc = e.$fuc = e.$euc = void 0),
				(t = mt(t)),
				(c = xi(c)),
				(e.$euc = "workbench.view.remote");
			let R = class extends i.$1c {
				constructor(H, q, V, G, K, J) {
					super(),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.q = G),
						(this.r = K),
						(this.s = J),
						(this.c = this.D(new i.$2c())),
						(this.f = this.D(new i.$2c())),
						this.D(
							u.$Io
								.as(w.Extensions.ViewsRegistry)
								.registerViewWelcomeContent(E.$7pc, {
									content: this.j.remoteAuthority
										? t.localize(
												8749,
												null,
												`command:${d.ForwardPortAction.INLINE_ID}`,
											)
										: t.localize(
												8750,
												null,
												`command:${d.ForwardPortAction.INLINE_ID}`,
											),
								}),
						),
						this.w(),
						this.u();
				}
				async t() {
					return u.$Io
						.as(w.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: E.$8pc,
								title: t.localize2(8764, "Ports"),
								icon: S.$1tc,
								ctorDescriptor: new y.$Ji($.$ZSb, [
									E.$8pc,
									{ mergeViewWithContainerWhenSingleView: !0 },
								]),
								storageId: E.$8pc,
								hideIfEmpty: !0,
								order: 5,
							},
							w.ViewContainerLocation.Panel,
						);
				}
				async u() {
					if ((this.c.clear(), !!C.$t8.getValue(this.h))) {
						const q = await this.t(),
							V = new d.$cuc(new d.$auc(this.m, this.q), this.j),
							G = u.$Io.as(w.Extensions.ViewsRegistry);
						q && (this.m.enablePortsFeatures(), G.registerViews([V], q));
					} else
						this.c.value = this.h.onDidChangeContext((q) => {
							q.affectsSome(new Set(C.$t8.keys())) && this.u();
						});
				}
				w() {
					const H = u.$Io
						.as(w.Extensions.ViewsRegistry)
						.onViewsRegistered((q) => {
							q.find((V) => V.views.find((G) => G.id === E.$7pc)) &&
								(this.D(
									I.Event.debounce(
										this.m.tunnelModel.onForwardPort,
										(V, G) => G,
										50,
									)(() => {
										this.y(), this.z();
									}),
								),
								this.D(
									I.Event.debounce(
										this.m.tunnelModel.onClosePort,
										(V, G) => G,
										50,
									)(() => {
										this.y(), this.z();
									}),
								),
								this.y(),
								this.z(),
								H.dispose());
						});
				}
				async y() {
					this.m.tunnelModel.forwarded.size > 0 &&
						(this.f.value = this.r.showViewActivity(E.$7pc, {
							badge: new v.$8qc(this.m.tunnelModel.forwarded.size, (H) =>
								H === 1 ? t.localize(8751, null) : t.localize(8752, null, H),
							),
						}));
				}
				z() {
					this.g
						? this.g.update(this.C)
						: this.D(
								(this.g = this.s.addEntry(
									this.C,
									"status.forwardedPorts",
									a.StatusbarAlignment.LEFT,
									40,
								)),
							);
				}
				get C() {
					let H;
					const q =
							this.m.tunnelModel.forwarded.size +
							this.m.tunnelModel.detected.size,
						V = `${q}`;
					if (q === 0) H = t.localize(8753, null);
					else {
						const G = Array.from(this.m.tunnelModel.forwarded.values());
						G.push(...Array.from(this.m.tunnelModel.detected.values())),
							(H = t.localize(
								8754,
								null,
								G.map((K) => K.remotePort).join(", "),
							));
					}
					return {
						name: t.localize(8755, null),
						text: `$(radio-tower) ${V}`,
						ariaLabel: H,
						tooltip: H,
						command: `${E.$7pc}.focus`,
					};
				}
			};
			(e.$fuc = R),
				(e.$fuc = R =
					Ne(
						[
							j(0, m.$6j),
							j(1, r.$r8),
							j(2, E.$5pc),
							j(3, l.$cO),
							j(4, v.$7qc),
							j(5, a.$d6b),
						],
						R,
					));
			let O = class {
				constructor(H, q) {
					(this.c = H),
						(this.d = q),
						this.c.tunnelModel.environmentTunnelsSet
							? this.f()
							: I.Event.once(this.c.tunnelModel.onEnvironmentTunnelsSet)(
									async () => {
										await this.f();
									},
								);
				}
				async f() {
					return (
						this.d.trace("ForwardedPorts: Doing first restore."),
						this.c.restore()
					);
				}
			};
			(e.$guc = O), (e.$guc = O = Ne([j(0, E.$5pc), j(1, L.$ik)], O));
			let B = class extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
					super(),
						(this.h = H),
						(this.j = q),
						(this.m = V),
						(this.q = G),
						(this.r = K),
						(this.s = W),
						(this.t = X),
						(this.u = Y),
						(this.w = ne),
						(this.y = ee),
						(this.z = _),
						(this.C = te),
						(this.F = Q),
						J.remoteAuthority &&
							(X.whenRemoteConfigurationLoaded()
								.then(() => ie.getEnvironment())
								.then((Z) => {
									this.I(Z),
										this.D(
											X.onDidChangeConfiguration((se) => {
												se.affectsConfiguration(E.$0pc)
													? this.I(Z)
													: se.affectsConfiguration(E.$$pc) &&
														!this.g &&
														this.H();
											}),
										);
								}),
							this.C.getBoolean(
								"processPortForwardingFallback",
								A.StorageScope.WORKSPACE,
								!0,
							) ||
								this.t.updateValue(E.$$pc, 0, n.ConfigurationTarget.WORKSPACE));
				}
				G() {
					const H = this.t.inspect(E.$$pc);
					if (
						H.value !== void 0 &&
						(H.value === 0 || H.value !== H.defaultValue)
					)
						return H.value;
					const q = this.t.inspect(E.$0pc);
					return q.applicationValue === E.$_pc ||
						q.userValue === E.$_pc ||
						q.userLocalValue === E.$_pc ||
						q.userRemoteValue === E.$_pc ||
						q.workspaceFolderValue === E.$_pc ||
						q.workspaceValue === E.$_pc
						? 0
						: (H.value ?? 20);
				}
				H() {
					let H = this.G();
					if (H === 0) {
						this.g?.dispose();
						return;
					}
					this.c && !this.g && this.t.getValue(E.$0pc) === E.$_pc
						? (this.g = this.D(
								this.r.tunnelModel.onForwardPort(async () => {
									if (((H = this.G()), H === 0)) {
										this.g?.dispose();
										return;
									}
									Array.from(this.r.tunnelModel.forwarded.values()).filter(
										(q) => q.source.source === C.TunnelSource.Auto,
									).length > H &&
										(await this.t.updateValue(E.$0pc, E.$bqc),
										this.j.notify({
											message: t.localize(8756, null),
											severity: c.default.Warning,
											actions: {
												primary: [
													new M.$rj(
														"switchBack",
														t.localize(8757, null),
														void 0,
														!0,
														async () => {
															await this.t.updateValue(E.$0pc, E.$_pc),
																await this.t.updateValue(
																	E.$$pc,
																	0,
																	n.ConfigurationTarget.WORKSPACE,
																),
																this.g?.dispose(),
																(this.g = void 0);
														},
													),
													new M.$rj(
														"showPortSourceSetting",
														t.localize(8758, null),
														void 0,
														!0,
														async () => {
															await this.F.openSettings({
																query: "remote.autoForwardPortsSource",
															});
														},
													),
												],
											},
										}));
								}),
							))
						: (this.g?.dispose(), (this.g = void 0));
				}
				I(H) {
					const q = this.c?.forwarded,
						V = this.f || this.c;
					if (
						(this.c?.dispose(),
						(this.c = void 0),
						this.f?.dispose(),
						(this.f = void 0),
						H?.os !== s.OperatingSystem.Linux)
					)
						this.t.inspect(E.$0pc).default?.value !== E.$aqc &&
							u.$Io
								.as(k.$No.Configuration)
								.registerDefaultConfigurations([
									{ overrides: { "remote.autoForwardPortsSource": E.$aqc } },
								]),
							(this.f = this.D(
								new z(
									this.h,
									this.j,
									this.m,
									this.q,
									this.r,
									this.t,
									this.u,
									this.w,
									this.y,
									this.z,
									this.s,
									() => !1,
								),
							));
					else {
						const G = () => this.t.getValue(E.$0pc) === E.$_pc;
						G()
							? (this.c = this.D(
									new F(
										!1,
										q,
										!V,
										this.t,
										this.r,
										this.j,
										this.m,
										this.q,
										this.w,
										this.y,
										this.z,
										this.s,
									),
								))
							: this.t.getValue(E.$0pc) === E.$bqc &&
								(this.c = this.D(
									new F(
										!0,
										q,
										!V,
										this.t,
										this.r,
										this.j,
										this.m,
										this.q,
										this.w,
										this.y,
										this.z,
										this.s,
									),
								)),
							(this.f = this.D(
								new z(
									this.h,
									this.j,
									this.m,
									this.q,
									this.r,
									this.t,
									this.u,
									this.w,
									this.y,
									this.z,
									this.s,
									G,
								),
							));
					}
					this.H();
				}
			};
			(e.$huc = B),
				(e.$huc = B =
					Ne(
						[
							j(0, o.$iIb),
							j(1, g.$4N),
							j(2, p.$7rb),
							j(3, T.IExternalUriOpenerService),
							j(4, E.$5pc),
							j(5, r.$r8),
							j(6, m.$6j),
							j(7, D.$RZ),
							j(8, f.$75),
							j(9, b.$$m),
							j(10, l.$cO),
							j(11, P.$asb),
							j(12, L.$ik),
							j(13, A.$lq),
							j(14, N.$7Z),
						],
						B,
					));
			class U extends i.$1c {
				static {
					this.f = 5e3;
				}
				constructor(H, q, V, G, K, J, W, X) {
					super(),
						(this.q = H),
						(this.r = q),
						(this.s = V),
						(this.t = G),
						(this.u = K),
						(this.w = J),
						(this.y = W),
						(this.z = X),
						(this.m = new Set()),
						(this.c = new Date()),
						this.c.setFullYear(this.c.getFullYear() - 1);
				}
				async doAction(H) {
					this.y.trace(
						`ForwardedPorts: (OnAutoForwardedAction) Starting action for ${H[0]?.tunnelRemotePort}`,
					),
						(this.j = H);
					const q = await this.F();
					if (
						(this.y.trace(
							`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose ${q?.tunnelRemotePort}`,
						),
						q)
					) {
						const G = (
							await this.r.tunnelModel.getAttributes([
								{ port: q.tunnelRemotePort, host: q.tunnelRemoteHost },
							])
						)?.get(q.tunnelRemotePort)?.onAutoForward;
						switch (
							(this.y.trace(
								`ForwardedPorts: (OnAutoForwardedAction) onAutoForward action is ${G}`,
							),
							G)
						) {
							case C.OnPortForward.OpenBrowserOnce: {
								if (this.m.has(q.localAddress)) break;
								this.m.add(q.localAddress);
							}
							case C.OnPortForward.OpenBrowser: {
								const K = (0, C.$z8)(q.tunnelRemoteHost, q.tunnelRemotePort);
								await d.OpenPortInBrowserAction.run(
									this.r.tunnelModel,
									this.s,
									K,
								);
								break;
							}
							case C.OnPortForward.OpenPreview: {
								const K = (0, C.$z8)(q.tunnelRemoteHost, q.tunnelRemotePort);
								await d.OpenPortInPreviewAction.run(
									this.r.tunnelModel,
									this.s,
									this.t,
									K,
								);
								break;
							}
							case C.OnPortForward.Silent:
								break;
							default: {
								const K = new Date().getTime() - this.c.getTime();
								this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) time elapsed since last notification ${K} ms`,
								),
									K > U.f && (await this.I(q));
							}
						}
					}
				}
				hide(H) {
					this.j &&
						(this.j = this.j.filter((q) => !H.includes(q.tunnelRemotePort))),
						this.h && H.indexOf(this.h) >= 0 && this.g?.close();
				}
				async F() {
					if (
						(this.y.trace(
							"ForwardedPorts: (OnAutoForwardedAction) Starting heuristic delay",
						),
						!this.j || this.j.length === 0)
					)
						return;
					this.j = this.j.sort(
						(q, V) => q.tunnelRemotePort - V.tunnelRemotePort,
					);
					const H = this.j.shift();
					return H.tunnelRemotePort % 1e3 === 0
						? (this.y.trace(
								`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose tunnel because % 1000: ${H.tunnelRemotePort}`,
							),
							(this.C = H),
							H)
						: H.tunnelRemotePort < 1e4 && H.tunnelRemotePort !== 9229
							? (this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) Heuristic chose tunnel because < 10000: ${H.tunnelRemotePort}`,
								),
								(this.C = H),
								H)
							: (this.y.trace(
									`ForwardedPorts: (OnAutoForwardedAction) Waiting for "better" tunnel than ${H.tunnelRemotePort}`,
								),
								(this.C = void 0),
								new Promise((q) => {
									setTimeout(() => {
										this.C ? q(void 0) : this.j?.includes(H) ? q(H) : q(void 0);
									}, 3e3);
								}));
				}
				async G(H) {
					const V = (
						await this.r.tunnelModel.getAttributes(
							[{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort }],
							!1,
						)
					)?.get(H.tunnelRemotePort)?.label;
					return t.localize(8759, null, V ? ` (${V})` : "", H.tunnelRemotePort);
				}
				H() {
					return t.localize(8760, null, `command:${d.$buc.ID}.focus`);
				}
				async I(H) {
					if (!(await this.w.hadLastFocus())) return;
					this.g?.close();
					let q = await this.G(H);
					const V = [this.L(H)];
					(!s.$r || d.$_tc.getValue(this.z)) && V.push(this.M(H)),
						H.tunnelLocalPort !== H.tunnelRemotePort &&
							this.u.canElevate &&
							this.u.isPortPrivileged(H.tunnelRemotePort) &&
							((q += t.localize(8761, null, H.tunnelRemotePort)),
							V.unshift(this.N(H))),
						H.privacy === l.TunnelPrivacyId.Private &&
							s.$r &&
							this.u.canChangePrivacy &&
							V.push(this.J(H)),
						(q += this.H()),
						(this.g = this.q.prompt(c.default.Info, q, V, {
							neverShowAgain: {
								id: "remote.tunnelsView.autoForwardNeverShow",
								isSecondary: !0,
							},
						})),
						(this.h = H.tunnelRemotePort),
						(this.c = new Date()),
						this.g.onDidClose(() => {
							(this.g = void 0), (this.h = void 0);
						});
				}
				J(H) {
					return {
						label: t.localize(8762, null),
						run: async () => {
							const q = (0, C.$y8)(
								this.r.tunnelModel.forwarded,
								H.tunnelRemoteHost,
								H.tunnelRemotePort,
							);
							return (
								await this.r.close(
									{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
									C.TunnelCloseReason.Other,
								),
								this.r.forward({
									remote: {
										host: H.tunnelRemoteHost,
										port: H.tunnelRemotePort,
									},
									local: H.tunnelLocalPort,
									name: q?.name,
									elevateIfNeeded: !0,
									privacy: l.TunnelPrivacyId.Public,
									source: q?.source,
								})
							);
						},
					};
				}
				L(H) {
					const q = (0, C.$z8)(H.tunnelRemoteHost, H.tunnelRemotePort);
					return {
						label: d.OpenPortInBrowserAction.LABEL,
						run: () =>
							d.OpenPortInBrowserAction.run(this.r.tunnelModel, this.s, q),
					};
				}
				M(H) {
					const q = (0, C.$z8)(H.tunnelRemoteHost, H.tunnelRemotePort);
					return {
						label: d.OpenPortInPreviewAction.LABEL,
						run: () =>
							d.OpenPortInPreviewAction.run(
								this.r.tunnelModel,
								this.s,
								this.t,
								q,
							),
					};
				}
				N(H) {
					return {
						label: t.localize(8763, null, H.tunnelRemotePort),
						run: async () => {
							await this.r.close(
								{ host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
								C.TunnelCloseReason.Other,
							);
							const q = await this.r.forward({
								remote: { host: H.tunnelRemoteHost, port: H.tunnelRemotePort },
								local: H.tunnelRemotePort,
								elevateIfNeeded: !0,
								source: C.$w8,
							});
							!q ||
								typeof q == "string" ||
								(this.g?.close(),
								(this.h = q.tunnelRemotePort),
								(this.g = this.q.prompt(
									c.default.Info,
									(await this.G(q)) + this.H(),
									[this.L(q), this.M(H)],
									{
										neverShowAgain: {
											id: "remote.tunnelsView.autoForwardNeverShow",
											isSecondary: !0,
										},
									},
								)),
								this.g.onDidClose(() => {
									(this.g = void 0), (this.h = void 0);
								}));
						},
					};
				}
			}
			class z extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.h = H),
						(this.notificationService = q),
						(this.openerService = V),
						(this.externalOpenerService = G),
						(this.j = K),
						(this.m = J),
						(this.q = W),
						(this.tunnelService = X),
						(this.hostService = Y),
						(this.logService = ie),
						(this.contextKeyService = ne),
						(this.privilegedOnly = ee),
						(this.g = new U(q, K, V, G, X, Y, ie, ne)),
						this.D(
							J.onDidChangeConfiguration((_) => {
								_.affectsConfiguration(E.$9pc) && this.r();
							}),
						),
						(this.c = this.D(
							this.j.onEnabledPortsFeatures(() => {
								this.r();
							}),
						)),
						this.r(),
						J.getValue(E.$0pc) === E.$bqc &&
							this.D(
								this.tunnelService.onTunnelClosed((_) => this.g.hide([_.port])),
							);
				}
				r() {
					this.m.getValue(E.$9pc) ? this.s() : this.t();
				}
				s() {
					(!this.f && !this.j.portsFeaturesEnabled) ||
						(this.c?.dispose(),
						(this.f = this.D(new h.$duc(this.h, this.q))),
						this.D(
							this.f.onDidMatchLocalUrl(async (H) => {
								if ((0, C.$y8)(this.j.tunnelModel.detected, H.host, H.port))
									return;
								const q = (await this.j.tunnelModel.getAttributes([H]))?.get(
									H.port,
								);
								if (
									q?.onAutoForward === C.OnPortForward.Ignore ||
									(this.privilegedOnly() &&
										!this.tunnelService.isPortPrivileged(H.port))
								)
									return;
								const V = await this.j.forward(
									{ remote: H, source: C.$w8 },
									q ?? null,
								);
								V && typeof V != "string" && this.g.doAction([V]);
							}),
						));
				}
				t() {
					this.f && (this.f.dispose(), (this.f = void 0));
				}
			}
			class F extends i.$1c {
				constructor(H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
					super(),
						(this.q = H),
						(this.alreadyAutoForwarded = q),
						(this.r = V),
						(this.s = G),
						(this.remoteExplorerService = K),
						(this.notificationService = J),
						(this.openerService = W),
						(this.externalOpenerService = X),
						(this.tunnelService = Y),
						(this.hostService = ie),
						(this.logService = ne),
						(this.contextKeyService = ee),
						(this.f = new Set()),
						(this.g = new Set()),
						(this.j = new Set()),
						(this.h = new U(J, K, W, X, Y, ie, ne, ee)),
						q?.forEach((_) => this.f.add(_)),
						this.t();
				}
				get forwarded() {
					return this.f;
				}
				async t() {
					this.remoteExplorerService.tunnelModel.environmentTunnelsSet ||
						(await new Promise((H) =>
							this.remoteExplorerService.tunnelModel.onEnvironmentTunnelsSet(
								() => H(),
							),
						)),
						this.D(
							this.s.onDidChangeConfiguration(async (H) => {
								H.affectsConfiguration(E.$9pc) && (await this.u());
							}),
						),
						(this.m = this.D(
							this.remoteExplorerService.onEnabledPortsFeatures(async () => {
								await this.u();
							}),
						)),
						this.u();
				}
				async u() {
					this.s.getValue(E.$9pc) ? await this.y() : this.w();
				}
				w() {
					this.c && (this.c.dispose(), (this.c = void 0));
				}
				async y() {
					this.c ||
						!this.remoteExplorerService.portsFeaturesEnabled ||
						(this.m?.dispose(),
						await this.z(),
						this.s.getValue(E.$9pc) &&
							(this.c = this.D(
								this.remoteExplorerService.tunnelModel.onCandidatesChanged(
									this.F,
									this,
								),
							)));
				}
				async z() {
					if (!this.r) {
						this.logService.debug(
							"ForwardedPorts: (ProcForwarding) Not setting initial candidates",
						);
						return;
					}
					let H = this.remoteExplorerService.tunnelModel.candidatesOrUndefined;
					H ||
						(await new Promise((q) =>
							this.remoteExplorerService.tunnelModel.onCandidatesChanged(() =>
								q(),
							),
						),
						(H = this.remoteExplorerService.tunnelModel.candidates));
					for (const q of H) this.j.add((0, C.$z8)(q.host, q.port));
					this.logService.debug(
						`ForwardedPorts: (ProcForwarding) Initial candidates set to ${H.map((q) => q.port).join(", ")}`,
					);
				}
				async C() {
					let H;
					const q = [];
					this.logService.trace(
						`ForwardedPorts: (ProcForwarding) Attempting to forward ${this.remoteExplorerService.tunnelModel.candidates.length} candidates`,
					);
					for (const V of this.remoteExplorerService.tunnelModel.candidates) {
						if (!V.detail) {
							this.logService.trace(
								`ForwardedPorts: (ProcForwarding) Port ${V.port} missing detail`,
							);
							continue;
						}
						H ||
							(H = await this.remoteExplorerService.tunnelModel.getAttributes(
								this.remoteExplorerService.tunnelModel.candidates,
							));
						const G = H?.get(V.port),
							K = (0, C.$z8)(V.host, V.port);
						if (
							(this.j.has(K) && G?.onAutoForward === void 0) ||
							this.g.has(K) ||
							this.f.has(K)
						)
							continue;
						const J = (0, C.$y8)(
							this.remoteExplorerService.tunnelModel.forwarded,
							V.host,
							V.port,
						);
						if (
							(0, C.$y8)(
								this.remoteExplorerService.tunnelModel.detected,
								V.host,
								V.port,
							)
						)
							continue;
						if (G?.onAutoForward === C.OnPortForward.Ignore) {
							this.logService.trace(
								`ForwardedPorts: (ProcForwarding) Port ${V.port} is ignored`,
							);
							continue;
						}
						const W = await this.remoteExplorerService.forward(
							{ remote: V, source: C.$w8 },
							G ?? null,
						);
						!J && W
							? (this.logService.trace(
									`ForwardedPorts: (ProcForwarding) Port ${V.port} has been forwarded`,
								),
								this.f.add(K))
							: W &&
								(this.logService.trace(
									`ForwardedPorts: (ProcForwarding) Port ${V.port} has been notified`,
								),
								this.g.add(K)),
							W && typeof W != "string" && q.push(W);
					}
					if (
						(this.logService.trace(
							`ForwardedPorts: (ProcForwarding) Forwarded ${q.length} candidates`,
						),
						q.length !== 0)
					)
						return q;
				}
				async F(H) {
					const q = [];
					let V;
					if (this.q) {
						V = new Map();
						for (const K of this.remoteExplorerService.tunnelModel.forwarded.entries())
							K[1].source.source === C.TunnelSource.Auto && V.set(K[0], K[1]);
					} else V = new Map(this.f.entries());
					for (const K of H) {
						const J = K[0];
						let W = K[1];
						const X = (0, C.$y8)(V, W.host, W.port);
						X
							? (typeof X == "string"
									? this.f.delete(J)
									: (W = { host: X.remoteHost, port: X.remotePort }),
								await this.remoteExplorerService.close(
									W,
									C.TunnelCloseReason.AutoForwardEnd,
								),
								q.push(W.port))
							: this.g.has(J)
								? (this.g.delete(J), q.push(W.port))
								: this.j.has(J) && this.j.delete(J);
					}
					if (this.q) return;
					q.length > 0 && (await this.h.hide(q));
					const G = await this.C();
					G && (await this.h.doAction(G));
				}
			}
		},
	)
