import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/keybindings.js';
import '../../../../base/common/platform.js';
import '../../../../platform/keybinding/common/baseResolvedKeybinding.js';
define(
			de[3394],
			he([1, 0, 120, 27, 343, 12, 1187]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*keyCodes*/,
 w /*keybindings*/,
 E /*platform*/,
 C /*baseResolvedKeybinding*/) {
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
		