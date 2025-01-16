define(
			de[2764],
			he([
				1, 0, 745, 48, 17, 1535, 2561, 2695, 1541, 162, 1630, 1533, 587, 82, 23,
				29, 2555, 83, 2559, 2569, 935,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.EditorSimpleWorker = e.BaseEditorSimpleWorker = void 0),
					(e.create = v);
				const l = !1;
				class y {
					constructor() {
						this.d = new s.$xxb();
					}
					dispose() {}
					f(I) {
						return this.d.getModel(I);
					}
					g() {
						return this.d.getModels();
					}
					$acceptNewModel(I) {
						this.d.$acceptNewModel(I);
					}
					$acceptModelChanged(I, T) {
						this.d.$acceptModelChanged(I, T);
					}
					$acceptRemovedModel(I) {
						this.d.$acceptRemovedModel(I);
					}
					async $computeUnicodeHighlights(I, T, P) {
						const k = this.f(I);
						return k
							? u.$Ywb.computeUnicodeHighlights(k, T, P)
							: {
									ranges: [],
									hasMore: !1,
									ambiguousCharacterCount: 0,
									invisibleCharacterCount: 0,
									nonBasicAsciiCharacterCount: 0,
								};
					}
					async $findSectionHeaders(I, T) {
						const P = this.f(I);
						return P ? (0, b.$txb)(P, T) : [];
					}
					async $computeDiff(I, T, P, k) {
						const L = this.f(I),
							D = this.f(T);
						return !L || !D ? null : $.h(L, D, P, k);
					}
					async $computeWordDiff(I, T, P) {
						return (0, p.$rxb)(I, T, P);
					}
					async $computeLinesDiff(I, T) {
						const P = o.$Bs.fromBinary(new Uint8Array(I));
						return h.$qxb.getDefault().computeDiff(P.original, P.modified, T);
					}
					static h(I, T, P, k) {
						const L =
								k === "advanced" ? h.$qxb.getDefault() : h.$qxb.getLegacy(),
							D = I.getLinesContent(),
							M = T.getLinesContent(),
							N = L.computeDiff(D, M, P),
							A = N.changes.length > 0 ? !1 : this.j(I, T);
						function R(O) {
							return O.map((B) => [
								B.original.startLineNumber,
								B.original.endLineNumberExclusive,
								B.modified.startLineNumber,
								B.modified.endLineNumberExclusive,
								B.innerChanges?.map((U) => [
									U.originalRange.startLineNumber,
									U.originalRange.startColumn,
									U.originalRange.endLineNumber,
									U.originalRange.endColumn,
									U.modifiedRange.startLineNumber,
									U.modifiedRange.startColumn,
									U.modifiedRange.endLineNumber,
									U.modifiedRange.endColumn,
								]),
							]);
						}
						return {
							identical: A,
							quitEarly: N.hitTimeout,
							changes: R(N.changes),
							moves: N.moves.map((O) => [
								O.lineRangeMapping.original.startLineNumber,
								O.lineRangeMapping.original.endLineNumberExclusive,
								O.lineRangeMapping.modified.startLineNumber,
								O.lineRangeMapping.modified.endLineNumberExclusive,
								R(O.changes),
							]),
						};
					}
					static j(I, T) {
						const P = I.getLineCount(),
							k = T.getLineCount();
						if (P !== k) return !1;
						for (let L = 1; L <= P; L++) {
							const D = I.getLineContent(L),
								M = T.getLineContent(L);
							if (D !== M) return !1;
						}
						return !0;
					}
					async $computeDirtyDiff(I, T, P) {
						const k = this.f(I),
							L = this.f(T);
						if (!k || !L) return null;
						const D = k.getLinesContent(),
							M = L.getLinesContent();
						return new a.$HL(D, M, {
							shouldComputeCharChanges: !1,
							shouldPostProcessCharChanges: !1,
							shouldIgnoreTrimWhitespace: P,
							shouldMakePrettyDiff: !0,
							maxComputationTime: 1e3,
						}).computeDiff().changes;
					}
					static {
						this.k = 1e5;
					}
					async $computeMoreMinimalEdits(I, T, P) {
						const k = this.f(I);
						if (!k) return T;
						const L = [];
						let D;
						T = T.slice(0).sort((N, A) => {
							if (N.range && A.range)
								return w.$iL.compareRangesUsingStarts(N.range, A.range);
							const R = N.range ? 0 : 1,
								O = A.range ? 0 : 1;
							return R - O;
						});
						let M = 0;
						for (let N = 1; N < T.length; N++)
							w.$iL
								.getEndPosition(T[M].range)
								.equals(w.$iL.getStartPosition(T[N].range))
								? ((T[M].range = w.$iL.fromPositions(
										w.$iL.getStartPosition(T[M].range),
										w.$iL.getEndPosition(T[N].range),
									)),
									(T[M].text += T[N].text))
								: (M++, (T[M] = T[N]));
						T.length = M + 1;
						for (let { range: N, text: A, eol: R } of T) {
							if ((typeof R == "number" && (D = R), w.$iL.isEmpty(N) && !A))
								continue;
							const O = k.getValueInRange(N);
							if (((A = A.replace(/\r\n|\n|\r/g, k.eol)), O === A)) continue;
							if (Math.max(A.length, O.length) > $.k) {
								L.push({ range: N, text: A });
								continue;
							}
							const B = (0, t.$nL)(O, A, P),
								U = k.offsetAt(w.$iL.lift(N).getStartPosition());
							for (const z of B) {
								const F = k.positionAt(U + z.originalStart),
									x = k.positionAt(U + z.originalStart + z.originalLength),
									H = {
										text: A.substr(z.modifiedStart, z.modifiedLength),
										range: {
											startLineNumber: F.lineNumber,
											startColumn: F.column,
											endLineNumber: x.lineNumber,
											endColumn: x.column,
										},
									};
								k.getValueInRange(H.range) !== H.text && L.push(H);
							}
						}
						return (
							typeof D == "number" &&
								L.push({
									eol: D,
									text: "",
									range: {
										startLineNumber: 0,
										startColumn: 0,
										endLineNumber: 0,
										endColumn: 0,
									},
								}),
							L
						);
					}
					$computeHumanReadableDiff(I, T, P) {
						const k = this.f(I);
						if (!k) return T;
						const L = [];
						let D;
						T = T.slice(0).sort((M, N) => {
							if (M.range && N.range)
								return w.$iL.compareRangesUsingStarts(M.range, N.range);
							const A = M.range ? 0 : 1,
								R = N.range ? 0 : 1;
							return A - R;
						});
						for (let { range: M, text: N, eol: A } of T) {
							let F = function (H, q) {
									return new i.$hL(
										H.lineNumber + q.lineNumber - 1,
										q.lineNumber === 1 ? H.column + q.column - 1 : q.column,
									);
								},
								x = function (H, q) {
									const V = [];
									for (let G = q.startLineNumber; G <= q.endLineNumber; G++) {
										const K = H[G - 1];
										G === q.startLineNumber && G === q.endLineNumber
											? V.push(K.substring(q.startColumn - 1, q.endColumn - 1))
											: G === q.startLineNumber
												? V.push(K.substring(q.startColumn - 1))
												: G === q.endLineNumber
													? V.push(K.substring(0, q.endColumn - 1))
													: V.push(K);
									}
									return V;
								};
							if ((typeof A == "number" && (D = A), w.$iL.isEmpty(M) && !N))
								continue;
							const R = k.getValueInRange(M);
							if (((N = N.replace(/\r\n|\n|\r/g, k.eol)), R === N)) continue;
							if (Math.max(N.length, R.length) > $.k) {
								L.push({ range: M, text: N });
								continue;
							}
							const O = R.split(/\r\n|\n|\r/),
								B = N.split(/\r\n|\n|\r/),
								U = h.$qxb.getDefault().computeDiff(O, B, P),
								z = w.$iL.lift(M).getStartPosition();
							for (const H of U.changes)
								if (H.innerChanges)
									for (const q of H.innerChanges)
										L.push({
											range: w.$iL.fromPositions(
												F(z, q.originalRange.getStartPosition()),
												F(z, q.originalRange.getEndPosition()),
											),
											text: x(B, q.modifiedRange).join(k.eol),
										});
								else
									throw new g.$gb(
										"The experimental diff algorithm always produces inner changes",
									);
						}
						return (
							typeof D == "number" &&
								L.push({
									eol: D,
									text: "",
									range: {
										startLineNumber: 0,
										startColumn: 0,
										endLineNumber: 0,
										endColumn: 0,
									},
								}),
							L
						);
					}
					async $computeLinks(I) {
						const T = this.f(I);
						return T ? (0, E.$2wb)(T) : null;
					}
					async $computeDefaultDocumentColors(I) {
						const T = this.f(I);
						return T ? (0, f.$sxb)(T) : null;
					}
					static {
						this.l = 1e4;
					}
					async $textualSuggest(I, T, P, k) {
						const L = new r.$le(),
							D = new RegExp(P, k),
							M = new Set();
						e: for (const N of I) {
							const A = this.f(N);
							if (A) {
								for (const R of A.words(D))
									if (
										!(R === T || !isNaN(Number(R))) &&
										(M.add(R), M.size > $.l)
									)
										break e;
							}
						}
						return { words: Array.from(M), duration: L.elapsed() };
					}
					async $computeWordRanges(I, T, P, k) {
						const L = this.f(I);
						if (!L) return Object.create(null);
						const D = new RegExp(P, k),
							M = Object.create(null);
						for (let N = T.startLineNumber; N < T.endLineNumber; N++) {
							const A = L.getLineWords(N, D);
							for (const R of A) {
								if (!isNaN(Number(R.word))) continue;
								let O = M[R.word];
								O || ((O = []), (M[R.word] = O)),
									O.push({
										startLineNumber: N,
										startColumn: R.startColumn,
										endLineNumber: N,
										endColumn: R.endColumn,
									});
							}
						}
						return M;
					}
					async $navigateValueSet(I, T, P, k, L) {
						const D = this.f(I);
						if (!D) return null;
						const M = new RegExp(k, L);
						T.startColumn === T.endColumn &&
							(T = {
								startLineNumber: T.startLineNumber,
								startColumn: T.startColumn,
								endLineNumber: T.endLineNumber,
								endColumn: T.endColumn + 1,
							});
						const N = D.getValueInRange(T),
							A = D.getWordAtPosition(
								{ lineNumber: T.startLineNumber, column: T.startColumn },
								M,
							);
						if (!A) return null;
						const R = D.getValueInRange(A);
						return C.$3wb.INSTANCE.navigateValueSet(T, N, A, R, P);
					}
				}
				e.BaseEditorSimpleWorker = y;
				class $ extends y {
					constructor(I, T) {
						super(), (this.o = I), (this.p = T), (this.n = null);
					}
					async $ping() {
						return "pong";
					}
					$loadForeignModule(I, T, P) {
						const k = (M, N) => this.o.$fhr(M, N),
							D = { host: (0, c.$Go)(P, k), getMirrorModels: () => this.g() };
						return this.p
							? ((this.n = this.p(D, T)), Promise.resolve((0, c.$Fo)(this.n)))
							: new Promise((M, N) => {
									const A = (R) => {
										(this.n = R.create(D, T)), M((0, c.$Fo)(this.n));
									};
									if (!l) ce([`${I}`], A, N);
									else {
										const R = n.$7g.asBrowserUri(`${I}.js`).toString(!0);
										new Promise((O, B) => {
											ce([`${R}`], O, B);
										})
											.then(mt)
											.then(A)
											.catch(N);
									}
								});
					}
					$fmr(I, T) {
						if (!this.n || typeof this.n[I] != "function")
							return Promise.reject(
								new Error("Missing requestHandler or method: " + I),
							);
						try {
							return Promise.resolve(this.n[I].apply(this.n, T));
						} catch (P) {
							return Promise.reject(P);
						}
					}
				}
				e.EditorSimpleWorker = $;
				function v(S) {
					return new $(m.$6wb.getChannel(S), null);
				}
				typeof importScripts == "function" &&
					(globalThis.monaco = (0, d.$5wb)());
			},
		),
		