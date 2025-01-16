define(
			de[1769],
			he([1, 0, 7, 15, 29, 3, 649, 5, 675, 378, 1760, 145]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sLc = e.$rLc = void 0),
					(t = mt(t));
				let h = class extends E.$1c {
					get xterm() {
						return this.c;
					}
					constructor(g, p, o) {
						super(),
							(this.c = g),
							(this.a = this.D(new u.$pLc())),
							(this.capabilities = new m.$KHb()),
							(this.b = new Map()),
							this.D(g);
						const f = r.TerminalExtensionsRegistry.getTerminalContributions();
						for (const b of f) {
							if (this.b.has(b.id)) {
								(0, w.$4)(
									new Error(
										`Cannot have two terminal contributions with the same id ${b.id}`,
									),
								);
								continue;
							}
							if (b.canRunInDetachedTerminals === !1) continue;
							let s;
							try {
								(s = o.createInstance(b.ctor, this, p.processInfo, this.a)),
									this.b.set(b.id, s),
									this.D(s);
							} catch (l) {
								(0, w.$4)(l);
							}
						}
						this.D(new i.$Jh(C.$me)).trigger(() => {
							for (const b of this.b.values()) b.xtermReady?.(this.c);
						});
					}
					get selection() {
						return this.c && this.hasSelection()
							? this.c.raw.getSelection()
							: void 0;
					}
					get selectionRange() {
						return this.c.selectionRange;
					}
					hasSelection() {
						return this.c.hasSelection();
					}
					clearSelection() {
						this.c.clearSelection();
					}
					focus(g) {
						(g || !t.$Ogb().getSelection()?.toString()) && this.xterm.focus();
					}
					attachToElement(g, p) {
						this.domElement = g;
						const o = this.c.attachToElement(g, p);
						this.a.attachToElement(o);
					}
					forceScrollbarVisibility() {
						this.domElement?.classList.add("force-scrollbar");
					}
					resetScrollbarVisibility() {
						this.domElement?.classList.remove("force-scrollbar");
					}
					getContribution(g) {
						return this.b.get(g);
					}
				};
				(e.$rLc = h), (e.$rLc = h = Ne([j(2, d.$Li)], h));
				class c {
					constructor(g) {
						(this.processState = a.ProcessState.Running),
							(this.ptyProcessReady = Promise.resolve()),
							(this.initialCwd = ""),
							(this.shouldPersist = !1),
							(this.hasWrittenData = !1),
							(this.hasChildProcesses = !1),
							(this.capabilities = new m.$KHb()),
							(this.shellIntegrationNonce = ""),
							Object.assign(this, g);
					}
				}
				e.$sLc = c;
			},
		),
		