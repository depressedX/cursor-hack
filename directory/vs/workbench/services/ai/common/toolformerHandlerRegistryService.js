import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/position.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(
			de[1011],
			he([1, 0, 6, 3, 48, 20, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*position*/,
 E /*extensions*/,
 C /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u8b = e.WriteTerminalState = e.$t8b = e.$s8b = void 0),
					(e.$s8b = (0, C.$Mi)("toolformerHandlerRegistryService"));
				class d extends i.$1c {
					constructor(a) {
						super(),
							(this.toolformerId = a),
							(this.editHistory = []),
							(this.diffs = new Map()),
							(this.mostRecentEditSnapshot = void 0),
							(this.markersBefore = new Map()),
							(this.cursorPos = new w.$hL(1, 1)),
							(this.currentSessionIndex = -1),
							(this.terminalSessions = []),
							(this.a = this.D(new t.$re())),
							(this.onDidTerminalChangeEvent = this.a.event);
					}
					addTerminalResult(a) {
						this.a.fire(a);
					}
				}
				e.$t8b = d;
				var m;
				(function (u) {
					(u[(u.newTerminal = 0)] = "newTerminal"),
						(u[(u.writingCommand = 1)] = "writingCommand"),
						(u[(u.writingResponse = 2)] = "writingResponse"),
						(u[(u.endTerminal = 3)] = "endTerminal"),
						(u[(u.none = 4)] = "none");
				})(m || (e.WriteTerminalState = m = {}));
				let r = class extends i.$1c {
					constructor(a) {
						super(), (this.a = a), (this.toolHandlers = new Map());
					}
					registerHandler(a, h, c, n) {
						this.toolHandlers.set(a, {
							paramName: h,
							returnName: c,
							handler: this.a.createInstance(n),
						});
					}
					registerInstantiatedHandler(a, h, c, n) {
						this.toolHandlers.set(a, {
							paramName: h,
							returnName: c,
							handler: n,
						});
					}
				};
				(e.$u8b = r),
					(e.$u8b = r = Ne([j(0, C.$Li)], r)),
					(0, E.$lK)(e.$s8b, r, E.InstantiationType.Delayed);
			},
		)
