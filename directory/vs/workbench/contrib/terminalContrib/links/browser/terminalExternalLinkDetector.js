define(de[3156], he([1, 0, 562]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dWc = void 0);
			class i {
				constructor(E, C, d) {
					(this.id = E),
						(this.xterm = C),
						(this.a = d),
						(this.maxLinkLength = 2e3);
				}
				async detect(E, C, d) {
					const m = (0, t.$_Vc)(
						this.xterm.buffer.active,
						C,
						d,
						this.xterm.cols,
					);
					if (m === "" || m.length > this.maxLinkLength) return [];
					const r = await this.a(m);
					return r
						? r.map((a) => {
								const h = (0, t.$0Vc)(
									E,
									this.xterm.cols,
									{
										startColumn: a.startIndex + 1,
										startLineNumber: 1,
										endColumn: a.startIndex + a.length + 1,
										endLineNumber: 1,
									},
									C,
								);
								return {
									text:
										m.substring(a.startIndex, a.startIndex + a.length) || "",
									label: a.label,
									bufferRange: h,
									type: { id: this.id },
									activate: a.activate,
								};
							})
						: [];
				}
			}
			e.$dWc = i;
		}),
		define(
			de[3157],
			he([1, 0, 3, 7, 15, 562, 12, 6, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eWc = void 0),
					(i = mt(i));
				let r = class extends t.$Zc {
					get onInvalidated() {
						return this.c.event;
					}
					get type() {
						return this.r;
					}
					constructor(a, h, c, n, g, p, o, f, b, s, l, y, $) {
						super(),
							(this.h = a),
							(this.range = h),
							(this.text = c),
							(this.uri = n),
							(this.parsedLink = g),
							(this.actions = p),
							(this.j = o),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.label = l),
							(this.r = y),
							(this.s = $),
							(this.c = new d.$re()),
							(this.decorations = { pointerCursor: !1, underline: this.q });
					}
					dispose() {
						super.dispose(),
							this.b?.dispose(),
							(this.b = void 0),
							this.a?.dispose(),
							(this.a = void 0);
					}
					activate(a, h) {
						this.asyncActivate = this.m(a, h);
					}
					hover(a, h) {
						const c = i.getWindow(a),
							n = c.document;
						(this.b = new t.$Zc()),
							this.b.add(
								i.$0fb(n, "keydown", (p) => {
									!p.repeat && this.z(p) && this.t();
								}),
							),
							this.b.add(
								i.$0fb(n, "keyup", (p) => {
									!p.repeat && !this.z(p) && this.u();
								}),
							),
							this.b.add(
								this.h.onRender((p) => {
									const o = this.range.start.y - this.j;
									o >= p.start && o <= p.end && this.c.fire();
								}),
							),
							this.q &&
								((this.a = new w.$Yh(() => {
									this.n(
										this,
										(0, E.$$Vc)(this.range, this.j),
										this.q ? () => this.t() : void 0,
										this.q ? () => this.u() : void 0,
									),
										this.a?.dispose(),
										(this.a = void 0);
								}, this.s.getValue("workbench.hover.delay"))),
								this.add(this.a),
								this.a.schedule());
						const g = { x: a.pageX, y: a.pageY };
						this.b.add(
							i.$0fb(n, i.$$gb.MOUSE_MOVE, (p) => {
								this.z(p) ? this.t() : this.u(),
									(Math.abs(p.pageX - g.x) > c.devicePixelRatio * 2 ||
										Math.abs(p.pageY - g.y) > c.devicePixelRatio * 2) &&
										((g.x = p.pageX), (g.y = p.pageY), this.a?.schedule());
							}),
						);
					}
					leave() {
						this.b?.dispose(),
							(this.b = void 0),
							this.a?.dispose(),
							(this.a = void 0);
					}
					t() {
						this.decorations.pointerCursor ||
							(this.decorations.pointerCursor = !0),
							this.decorations.underline || (this.decorations.underline = !0);
					}
					u() {
						this.decorations.pointerCursor &&
							(this.decorations.pointerCursor = !1),
							this.decorations.underline !== this.q &&
								(this.decorations.underline = this.q);
					}
					z(a) {
						return this.s.getValue("editor.multiCursorModifier") === "ctrlCmd"
							? !!a.altKey
							: C.$m
								? a.metaKey
								: a.ctrlKey;
					}
				};
				(e.$eWc = r), (e.$eWc = r = Ne([j(12, m.$gj)], r));
			},
		),
		define(
			de[3158],
			he([1, 0, 6, 3, 4, 5, 513, 3157]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fWc = void 0);
				let m = class extends i.$1c {
					constructor(u, a) {
						super(),
							(this.f = u),
							(this.g = a),
							(this.b = this.D(new t.$re())),
							(this.onDidActivateLink = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onDidShowHover = this.c.event),
							(this.h = new Map());
					}
					async provideLinks(u, a) {
						let h = this.h.get(u);
						if (h) {
							await h, a(this.a);
							return;
						}
						if (this.a) for (const c of this.a) c.dispose();
						(h = this.j(u)),
							this.h.set(u, h),
							(this.a = await h),
							this.h.delete(u),
							a(this.a);
					}
					async j(u) {
						const a = [];
						let h = u - 1,
							c = h;
						const n = [this.f.xterm.buffer.active.getLine(h)],
							g = Math.max(this.f.maxLinkLength, this.f.xterm.cols),
							p = Math.ceil(g / this.f.xterm.cols),
							o = Math.max(h - p, 0),
							f = Math.min(c + p, this.f.xterm.buffer.active.length);
						for (; h >= o && this.f.xterm.buffer.active.getLine(h)?.isWrapped; )
							n.unshift(this.f.xterm.buffer.active.getLine(h - 1)), h--;
						for (
							;
							c < f && this.f.xterm.buffer.active.getLine(c + 1)?.isWrapped;
						)
							n.push(this.f.xterm.buffer.active.getLine(c + 1)), c++;
						const b = await this.f.detect(n, h, c);
						for (const s of b)
							a.push(
								this.m(s, async (l) => this.b.fire({ link: s, event: l })),
							);
						return a;
					}
					m(u, a) {
						return (
							!u.disableTrimColon &&
								u.text.length > 0 &&
								u.text.charAt(u.text.length - 1) === ":" &&
								((u.text = u.text.slice(0, -1)), u.bufferRange.end.x--),
							this.g.createInstance(
								d.$eWc,
								this.f.xterm,
								u.bufferRange,
								u.text,
								u.uri,
								u.parsedLink,
								u.actions,
								this.f.xterm.buffer.active.viewportY,
								a,
								(h, c, n, g) =>
									this.c.fire({
										link: h,
										viewportRange: c,
										modifierDownCallback: n,
										modifierUpCallback: g,
									}),
								u.type !== C.TerminalBuiltinLinkType.Search,
								u.label || this.n(u.type),
								u.type,
							)
						);
					}
					n(u) {
						switch (u) {
							case C.TerminalBuiltinLinkType.Search:
								return (0, w.localize)(10532, null);
							case C.TerminalBuiltinLinkType.LocalFile:
								return (0, w.localize)(10533, null);
							case C.TerminalBuiltinLinkType.LocalFolderInWorkspace:
								return (0, w.localize)(10534, null);
							case C.TerminalBuiltinLinkType.LocalFolderOutsideWorkspace:
								return (0, w.localize)(10535, null);
							case C.TerminalBuiltinLinkType.Url:
							default:
								return (0, w.localize)(10536, null);
						}
					}
				};
				(e.$fWc = m), (e.$fWc = m = Ne([j(1, E.$Li)], m));
			},
		),
		