import '../../../require.js';
import '../../../exports.js';
import './errors.js';
import './keyCodes.js';
import './platform.js';
define(de[343], he([1, 0, 29, 27, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*keyCodes*/,
 w /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$xs = e.$ws = e.$vs = e.$us = e.$ts = void 0),
				(e.$rs = C),
				(e.$ss = d);
			var E;
			(function (c) {
				(c[(c.CtrlCmd = 2048)] = "CtrlCmd"),
					(c[(c.Shift = 1024)] = "Shift"),
					(c[(c.Alt = 512)] = "Alt"),
					(c[(c.WinCtrl = 256)] = "WinCtrl"),
					(c[(c.KeyCode = 255)] = "KeyCode");
			})(E || (E = {}));
			function C(c, n) {
				if (typeof c == "number") {
					if (c === 0) return null;
					const g = (c & 65535) >>> 0,
						p = (c & 4294901760) >>> 16;
					return p !== 0 ? new u([d(g, n), d(p, n)]) : new u([d(g, n)]);
				} else {
					const g = [];
					for (let p = 0; p < c.length; p++) g.push(d(c[p], n));
					return new u(g);
				}
			}
			function d(c, n) {
				const g = !!(c & E.CtrlCmd),
					p = !!(c & E.WinCtrl),
					o = n === w.OperatingSystem.Macintosh ? p : g,
					f = !!(c & E.Shift),
					b = !!(c & E.Alt),
					s = n === w.OperatingSystem.Macintosh ? g : p,
					l = c & E.KeyCode;
				return new m(o, f, b, s, l);
			}
			class m {
				constructor(n, g, p, o, f) {
					(this.ctrlKey = n),
						(this.shiftKey = g),
						(this.altKey = p),
						(this.metaKey = o),
						(this.keyCode = f);
				}
				equals(n) {
					return (
						n instanceof m &&
						this.ctrlKey === n.ctrlKey &&
						this.shiftKey === n.shiftKey &&
						this.altKey === n.altKey &&
						this.metaKey === n.metaKey &&
						this.keyCode === n.keyCode
					);
				}
				getHashCode() {
					const n = this.ctrlKey ? "1" : "0",
						g = this.shiftKey ? "1" : "0",
						p = this.altKey ? "1" : "0",
						o = this.metaKey ? "1" : "0";
					return `K${n}${g}${p}${o}${this.keyCode}`;
				}
				isModifierKey() {
					return (
						this.keyCode === i.KeyCode.Unknown ||
						this.keyCode === i.KeyCode.Ctrl ||
						this.keyCode === i.KeyCode.Meta ||
						this.keyCode === i.KeyCode.Alt ||
						this.keyCode === i.KeyCode.Shift
					);
				}
				toKeybinding() {
					return new u([this]);
				}
				isDuplicateModifierCase() {
					return (
						(this.ctrlKey && this.keyCode === i.KeyCode.Ctrl) ||
						(this.shiftKey && this.keyCode === i.KeyCode.Shift) ||
						(this.altKey && this.keyCode === i.KeyCode.Alt) ||
						(this.metaKey && this.keyCode === i.KeyCode.Meta)
					);
				}
			}
			e.$ts = m;
			class r {
				constructor(n, g, p, o, f) {
					(this.ctrlKey = n),
						(this.shiftKey = g),
						(this.altKey = p),
						(this.metaKey = o),
						(this.scanCode = f);
				}
				equals(n) {
					return (
						n instanceof r &&
						this.ctrlKey === n.ctrlKey &&
						this.shiftKey === n.shiftKey &&
						this.altKey === n.altKey &&
						this.metaKey === n.metaKey &&
						this.scanCode === n.scanCode
					);
				}
				getHashCode() {
					const n = this.ctrlKey ? "1" : "0",
						g = this.shiftKey ? "1" : "0",
						p = this.altKey ? "1" : "0",
						o = this.metaKey ? "1" : "0";
					return `S${n}${g}${p}${o}${this.scanCode}`;
				}
				isDuplicateModifierCase() {
					return (
						(this.ctrlKey &&
							(this.scanCode === i.ScanCode.ControlLeft ||
								this.scanCode === i.ScanCode.ControlRight)) ||
						(this.shiftKey &&
							(this.scanCode === i.ScanCode.ShiftLeft ||
								this.scanCode === i.ScanCode.ShiftRight)) ||
						(this.altKey &&
							(this.scanCode === i.ScanCode.AltLeft ||
								this.scanCode === i.ScanCode.AltRight)) ||
						(this.metaKey &&
							(this.scanCode === i.ScanCode.MetaLeft ||
								this.scanCode === i.ScanCode.MetaRight))
					);
				}
			}
			e.$us = r;
			class u {
				constructor(n) {
					if (n.length === 0) throw (0, t.$$)("chords");
					this.chords = n;
				}
				getHashCode() {
					let n = "";
					for (let g = 0, p = this.chords.length; g < p; g++)
						g !== 0 && (n += ";"), (n += this.chords[g].getHashCode());
					return n;
				}
				equals(n) {
					if (n === null || this.chords.length !== n.chords.length) return !1;
					for (let g = 0; g < this.chords.length; g++)
						if (!this.chords[g].equals(n.chords[g])) return !1;
					return !0;
				}
			}
			e.$vs = u;
			class a {
				constructor(n, g, p, o, f, b) {
					(this.ctrlKey = n),
						(this.shiftKey = g),
						(this.altKey = p),
						(this.metaKey = o),
						(this.keyLabel = f),
						(this.keyAriaLabel = b);
				}
			}
			e.$ws = a;
			class h {}
			e.$xs = h;
		})
