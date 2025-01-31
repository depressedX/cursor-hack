import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/BugBotEditor.js';
define(de[4261], he([1, 0, 2, 36, 4258]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*BugBotEditor*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3zc = void 0);
			const E = (C, d, m, r, u) =>
				(0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$2zc, {
							bugbot: m,
							get onClose() {
								return u?.onClose;
							},
							delegate: r,
						}),
					C,
					d,
					{ onClose: u?.onClose },
				);
			e.$3zc = E;
		})
