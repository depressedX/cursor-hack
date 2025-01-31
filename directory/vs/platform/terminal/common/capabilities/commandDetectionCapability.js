import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../log/common/log.js';
import './capabilities.js';
import './commandDetection/terminalCommand.js';
import './commandDetection/promptInputModel.js';
define(
			de[1653],
			he([1, 0, 15, 138, 6, 3, 34, 189, 1652, 2822]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*decorators*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*log*/,
 d /*capabilities*/,
 m /*terminalCommand*/,
 r /*promptInputModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MHb = void 0),
					(e.$NHb = n);
				let u = class extends E.$1c {
					get promptInputModel() {
						return this.c;
					}
					get commands() {
						return this.f;
					}
					get executingCommand() {
						return this.n.command;
					}
					get executingCommandObject() {
						if (this.n.commandStartMarker)
							return { marker: this.n.commandStartMarker };
					}
					get currentCommand() {
						return this.n;
					}
					get cwd() {
						return this.g;
					}
					get promptTerminator() {
						return this.h;
					}
					constructor(f, b) {
						super(),
							(this.L = f),
							(this.M = b),
							(this.type = d.TerminalCapability.CommandDetection),
							(this.f = []),
							(this.n = new m.$SJ(this.L)),
							(this.q = []),
							(this.s = !1),
							(this.C = this.D(new w.$re())),
							(this.onCommandStarted = this.C.event),
							(this.F = this.D(new w.$re())),
							(this.onBeforeCommandFinished = this.F.event),
							(this.G = this.D(new w.$re())),
							(this.onCommandFinished = this.G.event),
							(this.H = this.D(new w.$re())),
							(this.onCommandExecuted = this.H.event),
							(this.I = this.D(new w.$re())),
							(this.onCommandInvalidated = this.I.event),
							(this.J = this.D(new w.$re())),
							(this.onCurrentCommandInvalidated = this.J.event),
							(this.c = this.D(
								new r.$QJ(
									this.L,
									this.onCommandStarted,
									this.onCommandExecuted,
									this.M,
								),
							)),
							this.D(
								this.onCommandExecuted((l) => {
									if (l.commandLineConfidence !== "high") {
										const y = l;
										(l.command = y.extractCommandLine()),
											(l.commandLineConfidence = "low"),
											"getOutput" in y
												? y.promptStartMarker &&
													y.marker &&
													y.executedMarker &&
													l.command.indexOf(`
`) === -1 &&
													y.startX !== void 0 &&
													y.startX > 0 &&
													(l.commandLineConfidence = "medium")
												: y.promptStartMarker &&
													y.commandStartMarker &&
													y.commandExecutedMarker &&
													l.command.indexOf(`
`) === -1 &&
													y.commandStartX !== void 0 &&
													y.commandStartX > 0 &&
													(l.commandLineConfidence = "medium");
									}
								}),
							);
						const s = this;
						(this.w = new (class {
							get onCurrentCommandInvalidatedEmitter() {
								return s.J;
							}
							get onCommandStartedEmitter() {
								return s.C;
							}
							get onCommandExecutedEmitter() {
								return s.H;
							}
							get dimensions() {
								return s.r;
							}
							get isCommandStorageDisabled() {
								return s.s;
							}
							get commandMarkers() {
								return s.q;
							}
							set commandMarkers(l) {
								s.q = l;
							}
							get clearCommandsInViewport() {
								return s.P.bind(s);
							}
							commitCommandFinished() {
								s.u?.flush(), (s.u = void 0);
							}
						})()),
							(this.z = this.D(new E.$3c(new a(this.L, this, this.w, this.M)))),
							(this.r = { cols: this.L.cols, rows: this.L.rows }),
							this.D(this.L.onResize((l) => this.N(l))),
							this.D(this.L.onCursorMove(() => this.O()));
					}
					N(f) {
						this.z.value.preHandleResize?.(f),
							(this.r.cols = f.cols),
							(this.r.rows = f.rows);
					}
					O() {
						this.B.isDisposed ||
							(this.L.buffer.active === this.L.buffer.normal &&
								this.n.commandStartMarker &&
								this.L.buffer.active.baseY + this.L.buffer.active.cursorY <
									this.n.commandStartMarker.line &&
								(this.P(),
								(this.n.isInvalid = !0),
								this.J.fire({ reason: d.CommandInvalidationReason.Windows })));
					}
					P() {
						let f = 0;
						for (let b = this.f.length - 1; b >= 0; b--) {
							const s = this.f[b].marker?.line;
							if (s && s < this.L.buffer.active.baseY) break;
							f++;
						}
						f > 0 && this.I.fire(this.f.splice(this.f.length - f, f));
					}
					setContinuationPrompt(f) {
						this.c.setContinuationPrompt(f);
					}
					setPromptTerminator(f, b) {
						this.M.debug("CommandDetectionCapability#setPromptTerminator", f),
							(this.h = f),
							this.c.setLastPromptLine(b);
					}
					setCwd(f) {
						this.g = f;
					}
					setIsWindowsPty(f) {
						if (f && !(this.z.value instanceof c)) {
							const b = this;
							this.z.value = new c(
								this.L,
								this,
								new (class {
									get onCurrentCommandInvalidatedEmitter() {
										return b.J;
									}
									get onCommandStartedEmitter() {
										return b.C;
									}
									get onCommandExecutedEmitter() {
										return b.H;
									}
									get dimensions() {
										return b.r;
									}
									get isCommandStorageDisabled() {
										return b.s;
									}
									get commandMarkers() {
										return b.q;
									}
									set commandMarkers(s) {
										b.q = s;
									}
									get clearCommandsInViewport() {
										return b.P.bind(b);
									}
									commitCommandFinished() {
										b.u?.flush(), (b.u = void 0);
									}
								})(),
								this.M,
							);
						} else
							!f &&
								!(this.z.value instanceof a) &&
								(this.z.value = new a(this.L, this, this.w, this.M));
					}
					setIsCommandStorageDisabled() {
						this.s = !0;
					}
					getCommandForLine(f) {
						if (this.n.promptStartMarker && f >= this.n.promptStartMarker?.line)
							return this.n;
						if (
							this.f.length !== 0 &&
							!((this.f[0].promptStartMarker ?? this.f[0].marker).line > f)
						) {
							for (let b = this.commands.length - 1; b >= 0; b--)
								if (
									(
										this.commands[b].promptStartMarker ??
										this.commands[b].marker
									).line <= f
								)
									return this.commands[b];
						}
					}
					getCwdForLine(f) {
						if (this.n.promptStartMarker && f >= this.n.promptStartMarker?.line)
							return this.g;
						const b = this.getCommandForLine(f);
						if (b && "cwd" in b) return b.cwd;
					}
					handlePromptStart(f) {
						const b = this.commands.at(-1);
						b?.endMarker &&
							b?.executedMarker &&
							b.endMarker.line === b.executedMarker.line &&
							(this.M.debug(
								"CommandDetectionCapability#handlePromptStart adjusted commandFinished",
								`${b.endMarker.line} -> ${b.executedMarker.line + 1}`,
							),
							(b.endMarker = p(this.L, b.executedMarker, 1))),
							(this.n.promptStartMarker =
								f?.marker ||
								(b?.endMarker
									? p(this.L, b.endMarker)
									: this.L.registerMarker(0))),
							this.M.debug(
								"CommandDetectionCapability#handlePromptStart",
								this.L.buffer.active.cursorX,
								this.n.promptStartMarker?.line,
							);
					}
					handleContinuationStart() {
						(this.n.currentContinuationMarker = this.L.registerMarker(0)),
							this.M.debug(
								"CommandDetectionCapability#handleContinuationStart",
								this.n.currentContinuationMarker,
							);
					}
					handleContinuationEnd() {
						if (!this.n.currentContinuationMarker) {
							this.M.warn(
								"CommandDetectionCapability#handleContinuationEnd Received continuation end without start",
							);
							return;
						}
						this.n.continuations || (this.n.continuations = []),
							this.n.continuations.push({
								marker: this.n.currentContinuationMarker,
								end: this.L.buffer.active.cursorX,
							}),
							(this.n.currentContinuationMarker = void 0),
							this.M.debug(
								"CommandDetectionCapability#handleContinuationEnd",
								this.n.continuations[this.n.continuations.length - 1],
							);
					}
					handleRightPromptStart() {
						(this.n.commandRightPromptStartX = this.L.buffer.active.cursorX),
							this.M.debug(
								"CommandDetectionCapability#handleRightPromptStart",
								this.n.commandRightPromptStartX,
							);
					}
					handleRightPromptEnd() {
						(this.n.commandRightPromptEndX = this.L.buffer.active.cursorX),
							this.M.debug(
								"CommandDetectionCapability#handleRightPromptEnd",
								this.n.commandRightPromptEndX,
							);
					}
					handleCommandStart(f) {
						if (
							((this.t = f),
							(this.n.cwd = this.g),
							(this.n.commandStartMarker =
								f?.marker || this.n.commandStartMarker),
							this.n.commandStartMarker?.line === this.L.buffer.active.cursorY)
						) {
							(this.n.commandStartX = this.L.buffer.active.cursorX),
								this.M.debug(
									"CommandDetectionCapability#handleCommandStart",
									this.n.commandStartX,
									this.n.commandStartMarker?.line,
								);
							return;
						}
						this.z.value.handleCommandStart(f);
					}
					handleGenericCommand(f) {
						f?.markProperties?.disableCommandStorage &&
							this.setIsCommandStorageDisabled(),
							this.handlePromptStart(f),
							this.handleCommandStart(f),
							this.handleCommandExecuted(f),
							this.handleCommandFinished(void 0, f);
					}
					handleCommandExecuted(f) {
						this.z.value.handleCommandExecuted(f), this.n.markExecutedTime();
					}
					handleCommandFinished(f, b) {
						if (
							(this.n.markFinishedTime(),
							this.z.value.preHandleCommandFinished?.(),
							this.M.debug(
								"CommandDetectionCapability#handleCommandFinished",
								this.L.buffer.active.cursorX,
								b?.marker?.line,
								this.n.command,
								this.n,
							),
							f === void 0)
						) {
							const l =
								this.commands.length > 0
									? this.commands[this.commands.length - 1]
									: void 0;
							this.n.command &&
								this.n.command.length > 0 &&
								l?.command === this.n.command &&
								(f = l.exitCode);
						}
						if (this.n.commandStartMarker === void 0 || !this.L.buffer.active)
							return;
						(this.n.commandFinishedMarker =
							b?.marker || this.L.registerMarker(0)),
							this.z.value.postHandleCommandFinished?.();
						const s = this.n.promoteToFullCommand(
							this.g,
							f,
							this.t?.ignoreCommandLine ?? !1,
							b?.markProperties,
						);
						s &&
							(this.f.push(s),
							(this.u = new t.$Yh(() => {
								this.F.fire(s),
									this.n.isInvalid ||
										(this.M.debug(
											"CommandDetectionCapability#onCommandFinished",
											s,
										),
										this.G.fire(s));
							}, 50)),
							this.u.schedule()),
							(this.n = new m.$SJ(this.L)),
							(this.t = void 0);
					}
					setCommandLine(f, b) {
						this.M.debug("CommandDetectionCapability#setCommandLine", f, b),
							(this.n.command = f),
							(this.n.commandLineConfidence = "high"),
							(this.n.isTrusted = b),
							b && this.c.setConfidentCommandLine(f);
					}
					serialize() {
						const f = this.commands.map((s) => s.serialize(this.s)),
							b = this.n.serialize(this.g);
						return (
							b && f.push(b),
							{
								isWindowsPty: this.z.value instanceof c,
								commands: f,
								promptInputModel: this.c.serialize(),
							}
						);
					}
					deserialize(f) {
						f.isWindowsPty && this.setIsWindowsPty(f.isWindowsPty);
						const b = this.L.buffer.normal;
						for (const s of f.commands) {
							if (!s.endLine) {
								const y =
									s.startLine !== void 0
										? this.L.registerMarker(s.startLine - (b.baseY + b.cursorY))
										: void 0;
								if (!y) continue;
								(this.n.commandStartMarker =
									s.startLine !== void 0
										? this.L.registerMarker(s.startLine - (b.baseY + b.cursorY))
										: void 0),
									(this.n.commandStartX = s.startX),
									(this.n.promptStartMarker =
										s.promptStartLine !== void 0
											? this.L.registerMarker(
													s.promptStartLine - (b.baseY + b.cursorY),
												)
											: void 0),
									(this.g = s.cwd),
									this.C.fire({ marker: y });
								continue;
							}
							const l = m.$RJ.deserialize(this.L, s, this.s);
							l &&
								(this.f.push(l),
								this.M.debug("CommandDetectionCapability#onCommandFinished", l),
								this.G.fire(l));
						}
						f.promptInputModel && this.c.deserialize(f.promptInputModel);
					}
				};
				(e.$MHb = u),
					Ne([(0, i.$fi)(500)], u.prototype, "O", null),
					(e.$MHb = u = Ne([j(1, C.$ik)], u));
				class a extends E.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.h = l),
							this.D(
								f.parser.registerCsiHandler(
									{ final: "J" },
									(y) => (
										y.length >= 1 &&
											(y[0] === 2 || y[0] === 3) &&
											s.clearCommandsInViewport(),
										!1
									),
								),
							);
					}
					handleCommandStart(f) {
						this.g.commitCommandFinished();
						const b = this.f.currentCommand;
						(b.commandStartX = this.c.buffer.active.cursorX),
							(b.commandStartMarker = f?.marker || this.c.registerMarker(0)),
							b.commandExecutedMarker?.dispose(),
							(b.commandExecutedMarker = void 0),
							(b.commandExecutedX = void 0);
						for (const s of this.g.commandMarkers) s.dispose();
						(this.g.commandMarkers.length = 0),
							this.g.onCommandStartedEmitter.fire({
								marker: f?.marker || b.commandStartMarker,
								markProperties: f?.markProperties,
							}),
							this.h.debug(
								"CommandDetectionCapability#handleCommandStart",
								b.commandStartX,
								b.commandStartMarker?.line,
							);
					}
					handleCommandExecuted(f) {
						const b = this.f.currentCommand;
						if (
							((b.commandExecutedMarker =
								f?.marker || this.c.registerMarker(0)),
							(b.commandExecutedX = this.c.buffer.active.cursorX),
							this.h.debug(
								"CommandDetectionCapability#handleCommandExecuted",
								b.commandExecutedX,
								b.commandExecutedMarker?.line,
							),
							!b.commandStartMarker ||
								!b.commandExecutedMarker ||
								b.commandStartX === void 0)
						)
							return;
						b.command = this.g.isCommandStorageDisabled
							? ""
							: this.c.buffer.active
									.getLine(b.commandStartMarker.line)
									?.translateToString(
										!0,
										b.commandStartX,
										b.commandRightPromptStartX,
									)
									.trim();
						let s = b.commandStartMarker.line + 1;
						const l = b.commandExecutedMarker.line;
						for (; s < l; s++) {
							const y = this.c.buffer.active.getLine(s);
							if (y) {
								const $ = b.continuations?.find((S) => S.marker.line === s);
								$ &&
									(b.command += `
`);
								const v = $?.end ?? 0;
								b.command += y.translateToString(!0, v);
							}
						}
						s === l &&
							(b.command +=
								this.c.buffer.active
									.getLine(l)
									?.translateToString(!0, void 0, b.commandExecutedX) || ""),
							this.g.onCommandExecutedEmitter.fire(b);
					}
				}
				var h;
				(function (o) {
					(o[(o.MaxCheckLineCount = 10)] = "MaxCheckLineCount"),
						(o[(o.Interval = 20)] = "Interval"),
						(o[(o.MaximumPollCount = 10)] = "MaximumPollCount");
				})(h || (h = {}));
				let c = class extends E.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.n = f),
							(this.q = b),
							(this.r = s),
							(this.s = l),
							(this.c = this.D(new E.$2c())),
							(this.g = 0),
							(this.h = 0),
							this.D(
								f.parser.registerCsiHandler(
									{ final: "J" },
									(y) => (
										y.length >= 1 &&
											(y[0] === 2 || y[0] === 3) &&
											this.r.clearCommandsInViewport(),
										!1
									),
								),
							),
							this.D(
								this.q.onBeforeCommandFinished((y) => {
									(y.command.trim().toLowerCase() === "clear" ||
										y.command.trim().toLowerCase() === "cls") &&
										(this.f?.cancel(),
										(this.f = void 0),
										this.r.clearCommandsInViewport(),
										(this.q.currentCommand.isInvalid = !0),
										this.r.onCurrentCommandInvalidatedEmitter.fire({
											reason: d.CommandInvalidationReason.Windows,
										}));
								}),
							);
					}
					preHandleResize(f) {
						const b = this.n.buffer.active.baseY,
							s = f.rows - this.r.dimensions.rows;
						s > 0 &&
							this.C().then(() => {
								const l = Math.min(s, b);
								for (let y = this.q.commands.length - 1; y >= 0; y--) {
									const $ = this.q.commands[y];
									if (
										!$.marker ||
										$.marker.line < b ||
										$.commandStartLineContent === void 0
									)
										break;
									const v = this.n.buffer.active.getLine($.marker.line);
									if (
										!v ||
										v.translateToString(!0) === $.commandStartLineContent
									)
										continue;
									const S = $.marker.line - l;
									this.n.buffer.active.getLine(S)?.translateToString(!0) ===
										$.commandStartLineContent &&
										this.n._core._bufferService.buffer.lines.onDeleteEmitter.fire(
											{ index: this.n.buffer.active.baseY, amount: l },
										);
								}
							});
					}
					handleCommandStart() {
						(this.q.currentCommand.commandStartX =
							this.n.buffer.active.cursorX),
							(this.r.commandMarkers.length = 0);
						const f = (this.q.currentCommand.commandStartMarker = this.q
							.currentCommand.promptStartMarker
							? p(this.n, this.q.currentCommand.promptStartMarker)
							: this.n.registerMarker(0));
						(this.q.currentCommand.commandStartX = 0),
							(this.g = 0),
							(this.h = 0),
							(this.f = new t.$Yh(() => this.t(f), h.Interval)),
							this.f.schedule();
					}
					t(f) {
						if (this.B.isDisposed) return;
						const b = this.n.buffer.active;
						let s = this.g;
						for (
							;
							s < h.MaxCheckLineCount && f.line + s < b.baseY + this.n.rows;
						) {
							if (this.z()) {
								const l = this.F(f.line + s);
								if (l) {
									const y = typeof l == "string" ? l : l.prompt;
									if (
										((this.q.currentCommand.commandStartMarker =
											this.n.registerMarker(0)),
										typeof l == "object" && l.likelySingleLine)
									) {
										this.s.debug(
											"CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted promptStart",
											`${this.q.currentCommand.promptStartMarker?.line} -> ${this.q.currentCommand.commandStartMarker.line}`,
										),
											this.q.currentCommand.promptStartMarker?.dispose(),
											(this.q.currentCommand.promptStartMarker = p(
												this.n,
												this.q.currentCommand.commandStartMarker,
											));
										const $ = this.q.commands.at(-1);
										$ &&
											this.q.currentCommand.commandStartMarker.line !==
												$.endMarker?.line &&
											($.endMarker?.dispose(),
											($.endMarker = p(
												this.n,
												this.q.currentCommand.commandStartMarker,
											)));
									}
									(this.q.currentCommand.commandStartX = y.length),
										this.s.debug(
											"CommandDetectionCapability#_tryAdjustCommandStartMarker adjusted commandStart",
											`${f.line} -> ${this.q.currentCommand.commandStartMarker.line}:${this.q.currentCommand.commandStartX}`,
										),
										this.u();
									return;
								}
							}
							s++;
						}
						s < h.MaxCheckLineCount
							? ((this.g = s),
								++this.h < h.MaximumPollCount ? this.f?.schedule() : this.u())
							: this.u();
					}
					u() {
						if (
							(this.f &&
								((this.h = h.MaximumPollCount),
								this.f.flush(),
								(this.f = void 0)),
							this.r.commitCommandFinished(),
							this.q.currentCommand.commandExecutedMarker ||
								(this.c.value = this.n.onCursorMove(() => {
									if (
										this.r.commandMarkers.length === 0 ||
										this.r.commandMarkers[this.r.commandMarkers.length - 1]
											.line !== this.n.buffer.active.cursorY
									) {
										const f = this.n.registerMarker(0);
										f && this.r.commandMarkers.push(f);
									}
								})),
							this.q.currentCommand.commandStartMarker)
						) {
							const f = this.n.buffer.active.getLine(
								this.q.currentCommand.commandStartMarker.line,
							);
							f &&
								(this.q.currentCommand.commandStartLineContent =
									f.translateToString(!0));
						}
						this.r.onCommandStartedEmitter.fire({
							marker: this.q.currentCommand.commandStartMarker,
						}),
							this.s.debug(
								"CommandDetectionCapability#_handleCommandStartWindows",
								this.q.currentCommand.commandStartX,
								this.q.currentCommand.commandStartMarker?.line,
							);
					}
					handleCommandExecuted(f) {
						this.f && this.u(),
							this.c.clear(),
							this.w(),
							(this.q.currentCommand.commandExecutedX =
								this.n.buffer.active.cursorX),
							this.r.onCommandExecutedEmitter.fire(this.q.currentCommand),
							this.s.debug(
								"CommandDetectionCapability#handleCommandExecuted",
								this.q.currentCommand.commandExecutedX,
								this.q.currentCommand.commandExecutedMarker?.line,
							);
					}
					preHandleCommandFinished() {
						this.q.currentCommand.commandExecutedMarker ||
							(this.r.commandMarkers.length === 0 &&
								(this.q.currentCommand.commandStartMarker ||
									(this.q.currentCommand.commandStartMarker =
										this.n.registerMarker(0)),
								this.q.currentCommand.commandStartMarker &&
									this.r.commandMarkers.push(
										this.q.currentCommand.commandStartMarker,
									)),
							this.w());
					}
					postHandleCommandFinished() {
						const f = this.q.currentCommand,
							b = f.command,
							s = f.commandStartMarker?.line,
							l = f.commandExecutedMarker?.line;
						if (
							!b ||
							b.length === 0 ||
							s === void 0 ||
							s === -1 ||
							l === void 0 ||
							l === -1
						)
							return;
						let y = 0,
							$ = !1;
						for (let v = s; v <= l; v++) {
							const S = this.n.buffer.active.getLine(v);
							if (!S) break;
							const I = S.translateToString(!0);
							for (let T = 0; T < I.length; T++) {
								for (; b.length < y && b[y] === " "; ) y++;
								if ((I[T] === b[y] && y++, y === b.length)) {
									const P = T >= this.n.cols - 1;
									(f.commandExecutedMarker = this.n.registerMarker(
										v -
											(this.n.buffer.active.baseY +
												this.n.buffer.active.cursorY) +
											(P ? 1 : 0),
									)),
										(f.commandExecutedX = P ? 0 : T + 1),
										($ = !0);
									break;
								}
							}
							if ($) break;
						}
					}
					w() {
						if (this.r.commandMarkers.length !== 0) {
							if (
								((this.r.commandMarkers = this.r.commandMarkers.sort(
									(f, b) => f.line - b.line,
								)),
								(this.q.currentCommand.commandStartMarker =
									this.r.commandMarkers[0]),
								this.q.currentCommand.commandStartMarker)
							) {
								const f = this.n.buffer.active.getLine(
									this.q.currentCommand.commandStartMarker.line,
								);
								f &&
									(this.q.currentCommand.commandStartLineContent =
										f.translateToString(!0));
							}
							(this.q.currentCommand.commandExecutedMarker =
								this.r.commandMarkers[this.r.commandMarkers.length - 1]),
								this.r.onCommandExecutedEmitter.fire(this.q.currentCommand);
						}
					}
					z() {
						const f = this.q.commands.at(-1);
						if (!f) return !0;
						const b = this.n.buffer.active.baseY + this.n.buffer.active.cursorY,
							s = (f.endMarker ? f.endMarker.line : f.marker?.line) ?? -1;
						return b > s;
					}
					C() {
						const f = this.n.buffer.active.cursorX,
							b = this.n.buffer.active.cursorY;
						let s = 0;
						return new Promise((l, y) => {
							const $ = setInterval(() => {
								if (
									f !== this.n.buffer.active.cursorX ||
									b !== this.n.buffer.active.cursorY
								) {
									l(), clearInterval($);
									return;
								}
								(s += 10), s > 1e3 && (clearInterval($), l());
							}, 10);
						});
					}
					F(f = this.n.buffer.active.baseY + this.n.buffer.active.cursorY) {
						const b = this.n.buffer.active.getLine(f);
						if (!b) return;
						const s = b.translateToString(!0);
						if (!s) return;
						const l = s.match(/(?<prompt>(\(.+\)\s)?(?:PS.+>\s?))/)?.groups
							?.prompt;
						if (l) {
							const I = this.G(l, s, ">");
							if (I) return { prompt: I, likelySingleLine: !0 };
						}
						const y = s.match(/.*\u276f(?=[^\u276f]*$)/g)?.[0];
						if (y) {
							const I = this.G(y, s, "\u276F");
							if (I) return I;
						}
						const $ = s.match(/^(?<prompt>\$)/)?.groups?.prompt;
						if ($) {
							const I = this.G($, s, "$");
							if (I) return I;
						}
						const v = s.match(/^(?<prompt>>>> )/g)?.groups?.prompt;
						if (v) return { prompt: v, likelySingleLine: !0 };
						if (
							this.q.promptTerminator &&
							s.trim().endsWith(this.q.promptTerminator)
						) {
							const I = this.G(s, s, this.q.promptTerminator);
							if (I) return I;
						}
						const S = s.match(/^(?<prompt>(\(.+\)\s)?(?:[A-Z]:\\.*>))/);
						return S?.groups?.prompt
							? { prompt: S.groups.prompt, likelySingleLine: !0 }
							: void 0;
					}
					G(f, b, s) {
						if (f) return b === f && f.endsWith(s) && (f += " "), f;
					}
				};
				c = Ne([j(3, C.$ik)], c);
				function n(o, f, b, s) {
					if (!s) return;
					const l = f.executedMarker,
						y = f.endMarker;
					if (!l || !y) return;
					const $ = l.line,
						v = y.line,
						S = s.length,
						I = [];
					if (s.anchor === "bottom")
						for (let T = v - (s.offset || 0); T >= $; T--) {
							let P = T;
							const k = T;
							for (; P >= $ && o.getLine(P)?.isWrapped; ) P--;
							(T = P), I.unshift(g(o, P, k, b)), I.length > S && I.pop();
						}
					else
						for (let T = $ + (s.offset || 0); T < v; T++) {
							const P = T;
							let k = T;
							for (; k + 1 < v && o.getLine(k + 1)?.isWrapped; ) k++;
							(T = k), I.push(g(o, P, k, b)), I.length === S && I.shift();
						}
					return I;
				}
				function g(o, f, b, s) {
					const l = Math.max((2048 / s) * 2);
					b = Math.min(b, f + l);
					let y = "";
					for (let $ = f; $ <= b; $++) {
						const v = o.getLine($);
						v && (y += v.translateToString(!0, 0, s));
					}
					return y;
				}
				function p(o, f, b = 0) {
					return o.registerMarker(
						f.line - (o.buffer.active.baseY + o.buffer.active.cursorY) + b,
					);
				}
			},
		)
