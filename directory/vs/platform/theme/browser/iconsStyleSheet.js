define(
			de[1661],
			he([1, 0, 7, 6, 3, 26, 79]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pwc = void 0),
					(e.$owc = d);
				function d(r) {
					const u = new w.$Zc(),
						a = u.add(new i.$re()),
						h = (0, C.$_O)();
					return (
						u.add(h.onDidChange(() => a.fire())),
						r && u.add(r.onDidProductIconThemeChange(() => a.fire())),
						{
							dispose: () => u.dispose(),
							onDidChange: a.event,
							getCSS() {
								const c = r ? r.getProductIconTheme() : new m(),
									n = {},
									g = [],
									p = [];
								for (const o of h.getIcons()) {
									const f = c.getIcon(o);
									if (!f) continue;
									const b = f.font,
										s = `--vscode-icon-${o.id}-font-family`,
										l = `--vscode-icon-${o.id}-content`;
									b
										? ((n[b.id] = b.definition),
											p.push(
												`${s}: ${(0, t.$whb)(b.id)};`,
												`${l}: '${f.fontCharacter}';`,
											),
											g.push(
												`.codicon-${o.id}:before { content: '${f.fontCharacter}'; font-family: ${(0, t.$whb)(b.id)}; }`,
											))
										: (p.push(`${l}: '${f.fontCharacter}'; ${s}: 'codicon';`),
											g.push(
												`.codicon-${o.id}:before { content: '${f.fontCharacter}'; }`,
											));
								}
								for (const o in n) {
									const f = n[o],
										b = f.weight ? `font-weight: ${f.weight};` : "",
										s = f.style ? `font-style: ${f.style};` : "",
										l = f.src
											.map(
												(y) =>
													`${(0, t.$vhb)(y.location)} format('${y.format}')`,
											)
											.join(", ");
									g.push(
										`@font-face { src: ${l}; font-family: ${(0, t.$whb)(o)};${b}${s} font-display: block; }`,
									);
								}
								return (
									g.push(`:root { ${p.join(" ")} }`),
									g.join(`
`)
								);
							},
						}
					);
				}
				class m {
					getIcon(u) {
						const a = (0, C.$_O)();
						let h = u.defaults;
						for (; E.ThemeIcon.isThemeIcon(h); ) {
							const c = a.getIcon(h.id);
							if (!c) return;
							h = c.defaults;
						}
						return h;
					}
				}
				e.$pwc = m;
			},
		),
		