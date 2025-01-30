import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/fuzzyScorer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/languages.js';
import '../../documentSymbols/browser/outlineModel.js';
import './editorNavigationQuickAccess.js';
import '../../../../nls.js';
import '../../../common/services/languageFeatures.js';
import '../../../../base/common/arraysFind.js';
define(
			de[1667],
			he([1, 0, 15, 33, 14, 26, 322, 3, 37, 17, 98, 74, 204, 1665, 4, 69, 214]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*codicons*/,
 E /*themables*/,
 C /*fuzzyScorer*/,
 d /*lifecycle*/,
 m /*strings*/,
 r /*range*/,
 u /*editorCommon*/,
 a /*languages*/,
 h /*outlineModel*/,
 c /*editorNavigationQuickAccess*/,
 n /*nls*/,
 g /*languageFeatures*/,
 p /*arraysFind*/) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m9b = void 0);
				let f = class extends c.$l9b {
					static {
						o = this;
					}
					static {
						this.PREFIX = "@";
					}
					static {
						this.SCOPE_PREFIX = ":";
					}
					static {
						this.PREFIX_BY_CATEGORY = `${this.PREFIX}${this.SCOPE_PREFIX}`;
					}
					constructor(y, $, v = Object.create(null)) {
						super(v),
							(this.l = y),
							(this.m = $),
							(this.a = v),
							(this.a.canAcceptInBackground = !0);
					}
					e(y) {
						return this.r(y, (0, n.localize)(1366, null)), d.$1c.None;
					}
					d(y, $, v, S) {
						const I = y.editor,
							T = this.g(I);
						return T
							? this.l.documentSymbolProvider.has(T)
								? this.t(y, T, $, v, S)
								: this.q(y, T, $, v)
							: d.$1c.None;
					}
					q(y, $, v, S) {
						const I = new d.$Zc();
						return (
							this.r(v, (0, n.localize)(1367, null)),
							(async () =>
								!(await this.s($, I)) ||
								S.isCancellationRequested ||
								I.add(this.t(y, $, v, S)))(),
							I
						);
					}
					r(y, $) {
						(y.items = [{ label: $, index: 0, kind: a.SymbolKind.String }]),
							(y.ariaLabel = $);
					}
					async s(y, $) {
						if (this.l.documentSymbolProvider.has(y)) return !0;
						const v = new t.$0h(),
							S = $.add(
								this.l.documentSymbolProvider.onDidChange(() => {
									this.l.documentSymbolProvider.has(y) &&
										(S.dispose(), v.complete(!0));
								}),
							);
						return $.add((0, d.$Yc)(() => v.complete(!1))), v.p;
					}
					t(y, $, v, S, I) {
						const T = y.editor,
							P = new d.$Zc();
						P.add(
							v.onDidAccept((M) => {
								const [N] = v.selectedItems;
								N &&
									N.range &&
									(this.f(y, {
										range: N.range.selection,
										keyMods: v.keyMods,
										preserveFocus: M.inBackground,
									}),
									I?.handleAccept?.(N),
									M.inBackground || v.hide());
							}),
						),
							P.add(
								v.onDidTriggerItemButton(({ item: M }) => {
									M &&
										M.range &&
										(this.f(y, {
											range: M.range.selection,
											keyMods: v.keyMods,
											forceSideBySide: !0,
										}),
										v.hide());
								}),
							);
						const k = this.x($, S);
						let L;
						const D = async (M) => {
							L?.dispose(!0), (v.busy = !1), (L = new i.$Ce(S)), (v.busy = !0);
							try {
								const N = (0, C.$hs)(v.value.substr(o.PREFIX.length).trim()),
									A = await this.u(k, N, void 0, L.token, $);
								if (S.isCancellationRequested) return;
								if (A.length > 0) {
									if (((v.items = A), M && N.original.length === 0)) {
										const R = (0, p.$jb)(
											A,
											(O) =>
												!!(
													O.type !== "separator" &&
													O.range &&
													r.$iL.containsPosition(O.range.decoration, M)
												),
										);
										R && (v.activeItems = [R]);
									}
								} else
									N.original.length > 0
										? this.r(v, (0, n.localize)(1368, null))
										: this.r(v, (0, n.localize)(1369, null));
							} finally {
								S.isCancellationRequested || (v.busy = !1);
							}
						};
						return (
							P.add(v.onDidChangeValue(() => D(void 0))),
							D(T.getSelection()?.getPosition()),
							P.add(
								v.onDidChangeActive(() => {
									const [M] = v.activeItems;
									M &&
										M.range &&
										(T.revealRangeInCenter(
											M.range.selection,
											u.ScrollType.Smooth,
										),
										this.addDecorations(T, M.range.decoration));
								}),
							),
							P
						);
					}
					async u(y, $, v, S, I) {
						const T = await y;
						if (S.isCancellationRequested) return [];
						const P = $.original.indexOf(o.SCOPE_PREFIX) === 0,
							k = P ? 1 : 0;
						let L, D;
						$.values && $.values.length > 1
							? ((L = (0, C.$is)($.values[0])),
								(D = (0, C.$is)($.values.slice(1))))
							: (L = $);
						let M;
						const N = this.a?.openSideBySideDirection?.();
						N &&
							(M = [
								{
									iconClass:
										N === "right"
											? E.ThemeIcon.asClassName(w.$ak.splitHorizontal)
											: E.ThemeIcon.asClassName(w.$ak.splitVertical),
									tooltip:
										N === "right"
											? (0, n.localize)(1370, null)
											: (0, n.localize)(1371, null),
								},
							]);
						const A = [];
						for (let B = 0; B < T.length; B++) {
							const U = T[B],
								z = (0, m.$sf)(U.name),
								F = `$(${a.SymbolKinds.toIcon(U.kind).id}) ${z}`,
								x = F.length - z.length;
							let H = U.containerName;
							v?.extraContainerLabel &&
								(H
									? (H = `${v.extraContainerLabel} \u2022 ${H}`)
									: (H = v.extraContainerLabel));
							let q, V, G, K;
							if ($.original.length > k) {
								let W = !1;
								if (
									(L !== $ &&
										(([q, V] = (0, C.$es)(F, { ...$, values: void 0 }, k, x)),
										typeof q == "number" && (W = !0)),
									typeof q != "number" &&
										(([q, V] = (0, C.$es)(F, L, k, x)), typeof q != "number"))
								)
									continue;
								if (!W && D) {
									if (
										(H && D.original.length > 0 && ([G, K] = (0, C.$es)(H, D)),
										typeof G != "number")
									)
										continue;
									typeof q == "number" && (q += G);
								}
							}
							const J = U.tags && U.tags.indexOf(a.SymbolTag.Deprecated) >= 0;
							A.push({
								index: B,
								kind: U.kind,
								score: q,
								label: F,
								ariaLabel: (0, a.$hM)(U.name, U.kind),
								description: H,
								highlights: J ? void 0 : { label: V, description: K },
								range: {
									selection: r.$iL.collapseToStart(U.selectionRange),
									decoration: U.range,
								},
								uri: I.uri,
								symbolName: z,
								strikethrough: J,
								buttons: M,
							});
						}
						const R = A.sort((B, U) => (P ? this.w(B, U) : this.v(B, U)));
						let O = [];
						if (P) {
							let F = function () {
									U &&
										typeof B == "number" &&
										z > 0 &&
										(U.label = (0, m.$kf)(s[B] || b, z));
								},
								B,
								U,
								z = 0;
							for (const x of R)
								B !== x.kind
									? (F(),
										(B = x.kind),
										(z = 1),
										(U = { type: "separator" }),
										O.push(U))
									: z++,
									O.push(x);
							F();
						} else
							R.length > 0 &&
								(O = [
									{
										label: (0, n.localize)(1372, null, A.length),
										type: "separator",
									},
									...R,
								]);
						return O;
					}
					v(y, $) {
						if (typeof y.score != "number" && typeof $.score == "number")
							return 1;
						if (typeof y.score == "number" && typeof $.score != "number")
							return -1;
						if (typeof y.score == "number" && typeof $.score == "number") {
							if (y.score > $.score) return -1;
							if (y.score < $.score) return 1;
						}
						return y.index < $.index ? -1 : y.index > $.index ? 1 : 0;
					}
					w(y, $) {
						const v = s[y.kind] || b,
							S = s[$.kind] || b,
							I = v.localeCompare(S);
						return I === 0 ? this.v(y, $) : I;
					}
					async x(y, $) {
						const v = await this.m.getOrCreate(y, $);
						return $.isCancellationRequested ? [] : v.asListOfDocumentSymbols();
					}
				};
				(e.$m9b = f), (e.$m9b = f = o = Ne([j(0, g.$k3), j(1, h.$9Db)], f));
				const b = (0, n.localize)(1373, null),
					s = {
						[a.SymbolKind.Method]: (0, n.localize)(1374, null),
						[a.SymbolKind.Function]: (0, n.localize)(1375, null),
						[a.SymbolKind.Constructor]: (0, n.localize)(1376, null),
						[a.SymbolKind.Variable]: (0, n.localize)(1377, null),
						[a.SymbolKind.Class]: (0, n.localize)(1378, null),
						[a.SymbolKind.Struct]: (0, n.localize)(1379, null),
						[a.SymbolKind.Event]: (0, n.localize)(1380, null),
						[a.SymbolKind.Operator]: (0, n.localize)(1381, null),
						[a.SymbolKind.Interface]: (0, n.localize)(1382, null),
						[a.SymbolKind.Namespace]: (0, n.localize)(1383, null),
						[a.SymbolKind.Package]: (0, n.localize)(1384, null),
						[a.SymbolKind.TypeParameter]: (0, n.localize)(1385, null),
						[a.SymbolKind.Module]: (0, n.localize)(1386, null),
						[a.SymbolKind.Property]: (0, n.localize)(1387, null),
						[a.SymbolKind.Enum]: (0, n.localize)(1388, null),
						[a.SymbolKind.EnumMember]: (0, n.localize)(1389, null),
						[a.SymbolKind.String]: (0, n.localize)(1390, null),
						[a.SymbolKind.File]: (0, n.localize)(1391, null),
						[a.SymbolKind.Array]: (0, n.localize)(1392, null),
						[a.SymbolKind.Number]: (0, n.localize)(1393, null),
						[a.SymbolKind.Boolean]: (0, n.localize)(1394, null),
						[a.SymbolKind.Object]: (0, n.localize)(1395, null),
						[a.SymbolKind.Key]: (0, n.localize)(1396, null),
						[a.SymbolKind.Field]: (0, n.localize)(1397, null),
						[a.SymbolKind.Constant]: (0, n.localize)(1398, null),
					};
			},
		),
		