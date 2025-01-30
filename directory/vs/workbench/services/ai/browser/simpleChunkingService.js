import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/languages.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import '../../../../editor/common/model.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/cursorAsync.js';
import './rgSearch.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/services/model.js';
import '../../../../base/browser/hash.js';
define(
			de[1038],
			he([
				1, 0, 42, 204, 5, 350, 33, 69, 74, 25, 122, 152, 64, 20, 17, 741, 627,
				22, 67, 530,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resolverService*/,
 i /*outlineModel*/,
 w /*instantiation*/,
 E /*folding*/,
 C /*cancellation*/,
 d /*languageFeatures*/,
 m /*languages*/,
 r /*workspace*/,
 u /*textModel*/,
 a /*languageConfigurationRegistry*/,
 h /*model*/,
 c /*extensions*/,
 n /*range*/,
 g /*cursorAsync*/,
 p /*rgSearch*/,
 o /*files*/,
 f /*model*/,
 b /*hash*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$L8b = void 0),
					(e.$L8b = (0, w.$Mi)("simpleChunkingService"));
				var s;
				(function (P) {
					P[(P.FullFile = -1)] = "FullFile";
				})(s || (s = {}));
				const l = [
						m.SymbolKind.Namespace,
						m.SymbolKind.Class,
						m.SymbolKind.Method,
						m.SymbolKind.Constructor,
						m.SymbolKind.Interface,
						m.SymbolKind.Function,
					],
					y = {
						[m.SymbolKind.File]: "file",
						[m.SymbolKind.Module]: "module",
						[m.SymbolKind.Namespace]: "namespace",
						[m.SymbolKind.Package]: "package",
						[m.SymbolKind.Class]: "class",
						[m.SymbolKind.Method]: "method",
						[m.SymbolKind.Property]: "property",
						[m.SymbolKind.Field]: "field",
						[m.SymbolKind.Constructor]: "constructor",
						[m.SymbolKind.Enum]: "enum",
						[m.SymbolKind.Interface]: "interface",
						[m.SymbolKind.Function]: "function",
						[m.SymbolKind.Variable]: "variable",
						[m.SymbolKind.Constant]: "constant",
						[m.SymbolKind.String]: "string",
						[m.SymbolKind.Number]: "number",
						[m.SymbolKind.Boolean]: "boolean",
						[m.SymbolKind.Array]: "array",
						[m.SymbolKind.Object]: "object",
						[m.SymbolKind.Key]: "key",
						[m.SymbolKind.Null]: "null",
						[m.SymbolKind.EnumMember]: "enumMember",
						[m.SymbolKind.Struct]: "struct",
						[m.SymbolKind.Event]: "event",
						[m.SymbolKind.Operator]: "operator",
						[m.SymbolKind.TypeParameter]: "typeParameter",
					};
				function $(P, k, L = 10) {
					const D = P.kind;
					return D === s.FullFile
						? !0
						: l.includes(D) &&
								P.range.endLineNumber - P.range.startLineNumber >= L &&
								k.some(
									(M) =>
										M.start === P.range.startLineNumber &&
										M.end + 1 === P.range.endLineNumber,
								);
				}
				function v(P) {
					const L = /```\w+\n([\s\S]*)\n```/.exec(P);
					if (L !== null) return L[1];
				}
				function S(P) {
					const k = P.contents[0];
					let L;
					if (k !== void 0) {
						const A = v(k.value);
						if (A === void 0) return;
						L = A;
					} else return;
					const D = P.contents[1];
					let M = "";
					D !== void 0 && (M = D.value);
					const N = " ".repeat(2);
					return `${L}
${N}DESCRIPTION:
${M.split(`
`)
	.map((A) => `${N.repeat(2)}${A}`)
	.join(`
`)}`;
				}
				function I(P, k) {
					async function L(D, M = 0) {
						let N = "",
							A = " ".repeat(M * 4);
						const R = D.name;
						let O;
						D.kind === s.FullFile ? (O = "") : (O = `(${y[D.kind]}) `);
						const B = n.$iL.lift(D.selectionRange).getStartPosition();
						switch (D.kind) {
							case m.SymbolKind.Method:
							case m.SymbolKind.Constructor:
							case m.SymbolKind.Function: {
								if (k !== void 0) {
									const F = await k.provideHover(
										P,
										B,
										C.CancellationToken.None,
									);
									if (F != null) {
										const x = S(F);
										if (x !== void 0) {
											N +=
												x
													.split(`
`)
													.map((H) => A + H)
													.join(`
`) +
												`
`;
											break;
										}
									}
								}
								const z = P.getLineContent(
									D.selectionRange.startLineNumber,
								).trim();
								N +=
									A +
									O +
									z +
									`
`;
								break;
							}
							default: {
								N +=
									A +
									O +
									R +
									`
`;
								break;
							}
						}
						const U = await Promise.all(
							(D.children ?? []).map((z) => L(z, M + 1)),
						);
						for (const z of U) N += z;
						return N;
					}
					return L;
				}
				let T = class {
					constructor(k, L, D, M, N, A, R, O) {
						(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.n = O),
							(this.d = new Map());
					}
					async *getWorkspaceOutline(k) {
						const L = new g.$Opb(50),
							D = [],
							M = await this.m
								.getAllFiles()
								.then((N) => N.map((A) => A.relativeWorkspacePath));
						for (const N of M)
							(k !== void 0 && k(N)) ||
								D.push(
									L.withSemaphore(async () => {
										const A = await this.getLanguageModelOutline(N);
										if (A !== void 0)
											return { relativeWorkspacePath: N, outline: A };
									}),
								);
						for await (const N of (0, g.$Mpb)(D)) N !== void 0 && (yield N);
					}
					async getLanguageModelOutline(k) {
						const L = this.d.get(k),
							D = this.f.resolveRelativePath(k);
						if (L !== void 0) {
							const N = this.j.getModel(D);
							if (N !== null) {
								const A = N.getValue();
								if ((await (0, b.$pjb)(A)) === L.fileContentsHashed)
									return L.outline;
							} else {
								const A = await this.n
									.readFile(D)
									.then((O) => O.value.toString());
								if ((await (0, b.$pjb)(A)) === L.fileContentsHashed)
									return L.outline;
							}
						}
						const M = await this.o(k);
						if (M) return this.d.set(k, M), M.outline;
					}
					async o(k) {
						const L = await this.h.createModelReference(
							this.f.resolveRelativePath(k),
						);
						try {
							const D = L.object.textEditorModel,
								N = this.k.documentSymbolProvider.ordered(D);
							if (N.length === 0) return;
							const A = this.k.hoverProvider.ordered(D),
								R = await N[0].provideDocumentSymbols(
									D,
									C.CancellationToken.None,
								);
							if (R == null || R.length === 0) return;
							let O;
							A.length > 0 && (O = A[0]);
							const B = {
								kind: s.FullFile,
								name: k,
								children: R,
								range: D.getFullModelRange(),
								selectionRange: D.getFullModelRange(),
								detail: "",
								tags: [],
							};
							return {
								outline: await I(D, O)(B),
								fileContentsHashed: await (0, b.$pjb)(D.getValue()),
							};
						} finally {
							L.dispose();
						}
					}
					async getFoldingRanges(k) {
						const L = { limit: 5e3, update: () => {} },
							M = await E.$ZNb
								.getFoldingRangeProviders(this.k, k)[0]
								?.provideFoldingRanges(k, {}, C.CancellationToken.None);
						if (M) return M;
					}
					getChunksFromSymbolWrapper(k, L, D) {
						const M = (A) => $(A, L),
							N = (A) => {
								const R = A.range;
								let O;
								if (
									(A.kind === s.FullFile
										? (O = "")
										: (O = `${A.name} (${y[A.kind]})`),
									R.endLineNumber - R.startLineNumber < 100)
								)
									return [
										{
											range: A.range,
											fileOutline: O,
											kind: A.kind,
											foldedRanges: [],
										},
									];
								if (!M(A)) {
									const G = [];
									for (
										let K = R.startLineNumber;
										K < R.endLineNumber;
										K += 100
									) {
										const J = Math.min(K + 99, R.endLineNumber);
										G.push({
											range: new n.$iL(K, 1, J, 500),
											fileOutline: O,
											kind: A.kind,
											foldedRanges: [],
										});
									}
									return G;
								}
								if (A.children === void 0) return [];
								const B = A.children.filter(M),
									U = B.map(N)
										.map((G) =>
											G.map((K) => ({
												...K,
												fileOutline:
													A.kind === s.FullFile
														? K.fileOutline
														: O + " > " + K.fileOutline,
											})),
										)
										.flat(),
									z = B.map((G) => n.$iL.lift(G.range));
								A.kind === s.FullFile && z.push(...D.map((G) => n.$iL.lift(G))),
									z.sort((G, K) => G.startLineNumber - K.startLineNumber);
								const F = [];
								let x = n.$iL.lift(R).getStartPosition(),
									H = n.$iL.lift(R).getStartPosition(),
									q = [],
									V = 0;
								for (let [G, K] of z.entries()) {
									const J = K.startLineNumber - H.lineNumber;
									V + J > 100
										? (F.push({
												range: new n.$iL(x.lineNumber, 1, H.lineNumber, 500),
												fileOutline: O,
												kind: A.kind,
												foldedRanges: q,
											}),
											J > 100
												? (F.push({
														range: new n.$iL(
															H.lineNumber + 1,
															1,
															K.startLineNumber - 1,
															500,
														),
														fileOutline: O,
														kind: A.kind,
														foldedRanges: [],
													}),
													(x = K.getStartPosition()),
													(H = K.getEndPosition()),
													(q = [K]),
													(V = 0))
												: ((x = K.getStartPosition()),
													(H = K.getEndPosition()),
													(q = [K]),
													(V = J)))
										: ((H = K.getEndPosition()), q.push(K), (V += J));
								}
								return (
									F.push({
										range: new n.$iL(
											x.lineNumber,
											1,
											R.endLineNumber,
											R.endColumn,
										),
										fileOutline: O,
										kind: A.kind,
										foldedRanges: q,
									}),
									[...U, ...F]
								);
							};
						return N(k);
					}
					async getChunks(k) {
						const L = this.f.resolveRelativePath(k),
							D = await this.h.createModelReference(L);
						try {
							const M = D.object.textEditorModel,
								N = await this.getFoldingRanges(M);
							if (N === void 0) return [];
							const A = new Set(),
								R = [],
								O = N.filter((H) => H.kind?.value === m.$jM.Imports.value);
							R.push(
								...O.map((H) => {
									for (let q = H.start; q <= H.end; q++) A.add(q);
									return {
										contents: M.getValueInRange({
											startLineNumber: H.start,
											endLineNumber: H.end,
											startColumn: 1,
											endColumn: 500,
										}),
										path: k,
										fileOutline: "imports",
									};
								}),
							);
							const z = await this.k.documentSymbolProvider
								.ordered(M)[0]
								.provideDocumentSymbols(M, C.CancellationToken.None);
							if (z == null) return R;
							const F = {
									kind: s.FullFile,
									name: k,
									children: z,
									range: M.getFullModelRange(),
									selectionRange: M.getFullModelRange(),
									detail: "",
									tags: [],
								},
								x = this.getChunksFromSymbolWrapper(
									F,
									N,
									O.map((H) => ({
										startLineNumber: H.start,
										endLineNumber: H.end + 1,
										startColumn: 1,
										endColumn: 1,
									})),
								).sort(
									(H, q) => H.range.startLineNumber - q.range.startLineNumber,
								);
							return (
								R.push(
									...x.map((H) => {
										const q = M.getValueInRange(H.range);
										if (H.foldedRanges.length === 0)
											return {
												contents: q,
												path: k,
												fileOutline: H.fileOutline,
											};
										const V = H.range.startLineNumber,
											G = H.foldedRanges
												.map((W) => ({
													...W,
													startLineNumber: W.startLineNumber - V + 1,
													endLineNumber: W.endLineNumber - V + 1,
												}))
												.sort((W, X) => X.startLineNumber - W.startLineNumber),
											K = (0, u.$7X)(q).create(
												h.DefaultEndOfLine.LF,
											).textBuffer;
										K.applyEdits(
											G.map(
												(W) =>
													new h.$QN(
														null,
														n.$iL.lift({
															...W,
															startLineNumber: W.startLineNumber + 1,
															startColumn: 1,
															endColumn: 1,
														}),
														`...
`,
														!1,
														!1,
														!1,
													),
											),
											!1,
											!1,
										);
										const J = K.getLinesContent().join(`
`);
										return (
											K.dispose(),
											{ contents: J, path: k, fileOutline: H.fileOutline }
										);
									}),
								),
								R
							);
						} catch (M) {
							throw (console.log("ERROR ON", k), M);
						} finally {
							D.dispose();
						}
					}
					async getWorkspaceChunks(k) {
						const L = new g.$Opb(10),
							D = [],
							M = await this.m
								.getAllFiles()
								.then((N) => N.map((A) => A.relativeWorkspacePath));
						for (const N of M)
							(k !== void 0 && k(N)) ||
								D.push(L.withSemaphore(() => this.getChunks(N)));
						return (async function* () {
							for await (const N of (0, g.$Mpb)(D)) yield N;
						})();
					}
				};
				(T = Ne(
					[
						j(0, r.$Vi),
						j(1, i.$9Db),
						j(2, t.$MO),
						j(3, f.$QO),
						j(4, d.$k3),
						j(5, a.$aN),
						j(6, p.$O6b),
						j(7, o.$ll),
					],
					T,
				)),
					(0, c.$lK)(e.$L8b, T, c.InstantiationType.Delayed);
			},
		),
		