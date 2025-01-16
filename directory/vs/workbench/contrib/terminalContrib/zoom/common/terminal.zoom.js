define(de[1770], he([1, 0, 12, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$GVc = e.TerminalZoomSettingId = e.TerminalZoomCommandId = void 0);
			var w;
			(function (C) {
				(C.FontZoomIn = "workbench.action.terminal.fontZoomIn"),
					(C.FontZoomOut = "workbench.action.terminal.fontZoomOut"),
					(C.FontZoomReset = "workbench.action.terminal.fontZoomReset");
			})(w || (e.TerminalZoomCommandId = w = {}));
			var E;
			(function (C) {
				C.MouseWheelZoom = "terminal.integrated.mouseWheelZoom";
			})(E || (e.TerminalZoomSettingId = E = {})),
				(e.$GVc = {
					[E.MouseWheelZoom]: {
						markdownDescription: t.$m
							? (0, i.localize)(10608, null)
							: (0, i.localize)(10609, null),
						type: "boolean",
						default: !1,
					},
				});
		}),
		