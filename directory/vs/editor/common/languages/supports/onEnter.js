define(de[2723], he([1, 0, 29, 37, 532, 38]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6M = void 0),
				(i = mt(i));
			class C {
				constructor(m) {
					(m = m || {}),
						(m.brackets = m.brackets || [
							["(", ")"],
							["{", "}"],
							["[", "]"],
						]),
						(this.a = []),
						m.brackets.forEach((r) => {
							const u = C.c(r[0]),
								a = C.d(r[1]);
							u &&
								a &&
								this.a.push({
									open: r[0],
									openRegExp: u,
									close: r[1],
									closeRegExp: a,
								});
						}),
						(this.b = m.onEnterRules || []);
				}
				onEnter(m, r, u, a) {
					if (m >= E.EditorAutoIndentStrategy.Advanced)
						for (let h = 0, c = this.b.length; h < c; h++) {
							const n = this.b[h];
							if (
								[
									{ reg: n.beforeText, text: u },
									{ reg: n.afterText, text: a },
									{ reg: n.previousLineText, text: r },
								].every((p) =>
									p.reg ? ((p.reg.lastIndex = 0), p.reg.test(p.text)) : !0,
								)
							)
								return n.action;
						}
					if (
						m >= E.EditorAutoIndentStrategy.Brackets &&
						u.length > 0 &&
						a.length > 0
					)
						for (let h = 0, c = this.a.length; h < c; h++) {
							const n = this.a[h];
							if (n.openRegExp.test(u) && n.closeRegExp.test(a))
								return { indentAction: w.IndentAction.IndentOutdent };
						}
					if (m >= E.EditorAutoIndentStrategy.Brackets && u.length > 0) {
						for (let h = 0, c = this.a.length; h < c; h++)
							if (this.a[h].openRegExp.test(u))
								return { indentAction: w.IndentAction.Indent };
					}
					return null;
				}
				static c(m) {
					let r = i.$of(m);
					return (
						/\B/.test(r.charAt(0)) || (r = "\\b" + r), (r += "\\s*$"), C.e(r)
					);
				}
				static d(m) {
					let r = i.$of(m);
					return (
						/\B/.test(r.charAt(r.length - 1)) || (r = r + "\\b"),
						(r = "^\\s*" + r),
						C.e(r)
					);
				}
				static e(m) {
					try {
						return new RegExp(m);
					} catch (r) {
						return (0, t.$4)(r), null;
					}
				}
			}
			e.$6M = C;
		}),
		define(
			de[2724],
			he([1, 0, 6, 3, 195, 38, 98, 2577, 290, 751]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hwb = void 0);
				const u = 125;
				class a {
					constructor(g, p, o, f) {
						(g = g | 0),
							(p = p | 0),
							(o = o | 0),
							(f = f | 0),
							g < 0 && (g = 0),
							p < 0 && (p = 0),
							o < 0 && (o = 0),
							f < 0 && (f = 0),
							(this.width = g),
							(this.contentWidth = p),
							(this.scrollWidth = Math.max(g, p)),
							(this.height = o),
							(this.contentHeight = f),
							(this.scrollHeight = Math.max(o, f));
					}
					equals(g) {
						return (
							this.width === g.width &&
							this.contentWidth === g.contentWidth &&
							this.height === g.height &&
							this.contentHeight === g.contentHeight
						);
					}
				}
				class h extends i.$1c {
					constructor(g, p) {
						super(),
							(this.c = this.D(new t.$re())),
							(this.onDidContentSizeChange = this.c.event),
							(this.b = new a(0, 0, 0, 0)),
							(this.a = this.D(
								new w.$KK({
									forceIntegerValues: !0,
									smoothScrollDuration: g,
									scheduleAtNextAnimationFrame: p,
								}),
							)),
							(this.onDidScroll = this.a.onScroll);
					}
					getScrollable() {
						return this.a;
					}
					setSmoothScrollDuration(g) {
						this.a.setSmoothScrollDuration(g);
					}
					validateScrollPosition(g) {
						return this.a.validateScrollPosition(g);
					}
					getScrollDimensions() {
						return this.b;
					}
					setScrollDimensions(g) {
						if (this.b.equals(g)) return;
						const p = this.b;
						(this.b = g),
							this.a.setScrollDimensions(
								{
									width: g.width,
									scrollWidth: g.scrollWidth,
									height: g.height,
									scrollHeight: g.scrollHeight,
								},
								!0,
							);
						const o = p.contentWidth !== g.contentWidth,
							f = p.contentHeight !== g.contentHeight;
						(o || f) &&
							this.c.fire(
								new r.$Yvb(
									p.contentWidth,
									p.contentHeight,
									g.contentWidth,
									g.contentHeight,
								),
							);
					}
					getFutureScrollPosition() {
						return this.a.getFutureScrollPosition();
					}
					getCurrentScrollPosition() {
						return this.a.getCurrentScrollPosition();
					}
					setScrollPositionNow(g) {
						this.a.setScrollPositionNow(g);
					}
					setScrollPositionSmooth(g) {
						this.a.setScrollPositionSmooth(g);
					}
					hasPendingScrollAnimation() {
						return this.a.hasPendingScrollAnimation();
					}
				}
				class c extends i.$1c {
					constructor(g, p, o) {
						super(), (this.a = g);
						const f = this.a.options,
							b = f.get(E.EditorOption.layoutInfo),
							s = f.get(E.EditorOption.padding);
						(this.b = new d.$gwb(
							p,
							f.get(E.EditorOption.lineHeight),
							s.top,
							s.bottom,
						)),
							(this.c = 0),
							(this.f = 0),
							(this.g = this.D(new h(0, o))),
							this.h(),
							this.g.setScrollDimensions(new a(b.contentWidth, 0, b.height, 0)),
							(this.onDidScroll = this.g.onDidScroll),
							(this.onDidContentSizeChange = this.g.onDidContentSizeChange),
							this.n();
					}
					dispose() {
						super.dispose();
					}
					getScrollable() {
						return this.g.getScrollable();
					}
					onHeightMaybeChanged() {
						this.n();
					}
					h() {
						this.g.setSmoothScrollDuration(
							this.a.options.get(E.EditorOption.smoothScrolling) ? u : 0,
						);
					}
					onConfigurationChanged(g) {
						const p = this.a.options;
						if (
							(g.hasChanged(E.EditorOption.lineHeight) &&
								this.b.setLineHeight(p.get(E.EditorOption.lineHeight)),
							g.hasChanged(E.EditorOption.padding))
						) {
							const o = p.get(E.EditorOption.padding);
							this.b.setPadding(o.top, o.bottom);
						}
						if (g.hasChanged(E.EditorOption.layoutInfo)) {
							const o = p.get(E.EditorOption.layoutInfo),
								f = o.contentWidth,
								b = o.height,
								s = this.g.getScrollDimensions(),
								l = s.contentWidth;
							this.g.setScrollDimensions(
								new a(f, s.contentWidth, b, this.m(f, b, l)),
							);
						} else this.n();
						g.hasChanged(E.EditorOption.smoothScrolling) && this.h();
					}
					onFlushed(g) {
						this.b.onFlushed(g);
					}
					onLinesDeleted(g, p) {
						this.b.onLinesDeleted(g, p);
					}
					onLinesInserted(g, p) {
						this.b.onLinesInserted(g, p);
					}
					j(g, p) {
						const f = this.a.options.get(E.EditorOption.scrollbar);
						return f.horizontal === w.ScrollbarVisibility.Hidden || g >= p
							? 0
							: f.horizontalScrollbarSize;
					}
					m(g, p, o) {
						const f = this.a.options;
						let b = this.b.getLinesTotalHeight();
						return (
							f.get(E.EditorOption.scrollBeyondLastLine)
								? (b += Math.max(
										0,
										p -
											f.get(E.EditorOption.lineHeight) -
											f.get(E.EditorOption.padding).bottom,
									))
								: f.get(E.EditorOption.scrollbar)
										.ignoreHorizontalScrollbarInContentHeight ||
									(b += this.j(g, o)),
							b
						);
					}
					n() {
						const g = this.g.getScrollDimensions(),
							p = g.width,
							o = g.height,
							f = g.contentWidth;
						this.g.setScrollDimensions(
							new a(p, g.contentWidth, o, this.m(p, o, f)),
						);
					}
					getCurrentViewport() {
						const g = this.g.getScrollDimensions(),
							p = this.g.getCurrentScrollPosition();
						return new m.$Ysb(p.scrollTop, p.scrollLeft, g.width, g.height);
					}
					getFutureViewport() {
						const g = this.g.getScrollDimensions(),
							p = this.g.getFutureScrollPosition();
						return new m.$Ysb(p.scrollTop, p.scrollLeft, g.width, g.height);
					}
					q() {
						const g = this.a.options,
							p = this.c,
							o = g.get(E.EditorOption.wrappingInfo),
							f = g.get(E.EditorOption.fontInfo),
							b = g.get(E.EditorOption.layoutInfo);
						if (o.isViewportWrapping) {
							const s = g.get(E.EditorOption.minimap);
							return p > b.contentWidth + f.typicalHalfwidthCharacterWidth &&
								s.enabled &&
								s.side === "right"
								? p + b.verticalScrollbarWidth
								: p;
						} else {
							const s =
									g.get(E.EditorOption.scrollBeyondLastColumn) *
									f.typicalHalfwidthCharacterWidth,
								l = this.b.getWhitespaceMinWidth();
							return Math.max(p + s + b.verticalScrollbarWidth, l, this.f);
						}
					}
					setMaxLineWidth(g) {
						(this.c = g), this.r();
					}
					setOverlayWidgetsMinWidth(g) {
						(this.f = g), this.r();
					}
					r() {
						const g = this.g.getScrollDimensions();
						this.g.setScrollDimensions(
							new a(g.width, this.q(), g.height, g.contentHeight),
						),
							this.n();
					}
					saveState() {
						const g = this.g.getFutureScrollPosition(),
							p = g.scrollTop,
							o = this.b.getLineNumberAtOrAfterVerticalOffset(p),
							f = this.b.getWhitespaceAccumulatedHeightBeforeLineNumber(o);
						return {
							scrollTop: p,
							scrollTopWithoutViewZones: p - f,
							scrollLeft: g.scrollLeft,
						};
					}
					changeWhitespace(g) {
						const p = this.b.changeWhitespace(g);
						return p && this.onHeightMaybeChanged(), p;
					}
					getVerticalOffsetForLineNumber(g, p = !1) {
						return this.b.getVerticalOffsetForLineNumber(g, p);
					}
					getVerticalOffsetAfterLineNumber(g, p = !1) {
						return this.b.getVerticalOffsetAfterLineNumber(g, p);
					}
					isAfterLines(g) {
						return this.b.isAfterLines(g);
					}
					isInTopPadding(g) {
						return this.b.isInTopPadding(g);
					}
					isInBottomPadding(g) {
						return this.b.isInBottomPadding(g);
					}
					getLineNumberAtVerticalOffset(g) {
						return this.b.getLineNumberAtOrAfterVerticalOffset(g);
					}
					getWhitespaceAtVerticalOffset(g) {
						return this.b.getWhitespaceAtVerticalOffset(g);
					}
					getLinesViewportData() {
						const g = this.getCurrentViewport();
						return this.b.getLinesViewportData(g.top, g.top + g.height);
					}
					getLinesViewportDataAtScrollTop(g) {
						const p = this.g.getScrollDimensions();
						return (
							g + p.height > p.scrollHeight && (g = p.scrollHeight - p.height),
							g < 0 && (g = 0),
							this.b.getLinesViewportData(g, g + p.height)
						);
					}
					getWhitespaceViewportData() {
						const g = this.getCurrentViewport();
						return this.b.getWhitespaceViewportData(g.top, g.top + g.height);
					}
					getWhitespaces() {
						return this.b.getWhitespaces();
					}
					getContentWidth() {
						return this.g.getScrollDimensions().contentWidth;
					}
					getScrollWidth() {
						return this.g.getScrollDimensions().scrollWidth;
					}
					getContentHeight() {
						return this.g.getScrollDimensions().contentHeight;
					}
					getScrollHeight() {
						return this.g.getScrollDimensions().scrollHeight;
					}
					getCurrentScrollLeft() {
						return this.g.getCurrentScrollPosition().scrollLeft;
					}
					getCurrentScrollTop() {
						return this.g.getCurrentScrollPosition().scrollTop;
					}
					validateScrollPosition(g) {
						return this.g.validateScrollPosition(g);
					}
					setScrollPosition(g, p) {
						p === C.ScrollType.Immediate
							? this.g.setScrollPositionNow(g)
							: this.g.setScrollPositionSmooth(g);
					}
					hasPendingScrollAnimation() {
						return this.g.hasPendingScrollAnimation();
					}
					deltaScrollNow(g, p) {
						const o = this.g.getCurrentScrollPosition();
						this.g.setScrollPositionNow({
							scrollLeft: o.scrollLeft + g,
							scrollTop: o.scrollTop + p,
						});
					}
				}
				e.$hwb = c;
			},
		),
		define(
			de[766],
			he([1, 0, 6, 27, 3, 12, 38]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Mb = e.$5Mb = e.$4Mb = e.$3Mb = void 0),
					(E = mt(E));
				function d(c, n) {
					return !!c[n];
				}
				class m {
					constructor(n, g) {
						(this.target = n.target),
							(this.isLeftClick = n.event.leftButton),
							(this.isMiddleClick = n.event.middleButton),
							(this.isRightClick = n.event.rightButton),
							(this.hasTriggerModifier = d(n.event, g.triggerModifier)),
							(this.hasSideBySideModifier = d(
								n.event,
								g.triggerSideBySideModifier,
							)),
							(this.isNoneOrSingleMouseDown = n.event.detail <= 1);
					}
				}
				e.$3Mb = m;
				class r {
					constructor(n, g) {
						(this.keyCodeIsTriggerKey = n.keyCode === g.triggerKey),
							(this.keyCodeIsSideBySideKey =
								n.keyCode === g.triggerSideBySideKey),
							(this.hasTriggerModifier = d(n, g.triggerModifier));
					}
				}
				e.$4Mb = r;
				class u {
					constructor(n, g, p, o) {
						(this.triggerKey = n),
							(this.triggerModifier = g),
							(this.triggerSideBySideKey = p),
							(this.triggerSideBySideModifier = o);
					}
					equals(n) {
						return (
							this.triggerKey === n.triggerKey &&
							this.triggerModifier === n.triggerModifier &&
							this.triggerSideBySideKey === n.triggerSideBySideKey &&
							this.triggerSideBySideModifier === n.triggerSideBySideModifier
						);
					}
				}
				e.$5Mb = u;
				function a(c) {
					return c === "altKey"
						? E.$m
							? new u(i.KeyCode.Meta, "metaKey", i.KeyCode.Alt, "altKey")
							: new u(i.KeyCode.Ctrl, "ctrlKey", i.KeyCode.Alt, "altKey")
						: E.$m
							? new u(i.KeyCode.Alt, "altKey", i.KeyCode.Meta, "metaKey")
							: new u(i.KeyCode.Alt, "altKey", i.KeyCode.Ctrl, "ctrlKey");
				}
				class h extends w.$1c {
					constructor(n, g) {
						super(),
							(this.a = this.D(new t.$re())),
							(this.onMouseMoveOrRelevantKeyDown = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onExecute = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onCancel = this.c.event),
							(this.f = n),
							(this.g =
								g?.extractLineNumberFromMouseEvent ??
								((p) =>
									p.target.position ? p.target.position.lineNumber : 0)),
							(this.h = a(
								this.f.getOption(C.EditorOption.multiCursorModifier),
							)),
							(this.j = null),
							(this.m = !1),
							(this.n = 0),
							this.D(
								this.f.onDidChangeConfiguration((p) => {
									if (p.hasChanged(C.EditorOption.multiCursorModifier)) {
										const o = a(
											this.f.getOption(C.EditorOption.multiCursorModifier),
										);
										if (this.h.equals(o)) return;
										(this.h = o),
											(this.j = null),
											(this.m = !1),
											(this.n = 0),
											this.c.fire();
									}
								}),
							),
							this.D(this.f.onMouseMove((p) => this.r(new m(p, this.h)))),
							this.D(this.f.onMouseDown((p) => this.s(new m(p, this.h)))),
							this.D(this.f.onMouseUp((p) => this.t(new m(p, this.h)))),
							this.D(this.f.onKeyDown((p) => this.u(new r(p, this.h)))),
							this.D(this.f.onKeyUp((p) => this.w(new r(p, this.h)))),
							this.D(this.f.onMouseDrag(() => this.y())),
							this.D(this.f.onDidChangeCursorSelection((p) => this.q(p))),
							this.D(this.f.onDidChangeModel((p) => this.y())),
							this.D(this.f.onDidChangeModelContent(() => this.y())),
							this.D(
								this.f.onDidScrollChange((p) => {
									(p.scrollTopChanged || p.scrollLeftChanged) && this.y();
								}),
							);
					}
					q(n) {
						n.selection &&
							n.selection.startColumn !== n.selection.endColumn &&
							this.y();
					}
					r(n) {
						(this.j = n), this.a.fire([n, null]);
					}
					s(n) {
						(this.m = n.hasTriggerModifier), (this.n = this.g(n));
					}
					t(n) {
						const g = this.g(n);
						this.m && this.n && this.n === g && this.b.fire(n);
					}
					u(n) {
						this.j &&
						(n.keyCodeIsTriggerKey ||
							(n.keyCodeIsSideBySideKey && n.hasTriggerModifier))
							? this.a.fire([this.j, n])
							: n.hasTriggerModifier && this.c.fire();
					}
					w(n) {
						n.keyCodeIsTriggerKey && this.c.fire();
					}
					y() {
						(this.j = null), (this.m = !1), this.c.fire();
					}
				}
				e.$6Mb = h;
			},
		),
		define(
			de[601],
			he([1, 0, 15, 29, 6, 3, 38]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sCb = e.$rCb = e.HoverStartSource = e.HoverStartMode = void 0);
				var d;
				(function (h) {
					(h[(h.Idle = 0)] = "Idle"),
						(h[(h.FirstWait = 1)] = "FirstWait"),
						(h[(h.SecondWait = 2)] = "SecondWait"),
						(h[(h.WaitingForAsync = 3)] = "WaitingForAsync"),
						(h[(h.WaitingForAsyncShowingLoading = 4)] =
							"WaitingForAsyncShowingLoading");
				})(d || (d = {}));
				var m;
				(function (h) {
					(h[(h.Delayed = 0)] = "Delayed"),
						(h[(h.Immediate = 1)] = "Immediate");
				})(m || (e.HoverStartMode = m = {}));
				var r;
				(function (h) {
					(h[(h.Mouse = 0)] = "Mouse"), (h[(h.Keyboard = 1)] = "Keyboard");
				})(r || (e.HoverStartSource = r = {}));
				class u {
					constructor(c, n, g) {
						(this.value = c),
							(this.isComplete = n),
							(this.hasLoadingMessage = g);
					}
				}
				e.$rCb = u;
				class a extends E.$1c {
					constructor(c, n) {
						super(),
							(this.n = c),
							(this.q = n),
							(this.a = this.D(new w.$re())),
							(this.onResult = this.a.event),
							(this.b = this.D(new t.$Yh(() => this.y(), 0))),
							(this.c = this.D(new t.$Yh(() => this.z(), 0))),
							(this.f = this.D(new t.$Yh(() => this.C(), 0))),
							(this.g = d.Idle),
							(this.h = null),
							(this.j = !1),
							(this.m = []);
					}
					dispose() {
						this.h && (this.h.cancel(), (this.h = null)), super.dispose();
					}
					get r() {
						return this.n.getOption(C.EditorOption.hover).delay;
					}
					get s() {
						return this.r / 2;
					}
					get t() {
						return this.r - this.s;
					}
					get u() {
						return 3 * this.r;
					}
					w(c, n = !0) {
						(this.g = c), n && this.F();
					}
					y() {
						this.w(d.SecondWait),
							this.c.schedule(this.t),
							this.q.computeAsync
								? ((this.j = !1),
									(this.h = (0, t.$ci)((c) => this.q.computeAsync(c))),
									(async () => {
										try {
											for await (const c of this.h)
												c && (this.m.push(c), this.F());
											(this.j = !0),
												(this.g === d.WaitingForAsync ||
													this.g === d.WaitingForAsyncShowingLoading) &&
													this.w(d.Idle);
										} catch (c) {
											(0, i.$4)(c);
										}
									})())
								: (this.j = !0);
					}
					z() {
						this.q.computeSync &&
							(this.m = this.m.concat(this.q.computeSync())),
							this.w(this.j ? d.Idle : d.WaitingForAsync);
					}
					C() {
						this.g === d.WaitingForAsync &&
							this.w(d.WaitingForAsyncShowingLoading);
					}
					F() {
						if (this.g === d.FirstWait || this.g === d.SecondWait) return;
						const c = this.g === d.Idle,
							n = this.g === d.WaitingForAsyncShowingLoading;
						this.a.fire(new u(this.m.slice(0), c, n));
					}
					start(c) {
						if (c === m.Delayed)
							this.g === d.Idle &&
								(this.w(d.FirstWait),
								this.b.schedule(this.s),
								this.f.schedule(this.u));
						else
							switch (this.g) {
								case d.Idle:
									this.y(), this.c.cancel(), this.z();
									break;
								case d.SecondWait:
									this.c.cancel(), this.z();
									break;
							}
					}
					cancel() {
						this.b.cancel(),
							this.c.cancel(),
							this.f.cancel(),
							this.h && (this.h.cancel(), (this.h = null)),
							(this.m = []),
							this.w(d.Idle, !1);
					}
				}
				e.$sCb = a;
			},
		),
		define(
			de[2725],
			he([1, 0, 24, 601, 368, 15]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VDb = void 0);
				class C {
					get anchor() {
						return this.a;
					}
					set anchor(m) {
						this.a = m;
					}
					get shouldFocus() {
						return this.b;
					}
					set shouldFocus(m) {
						this.b = m;
					}
					get source() {
						return this.c;
					}
					set source(m) {
						this.c = m;
					}
					get insistOnKeepingHoverVisible() {
						return this.e;
					}
					set insistOnKeepingHoverVisible(m) {
						this.e = m;
					}
					constructor(m, r) {
						(this.f = m),
							(this.g = r),
							(this.a = null),
							(this.b = !1),
							(this.c = i.HoverStartSource.Mouse),
							(this.e = !1);
					}
					static h(m, r) {
						if (r.type !== w.HoverAnchorType.Range && !r.supportsMarkerHover)
							return [];
						const u = m.getModel(),
							a = r.range.startLineNumber;
						if (a > u.getLineCount()) return [];
						const h = u.getLineMaxColumn(a);
						return m.getLineDecorations(a).filter((c) => {
							if (c.options.isWholeLine) return !0;
							const n = c.range.startLineNumber === a ? c.range.startColumn : 1,
								g = c.range.endLineNumber === a ? c.range.endColumn : h;
							if (c.options.showIfCollapsed) {
								if (n > r.range.startColumn + 1 || r.range.endColumn - 1 > g)
									return !1;
							} else if (n > r.range.startColumn || r.range.endColumn > g)
								return !1;
							return !0;
						});
					}
					computeAsync(m) {
						const r = this.a;
						if (!this.f.hasModel() || !r) return E.$ai.EMPTY;
						const u = C.h(this.f, r);
						return E.$ai.merge(
							this.g.map((a) =>
								a.computeAsync ? a.computeAsync(r, u, m) : E.$ai.EMPTY,
							),
						);
					}
					computeSync() {
						if (!this.f.hasModel() || !this.a) return [];
						const m = C.h(this.f, this.a);
						let r = [];
						for (const u of this.g) r = r.concat(u.computeSync(this.a, m));
						return (0, t.$Lb)(r);
					}
				}
				e.$VDb = C;
			},
		),
		define(
			de[2726],
			he([1, 0, 930, 3, 56, 38, 48, 7]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UDb = void 0),
					(d = mt(d));
				const m = 30,
					r = 24;
				class u extends i.$1c {
					constructor(h, c = new d.$pgb(10, 10)) {
						super(),
							(this.f = h),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.a = this.D(new t.$dpb())),
							(this.b = null),
							(this.c = !1),
							(this.a.domNode.style.position = "absolute"),
							(this.a.minSize = d.$pgb.lift(c)),
							this.a.layout(c.height, c.width),
							this.a.enableSashes(!0, !0, !0, !0),
							this.D(
								this.a.onDidResize((n) => {
									this.m(new d.$pgb(n.dimension.width, n.dimension.height)),
										n.done && (this.c = !1);
								}),
							),
							this.D(
								this.a.onDidWillResize(() => {
									this.c = !0;
								}),
							);
					}
					get isResizing() {
						return this.c;
					}
					getDomNode() {
						return this.a.domNode;
					}
					getPosition() {
						return this.b;
					}
					get position() {
						return this.b?.position ? C.$hL.lift(this.b.position) : void 0;
					}
					g(h) {
						const c = this.f.getDomNode(),
							n = this.f.getScrolledVisiblePosition(h);
						return !c || !n ? void 0 : d.$tgb(c).top + n.top - m;
					}
					h(h) {
						const c = this.f.getDomNode(),
							n = this.f.getScrolledVisiblePosition(h);
						if (!c || !n) return;
						const g = d.$tgb(c),
							p = d.$ogb(c.ownerDocument.body),
							o = g.top + n.top + n.height;
						return p.height - o - r;
					}
					j(h, c) {
						const n = Math.min(this.h(c) ?? 1 / 0, h),
							g = Math.min(this.g(c) ?? 1 / 0, h),
							p = Math.min(Math.max(g, n), h),
							o = Math.min(h, p);
						let f;
						return (
							this.f.getOption(E.EditorOption.hover).above
								? (f =
										o <= g
											? w.ContentWidgetPositionPreference.ABOVE
											: w.ContentWidgetPositionPreference.BELOW)
								: (f =
										o <= n
											? w.ContentWidgetPositionPreference.BELOW
											: w.ContentWidgetPositionPreference.ABOVE),
							f === w.ContentWidgetPositionPreference.ABOVE
								? this.a.enableSashes(!0, !0, !1, !1)
								: this.a.enableSashes(!1, !0, !0, !1),
							f
						);
					}
					m(h) {
						this.a.layout(h.height, h.width);
					}
				}
				e.$UDb = u;
			},
		),
		define(
			de[1608],
			he([1, 0, 15, 29, 6, 3, 38, 654, 74, 1182]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7jc = void 0),
					(m = mt(m));
				var u;
				(function (c) {
					let n;
					(function (o) {
						(o[(o.Default = 0)] = "Default"),
							(o[(o.Active = 1)] = "Active"),
							(o[(o.Pending = 2)] = "Pending");
					})((n = c.Type || (c.Type = {}))),
						(c.Default = { type: n.Default });
					class g {
						constructor(f, b) {
							(this.request = f),
								(this.previouslyActiveHints = b),
								(this.type = n.Pending);
						}
					}
					c.Pending = g;
					class p {
						constructor(f) {
							(this.hints = f), (this.type = n.Active);
						}
					}
					c.Active = p;
				})(u || (u = {}));
				class a extends E.$1c {
					static {
						this.a = 120;
					}
					constructor(n, g, p = a.a) {
						super(),
							(this.b = this.D(new w.$re())),
							(this.onChangedHints = this.b.event),
							(this.g = !1),
							(this.h = u.Default),
							(this.j = []),
							(this.m = this.D(new E.$2c())),
							(this.n = new d.$OL()),
							(this.q = new d.$OL()),
							(this.s = 0),
							(this.c = n),
							(this.f = g),
							(this.r = new t.$Jh(p)),
							this.D(this.c.onDidBlurEditorWidget(() => this.cancel())),
							this.D(this.c.onDidChangeConfiguration(() => this.I())),
							this.D(this.c.onDidChangeModel((o) => this.C())),
							this.D(this.c.onDidChangeModelLanguage((o) => this.C())),
							this.D(this.c.onDidChangeCursorSelection((o) => this.G(o))),
							this.D(this.c.onDidChangeModelContent((o) => this.H())),
							this.D(this.f.onDidChange(this.C, this)),
							this.D(this.c.onDidType((o) => this.F(o))),
							this.I(),
							this.C();
					}
					get t() {
						return this.h;
					}
					set t(n) {
						this.h.type === u.Type.Pending && this.h.request.cancel(),
							(this.h = n);
					}
					cancel(n = !1) {
						(this.t = u.Default), this.r.cancel(), n || this.b.fire(void 0);
					}
					trigger(n, g) {
						const p = this.c.getModel();
						if (!p || !this.f.has(p)) return;
						const o = ++this.s;
						this.j.push(n), this.r.trigger(() => this.w(o), g).catch(i.$4);
					}
					next() {
						if (this.t.type !== u.Type.Active) return;
						const n = this.t.hints.signatures.length,
							g = this.t.hints.activeSignature,
							p = g % n === n - 1,
							o = this.c.getOption(C.EditorOption.parameterHints).cycle;
						if ((n < 2 || p) && !o) {
							this.cancel();
							return;
						}
						this.u(p && o ? 0 : g + 1);
					}
					previous() {
						if (this.t.type !== u.Type.Active) return;
						const n = this.t.hints.signatures.length,
							g = this.t.hints.activeSignature,
							p = g === 0,
							o = this.c.getOption(C.EditorOption.parameterHints).cycle;
						if ((n < 2 || p) && !o) {
							this.cancel();
							return;
						}
						this.u(p && o ? n - 1 : g - 1);
					}
					u(n) {
						this.t.type === u.Type.Active &&
							((this.t = new u.Active({ ...this.t.hints, activeSignature: n })),
							this.b.fire(this.t.hints));
					}
					async w(n) {
						const g =
								this.t.type === u.Type.Active || this.t.type === u.Type.Pending,
							p = this.y();
						if ((this.cancel(!0), this.j.length === 0)) return !1;
						const o = this.j.reduce(h);
						this.j = [];
						const f = {
							triggerKind: o.triggerKind,
							triggerCharacter: o.triggerCharacter,
							isRetrigger: g,
							activeSignatureHelp: p,
						};
						if (!this.c.hasModel()) return !1;
						const b = this.c.getModel(),
							s = this.c.getPosition();
						this.t = new u.Pending(
							(0, t.$zh)((l) => (0, r.$6jc)(this.f, b, s, f, l)),
							p,
						);
						try {
							const l = await this.t.request;
							return n !== this.s
								? (l?.dispose(), !1)
								: !l || !l.value.signatures || l.value.signatures.length === 0
									? (l?.dispose(), this.m.clear(), this.cancel(), !1)
									: ((this.t = new u.Active(l.value)),
										(this.m.value = l),
										this.b.fire(this.t.hints),
										!0);
						} catch (l) {
							return n === this.s && (this.t = u.Default), (0, i.$4)(l), !1;
						}
					}
					y() {
						switch (this.t.type) {
							case u.Type.Active:
								return this.t.hints;
							case u.Type.Pending:
								return this.t.previouslyActiveHints;
							default:
								return;
						}
					}
					get z() {
						return (
							this.t.type === u.Type.Active ||
							this.t.type === u.Type.Pending ||
							this.r.isTriggered()
						);
					}
					C() {
						this.cancel(), this.n.clear(), this.q.clear();
						const n = this.c.getModel();
						if (n)
							for (const g of this.f.ordered(n)) {
								for (const p of g.signatureHelpTriggerCharacters || [])
									if (p.length) {
										const o = p.charCodeAt(0);
										this.n.add(o), this.q.add(o);
									}
								for (const p of g.signatureHelpRetriggerCharacters || [])
									p.length && this.q.add(p.charCodeAt(0));
							}
					}
					F(n) {
						if (!this.g) return;
						const g = n.length - 1,
							p = n.charCodeAt(g);
						(this.n.has(p) || (this.z && this.q.has(p))) &&
							this.trigger({
								triggerKind: m.SignatureHelpTriggerKind.TriggerCharacter,
								triggerCharacter: n.charAt(g),
							});
					}
					G(n) {
						n.source === "mouse"
							? this.cancel()
							: this.z &&
								this.trigger({
									triggerKind: m.SignatureHelpTriggerKind.ContentChange,
								});
					}
					H() {
						this.z &&
							this.trigger({
								triggerKind: m.SignatureHelpTriggerKind.ContentChange,
							});
					}
					I() {
						(this.g = this.c.getOption(C.EditorOption.parameterHints).enabled),
							this.g || this.cancel();
					}
					dispose() {
						this.cancel(!0), super.dispose();
					}
				}
				e.$7jc = a;
				function h(c, n) {
					switch (n.triggerKind) {
						case m.SignatureHelpTriggerKind.Invoke:
							return n;
						case m.SignatureHelpTriggerKind.ContentChange:
							return c;
						case m.SignatureHelpTriggerKind.TriggerCharacter:
						default:
							return n;
					}
				}
			},
		),
		define(
			de[1185],
			he([1, 0, 7, 433, 3, 77, 319, 542, 38]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ujc = void 0);
				class r extends w.$1c {
					static get(h) {
						return h.getContribution(r.ID);
					}
					static {
						this.ID = "editor.contrib.placeholderText";
					}
					constructor(h) {
						super(),
							(this.j = h),
							(this.a = (0, d.$Uwb)(this.j)),
							(this.b = this.a.getOption(m.EditorOption.placeholder)),
							(this.c = (0, E.derivedOpts)(
								{ owner: this, equalsFn: i.$ed },
								(c) => {
									const n = this.b.read(c);
									if (n && this.a.valueIsEmpty.read(c))
										return { placeholder: n };
								},
							)),
							(this.f = u(this, (c) => this.c.read(c)?.placeholder !== void 0)),
							(this.g = (0, C.$Xd)((c, n) => {
								if (!this.f.read(c)) return;
								const g = (0, t.h)("div.editorPlaceholder");
								n.add(
									(0, E.autorun)((p) => {
										const o = this.c.read(p),
											f = o?.placeholder !== void 0;
										(g.root.style.display = f ? "block" : "none"),
											(g.root.innerText = o?.placeholder ?? "");
									}),
								),
									n.add(
										(0, E.autorun)((p) => {
											const o = this.a.layoutInfo.read(p);
											(g.root.style.left = `${o.contentLeft}px`),
												(g.root.style.width =
													o.contentWidth - o.verticalScrollbarWidth + "px"),
												(g.root.style.top = `${this.j.getTopForLineNumber(0)}px`);
										}),
									),
									n.add(
										(0, E.autorun)((p) => {
											(g.root.style.fontFamily = this.a
												.getOption(m.EditorOption.fontFamily)
												.read(p)),
												(g.root.style.fontSize =
													this.a.getOption(m.EditorOption.fontSize).read(p) +
													"px"),
												(g.root.style.lineHeight =
													this.a.getOption(m.EditorOption.lineHeight).read(p) +
													"px");
										}),
									),
									n.add(
										this.a.createOverlayWidget({
											allowEditorOverflow: !1,
											minContentWidthInPx: (0, E.constObservable)(0),
											position: (0, E.constObservable)(null),
											domNode: g.root,
										}),
									);
							})),
							this.g.recomputeInitiallyAndOnChange(this.B);
					}
				}
				e.$Ujc = r;
				function u(a, h) {
					return (0, E.derivedObservableWithCache)(a, (c, n) =>
						n === !0 ? !0 : h(c),
					);
				}
			},
		),
		