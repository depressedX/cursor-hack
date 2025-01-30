import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/strings.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/commands/trimTrailingWhitespaceCommand.js';
import '../../../../editor/common/core/editOperation.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../editor/contrib/format/browser/format.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import '../../format/browser/formatModified.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/host/browser/host.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/textfile/common/textfiles.js';
define(
			de[3692],
			he([
				1, 0, 33, 318, 3, 162, 37, 56, 65, 1148, 188, 48, 17, 74, 69, 393, 291,
				674, 254, 4, 10, 39, 5, 84, 30, 32, 55, 44, 1885, 18, 87, 52, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*cancellation*/,
				i /*hierarchicalKind*/,
				w /*lifecycle*/,
				E /*stopwatch*/,
				C /*strings*/,
				d /*editorBrowser*/,
				m /*codeEditorService*/,
				r /*trimTrailingWhitespaceCommand*/,
				u /*editOperation*/,
				a /*position*/,
				h /*range*/,
				c /*languages*/,
				n /*languageFeatures*/,
				g /*codeAction*/,
				p /*types*/,
				o /*format*/,
				f /*snippetController2*/,
				b /*nls*/,
				s /*configuration*/,
				l /*keybinding*/,
				y /*instantiation*/,
				$ /*progress*/,
				v /*platform*/,
				S /*telemetry*/,
				I /*contributions*/,
				T /*editor*/,
				P /*formatModified*/,
				k /*editorService*/,
				L /*host*/,
				D /*lifecycle*/,
				M /*textfiles*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VXc = e.$UXc = e.$TXc = e.$SXc = void 0),
					(C = mt(C));
				let N = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						if (!H.textEditorModel) return;
						const V = this.c.getValue("files.trimTrailingWhitespace", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}),
							G = this.c.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
								{
									overrideIdentifier: H.textEditorModel.getLanguageId(),
									resource: H.resource,
								},
							);
						V && this.e(H.textEditorModel, q.reason === T.SaveReason.AUTO, G);
					}
					e(H, q, V) {
						let G = [],
							K = [];
						const J = A(H, this.d);
						if (J && ((G = J.getSelections()), q)) {
							K = G.map((Y) => Y.getPosition());
							const X = f.$aDb.get(J)?.getSessionEnclosingRange();
							if (X)
								for (let Y = X.startLineNumber; Y <= X.endLineNumber; Y++)
									K.push(new a.$hL(Y, H.getLineMaxColumn(Y)));
						}
						const W = (0, r.$Qic)(H, K, V);
						W.length && H.pushEditOperations(G, W, (X) => G);
					}
				};
				(e.$SXc = N), (e.$SXc = N = Ne([j(0, s.$gj), j(1, m.$dtb)], N));
				function A(x, H) {
					let q = null;
					if (x.isAttachedToEditor()) {
						for (const V of H.listCodeEditors())
							if (V.hasModel() && V.getModel() === x) {
								if (V.hasTextFocus()) return V;
								q = V;
							}
					}
					return q;
				}
				let R = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						H.textEditorModel &&
							this.c.getValue("files.insertFinalNewline", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}) &&
							this.e(H.textEditorModel);
					}
					e(H) {
						const q = H.getLineCount(),
							V = H.getLineContent(q),
							G = C.$Df(V) === -1;
						if (!q || G) return;
						const K = [
								u.$jL.insert(new a.$hL(q, H.getLineMaxColumn(q)), H.getEOL()),
							],
							J = A(H, this.d);
						J
							? J.executeEdits("insertFinalNewLine", K, J.getSelections())
							: H.pushEditOperations([], K, () => null);
					}
				};
				(e.$TXc = R), (e.$TXc = R = Ne([j(0, s.$gj), j(1, m.$dtb)], R));
				let O = class {
					constructor(H, q) {
						(this.c = H), (this.d = q);
					}
					async participate(H, q) {
						H.textEditorModel &&
							this.c.getValue("files.trimFinalNewlines", {
								overrideIdentifier: H.textEditorModel.getLanguageId(),
								resource: H.resource,
							}) &&
							this.f(H.textEditorModel, q.reason === T.SaveReason.AUTO);
					}
					e(H) {
						for (let q = H.getLineCount(); q >= 1; q--)
							if (H.getLineLength(q) > 0) return q;
						return 0;
					}
					f(H, q) {
						const V = H.getLineCount();
						if (V === 1) return;
						let G = [],
							K = 0;
						const J = A(H, this.d);
						if (J && ((G = J.getSelections()), q))
							for (let ie = 0, ne = G.length; ie < ne; ie++) {
								const ee = G[ie].positionLineNumber;
								ee > K && (K = ee);
							}
						const W = this.e(H),
							X = Math.max(W + 1, K + 1),
							Y = H.validateRange(new h.$iL(X, 1, V, H.getLineMaxColumn(V)));
						Y.isEmpty() ||
							(H.pushEditOperations(G, [u.$jL.delete(Y)], (ie) => G),
							J?.setSelections(G));
					}
				};
				(e.$UXc = O), (e.$UXc = O = Ne([j(0, s.$gj), j(1, m.$dtb)], O));
				let B = class {
					constructor(H, q, V) {
						(this.c = H), (this.d = q), (this.e = V);
					}
					async participate(H, q, V, G) {
						if (!H.textEditorModel || q.reason === T.SaveReason.AUTO) return;
						const K = H.textEditorModel,
							J = { overrideIdentifier: K.getLanguageId(), resource: K.uri },
							W = new $.$0N((ne) => {
								V.report({
									message: (0, b.localize)(
										4899,
										null,
										ne.displayName ||
											(ne.extensionId && ne.extensionId.value) ||
											"???",
										"command:workbench.action.openSettings?%5B%22editor.formatOnSave%22%5D",
									),
								});
							});
						if (!this.c.getValue("editor.formatOnSave", J)) return;
						const Y = A(K, this.d) || K,
							ie = this.c.getValue("editor.formatOnSaveMode", J);
						if (ie === "file")
							await this.e.invokeFunction(
								o.$Nhc,
								Y,
								o.FormattingMode.Silent,
								W,
								G,
							);
						else {
							const ne = await this.e.invokeFunction(
								P.$RXc,
								(0, d.$0sb)(Y) ? Y.getModel() : Y,
							);
							ne === null && ie === "modificationsIfAvailable"
								? await this.e.invokeFunction(
										o.$Nhc,
										Y,
										o.FormattingMode.Silent,
										W,
										G,
									)
								: ne &&
									(await this.e.invokeFunction(
										o.$Lhc,
										Y,
										ne,
										o.FormattingMode.Silent,
										W,
										G,
										!1,
									));
						}
					}
				};
				B = Ne([j(0, s.$gj), j(1, m.$dtb), j(2, y.$Li)], B);
				let U = class extends w.$1c {
					constructor(H, q, V, G, K, J, W, X) {
						super(),
							(this.c = H),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.j = K),
							(this.m = J),
							(this.n = W),
							(this.q = X),
							this.D(
								this.j.onDidChangeFocus(() => {
									this.r();
								}),
							),
							this.D(
								this.m.onDidActiveEditorChange(() => {
									this.r();
								}),
							);
					}
					async r() {
						if (
							this.c.getValue("editor.codeActions.triggerOnFocusChange") &&
							this.c.getValue("files.autoSave") === "afterDelay"
						) {
							const H = this.n.getActiveCodeEditor()?.getModel();
							if (!H) return;
							const q = {
									overrideIdentifier: H.getLanguageId(),
									resource: H.uri,
								},
								V = this.c.getValue("editor.codeActionsOnSave", q);
							if (!V || Array.isArray(V)) return;
							const G = Object.keys(V).filter(
									(W) =>
										V[W] &&
										V[W] === "always" &&
										p.$GAb.Source.contains(new i.$1L(W)),
								),
								K = new t.$Ce(),
								J = [];
							for (const W of G) J.push(new i.$1L(W));
							await this.u(H, J, [], $.$0N.None, K.token);
						}
					}
					async participate(H, q, V, G) {
						if (!H.textEditorModel) return;
						const K = H.textEditorModel,
							J = { overrideIdentifier: K.getLanguageId(), resource: K.uri },
							W = this.c.getValue("editor.codeActionsOnSave", J);
						if (
							!W ||
							q.reason === T.SaveReason.AUTO ||
							(q.reason !== T.SaveReason.EXPLICIT && Array.isArray(W))
						)
							return;
						const X = Array.isArray(W)
								? W
								: Object.keys(W).filter((ee) => W[ee] && W[ee] !== "never"),
							Y = this.t(X);
						if (
							(Array.isArray(W) ||
								Y.sort((ee, _) =>
									p.$GAb.SourceFixAll.contains(ee)
										? p.$GAb.SourceFixAll.contains(_)
											? 0
											: -1
										: p.$GAb.SourceFixAll.contains(_)
											? 1
											: 0,
								),
							!Y.length)
						)
							return;
						const ie = Array.isArray(W)
							? []
							: Object.keys(W)
									.filter((ee) => W[ee] === "never" || !1)
									.map((ee) => new i.$1L(ee));
						V.report({ message: (0, b.localize)(4900, null) });
						const ne = Array.isArray(W)
							? Y
							: Y.filter(
									(ee) =>
										W[ee.value] === "always" ||
										((W[ee.value] === "explicit" || W[ee.value] === !0) &&
											q.reason === T.SaveReason.EXPLICIT),
								);
						await this.u(K, ne, ie, V, G);
					}
					t(H) {
						const q = H.map((V) => new i.$1L(V));
						return q.filter((V) =>
							q.every((G) => G.equals(V) || !G.contains(V)),
						);
					}
					async u(H, q, V, G, K) {
						const J = new (class {
							constructor() {
								this.c = new Set();
							}
							d() {
								G.report({
									message: (0, b.localize)(
										4901,
										null,
										[...this.c].map((W) => `'${W}'`).join(", "),
										"command:workbench.action.openSettings?%5B%22editor.codeActionsOnSave%22%5D",
									),
								});
							}
							report(W) {
								W.displayName &&
									!this.c.has(W.displayName) &&
									(this.c.add(W.displayName), this.d());
							}
						})();
						for (const W of q) {
							const X = new E.$le(),
								Y = await this.w(H, W, V, J, K);
							if (
								(this.q.publicLog2("codeAction.appliedOnSave", {
									codeAction: W.value,
									duration: X.elapsed(),
								}),
								K.isCancellationRequested)
							) {
								Y.dispose();
								return;
							}
							try {
								for (const ie of Y.validActions)
									if (
										(G.report({
											message: (0, b.localize)(4902, null, ie.action.title),
										}),
										await this.f.invokeFunction(
											g.$VAb,
											ie,
											g.ApplyCodeActionReason.OnSave,
											{},
											K,
										),
										K.isCancellationRequested)
									)
										return;
							} catch {
							} finally {
								Y.dispose();
							}
						}
					}
					w(H, q, V, G, K) {
						return (0, g.$UAb)(
							this.g.codeActionProvider,
							H,
							H.getFullModelRange(),
							{
								type: c.CodeActionTriggerType.Auto,
								triggerAction: p.CodeActionTriggerSource.OnSave,
								filter: { include: q, excludes: V, includeSourceActions: !0 },
							},
							G,
							K,
							this.h,
						);
					}
				};
				U = Ne(
					[
						j(0, s.$gj),
						j(1, y.$Li),
						j(2, n.$k3),
						j(3, l.$uZ),
						j(4, L.$asb),
						j(5, k.$IY),
						j(6, m.$dtb),
						j(7, S.$km),
					],
					U,
				);
				let z = class extends w.$1c {
					constructor(H, q) {
						super(), (this.c = H), (this.f = q), this.g();
					}
					g() {
						this.D(this.f.files.addSaveParticipant(this.c.createInstance(N))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(U))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(B))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(R))),
							this.D(this.f.files.addSaveParticipant(this.c.createInstance(O)));
					}
				};
				(e.$VXc = z),
					(e.$VXc = z = Ne([j(0, y.$Li), j(1, M.$kZ)], z)),
					v.$Io
						.as(I.Extensions.Workbench)
						.registerWorkbenchContribution(z, D.LifecyclePhase.Restored);
			},
		),
		