define(de[1627], he([1, 0, 37, 17, 64]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4ub = e.$3ub = e.$2ub = void 0),
				(t = mt(t)),
				(e.$2ub = !1);
			class E {
				static {
					this.EMPTY = new E("", 0, 0, null, void 0);
				}
				constructor(m, r, u, a, h) {
					(this.value = m),
						(this.selectionStart = r),
						(this.selectionEnd = u),
						(this.selection = a),
						(this.newlineCountBeforeSelection = h);
				}
				toString() {
					return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
				}
				static readFromTextArea(m, r) {
					const u = m.getValue(),
						a = m.getSelectionStart(),
						h = m.getSelectionEnd();
					let c;
					if (r) {
						const n = u.substring(0, a),
							g = r.value.substring(0, r.selectionStart);
						n === g && (c = r.newlineCountBeforeSelection);
					}
					return new E(u, a, h, null, c);
				}
				collapseSelection() {
					return this.selectionStart === this.value.length
						? this
						: new E(
								this.value,
								this.value.length,
								this.value.length,
								null,
								void 0,
							);
				}
				writeToTextArea(m, r, u) {
					e.$2ub && console.log(`writeToTextArea ${m}: ${this.toString()}`),
						r.setValue(m, this.value),
						u && r.setSelectionRange(m, this.selectionStart, this.selectionEnd);
				}
				deduceEditorPosition(m) {
					if (m <= this.selectionStart) {
						const a = this.value.substring(m, this.selectionStart);
						return this.a(this.selection?.getStartPosition() ?? null, a, -1);
					}
					if (m >= this.selectionEnd) {
						const a = this.value.substring(this.selectionEnd, m);
						return this.a(this.selection?.getEndPosition() ?? null, a, 1);
					}
					const r = this.value.substring(this.selectionStart, m);
					if (r.indexOf("\u2026") === -1)
						return this.a(this.selection?.getStartPosition() ?? null, r, 1);
					const u = this.value.substring(m, this.selectionEnd);
					return this.a(this.selection?.getEndPosition() ?? null, u, -1);
				}
				a(m, r, u) {
					let a = 0,
						h = -1;
					for (
						;
						(h = r.indexOf(
							`
`,
							h + 1,
						)) !== -1;
					)
						a++;
					return [m, u * r.length, a];
				}
				static deduceInput(m, r, u) {
					if (!m)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: 0,
						};
					e.$2ub &&
						(console.log("------------------------deduceInput"),
						console.log(`PREVIOUS STATE: ${m.toString()}`),
						console.log(`CURRENT STATE: ${r.toString()}`));
					const a = Math.min(
							t.$Of(m.value, r.value),
							m.selectionStart,
							r.selectionStart,
						),
						h = Math.min(
							t.$Pf(m.value, r.value),
							m.value.length - m.selectionEnd,
							r.value.length - r.selectionEnd,
						),
						c = m.value.substring(a, m.value.length - h),
						n = r.value.substring(a, r.value.length - h),
						g = m.selectionStart - a,
						p = m.selectionEnd - a,
						o = r.selectionStart - a,
						f = r.selectionEnd - a;
					if (
						(e.$2ub &&
							(console.log(
								`AFTER DIFFING PREVIOUS STATE: <${c}>, selectionStart: ${g}, selectionEnd: ${p}`,
							),
							console.log(
								`AFTER DIFFING CURRENT STATE: <${n}>, selectionStart: ${o}, selectionEnd: ${f}`,
							)),
						o === f)
					) {
						const s = m.selectionStart - a;
						return (
							e.$2ub && console.log(`REMOVE PREVIOUS: ${s} chars`),
							{
								text: n,
								replacePrevCharCnt: s,
								replaceNextCharCnt: 0,
								positionDelta: 0,
							}
						);
					}
					const b = p - g;
					return {
						text: n,
						replacePrevCharCnt: b,
						replaceNextCharCnt: 0,
						positionDelta: 0,
					};
				}
				static deduceAndroidCompositionInput(m, r) {
					if (!m)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: 0,
						};
					if (
						(e.$2ub &&
							(console.log(
								"------------------------deduceAndroidCompositionInput",
							),
							console.log(`PREVIOUS STATE: ${m.toString()}`),
							console.log(`CURRENT STATE: ${r.toString()}`)),
						m.value === r.value)
					)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: r.selectionEnd - m.selectionEnd,
						};
					const u = Math.min(t.$Of(m.value, r.value), m.selectionEnd),
						a = Math.min(
							t.$Pf(m.value, r.value),
							m.value.length - m.selectionEnd,
						),
						h = m.value.substring(u, m.value.length - a),
						c = r.value.substring(u, r.value.length - a),
						n = m.selectionStart - u,
						g = m.selectionEnd - u,
						p = r.selectionStart - u,
						o = r.selectionEnd - u;
					return (
						e.$2ub &&
							(console.log(
								`AFTER DIFFING PREVIOUS STATE: <${h}>, selectionStart: ${n}, selectionEnd: ${g}`,
							),
							console.log(
								`AFTER DIFFING CURRENT STATE: <${c}>, selectionStart: ${p}, selectionEnd: ${o}`,
							)),
						{
							text: c,
							replacePrevCharCnt: g,
							replaceNextCharCnt: h.length - g,
							positionDelta: o - c.length,
						}
					);
				}
			}
			e.$3ub = E;
			class C {
				static a(m, r) {
					return Math.floor((m - 1) / r);
				}
				static b(m, r) {
					const u = m * r,
						a = u + 1,
						h = u + r;
					return new i.$iL(a, 1, h + 1, 1);
				}
				static fromEditorSelection(m, r, u, a) {
					const c = C.a(r.startLineNumber, u),
						n = C.b(c, u),
						g = C.a(r.endLineNumber, u),
						p = C.b(g, u);
					let o = n.intersectRanges(
						new i.$iL(1, 1, r.startLineNumber, r.startColumn),
					);
					if (a && m.getValueLengthInRange(o, w.EndOfLinePreference.LF) > 500) {
						const v = m.modifyPosition(o.getEndPosition(), -500);
						o = i.$iL.fromPositions(v, o.getEndPosition());
					}
					const f = m.getValueInRange(o, w.EndOfLinePreference.LF),
						b = m.getLineCount(),
						s = m.getLineMaxColumn(b);
					let l = p.intersectRanges(
						new i.$iL(r.endLineNumber, r.endColumn, b, s),
					);
					if (a && m.getValueLengthInRange(l, w.EndOfLinePreference.LF) > 500) {
						const v = m.modifyPosition(l.getStartPosition(), 500);
						l = i.$iL.fromPositions(l.getStartPosition(), v);
					}
					const y = m.getValueInRange(l, w.EndOfLinePreference.LF);
					let $;
					if (c === g || c + 1 === g)
						$ = m.getValueInRange(r, w.EndOfLinePreference.LF);
					else {
						const v = n.intersectRanges(r),
							S = p.intersectRanges(r);
						$ =
							m.getValueInRange(v, w.EndOfLinePreference.LF) +
							"\u2026" +
							m.getValueInRange(S, w.EndOfLinePreference.LF);
					}
					return (
						a &&
							$.length > 2 * 500 &&
							($ =
								$.substring(0, 500) +
								"\u2026" +
								$.substring($.length - 500, $.length)),
						new E(
							f + $ + y,
							f.length,
							f.length + $.length,
							r,
							o.endLineNumber - o.startLineNumber,
						)
					);
				}
			}
			e.$4ub = C;
		}),
		define(
			de[942],
			he([
				1, 0, 139, 7, 265, 114, 1127, 15, 6, 27, 3, 266, 12, 37, 1627, 104, 91,
				34,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9ub =
						e.$8ub =
						e.$7ub =
						e.$6ub =
						e.$5ub =
						e.TextAreaSyntethicEvents =
							void 0),
					(t = mt(t)),
					(i = mt(i)),
					(c = mt(c));
				var f;
				(function ($) {
					$.Tap = "-monaco-textarea-synthetic-tap";
				})(f || (e.TextAreaSyntethicEvents = f = {})),
					(e.$5ub = { forceCopyWithSyntaxHighlighting: !1 });
				class b {
					static {
						this.INSTANCE = new b();
					}
					constructor() {
						this.a = null;
					}
					set(v, S) {
						this.a = { lastCopiedValue: v, data: S };
					}
					get(v) {
						return this.a && this.a.lastCopiedValue === v
							? this.a.data
							: ((this.a = null), null);
					}
				}
				e.$6ub = b;
				class s {
					constructor() {
						this.a = 0;
					}
					handleCompositionUpdate(v) {
						v = v || "";
						const S = {
							text: v,
							replacePrevCharCnt: this.a,
							replaceNextCharCnt: 0,
							positionDelta: 0,
						};
						return (this.a = v.length), S;
					}
				}
				let l = class extends u.$1c {
					get textAreaState() {
						return this.u;
					}
					constructor(v, S, I, T, P, k) {
						super(),
							(this.C = v),
							(this.F = S),
							(this.G = I),
							(this.H = T),
							(this.I = P),
							(this.J = k),
							(this.a = this.D(new m.$re())),
							(this.onFocus = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.onBlur = this.b.event),
							(this.c = this.D(new m.$re())),
							(this.onKeyDown = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onKeyUp = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onCut = this.g.event),
							(this.h = this.D(new m.$re())),
							(this.onPaste = this.h.event),
							(this.j = this.D(new m.$re())),
							(this.onType = this.j.event),
							(this.m = this.D(new m.$re())),
							(this.onCompositionStart = this.m.event),
							(this.n = this.D(new m.$re())),
							(this.onCompositionUpdate = this.n.event),
							(this.q = this.D(new m.$re())),
							(this.onCompositionEnd = this.q.event),
							(this.r = this.D(new m.$re())),
							(this.onSelectionChangeRequest = this.r.event),
							(this.t = this.D(new u.$2c())),
							(this.s = this.D(new d.$Yh(() => this.g.fire(), 0))),
							(this.u = n.$3ub.EMPTY),
							(this.w = null),
							this.I.isScreenReaderOptimized() &&
								this.writeNativeTextAreaContent("ctor"),
							this.D(
								m.Event.runAndSubscribe(
									this.I.onDidChangeScreenReaderOptimized,
									() => {
										this.I.isScreenReaderOptimized() && !this.t.value
											? (this.t.value = this.D(
													new d.$Yh(
														() =>
															this.writeNativeTextAreaContent("asyncFocusGain"),
														0,
													),
												))
											: this.t.clear();
									},
								),
							),
							(this.y = !1),
							(this.z = null);
						let L = null;
						this.D(
							this.F.onKeyDown((D) => {
								const M = new E.$7fb(D);
								(M.keyCode === r.KeyCode.KEY_IN_COMPOSITION ||
									(this.z && M.keyCode === r.KeyCode.Backspace)) &&
									M.stopPropagation(),
									M.equals(r.KeyCode.Escape) && M.preventDefault(),
									(L = M),
									this.c.fire(M);
							}),
						),
							this.D(
								this.F.onKeyUp((D) => {
									const M = new E.$7fb(D);
									this.f.fire(M);
								}),
							),
							this.D(
								this.F.onCompositionStart((D) => {
									n.$2ub && console.log("[compositionstart]", D);
									const M = new s();
									if (this.z) {
										this.z = M;
										return;
									}
									if (
										((this.z = M),
										this.G === h.OperatingSystem.Macintosh &&
											L &&
											L.equals(r.KeyCode.KEY_IN_COMPOSITION) &&
											this.u.selectionStart === this.u.selectionEnd &&
											this.u.selectionStart > 0 &&
											this.u.value.substr(this.u.selectionStart - 1, 1) ===
												D.data &&
											(L.code === "ArrowRight" || L.code === "ArrowLeft"))
									) {
										n.$2ub &&
											console.log(
												"[compositionstart] Handling long press case on macOS + arrow key",
												D,
											),
											M.handleCompositionUpdate("x"),
											this.m.fire({ data: D.data });
										return;
									}
									if (this.H.isAndroid) {
										this.m.fire({ data: D.data });
										return;
									}
									this.m.fire({ data: D.data });
								}),
							),
							this.D(
								this.F.onCompositionUpdate((D) => {
									n.$2ub && console.log("[compositionupdate]", D);
									const M = this.z;
									if (!M) return;
									if (this.H.isAndroid) {
										const A = n.$3ub.readFromTextArea(this.F, this.u),
											R = n.$3ub.deduceAndroidCompositionInput(this.u, A);
										(this.u = A), this.j.fire(R), this.n.fire(D);
										return;
									}
									const N = M.handleCompositionUpdate(D.data);
									(this.u = n.$3ub.readFromTextArea(this.F, this.u)),
										this.j.fire(N),
										this.n.fire(D);
								}),
							),
							this.D(
								this.F.onCompositionEnd((D) => {
									n.$2ub && console.log("[compositionend]", D);
									const M = this.z;
									if (!M) return;
									if (((this.z = null), this.H.isAndroid)) {
										const A = n.$3ub.readFromTextArea(this.F, this.u),
											R = n.$3ub.deduceAndroidCompositionInput(this.u, A);
										(this.u = A), this.j.fire(R), this.q.fire();
										return;
									}
									const N = M.handleCompositionUpdate(D.data);
									(this.u = n.$3ub.readFromTextArea(this.F, this.u)),
										this.j.fire(N),
										this.q.fire();
								}),
							),
							this.D(
								this.F.onInput((D) => {
									if (
										(n.$2ub && console.log("[input]", D),
										this.F.setIgnoreSelectionChangeTime("received input event"),
										this.z)
									)
										return;
									const M = n.$3ub.readFromTextArea(this.F, this.u),
										N = n.$3ub.deduceInput(
											this.u,
											M,
											this.G === h.OperatingSystem.Macintosh,
										);
									(N.replacePrevCharCnt === 0 &&
										N.text.length === 1 &&
										(c.$Qf(N.text.charCodeAt(0)) ||
											N.text.charCodeAt(0) === 127)) ||
										((this.u = M),
										(N.text !== "" ||
											N.replacePrevCharCnt !== 0 ||
											N.replaceNextCharCnt !== 0 ||
											N.positionDelta !== 0) &&
											this.j.fire(N));
								}),
							),
							this.D(
								this.F.onCut((D) => {
									this.F.setIgnoreSelectionChangeTime("received cut event"),
										this.O(D),
										this.s.schedule();
								}),
							),
							this.D(
								this.F.onCopy((D) => {
									this.O(D);
								}),
							),
							this.D(
								this.F.onPaste((D) => {
									if (
										(this.F.setIgnoreSelectionChangeTime(
											"received paste event",
										),
										D.preventDefault(),
										!D.clipboardData)
									)
										return;
									let [M, N] = e.$8ub.getTextData(D.clipboardData);
									M &&
										((N = N || b.INSTANCE.get(M)),
										this.h.fire({ text: M, metadata: N }));
								}),
							),
							this.D(
								this.F.onFocus(() => {
									const D = this.y;
									this.M(!0),
										this.I.isScreenReaderOptimized() &&
											this.H.isSafari &&
											!D &&
											this.y &&
											(this.t.value ||
												(this.t.value = new d.$Yh(
													() =>
														this.writeNativeTextAreaContent("asyncFocusGain"),
													0,
												)),
											this.t.value.schedule());
								}),
							),
							this.D(
								this.F.onBlur(() => {
									this.z &&
										((this.z = null),
										this.writeNativeTextAreaContent(
											"blurWithoutCompositionEnd",
										),
										this.q.fire()),
										this.M(!1);
								}),
							),
							this.D(
								this.F.onSyntheticTap(() => {
									this.H.isAndroid &&
										this.z &&
										((this.z = null),
										this.writeNativeTextAreaContent("tapWithoutCompositionEnd"),
										this.q.fire());
								}),
							);
					}
					_initializeFromTest() {
						(this.y = !0), (this.u = n.$3ub.readFromTextArea(this.F, null));
					}
					L() {
						let v = 0;
						return i.$0fb(this.F.ownerDocument, "selectionchange", (S) => {
							if (
								(C.inputLatency.onSelectionChange(),
								!this.y || this.z || !this.H.isChrome)
							)
								return;
							const I = Date.now(),
								T = I - v;
							if (((v = I), T < 5)) return;
							const P = I - this.F.getIgnoreSelectionChangeTime();
							if (
								(this.F.resetSelectionChangeTime(),
								P < 100 || !this.u.selection)
							)
								return;
							const k = this.F.getValue();
							if (this.u.value !== k) return;
							const L = this.F.getSelectionStart(),
								D = this.F.getSelectionEnd();
							if (this.u.selectionStart === L && this.u.selectionEnd === D)
								return;
							const M = this.u.deduceEditorPosition(L),
								N = this.C.deduceModelPosition(M[0], M[1], M[2]),
								A = this.u.deduceEditorPosition(D),
								R = this.C.deduceModelPosition(A[0], A[1], A[2]),
								O = new g.$kL(N.lineNumber, N.column, R.lineNumber, R.column);
							this.r.fire(O);
						});
					}
					dispose() {
						super.dispose(), this.w && (this.w.dispose(), (this.w = null));
					}
					focusTextArea() {
						this.M(!0), this.refreshFocusState();
					}
					isFocused() {
						return this.y;
					}
					refreshFocusState() {
						this.M(this.F.hasFocus());
					}
					M(v) {
						this.y !== v &&
							((this.y = v),
							this.w && (this.w.dispose(), (this.w = null)),
							this.y && (this.w = this.L()),
							this.y && this.writeNativeTextAreaContent("focusgain"),
							this.y ? this.a.fire() : this.b.fire());
					}
					N(v, S) {
						this.y || (S = S.collapseSelection()),
							S.writeToTextArea(v, this.F, this.y),
							(this.u = S);
					}
					writeNativeTextAreaContent(v) {
						(!this.I.isScreenReaderOptimized() && v === "render") ||
							this.z ||
							(this.J.trace(`writeTextAreaState(reason: ${v})`),
							this.N(v, this.C.getScreenReaderContent()));
					}
					O(v) {
						const S = this.C.getDataToCopy(),
							I = {
								version: 1,
								isFromEmptySelection: S.isFromEmptySelection,
								multicursorText: S.multicursorText,
								mode: S.mode,
							};
						b.INSTANCE.set(
							this.H.isFirefox
								? S.text.replace(
										/\r\n/g,
										`
`,
									)
								: S.text,
							I,
						),
							v.preventDefault(),
							v.clipboardData &&
								e.$8ub.setTextData(v.clipboardData, S.text, S.html, I);
					}
				};
				(e.$7ub = l),
					(e.$7ub = l = Ne([j(4, p.$XK), j(5, o.$ik)], l)),
					(e.$8ub = {
						getTextData($) {
							const v = $.getData(a.$EK.text);
							let S = null;
							const I = $.getData("vscode-editor-data");
							if (typeof I == "string")
								try {
									(S = JSON.parse(I)), S.version !== 1 && (S = null);
								} catch {}
							return v.length === 0 && S === null && $.files.length > 0
								? [
										Array.prototype.slice
											.call($.files, 0)
											.map((P) => P.name)
											.join(`
`),
										null,
									]
								: [v, S];
						},
						setTextData($, v, S, I) {
							$.setData(a.$EK.text, v),
								typeof S == "string" && $.setData("text/html", S),
								$.setData("vscode-editor-data", JSON.stringify(I));
						},
					});
				class y extends u.$1c {
					get ownerDocument() {
						return this.c.ownerDocument;
					}
					constructor(v) {
						super(),
							(this.c = v),
							(this.onKeyDown = this.D(new w.$mib(this.c, "keydown")).event),
							(this.onKeyPress = this.D(new w.$mib(this.c, "keypress")).event),
							(this.onKeyUp = this.D(new w.$mib(this.c, "keyup")).event),
							(this.onCompositionStart = this.D(
								new w.$mib(this.c, "compositionstart"),
							).event),
							(this.onCompositionUpdate = this.D(
								new w.$mib(this.c, "compositionupdate"),
							).event),
							(this.onCompositionEnd = this.D(
								new w.$mib(this.c, "compositionend"),
							).event),
							(this.onBeforeInput = this.D(
								new w.$mib(this.c, "beforeinput"),
							).event),
							(this.onInput = this.D(new w.$mib(this.c, "input")).event),
							(this.onCut = this.D(new w.$mib(this.c, "cut")).event),
							(this.onCopy = this.D(new w.$mib(this.c, "copy")).event),
							(this.onPaste = this.D(new w.$mib(this.c, "paste")).event),
							(this.onFocus = this.D(new w.$mib(this.c, "focus")).event),
							(this.onBlur = this.D(new w.$mib(this.c, "blur")).event),
							(this.a = this.D(new m.$re())),
							(this.onSyntheticTap = this.a.event),
							(this.b = 0),
							this.D(this.onKeyDown(() => C.inputLatency.onKeyDown())),
							this.D(this.onBeforeInput(() => C.inputLatency.onBeforeInput())),
							this.D(this.onInput(() => C.inputLatency.onInput())),
							this.D(this.onKeyUp(() => C.inputLatency.onKeyUp())),
							this.D(i.$0fb(this.c, f.Tap, () => this.a.fire()));
					}
					hasFocus() {
						const v = i.$Igb(this.c);
						return v
							? v.activeElement === this.c
							: this.c.isConnected
								? i.$Jgb() === this.c
								: !1;
					}
					setIgnoreSelectionChangeTime(v) {
						this.b = Date.now();
					}
					getIgnoreSelectionChangeTime() {
						return this.b;
					}
					resetSelectionChangeTime() {
						this.b = 0;
					}
					getValue() {
						return this.c.value;
					}
					setValue(v, S) {
						const I = this.c;
						I.value !== S &&
							(this.setIgnoreSelectionChangeTime("setValue"), (I.value = S));
					}
					getSelectionStart() {
						return this.c.selectionDirection === "backward"
							? this.c.selectionEnd
							: this.c.selectionStart;
					}
					getSelectionEnd() {
						return this.c.selectionDirection === "backward"
							? this.c.selectionStart
							: this.c.selectionEnd;
					}
					setSelectionRange(v, S, I) {
						const T = this.c;
						let P = null;
						const k = i.$Igb(T);
						k ? (P = k.activeElement) : (P = i.$Jgb());
						const L = i.getWindow(P),
							D = P === T,
							M = T.selectionStart,
							N = T.selectionEnd;
						if (D && M === S && N === I) {
							t.$Ofb && L.parent !== L && T.focus();
							return;
						}
						if (D) {
							this.setIgnoreSelectionChangeTime("setSelectionRange"),
								T.setSelectionRange(S, I),
								t.$Ofb && L.parent !== L && T.focus();
							return;
						}
						try {
							const A = i.$bhb(T);
							this.setIgnoreSelectionChangeTime("setSelectionRange"),
								T.focus(),
								T.setSelectionRange(S, I),
								i.$chb(T, A);
						} catch {}
					}
				}
				e.$9ub = y;
			},
		),
		define(
			de[2755],
			he([1, 0, 7, 194, 56, 303, 38, 64]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ivb = void 0),
					(t = mt(t));
				class m extends E.$yub {
					constructor(g, p) {
						super(g),
							(this.a = p),
							(this.b = {}),
							(this.domNode = (0, i.$Shb)(document.createElement("div"))),
							E.$zub.write(this.domNode, E.PartFingerprint.ContentWidgets),
							this.domNode.setClassName("contentWidgets"),
							this.domNode.setPosition("absolute"),
							this.domNode.setTop(0),
							(this.overflowingContentWidgetsDomNode = (0, i.$Shb)(
								document.createElement("div"),
							)),
							E.$zub.write(
								this.overflowingContentWidgetsDomNode,
								E.PartFingerprint.OverflowingContentWidgets,
							),
							this.overflowingContentWidgetsDomNode.setClassName(
								"overflowingContentWidgets",
							);
					}
					dispose() {
						super.dispose(), (this.b = {});
					}
					onConfigurationChanged(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].onConfigurationChanged(g);
						return !0;
					}
					onDecorationsChanged(g) {
						return !0;
					}
					onFlushed(g) {
						return !0;
					}
					onLineMappingChanged(g) {
						return this.c(), !0;
					}
					onLinesChanged(g) {
						return this.c(), !0;
					}
					onLinesDeleted(g) {
						return this.c(), !0;
					}
					onLinesInserted(g) {
						return this.c(), !0;
					}
					onScrollChanged(g) {
						return !0;
					}
					onZonesChanged(g) {
						return !0;
					}
					c() {
						const g = Object.keys(this.b);
						for (const p of g) this.b[p].updateAnchorViewPosition();
					}
					addWidget(g) {
						const p = new r(this._context, this.a, g);
						(this.b[p.id] = p),
							p.allowEditorOverflow
								? this.overflowingContentWidgetsDomNode.appendChild(p.domNode)
								: this.domNode.appendChild(p.domNode),
							this.h();
					}
					setWidgetPosition(g, p, o, f, b) {
						this.b[g.getId()].setPosition(p, o, f, b), this.h();
					}
					removeWidget(g) {
						const p = g.getId();
						if (this.b.hasOwnProperty(p)) {
							const o = this.b[p];
							delete this.b[p];
							const f = o.domNode.domNode;
							f.remove(),
								f.removeAttribute("monaco-visible-content-widget"),
								this.h();
						}
					}
					shouldSuppressMouseDownOnWidget(g) {
						return this.b.hasOwnProperty(g) ? this.b[g].suppressMouseDown : !1;
					}
					onBeforeRender(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].onBeforeRender(g);
					}
					prepareRender(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].prepareRender(g);
					}
					render(g) {
						const p = Object.keys(this.b);
						for (const o of p) this.b[o].render(g);
					}
				}
				e.$ivb = m;
				class r {
					constructor(g, p, o) {
						(this.i = new u(null, null)),
							(this.j = new u(null, null)),
							(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.domNode = (0, i.$Shb)(this.c.getDomNode())),
							(this.id = this.c.getId()),
							(this.allowEditorOverflow = this.c.allowEditorOverflow || !1),
							(this.suppressMouseDown = this.c.suppressMouseDown || !1);
						const f = this.a.configuration.options,
							b = f.get(C.EditorOption.layoutInfo);
						(this.d = f.get(C.EditorOption.fixedOverflowWidgets)),
							(this.f = b.contentWidth),
							(this.g = b.contentLeft),
							(this.h = f.get(C.EditorOption.lineHeight)),
							(this.k = null),
							(this.l = []),
							(this.m = -1),
							(this.n = -1),
							(this.o = this.s()),
							(this.p = !1),
							(this.q = null),
							this.domNode.setPosition(
								this.d && this.allowEditorOverflow ? "fixed" : "absolute",
							),
							this.domNode.setDisplay("none"),
							this.domNode.setVisibility("hidden"),
							this.domNode.setAttribute("widgetId", this.id),
							this.domNode.setMaxWidth(this.o);
					}
					onConfigurationChanged(g) {
						const p = this.a.configuration.options;
						if (
							((this.h = p.get(C.EditorOption.lineHeight)),
							g.hasChanged(C.EditorOption.layoutInfo))
						) {
							const o = p.get(C.EditorOption.layoutInfo);
							(this.g = o.contentLeft),
								(this.f = o.contentWidth),
								(this.o = this.s());
						}
					}
					updateAnchorViewPosition() {
						this.r(this.k, this.i.modelPosition, this.j.modelPosition);
					}
					r(g, p, o) {
						(this.k = g),
							(this.i = f(p, this.a.viewModel, this.k)),
							(this.j = f(o, this.a.viewModel, this.k));
						function f(b, s, l) {
							if (!b) return new u(null, null);
							const y = s.model.validatePosition(b);
							if (s.coordinatesConverter.modelPositionIsVisible(y)) {
								const $ =
									s.coordinatesConverter.convertModelPositionToViewPosition(
										y,
										l ?? void 0,
									);
								return new u(b, $);
							}
							return new u(b, null);
						}
					}
					s() {
						const g = this.domNode.domNode.ownerDocument,
							p = g.defaultView;
						return this.allowEditorOverflow
							? p?.innerWidth ||
									g.documentElement.offsetWidth ||
									g.body.offsetWidth
							: this.f;
					}
					setPosition(g, p, o, f) {
						this.r(f, g, p),
							(this.l = o),
							this.i.viewPosition && this.l && this.l.length > 0
								? this.domNode.setDisplay("block")
								: this.domNode.setDisplay("none"),
							(this.m = -1),
							(this.n = -1);
					}
					t(g, p, o, f) {
						const b = g.top,
							s = b,
							l = g.top + g.height,
							y = f.viewportHeight - l,
							$ = b - o,
							v = s >= o,
							S = l,
							I = y >= o;
						let T = g.left;
						return (
							T + p > f.scrollLeft + f.viewportWidth &&
								(T = f.scrollLeft + f.viewportWidth - p),
							T < f.scrollLeft && (T = f.scrollLeft),
							{ fitsAbove: v, aboveTop: $, fitsBelow: I, belowTop: S, left: T }
						);
					}
					u(g, p, o, f) {
						const l = Math.max(15, p.left - f),
							y = Math.min(p.left + p.width + f, g.width - 15),
							v = this.b.domNode.ownerDocument.defaultView;
						let S = p.left + o - (v?.scrollX ?? 0);
						if (S + f > y) {
							const I = S - (y - f);
							(S -= I), (o -= I);
						}
						if (S < l) {
							const I = S - l;
							(S -= I), (o -= I);
						}
						return [o, S];
					}
					v(g, p, o, f) {
						const b = g.top - o,
							s = g.top + g.height,
							l = t.$tgb(this.b.domNode),
							y = this.b.domNode.ownerDocument,
							$ = y.defaultView,
							v = l.top + b - ($?.scrollY ?? 0),
							S = l.top + s - ($?.scrollY ?? 0),
							I = t.$ogb(y.body),
							[T, P] = this.u(I, l, g.left - f.scrollLeft + this.g, p),
							k = 22,
							L = 22,
							D = v >= k,
							M = S + o <= I.height - L;
						return this.d
							? {
									fitsAbove: D,
									aboveTop: Math.max(v, k),
									fitsBelow: M,
									belowTop: S,
									left: P,
								}
							: {
									fitsAbove: D,
									aboveTop: b,
									fitsBelow: M,
									belowTop: s,
									left: T,
								};
					}
					w(g) {
						return new a(g.top, g.left + this.g);
					}
					x(g) {
						const p = b(this.i.viewPosition, this.k, this.h),
							o =
								this.j.viewPosition?.lineNumber ===
								this.i.viewPosition?.lineNumber
									? this.j.viewPosition
									: null,
							f = b(o, this.k, this.h);
						return { primary: p, secondary: f };
						function b(s, l, y) {
							if (!s) return null;
							const $ = g.visibleRangeForPosition(s);
							if (!$) return null;
							const v =
									s.column === 1 && l === d.PositionAffinity.LeftOfInjectedText
										? 0
										: $.left,
								S =
									g.getVerticalOffsetForLineNumber(s.lineNumber) - g.scrollTop;
							return new h(S, v, y);
						}
					}
					y(g, p, o) {
						if (!p) return g;
						const f = this.a.configuration.options.get(C.EditorOption.fontInfo);
						let b = p.left;
						return (
							b < g.left
								? (b = Math.max(
										b,
										g.left - o + f.typicalFullwidthCharacterWidth,
									))
								: (b = Math.min(
										b,
										g.left + o - f.typicalFullwidthCharacterWidth,
									)),
							new h(g.top, b, g.height)
						);
					}
					z(g) {
						if (!this.l || this.l.length === 0) return null;
						const { primary: p, secondary: o } = this.x(g);
						if (!p)
							return {
								kind: "offViewport",
								preserveFocus: this.domNode.domNode.contains(
									this.domNode.domNode.ownerDocument.activeElement,
								),
							};
						if (this.m === -1 || this.n === -1) {
							let s = null;
							if (
								(typeof this.c.beforeRender == "function" &&
									(s = c(this.c.beforeRender, this.c)),
								s)
							)
								(this.m = s.width), (this.n = s.height);
							else {
								const y = this.domNode.domNode.getBoundingClientRect();
								(this.m = Math.round(y.width)), (this.n = Math.round(y.height));
							}
						}
						const f = this.y(p, o, this.m);
						let b;
						this.allowEditorOverflow
							? (b = this.v(f, this.m, this.n, g))
							: (b = this.t(f, this.m, this.n, g));
						for (let s = 1; s <= 2; s++)
							for (const l of this.l)
								if (l === w.ContentWidgetPositionPreference.ABOVE) {
									if (!b) return null;
									if (s === 2 || b.fitsAbove)
										return {
											kind: "inViewport",
											coordinate: new a(b.aboveTop, b.left),
											position: w.ContentWidgetPositionPreference.ABOVE,
										};
								} else if (l === w.ContentWidgetPositionPreference.BELOW) {
									if (!b) return null;
									if (s === 2 || b.fitsBelow)
										return {
											kind: "inViewport",
											coordinate: new a(b.belowTop, b.left),
											position: w.ContentWidgetPositionPreference.BELOW,
										};
								} else
									return this.allowEditorOverflow
										? {
												kind: "inViewport",
												coordinate: this.w(new a(f.top, f.left)),
												position: w.ContentWidgetPositionPreference.EXACT,
											}
										: {
												kind: "inViewport",
												coordinate: new a(f.top, f.left),
												position: w.ContentWidgetPositionPreference.EXACT,
											};
						return null;
					}
					onBeforeRender(g) {
						!this.i.viewPosition ||
							!this.l ||
							this.i.viewPosition.lineNumber < g.startLineNumber ||
							this.i.viewPosition.lineNumber > g.endLineNumber ||
							this.domNode.setMaxWidth(this.o);
					}
					prepareRender(g) {
						this.q = this.z(g);
					}
					render(g) {
						if (!this.q || this.q.kind === "offViewport") {
							this.p &&
								(this.domNode.removeAttribute("monaco-visible-content-widget"),
								(this.p = !1),
								this.q?.kind === "offViewport" && this.q.preserveFocus
									? this.domNode.setTop(-1e3)
									: this.domNode.setVisibility("hidden")),
								typeof this.c.afterRender == "function" &&
									c(this.c.afterRender, this.c, null);
							return;
						}
						this.allowEditorOverflow
							? (this.domNode.setTop(this.q.coordinate.top),
								this.domNode.setLeft(this.q.coordinate.left))
							: (this.domNode.setTop(
									this.q.coordinate.top + g.scrollTop - g.bigNumbersDelta,
								),
								this.domNode.setLeft(this.q.coordinate.left)),
							this.p ||
								(this.domNode.setVisibility("inherit"),
								this.domNode.setAttribute(
									"monaco-visible-content-widget",
									"true",
								),
								(this.p = !0)),
							typeof this.c.afterRender == "function" &&
								c(this.c.afterRender, this.c, this.q.position);
					}
				}
				class u {
					constructor(g, p) {
						(this.modelPosition = g), (this.viewPosition = p);
					}
				}
				class a {
					constructor(g, p) {
						(this.top = g), (this.left = p), (this._coordinateBrand = void 0);
					}
				}
				class h {
					constructor(g, p, o) {
						(this.top = g),
							(this.left = p),
							(this.height = o),
							(this._anchorCoordinateBrand = void 0);
					}
				}
				function c(n, g, ...p) {
					try {
						return n.call(g, ...p);
					} catch {
						return null;
					}
				}
			},
		),
		define(
			de[1191],
			he([1, 0, 194, 24, 591, 303, 38, 48, 17, 64, 2265]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$svb = e.$rvb = e.$qvb = e.$pvb = e.$ovb = void 0);
				class u {
					constructor(s, l, y, $, v) {
						(this.startLineNumber = s),
							(this.endLineNumber = l),
							(this.className = y),
							(this.tooltip = $),
							(this._decorationToRenderBrand = void 0),
							(this.zIndex = v ?? 0);
					}
				}
				e.$ovb = u;
				class a {
					constructor(s, l, y) {
						(this.className = s), (this.zIndex = l), (this.tooltip = y);
					}
				}
				e.$pvb = a;
				class h {
					constructor() {
						this.c = [];
					}
					add(s) {
						this.c.push(s);
					}
					getDecorations() {
						return this.c;
					}
				}
				e.$qvb = h;
				class c extends w.$_ub {
					c(s, l, y) {
						const $ = [];
						for (let I = s; I <= l; I++) {
							const T = I - s;
							$[T] = new h();
						}
						if (y.length === 0) return $;
						y.sort((I, T) =>
							I.className === T.className
								? I.startLineNumber === T.startLineNumber
									? I.endLineNumber - T.endLineNumber
									: I.startLineNumber - T.startLineNumber
								: I.className < T.className
									? -1
									: 1,
						);
						let v = null,
							S = 0;
						for (let I = 0, T = y.length; I < T; I++) {
							const P = y[I],
								k = P.className,
								L = P.zIndex;
							let D = Math.max(P.startLineNumber, s) - s;
							const M = Math.min(P.endLineNumber, l) - s;
							v === k
								? ((D = Math.max(S + 1, D)), (S = Math.max(S, M)))
								: ((v = k), (S = M));
							for (let N = D; N <= S; N++) $[N].add(new a(k, L, P.tooltip));
						}
						return $;
					}
				}
				e.$rvb = c;
				class n extends E.$yub {
					constructor(s) {
						super(s), (this.t = {}), (this._context = s);
						const l = this._context.configuration.options,
							y = l.get(C.EditorOption.layoutInfo);
						(this.domNode = (0, t.$Shb)(document.createElement("div"))),
							this.domNode.setClassName("glyph-margin-widgets"),
							this.domNode.setPosition("absolute"),
							this.domNode.setTop(0),
							(this.c = l.get(C.EditorOption.lineHeight)),
							(this.g = l.get(C.EditorOption.glyphMargin)),
							(this.j = y.glyphMarginLeft),
							(this.m = y.glyphMarginWidth),
							(this.n = y.glyphMarginDecorationLaneCount),
							(this.q = []),
							(this.s = []);
					}
					dispose() {
						(this.q = []), (this.s = []), (this.t = {}), super.dispose();
					}
					getWidgets() {
						return Object.values(this.t);
					}
					onConfigurationChanged(s) {
						const l = this._context.configuration.options,
							y = l.get(C.EditorOption.layoutInfo);
						return (
							(this.c = l.get(C.EditorOption.lineHeight)),
							(this.g = l.get(C.EditorOption.glyphMargin)),
							(this.j = y.glyphMarginLeft),
							(this.m = y.glyphMarginWidth),
							(this.n = y.glyphMarginDecorationLaneCount),
							!0
						);
					}
					onDecorationsChanged(s) {
						return !0;
					}
					onFlushed(s) {
						return !0;
					}
					onLinesChanged(s) {
						return !0;
					}
					onLinesDeleted(s) {
						return !0;
					}
					onLinesInserted(s) {
						return !0;
					}
					onScrollChanged(s) {
						return s.scrollTopChanged;
					}
					onZonesChanged(s) {
						return !0;
					}
					addWidget(s) {
						const l = (0, t.$Shb)(s.getDomNode());
						(this.t[s.getId()] = {
							widget: s,
							preference: s.getPosition(),
							domNode: l,
							renderInfo: null,
						}),
							l.setPosition("absolute"),
							l.setDisplay("none"),
							l.setAttribute("widgetId", s.getId()),
							this.domNode.appendChild(l),
							this.h();
					}
					setWidgetPosition(s, l) {
						const y = this.t[s.getId()];
						return y.preference.lane === l.lane &&
							y.preference.zIndex === l.zIndex &&
							m.$iL.equalsRange(y.preference.range, l.range)
							? !1
							: ((y.preference = l), this.h(), !0);
					}
					removeWidget(s) {
						const l = s.getId();
						if (this.t[l]) {
							const $ = this.t[l].domNode.domNode;
							delete this.t[l], $.remove(), this.h();
						}
					}
					u(s, l) {
						const y = s.visibleRange.startLineNumber,
							$ = s.visibleRange.endLineNumber,
							v = s.getDecorationsInViewport();
						for (const S of v) {
							const I = S.options.glyphMarginClassName;
							if (!I) continue;
							const T = Math.max(S.range.startLineNumber, y),
								P = Math.min(S.range.endLineNumber, $),
								k = S.options.glyphMargin?.position ?? r.GlyphMarginLane.Center,
								L = S.options.zIndex ?? 0;
							for (let D = T; D <= P; D++) {
								const M =
										this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
											new d.$hL(D, 0),
										),
									N = this._context.viewModel.glyphLanes
										.getLanesAtLine(M.lineNumber)
										.indexOf(k);
								l.push(new p(D, N, L, I));
							}
						}
					}
					w(s, l) {
						const y = s.visibleRange.startLineNumber,
							$ = s.visibleRange.endLineNumber;
						for (const v of Object.values(this.t)) {
							const S = v.preference.range,
								{ startLineNumber: I, endLineNumber: T } =
									this._context.viewModel.coordinatesConverter.convertModelRangeToViewRange(
										m.$iL.lift(S),
									);
							if (!I || !T || T < y || I > $) continue;
							const P = Math.max(I, y),
								k =
									this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(
										new d.$hL(P, 0),
									),
								L = this._context.viewModel.glyphLanes
									.getLanesAtLine(k.lineNumber)
									.indexOf(v.preference.lane);
							l.push(new o(P, L, v.preference.zIndex, v));
						}
					}
					y(s) {
						const l = [];
						return (
							this.u(s, l),
							this.w(s, l),
							l.sort((y, $) =>
								y.lineNumber === $.lineNumber
									? y.laneIndex === $.laneIndex
										? y.zIndex === $.zIndex
											? $.type === y.type
												? y.type === g.Decoration && $.type === g.Decoration
													? y.className < $.className
														? -1
														: 1
													: 0
												: $.type - y.type
											: $.zIndex - y.zIndex
										: y.laneIndex - $.laneIndex
									: y.lineNumber - $.lineNumber,
							),
							l
						);
					}
					prepareRender(s) {
						if (!this.g) {
							this.s = [];
							return;
						}
						for (const $ of Object.values(this.t)) $.renderInfo = null;
						const l = new i.$cc(this.y(s)),
							y = [];
						for (; l.length > 0; ) {
							const $ = l.peek();
							if (!$) break;
							const v = l.takeWhile(
								(I) =>
									I.lineNumber === $.lineNumber && I.laneIndex === $.laneIndex,
							);
							if (!v || v.length === 0) break;
							const S = v[0];
							if (S.type === g.Decoration) {
								const I = [];
								for (const T of v) {
									if (T.zIndex !== S.zIndex || T.type !== S.type) break;
									(I.length === 0 || I[I.length - 1] !== T.className) &&
										I.push(T.className);
								}
								y.push(S.accept(I.join(" ")));
							} else
								S.widget.renderInfo = {
									lineNumber: S.lineNumber,
									laneIndex: S.laneIndex,
								};
						}
						this.s = y;
					}
					render(s) {
						if (!this.g) {
							for (const y of Object.values(this.t))
								y.domNode.setDisplay("none");
							for (; this.q.length > 0; ) this.q.pop()?.domNode.remove();
							return;
						}
						const l = Math.round(this.m / this.n);
						for (const y of Object.values(this.t))
							if (!y.renderInfo) y.domNode.setDisplay("none");
							else {
								const $ =
										s.viewportData.relativeVerticalOffset[
											y.renderInfo.lineNumber - s.viewportData.startLineNumber
										],
									v = this.j + y.renderInfo.laneIndex * this.c;
								y.domNode.setDisplay("block"),
									y.domNode.setTop($),
									y.domNode.setLeft(v),
									y.domNode.setWidth(l),
									y.domNode.setHeight(this.c);
							}
						for (let y = 0; y < this.s.length; y++) {
							const $ = this.s[y],
								v =
									s.viewportData.relativeVerticalOffset[
										$.lineNumber - s.viewportData.startLineNumber
									],
								S = this.j + $.laneIndex * this.c;
							let I;
							y < this.q.length
								? (I = this.q[y])
								: ((I = (0, t.$Shb)(document.createElement("div"))),
									this.q.push(I),
									this.domNode.appendChild(I)),
								I.setClassName("cgmr codicon " + $.combinedClassName),
								I.setPosition("absolute"),
								I.setTop(v),
								I.setLeft(S),
								I.setWidth(l),
								I.setHeight(this.c);
						}
						for (; this.q.length > this.s.length; )
							this.q.pop()?.domNode.remove();
					}
				}
				e.$svb = n;
				var g;
				(function (b) {
					(b[(b.Decoration = 0)] = "Decoration"),
						(b[(b.Widget = 1)] = "Widget");
				})(g || (g = {}));
				class p {
					constructor(s, l, y, $) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.zIndex = y),
							(this.className = $),
							(this.type = g.Decoration);
					}
					accept(s) {
						return new f(this.lineNumber, this.laneIndex, s);
					}
				}
				class o {
					constructor(s, l, y, $) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.zIndex = y),
							(this.widget = $),
							(this.type = g.Widget);
					}
				}
				class f {
					constructor(s, l, y) {
						(this.lineNumber = s),
							(this.laneIndex = l),
							(this.combinedClassName = y);
					}
				}
			},
		),
		