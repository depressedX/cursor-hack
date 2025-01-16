define(
			de[2695],
			he([1, 0, 33, 6, 27, 9, 48, 17, 104, 74, 1542]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4wb = void 0),
					(e.$5wb = h),
					(u = mt(u));
				class a {
					static {
						this.CtrlCmd = w.KeyMod.CtrlCmd;
					}
					static {
						this.Shift = w.KeyMod.Shift;
					}
					static {
						this.Alt = w.KeyMod.Alt;
					}
					static {
						this.WinCtrl = w.KeyMod.WinCtrl;
					}
					static chord(n, g) {
						return (0, w.$os)(n, g);
					}
				}
				e.$4wb = a;
				function h() {
					return {
						editor: void 0,
						languages: void 0,
						CancellationTokenSource: t.$Ce,
						Emitter: i.$re,
						KeyCode: u.KeyCode,
						KeyMod: a,
						Position: C.$hL,
						Range: d.$iL,
						Selection: m.$kL,
						SelectionDirection: u.SelectionDirection,
						MarkerSeverity: u.MarkerSeverity,
						MarkerTag: u.MarkerTag,
						Uri: E.URI,
						Token: r.$bM,
					};
				}
			},
		),
		