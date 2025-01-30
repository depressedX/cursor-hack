import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../base/common/resources.js';
import '../../../../workbench/services/ai/browser/fastEditService.js';
import './pureAIPromptBar.js';
import '../../../../workbench/contrib/ui/browser/hooks/useKeyboardShortcut.js';
import '../../inlineDiffs/browser/inlineDiffTypes.js';
import '../../inlineDiffs/browser/controllers/inlineDiffController.js';
define(
			de[4220],
			he([1, 0, 2, 13, 36, 19, 480, 4219, 385, 534, 851]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*solid*/,
 E /*resources*/,
 C /*fastEditService*/,
 d /*pureAIPromptBar*/,
 m /*useKeyboardShortcut*/,
 r /*inlineDiffTypes*/,
 u /*inlineDiffController*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$olc = a),
					(e.$plc = h);
				function a(c) {
					const n = (0, w.$odc)(),
						g = (0, m.$5$b)(r.$97b),
						p = (0, m.$5$b)(r.$_7b),
						o = (0, m.$5$b)(r.$g8b),
						f = (0, m.$5$b)(r.$h8b),
						b = (0, m.$5$b)(r.$j8b),
						s = (0, m.$5$b)(r.$i8b),
						l = (0, i.createMemo)(() =>
							n.reactiveStorageService.nonPersistentStorage.inlineDiffs.filter(
								(F) => F.source === C.$a0b || F.source === C.$_9b,
							),
						),
						y = (0, i.createMemo)(() => {
							const F = l();
							return F.length === 0
								? []
								: F.sort((x, H) =>
										x.createdAt !== void 0 && H.createdAt !== void 0
											? x.createdAt < H.createdAt
												? -1
												: 1
											: x.uri.toString() === H.uri.toString() ||
													x.uri.fsPath === H.uri.fsPath
												? x.currentRange.startLineNumber -
													H.currentRange.startLineNumber
												: x.uri.toString() < H.uri.toString()
													? -1
													: 1,
									).flatMap((x) =>
										x.changes
											.sort(
												(H, q) =>
													H.addedRange.startLineNumber -
													q.addedRange.startLineNumber,
											)
											.map((H) => ({
												uri: x.uri,
												startLineNumber:
													x.currentRange.startLineNumber +
													H.addedRange.startLineNumber -
													1,
											})),
									);
						}),
						$ = (0, i.createMemo)(() => {
							const F = l();
							return F.length === 0
								? !1
								: F.some((x) =>
										n.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
											(H) =>
												H.generationUUID === x.generationUUID &&
												(E.$dh.isEqual(x.uri, c.uri) ||
													x.uri.fsPath === c.uri?.fsPath),
										),
									);
						}),
						v = (0, i.createMemo)(() =>
							y().filter(
								(F) =>
									E.$dh.isEqual(F.uri, c.uri) || F.uri.fsPath === c.uri?.fsPath,
							),
						),
						S = (0, i.createMemo)(() => [
							...new Set(y().map((F) => F.uri.toString())),
						]),
						I = () => {
							n.commandService.executeCommand(r.$c8b, c.editor);
						},
						T = () => {
							n.commandService.executeCommand(r.$i8b);
						},
						P = () => {
							n.commandService.executeCommand(r.$97b);
						},
						k = () => {
							n.commandService.executeCommand(r.$_7b);
						},
						[L, D] = (0, i.createSignal)(0),
						[M, N] = (0, i.createSignal)(0),
						A = () => {
							if (!U()) {
								D(0), N(0);
								return;
							}
							if (u.$Ddc.get(c.editor)) {
								const x = c.uri,
									H = l()
										.filter((J) => E.$dh.isEqual(J.uri, x))
										.flatMap((J) =>
											J.changes.map((W) => ({
												startLineNumber:
													J.currentRange.startLineNumber +
													W.addedRange.startLineNumber -
													1,
												endLineNumber:
													J.currentRange.startLineNumber +
													W.addedRange.endLineNumberExclusive -
													1,
												startColumn: 1,
												endColumn: 1,
											})),
										),
									q = H.length;
								N(q);
								const V = c.editor.getPosition(),
									G = c.editor.getVisibleRanges();
								let K = -1;
								if (
									(V &&
										G.some((J) => J.containsPosition(V)) &&
										(K = H.findIndex(
											(J) =>
												V.lineNumber >= J.startLineNumber &&
												V.lineNumber <= J.endLineNumber,
										)),
									K === -1 &&
										G.length > 0 &&
										(K = H.findIndex(
											(J) =>
												J.startLineNumber >= G[0].startLineNumber &&
												J.endLineNumber <= G[G.length - 1].endLineNumber,
										)),
									K === -1 && G.length > 0)
								) {
									const J = Math.floor(
										(G[0].startLineNumber + G[G.length - 1].endLineNumber) / 2,
									);
									K = H.reduce(
										(W, X, Y) =>
											Math.abs(X.startLineNumber - J) <
											Math.abs(H[W].startLineNumber - J)
												? Y
												: W,
										0,
									);
								}
								D(K + 1);
							}
						};
					(0, i.createEffect)(() => {
						if (U()) {
							A();
							const F = c.editor.onDidScrollChange(A),
								x = c.editor.onDidChangeCursorPosition(A),
								H = c.editor.onDidChangeModelContent(A);
							(0, i.onCleanup)(() => {
								F.dispose(), x.dispose(), H.dispose();
							});
						}
					});
					const R = (F = !1) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = F ? L() : void 0;
								x.navigateToChange("previous", H), A();
							}
						},
						O = (F = !1) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = F ? L() : void 0;
								x.navigateToChange("next", H), A();
							}
						},
						B = () => {
							n.commandService.executeCommand(r.$j8b);
						},
						U = (0, i.createMemo)(() =>
							l().some(
								(F) =>
									F.uri.toString() === c.uri?.toString() ||
									F.uri.fsPath === c.uri?.fsPath,
							),
						),
						z = (F) => {
							const x = u.$Ddc.get(c.editor);
							if (x) {
								const H = L();
								H > 0 && H <= M() && x.focusOnCurrentChange(H);
							}
						};
					return (0, t.createComponent)(d.$nlc, {
						get isGenerating() {
							return $();
						},
						get isActiveEditor() {
							return c.isActiveEditor;
						},
						get inlineDiffs() {
							return l();
						},
						get changesInCurrentFile() {
							return v();
						},
						get uniqueFileUris() {
							return S();
						},
						get uri() {
							return c.uri;
						},
						onCancelGeneration: I,
						onNavigateToPreviousFile: T,
						onAcceptChanges: P,
						onRejectChanges: k,
						onNavigateToPreviousChange: () => R(!0),
						onNavigateToNextChange: () => O(!0),
						onNavigateToCurrentChange: z,
						onNavigateToNextFile: B,
						get acceptKeybinding() {
							return g();
						},
						get rejectKeybinding() {
							return p();
						},
						get nextChangeKeybinding() {
							return o();
						},
						get previousChangeKeybinding() {
							return f();
						},
						get nextFileKeybinding() {
							return b();
						},
						get previousFileKeybinding() {
							return s();
						},
						get currentVisibleChange() {
							return L();
						},
						get totalChanges() {
							return M();
						},
					});
				}
				function h(c, n, g, p) {
					return (0, w.$ndc)(
						() =>
							(0, t.createComponent)(a, {
								get uri() {
									return n.getURI();
								},
								get isActiveEditor() {
									return n.isActiveEditor;
								},
								editor: p,
							}),
						c,
						g,
					);
				}
			},
		),
		