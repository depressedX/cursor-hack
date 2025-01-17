import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/uri.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../services/extensions/common/extensions.js';
import '../../../browser/parts/views/viewsViewlet.js';
import './remoteExplorer.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/views.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/progress/common/progress.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/remote/common/remoteAgentConnection.js';
import '../../../../base/common/severity.js';
import '../../../browser/actions/windowActions.js';
import '../../../../base/common/lifecycle.js';
import './explorerViewItems.js';
import '../../../../base/common/types.js';
import '../../../services/remote/common/remoteExplorerService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/descriptors.js';
import './remoteIcons.js';
import '../../../../platform/log/common/log.js';
import '../../../services/timer/browser/timerService.js';
import '../../../../platform/remote/common/remoteHosts.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../welcomeGettingStarted/browser/gettingStartedService.js';
import '../../../../base/common/network.js';
import '../../../../base/browser/window.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/remote/browser/media/remoteViewlet.js';
define(
		de[4031],
		he([
			1, 0, 4, 7, 9, 96, 32, 25, 21, 10, 5, 35, 26, 49, 53, 1941, 1058, 8, 60,
			30, 41, 63, 31, 84, 143, 57, 604, 111, 571, 3, 4030, 28, 519, 78, 146, 93,
			39, 6, 102, 1256, 34, 520, 438, 349, 3850, 23, 75, 72, 2482,
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
			R,
			O,
			B,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$FXc = e.$EXc = void 0),
				(t = mt(t)),
				(i = mt(i)),
				(T = xi(T)),
				(z = mt(z));
			class W {
				getHeight(ue) {
					return 22;
				}
				getTemplateId(ue) {
					return "HelpItemTemplate";
				}
			}
			class X {
				constructor() {
					this.templateId = "HelpItemTemplate";
				}
				renderTemplate(ue) {
					ue.classList.add("remote-help-tree-node-item");
					const fe = i.$fhb(ue, i.$(".remote-help-tree-node-item-icon"));
					return { parent: ue, icon: fe };
				}
				renderElement(ue, fe, me, ve) {
					const ge = me.parent;
					i.$fhb(ge, me.icon), me.icon.classList.add(...ue.element.iconClasses);
					const be = i.$fhb(ge, i.$(".help-item-label"));
					be.innerText = ue.element.label;
				}
				disposeTemplate(ue) {}
			}
			class Y {
				hasChildren(ue) {
					return ue instanceof ie;
				}
				getChildren(ue) {
					return ue instanceof ie && ue.items ? ue.items : [];
				}
			}
			class ie {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					(this.a = ue),
						(this.b = fe),
						(this.c = me),
						(this.d = ve),
						(this.f = ge),
						(this.g = be),
						(this.h = Ce),
						(this.j = Le),
						this.l(),
						ue.onDidChangeHelpInformation(() => this.l());
				}
				k(ue, fe) {
					return new ne(
						this.d,
						this.j,
						ue.extensionDescription,
						typeof ue.remoteName == "string" ? [ue.remoteName] : ue.remoteName,
						ue.virtualWorkspace,
						ue[fe],
					);
				}
				l() {
					const ue = [],
						fe = this.a.helpInformation.filter((ge) => ge.getStarted);
					if (fe.length) {
						const ge = fe.map((Ce) => this.k(Ce, "getStarted")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Utc) ??
								new _(
									z.$Utc,
									t.localize(8726, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
									this.d,
								);
						(be.values = ge), ue.push(be);
					}
					const me = this.a.helpInformation.filter((ge) => ge.documentation);
					if (me.length) {
						const ge = me.map((Ce) => this.k(Ce, "documentation")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Vtc) ??
								new te(
									z.$Vtc,
									t.localize(8727, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					const ve = this.a.helpInformation.filter((ge) => ge.issues);
					if (ve.length) {
						const ge = ve.map((Ce) => this.k(Ce, "issues")),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Xtc) ??
								new te(
									z.$Xtc,
									t.localize(8728, null),
									ge,
									this.c,
									this.g,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					if (ue.length) {
						const ge = this.a.helpInformation.map((Ce) =>
								this.k(Ce, "reportIssue"),
							),
							be =
								this.items?.find((Ce) => Ce.icon === z.$Ytc) ??
								new Q(
									z.$Ytc,
									t.localize(8729, null),
									ge,
									this.c,
									this.g,
									this.d,
									this.b,
									this.f,
									this.h,
								);
						(be.values = ge), ue.push(be);
					}
					ue.length && (this.items = ue);
				}
			}
			class ne {
				constructor(ue, fe, me, ve, ge, be) {
					(this.c = ue),
						(this.d = fe),
						(this.extensionDescription = me),
						(this.remoteAuthority = ve),
						(this.virtualWorkspace = ge),
						(this.f = be);
				}
				get description() {
					return this.g().then(() => this.b);
				}
				get url() {
					return this.g();
				}
				async g() {
					if (this.a === void 0) {
						if (typeof this.f == "string")
							if (w.URI.parse(this.f).authority) this.a = this.f;
							else {
								const fe = this.c
										.executeCommand(this.f)
										.then((ve) => ((this.a = ve), this.a)),
									me = new Promise((ve) => setTimeout(() => ve(""), 500));
								this.a = await Promise.race([fe, me]);
							}
						else if (this.f?.id)
							try {
								const ue = `${this.extensionDescription.id}#${this.f.id}`,
									fe = await this.d.getWalkthrough(ue);
								(this.b = fe.title), (this.a = ue);
							} catch {}
					}
					return this.a === void 0 && (this.a = ""), this.a;
				}
			}
			class ee {
				constructor(ue, fe, me, ve, ge, be, Ce) {
					(this.icon = ue),
						(this.label = fe),
						(this.values = me),
						(this.a = ve),
						(this.b = ge),
						(this.c = be),
						(this.d = Ce),
						(this.iconClasses = []),
						this.iconClasses.push(...h.ThemeIcon.asClassNameArray(ue)),
						this.iconClasses.push("remote-help-tree-node-item-icon");
				}
				async f() {
					return (
						await Promise.all(
							this.values.map(async (ue) => ({
								label:
									ue.extensionDescription.displayName ||
									ue.extensionDescription.identifier.value,
								description: (await ue.description) ?? (await ue.url),
								url: await ue.url,
								extensionDescription: ue.extensionDescription,
							})),
						)
					).filter((ue) => ue.description);
				}
				async handleClick() {
					const ue = this.b.remoteAuthority;
					if (ue) {
						for (let fe = 0; fe < this.c.targetType.length; fe++)
							if (ue.startsWith(this.c.targetType[fe])) {
								for (const me of this.values)
									if (me.remoteAuthority) {
										for (const ve of me.remoteAuthority)
											if (ue.startsWith(ve)) {
												await this.g(me.extensionDescription, await me.url);
												return;
											}
									}
							}
					} else {
						const fe = (0, q.$E8)(this.d.getWorkspace())?.scheme;
						if (fe) {
							for (let me = 0; me < this.c.targetType.length; me++)
								for (const ve of this.values)
									if (ve.virtualWorkspace && ve.remoteAuthority) {
										for (const ge of ve.remoteAuthority)
											if (
												this.c.targetType[me].startsWith(ge) &&
												fe.startsWith(ve.virtualWorkspace)
											) {
												await this.g(ve.extensionDescription, await ve.url);
												return;
											}
									}
						}
					}
					if (this.values.length > 1) {
						const fe = await this.f();
						if (fe.length) {
							const me = await this.a.pick(fe, {
								placeHolder: t.localize(8730, null),
							});
							me && (await this.g(me.extensionDescription, me.url));
						}
					} else
						await this.g(
							this.values[0].extensionDescription,
							await this.values[0].url,
						);
				}
			}
			class _ extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe) {
					super(ue, fe, me, ve, ge, Ce, Le), (this.h = be), (this.j = Fe);
				}
				async g(ue, fe) {
					if (
						[G.Schemas.http, G.Schemas.https].includes(w.URI.parse(fe).scheme)
					) {
						this.h.open(fe, { allowCommands: !0 });
						return;
					}
					this.j.executeCommand("workbench.action.openWalkthrough", fe);
				}
			}
			class te extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					super(ue, fe, me, ve, ge, Ce, Le), (this.h = be);
				}
				async g(ue, fe) {
					await this.h.open(w.URI.parse(fe), { allowCommands: !0 });
				}
			}
			class Q extends ee {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe) {
					super(ue, fe, me, ve, ge, Le, Fe), (this.h = be), (this.j = Ce);
				}
				async f() {
					return Promise.all(
						this.values.map(async (ue) => ({
							label:
								ue.extensionDescription.displayName ||
								ue.extensionDescription.identifier.value,
							description: "",
							url: await ue.url,
							extensionDescription: ue.extensionDescription,
						})),
					);
				}
				async g(ue, fe) {
					fe
						? await this.j.open(w.URI.parse(fe))
						: await this.h.executeCommand(
								"workbench.action.openIssueReporter",
								[ue.identifier.value],
							);
				}
			}
			let Z = class extends A.$TMb {
				static {
					this.ID = "~remote.helpPanel";
				}
				static {
					this.TITLE = t.localize2(8741, "Help and feedback");
				}
				constructor(
					ue,
					fe,
					me,
					ve,
					ge,
					be,
					Ce,
					Le,
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
					Te,
					Ee,
					Ie,
					Be,
				) {
					super(fe, me, ve, be, ge, Le, Ce, Fe, Je, Te, Ee),
						(this.b = ue),
						(this.c = Oe),
						(this.f = xe),
						(this.g = He),
						(this.h = Ke),
						(this.j = Ie),
						(this.m = Be);
				}
				W(ue) {
					super.W(ue), ue.classList.add("remote-help");
					const fe = document.createElement("div");
					fe.classList.add("remote-help-content"),
						ue.appendChild(fe),
						(this.a = this.Db.createInstance(
							R.$FMb,
							"RemoteHelp",
							fe,
							new W(),
							[new X()],
							new Y(),
							{
								accessibilityProvider: {
									getAriaLabel: (ve) => ve.label,
									getWidgetAriaLabel: () => t.localize(8731, null),
								},
							},
						));
					const me = new ie(
						this.b,
						this.Eb,
						this.c,
						this.f,
						this.g,
						this.h,
						this.j,
						this.m,
					);
					this.a.setInput(me),
						this.D(
							B.Event.debounce(
								this.a.onDidOpen,
								(ve, ge) => ge,
								75,
								!0,
							)((ve) => {
								ve.element?.handleClick();
							}),
						);
				}
				X(ue, fe) {
					super.X(ue, fe), this.a.layout(ue, fe);
				}
			};
			Z = Ne(
				[
					j(2, O.$uZ),
					j(3, c.$Xxb),
					j(4, o.$6j),
					j(5, r.$gj),
					j(6, u.$Li),
					j(7, f.$K1),
					j(8, s.$7rb),
					j(9, l.$DJ),
					j(10, y.$ek),
					j(11, M.$5pc),
					j(12, N.$r8),
					j(13, a.$iP),
					j(14, C.$km),
					j(15, J.$Uyb),
					j(16, d.$Vi),
					j(17, V.$yXc),
				],
				Z,
			);
			class se {
				constructor(ue) {
					(this.id = Z.ID),
						(this.name = Z.TITLE),
						(this.canToggleVisibility = !0),
						(this.hideByDefault = !1),
						(this.group = "help@50"),
						(this.order = -10),
						(this.ctorDescriptor = new U.$Ji(Z, [ue]));
				}
			}
			let re = class extends g.$XSb {
				constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
					super(
						p.$euc,
						Oe.onDidChangeTargetType,
						ge,
						ue,
						fe,
						ve,
						be,
						Ce,
						Le,
						Fe,
						me,
						xe,
					),
						(this.Mb = Oe),
						(this.Ib = new se(this)),
						(this.helpInformation = []),
						(this.Jb = new B.$re()),
						(this.onDidChangeHelpInformation = this.Jb.event),
						(this.Kb = !1),
						this.Bb([this.Ib]),
						this.D((this.Lb = this.bb.createInstance(L.$rXc))),
						this.Mb.onDidChangeHelpInformation((Ke) => {
							this.Nb(Ke);
						}),
						this.Nb(this.Mb.helpInformation);
					const He = b.$Io.as(f.Extensions.ViewsRegistry);
					this.Lb.createOptionItems(He.getViews(this.viewContainer)),
						this.D(
							He.onViewsRegistered((Ke) => {
								const Je = [];
								for (const Te of Ke)
									Te.viewContainer.id === p.$euc && Je.push(...Te.views);
								Je.length > 0 && this.Lb.createOptionItems(Je);
							}),
						),
						this.D(
							He.onViewsDeregistered((Ke) => {
								Ke.viewContainer.id === p.$euc &&
									this.Lb.removeOptionItems(Ke.views);
							}),
						);
				}
				Nb(ue) {
					const fe = [];
					for (const ve of ue) this.Ob(ve, fe);
					(this.helpInformation = fe), this.Jb.fire();
					const me = b.$Io.as(f.Extensions.ViewsRegistry);
					this.helpInformation.length && !this.Kb
						? (me.getView(this.Ib.id) ||
								me.registerViews([this.Ib], this.viewContainer),
							(this.Kb = !0))
						: this.Kb &&
							(me.deregisterViews([this.Ib], this.viewContainer),
							(this.Kb = !1));
				}
				Ob(ue, fe) {
					(0, n.$t2)(ue.description, "contribRemoteHelp") &&
						((!ue.value.documentation &&
							!ue.value.getStarted &&
							!ue.value.issues) ||
							fe.push({
								extensionDescription: ue.description,
								getStarted: ue.value.getStarted,
								documentation: ue.value.documentation,
								reportIssue: ue.value.reportIssue,
								issues: ue.value.issues,
								remoteName: ue.value.remoteName,
								virtualWorkspace: ue.value.virtualWorkspace,
							}));
				}
				Cb(ue) {
					return (0, D.$mg)(ue.remoteAuthority)
						? ue.remoteAuthority[0]
						: ue.remoteAuthority;
				}
				Db(ue) {
					this.Mb.targetType = (0, D.$mg)(ue.remoteAuthority)
						? ue.remoteAuthority
						: [ue.remoteAuthority];
				}
				getTitle() {
					return t.localize(8732, null);
				}
			};
			(re = Ne(
				[
					j(0, E.$mEb),
					j(1, C.$km),
					j(2, d.$Vi),
					j(3, m.$lq),
					j(4, r.$gj),
					j(5, u.$Li),
					j(6, a.$iP),
					j(7, c.$Xxb),
					j(8, n.$q2),
					j(9, M.$5pc),
					j(10, f.$K1),
				],
				re,
			)),
				b.$Io.as(f.Extensions.ViewContainersRegistry).registerViewContainer(
					{
						id: p.$euc,
						title: t.localize2(8742, "Remote Explorer"),
						ctorDescriptor: new U.$Ji(re),
						hideIfEmpty: !0,
						viewOrderDelegate: {
							getOrder: (ye) => {
								if (!ye) return;
								let ue = /^targets@(\d+)$/.exec(ye);
								if (ue) return -1e3;
								if (((ue = /^details(@(\d+))?$/.exec(ye)), ue))
									return -500 + Number(ue[2]);
								if (((ue = /^help(@(\d+))?$/.exec(ye)), ue)) return -10;
							},
						},
						icon: z.$Ztc,
						order: 4,
					},
					f.ViewContainerLocation.Sidebar,
				);
			let le = class {
				constructor(ue, fe) {
					ue.getEnvironment().then((me) => {
						me && fe.setPerformanceMarks("server", me.marks);
					});
				}
			};
			(e.$EXc = le), (e.$EXc = le = Ne([j(0, v.$$m), j(1, x.$Xnc)], le));
			class oe {
				get lastReport() {
					return this.b;
				}
				constructor(ue, fe, me, ve, ge) {
					(this.location = fe),
						(this.a = !1),
						(this.b = me),
						(this.c = null),
						(this.d = null),
						(this.f = null);
					const be = new Promise((Ce) => (this.c = Ce));
					ue.withProgress(
						{ location: fe, buttons: ve },
						(Ce) => (this.a || (this.d = Ce), be),
						(Ce) => ge(Ce, this.b),
					),
						this.b && this.report();
				}
				dispose() {
					(this.a = !0),
						this.c && (this.c(), (this.c = null)),
						(this.d = null),
						this.f && (this.f.dispose(), (this.f = null));
				}
				report(ue) {
					ue && (this.b = ue),
						this.b && this.d && this.d.report({ message: this.b });
				}
				startTimer(ue) {
					this.stopTimer(), (this.f = new ae(this, ue));
				}
				stopTimer() {
					this.f && (this.f.dispose(), (this.f = null));
				}
			}
			class ae {
				constructor(ue, fe) {
					(this.a = ue),
						(this.b = fe),
						(this.c = i.$igb(K.$Bfb, () => this.d(), 1e3)),
						this.d();
				}
				dispose() {
					this.c.dispose();
				}
				d() {
					const ue = this.b - Date.now();
					if (ue < 0) return;
					const fe = Math.ceil(ue / 1e3);
					fe === 1
						? this.a.report(t.localize(8733, null, fe))
						: this.a.report(t.localize(8734, null, fe));
				}
			}
			const pe = 40 * 1e3;
			let $e = class extends k.$1c {
				constructor(ue, fe, me, ve, ge, be, Ce, Le) {
					super(), (this.a = !1);
					const Fe = ue.getConnection();
					if (Fe) {
						let Je = function (Ue, qe, Ae = null) {
								return (
									xe && (xe.dispose(), (xe = null)),
									Ue ||
										(Ue = Oe
											? $.ProgressLocation.Notification
											: $.ProgressLocation.Dialog),
									new oe(
										fe,
										Ue,
										Ae,
										qe.map((Me) => Me.label),
										(Me, De) => {
											typeof Me < "u" && qe[Me]
												? qe[Me].callback()
												: Ue === $.ProgressLocation.Dialog
													? (xe = Je($.ProgressLocation.Notification, qe, De))
													: Te();
										},
									)
								);
							},
							Te = function () {
								xe && (xe.dispose(), (xe = null));
							},
							Oe = !1;
						this.D(ge.onShow(() => (Oe = !0))),
							this.D(ge.onHide(() => (Oe = !1)));
						let xe = null,
							He = null,
							Ke = null,
							Ee = "",
							Ie = 0,
							Be = 0;
						const Se = {
								label: t.localize(8735, null),
								callback: () => {
									He?.skipWait();
								},
							},
							ke = {
								label: t.localize(8736, null),
								callback: () => {
									Le.publicLog2("remoteReconnectionReload", {
										remoteName: (0, H.$xn)(Ce.remoteAuthority),
										reconnectionToken: Ee,
										millisSinceLastIncomingData: Date.now() - Ie,
										attempt: Be,
									}),
										ve.executeCommand(P.$Zqc.ID);
								},
							};
						Fe.onDidStateChange((Ue) => {
							switch (
								(xe?.stopTimer(), Ke && (Ke.dispose(), (Ke = null)), Ue.type)
							) {
								case I.PersistentConnectionEventType.ConnectionLost:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = 0),
										Le.publicLog2("remoteConnectionLost", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
										}),
										(xe || Ue.millisSinceLastIncomingData > pe) &&
											(xe || (xe = Je(null, [Se, ke])),
											xe.report(t.localize(8737, null)));
									break;
								case I.PersistentConnectionEventType.ReconnectionWait:
									xe &&
										((He = Ue),
										(xe = Je(null, [Se, ke])),
										xe.startTimer(Date.now() + 1e3 * Ue.durationSeconds));
									break;
								case I.PersistentConnectionEventType.ReconnectionRunning:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteReconnectionRunning", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
										}),
										(xe || Ue.millisSinceLastIncomingData > pe) &&
											((xe = Je(null, [ke])),
											xe.report(t.localize(8738, null)),
											(Ke = ge.onShow(() => {
												xe &&
													xe.location === $.ProgressLocation.Dialog &&
													(xe = Je(
														$.ProgressLocation.Notification,
														[ke],
														xe.lastReport,
													));
											})));
									break;
								case I.PersistentConnectionEventType
									.ReconnectionPermanentFailure:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteReconnectionPermanentFailure", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
											handled: Ue.handled,
										}),
										Te(),
										Ue.handled
											? be.info(
													"Error handled: Not showing a notification for the error.",
												)
											: this.a ||
												((this.a = !0),
												me
													.confirm({
														type: T.default.Error,
														message: t.localize(8739, null),
														primaryButton: t.localize(8740, null),
													})
													.then((qe) => {
														qe.confirmed && ve.executeCommand(P.$Zqc.ID);
													}));
									break;
								case I.PersistentConnectionEventType.ConnectionGain:
									(Ee = Ue.reconnectionToken),
										(Ie = Date.now() - Ue.millisSinceLastIncomingData),
										(Be = Ue.attempt),
										Le.publicLog2("remoteConnectionGain", {
											remoteName: (0, H.$xn)(Ce.remoteAuthority),
											reconnectionToken: Ue.reconnectionToken,
											millisSinceLastIncomingData:
												Ue.millisSinceLastIncomingData,
											attempt: Ue.attempt,
										}),
										Te();
									break;
							}
						});
					}
				}
			};
			(e.$FXc = $e),
				(e.$FXc = $e =
					Ne(
						[
							j(0, v.$$m),
							j(1, $.$8N),
							j(2, S.$GO),
							j(3, y.$ek),
							j(4, l.$DJ),
							j(5, F.$ik),
							j(6, N.$r8),
							j(7, C.$km),
						],
						$e,
					));
		},
	),
		