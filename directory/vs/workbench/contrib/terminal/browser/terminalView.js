import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import './terminalActions.js';
import '../../../../platform/notification/common/notification.js';
import './terminal.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/actions/common/actions.js';
import '../common/terminal.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/theme/common/colorRegistry.js';
import './terminalTabbedView.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import './terminalStatusList.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/theme/common/theme.js';
import './terminalIcon.js';
import './terminalMenus.js';
import '../common/terminalContextKey.js';
import './terminalTooltip.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/common/event.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/accessibility/common/accessibility.js';
import './terminalContextMenu.js';
import '../../../../base/common/symbols.js';
define(
			de[1949],
			he([
				1, 0, 4, 7, 50, 10, 49, 5, 32, 35, 26, 363, 40, 107, 146, 39, 8, 60, 41,
				11, 145, 117, 198, 51, 3698, 31, 182, 806, 92, 607, 3, 9, 212, 514,
				1017, 237, 1261, 189, 106, 6, 72, 91, 616, 649,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*dom*/,
				w /*actions*/,
				E /*configuration*/,
				C /*contextView*/,
				d /*instantiation*/,
				m /*telemetry*/,
				r /*themeService*/,
				u /*themables*/,
				a /*terminalActions*/,
				h /*notification*/,
				c /*terminal*/,
				n /*viewPane*/,
				g /*keybinding*/,
				p /*contextkey*/,
				o /*views*/,
				f /*opener*/,
				b /*actions*/,
				s /*terminal*/,
				l /*terminal*/,
				y /*actionViewItems*/,
				$ /*colorRegistry*/,
				v /*terminalTabbedView*/,
				S /*commands*/,
				I /*iconLabels*/,
				T /*terminalStatusList*/,
				P /*menuEntryActionViewItem*/,
				k /*dropdownWithPrimaryActionViewItem*/,
				L /*lifecycle*/,
				D /*uri*/,
				M /*theme*/,
				N /*terminalIcon*/,
				A /*terminalMenus*/,
				R /*terminalContextKey*/,
				O /*terminalTooltip*/,
				B /*capabilities*/,
				U /*defaultStyles*/,
				z /*event*/,
				F /*hover*/,
				x /*accessibility*/,
				H /*terminalContextMenu*/,
				q /*symbols*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Uc = void 0),
					(t = mt(t)),
					(i = mt(i));
				let V = class extends n.$TMb {
					get terminalTabbedView() {
						return this.f;
					}
					constructor(
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
						be,
						Ce,
						Le,
					) {
						super(ee, _, se, Z, te, Q, re, me, pe, $e, ye),
							(this.s = te),
							(this.t = Z),
							(this.L = se),
							(this.ab = re),
							(this.sb = le),
							(this.cc = oe),
							(this.dc = ae),
							(this.ec = ue),
							(this.fc = fe),
							(this.gc = ve),
							(this.hc = ge),
							(this.ic = be),
							(this.jc = Ce),
							(this.kc = Le),
							(this.g = !1),
							(this.h = this.D(new L.$2c())),
							(this.r = this.D(new L.$Zc())),
							this.D(
								this.sb.onDidRegisterProcessSupport(() => {
									this.eb.fire();
								}),
							),
							this.D(
								this.sb.onDidChangeInstances(() => {
									this.vc() && this.dc.instances.length <= 1 && this.eb.fire(),
										this.b &&
											(this.f || this.pc(),
											this.dc.instances.length === 1 &&
												this.X(this.b.offsetHeight, this.b.offsetWidth));
								}),
							),
							(this.j = this.D(
								this.gc.createMenu(b.$XX.TerminalNewDropdownContext, this.s),
							)),
							(this.m = this.D(
								this.gc.createMenu(b.$XX.TerminalTabContext, this.s),
							)),
							this.D(this.hc.onDidChangeAvailableProfiles((Fe) => this.uc(Fe))),
							(this.n = R.TerminalContextKeys.viewShowing.bindTo(this.s)),
							this.D(
								this.onDidChangeBodyVisibility((Fe) => {
									Fe && this.f?.rerenderTabs();
								}),
							),
							this.D(
								this.t.onDidChangeConfiguration((Fe) => {
									this.b &&
										(Fe.affectsConfiguration(
											l.TerminalSettingId.ShellIntegrationDecorationsEnabled,
										) ||
											Fe.affectsConfiguration(
												l.TerminalSettingId.ShellIntegrationEnabled,
											)) &&
										this.lc(this.b);
								}),
							),
							this.D(
								this.sb.onDidCreateInstance((Fe) => {
									Fe.capabilities.onDidAddCapabilityType((Oe) => {
										Oe === B.TerminalCapability.CommandDetection &&
											this.mc() &&
											this.b?.classList.add("shell-integration");
									});
								}),
							),
							this.D(this.sb.onDidChangeActiveInstance(() => {}));
					}
					lc(ee) {
						ee.classList.toggle("shell-integration", this.mc());
					}
					mc() {
						const ee = this.t.getValue(
							l.TerminalSettingId.ShellIntegrationDecorationsEnabled,
						);
						return (
							(ee === "both" || ee === "gutter") &&
							this.t.getValue(l.TerminalSettingId.ShellIntegrationEnabled)
						);
					}
					nc(ee) {
						if (
							this.isBodyVisible() &&
							this.sb.isProcessSupportRegistered &&
							this.sb.connectionState === c.TerminalConnectionState.Connected
						) {
							const _ = this.g;
							this.g = !0;
							let te = "never";
							_ ||
								((te = this.t.getValue(l.TerminalSettingId.HideOnStartup)),
								te === "always" && this.dc.hidePanel());
							let Q = this.dc.groups.length === 0;
							if ((ee && (Q &&= this.sb.restoredGroupCount === 0), !Q)) return;
							if (!_) {
								switch (te) {
									case "never":
										this.sb.createTerminal({
											location: l.TerminalLocation.Panel,
										});
										break;
									case "whenEmpty":
										this.sb.restoredGroupCount === 0 && this.dc.hidePanel();
										break;
								}
								return;
							}
							this.sb.createTerminal({ location: l.TerminalLocation.Panel });
						}
					}
					W(ee) {
						super.W(ee),
							this.b || this.lc(ee),
							(this.b = ee),
							this.b.classList.add("integrated-terminal"),
							i.$Rgb(this.b),
							this.ab.createInstance(Y, this.b),
							this.shouldShowWelcome() || this.pc(),
							this.D(
								this.Ab.onDidChangeConfiguration((_) => {
									if (
										(_.affectsConfiguration(l.TerminalSettingId.FontFamily) ||
											_.affectsConfiguration("editor.fontFamily")) &&
										!this.cc.configFontIsMonospace()
									) {
										const te = [
											{
												label: t.localize(10167, null),
												run: () =>
													this.Ab.updateValue(
														l.TerminalSettingId.FontFamily,
														"monospace",
													),
											},
										];
										this.ec.prompt(
											h.Severity.Warning,
											t.localize(10168, null),
											te,
										);
									}
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility(async (_) => {
									if ((this.n.set(_), _))
										this.vc() && this.eb.fire(),
											this.nc(!1),
											this.dc.showPanel(!1);
									else
										for (const te of this.dc.instances)
											te.resetFocusContextKey();
									this.dc.updateVisibility();
								}),
							),
							this.D(this.sb.onDidChangeConnectionState(() => this.nc(!0))),
							this.X(this.b.offsetHeight, this.b.offsetWidth);
					}
					pc() {
						this.b && (this.f = this.D(this.Db.createInstance(v.$4Uc, this.b)));
					}
					X(ee, _) {
						super.X(ee, _), this.f?.layout(_, ee);
					}
					getActionViewItem(ee, _) {
						switch (ee.id) {
							case s.TerminalCommandId.Split: {
								const te = this,
									Q = new (class extends w.$rj {
										constructor() {
											super(ee.id, ee.label, ee.class, ee.enabled),
												(this.checked = ee.checked),
												(this.tooltip = ee.tooltip),
												this.D(ee);
										}
										async run() {
											const Z = te.dc.activeInstance;
											if (Z)
												return (
													await te.sb.createTerminal({
														location: { parentTerminal: Z },
													})
												)?.focusWhenReady();
										}
									})();
								return new y.$_ib(ee, Q, {
									..._,
									icon: !0,
									label: !1,
									keybinding: this.tc(ee),
								});
							}
							case s.TerminalCommandId.SwitchTerminal:
								return this.ab.createInstance(G, ee);
							case s.TerminalCommandId.Focus:
								if (ee instanceof b.$2X) {
									const te = [];
									return (
										(0, P.$Jyb)(this.m, { shouldForwardArgs: !0 }, te),
										this.ab.createInstance(J, ee, te)
									);
								}
							case s.TerminalCommandId.New:
								if (ee instanceof b.$2X) {
									const te = (0, A.$QUc)(
										l.TerminalLocation.Panel,
										this.hc.availableProfiles,
										this.sc(),
										this.hc.contributedProfiles,
										this.sb,
										this.j,
									);
									return (
										this.rc(te.dropdownAction, te.dropdownMenuActions),
										(this.h.value = new k.$OYb(
											ee,
											te.dropdownAction,
											te.dropdownMenuActions,
											te.className,
											this.L,
											{ hoverDelegate: _.hoverDelegate },
											this.fc,
											this.ec,
											this.s,
											this.jc,
											this.kc,
										)),
										this.h.value?.update(
											te.dropdownAction,
											te.dropdownMenuActions,
										),
										this.h.value
									);
								}
						}
						return super.getActionViewItem(ee, _);
					}
					rc(ee, _) {
						this.r.clear(),
							ee instanceof w.$rj && this.r.add(ee),
							_.filter((te) => te instanceof w.$rj).forEach((te) =>
								this.r.add(te),
							);
					}
					sc() {
						let ee;
						try {
							ee = this.hc.getDefaultProfileName();
						} catch {
							ee = this.ic.defaultProfileName;
						}
						return ee;
					}
					tc(ee) {
						return this.fc.lookupKeybinding(ee.id)?.getLabel() ?? void 0;
					}
					uc(ee) {
						const _ = (0, A.$QUc)(
							l.TerminalLocation.Panel,
							ee,
							this.sc(),
							this.hc.contributedProfiles,
							this.sb,
							this.j,
						);
						this.rc(_.dropdownAction, _.dropdownMenuActions),
							this.h.value?.update(_.dropdownAction, _.dropdownMenuActions);
					}
					focus() {
						if (
							(super.focus(),
							this.sb.connectionState === c.TerminalConnectionState.Connected)
						) {
							this.dc.showPanel(!0);
							return;
						}
						const ee = this.element.ownerDocument.activeElement;
						ee &&
							this.D(
								this.sb.onDidChangeConnectionState(() => {
									ee && i.$Kgb(ee) && this.dc.showPanel(!0);
								}),
							);
					}
					vc() {
						return !this.sb.isProcessSupportRegistered;
					}
					shouldShowWelcome() {
						return this.vc() && this.sb.instances.length === 0;
					}
				};
				(e.$5Uc = V),
					(e.$5Uc = V =
						Ne(
							[
								j(1, g.$uZ),
								j(2, p.$6j),
								j(3, o.$K1),
								j(4, E.$gj),
								j(5, C.$Xxb),
								j(6, d.$Li),
								j(7, c.$iIb),
								j(8, c.$jIb),
								j(9, c.$lIb),
								j(10, r.$iP),
								j(11, m.$km),
								j(12, F.$Uyb),
								j(13, h.$4N),
								j(14, g.$uZ),
								j(15, f.$7rb),
								j(16, b.$YX),
								j(17, s.$teb),
								j(18, s.$reb),
								j(19, r.$iP),
								j(20, x.$XK),
							],
							V,
						));
				let G = class extends y.$ajb {
					constructor(ee, _, te, Q, Z) {
						super(null, ee, K(_, te), te.activeGroupIndex, Q, U.$Fyb, {
							ariaLabel: t.localize(10169, null),
							optionsAsChildren: !0,
						}),
							(this.h = _),
							(this.s = te),
							this.D(_.onDidChangeInstances(() => this.y(), this)),
							this.D(_.onDidChangeActiveGroup(() => this.y(), this)),
							this.D(_.onDidChangeActiveInstance(() => this.y(), this)),
							this.D(_.onAnyInstanceTitleChange(() => this.y(), this)),
							this.D(te.onDidChangeGroups(() => this.y(), this)),
							this.D(_.onDidChangeConnectionState(() => this.y(), this)),
							this.D(Z.onDidChangeAvailableProfiles(() => this.y(), this)),
							this.D(_.onAnyInstancePrimaryStatusChange(() => this.y(), this));
					}
					render(ee) {
						super.render(ee),
							ee.classList.add("switch-terminal"),
							(ee.style.borderColor = (0, $.$rP)($.$bS));
					}
					y() {
						const ee = K(this.h, this.s);
						this.setOptions(ee, this.s.activeGroupIndex);
					}
				};
				G = Ne([j(1, c.$iIb), j(2, c.$lIb), j(3, C.$Wxb), j(4, s.$teb)], G);
				function K(ne, ee) {
					let _;
					return (
						ne.connectionState === c.TerminalConnectionState.Connected
							? (_ = ee.getGroupLabels().map((te) => ({ text: te })))
							: (_ = [{ text: t.localize(10170, null) }]),
						_.push({ text: a.$AUc, isDisabled: !0 }),
						_.push({ text: a.$BUc }),
						_
					);
				}
				let J = class extends P.$Lyb {
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye) {
						super(
							ee,
							{ draggable: !0, hoverDelegate: $e.createInstance(ie) },
							te,
							Q,
							Z,
							se,
							ae,
							ye,
						),
							(this.nb = _),
							(this.ob = re),
							(this.pb = le),
							(this.qb = oe),
							(this.rb = pe),
							(this.sb = $e),
							(this.lb = []),
							this.D(
								z.Event.debounce(
									z.Event.any(
										this.ob.onAnyInstancePrimaryStatusChange,
										this.qb.onDidChangeActiveInstance,
										z.Event.map(
											this.ob.onAnyInstanceIconChange,
											(ue) => ue.instance,
										),
										this.ob.onAnyInstanceTitleChange,
										this.ob.onDidChangeInstanceCapability,
									),
									(ue, fe) => (ue || (ue = new Set()), fe && ue.add(fe), ue),
									q.$me,
								)((ue) => {
									for (const fe of ue) this.u(fe);
								}),
							),
							this.D((0, L.$Yc)(() => (0, L.$Vc)(this.lb)));
					}
					async onClick(ee) {
						(this.qb.lastAccessedMenu = "inline-tab"),
							ee.altKey && this.db.alt
								? this.rb.executeCommand(this.db.alt.id, {
										location: l.TerminalLocation.Panel,
									})
								: this.ub();
					}
					u(ee) {
						if (
							!(ee && ee !== this.qb.activeInstance) &&
							(this.lb.length === 0 &&
								this.element &&
								this.I &&
								(this.lb.push(
									i.$0fb(this.element, i.$$gb.CONTEXT_MENU, (_) => {
										_.button === 2 && (this.ub(), _.preventDefault());
									}),
								),
								this.lb.push(
									i.$0fb(this.element, i.$$gb.AUXCLICK, (_) => {
										if (_.button === 1) {
											const te = this.qb.activeInstance;
											te && this.ob.safeDisposeTerminal(te), _.preventDefault();
										}
									}),
								),
								this.lb.push(
									i.$0fb(this.element, i.$$gb.DRAG_START, (_) => {
										const te = this.qb.activeInstance;
										_.dataTransfer &&
											te &&
											_.dataTransfer.setData(
												c.TerminalDataTransfers.Terminals,
												JSON.stringify([te.resource.toString()]),
											);
									}),
								)),
							this.I)
						) {
							const _ = this.I,
								te = this.qb.activeInstance;
							if (!te) {
								i.$hhb(_, "");
								return;
							}
							_.classList.add("single-terminal-tab");
							let Q = "";
							const Z = te.statusList.primary;
							if (Z) {
								const le = (0, T.$gHb)(Z.severity);
								this.ab.getColorTheme();
								const oe = this.ab.getColorTheme().getColor(le);
								oe && (Q = oe.toString());
							}
							(_.style.color = Q),
								i.$hhb(
									_,
									...(0, I.$Sib)(
										this.sb.invokeFunction(
											W,
											te,
											this.pb.config.tabs.separator,
											u.ThemeIcon.isThemeIcon(this.eb.item.icon)
												? this.eb.item.icon
												: void 0,
										),
									),
								),
								this.g && (_.classList.remove(this.g), (this.g = void 0)),
								this.b && (_.classList.remove(this.b), (this.b = void 0)),
								this.h &&
									(_.classList.remove(this.h),
									_.classList.remove("terminal-uri-icon"),
									(this.h = void 0));
							const se = (0, N.$Onc)(te);
							se && ((this.b = se), _.classList.add(se));
							const re = (0, N.$Snc)(te, this.ab.getColorTheme().type);
							re && ((this.h = re?.[0]), _.classList.add(...re)),
								this.eb.item.icon &&
									((this.g = "alt-command"), _.classList.add(this.g)),
								this.C();
						}
					}
					ub() {
						this.bb.showContextMenu({
							actionRunner: new H.$yUc(),
							getAnchor: () => this.element,
							getActions: () => this.nb,
							getActionsContext: () => {
								const ee = this.qb.activeInstance;
								return ee ? [new H.$xUc(ee)] : [];
							},
						});
					}
				};
				J = Ne(
					[
						j(2, g.$uZ),
						j(3, h.$4N),
						j(4, p.$6j),
						j(5, r.$iP),
						j(6, c.$iIb),
						j(7, c.$jIb),
						j(8, c.$lIb),
						j(9, C.$Xxb),
						j(10, S.$ek),
						j(11, d.$Li),
						j(12, x.$XK),
					],
					J,
				);
				function W(ne, ee, _, te) {
					if (!ee || !ee.title) return "";
					const Q = u.ThemeIcon.isThemeIcon(ee.icon)
							? ee.icon.id
							: ne.get(s.$reb).getDefaultIcon().id,
						Z = `$(${te?.id || Q}) ${X(ee, _)}`,
						se = ee.statusList.primary;
					return se?.icon ? `${Z} $(${se.icon.id})` : Z;
				}
				function X(ne, ee) {
					return ne
						? ne.description
							? `${ne.title} ${ee} ${ne.description}`
							: ne.title
						: "";
				}
				let Y = class extends r.$pP {
					constructor(ee, _, te, Q) {
						super(_),
							(this.f = _),
							(this.g = te),
							(this.j = Q),
							this.m(),
							(this.b = i.$Rgb(ee)),
							this.D((0, L.$Yc)(() => this.b.remove())),
							this.updateStyles();
					}
					m() {
						this.D(this.g.onAnyInstanceIconChange(() => this.updateStyles())),
							this.D(this.g.onDidChangeInstances(() => this.updateStyles())),
							this.D(this.j.onDidChangeGroups(() => this.updateStyles()));
					}
					updateStyles() {
						super.updateStyles();
						const ee = this.f.getColorTheme();
						let _ = "";
						for (const te of this.g.instances) {
							const Q = te.icon;
							if (!Q) continue;
							let Z;
							Q instanceof D.URI
								? (Z = Q)
								: Q instanceof Object &&
									"light" in Q &&
									"dark" in Q &&
									(Z = ee.type === M.ColorScheme.LIGHT ? Q.light : Q.dark);
							const se = (0, N.$Snc)(te, ee.type);
							Z instanceof D.URI &&
								se &&
								se.length > 1 &&
								(_ += `.monaco-workbench .${se[0]} .monaco-highlighted-label .codicon, .monaco-action-bar .terminal-uri-icon.single-terminal-tab.action-label:not(.alt-command) .codicon{background-image: ${i.$vhb(Z)};}`);
						}
						for (const te of this.g.instances) {
							const Q = (0, N.$Onc)(te);
							if (!Q || !te.color) continue;
							const Z = ee.getColor(te.color);
							Z &&
								(_ += `.monaco-workbench .${Q} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${Z} !important; }`);
						}
						this.b.textContent = _;
					}
				};
				Y = Ne([j(1, r.$iP), j(2, c.$iIb), j(3, c.$lIb)], Y);
				let ie = class {
					constructor(ee, _, te) {
						(this.d = ee),
							(this.f = _),
							(this.g = te),
							(this.b = 0),
							(this.placement = "element");
					}
					get delay() {
						return Date.now() - this.b < 200
							? 0
							: this.d.getValue("workbench.hover.delay");
					}
					showHover(ee, _) {
						const te = this.g.activeInstance;
						if (!te) return;
						const Q = (0, O.$ZUc)(te);
						return this.f.showHover(
							{ ...ee, content: Q.content, actions: Q.actions },
							_,
						);
					}
					onDidHideHover() {
						this.b = Date.now();
					}
				};
				ie = Ne([j(0, E.$gj), j(1, F.$Uyb), j(2, c.$lIb)], ie);
			},
		)
