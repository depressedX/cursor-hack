define(de[4352], he([1, 0, 2, 2, 36, 4351]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PDc = C);
			function C(d, m, r, u) {
				return (0, w.$ndc)(
					() =>
						(0, t.createComponent)(
							E.$ODc,
							(0, i.mergeProps)(
								{
									closeSettings: () => {
										r?.();
									},
								},
								u,
							),
						),
					d,
					m,
				);
			}
		}),
		define(
			de[1383],
			he([
				1, 0, 7, 14, 58, 23, 9, 5, 45, 21, 32, 79, 35, 217, 223, 123, 4352, 418,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SDc = e.$RDc = e.$QDc = void 0);
				const b = "workbench.editor.aisettings",
					s = (0, a.$$O)(
						"settings-editor-label-icon",
						i.$ak.settings,
						"Icon of the settings editor label.",
					);
				class l extends n.$LO {
					static {
						this.ID = "workbench.editor.aisettings.input";
					}
					get typeId() {
						return l.ID;
					}
					get resource() {
						return C.URI.from({
							scheme: E.Schemas.aiSettings,
							path: "cursor/aisettings",
						});
					}
					constructor(S, I) {
						super(), (this.openTab = S), (this.idToScrollTo = I);
					}
					matches(S) {
						return super.matches(S) ? !0 : S instanceof l;
					}
					getName() {
						return "Cursor Settings";
					}
					getIcon() {
						return s;
					}
					toJSON() {
						return { openTab: this.openTab, idToScrollTo: this.idToScrollTo };
					}
					static fromJSON(S) {
						return new l(S.openTab, S.idToScrollTo);
					}
				}
				e.$QDc = l;
				let y = class extends c.$JEb {
					static {
						f = this;
					}
					static {
						this.ID = b;
					}
					constructor(S, I, T, P, k, L, D) {
						super(f.ID, S, I, T, P), (this.c = k), (this.f = L), (this.g = D);
					}
					Y(S) {
						S.classList.add("aichat-pane"),
							(this.b = (0, t.$fhb)(S, (0, t.$)(`.${w.$bX}`))),
							(this.b.tabIndex = 0),
							(this.b.style.outline = "none"),
							this.b.setAttribute("role", "document"),
							(this.b.style.width = "100%"),
							(this.b.style.height = "100%"),
							(this.b.style.backgroundColor =
								this.n.getColorTheme().getColor(g.$cFb)?.toString() ?? ""),
							this.D(
								this.n.onDidColorThemeChange((I) => {
									this.b &&
										(this.b.style.backgroundColor =
											this.n.getColorTheme().getColor(g.$cFb)?.toString() ??
											"");
								}),
							);
					}
					m(S) {
						this.b !== void 0 &&
							(this.a && this.a.dispose(),
							(this.a = (0, p.$PDc)(this.b, this.c, void 0, {
								defaultPane: S.openTab,
								idToScrollTo: S.idToScrollTo,
								onTabChange: (I) => {
									(S.openTab = I), (S.idToScrollTo = void 0);
								},
							})));
					}
					layout(S, I) {}
					async setInput(S, I, T, P) {
						await super.setInput(S, I, T, P), this.s(S), this.m(S);
					}
					clearInput() {
						this.a?.dispose(), (this.a = void 0);
					}
					Z(S) {
						const I = this.input;
						this.s(I), S && I && this.m(I);
					}
					s(S) {
						S &&
							this.g.nonPersistentStorage.cachedSettingsOpenData &&
							((S.openTab =
								this.g.nonPersistentStorage.cachedSettingsOpenData.openTab),
							(S.idToScrollTo =
								this.g.nonPersistentStorage.cachedSettingsOpenData.idToScrollTo));
					}
					focus() {
						super.focus(), this.b?.focus();
					}
					dispose() {
						this.a?.dispose(), super.dispose();
					}
				};
				(e.$RDc = y),
					(e.$RDc =
						y =
						f =
							Ne(
								[
									j(1, u.$km),
									j(2, h.$iP),
									j(3, r.$lq),
									j(4, d.$Li),
									j(5, o.$qgc),
									j(6, m.$0zb),
								],
								y,
							));
				let $ = class {
					constructor(S) {
						this.a = S;
					}
					canSerialize(S) {
						return S instanceof l;
					}
					serialize(S) {
						return JSON.stringify(S.toJSON());
					}
					deserialize(S, I) {
						const T = JSON.parse(I);
						return l.fromJSON(T);
					}
				};
				(e.$SDc = $), (e.$SDc = $ = Ne([j(0, d.$Li)], $));
			},
		),
		define(
			de[1997],
			he([1, 0, 5, 315, 3, 30, 55, 52, 8, 41, 18, 1383]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TDc = void 0),
					(e.$TDc = new m.$5j("isSettingsPaneOpen", !1));
				let h = class extends w.$1c {
					constructor(n, g, p, o, f) {
						super(),
							(this.b = n),
							(this.c = g),
							(this.f = p),
							(this.g = o),
							(this.h = f),
							this.b.addPopupListener(this.renderPopup.bind(this)),
							this.b.addClosePopupListener(this.dispose.bind(this)),
							(this.a = e.$TDc.bindTo(p));
					}
					renderPopup(n, g, p, o) {
						this.h.openEditor(new a.$QDc(p, o));
					}
				};
				(h = Ne(
					[j(0, i.$S6b), j(1, t.$Li), j(2, m.$6j), j(3, r.$7rb), j(4, u.$IY)],
					h,
				)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(h, d.LifecyclePhase.Restored);
			},
		),
		define(
			de[1998],
			he([1, 0, 58, 27, 11, 31, 43, 679, 45, 1997, 315]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UDc = void 0);
				const a = {
					when: r.$TDc.isEqualTo(!1),
					primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyJ,
					weight: C.KeybindingWeight.ExternalExtension + 1,
				};
				class h extends w.$3X {
					static {
						this.ID = t.$QV;
					}
					constructor() {
						super({
							id: h.ID,
							title: { value: d.$N0b, original: d.$N0b },
							f1: !0,
							keybinding: a,
						});
					}
					run(n, g, p, ...o) {
						const f = n.get(u.$S6b);
						n
							.get(m.$0zb)
							.setNonPersistentStorage("cachedSettingsOpenData", {
								openTab: g,
								idToScrollTo: p,
							}),
							f.openPopup(g, p);
					}
				}
				(e.$UDc = h),
					(0, w.$4X)(h),
					(0, w.$4X)(
						class Ba extends w.$3X {
							static {
								this.ID = "aiSettings.action.openhidden";
							}
							constructor() {
								super({
									id: Ba.ID,
									title: { value: d.$N0b, original: d.$N0b },
									f1: !1,
									keybinding: { ...a, weight: 0 },
									menu: [
										{
											id: w.$XX.MenubarPreferencesMenu,
											group: "2_configuration",
											order: 1.5,
										},
									],
								});
							}
							run(n, ...g) {
								n.get(E.$ek).executeCommand(t.$QV);
							}
						},
					);
			},
		),
		define(
			de[4353],
			he([1, 0, 30, 44, 192, 1383, 102, 1383, 1997, 1998]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(i.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(E.$RDc, E.$RDc.ID, "Cursor Settings"),
							[new C.$Ji(E.$QDc)],
						),
					t.$Io
						.as(i.$a1.EditorFactory)
						.registerEditorSerializer(E.$QDc.ID, d.$SDc);
			},
		),
		define(
			de[1999],
			he([
				1, 0, 459, 7, 114, 267, 127, 183, 758, 292, 431, 278, 596, 268, 461,
				411, 931, 264, 50, 24, 14, 29, 6, 27, 3, 12, 37, 28, 61, 251, 4, 121,
				31, 10, 81, 8, 49, 5, 39, 93, 41, 62, 32, 106, 51, 35, 129, 1670, 150,
				141, 612, 3249, 1042, 3123, 468, 613, 261, 78, 53, 131, 1856, 1998, 95,
				72, 9,
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
				W,
				X,
				Y,
				ie,
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
		define(
			de[4354],
			he([
				1, 0, 7, 95, 278, 411, 103, 3, 4, 10, 8, 72, 5, 93, 106, 51, 1999, 1042,
				613, 78,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Dc = e.$8Dc = e.$7Dc = void 0),
					(e.$9Dc = S),
					(t = mt(t));
				const s = t.$;
				let l = class {
					constructor(k, L) {
						(this.d = k), (this.f = L), (this.a = null);
					}
					get settingsTreeRoot() {
						return this.b;
					}
					set settingsTreeRoot(k) {
						(this.b = k), this.update();
					}
					get currentSearchModel() {
						return this.a;
					}
					set currentSearchModel(k) {
						(this.a = k), this.update();
					}
					get children() {
						return this.b.children;
					}
					update() {
						this.b && this.h(this.b);
					}
					h(k) {
						k.children.forEach((D) => {
							D instanceof o.$zCc && this.h(D);
						});
						const L = k.children
							.filter((D) => D instanceof o.$zCc)
							.reduce((D, M) => D + M.count, 0);
						k.count = L + this.j(k);
					}
					j(k) {
						return k.children.filter((L) => {
							if (
								!(L instanceof o.$BCc) ||
								(this.a && !this.a.root.containsSetting(L.setting.key))
							)
								return !1;
							const D = !!this.f.remoteAuthority;
							return (
								L.matchesScope(this.d.settingsTarget, D) &&
								L.matchesAllTags(this.d.tagFilters) &&
								L.matchesAnyFeature(this.d.featureFilters) &&
								L.matchesAnyExtension(this.d.extensionFilters) &&
								L.matchesAnyId(this.d.idFilters)
							);
						}).length;
					}
				};
				(e.$7Dc = l), (e.$7Dc = l = Ne([j(1, b.$r8)], l));
				const y = "settings.toc.entry";
				class $ {
					constructor(k) {
						(this.a = k), (this.templateId = y);
					}
					renderTemplate(k) {
						return {
							labelElement: t.$fhb(k, s(".settings-toc-entry")),
							countElement: t.$fhb(k, s(".settings-toc-count")),
							elementDisposables: new d.$Zc(),
						};
					}
					renderElement(k, L, D) {
						D.elementDisposables.clear();
						const M = k.element,
							N = M.count,
							A = M.label;
						(D.labelElement.textContent = A),
							D.elementDisposables.add(
								this.a.setupManagedHover(
									(0, i.$cib)("mouse"),
									D.labelElement,
									A,
								),
							),
							N
								? (D.countElement.textContent = ` (${N})`)
								: (D.countElement.textContent = "");
					}
					disposeTemplate(k) {
						k.elementDisposables.dispose();
					}
				}
				e.$8Dc = $;
				class v {
					getTemplateId(k) {
						return y;
					}
					getHeight(k) {
						return 22;
					}
				}
				function S(P, k) {
					const L = P.children.filter((D) => D instanceof o.$zCc);
					return C.Iterable.map(L, (D) => {
						const M = D.children.some((N) => N instanceof o.$zCc);
						return {
							element: D,
							collapsed: void 0,
							collapsible: M,
							children: D instanceof o.$zCc ? S(D, k) : void 0,
						};
					});
				}
				class I {
					getWidgetAriaLabel() {
						return (0, m.localize)(8658, null);
					}
					getAriaLabel(k) {
						return k && k instanceof o.$zCc
							? (0, m.localize)(8659, null, k.label)
							: "";
					}
					getAriaLevel(k) {
						let L = 1;
						for (; k instanceof o.$zCc && k.parent; ) L++, (k = k.parent);
						return L;
					}
				}
				let T = class extends c.$CMb {
					constructor(k, L, D, M, N, A, R) {
						const B = {
							filter: R.createInstance(p.$4Dc, L),
							multipleSelectionSupport: !1,
							identityProvider: {
								getId(U) {
									return U.id;
								},
							},
							styleController: (U) => new w.$Pib(t.$Rgb(k), U),
							accessibilityProvider: R.createInstance(I),
							collapseByDefault: !0,
							horizontalScrolling: !1,
							hideTwistiesOfChildlessElements: !0,
							renderIndentGuides: E.RenderIndentGuides.None,
						};
						super("SettingsTOC", k, new v(), [new $(A)], B, R, D, M, N),
							this.style(
								(0, n.$Eyb)({
									listBackground: g.$8P,
									listFocusOutline: g.$NP,
									listActiveSelectionBackground: g.$8P,
									listActiveSelectionForeground: f.$6Bc,
									listFocusAndSelectionBackground: g.$8P,
									listFocusAndSelectionForeground: f.$6Bc,
									listFocusBackground: g.$8P,
									listFocusForeground: f.$7Bc,
									listHoverForeground: f.$7Bc,
									listHoverBackground: g.$8P,
									listInactiveSelectionBackground: g.$8P,
									listInactiveSelectionForeground: f.$6Bc,
									listInactiveFocusBackground: g.$8P,
									listInactiveFocusOutline: g.$8P,
									treeIndentGuidesStroke: void 0,
									treeInactiveIndentGuidesStroke: void 0,
								}),
							);
					}
				};
				(e.$0Dc = T),
					(e.$0Dc = T =
						Ne(
							[
								j(2, u.$6j),
								j(3, c.$fMb),
								j(4, r.$gj),
								j(5, a.$Uyb),
								j(6, h.$Li),
							],
							T,
						));
			},
		),
		define(
			de[4355],
			he([
				1, 0, 7, 127, 114, 105, 183, 50, 15, 33, 275, 29, 6, 103, 27, 3, 12, 9,
				4, 31, 10, 8, 5, 34, 21, 32, 51, 35, 26, 150, 217, 1043, 1293, 1745,
				1999, 1042, 4354, 468, 613, 66, 131, 838, 522, 612, 174, 261, 125, 53,
				279, 97, 61, 3122, 119, 81, 30, 106, 62, 518, 84, 133, 2478,
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
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
				se,
				re,
			) {
				"use strict";
				var le;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aEc = e.SettingsFocusContext = void 0),
					(e.$_Dc = ae),
					(t = mt(t)),
					(i = mt(i)),
					(p = mt(p));
				var oe;
				(function (ve) {
					(ve[(ve.Search = 0)] = "Search"),
						(ve[(ve.TableOfContents = 1)] = "TableOfContents"),
						(ve[(ve.SettingTree = 2)] = "SettingTree"),
						(ve[(ve.SettingControl = 3)] = "SettingControl");
				})(oe || (e.SettingsFocusContext = oe = {}));
				function ae(ve) {
					return c.Iterable.map(ve.children, (ge) => ({
						element: ge,
						children: ge instanceof R.$zCc ? ae(ge) : void 0,
					}));
				}
				const pe = t.$,
					$e = (0, f.localize)(8478, null),
					ye = "workbench.settings.settingsSearchTocBehavior",
					ue = "settingsEditorState";
				let fe = class extends L.$JEb {
					static {
						le = this;
					}
					static {
						this.ID = "workbench.editor.settings2";
					}
					static {
						this.a = 0;
					}
					static {
						this.b = 200;
					}
					static {
						this.c = 200;
					}
					static {
						this.f = 1e3;
					}
					static {
						this.j = 500;
					}
					static {
						this.r = 100;
					}
					static {
						this.u = 200;
					}
					static {
						this.cb = 500;
					}
					static {
						this.db = this.u + this.cb;
					}
					static {
						this.eb = [
							`@${B.$OBc}`,
							"@tag:notebookLayout",
							"@tag:notebookOutputLayout",
							`@tag:${B.$WBc}`,
							`@tag:${B.$VBc}`,
							"@tag:sync",
							"@tag:usesOnlineServices",
							"@tag:telemetry",
							"@tag:accessibility",
							`@${B.$RBc}`,
							`@${B.$PBc}`,
							`@${B.$QBc}scm`,
							`@${B.$QBc}explorer`,
							`@${B.$QBc}search`,
							`@${B.$QBc}debug`,
							`@${B.$QBc}extensions`,
							`@${B.$QBc}terminal`,
							`@${B.$QBc}task`,
							`@${B.$QBc}problems`,
							`@${B.$QBc}output`,
							`@${B.$QBc}comments`,
							`@${B.$QBc}remote`,
							`@${B.$QBc}timeline`,
							`@${B.$QBc}notebook`,
							`@${B.$UBc}`,
						];
					}
					static fb(ge) {
						return Array.isArray(ge)
							? !1
							: ge === F.SettingValueType.Enum ||
									ge === F.SettingValueType.Array ||
									ge === F.SettingValueType.BooleanObject ||
									ge === F.SettingValueType.Object ||
									ge === F.SettingValueType.Complex ||
									ge === F.SettingValueType.Boolean ||
									ge === F.SettingValueType.Exclude ||
									ge === F.SettingValueType.Include;
					}
					constructor(
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
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
					) {
						super(le.ID, ge, be, Fe, Te),
							(this.dc = Ce),
							(this.ec = Oe),
							(this.fc = xe),
							(this.gc = He),
							(this.hc = Ke),
							(this.ic = Te),
							(this.jc = Ee),
							(this.kc = Ie),
							(this.lc = Be),
							(this.mc = Se),
							(this.nc = ke),
							(this.oc = Ue),
							(this.pc = qe),
							(this.qc = Ae),
							(this.rc = Me),
							(this.sc = De),
							(this.Bb = null),
							(this.Gb = null),
							(this.Ib = null),
							(this.Jb = null),
							(this.Kb = null),
							(this.Lb = null),
							(this.Rb = oe.Search),
							(this.Sb = !1),
							(this.Tb = !1),
							(this.Vb = null),
							(this.Wb = null),
							(this.Xb = 0),
							(this.Zb = []),
							(this.$b = []),
							(this.ac = "settingsEditor2.dismissedExtensionSettings"),
							(this.bc = "	"),
							(this.zb = new m.$Jh(1e3)),
							(this.Ab = new m.$Jh(300)),
							(this.Hb = { settingsTarget: s.ConfigurationTarget.USER_LOCAL }),
							(this.Eb = new m.$Jh(le.c)),
							(this.Fb = new m.$Jh(le.f)),
							(this.Cb = new m.$Jh(le.b)),
							(this.Db = new m.$Jh(le.j)),
							(this.Ob = B.$lBc.bindTo(Je)),
							(this.Pb = B.$nBc.bindTo(Je)),
							(this.Mb = B.$oBc.bindTo(Je)),
							(this.Nb = B.$pBc.bindTo(Je)),
							(this.Qb = new Map()),
							(this.Ub = this.ab(Ee, Le, ue)),
							(this.$b = this.ic
								.get(this.ac, v.StorageScope.PROFILE, "")
								.split(this.bc)),
							this.D(
								Ce.onDidChangeConfiguration((je) => {
									je.source !== s.ConfigurationTarget.DEFAULT &&
										this.Wc(je.affectedKeys);
								}),
							),
							this.D(
								Re.onDidChangeCurrentProfile((je) => {
									je.join(this.tc());
								}),
							),
							this.D(
								Se.onDidChangeTrust(() => {
									this.vc?.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
										this.ub &&
											(this.ub.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
											this.Zc());
								}),
							),
							this.D(
								Ce.onDidChangeRestrictedSettings((je) => {
									je.default.length && this.uc && this.Xc(new Set(je.default));
								}),
							),
							this.D(
								qe.onDidInstallExtensions(() => {
									this.yc();
								}),
							),
							this.D(
								qe.onDidUninstallExtension(() => {
									this.yc();
								}),
							),
							(this.hb = this.D(new g.$Zc())),
							B.$YBc &&
								!le.eb.includes(`@${B.$SBc}`) &&
								le.eb.push(`@${B.$SBc}`),
							(this.cc = this.D(new g.$2c()));
					}
					async tc() {
						this.Db.trigger(() => {
							(this.$b = this.ic
								.get(this.ac, v.StorageScope.PROFILE, "")
								.split(this.bc)),
								this.Wc(void 0, !0);
						});
					}
					get minimumWidth() {
						return le.cb;
					}
					get maximumWidth() {
						return Number.POSITIVE_INFINITY;
					}
					get minimumHeight() {
						return 180;
					}
					set minimumWidth(ge) {}
					set maximumWidth(ge) {}
					get uc() {
						return this.vc || this.ub;
					}
					get vc() {
						return this.Ib;
					}
					set vc(ge) {
						(this.Ib = ge), this.ib.classList.toggle("search-mode", !!this.Ib);
					}
					get wc() {
						const ge = this.rb.getFocus()[0];
						if (ge instanceof R.$BCc)
							return this.sb.getDOMElementsForSettingKey(
								this.rb.getHTMLElement(),
								ge.setting.key,
							)[0];
					}
					get currentFocusContext() {
						return this.Rb;
					}
					Y(ge) {
						ge.setAttribute("tabindex", "-1"),
							(this.ib = t.$fhb(
								ge,
								pe(".settings-editor", { tabindex: "-1" }),
							)),
							this.Dc(this.ib),
							this.Ic(this.ib),
							this.Jc(this.ib),
							this.updateStyles(),
							this.D(
								(0, Z.$D3b)({
									name: "settingsEditor2",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.lb.inputWidget.hasWidgetFocus() && this.focusTOC();
									},
									focusPreviousWidget: () => {
										this.lb.inputWidget.hasWidgetFocus() || this.focusSearch();
									},
								}),
							);
					}
					async setInput(ge, be, Ce, Le) {
						if (
							(this.Ob.set(!0),
							await super.setInput(ge, be, Ce, Le),
							!this.input)
						)
							return;
						const Fe = await this.input.resolve();
						if (!(Le.isCancellationRequested || !(Fe instanceof x.$YZ))) {
							if (
								(this.hb.clear(),
								this.hb.add(
									Fe.onDidChangeGroups(() => {
										this.Db.trigger(() => {
											this.Wc(void 0, !1, !0);
										});
									}),
								),
								(this.gb = Fe),
								(be = be || (0, F.$6Z)({})),
								!this.Hb.settingsTarget || !this.ob.settingsTarget)
							) {
								const Oe = be.viewState && be.viewState.settingsTarget;
								!be.target &&
									!Oe &&
									(be.target = s.ConfigurationTarget.USER_LOCAL);
							}
							this.Ac(be),
								this.Wc(void 0, !0).then(() => {
									(this.cc.value = ge.onWillDispose(() => {
										this.lb.setValue("");
									})),
										this.Pc();
								}),
								await this.yc();
						}
					}
					async yc() {
						const ge = await this.pc.getInstalled();
						this.Zb = ge
							.filter((be) => be.manifest.contributes?.configuration)
							.map((be) => be.identifier.id);
					}
					zc() {
						const ge =
							this.input && this.Ub.loadEditorState(this.group, this.input);
						if (
							(ge &&
								typeof ge.target == "object" &&
								(ge.target = o.URI.revive(ge.target)),
							ge)
						) {
							const be = ge.target;
							(this.ob.settingsTarget = be),
								(this.Hb.settingsTarget = be),
								this.lb.getValue() || this.lb.setValue(ge.searchQuery);
						}
						return (
							this.input && this.Ub.clearEditorState(this.input, this.group),
							ge ?? null
						);
					}
					getViewState() {
						return this.Hb;
					}
					setOptions(ge) {
						super.setOptions(ge), ge && this.Ac(ge);
					}
					Ac(ge) {
						ge.focusSearch && !p.$u && this.focusSearch();
						const be = ge.viewState ? ge.viewState : void 0,
							Ce = be?.query ?? ge.query;
						Ce !== void 0 && (this.lb.setValue(Ce), (this.Hb.query = Ce));
						const Le = ge.folderUri ?? be?.settingsTarget ?? ge.target;
						Le && this.ob.updateTarget(Le);
					}
					clearInput() {
						this.Ob.set(!1), super.clearInput();
					}
					layout(ge) {
						if (((this.Yb = ge), !this.isVisible())) return;
						this.sd(ge);
						const Ce =
							Math.min(this.jb.clientWidth, ge.width) -
							24 * 2 -
							10 -
							this.mb.clientWidth -
							this.nb.clientWidth -
							12;
						this.lb.layout(new t.$pgb(Ce, 20)),
							this.ib.classList.toggle("narrow-width", ge.width < le.db);
					}
					focus() {
						if ((super.focus(), this.Rb === oe.Search))
							p.$u || this.focusSearch();
						else if (this.Rb === oe.SettingControl) {
							const ge = this.wc;
							if (ge) {
								const be = ge.querySelector(A.$ZDc.CONTROL_SELECTOR);
								if (be) {
									be.focus();
									return;
								}
							}
						} else
							this.Rb === oe.SettingTree
								? this.rb.domFocus()
								: this.Rb === oe.TableOfContents && this.yb.domFocus();
					}
					Z(ge) {
						super.Z(ge),
							ge ||
								setTimeout(() => {
									this.lb.onHide();
								}, 0);
					}
					focusSettings(ge = !1) {
						if (
							(this.rb.getFocus().length || this.rb.focusFirst(),
							this.rb.domFocus(),
							ge)
						) {
							const Ce = this.rb
								.getHTMLElement()
								.querySelector(`.focused ${A.$ZDc.CONTROL_SELECTOR}`);
							Ce && Ce.focus();
						}
					}
					focusTOC() {
						this.yb.domFocus();
					}
					showContextMenu() {
						const ge = this.rb.getFocus()[0],
							be = this.wc;
						be && ge instanceof R.$BCc && this.sb.showContextMenu(ge, be);
					}
					focusSearch(ge, be = !0) {
						ge && this.lb && this.lb.setValue(ge),
							this.lb.focus(be && !this.Cb.isTriggered);
					}
					clearSearchResults() {
						this.lb.setValue(""), this.focusSearch();
					}
					clearSearchFilters() {
						const be = this.lb
							.getValue()
							.split(" ")
							.filter(
								(Ce) => Ce.length && !le.eb.some((Le) => Ce.startsWith(Le)),
							);
						this.lb.setValue(be.join(" "));
					}
					Cc() {
						let ge = $e;
						this.Jb && (ge += `. ${this.Jb}`),
							this.Kb && (ge += `. ${this.Kb}`),
							this.lb.updateAriaLabel(ge);
					}
					Dc(ge) {
						this.jb = t.$fhb(ge, pe(".settings-header"));
						const be = t.$fhb(this.jb, pe(".search-container")),
							Ce = new d.$rj(
								B.$iBc,
								(0, f.localize)(8479, null),
								P.ThemeIcon.asClassName(q.$0Ac),
								!1,
								async () => this.clearSearchResults(),
							),
							Le = new d.$rj(
								B.$kBc,
								(0, f.localize)(8480, null),
								P.ThemeIcon.asClassName(q.$$Ac),
							);
						(this.lb = this.D(
							this.fc.createInstance(
								D.$3Bc,
								`${le.ID}.searchbox`,
								be,
								{
									triggerCharacters: ["@", ":"],
									provideResults: (He) => {
										const Ke = He.split(/\s/g);
										return Ke[Ke.length - 1].startsWith(`@${B.$SBc}`)
											? this.oc
													.getRegisteredLanguageIds()
													.map((Te) => `@${B.$SBc}${Te} `)
													.sort()
													.filter((Te) => !He.includes(Te))
											: Ke[Ke.length - 1].startsWith(`@${B.$PBc}`)
												? this.Zb.map((Te) => `@${B.$PBc}${Te} `)
														.sort()
														.filter((Te) => !He.includes(Te))
												: Ke[Ke.length - 1].startsWith("@")
													? le.eb
															.filter((Je) => !He.includes(Je))
															.map((Je) => (Je.endsWith(":") ? Je : Je + " "))
													: [];
									},
								},
								$e,
								"settingseditor:searchinput" + le.a++,
								{
									placeholderText: $e,
									focusContextKey: this.Pb,
									styleOverrides: { inputBorder: U.$hCc },
								},
							),
						)),
							this.D(
								this.lb.onDidFocus(() => {
									this.Rb = oe.Search;
								}),
							),
							(this.mb = t.$fhb(
								be,
								t.$(".settings-count-widget.monaco-count-badge.long"),
							)),
							(this.mb.style.backgroundColor = (0, I.$rP)(I.$1P)),
							(this.mb.style.color = (0, I.$rP)(I.$2P)),
							(this.mb.style.border = `1px solid ${(0, I.$rP)(I.$OP)}`),
							this.D(
								this.lb.onInputDidChange(() => {
									const He = this.lb.getValue();
									(Ce.enabled = !!He), this.Cb.trigger(() => this.ed());
								}),
							);
						const Fe = t.$fhb(this.jb, pe(".settings-header-controls"));
						Fe.style.borderColor = (0, I.$rP)(U.$9Bc);
						const Oe = t.$fhb(Fe, pe(".settings-target-container"));
						if (
							((this.ob = this.D(
								this.fc.createInstance(M.$bBc, Oe, {
									enableRemoteSettings: !0,
								}),
							)),
							(this.ob.settingsTarget = s.ConfigurationTarget.USER_LOCAL),
							this.ob.onDidTargetChange((He) => this.Ec(He)),
							this.D(
								t.$0fb(Oe, t.$$gb.KEY_DOWN, (He) => {
									new w.$7fb(He).keyCode === n.KeyCode.DownArrow &&
										this.focusSettings();
								}),
							),
							this.kc.enabled && this.lc.canToggleEnablement())
						) {
							const He = this.D(this.fc.createInstance(me, this.window, Fe));
							this.D(
								He.onDidChangeLastSyncedLabel((Ke) => {
									(this.Kb = Ke), this.Cc();
								}),
							);
						}
						(this.nb = t.$fhb(be, t.$(".settings-clear-widget"))),
							this.D(
								new E.$eib(this.nb, {
									actionViewItemProvider: (He, Ke) => {
										if (He.id === Le.id)
											return this.fc.createInstance(
												ie.$$Dc,
												He,
												Ke,
												this.N,
												this.lb,
											);
									},
								}),
							).push([Ce, Le], { label: !1, icon: !0 });
					}
					Ec(ge) {
						(this.Hb.settingsTarget = ge), this.Wc(void 0, !0);
					}
					Fc(ge) {
						this.$b.includes(ge) || this.$b.push(ge),
							this.ic.store(
								this.ac,
								this.$b.join(this.bc),
								v.StorageScope.PROFILE,
								v.StorageTarget.USER,
							),
							this.Wc(void 0, !0);
					}
					Gc(ge, be) {
						const Ce = this.uc.getElementsByName(ge.targetKey)?.[0];
						let Le = !1;
						if (Ce) {
							let Fe = 0.5;
							try {
								const Oe = this.rb.getRelativeTop(ge.source);
								Oe !== null && (Fe = Oe);
							} catch {}
							this.Hb.filterToCategory &&
								ge.source.displayCategory !== Ce.displayCategory &&
								this.yb.setFocus([]);
							try {
								this.rb.reveal(Ce, Fe);
							} catch {
								Le = !0;
							}
							if (!Le) {
								setTimeout(() => {
									this.rb.setFocus([Ce]);
								}, 50);
								const Oe = this.sb.getDOMElementsForSettingKey(
									this.rb.getHTMLElement(),
									ge.targetKey,
								);
								if (Oe && Oe[0]) {
									const xe = Oe[0].querySelector(A.$ZDc.CONTROL_SELECTOR);
									xe && xe.focus();
								}
							}
						}
						!be &&
							(!Ce || Le) &&
							this.hd("").then(() => {
								this.lb.setValue(""), this.Gc(ge, !0);
							});
					}
					switchToSettingsFile() {
						const ge = (0, R.$HCc)(this.lb.getValue()).query;
						return this.Hc({ query: ge });
					}
					async Hc(ge) {
						const be = this.ob.settingsTarget,
							Ce = { jsonEditor: !0, ...ge };
						if (be === s.ConfigurationTarget.USER_LOCAL)
							return ge?.revealSetting &&
								_.$Io.as(ee.$No.Configuration).getConfigurationProperties()[
									ge?.revealSetting.key
								]?.scope === ee.ConfigurationScope.APPLICATION
								? this.ec.openApplicationSettings(Ce)
								: this.ec.openUserSettings(Ce);
						if (be === s.ConfigurationTarget.USER_REMOTE)
							return this.ec.openRemoteSettings(Ce);
						if (be === s.ConfigurationTarget.WORKSPACE)
							return this.ec.openWorkspaceSettings(Ce);
						if (o.URI.isUri(be))
							return this.ec.openFolderSettings({ folderUri: be, ...Ce });
					}
					Ic(ge) {
						(this.kb = t.$fhb(ge, pe(".settings-body"))),
							(this.vb = t.$fhb(this.kb, pe(".no-results-message"))),
							(this.vb.innerText = (0, f.localize)(8481, null)),
							(this.wb = pe("span.clear-search-filters")),
							(this.wb.textContent = " - ");
						const be = t.$fhb(
							this.wb,
							pe(
								"a.pointer.prominent",
								{ tabindex: 0 },
								(0, f.localize)(8482, null),
							),
						);
						this.D(
							t.$0fb(be, t.$$gb.CLICK, (Fe) => {
								t.$ahb.stop(Fe, !1), this.clearSearchFilters();
							}),
						),
							t.$fhb(this.vb, this.wb),
							(this.vb.style.color = (0, I.$rP)(I.$9P)),
							(this.xb = pe(".settings-toc-container")),
							(this.qb = pe(".settings-tree-container")),
							this.Kc(this.xb),
							this.Nc(this.qb),
							(this.pb = this.D(
								new W.$vob(this.kb, {
									orientation: W.Orientation.HORIZONTAL,
									proportionalLayout: !0,
								}),
							));
						const Ce = this.ic.getNumber(
							"settingsEditor2.splitViewWidth",
							v.StorageScope.PROFILE,
							le.u,
						);
						this.pb.addView(
							{
								onDidChange: h.Event.None,
								element: this.xb,
								minimumSize: le.r,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (Fe, Oe, xe) => {
									(this.xb.style.width = `${Fe}px`), this.yb.layout(xe, Fe);
								},
							},
							Ce,
							void 0,
							!0,
						),
							this.pb.addView(
								{
									onDidChange: h.Event.None,
									element: this.qb,
									minimumSize: le.cb,
									maximumSize: Number.POSITIVE_INFINITY,
									layout: (Fe, Oe, xe) => {
										(this.qb.style.width = `${Fe}px`), this.rb.layout(xe, Fe);
									},
								},
								W.Sizing.Distribute,
								void 0,
								!0,
							),
							this.D(
								this.pb.onDidSashReset(() => {
									const Fe = this.pb.getViewSize(0) + this.pb.getViewSize(1);
									this.pb.resizeView(0, le.u), this.pb.resizeView(1, Fe - le.u);
								}),
							),
							this.D(
								this.pb.onDidSashChange(() => {
									const Fe = this.pb.getViewSize(0);
									this.ic.store(
										"settingsEditor2.splitViewWidth",
										Fe,
										v.StorageScope.PROFILE,
										v.StorageTarget.USER,
									);
								}),
							);
						const Le = this.h.getColor(U.$0Bc);
						this.pb.style({ separatorBorder: Le });
					}
					Jc(ge) {
						this.D(
							t.$$fb(ge, t.$$gb.KEY_DOWN, (be) => {
								be.keyCode === n.KeyCode.KeyA &&
									(p.$m ? be.metaKey : be.ctrlKey) &&
									be.target.tagName !== "TEXTAREA" &&
									be.target.tagName !== "INPUT" &&
									(be.browserEvent.stopPropagation(),
									be.browserEvent.preventDefault());
							}),
						);
					}
					Kc(ge) {
						(this.tb = this.fc.createInstance(O.$7Dc, this.Hb)),
							(this.yb = this.D(
								this.fc.createInstance(
									O.$0Dc,
									t.$fhb(
										ge,
										pe(".settings-toc-wrapper", {
											role: "navigation",
											"aria-label": (0, f.localize)(8483, null),
										}),
									),
									this.Hb,
								),
							)),
							(this.Tb = !1),
							this.D(
								this.yb.onDidFocus(() => {
									this.Rb = oe.TableOfContents;
								}),
							),
							this.D(
								this.yb.onDidChangeFocus((be) => {
									const Ce = be.elements?.[0] ?? null;
									this.Vb !== Ce &&
										((this.Vb = Ce),
										this.yb.setSelection(Ce ? [Ce] : []),
										this.vc
											? this.Hb.filterToCategory !== Ce &&
												((this.Hb.filterToCategory = Ce ?? void 0),
												this.Zc(void 0, !0),
												(this.rb.scrollTop = 0))
											: Ce &&
												(!be.browserEvent || !be.browserEvent.fromScroll) &&
												(this.rb.reveal(Ce, 0), this.rb.setFocus([Ce])));
								}),
							),
							this.D(
								this.yb.onDidFocus(() => {
									this.Mb.set(!0);
								}),
							),
							this.D(
								this.yb.onDidBlur(() => {
									this.Mb.set(!1);
								}),
							),
							this.D(
								this.yb.onDidDispose(() => {
									this.Tb = !0;
								}),
							);
					}
					Lc(ge) {
						if (this.lb && !this.lb.getValue().includes(ge)) {
							const be = `${ge} ${this.lb.getValue().trimStart()}`;
							this.focusSearch(be, !1);
						}
					}
					Mc() {
						if (this.lb && this.lb.getValue().includes(`@${B.$SBc}`)) {
							const be = this.lb
								.getValue()
								.split(" ")
								.filter((Ce) => !Ce.startsWith(`@${B.$SBc}`))
								.join(" ");
							this.focusSearch(be, !1);
						}
					}
					Nc(ge) {
						(this.sb = this.D(this.fc.createInstance(A.$3Dc))),
							this.D(
								this.sb.onDidChangeSetting((be) =>
									this.Oc(be.key, be.value, be.type, be.manualReset, be.scope),
								),
							),
							this.D(this.sb.onDidDismissExtensionSetting((be) => this.Fc(be))),
							this.D(
								this.sb.onDidOpenSettings((be) => {
									this.Hc({ revealSetting: { key: be, edit: !0 } });
								}),
							),
							this.D(this.sb.onDidClickSettingLink((be) => this.Gc(be))),
							this.D(
								this.sb.onDidFocusSetting((be) => {
									this.rb.setFocus([be]),
										(this.Rb = oe.SettingControl),
										this.Nb.set(!1);
								}),
							),
							this.D(
								this.sb.onDidChangeSettingHeight((be) => {
									const { element: Ce, height: Le } = be;
									try {
										this.rb.updateElementHeight(Ce, Le);
									} catch {}
								}),
							),
							this.D(this.sb.onApplyFilter((be) => this.Lc(be))),
							this.D(
								this.sb.onDidClickOverrideElement((be) => {
									this.Mc(),
										be.language && this.Lc(`@${B.$SBc}${be.language}`),
										be.scope === "workspace"
											? this.ob.updateTarget(s.ConfigurationTarget.WORKSPACE)
											: be.scope === "user"
												? this.ob.updateTarget(s.ConfigurationTarget.USER_LOCAL)
												: be.scope === "remote" &&
													this.ob.updateTarget(
														s.ConfigurationTarget.USER_REMOTE,
													),
										this.Lc(`@${B.$RBc}${be.settingKey}`);
								}),
							),
							(this.rb = this.D(
								this.fc.createInstance(
									A.$6Dc,
									ge,
									this.Hb,
									this.sb.allRenderers,
								),
							)),
							this.D(
								this.rb.onDidScroll(() => {
									this.rb.scrollTop !== this.Xb &&
										((this.Xb = this.rb.scrollTop),
										setTimeout(() => {
											this.Pc();
										}, 0));
								}),
							),
							this.D(
								this.rb.onDidFocus(() => {
									const be = ge.ownerDocument.activeElement?.classList;
									be &&
										be.contains("monaco-list") &&
										be.contains("settings-editor-tree") &&
										((this.Rb = oe.SettingTree),
										this.Nb.set(!0),
										(this.Wb ??= this.rb.firstVisibleElement ?? null),
										this.Wb && (this.Wb.tabbable = !0));
								}),
							),
							this.D(
								this.rb.onDidBlur(() => {
									this.Nb.set(!1), (this.Wb = null);
								}),
							),
							this.D(
								this.rb.onDidChangeFocus((be) => {
									const Ce = be.elements[0];
									this.Wb !== Ce &&
										(this.Wb && (this.Wb.tabbable = !1),
										(this.Wb = Ce),
										this.Wb && (this.Wb.tabbable = !0),
										this.rb.setSelection(Ce ? [Ce] : []));
								}),
							);
					}
					Oc(ge, be, Ce, Le, Fe) {
						const xe = (0, R.$HCc)(this.lb.getValue()).languageFilter;
						(Le || (this.Gb && this.Gb.key !== ge)) &&
							this.Rc(ge, be, Le, xe, Fe),
							(this.Gb = { key: ge, value: be, languageFilter: xe }),
							le.fb(Ce)
								? this.Eb.trigger(() => this.Rc(ge, be, Le, xe, Fe))
								: this.Fb.trigger(() => this.Rc(ge, be, Le, xe, Fe));
					}
					Pc() {
						if ((this.sb.cancelSuggesters(), this.vc || !this.tb)) return;
						const ge = this.rb.firstVisibleElement,
							be =
								ge instanceof R.$BCc
									? ge.parent
									: ge instanceof R.$zCc
										? ge
										: null;
						let Ce = !0;
						try {
							this.yb.getNode(be);
						} catch {
							Ce = !1;
						}
						if (Ce && be && this.yb.getSelection()[0] !== be) {
							const Le = this.Qc(be);
							Le.forEach((xe) => this.yb.expand(xe)), this.yb.reveal(be);
							const Fe = this.yb.getRelativeTop(be);
							if (typeof Fe != "number") return;
							this.yb.collapseAll(),
								Le.forEach((xe) => this.yb.expand(xe)),
								Fe < 0 || Fe > 1 ? this.yb.reveal(be) : this.yb.reveal(be, Fe),
								this.yb.expand(be),
								this.yb.setSelection([be]);
							const Oe = new KeyboardEvent("keydown");
							(Oe.fromScroll = !0), this.yb.setFocus([be], Oe);
						}
					}
					Qc(ge) {
						const be = [];
						for (; ge.parent; )
							ge.parent.id !== "root" && be.push(ge.parent), (ge = ge.parent);
						return be.reverse();
					}
					Rc(ge, be, Ce, Le, Fe) {
						const Oe = this.ob.settingsTarget,
							xe = o.URI.isUri(Oe) ? Oe : void 0,
							He =
								(xe ? s.ConfigurationTarget.WORKSPACE_FOLDER : Oe) ??
								s.ConfigurationTarget.USER_LOCAL,
							Ke = { resource: xe, overrideIdentifiers: Le ? [Le] : void 0 },
							Te =
								He === s.ConfigurationTarget.WORKSPACE ||
								He === s.ConfigurationTarget.WORKSPACE_FOLDER ||
								!!Le,
							Ee = Te ? Ce : be === void 0,
							Ie = this.dc.inspect(ge, Ke);
						return (
							!Te && Ie.defaultValue === be && (be = void 0),
							this.dc
								.updateValue(ge, be, Ke, He, { handleDirtyFile: "save" })
								.then(() => {
									const Be = this.lb.getValue();
									Be.includes(`@${B.$OBc}`) && this.cd(), this.Zc(ge, Ee);
									const Se = {
										key: ge,
										query: Be,
										searchResults: this.vc?.getUniqueResults() ?? null,
										rawResults: this.vc?.getRawResults() ?? null,
										showConfiguredOnly:
											!!this.Hb.tagFilters && this.Hb.tagFilters.has(B.$OBc),
										isReset: typeof be > "u",
										settingsTarget: this.ob.settingsTarget,
									};
									return (this.Gb = null), this.Sc(Se);
								})
						);
					}
					Sc(ge) {
						let be, Ce, Le;
						if (
							ge.searchResults &&
							((Le = ge.searchResults.filterMatches.findIndex(
								(xe) => xe.setting.key === ge.key,
							)),
							this.vc)
						) {
							const xe = this.vc.getRawResults();
							if (
								(xe[R.SearchResultIdx.Local] &&
									Le >= 0 &&
									(be = xe[R.SearchResultIdx.Local].filterMatches.some(
										(Ke) => Ke.setting.key === ge.key,
									)
										? "local"
										: "remote"),
								xe[R.SearchResultIdx.Remote])
							) {
								const He = xe[R.SearchResultIdx.Remote].filterMatches.findIndex(
									(Ke) => Ke.setting.key === ge.key,
								);
								Ce = He >= 0 ? He : void 0;
							}
						}
						const Fe =
								ge.settingsTarget === s.ConfigurationTarget.USER_LOCAL
									? "user"
									: ge.settingsTarget === s.ConfigurationTarget.USER_REMOTE
										? "user_remote"
										: ge.settingsTarget === s.ConfigurationTarget.WORKSPACE
											? "workspace"
											: "folder",
							Oe = {
								key: ge.key,
								groupId: be,
								nlpIndex: Ce,
								displayIndex: Le,
								showConfiguredOnly: ge.showConfiguredOnly,
								isReset: ge.isReset,
								target: Fe,
							};
						this.Q.publicLog2("settingsEditor.settingModified", Oe);
					}
					Tc(ge, be = "") {
						if (be && this.Qb.has(be)) return;
						be || ((0, g.$Vc)(this.Qb.values()), this.Qb.clear());
						const Ce = t.$dhb(ge);
						this.Qb.set(be, Ce),
							Ce.onDidBlur(() => {
								Ce.dispose(), this.Qb.delete(be), this.Wc(new Set([be]));
							});
					}
					Uc(ge) {
						const be = new Map();
						function Ce(Le, Fe = 0) {
							if (Le.settings)
								for (const Oe of Le.settings)
									be.has(Oe.key) || be.set(Oe.key, Fe++);
							if (Le.children) for (const Oe of Le.children) Fe = Ce(Oe, Fe);
							return Fe;
						}
						return Ce(ge), be;
					}
					Vc(ge) {
						this.ub.update(ge),
							(this.tb.settingsTreeRoot = this.ub.root),
							(this.Lb = this.Uc(ge));
					}
					async Wc(ge, be = !1, Ce = !1) {
						if (ge && this.ub) return this.Xc(ge);
						if (!this.gb) return;
						const Le = this.gb.settingsGroups.slice(1),
							Fe = Le.filter((Ie) => !Ie.extensionInfo),
							Oe = (0, A.$VDc)(N.$uCc, Fe, this.hc),
							xe = Oe.tree;
						if (Oe.leftoverSettings.size && !this.Sb) {
							const Ie = [];
							Oe.leftoverSettings.forEach((Be) => {
								Ie.push(Be.key);
							}),
								this.hc.warn(
									`SettingsEditor2: Settings not included in settingsLayout.ts: ${Ie.join(", ")}`,
								),
								(this.Sb = !0);
						}
						const He = [];
						let Ke = !1;
						const Je = await (0, B.$1Bc)(this.rc, this.qc);
						if (Je && Le.filter((Ie) => Ie.extensionInfo).length)
							for (const Ie in Je.settingsEditorRecommendedExtensions) {
								const Be = Je.recommendedExtensionsGalleryInfo[Ie];
								if (!Be) continue;
								const Se = Be.identifier.id,
									ke = this.Zb.includes(Se),
									Ue = Le.findIndex(
										(et) =>
											et.extensionInfo &&
											et.extensionInfo.id.toLowerCase() === Se.toLowerCase() &&
											et.sections.length === 1 &&
											et.sections[0].settings.length === 1 &&
											et.sections[0].settings[0].displayExtensionId,
									);
								if (ke || this.$b.includes(Se)) {
									Ue !== -1 && (Le.splice(Ue, 1), (Ke = !0));
									continue;
								}
								if (Ue !== -1) continue;
								let qe = null;
								try {
									qe = await this.rc.getManifest(Be, r.CancellationToken.None);
								} catch {
									continue;
								}
								const Ae = qe?.contributes?.configuration;
								let Me;
								Array.isArray(Ae)
									? Ae.length === 1 && (Me = Ae[0].title)
									: (Me = Ae?.title);
								const De = Je.settingsEditorRecommendedExtensions[Ie],
									Re = Be.displayName ?? Be.name ?? Se,
									je = `${Ie}.manageExtension`,
									Ve = {
										range: x.$WZ,
										key: je,
										keyRange: x.$WZ,
										value: null,
										valueRange: x.$WZ,
										description: [
											De.onSettingsEditorOpen?.descriptionOverride ??
												Be.description,
										],
										descriptionIsMarkdown: !1,
										descriptionRanges: [],
										scope: ee.ConfigurationScope.WINDOW,
										type: "null",
										displayExtensionId: Se,
										extensionGroupTitle: Me ?? Re,
										categoryLabel: "Extensions",
										title: Re,
									},
									Ze = {
										sections: [{ settings: [Ve] }],
										id: Se,
										title: Ve.extensionGroupTitle,
										titleRange: x.$WZ,
										range: x.$WZ,
										extensionInfo: { id: Se, displayName: Be.displayName },
									};
								Le.push(Ze), He.push(Ze), (Ke = !0);
							}
						xe.children.push(
							await (0, A.$XDc)(
								this.nc,
								Le.filter((Ie) => Ie.extensionInfo),
							),
						);
						const Te = (0, N.$tCc)(Je),
							Ee = (0, A.$VDc)(Te, Le, this.hc);
						if (
							(xe.children.unshift(Ee.tree),
							Je && Ke && this.gb.setAdditionalGroups(He),
							!this.mc.isWorkspaceTrusted() &&
								(this.Hb.settingsTarget instanceof o.URI ||
									this.Hb.settingsTarget === s.ConfigurationTarget.WORKSPACE))
						) {
							const Ie = (0, A.$WDc)(
								Le,
								this.Hb.settingsTarget,
								this.Hb.languageFilter,
								this.dc,
							);
							Ie.length &&
								xe.children.unshift({
									id: "workspaceTrust",
									label: (0, f.localize)(8484, null),
									settings: Ie,
								});
						}
						if ((this.vc?.updateChildren(), this.ub)) {
							if ((this.Vc(xe), Ce && this.vc)) return await this.ed();
							this.cd(), this.Zc(void 0, be);
						} else
							(this.ub = this.fc.createInstance(
								R.$CCc,
								this.Hb,
								this.mc.isWorkspaceTrusted(),
							)),
								this.Vc(xe),
								(this.Hb.query ? void 0 : this.zc())?.searchQuery ||
								this.lb.getValue()
									? await this.ed()
									: (this.cd(), this.bd(), this.yb.collapseAll());
					}
					Xc(ge) {
						ge.size
							? (this.vc &&
									ge.forEach((be) => this.vc.updateElementsByName(be)),
								this.ub && ge.forEach((be) => this.ub.updateElementsByName(be)),
								ge.forEach((be) => this.Zc(be)))
							: this.Zc();
					}
					Yc() {
						const ge = this.rb.getHTMLElement(),
							be = ge.ownerDocument.activeElement;
						return be && t.$Lgb(ge) ? be : null;
					}
					Zc(ge, be = !1) {
						if (!be && ge && this.Qb.has(ge)) {
							this.dd(ge);
							return;
						}
						if (this.$c()) {
							const Fe = this.window.document.querySelector(".context-view");
							Fe && this.Tc(Fe, ge);
							return;
						}
						const Ce = this.Yc(),
							Le = Ce && this.sb.getSettingDOMElementForDOMElement(Ce);
						if (Le && !be)
							if (ge) {
								if (
									Le.getAttribute(A.$ZDc.SETTING_KEY_ATTR) === ge &&
									Le.parentElement &&
									!Le.parentElement.classList.contains("setting-item-list")
								) {
									this.dd(ge), this.Tc(Le, ge);
									return;
								}
							} else {
								this.Tc(Le);
								return;
							}
						if ((this.qd(), ge)) {
							const Fe = this.uc.getElementsByName(ge);
							if (Fe && Fe.length)
								Fe.length >= 2 &&
									console.warn(
										"More than one setting with key " + ge + " found",
									),
									this.ad(Fe[0]);
							else return;
						} else this.bd();
					}
					$c() {
						return !!t.$Egb(
							this.ib.ownerDocument.activeElement,
							"context-view",
						);
					}
					ad(ge) {
						this.isVisible() && this.rb.rerender(ge);
					}
					bd() {
						this.isVisible() && this.rb.setChildren(null, ae(this.uc.root));
					}
					cd() {
						this.isVisible() &&
							(this.tb.update(),
							this.yb.setChildren(null, (0, O.$9Dc)(this.tb, this.yb)));
					}
					dd(ge) {
						const be = this.uc.getElementsByName(ge),
							Ce = be && be[0] && be[0].isConfigured,
							Le = this.sb.getDOMElementsForSettingKey(
								this.rb.getHTMLElement(),
								ge,
							);
						Le && Le[0] && Le[0].classList.toggle("is-configured", !!Ce);
					}
					async ed() {
						if (!this.uc) return;
						const ge = this.lb.getValue().trim();
						(this.Hb.query = ge),
							this.zb.cancel(),
							await this.hd(ge.replace(/\u203A/g, " ")),
							ge && this.vc && this.zb.trigger(() => this.kd(this.vc));
					}
					fd(ge) {
						const be = ge.match(/"([a-zA-Z.]+)": /);
						return be && be[1];
					}
					gd() {
						this.dc.getValue(ye) === "hide"
							? (this.pb.setViewVisible(0, !1),
								this.pb.style({ separatorBorder: X.$UL.transparent }))
							: (this.pb.setViewVisible(0, !0),
								this.pb.style({ separatorBorder: this.h.getColor(U.$0Bc) }));
					}
					async hd(ge) {
						const be = this.sc.show(!0);
						if (
							((this.Hb.tagFilters = new Set()),
							(this.Hb.extensionFilters = new Set()),
							(this.Hb.featureFilters = new Set()),
							(this.Hb.idFilters = new Set()),
							(this.Hb.languageFilter = void 0),
							ge)
						) {
							const Ce = (0, R.$HCc)(ge);
							(ge = Ce.query),
								Ce.tags.forEach((Le) => this.Hb.tagFilters.add(Le)),
								Ce.extensionFilters.forEach((Le) =>
									this.Hb.extensionFilters.add(Le),
								),
								Ce.featureFilters.forEach((Le) =>
									this.Hb.featureFilters.add(Le),
								),
								Ce.idFilters.forEach((Le) => this.Hb.idFilters.add(Le)),
								(this.Hb.languageFilter = Ce.languageFilter);
						}
						this.ob.updateLanguageFilterIndicators(this.Hb.languageFilter),
							ge && ge !== "@"
								? ((ge = this.fd(ge) || ge), await this.ld(ge), this.gd())
								: (this.Hb.tagFilters.size ||
									this.Hb.extensionFilters.size ||
									this.Hb.featureFilters.size ||
									this.Hb.idFilters.size ||
									this.Hb.languageFilter
										? (this.vc = this.jd())
										: (this.vc = null),
									this.Ab.cancel(),
									this.Bb &&
										(this.Bb.cancel(), this.Bb.dispose(), (this.Bb = null)),
									this.yb.setFocus([]),
									(this.Hb.filterToCategory = void 0),
									(this.tb.currentSearchModel = this.vc),
									this.vc
										? (this.yb.setSelection([]),
											this.yb.expandAll(),
											this.cd(),
											this.qd(),
											this.bd(),
											this.gd())
										: this.Tb ||
											(this.yb.collapseAll(),
											this.cd(),
											this.qd(),
											this.bd(),
											this.pb.setViewVisible(0, !0))),
							be.done();
					}
					jd() {
						const ge = this.fc.createInstance(
								R.$GCc,
								this.Hb,
								this.Lb,
								this.mc.isWorkspaceTrusted(),
							),
							be = { filterMatches: [] };
						for (const Ce of this.gb.settingsGroups.slice(1))
							for (const Le of Ce.sections)
								for (const Fe of Le.settings)
									be.filterMatches.push({
										setting: Fe,
										matches: [],
										matchType: F.SettingMatchType.None,
										score: 0,
									});
						return ge.setResult(0, be), ge;
					}
					kd(ge) {
						if (!ge) return;
						const be = {},
							Ce = ge.getRawResults(),
							Le = Ce[R.SearchResultIdx.Local];
						Le && (be.filterResult = Le.filterMatches.length);
						const Fe = Ce[R.SearchResultIdx.Remote];
						Fe && (be.nlpResult = Fe.filterMatches.length);
						const Oe = ge.getUniqueResults(),
							xe = {
								"counts.nlpResult": be.nlpResult,
								"counts.filterResult": be.filterResult,
								"counts.uniqueResultsCount": Oe?.filterMatches.length,
							};
						this.Q.publicLog2("settingsEditor.filter", xe);
					}
					async ld(ge) {
						this.Bb && (this.Bb.cancel(), (this.Bb = null));
						const be = (this.Bb = new r.$Ce());
						return this.Ab.trigger(async () => {
							if (!be.token.isCancellationRequested) {
								const Ce = await this.nd(ge, be.token);
								Ce &&
									!Ce.exactMatch &&
									!be.token.isCancellationRequested &&
									(await this.od(ge, be.token)),
									this.md();
							}
						});
					}
					md() {
						(this.tb.currentSearchModel = this.vc),
							this.tb.update(),
							this.yb.setFocus([]),
							(this.Hb.filterToCategory = void 0),
							this.yb.expandAll(),
							(this.rb.scrollTop = 0),
							this.cd(),
							this.Zc(void 0, !0);
					}
					nd(ge, be) {
						const Ce = this.gc.getLocalSearchProvider(ge);
						return this.pd(ge, R.SearchResultIdx.Local, Ce, be);
					}
					od(ge, be) {
						const Ce = this.gc.getRemoteSearchProvider(ge);
						return this.pd(ge, R.SearchResultIdx.Remote, Ce, be);
					}
					async pd(ge, be, Ce, Le) {
						const Fe = await this.rd(ge, this.gb, Ce, Le);
						return Le?.isCancellationRequested
							? null
							: ((this.vc ??= this.fc.createInstance(
									R.$GCc,
									this.Hb,
									this.Lb,
									this.mc.isWorkspaceTrusted(),
								)),
								this.vc.setResult(be, Fe),
								Fe);
					}
					qd() {
						if (this.uc)
							if (
								((this.wb.style.display =
									this.Hb.tagFilters && this.Hb.tagFilters.size > 0
										? "initial"
										: "none"),
								this.vc)
							) {
								const ge = this.vc.getUniqueResultsCount();
								let be;
								switch (ge) {
									case 0:
										be = (0, f.localize)(8485, null);
										break;
									case 1:
										be = (0, f.localize)(8486, null);
										break;
									default:
										be = (0, f.localize)(8487, null, ge);
								}
								(this.Jb = be),
									this.Cc(),
									(this.mb.innerText = be),
									i.$pib(be),
									this.mb.style.display !== "block" &&
										((this.mb.style.display = "block"), this.layout(this.Yb)),
									this.ib.classList.toggle("no-results", ge === 0),
									(this.pb.el.style.visibility =
										ge === 0 ? "hidden" : "visible");
							} else {
								this.mb.style.display !== "none" &&
									((this.Jb = null),
									this.Cc(),
									(this.mb.style.display = "none"),
									(this.mb.innerText = ""),
									this.layout(this.Yb)),
									this.ib.classList.remove("no-results"),
									(this.pb.el.style.visibility = "visible");
								return;
							}
					}
					rd(ge, be, Ce, Le) {
						return (Ce ? Ce.searchModel(be, Le) : Promise.resolve(null)).then(
							void 0,
							(Oe) => ((0, a.$8)(Oe) ? Promise.reject(Oe) : null),
						);
					}
					sd(ge) {
						const be = ge.height - 97;
						if (
							((this.pb.el.style.height = `${be}px`),
							this.pb.layout(this.kb.clientWidth, be),
							!(this.dc.getValue(ye) === "hide" && this.vc))
						) {
							const Fe = this.pb.isViewVisible(0),
								Oe = this.kb.clientWidth >= le.db;
							this.pb.setViewVisible(0, Oe),
								!Fe &&
									Oe &&
									this.kb.clientWidth >= le.cb + le.u &&
									this.pb.resizeView(0, le.u),
								this.pb.style({
									separatorBorder: Oe
										? this.h.getColor(U.$0Bc)
										: X.$UL.transparent,
								});
						}
					}
					I() {
						if (this.isVisible()) {
							const ge = this.lb.getValue().trim(),
								be = this.ob.settingsTarget;
							this.input &&
								this.Ub.saveEditorState(this.group, this.input, {
									searchQuery: ge,
									target: be,
								});
						} else
							this.input && this.Ub.clearEditorState(this.input, this.group);
						super.I();
					}
				};
				(e.$aEc = fe),
					(e.$aEc =
						fe =
						le =
							Ne(
								[
									j(1, S.$km),
									j(2, G.$RZ),
									j(3, K.$XO),
									j(4, T.$iP),
									j(5, F.$7Z),
									j(6, y.$Li),
									j(7, B.$hBc),
									j(8, $.$ik),
									j(9, l.$6j),
									j(10, v.$lq),
									j(11, z.$EY),
									j(12, H.$Nxc),
									j(13, k.$4Rb),
									j(14, V.$pO),
									j(15, J.$q2),
									j(16, Y.$nM),
									j(17, ne.$Hp),
									j(18, Q.$Bk),
									j(19, ne.$Ep),
									j(20, se.$bO),
									j(21, re.$P8),
								],
								fe,
							));
				let me = class extends g.$1c {
					constructor(ge, be, Ce, Le, Fe, Oe) {
						super(),
							(this.f = Ce),
							(this.h = Le),
							(this.j = Fe),
							(this.c = this.D(new h.$re())),
							(this.onDidChangeLastSyncedLabel = this.c.event);
						const xe = t.$fhb(be, pe(".settings-right-controls")),
							He = t.$fhb(xe, pe(".turn-on-sync"));
						(this.b = this.D(new C.$oob(He, { title: !0, ...te.$lyb }))),
							(this.a = t.$fhb(xe, pe(".last-synced-label"))),
							t.hide(this.a),
							(this.b.enabled = !0),
							(this.b.label = (0, f.localize)(8488, null)),
							t.hide(this.b.element),
							this.D(
								this.b.onDidClick(async () => {
									Oe.publicLog2("sync/turnOnSyncFromSettings"),
										await this.f.executeCommand(
											"workbench.userDataSync.actions.turnOn",
										);
								}),
							),
							this.n(),
							this.D(
								this.h.onDidChangeLastSyncTime(() => {
									this.n();
								}),
							),
							this.D(new t.$jgb()).cancelAndSet(() => this.n(), 60 * 1e3, ge),
							this.q(),
							this.D(
								this.h.onDidChangeStatus(() => {
									this.q();
								}),
							),
							this.D(
								this.j.onDidChangeEnablement(() => {
									this.q();
								}),
							);
					}
					n() {
						const ge = this.h.lastSyncTime;
						let be;
						if (typeof ge == "number") {
							const Ce = (0, u.$dn)(ge, !0, void 0, !0);
							be = (0, f.localize)(8489, null, Ce);
						} else be = "";
						(this.a.textContent = be), this.c.fire(be);
					}
					q() {
						this.h.status !== k.SyncStatus.Uninitialized &&
							(this.j.isEnabled() || this.h.status !== k.SyncStatus.Idle
								? (t.show(this.a), t.hide(this.b.element))
								: (t.hide(this.a), t.show(this.b.element)));
					}
				};
				me = Ne([j(2, b.$ek), j(3, k.$5Rb), j(4, k.$4Rb), j(5, S.$km)], me);
			},
		),
		define(
			de[4356],
			he([
				1, 0, 27, 3, 23, 28, 9, 46, 373, 4, 11, 31, 8, 179, 102, 5, 43, 73, 30,
				25, 633, 192, 55, 44, 100, 220, 3785, 3535, 3758, 612, 4355, 468, 3886,
				18, 78, 53, 52, 1310, 131, 1312, 133, 129, 56, 679, 99, 2477,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (r = mt(r));
				const G = "settings.action.search",
					K = "settings.action.focusSettingsFile",
					J = "settings.action.focusSettingsFromSearch",
					W = "settings.action.focusSettingsList",
					X = "settings.action.focusTOC",
					Y = "settings.action.focusSettingControl",
					ie = "settings.action.focusLevelUp",
					ne = "settings.switchToJSON",
					ee = "settings.filterByOnline",
					_ = "settings.filterUntrusted",
					te = "workbench.action.openSettings",
					Q = "settings.filterByTelemetry";
				f.$Io
					.as($.$a1.EditorPane)
					.registerEditorPane(
						l.$vVb.create(L.$aEc, L.$aEc.ID, r.localize(8390, null)),
						[new n.$Ji(z.$uvc)],
					),
					f.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							l.$vVb.create(I.$oCc, I.$oCc.ID, r.localize(8391, null)),
							[new n.$Ji(B.$tvc)],
						);
				class Z {
					canSerialize(ge) {
						return !0;
					}
					serialize(ge) {
						return "";
					}
					deserialize(ge) {
						return ge.createInstance(B.$tvc);
					}
				}
				class se {
					canSerialize(ge) {
						return !0;
					}
					serialize(ge) {
						return "";
					}
					deserialize(ge) {
						return ge.createInstance(z.$uvc);
					}
				}
				f.$Io.as($.$a1.EditorFactory).registerEditorSerializer(B.$tvc.ID, Z),
					f.$Io.as($.$a1.EditorFactory).registerEditorSerializer(z.$uvc.ID, se);
				const re = r.localize2(8405, "Open Settings (UI)"),
					le = r.localize2(8406, "Open User Settings (JSON)"),
					oe = r.localize2(8407, "Open Application Settings (JSON)"),
					ae = V.$ck.Preferences;
				function pe(ve) {
					return (0, E.$rg)(ve) ? ve : void 0;
				}
				function $e(ve) {
					return (0, E.$lg)(ve) ? ve : void 0;
				}
				function ye(ve) {
					(0, E.$ng)(ve) || (ve = {});
					let ge = {
						focusSearch: pe(ve?.focusSearch),
						openToSide: pe(ve?.openToSide),
						query: $e(ve?.query),
					};
					return (
						(0, E.$lg)(ve?.revealSetting?.key) &&
							(ge = {
								...ge,
								revealSetting: {
									key: ve.revealSetting.key,
									edit: pe(ve.revealSetting?.edit),
								},
							}),
						ge
					);
				}
				let ue = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.preferencesActions";
					}
					constructor(ge, be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.a = ge),
							(this.b = be),
							(this.c = Ce),
							(this.f = Le),
							(this.g = Fe),
							(this.h = Oe),
							(this.j = xe),
							this.m(),
							this.q(),
							this.s(),
							this.D(Le.onDidChangeWorkbenchState(() => this.s())),
							this.D(Le.onDidChangeWorkspaceFolders(() => this.t()));
					}
					m() {
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: te,
											title: {
												...r.localize2(8408, "Settings"),
												mnemonicTitle: r.localize(8392, null),
												original: "VS Code Settings",
											},
											keybinding: {
												weight: p.KeybindingWeight.WorkbenchContrib,
												when: null,
												primary: t.KeyMod.CtrlCmd | t.KeyCode.Comma,
											},
											menu: [
												{
													id: u.$XX.GlobalActivity,
													group: "2_configuration",
													order: 2,
												},
												{
													id: u.$XX.MenubarPreferencesMenu,
													group: "2_configuration",
													order: 2,
												},
											],
										});
									}
									run(be, Ce) {
										const Le = typeof Ce == "string" ? { query: Ce } : ye(Ce);
										return be.get(U.$7Z).openSettings(Le);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openSettings2",
												title: r.localize2(8409, "Open Settings (UI)"),
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be.get(U.$7Z).openSettings({ jsonEditor: !1, ...Ce })
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openSettingsJson",
												title: le,
												metadata: {
													description: r.localize2(
														8410,
														"Opens the JSON file containing the current user profile settings",
													),
												},
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be.get(U.$7Z).openSettings({ jsonEditor: !0, ...Ce })
											);
										}
									},
								),
							);
						const ge = this;
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: "workbench.action.openApplicationSettingsJson",
											title: oe,
											category: ae,
											menu: {
												id: u.$XX.CommandPalette,
												when: h.$Kj.notEquals(
													F.$48.key,
													ge.j.defaultProfile.id,
												),
											},
										});
									}
									run(be, Ce) {
										return (
											(Ce = ye(Ce)),
											be
												.get(U.$7Z)
												.openApplicationSettings({ jsonEditor: !0, ...Ce })
										);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalSettings",
												title: r.localize2(8411, "Open User Settings"),
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (Ce = ye(Ce)), be.get(U.$7Z).openUserSettings(Ce);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalSettingsCursorAlias",
												title: { value: q.$O0b, original: q.$O0b },
												f1: !0,
											});
										}
										run(be, Ce) {
											return (Ce = ye(Ce)), be.get(U.$7Z).openUserSettings(Ce);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openRawDefaultSettings",
												title: r.localize2(
													8412,
													"Open Default Settings (JSON)",
												),
												category: ae,
												f1: !0,
											});
										}
										run(be) {
											return be.get(U.$7Z).openRawDefaultSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: T.$pCc.ID,
												title: T.$pCc.LABEL,
												category: ae,
												f1: !0,
											});
										}
										run(be) {
											return be
												.get(g.$Li)
												.createInstance(T.$pCc, T.$pCc.ID, T.$pCc.LABEL.value)
												.run();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openWorkspaceSettings",
												title: r.localize2(8413, "Open Workspace Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										run(be, Ce) {
											return (
												(Ce = typeof Ce == "string" ? { query: Ce } : ye(Ce)),
												be.get(U.$7Z).openWorkspaceSettings(Ce)
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openAccessibilitySettings",
												title: r.localize2(8414, "Open Accessibility Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										async run(be) {
											await be
												.get(U.$7Z)
												.openSettings({
													jsonEditor: !1,
													query: "@tag:accessibility",
												});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openWorkspaceSettingsFile",
												title: r.localize2(
													8415,
													"Open Workspace Settings (JSON)",
												),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be
													.get(U.$7Z)
													.openWorkspaceSettings({ jsonEditor: !0, ...Ce })
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openFolderSettings",
												title: r.localize2(8416, "Open Folder Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.isEqualTo("workspace"),
												},
											});
										}
										async run(be, Ce) {
											const Le = be.get(a.$ek),
												Fe = be.get(U.$7Z),
												Oe = await Le.executeCommand(s.$qRb);
											Oe &&
												((Ce = ye(Ce)),
												await Fe.openFolderSettings({
													folderUri: Oe.uri,
													...Ce,
												}));
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openFolderSettingsFile",
												title: r.localize2(8417, "Open Folder Settings (JSON)"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.isEqualTo("workspace"),
												},
											});
										}
										async run(be, Ce) {
											const Le = be.get(a.$ek),
												Fe = be.get(U.$7Z),
												Oe = await Le.executeCommand(s.$qRb);
											Oe &&
												((Ce = ye(Ce)),
												await Fe.openFolderSettings({
													folderUri: Oe.uri,
													jsonEditor: !0,
													...Ce,
												}));
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "_workbench.action.openFolderSettings",
												title: r.localize(8393, null),
												category: ae,
												menu: {
													id: u.$XX.ExplorerContext,
													group: "2_workspace",
													order: 20,
													when: h.$Kj.and(S.$DUb, S.$zUb),
												},
											});
										}
										async run(be, Ce) {
											if (C.URI.isUri(Ce))
												await be
													.get(U.$7Z)
													.openFolderSettings({ folderUri: Ce });
											else {
												const Le = be.get(a.$ek),
													Fe = be.get(U.$7Z),
													Oe = await Le.executeCommand(s.$qRb);
												Oe &&
													(await Fe.openFolderSettings({ folderUri: Oe.uri }));
											}
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: ee,
												title: r.localize(8394, null),
												menu: {
													id: u.$XX.MenubarPreferencesMenu,
													group: "3_settings",
													order: 1,
												},
											});
										}
										run(be) {
											const Ce = be.get(N.$IY).activeEditorPane;
											Ce instanceof L.$aEc
												? Ce.focusSearch("@tag:usesOnlineServices")
												: be
														.get(U.$7Z)
														.openSettings({
															jsonEditor: !1,
															query: "@tag:usesOnlineServices",
														});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: _,
												title: r.localize2(
													8418,
													"Show untrusted workspace settings",
												),
											});
										}
										run(be) {
											be.get(U.$7Z).openWorkspaceSettings({
												jsonEditor: !1,
												query: `@tag:${D.$WBc}`,
											});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({ id: Q, title: r.localize(8395, null) });
										}
										run(be) {
											const Ce = be.get(N.$IY).activeEditorPane;
											Ce instanceof L.$aEc
												? Ce.focusSearch("@tag:telemetry")
												: be
														.get(U.$7Z)
														.openSettings({
															jsonEditor: !1,
															query: "@tag:telemetry",
														});
										}
									},
								),
							),
							this.n(),
							this.h.whenInstalledExtensionsRegistered().then(() => {
								const be = this.a.remoteAuthority,
									Ce = this.g.getHostLabel(w.Schemas.vscodeRemote, be) || be;
								this.D(
									(0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: "workbench.action.openRemoteSettings",
													title: r.localize2(
														8419,
														"Open Remote Settings ({0})",
														Ce,
													),
													category: ae,
													menu: {
														id: u.$XX.CommandPalette,
														when: v.$CPb.notEqualsTo(""),
													},
												});
											}
											run(Le, Fe) {
												return (
													(Fe = ye(Fe)), Le.get(U.$7Z).openRemoteSettings(Fe)
												);
											}
										},
									),
								),
									this.D(
										(0, u.$4X)(
											class extends u.$3X {
												constructor() {
													super({
														id: "workbench.action.openRemoteSettingsFile",
														title: r.localize2(
															8420,
															"Open Remote Settings (JSON) ({0})",
															Ce,
														),
														category: ae,
														menu: {
															id: u.$XX.CommandPalette,
															when: v.$CPb.notEqualsTo(""),
														},
													});
												}
												run(Le, Fe) {
													return (
														(Fe = ye(Fe)),
														Le.get(U.$7Z).openRemoteSettings({
															jsonEditor: !0,
															...Fe,
														})
													);
												}
											},
										),
									);
							});
					}
					n() {
						function ge(Ce) {
							const Le = Ce.get(N.$IY).activeEditorPane;
							return Le instanceof L.$aEc ? Le : null;
						}
						function be(Ce) {
							ge(Ce)?.focusSearch();
						}
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: G,
											precondition: D.$lBc,
											keybinding: {
												primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
												weight: p.KeybindingWeight.EditorContrib,
												when: null,
											},
											category: ae,
											f1: !0,
											title: r.localize2(8421, "Focus Settings Search"),
										});
									}
									run(Ce) {
										be(Ce);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$iBc,
												precondition: D.$lBc,
												keybinding: {
													primary: t.KeyCode.Escape,
													weight: p.KeybindingWeight.EditorContrib,
													when: D.$nBc,
												},
												category: ae,
												f1: !0,
												title: r.localize2(
													8422,
													"Clear Settings Search Results",
												),
											});
										}
										run(Ce) {
											ge(Ce)?.clearSearchResults();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: K,
												precondition: h.$Kj.and(
													D.$nBc,
													m.$YCb.Visible.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.DownArrow,
													weight: p.KeybindingWeight.EditorContrib,
													when: null,
												},
												title: r.localize(8396, null),
											});
										}
										run(Ce, Le) {
											ge(Ce)?.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: J,
												precondition: h.$Kj.and(
													D.$nBc,
													m.$YCb.Visible.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.DownArrow,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												title: r.localize(8397, null),
											});
										}
										run(Ce, Le) {
											ge(Ce)?.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: W,
												precondition: h.$Kj.and(D.$lBc, D.$oBc),
												keybinding: {
													primary: t.KeyCode.Enter,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												title: r.localize(8398, null),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: X,
												precondition: D.$lBc,
												f1: !0,
												keybinding: [
													{
														primary: t.KeyCode.LeftArrow,
														weight: p.KeybindingWeight.WorkbenchContrib,
														when: D.$pBc,
													},
												],
												category: ae,
												title: r.localize2(
													8423,
													"Focus Settings Table of Contents",
												),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.focusTOC();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: Y,
												precondition: h.$Kj.and(D.$lBc, D.$pBc),
												keybinding: {
													primary: t.KeyCode.Enter,
													weight: p.KeybindingWeight.WorkbenchContrib,
												},
												title: r.localize(8399, null),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											if (!(Le instanceof L.$aEc)) return;
											Le.getContainer()?.ownerDocument.activeElement?.classList.contains(
												"monaco-list",
											) && Le.focusSettings(!0);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$jBc,
												precondition: D.$lBc,
												keybinding: {
													primary: t.KeyMod.Shift | t.KeyCode.F9,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												f1: !0,
												category: ae,
												title: r.localize2(8424, "Show Setting Context Menu"),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.showContextMenu();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: ie,
												precondition: h.$Kj.and(
													D.$lBc,
													D.$nBc.toNegated(),
													D.$mBc.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.Escape,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												f1: !0,
												category: ae,
												title: r.localize2(8425, "Move Focus Up One Level"),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc &&
												(Le.currentFocusContext ===
												L.SettingsFocusContext.SettingControl
													? Le.focusSettings()
													: Le.currentFocusContext ===
															L.SettingsFocusContext.SettingTree
														? Le.focusTOC()
														: Le.currentFocusContext ===
																L.SettingsFocusContext.TableOfContents &&
															Le.focusSearch());
										}
									},
								),
							);
					}
					q() {
						const ge = this,
							be = r.localize2(8426, "Preferences"),
							Ce = "workbench.action.openGlobalKeybindings";
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: Ce,
											title: r.localize2(8427, "Open Keyboard Shortcuts"),
											shortTitle: r.localize(8400, null),
											category: be,
											icon: k.$_Ac,
											keybinding: {
												when: null,
												weight: p.KeybindingWeight.WorkbenchContrib,
												primary: (0, t.$os)(
													t.$ps,
													t.KeyMod.CtrlCmd | t.KeyCode.KeyS,
												),
												mac: {
													primary: (0, t.$os)(
														t.$qs,
														t.KeyMod.CtrlCmd | t.KeyCode.KeyS,
													),
												},
											},
											menu: [
												{ id: u.$XX.CommandPalette },
												{
													id: u.$XX.EditorTitle,
													when: v.$BQb.Resource.isEqualTo(
														ge.b.currentProfile.keybindingsResource.toString(),
													),
													group: "navigation",
													order: 1,
												},
												{
													id: u.$XX.GlobalActivity,
													group: "2_configuration",
													order: 4,
												},
											],
										});
									}
									run(Le, Fe) {
										const Oe = typeof Fe == "string" ? Fe : void 0;
										return Le.get(U.$7Z).openGlobalKeybindingSettings(!1, {
											query: Oe,
										});
									}
								},
							),
						),
							this.D(
								u.$ZX.appendMenuItem(u.$XX.MenubarPreferencesMenu, {
									command: { id: Ce, title: r.localize(8401, null) },
									group: "2_configuration",
									order: 4,
								}),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openDefaultKeybindingsFile",
												title: r.localize2(
													8428,
													"Open Default Keyboard Shortcuts (JSON)",
												),
												category: be,
												menu: { id: u.$XX.CommandPalette },
											});
										}
										run(Le) {
											return Le.get(U.$7Z).openDefaultKeybindingsFile();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalKeybindingsFile",
												title: r.localize2(
													8429,
													"Open Keyboard Shortcuts (JSON)",
												),
												category: be,
												icon: k.$_Ac,
												menu: [
													{ id: u.$XX.CommandPalette },
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "navigation",
													},
												],
											});
										}
										run(Le) {
											return Le.get(U.$7Z).openGlobalKeybindingSettings(!0);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$LBc,
												title: r.localize2(8430, "Show System Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:system");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$NBc,
												title: r.localize2(8431, "Show Extension Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:extension");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$MBc,
												title: r.localize2(8432, "Show User Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:user");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$vBc,
												title: r.localize(8402, null),
												keybinding: {
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: h.$Kj.and(D.$qBc, D.$rBc),
													primary: t.KeyCode.Escape,
												},
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.clearSearchResults();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$wBc,
												title: r.localize(8403, null),
												category: be,
												menu: [
													{ id: u.$XX.CommandPalette, when: h.$Kj.and(D.$qBc) },
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc &&
												Fe.clearKeyboardShortcutSearchHistory();
										}
									},
								),
							),
							this.r();
					}
					r() {
						const ge = this;
						p.$TX.registerCommandAndKeybindingRule({
							id: D.$zBc,
							weight: p.KeybindingWeight.WorkbenchContrib,
							when: h.$Kj.and(D.$qBc, D.$sBc, D.$tBc.toNegated()),
							primary: t.KeyCode.Enter,
							handler: (Le, Fe) => {
								const Oe = Le.get(N.$IY).activeEditorPane;
								Oe instanceof I.$oCc &&
									Oe.defineKeybinding(Oe.activeKeybindingEntry, !1);
							},
						}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$ABc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyA),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyA),
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.defineKeybinding(Oe.activeKeybindingEntry, !0);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$BBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyE),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyE),
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.activeKeybindingEntry.keybindingItem.keybinding &&
										Oe.defineWhenExpression(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$EBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc, c.$bMb.toNegated()),
								primary: t.KeyCode.Delete,
								mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.removeKeybinding(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$FBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.resetKeybinding(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$uBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.focusSearch();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$xBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$rBc),
								primary: t.KeyMod.Alt | t.KeyCode.KeyK,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyK,
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.recordSearchKeys();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$yBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc),
								primary: t.KeyMod.Alt | t.KeyCode.KeyP,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyP,
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.toggleSortByPrecedence();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$JBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.showSimilarKeybindings(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$GBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc, D.$tBc.negate()),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybinding(Oe.activeKeybindingEntry));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$HBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybindingCommand(Oe.activeKeybindingEntry));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$IBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybindingCommandTitle(
											Oe.activeKeybindingEntry,
										));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$KBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$rBc),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.focusKeybindings();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$DBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$tBc, m.$YCb.Visible.toNegated()),
								primary: t.KeyCode.Escape,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.rejectWhenExpression(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$CBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$tBc, m.$YCb.Visible.toNegated()),
								primary: t.KeyCode.Enter,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.acceptWhenExpression(Oe.activeKeybindingEntry);
								},
							});
						const be = this.D(new i.$Zc()),
							Ce = () => {
								be.clear(),
									be.add(
										(0, u.$4X)(
											class extends u.$3X {
												constructor() {
													const Fe = v.$BQb.Resource.isEqualTo(
														ge.b.currentProfile.keybindingsResource.toString(),
													);
													super({
														id: "editor.action.defineKeybinding",
														title: r.localize2(8433, "Define Keybinding"),
														f1: !0,
														precondition: Fe,
														keybinding: {
															weight: p.KeybindingWeight.WorkbenchContrib,
															when: Fe,
															primary: (0, t.$os)(
																t.$ps,
																t.KeyMod.CtrlCmd | t.KeyCode.KeyK,
															),
															mac: {
																primary: (0, t.$os)(
																	t.$qs,
																	t.KeyMod.CtrlCmd | t.KeyCode.KeyK,
																),
															},
														},
														menu: { id: u.$XX.EditorContent, when: Fe },
													});
												}
												async run(Fe) {
													const Oe = Fe.get(N.$IY).activeTextEditorControl;
													(0, H.$0sb)(Oe) &&
														Oe.getContribution(
															U.$8Z,
														)?.showDefineKeybindingWidget();
												}
											},
										),
									);
							};
						Ce(), this.D(this.b.onDidChangeCurrentProfile(() => Ce()));
					}
					s() {
						const ge = "_workbench.openWorkspaceSettingsEditor";
						this.f.getWorkbenchState() === b.WorkbenchState.WORKSPACE &&
							!a.$fk.getCommand(ge) &&
							(a.$fk.registerCommand(ge, () =>
								this.c.openWorkspaceSettings({ jsonEditor: !1 }),
							),
							u.$ZX.appendMenuItem(u.$XX.EditorTitle, {
								command: { id: ge, title: re, icon: k.$_Ac },
								when: h.$Kj.and(
									v.$BQb.Resource.isEqualTo(
										this.c.workspaceSettingsResource.toString(),
									),
									v.$wPb.isEqualTo("workspace"),
									h.$Kj.not("isInDiffEditor"),
								),
								group: "navigation",
								order: 1,
							})),
							this.t();
					}
					t() {
						for (const ge of this.f.getWorkspace().folders) {
							const be = `_workbench.openFolderSettings.${ge.uri.toString()}`;
							a.$fk.getCommand(be) ||
								(a.$fk.registerCommand(be, () =>
									this.f.getWorkbenchState() === b.WorkbenchState.FOLDER
										? this.c.openWorkspaceSettings({ jsonEditor: !1 })
										: this.c.openFolderSettings({
												folderUri: ge.uri,
												jsonEditor: !1,
											}),
								),
								u.$ZX.appendMenuItem(u.$XX.EditorTitle, {
									command: { id: be, title: re, icon: k.$_Ac },
									when: h.$Kj.and(
										v.$BQb.Resource.isEqualTo(
											this.c.getFolderSettingsResource(ge.uri).toString(),
										),
										h.$Kj.not("isInDiffEditor"),
									),
									group: "navigation",
									order: 1,
								}));
						}
					}
				};
				ue = Ne(
					[
						j(0, A.$r8),
						j(1, F.$P8),
						j(2, U.$7Z),
						j(3, b.$Vi),
						j(4, o.$3N),
						j(5, R.$q2),
						j(6, x.$Xl),
					],
					ue,
				);
				let fe = class extends i.$1c {
					constructor(ge, be) {
						super(), (this.a = ge), (this.b = be), this.c();
					}
					c() {
						const ge = this.D(new i.$2c()),
							be = h.$Kj.and(
								h.$Kj.or(
									v.$BQb.Resource.isEqualTo(
										this.a.currentProfile.settingsResource.toString(),
									),
									v.$BQb.Resource.isEqualTo(
										this.b.defaultProfile.settingsResource.toString(),
									),
								),
								h.$Kj.not("isInDiffEditor"),
							),
							Ce = () => {
								(ge.value = void 0),
									(ge.value = (0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: "_workbench.openUserSettingsEditor",
													title: re,
													icon: k.$_Ac,
													menu: [
														{
															id: u.$XX.EditorTitle,
															when: be,
															group: "navigation",
															order: 1,
														},
													],
												});
											}
											run(Fe, Oe) {
												return (
													(Oe = ye(Oe)),
													Fe.get(U.$7Z).openUserSettings({
														jsonEditor: !1,
														...Oe,
													})
												);
											}
										},
									));
							};
						Ce(),
							this.D(
								this.a.onDidChangeCurrentProfile(() => {
									Ce();
								}),
							);
						const Le = h.$Kj.and(D.$lBc, D.$mBc.toNegated());
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: ne,
											title: r.localize2(8434, "Open Settings (JSON)"),
											icon: k.$_Ac,
											menu: [
												{
													id: u.$XX.EditorTitle,
													when: Le,
													group: "navigation",
													order: 1,
												},
											],
										});
									}
									run(Fe) {
										const Oe = Fe.get(N.$IY).activeEditorPane;
										return Oe instanceof L.$aEc
											? Oe.switchToSettingsFile()
											: null;
									}
								},
							),
						);
					}
				};
				fe = Ne([j(0, F.$P8), j(1, x.$Xl)], fe);
				const me = f.$Io.as(y.Extensions.Workbench);
				(0, y.$s6)(ue.ID, ue, y.WorkbenchPhase.BlockStartup),
					(0, y.$s6)(M.$cEc.ID, M.$cEc, y.WorkbenchPhase.BlockStartup),
					me.registerWorkbenchContribution(fe, O.LifecyclePhase.Restored),
					(0, d.$qtb)(
						P.$sCc.ID,
						P.$sCc,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					u.$ZX.appendMenuItem(u.$XX.MenubarFileMenu, {
						title: r.localize(8404, null),
						submenu: u.$XX.MenubarPreferencesMenu,
						group: "5_autosave",
						order: 2,
						when: c.$8Lb.toNegated(),
					});
			},
		),
		define(
			de[4357],
			he([1, 0, 65, 48, 11, 1780, 1369, 41, 69, 33, 41]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZAc = void 0);
				class a extends w.$3X {
					constructor() {
						super({ id: E.$8zc, title: "Accept Suggestion" }), (this.a = []);
					}
					run(c, n) {
						n();
					}
				}
				(e.$ZAc = a),
					(0, w.$4X)(a),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "aiEditorBox.goToDefinition",
									title: "Go to Definition",
								});
							}
							async run(c, n) {
								const g = c.get(t.$dtb),
									p = c.get(m.$k3),
									o = c.get(d.$7rb),
									f = g.getActiveCodeEditor();
								if (f instanceof C.$gAc) {
									const b = f.getModel(),
										s = b?.getDecorationRange(n.decorationId);
									if (s && b) {
										const l = new i.$hL(s.startLineNumber, s.startColumn),
											y = p.definitionProvider.ordered(b);
										for (const $ of y)
											if ($.provideDefinition) {
												const v = await $.provideDefinition(
													b,
													l,
													r.CancellationToken.None,
												);
												if (v) {
													let S;
													if ((Array.isArray(v) ? (S = v[0]) : (S = v), S)) {
														if ("uri" in S) {
															const I = (0, u.$8rb)(S.uri, {
																startLineNumber: S.range.startLineNumber,
																startColumn: S.range.startColumn,
																endLineNumber: S.range.endLineNumber,
																endColumn: S.range.endColumn,
															});
															o.open(I);
														} else
															console.log(
																"[ian] definition is not a Location",
																S,
															);
														break;
													}
												}
											}
									}
								}
							}
						},
					);
			},
		),
		