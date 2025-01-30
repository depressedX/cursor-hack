import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/hierarchicalKind.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../editor/browser/services/bulkEditService.js';
import '../../../../../../editor/common/commands/trimTrailingWhitespaceCommand.js';
import '../../../../../../editor/common/core/position.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../editor/common/languages.js';
import '../../../../../../editor/common/services/editorWorker.js';
import '../../../../../../editor/common/services/languageFeatures.js';
import '../../../../../../editor/common/services/resolverService.js';
import '../../../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../../../editor/contrib/codeAction/common/types.js';
import '../../../../../../editor/contrib/format/browser/format.js';
import '../../../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../../../nls.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/log/common/log.js';
import '../../../../../../platform/registry/common/platform.js';
import '../../../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../../common/contributions.js';
import '../../../../../common/editor.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookEditorModel.js';
import '../../../../../services/editor/common/editorService.js';
import '../../../../../services/lifecycle/common/lifecycle.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../services/workingCopy/common/workingCopyFileService.js';
define(
			de[1926],
			he([
				1, 0, 318, 3, 19, 199, 1148, 48, 17, 74, 200, 69, 42, 393, 291, 674,
				254, 4, 10, 5, 34, 30, 174, 55, 44, 108, 70, 1343, 18, 52, 39, 336,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*hierarchicalKind*/,
				i /*lifecycle*/,
				w /*resources*/,
				E /*bulkEditService*/,
				C /*trimTrailingWhitespaceCommand*/,
				d /*position*/,
				m /*range*/,
				r /*languages*/,
				u /*editorWorker*/,
				a /*languageFeatures*/,
				h /*resolverService*/,
				c /*codeAction*/,
				n /*types*/,
				g /*format*/,
				p /*snippetController2*/,
				o /*nls*/,
				f /*configuration*/,
				b /*instantiation*/,
				s /*log*/,
				l /*platform*/,
				y /*workspaceTrust*/,
				$ /*contributions*/,
				v /*editor*/,
				S /*notebookBrowser*/,
				I /*notebookCommon*/,
				T /*notebookEditorModel*/,
				P /*editorService*/,
				k /*lifecycle*/,
				L /*keybinding*/,
				D /*workingCopyFileService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VFc = e.$UFc = void 0);
				let M = class {
					constructor(H, q, V, G, K, J) {
						(this.c = H),
							(this.d = q),
							(this.e = V),
							(this.f = G),
							(this.g = K),
							(this.h = J);
					}
					async participate(H, q, V, G) {
						if (
							!H.model ||
							!(H.model instanceof T.$Opc) ||
							q.reason === v.SaveReason.AUTO ||
							!this.h.getValue(I.$56.formatOnSave)
						)
							return;
						V.report({ message: (0, o.localize)(7811, null) });
						const J = H.model.notebookModel,
							W = await this.e.invokeFunction(
								B.checkAndRunFormatCodeAction,
								J,
								V,
								G,
							),
							X = new i.$Zc();
						try {
							if (!W) {
								const Y = await Promise.all(
									J.cells.map(async (ie) => {
										const ne = await this.f.createModelReference(ie.uri);
										X.add(ne);
										const ee = ne.object.textEditorModel,
											_ = await (0, g.$Rhc)(
												this.c,
												this.d,
												ee,
												g.FormattingMode.Silent,
												G,
											),
											te = [];
										return _
											? (te.push(
													..._.map(
														(Q) => new E.$tzb(ee.uri, Q, ee.getVersionId()),
													),
												),
												te)
											: [];
									}),
								);
								await this.g.apply(Y.flat(), {
									label: (0, o.localize)(7812, null),
									code: "undoredo.formatNotebook",
								});
							}
						} finally {
							V.report({ increment: 100 }), X.dispose();
						}
					}
				};
				M = Ne(
					[
						j(0, u.$Cxb),
						j(1, a.$k3),
						j(2, b.$Li),
						j(3, h.$MO),
						j(4, E.$rzb),
						j(5, f.$gj),
					],
					M,
				);
				let N = class {
					constructor(H, q, V, G) {
						(this.c = H), (this.d = q), (this.e = V), (this.f = G);
					}
					async participate(H, q, V, G) {
						const K = this.c.getValue("files.trimTrailingWhitespace"),
							J = this.c.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
							);
						K && (await this.g(H, q.reason === v.SaveReason.AUTO, J, V));
					}
					async g(H, q, V, G) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const K = new i.$Zc(),
							J = H.model.notebookModel,
							W = U(this.d);
						let X = [],
							Y = [];
						try {
							const ne = (
								await Promise.all(
									J.cells.map(async (ee) => {
										if (ee.cellKind !== I.CellKind.Code) return [];
										const _ = await this.e.createModelReference(ee.uri);
										K.add(_);
										const te = _.object.textEditorModel;
										if (
											W &&
											ee.uri.toString() === W.getModel()?.uri.toString() &&
											((Y = W.getSelections() ?? []), q)
										) {
											X = Y.map((re) => re.getPosition());
											const se = p.$aDb.get(W)?.getSessionEnclosingRange();
											if (se)
												for (
													let re = se.startLineNumber;
													re <= se.endLineNumber;
													re++
												)
													X.push(new d.$hL(re, te.getLineMaxColumn(re)));
										}
										const Z = (0, C.$Qic)(te, X, V);
										return Z.length
											? Z.map(
													(se) =>
														new E.$tzb(
															te.uri,
															{ ...se, text: se.text || "" },
															te.getVersionId(),
														),
												)
											: [];
									}),
								)
							)
								.flat()
								.filter((ee) => ee !== void 0);
							await this.f.apply(ne, {
								label: (0, o.localize)(7813, null),
								code: "undoredo.notebookTrimTrailingWhitespace",
							});
						} finally {
							G.report({ increment: 100 }), K.dispose();
						}
					}
				};
				N = Ne([j(0, f.$gj), j(1, P.$IY), j(2, h.$MO), j(3, E.$rzb)], N);
				let A = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						this.c.getValue("files.trimFinalNewlines") &&
							(await this.g(H, q.reason === v.SaveReason.AUTO, V));
					}
					f(H) {
						for (let q = H.getLineCount(); q >= 1; q--)
							if (H.getLineLength(q)) return q;
						return 0;
					}
					async g(H, q, V) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const G = new i.$Zc(),
							K = H.model.notebookModel,
							J = U(this.d);
						try {
							const X = (
								await Promise.all(
									K.cells.map(async (Y) => {
										if (Y.cellKind !== I.CellKind.Code) return;
										let ie = 0;
										const ne =
											J && Y.uri.toString() === J.getModel()?.uri.toString();
										if (q && ne) {
											const Z = J.getSelections() ?? [];
											for (const se of Z)
												ie = Math.max(ie, se.selectionStartLineNumber);
										}
										const ee = Y.textBuffer,
											_ = this.f(ee),
											te = Math.max(_ + 1, ie + 1);
										if (te > ee.getLineCount()) return;
										const Q = new m.$iL(
											te,
											1,
											ee.getLineCount(),
											ee.getLineLastNonWhitespaceColumn(ee.getLineCount()),
										);
										if (!Q.isEmpty())
											return new E.$tzb(
												Y.uri,
												{ range: Q, text: "" },
												Y.textModel?.getVersionId(),
											);
									}),
								)
							)
								.flat()
								.filter((Y) => Y !== void 0);
							await this.e.apply(X, {
								label: (0, o.localize)(7814, null),
								code: "undoredo.trimFinalNewLines",
							});
						} finally {
							V.report({ increment: 100 }), G.dispose();
						}
					}
				};
				A = Ne([j(0, f.$gj), j(1, P.$IY), j(2, E.$rzb)], A);
				let R = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						this.c.getValue(I.$56.insertFinalNewline) &&
							(await this.f(H, q.reason === v.SaveReason.AUTO, V));
					}
					async f(H, q, V) {
						if (!H.model || !(H.model instanceof T.$Opc)) return;
						const G = new i.$Zc(),
							K = H.model.notebookModel,
							J = U(this.e);
						let W;
						J && (W = J.getSelections() ?? []);
						try {
							const Y = (
								await Promise.all(
									K.cells.map(async (ie) => {
										if (ie.cellKind !== I.CellKind.Code) return;
										const ne = ie.textBuffer.getLineCount(),
											ee =
												ie.textBuffer.getLineFirstNonWhitespaceColumn(ne) === 0;
										if (!(!ne || ee))
											return new E.$tzb(
												ie.uri,
												{
													range: new m.$iL(
														ne + 1,
														ie.textBuffer.getLineLength(ne),
														ne + 1,
														ie.textBuffer.getLineLength(ne),
													),
													text: ie.textBuffer.getEOL(),
												},
												ie.textModel?.getVersionId(),
											);
									}),
								)
							).filter((ie) => ie !== void 0);
							await this.d.apply(Y, {
								label: (0, o.localize)(7815, null),
								code: "undoredo.insertFinalNewLine",
							}),
								J && W && J.setSelections(W);
						} finally {
							V.report({ increment: 100 }), G.dispose();
						}
					}
				};
				R = Ne([j(0, f.$gj), j(1, E.$rzb), j(2, P.$IY)], R);
				let O = class {
					constructor(H, q, V, G, K, J) {
						(this.c = H),
							(this.d = q),
							(this.e = V),
							(this.f = G),
							(this.g = K),
							(this.h = J);
					}
					async participate(H, q, V, G) {
						if (
							!this.e.isWorkspaceTrusted() ||
							!H.model ||
							!(H.model instanceof T.$Opc)
						)
							return;
						let J = "";
						if (q.reason === v.SaveReason.AUTO) return;
						if (q.reason === v.SaveReason.EXPLICIT) J = "explicit";
						else return;
						const W = H.model.notebookModel,
							X = this.c.getValue(I.$56.codeActionsOnSave),
							Y = Array.isArray(X) ? X : Object.keys(X).filter((Q) => X[Q]),
							ie = this.i(Y),
							ne = ie.filter(
								(Q) => X[Q.value] === "never" || X[Q.value] === !1,
							),
							ee = ie.filter((Q) => X[Q.value] === J || X[Q.value] === !0),
							_ = ee.filter((Q) => !n.$GAb.Notebook.contains(Q)),
							te = ee.filter((Q) => n.$GAb.Notebook.contains(Q));
						if (te.length) {
							const Q = new i.$Zc();
							V.report({ message: (0, o.localize)(7816, null) });
							try {
								const Z = W.cells[0],
									se = await this.f.createModelReference(Z.uri);
								Q.add(se);
								const re = se.object.textEditorModel;
								await this.g.invokeFunction(
									B.applyOnSaveGenericCodeActions,
									re,
									te,
									ne,
									V,
									G,
								);
							} catch {
								this.d.error("Failed to apply notebook code action on save");
							} finally {
								V.report({ increment: 100 }), Q.dispose();
							}
						}
						if (_.length) {
							Array.isArray(X) ||
								_.sort((Z, se) =>
									n.$GAb.SourceFixAll.contains(Z)
										? n.$GAb.SourceFixAll.contains(se)
											? 0
											: -1
										: n.$GAb.SourceFixAll.contains(se)
											? 1
											: 0,
								);
							const Q = new i.$Zc();
							V.report({ message: (0, o.localize)(7817, null) });
							try {
								await Promise.all(
									W.cells.map(async (Z) => {
										const se = await this.f.createModelReference(Z.uri);
										Q.add(se);
										const re = se.object.textEditorModel;
										await this.g.invokeFunction(
											B.applyOnSaveGenericCodeActions,
											re,
											_,
											ne,
											V,
											G,
										);
									}),
								);
							} catch {
								this.d.error("Failed to apply code action on save");
							} finally {
								V.report({ increment: 100 }), Q.dispose();
							}
						}
					}
					i(H) {
						const q = H.map((V) => new t.$1L(V));
						return q.filter((V) =>
							q.every((G) => G.equals(V) || !G.contains(V)),
						);
					}
				};
				O = Ne(
					[
						j(0, f.$gj),
						j(1, s.$ik),
						j(2, y.$pO),
						j(3, h.$MO),
						j(4, b.$Li),
						j(5, L.$uZ),
					],
					O,
				);
				class B {
					static async checkAndRunFormatCodeAction(H, q, V, G) {
						const K = H.get(b.$Li),
							J = H.get(h.$MO),
							W = H.get(s.$ik),
							X = H.get(f.$gj),
							Y = new i.$Zc();
						let ie = !1;
						V.report({ message: (0, o.localize)(7818, null) });
						try {
							const ne = q.cells[0],
								ee = await J.createModelReference(ne.uri);
							Y.add(ee);
							const _ = ee.object.textEditorModel,
								te = X.getValue(I.$56.defaultFormatter);
							ie = await K.invokeFunction(
								B.applyOnSaveFormatCodeAction,
								_,
								new t.$1L("notebook.format"),
								[],
								te,
								V,
								G,
							);
						} catch {
							W.error("Failed to apply notebook format action on save");
						} finally {
							V.report({ increment: 100 }), Y.dispose();
						}
						return ie;
					}
					static async applyOnSaveGenericCodeActions(H, q, V, G, K, J) {
						const W = H.get(b.$Li),
							X = H.get(a.$k3),
							Y = H.get(L.$uZ),
							ie = H.get(s.$ik),
							ne = new (class {
								constructor() {
									this.c = new Set();
								}
								d() {
									K.report({
										message: (0, o.localize)(
											7819,
											null,
											[...this.c].map((ee) => `'${ee}'`).join(", "),
											"command:workbench.action.openSettings?%5B%22notebook.codeActionsOnSave%22%5D",
										),
									});
								}
								report(ee) {
									ee.displayName &&
										!this.c.has(ee.displayName) &&
										(this.c.add(ee.displayName), this.d());
								}
							})();
						for (const ee of V) {
							const _ = await B.getActionsToRun(q, ee, G, X, Y, ne, J);
							if (J.isCancellationRequested) {
								_.dispose();
								return;
							}
							try {
								for (const te of _.validActions) {
									const Q = te.action.edit?.edits;
									let Z = !1;
									if (!te.action.kind?.startsWith("notebook"))
										for (const se of Q ?? []) {
											const re = se;
											if (!(re.resource && (0, w.$gh)(re.resource, q.uri))) {
												Z = !0;
												break;
											}
										}
									if (Z) {
										ie.warn(
											"Failed to apply code action on save, applied to multiple resources.",
										);
										continue;
									}
									if (
										(K.report({
											message: (0, o.localize)(7820, null, te.action.title),
										}),
										await W.invokeFunction(
											c.$VAb,
											te,
											c.ApplyCodeActionReason.OnSave,
											{},
											J,
										),
										J.isCancellationRequested)
									)
										return;
								}
							} catch {
							} finally {
								_.dispose();
							}
						}
					}
					static async applyOnSaveFormatCodeAction(H, q, V, G, K, J, W) {
						const X = H.get(b.$Li),
							Y = H.get(a.$k3),
							ie = H.get(L.$uZ),
							ne = H.get(s.$ik),
							ee = new (class {
								constructor() {
									this.c = new Set();
								}
								d() {
									J.report({
										message: (0, o.localize)(
											7821,
											null,
											[...this.c].map((te) => `'${te}'`).join(", "),
											"command:workbench.action.openSettings?%5B%22notebook.defaultFormatter%22%5D",
										),
									});
								}
								report(te) {
									te.displayName &&
										!this.c.has(te.displayName) &&
										(this.c.add(te.displayName), this.d());
								}
							})(),
							_ = await B.getActionsToRun(q, V, G, Y, ie, ee, W);
						if (
							(_.validActions.length > 1 &&
								!K &&
								ne.warn(
									"More than one format code action is provided, the 0th one will be used. A default can be specified via `notebook.defaultFormatter` in your settings.",
								),
							W.isCancellationRequested)
						)
							return _.dispose(), !1;
						try {
							const te = K
								? _.validActions.find((Q) => Q.provider?.extensionId === K)
								: _.validActions[0];
							if (
								!te ||
								(J.report({
									message: (0, o.localize)(7822, null, te.action.title),
								}),
								await X.invokeFunction(
									c.$VAb,
									te,
									c.ApplyCodeActionReason.OnSave,
									{},
									W,
								),
								W.isCancellationRequested)
							)
								return !1;
						} catch {
							return (
								ne.error("Failed to apply notebook format code action on save"),
								!1
							);
						} finally {
							_.dispose();
						}
						return !0;
					}
					static getActionsToRun(H, q, V, G, K, J, W) {
						return (0, c.$UAb)(
							G.codeActionProvider,
							H,
							H.getFullModelRange(),
							{
								type: r.CodeActionTriggerType.Invoke,
								triggerAction: n.CodeActionTriggerSource.OnSave,
								filter: { include: q, excludes: V, includeSourceActions: !0 },
							},
							J,
							W,
							K,
						);
					}
				}
				e.$UFc = B;
				function U(x) {
					const H = x.activeEditorPane;
					return (0, S.$eJb)(H)?.activeCodeEditor;
				}
				let z = class extends i.$1c {
					constructor(H, q) {
						super(), (this.c = H), (this.f = q), this.g();
					}
					g() {
						this.D(this.f.addSaveParticipant(this.c.createInstance(N))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(O))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(M))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(R))),
							this.D(this.f.addSaveParticipant(this.c.createInstance(A)));
					}
				};
				(e.$VFc = z),
					(e.$VFc = z = Ne([j(0, b.$Li), j(1, D.$iZ)], z)),
					l.$Io
						.as($.Extensions.Workbench)
						.registerWorkbenchContribution(z, k.LifecyclePhase.Restored);
			},
		),
		