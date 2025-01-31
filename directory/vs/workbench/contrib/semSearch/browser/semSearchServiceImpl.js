import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/files/common/files.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/views/common/viewsService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../common/views.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './semSearchService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../editor/browser/services/codeEditorService.js';
import './floatingPicker.js';
import '../../../../base/common/path.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../editor/common/services/languageFeatures.js';
import './constants.js';
import '../../../services/ai/browser/aiMiscServices.js';
define(
			de[4217],
			he([
				1, 0, 20, 5, 10, 8, 25, 22, 18, 89, 96, 60, 42, 41, 40, 21, 52, 993, 3,
				7, 226, 45, 65, 4216, 54, 74, 204, 17, 204, 69, 1750, 137,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*instantiation*/,
				w /*configuration*/,
				E /*contextkey*/,
				C /*workspace*/,
				d /*files*/,
				m /*editorService*/,
				r /*viewsService*/,
				u /*layoutService*/,
				a /*views*/,
				h /*resolverService*/,
				c /*opener*/,
				n /*notification*/,
				g /*storage*/,
				p /*lifecycle*/,
				o /*semSearchService*/,
				f /*lifecycle*/,
				b /*dom*/,
				s /*repositoryService*/,
				l /*reactiveStorageService*/,
				y /*codeEditorService*/,
				$ /*floatingPicker*/,
				v /*path*/,
				S /*languages*/,
				I /*outlineModel*/,
				T /*range*/,
				P /*outlineModel*/,
				k /*languageFeatures*/,
				L /*constants*/,
				D /*aiMiscServices*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (b = mt(b));
				const M = !1;
				let N = class extends f.$1c {
					constructor(
						R,
						O,
						B,
						U,
						z,
						F,
						x,
						H,
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
					) {
						super(),
							(this.c = R),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.j = z),
							(this.m = F),
							(this.n = x),
							(this.q = H),
							(this.s = q),
							(this.t = V),
							(this.u = G),
							(this.w = K),
							(this.y = J),
							(this.z = W),
							(this.C = X),
							(this.F = Y),
							(this.G = ie),
							(this.H = ne),
							(this.I = ee),
							this.J();
					}
					J() {
						(this.a = b.$(".semsearch-box")),
							b.$fhb(this.q.mainContainer, this.a);
					}
					setState(R) {
						this.F.setNonPersistentStorage("semSearchState", R);
					}
					get state() {
						return this.F.nonPersistentStorage.semSearchState;
					}
					L() {
						const R = this.G.getActiveCodeEditor(),
							O = R?.getSelection(),
							B = R?.getModel();
						if (O && !O.isEmpty() && B) {
							const U = B.getValueInRange(O);
							return {
								uri: B.uri,
								range: O,
								rawText: U,
								text: "```\n" + U + "\n```",
								addedWithoutMention: !0,
							};
						}
					}
					async createSemSearch({ isGlobal: R }) {
						const B = this.G.getActiveCodeEditor()?.getModel()?.uri,
							U = this.L();
						this.setState({ selectedFile: R ? void 0 : B, codeSelection: U }),
							this.hide(),
							(this.b = (0, $.$EZc)(this.a, this.c));
					}
					hide() {
						this.b?.dispose();
					}
					async search({
						query: R,
						token: O,
						abortSignal: B,
						updateLineNumberClassification: U,
					}) {
						try {
							const z = performance.now(),
								F = await this.C.searchNewLocalFast(R, 30, {
									globFilter: void 0,
									raceNRequests: 10,
									abortSignal: B,
								}),
								x = performance.now(),
								H = await Promise.all(
									F.map(async (q) => {
										const V = q.codeResult;
										if (!V.codeBlock) return null;
										const G = this.h.resolveRelativePath(
												V.codeBlock.relativeWorkspacePath,
											),
											K = (0, v.$sc)(V.codeBlock.relativeWorkspacePath),
											J = V.codeBlock.range && {
												startLineNumber:
													V.codeBlock.range.startPosition?.line ?? 1,
												startColumn:
													V.codeBlock.range.startPosition?.column ?? 1,
												endLineNumber: V.codeBlock.range.endPosition?.line ?? 1,
												endColumn: V.codeBlock.range.endPosition?.column ?? 1,
											};
										let W = "",
											X;
										if (L.$I9b.USE_SYMBOL_RANGE)
											try {
												const ne = await this.t.createModelReference(G),
													ee = await I.$8Db.create(
														this.H.documentSymbolProvider,
														ne.object.textEditorModel,
														O,
													);
												if (J) {
													const _ = this.S(ee.children.values()),
														te = this.P(_, J);
													te && ((W = this.Q(te)), (X = te.range));
												}
												ne.dispose();
											} catch (ne) {
												console.warn(
													"Failed to get outline for",
													G.toString(),
													ne,
												);
											}
										const ie = V.codeBlock.contents
											.split(`
`)
											.slice(0, 2)
											.join(`
`)
											.trim();
										return {
											resource: G,
											title: K,
											description: W ? `${W} - ${ie}` : ie,
											range: J,
											symbolRange: X,
											localCodeResultPromise: q.localCodeResultPromise,
										};
									}),
								).then((q) => q.filter((V) => V !== null));
							return (
								this.M(H, R),
								console.log(
									"time to pick semsearch results, e2e",
									performance.now() - z,
								),
								M &&
									this.O({
										fastResults: F,
										query: R,
										abortSignal: B,
										updateLineNumberClassification: U,
									}),
								H
							);
						} catch {
							return [];
						}
					}
					async M(R, O) {
						const B = await Promise.all(
							R.map(async (U) => {
								const z = await U.localCodeResultPromise;
								return this.N(z?.codeBlock);
							}),
						);
					}
					N(R) {
						if (!R || !R.detailedLines) return null;
						const O = R.detailedLines
							.map((B) => B.text)
							.join(`
`);
						return `\`\`\`${R.relativeWorkspacePath}
${O}
\`\`\``;
					}
					async O({
						fastResults: R,
						query: O,
						abortSignal: B,
						updateLineNumberClassification: U,
					}) {
						const z = R.slice(0, 10),
							F = await Promise.all(
								z.map(async (x, H) => ({
									ogCodeResult: x.codeResult,
									localCodeResult: await x.localCodeResultPromise,
									idx: H,
								})),
							);
						for await (const x of this.C.getLineNumberClassifications(
							F,
							O,
							B,
						)) {
							const { withClassificationInfo: H, idx: q } = x;
							U(H);
						}
					}
					P(R, O) {
						for (const B of R)
							if (T.$iL.containsRange(B.range, O)) {
								const U = B.children ?? [];
								return this.P(U, O) || B;
							}
					}
					Q(R) {
						return `${this.R(R.kind)} ${R.name}`;
					}
					R(R) {
						switch (R) {
							case S.SymbolKind.Function:
							case S.SymbolKind.Method:
								return "\u{1D453}";
							case S.SymbolKind.Class:
								return "\u25C7";
							case S.SymbolKind.Interface:
								return "\u25CC";
							case S.SymbolKind.Enum:
								return "\u212E";
							case S.SymbolKind.Property:
								return "\u25CB";
							default:
								return "";
						}
					}
					S(R) {
						const O = [];
						for (const B of R)
							B instanceof P.$6Db && B.symbol
								? O.push(B.symbol)
								: B instanceof P.$7Db && O.push(...this.S(B.children.values()));
						return O;
					}
					dispose() {
						this.b?.dispose(), super.dispose();
					}
				};
				(N = Ne(
					[
						j(0, i.$Li),
						j(1, w.$gj),
						j(2, E.$6j),
						j(3, C.$Vi),
						j(4, d.$ll),
						j(5, m.$IY),
						j(6, r.$HMb),
						j(7, u.$mEb),
						j(8, a.$K1),
						j(9, h.$MO),
						j(10, c.$7rb),
						j(11, n.$4N),
						j(12, g.$lq),
						j(13, p.$n6),
						j(14, s.$J6b),
						j(15, l.$0zb),
						j(16, y.$dtb),
						j(17, k.$k3),
						j(18, D.$rfc),
					],
					N,
				)),
					(0, t.$lK)(o.$H9b, N, t.InstantiationType.Delayed);
			},
		)
