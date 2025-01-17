import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/editor/common/editor.js';
import '../../../../../workbench/contrib/ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../../workbench/contrib/controlCommon/browser/solid.js';
define(
			de[4116],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 54, 19, 26, 9, 116, 156, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ulc = s);
				const p = (0, t.template)('<div tabindex="0">'),
					o = (0, t.template)("<div> "),
					f = (0, t.template)("<div><div>"),
					b = (0, t.template)("<span>");
				function s(T, P, k) {
					return (0, g.$ndc)(
						() => (0, C.createComponent)($, { forceHide: k }),
						T,
						P,
						{
							additionalStyles: {
								display: "flex",
								flexDirection: "column-reverse",
							},
						},
					);
				}
				function l(T, P) {
					return (
						T.positionColumn === P.positionColumn &&
						T.positionLineNumber === P.positionLineNumber &&
						T.selectionStartColumn === P.selectionStartColumn &&
						T.selectionStartLineNumber === P.selectionStartLineNumber
					);
				}
				function y(T, P) {
					return T.text === P.text && l(T.range, P.range);
				}
				function $(T) {
					const P = (0, g.$odc)(),
						k = (0, d.createMemo)(
							() =>
								P.reactiveStorageService.nonPersistentStorage
									.cmdkBackgroundContextSelections,
						),
						L = (0, d.createMemo)(() =>
							k().reduce((M, N) => {
								const A = N.uri;
								return (
									N.selections.forEach((O) => {
										M.push({ uri: A, selection: O });
									}),
									M
								);
							}, []),
						),
						D = (M, N) => {
							P.reactiveStorageService.setNonPersistentStorage(
								"cmdkBackgroundContextSelections",
								(A) => A.uri.toString() === M.toString(),
								"selections",
								(A) => (A.find((O) => y(O, N)) ? A.filter((O) => !y(O, N)) : A),
							);
						};
					return (() => {
						const M = p();
						return (
							M.addEventListener("click", (N) => {}),
							M.style.setProperty("cursor", "default"),
							M.style.setProperty("overflow", "visible"),
							(0, E.insert)(
								M,
								(0, C.createComponent)(d.Show, {
									get when() {
										return k().length > 0;
									},
									get fallback() {
										return [];
									},
									get children() {
										return (0, C.createComponent)(d.For, {
											get each() {
												return L();
											},
											children: (N, A) => {
												const R = N.uri,
													O = N.selection;
												return (0, C.createComponent)(v, {
													uri: R,
													selection: O,
													onDidRemove: () => D(R, O),
													get forceHide() {
														return T.forceHide;
													},
												});
											},
										});
									},
								}),
							),
							M
						);
					})();
				}
				function v(T) {
					const P = (0, g.$odc)();
					let k = "";
					const D = /```(\w*)/.exec(T.selection.text);
					D && (k = D[1]);
					const M = (0, d.createMemo)(() => T.selection),
						N = P.languageService.createByLanguageNameOrFilepathOrFirstLine(
							k,
							null,
							void 0,
						);
					P.languageService.createByLanguageNameOrFilepathOrFirstLine(
						k,
						null,
						void 0,
					);
					let A = S();
					const R = (0, d.createMemo)(() =>
							M()
								.text.split(`
`)
								.slice(1, -1),
						),
						O = (0, d.createMemo)(() =>
							P.workspaceContextService.asRelativePath(h.URI.from(M().uri)),
						),
						B = () => {
							const U = h.URI.parse(
									`${T.uri.toString()}#L${T.selection.range.selectionStartLineNumber}-L${T.selection.range.positionLineNumber}`,
								),
								z = P.editorService.activeEditor?.resource;
							z && !u.$dh.isEqual(z, T.uri, !0) && T.forceHide(),
								P.openerService.open(U, {
									openToSide: !1,
									editorOptions: {
										revealIfVisible: !0,
										revealIfOpened: !0,
										source: c.EditorOpenSource.USER,
									},
									fromUserGesture: !0,
								});
						};
					return (0, C.createComponent)(I, {
						get leftItems() {
							return [
								(0, C.createComponent)(n.$k$b, {
									get fileName() {
										return T.uri.fsPath;
									},
									get workspaceContextService() {
										return P.workspaceContextService;
									},
									get modelService() {
										return P.modelService;
									},
									get languageService() {
										return P.languageService;
									},
								}),
								(() => {
									const U = o(),
										z = U.firstChild;
									return (
										U.addEventListener("click", B),
										(0, E.insert)(U, () => (0, r.$sc)(T.uri.path), z),
										(0, E.insert)(
											U,
											() =>
												`${T.selection.range.selectionStartLineNumber}-${T.selection.range.positionLineNumber}`,
											null,
										),
										U
									);
								})(),
								(() => {
									const U = f(),
										z = U.firstChild;
									return (
										U.addEventListener("click", B),
										U.style.setProperty("opacity", "0.5"),
										U.style.setProperty("margin-left", "5px"),
										U.style.setProperty("flex-shrink", "1"),
										U.style.setProperty("min-width", "0"),
										U.style.setProperty("font-size", "0.8em"),
										(0, E.insert)(z, O),
										U
									);
								})(),
							];
						},
						get rightItems() {
							return (() => {
								const U = b();
								return (
									U.addEventListener("click", (z) => {
										z.preventDefault(), z.stopPropagation(), T.onDidRemove();
									}),
									U.style.setProperty("cursor", "pointer"),
									(0, w.effect)(() =>
										(0, i.className)(U, a.ThemeIcon.asClassName(m.$ak.x)),
									),
									U
								);
							})();
						},
						get codeBlock() {
							return T.selection;
						},
					});
				}
				function S() {
					let T = "abcdefghijklmnopqrstuvwxyz",
						P = "";
					for (let k = 0; k < 10; k++)
						P += T.charAt(Math.floor(Math.random() * T.length));
					return h.URI.parse(`aicmdk-context-code-block-anysphere://${P}`);
				}
				function I(T) {
					return (() => {
						const P = f(),
							k = P.firstChild;
						return (
							P.style.setProperty("display", "flex"),
							P.style.setProperty("flex-direction", "row"),
							P.style.setProperty(
								"background-color",
								"var(--vscode-input-background)",
							),
							P.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-input-border)",
							),
							P.style.setProperty("align-items", "center"),
							P.style.setProperty("position", "relative"),
							(0, E.insert)(P, () => T.leftItems, k),
							k.style.setProperty("flex-grow", "1"),
							k.style.setProperty("margin-right", "2px"),
							k.style.setProperty("margin-left", "2px"),
							(0, E.insert)(P, () => T.rightItems, null),
							P
						);
					})();
				}
			},
		),
		