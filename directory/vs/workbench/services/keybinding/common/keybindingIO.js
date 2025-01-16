define(de[3393], he([1, 0, 918, 8]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ovc = e.$Nvc = void 0);
			class w {
				static writeKeybindingItem(m, r) {
					if (!r.resolvedKeybinding) return;
					const u = JSON.stringify(r.resolvedKeybinding.getUserSettingsLabel());
					m.write(`{ "key": ${E(u + ",", 25)} "command": `);
					const a = r.when ? JSON.stringify(r.when.serialize()) : "",
						h = JSON.stringify(r.command);
					a.length > 0
						? (m.write(`${h},`),
							m.writeLine(),
							m.write(`                                     "when": ${a}`))
						: m.write(`${h}`),
						r.commandArgs &&
							(m.write(","),
							m.writeLine(),
							m.write(
								`                                     "args": ${JSON.stringify(r.commandArgs)}`,
							)),
						m.write(" }");
				}
				static readUserKeybindingItem(m) {
					const r =
							"key" in m && typeof m.key == "string"
								? t.$Xpb.parseKeybinding(m.key)
								: null,
						u =
							"when" in m && typeof m.when == "string"
								? i.$Kj.deserialize(m.when)
								: void 0,
						a =
							"command" in m && typeof m.command == "string" ? m.command : null,
						h = "args" in m && typeof m.args < "u" ? m.args : void 0;
					return {
						keybinding: r,
						command: a,
						commandArgs: h,
						when: u,
						_sourceKey: "key" in m && typeof m.key == "string" ? m.key : void 0,
					};
				}
			}
			e.$Nvc = w;
			function E(d, m) {
				return d.length < m ? d + new Array(m - d.length).join(" ") : d;
			}
			class C {
				constructor() {
					(this.a = []), (this.b = "");
				}
				write(m) {
					this.b += m;
				}
				writeLine(m = "") {
					this.a.push(this.b + m), (this.b = "");
				}
				toString() {
					return (
						this.writeLine(),
						this.a.join(`
`)
					);
				}
			}
			e.$Ovc = C;
		}),
		define(
			de[3394],
			he([1, 0, 120, 27, 343, 12, 1187]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$A4c = e.$z4c = void 0);
				const d = [];
				class m extends C.$eEc {
					constructor(n, g, p) {
						super(g, p), (this.p = n);
					}
					f(n) {
						return this.p.getUILabelForScanCodeChord(n);
					}
					g(n) {
						return this.p.getAriaLabelForScanCodeChord(n);
					}
					h(n) {
						return this.p.getElectronAcceleratorLabelForScanCodeChord(n);
					}
					l(n) {
						return this.p.getUserSettingsLabelForScanCodeChord(n);
					}
					m(n) {
						if (!n || i.$ms[n.scanCode] !== i.KeyCode.DependsOnKbLayout)
							return !0;
						const g = this.p.getAriaLabelForScanCodeChord(n),
							p = this.p.getUserSettingsLabelForScanCodeChord(n);
						return !g && !p
							? !0
							: !g || !p
								? !1
								: g.toLowerCase() === p.toLowerCase();
					}
					n(n) {
						return this.p.getDispatchStrForScanCodeChord(n);
					}
					o(n) {
						return (n.scanCode === i.ScanCode.ControlLeft ||
							n.scanCode === i.ScanCode.ControlRight) &&
							!n.shiftKey &&
							!n.altKey &&
							!n.metaKey
							? "ctrl"
							: (n.scanCode === i.ScanCode.AltLeft ||
										n.scanCode === i.ScanCode.AltRight) &&
									!n.ctrlKey &&
									!n.shiftKey &&
									!n.metaKey
								? "alt"
								: (n.scanCode === i.ScanCode.ShiftLeft ||
											n.scanCode === i.ScanCode.ShiftRight) &&
										!n.ctrlKey &&
										!n.altKey &&
										!n.metaKey
									? "shift"
									: (n.scanCode === i.ScanCode.MetaLeft ||
												n.scanCode === i.ScanCode.MetaRight) &&
											!n.ctrlKey &&
											!n.shiftKey &&
											!n.altKey
										? "meta"
										: null;
					}
				}
				e.$z4c = m;
				class r {
					constructor(n, g, p, o) {
						(this.ctrlKey = n),
							(this.shiftKey = g),
							(this.altKey = p),
							(this.scanCode = o);
					}
					toString() {
						return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${i.$ls.toString(this.scanCode)}`;
					}
					equals(n) {
						return (
							this.ctrlKey === n.ctrlKey &&
							this.shiftKey === n.shiftKey &&
							this.altKey === n.altKey &&
							this.scanCode === n.scanCode
						);
					}
					c(n) {
						return n
							? this.ctrlKey && this.shiftKey && this.altKey
								? n.withShiftAltGr
								: this.ctrlKey && this.altKey
									? n.withAltGr
									: this.shiftKey
										? n.withShift
										: n.value
							: "";
					}
					getProducedChar(n) {
						const g = h.getCharCode(this.c(n));
						return g === 0
							? " --- "
							: g >= t.CharCode.U_Combining_Grave_Accent &&
									g <= t.CharCode.U_Combining_Latin_Small_Letter_X
								? "U+" + g.toString(16)
								: "  " + String.fromCharCode(g) + "  ";
					}
				}
				class u {
					constructor(n, g, p, o) {
						(this.ctrlKey = n),
							(this.shiftKey = g),
							(this.altKey = p),
							(this.keyCode = o);
					}
					toString() {
						return `${this.ctrlKey ? "Ctrl+" : ""}${this.shiftKey ? "Shift+" : ""}${this.altKey ? "Alt+" : ""}${i.KeyCodeUtils.toString(this.keyCode)}`;
					}
				}
				class a {
					constructor() {
						(this.c = []), (this.d = []), (this.c = []), (this.d = []);
					}
					registrationComplete() {
						this.e(i.ScanCode.IntlHash), this.e(i.ScanCode.IntlBackslash);
					}
					e(n) {
						for (let g = 0; g < 8; g++) {
							const p = this.c[(n << 3) + g];
							if (p)
								for (let o = 0, f = p.length; o < f; o++) {
									const b = this.d[p[o]];
									if (b.length !== 1)
										for (let s = 0, l = b.length; s < l; s++) {
											const y = b[s];
											if (y >>> 3 === n) {
												for (let v = s + 1; v < l; v++) b[v - 1] = b[v];
												b[l - 1] = y;
											}
										}
								}
						}
					}
					registerIfUnknown(n, g) {
						if (g.keyCode === i.KeyCode.Unknown) return;
						const p = this.f(n),
							o = this.g(g),
							f =
								g.keyCode >= i.KeyCode.Digit0 && g.keyCode <= i.KeyCode.Digit9,
							b = g.keyCode >= i.KeyCode.KeyA && g.keyCode <= i.KeyCode.KeyZ,
							s = this.c[p];
						if (f || b) {
							if (s) {
								for (let l = 0, y = s.length; l < y; l++)
									if (s[l] === o) return;
							}
						} else if (s && s.length !== 0) return;
						(this.c[p] = this.c[p] || []),
							this.c[p].unshift(o),
							(this.d[o] = this.d[o] || []),
							this.d[o].unshift(p);
					}
					lookupKeyCodeCombo(n) {
						const g = this.g(n),
							p = this.d[g];
						if (!p || p.length === 0) return [];
						const o = [];
						for (let f = 0, b = p.length; f < b; f++) {
							const s = p[f],
								l = !!(s & 1),
								y = !!(s & 2),
								$ = !!(s & 4),
								v = s >>> 3;
							o[f] = new r(l, y, $, v);
						}
						return o;
					}
					lookupScanCodeCombo(n) {
						const g = this.f(n),
							p = this.c[g];
						if (!p || p.length === 0) return [];
						const o = [];
						for (let f = 0, b = p.length; f < b; f++) {
							const s = p[f],
								l = !!(s & 1),
								y = !!(s & 2),
								$ = !!(s & 4),
								v = s >>> 3;
							o[f] = new u(l, y, $, v);
						}
						return o;
					}
					guessStableKeyCode(n) {
						if (n >= i.ScanCode.Digit1 && n <= i.ScanCode.Digit0)
							switch (n) {
								case i.ScanCode.Digit1:
									return i.KeyCode.Digit1;
								case i.ScanCode.Digit2:
									return i.KeyCode.Digit2;
								case i.ScanCode.Digit3:
									return i.KeyCode.Digit3;
								case i.ScanCode.Digit4:
									return i.KeyCode.Digit4;
								case i.ScanCode.Digit5:
									return i.KeyCode.Digit5;
								case i.ScanCode.Digit6:
									return i.KeyCode.Digit6;
								case i.ScanCode.Digit7:
									return i.KeyCode.Digit7;
								case i.ScanCode.Digit8:
									return i.KeyCode.Digit8;
								case i.ScanCode.Digit9:
									return i.KeyCode.Digit9;
								case i.ScanCode.Digit0:
									return i.KeyCode.Digit0;
							}
						const g = this.lookupScanCodeCombo(new r(!1, !1, !1, n)),
							p = this.lookupScanCodeCombo(new r(!1, !0, !1, n));
						if (g.length === 1 && p.length === 1) {
							const o = g[0].shiftKey,
								f = g[0].keyCode,
								b = p[0].shiftKey,
								s = p[0].keyCode;
							if (f === s && o !== b) return f;
						}
						return i.KeyCode.DependsOnKbLayout;
					}
					f(n) {
						return this.h(n.ctrlKey, n.shiftKey, n.altKey, n.scanCode);
					}
					g(n) {
						return this.h(n.ctrlKey, n.shiftKey, n.altKey, n.keyCode);
					}
					h(n, g, p, o) {
						return (
							(((n ? 1 : 0) << 0) |
								((g ? 1 : 0) << 1) |
								((p ? 1 : 0) << 2) |
								(o << 3)) >>>
							0
						);
					}
				}
				class h {
					constructor(n, g, p, o) {
						(this.g = n),
							(this.h = p),
							(this.l = o),
							(this.e = []),
							(this.f = []),
							(this.c = []),
							(this.d = new a()),
							(this.e = []),
							(this.f = []);
						const f = ($, v, S, I, T, P, k, L) => {
								this.d.registerIfUnknown(
									new r(!!$, !!v, !!S, I),
									new u(!!T, !!P, !!k, L),
								);
							},
							b = ($, v, S, I, T) => {
								for (let P = $; P <= 1; P++)
									for (let k = v; k <= 1; k++)
										for (let L = S; L <= 1; L++) f(P, k, L, I, P, k, L, T);
							};
						for (let $ = i.ScanCode.None; $ < i.ScanCode.MAX_VALUE; $++)
							this.e[$] = null;
						for (let $ = i.ScanCode.None; $ < i.ScanCode.MAX_VALUE; $++)
							this.f[$] = null;
						for (let $ = i.ScanCode.None; $ < i.ScanCode.MAX_VALUE; $++) {
							const v = i.$ms[$];
							v !== i.KeyCode.DependsOnKbLayout &&
								(b(0, 0, 0, $, v),
								(this.e[$] = i.KeyCodeUtils.toString(v)),
								v === i.KeyCode.Unknown ||
								v === i.KeyCode.Ctrl ||
								v === i.KeyCode.Meta ||
								v === i.KeyCode.Alt ||
								v === i.KeyCode.Shift
									? (this.f[$] = null)
									: (this.f[$] = `[${i.$ls.toString($)}]`));
						}
						const s = {};
						{
							const $ = [];
							for (const S in g)
								if (g.hasOwnProperty(S)) {
									const I = i.$ls.toEnum(S);
									if (
										I === i.ScanCode.None ||
										i.$ms[I] !== i.KeyCode.DependsOnKbLayout
									)
										continue;
									const T = g[S],
										P = h.getCharCode(T.value);
									if (P >= t.CharCode.a && P <= t.CharCode.z) {
										const k = t.CharCode.A + (P - t.CharCode.a);
										$[k] = !0;
									}
								}
							const v = (S, I, T, P) => {
								$[S] ||
									(s[i.$ls.toString(I)] = {
										value: T,
										withShift: P,
										withAltGr: "",
										withShiftAltGr: "",
									});
							};
							v(t.CharCode.A, i.ScanCode.KeyA, "a", "A"),
								v(t.CharCode.B, i.ScanCode.KeyB, "b", "B"),
								v(t.CharCode.C, i.ScanCode.KeyC, "c", "C"),
								v(t.CharCode.D, i.ScanCode.KeyD, "d", "D"),
								v(t.CharCode.E, i.ScanCode.KeyE, "e", "E"),
								v(t.CharCode.F, i.ScanCode.KeyF, "f", "F"),
								v(t.CharCode.G, i.ScanCode.KeyG, "g", "G"),
								v(t.CharCode.H, i.ScanCode.KeyH, "h", "H"),
								v(t.CharCode.I, i.ScanCode.KeyI, "i", "I"),
								v(t.CharCode.J, i.ScanCode.KeyJ, "j", "J"),
								v(t.CharCode.K, i.ScanCode.KeyK, "k", "K"),
								v(t.CharCode.L, i.ScanCode.KeyL, "l", "L"),
								v(t.CharCode.M, i.ScanCode.KeyM, "m", "M"),
								v(t.CharCode.N, i.ScanCode.KeyN, "n", "N"),
								v(t.CharCode.O, i.ScanCode.KeyO, "o", "O"),
								v(t.CharCode.P, i.ScanCode.KeyP, "p", "P"),
								v(t.CharCode.Q, i.ScanCode.KeyQ, "q", "Q"),
								v(t.CharCode.R, i.ScanCode.KeyR, "r", "R"),
								v(t.CharCode.S, i.ScanCode.KeyS, "s", "S"),
								v(t.CharCode.T, i.ScanCode.KeyT, "t", "T"),
								v(t.CharCode.U, i.ScanCode.KeyU, "u", "U"),
								v(t.CharCode.V, i.ScanCode.KeyV, "v", "V"),
								v(t.CharCode.W, i.ScanCode.KeyW, "w", "W"),
								v(t.CharCode.X, i.ScanCode.KeyX, "x", "X"),
								v(t.CharCode.Y, i.ScanCode.KeyY, "y", "Y"),
								v(t.CharCode.Z, i.ScanCode.KeyZ, "z", "Z");
						}
						const l = [];
						let y = 0;
						for (const $ in g)
							if (g.hasOwnProperty($)) {
								const v = i.$ls.toEnum($);
								if (
									v === i.ScanCode.None ||
									i.$ms[v] !== i.KeyCode.DependsOnKbLayout
								)
									continue;
								this.c[v] = g[$];
								const S = s[$] || g[$],
									I = h.getCharCode(S.value),
									T = h.getCharCode(S.withShift),
									P = h.getCharCode(S.withAltGr),
									k = h.getCharCode(S.withShiftAltGr),
									L = {
										scanCode: v,
										value: I,
										withShift: T,
										withAltGr: P,
										withShiftAltGr: k,
									};
								if (
									((l[y++] = L),
									(this.f[v] = `[${i.$ls.toString(v)}]`),
									I >= t.CharCode.a && I <= t.CharCode.z)
								) {
									const D = t.CharCode.A + (I - t.CharCode.a);
									this.e[v] = String.fromCharCode(D);
								} else
									I >= t.CharCode.A && I <= t.CharCode.Z
										? (this.e[v] = String.fromCharCode(I))
										: I
											? (this.e[v] = String.fromCharCode(I))
											: (this.e[v] = null);
							}
						for (let $ = l.length - 1; $ >= 0; $--) {
							const v = l[$],
								S = v.scanCode,
								I = v.withShiftAltGr;
							if (I === v.withAltGr || I === v.withShift || I === v.value)
								continue;
							const T = h.r(I);
							if (!T) continue;
							const P = T.shiftKey,
								k = T.keyCode;
							P ? f(1, 1, 1, S, 0, 1, 0, k) : f(1, 1, 1, S, 0, 0, 0, k);
						}
						for (let $ = l.length - 1; $ >= 0; $--) {
							const v = l[$],
								S = v.scanCode,
								I = v.withAltGr;
							if (I === v.withShift || I === v.value) continue;
							const T = h.r(I);
							if (!T) continue;
							const P = T.shiftKey,
								k = T.keyCode;
							P ? f(1, 0, 1, S, 0, 1, 0, k) : f(1, 0, 1, S, 0, 0, 0, k);
						}
						for (let $ = l.length - 1; $ >= 0; $--) {
							const v = l[$],
								S = v.scanCode,
								I = v.withShift;
							if (I === v.value) continue;
							const T = h.r(I);
							if (!T) continue;
							const P = T.shiftKey,
								k = T.keyCode;
							P
								? (f(0, 1, 0, S, 0, 1, 0, k),
									f(0, 1, 1, S, 0, 1, 1, k),
									f(1, 1, 0, S, 1, 1, 0, k),
									f(1, 1, 1, S, 1, 1, 1, k))
								: (f(0, 1, 0, S, 0, 0, 0, k),
									f(0, 1, 0, S, 0, 1, 0, k),
									f(0, 1, 1, S, 0, 0, 1, k),
									f(0, 1, 1, S, 0, 1, 1, k),
									f(1, 1, 0, S, 1, 0, 0, k),
									f(1, 1, 0, S, 1, 1, 0, k),
									f(1, 1, 1, S, 1, 0, 1, k),
									f(1, 1, 1, S, 1, 1, 1, k));
						}
						for (let $ = l.length - 1; $ >= 0; $--) {
							const v = l[$],
								S = v.scanCode,
								I = h.r(v.value);
							if (!I) continue;
							const T = I.shiftKey,
								P = I.keyCode;
							T
								? (f(0, 0, 0, S, 0, 1, 0, P),
									f(0, 0, 1, S, 0, 1, 1, P),
									f(1, 0, 0, S, 1, 1, 0, P),
									f(1, 0, 1, S, 1, 1, 1, P))
								: (f(0, 0, 0, S, 0, 0, 0, P),
									f(0, 0, 1, S, 0, 0, 1, P),
									f(0, 1, 0, S, 0, 1, 0, P),
									f(0, 1, 1, S, 0, 1, 1, P),
									f(1, 0, 0, S, 1, 0, 0, P),
									f(1, 0, 1, S, 1, 0, 1, P),
									f(1, 1, 0, S, 1, 1, 0, P),
									f(1, 1, 1, S, 1, 1, 1, P));
						}
						b(0, 0, 0, i.ScanCode.Digit1, i.KeyCode.Digit1),
							b(0, 0, 0, i.ScanCode.Digit2, i.KeyCode.Digit2),
							b(0, 0, 0, i.ScanCode.Digit3, i.KeyCode.Digit3),
							b(0, 0, 0, i.ScanCode.Digit4, i.KeyCode.Digit4),
							b(0, 0, 0, i.ScanCode.Digit5, i.KeyCode.Digit5),
							b(0, 0, 0, i.ScanCode.Digit6, i.KeyCode.Digit6),
							b(0, 0, 0, i.ScanCode.Digit7, i.KeyCode.Digit7),
							b(0, 0, 0, i.ScanCode.Digit8, i.KeyCode.Digit8),
							b(0, 0, 0, i.ScanCode.Digit9, i.KeyCode.Digit9),
							b(0, 0, 0, i.ScanCode.Digit0, i.KeyCode.Digit0),
							this.d.registrationComplete();
					}
					dumpDebugInfo() {
						const n = [],
							g = [i.ScanCode.ArrowUp, i.ScanCode.Numpad0];
						let p = 0;
						n.push(`isUSStandard: ${this.g}`),
							n.push(
								"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
							);
						for (let o = i.ScanCode.None; o < i.ScanCode.MAX_VALUE; o++) {
							if (
								i.$ms[o] !== i.KeyCode.DependsOnKbLayout &&
								g.indexOf(o) === -1
							)
								continue;
							p % 4 === 0 &&
								(n.push(
									"|       HW Code combination      |  Key  |    KeyCode combination    | Pri |          UI label         |         User settings          |    Electron accelerator   |       Dispatching string       | WYSIWYG |",
								),
								n.push(
									"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
								)),
								p++;
							const f = this.c[o];
							for (let b = 0; b < 8; b++) {
								const s = !!(b & 1),
									l = !!(b & 2),
									y = !!(b & 4),
									$ = new r(s, l, y, o),
									v = this.resolveKeyboardEvent({
										_standardKeyboardEventBrand: !0,
										ctrlKey: $.ctrlKey,
										shiftKey: $.shiftKey,
										altKey: $.altKey,
										metaKey: !1,
										altGraphKey: !1,
										keyCode: i.KeyCode.DependsOnKbLayout,
										code: i.$ls.toString(o),
									}),
									S = $.toString(),
									I = $.getProducedChar(f),
									T = v.getAriaLabel(),
									P = T ? T.replace(/Control\+/, "Ctrl+") : null,
									k = v.getUserSettingsLabel(),
									L = v.getElectronAccelerator(),
									D = v.getDispatchChords()[0],
									N = (v ? v.isWYSIWYG() : !1) ? "       " : "   NO  ",
									A = this.d.lookupScanCodeCombo($);
								if (A.length === 0)
									n.push(
										`| ${this.m(S, 30)} | ${I} | ${this.m("", 25)} | ${this.m("", 3)} | ${this.m(P, 25)} | ${this.m(k, 30)} | ${this.m(L, 25)} | ${this.m(D, 30)} | ${N} |`,
									);
								else
									for (let R = 0, O = A.length; R < O; R++) {
										const B = A[R];
										let U;
										const z = this.d.lookupKeyCodeCombo(B);
										if (z.length === 1) U = "";
										else {
											let x = -1;
											for (let H = 0; H < z.length; H++)
												if (z[H].equals($)) {
													x = H + 1;
													break;
												}
											U = String(x);
										}
										const F = B.toString();
										R === 0
											? n.push(
													`| ${this.m(S, 30)} | ${I} | ${this.m(F, 25)} | ${this.m(U, 3)} | ${this.m(P, 25)} | ${this.m(k, 30)} | ${this.m(L, 25)} | ${this.m(D, 30)} | ${N} |`,
												)
											: n.push(
													`| ${this.m("", 30)} |       | ${this.m(F, 25)} | ${this.m(U, 3)} | ${this.m("", 25)} | ${this.m("", 30)} | ${this.m("", 25)} | ${this.m("", 30)} |         |`,
												);
									}
							}
							n.push(
								"----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
							);
						}
						return n.join(`
`);
					}
					m(n, g) {
						for (n === null && (n = "null"); n.length < g; ) n = " " + n;
						return n;
					}
					keyCodeChordToScanCodeChord(n) {
						if (n.keyCode === i.KeyCode.Enter)
							return [
								new w.$us(
									n.ctrlKey,
									n.shiftKey,
									n.altKey,
									n.metaKey,
									i.ScanCode.Enter,
								),
							];
						const g = this.d.lookupKeyCodeCombo(
								new u(n.ctrlKey, n.shiftKey, n.altKey, n.keyCode),
							),
							p = [];
						for (let o = 0, f = g.length; o < f; o++) {
							const b = g[o];
							p[o] = new w.$us(
								b.ctrlKey,
								b.shiftKey,
								b.altKey,
								n.metaKey,
								b.scanCode,
							);
						}
						return p;
					}
					getUILabelForScanCodeChord(n) {
						if (!n) return null;
						if (n.isDuplicateModifierCase()) return "";
						if (this.l === E.OperatingSystem.Macintosh)
							switch (n.scanCode) {
								case i.ScanCode.ArrowLeft:
									return "\u2190";
								case i.ScanCode.ArrowUp:
									return "\u2191";
								case i.ScanCode.ArrowRight:
									return "\u2192";
								case i.ScanCode.ArrowDown:
									return "\u2193";
							}
						return this.e[n.scanCode];
					}
					getAriaLabelForScanCodeChord(n) {
						return n
							? n.isDuplicateModifierCase()
								? ""
								: this.e[n.scanCode]
							: null;
					}
					getDispatchStrForScanCodeChord(n) {
						const g = this.f[n.scanCode];
						if (!g) return null;
						let p = "";
						return (
							n.ctrlKey && (p += "ctrl+"),
							n.shiftKey && (p += "shift+"),
							n.altKey && (p += "alt+"),
							n.metaKey && (p += "meta+"),
							(p += g),
							p
						);
					}
					getUserSettingsLabelForScanCodeChord(n) {
						if (!n) return null;
						if (n.isDuplicateModifierCase()) return "";
						const g = i.$ms[n.scanCode];
						if (g !== i.KeyCode.DependsOnKbLayout)
							return i.KeyCodeUtils.toUserSettingsUS(g).toLowerCase();
						const p = this.d.guessStableKeyCode(n.scanCode);
						if (p !== i.KeyCode.DependsOnKbLayout) {
							const o = this.keyCodeChordToScanCodeChord(
								new w.$ts(n.ctrlKey, n.shiftKey, n.altKey, n.metaKey, p),
							);
							for (let f = 0, b = o.length; f < b; f++)
								if (o[f].scanCode === n.scanCode)
									return i.KeyCodeUtils.toUserSettingsUS(p).toLowerCase();
						}
						return this.f[n.scanCode];
					}
					getElectronAcceleratorLabelForScanCodeChord(n) {
						if (!n) return null;
						const g = i.$ms[n.scanCode];
						if (g !== i.KeyCode.DependsOnKbLayout)
							return i.KeyCodeUtils.toElectronAccelerator(g);
						const p = this.d.guessStableKeyCode(n.scanCode);
						return this.l === E.OperatingSystem.Linux &&
							!this.g &&
							(p === i.KeyCode.Semicolon ||
								p === i.KeyCode.Equal ||
								p === i.KeyCode.Comma ||
								p === i.KeyCode.Minus ||
								p === i.KeyCode.Period ||
								p === i.KeyCode.Slash ||
								p === i.KeyCode.Backquote ||
								p === i.KeyCode.BracketLeft ||
								p === i.KeyCode.Backslash ||
								p === i.KeyCode.BracketRight)
							? null
							: p !== i.KeyCode.DependsOnKbLayout
								? i.KeyCodeUtils.toElectronAccelerator(p)
								: null;
					}
					n(n) {
						if (n.length === 0) return [];
						const g = [];
						return this.o(n, 0, [], g), g;
					}
					o(n, g, p, o) {
						const f = n[g],
							b = g === n.length - 1;
						for (let s = 0, l = f.length; s < l; s++) {
							const y = [...p, f[s]];
							b ? o.push(new m(this, this.l, y)) : this.o(n, g + 1, y, o);
						}
					}
					resolveKeyboardEvent(n) {
						let g = i.$ls.toEnum(n.code);
						g === i.ScanCode.NumpadEnter && (g = i.ScanCode.Enter);
						const p = n.keyCode;
						if (
							p === i.KeyCode.LeftArrow ||
							p === i.KeyCode.UpArrow ||
							p === i.KeyCode.RightArrow ||
							p === i.KeyCode.DownArrow ||
							p === i.KeyCode.Delete ||
							p === i.KeyCode.Insert ||
							p === i.KeyCode.Home ||
							p === i.KeyCode.End ||
							p === i.KeyCode.PageDown ||
							p === i.KeyCode.PageUp ||
							p === i.KeyCode.Backspace
						) {
							const s = i.$ns[p];
							s !== i.ScanCode.DependsOnKbLayout && (g = s);
						} else if (
							(g === i.ScanCode.Numpad1 ||
								g === i.ScanCode.Numpad2 ||
								g === i.ScanCode.Numpad3 ||
								g === i.ScanCode.Numpad4 ||
								g === i.ScanCode.Numpad5 ||
								g === i.ScanCode.Numpad6 ||
								g === i.ScanCode.Numpad7 ||
								g === i.ScanCode.Numpad8 ||
								g === i.ScanCode.Numpad9 ||
								g === i.ScanCode.Numpad0 ||
								g === i.ScanCode.NumpadDecimal) &&
							p >= 0
						) {
							const s = i.$ns[p];
							s !== i.ScanCode.DependsOnKbLayout && (g = s);
						}
						const o = n.ctrlKey || (this.h && n.altGraphKey),
							f = n.altKey || (this.h && n.altGraphKey),
							b = new w.$us(o, n.shiftKey, f, n.metaKey, g);
						return new m(this, this.l, [b]);
					}
					p(n) {
						return n
							? n instanceof w.$us
								? [n]
								: this.keyCodeChordToScanCodeChord(n)
							: [];
					}
					resolveKeybinding(n) {
						const g = n.chords.map((p) => this.p(p));
						return this.n(g);
					}
					static q(n) {
						switch (n) {
							case t.CharCode.U_IDEOGRAPHIC_FULL_STOP:
								return t.CharCode.Period;
							case t.CharCode.U_LEFT_CORNER_BRACKET:
								return t.CharCode.OpenSquareBracket;
							case t.CharCode.U_RIGHT_CORNER_BRACKET:
								return t.CharCode.CloseSquareBracket;
							case t.CharCode.U_LEFT_BLACK_LENTICULAR_BRACKET:
								return t.CharCode.OpenSquareBracket;
							case t.CharCode.U_RIGHT_BLACK_LENTICULAR_BRACKET:
								return t.CharCode.CloseSquareBracket;
							case t.CharCode.U_FULLWIDTH_SEMICOLON:
								return t.CharCode.Semicolon;
							case t.CharCode.U_FULLWIDTH_COMMA:
								return t.CharCode.Comma;
						}
						return n;
					}
					static r(n) {
						return (n = this.q(n)), n < d.length ? d[n] : null;
					}
					static getCharCode(n) {
						if (n.length === 0) return 0;
						const g = n.charCodeAt(0);
						switch (g) {
							case t.CharCode.U_Combining_Grave_Accent:
								return t.CharCode.U_GRAVE_ACCENT;
							case t.CharCode.U_Combining_Acute_Accent:
								return t.CharCode.U_ACUTE_ACCENT;
							case t.CharCode.U_Combining_Circumflex_Accent:
								return t.CharCode.U_CIRCUMFLEX;
							case t.CharCode.U_Combining_Tilde:
								return t.CharCode.U_SMALL_TILDE;
							case t.CharCode.U_Combining_Macron:
								return t.CharCode.U_MACRON;
							case t.CharCode.U_Combining_Overline:
								return t.CharCode.U_OVERLINE;
							case t.CharCode.U_Combining_Breve:
								return t.CharCode.U_BREVE;
							case t.CharCode.U_Combining_Dot_Above:
								return t.CharCode.U_DOT_ABOVE;
							case t.CharCode.U_Combining_Diaeresis:
								return t.CharCode.U_DIAERESIS;
							case t.CharCode.U_Combining_Ring_Above:
								return t.CharCode.U_RING_ABOVE;
							case t.CharCode.U_Combining_Double_Acute_Accent:
								return t.CharCode.U_DOUBLE_ACUTE_ACCENT;
						}
						return g;
					}
				}
				(e.$A4c = h),
					(function () {
						function c(n, g, p) {
							for (let o = d.length; o < n; o++) d[o] = null;
							d[n] = { keyCode: g, shiftKey: p };
						}
						for (let n = t.CharCode.A; n <= t.CharCode.Z; n++)
							c(n, i.KeyCode.KeyA + (n - t.CharCode.A), !0);
						for (let n = t.CharCode.a; n <= t.CharCode.z; n++)
							c(n, i.KeyCode.KeyA + (n - t.CharCode.a), !1);
						c(t.CharCode.Semicolon, i.KeyCode.Semicolon, !1),
							c(t.CharCode.Colon, i.KeyCode.Semicolon, !0),
							c(t.CharCode.Equals, i.KeyCode.Equal, !1),
							c(t.CharCode.Plus, i.KeyCode.Equal, !0),
							c(t.CharCode.Comma, i.KeyCode.Comma, !1),
							c(t.CharCode.LessThan, i.KeyCode.Comma, !0),
							c(t.CharCode.Dash, i.KeyCode.Minus, !1),
							c(t.CharCode.Underline, i.KeyCode.Minus, !0),
							c(t.CharCode.Period, i.KeyCode.Period, !1),
							c(t.CharCode.GreaterThan, i.KeyCode.Period, !0),
							c(t.CharCode.Slash, i.KeyCode.Slash, !1),
							c(t.CharCode.QuestionMark, i.KeyCode.Slash, !0),
							c(t.CharCode.BackTick, i.KeyCode.Backquote, !1),
							c(t.CharCode.Tilde, i.KeyCode.Backquote, !0),
							c(t.CharCode.OpenSquareBracket, i.KeyCode.BracketLeft, !1),
							c(t.CharCode.OpenCurlyBrace, i.KeyCode.BracketLeft, !0),
							c(t.CharCode.Backslash, i.KeyCode.Backslash, !1),
							c(t.CharCode.Pipe, i.KeyCode.Backslash, !0),
							c(t.CharCode.CloseSquareBracket, i.KeyCode.BracketRight, !1),
							c(t.CharCode.CloseCurlyBrace, i.KeyCode.BracketRight, !0),
							c(t.CharCode.SingleQuote, i.KeyCode.Quote, !1),
							c(t.CharCode.DoubleQuote, i.KeyCode.Quote, !0);
					})();
			},
		),
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
		define(
			de[1826],
			he([1, 0, 3, 1188, 6, 12, 371, 305, 5]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tcd = e.$Scd = void 0),
					(e.$Scd = (0, m.$Mi)("nativeKeyboardLayoutService"));
				let r = class extends t.$1c {
					constructor(h) {
						super(),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeKeyboardLayout = this.c.event),
							(this.f = d.ProxyChannel.toService(
								h.getChannel("keyboardLayout"),
							)),
							(this.g = null),
							(this.h = null),
							(this.j = null),
							this.D(
								this.f.onDidChangeKeyboardLayout(
									async ({ keyboardLayoutInfo: c, keyboardMapping: n }) => {
										await this.initialize(),
											!u(this.h, n) &&
												((this.h = n), (this.j = c), this.c.fire());
									},
								),
							);
					}
					initialize() {
						return this.g || (this.g = this.m()), this.g;
					}
					async m() {
						const h = await this.f.getKeyboardLayoutData(),
							{ keyboardLayoutInfo: c, keyboardMapping: n } = h;
						(this.h = n), (this.j = c);
					}
					getRawKeyboardMapping() {
						return this.h;
					}
					getCurrentKeyboardLayout() {
						return this.j;
					}
				};
				(e.$Tcd = r), (e.$Tcd = r = Ne([j(0, C.$V8c)], r));
				function u(a, h) {
					return E.OS === E.OperatingSystem.Windows
						? (0, i.$Lvc)(a, h)
						: (0, i.$Mvc)(a, h);
				}
			},
		),
		define(
			de[3395],
			he([1, 0, 3, 1188, 6, 12, 2737, 1825, 3392, 3394, 2780, 10, 1826, 20]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gdd = void 0);
				let n = class extends t.$1c {
					constructor(f, b) {
						super(),
							(this.c = f),
							(this.f = b),
							(this.a = this.D(new w.$re())),
							(this.onDidChangeKeyboardLayout = this.a.event),
							(this.b = null),
							this.D(
								this.c.onDidChangeKeyboardLayout(async () => {
									(this.b = null), this.a.fire();
								}),
							),
							this.D(
								b.onDidChangeConfiguration(async (s) => {
									s.affectsConfiguration("keyboard") &&
										((this.b = null), this.a.fire());
								}),
							);
					}
					getRawKeyboardMapping() {
						return this.c.getRawKeyboardMapping();
					}
					getCurrentKeyboardLayout() {
						return this.c.getCurrentKeyboardLayout();
					}
					getAllKeyboardLayouts() {
						return [];
					}
					getKeyboardMapper() {
						const f = (0, u.$w4c)(this.f);
						return f.dispatch === u.DispatchConfig.KeyCode
							? new m.$y4c(f.mapAltGrToCtrlAlt, E.OS)
							: (this.b ||
									(this.b = new C.$Gvc(
										g(
											this.getCurrentKeyboardLayout(),
											this.getRawKeyboardMapping(),
											f.mapAltGrToCtrlAlt,
										),
									)),
								this.b);
					}
					validateCurrentKeyboardMapping(f) {}
				};
				(e.$Gdd = n), (e.$Gdd = n = Ne([j(0, h.$Scd), j(1, a.$gj)], n));
				function g(o, f, b) {
					const s = p(o);
					return E.OS === E.OperatingSystem.Windows
						? new d.$gEc(s, f, b)
						: !f || Object.keys(f).length === 0
							? new m.$y4c(b, E.OS)
							: E.OS === E.OperatingSystem.Macintosh &&
									o.id === "com.apple.keylayout.DVORAK-QWERTYCMD"
								? new m.$y4c(b, E.OS)
								: new r.$A4c(s, f, b, E.OS);
				}
				function p(o) {
					if (!o) return !1;
					if (E.OS === E.OperatingSystem.Linux) {
						const f = o;
						return f.layout.split(/,/g)[f.group] === "us";
					}
					return E.OS === E.OperatingSystem.Macintosh
						? o.id === "com.apple.keylayout.US"
						: E.OS === E.OperatingSystem.Windows
							? o.name === "00000409"
							: !1;
				}
				(0, c.$lK)(i.$Hvc, n, c.InstantiationType.Delayed);
			},
		),
		define(
			de[701],
			he([
				1, 0, 4, 671, 19, 61, 2774, 10, 113, 22, 53, 175, 20, 34, 3, 244, 30,
				102, 24, 94, 28,
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
					(e.$rYb = e.$qYb = void 0),
					(e.$qYb = a.$n2.registerExtensionPoint({
						extensionPoint: "languages",
						jsonSchema: {
							description: (0, t.localize)(12528, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:languageId}",
											aliases: ["${2:label}"],
											extensions: ["${3:extension}"],
											configuration: "./language-configuration.json",
										},
									},
								],
								properties: {
									id: {
										description: (0, t.localize)(12529, null),
										type: "string",
									},
									aliases: {
										description: (0, t.localize)(12530, null),
										type: "array",
										items: { type: "string" },
									},
									extensions: {
										description: (0, t.localize)(12531, null),
										default: [".foo"],
										type: "array",
										items: { type: "string" },
									},
									filenames: {
										description: (0, t.localize)(12532, null),
										type: "array",
										items: { type: "string" },
									},
									filenamePatterns: {
										description: (0, t.localize)(12533, null),
										type: "array",
										items: { type: "string" },
									},
									mimetypes: {
										description: (0, t.localize)(12534, null),
										type: "array",
										items: { type: "string" },
									},
									firstLine: {
										description: (0, t.localize)(12535, null),
										type: "string",
									},
									configuration: {
										description: (0, t.localize)(12536, null),
										type: "string",
										default: "./language-configuration.json",
									},
									icon: {
										type: "object",
										description: (0, t.localize)(12537, null),
										properties: {
											light: {
												description: (0, t.localize)(12538, null),
												type: "string",
											},
											dark: {
												description: (0, t.localize)(12539, null),
												type: "string",
											},
										},
									},
								},
							},
						},
						activationEventsGenerator: (S, I) => {
							for (const T of S)
								T.id && T.configuration && I.push(`onLanguage:${T.id}`);
						},
					}));
				class l extends n.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(I) {
						return !!I.contributes?.languages;
					}
					render(I) {
						const T = I.contributes,
							P = T?.languages || [],
							k = [];
						for (const R of P)
							v(R) &&
								k.push({
									id: R.id,
									name: (R.aliases || [])[0] || R.id,
									extensions: R.extensions || [],
									hasGrammar: !1,
									hasSnippets: !1,
								});
						const L = (0, f.$Wb)(k, (R) => R.id);
						if (
							((T?.grammars || []).forEach((R) => {
								if (!(0, s.$lg)(R.language)) return;
								let O = L[R.language];
								O
									? (O.hasGrammar = !0)
									: ((O = {
											id: R.language,
											name: R.language,
											extensions: [],
											hasGrammar: !0,
											hasSnippets: !1,
										}),
										(L[O.id] = O),
										k.push(O));
							}),
							(T?.snippets || []).forEach((R) => {
								if (!(0, s.$lg)(R.language)) return;
								let O = L[R.language];
								O
									? (O.hasSnippets = !0)
									: ((O = {
											id: R.language,
											name: R.language,
											extensions: [],
											hasGrammar: !1,
											hasSnippets: !0,
										}),
										(L[O.id] = O),
										k.push(O));
							}),
							!k.length)
						)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const N = [
								(0, t.localize)(12540, null),
								(0, t.localize)(12541, null),
								(0, t.localize)(12542, null),
								(0, t.localize)(12543, null),
								(0, t.localize)(12544, null),
							],
							A = k
								.sort((R, O) => R.id.localeCompare(O.id))
								.map((R) => [
									R.id,
									R.name,
									new b.$cl().appendMarkdown(
										`${R.extensions.map((O) => `\`${O}\``).join("&nbsp;")}`,
									),
									R.hasGrammar ? "\u2714\uFE0E" : "\u2014",
									R.hasSnippets ? "\u2714\uFE0E" : "\u2014",
								]);
						return { data: { headers: N, rows: A }, dispose: () => {} };
					}
				}
				p.$Io
					.as(g.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "languages",
						label: (0, t.localize)(12545, null),
						access: { canToggle: !1 },
						renderer: new o.$Ji(l),
					});
				let y = class extends C.$pYb {
					constructor(I, T, P, k) {
						super(P.verbose || P.isExtensionDevelopment || !P.isBuilt),
							(this.t = k),
							(this.r = T),
							(this.s = I),
							e.$qYb.setHandler((L) => {
								const D = [];
								for (let M = 0, N = L.length; M < N; M++) {
									const A = L[M];
									if (!Array.isArray(A.value)) {
										A.collector.error(
											(0, t.localize)(12546, null, e.$qYb.name),
										);
										continue;
									}
									for (let R = 0, O = A.value.length; R < O; R++) {
										const B = A.value[R];
										if (v(B, A.collector)) {
											let U;
											B.configuration &&
												(U = (0, w.$nh)(
													A.description.extensionLocation,
													B.configuration,
												)),
												D.push({
													id: B.id,
													extensions: B.extensions,
													filenames: B.filenames,
													filenamePatterns: B.filenamePatterns,
													firstLine: B.firstLine,
													aliases: B.aliases,
													mimetypes: B.mimetypes,
													configuration: U,
													icon: B.icon && {
														light: (0, w.$nh)(
															A.description.extensionLocation,
															B.icon.light,
														),
														dark: (0, w.$nh)(
															A.description.extensionLocation,
															B.icon.dark,
														),
													},
												});
										}
									}
								}
								this.n.setDynamicLanguages(D);
							}),
							this.u(),
							this.D(
								this.r.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(r.$Ll) && this.u();
								}),
							),
							this.s.whenInstalledExtensionsRegistered().then(() => {
								this.u();
							}),
							this.D(
								this.onDidRequestRichLanguageFeatures((L) => {
									this.s.activateByEvent(`onLanguage:${L}`),
										this.s.activateByEvent("onLanguage");
								}),
							);
					}
					u() {
						const I = this.r.getValue();
						(0, i.$kYb)(),
							I.files?.associations &&
								Object.keys(I.files.associations).forEach((T) => {
									const P = I.files.associations[T];
									if (typeof P != "string") {
										this.t.warn(
											`Ignoring configured 'files.associations' for '${T}' because its type is not a string but '${typeof P}'`,
										);
										return;
									}
									const k = this.getMimeType(P) || `text/x-${P}`;
									(0, i.$iYb)({ id: P, mime: k, filepattern: T });
								}),
							this.g.fire();
					}
				};
				(e.$rYb = y),
					(e.$rYb = y =
						Ne([j(0, u.$q2), j(1, d.$gj), j(2, m.$Ti), j(3, c.$ik)], y));
				function $(S) {
					return typeof S > "u"
						? !0
						: Array.isArray(S)
							? S.every((I) => typeof I == "string")
							: !1;
				}
				function v(S, I) {
					return S
						? typeof S.id != "string"
							? (I?.error((0, t.localize)(12548, null, "id")), !1)
							: $(S.extensions)
								? $(S.filenames)
									? typeof S.firstLine < "u" && typeof S.firstLine != "string"
										? (I?.error((0, t.localize)(12551, null, "firstLine")), !1)
										: typeof S.configuration < "u" &&
												typeof S.configuration != "string"
											? (I?.error(
													(0, t.localize)(12552, null, "configuration"),
												),
												!1)
											: $(S.aliases)
												? $(S.mimetypes)
													? typeof S.icon < "u" &&
														(typeof S.icon != "object" ||
															typeof S.icon.light != "string" ||
															typeof S.icon.dark != "string")
														? (I?.error(
																(0, t.localize)(
																	12555,
																	null,
																	"icon",
																	"light",
																	"dark",
																),
															),
															!1)
														: !0
													: (I?.error(
															(0, t.localize)(12554, null, "mimetypes"),
														),
														!1)
												: (I?.error((0, t.localize)(12553, null, "aliases")),
													!1)
									: (I?.error((0, t.localize)(12550, null, "filenames")), !1)
								: (I?.error((0, t.localize)(12549, null, "extensions")), !1)
						: (I?.error((0, t.localize)(12547, null, e.$qYb.name)), !1);
				}
				(0, h.$lK)(E.$nM, y, h.InstantiationType.Eager);
			},
		),
		define(
			de[3396],
			he([1, 0, 4, 701, 244, 3, 102, 30, 94]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X1c = void 0),
					(t = mt(t));
				var r;
				(function (h) {
					(h.languages = "languages"),
						(h.actions = "actions"),
						(h.kind = "kind"),
						(h.title = "title"),
						(h.description = "description");
				})(r || (r = {}));
				const u = Object.freeze({
					type: "array",
					markdownDescription: t.localize(4829, null),
					items: {
						type: "object",
						required: [r.languages, r.actions],
						properties: {
							[r.languages]: {
								type: "array",
								description: t.localize(4830, null),
								items: { type: "string" },
							},
							[r.actions]: {
								type: "object",
								required: [r.kind, r.title],
								properties: {
									[r.kind]: {
										type: "string",
										markdownDescription: t.localize(4831, null),
									},
									[r.title]: {
										type: "string",
										description: t.localize(4832, null),
									},
									[r.description]: {
										type: "string",
										description: t.localize(4833, null),
									},
								},
							},
						},
					},
				});
				e.$X1c = {
					extensionPoint: "codeActions",
					deps: [i.$qYb],
					jsonSchema: u,
				};
				class a extends E.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(c) {
						return !!c.contributes?.codeActions;
					}
					render(c) {
						const n = c.contributes?.codeActions || [];
						if (!n.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const g = n
								.map((f) =>
									f.actions.map((b) => ({ ...b, languages: f.languages })),
								)
								.flat(),
							p = [
								t.localize(4834, null),
								t.localize(4835, null),
								t.localize(4836, null),
								t.localize(4837, null),
							],
							o = g
								.sort((f, b) => f.title.localeCompare(b.title))
								.map((f) => [
									f.title,
									new m.$cl().appendMarkdown(`\`${f.kind}\``),
									f.description ?? "",
									new m.$cl().appendMarkdown(
										`${f.languages.map((b) => `\`${b}\``).join("&nbsp;")}`,
									),
								]);
						return { data: { headers: p, rows: o }, dispose: () => {} };
					}
				}
				d.$Io
					.as(w.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "codeActions",
						label: t.localize(4838, null),
						access: { canToggle: !1 },
						renderer: new C.$Ji(a),
					});
			},
		),
		