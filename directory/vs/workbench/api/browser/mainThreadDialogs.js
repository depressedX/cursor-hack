define(
			de[3345],
			he([1, 0, 9, 88, 101, 57, 23]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1mc = void 0);
				let m = (d = class {
					constructor(u, a) {
						this.a = a;
					}
					dispose() {}
					async $showOpenDialog(u) {
						const a = d.b(u);
						return (
							a.defaultUri || (a.defaultUri = await this.a.defaultFilePath()),
							Promise.resolve(this.a.showOpenDialog(a))
						);
					}
					async $showSaveDialog(u) {
						const a = d.c(u);
						return (
							a.defaultUri || (a.defaultUri = await this.a.defaultFilePath()),
							Promise.resolve(this.a.showSaveDialog(a))
						);
					}
					static b(u) {
						const a = {
							openLabel: u?.openLabel || void 0,
							canSelectFiles:
								u?.canSelectFiles ||
								(!u?.canSelectFiles && !u?.canSelectFolders),
							canSelectFolders: u?.canSelectFolders,
							canSelectMany: u?.canSelectMany,
							defaultUri: u?.defaultUri ? t.URI.revive(u.defaultUri) : void 0,
							title: u?.title || void 0,
							availableFileSystems: u?.allowUIResources
								? [C.Schemas.vscodeRemote, C.Schemas.file]
								: [],
						};
						if (u?.filters) {
							a.filters = [];
							for (const [h, c] of Object.entries(u.filters))
								a.filters.push({ name: h, extensions: c });
						}
						return a;
					}
					static c(u) {
						const a = {
							defaultUri: u?.defaultUri ? t.URI.revive(u.defaultUri) : void 0,
							saveLabel: u?.saveLabel || void 0,
							title: u?.title || void 0,
						};
						if (u?.filters) {
							a.filters = [];
							for (const [h, c] of Object.entries(u.filters))
								a.filters.push({ name: h, extensions: c });
						}
						return a;
					}
				});
				(e.$1mc = m),
					(e.$1mc =
						m =
						d =
							Ne([(0, w.$tmc)(i.$lbb.MainThreadDialogs), j(1, E.$IO)], m));
			},
		),
		