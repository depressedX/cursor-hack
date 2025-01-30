import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../editor/common/core/range.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../common/dataScrubbingService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../editor/common/editorService.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor.js';
import '../../../../base/common/network.js';
import '../../editor/common/editorGroupsService.js';
import '../../../contrib/notebook/browser/notebookBrowser.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/browser/editorBrowser.js';
import './utils.js';
define(
			de[837],
			he([
				1, 0, 5, 22, 25, 17, 83, 356, 42, 20, 18, 3, 44, 23, 66, 108, 48, 56,
				191,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*files*/,
 w /*workspace*/,
 E /*range*/,
 C /*utils_pb*/,
 d /*dataScrubbingService*/,
 m /*resolverService*/,
 r /*extensions*/,
 u /*editorService*/,
 a /*lifecycle*/,
 h /*editor*/,
 c /*network*/,
 n /*editorGroupsService*/,
 g /*notebookBrowser*/,
 p /*position*/,
 o /*editorBrowser*/,
 f /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O9b = e.$N9b = void 0),
					(e.$N9b = (0, t.$Mi)("aiFileInfoService"));
				let b = class extends a.$1c {
					constructor(l, y, $, v, S, I) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.f = $),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.q = []),
							(this.r = !1),
							this._setupActiveGroupTracking();
					}
					get controlProvider() {
						return this.n;
					}
					registerControlProvider(l, y) {
						if (this.n) throw new Error("ControlProvider already registered");
						return (
							(this.n = y),
							(0, a.$Yc)(() => {
								this.n = void 0;
							})
						);
					}
					async getCurrentFileInfo(l, y) {
						if (y?.actuallyReadFromOverrideURI === !0 && l !== void 0) {
							const I = (await this.j.createModelReference(l)).object
									.textEditorModel,
								T = I.getValue(),
								P = I.getLanguageIdAtPosition(1, 1) ?? "";
							return new C.$Ws({
								cursorPosition: void 0,
								selection: void 0,
								relativeWorkspacePath: this.f.asRelativePath(l),
								contents: T,
								contentsStartAtLine: 1,
								languageId: P,
								alternativeVersionId: I.getAlternativeVersionId(),
								totalNumberOfLines: I.getLineCount(),
								workspaceRootPath:
									this.f.getWorkspaceFolder(l)?.uri.fsPath ?? "",
							});
						}
						const $ = this.getCurrentFileInfoSyncWithoutDataframes(l);
						if ($ === void 0) return $;
						let v = await this.getDataframesFromNotebook();
						return (
							v || (v = []),
							($.dataframes = v),
							($.contents = await this.h.cleanText(
								$.contents,
								$.relativeWorkspacePath,
							)),
							$
						);
					}
					async getDataframesFromNotebook() {
						const l = this.m.activeEditorPane?.input?.resource;
						if (!l || !l.path.endsWith(".ipynb")) return;
						if (!l) return [];
						const y = await this.controlProvider?.getDataframeSummary(l);
						return y
							? y.map(
									($) =>
										new C.$1s({
											name: $.name,
											shape: $.shape,
											dataDimensionality: $.dataDimensionality,
											columns: $.columns.map(
												(v) => new C.$2s({ key: v.key, type: v.type }),
											),
											rowCount: $.rowCount,
											indexColumn: $.indexColumn,
										}),
								)
							: [];
					}
					_setupActiveGroupTracking() {
						const l = (y) => {
							y !== void 0 &&
								((this.q = this.q.filter(($) => $ !== y)), this.q.push(y));
						};
						this.D(
							this.a.mainPart.onDidLayout(() => {
								if (this.r) return;
								this.r = !0;
								const y = this.a.groups.map(($) => $.id);
								(this.q = y.filter(($) => !this.q.includes($)).concat(this.q)),
									l(this.a.activeGroup.id);
							}),
						),
							this.D(
								this.a.onDidChangeActiveGroup((y) => {
									l(y.id);
								}),
							);
					}
					getLastActiveFileEditor() {
						let l = this.m.activeEditorPane;
						if (l?.input?.resource && (0, f.$n6b)(l.input.resource.scheme))
							return l;
						for (const y of this.q.slice().reverse())
							if (
								((l = this.a.getGroup(y)?.activeEditorPane),
								!(!l?.input?.resource || !(0, f.$n6b)(l.input.resource.scheme)))
							)
								break;
						return l;
					}
					getCurrentFileInfoSyncWithoutDataframes(l) {
						const y = this.getLastActiveFileEditor(),
							$ = y?.getControl();
						let v = l ?? h.$A1.getOriginalUri(y?.input);
						if (v?.scheme === c.Schemas.aiChat) return;
						const S = (0, g.$eJb)(y);
						let I = "",
							T,
							P,
							k;
						if (S) {
							const O = S.getCellsInRange();
							let B = S.getActiveCell()?.id,
								U = O.findIndex((V) => V.id === B);
							const z = O.map((V) => V.getText()),
								x = O.map((V) => V.model.outputs).map((V) => {
									const G = V.map((K) =>
										K.outputs
											.map((W) => {
												if (W.mime === "text/plain") return W.data.toString();
												if (W.mime === "application/vnd.code.notebook.error") {
													const X = W.data.toString();
													let Y = JSON.parse(X);
													const ie = Y.stack
														.replace(
															/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g,
															"",
														)
														.replace(/\u001b\[0/g, "");
													return (
														(Y = { ...Y, stack: ie }),
														JSON.stringify(Y, null, 2)
													);
												} else if (
													W.mime === "application/vnd.code.notebook.stderr"
												)
													return W.data.toString();
												return "";
											})
											.join(`

`),
									).join(`

`);
									return G.length > 400
										? G.slice(0, 200) +
												`
...output cropped...
` +
												G.slice(-200)
										: G;
								});
							let H = 0;
							(I = z
								.map((V, G) => {
									if (V === "" || V === void 0) return "";
									const K = `in[${G}]: ${V}`;
									if (x[G] === "" || x[G] === void 0) return K;
									const J = `out[${G}]: ${x[G]}`;
									return `${K}

${J}`;
								})
								.map(
									(V, G) => (
										G < U &&
											(H =
												H +
												V.split(`
`).length +
												2),
										V
									),
								)
								.join(`

`)),
								(v = S.textModel?.uri ?? v),
								(T = new p.$hL(H + 1, 1)),
								(P = new E.$iL(T.lineNumber, 1, T.lineNumber, 1));
						} else {
							const O = y?.getControl();
							if (
								((T = O?.getPosition() ?? new p.$hL(1, 1)),
								(P =
									O?.getSelection() ??
									new E.$iL(T.lineNumber, T.column, T.lineNumber, T.column)),
								(0, o.$$sb)(O))
							) {
								const U = O.getModel(),
									z = U?.original.getValue(),
									F = U?.modified.getValue();
								(I = `Original File:
${z}
Modified File:
${F}`),
									(v = U?.modified.uri);
							} else if ((0, o.$_sb)(O)) I = "";
							else {
								const B = O?.getModel();
								(I = B?.getValue() ?? ""), (k = B?.getAlternativeVersionId());
							}
						}
						let L = "";
						(0, o.$0sb)($) &&
							(L =
								$.getModel()?.getLanguageIdAtPosition(T.lineNumber, T.column) ??
								"");
						const D = new C.$ys({
								line: T.lineNumber - 1,
								column: T.column - 1,
							}),
							M = new C.$Ns({
								startPosition: new C.$ys({
									line: P.startLineNumber - 1,
									column: P.startColumn - 1,
								}),
								endPosition: new C.$ys({
									line: P.endLineNumber - 1,
									column: P.endColumn - 1,
								}),
							}),
							N = I.split(`
`).length;
						let A = 1;
						if (I.length > 100 * 2e4) {
							const B = I.split(`
`),
								U = D.line;
							let z = Math.max(0, U - Math.floor(2e3 / 2)),
								F = Math.min(B.length, U + Math.ceil(2e3 / 2));
							F - z < 2e3 &&
								(z === 0
									? (F = Math.min(B.length, z + 2e3))
									: F === B.length && (z = Math.max(0, F - 2e3))),
								(A = z + 1),
								(I = B.slice(z, F).join(`
`)),
								(D.line -= z),
								(M.startPosition.line -= z),
								(M.endPosition.line -= z);
						}
						return new C.$Ws({
							cursorPosition: D,
							selection: M,
							relativeWorkspacePath: v ? this.f.asRelativePath(v) : "",
							contents: I,
							contentsStartAtLine: A,
							languageId: L,
							alternativeVersionId: k,
							totalNumberOfLines: N,
						});
					}
				};
				(e.$O9b = b),
					(e.$O9b = b =
						Ne(
							[
								j(0, n.$EY),
								j(1, i.$ll),
								j(2, w.$Vi),
								j(3, d.$zIb),
								j(4, m.$MO),
								j(5, u.$IY),
							],
							b,
						)),
					(0, r.$lK)(e.$N9b, b, r.InstantiationType.Delayed);
			},
		),
		