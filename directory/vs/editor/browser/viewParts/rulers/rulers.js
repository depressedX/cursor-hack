define(de[2718], he([1, 0, 194, 303, 38, 2274]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ivb = void 0);
			class E extends i.$yub {
				constructor(d) {
					super(d),
						(this.domNode = (0, t.$Shb)(document.createElement("div"))),
						this.domNode.setAttribute("role", "presentation"),
						this.domNode.setAttribute("aria-hidden", "true"),
						this.domNode.setClassName("view-rulers"),
						(this.a = []);
					const m = this._context.configuration.options;
					(this.b = m.get(w.EditorOption.rulers)),
						(this.c = m.get(
							w.EditorOption.fontInfo,
						).typicalHalfwidthCharacterWidth);
				}
				dispose() {
					super.dispose();
				}
				onConfigurationChanged(d) {
					const m = this._context.configuration.options;
					return (
						(this.b = m.get(w.EditorOption.rulers)),
						(this.c = m.get(
							w.EditorOption.fontInfo,
						).typicalHalfwidthCharacterWidth),
						!0
					);
				}
				onScrollChanged(d) {
					return d.scrollHeightChanged;
				}
				prepareRender(d) {}
				g() {
					const d = this.a.length,
						m = this.b.length;
					if (d === m) return;
					if (d < m) {
						const { tabSize: u } = this._context.viewModel.model.getOptions(),
							a = u;
						let h = m - d;
						for (; h > 0; ) {
							const c = (0, t.$Shb)(document.createElement("div"));
							c.setClassName("view-ruler"),
								c.setWidth(a),
								this.domNode.appendChild(c),
								this.a.push(c),
								h--;
						}
						return;
					}
					let r = d - m;
					for (; r > 0; ) {
						const u = this.a.pop();
						this.domNode.removeChild(u), r--;
					}
				}
				render(d) {
					this.g();
					for (let m = 0, r = this.b.length; m < r; m++) {
						const u = this.a[m],
							a = this.b[m];
						u.setBoxShadow(a.color ? `1px 0 0 0 ${a.color} inset` : ""),
							u.setHeight(Math.min(d.scrollHeight, 1e6)),
							u.setLeft(a.column * this.c);
					}
				}
			}
			e.$Ivb = E;
		}),
		