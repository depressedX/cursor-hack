import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/event.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/iconLabel/iconLabel.js';
import '../../../../base/common/actions.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../services/remote/common/remoteExplorerService.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../base/common/uri.js';
import '../../../../platform/tunnel/common/tunnel.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import './remoteIcons.js';
import '../../externalUriOpener/common/externalUriOpenerService.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/platform.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/common/htmlContent.js';
import '../../../common/theme.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../services/remote/common/tunnelModel.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/remote/browser/media/tunnelView.js';
define(
			de[3837],
			he([
				1, 0, 4, 7, 60, 89, 39, 49, 8, 10, 5, 41, 63, 31, 6, 78, 3, 105, 325,
				50, 11, 92, 519, 121, 40, 292, 288, 27, 35, 26, 146, 9, 374, 102, 43,
				32, 198, 1256, 1034, 33, 12, 93, 183, 51, 94, 123, 14, 106, 839, 95, 72,
				2483,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*views*/,
				E /*viewsService*/,
				C /*keybinding*/,
				d /*contextView*/,
				m /*contextkey*/,
				r /*configuration*/,
				u /*instantiation*/,
				a /*opener*/,
				h /*quickInput*/,
				c /*commands*/,
				n /*event*/,
				g /*environmentService*/,
				p /*lifecycle*/,
				o /*actionbar*/,
				f /*iconLabel*/,
				b /*actions*/,
				s /*actions*/,
				l /*menuEntryActionViewItem*/,
				y /*remoteExplorerService*/,
				$ /*clipboardService*/,
				v /*notification*/,
				S /*inputBox*/,
				I /*functional*/,
				T /*keyCodes*/,
				P /*themeService*/,
				k /*themables*/,
				L /*viewPane*/,
				D /*uri*/,
				M /*tunnel*/,
				N /*descriptors*/,
				A /*keybindingsRegistry*/,
				R /*telemetry*/,
				O /*actionViewItems*/,
				B /*remoteIcons*/,
				U /*externalUriOpenerService*/,
				z /*cancellation*/,
				F /*platform*/,
				x /*listService*/,
				H /*button*/,
				q /*colorRegistry*/,
				V /*htmlContent*/,
				G /*theme*/,
				K /*codicons*/,
				J /*defaultStyles*/,
				W /*tunnelModel*/,
				X /*hoverDelegateFactory*/,
				Y /*hover*/,
) {
				"use strict";
				var ie;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.OpenPortInPreviewAction =
						e.OpenPortInBrowserAction =
						e.ForwardPortAction =
						e.$cuc =
						e.$buc =
						e.$auc =
						e.$_tc =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(e.$_tc = new m.$5j("openPreviewEnabled", !1));
				class ne {
					constructor(nt) {
						(this.c = nt), (this.headerRowHeight = 22);
					}
					getHeight(nt) {
						return nt.tunnelType === y.TunnelType.Add &&
							!this.c.getEditableData(void 0)
							? 30
							: 22;
					}
				}
				let ee = class {
					constructor(nt, lt) {
						(this.f = nt),
							(this.g = lt),
							(this.d = new Map()),
							(this.input = {
								label: t.localize(8810, null),
								icon: void 0,
								tunnelType: y.TunnelType.Add,
								hasRunningProcess: !1,
								remoteHost: "",
								remotePort: 0,
								processDescription: "",
								tooltipPostfix: "",
								iconTooltip: "",
								portTooltip: "",
								processTooltip: "",
								originTooltip: "",
								privacyTooltip: "",
								source: { source: W.TunnelSource.User, description: "" },
								protocol: M.TunnelProtocol.Http,
								privacy: {
									id: M.TunnelPrivacyId.Private,
									themeIcon: B.$3tc.id,
									label: t.localize(8811, null),
								},
								strip: () => {},
							}),
							(this.c = nt.tunnelModel),
							(this.onForwardedPortsChanged = n.Event.any(
								this.c.onForwardPort,
								this.c.onClosePort,
								this.c.onPortName,
								this.c.onCandidatesChanged,
							));
					}
					get all() {
						const nt = [];
						return (
							(this.d = new Map()),
							this.c.candidates.forEach((lt) => {
								this.d.set((0, W.$z8)(lt.host, lt.port), lt);
							}),
							(this.c.forwarded.size > 0 || this.f.getEditableData(void 0)) &&
								nt.push(...this.i),
							this.c.detected.size > 0 && nt.push(...this.j),
							nt.push(this.input),
							nt
						);
					}
					h(nt) {
						const lt = (0, W.$z8)(nt.remoteHost, nt.remotePort);
						this.d.has(lt) && (nt.processDescription = this.d.get(lt).detail);
					}
					get i() {
						return Array.from(this.c.forwarded.values())
							.map((lt) => {
								const ct = ae.createFromTunnel(this.f, this.g, lt);
								return this.h(ct), ct;
							})
							.sort((lt, ct) =>
								lt.remotePort === ct.remotePort
									? lt.remoteHost < ct.remoteHost
										? -1
										: 1
									: lt.remotePort < ct.remotePort
										? -1
										: 1,
							);
					}
					get j() {
						return Array.from(this.c.detected.values()).map((nt) => {
							const lt = ae.createFromTunnel(
								this.f,
								this.g,
								nt,
								y.TunnelType.Detected,
								!1,
							);
							return this.h(lt), lt;
						});
					}
					isEmpty() {
						return (
							this.j.length === 0 &&
							(this.i.length === 0 ||
								(this.i.length === 1 &&
									this.i[0].tunnelType === y.TunnelType.Add &&
									!this.f.getEditableData(void 0)))
						);
					}
				};
				(e.$auc = ee), (e.$auc = ee = Ne([j(0, y.$5pc), j(1, M.$cO)], ee));
				function _(bt) {
					return {
						label: "",
						tunnel: bt,
						editId: y.TunnelEditId.None,
						tooltip: "",
					};
				}
				class te {
					constructor() {
						(this.label = ""),
							(this.tooltip = ""),
							(this.weight = 1),
							(this.minimumWidth = 40),
							(this.maximumWidth = 40),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.processDescription ? B.$$tc : B.$0tc;
						let ct = "";
						return (
							nt instanceof ae &&
								(ct = `${nt.iconTooltip} ${nt.tooltipPostfix}`),
							{
								label: "",
								icon: lt,
								tunnel: nt,
								editId: y.TunnelEditId.None,
								tooltip: ct,
							}
						);
					}
				}
				class Q {
					constructor() {
						(this.label = t.localize(8812, null)),
							(this.tooltip = t.localize(8813, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						const lt = nt.tunnelType === y.TunnelType.Add,
							ct = nt.label;
						let gt = "";
						return (
							nt instanceof ae && !lt
								? (gt = `${nt.portTooltip} ${nt.tooltipPostfix}`)
								: (gt = ct),
							{
								label: ct,
								tunnel: nt,
								menuId: s.$XX.TunnelPortInline,
								editId:
									nt.tunnelType === y.TunnelType.Add
										? y.TunnelEditId.New
										: y.TunnelEditId.Label,
								tooltip: gt,
							}
						);
					}
				}
				class Z {
					constructor() {
						(this.label = t.localize(8814, null)),
							(this.tooltip = t.localize(8815, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.localAddress ?? "";
						let ct = lt;
						return (
							nt instanceof ae && (ct = nt.tooltipPostfix),
							{
								label: lt,
								menuId: s.$XX.TunnelLocalAddressInline,
								tunnel: nt,
								editId: y.TunnelEditId.LocalPort,
								tooltip: ct,
								markdownTooltip: lt ? Z.c(lt) : void 0,
							}
						);
					}
					static c(nt) {
						return function (lt) {
							const ct = lt.getValue("editor");
							let gt = "";
							ct.multiCursorModifier === "ctrlCmd"
								? F.$m
									? (gt = t.localize(8816, null))
									: (gt = t.localize(8817, null))
								: F.$m
									? (gt = t.localize(8818, null))
									: (gt = t.localize(8819, null));
							const ht = new V.$cl("", !0),
								Rt = nt.startsWith("http") ? nt : `http://${nt}`;
							return ht
								.appendLink(Rt, "Follow link")
								.appendMarkdown(` (${gt})`);
						};
					}
				}
				class se {
					constructor() {
						(this.label = t.localize(8820, null)),
							(this.tooltip = t.localize(8821, null)),
							(this.weight = 2),
							(this.templateId = "actionbar");
					}
					project(nt) {
						return nt.tunnelType === y.TunnelType.Add
							? _(nt)
							: {
									label: nt.processDescription ?? "",
									tunnel: nt,
									editId: y.TunnelEditId.None,
									tooltip: nt instanceof ae ? nt.processTooltip : "",
								};
					}
				}
				class re {
					constructor() {
						(this.label = t.localize(8822, null)),
							(this.tooltip = t.localize(8823, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.source.description,
							ct = `${nt instanceof ae ? nt.originTooltip : ""}. ${nt instanceof ae ? nt.tooltipPostfix : ""}`;
						return {
							label: lt,
							menuId: s.$XX.TunnelOriginInline,
							tunnel: nt,
							editId: y.TunnelEditId.None,
							tooltip: ct,
						};
					}
				}
				class le {
					constructor() {
						(this.label = t.localize(8824, null)),
							(this.tooltip = t.localize(8825, null)),
							(this.weight = 1),
							(this.templateId = "actionbar");
					}
					project(nt) {
						if (nt.tunnelType === y.TunnelType.Add) return _(nt);
						const lt = nt.privacy?.label;
						let ct = "";
						return (
							nt instanceof ae &&
								(ct = `${nt.privacy.label} ${nt.tooltipPostfix}`),
							{
								label: lt,
								tunnel: nt,
								icon: { id: nt.privacy.themeIcon },
								editId: y.TunnelEditId.None,
								tooltip: ct,
							}
						);
					}
				}
				let oe = class extends p.$1c {
					constructor(nt, lt, ct, gt, ht, Rt, Nt) {
						super(),
							(this.h = nt),
							(this.j = lt),
							(this.m = ct),
							(this.n = gt),
							(this.q = ht),
							(this.r = Rt),
							(this.s = Nt),
							(this.templateId = "actionbar"),
							(this.g = (0, X.$cib)("mouse"));
					}
					set actionRunner(nt) {
						this.f = nt;
					}
					renderTemplate(nt) {
						const lt = i.$fhb(nt, i.$(".ports-view-actionbar-cell")),
							ct = i.$fhb(lt, i.$(".ports-view-actionbar-cell-icon")),
							gt = new f.$Xob(lt, {
								supportHighlights: !0,
								hoverDelegate: this.g,
							}),
							ht = i.$fhb(lt, i.$(".actions")),
							Rt = new o.$eib(ht, {
								actionViewItemProvider: l.$Pyb.bind(void 0, this.h),
								hoverDelegate: this.g,
							});
						return {
							label: gt,
							icon: ct,
							actionBar: Rt,
							container: lt,
							elementDisposable: p.$1c.None,
						};
					}
					renderElement(nt, lt, ct) {
						ct.actionBar.clear(),
							(ct.icon.className = "ports-view-actionbar-cell-icon"),
							(ct.icon.style.display = "none"),
							ct.label.setLabel(""),
							(ct.label.element.style.display = "none"),
							(ct.container.style.height = "22px"),
							ct.button &&
								((ct.button.element.style.display = "none"),
								ct.button.dispose()),
							(ct.container.style.paddingLeft = "0px"),
							ct.elementDisposable.dispose();
						let gt;
						nt.editId === y.TunnelEditId.New &&
						(gt = this.q.getEditableData(void 0))
							? this.u(ct.container, gt)
							: ((gt = this.q.getEditableData(nt.tunnel, nt.editId)),
								gt
									? this.u(ct.container, gt)
									: nt.tunnel.tunnelType === y.TunnelType.Add &&
											nt.menuId === s.$XX.TunnelPortInline
										? this.renderButton(nt, ct)
										: this.renderActionBarItem(nt, ct));
					}
					renderButton(nt, lt) {
						(lt.container.style.paddingLeft = "7px"),
							(lt.container.style.height = "28px"),
							(lt.button = this.D(new H.$oob(lt.container, J.$lyb))),
							(lt.button.label = nt.label),
							(lt.button.element.title = nt.tooltip),
							this.D(
								lt.button.onDidClick(() => {
									this.r.executeCommand(Se.INLINE_ID);
								}),
							);
					}
					t(nt) {
						let lt;
						return (
							nt instanceof ae && (lt = nt.strip()),
							lt ||
								(lt = {
									tunnelType: nt.tunnelType,
									remoteHost: nt.remoteHost,
									remotePort: nt.remotePort,
									localAddress: nt.localAddress,
									protocol: nt.protocol,
									localUri: nt.localUri,
									localPort: nt.localPort,
									name: nt.name,
									closeable: nt.closeable,
									source: nt.source,
									privacy: nt.privacy,
									processDescription: nt.processDescription,
									label: nt.label,
								}),
							lt
						);
					}
					renderActionBarItem(nt, lt) {
						(lt.label.element.style.display = "flex"),
							lt.label.setLabel(nt.label, void 0, {
								title: nt.markdownTooltip
									? {
											markdown: nt.markdownTooltip(this.s),
											markdownNotSupportedFallback: nt.tooltip,
										}
									: nt.tooltip,
								extraClasses:
									nt.menuId === s.$XX.TunnelLocalAddressInline
										? ["ports-view-actionbar-cell-localaddress"]
										: void 0,
							}),
							(lt.actionBar.context = this.t(nt.tunnel)),
							(lt.container.style.paddingLeft = "10px");
						const ct = [
								["view", y.$7pc],
								[pe.key, nt.tunnel.tunnelType],
								[$e.key, nt.tunnel.closeable],
								[ye.key, nt.tunnel.privacy.id],
								[fe.key, nt.tunnel.protocol],
							],
							gt = this.j.createOverlay(ct),
							ht = new p.$Zc();
						if (((lt.elementDisposable = ht), nt.menuId)) {
							const Rt = ht.add(this.m.createMenu(nt.menuId, gt));
							let Nt = [];
							if (((0, l.$Kyb)(Rt, { shouldForwardArgs: !0 }, Nt), Nt)) {
								const jt = Nt.filter(
									(ti) => ti.id.toLowerCase().indexOf("label") >= 0,
								);
								jt.length > 1 &&
									(jt.sort((ti, kt) => ti.label.length - kt.label.length),
									jt.pop(),
									(Nt = Nt.filter((ti) => jt.indexOf(ti) < 0))),
									lt.actionBar.push(Nt, { icon: !0, label: !1 }),
									this.f && (lt.actionBar.actionRunner = this.f);
							}
						}
						nt.icon &&
							((lt.icon.className = `ports-view-actionbar-cell-icon ${k.ThemeIcon.asClassName(nt.icon)}`),
							(lt.icon.title = nt.tooltip),
							(lt.icon.style.display = "inline"));
					}
					u(nt, lt) {
						this.c && (this.c(!1, !1), (this.c = void 0)),
							(nt.style.paddingLeft = "5px");
						const ct = lt.startingValue || "",
							gt = new S.$Mob(nt, this.n, {
								ariaLabel: t.localize(8826, null),
								validationOptions: {
									validation: (Nt) => {
										const jt = lt.validationMessage(Nt);
										return jt
											? {
													content: jt.content,
													formatContent: !0,
													type:
														jt.severity === v.Severity.Error
															? S.MessageType.ERROR
															: S.MessageType.INFO,
												}
											: null;
									},
								},
								placeholder: lt.placeholder || "",
								inputBoxStyles: J.$wyb,
							});
						(gt.value = ct),
							gt.focus(),
							gt.select({
								start: 0,
								end: lt.startingValue ? lt.startingValue.length : 0,
							});
						const ht = (0, I.$hb)(async (Nt, jt) => {
							(0, p.$Vc)(Rt),
								this.c && (this.c = void 0),
								(gt.element.style.display = "none");
							const ti = gt.value;
							if (jt) return lt.onFinish(ti, Nt);
						});
						this.c = ht;
						const Rt = [
							gt,
							i.$$fb(gt.inputElement, i.$$gb.KEY_DOWN, async (Nt) => {
								if (Nt.equals(T.KeyCode.Enter))
									return (
										Nt.stopPropagation(),
										gt.validate() !== S.MessageType.ERROR
											? ht(!0, !0)
											: ht(!1, !0)
									);
								if (Nt.equals(T.KeyCode.Escape))
									return Nt.preventDefault(), Nt.stopPropagation(), ht(!1, !0);
							}),
							i.$0fb(gt.inputElement, i.$$gb.BLUR, () =>
								ht(gt.validate() !== S.MessageType.ERROR, !0),
							),
						];
						return (0, p.$Yc)(() => {
							ht(!1, !1);
						});
					}
					disposeElement(nt, lt, ct, gt) {
						ct.elementDisposable.dispose();
					}
					disposeTemplate(nt) {
						nt.label.dispose(),
							nt.actionBar.dispose(),
							nt.elementDisposable.dispose(),
							nt.button?.dispose();
					}
				};
				oe = Ne(
					[
						j(0, u.$Li),
						j(1, m.$6j),
						j(2, s.$YX),
						j(3, d.$Wxb),
						j(4, y.$5pc),
						j(5, c.$ek),
						j(6, r.$gj),
					],
					oe,
				);
				class ae {
					static createFromTunnel(nt, lt, ct, gt = y.TunnelType.Forwarded, ht) {
						return new ae(
							gt,
							ct.remoteHost,
							ct.remotePort,
							ct.source,
							!!ct.hasRunningProcess,
							ct.protocol,
							ct.localUri,
							ct.localAddress,
							ct.localPort,
							ht === void 0 ? ct.closeable : ht,
							ct.name,
							ct.runningProcess,
							ct.pid,
							ct.privacy,
							nt,
							lt,
						);
					}
					strip() {
						return new ae(
							this.tunnelType,
							this.remoteHost,
							this.remotePort,
							this.source,
							this.hasRunningProcess,
							this.protocol,
							this.localUri,
							this.localAddress,
							this.localPort,
							this.closeable,
							this.name,
							this.c,
							this.d,
							this.f,
						);
					}
					constructor(
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
					) {
						(this.tunnelType = nt),
							(this.remoteHost = lt),
							(this.remotePort = ct),
							(this.source = gt),
							(this.hasRunningProcess = ht),
							(this.protocol = Rt),
							(this.localUri = Nt),
							(this.localAddress = jt),
							(this.localPort = ti),
							(this.closeable = kt),
							(this.name = hi),
							(this.c = Kt),
							(this.d = di),
							(this.f = Ye),
							(this.g = ze),
							(this.h = Xe);
					}
					get label() {
						if (this.tunnelType === y.TunnelType.Add && this.name)
							return this.name;
						const nt =
							(0, M.$iO)(this.remoteHost) || (0, M.$kO)(this.remoteHost)
								? `${this.remotePort}`
								: `${this.remoteHost}:${this.remotePort}`;
						return this.name ? `${this.name} (${nt})` : nt;
					}
					set processDescription(nt) {
						this.c = nt;
					}
					get processDescription() {
						let nt = "";
						return (
							this.c
								? (this.d && this.g?.namedProcesses.has(this.d)
										? (nt = this.g.namedProcesses.get(this.d))
										: (nt = this.c.replace(/\0/g, " ").trim()),
									this.d && (nt += ` (${this.d})`))
								: this.hasRunningProcess && (nt = t.localize(8827, null)),
							nt
						);
					}
					get tooltipPostfix() {
						let nt;
						return (
							this.localAddress
								? (nt = t.localize(
										8828,
										null,
										this.remoteHost,
										this.remotePort,
										this.localAddress,
									))
								: (nt = t.localize(
										8829,
										null,
										this.remoteHost,
										this.remotePort,
									)),
							nt
						);
					}
					get iconTooltip() {
						return this.tunnelType === y.TunnelType.Add
							? this.label
							: `${this.processDescription ? t.localize(8830, null) : t.localize(8831, null)}`;
					}
					get portTooltip() {
						return this.tunnelType === y.TunnelType.Add
							? ""
							: `${this.name ? t.localize(8832, null, this.name) : ""}`;
					}
					get processTooltip() {
						return this.processDescription ?? "";
					}
					get originTooltip() {
						return this.source.description;
					}
					get privacy() {
						return this.h?.privacyOptions
							? (this.h?.privacyOptions.find((nt) => nt.id === this.f) ?? {
									id: "",
									themeIcon: K.$ak.question.id,
									label: t.localize(8833, null),
								})
							: {
									id: M.TunnelPrivacyId.Private,
									themeIcon: B.$3tc.id,
									label: t.localize(8834, null),
								};
					}
				}
				const pe = new m.$5j("tunnelType", y.TunnelType.Add, !0),
					$e = new m.$5j("tunnelCloseable", !1, !0),
					ye = new m.$5j("tunnelPrivacy", void 0, !0),
					ue = new m.$5j("tunnelPrivacyEnabled", !1, !0),
					fe = new m.$5j("tunnelProtocol", M.TunnelProtocol.Http, !0),
					me = new m.$5j("tunnelViewFocus", !1, t.localize(8835, null)),
					ve = "tunnelViewSelection",
					ge = new m.$5j(ve, void 0, !0),
					be = "tunnelViewMultiSelection",
					Ce = new m.$5j(be, void 0, !0),
					Le = new m.$5j("portChangable", !1, !0),
					Fe = new m.$5j("protocolChangable", !0, !0);
				let Oe = class extends L.$TMb {
					static {
						ie = this;
					}
					static {
						this.ID = y.$7pc;
					}
					static {
						this.TITLE = t.localize2(8867, "Ports");
					}
					constructor(
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
						Kt,
						di,
						Ye,
						ze,
						Xe,
						It,
						Lt,
					) {
						super(lt, ct, gt, Rt, ht, jt, Nt, ti, di, ze, Xe),
							(this.fc = nt),
							(this.gc = kt),
							(this.hc = hi),
							(this.ic = Kt),
							(this.jc = Ye),
							(this.kc = It),
							(this.lc = Lt),
							(this.g = this.D(new p.$Zc())),
							(this.cc = !1),
							(this.dc = []),
							(this.ec = []),
							(this.uc = 0),
							(this.vc = 0),
							(this.h = pe.bindTo(ht)),
							(this.j = $e.bindTo(ht)),
							(this.m = ye.bindTo(ht)),
							(this.n = ue.bindTo(ht)),
							this.n.set(It.canChangePrivacy),
							(this.sb = Fe.bindTo(ht)),
							this.sb.set(It.canChangeProtocol),
							(this.r = fe.bindTo(ht)),
							(this.s = me.bindTo(ht)),
							(this.t = ge.bindTo(ht)),
							(this.L = Ce.bindTo(ht)),
							(this.ab = Le.bindTo(ht));
						const xt = this.Bb.createOverlay([["view", ie.ID]]),
							Vt = this.D(this.ic.createMenu(s.$XX.TunnelTitle, xt)),
							Bt = () => {
								(this.dc = []), (0, l.$Kyb)(Vt, void 0, this.dc), this.bc();
							};
						this.D(Vt.onDidChange(Bt)),
							Bt(),
							this.D(
								(0, p.$Yc)(() => {
									this.dc = [];
								}),
							),
							this.mc(),
							this.D(
								n.Event.once(this.kc.onAddedTunnelProvider)(() => {
									let Gt = !1;
									this.n.get() === !1 &&
										(this.n.set(It.canChangePrivacy), (Gt = !0)),
										this.sb.get() === !0 &&
											(this.sb.set(It.canChangeProtocol), (Gt = !0)),
										Gt &&
											(Bt(),
											this.mc(),
											this.nc(),
											this.f?.layout(this.uc, this.vc));
								}),
							);
					}
					mc() {
						for (const nt of this.kc.privacyOptions) {
							const lt = `remote.tunnel.privacy${nt.id}`;
							c.$fk.registerCommand(lt, je.handler(nt.id)),
								s.$ZX.appendMenuItem(s.$XX.TunnelPrivacy, {
									order: 0,
									command: {
										id: lt,
										title: nt.label,
										toggled: ye.isEqualTo(nt.id),
									},
								});
						}
					}
					get portCount() {
						return (
							this.jc.tunnelModel.forwarded.size +
							this.jc.tunnelModel.detected.size
						);
					}
					nc() {
						if (!this.c) return;
						this.g.clear(), i.$9fb(this.c);
						const nt = i.$fhb(this.c, i.$(".customview-tree"));
						nt.classList.add("ports-view"),
							nt.classList.add("file-icon-themable-tree", "show-file-icons");
						const lt = new oe(
								this.Db,
								this.Bb,
								this.ic,
								this.lc,
								this.jc,
								this.hc,
								this.Ab,
							),
							ct = [new te(), new Q(), new Z(), new se()];
						this.kc.canChangePrivacy && ct.push(new le()),
							ct.push(new re()),
							(this.f = this.Db.createInstance(
								x.$AMb,
								"RemoteTunnels",
								nt,
								new ne(this.jc),
								ct,
								[lt],
								{
									keyboardNavigationLabelProvider: {
										getKeyboardNavigationLabel: (Nt) => Nt.label,
									},
									multipleSelectionSupport: !0,
									accessibilityProvider: {
										getAriaLabel: (Nt) =>
											Nt instanceof ae
												? `${Nt.tooltipPostfix} ${Nt.portTooltip} ${Nt.iconTooltip} ${Nt.processTooltip} ${Nt.originTooltip} ${this.kc.canChangePrivacy ? Nt.privacy.label : ""}`
												: Nt.label,
										getWidgetAriaLabel: () => t.localize(8836, null),
									},
									openOnSingleClick: !0,
								},
							));
						const gt = new b.$sj();
						(lt.actionRunner = gt),
							this.g.add(this.f),
							this.g.add(this.f.onContextMenu((Nt) => this.sc(Nt, gt))),
							this.g.add(this.f.onMouseDblClick((Nt) => this.tc(Nt))),
							this.g.add(this.f.onDidChangeFocus((Nt) => this.pc(Nt))),
							this.g.add(this.f.onDidChangeSelection((Nt) => this.rc(Nt))),
							this.g.add(this.f.onDidFocus(() => this.s.set(!0))),
							this.g.add(this.f.onDidBlur(() => this.s.set(!1)));
						const ht = () =>
							this.f?.splice(0, Number.POSITIVE_INFINITY, this.fc.all);
						ht();
						let Rt = this.portCount;
						this.g.add(
							n.Event.debounce(
								this.fc.onForwardedPortsChanged,
								(Nt, jt) => jt,
								50,
							)(() => {
								const Nt = this.portCount;
								(Rt === 0 || Nt === 0) && Rt !== Nt && this.eb.fire(),
									(Rt = Nt),
									ht();
							}),
						),
							this.g.add(
								this.f.onMouseClick((Nt) => {
									if (this.qc(Nt.browserEvent) && this.f) {
										const jt = this.f.getSelectedElements();
										(jt.length === 0 ||
											(jt.length === 1 && jt[0] === Nt.element)) &&
											this.hc.executeCommand(qe.ID, Nt.element);
									}
								}),
							),
							this.g.add(
								this.f.onDidOpen((Nt) => {
									!Nt.element ||
										Nt.element.tunnelType !== y.TunnelType.Forwarded ||
										(Nt.browserEvent?.type === "dblclick" &&
											this.hc.executeCommand(Ke.ID));
								}),
							),
							this.g.add(
								this.jc.onDidChangeEditable((Nt) => {
									(this.cc = !!this.jc.getEditableData(Nt?.tunnel, Nt?.editId)),
										this.eb.fire(),
										this.cc || nt.classList.remove("highlight"),
										ht(),
										this.cc
											? (nt.classList.add("highlight"),
												Nt || this.f?.reveal(this.f.indexOf(this.fc.input)))
											: (Nt &&
													Nt.tunnel.tunnelType !== y.TunnelType.Add &&
													this.f?.setFocus(this.ec),
												this.focus());
								}),
							);
					}
					W(nt) {
						super.W(nt),
							(this.c = i.$fhb(nt, i.$(".tree-explorer-viewlet-tree-view"))),
							this.nc();
					}
					shouldShowWelcome() {
						return this.fc.isEmpty() && !this.cc;
					}
					focus() {
						super.focus(), this.f?.domFocus();
					}
					pc(nt) {
						nt.indexes.length > 0 &&
							nt.elements.length > 0 &&
							(this.ec = [...nt.indexes]);
						const lt = nt.elements,
							ct = lt && lt.length ? lt[0] : void 0;
						ct
							? (this.t.set((0, W.$z8)(ct.remoteHost, ct.remotePort)),
								this.h.set(ct.tunnelType),
								this.j.set(!!ct.closeable),
								this.m.set(ct.privacy.id),
								this.r.set(
									(ct.protocol === M.TunnelProtocol.Https,
									M.TunnelProtocol.Https),
								),
								this.ab.set(!!ct.localPort))
							: (this.h.reset(),
								this.t.reset(),
								this.j.reset(),
								this.m.reset(),
								this.r.reset(),
								this.ab.reset());
					}
					qc(nt) {
						const lt = this.Ab.getValue("editor");
						let ct = !1;
						return (
							lt.multiCursorModifier === "ctrlCmd"
								? (ct = nt.altKey)
								: F.$m
									? (ct = nt.metaKey)
									: (ct = nt.ctrlKey),
							ct
						);
					}
					rc(nt) {
						const lt = nt.elements;
						lt.length > 1
							? this.L.set(
									lt.map((ct) => (0, W.$z8)(ct.remoteHost, ct.remotePort)),
								)
							: this.L.set(void 0);
					}
					sc(nt, lt) {
						if (nt.element !== void 0 && !(nt.element instanceof ae)) return;
						nt.browserEvent.preventDefault(), nt.browserEvent.stopPropagation();
						const ct = nt.element;
						ct
							? (this.f?.setFocus([this.f.indexOf(ct)]),
								this.h.set(ct.tunnelType),
								this.j.set(!!ct.closeable),
								this.m.set(ct.privacy.id),
								this.r.set(ct.protocol),
								this.ab.set(!!ct.localPort))
							: (this.h.set(y.TunnelType.Add),
								this.j.set(!1),
								this.m.set(void 0),
								this.r.set(void 0),
								this.ab.set(!1)),
							this.zb.showContextMenu({
								menuId: s.$XX.TunnelContext,
								menuActionOptions: { shouldForwardArgs: !0 },
								contextKeyService: this.f?.contextKeyService,
								getAnchor: () => nt.anchor,
								getActionViewItem: (gt) => {
									const ht = this.yb.lookupKeybinding(gt.id);
									if (ht)
										return new O.$_ib(gt, gt, {
											label: !0,
											keybinding: ht.getLabel(),
										});
								},
								onHide: (gt) => {
									gt && this.f?.domFocus();
								},
								getActionsContext: () => ct?.strip(),
								actionRunner: lt,
							});
					}
					tc(nt) {
						nt.element || this.hc.executeCommand(Se.INLINE_ID);
					}
					X(nt, lt) {
						(this.uc = nt),
							(this.vc = lt),
							super.X(nt, lt),
							this.f?.layout(nt, lt);
					}
				};
				(e.$buc = Oe),
					(e.$buc =
						Oe =
						ie =
							Ne(
								[
									j(2, C.$uZ),
									j(3, d.$Xxb),
									j(4, m.$6j),
									j(5, r.$gj),
									j(6, u.$Li),
									j(7, w.$K1),
									j(8, a.$7rb),
									j(9, h.$DJ),
									j(10, c.$ek),
									j(11, s.$YX),
									j(12, P.$iP),
									j(13, y.$5pc),
									j(14, R.$km),
									j(15, Y.$Uyb),
									j(16, M.$cO),
									j(17, d.$Wxb),
								],
								Oe,
							));
				class xe {
					constructor(nt, lt) {
						(this.id = Oe.ID),
							(this.name = Oe.TITLE),
							(this.canToggleVisibility = !0),
							(this.hideByDefault = !1),
							(this.group = "details@0"),
							(this.order = -500),
							(this.canMoveView = !0),
							(this.containerIcon = B.$1tc),
							(this.ctorDescriptor = new N.$Ji(Oe, [nt])),
							(this.remoteAuthority = lt.remoteAuthority
								? lt.remoteAuthority.split("+")[0]
								: void 0);
					}
				}
				e.$cuc = xe;
				function He(bt) {
					return bt && bt.tunnelType && bt.remoteHost && bt.source;
				}
				var Ke;
				(function (bt) {
					(bt.ID = "remote.tunnel.label"),
						(bt.LABEL = t.localize(8837, null)),
						(bt.COMMAND_ID_KEYWORD = "label");
					function nt() {
						return async (lt, ct) => {
							const gt = lt.get(y.$5pc);
							let ht;
							if (He(ct)) ht = ct;
							else {
								const Rt = lt.get(m.$6j).getContextKeyValue(ve),
									Nt = Rt ? gt.tunnelModel.forwarded.get(Rt) : void 0;
								if (Nt) {
									const jt = lt.get(M.$cO);
									ht = ae.createFromTunnel(gt, jt, Nt);
								}
							}
							if (ht) {
								const Rt = ht;
								return new Promise((Nt) => {
									const jt = Rt.name ? Rt.name : `${Rt.remotePort}`;
									gt.setEditable(Rt, y.TunnelEditId.Label, {
										onFinish: async (ti, kt) => {
											(ti = ti.trim()),
												gt.setEditable(Rt, y.TunnelEditId.Label, null);
											const hi = kt && ti !== jt;
											hi &&
												(await gt.tunnelModel.name(
													Rt.remoteHost,
													Rt.remotePort,
													ti,
												)),
												Nt(hi ? { port: Rt.remotePort, label: ti } : void 0);
										},
										validationMessage: () => null,
										placeholder: t.localize(8838, null),
										startingValue: jt,
									});
								});
							}
						};
					}
					bt.handler = nt;
				})(Ke || (Ke = {}));
				const Je = t.localize(8839, null),
					Te = 65536,
					Ee = t.localize(8840, null, Te),
					Ie = t.localize(8841, null),
					Be = t.localize(8842, null);
				var Se;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.forwardInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.forwardCommandPalette"),
						(bt.LABEL = t.localize2(8868, "Forward a Port")),
						(bt.TREEITEM_LABEL = t.localize(8843, null));
					const nt = t.localize(8844, null);
					function lt(Rt, Nt, jt, ti) {
						const kt = (0, W.$u8)(jt);
						if (kt) {
							if (kt.port >= Te)
								return { content: Ee, severity: v.Severity.Error };
							if (ti && Nt.isPortPrivileged(kt.port))
								return { content: Ie, severity: v.Severity.Info };
							if ((0, W.$y8)(Rt.tunnelModel.forwarded, kt.host, kt.port))
								return { content: Be, severity: v.Severity.Error };
						} else return { content: Je, severity: v.Severity.Error };
						return null;
					}
					function ct(Rt, Nt, jt, ti) {
						Nt
							? typeof Nt == "string" &&
								Rt.warn(t.localize(8846, null, jt, ti, Nt))
							: Rt.warn(t.localize(8845, null, jt, ti));
					}
					function gt() {
						return async (Rt, Nt) => {
							const jt = Rt.get(y.$5pc),
								ti = Rt.get(v.$4N),
								kt = Rt.get(M.$cO);
							jt.setEditable(void 0, y.TunnelEditId.New, {
								onFinish: async (hi, Kt) => {
									jt.setEditable(void 0, y.TunnelEditId.New, null);
									let di;
									Kt &&
										(di = (0, W.$u8)(hi)) &&
										jt
											.forward({
												remote: { host: di.host, port: di.port },
												elevateIfNeeded: !0,
											})
											.then((Ye) => ct(ti, Ye, di.host, di.port));
								},
								validationMessage: (hi) => lt(jt, kt, hi, kt.canElevate),
								placeholder: nt,
							});
						};
					}
					bt.inlineHandler = gt;
					function ht() {
						return async (Rt, Nt) => {
							const jt = Rt.get(y.$5pc),
								ti = Rt.get(v.$4N),
								kt = Rt.get(E.$HMb),
								hi = Rt.get(h.$DJ),
								Kt = Rt.get(M.$cO);
							await kt.openView(Oe.ID, !0);
							const di = await hi.input({
								prompt: nt,
								validateInput: (ze) =>
									Promise.resolve(lt(jt, Kt, ze, Kt.canElevate)),
							});
							let Ye;
							di &&
								(Ye = (0, W.$u8)(di)) &&
								jt
									.forward({
										remote: { host: Ye.host, port: Ye.port },
										elevateIfNeeded: !0,
									})
									.then((ze) => ct(ti, ze, Ye.host, Ye.port));
						};
					}
					bt.commandPaletteHandler = ht;
				})(Se || (e.ForwardPortAction = Se = {}));
				function ke(bt, nt, lt) {
					const ct = bt.map((gt) => {
						const ht = ae.createFromTunnel(nt, lt, gt);
						return {
							label: ht.label,
							description: ht.processDescription,
							tunnel: ht,
						};
					});
					return (
						ct.length === 0 &&
							ct.push({ label: t.localize(8847, null, Se.LABEL.value) }),
						ct
					);
				}
				var Ue;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.closeInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.closeCommandPalette"),
						(bt.LABEL = t.localize2(8869, "Stop Forwarding Port"));
					function nt() {
						return async (ct, gt) => {
							const ht = ct.get(m.$6j),
								Rt = ct.get(y.$5pc);
							let Nt = [];
							const jt = ht.getContextKeyValue(be);
							if (jt)
								jt.forEach((ti) => {
									const kt = Rt.tunnelModel.forwarded.get(ti);
									kt && Nt?.push(kt);
								});
							else if (He(gt)) Nt = [gt];
							else {
								const ti = ht.getContextKeyValue(ve),
									kt = ti ? Rt.tunnelModel.forwarded.get(ti) : void 0;
								kt && (Nt = [kt]);
							}
							if (!(!Nt || Nt.length === 0))
								return Promise.all(
									Nt.map((ti) =>
										Rt.close(
											{ host: ti.remoteHost, port: ti.remotePort },
											W.TunnelCloseReason.User,
										),
									),
								);
						};
					}
					bt.inlineHandler = nt;
					function lt() {
						return async (ct) => {
							const gt = ct.get(h.$DJ),
								ht = ct.get(y.$5pc),
								Rt = ct.get(M.$cO),
								Nt = ct.get(c.$ek),
								jt = ke(
									Array.from(ht.tunnelModel.forwarded.values()).filter(
										(kt) => kt.closeable,
									),
									ht,
									Rt,
								),
								ti = await gt.pick(jt, { placeHolder: t.localize(8848, null) });
							ti && ti.tunnel
								? await ht.close(
										{ host: ti.tunnel.remoteHost, port: ti.tunnel.remotePort },
										W.TunnelCloseReason.User,
									)
								: ti && (await Nt.executeCommand(Se.COMMANDPALETTE_ID));
						};
					}
					bt.commandPaletteHandler = lt;
				})(Ue || (Ue = {}));
				var qe;
				(function (bt) {
					(bt.ID = "remote.tunnel.open"), (bt.LABEL = t.localize(8849, null));
					function nt() {
						return async (ct, gt) => {
							let ht;
							if (
								(He(gt)
									? (ht = (0, W.$z8)(gt.remoteHost, gt.remotePort))
									: gt.tunnelRemoteHost &&
										gt.tunnelRemotePort &&
										(ht = (0, W.$z8)(gt.tunnelRemoteHost, gt.tunnelRemotePort)),
								ht)
							) {
								const Rt = ct.get(y.$5pc).tunnelModel,
									Nt = ct.get(a.$7rb);
								return lt(Rt, Nt, ht);
							}
						};
					}
					bt.handler = nt;
					function lt(ct, gt, ht) {
						const Rt = ct.forwarded.get(ht) || ct.detected.get(ht);
						return Rt
							? gt.open(Rt.localUri, { allowContributedOpeners: !1 })
							: Promise.resolve();
					}
					bt.run = lt;
				})(qe || (e.OpenPortInBrowserAction = qe = {}));
				var Ae;
				(function (bt) {
					(bt.ID = "remote.tunnel.openPreview"),
						(bt.LABEL = t.localize(8850, null));
					function nt() {
						return async (ct, gt) => {
							let ht;
							if (
								(He(gt)
									? (ht = (0, W.$z8)(gt.remoteHost, gt.remotePort))
									: gt.tunnelRemoteHost &&
										gt.tunnelRemotePort &&
										(ht = (0, W.$z8)(gt.tunnelRemoteHost, gt.tunnelRemotePort)),
								ht)
							) {
								const Rt = ct.get(y.$5pc).tunnelModel,
									Nt = ct.get(a.$7rb),
									jt = ct.get(U.IExternalUriOpenerService);
								return lt(Rt, Nt, jt, ht);
							}
						};
					}
					bt.handler = nt;
					async function lt(ct, gt, ht, Rt) {
						const Nt = ct.forwarded.get(Rt) || ct.detected.get(Rt);
						if (Nt) {
							const jt = Nt.remoteHost.includes(":")
									? `[${Nt.remoteHost}]`
									: Nt.remoteHost,
								ti = D.URI.parse(`http://${jt}:${Nt.remotePort}`),
								kt = await ht.getOpener(
									Nt.localUri,
									{ sourceUri: ti },
									z.CancellationToken.None,
								);
							return kt
								? kt.openExternalUri(
										Nt.localUri,
										{ sourceUri: ti },
										z.CancellationToken.None,
									)
								: gt.open(Nt.localUri);
						}
						return Promise.resolve();
					}
					bt.run = lt;
				})(Ae || (e.OpenPortInPreviewAction = Ae = {}));
				var Me;
				(function (bt) {
					(bt.ID = "remote.tunnel.openCommandPalette"),
						(bt.LABEL = t.localize(8851, null));
					function nt() {
						return async (lt, ct) => {
							const gt = lt.get(y.$5pc),
								ht = lt.get(M.$cO),
								Rt = gt.tunnelModel,
								Nt = lt.get(h.$DJ),
								jt = lt.get(a.$7rb),
								ti = lt.get(c.$ek),
								kt = [...Rt.forwarded, ...Rt.detected].map((Kt) => {
									const di = ae.createFromTunnel(gt, ht, Kt[1]);
									return {
										label: di.label,
										description: di.processDescription,
										tunnel: di,
									};
								});
							kt.length === 0
								? kt.push({ label: t.localize(8852, null) })
								: kt.push({ label: t.localize(8853, null) });
							const hi = await Nt.pick(kt, {
								placeHolder: t.localize(8854, null),
							});
							if (hi && hi.tunnel)
								return qe.run(
									Rt,
									jt,
									(0, W.$z8)(hi.tunnel.remoteHost, hi.tunnel.remotePort),
								);
							if (hi) return ti.executeCommand(`${y.$7pc}.focus`);
						};
					}
					bt.handler = nt;
				})(Me || (Me = {}));
				var De;
				(function (bt) {
					(bt.INLINE_ID = "remote.tunnel.copyAddressInline"),
						(bt.COMMANDPALETTE_ID = "remote.tunnel.copyAddressCommandPalette"),
						(bt.INLINE_LABEL = t.localize(8855, null)),
						(bt.COMMANDPALETTE_LABEL = t.localize(8856, null));
					async function nt(gt, ht, Rt) {
						const Nt = gt.tunnelModel.address(Rt.remoteHost, Rt.remotePort);
						Nt && (await ht.writeText(Nt.toString()));
					}
					function lt() {
						return async (gt, ht) => {
							const Rt = gt.get(y.$5pc);
							let Nt;
							if (He(ht)) Nt = ht;
							else {
								const jt = gt.get(m.$6j).getContextKeyValue(ve);
								Nt = jt ? Rt.tunnelModel.forwarded.get(jt) : void 0;
							}
							if (Nt) return nt(Rt, gt.get($.$Vxb), Nt);
						};
					}
					bt.inlineHandler = lt;
					function ct() {
						return async (gt, ht) => {
							const Rt = gt.get(h.$DJ),
								Nt = gt.get(y.$5pc),
								jt = gt.get(M.$cO),
								ti = gt.get(c.$ek),
								kt = gt.get($.$Vxb),
								hi = Array.from(Nt.tunnelModel.forwarded.values()).concat(
									Array.from(Nt.tunnelModel.detected.values()),
								),
								Kt = await Rt.pick(ke(hi, Nt, jt), {
									placeHolder: t.localize(8857, null),
								});
							Kt && Kt.tunnel
								? await nt(Nt, kt, Kt.tunnel)
								: Kt && (await ti.executeCommand(Se.COMMANDPALETTE_ID));
						};
					}
					bt.commandPaletteHandler = ct;
				})(De || (De = {}));
				var Re;
				(function (bt) {
					(bt.ID = "remote.tunnel.changeLocalPort"),
						(bt.LABEL = t.localize(8858, null));
					function nt(ct, gt, ht) {
						if (gt.match(/^[0-9]+$/)) {
							if (Number(gt) >= Te)
								return { content: Ee, severity: v.Severity.Error };
							if (ht && ct.isPortPrivileged(Number(gt)))
								return { content: Ie, severity: v.Severity.Info };
						} else
							return {
								content: t.localize(8859, null),
								severity: v.Severity.Error,
							};
						return null;
					}
					function lt() {
						return async (ct, gt) => {
							const ht = ct.get(y.$5pc),
								Rt = ct.get(v.$4N),
								Nt = ct.get(M.$cO);
							let jt;
							if (He(gt)) jt = gt;
							else {
								const ti = ct.get(m.$6j).getContextKeyValue(ve),
									kt = ti ? ht.tunnelModel.forwarded.get(ti) : void 0;
								if (kt) {
									const hi = ct.get(M.$cO);
									jt = ae.createFromTunnel(ht, hi, kt);
								}
							}
							if (jt) {
								const ti = jt;
								ht.setEditable(ti, y.TunnelEditId.LocalPort, {
									onFinish: async (kt, hi) => {
										if (
											(ht.setEditable(ti, y.TunnelEditId.LocalPort, null), hi)
										) {
											await ht.close(
												{ host: ti.remoteHost, port: ti.remotePort },
												W.TunnelCloseReason.Other,
											);
											const Kt = Number(kt),
												di = await ht.forward({
													remote: { host: ti.remoteHost, port: ti.remotePort },
													local: Kt,
													name: ti.name,
													elevateIfNeeded: !0,
													source: ti.source,
												});
											di &&
												typeof di != "string" &&
												di.tunnelLocalPort !== Kt &&
												Rt.warn(
													t.localize(
														8860,
														null,
														kt,
														di.tunnelLocalPort ?? di.localAddress,
													),
												);
										}
									},
									validationMessage: (kt) => nt(Nt, kt, Nt.canElevate),
									placeholder: t.localize(8861, null),
								});
							}
						};
					}
					bt.handler = lt;
				})(Re || (Re = {}));
				var je;
				(function (bt) {
					function nt(lt) {
						return async (ct, gt) => {
							if (He(gt)) {
								const ht = ct.get(y.$5pc);
								return (
									await ht.close(
										{ host: gt.remoteHost, port: gt.remotePort },
										W.TunnelCloseReason.Other,
									),
									ht.forward({
										remote: { host: gt.remoteHost, port: gt.remotePort },
										local: gt.localPort,
										name: gt.name,
										elevateIfNeeded: !0,
										privacy: lt,
										source: gt.source,
									})
								);
							}
						};
					}
					bt.handler = nt;
				})(je || (je = {}));
				var Ve;
				(function (bt) {
					(bt.ID_HTTP = "remote.tunnel.setProtocolHttp"),
						(bt.ID_HTTPS = "remote.tunnel.setProtocolHttps"),
						(bt.LABEL_HTTP = t.localize(8862, null)),
						(bt.LABEL_HTTPS = t.localize(8863, null));
					async function nt(gt, ht, Rt, Nt) {
						if (He(gt)) {
							const jt = { protocol: ht },
								ti = Nt.remoteAuthority
									? r.ConfigurationTarget.USER_REMOTE
									: r.ConfigurationTarget.USER_LOCAL;
							return Rt.tunnelModel.configPortsAttributes.addAttributes(
								gt.remotePort,
								jt,
								ti,
							);
						}
					}
					function lt() {
						return async (gt, ht) =>
							nt(ht, M.TunnelProtocol.Http, gt.get(y.$5pc), gt.get(g.$r8));
					}
					bt.handlerHttp = lt;
					function ct() {
						return async (gt, ht) =>
							nt(ht, M.TunnelProtocol.Https, gt.get(y.$5pc), gt.get(g.$r8));
					}
					bt.handlerHttps = ct;
				})(Ve || (Ve = {}));
				const Ze = 10,
					et = pe.isEqualTo(y.TunnelType.Forwarded),
					rt = m.$Kj.or(et, pe.isEqualTo(y.TunnelType.Detected)),
					ft = Ce.isEqualTo(void 0);
				A.$TX.registerCommandAndKeybindingRule({
					id: Ke.ID,
					weight: A.KeybindingWeight.WorkbenchContrib + Ze,
					when: m.$Kj.and(me, et, ft),
					primary: T.KeyCode.F2,
					mac: { primary: T.KeyCode.Enter },
					handler: Ke.handler(),
				}),
					c.$fk.registerCommand(Se.INLINE_ID, Se.inlineHandler()),
					c.$fk.registerCommand(
						Se.COMMANDPALETTE_ID,
						Se.commandPaletteHandler(),
					),
					A.$TX.registerCommandAndKeybindingRule({
						id: Ue.INLINE_ID,
						weight: A.KeybindingWeight.WorkbenchContrib + Ze,
						when: m.$Kj.and($e, me),
						primary: T.KeyCode.Delete,
						mac: {
							primary: T.KeyMod.CtrlCmd | T.KeyCode.Backspace,
							secondary: [T.KeyCode.Delete],
						},
						handler: Ue.inlineHandler(),
					}),
					c.$fk.registerCommand(
						Ue.COMMANDPALETTE_ID,
						Ue.commandPaletteHandler(),
					),
					c.$fk.registerCommand(qe.ID, qe.handler()),
					c.$fk.registerCommand(Ae.ID, Ae.handler()),
					c.$fk.registerCommand(Me.ID, Me.handler()),
					A.$TX.registerCommandAndKeybindingRule({
						id: De.INLINE_ID,
						weight: A.KeybindingWeight.WorkbenchContrib + Ze,
						when: m.$Kj.and(me, rt, ft),
						primary: T.KeyMod.CtrlCmd | T.KeyCode.KeyC,
						handler: De.inlineHandler(),
					}),
					c.$fk.registerCommand(
						De.COMMANDPALETTE_ID,
						De.commandPaletteHandler(),
					),
					c.$fk.registerCommand(Re.ID, Re.handler()),
					c.$fk.registerCommand(Ve.ID_HTTP, Ve.handlerHttp()),
					c.$fk.registerCommand(Ve.ID_HTTPS, Ve.handlerHttps()),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Ue.COMMANDPALETTE_ID, title: Ue.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Se.COMMANDPALETTE_ID, title: Se.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: {
							id: De.COMMANDPALETTE_ID,
							title: De.COMMANDPALETTE_LABEL,
						},
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.CommandPalette, {
						command: { id: Me.ID, title: Me.LABEL },
						when: W.$t8,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "._open",
						order: 0,
						command: { id: qe.ID, title: qe.LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "._open",
						order: 1,
						command: { id: Ae.ID, title: Ae.LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "0_manage",
						order: 1,
						command: { id: Ke.ID, title: Ke.LABEL, icon: B.$9tc },
						when: m.$Kj.and(et, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 0,
						command: { id: De.INLINE_ID, title: De.INLINE_LABEL },
						when: m.$Kj.and(rt, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 1,
						command: { id: Re.ID, title: Re.LABEL },
						when: m.$Kj.and(et, Le, ft),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 2,
						submenu: s.$XX.TunnelPrivacy,
						title: t.localize(8864, null),
						when: m.$Kj.and(et, ue),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "2_localaddress",
						order: 3,
						submenu: s.$XX.TunnelProtocol,
						title: t.localize(8865, null),
						when: m.$Kj.and(et, ft, Fe),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "3_forward",
						order: 0,
						command: { id: Ue.INLINE_ID, title: Ue.LABEL },
						when: $e,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelContext, {
						group: "3_forward",
						order: 1,
						command: { id: Se.INLINE_ID, title: Se.LABEL },
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelProtocol, {
						order: 0,
						command: {
							id: Ve.ID_HTTP,
							title: Ve.LABEL_HTTP,
							toggled: fe.isEqualTo(M.TunnelProtocol.Http),
						},
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelProtocol, {
						order: 1,
						command: {
							id: Ve.ID_HTTPS,
							title: Ve.LABEL_HTTPS,
							toggled: fe.isEqualTo(M.TunnelProtocol.Https),
						},
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 0,
						command: {
							id: Se.INLINE_ID,
							title: Se.TREEITEM_LABEL,
							icon: B.$4tc,
						},
						when: pe.isEqualTo(y.TunnelType.Candidate),
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 4,
						command: { id: Ke.ID, title: Ke.LABEL, icon: B.$9tc },
						when: et,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelPortInline, {
						group: "0_manage",
						order: 5,
						command: { id: Ue.INLINE_ID, title: Ue.LABEL, icon: B.$5tc },
						when: $e,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: -1,
						command: { id: De.INLINE_ID, title: De.INLINE_LABEL, icon: B.$8tc },
						when: rt,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: 0,
						command: { id: qe.ID, title: qe.LABEL, icon: B.$6tc },
						when: rt,
					}),
					s.$ZX.appendMenuItem(s.$XX.TunnelLocalAddressInline, {
						order: 1,
						command: { id: Ae.ID, title: Ae.LABEL, icon: B.$7tc },
						when: rt,
					}),
					(0, q.$wP)(
						"ports.iconRunningProcessForeground",
						G.$mGb,
						t.localize(8866, null),
					);
			},
		)
