define(de[2581], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1Bb = void 0);
			class i {
				get color() {
					return this.a;
				}
				set color(E) {
					this.a.equals(E) || ((this.a = E), this.d.fire(E));
				}
				get presentation() {
					return this.colorPresentations[this.f];
				}
				get colorPresentations() {
					return this.b;
				}
				set colorPresentations(E) {
					(this.b = E),
						this.f > E.length - 1 && (this.f = 0),
						this.e.fire(this.presentation);
				}
				constructor(E, C, d) {
					(this.f = d),
						(this.c = new t.$re()),
						(this.onColorFlushed = this.c.event),
						(this.d = new t.$re()),
						(this.onDidChangeColor = this.d.event),
						(this.e = new t.$re()),
						(this.onDidChangePresentation = this.e.event),
						(this.originalColor = E),
						(this.a = E),
						(this.b = C);
				}
				selectNextColorPresentation() {
					(this.f = (this.f + 1) % this.colorPresentations.length),
						this.flushColor(),
						this.e.fire(this.presentation);
				}
				guessColorPresentation(E, C) {
					let d = -1;
					for (let m = 0; m < this.colorPresentations.length; m++)
						if (C.toLowerCase() === this.colorPresentations[m].label) {
							d = m;
							break;
						}
					if (d === -1) {
						const m = C.split("(")[0].toLowerCase();
						for (let r = 0; r < this.colorPresentations.length; r++)
							if (
								this.colorPresentations[r].label.toLowerCase().startsWith(m)
							) {
								d = r;
								break;
							}
					}
					d !== -1 &&
						d !== this.f &&
						((this.f = d), this.e.fire(this.presentation));
				}
				flushColor() {
					this.c.fire(this.a);
				}
			}
			e.$1Bb = i;
		}),
		