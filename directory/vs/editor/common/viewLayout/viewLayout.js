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
		