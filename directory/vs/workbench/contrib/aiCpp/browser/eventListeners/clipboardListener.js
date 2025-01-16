define(de[3223], he([1, 0, 332, 5, 20, 121]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ofd = void 0),
				(e.$ofd = (0, i.$Mi)("clipboardListenerService"));
			let C = class {
				constructor(m, r) {
					(this.b = m), (this.c = r);
				}
				maybeReportClipboardChange(m) {
					const r = m.slice(0, 2e3);
					r !== this.a && ((this.a = r), this.b.recordClipboardChange(r));
				}
				registerClipboardListener(m) {
					this.c.readText().then((h) => this.maybeReportClipboardChange(h));
					const r = [],
						u = async (h) => {
							const c = h.clipboardData?.getData("text/plain");
							let n;
							c === void 0 || c === ""
								? (n = await new Promise((g) =>
										setTimeout(() => {
											this.c.readText().then(g);
										}, 50),
									))
								: (n = c),
								this.maybeReportClipboardChange(n);
						};
					for (const h of m)
						h.window.document.addEventListener("copy", u),
							r.push({
								dispose: () => {
									h.window.document.removeEventListener("copy", u);
								},
							});
					const a = this.c.onDidChangeClipboard((h) => {
						this.maybeReportClipboardChange(h);
					});
					return {
						dispose: () => {
							for (const h of r) h.dispose();
							a.dispose();
						},
					};
				}
			};
			(C = Ne([j(0, t.$V7b), j(1, E.$Vxb)], C)),
				(0, w.$lK)(e.$ofd, C, w.InstantiationType.Delayed);
		}),
		