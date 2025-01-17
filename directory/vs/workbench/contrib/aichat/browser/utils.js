import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/resources.js';
import '../../../../platform/editor/common/editor.js';
import '../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../base/common/uri.js';
import '../../../../base/browser/dom.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
define(
			de[397],
			he([1, 0, 2, 2, 2, 19, 19, 116, 156, 9, 7, 83, 90, 148, 83]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cgc = e.$0fc = void 0),
					(e.$$fc = o),
					(e.$_fc = f),
					(e.$agc = b),
					(e.$bgc = s),
					(e.$dgc = y),
					(e.$egc = $),
					(e.$fgc = v),
					(e.$ggc = S),
					(e.$hgc = I);
				const g = (0, t.template)("<div>"),
					p = async (T, P, k) => {
						try {
							let L;
							const D = await k.getCurrentFileInfo(),
								M = P.resolveRelativePath(D?.relativeWorkspacePath ?? ""),
								A = T.read({ resource: M })
									.filter((R) => R.severity === h.MarkerSeverity.Error)
									.map(
										(R) =>
											new c.$yF({
												message: R.message,
												source: R.source,
												range: new n.$Ns({
													startPosition: {
														line: R.startLineNumber,
														column: R.startColumn,
													},
													endPosition: {
														line: R.endLineNumber,
														column: R.endColumn,
													},
												}),
												relativeWorkspacePath: P.asRelativePath(M),
											}),
									);
							return (
								A.length > 0 &&
									(L = new a.$4s({
										relativeWorkspacePath: P.asRelativePath(M),
										errors: A,
										fileContents: D?.contents ?? "",
									})),
								L
							);
						} catch (L) {
							console.error("[aichat] error getting linter errors", L);
							return;
						}
					};
				e.$0fc = p;
				function o(T) {
					if (T.type !== "user") return !1;
					const P =
							(T.selections && T.selections.length > 0) ||
							(T.folderSelections && T.folderSelections.length > 0) ||
							(T.selectedDocs && T.selectedDocs.length > 0) ||
							(T.selectedCommits && T.selectedCommits.length > 0) ||
							(T.selectedPullRequests && T.selectedPullRequests.length > 0) ||
							(T.terminalSelections && T.terminalSelections.length > 0) ||
							(T.terminalFiles && T.terminalFiles.length > 0) ||
							(T.quotes && T.quotes.length > 0) ||
							(T.externalLinks && T.externalLinks.length > 0) ||
							(T.notepads && T.notepads.length > 0) ||
							(T.selectedImages && T.selectedImages.length > 0) ||
							T.gitDiff !== void 0 ||
							T.gitDiffFromBranchToMain !== void 0 ||
							T.usesCodebase === !0 ||
							T.useWeb === !0,
						k =
							T.fileSelections &&
							T.fileSelections.some((L) => !L.isCurrentFile);
					return P || k;
				}
				function f(T) {
					const P = new Set();
					return T.filter((D) =>
						P.has(D.uri.toString()) ? !1 : (P.add(D.uri.toString()), !0),
					).filter((D) => D.isCurrentFile !== !0);
				}
				function b(T) {
					return T.filter((k) => {
						const L = T.findIndex(
							(D) =>
								(0, r.$Ac)(D.uri, k.uri) &&
								D.range.positionLineNumber === k.range.positionLineNumber &&
								D.range.positionColumn === k.range.positionColumn &&
								D.range.selectionStartLineNumber ===
									k.range.selectionStartLineNumber &&
								D.range.selectionStartColumn === k.range.selectionStartColumn &&
								D.text === k.text,
						);
						return L === -1 || L === T.indexOf(k);
					});
				}
				function s(T) {
					const P = Math.floor((Date.now() - T) / 1e3);
					return P < 60
						? "Just now"
						: P < 3600
							? `${Math.floor(P / 60)}m ago`
							: P < 86400
								? `${Math.floor(P / 3600)}h ago`
								: P < 604800
									? `${Math.floor(P / 86400)}d ago`
									: P < 2592e3
										? `${Math.floor(P / 604800)}w ago`
										: P < 31536e3
											? `${Math.floor(P / 2592e3)}mo ago`
											: `${Math.floor(P / 31536e3)}y ago`;
				}
				const l = (T, P, k, L, D) => {
					const M = k.workspaceContextService;
					let N = "";
					if (M) {
						const O = r.URI.revive(T.uri),
							B = M.getWorkspaceFolder(O);
						B && (N = (0, C.$ph)(B.uri, O) ?? "");
					}
					const A = k.workspaceContextService.resolveRelativePath(N),
						R = () => {
							k.openerService.open(A, {
								openToSide: !1,
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: d.EditorOpenSource.USER,
								},
								fromUserGesture: !0,
							});
						};
					return {
						title: (0, E.$kh)(A),
						subTitle: N,
						icon: (() => {
							const O = g();
							return (
								O.style.setProperty("padding-left", "2px"),
								(0, i.insert)(
									O,
									(0, w.createComponent)(m.$k$b, {
										get fileName() {
											return A.fsPath;
										},
										get workspaceContextService() {
											return k.workspaceContextService;
										},
										get modelService() {
											return k.modelService;
										},
										get languageService() {
											return k.languageService;
										},
									}),
								),
								O
							);
						})(),
						onRemove:
							L !== void 0
								? () => {
										L(P());
									}
								: void 0,
						onTitleClick() {
							R();
						},
						...(D || {}),
					};
				};
				e.$cgc = l;
				function y(T) {
					return `bubble-${T.split("-").pop()}`;
				}
				function $(T) {
					const P = (0, u.$Ogb)().document.getElementById(y(T));
					P && P.focus();
				}
				async function v(T, P) {
					const k = T.activeInstance;
					if (k && (await k.focusWhenReady(!0), P)) {
						const L = k.xterm;
						if (L) {
							const D = Math.max(0, P.startLineNumber - 1),
								M = Math.max(0, P.startColumn - 1);
							L.scrollToLine(D);
							const N =
								L.raw.cols * (P.endLineNumber - P.startLineNumber) +
								(P.endColumn - P.startColumn) +
								1;
							L.raw.select(M, D, N);
						}
					}
				}
				function S(T, P) {
					return (
						(0, r.$Ac)(T.uri, P.uri) &&
						T.range.positionLineNumber === P.range.positionLineNumber &&
						T.range.positionColumn === P.range.positionColumn &&
						T.range.selectionStartLineNumber ===
							P.range.selectionStartLineNumber &&
						T.range.selectionStartColumn === P.range.selectionStartColumn &&
						T.text === P.text
					);
				}
				function I(T, P) {
					return (
						r.URI.revive(T.uri).toString() === r.URI.revive(P.uri).toString()
					);
				}
			},
		),
		