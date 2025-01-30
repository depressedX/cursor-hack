import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/uri.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../base/common/themables.js';
import '../common/terminal.js';
import '../common/terminalColorRegistry.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
define(
			de[514],
			he([1, 0, 136, 9, 79, 212, 26, 145, 512, 7, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hash*/,
 i /*uri*/,
 w /*iconRegistry*/,
 E /*theme*/,
 C /*themables*/,
 d /*terminal*/,
 m /*terminalColorRegistry*/,
 r /*dom*/,
 u /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Onc = a),
					(e.$Pnc = h),
					(e.$Qnc = c),
					(e.$Rnc = n),
					(e.$Snc = g),
					(e.$Tnc = p);
				function a(o) {
					let f;
					if (
						(typeof o == "string"
							? (f = o)
							: o.color
								? (f = o.color.replace(/\./g, "_"))
								: C.ThemeIcon.isThemeIcon(o.icon) &&
									o.icon.color &&
									(f = o.icon.color.id.replace(/\./g, "_")),
						f)
					)
						return `terminal-icon-${f.replace(/\./g, "_")}`;
				}
				function h(o) {
					const f = [];
					for (const b in m.$EHb)
						o.getColor(b) && !b.toLowerCase().includes("bright") && f.push(b);
					return f;
				}
				function c(o) {
					const f = new u.$Zc(),
						b = h(o),
						s = (0, r.$Rgb)(void 0, void 0, f);
					let l = "";
					for (const y of b) {
						const $ = a(y),
							v = o.getColor(y);
						v &&
							(l += `.monaco-workbench .${$} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${v} !important; }`);
					}
					return (s.textContent = l), f;
				}
				function n(o, f) {
					const b = h(o);
					let s = "";
					for (const l of b) {
						const y = a(l),
							$ = o.getColor(l);
						$ &&
							(f
								? (s += `.monaco-workbench .show-file-icons .predefined-file-icon.terminal-tab.${y}::before,.monaco-workbench .show-file-icons .file-icon.terminal-tab.${y}::before{ color: ${$} !important; }`)
								: (s += `.monaco-workbench .${y} .codicon:first-child:not(.codicon-split-horizontal):not(.codicon-trashcan):not(.file-icon){ color: ${$} !important; }`));
					}
					return s;
				}
				function g(o, f, b) {
					const s = o.icon;
					if (!s) return;
					const l = [];
					let y;
					if (b) {
						if (
							typeof s == "string" &&
							(s.startsWith("$(") || (0, w.$_O)().getIcon(s))
						)
							return l;
						typeof s == "string" && (y = i.URI.parse(s));
					}
					if (
						(s instanceof i.URI
							? (y = s)
							: s instanceof Object &&
								"light" in s &&
								"dark" in s &&
								(y = f === E.ColorScheme.LIGHT ? s.light : s.dark),
						y instanceof i.URI)
					) {
						const v = `terminal-uri-icon-${(0, t.$Aj)(y.path).toString(36)}`;
						l.push(v), l.push("terminal-uri-icon");
					}
					return l;
				}
				function p(o, f) {
					return !f.icon || (f.icon instanceof Object && !("id" in f.icon))
						? o.get(d.$reb).getDefaultIcon().id
						: typeof f.icon == "string"
							? f.icon
							: f.icon.id;
				}
			},
		),
		