define(de[939], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$qZ = void 0),
				(e.$rZ = w);
			class i {
				constructor(C, d, m, r, u, a, h) {
					(this._resolvedKeybindingItemBrand = void 0),
						(this.resolvedKeybinding = C),
						(this.chords = C ? w(C.getDispatchChords()) : []),
						C &&
							this.chords.length === 0 &&
							(this.chords = w(C.getSingleModifierDispatchChords())),
						(this.bubble = d ? d.charCodeAt(0) === t.CharCode.Caret : !1),
						(this.command = this.bubble ? d.substr(1) : d),
						(this.commandArgs = m),
						(this.when = r),
						(this.isDefault = u),
						(this.extensionId = a),
						(this.isBuiltinExtension = h);
				}
			}
			e.$qZ = i;
			function w(E) {
				const C = [];
				for (let d = 0, m = E.length; d < m; d++) {
					const r = E[d];
					if (!r) return [];
					C.push(r);
				}
				return C;
			}
		}),
		define(
			de[2736],
			he([1, 0, 27, 343, 12, 1187, 939]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$x4c = void 0);
				class d extends E.$eEc {
					constructor(r, u) {
						super(u, r);
					}
					a(r) {
						if (this.c === w.OperatingSystem.Macintosh)
							switch (r) {
								case t.KeyCode.LeftArrow:
									return "\u2190";
								case t.KeyCode.UpArrow:
									return "\u2191";
								case t.KeyCode.RightArrow:
									return "\u2192";
								case t.KeyCode.DownArrow:
									return "\u2193";
							}
						return t.KeyCodeUtils.toString(r);
					}
					f(r) {
						return r.isDuplicateModifierCase() ? "" : this.a(r.keyCode);
					}
					g(r) {
						return r.isDuplicateModifierCase()
							? ""
							: t.KeyCodeUtils.toString(r.keyCode);
					}
					h(r) {
						return t.KeyCodeUtils.toElectronAccelerator(r.keyCode);
					}
					l(r) {
						if (r.isDuplicateModifierCase()) return "";
						const u = t.KeyCodeUtils.toUserSettingsUS(r.keyCode);
						return u && u.toLowerCase();
					}
					m() {
						return !0;
					}
					n(r) {
						return d.getDispatchStr(r);
					}
					static getDispatchStr(r) {
						if (r.isModifierKey()) return null;
						let u = "";
						return (
							r.ctrlKey && (u += "ctrl+"),
							r.shiftKey && (u += "shift+"),
							r.altKey && (u += "alt+"),
							r.metaKey && (u += "meta+"),
							(u += t.KeyCodeUtils.toString(r.keyCode)),
							u
						);
					}
					o(r) {
						return r.keyCode === t.KeyCode.Ctrl &&
							!r.shiftKey &&
							!r.altKey &&
							!r.metaKey
							? "ctrl"
							: r.keyCode === t.KeyCode.Shift &&
									!r.ctrlKey &&
									!r.altKey &&
									!r.metaKey
								? "shift"
								: r.keyCode === t.KeyCode.Alt &&
										!r.ctrlKey &&
										!r.shiftKey &&
										!r.metaKey
									? "alt"
									: r.keyCode === t.KeyCode.Meta &&
											!r.ctrlKey &&
											!r.shiftKey &&
											!r.altKey
										? "meta"
										: null;
					}
					static t(r) {
						const u = t.$ms[r];
						if (u !== t.KeyCode.DependsOnKbLayout) return u;
						switch (r) {
							case t.ScanCode.KeyA:
								return t.KeyCode.KeyA;
							case t.ScanCode.KeyB:
								return t.KeyCode.KeyB;
							case t.ScanCode.KeyC:
								return t.KeyCode.KeyC;
							case t.ScanCode.KeyD:
								return t.KeyCode.KeyD;
							case t.ScanCode.KeyE:
								return t.KeyCode.KeyE;
							case t.ScanCode.KeyF:
								return t.KeyCode.KeyF;
							case t.ScanCode.KeyG:
								return t.KeyCode.KeyG;
							case t.ScanCode.KeyH:
								return t.KeyCode.KeyH;
							case t.ScanCode.KeyI:
								return t.KeyCode.KeyI;
							case t.ScanCode.KeyJ:
								return t.KeyCode.KeyJ;
							case t.ScanCode.KeyK:
								return t.KeyCode.KeyK;
							case t.ScanCode.KeyL:
								return t.KeyCode.KeyL;
							case t.ScanCode.KeyM:
								return t.KeyCode.KeyM;
							case t.ScanCode.KeyN:
								return t.KeyCode.KeyN;
							case t.ScanCode.KeyO:
								return t.KeyCode.KeyO;
							case t.ScanCode.KeyP:
								return t.KeyCode.KeyP;
							case t.ScanCode.KeyQ:
								return t.KeyCode.KeyQ;
							case t.ScanCode.KeyR:
								return t.KeyCode.KeyR;
							case t.ScanCode.KeyS:
								return t.KeyCode.KeyS;
							case t.ScanCode.KeyT:
								return t.KeyCode.KeyT;
							case t.ScanCode.KeyU:
								return t.KeyCode.KeyU;
							case t.ScanCode.KeyV:
								return t.KeyCode.KeyV;
							case t.ScanCode.KeyW:
								return t.KeyCode.KeyW;
							case t.ScanCode.KeyX:
								return t.KeyCode.KeyX;
							case t.ScanCode.KeyY:
								return t.KeyCode.KeyY;
							case t.ScanCode.KeyZ:
								return t.KeyCode.KeyZ;
							case t.ScanCode.Digit1:
								return t.KeyCode.Digit1;
							case t.ScanCode.Digit2:
								return t.KeyCode.Digit2;
							case t.ScanCode.Digit3:
								return t.KeyCode.Digit3;
							case t.ScanCode.Digit4:
								return t.KeyCode.Digit4;
							case t.ScanCode.Digit5:
								return t.KeyCode.Digit5;
							case t.ScanCode.Digit6:
								return t.KeyCode.Digit6;
							case t.ScanCode.Digit7:
								return t.KeyCode.Digit7;
							case t.ScanCode.Digit8:
								return t.KeyCode.Digit8;
							case t.ScanCode.Digit9:
								return t.KeyCode.Digit9;
							case t.ScanCode.Digit0:
								return t.KeyCode.Digit0;
							case t.ScanCode.Minus:
								return t.KeyCode.Minus;
							case t.ScanCode.Equal:
								return t.KeyCode.Equal;
							case t.ScanCode.BracketLeft:
								return t.KeyCode.BracketLeft;
							case t.ScanCode.BracketRight:
								return t.KeyCode.BracketRight;
							case t.ScanCode.Backslash:
								return t.KeyCode.Backslash;
							case t.ScanCode.IntlHash:
								return t.KeyCode.Unknown;
							case t.ScanCode.Semicolon:
								return t.KeyCode.Semicolon;
							case t.ScanCode.Quote:
								return t.KeyCode.Quote;
							case t.ScanCode.Backquote:
								return t.KeyCode.Backquote;
							case t.ScanCode.Comma:
								return t.KeyCode.Comma;
							case t.ScanCode.Period:
								return t.KeyCode.Period;
							case t.ScanCode.Slash:
								return t.KeyCode.Slash;
							case t.ScanCode.IntlBackslash:
								return t.KeyCode.IntlBackslash;
						}
						return t.KeyCode.Unknown;
					}
					static u(r) {
						if (!r) return null;
						if (r instanceof i.$ts) return r;
						const u = this.t(r.scanCode);
						return u === t.KeyCode.Unknown
							? null
							: new i.$ts(r.ctrlKey, r.shiftKey, r.altKey, r.metaKey, u);
					}
					static resolveKeybinding(r, u) {
						const a = (0, C.$rZ)(r.chords.map((h) => this.u(h)));
						return a.length > 0 ? [new d(a, u)] : [];
					}
				}
				e.$x4c = d;
			},
		),
		