import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/theme/common/themeService.js';
define(de[3372], he([1, 0, 88, 101, 35]), function (ce /*require*/,
 e /*exports*/,
 t /*extHost.protocol*/,
 i /*extHostCustomers*/,
 w /*themeService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ioc = void 0);
			let E = class {
				constructor(d, m) {
					(this.a = m),
						(this.b = d.getProxy(t.$mbb.ExtHostTheming)),
						(this.c = this.a.onDidColorThemeChange((r) => {
							this.b.$onColorThemeChange(this.a.getColorTheme().type);
						})),
						this.b.$onColorThemeChange(this.a.getColorTheme().type);
				}
				dispose() {
					this.c.dispose();
				}
			};
			(e.$Ioc = E),
				(e.$Ioc = E =
					Ne([(0, i.$tmc)(t.$lbb.MainThreadTheming), j(1, w.$iP)], E));
		})
