import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../nls.js';
import '../../../../base/common/semver/semver.js';
define(de[3334], he([1, 0, 109, 4, 464]), function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*nls*/,
 w /*semver*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$afb = E),
				(w = mt(w));
			function E(C, d, m, r, u) {
				const a = new t.$In();
				return (
					C.forEach((h) => {
						const c = a.get(h.identifier);
						c &&
							u.warn(
								(0, i.localize)(
									12433,
									null,
									c.extensionLocation.fsPath,
									h.extensionLocation.fsPath,
								),
							),
							a.set(h.identifier, h);
					}),
					d.forEach((h) => {
						const c = a.get(h.identifier);
						if (c)
							if (c.isBuiltin) {
								if (w.gte(c.version, h.version)) {
									u.warn(
										`Skipping extension ${h.extensionLocation.path} in favour of the builtin extension ${c.extensionLocation.path}.`,
									);
									return;
								}
								h.isBuiltin = !0;
							} else
								u.warn(
									(0, i.localize)(
										12434,
										null,
										c.extensionLocation.fsPath,
										h.extensionLocation.fsPath,
									),
								);
						else if (h.isBuiltin) {
							u.warn(
								`Skipping obsolete builtin extension ${h.extensionLocation.path}`,
							);
							return;
						}
						a.set(h.identifier, h);
					}),
					m.forEach((h) => {
						const c = a.get(h.identifier);
						c &&
							u.warn(
								(0, i.localize)(
									12435,
									null,
									c.extensionLocation.fsPath,
									h.extensionLocation.fsPath,
								),
							),
							a.set(h.identifier, h);
					}),
					r.forEach((h) => {
						u.info((0, i.localize)(12436, null, h.extensionLocation.fsPath));
						const c = a.get(h.identifier);
						c && c.isBuiltin && (h.isBuiltin = !0), a.set(h.identifier, h);
					}),
					Array.from(a.values())
				);
			}
		})
