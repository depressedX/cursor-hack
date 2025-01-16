define(de[1652], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$SJ = e.$RJ = void 0);
			class t {
				get command() {
					return this.b.command;
				}
				get commandLineConfidence() {
					return this.b.commandLineConfidence;
				}
				get isTrusted() {
					return this.b.isTrusted;
				}
				get timestamp() {
					return this.b.timestamp;
				}
				get duration() {
					return this.b.duration;
				}
				get promptStartMarker() {
					return this.b.promptStartMarker;
				}
				get marker() {
					return this.b.marker;
				}
				get endMarker() {
					return this.b.endMarker;
				}
				set endMarker(u) {
					this.b.endMarker = u;
				}
				get executedMarker() {
					return this.b.executedMarker;
				}
				get aliases() {
					return this.b.aliases;
				}
				get wasReplayed() {
					return this.b.wasReplayed;
				}
				get cwd() {
					return this.b.cwd;
				}
				get exitCode() {
					return this.b.exitCode;
				}
				get commandStartLineContent() {
					return this.b.commandStartLineContent;
				}
				get markProperties() {
					return this.b.markProperties;
				}
				get executedX() {
					return this.b.executedX;
				}
				get startX() {
					return this.b.startX;
				}
				constructor(u, a) {
					(this.a = u), (this.b = a);
				}
				static deserialize(u, a, h) {
					const c = u.buffer.normal,
						n =
							a.startLine !== void 0
								? u.registerMarker(a.startLine - (c.baseY + c.cursorY))
								: void 0;
					if (!n) return;
					const g =
							a.promptStartLine !== void 0
								? u.registerMarker(a.promptStartLine - (c.baseY + c.cursorY))
								: void 0,
						p =
							a.endLine !== void 0
								? u.registerMarker(a.endLine - (c.baseY + c.cursorY))
								: void 0,
						o =
							a.executedLine !== void 0
								? u.registerMarker(a.executedLine - (c.baseY + c.cursorY))
								: void 0;
					return new t(u, {
						command: h ? "" : a.command,
						commandLineConfidence: a.commandLineConfidence ?? "low",
						isTrusted: a.isTrusted,
						promptStartMarker: g,
						marker: n,
						startX: a.startX,
						endMarker: p,
						executedMarker: o,
						executedX: a.executedX,
						timestamp: a.timestamp,
						duration: a.duration,
						cwd: a.cwd,
						commandStartLineContent: a.commandStartLineContent,
						exitCode: a.exitCode,
						markProperties: a.markProperties,
						aliases: void 0,
						wasReplayed: !0,
					});
				}
				serialize(u) {
					return {
						promptStartLine: this.promptStartMarker?.line,
						startLine: this.marker?.line,
						startX: void 0,
						endLine: this.endMarker?.line,
						executedLine: this.executedMarker?.line,
						executedX: this.executedX,
						command: u ? "" : this.command,
						commandLineConfidence: u ? "low" : this.commandLineConfidence,
						isTrusted: this.isTrusted,
						cwd: this.cwd,
						exitCode: this.exitCode,
						commandStartLineContent: this.commandStartLineContent,
						timestamp: this.timestamp,
						duration: this.duration,
						markProperties: this.markProperties,
					};
				}
				extractCommandLine() {
					return w(
						this.a.buffer.active,
						this.a.cols,
						this.marker,
						this.startX,
						this.executedMarker,
						this.executedX,
					);
				}
				getOutput() {
					if (!this.executedMarker || !this.endMarker) return;
					const u = this.executedMarker.line,
						a = this.endMarker.line;
					if (u === a) return;
					let h = "",
						c;
					for (let n = u; n < a; n++)
						(c = this.a.buffer.active.getLine(n)),
							c &&
								(h +=
									c.translateToString(!c.isWrapped) +
									(c.isWrapped
										? ""
										: `
`));
					return h === "" ? void 0 : h;
				}
				getOutputMatch(u) {
					if (!this.executedMarker || !this.endMarker) return;
					const a = this.endMarker.line;
					if (a === -1) return;
					const h = this.a.buffer.active,
						c = Math.max(this.executedMarker.line, 0),
						n = u.lineMatcher,
						g = typeof n == "string" ? 1 : u.length || C(n),
						p = [];
					let o;
					if (u.anchor === "bottom")
						for (let f = a - (u.offset || 0); f >= c; f--) {
							let b = f;
							const s = f;
							for (; b >= c && h.getLine(b)?.isWrapped; ) b--;
							if (
								((f = b),
								p.unshift(E(h, b, s, this.a.cols)),
								o || (o = p[0].match(n)),
								p.length >= g)
							)
								break;
						}
					else
						for (let f = c + (u.offset || 0); f < a; f++) {
							const b = f;
							let s = f;
							for (; s + 1 < a && h.getLine(s + 1)?.isWrapped; ) s++;
							if (
								((f = s),
								p.push(E(h, b, s, this.a.cols)),
								o || (o = p[p.length - 1].match(n)),
								p.length >= g)
							)
								break;
						}
					return o ? { regexMatch: o, outputLines: p } : void 0;
				}
				hasOutput() {
					return (
						!this.executedMarker?.isDisposed &&
						!this.endMarker?.isDisposed &&
						!!(
							this.executedMarker &&
							this.endMarker &&
							this.executedMarker.line < this.endMarker.line
						)
					);
				}
				getPromptRowCount() {
					return d(this, this.a.buffer.active);
				}
				getCommandRowCount() {
					return m(this);
				}
			}
			e.$RJ = t;
			class i {
				constructor(u) {
					this.c = u;
				}
				serialize(u) {
					if (this.commandStartMarker)
						return {
							promptStartLine: this.promptStartMarker?.line,
							startLine: this.commandStartMarker.line,
							startX: this.commandStartX,
							endLine: void 0,
							executedLine: void 0,
							executedX: void 0,
							command: "",
							commandLineConfidence: "low",
							isTrusted: !0,
							cwd: u,
							exitCode: void 0,
							commandStartLineContent: void 0,
							timestamp: 0,
							duration: 0,
							markProperties: void 0,
						};
				}
				promoteToFullCommand(u, a, h, c) {
					if (
						(a === void 0 && this.command === void 0 && (this.command = ""),
						(this.command !== void 0 && !this.command.startsWith("\\")) || h)
					)
						return new t(this.c, {
							command: h ? "" : this.command || "",
							commandLineConfidence: h
								? "low"
								: this.commandLineConfidence || "low",
							isTrusted: !!this.isTrusted,
							promptStartMarker: this.promptStartMarker,
							marker: this.commandStartMarker,
							startX: this.commandStartX,
							endMarker: this.commandFinishedMarker,
							executedMarker: this.commandExecutedMarker,
							executedX: this.commandExecutedX,
							timestamp: Date.now(),
							duration: this.b || 0,
							cwd: u,
							exitCode: a,
							commandStartLineContent: this.commandStartLineContent,
							markProperties: c,
						});
				}
				markExecutedTime() {
					this.a === void 0 && (this.a = Date.now());
				}
				markFinishedTime() {
					this.b === void 0 &&
						this.a !== void 0 &&
						(this.b = Date.now() - this.a);
				}
				extractCommandLine() {
					return w(
						this.c.buffer.active,
						this.c.cols,
						this.commandStartMarker,
						this.commandStartX,
						this.commandExecutedMarker,
						this.commandExecutedX,
					);
				}
				getPromptRowCount() {
					return d(this, this.c.buffer.active);
				}
				getCommandRowCount() {
					return m(this);
				}
			}
			e.$SJ = i;
			function w(r, u, a, h, c, n) {
				if (!a || !c || h === void 0 || n === void 0) return "";
				let g = "";
				for (let p = a.line; p <= c.line; p++) {
					const o = r.getLine(p);
					o &&
						(g += o.translateToString(
							!0,
							p === a.line ? h : 0,
							p === c.line ? n : u,
						));
				}
				return g;
			}
			function E(r, u, a, h) {
				const c = Math.max((2048 / h) * 2);
				a = Math.min(a, u + c);
				let n = "";
				for (let g = u; g <= a; g++) {
					const p = r.getLine(g);
					p && (n += p.translateToString(!0, 0, h));
				}
				return n;
			}
			function C(r) {
				if (!r.multiline) return 1;
				const u = r.source;
				let a = 1,
					h = u.indexOf("\\n");
				for (; h !== -1; ) a++, (h = u.indexOf("\\n", h + 1));
				return a;
			}
			function d(r, u) {
				const a = "hasOutput" in r ? r.marker : r.commandStartMarker;
				if (!a || !r.promptStartMarker) return 1;
				let h = 1,
					c = r.promptStartMarker.line;
				for (
					;
					c < a.line &&
					(u.getLine(c)?.translateToString(!0) ?? "").length === 0;
				)
					c++;
				return (h = a.line - c + 1), h;
			}
			function m(r) {
				const u = "hasOutput" in r ? r.marker : r.commandStartMarker,
					a = "hasOutput" in r ? r.executedMarker : r.commandExecutedMarker;
				if (!u || !a) return 1;
				let c = Math.max(a.line, u.line) - u.line + 1;
				return (
					("hasOutput" in r ? r.executedX : r.commandExecutedX) === 0 && c--, c
				);
			}
		}),
		