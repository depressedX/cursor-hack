import '../../../require.js';
import '../../../exports.js';
import '../../nls.js';
import '../../base/browser/dom.js';
import '../../base/common/event.js';
import '../../base/common/async.js';
import '../../base/browser/browser.js';
import '../../base/common/performance.js';
import '../../base/common/errors.js';
import '../../platform/registry/common/platform.js';
import '../../base/common/platform.js';
import '../common/contributions.js';
import '../common/editor.js';
import '../../platform/instantiation/common/extensions.js';
import '../services/layout/browser/layoutService.js';
import '../../platform/storage/common/storage.js';
import '../../platform/configuration/common/configuration.js';
import '../services/lifecycle/common/lifecycle.js';
import '../../platform/notification/common/notification.js';
import './parts/notifications/notificationsCenter.js';
import './parts/notifications/notificationsAlerts.js';
import './parts/notifications/notificationsStatus.js';
import './parts/notifications/notificationsTelemetry.js';
import './parts/notifications/notificationsCommands.js';
import './parts/notifications/notificationsToasts.js';
import '../../base/browser/ui/aria/aria.js';
import '../../editor/browser/config/fontMeasurements.js';
import '../../editor/common/config/fontInfo.js';
import '../../base/common/errorMessage.js';
import './contextkeys.js';
import '../../base/common/arrays.js';
import '../../platform/instantiation/common/instantiationService.js';
import './layout.js';
import '../services/host/browser/host.js';
import '../../platform/dialogs/common/dialogs.js';
import '../../base/browser/webConstants.js';
import '../../base/common/constants.js';
import '../../base/browser/window.js';
import '../../base/browser/pixelRatio.js';
import '../../platform/hover/browser/hover.js';
import '../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../base/browser/ui/hover/hoverDelegate2.js';
import '../../platform/accessibilitySignal/browser/progressAccessibilitySignalScheduler.js';
import '../../base/browser/ui/progressbar/progressAccessibilitySignal.js';
import '../../platform/accessibility/browser/accessibleViewRegistry.js';
import './parts/notifications/notificationAccessibleView.js';
import '../../base/common/amd.js';
import '../../platform/tracing/common/register.js';
import '../../platform/tracing/common/tracingService.js';
import '../contrib/aiServerConfigService/browser/aiServerConfigService.js';
import '../services/cursorAuth/browser/authenticationService.js';
import './style.js';
define(
			de[4017],
			he([
				1, 0, 4, 7, 6, 15, 139, 240, 29, 30, 12, 55, 44, 20, 96, 21, 10, 52, 40,
				3402, 2949, 3623, 1698, 682, 3410, 127, 600, 463, 163, 3858, 24, 1615,
				4016, 87, 57, 740, 58, 75, 345, 72, 95, 317, 1650, 1496, 412, 2950, 455,
				2870, 1211, 1009, 232, 2952,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*event*/,
				E /*async*/,
				C /*browser*/,
				d /*performance*/,
				m /*errors*/,
				r /*platform*/,
				u /*platform*/,
				a /*contributions*/,
				h /*editor*/,
				c /*extensions*/,
				n /*layoutService*/,
				g /*storage*/,
				p /*configuration*/,
				o /*lifecycle*/,
				f /*notification*/,
				b /*notificationsCenter*/,
				s /*notificationsAlerts*/,
				l /*notificationsStatus*/,
				y /*notificationsTelemetry*/,
				$ /*notificationsCommands*/,
				v /*notificationsToasts*/,
				S /*aria*/,
				I /*fontMeasurements*/,
				T /*fontInfo*/,
				P /*errorMessage*/,
				k /*contextkeys*/,
				L /*arrays*/,
				D /*instantiationService*/,
				M /*layout*/,
				N /*host*/,
				A /*dialogs*/,
				R /*webConstants*/,
				O /*constants*/,
				B /*window*/,
				U /*pixelRatio*/,
				z /*hover*/,
				F /*hoverDelegateFactory*/,
				x /*hoverDelegate2*/,
				H /*progressAccessibilitySignalScheduler*/,
				q /*progressAccessibilitySignal*/,
				V /*accessibleViewRegistry*/,
				G /*notificationAccessibleView*/,
				K /*amd*/,
				J /*register*/,
				W /*tracingService*/,
				X /*aiServerConfigService*/,
				Y /*authenticationService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$q3c = void 0);
				class ie extends M.$n3c {
					constructor(ee, _, te, Q) {
						super(ee),
							(this.hc = _),
							(this.ic = te),
							(this.fc = this.D(new w.$re())),
							(this.onWillShutdown = this.fc.event),
							(this.gc = this.D(new w.$re())),
							(this.onDidShutdown = this.gc.event),
							(this.kc = { message: void 0, time: 0 }),
							(0, d.mark)("code/willStartWorkbench"),
							this.jc(Q);
					}
					jc(ee) {
						B.$Bfb.addEventListener("unhandledrejection", (_) => {
							(0, m.$4)(_.reason), _.preventDefault();
						}),
							(0, m.setUnexpectedErrorHandler)((_) => this.lc(_, ee)),
							!K.$V &&
								typeof B.$Bfb.require?.config == "function" &&
								B.$Bfb.require.config({
									onError: (_) => {
										_.phase === "loading" &&
											(0, m.$4)(
												new Error(
													(0, t.localize)(3993, null, JSON.stringify(_)),
												),
											),
											console.error(_);
									},
								});
					}
					lc(ee, _) {
						const te = (0, P.$xj)(ee, !0);
						if (!te) return;
						const Q = Date.now();
						(te === this.kc.message && Q - this.kc.time <= 1e3) ||
							((this.kc.time = Q), (this.kc.message = te), _.error(te, ee));
					}
					startup() {
						try {
							this.D((0, w.$oe)(175));
							const ee = this.mc(this.ic);
							return (
								ee.invokeFunction((_) => {
									const te = _.get(o.$n6),
										Q = _.get(g.$lq),
										Z = _.get(p.$gj),
										se = _.get(N.$asb),
										re = _.get(z.$Uyb),
										le = _.get(A.$GO),
										oe = _.get(f.$4N);
									(0, F.$bib)((ae, pe) =>
										ee.createInstance(z.$Vyb, ae, pe, {}),
									),
										(0, x.$Zib)(re),
										this.ob(_),
										r.$Io.as(a.Extensions.Workbench).start(_),
										r.$Io.as(h.$a1.EditorFactory).start(_),
										this.D(ee.createInstance(k.$l3c)),
										this.nc(te, Q, Z, se, le),
										this.sc(ee, oe, Q, Z),
										this.Sb(),
										this.layout(),
										this.vc(te);
								}),
								ee
							);
						} catch (ee) {
							throw ((0, m.$4)(ee), ee);
						}
					}
					mc(ee) {
						ee.set(n.$mEb, this);
						const _ = (0, c.$mK)();
						for (const [Q, Z] of _) ee.set(Q, Z);
						const te = new D.$Yr(ee, !0);
						return (
							te.invokeFunction((Q) => {
								const Z = Q.get(o.$n6),
									se = Q.get(p.$gj);
								typeof se.acquireInstantiationService == "function" &&
									se.acquireInstantiationService(te),
									this.wc(Q),
									(Z.phase = o.LifecyclePhase.Ready);
							}),
							te
						);
					}
					nc(ee, _, te, Q, Z) {
						this.D(te.onDidChangeConfiguration((se) => this.pc(se, te))),
							u.$p
								? this.D(
										_.onWillSaveState((se) => {
											se.reason === g.WillSaveStateReason.SHUTDOWN &&
												this.rc(_);
										}),
									)
								: this.D(ee.onWillShutdown(() => this.rc(_))),
							this.D(ee.onWillShutdown((se) => this.fc.fire(se))),
							this.D(
								ee.onDidShutdown(() => {
									this.gc.fire(), this.dispose();
								}),
							),
							this.D(
								Q.onDidChangeFocus((se) => {
									se || _.flush();
								}),
							),
							this.D(
								Z.onWillShowDialog(() =>
									this.mainContainer.classList.add("modal-dialog-visible"),
								),
							),
							this.D(
								Z.onDidShowDialog(() =>
									this.mainContainer.classList.remove("modal-dialog-visible"),
								),
							);
					}
					pc(ee, _) {
						if (
							!u.$m ||
							(ee && !ee.affectsConfiguration("workbench.fontAliasing"))
						)
							return;
						const te = _.getValue("workbench.fontAliasing");
						if (this.oc === te) return;
						this.oc = te;
						const Q = ["antialiased", "none", "auto"];
						this.mainContainer.classList.remove(
							...Q.map((Z) => `monaco-font-aliasing-${Z}`),
						),
							Q.some((Z) => Z === te) &&
								this.mainContainer.classList.add(`monaco-font-aliasing-${te}`);
					}
					qc(ee, _) {
						const te = ee.get("editorFontInfo", g.StorageScope.APPLICATION);
						if (te)
							try {
								const Q = JSON.parse(te);
								Array.isArray(Q) && I.$osb.restoreFontInfo(B.$Bfb, Q);
							} catch {}
						I.$osb.readFontInfo(
							B.$Bfb,
							T.$OK.createFromRawSettings(
								_.getValue("editor"),
								U.$sjb.getInstance(B.$Bfb).value,
							),
						);
					}
					rc(ee) {
						const _ = I.$osb.serializeFontInfo(B.$Bfb);
						_ &&
							ee.store(
								"editorFontInfo",
								JSON.stringify(_),
								g.StorageScope.APPLICATION,
								g.StorageTarget.MACHINE,
							);
					}
					sc(ee, _, te, Q) {
						(0, S.$nib)(this.mainContainer),
							(0, q.$$ob)((oe, ae) => ee.createInstance(H.$LIc, oe, ae));
						const Z = u.$l ? "windows" : u.$n ? "linux" : "mac",
							se = (0, L.$Lb)([
								"monaco-workbench",
								Z,
								u.$r ? "web" : void 0,
								C.$Qfb
									? "chromium"
									: C.$Ofb
										? "firefox"
										: C.$Rfb
											? "safari"
											: void 0,
								...this.getLayoutClasses(),
								...(this.hc?.extraClasses ? this.hc.extraClasses : []),
							]);
						this.mainContainer.classList.add(...se),
							B.$Bfb.document.body.classList.add(Z),
							u.$r && B.$Bfb.document.body.classList.add("web");
						const re = (0, R.$vjb)();
						R.$ujb.set(B.$Bfb, re),
							this.mainContainer.appendChild(re),
							this.pc(void 0, Q),
							this.qc(te, Q);
						const le = Q.getValue(O.$LW);
						for (const { id: oe, role: ae, classes: pe, options: $e } of [
							{
								id: n.Parts.TITLEBAR_PART,
								role: "none",
								classes: ["titlebar"],
							},
							{ id: n.Parts.BANNER_PART, role: "banner", classes: ["banner"] },
							...(le === "vertical"
								? [
										{
											id: n.Parts.ACTIVITYBAR_PART,
											role: "none",
											classes: [
												"activitybar",
												this.getSideBarPosition() === n.Position.LEFT
													? "left"
													: "right",
											],
										},
									]
								: []),
							{
								id: n.Parts.SIDEBAR_PART,
								role: "none",
								classes: [
									"sidebar",
									this.getSideBarPosition() === n.Position.LEFT
										? "left"
										: "right",
								],
							},
							{
								id: n.Parts.EDITOR_PART,
								role: "main",
								classes: ["editor"],
								options: { restorePreviousState: this.Cb() },
							},
							{
								id: n.Parts.PANEL_PART,
								role: "none",
								classes: [
									"panel",
									"basepanel",
									(0, n.$oEb)(this.getPanelPosition()),
								],
							},
							{
								id: n.Parts.AUXILIARYBAR_PART,
								role: "none",
								classes: [
									"auxiliarybar",
									"basepanel",
									this.getSideBarPosition() === n.Position.LEFT
										? "right"
										: "left",
								],
							},
							{
								id: n.Parts.STATUSBAR_PART,
								role: "status",
								classes: ["statusbar"],
							},
						]) {
							const ye = this.tc(oe, ae, pe);
							(0, d.mark)(`code/willCreatePart/${oe}`),
								this.Lb(oe).create(ye, $e),
								(0, d.mark)(`code/didCreatePart/${oe}`);
						}
						this.uc(ee, _), this.nb.appendChild(this.mainContainer);
					}
					tc(ee, _, te) {
						const Q = document.createElement(_ === "status" ? "footer" : "div");
						return (
							Q.classList.add("part", ...te),
							(Q.id = ee),
							Q.setAttribute("role", _),
							_ === "status" && Q.setAttribute("aria-live", "off"),
							Q
						);
					}
					uc(ee, _) {
						const te = this.D(
								ee.createInstance(b.$h3c, this.mainContainer, _.model),
							),
							Q = this.D(
								ee.createInstance(v.$k3c, this.mainContainer, _.model),
							);
						this.D(ee.createInstance(s.$i3c, _.model));
						const Z = ee.createInstance(l.$j3c, _.model);
						this.D(ee.createInstance(y.$R2c)),
							this.D(
								te.onDidChangeVisibility(() => {
									Z.update(te.isVisible, Q.isVisible), Q.update(te.isVisible);
								}),
							),
							this.D(
								Q.onDidChangeVisibility(() => {
									Z.update(te.isVisible, Q.isVisible);
								}),
							),
							(0, $.$42c)(te, Q, _.model),
							V.$Whc.register(new G.$o3c()),
							this.registerNotifications({
								onDidChangeNotificationsVisibility: w.Event.map(
									w.Event.any(
										Q.onDidChangeVisibility,
										te.onDidChangeVisibility,
									),
									() => Q.isVisible || te.isVisible,
								),
							});
					}
					vc(ee) {
						try {
							this.Kb();
						} catch (_) {
							(0, m.$4)(_);
						}
						this.Hb.finally(() =>
							Promise.race([this.whenRestored, (0, E.$Nh)(2e3)]).finally(() => {
								function _() {
									(0, d.mark)("code/didStartWorkbench"),
										performance.measure(
											"perf: workbench create & restore",
											"code/didLoadWorkbenchMain",
											"code/didStartWorkbench",
										);
								}
								this.isRestored() ? _() : this.whenRestored.finally(() => _()),
									(ee.phase = o.LifecyclePhase.Restored),
									this.D(
										new E.$Yh(() => {
											this.D(
												(0, i.$egb)(
													B.$Bfb,
													() => (ee.phase = o.LifecyclePhase.Eventually),
													2500,
												),
											);
										}, 2500),
									).schedule();
							}),
						);
					}
					wc(ee) {
						const _ = ee.get(W.$jbb),
							te = ee.get(Y.$x6b),
							Q = ee.get(X.$fdc),
							Z = () => {
								const le = Q.cachedServerConfig.clientTracingConfig;
								le !== void 0 && _.setClientTracingConfig(le);
							};
						this.D(Q.onDidRefreshServerConfig(Z));
						const se = (le) => {
							_.setIsPrivacyMode(le ?? !0);
						};
						this.D(te.onDidPotentiallyChangePrivacyMode(se));
						const re = (le) => {
							le === !1
								? _.setUser(null, null)
								: te
										.getEmailAndSignUpType()
										.then(async ({ email: oe }) => {
											const ae = await te.getAccessToken(),
												pe = ae ? te.getAuthIdFromToken(ae) : void 0;
											_.setUser(oe ?? null, pe ?? null);
										})
										.catch(() => {
											_.setUser(null, null);
										});
						};
						te.addLoginChangedListener(re),
							Z(),
							se(te.reactivePrivacyMode()),
							re(),
							this.D((0, J.$p3c)("renderer", _));
					}
				}
				e.$q3c = ie;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	