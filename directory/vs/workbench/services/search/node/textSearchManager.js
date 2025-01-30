import '../../../../../require.js';
import '../../../../../exports.js';
import '../../textfile/common/encoding.js';
import '../../../../base/node/pfs.js';
import '../common/textSearchManager.js';
define(Pe[309], Ne([1, 0, 617, 43, 308]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Pjd = void 0),
				(r = tt(r));
			class N extends S.$Bid {
				constructor(I, l, n = r, p = "searchProcess") {
					super(
						{ query: I, provider: l },
						{
							readdir: (y) => n.Promises.readdir(y.fsPath),
							toCanonicalName: (y) => (0, e.$2Y)(y),
						},
						p,
					);
				}
			}
			t.$Pjd = N;
		}),
		