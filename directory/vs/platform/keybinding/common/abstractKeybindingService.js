import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/ime.js';
import '../../../base/common/keyCodes.js';
import '../../../base/common/lifecycle.js';
import '../../../nls.js';
import './keybindingResolver.js';
define(
			de[2735],
			he([1, 0, 24, 15, 29, 6, 1502, 27, 3, 4, 390]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*async*/,
 w /*errors*/,
 E /*event*/,
 C /*ime*/,
 d /*keyCodes*/,
 m /*lifecycle*/,
 r /*nls*/,
 u /*keybindingResolver*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fvc = void 0),
					(t = mt(t)),
					(r = mt(r));
				const a = /^(cursor|delete|undo|redo|tab|editor\.action\.clipboard)/;
				class h extends m.$1c {
					get onDidUpdateKeybindings() {
						return this.a ? this.a.event : E.Event.None;
					}
					get inChordMode() {
						return this.b.length > 0;
					}
					constructor(g, p, o, f, b) {
						super(),
							(this.q = g),
							(this.s = p),
							(this.t = o),
							(this.u = f),
							(this.w = b),
							(this.a = this.D(new E.$re())),
							(this.b = []),
							(this.c = new i.$Xh()),
							(this.f = null),
							(this.g = c.EMPTY),
							(this.h = null),
							(this.j = new i.$Wh()),
							(this.m = null),
							(this.n = !1);
					}
					dispose() {
						super.dispose();
					}
					getDefaultKeybindingsContent() {
						return "";
					}
					toggleLogging() {
						return (this.n = !this.n), this.n;
					}
					F(g) {
						this.n && this.w.info(`[KeybindingService]: ${g}`);
					}
					getDefaultKeybindings() {
						return this.y().getDefaultKeybindings();
					}
					getKeybindings() {
						return this.y().getKeybindings();
					}
					customKeybindingsCount() {
						return 0;
					}
					lookupKeybindings(g) {
						return t.$Lb(
							this.y()
								.lookupKeybindings(g)
								.map((p) => p.resolvedKeybinding),
						);
					}
					lookupDefaultKeybindings(g) {
						return t.$Lb(
							this.y()
								.lookupDefaultKeybindings(g)
								.map((p) => p.resolvedKeybinding),
						);
					}
					lookupKeybinding(g, p) {
						const o = this.y().lookupPrimaryKeybinding(g, p || this.q);
						if (o) return o.resolvedKeybinding;
					}
					dispatchEvent(g, p) {
						return this.J(g, p);
					}
					softDispatch(g, p) {
						this.F("/ Soft dispatching keyboard event");
						const o = this.resolveKeyboardEvent(g);
						if (o.hasMultipleChords())
							return (
								console.warn(
									"keyboard event should not be mapped to multiple chords",
								),
								u.$sZ
							);
						const [f] = o.getDispatchChords();
						if (f === null)
							return this.F("\\ Keyboard event cannot be dispatched"), u.$sZ;
						const b = this.q.getContext(p),
							s = this.b.map(({ keypress: l }) => l);
						return this.y().resolve(b, s, f);
					}
					G() {
						const g = Date.now();
						this.c.cancelAndSet(() => {
							if (!this.z()) {
								this.I();
								return;
							}
							Date.now() - g > 5e3 && this.I();
						}, 500);
					}
					H(g, p) {
						switch ((this.b.push({ keypress: g, label: p }), this.b.length)) {
							case 0:
								throw (0, w.$_)("impossible");
							case 1:
								this.f = this.u.status(r.localize(1933, null, p));
								break;
							default: {
								const o = this.b.map(({ label: f }) => f).join(", ");
								this.f = this.u.status(r.localize(1934, null, o));
							}
						}
						this.G(), C.IME.enabled && C.IME.disable();
					}
					I() {
						this.f && (this.f.dispose(), (this.f = null)),
							this.c.cancel(),
							(this.b = []),
							C.IME.enable();
					}
					dispatchByUserSettingsLabel(g, p) {
						this.F(
							`/ Dispatching keybinding triggered via menu entry accelerator - ${g}`,
						);
						const o = this.resolveUserBinding(g);
						o.length === 0
							? this.F(`\\ Could not resolve - ${g}`)
							: this.M(o[0], p, !1);
					}
					J(g, p) {
						return this.M(this.resolveKeyboardEvent(g), p, !1);
					}
					L(g, p) {
						const o = this.resolveKeyboardEvent(g),
							[f] = o.getSingleModifierDispatchChords();
						if (f)
							return this.g.has(f)
								? (this.F(
										`+ Ignoring single modifier ${f} due to it being pressed together with other keys.`,
									),
									(this.g = c.EMPTY),
									this.j.cancel(),
									(this.h = null),
									!1)
								: ((this.g = c.EMPTY),
									this.h === null
										? (this.F(
												`+ Storing single modifier for possible chord ${f}.`,
											),
											(this.h = f),
											this.j.cancelAndSet(() => {
												this.F(
													"+ Clearing single modifier due to 300ms elapsed.",
												),
													(this.h = null);
											}, 300),
											!1)
										: f === this.h
											? (this.F(
													`/ Dispatching single modifier chord ${f} ${f}`,
												),
												this.j.cancel(),
												(this.h = null),
												this.M(o, p, !0))
											: (this.F(
													`+ Clearing single modifier due to modifier mismatch: ${this.h} ${f}`,
												),
												this.j.cancel(),
												(this.h = null),
												!1));
						const [b] = o.getChords();
						return (
							(this.g = new c(b)),
							this.h !== null &&
								this.F("+ Clearing single modifier due to other key up."),
							this.j.cancel(),
							(this.h = null),
							!1
						);
					}
					M(g, p, o = !1) {
						let f = !1;
						if (g.hasMultipleChords())
							return (
								console.warn(
									"Unexpected keyboard event mapped to multiple chords",
								),
								!1
							);
						let b = null,
							s = null;
						if (o) {
							const [v] = g.getSingleModifierDispatchChords();
							(b = v), (s = v ? [v] : []);
						} else
							([b] = g.getDispatchChords()),
								(s = this.b.map(({ keypress: v }) => v));
						if (b === null)
							return (
								this.F(
									"\\ Keyboard event cannot be dispatched in keydown phase.",
								),
								f
							);
						const l = this.q.getContext(p),
							y = g.getLabel(),
							$ = this.y().resolve(l, s, b);
						switch ($.kind) {
							case u.ResultKind.NoMatchingKb: {
								if (
									(this.w.trace(
										"KeybindingService#dispatch",
										y,
										"[ No matching keybinding ]",
									),
									this.inChordMode)
								) {
									const v = this.b.map(({ label: S }) => S).join(", ");
									this.F(
										`+ Leaving multi-chord mode: Nothing bound to "${v}, ${y}".`,
									),
										this.u.status(r.localize(1935, null, v, y), {
											hideAfter: 10 * 1e3,
										}),
										this.I(),
										(f = !0);
								}
								return f;
							}
							case u.ResultKind.MoreChordsNeeded:
								return (
									this.w.trace(
										"KeybindingService#dispatch",
										y,
										"[ Several keybindings match - more chords needed ]",
									),
									(f = !0),
									this.H(b, y),
									this.F(
										this.b.length === 1
											? "+ Entering multi-chord mode..."
											: "+ Continuing multi-chord mode...",
									),
									f
								);
							case u.ResultKind.KbFound: {
								if (
									(this.w.trace(
										"KeybindingService#dispatch",
										y,
										`[ Will dispatch command ${$.commandId} ]`,
									),
									$.commandId === null || $.commandId === "")
								) {
									if (this.inChordMode) {
										const v = this.b.map(({ label: S }) => S).join(", ");
										this.F(
											`+ Leaving chord mode: Nothing bound to "${v}, ${y}".`,
										),
											this.u.status(r.localize(1936, null, v, y), {
												hideAfter: 10 * 1e3,
											}),
											this.I(),
											(f = !0);
									}
								} else {
									this.inChordMode && this.I(),
										$.isBubble || (f = !0),
										this.F(`+ Invoking command ${$.commandId}.`),
										(this.m = $.commandId);
									try {
										typeof $.commandArgs > "u"
											? this.s
													.executeCommand($.commandId)
													.then(void 0, (v) => this.u.warn(v))
											: this.s
													.executeCommand($.commandId, $.commandArgs)
													.then(void 0, (v) => this.u.warn(v));
									} finally {
										this.m = null;
									}
									a.test($.commandId) ||
										this.t.publicLog2("workbenchActionExecuted", {
											id: $.commandId,
											from: "keybinding",
											detail: g.getUserSettingsLabel() ?? void 0,
										});
								}
								return f;
							}
						}
					}
					mightProducePrintableCharacter(g) {
						return g.ctrlKey || g.metaKey
							? !1
							: (g.keyCode >= d.KeyCode.KeyA && g.keyCode <= d.KeyCode.KeyZ) ||
									(g.keyCode >= d.KeyCode.Digit0 &&
										g.keyCode <= d.KeyCode.Digit9);
					}
				}
				e.$Fvc = h;
				class c {
					static {
						this.EMPTY = new c(null);
					}
					constructor(g) {
						(this.a = g ? g.ctrlKey : !1),
							(this.b = g ? g.shiftKey : !1),
							(this.c = g ? g.altKey : !1),
							(this.d = g ? g.metaKey : !1);
					}
					has(g) {
						switch (g) {
							case "ctrl":
								return this.a;
							case "shift":
								return this.b;
							case "alt":
								return this.c;
							case "meta":
								return this.d;
						}
					}
				}
			},
		),
		