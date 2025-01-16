define(
			de[1825],
			he([1, 0, 120, 27, 343, 592, 12, 1187, 939]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gEc = e.$fEc = void 0);
				const r = !1;
				function u(c) {
					r && console.info(c);
				}
				class a extends d.$eEc {
					constructor(n, g) {
						super(C.OperatingSystem.Windows, g), (this.b = n);
					}
					f(n) {
						return n.isDuplicateModifierCase()
							? ""
							: this.b.getUILabelForKeyCode(n.keyCode);
					}
					k(n) {
						return n.isDuplicateModifierCase()
							? ""
							: i.KeyCodeUtils.toString(n.keyCode);
					}
					getUSLabel() {
						return E.$2ob.toLabel(this.c, this.d, (n) => this.k(n));
					}
					g(n) {
						return n.isDuplicateModifierCase()
							? ""
							: this.b.getAriaLabelForKeyCode(n.keyCode);
					}
					h(n) {
						return this.b.getElectronAcceleratorForKeyBinding(n);
					}
					l(n) {
						if (n.isDuplicateModifierCase()) return "";
						const g = this.b.getUserSettingsLabelForKeyCode(n.keyCode);
						return g && g.toLowerCase();
					}
					m(n) {
						return this.t(n.keyCode);
					}
					t(n) {
						if (
							n === i.KeyCode.LeftArrow ||
							n === i.KeyCode.UpArrow ||
							n === i.KeyCode.RightArrow ||
							n === i.KeyCode.DownArrow
						)
							return !0;
						const g = this.b.getAriaLabelForKeyCode(n),
							p = this.b.getUserSettingsLabelForKeyCode(n);
						return g === p;
					}
					n(n) {
						if (n.isModifierKey()) return null;
						let g = "";
						return (
							n.ctrlKey && (g += "ctrl+"),
							n.shiftKey && (g += "shift+"),
							n.altKey && (g += "alt+"),
							n.metaKey && (g += "meta+"),
							(g += i.KeyCodeUtils.toString(n.keyCode)),
							g
						);
					}
					o(n) {
						return n.keyCode === i.KeyCode.Ctrl &&
							!n.shiftKey &&
							!n.altKey &&
							!n.metaKey
							? "ctrl"
							: n.keyCode === i.KeyCode.Shift &&
									!n.ctrlKey &&
									!n.altKey &&
									!n.metaKey
								? "shift"
								: n.keyCode === i.KeyCode.Alt &&
										!n.ctrlKey &&
										!n.shiftKey &&
										!n.metaKey
									? "alt"
									: n.keyCode === i.KeyCode.Meta &&
											!n.ctrlKey &&
											!n.shiftKey &&
											!n.altKey
										? "meta"
										: null;
					}
					static w(n, g) {
						return g
							? n.ctrlKey && n.shiftKey && n.altKey
								? g.withShiftAltGr
								: n.ctrlKey && n.altKey
									? g.withAltGr
									: n.shiftKey
										? g.withShift
										: g.value
							: null;
					}
					static getProducedChar(n, g) {
						const p = this.w(n, g);
						return p === null || p.length === 0 ? " --- " : "  " + p + "  ";
					}
				}
				e.$fEc = a;
				class h {
					constructor(n, g, p) {
						(this.f = n),
							(this.g = p),
							(this.d = []),
							(this.c = []),
							(this.d = []),
							(this.e = []),
							(this.d[i.KeyCode.Unknown] = i.KeyCodeUtils.toString(
								i.KeyCode.Unknown,
							));
						for (let s = i.ScanCode.None; s < i.ScanCode.MAX_VALUE; s++) {
							const l = i.$ms[s];
							l !== i.KeyCode.DependsOnKbLayout &&
								((this.c[s] = l),
								(this.d[l] = i.KeyCodeUtils.toString(l)),
								(this.e[l] = !0));
						}
						const o = [];
						let f = !1;
						this.b = [];
						for (const s in g)
							if (g.hasOwnProperty(s)) {
								const l = i.$ls.toEnum(s);
								if (l === i.ScanCode.None) {
									u(`Unknown scanCode ${s} in mapping.`);
									continue;
								}
								const y = g[s],
									$ = i.$ms[l];
								if ($ !== i.KeyCode.DependsOnKbLayout) {
									const L = i.$ks[y.vkey] || i.KeyCode.Unknown;
									if (
										L === i.KeyCode.Unknown ||
										$ === L ||
										l !== i.ScanCode.NumpadComma
									)
										continue;
								}
								const v = y.value,
									S = y.withShift,
									I = y.withAltGr,
									T = y.withShiftAltGr,
									P = i.$ks[y.vkey] || i.KeyCode.Unknown,
									k = {
										scanCode: l,
										keyCode: P,
										value: v,
										withShift: S,
										withAltGr: I,
										withShiftAltGr: T,
									};
								if (((this.b[l] = k), (this.c[l] = P), P === i.KeyCode.Unknown))
									continue;
								if (((this.e[P] = !0), v.length === 0)) this.d[P] = null;
								else if (v.length > 1) this.d[P] = v;
								else {
									const L = v.charCodeAt(0);
									if (L >= t.CharCode.a && L <= t.CharCode.z) {
										const D = t.CharCode.A + (L - t.CharCode.a);
										(o[D] = !0),
											(f = !0),
											(this.d[P] = String.fromCharCode(
												t.CharCode.A + (L - t.CharCode.a),
											));
									} else
										L >= t.CharCode.A && L <= t.CharCode.Z
											? ((o[L] = !0), (f = !0), (this.d[P] = v))
											: (this.d[P] = v);
								}
							}
						const b = (s, l) => {
							o[s] || (this.d[l] = String.fromCharCode(s));
						};
						if (
							(b(t.CharCode.A, i.KeyCode.KeyA),
							b(t.CharCode.B, i.KeyCode.KeyB),
							b(t.CharCode.C, i.KeyCode.KeyC),
							b(t.CharCode.D, i.KeyCode.KeyD),
							b(t.CharCode.E, i.KeyCode.KeyE),
							b(t.CharCode.F, i.KeyCode.KeyF),
							b(t.CharCode.G, i.KeyCode.KeyG),
							b(t.CharCode.H, i.KeyCode.KeyH),
							b(t.CharCode.I, i.KeyCode.KeyI),
							b(t.CharCode.J, i.KeyCode.KeyJ),
							b(t.CharCode.K, i.KeyCode.KeyK),
							b(t.CharCode.L, i.KeyCode.KeyL),
							b(t.CharCode.M, i.KeyCode.KeyM),
							b(t.CharCode.N, i.KeyCode.KeyN),
							b(t.CharCode.O, i.KeyCode.KeyO),
							b(t.CharCode.P, i.KeyCode.KeyP),
							b(t.CharCode.Q, i.KeyCode.KeyQ),
							b(t.CharCode.R, i.KeyCode.KeyR),
							b(t.CharCode.S, i.KeyCode.KeyS),
							b(t.CharCode.T, i.KeyCode.KeyT),
							b(t.CharCode.U, i.KeyCode.KeyU),
							b(t.CharCode.V, i.KeyCode.KeyV),
							b(t.CharCode.W, i.KeyCode.KeyW),
							b(t.CharCode.X, i.KeyCode.KeyX),
							b(t.CharCode.Y, i.KeyCode.KeyY),
							b(t.CharCode.Z, i.KeyCode.KeyZ),
							!f)
						) {
							const s = (l, y) => {
								this.d[l] = String.fromCharCode(y);
							};
							s(i.KeyCode.Semicolon, t.CharCode.Semicolon),
								s(i.KeyCode.Equal, t.CharCode.Equals),
								s(i.KeyCode.Comma, t.CharCode.Comma),
								s(i.KeyCode.Minus, t.CharCode.Dash),
								s(i.KeyCode.Period, t.CharCode.Period),
								s(i.KeyCode.Slash, t.CharCode.Slash),
								s(i.KeyCode.Backquote, t.CharCode.BackTick),
								s(i.KeyCode.BracketLeft, t.CharCode.OpenSquareBracket),
								s(i.KeyCode.Backslash, t.CharCode.Backslash),
								s(i.KeyCode.BracketRight, t.CharCode.CloseSquareBracket),
								s(i.KeyCode.Quote, t.CharCode.SingleQuote);
						}
					}
					dumpDebugInfo() {
						const n = [],
							g = [i.ScanCode.ArrowUp, i.ScanCode.Numpad0];
						let p = 0;
						n.push(
							"-----------------------------------------------------------------------------------------------------------------------------------------",
						);
						for (let o = i.ScanCode.None; o < i.ScanCode.MAX_VALUE; o++) {
							if (
								i.$ms[o] !== i.KeyCode.DependsOnKbLayout &&
								g.indexOf(o) === -1
							)
								continue;
							p % 6 === 0 &&
								(n.push(
									"|       HW Code combination      |  Key  |    KeyCode combination    |          UI label         |        User settings       | WYSIWYG |",
								),
								n.push(
									"-----------------------------------------------------------------------------------------------------------------------------------------",
								)),
								p++;
							const f = this.b[o],
								b = i.$ls.toString(o),
								s = [0, 2, 5, 7];
							for (const l of s) {
								const y = !!(l & 1),
									$ = !!(l & 2),
									v = !!(l & 4),
									S = new w.$us(y, $, v, !1, o),
									I = this.j(S),
									T = I ? i.KeyCodeUtils.toString(I.keyCode) : null,
									P = I ? new a(this, [I]) : null,
									k = `${y ? "Ctrl+" : ""}${$ ? "Shift+" : ""}${v ? "Alt+" : ""}${b}`,
									L = P ? P.getAriaLabel() : null,
									D = L ? L.replace(/Control\+/, "Ctrl+") : null,
									M = P ? P.getUserSettingsLabel() : null,
									N = a.getProducedChar(S, f),
									A = T
										? `${y ? "Ctrl+" : ""}${$ ? "Shift+" : ""}${v ? "Alt+" : ""}${T}`
										: null,
									O = (P ? P.isWYSIWYG() : !1) ? "       " : "   NO  ";
								n.push(
									`| ${this.h(k, 30)} | ${N} | ${this.h(A, 25)} | ${this.h(D, 25)} |  ${this.h(M, 25)} | ${O} |`,
								);
							}
							n.push(
								"-----------------------------------------------------------------------------------------------------------------------------------------",
							);
						}
						return n.join(`
`);
					}
					h(n, g) {
						for (n === null && (n = "null"); n.length < g; ) n = " " + n;
						return n;
					}
					getUILabelForKeyCode(n) {
						return this.i(n);
					}
					getAriaLabelForKeyCode(n) {
						return this.i(n);
					}
					getUserSettingsLabelForKeyCode(n) {
						return this.f
							? i.KeyCodeUtils.toUserSettingsUS(n)
							: i.KeyCodeUtils.toUserSettingsGeneral(n);
					}
					getElectronAcceleratorForKeyBinding(n) {
						return i.KeyCodeUtils.toElectronAccelerator(n.keyCode);
					}
					i(n) {
						return this.d[n] || i.KeyCodeUtils.toString(i.KeyCode.Unknown);
					}
					resolveKeyboardEvent(n) {
						const g = n.ctrlKey || (this.g && n.altGraphKey),
							p = n.altKey || (this.g && n.altGraphKey),
							o = new w.$ts(g, n.shiftKey, p, n.metaKey, n.keyCode);
						return new a(this, [o]);
					}
					j(n) {
						if (!n) return null;
						if (n instanceof w.$ts) return this.e[n.keyCode] ? n : null;
						const g = this.c[n.scanCode] || i.KeyCode.Unknown;
						return g === i.KeyCode.Unknown || !this.e[g]
							? null
							: new w.$ts(n.ctrlKey, n.shiftKey, n.altKey, n.metaKey, g);
					}
					resolveKeybinding(n) {
						const g = (0, m.$rZ)(n.chords.map((p) => this.j(p)));
						return g.length > 0 ? [new a(this, g)] : [];
					}
				}
				e.$gEc = h;
			},
		),
		