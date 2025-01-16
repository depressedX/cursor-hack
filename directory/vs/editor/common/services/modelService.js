define(
			de[960],
			he([
				1, 0, 6, 3, 12, 188, 17, 64, 122, 910, 172, 125, 10, 155, 136, 780, 23,
				82, 5,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Mb = e.$ZMb = void 0),
					(w = mt(w));
				function s(I) {
					return I.toString();
				}
				class l {
					constructor(T, P, k) {
						(this.model = T),
							(this.c = new i.$Zc()),
							(this.model = T),
							this.c.add(T.onWillDispose(() => P(T))),
							this.c.add(T.onDidChangeLanguage((L) => k(T, L)));
					}
					dispose() {
						this.c.dispose();
					}
				}
				const y =
					w.$n || w.$m ? d.DefaultEndOfLine.LF : d.DefaultEndOfLine.CRLF;
				class $ {
					constructor(T, P, k, L, D, M, N, A) {
						(this.uri = T),
							(this.initialUndoRedoSnapshot = P),
							(this.time = k),
							(this.sharesUndoRedoStack = L),
							(this.heapSize = D),
							(this.sha1 = M),
							(this.versionId = N),
							(this.alternativeVersionId = A);
					}
				}
				let v = class extends i.$1c {
					static {
						b = this;
					}
					static {
						this.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20 * 1024 * 1024;
					}
					constructor(T, P, k, L) {
						super(),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.t = L),
							(this.c = this.D(new t.$re())),
							(this.onModelAdded = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onModelRemoved = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onModelLanguageChanged = this.g.event),
							(this.h = Object.create(null)),
							(this.j = {}),
							(this.m = new Map()),
							(this.n = 0),
							this.D(this.q.onDidChangeConfiguration((D) => this.z(D))),
							this.z(void 0);
					}
					static u(T, P) {
						let k = r.$RK.tabSize;
						if (T.editor && typeof T.editor.tabSize < "u") {
							const U = parseInt(T.editor.tabSize, 10);
							isNaN(U) || (k = U), k < 1 && (k = 1);
						}
						let L = "tabSize";
						if (
							T.editor &&
							typeof T.editor.indentSize < "u" &&
							T.editor.indentSize !== "tabSize"
						) {
							const U = parseInt(T.editor.indentSize, 10);
							isNaN(U) || (L = Math.max(U, 1));
						}
						let D = r.$RK.insertSpaces;
						T.editor &&
							typeof T.editor.insertSpaces < "u" &&
							(D =
								T.editor.insertSpaces === "false"
									? !1
									: !!T.editor.insertSpaces);
						let M = y;
						const N = T.eol;
						N ===
						`\r
`
							? (M = d.DefaultEndOfLine.CRLF)
							: N ===
									`
` && (M = d.DefaultEndOfLine.LF);
						let A = r.$RK.trimAutoWhitespace;
						T.editor &&
							typeof T.editor.trimAutoWhitespace < "u" &&
							(A =
								T.editor.trimAutoWhitespace === "false"
									? !1
									: !!T.editor.trimAutoWhitespace);
						let R = r.$RK.detectIndentation;
						T.editor &&
							typeof T.editor.detectIndentation < "u" &&
							(R =
								T.editor.detectIndentation === "false"
									? !1
									: !!T.editor.detectIndentation);
						let O = r.$RK.largeFileOptimizations;
						T.editor &&
							typeof T.editor.largeFileOptimizations < "u" &&
							(O =
								T.editor.largeFileOptimizations === "false"
									? !1
									: !!T.editor.largeFileOptimizations);
						let B = r.$RK.bracketPairColorizationOptions;
						return (
							T.editor?.bracketPairColorization &&
								typeof T.editor.bracketPairColorization == "object" &&
								(B = {
									enabled: !!T.editor.bracketPairColorization.enabled,
									independentColorPoolPerBracketType:
										!!T.editor.bracketPairColorization
											.independentColorPoolPerBracketType,
								}),
							{
								isForSimpleWidget: P,
								tabSize: k,
								indentSize: L,
								insertSpaces: D,
								detectIndentation: R,
								defaultEOL: M,
								trimAutoWhitespace: A,
								largeFileOptimizations: O,
								bracketPairColorizationOptions: B,
							}
						);
					}
					w(T, P) {
						if (T) return this.r.getEOL(T, P);
						const k = this.q.getValue("files.eol", { overrideIdentifier: P });
						return k && typeof k == "string" && k !== "auto"
							? k
							: w.OS === w.OperatingSystem.Linux ||
									w.OS === w.OperatingSystem.Macintosh
								? `
`
								: `\r
`;
					}
					y() {
						const T = this.q.getValue("files.restoreUndoStack");
						return typeof T == "boolean" ? T : !0;
					}
					getCreationOptions(T, P, k) {
						const L = typeof T == "string" ? T : T.languageId;
						let D = this.h[L + P];
						if (!D) {
							const M = this.q.getValue("editor", {
									overrideIdentifier: L,
									resource: P,
								}),
								N = this.w(P, L);
							(D = b.u({ editor: M, eol: N }, k)), (this.h[L + P] = D);
						}
						return D;
					}
					z(T) {
						const P = this.h;
						this.h = Object.create(null);
						const k = Object.keys(this.j);
						for (let L = 0, D = k.length; L < D; L++) {
							const M = k[L],
								N = this.j[M],
								A = N.model.getLanguageId(),
								R = N.model.uri;
							if (
								T &&
								!T.affectsConfiguration("editor", {
									overrideIdentifier: A,
									resource: R,
								}) &&
								!T.affectsConfiguration("files.eol", {
									overrideIdentifier: A,
									resource: R,
								})
							)
								continue;
							const O = P[A + R],
								B = this.getCreationOptions(A, R, N.model.isForSimpleWidget);
							b.C(N.model, B, O);
						}
					}
					static C(T, P, k) {
						k &&
							k.defaultEOL !== P.defaultEOL &&
							T.getLineCount() === 1 &&
							T.setEOL(
								P.defaultEOL === d.DefaultEndOfLine.LF
									? d.EndOfLineSequence.LF
									: d.EndOfLineSequence.CRLF,
							),
							!(
								k &&
								k.detectIndentation === P.detectIndentation &&
								k.insertSpaces === P.insertSpaces &&
								k.tabSize === P.tabSize &&
								k.indentSize === P.indentSize &&
								k.trimAutoWhitespace === P.trimAutoWhitespace &&
								(0, o.$zo)(
									k.bracketPairColorizationOptions,
									P.bracketPairColorizationOptions,
								)
							) &&
								(P.detectIndentation
									? (T.detectIndentation(P.insertSpaces, P.tabSize),
										T.updateOptions({
											trimAutoWhitespace: P.trimAutoWhitespace,
											bracketColorizationOptions:
												P.bracketPairColorizationOptions,
										}))
									: T.updateOptions({
											insertSpaces: P.insertSpaces,
											tabSize: P.tabSize,
											indentSize: P.indentSize,
											trimAutoWhitespace: P.trimAutoWhitespace,
											bracketColorizationOptions:
												P.bracketPairColorizationOptions,
										}));
					}
					F(T) {
						this.m.set(s(T.uri), T), (this.n += T.heapSize);
					}
					G(T) {
						const P = this.m.get(s(T));
						return P && (this.n -= P.heapSize), this.m.delete(s(T)), P;
					}
					H(T) {
						if (this.n > T) {
							const P = [];
							for (
								this.m.forEach((k) => {
									k.sharesUndoRedoStack || P.push(k);
								}),
									P.sort((k, L) => k.time - L.time);
								P.length > 0 && this.n > T;
							) {
								const k = P.shift();
								this.G(k.uri),
									k.initialUndoRedoSnapshot !== null &&
										this.s.restoreSnapshot(k.initialUndoRedoSnapshot);
							}
						}
					}
					I(T, P, k, L) {
						const D = this.getCreationOptions(P, k, L),
							M = this.t.createInstance(m.$$X, T, P, D, k);
						if (k && this.m.has(s(k))) {
							const R = this.G(k),
								O = this.s.getElements(k),
								B = this.P(),
								U = B.canComputeSHA1(M) ? B.computeSHA1(M) === R.sha1 : !1;
							if (U || R.sharesUndoRedoStack) {
								for (const z of O.past)
									(0, g.$yU)(z) && z.matchesResource(k) && z.setModel(M);
								for (const z of O.future)
									(0, g.$yU)(z) && z.matchesResource(k) && z.setModel(M);
								this.s.setElementsValidFlag(
									k,
									!0,
									(z) => (0, g.$yU)(z) && z.matchesResource(k),
								),
									U &&
										(M._overwriteVersionId(R.versionId),
										M._overwriteAlternativeVersionId(R.alternativeVersionId),
										M._overwriteInitialUndoRedoSnapshot(
											R.initialUndoRedoSnapshot,
										));
							} else
								R.initialUndoRedoSnapshot !== null &&
									this.s.restoreSnapshot(R.initialUndoRedoSnapshot);
						}
						const N = s(M.uri);
						if (this.j[N])
							throw new Error(
								"ModelService: Cannot add model because it already exists!",
							);
						const A = new l(
							M,
							(R) => this.N(R),
							(R, O) => this.O(R, O),
						);
						return (this.j[N] = A), A;
					}
					updateModel(T, P) {
						const k = this.getCreationOptions(
								T.getLanguageId(),
								T.uri,
								T.isForSimpleWidget,
							),
							{ textBuffer: L, disposable: D } = (0, m.$0X)(P, k.defaultEOL);
						if (T.equalsTextBuffer(L)) {
							D.dispose();
							return;
						}
						T.pushStackElement(),
							T.pushEOL(
								L.getEOL() ===
									`\r
`
									? d.EndOfLineSequence.CRLF
									: d.EndOfLineSequence.LF,
							),
							T.pushEditOperations([], b._computeEdits(T, L), () => []),
							T.pushStackElement(),
							D.dispose();
					}
					static J(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (
							let R = 0;
							R < N && T.getLineContent(k + R) === L.getLineContent(M + R);
							R++
						)
							A++;
						return A;
					}
					static L(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (
							let R = 0;
							R < N &&
							T.getLineContent(k + P - R) === L.getLineContent(M + D - R);
							R++
						)
							A++;
						return A;
					}
					static _computeEdits(T, P) {
						const k = T.getLineCount(),
							L = P.getLineCount(),
							D = this.J(T, k, 1, P, L, 1);
						if (k === L && D === k) return [];
						const M = this.L(T, k - D, D, P, L - D, D);
						let N, A;
						return (
							M > 0
								? ((N = new C.$iL(D + 1, 1, k - M + 1, 1)),
									(A = new C.$iL(D + 1, 1, L - M + 1, 1)))
								: D > 0
									? ((N = new C.$iL(
											D,
											T.getLineMaxColumn(D),
											k,
											T.getLineMaxColumn(k),
										)),
										(A = new C.$iL(
											D,
											1 + P.getLineLength(D),
											L,
											1 + P.getLineLength(L),
										)))
									: ((N = new C.$iL(1, 1, k, T.getLineMaxColumn(k))),
										(A = new C.$iL(1, 1, L, 1 + P.getLineLength(L)))),
							[
								E.$jL.replaceMove(
									N,
									P.getValueInRange(A, d.EndOfLinePreference.TextDefined),
								),
							]
						);
					}
					createModel(T, P, k, L = !1) {
						let D;
						return (
							P ? (D = this.I(T, P, k, L)) : (D = this.I(T, u.$0M, k, L)),
							this.c.fire(D.model),
							D.model
						);
					}
					destroyModel(T) {
						const P = this.j[s(T)];
						P && P.model.dispose();
					}
					getModels() {
						const T = [],
							P = Object.keys(this.j);
						for (let k = 0, L = P.length; k < L; k++) {
							const D = P[k];
							T.push(this.j[D].model);
						}
						return T;
					}
					getModel(T) {
						const P = s(T),
							k = this.j[P];
						return k ? k.model : null;
					}
					M(T) {
						return (
							T.scheme === p.Schemas.file ||
							T.scheme === p.Schemas.vscodeRemote ||
							T.scheme === p.Schemas.vscodeUserData ||
							T.scheme === p.Schemas.vscodeNotebookCell ||
							T.scheme === "fake-fs"
						);
					}
					N(T) {
						const P = s(T.uri),
							k = this.j[P],
							L = this.s.getUriComparisonKey(T.uri) !== T.uri.toString();
						let D = !1,
							M = 0;
						if (L || (this.y() && this.M(T.uri))) {
							const R = this.s.getElements(T.uri);
							if (R.past.length > 0 || R.future.length > 0) {
								for (const O of R.past)
									(0, g.$yU)(O) &&
										O.matchesResource(T.uri) &&
										((D = !0), (M += O.heapSize(T.uri)), O.setModel(T.uri));
								for (const O of R.future)
									(0, g.$yU)(O) &&
										O.matchesResource(T.uri) &&
										((D = !0), (M += O.heapSize(T.uri)), O.setModel(T.uri));
							}
						}
						const N = b.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK,
							A = this.P();
						if (D)
							if (!L && (M > N || !A.canComputeSHA1(T))) {
								const R = k.model.getInitialUndoRedoSnapshot();
								R !== null && this.s.restoreSnapshot(R);
							} else
								this.H(N - M),
									this.s.setElementsValidFlag(
										T.uri,
										!1,
										(R) => (0, g.$yU)(R) && R.matchesResource(T.uri),
									),
									this.F(
										new $(
											T.uri,
											k.model.getInitialUndoRedoSnapshot(),
											Date.now(),
											L,
											M,
											A.computeSHA1(T),
											T.getVersionId(),
											T.getAlternativeVersionId(),
										),
									);
						else if (!L) {
							const R = k.model.getInitialUndoRedoSnapshot();
							R !== null && this.s.restoreSnapshot(R);
						}
						delete this.j[P],
							k.dispose(),
							delete this.h[T.getLanguageId() + T.uri],
							this.f.fire(T);
					}
					O(T, P) {
						const k = P.oldLanguage,
							L = T.getLanguageId(),
							D = this.getCreationOptions(k, T.uri, T.isForSimpleWidget),
							M = this.getCreationOptions(L, T.uri, T.isForSimpleWidget);
						b.C(T, M, D), this.g.fire({ model: T, oldLanguageId: k });
					}
					P() {
						return new S();
					}
				};
				(e.$ZMb = v),
					(e.$ZMb =
						v =
						b =
							Ne([j(0, h.$gj), j(1, a.$YO), j(2, c.$GN), j(3, f.$Li)], v));
				class S {
					static {
						this.MAX_MODEL_SIZE = 10 * 1024 * 1024;
					}
					canComputeSHA1(T) {
						return T.getValueLength() <= S.MAX_MODEL_SIZE;
					}
					computeSHA1(T) {
						const P = new n.$Gj(),
							k = T.createSnapshot();
						let L;
						for (; (L = k.read()); ) P.update(L);
						return P.digest();
					}
				}
				e.$1Mb = S;
			},
		),
		