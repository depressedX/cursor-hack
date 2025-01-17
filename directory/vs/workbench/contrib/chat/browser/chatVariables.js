import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/path.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import './chat.js';
import './contrib/chatDynamicVariables.js';
import '../common/chatAgents.js';
import '../common/chatParserTypes.js';
import './contrib/chatContextAttachments.js';
import '../../../services/views/common/viewsService.js';
import '../common/languageModelToolsService.js';
import '../../../../base/common/themables.js';
define(
			de[4071],
			he([1, 0, 54, 24, 29, 103, 3, 9, 208, 1060, 153, 329, 1355, 89, 569, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RIc = void 0);
				let p = class {
					constructor(f, b, s) {
						(this.d = f), (this.e = b), (this.f = s), (this.c = new Map());
					}
					async resolveVariables(f, b, s, l, y) {
						let $ = [];
						const v = [];
						f.parts.forEach((I, T) => {
							if (I instanceof a.$S2) {
								const P = this.c.get(I.variableName.toLowerCase());
								if (P) {
									const k = [],
										L = (D) => {
											if (D.kind === "reference") {
												k.push(D);
												return;
											}
											l(D);
										};
									v.push(
										P.resolver(f.text, I.variableArg, s, L, y)
											.then((D) => {
												D &&
													($[T] = {
														id: P.data.id,
														modelDescription: P.data.modelDescription,
														name: I.variableName,
														range: I.range,
														value: D,
														references: k,
														fullName: P.data.fullName,
														icon: P.data.icon,
													});
											})
											.catch(w.$5),
									);
								}
							} else if (I instanceof a.$X2)
								$[T] = {
									id: I.id,
									name: I.referenceText,
									range: I.range,
									value: I.data,
								};
							else if (I instanceof a.$T2) {
								const P = this.f.getTool(I.toolId);
								P &&
									($[T] = {
										id: I.toolId,
										name: I.toolName,
										range: I.range,
										value: void 0,
										isTool: !0,
										icon: g.ThemeIcon.isThemeIcon(P.icon) ? P.icon : void 0,
										fullName: P.displayName,
									});
							}
						});
						const S = [];
						return (
							b?.forEach((I, T) => {
								const P = this.c.get(I.name?.toLowerCase());
								if (P) {
									const k = [],
										L = (D) => {
											if (D.kind === "reference") {
												k.push(D);
												return;
											}
											l(D);
										};
									v.push(
										P.resolver(f.text, "", s, L, y)
											.then((D) => {
												D &&
													(S[T] = {
														id: P.data.id,
														modelDescription: P.data.modelDescription,
														name: I.name,
														fullName: I.fullName,
														range: I.range,
														value: D,
														references: k,
														icon: I.icon,
													});
											})
											.catch(w.$5),
									);
								} else (I.isDynamic || I.isTool) && (S[T] = { ...I });
							}),
							await Promise.allSettled(v),
							($ = (0, i.$Lb)($)),
							$.sort((I, T) => T.range.start - I.range.start),
							$.push(...(0, i.$Lb)(S)),
							{ variables: $ }
						);
					}
					async resolveVariable(f, b, s, l, y) {
						const $ = this.c.get(f.toLowerCase());
						if ($) return await $.resolver(b, void 0, s, l, y);
					}
					hasVariable(f) {
						return this.c.has(f.toLowerCase());
					}
					getVariable(f) {
						return this.c.get(f.toLowerCase())?.data;
					}
					getVariables(f) {
						const b = E.Iterable.map(this.c.values(), (s) => s.data);
						return E.Iterable.filter(
							b,
							(s) =>
								f !== u.ChatAgentLocation.Editor ||
								!new Set(["selection", "editor"]).has(s.name),
						);
					}
					getDynamicVariables(f) {
						const b = this.d.getWidgetBySessionId(f);
						if (!b || !b.viewModel || !b.supportsFileReferences) return [];
						const s = b.getContrib(r.$Cmc.ID);
						return s ? s.variables : [];
					}
					registerVariable(f, b) {
						const s = f.name.toLowerCase();
						if (this.c.has(s))
							throw new Error(
								`A chat variable with the name '${f.name}' already exists.`,
							);
						return (
							this.c.set(s, { data: f, resolver: b }),
							(0, C.$Yc)(() => {
								this.c.delete(s);
							})
						);
					}
					async attachContext(f, b, s) {
						if (s !== u.ChatAgentLocation.Panel) return;
						const l = await (0, m.$HYb)(this.e);
						if (!l || !l.viewModel) return;
						const y = f.toLowerCase();
						if (y === "file" && typeof b != "string") {
							const v = d.URI.isUri(b) ? b : b.uri,
								S = "range" in b ? b.range : void 0;
							l.getContrib(h.$EIc.ID)?.setContext(!1, {
								value: b,
								id: v.toString() + (S?.toString() ?? ""),
								name: (0, t.$sc)(v.path),
								isFile: !0,
								isDynamic: !0,
							});
							return;
						}
						const $ = this.c.get(y);
						$ &&
							l.getContrib(h.$EIc.ID)?.setContext(!1, { ...$.data, value: b });
					}
				};
				(e.$RIc = p),
					(e.$RIc = p = Ne([j(0, m.$GYb), j(1, c.$HMb), j(2, n.$E2)], p));
			},
		),
		