define(
			de[676],
			he([1, 0, 139, 7, 75, 320, 253]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$18c = e.$Z8c = e.ApplyZoomTarget = void 0),
					(e.$28c = m),
					(e.$38c = u),
					(e.$48c = a);
				var d;
				(function (h) {
					(h[(h.ACTIVE_WINDOW = 1)] = "ACTIVE_WINDOW"),
						(h[(h.ALL_WINDOWS = 2)] = "ALL_WINDOWS");
				})(d || (e.ApplyZoomTarget = d = {})),
					(e.$Z8c = 8),
					(e.$18c = -8);
				function m(h, c) {
					h = Math.min(Math.max(h, e.$18c), e.$Z8c);
					const n = [];
					c === d.ACTIVE_WINDOW
						? n.push((0, i.$Ogb)())
						: c === d.ALL_WINDOWS
							? n.push(
									...Array.from((0, i.getWindows)()).map(({ window: g }) => g),
								)
							: n.push(c);
					for (const g of n)
						r(g)?.webFrame?.setZoomLevel(h),
							(0, t.$Kfb)((0, C.$DY)(h), g),
							(0, t.$Gfb)(h, g);
				}
				function r(h) {
					if (h === w.$Bfb) return { ipcRenderer: E.$P, webFrame: E.$R };
					{
						const c = h;
						if (c?.vscode?.ipcRenderer && c?.vscode?.webFrame) return c.vscode;
					}
				}
				function u(h) {
					m((0, t.$Hfb)(typeof h == "number" ? (0, i.$Ogb)() : h) + 1, h);
				}
				function a(h) {
					m((0, t.$Hfb)(typeof h == "number" ? (0, i.$Ogb)() : h) - 1, h);
				}
			},
		),
		