define(de[750], he([1, 0, 3, 493]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xsb = void 0),
				(i = mt(i));
			class w extends t.$1c {
				constructor() {
					super(), (this.f = !0);
				}
				shouldRender() {
					return this.f;
				}
				forceShouldRender() {
					this.f = !0;
				}
				h() {
					this.f = !0;
				}
				onDidRender() {
					this.f = !1;
				}
				onCompositionStart(C) {
					return !1;
				}
				onCompositionEnd(C) {
					return !1;
				}
				onConfigurationChanged(C) {
					return !1;
				}
				onCursorStateChanged(C) {
					return !1;
				}
				onDecorationsChanged(C) {
					return !1;
				}
				onFlushed(C) {
					return !1;
				}
				onFocusChanged(C) {
					return !1;
				}
				onLanguageConfigurationChanged(C) {
					return !1;
				}
				onLineMappingChanged(C) {
					return !1;
				}
				onLinesChanged(C) {
					return !1;
				}
				onLinesDeleted(C) {
					return !1;
				}
				onLinesInserted(C) {
					return !1;
				}
				onRevealRangeRequest(C) {
					return !1;
				}
				onScrollChanged(C) {
					return !1;
				}
				onThemeChanged(C) {
					return !1;
				}
				onTokensChanged(C) {
					return !1;
				}
				onTokensColorsChanged(C) {
					return !1;
				}
				onZonesChanged(C) {
					return !1;
				}
				handleEvents(C) {
					let d = !1;
					for (let m = 0, r = C.length; m < r; m++) {
						const u = C[m];
						switch (u.type) {
							case i.ViewEventType.ViewCompositionStart:
								this.onCompositionStart(u) && (d = !0);
								break;
							case i.ViewEventType.ViewCompositionEnd:
								this.onCompositionEnd(u) && (d = !0);
								break;
							case i.ViewEventType.ViewConfigurationChanged:
								this.onConfigurationChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewCursorStateChanged:
								this.onCursorStateChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewDecorationsChanged:
								this.onDecorationsChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewFlushed:
								this.onFlushed(u) && (d = !0);
								break;
							case i.ViewEventType.ViewFocusChanged:
								this.onFocusChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewLanguageConfigurationChanged:
								this.onLanguageConfigurationChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewLineMappingChanged:
								this.onLineMappingChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewLinesChanged:
								this.onLinesChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewLinesDeleted:
								this.onLinesDeleted(u) && (d = !0);
								break;
							case i.ViewEventType.ViewLinesInserted:
								this.onLinesInserted(u) && (d = !0);
								break;
							case i.ViewEventType.ViewRevealRangeRequest:
								this.onRevealRangeRequest(u) && (d = !0);
								break;
							case i.ViewEventType.ViewScrollChanged:
								this.onScrollChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewTokensChanged:
								this.onTokensChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewThemeChanged:
								this.onThemeChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewTokensColorsChanged:
								this.onTokensColorsChanged(u) && (d = !0);
								break;
							case i.ViewEventType.ViewZonesChanged:
								this.onZonesChanged(u) && (d = !0);
								break;
							default:
								console.info("View received unknown event: "), console.info(u);
						}
					}
					d && (this.f = !0);
				}
			}
			e.$Xsb = w;
		}),
		