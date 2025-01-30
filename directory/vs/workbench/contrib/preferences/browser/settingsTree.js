import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/canIUse.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/browser/ui/iconLabel/simpleIconLabel.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/browser/ui/list/list.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/browser/ui/selectBox/selectBox.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../base/browser/ui/tree/abstractTree.js';
import '../../../../base/browser/ui/tree/objectTreeModel.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/types.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../nls.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataSync/common/settingsMerge.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../extensions/common/extensions.js';
import './preferencesIcons.js';
import './settingsEditorSettingIndicators.js';
import './settingsTreeModels.js';
import './settingsWidgets.js';
import '../common/preferences.js';
import '../common/settingsEditorColorRegistry.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/preferences/common/preferencesValidation.js';
import '../../aiSettings/browser/aiSettingsActions.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../base/common/uri.js';
define(
			de[1999],
			he([
				1, 0, 459, 7, 114, 267, 127, 183, 758, 292, 431, 278, 596, 268, 461,
				411, 931, 264, 50, 24, 14, 29, 6, 27, 3, 12, 37, 28, 61, 251, 4, 121,
				31, 10, 81, 8, 49, 5, 39, 93, 41, 62, 32, 106, 51, 35, 129, 1670, 150,
				141, 612, 3249, 1042, 3123, 468, 613, 261, 78, 53, 131, 1856, 1998, 95,
				72, 9,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*canIUse*/,
				i /*dom*/,
				w /*keyboardEvent*/,
				E /*markdownRenderer*/,
				C /*aria*/,
				d /*button*/,
				m /*simpleIconLabel*/,
				r /*inputBox*/,
				u /*list*/,
				a /*listWidget*/,
				h /*selectBox*/,
				c /*toggle*/,
				n /*toolbar*/,
				g /*abstractTree*/,
				p /*objectTreeModel*/,
				o /*tree*/,
				f /*actions*/,
				b /*arrays*/,
				s /*codicons*/,
				l /*errors*/,
				y /*event*/,
				$ /*keyCodes*/,
				v /*lifecycle*/,
				S /*platform*/,
				I /*strings*/,
				T /*types*/,
				P /*language*/,
				k /*markdownRenderer*/,
				L /*nls*/,
				D /*clipboardService*/,
				M /*commands*/,
				N /*configuration*/,
				A /*configurationRegistry*/,
				R /*contextkey*/,
				O /*contextView*/,
				B /*instantiation*/,
				U /*keybinding*/,
				z /*listService*/,
				F /*opener*/,
				x /*productService*/,
				H /*telemetry*/,
				q /*defaultStyles*/,
				V /*colorRegistry*/,
				G /*themeService*/,
				K /*userDataProfile*/,
				J /*settingsMerge*/,
				W /*userDataSync*/,
				X /*extensions*/,
				Y /*preferencesIcons*/,
				ie /*settingsEditorSettingIndicators*/,
				ne /*settingsTreeModels*/,
				ee /*settingsWidgets*/,
				_ /*preferences*/,
				te /*settingsEditorColorRegistry*/,
				Q /*configuration*/,
				Z /*environmentService*/,
				se /*extensions*/,
				re /*preferences*/,
				le /*preferencesValidation*/,
				oe /*aiSettingsActions*/,
				ae /*hoverDelegateFactory*/,
				pe /*hover*/,
				$e /*uri*/,
) {
				"use strict";
				var ye, ue, fe, me, ve, ge;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Dc =
						e.$5Dc =
						e.$4Dc =
						e.$3Dc =
						e.$2Dc =
						e.$1Dc =
						e.$ZDc =
							void 0),
					(e.$VDc = Ue),
					(e.$WDc = qe),
					(e.$XDc = Ae),
					(e.$YDc = Ve),
					(i = mt(i)),
					(C = mt(C));
				const be = i.$;
				function Ce(wi) {
					const _t =
							typeof wi.defaultValue == "object" ? (wi.defaultValue ?? {}) : {},
						ai = wi.isConfigured ? { ..._t, ...wi.scopeValue } : _t;
					return Object.keys(ai)
						.filter((Ft) => !!ai[Ft])
						.map((Ft) => {
							const Xt = _t[Ft];
							let $t;
							if (
								Xt === ai[Ft] &&
								wi.setting.type === "object" &&
								wi.defaultValueSource instanceof Map
							) {
								const Tt = wi.defaultValueSource.get(`${wi.setting.key}.${Ft}`);
								$t = typeof Tt == "string" ? Tt : Tt?.displayName;
							}
							const ut = ai[Ft],
								Et = typeof ut == "boolean" ? void 0 : ut.when;
							return {
								value: { type: "string", data: Ft },
								sibling: Et,
								elementType: wi.valueType,
								source: $t,
							};
						});
				}
				function Le(wi, _t) {
					const ai = new Set(wi);
					return _t.forEach(({ key: Ft }) => ai.delete(Ft.data)), ai.size === 0;
				}
				function Fe(wi) {
					if (wi.anyOf) return wi.anyOf.map(Fe).flat();
					const _t = wi.enumDescriptions ?? [];
					return (wi.enum ?? []).map((ai, Ft) => {
						const Xt = Ft < _t.length ? _t[Ft] : void 0;
						return { value: ai, description: Xt };
					});
				}
				function Oe(wi) {
					return wi.anyOf
						? wi.anyOf.map(Oe).some((ai) => ai === "enum")
							? "enum"
							: "string"
						: wi.type === "boolean"
							? "boolean"
							: wi.type === "string" &&
									(0, T.$tg)(wi.enum) &&
									wi.enum.length > 0
								? "enum"
								: "string";
				}
				function xe(wi, _t, ai) {
					return wi === "boolean"
						? { type: wi, data: !!_t }
						: wi === "enum"
							? { type: wi, data: "" + _t, options: ai }
							: { type: wi, data: "" + _t };
				}
				function He(wi) {
					const _t =
							typeof wi.defaultValue == "object" ? (wi.defaultValue ?? {}) : {},
						ai = typeof wi.scopeValue == "object" ? (wi.scopeValue ?? {}) : {},
						Ft = wi.isConfigured ? { ..._t, ...ai } : _t,
						{
							objectProperties: Xt,
							objectPatternProperties: $t,
							objectAdditionalProperties: ut,
						} = wi.setting,
						Et = Object.entries($t ?? {}).map(([qt, At]) => ({
							pattern: new RegExp(qt),
							schema: At,
						})),
						Tt = Object.entries(Xt ?? {}).map(([qt, At]) => ({
							value: qt,
							description: At.description,
						}));
					return Object.keys(Ft)
						.map((qt) => {
							const At = _t[qt];
							let Yt;
							if (
								At === Ft[qt] &&
								wi.setting.type === "object" &&
								wi.defaultValueSource instanceof Map
							) {
								const wt = wi.defaultValueSource.get(`${wi.setting.key}.${qt}`);
								Yt = typeof wt == "string" ? wt : wt?.displayName;
							}
							if ((0, T.$tg)(Xt) && qt in Xt) {
								const wt = Fe(Xt[qt]);
								return {
									key: { type: "enum", data: qt, options: Tt },
									value: xe(Oe(Xt[qt]), Ft[qt], wt),
									keyDescription: Xt[qt].description,
									removable: (0, T.$ug)(At),
									resetable: !(0, T.$ug)(At),
									source: Yt,
								};
							}
							const ni = At === void 0 || (0, ne.$FCc)(wi.setting.key),
								bi = !!At && At !== Ft[qt],
								fi = Et.find(({ pattern: wt }) => wt.test(qt))?.schema;
							if (fi) {
								const wt = Fe(fi);
								return {
									key: { type: "string", data: qt },
									value: xe(Oe(fi), Ft[qt], wt),
									keyDescription: fi.description,
									removable: ni,
									resetable: bi,
									source: Yt,
								};
							}
							const Ti = Fe(typeof ut == "boolean" ? {} : (ut ?? {}));
							return {
								key: { type: "string", data: qt },
								value: xe(
									typeof ut == "object" ? Oe(ut) : "string",
									Ft[qt],
									Ti,
								),
								keyDescription: typeof ut == "object" ? ut.description : void 0,
								removable: ni,
								resetable: bi,
								source: Yt,
							};
						})
						.filter((qt) => !(0, T.$ug)(qt.value.data));
				}
				function Ke(wi) {
					const _t =
							typeof wi.defaultValue == "object" ? (wi.defaultValue ?? {}) : {},
						ai = typeof wi.scopeValue == "object" ? (wi.scopeValue ?? {}) : {},
						Ft = wi.isConfigured ? { ..._t, ...ai } : _t,
						{ objectProperties: Xt } = wi.setting,
						$t = [];
					for (const ut in Xt) {
						const Et = _t[ut];
						let Tt;
						if (
							Et === Ft[ut] &&
							wi.setting.type === "object" &&
							wi.defaultValueSource instanceof Map
						) {
							const qt = wi.defaultValueSource.get(ut);
							Tt = typeof qt == "string" ? qt : qt?.displayName;
						}
						$t.push({
							key: { type: "string", data: ut },
							value: { type: "boolean", data: !!Ft[ut] },
							keyDescription: Xt[ut].description,
							removable: !1,
							resetable: !0,
							source: Tt,
						});
					}
					return $t;
				}
				function Je(wi) {
					return (_t, ai) => {
						const Ft = [];
						return (
							wi.setting.enum &&
								wi.setting.enum.forEach((Xt, $t) => {
									if (
										!wi.setting.uniqueItems ||
										(ai !== void 0 && Xt === _t[ai]) ||
										!_t.includes(Xt)
									) {
										const ut = wi.setting.enumDescriptions?.[$t];
										Ft.push({ value: Xt, description: ut });
									}
								}),
							Ft.length > 0
								? { type: "enum", data: Ft[0].value, options: Ft }
								: void 0
						);
					};
				}
				function Te(wi) {
					const { objectProperties: _t } = wi.setting,
						ai = Object.keys(_t ?? {});
					return (Ft) => {
						const Xt = new Set(Ft),
							$t = [];
						return (
							ai.forEach((ut) => {
								Xt.has(ut) ||
									$t.push({ value: ut, description: _t[ut].description });
							}),
							$t.length > 0
								? { type: "enum", data: $t[0].value, options: $t }
								: void 0
						);
					};
				}
				function Ee(wi) {
					const {
							objectProperties: _t,
							objectPatternProperties: ai,
							objectAdditionalProperties: Ft,
						} = wi.setting,
						Xt = Object.entries(ai ?? {}).map(([$t, ut]) => ({
							pattern: new RegExp($t),
							schema: ut,
						}));
					return ($t) => {
						let ut;
						(0, T.$tg)(_t) && $t in _t && (ut = _t[$t]);
						const Et = ut ?? Xt.find(({ pattern: Tt }) => Tt.test($t))?.schema;
						if (
							((0, T.$tg)(Et)
								? (ut = Et)
								: (0, T.$tg)(Ft) && typeof Ft == "object" && (ut = Ft),
							(0, T.$tg)(ut))
						) {
							const Tt = Oe(ut);
							if (Tt === "boolean") return { type: Tt, data: ut.default ?? !0 };
							if (Tt === "enum") {
								const qt = Fe(ut);
								return {
									type: Tt,
									data: ut.default ?? qt[0].value,
									options: qt,
								};
							} else return { type: Tt, data: ut.default ?? "" };
						}
					};
				}
				function Ie(wi) {
					return wi === "number" || wi === "integer";
				}
				function Be(wi, _t) {
					const ai = {};
					for (const Ft in _t) {
						let Xt;
						const $t = wi.setting.objectPatternProperties,
							ut = wi.setting.objectProperties,
							Et = wi.setting.objectAdditionalProperties;
						if (ut) {
							for (const Tt in ut)
								if (Tt === Ft) {
									Xt = Ie(ut[Tt].type);
									break;
								}
						}
						if (Xt === void 0 && $t) {
							for (const Tt in $t)
								if (Ft.match(Tt)) {
									Xt = Ie($t[Tt].type);
									break;
								}
						}
						Xt === void 0 &&
							Et &&
							typeof Et != "boolean" &&
							Ie(Et.type) &&
							(Xt = !0),
							(ai[Ft] = Xt ? Number(_t[Ft]) : _t[Ft]);
					}
					return ai;
				}
				function Se(wi) {
					if (!wi.value || !Array.isArray(wi.value)) return [];
					if (wi.setting.arrayItemType === "enum") {
						let _t = [];
						return (
							wi.setting.enum &&
								(_t = wi.setting.enum.map((ai, Ft) => ({
									value: ai,
									description: wi.setting.enumDescriptions?.[Ft],
								}))),
							wi.value.map((ai) => ({
								value: { type: "enum", data: ai, options: _t },
							}))
						);
					} else
						return wi.value.map((_t) => ({
							value: { type: "string", data: _t },
						}));
				}
				function ke(wi, _t) {
					return wi.setting.enum && wi.setting.uniqueItems
						? wi.setting.enum.length - _t.length > 0
						: !0;
				}
				function Ue(wi, _t, ai) {
					const Ft = et(_t);
					return { tree: Me(wi, Ft, ai), leftoverSettings: Ft };
				}
				function qe(wi, _t, ai, Ft) {
					return [...et(wi)].filter(
						($t) =>
							$t.restricted && (0, ne.$DCc)($t.key, _t, ai, Ft).isConfigured,
					);
				}
				async function Ae(wi, _t) {
					const ai = new Map(),
						Ft = (ut, Et, Tt) => {
							if (!ai.has(ut)) {
								const qt = { id: ut, label: Et, children: [] };
								ai.set(ut, qt);
							}
							ai.get(ut).children.push(Tt);
						},
						Xt = async (ut) => {
							const Et = ut.sections.map((ni) => ni.settings).flat(),
								Tt = ut.extensionInfo.id,
								qt = await wi.getExtension(Tt),
								At = qt?.displayName ?? qt?.name ?? Tt,
								Yt = {
									id: ut.id || ut.title,
									label: ut.title,
									order: ut.order,
									settings: Et,
								};
							Ft(Tt, At, Yt);
						},
						$t = _t.map((ut) => Xt(ut));
					return Promise.all($t).then(() => {
						const ut = [];
						for (const Et of ai.values()) {
							for (const Tt of Et.children)
								Tt.settings?.sort((qt, At) => (0, _.$2Bc)(qt.order, At.order));
							if (Et.children.length === 1)
								ut.push({
									id: Et.id,
									label: Et.children[0].label,
									settings: Et.children[0].settings,
								});
							else {
								Et.children.sort((qt, At) => (0, _.$2Bc)(qt.order, At.order));
								const Tt = Et.children.find((qt) => qt.label === Et.label);
								if (Tt && !Tt.children) {
									const qt = Et.children.filter((At) => At !== Tt);
									ut.push({
										id: Et.id,
										label: Et.label,
										settings: Tt.settings,
										children: qt,
									});
								} else ut.push(Et);
							}
						}
						return (
							ut.sort((Et, Tt) => Et.label.localeCompare(Tt.label)),
							{
								id: "extensions",
								label: (0, L.localize)(8594, null),
								children: ut,
							}
						);
					});
				}
				function Me(wi, _t, ai) {
					let Ft;
					wi.children &&
						(Ft = wi.children
							.map(($t) => Me($t, _t, ai))
							.filter(($t) => $t.children?.length || $t.settings?.length));
					let Xt;
					if (
						(wi.settings &&
							(Xt = wi.settings.map(($t) => Re(_t, $t, ai)).flat()),
						!Ft && !Xt)
					)
						throw new Error(
							`TOC node has no child groups or settings: ${wi.id}`,
						);
					return { id: wi.id, label: wi.label, children: Ft, settings: Xt };
				}
				const De = [
					/^settingsSync\..*/,
					/^sync\..*/,
					/^workbench.fontAliasing$/,
				];
				function Re(wi, _t, ai) {
					const Ft = [];
					return (
						wi.forEach((Xt) => {
							Ze(Xt, _t) && (Ft.push(Xt), wi.delete(Xt));
						}),
						!Ft.length &&
							!De.some((Xt) => Xt.test(_t)) &&
							ai.warn(`Settings pattern "${_t}" doesn't match any settings`),
						Ft.sort((Xt, $t) => Xt.key.localeCompare($t.key))
					);
				}
				const je = new Map();
				function Ve(wi) {
					return (
						(wi = (0, I.$of)(wi).replace(/\\\*/g, ".*")),
						new RegExp(`^${wi}$`, "i")
					);
				}
				function Ze(wi, _t) {
					let ai = je.get(_t);
					return ai || ((ai = Ve(_t)), je.set(_t, ai)), ai.test(wi.key);
				}
				function et(wi) {
					const _t = new Set();
					for (const ai of wi)
						for (const Ft of ai.sections)
							for (const Xt of Ft.settings)
								(!Xt.overrides || !Xt.overrides.length) && _t.add(Xt);
					return _t;
				}
				const rt = "settings.text.template",
					ft = "settings.multilineText.template",
					bt = "settings.number.template",
					nt = "settings.enum.template",
					lt = "settings.bool.template",
					ct = "settings.array.template",
					gt = "settings.exclude.template",
					ht = "settings.include.template",
					Rt = "settings.object.template",
					Nt = "settings.boolObject.template",
					jt = "settings.complex.template",
					ti = "settings.newExtensions.template",
					kt = "settings.group.template",
					hi = "settings.extensionToggle.template";
				function Kt(wi) {
					wi.querySelectorAll(`
		[tabindex="0"],
		input:not([tabindex="-1"]),
		select:not([tabindex="-1"]),
		textarea:not([tabindex="-1"]),
		a:not([tabindex="-1"]),
		button:not([tabindex="-1"]),
		area:not([tabindex="-1"])
	`).forEach((ai) => {
						ai.setAttribute(Ye.ELEMENT_FOCUSABLE_ATTR, "true"),
							ai.setAttribute("tabindex", "-1");
					});
				}
				function di(wi) {
					wi.querySelectorAll(`[${Ye.ELEMENT_FOCUSABLE_ATTR}="true"]`).forEach(
						(ai) => {
							ai.removeAttribute(Ye.ELEMENT_FOCUSABLE_ATTR),
								ai.setAttribute("tabindex", "0");
						},
					);
				}
				let Ye = class extends v.$1c {
					static {
						ye = this;
					}
					static {
						this.CONTROL_CLASS = "setting-control-focus-target";
					}
					static {
						this.CONTROL_SELECTOR = "." + this.CONTROL_CLASS;
					}
					static {
						this.CONTENTS_CLASS = "setting-item-contents";
					}
					static {
						this.CONTENTS_SELECTOR = "." + this.CONTENTS_CLASS;
					}
					static {
						this.ALL_ROWS_SELECTOR = ".monaco-list-row";
					}
					static {
						this.SETTING_KEY_ATTR = "data-key";
					}
					static {
						this.SETTING_ID_ATTR = "data-id";
					}
					static {
						this.ELEMENT_FOCUSABLE_ATTR = "data-focusable";
					}
					constructor(
						_t,
						ai,
						Ft,
						Xt,
						$t,
						ut,
						Et,
						Tt,
						qt,
						At,
						Yt,
						ni,
						bi,
						fi,
						Ti,
					) {
						super(),
							(this.y = _t),
							(this.z = ai),
							(this.C = Ft),
							(this.F = Xt),
							(this.G = $t),
							(this.H = ut),
							(this.I = Et),
							(this.J = Tt),
							(this.L = qt),
							(this.M = At),
							(this.N = Yt),
							(this.O = ni),
							(this.P = bi),
							(this.Q = fi),
							(this.R = Ti),
							(this.c = this.D(new y.$re())),
							(this.onDidClickOverrideElement = this.c.event),
							(this.f = this.D(new y.$re())),
							(this.onDidChangeSetting = this.f.event),
							(this.h = this.D(new y.$re())),
							(this.onDidOpenSettings = this.h.event),
							(this.j = this.D(new y.$re())),
							(this.onDidClickSettingLink = this.j.event),
							(this.m = this.D(new y.$re())),
							(this.onDidFocusSetting = this.m.event),
							(this.q = this.D(new y.$re())),
							(this.onDidChangeIgnoredSettings = this.q.event),
							(this.t = this.D(new y.$re())),
							(this.onDidChangeSettingHeight = this.t.event),
							(this.u = this.D(new y.$re())),
							(this.onApplyFilter = this.u.event),
							(this.w = this.D(ut.createInstance(k.$Qzb, {}))),
							(this.n = (0, J.$Lwc)((0, W.$JRb)(), this.M)),
							this.D(
								this.M.onDidChangeConfiguration((wt) => {
									(this.n = (0, J.$Lwc)((0, W.$JRb)(), this.M)), this.q.fire();
								}),
							);
					}
					S(_t, ai, Ft) {
						ai.classList.add("setting-item"),
							ai.classList.add("setting-item-" + Ft);
						const Xt = new v.$Zc(),
							$t = i.$fhb(ai, be(ye.CONTENTS_SELECTOR));
						$t.classList.add("settings-row-inner-container");
						const ut = i.$fhb($t, be(".setting-item-title")),
							Et = i.$fhb(ut, be(".setting-item-cat-label-container")),
							Tt = i.$fhb(Et, be("span.setting-item-category")),
							qt = i.$fhb(Et, be("span.setting-item-label")),
							At = Xt.add(new m.$Yob(qt)),
							Yt = this.H.createInstance(ie.$ICc, ut);
						Xt.add(Yt);
						const ni = i.$fhb($t, be(".setting-item-description")),
							bi = i.$fhb($t, be(".setting-item-modified-indicator"));
						Xt.add(
							this.R.setupManagedHover((0, ae.$cib)("mouse"), bi, () =>
								(0, L.localize)(8595, null),
							),
						);
						const fi = i.$fhb($t, be(".setting-item-value")),
							Ti = i.$fhb(fi, be("div.setting-item-control")),
							wt = i.$fhb($t, be(".setting-item-deprecation-message")),
							We = i.$fhb($t, be(".setting-toolbar-container")),
							_e = this.W(We),
							Si = {
								toDispose: Xt,
								elementDisposables: Xt.add(new v.$Zc()),
								containerElement: $t,
								categoryElement: Tt,
								labelElement: At,
								descriptionElement: ni,
								controlElement: Ti,
								deprecationWarningElement: wt,
								indicatorsLabel: Yt,
								toolbar: _e,
							};
						return (
							Xt.add(
								i.$0fb(Ti, i.$$gb.MOUSE_DOWN, (gi) => gi.stopPropagation()),
							),
							Xt.add(
								i.$0fb(ut, i.$$gb.MOUSE_ENTER, (gi) =>
									$t.classList.add("mouseover"),
								),
							),
							Xt.add(
								i.$0fb(ut, i.$$gb.MOUSE_LEAVE, (gi) =>
									$t.classList.remove("mouseover"),
								),
							),
							Si
						);
					}
					U(_t) {
						const ai = i.$dhb(_t.containerElement);
						_t.toDispose.add(ai),
							ai.onDidBlur(() => {
								_t.containerElement.classList.contains("focused") &&
									_t.containerElement.classList.remove("focused");
							}),
							ai.onDidFocus(() => {
								_t.containerElement.classList.add("focused"),
									_t.context && this.m.fire(_t.context);
							});
					}
					W(_t) {
						const ai = this.L.lookupKeybinding(_.$jBc);
						let Ft = (0, L.localize)(8596, null);
						return (
							ai && (Ft += ` (${ai && ai.getLabel()})`),
							new n.$jpb(_t, this.J, {
								toggleMenuTitle: Ft,
								renderDropdownAsChildElement: !S.$u,
								moreIcon: Y.$2Ac,
							})
						);
					}
					X(_t, ai, Ft) {
						const Xt = _t.element;
						Xt.inspectSelf(), (Ft.context = Xt), (Ft.toolbar.context = Xt);
						const $t = this.z(Xt.setting, Xt.settingsTarget);
						$t.forEach((At) => (0, v.$Uc)(At) && Ft.elementDisposables.add(At)),
							Ft.toolbar.setActions([], [...this.y, ...$t]);
						const ut = Xt.setting;
						Ft.containerElement.classList.toggle(
							"is-configured",
							Xt.isConfigured,
						),
							Ft.containerElement.setAttribute(
								ye.SETTING_KEY_ATTR,
								Xt.setting.key,
							),
							Ft.containerElement.setAttribute(ye.SETTING_ID_ATTR, Xt.id);
						const Et = ut.key + (Xt.isConfigured ? " - Modified" : "");
						if (
							((Ft.categoryElement.textContent = Xt.displayCategory
								? Xt.displayCategory + ": "
								: ""),
							Ft.elementDisposables.add(
								this.R.setupManagedHover(
									(0, ae.$cib)("mouse"),
									Ft.categoryElement,
									Et,
								),
							),
							(Ft.labelElement.text = Xt.displayLabel),
							(Ft.labelElement.title = Et),
							(Ft.descriptionElement.innerText = ""),
							Xt.setting.descriptionIsMarkdown)
						) {
							const At = this.Z(
								Xt,
								Ft.containerElement,
								Xt.description,
								Ft.elementDisposables,
							);
							Ft.descriptionElement.appendChild(At);
						} else Ft.descriptionElement.innerText = Xt.description;
						Ft.indicatorsLabel.updateScopeOverrides(Xt, this.c, this.u),
							Ft.elementDisposables.add(
								this.M.onDidChangeConfiguration((At) => {
									At.affectsConfiguration(Q.$TZ) &&
										Ft.indicatorsLabel.updateScopeOverrides(Xt, this.c, this.u);
								}),
							);
						const Tt = (At) =>
								this.f.fire({
									key: Xt.setting.key,
									value: At,
									type: Ft.context.valueType,
									manualReset: !1,
									scope: Xt.setting.scope,
								}),
							qt = Xt.setting.deprecationMessage || "";
						qt && Xt.setting.deprecationMessageIsMarkdown
							? ((Ft.deprecationWarningElement.innerText = ""),
								Ft.deprecationWarningElement.appendChild(
									this.Z(
										Xt,
										Ft.containerElement,
										Xt.setting.deprecationMessage,
										Ft.elementDisposables,
									),
								))
							: (Ft.deprecationWarningElement.innerText = qt),
							Ft.deprecationWarningElement.prepend(
								be(".codicon.codicon-error"),
							),
							Ft.containerElement.classList.toggle("is-deprecated", !!qt),
							this.ab(Xt, Ft, Tt),
							Ft.indicatorsLabel.updateWorkspaceTrust(Xt),
							Ft.indicatorsLabel.updateSyncIgnored(Xt, this.n),
							Ft.indicatorsLabel.updateDefaultOverrideIndicator(Xt),
							Ft.elementDisposables.add(
								this.onDidChangeIgnoredSettings(() => {
									Ft.indicatorsLabel.updateSyncIgnored(Xt, this.n);
								}),
							),
							this.Y(Xt, Ft),
							Ft.elementDisposables.add(
								Xt.onDidChangeTabbable(() => {
									this.Y(Xt, Ft);
								}),
							);
					}
					Y(_t, ai) {
						_t.tabbable ? di(ai.containerElement) : Kt(ai.containerElement);
					}
					Z(_t, ai, Ft, Xt) {
						Ft = pi(Ft);
						const $t = this.w.render(
							{ value: Ft, isTrusted: !0 },
							{
								actionHandler: {
									callback: (ut) => {
										if (ut.startsWith("#")) {
											const Et = { source: _t, targetKey: ut.substring(1) };
											this.j.fire(Et);
										} else this.G.open(ut, { allowCommands: !0 }).catch(l.$4);
									},
									disposables: Xt,
								},
								asyncRenderCallback: () => {
									const ut = ai.clientHeight;
									ut && this.t.fire({ element: _t, height: ut });
								},
							},
						);
						return (
							Xt.add($t),
							$t.element.classList.add("setting-item-markdown"),
							at($t.element),
							$t.element
						);
					}
					disposeTemplate(_t) {
						_t.toDispose.dispose();
					}
					disposeElement(_t, ai, Ft, Xt) {
						Ft.elementDisposables?.clear();
					}
				};
				(e.$ZDc = Ye),
					(e.$ZDc =
						Ye =
						ye =
							Ne(
								[
									j(2, G.$iP),
									j(3, O.$Wxb),
									j(4, F.$7rb),
									j(5, B.$Li),
									j(6, M.$ek),
									j(7, O.$Xxb),
									j(8, U.$uZ),
									j(9, N.$gj),
									j(10, se.$q2),
									j(11, X.$MQb),
									j(12, x.$Bk),
									j(13, H.$km),
									j(14, pe.$Uyb),
								],
								Ye,
							));
				let ze = class {
					constructor(_t) {
						(this.c = _t), (this.templateId = kt);
					}
					renderTemplate(_t) {
						return (
							_t.classList.add("group-title"),
							{ parent: _t, toDispose: new v.$Zc() }
						);
					}
					renderElement(_t, ai, Ft) {
						Ft.parent.innerText = "";
						const Xt = i.$fhb(
							Ft.parent,
							be("div.settings-group-title-label.settings-row-inner-container"),
						);
						if (
							(Xt.classList.add(`settings-group-level-${_t.element.level}`),
							(Xt.textContent = _t.element.label),
							_t.element.isFirstGroup &&
								Xt.classList.add("settings-group-first"),
							_t.element.label.toLowerCase().includes("cursor"))
						) {
							Xt.textContent = _t.element.label + " ";
							const $t = document.createElement("a");
							($t.textContent = "(full settings here)"),
								($t.style.color = "var(--vscode-textLink-foreground)"),
								($t.style.cursor = "pointer"),
								($t.onclick = () => {
									this.c.executeCommand(oe.$UDc.ID);
								}),
								($t.target = "_blank"),
								Xt.appendChild($t);
						}
					}
					disposeTemplate(_t) {}
				};
				ze = Ne([j(0, M.$ek)], ze);
				let Xe = class {
					constructor(_t) {
						(this.c = _t), (this.templateId = ti);
					}
					renderTemplate(_t) {
						const ai = new v.$Zc();
						_t.classList.add("setting-item-new-extensions");
						const Ft = new d.$oob(_t, { title: !0, ...q.$lyb });
						ai.add(Ft),
							ai.add(
								Ft.onDidClick(() => {
									Xt.context &&
										this.c.executeCommand(
											"workbench.extensions.action.showExtensionsWithIds",
											Xt.context.extensionIds,
										);
								}),
							),
							(Ft.label = (0, L.localize)(8597, null)),
							Ft.element.classList.add("settings-new-extensions-button");
						const Xt = { button: Ft, toDispose: ai };
						return Xt;
					}
					renderElement(_t, ai, Ft) {
						Ft.context = _t.element;
					}
					disposeTemplate(_t) {
						(0, v.$Vc)(_t.toDispose);
					}
				};
				(e.$1Dc = Xe), (e.$1Dc = Xe = Ne([j(0, M.$ek)], Xe));
				class It extends Ye {
					constructor() {
						super(...arguments), (this.templateId = jt);
					}
					static {
						this.bb = (0, L.localize)(8598, null);
					}
					renderTemplate(_t) {
						const ai = this.S(null, _t, "complex"),
							Ft = i.$fhb(ai.controlElement, be("a.edit-in-settings-button"));
						Ft.classList.add(Ye.CONTROL_CLASS), (Ft.role = "button");
						const Xt = be(".setting-item-validation-message");
						ai.containerElement.appendChild(Xt);
						const $t = { ...ai, button: Ft, validationErrorMessageElement: Xt };
						return this.U($t), $t;
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						const Xt = (0, N.$qj)(_t.setting.key),
							$t = (0, L.localize)(8599, null, Xt),
							ut = _t.setting.isLanguageTagSetting;
						ai.button.textContent = ut ? $t : It.bb;
						const Et = (Tt) => {
							ut ? this.u.fire(`@${_.$SBc}${Xt}`) : this.h.fire(_t.setting.key),
								Tt.preventDefault(),
								Tt.stopPropagation();
						};
						ai.elementDisposables.add(
							i.$0fb(ai.button, i.$$gb.CLICK, (Tt) => {
								Et(Tt);
							}),
						),
							ai.elementDisposables.add(
								i.$0fb(ai.button, i.$$gb.KEY_DOWN, (Tt) => {
									const qt = new w.$7fb(Tt);
									(qt.equals($.KeyCode.Space) || qt.equals($.KeyCode.Enter)) &&
										Et(Tt);
								}),
							),
							this.db(_t, ai),
							ut
								? ai.button.setAttribute("aria-label", $t)
								: ai.button.setAttribute(
										"aria-label",
										`${It.bb}: ${_t.setting.key}`,
									);
					}
					db(_t, ai) {
						const Ft =
							_t.isConfigured && (0, le.$VZ)(_t.value, _t.setting.type);
						if (Ft) {
							ai.containerElement.classList.add("invalid-input"),
								(ai.validationErrorMessageElement.innerText = Ft);
							return;
						}
						ai.containerElement.classList.remove("invalid-input");
					}
				}
				e.$2Dc = It;
				class Lt extends Ye {
					constructor() {
						super(...arguments), (this.templateId = ct);
					}
					renderTemplate(_t) {
						const ai = this.S(null, _t, "list"),
							Ft = ai.containerElement.querySelector(
								".setting-item-description",
							),
							Xt = be(".setting-item-validation-message");
						Ft.after(Xt);
						const $t = this.H.createInstance(ee.$MCc, ai.controlElement);
						$t.domNode.classList.add(Ye.CONTROL_CLASS), ai.toDispose.add($t);
						const ut = {
							...ai,
							listWidget: $t,
							validationErrorMessageElement: Xt,
						};
						return (
							this.U(ut),
							ai.toDispose.add(
								$t.onDidChangeList((Et) => {
									const Tt = this.bb(ut, Et);
									ut.onChange?.(Tt);
								}),
							),
							ut
						);
					}
					bb(_t, ai) {
						if (_t.context) {
							let Ft = [];
							if (
								(Array.isArray(_t.context.scopeValue)
									? (Ft = [..._t.context.scopeValue])
									: Array.isArray(_t.context.value) &&
										(Ft = [..._t.context.value]),
								ai.type === "move")
							) {
								const Xt = ai.sourceIndex,
									$t = ai.targetIndex,
									ut = Ft.splice(Xt, 1)[0];
								Ft.splice($t, 0, ut);
							} else if (ai.type === "remove" || ai.type === "reset")
								Ft.splice(ai.targetIndex, 1);
							else if (ai.type === "change") {
								const Xt = ai.newItem.value.data.toString();
								ai.targetIndex > -1 ? (Ft[ai.targetIndex] = Xt) : Ft.push(Xt);
							} else
								ai.type === "add" && Ft.push(ai.newItem.value.data.toString());
							return _t.context.defaultValue &&
								Array.isArray(_t.context.defaultValue) &&
								_t.context.defaultValue.length === Ft.length &&
								_t.context.defaultValue.join() === Ft.join()
								? void 0
								: Ft;
						}
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						const Xt = Se(_t),
							$t = _t.setting.enum ? Je(_t) : void 0;
						ai.listWidget.setValue(Xt, {
							showAddButton: ke(_t, Xt),
							keySuggester: $t,
						}),
							(ai.context = _t),
							ai.elementDisposables.add(
								(0, v.$Yc)(() => {
									ai.listWidget.cancelEdit();
								}),
							),
							(ai.onChange = (ut) => {
								if (ut && !tt(_t, ai, ut, !1)) {
									const Et = _t.setting.arrayItemType,
										Tt = Ie(Et) ? ut.map((qt) => +qt) : ut;
									Ft(Tt);
								} else Ft(ut);
							}),
							tt(
								_t,
								ai,
								Xt.map((ut) => ut.value.data.toString()),
								!0,
							);
					}
				}
				class xt extends Ye {
					bb(_t, ai) {
						ai.domNode.classList.add(Ye.CONTROL_CLASS), _t.toDispose.add(ai);
						const Ft = _t.containerElement.querySelector(
								".setting-item-description",
							),
							Xt = be(".setting-item-validation-message");
						Ft.after(Xt);
						const $t = { ..._t, validationErrorMessageElement: Xt };
						return (
							ai instanceof ee.$QCc
								? ($t.objectCheckboxWidget = ai)
								: ($t.objectDropdownWidget = ai),
							this.U($t),
							$t
						);
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
				}
				class Vt extends xt {
					constructor() {
						super(...arguments), (this.templateId = Rt);
					}
					renderTemplate(_t) {
						const ai = this.S(null, _t, "list"),
							Ft = this.H.createInstance(ee.$PCc, ai.controlElement),
							Xt = this.bb(ai, Ft);
						return (
							ai.toDispose.add(
								Ft.onDidChangeList(($t) => {
									this.cb(Xt, $t);
								}),
							),
							Xt
						);
					}
					cb(_t, ai) {
						const Ft = _t.objectDropdownWidget;
						if (_t.context) {
							const Xt = (0, ne.$FCc)(_t.context.setting.key),
								$t =
									typeof _t.context.defaultValue == "object"
										? (_t.context.defaultValue ?? {})
										: {},
								ut =
									typeof _t.context.scopeValue == "object"
										? (_t.context.scopeValue ?? {})
										: {},
								Et = { ..._t.context.scopeValue },
								Tt = [];
							if (
								(Ft.items.forEach((At, Yt) => {
									(ai.type === "change" || ai.type === "move") &&
									ai.targetIndex === Yt
										? (ai.originalItem.key.data !== ai.newItem.key.data &&
											Xt &&
											ai.originalItem.key.data in $t
												? (Et[ai.originalItem.key.data] = null)
												: delete Et[ai.originalItem.key.data],
											(Et[ai.newItem.key.data] = ai.newItem.value.data),
											Tt.push(ai.newItem))
										: ((ai.type !== "change" && ai.type !== "move") ||
												ai.newItem.key.data !== At.key.data) &&
											((Et[At.key.data] = At.value.data), Tt.push(At));
								}),
								ai.type === "remove" || ai.type === "reset")
							) {
								const At = ai.originalItem.key.data,
									Yt =
										ai.type === "remove" &&
										Xt &&
										$t[At] === ai.originalItem.value.data;
								Yt ? (Et[At] = null) : delete Et[At];
								const ni = Tt.findIndex((fi) => fi.key.data === At),
									bi = $t[At];
								Yt || ((0, T.$ug)($t[At]) && ni > -1)
									? Tt.splice(ni, 1)
									: !Yt && ni > -1 && (Tt[ni].value.data = bi);
							} else
								ai.type === "add" &&
									((Et[ai.newItem.key.data] = ai.newItem.value.data),
									Tt.push(ai.newItem));
							Object.entries(Et).forEach(([At, Yt]) => {
								ut[At] !== Yt &&
									$t[At] === Yt &&
									!(Xt && Yt === null) &&
									delete Et[At];
							});
							const qt = Object.keys(Et).length === 0 ? void 0 : Et;
							_t.objectDropdownWidget.setValue(Tt), _t.onChange?.(qt);
						}
					}
					ab(_t, ai, Ft) {
						const Xt = He(_t),
							{
								key: $t,
								objectProperties: ut,
								objectPatternProperties: Et,
								objectAdditionalProperties: Tt,
							} = _t.setting;
						ai.objectDropdownWidget.setValue(Xt, {
							settingKey: $t,
							showAddButton:
								Tt === !1
									? !Le(Object.keys(ut ?? {}), Xt) || (0, T.$tg)(Et)
									: !0,
							keySuggester: Te(_t),
							valueSuggester: Ee(_t),
						}),
							(ai.context = _t),
							ai.elementDisposables.add(
								(0, v.$Yc)(() => {
									ai.objectDropdownWidget.cancelEdit();
								}),
							),
							(ai.onChange = (qt) => {
								if (qt && !tt(_t, ai, qt, !1)) {
									const At = Be(_t, qt);
									Ft(At);
								} else Ft(qt);
							}),
							tt(_t, ai, _t.value, !0);
					}
				}
				class Bt extends xt {
					constructor() {
						super(...arguments), (this.templateId = Nt);
					}
					renderTemplate(_t) {
						const ai = this.S(null, _t, "list"),
							Ft = this.H.createInstance(ee.$QCc, ai.controlElement),
							Xt = this.bb(ai, Ft);
						return (
							ai.toDispose.add(
								Ft.onDidChangeList(($t) => {
									this.cb(Xt, $t);
								}),
							),
							Xt
						);
					}
					cb(_t, ai) {
						if (_t.context) {
							const Ft = _t.objectCheckboxWidget,
								Xt =
									typeof _t.context.defaultValue == "object"
										? (_t.context.defaultValue ?? {})
										: {},
								$t =
									typeof _t.context.scopeValue == "object"
										? (_t.context.scopeValue ?? {})
										: {},
								ut = { ..._t.context.scopeValue },
								Et = [];
							if (ai.type !== "change") {
								console.warn(
									"Unexpected event type",
									ai.type,
									"for bool object setting",
									_t.context.setting.key,
								);
								return;
							}
							Ft.items.forEach((qt, At) => {
								ai.targetIndex === At
									? ((ut[ai.newItem.key.data] = ai.newItem.value.data),
										Et.push(ai.newItem))
									: ai.newItem.key.data !== qt.key.data &&
										((ut[qt.key.data] = qt.value.data), Et.push(qt));
							}),
								Object.entries(ut).forEach(([qt, At]) => {
									$t[qt] !== At && Xt[qt] === At && delete ut[qt];
								});
							const Tt = Object.keys(ut).length === 0 ? void 0 : ut;
							_t.objectCheckboxWidget.setValue(Et),
								_t.onChange?.(Tt),
								this.m.fire(_t.context);
						}
					}
					ab(_t, ai, Ft) {
						const Xt = Ke(_t),
							{ key: $t } = _t.setting;
						ai.objectCheckboxWidget.setValue(Xt, { settingKey: $t }),
							(ai.context = _t),
							(ai.onChange = (ut) => {
								Ft(ut);
							});
					}
				}
				class Gt extends Ye {
					renderTemplate(_t) {
						const ai = this.S(null, _t, "list"),
							Ft = this.H.createInstance(
								this.bb() ? ee.$NCc : ee.$OCc,
								ai.controlElement,
							);
						Ft.domNode.classList.add(Ye.CONTROL_CLASS), ai.toDispose.add(Ft);
						const Xt = { ...ai, includeExcludeWidget: Ft };
						return (
							this.U(Xt),
							ai.toDispose.add(Ft.onDidChangeList(($t) => this.cb(Xt, $t))),
							Xt
						);
					}
					cb(_t, ai) {
						if (_t.context) {
							let Xt = function ($t) {
								const ut = Object.keys($t).sort((Tt, qt) =>
										Tt.localeCompare(qt),
									),
									Et = {};
								for (const Tt of ut) Et[Tt] = $t[Tt];
								return Et;
							};
							const Ft = { ..._t.context.scopeValue };
							ai.type !== "add" &&
								(ai.originalItem.value.data.toString() in
								_t.context.defaultValue
									? (Ft[ai.originalItem.value.data.toString()] = !1)
									: delete Ft[ai.originalItem.value.data.toString()]),
								(ai.type === "change" ||
									ai.type === "add" ||
									ai.type === "move") &&
									(ai.newItem.value.data.toString() in
										_t.context.defaultValue && !ai.newItem.sibling
										? delete Ft[ai.newItem.value.data.toString()]
										: (Ft[ai.newItem.value.data.toString()] = ai.newItem.sibling
												? { when: ai.newItem.sibling }
												: !0)),
								this.f.fire({
									key: _t.context.setting.key,
									value: Object.keys(Ft).length === 0 ? void 0 : Xt(Ft),
									type: _t.context.valueType,
									manualReset: !1,
									scope: _t.context.setting.scope,
								});
						}
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						const Xt = Ce(_t);
						ai.includeExcludeWidget.setValue(Xt),
							(ai.context = _t),
							ai.elementDisposables.add(
								(0, v.$Yc)(() => {
									ai.includeExcludeWidget.cancelEdit();
								}),
							);
					}
				}
				class Mt extends Gt {
					constructor() {
						super(...arguments), (this.templateId = gt);
					}
					bb() {
						return !0;
					}
				}
				class Ut extends Gt {
					constructor() {
						super(...arguments), (this.templateId = ht);
					}
					bb() {
						return !1;
					}
				}
				const ei = (0, q.$xyb)({
					inputBackground: te.$fCc,
					inputForeground: te.$gCc,
					inputBorder: te.$hCc,
				});
				class mi extends Ye {
					constructor() {
						super(...arguments), (this.bb = 150);
					}
					renderTemplate(_t, ai) {
						const Ft = this.S(null, _t, "text"),
							Xt = i.$fhb(
								Ft.containerElement,
								be(".setting-item-validation-message"),
							),
							$t = {
								flexibleHeight: ai,
								flexibleWidth: !1,
								flexibleMaxHeight: this.bb,
								inputBoxStyles: ei,
							},
							ut = new r.$Mob(Ft.controlElement, this.F, $t);
						Ft.toDispose.add(ut),
							Ft.toDispose.add(
								ut.onDidChange((Tt) => {
									Et.onChange?.(Tt);
								}),
							),
							Ft.toDispose.add(ut),
							ut.inputElement.classList.add(Ye.CONTROL_CLASS),
							(ut.inputElement.tabIndex = 0);
						const Et = {
							...Ft,
							inputBox: ut,
							validationErrorMessageElement: Xt,
						};
						return this.U(Et), Et;
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						(ai.onChange = void 0),
							(ai.inputBox.value = _t.value),
							ai.inputBox.setAriaLabel(_t.setting.key),
							(ai.onChange = (Xt) => {
								Wt(_t, ai, !1) || Ft(Xt);
							}),
							Wt(_t, ai, !0);
					}
				}
				class ii extends mi {
					constructor() {
						super(...arguments), (this.templateId = rt);
					}
					renderTemplate(_t) {
						const ai = super.renderTemplate(_t, !1);
						return (
							ai.toDispose.add(
								i.$$fb(ai.inputBox.inputElement, i.$$gb.KEY_DOWN, (Ft) => {
									(Ft.equals($.KeyCode.UpArrow) ||
										Ft.equals($.KeyCode.DownArrow)) &&
										Ft.preventDefault();
								}),
							),
							ai
						);
					}
				}
				class Dt extends mi {
					constructor() {
						super(...arguments), (this.templateId = ft);
					}
					renderTemplate(_t) {
						return super.renderTemplate(_t, !0);
					}
					ab(_t, ai, Ft) {
						const Xt = ($t) => {
							(_t.value = $t), Ft($t);
						};
						super.ab(_t, ai, Xt),
							ai.elementDisposables.add(
								ai.inputBox.onDidHeightChange(($t) => {
									ai.containerElement.clientHeight &&
										this.t.fire({
											element: _t,
											height: ai.containerElement.clientHeight,
										});
								}),
							),
							ai.inputBox.layout();
					}
				}
				class Jt extends Ye {
					constructor() {
						super(...arguments), (this.templateId = nt);
					}
					renderTemplate(_t) {
						const ai = this.S(null, _t, "enum"),
							Ft = (0, q.$Gyb)({
								selectBackground: te.$$Bc,
								selectForeground: te.$_Bc,
								selectBorder: te.$aCc,
								selectListBorder: te.$bCc,
							}),
							Xt = new h.$5ib([], 0, this.F, Ft, {
								useCustomDrawn: !(S.$u && t.$Yfb.pointerEvents),
							});
						ai.toDispose.add(Xt), Xt.render(ai.controlElement);
						const $t = ai.controlElement.querySelector("select");
						$t && ($t.classList.add(Ye.CONTROL_CLASS), ($t.tabIndex = 0)),
							ai.toDispose.add(
								Xt.onDidSelect((Tt) => {
									Et.onChange?.(Tt.index);
								}),
							);
						const ut = ai.containerElement.insertBefore(
								be(".setting-item-enumDescription"),
								ai.descriptionElement.nextSibling,
							),
							Et = {
								...ai,
								selectBox: Xt,
								selectElement: $t,
								enumDescriptionElement: ut,
							};
						return this.U(Et), Et;
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						const Xt = _t.setting.enumItemLabels
								? [..._t.setting.enumItemLabels]
								: [],
							$t = _t.setting.enumDescriptions
								? [..._t.setting.enumDescriptions]
								: [],
							ut = [..._t.setting.enum],
							Et = _t.setting.enumDescriptionsAreMarkdown,
							Tt = new v.$Zc();
						ai.elementDisposables.add(Tt);
						let qt = !1;
						ut.includes(_t.defaultValue) ||
							(ut.unshift(_t.defaultValue),
							$t.unshift(""),
							Xt.unshift(""),
							(qt = !0));
						const At = Li(String(_t.defaultValue)),
							Yt = ut
								.map(String)
								.map(Li)
								.map((bi, fi) => {
									const Ti = $t[fi] && (Et ? pi($t[fi], !1) : $t[fi]);
									return {
										text: Xt[fi] ? Xt[fi] : bi,
										detail: Xt[fi] ? bi : "",
										description: Ti,
										descriptionIsMarkdown: Et,
										descriptionMarkdownActionHandler: {
											callback: (wt) => {
												this.G.open(wt).catch(l.$4);
											},
											disposables: Tt,
										},
										decoratorRight:
											bi === At || (qt && fi === 0)
												? (0, L.localize)(8600, null)
												: "",
									};
								});
						ai.selectBox.setOptions(Yt),
							ai.selectBox.setAriaLabel(_t.setting.key);
						let ni = ut.indexOf(_t.value);
						ni === -1 && (ni = 0),
							(ai.onChange = void 0),
							ai.selectBox.select(ni),
							(ai.onChange = (bi) => {
								Ft(qt && bi === 0 ? _t.defaultValue : ut[bi]);
							}),
							(ai.enumDescriptionElement.innerText = "");
					}
				}
				const si = (0, q.$xyb)({
					inputBackground: te.$iCc,
					inputForeground: te.$jCc,
					inputBorder: te.$kCc,
				});
				class Zt extends Ye {
					constructor() {
						super(...arguments), (this.templateId = bt);
					}
					renderTemplate(_t) {
						const ai = super.S(null, _t, "number"),
							Ft = i.$fhb(
								ai.containerElement,
								be(".setting-item-validation-message"),
							),
							Xt = new r.$Mob(ai.controlElement, this.F, {
								type: "number",
								inputBoxStyles: si,
							});
						ai.toDispose.add(Xt),
							ai.toDispose.add(
								Xt.onDidChange((ut) => {
									$t.onChange?.(ut);
								}),
							),
							ai.toDispose.add(Xt),
							Xt.inputElement.classList.add(Ye.CONTROL_CLASS),
							(Xt.inputElement.tabIndex = 0);
						const $t = {
							...ai,
							inputBox: Xt,
							validationErrorMessageElement: Ft,
						};
						return this.U($t), $t;
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						const Xt =
								_t.valueType === "integer" ||
								_t.valueType === "nullable-integer"
									? parseInt
									: parseFloat,
							$t =
								_t.valueType === "nullable-integer" ||
								_t.valueType === "nullable-number"
									? (ut) => (ut === "" ? null : Xt(ut))
									: Xt;
						(ai.onChange = void 0),
							(ai.inputBox.value =
								typeof _t.value == "number" ? _t.value.toString() : ""),
							(ai.inputBox.step = _t.valueType.includes("integer")
								? "1"
								: "any"),
							ai.inputBox.setAriaLabel(_t.setting.key),
							(ai.onChange = (ut) => {
								Wt(_t, ai, !1) || Ft($t(ut));
							}),
							Wt(_t, ai, !0);
					}
				}
				class ci extends Ye {
					constructor() {
						super(...arguments), (this.templateId = lt);
					}
					renderTemplate(_t) {
						_t.classList.add("setting-item"),
							_t.classList.add("setting-item-bool");
						const ai = new v.$Zc(),
							Ft = i.$fhb(_t, be(Ye.CONTENTS_SELECTOR));
						Ft.classList.add("settings-row-inner-container");
						const Xt = i.$fhb(Ft, be(".setting-item-title")),
							$t = i.$fhb(Xt, be("span.setting-item-category")),
							ut = i.$fhb(Xt, be("span.setting-item-label")),
							Et = ai.add(new m.$Yob(ut)),
							Tt = this.H.createInstance(ie.$ICc, Xt),
							qt = i.$fhb(Ft, be(".setting-item-value-description")),
							At = i.$fhb(qt, be(".setting-item-bool-control")),
							Yt = i.$fhb(qt, be(".setting-item-description")),
							ni = i.$fhb(Ft, be(".setting-item-modified-indicator"));
						ai.add(
							this.R.setupManagedHover(
								(0, ae.$cib)("mouse"),
								ni,
								(0, L.localize)(8601, null),
							),
						);
						const bi = i.$fhb(Ft, be(".setting-item-deprecation-message")),
							fi = new c.$8ib({
								icon: s.$ak.check,
								actionClassName: "setting-value-checkbox",
								isChecked: !0,
								title: "",
								...c.$6ib,
							});
						At.appendChild(fi.domNode),
							ai.add(fi),
							ai.add(
								fi.onChange(() => {
									We.onChange(fi.checked);
								}),
							),
							ai.add(
								i.$0fb(Yt, i.$$gb.MOUSE_DOWN, (_e) => {
									_e.target.tagName.toLowerCase() !== "a" &&
										((We.checkbox.checked = !We.checkbox.checked),
										We.onChange(fi.checked)),
										i.$ahb.stop(_e);
								}),
							),
							fi.domNode.classList.add(Ye.CONTROL_CLASS);
						const Ti = i.$fhb(Ft, be(".setting-toolbar-container")),
							wt = this.W(Ti);
						ai.add(wt);
						const We = {
							toDispose: ai,
							elementDisposables: ai.add(new v.$Zc()),
							containerElement: Ft,
							categoryElement: $t,
							labelElement: Et,
							controlElement: At,
							checkbox: fi,
							descriptionElement: Yt,
							deprecationWarningElement: bi,
							indicatorsLabel: Tt,
							toolbar: wt,
						};
						return (
							this.U(We),
							ai.add(i.$0fb(At, "mousedown", (_e) => _e.stopPropagation())),
							ai.add(
								i.$0fb(Xt, i.$$gb.MOUSE_ENTER, (_e) =>
									Ft.classList.add("mouseover"),
								),
							),
							ai.add(
								i.$0fb(Xt, i.$$gb.MOUSE_LEAVE, (_e) =>
									Ft.classList.remove("mouseover"),
								),
							),
							We
						);
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						(ai.onChange = void 0),
							(ai.checkbox.checked = _t.value),
							ai.checkbox.setTitle(_t.setting.key),
							(ai.onChange = Ft);
					}
				}
				class ri extends Ye {
					constructor() {
						super(...arguments),
							(this.templateId = hi),
							(this.bb = this.D(new y.$re())),
							(this.onDidDismissExtensionSetting = this.bb.event);
					}
					renderTemplate(_t) {
						const ai = super.S(null, _t, "extension-toggle"),
							Ft = new d.$oob(ai.containerElement, { title: !1, ...q.$lyb });
						Ft.element.classList.add("setting-item-extension-toggle-button"),
							(Ft.label = (0, L.localize)(8602, null));
						const Xt = new d.$oob(ai.containerElement, {
							title: !1,
							secondary: !0,
							...q.$lyb,
						});
						Xt.element.classList.add("setting-item-extension-dismiss-button"),
							(Xt.label = (0, L.localize)(8603, null));
						const $t = { ...ai, actionButton: Ft, dismissButton: Xt };
						return this.U($t), $t;
					}
					renderElement(_t, ai, Ft) {
						super.X(_t, ai, Ft);
					}
					ab(_t, ai, Ft) {
						ai.elementDisposables.clear();
						const Xt = _t.setting.displayExtensionId;
						ai.elementDisposables.add(
							ai.actionButton.onDidClick(async () => {
								this.Q.publicLog2("ManageExtensionClick", { extensionId: Xt }),
									this.I.executeCommand("extension.open", Xt);
							}),
						),
							ai.elementDisposables.add(
								ai.dismissButton.onDidClick(async () => {
									this.Q.publicLog2("DismissExtensionClick", {
										extensionId: Xt,
									}),
										this.bb.fire(Xt);
								}),
							);
					}
				}
				let $i = class extends v.$1c {
					constructor(_t, ai, Ft, Xt, $t) {
						super(),
							(this.h = _t),
							(this.j = ai),
							(this.m = Ft),
							(this.n = Xt),
							(this.q = $t),
							(this.c = this.D(new y.$re())),
							(this.f = [
								new f.$rj(
									"settings.resetSetting",
									(0, L.localize)(8604, null),
									void 0,
									void 0,
									async (At) => {
										At instanceof ne.$BCc &&
											(At.isUntrusted ||
												this.c.fire({
													key: At.setting.key,
													value: void 0,
													type: At.setting.type,
													manualReset: !0,
													scope: At.setting.scope,
												}));
									},
								),
								new f.$tj(),
								this.h.createInstance(Oi),
								this.h.createInstance(yi),
								this.h.createInstance(Ai),
							]);
						const ut = (At, Yt) => this.t(At, Yt),
							Et = (At) => [],
							Tt = this.h.createInstance(ri, [], Et),
							qt = [
								this.h.createInstance(ci, this.f, ut),
								this.h.createInstance(Zt, this.f, ut),
								this.h.createInstance(Lt, this.f, ut),
								this.h.createInstance(It, this.f, ut),
								this.h.createInstance(ii, this.f, ut),
								this.h.createInstance(Dt, this.f, ut),
								this.h.createInstance(Mt, this.f, ut),
								this.h.createInstance(Ut, this.f, ut),
								this.h.createInstance(Jt, this.f, ut),
								this.h.createInstance(Vt, this.f, ut),
								this.h.createInstance(Bt, this.f, ut),
								Tt,
							];
						(this.onDidClickOverrideElement = y.Event.any(
							...qt.map((At) => At.onDidClickOverrideElement),
						)),
							(this.onDidChangeSetting = y.Event.any(
								...qt.map((At) => At.onDidChangeSetting),
								this.c.event,
							)),
							(this.onDidDismissExtensionSetting =
								Tt.onDidDismissExtensionSetting),
							(this.onDidOpenSettings = y.Event.any(
								...qt.map((At) => At.onDidOpenSettings),
							)),
							(this.onDidClickSettingLink = y.Event.any(
								...qt.map((At) => At.onDidClickSettingLink),
							)),
							(this.onDidFocusSetting = y.Event.any(
								...qt.map((At) => At.onDidFocusSetting),
							)),
							(this.onDidChangeSettingHeight = y.Event.any(
								...qt.map((At) => At.onDidChangeSettingHeight),
							)),
							(this.onApplyFilter = y.Event.any(
								...qt.map((At) => At.onApplyFilter),
							)),
							(this.allRenderers = [
								...qt,
								this.h.createInstance(ze),
								this.h.createInstance(Xe),
							]);
					}
					t(_t, ai) {
						const Ft = [];
						return (
							this.n.isEnabled() &&
								_t.scope !== A.ConfigurationScope.APPLICATION &&
								ai === N.ConfigurationTarget.USER_LOCAL &&
								Ft.push(this.h.createInstance(Vi, _t)),
							this.q.isEnabled() &&
								!_t.disallowSyncIgnore &&
								Ft.push(this.h.createInstance(li, _t)),
							Ft.length && Ft.splice(0, 0, new f.$tj()),
							Ft
						);
					}
					cancelSuggesters() {
						this.m.hideContextView();
					}
					showContextMenu(_t, ai) {
						const Ft = ai.querySelector(".monaco-toolbar");
						Ft &&
							this.j.showContextMenu({
								getActions: () => this.f,
								getAnchor: () => Ft,
								getActionsContext: () => _t,
							});
					}
					getSettingDOMElementForDOMElement(_t) {
						const ai = i.$Egb(_t, Ye.CONTENTS_CLASS);
						return ai || null;
					}
					getDOMElementsForSettingKey(_t, ai) {
						return _t.querySelectorAll(`[${Ye.SETTING_KEY_ATTR}="${ai}"]`);
					}
					getKeyForDOMElementInSetting(_t) {
						const ai = this.getSettingDOMElementForDOMElement(_t);
						return ai && ai.getAttribute(Ye.SETTING_KEY_ATTR);
					}
					getIdForDOMElementInSetting(_t) {
						const ai = this.getSettingDOMElementForDOMElement(_t);
						return ai && ai.getAttribute(Ye.SETTING_ID_ATTR);
					}
					dispose() {
						super.dispose(),
							this.f.forEach((_t) => {
								(0, v.$Uc)(_t) && _t.dispose();
							}),
							this.allRenderers.forEach((_t) => {
								(0, v.$Uc)(_t) && _t.dispose();
							});
					}
				};
				(e.$3Dc = $i),
					(e.$3Dc = $i =
						Ne(
							[
								j(0, B.$Li),
								j(1, O.$Xxb),
								j(2, O.$Wxb),
								j(3, K.$Xl),
								j(4, W.$4Rb),
							],
							$i,
						));
				function Wt(wi, _t, ai) {
					if (wi.setting.validator) {
						const Ft = wi.setting.validator(_t.inputBox.value);
						if (Ft) {
							_t.containerElement.classList.add("invalid-input"),
								(_t.validationErrorMessageElement.innerText = Ft);
							const Xt = (0, L.localize)(8605, null);
							return (
								_t.inputBox.inputElement.parentElement.setAttribute(
									"aria-label",
									[Xt, Ft].join(" "),
								),
								ai || C.$pib(Xt + " " + Ft),
								!0
							);
						} else
							_t.inputBox.inputElement.parentElement.removeAttribute(
								"aria-label",
							);
					}
					return _t.containerElement.classList.remove("invalid-input"), !1;
				}
				function tt(wi, _t, ai, Ft) {
					if (
						(_t.containerElement.classList.add("invalid-input"),
						wi.setting.validator)
					) {
						const Xt = wi.setting.validator(ai);
						if (Xt && Xt !== "") {
							_t.containerElement.classList.add("invalid-input"),
								(_t.validationErrorMessageElement.innerText = Xt);
							const $t = (0, L.localize)(8606, null);
							return (
								_t.containerElement.setAttribute(
									"aria-label",
									[wi.setting.key, $t, Xt].join(" "),
								),
								Ft || C.$pib($t + " " + Xt),
								!0
							);
						} else
							_t.containerElement.setAttribute("aria-label", wi.setting.key),
								_t.containerElement.classList.remove("invalid-input");
					}
					return !1;
				}
				function at(wi) {
					for (let _t = 0; _t < wi.childNodes.length; _t++) {
						const ai = wi.childNodes.item(_t);
						(ai.tagName && ai.tagName.toLowerCase()) === "img"
							? ai.remove()
							: at(ai);
					}
				}
				function pi(wi, _t = !0) {
					return wi.replace(/`#([^#\s`]+)#`|'#([^#\s']+)#'/g, (ai, Ft, Xt) => {
						const $t = Ft ?? Xt,
							ut = (0, ne.$ECc)($t),
							Et = `${ut.category}: ${ut.label}`;
						return _t ? `[${Et}](#${$t} "${$t}")` : `"${Et}"`;
					});
				}
				function Li(wi) {
					return wi && wi.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
				}
				let Di = class {
					constructor(_t, ai) {
						(this.c = _t), (this.d = ai);
					}
					filter(_t, ai) {
						if (
							this.c.filterToCategory &&
							_t instanceof ne.$BCc &&
							!this.f(_t.setting, this.c.filterToCategory)
						)
							return !1;
						if (
							_t instanceof ne.$BCc &&
							this.c.settingsTarget !== N.ConfigurationTarget.USER_LOCAL
						) {
							const Ft = !!this.d.remoteAuthority;
							if (!_t.matchesScope(this.c.settingsTarget, Ft)) return !1;
						}
						return _t instanceof ne.$zCc
							? typeof _t.count == "number"
								? _t.count > 0
								: o.TreeVisibility.Recurse
							: !(
									_t instanceof ne.$ACc &&
									(this.c.tagFilters?.size || this.c.filterToCategory)
								);
					}
					f(_t, ai) {
						return ai.children.some((Ft) =>
							Ft instanceof ne.$zCc
								? this.f(_t, Ft)
								: Ft instanceof ne.$BCc
									? Ft.setting.key === _t.key
									: !1,
						);
					}
				};
				(e.$4Dc = Di), (e.$4Dc = Di = Ne([j(1, Z.$r8)], Di));
				class Ui extends u.$Cib {
					getTemplateId(_t) {
						if (_t instanceof ne.$zCc) return kt;
						if (_t instanceof ne.$BCc)
							return _t.valueType === re.SettingValueType.ExtensionToggle
								? hi
								: _t.isConfigured && (0, le.$VZ)(_t.value, _t.setting.type)
									? jt
									: _t.valueType === re.SettingValueType.Boolean
										? lt
										: _t.valueType === re.SettingValueType.Integer ||
												_t.valueType === re.SettingValueType.Number ||
												_t.valueType === re.SettingValueType.NullableInteger ||
												_t.valueType === re.SettingValueType.NullableNumber
											? bt
											: _t.valueType === re.SettingValueType.MultilineString
												? ft
												: _t.valueType === re.SettingValueType.String
													? rt
													: _t.valueType === re.SettingValueType.Enum
														? nt
														: _t.valueType === re.SettingValueType.Array
															? ct
															: _t.valueType === re.SettingValueType.Exclude
																? gt
																: _t.valueType === re.SettingValueType.Include
																	? ht
																	: _t.valueType === re.SettingValueType.Object
																		? Rt
																		: _t.valueType ===
																				re.SettingValueType.BooleanObject
																			? Nt
																			: (_t.valueType ===
																					re.SettingValueType.LanguageTag,
																				jt);
						if (_t instanceof ne.$ACc) return ti;
						throw new Error("unknown element type: " + _t);
					}
					hasDynamicHeight(_t) {
						return !(_t instanceof ne.$zCc);
					}
					d(_t) {
						return _t instanceof ne.$zCc
							? 42
							: _t instanceof ne.$BCc &&
									_t.valueType === re.SettingValueType.Boolean
								? 78
								: 104;
					}
				}
				class Wi extends p.$xpb {
					isCollapsible(_t) {
						return !1;
					}
					setCollapsed(_t, ai, Ft) {
						return !1;
					}
				}
				e.$5Dc = Wi;
				class Gi {
					constructor(_t, ai, Ft) {
						(this.c = _t), (this.d = ai), (this.f = Ft);
					}
					getAriaLabel(_t) {
						if (_t instanceof ne.$BCc) {
							const ai = [];
							if (
								(ai.push(`${_t.displayCategory} ${_t.displayLabel}.`),
								_t.isConfigured)
							) {
								const $t = (0, L.localize)(8607, null);
								ai.push($t);
							}
							const Ft = (0, ie.$JCc)(_t, this.c, this.f, this.d);
							Ft.length && ai.push(`${Ft}.`);
							const Xt = (0, E.$Xib)({ value: pi(_t.description, !1) });
							return Xt.length && ai.push(Xt), ai.join(" ");
						} else return _t instanceof ne.$zCc ? _t.label : _t.id;
					}
					getWidgetAriaLabel() {
						return (0, L.localize)(8608, null);
					}
				}
				let qi = class extends z.$CMb {
					constructor(_t, ai, Ft, Xt, $t, ut, Et, Tt, qt) {
						super(
							"SettingsTree",
							_t,
							new Ui(),
							Ft,
							{
								horizontalScrolling: !1,
								supportDynamicHeights: !0,
								identityProvider: {
									getId(At) {
										return At.id;
									},
								},
								accessibilityProvider: new Gi(ut, Tt, qt),
								styleController: (At) => new a.$Pib(i.$Rgb(_t), At),
								filter: Et.createInstance(Di, ai),
								smoothScrolling: ut.getValue("workbench.list.smoothScrolling"),
								multipleSelectionSupport: !1,
								findWidgetEnabled: !1,
								renderIndentGuides: g.RenderIndentGuides.None,
								transformOptimization: !1,
							},
							Et,
							Xt,
							$t,
							ut,
						),
							this.getHTMLElement().classList.add("settings-editor-tree"),
							this.style(
								(0, q.$Eyb)({
									listBackground: V.$8P,
									listActiveSelectionBackground: V.$8P,
									listActiveSelectionForeground: V.$IP,
									listFocusAndSelectionBackground: V.$8P,
									listFocusAndSelectionForeground: V.$IP,
									listFocusBackground: V.$8P,
									listFocusForeground: V.$IP,
									listHoverForeground: V.$IP,
									listHoverBackground: V.$8P,
									listHoverOutline: V.$8P,
									listFocusOutline: V.$8P,
									listInactiveSelectionBackground: V.$8P,
									listInactiveSelectionForeground: V.$IP,
									listInactiveFocusBackground: V.$8P,
									listInactiveFocusOutline: V.$8P,
									treeIndentGuidesStroke: void 0,
									treeInactiveIndentGuidesStroke: void 0,
								}),
							),
							this.D.add(
								ut.onDidChangeConfiguration((At) => {
									At.affectsConfiguration("workbench.list.smoothScrolling") &&
										this.updateOptions({
											smoothScrolling: ut.getValue(
												"workbench.list.smoothScrolling",
											),
										});
								}),
							);
					}
					M(_t, ai, Ft) {
						return new Wi(_t, ai, Ft);
					}
				};
				(e.$6Dc = qi),
					(e.$6Dc = qi =
						Ne(
							[
								j(3, R.$6j),
								j(4, z.$fMb),
								j(5, Q.$RZ),
								j(6, B.$Li),
								j(7, P.$nM),
								j(8, K.$Xl),
							],
							qi,
						));
				let Oi = class extends f.$rj {
					static {
						ue = this;
					}
					static {
						this.ID = "settings.copySettingId";
					}
					static {
						this.LABEL = (0, L.localize)(8609, null);
					}
					constructor(_t) {
						super(ue.ID, ue.LABEL), (this.c = _t);
					}
					async run(_t) {
						return (
							_t && (await this.c.writeText(_t.setting.key)),
							Promise.resolve(void 0)
						);
					}
				};
				Oi = ue = Ne([j(0, D.$Vxb)], Oi);
				let yi = class extends f.$rj {
					static {
						fe = this;
					}
					static {
						this.ID = "settings.copySettingAsJSON";
					}
					static {
						this.LABEL = (0, L.localize)(8610, null);
					}
					constructor(_t) {
						super(fe.ID, fe.LABEL), (this.c = _t);
					}
					async run(_t) {
						if (_t) {
							const ai = `"${_t.setting.key}": ${JSON.stringify(_t.value, void 0, "  ")}`;
							await this.c.writeText(ai);
						}
						return Promise.resolve(void 0);
					}
				};
				yi = fe = Ne([j(0, D.$Vxb)], yi);
				let Ai = class extends f.$rj {
					static {
						me = this;
					}
					static {
						this.ID = "settings.copySettingAsURL";
					}
					static {
						this.LABEL = (0, L.localize)(8611, null);
					}
					constructor(_t, ai) {
						super(me.ID, me.LABEL), (this.c = _t), (this.f = ai);
					}
					async run(_t) {
						if (_t) {
							const ai = _t.setting.key,
								Ft = this.f.urlProtocol,
								Xt = $e.URI.from(
									{ scheme: Ft, authority: re.$_Z, path: `/${ai}` },
									!0,
								);
							await this.c.writeText(Xt.toString());
						}
						return Promise.resolve(void 0);
					}
				};
				Ai = me = Ne([j(0, D.$Vxb), j(1, x.$Bk)], Ai);
				let li = class extends f.$rj {
					static {
						ve = this;
					}
					static {
						this.ID = "settings.stopSyncingSetting";
					}
					static {
						this.LABEL = (0, L.localize)(8612, null);
					}
					constructor(_t, ai) {
						super(ve.ID, ve.LABEL),
							(this.c = _t),
							(this.f = ai),
							this.D(
								y.Event.filter(ai.onDidChangeConfiguration, (Ft) =>
									Ft.affectsConfiguration("settingsSync.ignoredSettings"),
								)(() => this.update()),
							),
							this.update();
					}
					async update() {
						const _t = (0, J.$Lwc)((0, W.$JRb)(), this.f);
						this.checked = !_t.includes(this.c.key);
					}
					async run() {
						let _t = [...this.f.getValue("settingsSync.ignoredSettings")];
						_t = _t.filter(
							($t) => $t !== this.c.key && $t !== `-${this.c.key}`,
						);
						const Ft = (0, W.$JRb)().includes(this.c.key),
							Xt = !this.checked;
						return (
							Xt && Ft && _t.push(`-${this.c.key}`),
							!Xt && !Ft && _t.push(this.c.key),
							this.f.updateValue(
								"settingsSync.ignoredSettings",
								_t.length ? _t : void 0,
								N.ConfigurationTarget.USER,
							),
							Promise.resolve(void 0)
						);
					}
				};
				li = ve = Ne([j(1, N.$gj)], li);
				let Vi = class extends f.$rj {
					static {
						ge = this;
					}
					static {
						this.ID = "settings.applyToAllProfiles";
					}
					static {
						this.LABEL = (0, L.localize)(8613, null);
					}
					constructor(_t, ai) {
						super(ge.ID, ge.LABEL),
							(this.c = _t),
							(this.f = ai),
							this.D(
								y.Event.filter(ai.onDidChangeConfiguration, (Ft) =>
									Ft.affectsConfiguration(Q.$TZ),
								)(() => this.update()),
							),
							this.update();
					}
					update() {
						const _t = this.f.getValue(Q.$TZ);
						this.checked = _t.includes(this.c.key);
					}
					async run() {
						const _t = this.f.getValue(Q.$TZ) ?? [];
						this.checked
							? _t.splice(_t.indexOf(this.c.key), 1)
							: _t.push(this.c.key);
						const ai = (0, b.$Qb)(_t);
						this.checked
							? (await this.f.updateValue(
									this.c.key,
									this.f.inspect(this.c.key).application?.value,
									N.ConfigurationTarget.USER_LOCAL,
								),
								await this.f.updateValue(
									Q.$TZ,
									ai.length ? ai : void 0,
									N.ConfigurationTarget.USER_LOCAL,
								))
							: (await this.f.updateValue(
									Q.$TZ,
									ai.length ? ai : void 0,
									N.ConfigurationTarget.USER_LOCAL,
								),
								await this.f.updateValue(
									this.c.key,
									this.f.inspect(this.c.key).userLocal?.value,
									N.ConfigurationTarget.USER_LOCAL,
								));
					}
				};
				Vi = ge = Ne([j(1, Q.$RZ)], Vi);
			},
		),
		