define(
			de[2711],
			he([1, 0, 6, 3, 48, 61, 67, 10]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SAc = void 0);
				let m = class extends i.$1c {
					constructor(u, a, h) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.f = h),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeConfiguration = this.a.event),
							this.D(
								this.b.onDidChangeConfiguration((c) => this.a.fire(this.m(c))),
							);
					}
					getValue(u, a, h) {
						return typeof h == "string"
							? this.h(u, w.$hL.isIPosition(a) ? a : null, h)
							: this.h(u, null, typeof a == "string" ? a : void 0);
					}
					updateValue(u, a, h, c) {
						const n = this.j(u, null),
							g = this.b.inspect(a, { resource: u, overrideIdentifier: n });
						c === void 0 && (c = this.g(g, n));
						const p = n && g.overrideIdentifiers?.includes(n) ? n : void 0;
						return this.b.updateValue(
							a,
							h,
							{ resource: u, overrideIdentifier: p },
							c,
						);
					}
					g(u, a) {
						if (a) {
							if (u.memory?.override !== void 0)
								return d.ConfigurationTarget.MEMORY;
							if (u.workspaceFolder?.override !== void 0)
								return d.ConfigurationTarget.WORKSPACE_FOLDER;
							if (u.workspace?.override !== void 0)
								return d.ConfigurationTarget.WORKSPACE;
							if (u.userRemote?.override !== void 0)
								return d.ConfigurationTarget.USER_REMOTE;
							if (u.userLocal?.override !== void 0)
								return d.ConfigurationTarget.USER_LOCAL;
						}
						return u.memory?.value !== void 0
							? d.ConfigurationTarget.MEMORY
							: u.workspaceFolder?.value !== void 0
								? d.ConfigurationTarget.WORKSPACE_FOLDER
								: u.workspace?.value !== void 0
									? d.ConfigurationTarget.WORKSPACE
									: u.userRemote?.value !== void 0
										? d.ConfigurationTarget.USER_REMOTE
										: d.ConfigurationTarget.USER_LOCAL;
					}
					h(u, a, h) {
						const c = u ? this.j(u, a) : void 0;
						return typeof h > "u"
							? this.b.getValue({ resource: u, overrideIdentifier: c })
							: this.b.getValue(h, { resource: u, overrideIdentifier: c });
					}
					inspect(u, a, h) {
						const c = u ? this.j(u, a) : void 0;
						return this.b.inspect(h, { resource: u, overrideIdentifier: c });
					}
					j(u, a) {
						const h = this.c.getModel(u);
						return h
							? a
								? h.getLanguageIdAtPosition(a.lineNumber, a.column)
								: h.getLanguageId()
							: this.f.guessLanguageIdByFilepathOrFirstLine(u);
					}
					m(u) {
						return {
							affectedKeys: u.affectedKeys,
							affectsConfiguration: (a, h) => {
								const c = a ? this.j(a, null) : void 0;
								return u.affectsConfiguration(h, {
									resource: a,
									overrideIdentifier: c,
								});
							},
						};
					}
				};
				(e.$SAc = m),
					(e.$SAc = m = Ne([j(0, d.$gj), j(1, C.$QO), j(2, E.$nM)], m));
			},
		),
		