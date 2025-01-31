import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/core/position.js';
import '../../../../../editor/contrib/gotoSymbol/browser/goToSymbol.js';
import '../../../../../editor/contrib/folding/browser/folding.js';
define(
			de[3238],
			he([1, 0, 228, 3, 42, 25, 6, 19, 33, 204, 69, 17, 48, 414, 350]),
			function (ce /*require*/,
 e /*exports*/,
 t /*context_pb*/,
 i /*lifecycle*/,
 w /*resolverService*/,
 E /*workspace*/,
 C /*event*/,
 d /*resources*/,
 m /*cancellation*/,
 r /*outlineModel*/,
 u /*languageFeatures*/,
 a /*range*/,
 h /*position*/,
 c /*goToSymbol*/,
 n /*folding*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JZc = void 0);
				let g = class {
					constructor(b, s, l, y, $) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.g = $),
							(this.h = void 0),
							(this.i = new i.$Zc()),
							(this.j = new AbortController()),
							(this.k = void 0),
							(this.l = void 0),
							(this.m = void 0),
							(this.lastLocationData = void 0);
					}
					async handleModel(b) {
						if (this.j.signal.aborted) {
							console.warn(
								"Trying to handle model after dispose. This is somewhat suspect. Ignoring.",
							);
							return;
						}
						const s = this.lastLocationData;
						if (s === void 0) {
							console.warn("Last location data is undefined. This is bad.");
							return;
						}
						const l = new m.$Ce();
						this.i.add(l),
							this.j.signal.addEventListener("abort", () => {
								l.cancel();
							});
						const y = [],
							$ = Math.max(1, s.replaceRange.startLineNumber - 5),
							v = Math.min(
								b.getLineCount(),
								s.replaceRange.endLineNumberExclusive + 2 - 1,
							),
							S = new a.$iL($, 1, v, b.getLineMaxColumn(v));
						for (let R = S.startLineNumber; R <= S.endLineNumber; R++) {
							b.tokenization.tokenizeIfCheap(R);
							const O = b.tokenization.getLineTokens(R),
								B = O.getLineContent();
							for (let U = 0; U < O.getCount(); U++) {
								const z = O.getStartOffset(U),
									F = O.getEndOffset(U),
									x = O.getStandardTokenType(U),
									H = B.substring(z, F),
									q = O.getClassName(U),
									V = new h.$hL(R, z + 1);
								/[a-zA-Z]/.test(H) && y.push(V);
							}
						}
						const I = (R) => !o(R.range, S),
							T = this.g.definitionProvider;
						let P = (
							await Promise.all(
								y.map(async (R) =>
									(
										await (0, c.$POb)(T, b, R, !1, l.token)
									)
										.filter(I)
										.map((B) => ({ def: B, position: R })),
								),
							)
						).flat();
						const k = this.g.typeDefinitionProvider;
						let L = (
							await Promise.all(
								y.map(async (R) =>
									(
										await (0, c.$SOb)(k, b, R, !1, l.token)
									)
										.filter(I)
										.map((B) => ({ def: B, position: R })),
								),
							)
						).flat();
						(P = P.filter(
							({ def: R }, O, B) =>
								O ===
								B.findIndex(
									(U) =>
										U.def.uri === R.uri &&
										U.def.range.startLineNumber === R.range.startLineNumber &&
										U.def.range.endLineNumber === R.range.endLineNumber,
								),
						)),
							(L = L.filter(
								({ def: R }, O, B) =>
									O ===
									B.findIndex(
										(U) =>
											U.def.uri === R.uri &&
											U.def.range.startLineNumber === R.range.startLineNumber &&
											U.def.range.endLineNumber === R.range.endLineNumber,
									),
							));
						const D = async ({ def: R, position: O }) => {
								const B = await this.e.createModelReference(R.uri);
								if (B.object.textEditorModel.isTooLargeForTokenization())
									return [];
								let U = R.range;
								if (
									(U.endLineNumber - U.startLineNumber > 50 &&
										(U = new a.$iL(
											U.startLineNumber,
											1,
											U.startLineNumber + 50,
											1,
										)),
									U.startLineNumber === U.endLineNumber)
								) {
									const x = await n.$ZNb
										.getFoldingRangeProviders(
											this.g,
											B.object.textEditorModel,
										)[0]
										?.provideFoldingRanges(
											B.object.textEditorModel,
											{},
											l.token,
										);
									if (x) {
										const H = x
											.filter((q) => q.start === U.startLineNumber)
											.sort((q, V) => V.end - V.start - (q.end - q.start))[0];
										H
											? (U = new a.$iL(H.start, 1, H.end, 1))
											: (U = new a.$iL(
													U.startLineNumber - 5,
													1,
													U.endLineNumber + 5,
													1,
												));
									}
								}
								let z = B.object.textEditorModel.getValueInRange(U);
								return z.trim().length === 0
									? []
									: [
											new t.$YB({
												relativeWorkspacePath: this.d.asRelativePath(b.uri),
												lineNumber: O.lineNumber,
												columnNumber: O.column,
												line: b.getLineContent(O.lineNumber),
												definitionChunk: new t.$HB({
													relativeWorkspacePath: this.d.asRelativePath(R.uri),
													startLineNumber: U.startLineNumber,
													chunkContents: z,
												}),
											}),
										];
							},
							M = (await Promise.all(P.map(D))).flat(),
							N = (await Promise.all(L.map(D))).flat();
						(
							await this.c.newItems(
								[...M, ...N].map((R) => ({
									item: { case: "goToDefinitionResult", value: R },
									intent: this.h,
								})),
							)
						).ok() || (this.lastLocationData = void 0);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(b, s) {
						if (
							this.j.signal.aborted ||
							((this.h = s),
							this.lastLocationData !== void 0 &&
								d.$dh.isEqual(this.lastLocationData.fileUri, b.fileUri) &&
								this.lastLocationData.replaceRange.startLineNumber ===
									b.replaceRange.startLineNumber &&
								this.lastLocationData.replaceRange.endLineNumberExclusive ===
									b.replaceRange.endLineNumberExclusive)
						)
							return;
						const l = this.lastLocationData?.fileUri !== b.fileUri;
						(this.lastLocationData = {
							fileUri: b.fileUri,
							replaceRange: b.replaceRange,
						}),
							this.k === void 0 || l
								? (this.k = (async () => {
										if (this.lastLocationData?.fileUri === void 0) {
											console.warn("File URI is undefined. This is bad.");
											return;
										}
										this.l?.dispose(),
											this.m?.dispose(),
											(this.l = await this.e.createModelReference(
												this.lastLocationData.fileUri,
											)),
											await this.handleModel(this.l.object.textEditorModel),
											(this.m = C.Event.defer(
												this.l.object.textEditorModel.onDidChangeContent.bind(
													this.l.object.textEditorModel,
												),
												this.i,
											)(() => {
												this.l &&
													this.handleModel(this.l.object.textEditorModel);
											}));
									})())
								: this.k.then(() => {
										this.l && this.handleModel(this.l.object.textEditorModel);
									});
					}
					async blockForFinalInput(b, s) {
						if (((this.h = s), this.h.type === t.ContextIntent_Type.AUTOMATIC))
							return "fallBackToCachedReranked";
						{
							const l = new Promise((y) => setTimeout(y, 5e3));
							return (
								await Promise.race([this.k, l]),
								"useFreshItemsEvenIfNotRerankedYet"
							);
						}
					}
					freeze() {
						this.j.abort();
					}
					unfreeze() {
						this.j = new AbortController();
					}
					dispose() {
						this.j.abort(),
							this.i.dispose(),
							this.m?.dispose(),
							this.l?.dispose();
					}
				};
				(e.$JZc = g),
					(e.$JZc = g =
						Ne([j(1, E.$Vi), j(2, w.$MO), j(3, r.$9Db), j(4, u.$k3)], g));
				function p(f, b) {
					return !(
						f.startLineNumber >= b.endLineNumberExclusive ||
						f.endLineNumber < b.startLineNumber
					);
				}
				function o(f, b) {
					return !(
						f.startLineNumber > b.endLineNumber ||
						f.endLineNumber < b.startLineNumber
					);
				}
			},
		)
