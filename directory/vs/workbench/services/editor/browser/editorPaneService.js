import '../../../../../require.js';
import '../../../../../exports.js';
import '../common/editorPaneService.js';
import '../../../browser/editor.js';
import '../../../../platform/instantiation/common/extensions.js';
define(de[3874], he([1, 0, 1798, 192, 20]), function (ce /*require*/,
 e /*exports*/,
 t /*editorPaneService*/,
 i /*editor*/,
 w /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$PAc = void 0);
			class E {
				constructor() {
					this.onWillInstantiateEditorPane = i.$vVb.onWillInstantiateEditorPane;
				}
				didInstantiateEditorPane(d) {
					return i.$vVb.didInstantiateEditorPane(d);
				}
			}
			(e.$PAc = E), (0, w.$lK)(t.$q6, E, w.InstantiationType.Delayed);
		}),
		