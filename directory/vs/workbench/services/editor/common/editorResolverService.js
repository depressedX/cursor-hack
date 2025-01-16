define(
			de[231],
			he([1, 0, 215, 23, 54, 19, 4, 224, 81, 5, 30]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ResolvedStatus =
						e.RegisteredEditorPriority =
						e.$F6 =
						e.$E6 =
							void 0),
					(e.$G6 = g),
					(e.$H6 = p),
					(t = mt(t)),
					(e.$E6 = (0, r.$Mi)("editorResolverService")),
					(e.$F6 = "workbench.editorAssociations");
				const a = u.$Io.as(m.$No.Configuration),
					h = {
						...d.$v6,
						properties: {
							"workbench.editorAssociations": {
								type: "object",
								markdownDescription: (0, C.localize)(12248, null),
								additionalProperties: { type: "string" },
							},
						},
					};
				a.registerConfiguration(h);
				var c;
				(function (o) {
					(o.builtin = "builtin"),
						(o.option = "option"),
						(o.exclusive = "exclusive"),
						(o.default = "default");
				})(c || (e.RegisteredEditorPriority = c = {}));
				var n;
				(function (o) {
					(o[(o.ABORT = 1)] = "ABORT"), (o[(o.NONE = 2)] = "NONE");
				})(n || (e.ResolvedStatus = n = {}));
				function g(o) {
					switch (o) {
						case c.exclusive:
							return 5;
						case c.default:
							return 4;
						case c.builtin:
							return 3;
						case c.option:
						default:
							return 1;
					}
				}
				function p(o, f) {
					if (
						new Set([
							i.Schemas.extension,
							i.Schemas.webviewPanel,
							i.Schemas.vscodeWorkspaceTrust,
							i.Schemas.walkThrough,
							i.Schemas.vscodeSettings,
							i.Schemas.aiSettings,
							i.Schemas.aiChat,
						]).has(f.scheme)
					)
						return !1;
					const l =
						typeof o == "string" && o.indexOf(w.$lc.sep) >= 0
							? `${f.scheme}:${f.path}`
							: (0, E.$kh)(f);
					return t.$Ik(
						typeof o == "string" ? o.toLowerCase() : o,
						l.toLowerCase(),
					);
				}
			},
		),
		