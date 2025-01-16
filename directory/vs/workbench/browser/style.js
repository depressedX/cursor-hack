define(
			de[2952],
			he([1, 0, 35, 123, 12, 7, 139, 51, 75, 2333]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, t.$oP)((r, u) => {
						const a = (0, i.$LEb)(r);
						u.addRule(`.monaco-workbench { background-color: ${a}; }`);
						const h = r.getColor(d.$QP);
						if (
							(h &&
								u.addRule(
									`.monaco-workbench ::selection { background-color: ${h}; }`,
								),
							w.$r)
						) {
							const c = r.getColor(i.$LGb);
							if (c) {
								const n = "monaco-workbench-meta-theme-color";
								let g = m.$Bfb.document.getElementById(n);
								g ||
									((g = (0, E.$Ugb)()), (g.name = "theme-color"), (g.id = n)),
									(g.content = c.toString());
							}
						}
						C.$Rfb &&
							u.addRule(`
			body.web {
				touch-action: none;
			}
			.monaco-workbench .monaco-editor .view-lines {
				user-select: text;
				-webkit-user-select: text;
			}
		`),
							w.$u &&
								(0, C.$Vfb)() &&
								u.addRule(`body { background-color: ${a}; }`);
					});
			},
		),
		