define(
			de[1290],
			he([
				1, 0, 83, 75, 33, 48, 74, 152, 69, 42, 350, 752, 660, 414, 541, 20, 5,
				25, 827, 17,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kfc = void 0),
					(e.$Jfc = s);
				function s($) {
					return (
						$ === void 0 ||
						($.definitions?.length === 0 &&
							$.implementations?.length === 0 &&
							$.hoverDetails === void 0)
					);
				}
				e.$Kfc = (0, p.$Mi)("symbolContextService");
				async function l($) {
					const v = await $(),
						S = new n.$pNb(v, ""),
						I = S.references.map((T) => T.link);
					return S.dispose(), I;
				}
				let y = class {
					constructor(v, S, I, T, P) {
						(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.k = P),
							(this.c = 1e4),
							(this.e = this.j.createInstance(f.$Ifc));
					}
					async internalGetSymbolContext(
						{ symbol: v, model: S, ctxtInfo: I, cancellationOptions: T },
						P,
					) {
						let k;
						S === void 0
							? (k = (await this.f.createModelReference(v.uri)).object
									.textEditorModel)
							: (k = S);
						const L = this.k.hoverProvider.ordered(k),
							D = new w.$Ce();
						T?.token?.onCancellationRequested(() => {
							D.cancel(), i.$Bfb.clearTimeout(M);
						});
						const M = i.$Bfb.setTimeout(() => {
							D.cancel();
						}, T?.timeout ?? this.c);
						try {
							const N = l(() =>
									(0, c.$POb)(
										this.k.definitionProvider,
										k,
										new E.$hL(v.position.lineNumber, v.position.column),
										!1,
										T?.token ?? w.CancellationToken.None,
									),
								),
								A = l(() =>
									(0, c.$ROb)(
										this.k.implementationProvider,
										k,
										new E.$hL(v.position.lineNumber, v.position.column),
										!1,
										T?.token ?? w.CancellationToken.None,
									),
								),
								R = async () => {
									let X;
									for (let Y = 0; Y < L.length; Y += 3) {
										const ne = L.slice(Y, Y + 3).map((_) =>
											_.provideHover(
												k,
												new E.$hL(v.position.lineNumber, v.position.column + 1),
												w.CancellationToken.None,
											),
										);
										if (
											((X = (await Promise.all(ne)).find((_) => _ !== void 0)),
											X)
										)
											break;
									}
									return X;
								},
								[O, B, U] = await Promise.all([N, A, R()]);
							if (O.length === 0) return;
							let z = O[0].originSelectionRange;
							if (!z) {
								for (const W of O)
									if (W.originSelectionRange) {
										z = W.originSelectionRange;
										break;
									}
							}
							const F = z ? k.getValueInRange(z) : "";
							let x = B.filter(
								(W) =>
									!O.some((X) => {
										const Y = X.range,
											ie = W.range;
										return b.$iL.areIntersecting(Y, ie);
									}),
							);
							x.length > 10 && (x = x.slice(0, 10));
							const H = O.map((W) => this.u(W, U, !0, F)),
								q = x.map((W) =>
									this.v({
										def: W,
										position: new E.$hL(
											W.range.startLineNumber,
											W.range.startColumn,
										),
										cancellationToken: D.token,
										model: void 0,
										symbolName: F,
										foldingRanges: void 0,
									}),
								),
								G = await Promise.all([...H, ...q]);
							let K = [],
								J = [];
							return (
								(K = G.slice(0, H.length)),
								(J = G.slice(H.length)),
								{
									originalSymbolNameAndSymbolRange: {
										name: F,
										range: z ?? new b.$iL(0, 0, 0, 0),
									},
									defs: K,
									hoverDetails: U ?? void 0,
									implementations: J,
								}
							);
						} finally {
							i.$Bfb.clearTimeout(M);
						}
					}
					async getSymbolContextForSymbolAtThisPosition({
						symbol: v,
						model: S,
						ctxtInfo: I,
						cancellationOptions: T,
					}) {
						const P = await this.internalGetSymbolContext(
							{ symbol: v, model: S, ctxtInfo: I, cancellationOptions: T },
							{ useQuickAccess: !1 },
						);
						if (P === void 0) return;
						const k = P.defs.map((L) => ({
							range: L.location.range,
							rawText: L.name,
							kind: L.kind,
						}));
						return {
							originalSymbolNameAndSymbolRange: {
								name: P.originalSymbolNameAndSymbolRange.name,
								range: P.originalSymbolNameAndSymbolRange.range,
							},
							ctxtSymbols: k,
							hoverDetails: P.hoverDetails ?? void 0,
						};
					}
					async getSymbolContextForSymbolAtThisPositionProto({
						symbol: v,
						model: S,
						ctxtInfo: I,
						cancellationOptions: T,
					}) {
						const P = new w.$Ce(),
							k = T?.token ?? P.token,
							L = T?.timeout ?? this.c;
						try {
							const D =
									S ??
									(await this.f.createModelReference(v.uri)).object
										.textEditorModel,
								M = new E.$hL(v.position.lineNumber, v.position.column),
								[N, A, R] = await Promise.all([
									this.l(D, M, k),
									this.m(D, M, k),
									this.n(D, M, k),
								]);
							if (N.length === 0) return;
							const O = this.o(N),
								B = O ? D.getValueInRange(O) : "",
								U = this.p(N, A),
								[z, F] = await Promise.all([
									this.q(N, R, B, k),
									this.q(U, null, B, k),
								]);
							return {
								originalSymbolNameAndSymbolRange: {
									name: B,
									range: O ?? new b.$iL(0, 0, 0, 0),
								},
								definitions: z,
								hoverDetails: R ? this.t(R) : void 0,
								implementations: F,
							};
						} finally {
							P.dispose();
						}
					}
					async l(v, S, I) {
						return l(() => (0, c.$POb)(this.k.definitionProvider, v, S, !1, I));
					}
					async m(v, S, I) {
						return l(() =>
							(0, c.$ROb)(this.k.implementationProvider, v, S, !1, I),
						);
					}
					async n(v, S, I) {
						const T = this.k.hoverProvider.ordered(v);
						for (let P = 0; P < T.length; P += 3) {
							const k = T.slice(P, P + 3),
								D = (
									await Promise.all(k.map((M) => M.provideHover(v, S, I)))
								).find((M) => M !== void 0);
							if (D) return D;
						}
					}
					o(v) {
						return v.find((S) => S.originSelectionRange)?.originSelectionRange;
					}
					p(v, S) {
						return S.filter(
							(I) => !v.some((T) => b.$iL.areIntersecting(T.range, I.range)),
						).slice(0, 10);
					}
					async q(v, S, I, T) {
						return Promise.all(
							v.map(async (P) => {
								const k = await this.f.createModelReference(P.uri);
								try {
									const L = this.r(P.range, S),
										D = k.object.textEditorModel.getValueInRange(L),
										N = `\`\`\`${k.object.textEditorModel.getLanguageId()}
${D}
\`\`\``;
									return new t.$_s({
										relativeWorkspacePath: this.h.asRelativePath(P.uri),
										textInSymbolRange: N,
										symbol: new t.$8s({ name: I, range: P.range }),
										uriComponents: P.uri,
									});
								} finally {
									k.dispose();
								}
							}),
						);
					}
					r(v, S) {
						return S
							? new b.$iL(v.startLineNumber, 1, v.endLineNumber + 4, 1)
							: new b.$iL(v.startLineNumber - 8, 1, v.endLineNumber + 2, 8);
					}
					t(v) {
						const S = v.contents[0].value ?? "",
							I = v.contents.slice(1).map((T) => T.value);
						return new t.$0s({ codeDetails: S, markdownBlocks: I });
					}
					async u(v, S, I, T) {
						const P = await this.f.createModelReference(v.uri),
							k = v.range;
						let L;
						I && S == null
							? (L = new b.$iL(
									k.startLineNumber - 8,
									1,
									k.endLineNumber + 2,
									8,
								))
							: (L = new b.$iL(k.startLineNumber, 1, k.endLineNumber + 4, 1));
						const D = P.object.textEditorModel,
							M = D.getValueInRange(L),
							A = `\`\`\`${D.getLanguageId()}
${M}
\`\`\``;
						return (
							P.dispose(),
							{
								textInSymbolRange: A,
								location: { uri: v.uri, range: v.range },
								name: T,
								kind: C.SymbolKind.Null,
							}
						);
					}
					async v({
						def: v,
						position: S,
						cancellationToken: I,
						model: T,
						foldingRanges: P,
						symbolName: k,
					}) {
						let L = v.range;
						if (
							(T ||
								(T = (await this.f.createModelReference(v.uri)).object
									.textEditorModel),
							P === void 0 && ((P = await this.x(T, I)), P === void 0))
						)
							return this.u({ uri: v.uri, range: v.range }, void 0, !1, k);
						if (
							(L.endLineNumber - L.startLineNumber > 50 &&
								(L = new b.$iL(
									L.startLineNumber,
									1,
									L.startLineNumber + 50,
									1,
								)),
							L.startLineNumber === L.endLineNumber)
						) {
							const A = P.filter((R) => R.start === L.startLineNumber).sort(
								(R, O) => O.end - O.start - (R.end - R.start),
							)[0];
							A
								? (L = new b.$iL(A.start, 1, A.end + 1, 1))
								: (L = new b.$iL(
										L.startLineNumber - 5,
										1,
										L.endLineNumber + 5,
										1,
									));
						}
						let D = T.getValueInRange(L);
						const N = `\`\`\`${T.getLanguageId()}
${D}
\`\`\``;
						return {
							name: k,
							kind: C.SymbolKind.Null,
							location: { range: L, uri: v.uri },
							textInSymbolRange: N,
						};
					}
					isRangeContained(v, S) {
						return (
							(S.startLineNumber < v.startLineNumber ||
								(S.startLineNumber === v.startLineNumber &&
									S.startColumn <= v.startColumn)) &&
							(S.endLineNumber > v.endLineNumber ||
								(S.endLineNumber === v.endLineNumber &&
									S.endColumn >= v.endColumn))
						);
					}
					async w(v, S, I) {
						const T = await this.e.getSymbolPicks(
								v,
								{ skipLocal: !1, skipSorting: !1 },
								I.token,
							),
							P = [];
						return (
							S.forEach((k) => {
								T.filter(
									(D) =>
										D.symbol &&
										D.symbol.location.uri.toString() === k.uri.toString() &&
										this.isRangeContained(k.range, D.symbol.location.range),
								).forEach((D) => {
									D.symbol && P.push(D.symbol);
								});
							}),
							P.length > 0 ? P : void 0
						);
					}
					async x(v, S, I = this.c) {
						const T = { limit: 5e3, update: () => {} },
							P = u.$ZNb.getFoldingRangeProviders(this.k, v);
						if (P.length > 0) {
							let k;
							for (let L = 0; L < P.length; L += 3) {
								const D = P.slice(L, L + 3);
								for (const M of D) {
									const N = await M.provideFoldingRanges(v, {}, S);
									if (N && N.length > 0) {
										k = N;
										break;
									}
								}
								if (k) break;
							}
							if (k) return k;
						}
					}
					async y(v, S, I = this.c) {
						const T = { limit: 5e3, update: () => {} },
							P = new a.$PNb(v, this.g, T);
						let k = P;
						const L = u.$ZNb.getFoldingRangeProviders(this.k, v);
						L.length > 0 &&
							(k.dispose(), (k = new h.$XNb(v, L, () => {}, T, P)));
						const D = await k.compute(S);
						return k.dispose(), D ?? void 0;
					}
				};
				(y = Ne(
					[j(0, r.$MO), j(1, d.$aN), j(2, o.$Vi), j(3, p.$Li), j(4, m.$k3)],
					y,
				)),
					(0, g.$lK)(e.$Kfc, y, g.InstantiationType.Delayed);
			},
		),
		