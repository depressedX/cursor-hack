import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/uri.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../ui/browser/pickerMenu/renderFolderStructurePickerMenuPreview.js';
define(
			de[4192],
			he([1, 0, 2, 13, 54, 9, 36, 156, 860]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*path*/,
 E /*uri*/,
 C /*solid*/,
 d /*pureIcon*/,
 m /*renderFolderStructurePickerMenuPreview*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mzc = r);
				function r(u, a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, i.createSignal)(""),
						[g, p] = (0, i.createSignal)(0),
						[o, f] = (0, i.createSignal)(new Set());
					let b, s;
					const l = (0, i.createMemo)(() => {
							const I = u(),
								T = c().toLowerCase(),
								P = new Map();
							if (I?.diff.diffs)
								for (const k of I.diff.diffs) {
									const L = E.URI.file(k.to),
										D = (0, w.$sc)(k.to),
										M = (0, w.$rc)(h.workspaceContextService.asRelativePath(L));
									(T === "" ||
										D.toLowerCase().includes(T) ||
										M.toLowerCase().includes(T)) &&
										P.set(L.toString(), { uri: L, fileName: D });
								}
							return Array.from(P.values());
						}),
						y = (0, i.createMemo)(() => {
							const I = u();
							if (!I) return;
							const T = o(),
								P = Array.from(T).sort().join(",");
							if (P === s) {
								s === void 0 && (s = P);
								return;
							}
							s = P;
							const k = {
								...I.diff,
								diffs: I.diff.diffs.filter((L) =>
									T.has(E.URI.file(L.to).toString()),
								),
							};
							return h.bugbotService.computeSizedGitDiff(k);
						});
					(0, i.createEffect)(() => {
						const I = y();
						I &&
							(b !== void 0 && clearTimeout(b),
							(b = h.window.setTimeout(() => {
								a?.(I);
							}, 300)));
					}),
						(0, i.onCleanup)(() => {
							b !== void 0 && clearTimeout(b);
						}),
						(0, i.createEffect)(() => {
							const I = u();
							if (I?.diff.diffs) {
								const T = new Set();
								for (const P of I.diff.diffs)
									T.add(E.URI.file(P.to).toString());
								f(T);
							}
						});
					const $ = (0, i.createMemo)(() =>
							l().map((I) => {
								const T = (0, w.$rc)(
									h.workspaceContextService.asRelativePath(I.uri),
								);
								return {
									id: I.uri.toString(),
									item: I,
									title: I.fileName,
									subtitle: T === "/" ? "/" : `${T}/`,
									isAdded: o().has(I.uri.toString()),
									icon: (0, t.createComponent)(d.$k$b, {
										get fileName() {
											return I.fileName;
										},
										get workspaceContextService() {
											return h.workspaceContextService;
										},
										get modelService() {
											return h.modelService;
										},
										get languageService() {
											return h.languageService;
										},
									}),
									renderPreview: () => (0, m.$7bc)(I.uri),
								};
							}),
						),
						v = (I) => {
							f((T) => {
								const P = new Set(T);
								return P.add(I.uri.toString()), P;
							});
						},
						S = (I) => {
							f((T) => {
								const P = new Set(T);
								return P.delete(I.uri.toString()), P;
							});
						};
					return (0, i.createMemo)(() => ({
						items: $(),
						onItemAdd: v,
						onItemRemove: S,
						onSearch: n,
						selectedIndex: g(),
						setSelectedIndex: p,
					}));
				}
			},
		),
		