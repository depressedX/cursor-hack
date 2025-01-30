import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/codicons.js';
import '../../../base/common/codiconsUtil.js';
import '../../../base/common/themables.js';
import '../../../base/common/event.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../jsonschemas/common/jsonContributionRegistry.js';
import '../../registry/common/platform.js';
define(
			de[79],
			he([1, 0, 15, 14, 903, 26, 6, 28, 9, 4, 250, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*codicons*/,
 w /*codiconsUtil*/,
 E /*themables*/,
 C /*event*/,
 d /*types*/,
 m /*uri*/,
 r /*nls*/,
 u /*jsonContributionRegistry*/,
 a /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fP =
						e.$eP =
						e.$dP =
						e.$cP =
						e.$bP =
						e.$aP =
						e.IconFontDefinition =
						e.IconContribution =
						e.$0O =
							void 0),
					(e.$$O = p),
					(e.$_O = o),
					(a = mt(a)),
					(e.$0O = { IconContribution: "base.contributions.icons" });
				var h;
				(function (l) {
					function y($, v) {
						let S = $.defaults;
						for (; E.ThemeIcon.isThemeIcon(S); ) {
							const I = g.getIcon(S.id);
							if (!I) return;
							S = I.defaults;
						}
						return S;
					}
					l.getDefinition = y;
				})(h || (e.IconContribution = h = {}));
				var c;
				(function (l) {
					function y(v) {
						return {
							weight: v.weight,
							style: v.style,
							src: v.src.map((S) => ({
								format: S.format,
								location: S.location.toString(),
							})),
						};
					}
					l.toJSONObject = y;
					function $(v) {
						const S = (I) => ((0, d.$lg)(I) ? I : void 0);
						if (
							v &&
							Array.isArray(v.src) &&
							v.src.every((I) => (0, d.$lg)(I.format) && (0, d.$lg)(I.location))
						)
							return {
								weight: S(v.weight),
								style: S(v.style),
								src: v.src.map((I) => ({
									format: I.format,
									location: m.URI.parse(I.location),
								})),
							};
					}
					l.fromJSONObject = $;
				})(c || (e.IconFontDefinition = c = {}));
				class n {
					constructor() {
						(this.a = new C.$re()),
							(this.onDidChange = this.a.event),
							(this.d = {
								definitions: {
									icons: {
										type: "object",
										properties: {
											fontId: {
												type: "string",
												description: (0, r.localize)(2368, null),
											},
											fontCharacter: {
												type: "string",
												description: (0, r.localize)(2369, null),
											},
										},
										additionalProperties: !1,
										defaultSnippets: [{ body: { fontCharacter: "\\\\e030" } }],
									},
								},
								type: "object",
								properties: {},
							}),
							(this.e = {
								type: "string",
								pattern: `^${E.ThemeIcon.iconNameExpression}$`,
								enum: [],
								enumDescriptions: [],
							}),
							(this.b = {}),
							(this.f = {});
					}
					registerIcon(y, $, v, S) {
						const I = this.b[y];
						if (I) {
							if (v && !I.description) {
								(I.description = v),
									(this.d.properties[y].markdownDescription = `${v} $(${y})`);
								const k = this.e.enum.indexOf(y);
								k !== -1 && (this.e.enumDescriptions[k] = v), this.a.fire();
							}
							return I;
						}
						const T = {
							id: y,
							description: v,
							defaults: $,
							deprecationMessage: S,
						};
						this.b[y] = T;
						const P = { $ref: "#/definitions/icons" };
						return (
							S && (P.deprecationMessage = S),
							v && (P.markdownDescription = `${v}: $(${y})`),
							(this.d.properties[y] = P),
							this.e.enum.push(y),
							this.e.enumDescriptions.push(v || ""),
							this.a.fire(),
							{ id: y }
						);
					}
					deregisterIcon(y) {
						delete this.b[y], delete this.d.properties[y];
						const $ = this.e.enum.indexOf(y);
						$ !== -1 &&
							(this.e.enum.splice($, 1), this.e.enumDescriptions.splice($, 1)),
							this.a.fire();
					}
					getIcons() {
						return Object.keys(this.b).map((y) => this.b[y]);
					}
					getIcon(y) {
						return this.b[y];
					}
					getIconSchema() {
						return this.d;
					}
					getIconReferenceSchema() {
						return this.e;
					}
					registerIconFont(y, $) {
						const v = this.f[y];
						return v || ((this.f[y] = $), this.a.fire(), $);
					}
					deregisterIconFont(y) {
						delete this.f[y];
					}
					getIconFont(y) {
						return this.f[y];
					}
					toString() {
						const y = (I, T) => I.id.localeCompare(T.id),
							$ = (I) => {
								for (; E.ThemeIcon.isThemeIcon(I.defaults); )
									I = this.b[I.defaults.id];
								return `codicon codicon-${I ? I.id : ""}`;
							},
							v = [];
						v.push(
							"| preview     | identifier                        | default codicon ID                | description",
						),
							v.push(
								"| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |",
							);
						const S = Object.keys(this.b).map((I) => this.b[I]);
						for (const I of S.filter((T) => !!T.description).sort(y))
							v.push(
								`|<i class="${$(I)}"></i>|${I.id}|${E.ThemeIcon.isThemeIcon(I.defaults) ? I.defaults.id : I.id}|${I.description || ""}|`,
							);
						v.push("| preview     | identifier                        "),
							v.push("| ----------- | --------------------------------- |");
						for (const I of S.filter(
							(T) => !E.ThemeIcon.isThemeIcon(T.defaults),
						).sort(y))
							v.push(`|<i class="${$(I)}"></i>|${I.id}|`);
						return v.join(`
`);
					}
				}
				const g = new n();
				a.$Io.add(e.$0O.IconContribution, g);
				function p(l, y, $, v) {
					return g.registerIcon(l, y, $, v);
				}
				function o() {
					return g;
				}
				function f() {
					const l = (0, w.$9j)();
					for (const y in l) {
						const $ = "\\" + l[y].toString(16);
						g.registerIcon(y, { fontCharacter: $ });
					}
				}
				f(), (e.$aP = "vscode://schemas/icons");
				const b = a.$Io.as(u.$Jo.JSONContribution);
				b.registerSchema(e.$aP, g.getIconSchema());
				const s = new t.$Yh(() => b.notifySchemaChanged(e.$aP), 200);
				g.onDidChange(() => {
					s.isScheduled() || s.schedule();
				}),
					(e.$bP = p("widget-close", i.$ak.close, (0, r.localize)(2370, null))),
					(e.$cP = p(
						"goto-previous-location",
						i.$ak.arrowUp,
						(0, r.localize)(2371, null),
					)),
					(e.$dP = p(
						"goto-next-location",
						i.$ak.arrowDown,
						(0, r.localize)(2372, null),
					)),
					(e.$eP = E.ThemeIcon.modify(i.$ak.sync, "spin")),
					(e.$fP = E.ThemeIcon.modify(i.$ak.loading, "spin"));
			},
		),
		