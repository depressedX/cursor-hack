define(de[3515], he([1, 0, 1851]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Gcd = void 0);
			function i(d, m) {
				return (
					(d = (0, t.$Acd)(
						d,
						'const t=o.readFileSync(s.join(e,"product.json")).toString();n=JSON.parse(t)',
						'const t=o.readFileSync(s.join(e,"product.json")).toString();n=JSON.parse(t);n.updateUrl="https://cursor.blob.core.windows.net/remote-releases"',
						m,
					)),
					(d = (0, t.$Acd)(d, "wslServer-dev.sh", "wslServer.sh", m)),
					d
				);
			}
			function w(d, m) {
				let r = d;
				return (
					(r = (0, t.$Acd)(
						r,
						'return`${e}/commit:${t}/server-${n}/${r||"insider"}`',
						"return`${e}/${t}/vscode-reh-${n}.tar.gz`",
						m,
					)),
					(r = (0, t.$Acd)(
						r,
						'const t=r.readFileSync(i.join(e,"product.json")).toString();o=JSON.parse(t)',
						'const t=r.readFileSync(i.join(e,"product.json")).toString();o=JSON.parse(t);o.updateUrl="https://cursor.blob.core.windows.net/remote-releases"',
						m,
					)),
					r
				);
			}
			function E(d, m) {
				return (0, t.$Acd)(
					d,
					'serverApplicationName:t.env.appCommit?"stable"===t.env.appQuality?"code-server":"insider"===t.env.appQuality?"code-server-insiders":"exploration"===t.env.appQuality?"code-server-exploration":"code-server-unknwown":"code-server-oss-dev",serverDataFolderName:t.env.appCommit?"stable"===t.env.appQuality?".vscode-server":"insider"===t.env.appQuality?".vscode-server-insiders":"exploration"===t.env.appQuality?".vscode-server-exploration":void 0:".vscode-server-oss-dev",updateUrl:"https://update.code.visualstudio.com"',
					'serverApplicationName:"cursor-server",serverDataFolderName:".cursor-server",updateUrl:"https://cursor.blob.core.windows.net/remote-releases"',
					m,
				);
			}
			function C(d, m) {
				return (
					(d = (0, t.$Acd)(
						d,
						'local_url="https://update.code.visualstudio.com/commit:$COMMIT/server-$INSTALL/$QUALITY"',
						'local_url="https://cursor.blob.core.windows.net/remote-releases/$COMMIT/vscode-reh-$INSTALL.tar.gz"',
						m,
					)),
					(d = (0, t.$Acd)(
						d,
						'local_url="https://update.code.visualstudio.com/commit:$COMMIT/server-linux-$PLATFORM/$QUALITY"',
						'local_url="https://cursor.blob.core.windows.net/remote-releases/$COMMIT/vscode-reh-linux-$PLATFORM.tar.gz"',
						m,
					)),
					d
				);
			}
			e.$Gcd = {
				extensionId: "ms-vscode-remote.remote-wsl",
				fixes: [
					{ relativeFilePath: "dist/browser/extension.js", replaceFn: E },
					{ relativeFilePath: "dist/node/extension.js", replaceFn: w },
					{ relativeFilePath: "dist/node/wslDaemon.js", replaceFn: i },
					{ relativeFilePath: "scripts/wslDownload.sh", replaceFn: C },
				],
			};
		}),
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
		