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
		