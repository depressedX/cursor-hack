define(
			de[1279],
			he([1, 0, 45, 3, 8, 137, 20, 58, 10]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_dc = e.$$dc = e.$0dc = e.$9dc = void 0),
					(e.$9dc = new w.$5j("editcontextbarcursor", !1)),
					(e.$0dc = new w.$5j("bigCommandKEnabled", !1)),
					(e.$$dc = new w.$5j("cppSuggestion", !1));
				let r = class extends i.$1c {
					constructor(a, h, c) {
						super(),
							(this.c = a),
							(this.f = h),
							(this.g = c),
							(this.b = new Map()),
							(this.a = this.D(this.c.createScoped(this)));
					}
					bindInitialKeys() {
						this._bindKey(e.$9dc, "promptBars"), this._bindCppSuggestionKey();
					}
					_bindKeyPersistent(a, h) {
						const c = a.bindTo(this.f);
						c.set(this.c.applicationUserPersistentStorage[h]),
							this.a.onChangeEffect({
								deps: [() => this.c.applicationUserPersistentStorage[h]],
								onChange: () => {
									c.set(this.c.applicationUserPersistentStorage[h]);
								},
							});
					}
					_bindKey(a, h) {
						const c = a.bindTo(this.f);
						this.a.onChangeEffect({
							deps: [() => this.c.nonPersistentStorage[h]],
							onChange: () => {
								c.set(this.c.nonPersistentStorage[h]);
							},
						});
					}
					_bindCppSuggestionKey() {
						const a = e.$$dc.bindTo(this.f);
						this.a.onChangeEffect({
							deps: [() => this.c.nonPersistentStorage.cppState?.suggestion],
							onChange: () => {
								const h = this.g.getValue(d.$zW) === !0;
								a.set(
									this.c.nonPersistentStorage.cppState?.suggestion !== void 0 &&
										h,
								);
							},
						});
					}
					getKey(a) {
						if (this.b.has(a)) return this.b.get(a);
						const h = new w.$5j(a, this.c.nonPersistentStorage[a]),
							c = h.bindTo(this.f);
						return (
							this.a.onChangeEffect({
								deps: [() => this.c.nonPersistentStorage[a]],
								onChange: () => {
									c.set(this.c.nonPersistentStorage[a]);
								},
							}),
							this.b.set(a, h),
							h
						);
					}
				};
				(e.$_dc = r),
					(e.$_dc = r = Ne([j(0, t.$0zb), j(1, w.$6j), j(2, m.$gj)], r)),
					(0, C.$lK)(E.$mfc, r, C.InstantiationType.Delayed);
			},
		),
		