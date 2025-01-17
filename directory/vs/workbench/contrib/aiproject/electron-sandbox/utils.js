import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/storage/common/storage.js';
define(de[1716], he([1, 0, 21]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jed = i),
				(e.$ked = w),
				(e.$led = E);
			function i(C, d, m, r = "project") {
				const a = Date.now().toString();
				m.store(
					`${r}Pane`,
					C.toString(),
					t.StorageScope.APPLICATION,
					t.StorageTarget.MACHINE,
				),
					m.store(
						`${r}PaneTime`,
						a,
						t.StorageScope.APPLICATION,
						t.StorageTarget.MACHINE,
					),
					m.store(
						`${r}PaneQuery`,
						d,
						t.StorageScope.APPLICATION,
						t.StorageTarget.MACHINE,
					);
			}
			function w(C, d, m = "project") {
				const r = d.get(`${m}PaneTime`, t.StorageScope.APPLICATION, ""),
					u = Date.now();
				return !!(r && u - parseInt(r) < 1e4);
			}
			function E(C, d = "project") {
				return C.get(`${d}PaneQuery`, t.StorageScope.APPLICATION, "");
			}
		}),
		