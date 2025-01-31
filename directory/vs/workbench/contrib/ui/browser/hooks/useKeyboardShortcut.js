import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/solid.js';
import '../../../controlCommon/browser/solid.js';
define(de[385], he([1, 0, 13, 36]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*solid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5$b = void 0);
			const w = (E, C) => {
				const d = (0, i.$odc)(),
					[m, r] = (0, t.createSignal)(void 0),
					u = () =>
						C?.useDefaultKeybindingEvenIfNotActive
							? d.keybindingService.lookupDefaultKeybindings(E)
							: d.keybindingService.lookupKeybindings(E);
				return (
					(0, t.createEffect)(() => {
						const a = u().at(0)?.getLabel() ?? void 0;
						r(a);
						const h = d.keybindingService.onDidUpdateKeybindings(() => {
							const c = u().at(0)?.getLabel() ?? void 0;
							r(c);
						});
						(0, t.onCleanup)(() => {
							h.dispose();
						});
					}),
					m
				);
			};
			e.$5$b = w;
		})
