import '../../../../require.js';
import '../../../../exports.js';
import '../editorTheme.js';
define(de[2579], he([1, 0, 2558]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$xub = void 0);
			class i {
				constructor(E, C, d) {
					(this.configuration = E),
						(this.theme = new t.$Esb(C)),
						(this.viewModel = d),
						(this.viewLayout = d.viewLayout);
				}
				addEventHandler(E) {
					this.viewModel.addViewEventHandler(E);
				}
				removeEventHandler(E) {
					this.viewModel.removeViewEventHandler(E);
				}
			}
			e.$xub = i;
		}),
		