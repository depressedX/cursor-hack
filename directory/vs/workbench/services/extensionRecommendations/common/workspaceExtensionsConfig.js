import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../nls.js';
import '../../configuration/common/jsonEditing.js';
import '../../../../base/common/map.js';
define(
			de[828],
			he([1, 0, 24, 6, 187, 3, 252, 22, 20, 5, 25, 63, 67, 61, 4, 423, 59]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*event*/,
 w /*json*/,
 E /*lifecycle*/,
 C /*getIconClasses*/,
 d /*files*/,
 m /*extensions*/,
 r /*instantiation*/,
 u /*workspace*/,
 a /*quickInput*/,
 h /*model*/,
 c /*language*/,
 n /*nls*/,
 g /*jsonEditing*/,
 p /*map*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ERb = e.$DRb = e.$CRb = void 0),
					(e.$CRb = ".vscode/extensions.json"),
					(e.$DRb = (0, r.$Mi)("IWorkspaceExtensionsConfigService"));
				let o = class extends E.$1c {
					constructor(b, s, l, y, $, v) {
						super(),
							(this.b = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeExtensionsConfigs = this.a.event),
							this.D(b.onDidChangeWorkspaceFolders((S) => this.a.fire())),
							this.D(
								s.onDidFilesChange((S) => {
									const I = b.getWorkspace();
									((I.configuration && S.affects(I.configuration)) ||
										I.folders.some((T) => S.affects(T.toResource(e.$CRb)))) &&
										this.a.fire();
								}),
							);
					}
					async getExtensionsConfigs() {
						const b = this.b.getWorkspace(),
							s = [],
							l = b.configuration ? await this.w(b.configuration) : void 0;
						return (
							l && s.push(l),
							s.push(...(await Promise.all(b.folders.map((y) => this.y(y))))),
							s
						);
					}
					async getRecommendations() {
						const b = await this.getExtensionsConfigs();
						return (0, t.$Qb)(
							b.flatMap((s) =>
								s.recommendations
									? s.recommendations.map((l) => l.toLowerCase())
									: [],
							),
						);
					}
					async getUnwantedRecommendations() {
						const b = await this.getExtensionsConfigs();
						return (0, t.$Qb)(
							b.flatMap((s) =>
								s.unwantedRecommendations
									? s.unwantedRecommendations.map((l) => l.toLowerCase())
									: [],
							),
						);
					}
					async toggleRecommendation(b) {
						b = b.toLowerCase();
						const s = this.b.getWorkspace(),
							l = s.configuration ? await this.w(s.configuration) : void 0,
							y = new p.$Gc();
						await Promise.all(
							s.folders.map(async (T) => {
								const P = await this.y(T);
								y.set(T.uri, P);
							}),
						);
						const $ =
								l && l.recommendations?.some((T) => T.toLowerCase() === b),
							v = s.folders.filter((T) =>
								y
									.get(T.uri)
									?.recommendations?.some((P) => P.toLowerCase() === b),
							),
							S = $ || v.length > 0,
							I = S
								? await this.u(v, $ ? s : void 0, (0, n.localize)(12319, null))
								: await this.u(
										s.folders,
										s.configuration ? s : void 0,
										(0, n.localize)(12320, null),
									);
						for (const T of I)
							(0, u.$4i)(T)
								? await this.q(b, T, l, !S)
								: await this.n(b, T, y.get(T.uri), !S);
					}
					async toggleUnwantedRecommendation(b) {
						const s = this.b.getWorkspace(),
							l = s.configuration ? await this.w(s.configuration) : void 0,
							y = new p.$Gc();
						await Promise.all(
							s.folders.map(async (T) => {
								const P = await this.y(T);
								y.set(T.uri, P);
							}),
						);
						const $ = l && l.unwantedRecommendations?.some((T) => T === b),
							v = s.folders.filter((T) =>
								y.get(T.uri)?.unwantedRecommendations?.some((P) => P === b),
							),
							S = $ || v.length > 0,
							I = S
								? await this.u(v, $ ? s : void 0, (0, n.localize)(12321, null))
								: await this.u(
										s.folders,
										s.configuration ? s : void 0,
										(0, n.localize)(12322, null),
									);
						for (const T of I)
							(0, u.$4i)(T)
								? await this.t(b, T, l, !S)
								: await this.s(b, T, y.get(T.uri), !S);
					}
					async n(b, s, l, y) {
						const $ = [];
						if (y) {
							Array.isArray(l.recommendations)
								? $.push({ path: ["recommendations", -1], value: b })
								: $.push({ path: ["recommendations"], value: [b] });
							const v = this.C(
								["unwantedRecommendations"],
								l.unwantedRecommendations,
								b,
							);
							v && $.push(v);
						} else if (l.recommendations) {
							const v = this.C(["recommendations"], l.recommendations, b);
							v && $.push(v);
						}
						if ($.length) return this.m.write(s.toResource(e.$CRb), $, !0);
					}
					async q(b, s, l, y) {
						const $ = [];
						if (l) {
							if (y) {
								const v = ["extensions", "recommendations"];
								Array.isArray(l.recommendations)
									? $.push({ path: [...v, -1], value: b })
									: $.push({ path: v, value: [b] });
								const S = this.C(
									["extensions", "unwantedRecommendations"],
									l.unwantedRecommendations,
									b,
								);
								S && $.push(S);
							} else if (l.recommendations) {
								const v = this.C(
									["extensions", "recommendations"],
									l.recommendations,
									b,
								);
								v && $.push(v);
							}
						} else
							y &&
								$.push({
									path: ["extensions"],
									value: { recommendations: [b] },
								});
						if ($.length) return this.m.write(s.configuration, $, !0);
					}
					async s(b, s, l, y) {
						const $ = [];
						if (y) {
							const v = ["unwantedRecommendations"];
							Array.isArray(l.unwantedRecommendations)
								? $.push({ path: [...v, -1], value: b })
								: $.push({ path: v, value: [b] });
							const S = this.C(["recommendations"], l.recommendations, b);
							S && $.push(S);
						} else if (l.unwantedRecommendations) {
							const v = this.C(
								["unwantedRecommendations"],
								l.unwantedRecommendations,
								b,
							);
							v && $.push(v);
						}
						if ($.length) return this.m.write(s.toResource(e.$CRb), $, !0);
					}
					async t(b, s, l, y) {
						const $ = [];
						if (l) {
							if (y) {
								const v = ["extensions", "unwantedRecommendations"];
								Array.isArray(l.recommendations)
									? $.push({ path: [...v, -1], value: b })
									: $.push({ path: v, value: [b] });
								const S = this.C(
									["extensions", "recommendations"],
									l.recommendations,
									b,
								);
								S && $.push(S);
							} else if (l.unwantedRecommendations) {
								const v = this.C(
									["extensions", "unwantedRecommendations"],
									l.unwantedRecommendations,
									b,
								);
								v && $.push(v);
							}
						} else
							y &&
								$.push({
									path: ["extensions"],
									value: { unwantedRecommendations: [b] },
								});
						if ($.length) return this.m.write(s.configuration, $, !0);
					}
					async u(b, s, l) {
						const y = s ? [...b, s] : [...b];
						if (y.length === 1) return y;
						const $ = b.map((S) => ({
							label: S.name,
							description: (0, n.localize)(12323, null),
							workspaceOrFolder: S,
							iconClasses: (0, C.$BDb)(
								this.h,
								this.j,
								S.uri,
								d.FileKind.ROOT_FOLDER,
							),
						}));
						return (
							s &&
								($.push({ type: "separator" }),
								$.push({
									label: (0, n.localize)(12324, null),
									workspaceOrFolder: s,
								})),
							(
								(await this.g.pick($, { placeHolder: l, canPickMany: !0 })) ||
								[]
							).map((S) => S.workspaceOrFolder)
						);
					}
					async w(b) {
						try {
							const s = await this.f.readFile(b),
								l = (0, w.$do)(s.value.toString()).extensions;
							return l ? this.z(l) : void 0;
						} catch {}
					}
					async y(b) {
						try {
							const s = await this.f.readFile(b.toResource(e.$CRb)),
								l = (0, w.$do)(s.value.toString());
							return this.z(l);
						} catch {}
						return {};
					}
					z(b) {
						return {
							recommendations: (0, t.$Qb)(
								(b.recommendations || []).map((s) => s.toLowerCase()),
							),
							unwantedRecommendations: (0, t.$Qb)(
								(b.unwantedRecommendations || []).map((s) => s.toLowerCase()),
							),
						};
					}
					C(b, s, l) {
						const y = s?.indexOf(l);
						if (y !== void 0 && y !== -1)
							return { path: [...b, y], value: void 0 };
					}
				};
				(e.$ERb = o),
					(e.$ERb = o =
						Ne(
							[
								j(0, u.$Vi),
								j(1, d.$ll),
								j(2, a.$DJ),
								j(3, h.$QO),
								j(4, c.$nM),
								j(5, g.$$Qb),
							],
							o,
						)),
					(0, m.$lK)(e.$DRb, o, m.InstantiationType.Delayed);
			},
		),
		