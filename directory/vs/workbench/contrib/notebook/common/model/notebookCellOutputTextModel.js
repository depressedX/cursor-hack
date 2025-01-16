define(de[1842], he([1, 0, 6, 3, 70]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$85 = void 0);
			class E extends i.$1c {
				get outputs() {
					return this.f.outputs || [];
				}
				get metadata() {
					return this.f.metadata;
				}
				get outputId() {
					return this.f.outputId;
				}
				get alternativeOutputId() {
					return this.b;
				}
				get versionId() {
					return this.c;
				}
				constructor(d) {
					super(),
						(this.f = d),
						(this.a = this.D(new t.$re())),
						(this.onDidChangeData = this.a.event),
						(this.c = 0),
						(this.h = {}),
						(this.b = this.f.outputId);
				}
				replaceData(d) {
					(this.h = {}),
						(this.f = d),
						this.j(),
						(this.c = this.c + 1),
						this.a.fire();
				}
				appendData(d) {
					this.g(),
						this.f.outputs.push(...d),
						this.j(),
						(this.c = this.c + 1),
						this.a.fire();
				}
				g() {
					this.outputs.forEach((d) => {
						(0, w.$76)(d.mime) &&
							(this.h[d.mime] || (this.h[d.mime] = {}),
							(this.h[d.mime][this.versionId] = d.data.byteLength));
					});
				}
				appendedSinceVersion(d, m) {
					const r = this.h[m]?.[d],
						u = this.outputs.find((a) => a.mime === m);
					if (r && u) return u.data.slice(r);
				}
				j() {
					if (
						this.outputs.length > 1 &&
						this.outputs.every((d) => (0, w.$76)(d.mime))
					) {
						const d = new Map(),
							m = [];
						this.outputs.forEach((r) => {
							let u;
							d.has(r.mime)
								? (u = d.get(r.mime))
								: ((u = []), d.set(r.mime, u), m.push(r.mime)),
								u.push(r.data.buffer);
						}),
							(this.outputs.length = 0),
							m.forEach((r) => {
								const u = (0, w.$86)(d.get(r));
								this.outputs.push({ mime: r, data: u.data }),
									u.didCompression && (this.h = {});
							});
					}
				}
				asDto() {
					return {
						metadata: this.f.metadata,
						outputs: this.f.outputs,
						outputId: this.f.outputId,
					};
				}
				bumpVersion() {
					this.c = this.c + 1;
				}
			}
			e.$85 = E;
		}),
		define(
			de[1029],
			he([1, 0, 6, 136, 3, 47, 17, 64, 1194, 1195, 172, 1842, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$95 = void 0),
					(e.$05 = n),
					(E = mt(E)),
					(d = mt(d));
				class c extends w.$1c {
					get outputs() {
						return this.n;
					}
					get metadata() {
						return this.q;
					}
					set metadata(o) {
						(this.q = o), (this.w = null), this.g.fire();
					}
					get internalMetadata() {
						return this.s;
					}
					set internalMetadata(o) {
						const f = this.s.lastRunSuccess !== o.lastRunSuccess;
						(o = { ...o, runStartTimeAdjustment: g(this.s, o) }),
							(this.s = o),
							(this.w = null),
							this.h.fire({ lastRunSuccessChanged: f });
					}
					get language() {
						return this.N;
					}
					set language(o) {
						(this.F &&
							this.F.getLanguageId() ===
								this.P.getLanguageIdByLanguageName(o) &&
							this.F.getLanguageId() ===
								this.P.getLanguageIdByLanguageName(this.language)) ||
							((this.L = !0), this.U(o));
					}
					get mime() {
						return this.O;
					}
					set mime(o) {
						this.O !== o &&
							((this.O = o), (this.w = null), this.f.fire("mime"));
					}
					get textBuffer() {
						if (this.t) return this.t;
						const o = new r.$0U();
						o.acceptChunk(this.M);
						const f = o.finish(!0),
							{ textBuffer: b, disposable: s } = f.create(
								d.DefaultEndOfLine.LF,
							);
						return (
							(this.t = b),
							this.D(s),
							this.D(
								this.t.onDidChangeContent(() => {
									(this.w = null),
										this.F || this.f.fire("content"),
										this.autoDetectLanguage();
								}),
							),
							this.t
						);
					}
					get alternativeId() {
						return this.z;
					}
					get textModel() {
						return this.F;
					}
					set textModel(o) {
						this.F !== o &&
							(this.C.clear(),
							(this.F = o),
							this.F &&
								(this.G(this.P, this.F.getLanguageId(), this.language),
								this.C.add(
									this.F.onDidChangeLanguage((f) =>
										this.G(this.P, f.newLanguage, this.language),
									),
								),
								this.C.add(
									this.F.onWillDispose(() => (this.textModel = void 0)),
								),
								this.C.add(
									this.F.onDidChangeContent(() => {
										this.F &&
											((this.y = this.F.getVersionId()),
											(this.z = this.F.getAlternativeVersionId())),
											(this.u = null),
											this.f.fire("content");
									}),
								),
								this.F._overwriteVersionId(this.y),
								this.F._overwriteAlternativeVersionId(this.y)));
					}
					G(o, f, b) {
						const s = f === u.$0M || f === "jupyter";
						!o.isRegisteredLanguageId(b) && s
							? this.j.fire(b)
							: (this.language = f);
					}
					static {
						this.H = 600;
					}
					get hasLanguageSetExplicitly() {
						return this.L;
					}
					constructor(o, f, b, s, l, y, $, v, S, I, T, P, k = void 0) {
						super(),
							(this.uri = o),
							(this.handle = f),
							(this.M = b),
							(this.N = s),
							(this.O = l),
							(this.cellKind = y),
							(this.collapseState = I),
							(this.transientOptions = T),
							(this.P = P),
							(this.Q = k),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeOutputs = this.a.event),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeOutputItems = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onDidChangeContent = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onDidChangeMetadata = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onDidChangeInternalMetadata = this.h.event),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeLanguage = this.j.event),
							(this.u = null),
							(this.w = null),
							(this.y = 1),
							(this.z = 1),
							(this.C = this.D(new w.$Zc())),
							(this.F = void 0),
							(this.I = this.D(new h.$Kh(c.H))),
							(this.J = !1),
							(this.L = !1),
							(this.n = $.map((L) => new a.$85(L))),
							(this.q = v ?? {}),
							(this.s = S ?? {});
					}
					enableAutoLanguageDetection() {
						(this.J = !0), this.autoDetectLanguage();
					}
					async autoDetectLanguage() {
						this.J && this.I.trigger(() => this.S());
					}
					async S() {
						if (this.hasLanguageSetExplicitly) return;
						const o = await this.Q?.detectLanguage(this.uri);
						o &&
							((this.F &&
								this.F.getLanguageId() ===
									this.P.getLanguageIdByLanguageName(o) &&
								this.F.getLanguageId() ===
									this.P.getLanguageIdByLanguageName(this.language)) ||
								this.U(o));
					}
					U(o) {
						const f = this.P.getLanguageIdByLanguageName(o);
						if (f !== null) {
							if (this.F) {
								const b = this.P.createById(f);
								this.F.setLanguage(b.languageId);
							}
							this.N !== o &&
								((this.N = o),
								(this.w = null),
								this.j.fire(o),
								this.f.fire("language"));
						}
					}
					resetTextBuffer(o) {
						this.t = o;
					}
					getValue() {
						const o = this.getFullModelRange();
						return this.textBuffer.getEOL() ===
							`
`
							? this.textBuffer.getValueInRange(o, d.EndOfLinePreference.LF)
							: this.textBuffer.getValueInRange(o, d.EndOfLinePreference.CRLF);
					}
					getTextBufferHash() {
						if (this.u !== null) return this.u;
						const o = new i.$Gj(),
							f = this.textBuffer.createSnapshot(!1);
						let b;
						for (; (b = f.read()); ) o.update(b);
						return (this.u = o.digest()), this.u;
					}
					getHashValue() {
						return this.w !== null
							? this.w
							: ((this.w = (0, i.$Aj)([
									(0, i.$Aj)(this.language),
									this.getTextBufferHash(),
									this.W(),
									this.transientOptions.transientOutputs
										? []
										: this.n.map((o) => ({
												outputs: o.outputs.map((f) => ({
													mime: f.mime,
													data: Array.from(f.data.buffer),
												})),
												metadata: o.metadata,
											})),
								])),
								this.w);
					}
					W() {
						const o = {},
							f = this.transientOptions.transientCellMetadata,
							b = new Set([...Object.keys(this.metadata)]);
						for (const s of b) f[s] || (o[s] = this.metadata[s]);
						return o;
					}
					getTextLength() {
						return this.textBuffer.getLength();
					}
					getFullModelRange() {
						const o = this.textBuffer.getLineCount();
						return new C.$iL(1, 1, o, this.textBuffer.getLineLength(o) + 1);
					}
					spliceNotebookCellOutputs(o) {
						if (o.deleteCount > 0 && o.newOutputs.length > 0) {
							const f = Math.min(o.deleteCount, o.newOutputs.length);
							for (let s = 0; s < f; s++) {
								const l = this.outputs[o.start + s],
									y = o.newOutputs[s];
								this.replaceOutput(l.outputId, y);
							}
							this.outputs
								.splice(
									o.start + f,
									o.deleteCount - f,
									...o.newOutputs.slice(f),
								)
								.forEach((s) => s.dispose()),
								this.a.fire({
									start: o.start + f,
									deleteCount: o.deleteCount - f,
									newOutputs: o.newOutputs.slice(f),
								});
						} else
							this.outputs
								.splice(o.start, o.deleteCount, ...o.newOutputs)
								.forEach((b) => b.dispose()),
								this.a.fire(o);
					}
					replaceOutput(o, f) {
						const b = this.outputs.findIndex((l) => l.outputId === o);
						return b < 0
							? !1
							: (this.outputs[b].replaceData({
									outputs: f.outputs,
									outputId: f.outputId,
									metadata: f.metadata,
								}),
								f.dispose(),
								this.c.fire(),
								!0);
					}
					changeOutputItems(o, f, b) {
						const s = this.outputs.findIndex((y) => y.outputId === o);
						if (s < 0) return !1;
						const l = this.outputs[s];
						return (
							f
								? l.appendData(b)
								: l.replaceData({
										outputId: o,
										outputs: b,
										metadata: l.metadata,
									}),
							this.c.fire(),
							!0
						);
					}
					X(o, f) {
						if (o.length !== f.length) return !1;
						for (let b = 0; b < this.outputs.length; b++) {
							const s = o[b],
								l = f[b];
							if (s.outputs.length !== l.outputs.length) return !1;
							for (let y = 0; y < s.outputs.length; y++)
								if (
									s.outputs[y].mime !== l.outputs[y].mime ||
									s.outputs[y].data.byteLength !== l.outputs[y].data.byteLength
								)
									return !1;
						}
						return !0;
					}
					equal(o) {
						return this.language !== o.language ||
							this.outputs.length !== o.outputs.length ||
							this.getTextLength() !== o.getTextLength() ||
							(!this.transientOptions.transientOutputs &&
								!this.X(this.outputs, o.outputs))
							? !1
							: this.getHashValue() === o.getHashValue();
					}
					fastEqual(o) {
						return this.language !== o.language ||
							this.mime !== o.mime ||
							this.cellKind !== o.cellKind ||
							this.internalMetadata?.executionOrder !==
								o.internalMetadata?.executionOrder ||
							this.internalMetadata?.lastRunSuccess !==
								o.internalMetadata?.lastRunSuccess ||
							this.internalMetadata?.runStartTime !==
								o.internalMetadata?.runStartTime ||
							this.internalMetadata?.runStartTimeAdjustment !==
								o.internalMetadata?.runStartTimeAdjustment ||
							this.internalMetadata?.runEndTime !==
								o.internalMetadata?.runEndTime ||
							(this.t && this.getValue() !== o.source)
							? !1
							: this.M === o.source;
					}
					dispose() {
						(0, w.$Vc)(this.n);
						const o = new m.$9U(
							[],
							"",
							`
`,
							!1,
							!1,
							!0,
							!0,
						);
						o.dispose(), (this.t = o), super.dispose();
					}
				}
				e.$95 = c;
				function n(p) {
					return {
						source: p.getValue(),
						language: p.language,
						mime: p.mime,
						cellKind: p.cellKind,
						outputs: p.outputs.map((o) => ({
							outputs: o.outputs,
							outputId: E.$9g(),
						})),
						metadata: {},
					};
				}
				function g(p, o) {
					if (
						p.runStartTime !== o.runStartTime &&
						typeof o.runStartTime == "number"
					) {
						const f = Date.now() - o.runStartTime;
						return f < 0 ? Math.abs(f) : 0;
					} else return o.runStartTimeAdjustment;
				}
			},
		),
		define(
			de[3479],
			he([
				1, 0, 6, 3, 1029, 70, 155, 3112, 745, 136, 1842, 67, 23, 19, 61, 122,
				28, 474, 17, 543,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$b6 = void 0);
				class l {
					get code() {
						return this.d.length === 1
							? this.d[0].code
							: "undoredo.notebooks.stackOperation";
					}
					get label() {
						return this.d.length === 1 ? this.d[0].label : "edit";
					}
					constructor(T, P, k, L, D, M) {
						(this.textModel = T),
							(this.undoRedoGroup = P),
							(this.l = k),
							(this.m = L),
							(this.d = []),
							(this.f = void 0),
							(this.g = void 0),
							(this.type = C.UndoRedoElementType.Workspace),
							(this.f = D),
							(this.h = M),
							(this.j = M);
					}
					get resources() {
						return [this.textModel.uri];
					}
					get isEmpty() {
						return this.d.length === 0;
					}
					pushEndState(T, P) {
						(this.j = T), (this.g = P || this.g);
					}
					pushEditOperation(T, P, k, L) {
						this.d.length === 0 && (this.f = this.f ?? P),
							this.d.push(T),
							(this.g = k),
							(this.j = L);
					}
					async undo() {
						this.l.pause();
						try {
							for (let T = this.d.length - 1; T >= 0; T--)
								await this.d[T].undo();
							this.m(this.h),
								this.l.fire({
									rawEvents: [],
									synchronous: void 0,
									versionId: this.textModel.versionId,
									endSelectionState: this.f,
								});
						} finally {
							this.l.resume();
						}
					}
					async redo() {
						this.l.pause();
						try {
							for (let T = 0; T < this.d.length; T++) await this.d[T].redo();
							this.m(this.j),
								this.l.fire({
									rawEvents: [],
									synchronous: void 0,
									versionId: this.textModel.versionId,
									endSelectionState: this.g,
								});
						} finally {
							this.l.resume();
						}
					}
				}
				class y {
					constructor(T, P, k, L) {
						(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.j = L),
							(this.d = null);
					}
					isUndoStackEmpty() {
						return this.d === null || this.d.isEmpty;
					}
					pushStackElement(T, P) {
						this.d &&
							!this.d.isEmpty &&
							(this.d.pushEndState(T, P),
							this.g.pushElement(this.d, this.d.undoRedoGroup)),
							(this.d = null);
					}
					l(T, P, k) {
						return (this.d ??= new l(this.f, P, this.h, this.j, T, k || ""));
					}
					pushEditOperation(T, P, k, L, D) {
						this.l(P, D, L).pushEditOperation(T, P, k, L);
					}
				}
				class $ extends t.$ue {
					get isEmpty() {
						return this.s.isEmpty();
					}
					isDirtyEvent() {
						for (const T of this.s)
							for (let P = 0; P < T.rawEvents.length; P++)
								if (!T.rawEvents[P].transient) return !0;
						return !1;
					}
				}
				let v = (s = class extends i.$1c {
					get length() {
						return this.q.length;
					}
					get cells() {
						return this.q;
					}
					get versionId() {
						return this.s;
					}
					get alternativeVersionId() {
						return this.u;
					}
					get notebookType() {
						return this.viewType;
					}
					constructor(T, P, k, L, D, M, N, A, R) {
						super(),
							(this.viewType = T),
							(this.uri = P),
							(this.z = M),
							(this.C = N),
							(this.F = A),
							(this.G = R),
							(this.f = !1),
							(this.g = this.D(new t.$re())),
							(this.h = this.D(new t.$re())),
							(this.j = this.D(new t.$re())),
							(this.onWillDispose = this.g.event),
							(this.onWillAddRemoveCells = this.h.event),
							(this.onDidChangeContent = this.j.event),
							(this.m = 0),
							(this.n = new Map()),
							(this.q = []),
							(this.metadata = {}),
							(this.transientOptions = {
								transientCellMetadata: {},
								transientDocumentMetadata: {},
								transientOutputs: !1,
								cellContentMetadata: {},
							}),
							(this.s = 0),
							(this.t = 0),
							(this.u = "1"),
							(this.transientOptions = D),
							(this.metadata = L),
							this._initialize(k);
						const O = (B) => {
							if (
								B.uri.scheme === h.Schemas.vscodeNotebookCell &&
								B instanceof g.$$X
							) {
								const U = E.CellUri.parse(B.uri);
								if (U && (0, c.$gh)(U.notebook, this.uri)) {
									const z = this.J(U.handle);
									if (z >= 0) {
										const F = this.cells[z];
										F && (F.textModel = B);
									}
								}
							}
						};
						this.D(N.onModelAdded((B) => O(B))),
							(this.y = new $({
								merge: (B) => {
									const U = B[0],
										z = U.rawEvents;
									let F = U.versionId,
										x = U.endSelectionState,
										H = U.synchronous;
									for (let q = 1; q < B.length; q++)
										z.push(...B[q].rawEvents),
											(F = B[q].versionId),
											(x =
												B[q].endSelectionState !== void 0
													? B[q].endSelectionState
													: x),
											(H = B[q].synchronous !== void 0 ? B[q].synchronous : H);
									return {
										rawEvents: z,
										versionId: F,
										endSelectionState: x,
										synchronous: H,
									};
								},
							})),
							this.D(
								this.y.event((B) => {
									B.rawEvents.length && this.j.fire(B);
								}),
							),
							(this.w = new y(this, this.z, this.y, (B) => {
								this.W(!0), this.X(B);
							}));
					}
					setCellCollapseDefault(T) {
						this.r = T;
					}
					_initialize(T, P) {
						(this.q = []), (this.s = 0), (this.t = 0);
						const k = T.map((L) => {
							const D = this.m++,
								M = E.CellUri.generate(this.uri, D),
								N = this.S(L);
							return new w.$95(
								M,
								D,
								L.source,
								L.language,
								L.mime,
								L.cellKind,
								L.outputs,
								L.metadata,
								L.internalMetadata,
								N,
								this.transientOptions,
								this.F,
								this.G,
							);
						});
						for (let L = 0; L < k.length; L++) {
							const D = k[L].onDidChangeContent((M) => {
								this.H(k[L], M);
							});
							this.n.set(k[L].handle, D), this.D(k[L]);
						}
						this.q.splice(0, 0, ...k),
							(this.u = this.I()),
							P &&
								this.y.fire({
									rawEvents: [
										{ kind: E.NotebookCellsChangeType.Unknown, transient: !1 },
									],
									versionId: this.versionId,
									synchronous: !0,
									endSelectionState: void 0,
								});
					}
					H(T, P) {
						switch ((this.W(P === "content"), P)) {
							case "content":
								this.y.fire({
									rawEvents: [
										{
											kind: E.NotebookCellsChangeType.ChangeCellContent,
											index: this.J(T.handle),
											transient: !1,
										},
									],
									versionId: this.versionId,
									synchronous: !0,
									endSelectionState: void 0,
								});
								break;
							case "language":
								this.y.fire({
									rawEvents: [
										{
											kind: E.NotebookCellsChangeType.ChangeCellLanguage,
											index: this.J(T.handle),
											language: T.language,
											transient: !1,
										},
									],
									versionId: this.versionId,
									synchronous: !0,
									endSelectionState: void 0,
								});
								break;
							case "mime":
								this.y.fire({
									rawEvents: [
										{
											kind: E.NotebookCellsChangeType.ChangeCellMime,
											index: this.J(T.handle),
											mime: T.mime,
											transient: !1,
										},
									],
									versionId: this.versionId,
									synchronous: !0,
									endSelectionState: void 0,
								});
								break;
						}
					}
					I() {
						return (
							`${this.t}_` +
							this.cells.map((T) => T.handle + "," + T.alternativeId).join(";")
						);
					}
					dispose() {
						this.f ||
							((this.f = !0),
							this.g.fire(),
							this.z.removeElements(this.uri),
							(0, i.$Vc)(this.n.values()),
							this.n.clear(),
							(0, i.$Vc)(this.q),
							(this.q = []),
							super.dispose());
					}
					pushStackElement() {}
					J(T) {
						return this.cells.findIndex((P) => P.handle === T);
					}
					getCellIndexByHandle(T) {
						return this.J(T);
					}
					L(T, P) {
						const k = P.find(
							(L) => "outputs" in L && L.outputs.some((D) => D.outputId === T),
						);
						if (k) {
							if ("index" in k) return k.index;
							if ("handle" in k) {
								const L = this.J(k.handle);
								return this.nb(L), L;
							}
						}
						return -1;
					}
					M(T) {
						return this.cells.findIndex(
							(P) => !!P.outputs.find((k) => k.outputId === T),
						);
					}
					reset(T, P, k) {
						this.transientOptions = k;
						const L = s.computeEdits(this, T);
						this.applyEdits(
							[
								...L,
								{ editType: E.CellEditType.DocumentMetadata, metadata: P },
							],
							!0,
							void 0,
							() => {},
							void 0,
							!1,
						);
					}
					static computeEdits(T, P) {
						const k = [],
							L = this.O(T.cells, T.cells.length, 0, P, P.length, 0);
						if (L > 0)
							for (let M = 0; M < L; M++)
								k.push(
									{
										editType: E.CellEditType.Metadata,
										index: M,
										metadata: P[M].metadata ?? {},
									},
									...this.N(M, T.cells[M].outputs, P[M].outputs),
								);
						if (T.cells.length === P.length && L === T.cells.length) return k;
						const D = this.P(
							T.cells,
							T.cells.length - L,
							L,
							P,
							P.length - L,
							L,
						);
						if (
							(D > 0
								? k.push({
										editType: E.CellEditType.Replace,
										index: L,
										count: T.cells.length - L - D,
										cells: P.slice(L, P.length - D),
									})
								: L > 0
									? k.push({
											editType: E.CellEditType.Replace,
											index: L,
											count: T.cells.length - L,
											cells: P.slice(L),
										})
									: k.push({
											editType: E.CellEditType.Replace,
											index: 0,
											count: T.cells.length,
											cells: P,
										}),
							D > 0)
						)
							for (let M = D; M > 0; M--)
								k.push(
									{
										editType: E.CellEditType.Metadata,
										index: T.cells.length - M,
										metadata: P[P.length - M].metadata ?? {},
									},
									...this.N(
										T.cells.length - M,
										T.cells[T.cells.length - M].outputs,
										P[P.length - M].outputs,
									),
								);
						return k;
					}
					static N(T, P, k) {
						return P.length !== k.length
							? [
									{
										editType: E.CellEditType.Output,
										index: T,
										outputs: k,
										append: !1,
									},
								]
							: P.length === 0
								? []
								: k.map((L, D) => ({
										editType: E.CellEditType.OutputItems,
										outputId: P[D].outputId,
										items: L.outputs,
										append: !1,
									}));
					}
					static O(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (let R = 0; R < N && T[k + R].fastEqual(L[M + R]); R++) A++;
						return A;
					}
					static P(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (
							let R = 0;
							R < N && T[k + P - R - 1].fastEqual(L[M + D - R - 1]);
							R++
						)
							A++;
						return A;
					}
					applyEdits(T, P, k, L, D, M) {
						this.y.pause(), this.w.pushStackElement(this.u, void 0);
						try {
							return this.Q(T, P, M, k, D), !0;
						} finally {
							if (!this.y.isEmpty) {
								const N = L();
								this.W(this.w.isUndoStackEmpty() && !this.y.isDirtyEvent()),
									this.w.pushStackElement(this.u, N),
									this.y.fire({
										rawEvents: [],
										versionId: this.versionId,
										synchronous: P,
										endSelectionState: N,
									});
							}
							this.y.resume();
						}
					}
					Q(T, P, k, L, D) {
						const M = T.map((R, O) => {
								let B = -1;
								if ("index" in R) B = R.index;
								else if ("handle" in R) (B = this.J(R.handle)), this.nb(B);
								else if ("outputId" in R) {
									if (
										((B = this.M(R.outputId)),
										this.ob(B) && (B = this.L(R.outputId, T.slice(0, O))),
										this.ob(B))
									)
										return null;
								} else if (R.editType !== E.CellEditType.DocumentMetadata)
									throw new Error("Invalid cell edit");
								return {
									edit: R,
									cellIndex: B,
									end:
										R.editType === E.CellEditType.DocumentMetadata
											? void 0
											: R.editType === E.CellEditType.Replace
												? R.index + R.count
												: B,
									originalIndex: O,
								};
							}).filter(p.$tg),
							A = this.R(M)
								.sort((R, O) =>
									R.end === void 0 || O.end === void 0
										? -1
										: O.end - R.end || O.originalIndex - R.originalIndex,
								)
								.reduce((R, O) => {
									if (!R.length) R.push([O]);
									else {
										const B = R[R.length - 1],
											U = B[0].cellIndex;
										O.cellIndex === U ? B.push(O) : R.push([O]);
									}
									return R;
								}, [])
								.map((R) => {
									const O = [],
										B = [];
									return (
										R.forEach((U) => {
											U.edit.editType === E.CellEditType.Replace
												? O.push(U)
												: B.push(U);
										}),
										[...B.reverse(), ...O]
									);
								})
								.flat();
						for (const { edit: R, cellIndex: O } of A)
							switch (R.editType) {
								case E.CellEditType.Replace:
									this.U(R.index, R.count, R.cells, P, k, L, D);
									break;
								case E.CellEditType.Output: {
									this.nb(O);
									const B = this.q[O];
									R.append
										? this.jb(
												B,
												{
													start: B.outputs.length,
													deleteCount: 0,
													newOutputs: R.outputs.map((U) => new u.$85(U)),
												},
												!0,
												k,
											)
										: this.ib(B, R.outputs, k);
									break;
								}
								case E.CellEditType.OutputItems:
									{
										this.nb(O);
										const B = this.q[O];
										R.append
											? this.kb(B, R.outputId, R.items)
											: this.lb(B, R.outputId, R.items);
									}
									break;
								case E.CellEditType.Metadata:
									this.nb(R.index),
										this.fb(this.q[R.index], R.metadata, k, L, D);
									break;
								case E.CellEditType.PartialMetadata:
									this.nb(O), this.eb(this.q[O], R.metadata, k, L, D);
									break;
								case E.CellEditType.PartialInternalMetadata:
									this.nb(O), this.gb(this.q[O], R.internalMetadata);
									break;
								case E.CellEditType.CellLanguage:
									this.nb(R.index),
										this.hb(this.q[R.index], R.language, k, L, D);
									break;
								case E.CellEditType.DocumentMetadata:
									this.Y(R.metadata, k, L, D);
									break;
								case E.CellEditType.Move:
									this.mb(R.index, R.length, R.newIdx, P, k, L, void 0, D);
									break;
							}
					}
					R(T) {
						const P = [];
						return (
							T.forEach((k) => {
								if (P.length) {
									const L = P[P.length - 1];
									L.edit.editType === E.CellEditType.Output &&
									L.edit.append &&
									k.edit.editType === E.CellEditType.Output &&
									k.edit.append &&
									L.cellIndex === k.cellIndex
										? (L.edit.outputs = [...L.edit.outputs, ...k.edit.outputs])
										: L.edit.editType === E.CellEditType.Output &&
												!L.edit.append &&
												L.edit.outputs.length === 0 &&
												k.edit.editType === E.CellEditType.Output &&
												k.edit.append &&
												L.cellIndex === k.cellIndex
											? ((L.edit.append = !1),
												(L.edit.outputs = k.edit.outputs))
											: P.push(k);
								} else P.push(k);
							}),
							P
						);
					}
					S(T) {
						const P =
							T.cellKind === E.CellKind.Code
								? this.r?.codeCell
								: this.r?.markupCell;
						return T.collapseState ?? P ?? void 0;
					}
					U(T, P, k, L, D, M, N) {
						if (P === 0 && k.length === 0) return;
						const A = this.q.slice(0),
							R = new Set();
						A.forEach((F) => {
							R.add(F.handle);
						});
						for (let F = T; F < Math.min(T + P, this.q.length); F++) {
							const x = this.q[F];
							this.n.get(x.handle)?.dispose(), this.n.delete(x.handle);
						}
						const O = k.map((F) => {
								const x = this.m++,
									H = E.CellUri.generate(this.uri, x),
									q = this.S(F),
									V = new w.$95(
										H,
										x,
										F.source,
										F.language,
										F.mime,
										F.cellKind,
										F.outputs || [],
										F.metadata,
										F.internalMetadata,
										q,
										this.transientOptions,
										this.F,
										this.G,
									),
									G = this.C.getModel(H);
								G &&
									G instanceof g.$$X &&
									((V.textModel = G),
									(V.language = F.language),
									V.textModel.setValue(F.source),
									V.resetTextBuffer(V.textModel.getTextBuffer()));
								const K = V.onDidChangeContent((J) => {
									this.H(V, J);
								});
								return this.n.set(V.handle, K), this.D(V), V;
							}),
							B = this.q.slice(0);
						B.splice(T, P, ...O);
						const U = (0, E.$Z6)(this.q, B, (F) => R.has(F.handle)).map((F) => [
							F.start,
							F.deleteCount,
							F.toInsert,
						]);
						this.h.fire({
							rawEvent: {
								kind: E.NotebookCellsChangeType.ModelChange,
								changes: U,
							},
						}),
							(this.q = B);
						const z = U.map((F) => {
							const x = A.slice(F[0], F[0] + F[1]);
							return [F[0], x, F[2]];
						});
						D &&
							this.w.pushEditOperation(
								new d.$_5(
									this.uri,
									z,
									{
										insertCell: (F, x, H) => {
											this.Z(F, [x], !0, H);
										},
										deleteCell: (F, x) => {
											this.$(F, 1, !0, x);
										},
										replaceCell: (F, x, H, q) => {
											this.ab(F, x, H, !0, q);
										},
									},
									void 0,
									void 0,
								),
								M,
								void 0,
								this.u,
								N,
							),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ModelChange,
										changes: U,
										transient: !1,
									},
								],
								versionId: this.versionId,
								synchronous: L,
								endSelectionState: void 0,
							});
					}
					W(T) {
						(this.s = this.s + 1), T || (this.t = this.s), (this.u = this.I());
					}
					X(T) {
						(this.u = T), (this.t = Number(T.substring(0, T.indexOf("_"))));
					}
					Y(T, P, k, L) {
						const D = this.metadata,
							M = this.bb(this.metadata, T);
						if (M && P) {
							const N = this;
							this.w.pushEditOperation(
								new (class {
									constructor() {
										(this.type = C.UndoRedoElementType.Resource),
											(this.label = "Update Cell Metadata"),
											(this.code = "undoredo.textBufferEdit");
									}
									get resource() {
										return N.uri;
									}
									rebase(A, R, O, B) {}
									undo() {
										N.Y(D, !1, k, L);
									}
									redo() {
										N.Y(T, !1, k, L);
									}
								})(),
								k,
								void 0,
								this.u,
								L,
							);
						}
						(this.metadata = T),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ChangeDocumentMetadata,
										metadata: this.metadata,
										transient: !M,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					Z(T, P, k, L) {
						for (let M = 0; M < P.length; M++) {
							const N = P[M].onDidChangeContent((A) => {
								this.H(P[M], A);
							});
							this.n.set(P[M].handle, N);
						}
						const D = [[T, 0, P]];
						this.h.fire({
							rawEvent: {
								kind: E.NotebookCellsChangeType.ModelChange,
								changes: D,
							},
						}),
							this.q.splice(T, 0, ...P),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ModelChange,
										changes: D,
										transient: !1,
									},
								],
								versionId: this.versionId,
								synchronous: k,
								endSelectionState: L,
							});
					}
					$(T, P, k, L) {
						for (let M = T; M < T + P; M++) {
							const N = this.q[M];
							this.n.get(N.handle)?.dispose(), this.n.delete(N.handle);
						}
						const D = [[T, P, []]];
						this.h.fire({
							rawEvent: {
								kind: E.NotebookCellsChangeType.ModelChange,
								changes: D,
							},
						}),
							this.q.splice(T, P),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ModelChange,
										changes: D,
										transient: !1,
									},
								],
								versionId: this.versionId,
								synchronous: k,
								endSelectionState: L,
							});
					}
					ab(T, P, k, L, D) {
						for (let N = T; N < T + P; N++) {
							const A = this.q[N];
							this.n.get(A.handle)?.dispose(), this.n.delete(A.handle);
						}
						for (let N = 0; N < k.length; N++) {
							const A = k[N].onDidChangeContent((R) => {
								this.H(k[N], R);
							});
							this.n.set(k[N].handle, A);
						}
						const M = [[T, P, k]];
						this.h.fire({
							rawEvent: {
								kind: E.NotebookCellsChangeType.ModelChange,
								changes: M,
							},
						}),
							this.q.splice(T, P, ...k),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ModelChange,
										changes: M,
										transient: !1,
									},
								],
								versionId: this.versionId,
								synchronous: L,
								endSelectionState: D,
							});
					}
					bb(T, P) {
						const k = new Set([
							...Object.keys(T || {}),
							...Object.keys(P || {}),
						]);
						for (const L of k)
							if (L === "custom") {
								if (
									!this.db(T[L], P[L]) &&
									!this.transientOptions.transientDocumentMetadata[L]
								)
									return !0;
							} else if (
								T[L] !== P[L] &&
								!this.transientOptions.transientDocumentMetadata[L]
							)
								return !0;
						return !1;
					}
					cb(T, P) {
						const k = new Set([
							...Object.keys(T || {}),
							...Object.keys(P || {}),
						]);
						for (const L of k)
							if (
								T[L] !== P[L] &&
								!this.transientOptions.transientCellMetadata[L]
							)
								return !0;
						return !1;
					}
					db(T, P) {
						if (!T && !P) return !0;
						if (!T || !P) return !1;
						const k = Object.getOwnPropertyNames(T),
							L = Object.getOwnPropertyNames(P);
						if (k.length !== L.length) return !1;
						for (let D = 0; D < k.length; D++) {
							const M = k[D];
							if (T[M] !== P[M]) return !1;
						}
						return !0;
					}
					eb(T, P, k, L, D) {
						const M = { ...T.metadata };
						let N;
						for (N in P) {
							const A = P[N] ?? void 0;
							M[N] = A;
						}
						return this.fb(T, M, k, L, D);
					}
					fb(T, P, k, L, D) {
						const M = this.cb(T.metadata, P);
						if (M && k) {
							const N = this.q.indexOf(T);
							this.w.pushEditOperation(
								new d.$a6(
									this.uri,
									N,
									Object.freeze(T.metadata),
									Object.freeze(P),
									{
										updateCellMetadata: (A, R) => {
											const O = this.q[A];
											O && this.fb(O, R, !1, L, D);
										},
									},
								),
								L,
								void 0,
								this.u,
								D,
							);
						}
						(T.metadata = P),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ChangeCellMetadata,
										index: this.q.indexOf(T),
										metadata: T.metadata,
										transient: !M,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					gb(T, P) {
						const k = { ...T.internalMetadata };
						let L;
						for (L in P) {
							const D = P[L] ?? void 0;
							k[L] = D;
						}
						(T.internalMetadata = k),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.ChangeCellInternalMetadata,
										index: this.q.indexOf(T),
										internalMetadata: T.internalMetadata,
										transient: !0,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					hb(T, P, k, L, D) {
						if (T.language === P) return;
						const M = T.language;
						if (((T.language = P), k)) {
							const N = this;
							this.w.pushEditOperation(
								new (class {
									constructor() {
										(this.type = C.UndoRedoElementType.Resource),
											(this.label = "Update Cell Language"),
											(this.code = "undoredo.textBufferEdit");
									}
									get resource() {
										return N.uri;
									}
									undo() {
										N.hb(T, M, !1, L, D);
									}
									redo() {
										N.hb(T, P, !1, L, D);
									}
									rebase(A, R, O, B) {}
								})(),
								L,
								void 0,
								this.u,
								D,
							);
						}
						this.y.fire({
							rawEvents: [
								{
									kind: E.NotebookCellsChangeType.ChangeCellLanguage,
									index: this.q.indexOf(T),
									language: P,
									transient: !1,
								},
							],
							versionId: this.versionId,
							synchronous: !0,
							endSelectionState: void 0,
						});
					}
					ib(T, P, k) {
						if (P.length === 0 && T.outputs.length === 0) return;
						if (P.length <= 1) {
							this.jb(
								T,
								{
									start: 0,
									deleteCount: T.outputs.length,
									newOutputs: P.map((N) => new u.$85(N)),
								},
								!1,
								k,
							);
							return;
						}
						new m.$oL(new S(T.outputs), new S(P))
							.ComputeDiff(!1)
							.changes.map((N) => ({
								start: N.originalStart,
								deleteCount: N.originalLength,
								newOutputs: P.slice(
									N.modifiedStart,
									N.modifiedStart + N.modifiedLength,
								).map((A) => new u.$85(A)),
							}))
							.reverse()
							.forEach((N) => {
								this.jb(T, N, !1, k);
							});
					}
					jb(T, P, k, L) {
						T.spliceNotebookCellOutputs(P),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.Output,
										index: this.q.indexOf(T),
										outputs: T.outputs.map((D) => D.asDto()) ?? [],
										append: k,
										transient: this.transientOptions.transientOutputs,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					kb(T, P, k) {
						T.changeOutputItems(P, !0, k) &&
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.OutputItem,
										index: this.q.indexOf(T),
										outputId: P,
										outputItems: k,
										append: !0,
										transient: this.transientOptions.transientOutputs,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					lb(T, P, k) {
						T.changeOutputItems(P, !1, k) &&
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.OutputItem,
										index: this.q.indexOf(T),
										outputId: P,
										outputItems: k,
										append: !1,
										transient: this.transientOptions.transientOutputs,
									},
								],
								versionId: this.versionId,
								synchronous: !0,
								endSelectionState: void 0,
							});
					}
					mb(T, P, k, L, D, M, N, A) {
						D &&
							this.w.pushEditOperation(
								new d.$$5(
									this.uri,
									T,
									P,
									k,
									{
										moveCell: (O, B, U, z, F) => {
											this.mb(O, B, U, !0, !1, z, F, A);
										},
									},
									M,
									N,
								),
								M,
								N,
								this.u,
								A,
							),
							this.nb(T),
							this.nb(k);
						const R = this.q.splice(T, P);
						return (
							this.q.splice(k, 0, ...R),
							this.y.fire({
								rawEvents: [
									{
										kind: E.NotebookCellsChangeType.Move,
										index: T,
										length: P,
										newIdx: k,
										cells: R,
										transient: !1,
									},
								],
								versionId: this.versionId,
								synchronous: L,
								endSelectionState: N,
							}),
							!0
						);
					}
					nb(T) {
						if (this.ob(T)) throw new Error(`model index out of range ${T}`);
					}
					ob(T) {
						return T < 0 || T >= this.q.length;
					}
					findNextMatch(T, P, k, L, D) {
						this.nb(P.cellIndex);
						const N = new b.$XU(T, k, L, D).parseSearchRequest();
						if (!N) return null;
						let A = P.cellIndex,
							R = P.position;
						for (; A < this.q.length; ) {
							const O = this.q[A],
								B = new f.$iL(
									R.lineNumber,
									R.column,
									O.textBuffer.getLineCount(),
									O.textBuffer.getLineMaxColumn(O.textBuffer.getLineCount()),
								),
								U = O.textBuffer.findMatchesLineByLine(B, N, !1, 1);
							if (U.length > 0) return { cell: O, match: U[0] };
							A++, (R = { lineNumber: 1, column: 1 });
						}
						return null;
					}
				});
				(e.$b6 = v),
					(e.$b6 =
						v =
						s =
							Ne([j(5, C.$GN), j(6, a.$QO), j(7, n.$nM), j(8, o.$RO)], v));
				class S {
					constructor(T) {
						this.outputs = T;
					}
					getElements() {
						return this.outputs.map((T) =>
							(0, r.$Aj)(
								T.outputs.map((P) => ({ mime: P.mime, data: P.data })),
							),
						);
					}
				}
			},
		),
		