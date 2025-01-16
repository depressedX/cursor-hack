define(de[3441], he([1, 0, 7, 3, 10, 52]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$V4b = void 0),
				(t = mt(t));
			let C = class extends i.$1c {
				constructor(m, r) {
					super(),
						(this.c = m),
						(this.f = r),
						(this.a = new Map()),
						this.D(
							this.f.onDidChangeConfiguration((u) => {
								u.affectsConfiguration("workbench.iconTheme") && this.h();
							}),
						);
				}
				dispose() {
					super.dispose(), (this.b = void 0);
				}
				get g() {
					return (
						this.b ||
							((this.b = t.$Rgb(void 0, void 0, this.B)),
							(this.b.className = "webview-icons")),
						this.b
					);
				}
				setIcons(m, r) {
					r ? this.a.set(m, r) : this.a.delete(m), this.h();
				}
				async h() {
					await this.c.when(E.LifecyclePhase.Starting);
					const m = [];
					if (this.f.getValue("workbench.iconTheme") !== null)
						for (const [r, u] of this.a) {
							const a = `.show-file-icons .webview-${r}-name-file-icon::before`;
							try {
								m.push(
									`.monaco-workbench.vs ${a}, .monaco-workbench.hc-light ${a} { content: ""; background-image: ${t.$vhb(u.light)}; }`,
									`.monaco-workbench.vs-dark ${a}, .monaco-workbench.hc-black ${a} { content: ""; background-image: ${t.$vhb(u.dark)}; }`,
								);
							} catch {}
						}
					this.g.textContent = m.join(`
`);
				}
			};
			(e.$V4b = C), (e.$V4b = C = Ne([j(0, E.$n6), j(1, w.$gj)], C));
		}),
		