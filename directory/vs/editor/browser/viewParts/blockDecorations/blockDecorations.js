define(de[2714], he([1, 0, 194, 303, 38, 2262]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hvb = void 0);
			class E extends i.$yub {
				constructor(d) {
					super(d),
						(this.a = []),
						(this.b = -1),
						(this.c = 0),
						(this.domNode = (0, t.$Shb)(document.createElement("div"))),
						this.domNode.setAttribute("role", "presentation"),
						this.domNode.setAttribute("aria-hidden", "true"),
						this.domNode.setClassName("blockDecorations-container"),
						this.g();
				}
				g() {
					let d = !1;
					const r = this._context.configuration.options.get(
							w.EditorOption.layoutInfo,
						),
						u = r.contentWidth - r.verticalScrollbarWidth;
					this.b !== u && ((this.b = u), (d = !0));
					const a = r.contentLeft;
					return this.c !== a && ((this.c = a), (d = !0)), d;
				}
				dispose() {
					super.dispose();
				}
				onConfigurationChanged(d) {
					return this.g();
				}
				onScrollChanged(d) {
					return d.scrollTopChanged || d.scrollLeftChanged;
				}
				onDecorationsChanged(d) {
					return !0;
				}
				onZonesChanged(d) {
					return !0;
				}
				prepareRender(d) {}
				render(d) {
					let m = 0;
					const r = d.getDecorationsInViewport();
					for (const u of r) {
						if (!u.options.blockClassName) continue;
						let a = this.a[m];
						a ||
							((a = this.a[m] = (0, t.$Shb)(document.createElement("div"))),
							this.domNode.appendChild(a));
						let h, c;
						u.options.blockIsAfterEnd
							? ((h = d.getVerticalOffsetAfterLineNumber(
									u.range.endLineNumber,
									!1,
								)),
								(c = d.getVerticalOffsetAfterLineNumber(
									u.range.endLineNumber,
									!0,
								)))
							: ((h = d.getVerticalOffsetForLineNumber(
									u.range.startLineNumber,
									!0,
								)),
								(c =
									u.range.isEmpty() && !u.options.blockDoesNotCollapse
										? d.getVerticalOffsetForLineNumber(
												u.range.startLineNumber,
												!1,
											)
										: d.getVerticalOffsetAfterLineNumber(
												u.range.endLineNumber,
												!0,
											)));
						const [n, g, p, o] = u.options.blockPadding ?? [0, 0, 0, 0];
						a.setClassName(
							"blockDecorations-block " + u.options.blockClassName,
						),
							a.setLeft(this.c - o),
							a.setWidth(this.b + o + g),
							a.setTop(h - d.scrollTop - n),
							a.setHeight(c - h + n + p),
							m++;
					}
					for (let u = m; u < this.a.length; u++) this.a[u].domNode.remove();
					this.a.length = m;
				}
			}
			e.$hvb = E;
		}),
		