define(de[1251], he([1, 0, 7, 3, 77, 507]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3Zb = void 0);
			class C extends i.$1c {
				constructor(r, u, a) {
					super(),
						(this.m = r),
						(this.n = u),
						(this.q = a),
						(this.a = (0, w.observableFromEvent)(
							this,
							this.m.onDidScrollChange,
							(n) => this.m.getScrollTop(),
						)),
						(this.b = this.a.map((n) => n === 0)),
						(this.c = (0, w.observableFromEvent)(
							this,
							this.m.onDidChangeModel,
							(n) => this.m.hasModel(),
						)),
						(this.f = (0, w.observableSignalFromEvent)(
							"onDidChangeViewZones",
							this.m.onDidChangeViewZones,
						)),
						(this.g = (0, w.observableSignalFromEvent)(
							"onDidContentSizeChange",
							this.m.onDidContentSizeChange,
						)),
						(this.j = (0, w.observableSignal)("domNodeSizeChanged")),
						(this.r = new Map()),
						(this.n.className = "gutter monaco-editor");
					const h = this.n.appendChild(
							(0, t.h)("div.scroll-decoration", {
								role: "presentation",
								ariaHidden: "true",
								style: { width: "100%" },
							}).root,
						),
						c = new ResizeObserver(() => {
							(0, w.transaction)((n) => {
								this.j.trigger(n);
							});
						});
					c.observe(this.n),
						this.D((0, i.$Yc)(() => c.disconnect())),
						this.D(
							(0, w.autorun)((n) => {
								h.className = this.b.read(n) ? "" : "scroll-decoration";
							}),
						),
						this.D((0, w.autorun)((n) => this.s(n)));
				}
				dispose() {
					super.dispose(), (0, t.$hhb)(this.n);
				}
				s(r) {
					if (!this.c.read(r)) return;
					this.j.read(r), this.f.read(r), this.g.read(r);
					const u = this.a.read(r),
						a = this.m.getVisibleRanges(),
						h = new Set(this.r.keys());
					if (a.length > 0) {
						const c = a[0],
							n = new E.$bZb(
								c.startLineNumber,
								c.endLineNumber - c.startLineNumber,
							).deltaEnd(1),
							g = this.q.getIntersectingGutterItems(n, r);
						for (const p of g) {
							if (!p.range.touches(n)) continue;
							h.delete(p.id);
							let o = this.r.get(p.id);
							if (o) o.gutterItemView.update(p);
							else {
								const l = document.createElement("div");
								this.n.appendChild(l);
								const y = this.q.createView(p, l);
								(o = new d(y, l)), this.r.set(p.id, o);
							}
							const f =
									p.range.startLineNumber <= this.m.getModel().getLineCount()
										? this.m.getTopForLineNumber(p.range.startLineNumber, !0) -
											u
										: this.m.getBottomForLineNumber(
												p.range.startLineNumber - 1,
												!1,
											) - u,
								s =
									this.m.getBottomForLineNumber(
										p.range.endLineNumberExclusive - 1,
										!0,
									) -
									u -
									f;
							(o.domNode.style.top = `${f}px`),
								(o.domNode.style.height = `${s}px`),
								o.gutterItemView.layout(f, s, 0, this.n.clientHeight);
						}
					}
					for (const c of h) {
						const n = this.r.get(c);
						n.gutterItemView.dispose(), n.domNode.remove(), this.r.delete(c);
					}
				}
			}
			e.$3Zb = C;
			class d {
				constructor(r, u) {
					(this.gutterItemView = r), (this.domNode = u);
				}
			}
		}),
		