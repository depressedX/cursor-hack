import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/docsPane.js';
define(de[4124], he([1, 0, 2, 36, 4123]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*docsPane*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$6Yc = E);
			function E({ container: C, onClose: d, instantiationService: m }) {
				return (0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$4Yc, {
							close: () => {
								d();
							},
						}),
					C,
					m,
				);
			}
		}),
		