define(de[955], he([1, 0, 14, 9, 4, 26]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4J = C),
				(e.$5J = r),
				(e.$6J = u),
				(e.$7J = a);
			function C(h, c) {
				const n = [{ name: null, description: (0, w.localize)(2122, null) }];
				return (
					n.push(...h.map((g) => ({ name: g.profileName, description: d(g) }))),
					c && n.push(...c.map((g) => ({ name: g.title, description: m(g) }))),
					{
						values: n.map((g) => g.name),
						markdownDescriptions: n.map((g) => g.description),
					}
				);
			}
			function d(h) {
				let c = `$(${E.ThemeIcon.isThemeIcon(h.icon) ? h.icon.id : h.icon ? h.icon : t.$ak.terminal.id}) ${h.profileName}
- path: ${h.path}`;
				return (
					h.args &&
						(typeof h.args == "string"
							? (c += `
- args: "${h.args}"`)
							: (c += `
- args: [${h.args.length === 0 ? "" : `'${h.args.join("','")}'`}]`)),
					h.overrideName !== void 0 &&
						(c += `
- overrideName: ${h.overrideName}`),
					h.color &&
						(c += `
- color: ${h.color}`),
					h.env &&
						(c += `
- env: ${JSON.stringify(h.env)}`),
					c
				);
			}
			function m(h) {
				return `$(${E.ThemeIcon.isThemeIcon(h.icon) ? h.icon.id : h.icon ? h.icon : t.$ak.terminal.id}) ${h.title}
- extensionIdentifier: ${h.extensionIdentifier}`;
			}
			function r(h, c) {
				if (!h && !c) return !0;
				if (typeof h == "string" && typeof c == "string") return h === c;
				if (Array.isArray(h) && Array.isArray(c)) {
					if (h.length !== c.length) return !1;
					for (let n = 0; n < h.length; n++) if (h[n] !== c[n]) return !1;
					return !0;
				}
				return !1;
			}
			function u(h, c) {
				if (!h && !c) return !0;
				if (!h || !c) return !1;
				if (E.ThemeIcon.isThemeIcon(h) && E.ThemeIcon.isThemeIcon(c))
					return h.id === c.id && h.color === c.color;
				if (
					typeof h == "object" &&
					"light" in h &&
					"dark" in h &&
					typeof c == "object" &&
					"light" in c &&
					"dark" in c
				) {
					const n = h,
						g = c;
					if (
						(i.URI.isUri(n.light) || a(n.light)) &&
						(i.URI.isUri(n.dark) || a(n.dark)) &&
						(i.URI.isUri(g.light) || a(g.light)) &&
						(i.URI.isUri(g.dark) || a(g.dark))
					)
						return n.light.path === g.light.path && n.dark.path === g.dark.path;
				}
				if ((i.URI.isUri(h) && i.URI.isUri(c)) || a(h) || a(c)) {
					const n = h,
						g = c;
					return n.path === g.path && n.scheme === g.scheme;
				}
				return !1;
			}
			function a(h) {
				return h
					? typeof h.path == "string" && typeof h.scheme == "string"
					: !1;
			}
		}),
		define(
			de[1201],
			he([1, 0, 14, 12, 4, 81, 30, 117, 955]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9J = e.$8J = void 0),
					(e.$0J = n),
					(e.$$J = p),
					(e.$8J = {
						type: ["string", "null"],
						enum: [
							"terminal.ansiBlack",
							"terminal.ansiRed",
							"terminal.ansiGreen",
							"terminal.ansiYellow",
							"terminal.ansiBlue",
							"terminal.ansiMagenta",
							"terminal.ansiCyan",
							"terminal.ansiWhite",
						],
						default: null,
					}),
					(e.$9J = {
						type: "string",
						enum: Array.from((0, t.$$j)(), (o) => o.id),
						markdownEnumDescriptions: Array.from(
							(0, t.$$j)(),
							(o) => `$(${o.id})`,
						),
					});
				const r = {
						args: {
							description: (0, w.localize)(2091, null),
							type: "array",
							items: { type: "string" },
						},
						overrideName: {
							description: (0, w.localize)(2092, null),
							type: "boolean",
						},
						icon: { description: (0, w.localize)(2093, null), ...e.$9J },
						color: { description: (0, w.localize)(2094, null), ...e.$8J },
						env: {
							markdownDescription: (0, w.localize)(2095, null),
							type: "object",
							additionalProperties: { type: ["string", "null"] },
							default: {},
						},
					},
					u = {
						type: "object",
						required: ["path"],
						properties: {
							path: {
								description: (0, w.localize)(2096, null),
								type: ["string", "array"],
								items: { type: "string" },
							},
							...r,
						},
					},
					a = {
						type: "object",
						required: ["path"],
						properties: {
							path: {
								description: (0, w.localize)(2097, null),
								type: ["string"],
								items: { type: "string" },
							},
							...r,
						},
					};
				function h(o) {
					const f =
						o === i.Platform.Linux
							? "linux"
							: o === i.Platform.Mac
								? "osx"
								: "windows";
					return (0, w.localize)(
						2098,
						null,
						(0, i.$k)(o),
						'```json\n"terminal.integrated.profile.' +
							f +
							'": {\n  "bash": null\n}\n```',
						"[",
						"](https://code.visualstudio.com/docs/terminal/profiles)",
					);
				}
				const c = {
					id: "terminal",
					order: 100,
					title: (0, w.localize)(2099, null),
					type: "object",
					properties: {
						[d.TerminalSettingId.AutomationProfileLinux]: {
							restricted: !0,
							markdownDescription: (0, w.localize)(2100, null),
							type: ["object", "null"],
							default: null,
							anyOf: [{ type: "null" }, a],
							defaultSnippets: [{ body: { path: "${1}", icon: "${2}" } }],
						},
						[d.TerminalSettingId.AutomationProfileMacOs]: {
							restricted: !0,
							markdownDescription: (0, w.localize)(2101, null),
							type: ["object", "null"],
							default: null,
							anyOf: [{ type: "null" }, a],
							defaultSnippets: [{ body: { path: "${1}", icon: "${2}" } }],
						},
						[d.TerminalSettingId.AutomationProfileWindows]: {
							restricted: !0,
							markdownDescription: (0, w.localize)(
								2102,
								null,
								"`terminal.integrated.automationShell.windows`",
							),
							type: ["object", "null"],
							default: null,
							anyOf: [{ type: "null" }, a],
							defaultSnippets: [{ body: { path: "${1}", icon: "${2}" } }],
						},
						[d.TerminalSettingId.ProfilesWindows]: {
							restricted: !0,
							markdownDescription: h(i.Platform.Windows),
							type: "object",
							default: {
								PowerShell: {
									source: "PowerShell",
									icon: "terminal-powershell",
								},
								"Command Prompt": {
									path: [
										"${env:windir}\\Sysnative\\cmd.exe",
										"${env:windir}\\System32\\cmd.exe",
									],
									args: [],
									icon: "terminal-cmd",
								},
								"Git Bash": { source: "Git Bash" },
							},
							additionalProperties: {
								anyOf: [
									{
										type: "object",
										required: ["source"],
										properties: {
											source: {
												description: (0, w.localize)(2103, null),
												enum: ["PowerShell", "Git Bash"],
											},
											...r,
										},
									},
									{
										type: "object",
										required: ["extensionIdentifier", "id", "title"],
										properties: {
											extensionIdentifier: {
												description: (0, w.localize)(2104, null),
												type: "string",
											},
											id: {
												description: (0, w.localize)(2105, null),
												type: "string",
											},
											title: {
												description: (0, w.localize)(2106, null),
												type: "string",
											},
											...r,
										},
									},
									{ type: "null" },
									u,
								],
							},
						},
						[d.TerminalSettingId.ProfilesMacOs]: {
							restricted: !0,
							markdownDescription: h(i.Platform.Mac),
							type: "object",
							default: {
								bash: { path: "bash", args: ["-l"], icon: "terminal-bash" },
								zsh: { path: "zsh", args: ["-l"] },
								fish: { path: "fish", args: ["-l"] },
								tmux: { path: "tmux", icon: "terminal-tmux" },
								pwsh: { path: "pwsh", icon: "terminal-powershell" },
							},
							additionalProperties: {
								anyOf: [
									{
										type: "object",
										required: ["extensionIdentifier", "id", "title"],
										properties: {
											extensionIdentifier: {
												description: (0, w.localize)(2107, null),
												type: "string",
											},
											id: {
												description: (0, w.localize)(2108, null),
												type: "string",
											},
											title: {
												description: (0, w.localize)(2109, null),
												type: "string",
											},
											...r,
										},
									},
									{ type: "null" },
									u,
								],
							},
						},
						[d.TerminalSettingId.ProfilesLinux]: {
							restricted: !0,
							markdownDescription: h(i.Platform.Linux),
							type: "object",
							default: {
								bash: { path: "bash", icon: "terminal-bash" },
								zsh: { path: "zsh" },
								fish: { path: "fish" },
								tmux: { path: "tmux", icon: "terminal-tmux" },
								pwsh: { path: "pwsh", icon: "terminal-powershell" },
							},
							additionalProperties: {
								anyOf: [
									{
										type: "object",
										required: ["extensionIdentifier", "id", "title"],
										properties: {
											extensionIdentifier: {
												description: (0, w.localize)(2110, null),
												type: "string",
											},
											id: {
												description: (0, w.localize)(2111, null),
												type: "string",
											},
											title: {
												description: (0, w.localize)(2112, null),
												type: "string",
											},
											...r,
										},
									},
									{ type: "null" },
									u,
								],
							},
						},
						[d.TerminalSettingId.UseWslProfiles]: {
							description: (0, w.localize)(2113, null),
							type: "boolean",
							default: !0,
						},
						[d.TerminalSettingId.InheritEnv]: {
							scope: E.ConfigurationScope.APPLICATION,
							description: (0, w.localize)(2114, null),
							type: "boolean",
							default: !0,
						},
						[d.TerminalSettingId.PersistentSessionScrollback]: {
							scope: E.ConfigurationScope.APPLICATION,
							markdownDescription: (0, w.localize)(2115, null),
							type: "number",
							default: 100,
						},
						[d.TerminalSettingId.ShowLinkHover]: {
							scope: E.ConfigurationScope.APPLICATION,
							description: (0, w.localize)(2116, null),
							type: "boolean",
							default: !0,
						},
						[d.TerminalSettingId.IgnoreProcessNames]: {
							markdownDescription: (0, w.localize)(
								2117,
								null,
								"`#terminal.integrated.confirmOnKill#`",
							),
							type: "array",
							items: { type: "string", uniqueItems: !0 },
							default: ["starship", "oh-my-posh", "bash", "zsh"],
						},
					},
				};
				function n() {
					C.$Io.as(E.$No.Configuration).registerConfiguration(c), p();
				}
				let g;
				function p(o, f) {
					const b = C.$Io.as(E.$No.Configuration);
					let s;
					o && (s = (0, m.$4J)(o?.profiles, f));
					const l = g;
					(g = {
						id: "terminal",
						order: 100,
						title: (0, w.localize)(2118, null),
						type: "object",
						properties: {
							[d.TerminalSettingId.DefaultProfileLinux]: {
								restricted: !0,
								markdownDescription: (0, w.localize)(2119, null),
								type: ["string", "null"],
								default: null,
								enum: o?.os === i.OperatingSystem.Linux ? s?.values : void 0,
								markdownEnumDescriptions:
									o?.os === i.OperatingSystem.Linux
										? s?.markdownDescriptions
										: void 0,
							},
							[d.TerminalSettingId.DefaultProfileMacOs]: {
								restricted: !0,
								markdownDescription: (0, w.localize)(2120, null),
								type: ["string", "null"],
								default: null,
								enum:
									o?.os === i.OperatingSystem.Macintosh ? s?.values : void 0,
								markdownEnumDescriptions:
									o?.os === i.OperatingSystem.Macintosh
										? s?.markdownDescriptions
										: void 0,
							},
							[d.TerminalSettingId.DefaultProfileWindows]: {
								restricted: !0,
								markdownDescription: (0, w.localize)(2121, null),
								type: ["string", "null"],
								default: null,
								enum: o?.os === i.OperatingSystem.Windows ? s?.values : void 0,
								markdownEnumDescriptions:
									o?.os === i.OperatingSystem.Windows
										? s?.markdownDescriptions
										: void 0,
							},
						},
					}),
						b.updateConfigurations({ add: [g], remove: l ? [l] : [] });
				}
			},
		),
		