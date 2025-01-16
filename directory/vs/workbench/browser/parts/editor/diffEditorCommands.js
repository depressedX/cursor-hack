define(
			de[1916],
			he([1, 0, 27, 19, 9, 125, 4, 11, 8, 43, 1338, 100, 296, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RVb =
						e.$QVb =
						e.$PVb =
						e.$OVb =
						e.$NVb =
						e.$MVb =
						e.$LVb =
						e.$KVb =
						e.$JVb =
							void 0),
					(e.$SVb = n),
					(e.$JVb = "toggle.diff.renderSideBySide"),
					(e.$KVb = "workbench.action.compareEditor.nextChange"),
					(e.$LVb = "workbench.action.compareEditor.previousChange"),
					(e.$MVb = "workbench.action.compareEditor.focusPrimarySide"),
					(e.$NVb = "workbench.action.compareEditor.focusSecondarySide"),
					(e.$OVb = "workbench.action.compareEditor.focusOtherSide"),
					(e.$PVb = "workbench.action.compareEditor.openSide"),
					(e.$QVb = "toggle.diff.ignoreTrimWhitespace"),
					(e.$RVb = "workbench.action.compareEditor.swapSides");
				function n() {
					r.$TX.registerCommandAndKeybindingRule({
						id: e.$KVb,
						weight: r.KeybindingWeight.WorkbenchContrib,
						when: a.$VPb,
						primary: t.KeyMod.Alt | t.KeyCode.F5,
						handler: (y, ...$) => p(y, $, !0),
					}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$KVb,
								title: (0, C.localize2)(3122, "Go to Next Change"),
							},
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$LVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: a.$VPb,
							primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.F5,
							handler: (y, ...$) => p(y, $, !1),
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$LVb,
								title: (0, C.localize2)(3123, "Go to Previous Change"),
							},
						});
					function g(y, $) {
						const v = y.get(c.$IY),
							S = $.length > 0 && $[0] instanceof w.URI ? $[0] : void 0;
						for (const I of [v.activeEditorPane, ...v.visibleEditorPanes])
							if (
								I instanceof u.$IVb &&
								(!S ||
									(I.input instanceof h.$GVb &&
										(0, i.$gh)(I.input.primary.resource, S)))
							)
								return I;
					}
					function p(y, $, v) {
						const S = g(y, $);
						S && S.getControl()?.goToDiff(v ? "next" : "previous");
					}
					let o;
					(function (y) {
						(y[(y.Original = 0)] = "Original"),
							(y[(y.Modified = 1)] = "Modified"),
							(y[(y.Toggle = 2)] = "Toggle");
					})(o || (o = {}));
					function f(y, $, v) {
						const S = g(y, $);
						if (S)
							switch (v) {
								case o.Original:
									S.getControl()?.getOriginalEditor().focus();
									break;
								case o.Modified:
									S.getControl()?.getModifiedEditor().focus();
									break;
								case o.Toggle:
									return S.getControl()?.getModifiedEditor().hasWidgetFocus()
										? f(y, $, o.Original)
										: f(y, $, o.Modified);
							}
					}
					function b(y, $) {
						const v = y.get(E.$XO),
							I = g(y, $)?.getControl()?.getModifiedEditor()?.getModel();
						if (!I) return;
						const T = "diffEditor.renderSideBySide",
							P = v.getValue(I.uri, T);
						v.updateValue(I.uri, T, !P);
					}
					function s(y, $) {
						const v = y.get(E.$XO),
							I = g(y, $)?.getControl()?.getModifiedEditor()?.getModel();
						if (!I) return;
						const T = "diffEditor.ignoreTrimWhitespace",
							P = v.getValue(I.uri, T);
						v.updateValue(I.uri, T, !P);
					}
					async function l(y, $) {
						const v = y.get(c.$IY),
							S = g(y, $),
							I = S?.group,
							T = S?.input;
						if (
							!S ||
							typeof I > "u" ||
							!(T instanceof h.$GVb) ||
							!T.modified.resource
						)
							return;
						const P = T.toUntyped({
							preserveViewState: I.id,
							preserveResource: !0,
						});
						P &&
							(T.modified.isModified() &&
								v.findEditors({
									resource: T.modified.resource,
									typeId: T.modified.typeId,
									editorId: T.modified.editorId,
								}).length === 0 &&
								(await v.openEditor(
									{
										...P.modified,
										options: {
											...P.modified.options,
											pinned: !0,
											inactive: !0,
										},
									},
									I,
								)),
							await v.replaceEditors(
								[
									{
										editor: T,
										replacement: {
											...P,
											original: P.modified,
											modified: P.original,
											options: { ...P.options, pinned: !0 },
										},
									},
								],
								I,
							));
					}
					r.$TX.registerCommandAndKeybindingRule({
						id: e.$JVb,
						weight: r.KeybindingWeight.WorkbenchContrib,
						when: void 0,
						primary: void 0,
						handler: (y, ...$) => b(y, $),
					}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$MVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Modified),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$NVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Original),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$OVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => f(y, $, o.Toggle),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$QVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => s(y, $),
						}),
						r.$TX.registerCommandAndKeybindingRule({
							id: e.$RVb,
							weight: r.KeybindingWeight.WorkbenchContrib,
							when: void 0,
							primary: void 0,
							handler: (y, ...$) => l(y, $),
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$JVb,
								title: (0, C.localize2)(3124, "Toggle Inline View"),
								category: (0, C.localize)(3120, null),
							},
							when: a.$WPb,
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$RVb,
								title: (0, C.localize2)(
									3125,
									"Swap Left and Right Editor Side",
								),
								category: (0, C.localize)(3121, null),
							},
							when: m.$Kj.and(a.$WPb, a.$PPb),
						});
				}
			},
		),
		