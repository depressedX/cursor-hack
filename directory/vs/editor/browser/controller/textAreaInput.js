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
		