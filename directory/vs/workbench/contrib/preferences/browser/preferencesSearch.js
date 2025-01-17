import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/filters.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../common/preferences.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../services/aiRelatedInformation/common/aiRelatedInformation.js';
import '../../../../base/common/tfIdf.js';
import '../../../services/preferences/common/preferencesModels.js';
define(
			de[3539],
			he([
				1, 0, 131, 24, 37, 132, 5, 3, 468, 119, 157, 33, 109, 10, 20, 1013,
				1505, 838,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f, b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kEc = e.$jEc = e.$iEc = void 0),
					(w = mt(w));
				let s = class extends d.$1c {
					constructor(k, L, D, M) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.n = M),
							(this.c = this.j.getInstalled(h.ExtensionType.User).then((N) =>
								N.filter((A) => this.n.isEnabled(A))
									.filter(
										(A) =>
											A.manifest &&
											A.manifest.contributes &&
											A.manifest.contributes.configuration,
									)
									.filter((A) => !!A.identifier.uuid),
							));
					}
					get q() {
						return this.h.getValue().workbench.settings
							.enableNaturalLanguageSearch;
					}
					getRemoteSearchProvider(k) {
						if (this.q)
							return (
								(this.f ??= this.g.createInstance(T)),
								this.f.setFilter(k),
								this.f
							);
					}
					getLocalSearchProvider(k) {
						return this.g.createInstance(y, k);
					}
				};
				(e.$iEc = s),
					(e.$iEc = s =
						Ne([j(0, C.$Li), j(1, c.$gj), j(2, r.$Hp), j(3, u.$IQb)], s));
				function l(P) {
					return P.replace(/[":]/g, " ").replace(/  /g, " ").trim();
				}
				let y = class {
					static {
						f = this;
					}
					static {
						this.EXACT_MATCH_SCORE = 1e4;
					}
					static {
						this.START_SCORE = 1e3;
					}
					constructor(k, L) {
						(this.c = k), (this.d = L), (this.c = l(this.c));
					}
					searchModel(k, L) {
						if (!this.c) return Promise.resolve(null);
						let D = f.START_SCORE;
						const M = (R) => {
								const { matches: O, matchType: B } = new $(
										this.c,
										R,
										!0,
										!0,
										(z, F) => k.findValueMatches(z, F),
										this.d,
									),
									U = this.c === R.key ? f.EXACT_MATCH_SCORE : D--;
								return O.length ? { matches: O, matchType: B, score: U } : null;
							},
							N = k.filterSettings(this.c, this.e(this.c), M),
							A = N.find((R) => R.score === f.EXACT_MATCH_SCORE);
						return A
							? Promise.resolve({ filterMatches: [A], exactMatch: !0 })
							: Promise.resolve({ filterMatches: N });
					}
					e(k) {
						const L = w.$xf(k, !1, { global: !0 });
						return (D) => D.id !== "defaultOverrides" && L.test(D.title);
					}
				};
				(e.$jEc = y), (e.$jEc = y = f = Ne([j(1, c.$gj)], y));
				let $ = class {
					constructor(k, L, D, M, N, A) {
						(this.c = M),
							(this.d = A),
							(this.matchType = t.SettingMatchType.None),
							(this.matches = (0, i.$Qb)(
								this.e(k, L),
								(R) =>
									`${R.startLineNumber}_${R.startColumn}_${R.endLineNumber}_${R.endColumn}_`,
							));
					}
					e(k, L) {
						return this.g(k, L);
					}
					f(k) {
						return k
							.replace(/[-._]/g, " ")
							.replace(/([a-z]+)([A-Z])/g, "$1 $2")
							.replace(/([A-Za-z]+)(\d+)/g, "$1 $2")
							.replace(/(\d+)([A-Za-z]+)/g, "$1 $2")
							.toLowerCase();
					}
					g(k, L) {
						const D = new Map(),
							M = new Map(),
							N = new Map(),
							A = new Set(k.split(" ")),
							R = this.f(L.key);
						for (const F of A) {
							const x = (0, E.$Yk)(F, R, !0);
							x?.length &&
								M.set(
									F,
									x.map((H) => this.h(L, H)),
								);
						}
						M.size === A.size
							? (this.matchType |= t.SettingMatchType.KeyMatch)
							: M.clear();
						const O = (0, E.$Uk)(k, L.key);
						if (
							(O?.length &&
								(M.set(
									L.key,
									O.map((F) => this.h(L, F)),
								),
								(this.matchType |= t.SettingMatchType.KeyMatch)),
							L.overrides?.length &&
								this.matchType & t.SettingMatchType.KeyMatch)
						)
							return (
								(this.matchType = t.SettingMatchType.LanguageTagSettingMatch),
								[...(M.size ? Array.from(M.values()).flat() : [])]
							);
						if (this.c) {
							for (const F of A)
								for (let x = 0; x < L.description.length; x++) {
									const H = (0, E.$Uk)(F, L.description[x]);
									H?.length &&
										D.set(
											F,
											H.map((q) => this.i(L, q, x)),
										);
								}
							D.size === A.size
								? (this.matchType |= t.SettingMatchType.DescriptionOrValueMatch)
								: D.clear();
						}
						if (L.enum?.length) {
							for (const F of L.enum)
								if (typeof F == "string") {
									N.clear();
									for (const x of A) {
										const H = (0, E.$Uk)(x, F);
										H?.length &&
											N.set(
												x,
												H.map((q) => this.j(L, q)),
											);
									}
									if (N.size === A.size) {
										this.matchType |=
											t.SettingMatchType.DescriptionOrValueMatch;
										break;
									} else N.clear();
								}
						} else {
							const F = this.d.getValue(L.key);
							if (typeof F == "string") {
								for (const x of A) {
									const H = (0, E.$Uk)(x, F);
									H?.length &&
										N.set(
											x,
											H.map((q) => this.j(L, q)),
										);
								}
								N.size === A.size
									? (this.matchType |=
											t.SettingMatchType.DescriptionOrValueMatch)
									: N.clear();
							}
						}
						const B = D.size ? Array.from(D.values()).flat() : [],
							U = M.size ? Array.from(M.values()).flat() : [],
							z = N.size ? Array.from(N.values()).flat() : [];
						return [...B, ...U, ...z];
					}
					h(k, L) {
						return {
							startLineNumber: k.keyRange.startLineNumber,
							startColumn: k.keyRange.startColumn + L.start,
							endLineNumber: k.keyRange.startLineNumber,
							endColumn: k.keyRange.startColumn + L.end,
						};
					}
					i(k, L, D) {
						const M = k.descriptionRanges[D];
						return M
							? {
									startLineNumber: M.startLineNumber,
									startColumn: M.startColumn + L.start,
									endLineNumber: M.endLineNumber,
									endColumn: M.startColumn + L.end,
								}
							: o.$WZ;
					}
					j(k, L) {
						return {
							startLineNumber: k.valueRange.startLineNumber,
							startColumn: k.valueRange.startColumn + L.start + 1,
							endLineNumber: k.valueRange.startLineNumber,
							endColumn: k.valueRange.startColumn + L.end + 1,
						};
					}
				};
				(e.$kEc = $), (e.$kEc = $ = Ne([j(5, c.$gj)], $));
				class v {
					constructor(k) {
						(this.f = k), (this.c = []), (this.d = {});
					}
					updateModel(k) {
						k !== this.e && ((this.e = k), this.g());
					}
					g() {
						if (
							((this.c = []), (this.d = {}), !(!this.e || !this.f.isEnabled()))
						) {
							for (const k of this.e.settingsGroups)
								if (k.id !== "mostCommonlyUsed")
									for (const L of k.sections)
										for (const D of L.settings)
											this.c.push(D.key), (this.d[D.key] = D);
						}
					}
					getSettingKeys() {
						return this.c;
					}
					getSettingsRecord() {
						return this.d;
					}
				}
				let S = class {
					static {
						b = this;
					}
					static {
						this.c = 0.73;
					}
					static {
						this.d = 5;
					}
					constructor(k) {
						(this.g = k), (this.f = ""), (this.e = new v(k));
					}
					setFilter(k) {
						this.f = l(k);
					}
					async searchModel(k, L) {
						return !this.f || !this.g.isEnabled()
							? null
							: (this.e.updateModel(k), { filterMatches: await this.h(L) });
					}
					async h(k) {
						const L = this.e.getSettingsRecord(),
							D = [],
							M = await this.g.getRelatedInformation(
								this.f,
								[g.RelatedInformationType.SettingInformation],
								k ?? a.CancellationToken.None,
							);
						M.sort((N, A) => A.weight - N.weight);
						for (const N of M) {
							if (N.weight < b.c || D.length === b.d) break;
							const A = N.setting;
							D.push({
								setting: L[A],
								matches: [L[A].range],
								matchType: t.SettingMatchType.RemoteMatch,
								score: N.weight,
							});
						}
						return D;
					}
				};
				S = b = Ne([j(0, g.$97)], S);
				class I {
					static {
						this.c = 50;
					}
					static {
						this.d = 0.7;
					}
					static {
						this.e = 5;
					}
					constructor() {
						(this.g = ""), (this.h = []), (this.i = {});
					}
					setFilter(k) {
						this.g = l(k);
					}
					keyToLabel(k) {
						return k
							.replace(/[-._]/g, " ")
							.replace(/([a-z]+)([A-Z])/g, "$1 $2")
							.replace(/([A-Za-z]+)(\d+)/g, "$1 $2")
							.replace(/(\d+)([A-Za-z]+)/g, "$1 $2")
							.toLowerCase();
					}
					settingItemToEmbeddingString(k) {
						let L = `Setting Id: ${k.key}
`;
						return (
							(L += `Label: ${this.keyToLabel(k.key)}
`),
							(L += `Description: ${k.description}
`),
							L
						);
					}
					async searchModel(k, L) {
						if (!this.g) return null;
						if (this.f !== k) {
							(this.f = k), (this.h = []), (this.i = {});
							for (const D of k.settingsGroups)
								if (D.id !== "mostCommonlyUsed")
									for (const M of D.sections)
										for (const N of M.settings)
											this.h.push({
												key: N.key,
												textChunks: [this.settingItemToEmbeddingString(N)],
											}),
												(this.i[N.key] = N);
						}
						return { filterMatches: await this.j(L) };
					}
					async j(k) {
						const L = [],
							D = new p.$8pb();
						D.updateDocuments(this.h);
						const M = D.calculateScores(this.g, k ?? a.CancellationToken.None);
						M.sort((A, R) => R.score - A.score);
						const N = M[0].score;
						if (N < I.c) return [];
						for (const A of M) {
							if (A.score / N < I.d || L.length === I.e) break;
							const R = A.key;
							L.push({
								setting: this.i[R],
								matches: [this.i[R].range],
								matchType: t.SettingMatchType.RemoteMatch,
								score: A.score,
							});
						}
						return L;
					}
				}
				let T = class {
					constructor(k) {
						(this.f = k), (this.e = "");
					}
					g() {
						this.f.isEnabled() && (this.c ??= new S(this.f)),
							(this.d ??= new I());
					}
					setFilter(k) {
						this.g(),
							(this.e = k),
							this.c && this.c.setFilter(k),
							this.d.setFilter(k);
					}
					searchModel(k, L) {
						return this.e
							? this.c
								? this.c
										.searchModel(k, L)
										.then((D) =>
											D?.filterMatches.length ? D : this.d.searchModel(k, L),
										)
								: this.d.searchModel(k, L)
							: Promise.resolve(null);
					}
				};
				(T = Ne([j(0, g.$97)], T)),
					(0, n.$lK)(m.$hBc, s, n.InstantiationType.Delayed);
			},
		),
		