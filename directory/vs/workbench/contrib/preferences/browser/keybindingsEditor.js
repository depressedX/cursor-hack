import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../services/preferences/browser/keybindingsEditorModel.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import './keybindingWidgets.js';
import '../common/preferences.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../services/keybinding/common/keybindingEditing.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/event.js';
import '../../../../platform/actions/common/actions.js';
import '../../../common/theme.js';
import './preferencesIcons.js';
import '../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../extensions/common/extensions.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/types.js';
import '../../codeEditor/browser/suggestEnabledInput/suggestEnabledInput.js';
import '../../../../editor/common/languages.js';
import '../common/settingsEditorColorRegistry.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../css!vs/workbench/contrib/preferences/browser/media/keybindingsEditor.js';
define(
			de[3785],
			he([
				1, 0, 4, 15, 7, 12, 3, 268, 410, 460, 50, 105, 217, 32, 121, 1309, 5,
				39, 1804, 468, 49, 1324, 35, 26, 8, 27, 51, 18, 46, 93, 40, 21, 6, 11,
				123, 612, 461, 106, 141, 114, 28, 1043, 74, 613, 10, 130, 518, 95, 72,
				91, 2476,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*async*/,
				w /*dom*/,
				E /*platform*/,
				C /*lifecycle*/,
				d /*toggle*/,
				m /*highlightedLabel*/,
				r /*keybindingLabel*/,
				u /*actions*/,
				a /*actionbar*/,
				h /*editorPane*/,
				c /*telemetry*/,
				n /*clipboardService*/,
				g /*keybindingsEditorModel*/,
				p /*instantiation*/,
				o /*keybinding*/,
				f /*keybindingWidgets*/,
				b /*preferences*/,
				s /*contextView*/,
				l /*keybindingEditing*/,
				y /*themeService*/,
				$ /*themables*/,
				v /*contextkey*/,
				S /*keyCodes*/,
				I /*colorRegistry*/,
				T /*editorService*/,
				P /*editorExtensions*/,
				k /*listService*/,
				L /*notification*/,
				D /*storage*/,
				M /*event*/,
				N /*actions*/,
				A /*theme*/,
				R /*preferencesIcons*/,
				O /*toolbar*/,
				B /*defaultStyles*/,
				U /*extensions*/,
				z /*keyboardEvent*/,
				F /*types*/,
				x /*suggestEnabledInput*/,
				H /*languages*/,
				q /*settingsEditorColorRegistry*/,
				V /*configuration*/,
				G /*accessibilityConfiguration*/,
				K /*widgetNavigationCommands*/,
				J /*hoverDelegateFactory*/,
				W /*hover*/,
				X /*accessibility*/,
) {
				"use strict";
				var Y, ie, ne, ee, _;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oCc = void 0),
					(w = mt(w));
				const te = w.$;
				let Q = class extends h.$JEb {
					static {
						Y = this;
					}
					static {
						this.ID = "workbench.editor.keybindings";
					}
					constructor(fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke, Je, Te) {
						super(Y.ID, fe, me, ve, Ke),
							(this.qb = ge),
							(this.rb = be),
							(this.sb = Ce),
							(this.tb = Le),
							(this.ub = Fe),
							(this.vb = Oe),
							(this.wb = xe),
							(this.xb = He),
							(this.yb = Je),
							(this.zb = Te),
							(this.a = this.D(new M.$re())),
							(this.onDefineWhenExpression = this.a.event),
							(this.b = this.D(new M.$re())),
							(this.onRejectWhenExpression = this.b.event),
							(this.c = this.D(new M.$re())),
							(this.onAcceptWhenExpression = this.c.event),
							(this.f = this.D(new M.$re())),
							(this.onLayout = this.f.event),
							(this.g = null),
							(this.db = null),
							(this.eb = []),
							(this.hb = null),
							(this.jb = []),
							(this.ib = new i.$Jh(300)),
							this.D(ge.onDidUpdateKeybindings(() => this.Lb(!!this.lb.get()))),
							(this.kb = b.$qBc.bindTo(this.tb)),
							(this.mb = b.$rBc.bindTo(this.tb)),
							(this.lb = b.$sBc.bindTo(this.tb)),
							(this.s = new i.$Jh(500)),
							(this.ob = new u.$rj(
								b.$xBc,
								(0, t.localize)(8337, null),
								$.ThemeIcon.asClassName(R.$3Ac),
							)),
							(this.ob.checked = !1),
							(this.nb = new u.$rj(
								b.$yBc,
								(0, t.localize)(8338, null),
								$.ThemeIcon.asClassName(R.$4Ac),
							)),
							(this.nb.checked = !1),
							(this.overflowWidgetsDomNode = te(
								".keybindings-overflow-widgets-container.monaco-editor",
							));
					}
					create(fe) {
						super.create(fe),
							this.D(
								(0, K.$D3b)({
									name: "keybindingsEditor",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.r.hasFocus() && this.focusKeybindings();
									},
									focusPreviousWidget: () => {
										this.r.hasFocus() || this.focusSearch();
									},
								}),
							);
					}
					Y(fe) {
						const me = w.$fhb(fe, te("div", { class: "keybindings-editor" }));
						this.Bb(me), this.Cb(me), this.Fb(me), this.Jb(me);
					}
					setInput(fe, me, ve, ge) {
						return (
							this.kb.set(!0),
							super
								.setInput(fe, me, ve, ge)
								.then(() => this.Lb(!!(me && me.preserveFocus)))
						);
					}
					clearInput() {
						super.clearInput(), this.kb.reset(), this.lb.reset();
					}
					layout(fe) {
						(this.hb = fe),
							this.Ib(fe),
							(this.u.style.width = fe.width + "px"),
							(this.u.style.height = fe.height + "px"),
							this.cb.layout(this.hb),
							this.Qb(),
							this.f.fire();
					}
					focus() {
						super.focus();
						const fe = this.activeKeybindingEntry;
						fe ? this.Tb(fe) : E.$u || this.r.focus();
					}
					get activeKeybindingEntry() {
						const fe = this.gb.getFocusedElements()[0];
						return fe && fe.templateId === g.$qvc ? fe : null;
					}
					async defineKeybinding(fe, me) {
						this.Tb(fe), this.Db();
						try {
							const ve = await this.cb.define();
							ve &&
								(await this.updateKeybinding(
									fe,
									ve,
									fe.keybindingItem.when,
									me,
								));
						} catch (ve) {
							this.ec(ve);
						} finally {
							this.Eb(), this.Tb(fe);
						}
					}
					defineWhenExpression(fe) {
						fe.keybindingItem.keybinding && (this.Tb(fe), this.a.fire(fe));
					}
					rejectWhenExpression(fe) {
						this.b.fire(fe);
					}
					acceptWhenExpression(fe) {
						this.c.fire(fe);
					}
					async updateKeybinding(fe, me, ve, ge) {
						((fe.keybindingItem.keybinding
							? fe.keybindingItem.keybinding.getUserSettingsLabel()
							: "") !== me ||
							fe.keybindingItem.when !== ve) &&
							(ge
								? await this.sb.addKeybinding(
										fe.keybindingItem.keybindingItem,
										me,
										ve || void 0,
									)
								: await this.sb.editKeybinding(
										fe.keybindingItem.keybindingItem,
										me,
										ve || void 0,
									),
							fe.keybindingItem.keybinding || (this.db = fe));
					}
					async removeKeybinding(fe) {
						if ((this.Tb(fe), fe.keybindingItem.keybinding))
							try {
								await this.sb.removeKeybinding(
									fe.keybindingItem.keybindingItem,
								),
									this.focus();
							} catch (me) {
								this.ec(me), this.Tb(fe);
							}
					}
					async resetKeybinding(fe) {
						this.Tb(fe);
						try {
							await this.sb.resetKeybinding(fe.keybindingItem.keybindingItem),
								fe.keybindingItem.keybinding || (this.db = fe),
								this.Tb(fe);
						} catch (me) {
							this.ec(me), this.Tb(fe);
						}
					}
					async copyKeybinding(fe) {
						this.Tb(fe);
						const me = {
							key:
								(fe.keybindingItem.keybinding &&
									fe.keybindingItem.keybinding.getUserSettingsLabel()) ||
								"",
							command: fe.keybindingItem.command,
						};
						fe.keybindingItem.when && (me.when = fe.keybindingItem.when),
							await this.vb.writeText(JSON.stringify(me, null, "  "));
					}
					async copyKeybindingCommand(fe) {
						this.Tb(fe), await this.vb.writeText(fe.keybindingItem.command);
					}
					async copyKeybindingCommandTitle(fe) {
						this.Tb(fe),
							await this.vb.writeText(fe.keybindingItem.commandLabel);
					}
					focusSearch() {
						this.r.focus();
					}
					search(fe) {
						this.focusSearch(), this.r.setValue(fe), this.Tb(0);
					}
					clearSearchResults() {
						this.r.clear();
					}
					showSimilarKeybindings(fe) {
						const me = `"${fe.keybindingItem.keybinding.getAriaLabel()}"`;
						me !== this.r.getValue() && this.r.setValue(me);
					}
					Bb(fe) {
						(this.pb = w.$fhb(fe, w.$(""))),
							this.pb.setAttribute(
								"id",
								"keybindings-editor-aria-label-element",
							),
							this.pb.setAttribute("aria-live", "assertive");
					}
					Cb(fe) {
						(this.u = w.$fhb(fe, te(".overlay-container"))),
							(this.u.style.position = "absolute"),
							(this.u.style.zIndex = "40"),
							(this.cb = this.D(this.wb.createInstance(f.$fBc, this.u))),
							this.D(
								this.cb.onDidChange((me) =>
									this.cb.printExisting(this.g.fetch(`"${me}"`).length),
								),
							),
							this.D(
								this.cb.onShowExistingKeybidings((me) =>
									this.r.setValue(`"${me}"`),
								),
							),
							this.Eb();
					}
					Db() {
						this.u.style.display = "block";
					}
					Eb() {
						this.u.style.display = "none";
					}
					Fb(fe) {
						this.j = w.$fhb(fe, te(".keybindings-header"));
						const me = (0, t.localize)(8339, null),
							ve = (0, t.localize)(8340, null),
							ge = new u.$rj(
								b.$vBc,
								(0, t.localize)(8341, null),
								$.ThemeIcon.asClassName(R.$0Ac),
								!1,
								async () => this.clearSearchResults(),
							),
							be = w.$fhb(this.j, te(".search-container"));
						(this.r = this.D(
							this.wb.createInstance(f.$eBc, be, {
								ariaLabel: me,
								placeholder: me,
								focusKey: this.mb,
								ariaLabelledBy: "keybindings-editor-aria-label-element",
								recordEnter: !0,
								quoteRecordedKeys: !0,
								history:
									this.F(D.StorageScope.PROFILE, D.StorageTarget.USER)
										.searchHistory || [],
								inputBoxStyles: (0, B.$xyb)({ inputBorder: q.$hCc }),
							}),
						)),
							this.D(
								this.r.onDidChange((Oe) => {
									(ge.enabled = !!Oe),
										this.ib.trigger(() => this.Nb()),
										this.Gb();
								}),
							),
							this.D(this.r.onEscape(() => (this.ob.checked = !1))),
							(this.m = w.$fhb(
								be,
								w.$(".keybindings-search-actions-container"),
							));
						const Ce = this.Hb(this.m);
						this.D(
							this.nb.onDidChange((Oe) => {
								Oe.checked !== void 0 && this.Ob(!1), this.Gb();
							}),
						),
							this.D(
								this.ob.onDidChange((Oe) => {
									Oe.checked !== void 0 &&
										(Ce.classList.toggle("disabled", !Oe.checked),
										Oe.checked
											? (this.r.inputBox.setPlaceHolder(ve),
												this.r.inputBox.setAriaLabel(ve),
												this.r.startRecordingKeys(),
												this.r.focus())
											: (this.r.inputBox.setPlaceHolder(me),
												this.r.inputBox.setAriaLabel(me),
												this.r.stopRecordingKeys(),
												this.r.focus()),
										this.Gb());
								}),
							);
						const Le = [this.ob, this.nb, ge],
							Fe = this.D(
								new O.$jpb(this.m, this.rb, {
									actionViewItemProvider: (Oe, xe) => {
										if (Oe.id === this.nb.id || Oe.id === this.ob.id)
											return new d.$7ib(null, Oe, {
												...xe,
												keybinding: this.qb.lookupKeybinding(Oe.id)?.getLabel(),
												toggleStyles: B.$pyb,
											});
									},
									getKeyBinding: (Oe) => this.qb.lookupKeybinding(Oe.id),
								}),
							);
						Fe.setActions(Le),
							this.D(this.qb.onDidUpdateKeybindings(() => Fe.setActions(Le)));
					}
					Gb() {
						const fe = this.input;
						fe &&
							(fe.searchOptions = {
								searchValue: this.r.getValue(),
								recordKeybindings: !!this.ob.checked,
								sortByPrecedence: !!this.nb.checked,
							});
					}
					Hb(fe) {
						const me = w.$fhb(
							fe,
							w.$(".recording-badge.monaco-count-badge.long.disabled"),
						);
						return (
							(me.textContent = (0, t.localize)(8342, null)),
							(me.style.backgroundColor = (0, I.$rP)(I.$1P)),
							(me.style.color = (0, I.$rP)(I.$2P)),
							(me.style.border = `1px solid ${(0, I.$rP)(I.$OP)}`),
							me
						);
					}
					Ib(fe) {
						this.r.layout(fe),
							this.j.classList.toggle("small", fe.width < 400),
							(this.r.inputBox.inputElement.style.paddingRight = `${w.$vgb(this.m) + 12}px`);
					}
					Jb(fe) {
						const me = w.$fhb(fe, te(".keybindings-body"));
						this.Kb(me);
					}
					Kb(fe) {
						(this.fb = w.$fhb(fe, te(".keybindings-table-container"))),
							(this.gb = this.D(
								this.wb.createInstance(
									k.$AMb,
									"KeybindingsEditor",
									this.fb,
									new Z(),
									[
										{
											label: "",
											tooltip: "",
											weight: 0,
											minimumWidth: 40,
											maximumWidth: 40,
											templateId: se.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8343, null),
											tooltip: "",
											weight: 0.3,
											templateId: re.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8344, null),
											tooltip: "",
											weight: 0.2,
											templateId: le.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8345, null),
											tooltip: "",
											weight: 0.35,
											templateId: $e.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
										{
											label: (0, t.localize)(8346, null),
											tooltip: "",
											weight: 0.15,
											templateId: ae.TEMPLATE_ID,
											project(me) {
												return me;
											},
										},
									],
									[
										this.wb.createInstance(se, this),
										this.wb.createInstance(re),
										this.wb.createInstance(le),
										this.wb.createInstance($e, this),
										this.wb.createInstance(ae),
									],
									{
										identityProvider: { getId: (me) => me.id },
										horizontalScrolling: !1,
										accessibilityProvider: new ye(this.yb),
										keyboardNavigationLabelProvider: {
											getKeyboardNavigationLabel: (me) =>
												me.keybindingItem.commandLabel ||
												me.keybindingItem.command,
										},
										overrideStyles: { listBackground: I.$8P },
										multipleSelectionSupport: !1,
										setRowLineHeight: !1,
										openOnSingleClick: !1,
										transformOptimization: !1,
									},
								),
							)),
							this.D(this.gb.onContextMenu((me) => this.Ub(me))),
							this.D(this.gb.onDidChangeFocus((me) => this.Vb())),
							this.D(
								this.gb.onDidFocus(() => {
									this.gb.getHTMLElement().classList.add("focused"), this.Vb();
								}),
							),
							this.D(
								this.gb.onDidBlur(() => {
									this.gb.getHTMLElement().classList.remove("focused"),
										this.lb.reset();
								}),
							),
							this.D(
								this.gb.onDidOpen((me) => {
									if (me.browserEvent?.defaultPrevented) return;
									const ve = this.activeKeybindingEntry;
									ve && this.defineKeybinding(ve, !1);
								}),
							),
							w.$fhb(this.fb, this.overflowWidgetsDomNode);
					}
					async Lb(fe) {
						if (this.input) {
							const me = this.input;
							(this.g = await me.resolve()),
								await this.g.resolve(this.Mb()),
								this.Ob(!1, fe),
								me.searchOptions
									? ((this.ob.checked = me.searchOptions.recordKeybindings),
										(this.nb.checked = me.searchOptions.sortByPrecedence),
										this.r.setValue(me.searchOptions.searchValue))
									: this.Gb();
						}
					}
					Mb() {
						const fe = new Map();
						for (const me of P.EditorExtensionsRegistry.getEditorActions())
							fe.set(me.id, me.label);
						for (const me of N.$ZX.getMenuItems(N.$XX.CommandPalette))
							if ((0, N.$VX)(me)) {
								const ve =
										typeof me.command.title == "string"
											? me.command.title
											: me.command.title.value,
									ge = me.command.category
										? typeof me.command.category == "string"
											? me.command.category
											: me.command.category.value
										: void 0;
								fe.set(me.command.id, ge ? `${ge}: ${ve}` : ve);
							}
						return fe;
					}
					Nb() {
						this.Ob(this.r.hasFocus()),
							this.s.trigger(() => {
								this.r.inputBox.addToHistory(),
									(this.F(
										D.StorageScope.PROFILE,
										D.StorageTarget.USER,
									).searchHistory = this.r.inputBox.getHistory()),
									this.I();
							});
					}
					clearKeyboardShortcutSearchHistory() {
						this.r.inputBox.clearHistory(),
							(this.F(
								D.StorageScope.PROFILE,
								D.StorageTarget.USER,
							).searchHistory = this.r.inputBox.getHistory()),
							this.I();
					}
					Ob(fe, me) {
						if (this.g) {
							const ve = this.r.getValue(),
								ge = this.g.fetch(ve, this.nb.checked);
							this.zb.alert((0, t.localize)(8347, null, ge.length)),
								this.pb.setAttribute("aria-label", this.Pb(ge)),
								ge.length === 0 && this.jb.push(ve);
							const be = this.gb.getSelection()[0];
							if (
								((this.eb = ge),
								this.gb.splice(0, this.gb.length, this.eb),
								this.Qb(),
								fe)
							)
								this.gb.setSelection([]), this.gb.setFocus([]);
							else if (this.db) {
								const Ce = this.Sb(this.db);
								Ce !== -1 && (this.gb.reveal(Ce, 0.2), this.Tb(Ce)),
									(this.db = null);
							} else
								be !== -1 && be < this.eb.length
									? this.Tb(be, me)
									: this.xb.activeEditorPane === this && !me && this.focus();
						}
					}
					Pb(fe) {
						return this.nb.checked
							? (0, t.localize)(8348, null, fe.length)
							: (0, t.localize)(8349, null, fe.length);
					}
					Qb() {
						if (!this.hb) return;
						const fe = this.hb.height - (w.$tgb(this.j).height + 12);
						(this.fb.style.height = `${fe}px`), this.gb.layout(fe);
					}
					Rb(fe) {
						const me = this.eb.indexOf(fe);
						if (me === -1) {
							for (let ve = 0; ve < this.eb.length; ve++)
								if (this.eb[ve].id === fe.id) return ve;
						}
						return me;
					}
					Sb(fe) {
						for (let me = 0; me < this.eb.length; me++) {
							const ve = this.eb[me];
							if (
								ve.templateId === g.$qvc &&
								ve.keybindingItem.command === fe.keybindingItem.command
							)
								return me;
						}
						return -1;
					}
					Tb(fe, me = !0) {
						const ve = typeof fe == "number" ? fe : this.Rb(fe);
						ve !== -1 &&
							ve < this.gb.length &&
							(me && (this.gb.domFocus(), this.gb.setFocus([ve])),
							this.gb.setSelection([ve]));
					}
					focusKeybindings() {
						this.gb.domFocus();
						const fe = this.gb.getFocus();
						this.gb.setFocus([fe.length ? fe[0] : 0]);
					}
					selectKeybinding(fe) {
						this.Tb(fe);
					}
					recordSearchKeys() {
						this.ob.checked = !0;
					}
					toggleSortByPrecedence() {
						this.nb.checked = !this.nb.checked;
					}
					Ub(fe) {
						if (fe.element && fe.element.templateId === g.$qvc) {
							const me = fe.element;
							this.Tb(me),
								this.rb.showContextMenu({
									getAnchor: () => fe.anchor,
									getActions: () => [
										this.bc(me),
										this.cc(me),
										this.dc(me),
										new u.$tj(),
										...(me.keybindingItem.keybinding
											? [this.Wb(me), this.Xb(me)]
											: [this.Wb(me)]),
										new u.$tj(),
										this.Zb(me),
										this.$b(me),
										new u.$tj(),
										this.Yb(me),
										new u.$tj(),
										this.ac(me),
									],
								});
						}
					}
					Vb() {
						this.lb.reset();
						const fe = this.gb.getFocusedElements()[0];
						fe && fe.templateId === g.$qvc && this.lb.set(!0);
					}
					Wb(fe) {
						return {
							label: fe.keybindingItem.keybinding
								? (0, t.localize)(8350, null)
								: (0, t.localize)(8351, null),
							enabled: !0,
							id: b.$zBc,
							run: () => this.defineKeybinding(fe, !1),
						};
					}
					Xb(fe) {
						return {
							label: (0, t.localize)(8352, null),
							enabled: !0,
							id: b.$ABc,
							run: () => this.defineKeybinding(fe, !0),
						};
					}
					Yb(fe) {
						return {
							label: (0, t.localize)(8353, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$BBc,
							run: () => this.defineWhenExpression(fe),
						};
					}
					Zb(fe) {
						return {
							label: (0, t.localize)(8354, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$EBc,
							run: () => this.removeKeybinding(fe),
						};
					}
					$b(fe) {
						return {
							label: (0, t.localize)(8355, null),
							enabled: !fe.keybindingItem.keybindingItem.isDefault,
							id: b.$FBc,
							run: () => this.resetKeybinding(fe),
						};
					}
					ac(fe) {
						return {
							label: (0, t.localize)(8356, null),
							enabled: !!fe.keybindingItem.keybinding,
							id: b.$JBc,
							run: () => this.showSimilarKeybindings(fe),
						};
					}
					bc(fe) {
						return {
							label: (0, t.localize)(8357, null),
							enabled: !0,
							id: b.$GBc,
							run: () => this.copyKeybinding(fe),
						};
					}
					cc(fe) {
						return {
							label: (0, t.localize)(8358, null),
							enabled: !0,
							id: b.$HBc,
							run: () => this.copyKeybindingCommand(fe),
						};
					}
					dc(fe) {
						return {
							label: (0, t.localize)(8359, null),
							enabled: !!fe.keybindingItem.commandLabel,
							id: b.$IBc,
							run: () => this.copyKeybindingCommandTitle(fe),
						};
					}
					ec(fe) {
						this.ub.error(
							typeof fe == "string" ? fe : (0, t.localize)(8360, null, `${fe}`),
						);
					}
				};
				(e.$oCc = Q),
					(e.$oCc =
						Q =
						Y =
							Ne(
								[
									j(1, c.$km),
									j(2, y.$iP),
									j(3, o.$uZ),
									j(4, s.$Xxb),
									j(5, l.$evc),
									j(6, v.$6j),
									j(7, L.$4N),
									j(8, n.$Vxb),
									j(9, p.$Li),
									j(10, T.$IY),
									j(11, D.$lq),
									j(12, V.$gj),
									j(13, X.$XK),
								],
								Q,
							));
				class Z {
					constructor() {
						this.headerRowHeight = 30;
					}
					getHeight(fe) {
						if (fe.templateId === g.$qvc) {
							const me = fe.keybindingItem.commandLabel && fe.commandIdMatches,
								ve = !!fe.commandDefaultLabelMatches,
								ge = !!fe.extensionIdMatches;
							if (me && ve) return 60;
							if (ge || me || ve) return 40;
						}
						return 24;
					}
				}
				let se = class {
					static {
						ie = this;
					}
					static {
						this.TEMPLATE_ID = "actions";
					}
					constructor(fe, me) {
						(this.a = fe), (this.b = me), (this.templateId = ie.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".actions"));
						return { actionBar: new a.$eib(me) };
					}
					renderElement(fe, me, ve, ge) {
						ve.actionBar.clear();
						const be = [];
						fe.keybindingItem.keybinding
							? be.push(this.c(fe))
							: be.push(this.d(fe)),
							ve.actionBar.push(be, { icon: !0 });
					}
					c(fe) {
						const me = this.b.lookupKeybinding(b.$zBc);
						return {
							class: $.ThemeIcon.asClassName(R.$5Ac),
							enabled: !0,
							id: "editKeybinding",
							tooltip: me
								? (0, t.localize)(8361, null, `(${me.getLabel()})`)
								: (0, t.localize)(8362, null),
							run: () => this.a.defineKeybinding(fe, !1),
						};
					}
					d(fe) {
						const me = this.b.lookupKeybinding(b.$zBc);
						return {
							class: $.ThemeIcon.asClassName(R.$6Ac),
							enabled: !0,
							id: "addKeybinding",
							tooltip: me
								? (0, t.localize)(8363, null, `(${me.getLabel()})`)
								: (0, t.localize)(8364, null),
							run: () => this.a.defineKeybinding(fe, !1),
						};
					}
					disposeTemplate(fe) {
						fe.actionBar.dispose();
					}
				};
				se = ie = Ne([j(1, o.$uZ)], se);
				let re = class {
					static {
						ne = this;
					}
					static {
						this.TEMPLATE_ID = "commands";
					}
					constructor(fe) {
						(this.a = fe), (this.templateId = ne.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".command")),
							ve = this.a.setupManagedHover((0, J.$cib)("mouse"), me, ""),
							ge = w.$fhb(me, te(".command-label")),
							be = new m.$Wob(ge),
							Ce = w.$fhb(me, te(".command-default-label")),
							Le = new m.$Wob(Ce),
							Fe = w.$fhb(me, te(".command-id.code")),
							Oe = new m.$Wob(Fe);
						return {
							commandColumn: me,
							commandColumnHover: ve,
							commandLabelContainer: ge,
							commandLabel: be,
							commandDefaultLabelContainer: Ce,
							commandDefaultLabel: Le,
							commandIdLabelContainer: Fe,
							commandIdLabel: Oe,
						};
					}
					renderElement(fe, me, ve, ge) {
						const be = fe.keybindingItem,
							Ce = !!(be.commandLabel && fe.commandIdMatches),
							Le = !!fe.commandDefaultLabelMatches;
						ve.commandColumn.classList.toggle(
							"vertical-align-column",
							Ce || Le,
						);
						const Fe = be.commandLabel
							? (0, t.localize)(8365, null, be.commandLabel, be.command)
							: be.command;
						ve.commandColumn.setAttribute("aria-label", Fe),
							ve.commandColumnHover.update(Fe),
							be.commandLabel
								? (ve.commandLabelContainer.classList.remove("hide"),
									ve.commandLabel.set(be.commandLabel, fe.commandLabelMatches))
								: (ve.commandLabelContainer.classList.add("hide"),
									ve.commandLabel.set(void 0)),
							fe.commandDefaultLabelMatches
								? (ve.commandDefaultLabelContainer.classList.remove("hide"),
									ve.commandDefaultLabel.set(
										be.commandDefaultLabel,
										fe.commandDefaultLabelMatches,
									))
								: (ve.commandDefaultLabelContainer.classList.add("hide"),
									ve.commandDefaultLabel.set(void 0)),
							fe.commandIdMatches || !be.commandLabel
								? (ve.commandIdLabelContainer.classList.remove("hide"),
									ve.commandIdLabel.set(be.command, fe.commandIdMatches))
								: (ve.commandIdLabelContainer.classList.add("hide"),
									ve.commandIdLabel.set(void 0));
					}
					disposeTemplate(fe) {
						fe.commandColumnHover.dispose(),
							fe.commandDefaultLabel.dispose(),
							fe.commandIdLabel.dispose(),
							fe.commandLabel.dispose();
					}
				};
				re = ne = Ne([j(0, W.$Uyb)], re);
				class le {
					static {
						this.TEMPLATE_ID = "keybindings";
					}
					constructor() {
						this.templateId = le.TEMPLATE_ID;
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".keybinding"));
						return {
							keybindingLabel: new r.$7ob(
								w.$fhb(me, te("div.keybinding-label")),
								E.OS,
								B.$jyb,
							),
						};
					}
					renderElement(fe, me, ve, ge) {
						fe.keybindingItem.keybinding
							? ve.keybindingLabel.set(
									fe.keybindingItem.keybinding,
									fe.keybindingMatches,
								)
							: ve.keybindingLabel.set(void 0, void 0);
					}
					disposeTemplate(fe) {
						fe.keybindingLabel.dispose();
					}
				}
				function oe(ue, fe) {
					const me = new C.$Zc();
					return (
						me.add(w.$0fb(ue, w.$$gb.CLICK, w.$ohb(fe))),
						me.add(
							w.$0fb(ue, w.$$gb.KEY_UP, (ve) => {
								const ge = new z.$7fb(ve);
								(ge.equals(S.KeyCode.Space) || ge.equals(S.KeyCode.Enter)) &&
									(ve.preventDefault(), ve.stopPropagation(), fe());
							}),
						),
						me
					);
				}
				let ae = class {
					static {
						ee = this;
					}
					static {
						this.TEMPLATE_ID = "source";
					}
					constructor(fe, me) {
						(this.a = fe), (this.b = me), (this.templateId = ee.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".source")),
							ve = this.b.setupManagedHover((0, J.$cib)("mouse"), me, ""),
							ge = new m.$Wob(w.$fhb(me, te(".source-label"))),
							be = w.$fhb(me, te(".extension-container")),
							Ce = w.$fhb(be, te("a.extension-label", { tabindex: 0 })),
							Le = new m.$Wob(w.$fhb(be, te(".extension-id-container.code")));
						return {
							sourceColumn: me,
							sourceColumnHover: ve,
							sourceLabel: ge,
							extensionLabel: Ce,
							extensionContainer: be,
							extensionId: Le,
							disposables: new C.$Zc(),
						};
					}
					renderElement(fe, me, ve, ge) {
						if ((ve.disposables.clear(), (0, F.$lg)(fe.keybindingItem.source)))
							ve.extensionContainer.classList.add("hide"),
								ve.sourceLabel.element.classList.remove("hide"),
								ve.sourceColumnHover.update(""),
								ve.sourceLabel.set(
									fe.keybindingItem.source || "-",
									fe.sourceMatches,
								);
						else {
							ve.extensionContainer.classList.remove("hide"),
								ve.sourceLabel.element.classList.add("hide");
							const be = fe.keybindingItem.source,
								Ce = be.displayName ?? be.identifier.value;
							ve.sourceColumnHover.update((0, t.localize)(8366, null, Ce)),
								(ve.extensionLabel.textContent = Ce),
								ve.disposables.add(
									oe(ve.extensionLabel, () => {
										this.a.open(be.identifier.value);
									}),
								),
								fe.extensionIdMatches
									? (ve.extensionId.element.classList.remove("hide"),
										ve.extensionId.set(
											be.identifier.value,
											fe.extensionIdMatches,
										))
									: (ve.extensionId.element.classList.add("hide"),
										ve.extensionId.set(void 0));
						}
					}
					disposeTemplate(fe) {
						fe.sourceColumnHover.dispose(),
							fe.disposables.dispose(),
							fe.sourceLabel.dispose(),
							fe.extensionId.dispose();
					}
				};
				ae = ee = Ne([j(0, U.$MQb), j(1, W.$Uyb)], ae);
				let pe = class extends C.$1c {
					constructor(fe, me, ve, ge) {
						super(),
							(this.b = this.D(new M.$re())),
							(this.onDidAccept = this.b.event),
							(this.c = this.D(new M.$re())),
							(this.onDidReject = this.c.event);
						const be = b.$tBc.bindTo(ge);
						(this.a = this.D(
							ve.createInstance(
								x.$3Bc,
								"keyboardshortcutseditor#wheninput",
								fe,
								{
									provideResults: () => {
										const Ce = [];
										for (const Le of v.$5j.all())
											Ce.push({
												label: Le.key,
												documentation: Le.description,
												detail: Le.type,
												kind: H.CompletionItemKind.Constant,
											});
										return Ce;
									},
									triggerCharacters: ["!", " "],
									wordDefinition: /[a-zA-Z.]+/,
									alwaysShowSuggestions: !0,
								},
								"",
								"keyboardshortcutseditor#wheninput",
								{
									focusContextKey: be,
									overflowWidgetsDomNode: me.overflowWidgetsDomNode,
								},
							),
						)),
							this.D(
								w.$0fb(this.a.element, w.$$gb.DBLCLICK, (Ce) =>
									w.$ahb.stop(Ce),
								),
							),
							this.D((0, C.$Yc)(() => be.reset())),
							this.D(
								me.onAcceptWhenExpression(() => this.b.fire(this.a.getValue())),
							),
							this.D(
								M.Event.any(
									me.onRejectWhenExpression,
									this.a.onDidBlur,
								)(() => this.c.fire()),
							);
					}
					layout(fe) {
						this.a.layout(fe);
					}
					show(fe) {
						this.a.setValue(fe), this.a.focus(!0);
					}
				};
				pe = Ne([j(2, p.$Li), j(3, v.$6j)], pe);
				let $e = class {
					static {
						_ = this;
					}
					static {
						this.TEMPLATE_ID = "when";
					}
					constructor(fe, me, ve) {
						(this.a = fe),
							(this.b = me),
							(this.c = ve),
							(this.templateId = _.TEMPLATE_ID);
					}
					renderTemplate(fe) {
						const me = w.$fhb(fe, te(".when")),
							ve = w.$fhb(me, te("div.when-label")),
							ge = new m.$Wob(ve),
							be = w.$fhb(me, te("div.when-input-container"));
						return {
							element: me,
							whenLabelContainer: ve,
							whenLabel: ge,
							whenInputContainer: be,
							disposables: new C.$Zc(),
						};
					}
					renderElement(fe, me, ve, ge) {
						ve.disposables.clear();
						const be = ve.disposables.add(new C.$Zc());
						ve.disposables.add(
							this.a.onDefineWhenExpression((Ce) => {
								if (fe === Ce) {
									ve.element.classList.add("input-mode");
									const Le = be.add(
										this.c.createInstance(pe, ve.whenInputContainer, this.a),
									);
									Le.layout(
										new w.$pgb(ve.element.parentElement.clientWidth, 18),
									),
										Le.show(fe.keybindingItem.when || "");
									const Fe = () => {
										be.clear(),
											ve.element.classList.remove("input-mode"),
											(ve.element.parentElement.style.paddingLeft = "10px"),
											w.$9fb(ve.whenInputContainer);
									};
									be.add(
										Le.onDidAccept((Oe) => {
											Fe(),
												this.a.updateKeybinding(
													fe,
													(fe.keybindingItem.keybinding &&
														fe.keybindingItem.keybinding.getUserSettingsLabel()) ||
														"",
													Oe,
												),
												this.a.selectKeybinding(fe);
										}),
									),
										be.add(
											Le.onDidReject(() => {
												Fe(), this.a.selectKeybinding(fe);
											}),
										),
										(ve.element.parentElement.style.paddingLeft = "0px");
								}
							}),
						),
							ve.whenLabelContainer.classList.toggle(
								"code",
								!!fe.keybindingItem.when,
							),
							ve.whenLabelContainer.classList.toggle(
								"empty",
								!fe.keybindingItem.when,
							),
							fe.keybindingItem.when
								? (ve.whenLabel.set(
										fe.keybindingItem.when,
										fe.whenMatches,
										fe.keybindingItem.when,
									),
									ve.disposables.add(
										this.b.setupManagedHover(
											(0, J.$cib)("mouse"),
											ve.element,
											fe.keybindingItem.when,
										),
									))
								: ve.whenLabel.set("-");
					}
					disposeTemplate(fe) {
						fe.disposables.dispose(), fe.whenLabel.dispose();
					}
				};
				$e = _ = Ne([j(1, W.$Uyb), j(2, p.$Li)], $e);
				class ye {
					constructor(fe) {
						this.a = fe;
					}
					getWidgetAriaLabel() {
						return (0, t.localize)(8367, null);
					}
					getAriaLabel({ keybindingItem: fe }) {
						const me = [
							fe.commandLabel ? fe.commandLabel : fe.command,
							fe.keybinding?.getAriaLabel() || (0, t.localize)(8368, null),
							fe.when ? fe.when : (0, t.localize)(8369, null),
							(0, F.$lg)(fe.source)
								? fe.source
								: (fe.source.description ?? fe.source.identifier.value),
						];
						if (
							this.a.getValue(
								G.AccessibilityVerbositySettingId.KeybindingsEditor,
							)
						) {
							const ve = (0, t.localize)(8370, null);
							me.push(ve);
						}
						return me.join(", ");
					}
				}
				(0, I.$wP)(
					"keybindingTable.headerBackground",
					I.$6S,
					"Background color for the keyboard shortcuts table header.",
				),
					(0, I.$wP)(
						"keybindingTable.rowsBackground",
						I.$6S,
						"Background color for the keyboard shortcuts table alternating rows.",
					),
					(0, y.$oP)((ue, fe) => {
						const me = ue.getColor(I.$IP);
						if (me) {
							const He = me.transparent(0.8).makeOpaque((0, A.$LEb)(ue));
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const ve = ue.getColor(I.$FS),
							ge = ue.getColor(I.$ES);
						if (ve && ge) {
							const He = ve.transparent(0.8).makeOpaque(ge);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const be = ue.getColor(I.$IS),
							Ce = ue.getColor(I.$HS);
						if (be && Ce) {
							const He = be.transparent(0.8).makeOpaque(Ce);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table .monaco-list-row.selected .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const Le = ue.getColor(I.$BS),
							Fe = ue.getColor(I.$AS);
						if (Le && Fe) {
							const He = Le.transparent(0.8).makeOpaque(Fe);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row.focused .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
						const Oe = ue.getColor(I.$NS),
							xe = ue.getColor(I.$MS);
						if (Oe && xe) {
							const He = Oe.transparent(0.8).makeOpaque(xe);
							fe.addRule(
								`.keybindings-editor > .keybindings-body > .keybindings-table-container .monaco-table.focused .monaco-list-row:hover:not(.focused):not(.selected) .monaco-table-tr .monaco-table-td .code { color: ${He}; }`,
							);
						}
					});
			},
		),
		