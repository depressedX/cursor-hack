import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../controlCommon/browser/solid.js';
import './components/Notepad.js';
define(de[4328], he([1, 0, 2, 36, 4327]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*solid*/,
 w /*Notepad*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mAc = E);
			function E(C, d, m, r) {
				return (0, i.$ndc)(
					() =>
						(0, t.createComponent)(w.$lAc, {
							notepadId: C,
							get onEscape() {
								return r.isInEditor ? void 0 : r.onClose;
							},
							get isInEditor() {
								return r.isInEditor;
							},
							get setEditor() {
								return r.setEditor;
							},
						}),
					d,
					m,
				);
			}
		}),
		