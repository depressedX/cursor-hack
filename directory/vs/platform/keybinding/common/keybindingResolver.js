define(de[390], he([1, 0, 8]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tZ = e.$sZ = e.ResultKind = void 0);
			var i;
			(function (r) {
				(r[(r.NoMatchingKb = 0)] = "NoMatchingKb"),
					(r[(r.MoreChordsNeeded = 1)] = "MoreChordsNeeded"),
					(r[(r.KbFound = 2)] = "KbFound");
			})(i || (e.ResultKind = i = {})),
				(e.$sZ = { kind: i.NoMatchingKb });
			const w = { kind: i.MoreChordsNeeded };
			function E(r, u, a) {
				return { kind: i.KbFound, commandId: r, commandArgs: u, isBubble: a };
			}
			class C {
				constructor(u, a, h) {
					(this.c = h), (this.d = u), (this.f = new Map());
					for (const c of u) {
						const n = c.command;
						n && n.charAt(0) !== "-" && this.f.set(n, !0);
					}
					(this.g = new Map()),
						(this.h = new Map()),
						(this.j = new Map()),
						(this.e = C.handleRemovals([].concat(u).concat(a)));
					for (let c = 0, n = this.e.length; c < n; c++) {
						const g = this.e[c];
						if (g.chords.length === 0) continue;
						const p = g.when?.substituteConstants();
						(p && p.type === t.ContextKeyExprType.False) ||
							this.m(g.chords[0], g);
					}
				}
				static l(u, a, h) {
					if (a) {
						for (let c = 0; c < a.length; c++)
							if (a[c] !== u.chords[c]) return !1;
					}
					return !(
						h &&
						h.type !== t.ContextKeyExprType.True &&
						(!u.when || !(0, t.$Mj)(h, u.when))
					);
				}
				static handleRemovals(u) {
					const a = new Map();
					for (let c = 0, n = u.length; c < n; c++) {
						const g = u[c];
						if (g.command && g.command.charAt(0) === "-") {
							const p = g.command.substring(1);
							a.has(p) ? a.get(p).push(g) : a.set(p, [g]);
						}
					}
					if (a.size === 0) return u;
					const h = [];
					for (let c = 0, n = u.length; c < n; c++) {
						const g = u[c];
						if (!g.command || g.command.length === 0) {
							h.push(g);
							continue;
						}
						if (g.command.charAt(0) === "-") continue;
						const p = a.get(g.command);
						if (!p || !g.isDefault) {
							h.push(g);
							continue;
						}
						let o = !1;
						for (const f of p) {
							const b = f.when;
							if (this.l(g, f.chords, b)) {
								o = !0;
								break;
							}
						}
						if (!o) {
							h.push(g);
							continue;
						}
					}
					return h;
				}
				m(u, a) {
					this.n(a);
					const h = this.g.get(u);
					if (typeof h > "u") {
						this.g.set(u, [a]), this.o(a);
						return;
					}
					for (let c = h.length - 1; c >= 0; c--) {
						const n = h[c];
						if (n.command === a.command) continue;
						let g = !0;
						for (let p = 1; p < n.chords.length && p < a.chords.length; p++)
							if (n.chords[p] !== a.chords[p]) {
								g = !1;
								break;
							}
						g && C.whenIsEntirelyIncluded(n.when, a.when) && this.p(n);
					}
					h.push(a), this.o(a);
				}
				n(u) {
					if (!u.command) return;
					let a = this.j.get(u.command);
					typeof a > "u" ? ((a = [u]), this.j.set(u.command, a)) : a.push(u);
				}
				o(u) {
					if (!u.command) return;
					let a = this.h.get(u.command);
					typeof a > "u" ? ((a = [u]), this.h.set(u.command, a)) : a.push(u);
				}
				p(u) {
					if (!u.command) return;
					const a = this.h.get(u.command);
					if (!(typeof a > "u")) {
						for (let h = 0, c = a.length; h < c; h++)
							if (a[h] === u) {
								a.splice(h, 1);
								return;
							}
					}
				}
				static whenIsEntirelyIncluded(u, a) {
					return !a || a.type === t.ContextKeyExprType.True
						? !0
						: !u || u.type === t.ContextKeyExprType.True
							? !1
							: (0, t.$7j)(u, a);
				}
				getDefaultBoundCommands() {
					return this.f;
				}
				getDefaultKeybindings() {
					return this.d;
				}
				getKeybindings() {
					return this.e;
				}
				lookupKeybindings(u) {
					const a = this.h.get(u);
					if (typeof a > "u" || a.length === 0) return [];
					const h = [];
					let c = 0;
					for (let n = a.length - 1; n >= 0; n--) h[c++] = a[n];
					return h;
				}
				lookupDefaultKeybindings(u) {
					const a = this.j.get(u);
					return typeof a > "u" || a.length === 0 ? [] : a;
				}
				lookupPrimaryKeybinding(u, a) {
					const h = this.h.get(u);
					if (typeof h > "u" || h.length === 0) return null;
					if (h.length === 1) return h[0];
					for (let c = h.length - 1; c >= 0; c--) {
						const n = h[c];
						if (a.contextMatchesRules(n.when)) return n;
					}
					return h[h.length - 1];
				}
				resolve(u, a, h) {
					const c = [...a, h];
					this.c(`| Resolving ${c}`);
					const n = this.g.get(c[0]);
					if (n === void 0) return this.c("\\ No keybinding entries."), e.$sZ;
					let g = null;
					if (c.length < 2) g = n;
					else {
						g = [];
						for (let o = 0, f = n.length; o < f; o++) {
							const b = n[o];
							if (c.length > b.chords.length) continue;
							let s = !0;
							for (let l = 1; l < c.length; l++)
								if (b.chords[l] !== c[l]) {
									s = !1;
									break;
								}
							s && g.push(b);
						}
					}
					const p = this.q(u, g);
					return p
						? c.length < p.chords.length
							? (this.c(
									`\\ From ${g.length} keybinding entries, awaiting ${p.chords.length - c.length} more chord(s), when: ${d(p.when)}, source: ${m(p)}.`,
								),
								w)
							: (this.c(
									`\\ From ${g.length} keybinding entries, matched ${p.command}, when: ${d(p.when)}, source: ${m(p)}.`,
								),
								E(p.command, p.commandArgs, p.bubble))
						: (this.c(
								`\\ From ${g.length} keybinding entries, no when clauses matched the context.`,
							),
							e.$sZ);
				}
				q(u, a) {
					for (let h = a.length - 1; h >= 0; h--) {
						const c = a[h];
						if (C.r(u, c.when)) return c;
					}
					return null;
				}
				static r(u, a) {
					return a ? a.evaluate(u) : !0;
				}
			}
			e.$tZ = C;
			function d(r) {
				return r ? `${r.serialize()}` : "no when condition";
			}
			function m(r) {
				return r.extensionId
					? r.isBuiltinExtension
						? `built-in extension ${r.extensionId}`
						: `user extension ${r.extensionId}`
					: r.isDefault
						? "built-in"
						: "user";
			}
		}),
		define(
			de[2735],
			he([1, 0, 24, 15, 29, 6, 1502, 27, 3, 4, 390]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
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
		