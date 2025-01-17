import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/buffer.js';
import '../../../../../base/common/resources.js';
import './devContainers.js';
import './openRemoteSsh.js';
import './otherPython.js';
import './python.js';
import './remoteSsh.js';
import './wsl.js';
import './basedPyright.js';
import '../../../../../base/common/semver/semver.js';
define(
			de[3516],
			he([1, 0, 76, 19, 3510, 3511, 3512, 3513, 3514, 3515, 3509, 464]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Icd = void 0),
					(e.$Jcd = h),
					(a = mt(a)),
					(e.$Icd = [d.$Ecd, C.$Dcd, u.$Hcd, r.$Gcd, w.$Bcd, m.$Fcd, E.$Ccd]);
				async function h(c, n, g, p, o) {
					if (n !== c.extensionId)
						throw new Error(
							`Extension ${n} does not match hotfix ${c.extensionId}`,
						);
					if (
						c.extensionMaxVersionToFixInclusive &&
						a.gt(g, c.extensionMaxVersionToFixInclusive)
					)
						return { isChanged: !1 };
					if (
						c.extensionMinVersionToFixInclusive &&
						a.lt(g, c.extensionMinVersionToFixInclusive)
					)
						return { isChanged: !1 };
					let f = !1,
						b = !1;
					return (
						await Promise.allSettled(
							c.fixes.map(async (s) => {
								try {
									const l = (0, i.$nh)(p, s.relativeFilePath),
										y = (await o.readFile(l)).value.toString();
									f && console.log("Rewriting extension file ", l.toString());
									const $ = s.replaceFn(y, { debugMode: f });
									$ !== y &&
										(console.info("Writing file", l.toString()),
										await o.writeFile(l, t.$Te.fromString($)),
										(b = !0));
								} catch (l) {
									throw (console.error(l), l);
								}
							}),
						),
						{ isChanged: b }
					);
				}
			},
		),
		