import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../../base/common/async.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../common/terminalColorRegistry.js';
import '../../../../../base/browser/dom.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../terminalContrib/stickyScroll/common/terminalStickyScrollConfiguration.js';
define(
			de[3165],
			he([1, 0, 24, 3, 189, 15, 35, 512, 7, 10, 808]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*lifecycle*/,
 w /*capabilities*/,
 E /*async*/,
 C /*themeService*/,
 d /*terminalColorRegistry*/,
 m /*dom*/,
 r /*configuration*/,
 u /*terminalStickyScrollConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$HHb = e.ScrollPosition = void 0),
					(e.$IHb = n),
					(e.$JHb = g);
				var a;
				(function (f) {
					(f[(f.Top = 0)] = "Top"), (f[(f.Bottom = 1)] = "Bottom");
				})(a || (a = {}));
				var h;
				(function (f) {
					(f[(f.Top = 0)] = "Top"), (f[(f.Middle = 1)] = "Middle");
				})(h || (e.ScrollPosition = h = {}));
				let c = class extends i.$1c {
					activate(b) {
						(this.f = b),
							this.D(
								this.f.onData(() => {
									this.a = a.Bottom;
								}),
							);
					}
					constructor(b, s, l) {
						super(),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.a = a.Bottom),
							(this.b = null),
							(this.c = !1),
							(this.j = this.D(new i.$2c()));
					}
					r(b) {
						const s = this.m.get(w.TerminalCapability.CommandDetection),
							l = this.m.get(w.TerminalCapability.PartialCommandDetection),
							y = this.m.get(w.TerminalCapability.BufferMarkDetection);
						let $ = [];
						if (
							(s
								? (($ = (0, t.$Lb)(
										s.commands
											.filter((v) => (b ? v.exitCode !== void 0 : !0))
											.map((v) => v.promptStartMarker ?? v.marker),
									)),
									s.currentCommand?.promptStartMarker &&
										s.currentCommand.commandExecutedMarker &&
										$.push(s.currentCommand?.promptStartMarker))
								: l && $.push(...l.commands),
							y && !b)
						) {
							let v = y.markers().next()?.value;
							const S = [];
							for (; v; ) S.push(v), (v = y.markers().next()?.value);
							$ = S;
						}
						return $;
					}
					s(b) {
						const s = this.m.get(w.TerminalCapability.CommandDetection);
						if (s) {
							const l = s.commands.find(
								(y) =>
									y.marker?.line === b.line ||
									y.promptStartMarker?.line === b.line,
							);
							if (l) return l;
							if (s.currentCommand) return s.currentCommand;
						}
					}
					clear() {
						(this.a = a.Bottom), this.t(), (this.b = null);
					}
					t() {
						this.g && (0, i.$Vc)(this.g), (this.g = []);
					}
					u(b) {
						return b === a.Bottom
							? !0
							: b === a.Top
								? !this.r(!0)
										.map((s) => s.line)
										.includes(0)
								: !this.r(!0).includes(b);
					}
					scrollToPreviousMark(b = h.Middle, s = !1, l = !0) {
						if (!this.f) return;
						s || (this.b = null);
						let y;
						const $ =
								typeof this.a == "object"
									? this.getTargetScrollLine(this.a.line, b)
									: Math.min(n(this.f, this.a), this.f.buffer.active.baseY),
							v = this.f.buffer.active.viewportY;
						if (typeof this.a == "object" ? !this.H(this.f, this.a) : $ !== v) {
							const S = this.r(l).filter((I) => I.line >= v).length;
							y = this.r(l).length - S - 1;
						} else
							this.a === a.Bottom
								? (y = this.r(l).length - 1)
								: this.a === a.Top
									? (y = -1)
									: this.c
										? ((y = this.L(l)), this.a.dispose(), (this.c = !1))
										: l && this.u(this.a)
											? (y = this.L(!0))
											: (y = this.r(l).indexOf(this.a) - 1);
						if (y < 0) {
							(this.a = a.Top), this.f.scrollToTop(), this.t();
							return;
						}
						(this.a = this.r(l)[y]), this.w(this.a, b);
					}
					scrollToNextMark(b = h.Middle, s = !1, l = !0) {
						if (!this.f) return;
						s || (this.b = null);
						let y;
						const $ =
								typeof this.a == "object"
									? this.getTargetScrollLine(this.a.line, b)
									: Math.min(n(this.f, this.a), this.f.buffer.active.baseY),
							v = this.f.buffer.active.viewportY;
						if (
							((typeof this.a == "object" ? !this.H(this.f, this.a) : $ !== v)
								? (y = this.r(l).filter((I) => I.line <= v).length)
								: this.a === a.Bottom
									? (y = this.r(l).length)
									: this.a === a.Top
										? (y = 0)
										: this.c
											? ((y = this.M(l)), this.a.dispose(), (this.c = !1))
											: l && this.u(this.a)
												? (y = this.M(!0))
												: (y = this.r(l).indexOf(this.a) + 1),
							y >= this.r(l).length)
						) {
							(this.a = a.Bottom), this.f.scrollToBottom(), this.t();
							return;
						}
						(this.a = this.r(l)[y]), this.w(this.a, b);
					}
					w(b, s) {
						const l = this.s(b);
						l ? this.revealCommand(l, s) : this.z(b, s);
					}
					z(b, s, l, y) {
						if (this.f) {
							if (!this.H(this.f, b) || y?.forceScroll) {
								const $ = this.getTargetScrollLine(o(b), s);
								this.f.scrollToLine($);
							}
							y?.hideDecoration ||
								(y?.bufferRange
									? this.G(y.bufferRange)
									: this.registerTemporaryDecoration(b, l, !0));
						}
					}
					C(b, s) {
						if (s === 0 && p(b)) return b;
						{
							const l = this.f?.registerMarker(
								-this.f.buffer.active.cursorY +
									o(b) -
									this.f.buffer.active.baseY +
									s,
							);
							if (l) return l;
							throw new Error(
								`Could not register marker with offset ${o(b)}, ${s}`,
							);
						}
					}
					revealCommand(b, s = h.Middle) {
						const l = "getOutput" in b ? b.marker : b.commandStartMarker;
						if (!this.f || !l) return;
						const y = o(l),
							$ = b.getPromptRowCount(),
							v = b.getCommandRowCount();
						this.z(y - ($ - 1), s, y + (v - 1));
					}
					revealRange(b) {
						this.z(b.start.y - 1, h.Middle, b.end.y - 1, {
							bufferRange: b,
							forceScroll: !!this.n.getValue(
								u.TerminalStickyScrollSettingId.Enabled,
							),
						});
					}
					showCommandGuide(b) {
						if (this.f) {
							if (!b) {
								this.j.clear(), (this.h = void 0);
								return;
							}
							if (this.h !== b && b.marker) {
								this.h = b;
								const s = (this.j.value = new i.$Zc());
								if (!b.executedMarker || !b.endMarker) return;
								const l = b.marker.line - (b.getPromptRowCount() - 1),
									y = o(b.endMarker) - l;
								if (y > 200) return;
								for (let $ = 0; $ < y; $++) {
									const v = this.f.registerDecoration({ marker: this.C(l, $) });
									if (v) {
										s.add(v);
										let S;
										s.add(
											v.onRender((I) => {
												S ||
													((S = I),
													I.classList.add("terminal-command-guide"),
													$ === 0 && I.classList.add("top"),
													$ === y - 1 && I.classList.add("bottom")),
													this.f?.element &&
														(I.style.marginLeft = `-${(0, m.getWindow)(this.f.element).getComputedStyle(this.f.element).paddingLeft}`);
											}),
										);
									}
								}
							}
						}
					}
					saveScrollState() {
						this.F = { viewportY: this.f?.buffer.active.viewportY ?? 0 };
					}
					restoreScrollState() {
						this.F &&
							this.f &&
							(this.f.scrollToLine(this.F.viewportY), (this.F = void 0));
					}
					G(b) {
						if (!this.f) return;
						this.t();
						const s = b.start.y,
							l = b.end.y - b.start.y + 1;
						for (let y = 0; y < l; y++) {
							const $ = this.f.registerDecoration({
								marker: this.C(s - 1, y),
								x: b.start.x - 1,
								width: b.end.x - 1 - (b.start.x - 1) + 1,
								overviewRulerOptions: void 0,
							});
							if ($) {
								this.g?.push($);
								let v;
								$.onRender((S) => {
									v || ((v = S), S.classList.add("terminal-range-highlight"));
								}),
									$.onDispose(() => {
										this.g = this.g?.filter((S) => S !== $);
									});
							}
						}
					}
					registerTemporaryDecoration(b, s, l) {
						if (!this.f) return;
						this.t();
						const y = this.q.getColorTheme().getColor(d.$sHb),
							$ = o(b),
							v = s ? o(s) - $ + 1 : 1;
						for (let S = 0; S < v; S++) {
							const I = this.f.registerDecoration({
								marker: this.C(b, S),
								width: this.f.cols,
								overviewRulerOptions:
									S === 0 ? { color: y?.toString() || "#a0a0a0cc" } : void 0,
							});
							if (I) {
								this.g?.push(I);
								let T;
								I.onRender((P) => {
									T
										? P.classList.add("terminal-scroll-highlight")
										: ((T = P),
											P.classList.add("terminal-scroll-highlight"),
											l && P.classList.add("terminal-scroll-highlight-outline"),
											S === 0 && P.classList.add("top"),
											S === v - 1 && P.classList.add("bottom")),
										this.f?.element &&
											(P.style.marginLeft = `-${(0, m.getWindow)(this.f.element).getComputedStyle(this.f.element).paddingLeft}`);
								}),
									I.onDispose(() => {
										this.g = this.g?.filter((P) => P !== I);
									}),
									l &&
										(0, E.$Nh)(350).then(() => {
											T &&
												T.classList.remove("terminal-scroll-highlight-outline");
										});
							}
						}
					}
					scrollToLine(b, s) {
						this.f?.scrollToLine(this.getTargetScrollLine(b, s));
					}
					getTargetScrollLine(b, s) {
						return this.f && s === h.Middle
							? Math.max(b - Math.floor(this.f.rows / 4), 0)
							: b;
					}
					H(b, s) {
						const l = b.buffer.active.viewportY,
							y = o(s);
						return y >= l && y < l + b.rows;
					}
					scrollToClosestMarker(b, s, l) {
						const y = this.m.get(w.TerminalCapability.BufferMarkDetection);
						if (!y) return;
						const $ = y.getMark(b);
						if (!$) return;
						const v = s ? y.getMark(s) : $;
						this.z($, h.Top, v, { hideDecoration: !l });
					}
					selectToPreviousMark() {
						this.f &&
							(this.b === null && (this.b = this.a),
							this.m.has(w.TerminalCapability.CommandDetection)
								? this.scrollToPreviousMark(h.Middle, !0, !0)
								: this.scrollToPreviousMark(h.Middle, !0, !1),
							g(this.f, this.a, this.b));
					}
					selectToNextMark() {
						this.f &&
							(this.b === null && (this.b = this.a),
							this.m.has(w.TerminalCapability.CommandDetection)
								? this.scrollToNextMark(h.Middle, !0, !0)
								: this.scrollToNextMark(h.Middle, !0, !1),
							g(this.f, this.a, this.b));
					}
					selectToPreviousLine() {
						this.f &&
							(this.b === null && (this.b = this.a),
							this.scrollToPreviousLine(this.f, h.Middle, !0),
							g(this.f, this.a, this.b));
					}
					selectToNextLine() {
						this.f &&
							(this.b === null && (this.b = this.a),
							this.scrollToNextLine(this.f, h.Middle, !0),
							g(this.f, this.a, this.b));
					}
					scrollToPreviousLine(b, s = h.Middle, l = !1) {
						if ((l || (this.b = null), this.a === a.Top)) {
							b.scrollToTop();
							return;
						}
						if (this.a === a.Bottom) this.a = this.I(b, this.J(b) - 1);
						else {
							const y = this.J(b);
							this.c && this.a.dispose(), (this.a = this.I(b, y - 1));
						}
						(this.c = !0), this.z(this.a, s);
					}
					scrollToNextLine(b, s = h.Middle, l = !1) {
						if ((l || (this.b = null), this.a === a.Bottom)) {
							b.scrollToBottom();
							return;
						}
						if (this.a === a.Top) this.a = this.I(b, this.J(b) + 1);
						else {
							const y = this.J(b);
							this.c && this.a.dispose(), (this.a = this.I(b, y + 1));
						}
						(this.c = !0), this.z(this.a, s);
					}
					I(b, s) {
						const l = b.registerMarker(s);
						if (!l) throw new Error(`Could not create marker for ${s}`);
						return l;
					}
					J(b) {
						if (this.a === a.Bottom) return 0;
						if (this.a === a.Top)
							return 0 - (b.buffer.active.baseY + b.buffer.active.cursorY);
						{
							let s = n(b, this.a);
							return (s -= b.buffer.active.baseY + b.buffer.active.cursorY), s;
						}
					}
					L(b = !1) {
						if (this.a === a.Top) return 0;
						if (this.a === a.Bottom) return this.r(b).length - 1;
						let s;
						for (s = this.r(b).length - 1; s >= 0; s--)
							if (this.r(b)[s].line < this.a.line) return s;
						return -1;
					}
					M(b = !1) {
						if (this.a === a.Top) return 0;
						if (this.a === a.Bottom) return this.r(b).length - 1;
						let s;
						for (s = 0; s < this.r(b).length; s++)
							if (this.r(b)[s].line > this.a.line) return s;
						return this.r(b).length;
					}
				};
				(e.$HHb = c), (e.$HHb = c = Ne([j(1, r.$gj), j(2, C.$iP)], c));
				function n(f, b) {
					return b === a.Bottom
						? f.buffer.active.baseY + f.rows - 1
						: b === a.Top
							? 0
							: b.line;
				}
				function g(f, b, s) {
					s === null && (s = a.Bottom);
					let l = n(f, b),
						y = n(f, s);
					if (l > y) {
						const $ = l;
						(l = y), (y = $);
					}
					(y -= 1), f.selectLines(l, y);
				}
				function p(f) {
					return typeof f != "number";
				}
				function o(f) {
					return p(f) ? f.line : f;
				}
			},
		)
