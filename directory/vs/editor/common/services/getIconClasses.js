import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/network.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../languages/modesRegistry.js';
import '../../../platform/files/common/files.js';
import '../../../base/common/themables.js';
define(
			de[252],
			he([1, 0, 23, 19, 9, 172, 22, 26]),
			function (ce /*require*/,
 e /*exports*/,
 t /*network*/,
 i /*resources*/,
 w /*uri*/,
 E /*modesRegistry*/,
 C /*files*/,
 d /*themables*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BDb = r),
					(e.$CDb = u);
				const m = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
				function r(c, n, g, p, o) {
					if (d.ThemeIcon.isThemeIcon(o))
						return [`codicon-${o.id}`, "predefined-file-icon"];
					if (w.URI.isUri(o)) return [];
					const f =
						p === C.FileKind.ROOT_FOLDER
							? ["rootfolder-icon"]
							: p === C.FileKind.FOLDER
								? ["folder-icon"]
								: ["file-icon"];
					if (g) {
						let b;
						if (g.scheme === t.Schemas.data)
							b = i.DataUri.parseMetaData(g).get(i.DataUri.META_DATA_LABEL);
						else {
							const s = g.path.match(m);
							s
								? ((b = h(s[2].toLowerCase())),
									s[1] && f.push(`${h(s[1].toLowerCase())}-name-dir-icon`))
								: (b = h(g.authority.toLowerCase()));
						}
						if (p === C.FileKind.ROOT_FOLDER)
							f.push(`${b}-root-name-folder-icon`);
						else if (p === C.FileKind.FOLDER) f.push(`${b}-name-folder-icon`);
						else {
							if (b) {
								if (
									(f.push(`${b}-name-file-icon`),
									f.push("name-file-icon"),
									b.length <= 255)
								) {
									const l = b.split(".");
									for (let y = 1; y < l.length; y++)
										f.push(`${l.slice(y).join(".")}-ext-file-icon`);
								}
								f.push("ext-file-icon");
							}
							const s = a(c, n, g);
							s && f.push(`${h(s)}-lang-file-icon`);
						}
					}
					return f;
				}
				function u(c) {
					return ["file-icon", `${h(c)}-lang-file-icon`];
				}
				function a(c, n, g) {
					if (!g) return null;
					let p = null;
					if (g.scheme === t.Schemas.data) {
						const f = i.DataUri.parseMetaData(g).get(i.DataUri.META_DATA_MIME);
						f && (p = n.getLanguageIdByMimeType(f));
					} else {
						if (g.scheme === t.Schemas.aiChat) return "cursor-ai";
						{
							const o = c.getModel(g);
							o && (p = o.getLanguageId());
						}
					}
					return p && p !== E.$0M
						? p
						: n.guessLanguageIdByFilepathOrFirstLine(g);
				}
				function h(c) {
					return c.replace(/[\s]/g, "/");
				}
			},
		),
		