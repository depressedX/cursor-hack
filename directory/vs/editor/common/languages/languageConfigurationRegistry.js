define(
			de[152],
			he([
				1, 0, 6, 3, 37, 409, 532, 2560, 2691, 912, 2723, 934, 5, 10, 61, 20,
				172, 2692,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fN = e.$eN = e.$dN = e.$bN = e.$aN = e.$_M = void 0),
					(e.$cN = v),
					(w = mt(w));
				class f {
					constructor(M) {
						this.languageId = M;
					}
					affects(M) {
						return this.languageId ? this.languageId === M : !0;
					}
				}
				(e.$_M = f), (e.$aN = (0, h.$Mi)("languageConfigurationService"));
				let b = class extends i.$1c {
					constructor(M, N) {
						super(),
							(this.h = M),
							(this.j = N),
							(this.c = this.D(new k())),
							(this.f = this.D(new t.$re())),
							(this.onDidChange = this.f.event),
							(this.g = new Map());
						const A = new Set(Object.values(l));
						this.D(
							this.h.onDidChangeConfiguration((R) => {
								const O = R.change.keys.some((U) => A.has(U)),
									B = R.change.overrides
										.filter(([U, z]) => z.some((F) => A.has(F)))
										.map(([U]) => U);
								if (O) this.g.clear(), this.f.fire(new f(void 0));
								else
									for (const U of B)
										this.j.isRegisteredLanguageId(U) &&
											(this.g.delete(U), this.f.fire(new f(U)));
							}),
						),
							this.D(
								this.c.onDidChange((R) => {
									this.g.delete(R.languageId), this.f.fire(new f(R.languageId));
								}),
							);
					}
					register(M, N, A) {
						return this.c.register(M, N, A);
					}
					getLanguageConfiguration(M) {
						let N = this.g.get(M);
						return (
							N || ((N = s(M, this.c, this.h, this.j)), this.g.set(M, N)), N
						);
					}
				};
				(e.$bN = b), (e.$bN = b = Ne([j(0, c.$gj), j(1, n.$nM)], b));
				function s(D, M, N, A) {
					let R = M.getLanguageConfiguration(D);
					if (!R) {
						if (!A.isRegisteredLanguageId(D)) return new L(D, {});
						R = new L(D, {});
					}
					const O = y(R.languageId, N),
						B = I([R.underlyingConfig, O]);
					return new L(R.languageId, B);
				}
				const l = {
					brackets: "editor.language.brackets",
					colorizedBracketPairs: "editor.language.colorizedBracketPairs",
				};
				function y(D, M) {
					const N = M.getValue(l.brackets, { overrideIdentifier: D }),
						A = M.getValue(l.colorizedBracketPairs, { overrideIdentifier: D });
					return { brackets: $(N), colorizedBracketPairs: $(A) };
				}
				function $(D) {
					if (Array.isArray(D))
						return D.map((M) => {
							if (!(!Array.isArray(M) || M.length !== 2)) return [M[0], M[1]];
						}).filter((M) => !!M);
				}
				function v(D, M, N) {
					const A = D.getLineContent(M);
					let R = w.$Cf(A);
					return R.length > N - 1 && (R = R.substring(0, N - 1)), R;
				}
				class S {
					constructor(M) {
						(this.languageId = M),
							(this.f = null),
							(this.c = []),
							(this.d = 0),
							(this.f = null);
					}
					register(M, N) {
						const A = new T(M, N, ++this.d);
						return (
							this.c.push(A),
							(this.f = null),
							(0, i.$Yc)(() => {
								for (let R = 0; R < this.c.length; R++)
									if (this.c[R] === A) {
										this.c.splice(R, 1), (this.f = null);
										break;
									}
							})
						);
					}
					getResolvedConfiguration() {
						if (!this.f) {
							const M = this.g();
							M && (this.f = new L(this.languageId, M));
						}
						return this.f;
					}
					g() {
						return this.c.length === 0
							? null
							: (this.c.sort(T.cmp), I(this.c.map((M) => M.configuration)));
					}
				}
				function I(D) {
					let M = {
						comments: void 0,
						brackets: void 0,
						wordPattern: void 0,
						indentationRules: void 0,
						onEnterRules: void 0,
						autoClosingPairs: void 0,
						surroundingPairs: void 0,
						autoCloseBefore: void 0,
						folding: void 0,
						colorizedBracketPairs: void 0,
						__electricCharacterSupport: void 0,
					};
					for (const N of D)
						M = {
							comments: N.comments || M.comments,
							brackets: N.brackets || M.brackets,
							wordPattern: N.wordPattern || M.wordPattern,
							indentationRules: N.indentationRules || M.indentationRules,
							onEnterRules: N.onEnterRules || M.onEnterRules,
							autoClosingPairs: N.autoClosingPairs || M.autoClosingPairs,
							surroundingPairs: N.surroundingPairs || M.surroundingPairs,
							autoCloseBefore: N.autoCloseBefore || M.autoCloseBefore,
							folding: N.folding || M.folding,
							colorizedBracketPairs:
								N.colorizedBracketPairs || M.colorizedBracketPairs,
							__electricCharacterSupport:
								N.__electricCharacterSupport || M.__electricCharacterSupport,
						};
					return M;
				}
				class T {
					constructor(M, N, A) {
						(this.configuration = M), (this.priority = N), (this.order = A);
					}
					static cmp(M, N) {
						return M.priority === N.priority
							? M.order - N.order
							: M.priority - N.priority;
					}
				}
				class P {
					constructor(M) {
						this.languageId = M;
					}
				}
				e.$dN = P;
				class k extends i.$1c {
					constructor() {
						super(),
							(this.c = new Map()),
							(this.f = this.D(new t.$re())),
							(this.onDidChange = this.f.event),
							this.D(
								this.register(
									p.$0M,
									{
										brackets: [
											["(", ")"],
											["[", "]"],
											["{", "}"],
										],
										surroundingPairs: [
											{ open: "{", close: "}" },
											{ open: "[", close: "]" },
											{ open: "(", close: ")" },
											{ open: "<", close: ">" },
											{ open: '"', close: '"' },
											{ open: "'", close: "'" },
											{ open: "`", close: "`" },
										],
										colorizedBracketPairs: [],
										folding: { offSide: !0 },
									},
									0,
								),
							);
					}
					register(M, N, A = 0) {
						let R = this.c.get(M);
						R || ((R = new S(M)), this.c.set(M, R));
						const O = R.register(N, A);
						return (
							this.f.fire(new P(M)),
							(0, i.$Yc)(() => {
								O.dispose(), this.f.fire(new P(M));
							})
						);
					}
					getLanguageConfiguration(M) {
						return this.c.get(M)?.getResolvedConfiguration() || null;
					}
				}
				e.$eN = k;
				class L {
					constructor(M, N) {
						(this.languageId = M),
							(this.underlyingConfig = N),
							(this.c = null),
							(this.d = null),
							(this.f =
								this.underlyingConfig.brackets ||
								this.underlyingConfig.indentationRules ||
								this.underlyingConfig.onEnterRules
									? new u.$6M(this.underlyingConfig)
									: null),
							(this.comments = L.g(this.underlyingConfig)),
							(this.characterPair = new d.$3M(this.underlyingConfig)),
							(this.wordDefinition =
								this.underlyingConfig.wordPattern || E.$TK),
							(this.indentationRules = this.underlyingConfig.indentationRules),
							this.underlyingConfig.indentationRules
								? (this.indentRulesSupport = new r.$5M(
										this.underlyingConfig.indentationRules,
									))
								: (this.indentRulesSupport = null),
							(this.foldingRules = this.underlyingConfig.folding || {}),
							(this.bracketsNew = new o.$xM(M, this.underlyingConfig));
					}
					getWordDefinition() {
						return (0, E.$UK)(this.wordDefinition);
					}
					get brackets() {
						return (
							!this.c &&
								this.underlyingConfig.brackets &&
								(this.c = new a.$uM(
									this.languageId,
									this.underlyingConfig.brackets,
								)),
							this.c
						);
					}
					get electricCharacter() {
						return this.d || (this.d = new m.$4M(this.brackets)), this.d;
					}
					onEnter(M, N, A, R) {
						return this.f ? this.f.onEnter(M, N, A, R) : null;
					}
					getAutoClosingPairs() {
						return new C.$sM(this.characterPair.getAutoClosingPairs());
					}
					getAutoCloseBeforeSet(M) {
						return this.characterPair.getAutoCloseBeforeSet(M);
					}
					getSurroundingPairs() {
						return this.characterPair.getSurroundingPairs();
					}
					static g(M) {
						const N = M.comments;
						if (!N) return null;
						const A = {};
						if (
							(N.lineComment && (A.lineCommentToken = N.lineComment),
							N.blockComment)
						) {
							const [R, O] = N.blockComment;
							(A.blockCommentStartToken = R), (A.blockCommentEndToken = O);
						}
						return A;
					}
				}
				(e.$fN = L), (0, g.$lK)(e.$aN, b, g.InstantiationType.Delayed);
			},
		),
		