import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../log/common/log.js';
import '../../../../../base/common/decorators.js';
define(de[2822], he([1, 0, 6, 3, 34, 138]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*log*/,
 E /*decorators*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$QJ = void 0);
			var C;
			(function (m) {
				(m[(m.Unknown = 0)] = "Unknown"),
					(m[(m.Input = 1)] = "Input"),
					(m[(m.Execute = 2)] = "Execute");
			})(C || (C = {}));
			let d = class extends i.$1c {
				get value() {
					return this.j;
				}
				get prefix() {
					return this.j.substring(0, this.m);
				}
				get suffix() {
					return this.j.substring(this.m, this.n === -1 ? void 0 : this.n);
				}
				get cursorIndex() {
					return this.m;
				}
				get ghostTextIndex() {
					return this.n;
				}
				constructor(r, u, a, h) {
					super(),
						(this.u = r),
						(this.w = h),
						(this.a = C.Unknown),
						(this.c = 0),
						(this.h = ""),
						(this.j = ""),
						(this.m = 0),
						(this.n = -1),
						(this.q = this.D(new t.$re())),
						(this.onDidStartInput = this.q.event),
						(this.r = this.D(new t.$re())),
						(this.onDidChangeInput = this.r.event),
						(this.s = this.D(new t.$re())),
						(this.onDidFinishInput = this.s.event),
						(this.t = this.D(new t.$re())),
						(this.onDidInterrupt = this.t.event),
						this.D(
							t.Event.any(
								this.u.onCursorMove,
								this.u.onData,
								this.u.onWriteParsed,
							)(() => this.G()),
						),
						this.D(this.u.onData((c) => this.I(c))),
						this.D(u((c) => this.C(c))),
						this.D(a(() => this.F())),
						this.D(
							this.onDidStartInput(() =>
								this.z("PromptInputModel#onDidStartInput"),
							),
						),
						this.D(
							this.onDidChangeInput(() =>
								this.z("PromptInputModel#onDidChangeInput"),
							),
						),
						this.D(
							this.onDidFinishInput(() =>
								this.z("PromptInputModel#onDidFinishInput"),
							),
						),
						this.D(
							this.onDidInterrupt(() =>
								this.z("PromptInputModel#onDidInterrupt"),
							),
						);
				}
				z(r) {
					this.w.getLevel() === w.LogLevel.Trace &&
						this.w.trace(r, this.getCombinedString());
				}
				setContinuationPrompt(r) {
					(this.g = r), this.G();
				}
				setLastPromptLine(r) {
					(this.f = r), this.G();
				}
				setConfidentCommandLine(r) {
					this.j !== r &&
						((this.j = r), (this.m = -1), (this.n = -1), this.r.fire(this.Q()));
				}
				getCombinedString() {
					const r = this.j.replaceAll(
						`
`,
						"\u23CE",
					);
					if (this.m === -1) return r;
					let u = `${r.substring(0, this.cursorIndex)}|`;
					return (
						this.ghostTextIndex !== -1
							? ((u += `${r.substring(this.cursorIndex, this.ghostTextIndex)}[`),
								(u += `${r.substring(this.ghostTextIndex)}]`))
							: (u += r.substring(this.cursorIndex)),
						u
					);
				}
				serialize() {
					return {
						modelState: this.Q(),
						commandStartX: this.c,
						lastPromptLine: this.f,
						continuationPrompt: this.g,
						lastUserInput: this.h,
					};
				}
				deserialize(r) {
					(this.j = r.modelState.value),
						(this.m = r.modelState.cursorIndex),
						(this.n = r.modelState.ghostTextIndex),
						(this.c = r.commandStartX),
						(this.f = r.lastPromptLine),
						(this.g = r.continuationPrompt),
						(this.h = r.lastUserInput);
				}
				C(r) {
					this.a !== C.Input &&
						((this.a = C.Input),
						(this.b = r.marker),
						(this.c = this.u.buffer.active.cursorX),
						(this.j = ""),
						(this.m = 0),
						this.q.fire(this.Q()),
						this.r.fire(this.Q()),
						this.f &&
							this.c !== this.f.length &&
							this.u.buffer.active
								.getLine(this.b.line)
								?.translateToString(!0)
								.startsWith(this.f) &&
							((this.c = this.f.length), this.G()));
				}
				F() {
					if (this.a === C.Execute) return;
					(this.m = -1),
						this.n !== -1 &&
							((this.j = this.j.substring(0, this.n)), (this.n = -1));
					const r = this.Q();
					this.h === "�" && ((this.h = ""), this.t.fire(r)),
						(this.a = C.Execute),
						this.s.fire(r),
						this.r.fire(r);
				}
				G() {
					try {
						this.H();
					} catch (r) {
						this.w.error("Error while syncing prompt input model", r);
					}
				}
				H() {
					if (this.a !== C.Input) return;
					const r = this.b?.line;
					if (r === void 0) return;
					const u = this.u.buffer.active;
					let a = u.getLine(r);
					const h = a?.translateToString(!0, this.c);
					if (!a || h === void 0) {
						this.w.trace("PromptInputModel#_sync: no line");
						return;
					}
					const c = u.baseY + u.cursorY;
					let n = h,
						g = -1,
						p;
					c === r ? (p = this.O(this.c, u, a)) : (p = h.trimEnd().length),
						c === r && u.cursorX > 1 && (g = this.J(u, a, p));
					for (let o = r + 1; o <= c; o++) {
						a = u.getLine(o);
						const f = a?.translateToString(!0);
						if (f && a)
							if (a.isWrapped) {
								n += f;
								const b = this.O(0, u, a);
								c === o ? (p += b) : (p += f.length);
							} else if (this.g === void 0 || this.M(f)) {
								const b = this.L(f);
								if (
									((n += `
${b}`),
									c === o)
								) {
									const s = this.N(a, f),
										l = this.O(s, u, a);
									p += l + 1;
								} else p += b.length + 1;
							} else break;
					}
					for (let o = c + 1; o < u.baseY + this.u.rows; o++) {
						a = u.getLine(o);
						const f = a?.translateToString(!0);
						if (f && a)
							if (this.g === void 0 || this.M(f))
								n += `
${this.L(f)}`;
							else break;
						else break;
					}
					this.w.getLevel() === w.LogLevel.Trace &&
						this.w.trace(`PromptInputModel#_sync: ${this.getCombinedString()}`);
					{
						let o = this.j.length - this.j.trimEnd().length;
						this.h === "\x7F" &&
							((this.h = ""),
							p === this.m - 1 &&
								(this.j.trimEnd().length > n.trimEnd().length &&
								n.trimEnd().length <= p
									? (o = Math.max(this.j.length - 1 - n.trimEnd().length, 0))
									: (o = Math.max(o - 1, 0)))),
							this.h === "\x1B[3~" &&
								((this.h = ""), p === this.m && (o = Math.max(o - 1, 0)));
						const f = n.split(`
`),
							b = f.length > 1,
							s = n.trimEnd();
						if (!b) {
							s.length < n.length &&
								(this.h === " " &&
									((this.h = ""), p > s.length && p > this.m && o++),
								(o = Math.max(p - s.length, o, 0)));
							const l = p === 0 ? "" : n[p - 1];
							o > 0 &&
								p === this.m + 1 &&
								this.h !== "" &&
								l !== " " &&
								(o = this.j.length - this.m);
						}
						if (b) {
							f[f.length - 1] = f.at(-1)?.trimEnd() ?? "";
							const l = (f.length - 1) * (this.g?.length ?? 0);
							o = Math.max(0, p - n.length - l);
						}
						n =
							f
								.map((l) => l.trimEnd())
								.join(`
`) + " ".repeat(o);
					}
					(this.j !== n || this.m !== p || this.n !== g) &&
						((this.j = n), (this.m = p), (this.n = g), this.r.fire(this.Q()));
				}
				I(r) {
					this.h = r;
				}
				J(r, u, a) {
					let h = -1,
						c = !1,
						n = r.cursorX;
					for (; n > 0; ) {
						const g = u.getCell(--n);
						if (!g) break;
						if (g.getChars().trim().length > 0) {
							c = !this.P(g);
							break;
						}
					}
					if (c) {
						let g = 0,
							p = r.cursorX;
						for (; p < u.length; ) {
							const o = u.getCell(p++);
							if (!o || o.getCode() === 0) break;
							if (this.P(o)) {
								h = a + g;
								break;
							}
							g += o.getChars().length;
						}
					}
					return h;
				}
				L(r) {
					return this.M(r) && (r = r.substring(this.g.length)), r;
				}
				M(r) {
					return !!(this.g && r.startsWith(this.g));
				}
				N(r, u) {
					if (!this.g || !u.startsWith(this.g)) return 0;
					let a = "",
						h = 0;
					for (; a !== this.g; ) a += r.getCell(h++).getChars();
					return h;
				}
				O(r, u, a) {
					return a?.translateToString(!0, r, u.cursorX).length ?? 0;
				}
				P(r) {
					return !!(r.isItalic() || r.isDim());
				}
				Q() {
					return Object.freeze({
						value: this.j,
						prefix: this.prefix,
						suffix: this.suffix,
						cursorIndex: this.m,
						ghostTextIndex: this.n,
					});
				}
			};
			(e.$QJ = d),
				Ne([(0, E.$gi)(0)], d.prototype, "G", null),
				(e.$QJ = d = Ne([j(3, w.$ik)], d));
		})
