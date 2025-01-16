define(de[2727], he([1, 0, 38, 8]), function (ce, e, t, i) {
			"use strict";
			var w;
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vDb = void 0);
			let E = class {
				static {
					w = this;
				}
				static {
					this.AtEnd = new i.$5j("atEndOfWord", !1);
				}
				constructor(d, m) {
					(this.f = d),
						(this.c = !1),
						(this.a = w.AtEnd.bindTo(m)),
						(this.b = this.f.onDidChangeConfiguration(
							(r) => r.hasChanged(t.EditorOption.tabCompletion) && this.g(),
						)),
						this.g();
				}
				dispose() {
					this.b.dispose(), this.d?.dispose(), this.a.reset();
				}
				g() {
					const d = this.f.getOption(t.EditorOption.tabCompletion) === "on";
					if (this.c !== d)
						if (((this.c = d), this.c)) {
							const m = () => {
								if (!this.f.hasModel()) {
									this.a.set(!1);
									return;
								}
								const r = this.f.getModel(),
									u = this.f.getSelection(),
									a = r.getWordAtPosition(u.getStartPosition());
								if (!a) {
									this.a.set(!1);
									return;
								}
								this.a.set(a.endColumn === u.getStartPosition().column);
							};
							(this.d = this.f.onDidChangeCursorSelection(m)), m();
						} else
							this.d && (this.a.reset(), this.d.dispose(), (this.d = void 0));
				}
			};
			(e.$vDb = E), (e.$vDb = E = w = Ne([j(1, i.$6j)], E));
		}),
		