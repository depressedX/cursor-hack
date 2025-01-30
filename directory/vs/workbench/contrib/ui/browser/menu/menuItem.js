import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import '../hooks/useThemeHooks.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/menu/menuItem.js';
define(
			de[1372],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 36, 331, 2522]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*web*/,
 u /*web*/,
 a /*solid*/,
 h /*themables*/,
 c /*solid*/,
 n /*useThemeHooks*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i$b = void 0);
				const g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, c.$odc)(),
							[b, s] = (0, a.splitProps)(o, [
								"children",
								"onClick",
								"className",
								"icon",
								"iconStyle",
								"isSelected",
								"rightIcon",
								"as",
							]);
						let l;
						const y = {
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							width: "8px",
							height: "8px",
							"font-size": "10px",
							color: "var(--vscode-editor-foreground)",
						};
						return (() => {
							const $ = g(),
								v = l;
							return (
								typeof v == "function" ? (0, m.use)(v, $) : (l = $),
								(0, r.spread)(
									$,
									(0, u.mergeProps)(
										{
											get onClick() {
												return b.onClick;
											},
											get class() {
												return (
													"menu-item" +
													((0, n.$d$b)(f.themeService) ? " dark" : " light")
												);
											},
											get style() {
												return {
													padding: "0px 4px",
													"border-radius": "2px",
													display: "flex",
													"align-items": "center",
													gap: "4px",
													"font-size": "10px",
													border: "none",
													cursor: "pointer",
													color: "var(--text-primary)",
													outline: "none",
													"flex-shrink": "0",
													...(b.isSelected && {
														backgroundColor: (0, n.$d$b)(f.themeService)
															? "rgba(255, 255, 255, 0.06)"
															: "rgba(0, 0, 0, 0.06)",
													}),
												};
											},
										},
										s,
									),
									!1,
									!0,
								),
								(0, i.insert)(
									$,
									(0, w.createComponent)(a.Show, {
										get when() {
											return b.icon;
										},
										get children() {
											const S = g();
											return (
												(0, d.effect)(
													(I) => {
														const T = h.ThemeIcon.asClassName(b.icon),
															P = { ...y };
														return (
															T !== I._v$ && (0, C.className)(S, (I._v$ = T)),
															(I._v$2 = (0, E.style)(S, P, I._v$2)),
															I
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												S
											);
										},
									}),
									null,
								),
								(0, i.insert)($, () => b.children, null),
								(0, i.insert)(
									$,
									(0, w.createComponent)(a.Show, {
										get when() {
											return b.rightIcon;
										},
										get children() {
											const S = g();
											return (
												(0, d.effect)(
													(I) => {
														const T = h.ThemeIcon.asClassName(b.rightIcon),
															P = { ...y, "margin-left": "auto" };
														return (
															T !== I._v$3 && (0, C.className)(S, (I._v$3 = T)),
															(I._v$4 = (0, E.style)(S, P, I._v$4)),
															I
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												S
											);
										},
									}),
									null,
								),
								$
							);
						})();
					};
				(e.$i$b = p), (e.default = e.$i$b);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	