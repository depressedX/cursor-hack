import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/uri.js';
define(
			de[4142],
			he([1, 0, 2, 2, 2, 13, 14, 26, 36, 9]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*codicons*/,
 d /*themables*/,
 m /*solid*/,
 r /*uri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8fc = a);
				const u = (0, t.template)("<div>");
				function a(h) {
					const c = (0, m.$odc)(),
						n = () => {
							const p = !g(),
								o =
									h.type === "file"
										? "fileSelections"
										: h.type === "code"
											? "codeSelections"
											: void 0;
							if (!o) {
								console.error("Can not pin this type", h.type);
								return;
							}
							c.chatDataService.setChatData("pinnedContexts", o, (f) => {
								if (h.type === "file") {
									const b = (f ?? []).filter(
										(s) => !(0, r.$Ac)(s.uri, h.item.uri),
									);
									return p ? [...b, h.item] : b;
								} else if (h.type === "code") {
									const b = (f ?? []).filter(
										(s) =>
											s.text !== h.item.text || !(0, r.$Ac)(s.uri, h.item.uri),
									);
									return p ? [...b, h.item] : b;
								}
								return f ?? [];
							}),
								c.telemetryService.publicLogCapture("aichat.pin.action", {
									type: h.type,
									pinned: p,
									item: h.item,
								});
						},
						g = (0, E.createMemo)(() => {
							switch (h.type) {
								case "file":
									return (
										c.chatDataService.chatData.pinnedContexts.fileSelections ??
										[]
									).some((o) => (0, r.$Ac)(o.uri, h.item.uri));
								case "code":
									return (
										c.chatDataService.chatData.pinnedContexts.codeSelections ??
										[]
									).some(
										(o) =>
											(0, r.$Ac)(o.uri, h.item.uri) && o.text === h.item.text,
									);
								default:
									return !1;
							}
						});
					return (() => {
						const p = u();
						return (
							p.addEventListener("click", (o) => {
								o.stopPropagation(), n();
							}),
							p.style.setProperty("cursor", "pointer"),
							p.style.setProperty("font-size", "1em"),
							(0, w.effect)(
								(o) => {
									const f = g()
											? "var(--vscode-input-foreground)"
											: "var(--vscode-editor-foreground)",
										b = g()
											? d.ThemeIcon.asClassName(C.$ak.pinnedDirty) +
												" clickable"
											: d.ThemeIcon.asClassName(C.$ak.pinned) + " clickable";
									return (
										f !== o._v$ &&
											((o._v$ = f) != null
												? p.style.setProperty("color", f)
												: p.style.removeProperty("color")),
										b !== o._v$2 && (0, i.className)(p, (o._v$2 = b)),
										o
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							p
						);
					})();
				}
			},
		),
		