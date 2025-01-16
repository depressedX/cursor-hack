define(
		de[3217],
		he([1, 0, 4, 11, 372, 57, 110, 163, 62, 12, 29]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gdd = e.$fdd = e.$edd = e.$ddd = void 0),
				(w = xi(w));
			const a = (0, t.localize2)(11818, "Shell Command");
			class h extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.installCommandLine",
						title: (0, t.localize2)(
							11819,
							"Install '{0}' command",
							w.default.applicationName,
						),
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						r.$l
							? await f.installShellCommandWindows()
							: await f.installShellCommand(),
							b.info((0, t.localize)(11814, null, s.applicationName));
					} catch (l) {
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$ddd = h;
			class c extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.fixWSL",
						title: { value: "Fix WSL Install", original: "Fix WSL Install" },
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c);
					try {
						r.$l && (await f.fixWSL());
					} catch (b) {
						console.error(b);
					}
				}
			}
			e.$edd = c;
			class n extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.replaceCommandLine",
						title: {
							value: (0, t.localize)(11815, null),
							original: "Install 'code' command",
						},
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						r.$l
							? await f.replaceShellCommandWindows()
							: await f.replaceShellCommand(),
							b.info((0, t.localize)(11816, null));
					} catch (l) {
						if ((0, u.$8)(l)) return;
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$fdd = n;
			class g extends i.$3X {
				constructor() {
					super({
						id: "workbench.action.uninstallCommandLine",
						title: (0, t.localize2)(
							11820,
							"Uninstall '{0}' command from PATH",
							w.default.applicationName,
						),
						category: a,
						f1: !0,
					});
				}
				async run(o) {
					const f = o.get(C.$y7c),
						b = o.get(E.$GO),
						s = o.get(m.$Bk);
					try {
						await f.uninstallShellCommand(),
							b.info((0, t.localize)(11817, null, s.applicationName));
					} catch (l) {
						if ((0, u.$8)(l)) return;
						b.error((0, d.$xj)(l));
					}
				}
			}
			e.$gdd = g;
		},
	),
		