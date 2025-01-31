import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
define(de[1786], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AYc = e.$zYc = e.ViewsWelcomeExtensionPointFields = void 0),
				(t = mt(t));
			var i;
			(function (E) {
				(E.view = "view"),
					(E.contents = "contents"),
					(E.when = "when"),
					(E.group = "group"),
					(E.enablement = "enablement");
			})(i || (e.ViewsWelcomeExtensionPointFields = i = {})),
				(e.$zYc = {
					explorer: "workbench.explorer.emptyView",
					debug: "workbench.debug.welcome",
					scm: "workbench.scm",
					testing: "workbench.view.testing",
				});
			const w = Object.freeze({
				type: "array",
				description: t.localize(11649, null),
				items: {
					type: "object",
					description: t.localize(11650, null),
					required: [i.view, i.contents],
					properties: {
						[i.view]: {
							anyOf: [
								{ type: "string", description: t.localize(11651, null) },
								{
									type: "string",
									description: t.localize(11652, null),
									enum: Object.keys(e.$zYc),
								},
							],
						},
						[i.contents]: {
							type: "string",
							description: t.localize(11653, null),
						},
						[i.when]: { type: "string", description: t.localize(11654, null) },
						[i.group]: { type: "string", description: t.localize(11655, null) },
						[i.enablement]: {
							type: "string",
							description: t.localize(11656, null),
						},
					},
				},
			});
			e.$AYc = { extensionPoint: "viewsWelcome", jsonSchema: w };
		})
