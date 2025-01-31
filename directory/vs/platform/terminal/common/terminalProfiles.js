import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/codicons.js';
import '../../../base/common/uri.js';
import '../../../nls.js';
import '../../../base/common/themables.js';
define(de[955], he([1, 0, 14, 9, 4, 26]), function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*uri*/,
 w /*nls*/,
 E /*themables*/) {
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
		})
