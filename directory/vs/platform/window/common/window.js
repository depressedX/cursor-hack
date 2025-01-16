define(de[253], he([1, 0, 12]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AY =
					e.CustomTitleBarVisibility =
					e.TitlebarStyle =
					e.TitleBarSetting =
					e.$rY =
						void 0),
				(e.$sY = i),
				(e.$tY = w),
				(e.$uY = E),
				(e.$vY = C),
				(e.$wY = d),
				(e.$xY = a),
				(e.$yY = h),
				(e.$zY = c),
				(e.$BY = n),
				(e.$CY = g),
				(e.$DY = p),
				(e.$rY = { WIDTH: 400, WIDTH_WITH_VERTICAL_PANEL: 600, HEIGHT: 270 });
			function i(o) {
				return typeof o.parentId == "number";
			}
			function w(o) {
				return !!o.workspaceUri;
			}
			function E(o) {
				return !!o.folderUri;
			}
			function C(o) {
				return !!o.fileUri;
			}
			function d(o) {
				const f = h(o),
					b = o.getValue("window.menuBarVisibility");
				return b === "default" || (f && b === "compact") || (t.$m && t.$p)
					? "classic"
					: b;
			}
			var m;
			(function (o) {
				(o.TITLE_BAR_STYLE = "window.titleBarStyle"),
					(o.CUSTOM_TITLE_BAR_VISIBILITY = "window.customTitleBarVisibility");
			})(m || (e.TitleBarSetting = m = {}));
			var r;
			(function (o) {
				(o.NATIVE = "native"), (o.CUSTOM = "custom");
			})(r || (e.TitlebarStyle = r = {}));
			var u;
			(function (o) {
				(o.AUTO = "auto"), (o.WINDOWED = "windowed"), (o.NEVER = "never");
			})(u || (e.CustomTitleBarVisibility = u = {}));
			function a(o, f) {
				return !0;
			}
			function h(o, f) {
				return f || (f = c(o)), f === r.NATIVE;
			}
			function c(o) {
				if (t.$r) return r.CUSTOM;
				const f = o.getValue("window");
				if (f) {
					if (
						(t.$m && f.nativeTabs === !0) ||
						(t.$m && f.nativeFullScreen === !1)
					)
						return r.NATIVE;
					const l = f.titleBarStyle;
					if (l === r.NATIVE || l === r.CUSTOM) return l;
				}
				return t.$n ? r.NATIVE : r.CUSTOM;
			}
			e.$AY = 35;
			function n(o) {
				if (t.$m || t.$r || h(o)) return !1;
				if (t.$n) {
					const f = o.getValue("window.experimentalControlOverlay");
					if (typeof f == "boolean") return f;
				}
				return !0;
			}
			function g(o) {
				const f = o.getValue("window");
				return !f || typeof f.nativeFullScreen != "boolean" || f.nativeTabs
					? !0
					: f.nativeFullScreen !== !1;
			}
			function p(o = 0) {
				return Math.pow(1.2, o);
			}
		}),
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
		