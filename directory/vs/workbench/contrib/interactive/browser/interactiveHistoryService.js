define(de[987], he([1, 0, 647, 3, 59, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$xnc = e.$wnc = void 0),
				(e.$wnc = (0, E.$Mi)("IInteractiveHistoryService"));
			class C extends i.$1c {
				constructor() {
					super(), (this._history = new w.$Gc());
				}
				matchesCurrent(m, r) {
					const u = this._history.get(m);
					return u ? u.current() === r : !1;
				}
				addToHistory(m, r) {
					const u = this._history.get(m);
					if (!u) {
						this._history.set(m, new t.$Kob([r], 50));
						return;
					}
					u.resetCursor(), u.add(r);
				}
				getPreviousValue(m) {
					return this._history.get(m)?.previous() ?? null;
				}
				getNextValue(m) {
					return this._history.get(m)?.next() ?? null;
				}
				replaceLast(m, r) {
					const u = this._history.get(m);
					if (u) u.replaceLast(r), u.resetCursor();
					else {
						this._history.set(m, new t.$Kob([r], 50));
						return;
					}
				}
				clearHistory(m) {
					this._history.delete(m);
				}
				has(m) {
					return !!this._history.has(m);
				}
			}
			e.$xnc = C;
		}),
		