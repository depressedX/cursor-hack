import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/platform.js';
import '../hooks/useComposerDataHandle.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4150],
			he([1, 0, 2, 2, 2, 13, 12, 177, 311, 36]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*platform*/,
 d /*useComposerDataHandle*/,
 m /*useComposerHoverTooltip*/,
 r /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerUnUnifiedModeSwitcher = a);
				const u = (0, t.template)(
					'<div class="composer-mode-option"><span>normal</span><span>/</span><span>agent',
				);
				function a(h) {
					const { currentComposer: c } = (0, d.useComposerDataHandle)(
							() => h.composerDataHandle,
						),
						n = (0, r.$odc)(),
						{ showHover: g, hideHover: p } = (0, m.useComposerHoverTooltip)({
							delay: 300,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						o = (0, E.createMemo)(() => ` ${C.$m ? " \u2318." : " ctrl+."}`),
						f = "var(--vscode-input-foreground)",
						b = "var(--vscode-input-placeholderForeground)";
					return (() => {
						const s = u(),
							l = s.firstChild,
							y = l.nextSibling,
							$ = y.nextSibling;
						return (
							(0, w.addEventListener)(s, "mouseleave", p),
							s.addEventListener("mouseenter", (v) => {
								g(v, {
									value: `Agent composers can use tools, run terminal commands, and edit files (${o().trim()})`,
								});
							}),
							s.addEventListener("click", () => {
								const S = !c().isAgentic;
								S &&
									n.reactiveStorageService.setApplicationUserPersistentStorage(
										"composerState",
										"isAutoApplyEnabled",
										!0,
									),
									n.composerDataService.updateComposerData(c().composerId, {
										isAgentic: S,
									}),
									n.reactiveStorageService.setApplicationUserPersistentStorage(
										"composerState",
										"defaultUseToolsInEdit",
										S,
									);
							}),
							s.style.setProperty("display", "flex"),
							s.style.setProperty("align-items", "center"),
							s.style.setProperty("gap", "4px"),
							s.style.setProperty("font-size", "10px"),
							s.style.setProperty("cursor", "pointer"),
							s.style.setProperty("line-height", "150%"),
							y.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							(0, i.effect)(
								(v) => {
									const S = c().isAgentic ? b : f,
										I = c().isAgentic ? f : b;
									return (
										S !== v._v$ &&
											((v._v$ = S) != null
												? l.style.setProperty("color", S)
												: l.style.removeProperty("color")),
										I !== v._v$2 &&
											((v._v$2 = I) != null
												? $.style.setProperty("color", I)
												: $.style.removeProperty("color")),
										v
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							s
						);
					})();
				}
			},
		),
		