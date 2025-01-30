import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/keybindings.js';
import '../../../../../base/common/platform.js';
import '../../../../common/standalone/standaloneEnums.js';
define(
			de[1595],
			he([1, 0, 2, 2, 2, 13, 27, 343, 12, 1542]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*keyCodes*/,
 d /*keybindings*/,
 m /*platform*/,
 r /*standaloneEnums*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5dc = e.$4dc = void 0),
					(e.$6dc = c);
				const u = (0, t.template)("<button><span>Cancel</span><span>"),
					a = (0, t.template)("<div>");
				(e.$4dc = C.KeyMod.CtrlCmd | r.KeyCode.Backspace),
					(e.$5dc = (0, d.$rs)(e.$4dc, m.OS));
				const h = 100;
				function c(n, g, p) {
					const o = e.$5dc
							? ` ${p.keybindingService.resolveKeybinding(e.$5dc)[0].getLabel()}`
							: "",
						f = (() => {
							const l = u(),
								y = l.firstChild,
								$ = y.nextSibling;
							return (
								l.addEventListener("click", (v) => {
									p.cancelAndDispose(), v.stopPropagation();
								}),
								l.style.setProperty("background-color", "rgba(255,0,0,0.4)"),
								l.style.setProperty("border", "none"),
								l.style.setProperty("font-size", "12px"),
								l.style.setProperty("cursor", "pointer"),
								l.style.setProperty("color", "rgba(255,255,255,0.8)"),
								l.style.setProperty("align-items", "center"),
								$.style.setProperty("font-size", "10px"),
								$.style.setProperty("margin-left", "4px"),
								(0, w.insert)($, o),
								l
							);
						})(),
						[b, s] = (0, E.createSignal)(h);
					return p.reactiveStorageRoot.render(
						() =>
							(() => {
								const l = a();
								return (
									l.style.setProperty("display", "inline-flex"),
									l.style.setProperty("flex-direction", "row"),
									l.style.setProperty("bottom", "0px"),
									l.style.setProperty("height", "18px"),
									l.style.setProperty("border-radius", "4px"),
									l.style.setProperty("margin-top", "1px"),
									l.style.setProperty("margin-bottom", "1px"),
									l.style.setProperty("overflow", "hidden"),
									l.style.setProperty("z-index", "5"),
									l.style.setProperty("position", "absolute"),
									(0, w.insert)(l, f),
									(0, i.effect)(() =>
										`${g - b()}px` != null
											? l.style.setProperty("left", `${g - b()}px`)
											: l.style.removeProperty("left"),
									),
									l
								);
							})(),
						n,
					);
				}
			},
		),
		