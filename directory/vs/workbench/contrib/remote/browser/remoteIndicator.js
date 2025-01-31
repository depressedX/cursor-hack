import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/network.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/environment/browser/environmentService.js';
import '../../../../platform/remote/common/remoteAgentConnection.js';
import '../../../../platform/remote/common/remoteAuthorityResolver.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../base/common/iconLabels.js';
import '../../../../platform/log/common/log.js';
import '../../../browser/actions/windowActions.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../extensions/common/extensions.js';
import '../../../../base/common/htmlContent.js';
import '../../../common/contextkeys.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/browser/event.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/themables.js';
import '../../extensions/browser/extensionsIcons.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../../base/browser/window.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../common/configuration.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[3634],
			he([
				1, 0, 4, 143, 15, 6, 3, 11, 166, 73, 8, 31, 23, 53, 63, 286, 604, 211,
				87, 12, 37, 25, 438, 349, 274, 34, 571, 119, 141, 94, 100, 142, 60, 32,
				43, 27, 62, 265, 109, 33, 26, 466, 41, 9, 75, 30, 81, 224, 10,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*remoteAgentService*/,
				w /*async*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*actions*/,
				m /*statusbar*/,
				r /*label*/,
				u /*contextkey*/,
				a /*commands*/,
				h /*network*/,
				c /*extensions*/,
				n /*quickInput*/,
				g /*environmentService*/,
				p /*remoteAgentConnection*/,
				o /*remoteAuthorityResolver*/,
				f /*host*/,
				b /*platform*/,
				s /*strings*/,
				l /*workspace*/,
				y /*remoteHosts*/,
				$ /*virtualWorkspace*/,
				v /*iconLabels*/,
				S /*log*/,
				I /*windowActions*/,
				T /*extensionManagement*/,
				P /*extensions*/,
				k /*htmlContent*/,
				L /*contextkeys*/,
				D /*panecomposite*/,
				M /*views*/,
				N /*telemetry*/,
				A /*keybindingsRegistry*/,
				R /*keyCodes*/,
				O /*productService*/,
				B /*event*/,
				U /*extensions*/,
				z /*cancellation*/,
				F /*themables*/,
				x /*extensionsIcons*/,
				H /*opener*/,
				q /*uri*/,
				V /*window*/,
				G /*platform*/,
				K /*configurationRegistry*/,
				J /*configuration*/,
				W /*configuration*/,
) {
				"use strict";
				var X;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GXc = void 0),
					(t = mt(t));
				let Y = class extends C.$1c {
					static {
						X = this;
					}
					static {
						this.ID = "workbench.contrib.remoteStatusIndicator";
					}
					static {
						this.b = "workbench.action.remote.showMenu";
					}
					static {
						this.c = "workbench.action.remote.close";
					}
					static {
						this.f = !b.$r;
					}
					static {
						this.g = "workbench.action.remote.extensions";
					}
					static {
						this.h = 40;
					}
					static {
						this.j = 60 * 1e3;
					}
					static {
						this.m = 10 * 1e3;
					}
					get I() {
						if (!this.H) {
							const ne = {
								...this.db.remoteExtensionTips,
								...this.db.virtualWorkspaceExtensionTips,
							};
							(this.H = Object.values(ne)
								.filter((ee) => ee.startEntry !== void 0)
								.map((ee) => ({
									id: ee.extensionId,
									installed: !1,
									friendlyName: ee.friendlyName,
									isPlatformCompatible: !1,
									dependencies: [],
									helpLink: ee.startEntry?.helpLink ?? "",
									startConnectLabel: ee.startEntry?.startConnectLabel ?? "",
									startCommand: ee.startEntry?.startCommand ?? "",
									priority: ee.startEntry?.priority ?? 10,
									supportedPlatforms: ee.supportedPlatforms,
								}))),
								this.I.sort((ee, _) => ee.priority - _.priority);
						}
						return this.H;
					}
					constructor(
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
					) {
						super(),
							(this.N = ne),
							(this.O = ee),
							(this.P = _),
							(this.Q = te),
							(this.R = Q),
							(this.S = Z),
							(this.U = se),
							(this.W = re),
							(this.X = le),
							(this.Y = oe),
							(this.Z = ae),
							(this.$ = pe),
							(this.ab = $e),
							(this.bb = ye),
							(this.cb = ue),
							(this.db = fe),
							(this.eb = me),
							(this.fb = ve),
							(this.gb = ge),
							(this.q = this.D(
								this.R.createMenu(d.$XX.StatusBarWindowIndicatorMenu, this.Q),
							)),
							(this.r = this.D(
								this.R.createMenu(d.$XX.StatusBarRemoteIndicatorMenu, this.Q),
							)),
							(this.t = this.O.remoteAuthority),
							(this.u = void 0),
							(this.w = void 0),
							(this.y = void 0),
							(this.z = new u.$5j("remoteConnectionState", "").bindTo(this.Q)),
							(this.C = void 0),
							(this.F = void 0),
							(this.G = Object.create(null)),
							(this.H = void 0),
							(this.J = !1),
							(this.L = this.D(new E.$re())),
							(this.M = this.L.event),
							this.t
								? ((this.w = "initializing"), this.z.set(this.w))
								: this.kb(),
							this.hb(),
							this.ib(),
							this.lb(),
							this.tb();
					}
					hb() {
						const ne = t.localize2(8802, "Remote"),
							ee = this;
						this.D(
							(0, d.$4X)(
								class extends d.$3X {
									constructor() {
										super({
											id: X.b,
											category: ne,
											title: t.localize2(8803, "Show Remote Menu"),
											f1: !0,
											keybinding: {
												weight: A.KeybindingWeight.WorkbenchContrib,
												primary:
													R.KeyMod.CtrlCmd | R.KeyMod.Alt | R.KeyCode.KeyO,
											},
										}),
											(this.run = () => ee.zb());
									}
								},
							),
						),
							X.f &&
								(this.D(
									(0, d.$4X)(
										class extends d.$3X {
											constructor() {
												super({
													id: X.c,
													category: ne,
													title: t.localize2(8804, "Close Remote Connection"),
													f1: !0,
													precondition: u.$Kj.or(L.$CPb, L.$DPb),
												}),
													(this.run = () =>
														ee.Z.openWindow({
															forceReuseWindow: !0,
															remoteAuthority: null,
														}));
											}
										},
									),
								),
								this.t &&
									d.$ZX.appendMenuItem(d.$XX.MenubarFileMenu, {
										group: "6_close",
										command: { id: X.c, title: t.localize(8782, null) },
										order: 3.5,
									})),
							this.bb.isEnabled() &&
								this.D(
									(0, d.$4X)(
										class extends d.$3X {
											constructor() {
												super({
													id: X.g,
													category: ne,
													title: t.localize2(
														8805,
														"Install Remote Development Extensions",
													),
													f1: !0,
												}),
													(this.run = (_, te) =>
														_.get(D.$6Sb)
															.openPaneComposite(
																P.$LQb,
																M.ViewContainerLocation.Sidebar,
																!0,
															)
															.then((Z) => {
																Z &&
																	((Z?.getViewPaneContainer()).search(
																		"@recommended:remotes",
																	),
																	Z.focus());
															}));
											}
										},
									),
								);
					}
					ib() {
						const ne = () => {
							(this.s = void 0), this.tb();
						};
						this.D(this.q.onDidChange(ne)),
							this.D(this.r.onDidChange(ne)),
							this.D(this.P.onDidChangeFormatters(() => this.tb()));
						const ee = this.O.options?.windowIndicator;
						if (
							(ee && ee.onDidChange && this.D(ee.onDidChange(() => this.tb())),
							this.t)
						) {
							const _ = this.X.getConnection();
							_ &&
								this.D(
									_.onDidStateChange((te) => {
										switch (te.type) {
											case p.PersistentConnectionEventType.ConnectionLost:
											case p.PersistentConnectionEventType.ReconnectionRunning:
											case p.PersistentConnectionEventType.ReconnectionWait:
												this.mb("reconnecting");
												break;
											case p.PersistentConnectionEventType
												.ReconnectionPermanentFailure:
												this.mb("disconnected");
												break;
											case p.PersistentConnectionEventType.ConnectionGain:
												this.mb("connected");
												break;
										}
									}),
								);
						} else
							this.D(
								this.$.onDidChangeWorkbenchState(() => {
									this.kb(), this.tb();
								}),
							);
						b.$r &&
							this.D(
								E.Event.any(
									this.D(new B.$mib(V.$Bfb, "online")).event,
									this.D(new B.$mib(V.$Bfb, "offline")).event,
								)(() => this.pb(navigator.onLine ? "online" : "offline")),
							),
							this.D(
								this.W.onDidChangeExtensions(async (_) => {
									for (const te of _.added) {
										const Q = this.I.findIndex((Z) =>
											U.$Gn.equals(Z.id, te.identifier),
										);
										Q > -1 && (this.I[Q].installed = !0);
									}
								}),
							),
							this.D(
								this.eb.onDidUninstallExtension(async (_) => {
									const te = this.I.findIndex((Q) =>
										U.$Gn.equals(Q.id, _.identifier.id),
									);
									te > -1 && (this.I[te].installed = !1);
								}),
							);
					}
					async jb() {
						if (this.J) return;
						const ne = (0, b.$k)(b.$x);
						for (let ee = 0; ee < this.I.length; ee++) {
							const _ = this.I[ee].id,
								te = this.I[ee].supportedPlatforms,
								Q = !!(await this.eb.getInstalled()).find((Z) =>
									U.$Gn.equals(Z.identifier.id, _),
								);
							(this.I[ee].installed = Q),
								Q
									? (this.I[ee].isPlatformCompatible = !0)
									: te && !te.includes(ne)
										? (this.I[ee].isPlatformCompatible = !1)
										: (this.I[ee].isPlatformCompatible = !0);
						}
						(this.J = !0), this.L.fire(), this.tb();
					}
					kb() {
						this.u = (0, $.$E8)(this.$.getWorkspace());
					}
					async lb() {
						await this.W.whenInstalledExtensionsRegistered();
						const ne = this.t;
						ne &&
							(async () => {
								try {
									const { authority: ee } = await this.Y.resolveAuthority(ne);
									(this.y = ee.connectionToken), this.mb("connected");
								} catch {
									this.mb("disconnected");
								}
							})(),
							this.tb(),
							this.jb();
					}
					mb(ne) {
						this.w !== ne &&
							((this.w = ne),
							this.w === "reconnecting"
								? this.z.set("disconnected")
								: this.z.set(this.w),
							this.tb(),
							ne === "connected" && this.nb());
					}
					nb() {
						!this.t ||
							this.F ||
							((this.F = this.D(new w.$Yh(() => this.ob(), X.j))),
							this.F.schedule(X.m));
					}
					async ob() {
						if (this.Z.hasFocus && this.C !== "offline") {
							const ne = await i.$_m.measure(this.X);
							ne &&
								(ne.high
									? this.pb("high-latency")
									: this.C === "high-latency" && this.pb("online"));
						}
						this.F?.schedule();
					}
					pb(ne) {
						if (this.C !== ne) {
							const ee = this.C;
							(this.C = ne),
								ne === "high-latency" &&
									this.ab.warn(
										`Remote network connection appears to have high latency (${i.$_m.latency?.current?.toFixed(2)}ms last, ${i.$_m.latency?.average?.toFixed(2)}ms average)`,
									),
								this.y &&
									(ne === "online" && ee === "high-latency"
										? this.qb(this.y, "good")
										: ne === "high-latency" &&
											ee === "online" &&
											this.qb(this.y, "poor")),
								this.tb();
						}
					}
					qb(ne, ee) {
						this.cb.publicLog2("remoteConnectionHealth", {
							remoteName: (0, y.$xn)(this.t),
							reconnectionToken: ne,
							connectionHealth: ee,
						});
					}
					rb(ne) {
						return ne.match(
							/^(remote|virtualfs)_(\d\d)_(([a-z][a-z0-9+.-]*)_(.*))$/,
						)
							? !0
							: (this.G[ne] ||
									((this.G[ne] = !0),
									this.ab.warn(
										`Invalid group name used in "statusBar/remoteIndicator" menu contribution: ${ne}. Entries ignored. Expected format: 'remote_$ORDER_$REMOTENAME_$GROUPING or 'virtualfs_$ORDER_$FILESCHEME_$GROUPING.`,
									)),
								!1);
					}
					sb(ne) {
						return (
							(!this.s || ne) &&
								(this.s = this.r
									.getActions()
									.filter((ee) => this.rb(ee[0]))
									.concat(this.q.getActions())),
							this.s
						);
					}
					tb() {
						const ne = this.O.options?.windowIndicator;
						if (ne) {
							let ee = ne.label.trim();
							ee.startsWith("$(") || (ee = `$(remote) ${ee}`),
								this.ub((0, s.$qf)(ee, X.h), ne.tooltip, ne.command);
							return;
						}
						if (this.t) {
							const ee =
								this.P.getHostLabel(h.Schemas.vscodeRemote, this.t) || this.t;
							switch (this.w) {
								case "initializing":
									this.ub(
										t.localize(8783, null),
										t.localize(8784, null),
										void 0,
										!0,
									);
									break;
								case "reconnecting":
									this.ub(
										`${t.localize(8785, null, (0, s.$qf)(ee, X.h))}`,
										void 0,
										void 0,
										!0,
									);
									break;
								case "disconnected":
									this.ub(
										`$(alert) ${t.localize(8786, null, (0, s.$qf)(ee, X.h))}`,
									);
									break;
								default: {
									const _ = new k.$cl("", {
											isTrusted: !0,
											supportThemeIcons: !0,
										}),
										te = this.P.getHostTooltip(h.Schemas.vscodeRemote, this.t);
									te
										? _.appendMarkdown(te)
										: _.appendText(t.localize(8787, null, ee)),
										this.ub(`$(remote) ${(0, s.$qf)(ee, X.h)}`, _);
								}
							}
							return;
						}
						if (this.u) {
							const ee = this.P.getHostLabel(this.u.scheme, this.u.authority);
							if (ee) {
								const _ = new k.$cl("", {
										isTrusted: !0,
										supportThemeIcons: !0,
									}),
									te = this.P.getHostTooltip(this.u.scheme, this.u.authority);
								te
									? _.appendMarkdown(te)
									: _.appendText(t.localize(8788, null, ee)),
									(!b.$r || this.t) &&
										(_.appendMarkdown(`

`),
										_.appendMarkdown(
											t.localize(8789, null, `command:${P.$YQb}`),
										)),
									this.ub(`$(remote) ${(0, s.$qf)(ee, X.h)}`, _);
								return;
							}
						}
						this.ub("$(remote)", t.localize(8790, null));
					}
					ub(ne, ee, _, te) {
						const { text: Q, tooltip: Z, ariaLabel: se } = this.vb(ne, ee, te),
							re = {
								name: t.localize(8791, null),
								kind: this.C === "offline" ? "offline" : "remote",
								ariaLabel: se,
								text: Q,
								showProgress: te,
								tooltip: Z,
								command: _ ?? X.b,
							};
						this.n
							? this.n.update(re)
							: (this.n = this.N.addEntry(
									re,
									"status.host",
									m.StatusbarAlignment.LEFT,
									Number.MAX_VALUE,
								));
					}
					vb(ne, ee, _) {
						let te = ne,
							Q = ee,
							Z = (0, v.$_k)(te);
						function se() {
							return !_ && ne.startsWith("$(remote)")
								? ne.replace("$(remote)", "$(alert)")
								: ne;
						}
						switch (this.C) {
							case "offline": {
								const re = t.localize(8792, null);
								(te = se()), (Q = this.wb(Q, re)), (Z = `${Z}, ${re}`);
								break;
							}
							case "high-latency":
								(te = se()),
									(Q = this.wb(
										Q,
										t.localize(
											8793,
											null,
											i.$_m.latency?.current?.toFixed(2),
											i.$_m.latency?.average?.toFixed(2),
										),
									));
								break;
						}
						return { text: te, tooltip: Q, ariaLabel: Z };
					}
					wb(ne, ee) {
						let _;
						return (
							typeof ne == "string"
								? (_ = new k.$cl(ne, { isTrusted: !0, supportThemeIcons: !0 }))
								: (_ =
										ne ??
										new k.$cl("", { isTrusted: !0, supportThemeIcons: !0 })),
							_.value.length > 0 &&
								_.appendMarkdown(`

`),
							_.appendMarkdown(ee),
							_
						);
					}
					async xb(ne) {
						const ee = (
							await this.bb.getExtensions(
								[{ id: ne }],
								z.CancellationToken.None,
							)
						)[0];
						await this.eb.installFromGallery(ee, {
							isMachineScoped: !1,
							donotIncludePackAndDependencies: !1,
							context: { [T.$up]: !0 },
						});
					}
					async yb(ne, ee) {
						await (0, w.$7h)(
							async () => {
								const _ = await this.W.getExtension(ne);
								if (!_)
									throw Error("Failed to find installed remote extension");
								return _;
							},
							300,
							10,
						),
							this.U.executeCommand(ee),
							this.cb.publicLog2("workbenchActionExecuted", {
								id: "remoteInstallAndRun",
								detail: ne,
								from: "remote indicator",
							});
					}
					zb() {
						const ne = (Z) => {
								if (Z.item.category)
									return typeof Z.item.category == "string"
										? Z.item.category
										: Z.item.category.value;
							},
							ee = () => {
								if (this.t)
									return new RegExp(`^remote_\\d\\d_${(0, y.$xn)(this.t)}_`);
								if (this.u)
									return new RegExp(`^virtualfs_\\d\\d_${this.u.scheme}_`);
							},
							_ = () => {
								let Z = this.sb(!0);
								const se = [],
									re = ee();
								re &&
									(Z = Z.sort((pe, $e) => {
										const ye = re.test(pe[0]),
											ue = re.test($e[0]);
										return ye !== ue
											? ye
												? -1
												: 1
											: pe[0] !== "" && $e[0] === ""
												? -1
												: pe[0] === "" && $e[0] !== ""
													? 1
													: pe[0].localeCompare($e[0]);
									}));
								let le;
								for (const pe of Z) {
									let $e = !1;
									for (const ye of pe[1])
										if (ye instanceof d.$2X) {
											if (!$e) {
												const fe = ne(ye);
												fe !== le &&
													(se.push({ type: "separator", label: fe }),
													(le = fe)),
													($e = !0);
											}
											const ue =
												typeof ye.item.title == "string"
													? ye.item.title
													: ye.item.title.value;
											se.push({ type: "item", id: ye.item.id, label: ue });
										}
								}
								if (
									this.gb.getValue(
										"workbench.remoteIndicator.showExtensionRecommendations",
									) &&
									this.bb.isEnabled() &&
									this.J
								) {
									const pe = [];
									for (const $e of this.I)
										if (!$e.installed && $e.isPlatformCompatible) {
											const ye = $e.startConnectLabel,
												ue = [
													{
														iconClass: F.ThemeIcon.asClassName(x.$vSb),
														tooltip: t.localize(8794, null),
													},
												];
											pe.push({
												type: "item",
												id: $e.id,
												label: ye,
												buttons: ue,
											});
										}
									se.push({ type: "separator", label: t.localize(8795, null) }),
										se.push(...pe);
								}
								se.push({ type: "separator" });
								const ae = se.length;
								return (
									X.f &&
										(this.t
											? (se.push({
													type: "item",
													id: X.c,
													label: t.localize(8796, null),
												}),
												this.w === "disconnected" &&
													se.push({
														type: "item",
														id: I.$Zqc.ID,
														label: t.localize(8797, null),
													}))
											: this.u &&
												se.push({
													type: "item",
													id: X.c,
													label: t.localize(8798, null),
												})),
									se.length === ae && se.pop(),
									se
								);
							},
							te = new C.$Zc(),
							Q = te.add(this.S.createQuickPick({ useSeparators: !0 }));
						(Q.placeholder = t.localize(8799, null)),
							(Q.items = _()),
							(Q.sortByLabel = !1),
							(Q.canSelectMany = !1),
							te.add(
								E.Event.once(Q.onDidAccept)(async (Z) => {
									const se = Q.selectedItems;
									if (se.length === 1) {
										const re = se[0].id,
											le = this.I.find((oe) => U.$Gn.equals(oe.id, re));
										le
											? ((Q.items = []),
												(Q.busy = !0),
												(Q.placeholder = t.localize(8800, null)),
												await this.xb(le.id),
												Q.hide(),
												await this.yb(le.id, le.startCommand))
											: (this.cb.publicLog2("workbenchActionExecuted", {
													id: re,
													from: "remote indicator",
												}),
												this.U.executeCommand(re),
												Q.hide());
									}
								}),
							),
							te.add(
								E.Event.once(Q.onDidTriggerItemButton)(async (Z) => {
									const se = this.I.find((re) =>
										U.$Gn.equals(re.id, Z.item.id),
									);
									se && (await this.fb.open(q.URI.parse(se.helpLink)));
								}),
							),
							te.add(this.q.onDidChange(() => (Q.items = _()))),
							te.add(this.r.onDidChange(() => (Q.items = _()))),
							te.add(Q.onDidHide(() => te.dispose())),
							this.J ||
								((Q.busy = !0),
								this.D(
									this.M(() => {
										(Q.busy = !1), (Q.items = _());
									}),
								)),
							Q.show();
					}
				};
				(e.$GXc = Y),
					(e.$GXc =
						Y =
						X =
							Ne(
								[
									j(0, m.$d6b),
									j(1, g.$5rb),
									j(2, r.$3N),
									j(3, u.$6j),
									j(4, d.$YX),
									j(5, n.$DJ),
									j(6, a.$ek),
									j(7, c.$q2),
									j(8, i.$$m),
									j(9, o.$3l),
									j(10, f.$asb),
									j(11, l.$Vi),
									j(12, S.$ik),
									j(13, T.$Ep),
									j(14, N.$km),
									j(15, O.$Bk),
									j(16, T.$Hp),
									j(17, H.$7rb),
									j(18, W.$gj),
								],
								Y,
							)),
					G.$Io
						.as(K.$No.Configuration)
						.registerConfiguration({
							...J.$v6,
							properties: {
								"workbench.remoteIndicator.showExtensionRecommendations": {
									type: "boolean",
									markdownDescription: t.localize(8801, null),
									default: !0,
								},
							},
						});
			},
		)
