import '../../../../require.js';
import '../../../../exports.js';
import './extHostTypes.js';
import './extHostRpcService.js';
import '../../../base/common/event.js';
define(Pe[560], Ne([1, 0, 11, 21, 4]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$$id = void 0);
			let N = class {
				constructor(I) {
					(this.a = new e.$Qcb(e.ColorThemeKind.Dark)), (this.b = new S.$re());
				}
				get activeColorTheme() {
					return this.a;
				}
				$onColorThemeChange(I) {
					let l;
					switch (I) {
						case "light":
							l = e.ColorThemeKind.Light;
							break;
						case "hcDark":
							l = e.ColorThemeKind.HighContrast;
							break;
						case "hcLight":
							l = e.ColorThemeKind.HighContrastLight;
							break;
						default:
							l = e.ColorThemeKind.Dark;
					}
					(this.a = new e.$Qcb(l)), this.b.fire(this.a);
				}
				get onDidChangeActiveColorTheme() {
					return this.b.event;
				}
			};
			(t.$$id = N), (t.$$id = N = wt([rt(0, r.$08)], N));
		}),
		