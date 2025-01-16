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
		