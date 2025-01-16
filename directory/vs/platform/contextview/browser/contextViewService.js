define(de[1617], he([1, 0, 276, 3, 180, 7]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$myc = e.$lyc = void 0);
			let C = class extends i.$1c {
				constructor(r) {
					super(),
						(this.c = r),
						(this.b = this.D(
							new t.$iib(
								this.c.mainContainer,
								t.ContextViewDOMPosition.ABSOLUTE,
							),
						)),
						this.layout(),
						this.D(r.onDidLayoutContainer(() => this.layout()));
				}
				showContextView(r, u, a) {
					let h;
					u
						? u === this.c.getContainer((0, E.getWindow)(u))
							? (h = t.ContextViewDOMPosition.ABSOLUTE)
							: a
								? (h = t.ContextViewDOMPosition.FIXED_SHADOW)
								: (h = t.ContextViewDOMPosition.FIXED)
						: (h = t.ContextViewDOMPosition.ABSOLUTE),
						this.b.setContainer(u ?? this.c.activeContainer, h),
						this.b.show(r);
					const c = {
						close: () => {
							this.a === c && this.hideContextView();
						},
					};
					return (this.a = c), c;
				}
				layout() {
					this.b.layout();
				}
				hideContextView(r) {
					this.b.hide(r), (this.a = void 0);
				}
			};
			(e.$lyc = C), (e.$lyc = C = Ne([j(0, w.$jEb)], C));
			class d extends C {
				getContextViewElement() {
					return this.b.getViewElement();
				}
			}
			e.$myc = d;
		}),
		