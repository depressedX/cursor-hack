import '../../../../require.js';
import '../../../../exports.js';
import '../../lexical-text/api.js';
import '../../lexical-utils/api.js';
import '../../../solid/solid.js';
define(de[2607], he([1, 0, 1159, 304, 13]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.canShowPlaceholderFromCurrentEditorState = E),
				(e.useCanShowPlaceholder = C);
			function E(d) {
				return d
					.getEditorState()
					.read((0, t.$canShowPlaceholderCurry)(d.isComposing()));
			}
			function C(d) {
				const [m, r] = (0, w.createSignal)(E(d));
				return (
					(0, w.onMount)(() => {
						function u() {
							const a = E(d);
							r(a);
						}
						u(),
							(0, w.onCleanup)(
								(0, i.mergeRegister)(
									d.registerUpdateListener(() => {
										u();
									}),
									d.registerEditableListener(() => {
										u();
									}),
								),
							);
					}),
					m
				);
			}
		}),
		