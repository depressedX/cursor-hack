import '../../../require.js';
import '../../../exports.js';
import './browser.js';
import '../common/keyCodes.js';
import '../common/keybindings.js';
import '../common/platform.js';
define(de[114], he([1, 0, 139, 27, 343, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*browser*/,
 i /*keyCodes*/,
 w /*keybindings*/,
 E /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$7fb = void 0),
				(e.$5fb = a),
				(e.$6fb = h),
				(t = mt(t)),
				(E = mt(E));
			function C(n) {
				if (n.charCode) {
					const p = String.fromCharCode(n.charCode).toUpperCase();
					return i.KeyCodeUtils.fromString(p);
				}
				const g = n.keyCode;
				if (g === 3) return i.KeyCode.PauseBreak;
				if (t.$Ofb)
					switch (g) {
						case 59:
							return i.KeyCode.Semicolon;
						case 60:
							if (E.$n) return i.KeyCode.IntlBackslash;
							break;
						case 61:
							return i.KeyCode.Equal;
						case 107:
							return i.KeyCode.NumpadAdd;
						case 109:
							return i.KeyCode.NumpadSubtract;
						case 173:
							return i.KeyCode.Minus;
						case 224:
							if (E.$m) return i.KeyCode.Meta;
							break;
					}
				else if (t.$Pfb) {
					if (E.$m && g === 93) return i.KeyCode.Meta;
					if (!E.$m && g === 92) return i.KeyCode.Meta;
				}
				return i.$js[g] || i.KeyCode.Unknown;
			}
			const d = E.$m ? i.KeyMod.WinCtrl : i.KeyMod.CtrlCmd,
				m = i.KeyMod.Alt,
				r = i.KeyMod.Shift,
				u = E.$m ? i.KeyMod.CtrlCmd : i.KeyMod.WinCtrl;
			function a(n) {
				const g = [];
				return (
					n.ctrlKey && g.push("ctrl"),
					n.shiftKey && g.push("shift"),
					n.altKey && g.push("alt"),
					n.metaKey && g.push("meta"),
					`modifiers: [${g.join(",")}], code: ${n.code}, keyCode: ${n.keyCode}, key: ${n.key}`
				);
			}
			function h(n) {
				const g = [];
				return (
					n.ctrlKey && g.push("ctrl"),
					n.shiftKey && g.push("shift"),
					n.altKey && g.push("alt"),
					n.metaKey && g.push("meta"),
					`modifiers: [${g.join(",")}], code: ${n.code}, keyCode: ${n.keyCode} ('${i.KeyCodeUtils.toString(n.keyCode)}')`
				);
			}
			class c {
				constructor(g) {
					this._standardKeyboardEventBrand = !0;
					const p = g;
					(this.browserEvent = p),
						(this.target = p.target),
						(this.ctrlKey = p.ctrlKey),
						(this.shiftKey = p.shiftKey),
						(this.altKey = p.altKey),
						(this.metaKey = p.metaKey),
						(this.altGraphKey = p.getModifierState?.("AltGraph")),
						(this.keyCode = C(p)),
						(this.code = p.code),
						(this.ctrlKey = this.ctrlKey || this.keyCode === i.KeyCode.Ctrl),
						(this.altKey = this.altKey || this.keyCode === i.KeyCode.Alt),
						(this.shiftKey = this.shiftKey || this.keyCode === i.KeyCode.Shift),
						(this.metaKey = this.metaKey || this.keyCode === i.KeyCode.Meta),
						(this.a = this.c()),
						(this.b = this.d());
				}
				preventDefault() {
					this.browserEvent &&
						this.browserEvent.preventDefault &&
						this.browserEvent.preventDefault();
				}
				stopPropagation() {
					this.browserEvent &&
						this.browserEvent.stopPropagation &&
						this.browserEvent.stopPropagation();
				}
				toKeyCodeChord() {
					return this.b;
				}
				equals(g) {
					return this.a === g;
				}
				c() {
					let g = i.KeyCode.Unknown;
					this.keyCode !== i.KeyCode.Ctrl &&
						this.keyCode !== i.KeyCode.Shift &&
						this.keyCode !== i.KeyCode.Alt &&
						this.keyCode !== i.KeyCode.Meta &&
						(g = this.keyCode);
					let p = 0;
					return (
						this.ctrlKey && (p |= d),
						this.altKey && (p |= m),
						this.shiftKey && (p |= r),
						this.metaKey && (p |= u),
						(p |= g),
						p
					);
				}
				d() {
					let g = i.KeyCode.Unknown;
					return (
						this.keyCode !== i.KeyCode.Ctrl &&
							this.keyCode !== i.KeyCode.Shift &&
							this.keyCode !== i.KeyCode.Alt &&
							this.keyCode !== i.KeyCode.Meta &&
							(g = this.keyCode),
						new w.$ts(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, g)
					);
				}
			}
			e.$7fb = c;
		}),
		