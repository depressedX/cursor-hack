define(de[3152], he([1, 0, 3, 10, 117]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KVc = void 0);
			let E = class extends t.$1c {
				get lines() {
					return this.c;
				}
				constructor(d, m, r) {
					super(),
						(this.f = d),
						(this.g = m),
						(this.h = r),
						(this.b = 0),
						(this.c = []),
						(this.bufferToEditorLineMapping = new Map());
				}
				reset() {
					(this.c = []), (this.a = void 0), this.update();
				}
				update() {
					this.a?.isDisposed && ((this.c = []), (this.a = void 0)),
						this.m(),
						this.j(),
						this.n(),
						(this.a = this.D(this.f.raw.registerMarker())),
						this.g.debug(
							"Buffer content tracker: set ",
							this.c.length,
							" lines",
						);
				}
				j() {
					const d = this.f.raw.buffer.active,
						m = this.a?.line ? this.a.line - this.f.raw.rows + 1 : 0,
						r = d.baseY;
					if (m < 0 || m > r) return;
					const a =
							this.h.getValue(w.TerminalSettingId.Scrollback) +
							this.f.raw.rows -
							1,
						h = r - m;
					if (h + this.c.length > a) {
						const g = h + this.c.length - a;
						for (let p = 0; p < g; p++) this.c.shift();
						this.g.debug(
							"Buffer content tracker: removed ",
							g,
							" lines from top of cached lines, now ",
							this.c.length,
							" lines",
						);
					}
					const c = [];
					let n = "";
					for (let g = m; g < r; g++) {
						const p = d.getLine(g);
						if (!p) continue;
						this.bufferToEditorLineMapping.set(g, this.c.length + c.length);
						const o = d.getLine(g + 1)?.isWrapped;
						(n += p.translateToString(!o)),
							((n && !o) || g === d.baseY + this.f.raw.rows - 1) &&
								p.length &&
								(c.push(n), (n = ""));
					}
					this.g.debug("Buffer content tracker:", c.length, " lines cached"),
						this.c.push(...c);
				}
				m() {
					if (!this.c.length) return;
					let d = this.b,
						m = 1;
					for (; d; )
						this.bufferToEditorLineMapping.forEach((r, u) => {
							r === this.c.length - m &&
								this.bufferToEditorLineMapping.delete(u);
						}),
							this.c.pop(),
							m++,
							d--;
					this.g.debug(
						"Buffer content tracker: removed lines from viewport, now ",
						this.c.length,
						" lines cached",
					);
				}
				n() {
					const d = this.f.raw.buffer.active;
					this.b = 0;
					let m = "";
					for (let r = d.baseY; r < d.baseY + this.f.raw.rows; r++) {
						const u = d.getLine(r);
						if (!u) continue;
						this.bufferToEditorLineMapping.set(r, this.c.length);
						const a = d.getLine(r + 1)?.isWrapped;
						(m += u.translateToString(!a)),
							((m && !a) || r === d.baseY + this.f.raw.rows - 1) &&
								m.length &&
								(this.b++, this.c.push(m), (m = ""));
					}
					this.g.debug(
						"Viewport content update complete, ",
						this.c.length,
						" lines in the viewport",
					);
				}
			};
			(e.$KVc = E), (e.$KVc = E = Ne([j(1, w.$YJ), j(2, i.$gj)], E));
		}),
		